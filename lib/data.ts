import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import xss from "xss";
import fs from "node:fs";

export interface Image {
  name: string;
}

export interface Meal {
  id: string;
  title: string;
  slug: string;
  image: any;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

export async function fetchMeals() {
  noStore(); // Prevent the response from being cached
  try {
    const data = await sql<Meal>`SELECT * FROM meals ORDER BY title ASC`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch meals.");
  }
}

export async function fetchMealBySlug(slug: string) {
  noStore(); // Prevent the response from being cached
  try {
    const data = await sql<Meal>`SELECT * FROM meals WHERE slug = ${slug}`;

    const meal = data.rows.map((meal) => ({
      ...meal,
    }));

    return meal[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch meals.");
  }
}

export async function saveMeal(meal: Meal) {
  meal.instructions = xss(meal.instructions);

  try {
    if (meal.image instanceof File) {
      const fileName = meal.image.name;
      const stream = fs.createWriteStream(`public/images/${fileName}`);
      const bufferedImage = await meal.image.arrayBuffer();
      stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
          throw new Error("Saving image failed!");
        }
      });
      meal.image = `/images/${fileName}`;
    }
    const data = await sql`
      INSERT INTO meals (id, title, slug, image, summary, instructions, creator, creator_email)
      VALUES (${meal.id}, ${meal.title}, ${meal.slug}, ${meal.image}, ${meal.summary}, ${meal.instructions}, ${meal.creator}, ${meal.creator_email})
      RETURNING *;`;

    return data.rows[0];
  } catch (error) {
    console.error("Error in saveMeal:", error);
    throw error;
  }
}

async function fileToBuffer(file: File): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        resolve(Buffer.from(reader.result as ArrayBuffer));
      } else {
        reject(new Error("Failed to read file"));
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(file);
  });
}

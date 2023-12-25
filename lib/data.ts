import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export interface Meal {
  id: string;
  title: string;
  slug: string;
  image: string;
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

// Additional functions to fetch meals based on certain criteria can be added here
// For example, fetchMealById, fetchMealsByCreator, etc.

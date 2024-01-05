"use server";
import { saveMeal } from "@/lib/data";
import { v4 as uuidv4 } from "uuid"; // UUID library for generating unique IDs
import slugify from "slugify";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export interface MealMessage {
  message: string | null;
}

function isInvalidText(text: string): boolean {
  return !text || text.trim() === "";
}

export async function shareMeal(
  prevState: any,
  formData: { get: (arg0: string) => any },
): Promise<MealMessage> {
  const id = uuidv4();
  const slug = slugify(formData.get("title") + id);
  const meal = {
    id,
    slug,
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid Input!",
    };
  }
  await saveMeal(meal);
  revalidatePath("/meals", "layout");
  redirect("/meals");
}

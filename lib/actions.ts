"use server";
import { saveMeal } from "@/lib/data";
import { v4 as uuidv4 } from "uuid"; // UUID library for generating unique IDs
import slugify from "slugify";
import { redirect } from "next/navigation";

export async function shareMeal(formData: { get: (arg0: string) => any }) {
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
  await saveMeal(meal);
  redirect("/meals");
}

import { Metadata, ResolvingMetadata } from "next";
import { fetchMealBySlug } from "@/lib/data";
import MainHeader from "@/components/main-header/main-header";
import { notFound } from "next/navigation";

export async function generateMetadata(
  { params }: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const meal = await fetchMealBySlug(params.mealId);
  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

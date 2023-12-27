import { fetchMeals, Meal } from "@/lib/data";
import MealsGrid from "@/components/meals/meals-grid";

export default async function Meals() {
  const meals: Meal[] = await fetchMeals();
  return <MealsGrid meals={meals} />;
}

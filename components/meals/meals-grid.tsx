import classes from "./meals-grid.module.css";
import MealItem, { MealItemProps } from "@/components/meals/meal-item";
import { fetchMeals, Meal } from "@/lib/data";

export default async function MealsGrid() {
  const meals: Meal[] = await fetchMeals();
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

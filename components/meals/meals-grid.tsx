"use client";
import classes from "./meals-grid.module.css";
import MealItem, { MealItemProps } from "@/components/meals/meal-item";

export interface MealsGridProp {
  meals: MealItemProps[];
}
export default function MealsGrid(props: MealsGridProp) {
  const { meals } = props;
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

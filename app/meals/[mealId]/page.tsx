import classes from "./page.module.css";
import Image from "next/image";
import { fetchMealBySlug } from "@/lib/data";

export interface MealDetailsPageProps {
  mealId: string;
}

export default async function MealDetailsPage({
  params,
}: {
  params: MealDetailsPageProps;
}) {
  const meal = await fetchMealBySlug(params.mealId);
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill alt={meal.title} src={meal.image} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}

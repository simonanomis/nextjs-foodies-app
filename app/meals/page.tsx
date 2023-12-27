import Link from "next/link";
import classes from "./page.module.css";
import Meals from "@/components/meals/meals";
import { Suspense } from "react";
import { Spin } from "antd";

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, created{" "}
          <span className={classes.highlight}> by You</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share your favourite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={
            <p className={classes.loading}>
              <Spin />
              Fetching meals...
            </p>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

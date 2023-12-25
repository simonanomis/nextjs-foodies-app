import Link from "next/link";
import Image from "next/image";

import classes from "./meal-item.module.css";

export interface MealItemProps {
  id: string;
  title: string;
  slug: string;
  image: string;
  instructions: string;
  summary: string;
  creator: string;
  creator_email: string;
}
export default function MealItem(props: MealItemProps) {
  const { title, slug, image, summary, creator } = props;
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}

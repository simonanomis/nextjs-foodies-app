import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Meal Not Found</h1>
      <p>Could not find requested resource or page</p>
      <Link href="/meals">Return to Meals</Link>
    </main>
  );
}

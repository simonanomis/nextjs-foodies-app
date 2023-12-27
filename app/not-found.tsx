import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Not Found</h1>
      <p>Could not find requested resource or page</p>
      <Link href="/">Return Home</Link>
    </main>
  );
}

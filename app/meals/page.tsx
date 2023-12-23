import Link from "next/link";

export default function MealsPage() {
  return (
      <main>
          <h1 style={{color: 'white', textAlign: 'center'}}>
              Meals Page
          </h1>
          <p><Link href={"/meals/burger"}>Burger</Link></p>
          <p><Link href={"/meals/sarma"}>Sarma</Link></p>
          <p><Link href={"/meals/pizza"}>Pizza</Link></p>
      </main>
  )
}

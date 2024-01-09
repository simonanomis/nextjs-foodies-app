import classes from "./page.module.css";
import ProductsList from "@/components/products/products-list";
import { getProductsData } from "@/components/products/fetch-products";

/*
Here we want to fetch the data before Nextjs
pre-render this components page
Here first will execute getStaticProps and then will execute the component function
*/
export interface Product {
  id: string;
  title: string;
  description: string;
}
export interface ProductsPageProps {
  products: Product[];
}
export default function ProductsPage(props: ProductsPageProps) {
  const products = getProductsData();

  return (
    <>
      <header className={classes.header}>
        <h1>
          Do not miss the offers:{" "}
          <span className={classes.highlight}>Products</span>
        </h1>
        <p>Join our satisfied customer community</p>
      </header>

      <main className={classes.main}>
        <h2>List of Products</h2>
        <ul className={classes.perks}>
          <ProductsList products={products} />
        </ul>
      </main>
    </>
  );
}
// This function can be named anything
// async function getProducts() {
//   const res = await fetch(`/data/mock_products_backend.json`);
//   return await res.json();
// }

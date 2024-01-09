"use client";
import { useEffect, useState } from "react";
import { mockProductsData } from "@/data/mock_products_backend";

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
export interface ProductsListProps {
  products: any;
}
export default function ProductsList() {
  const [data, setData] = useState<Product[]>([]);
  const productsData = mockProductsData;
  useEffect(() => {
    setData(productsData.products);
  }, []);

  return (
    <>
      {data.map((product: Product) => (
        <li key={product.id}>
          <p>{product.title}</p>
          <p>{product.description}</p>
        </li>
      ))}
    </>
  );
}
// This function can be named anything
// async function getProducts() {
//   const res = await fetch(`/data/mock_products_backend.json`);
//   return await res.json();
// }

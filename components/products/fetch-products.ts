import { ProductsPageProps } from "@/app/products/page";
import fs from "fs/promises";
import path from "path";
import { PathLike } from "node:fs";

export async function getProductsData(): Promise<ProductsPageProps> {
  const filePath: PathLike | fs.FileHandle = path.join(
    process.cwd(),
    "data",
    "mock_products_backend.json",
  );
  const jsonData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(jsonData);
  console.log("data", data);
  return { products: data.products };
}

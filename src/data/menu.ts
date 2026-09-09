import raw from "./menu.json";

import type { Category, Product } from "@/types/menu";

export const categoryMeta = raw.categoryMeta as Record<string, Category>;

export const products: Product[] = raw.products.map((item) => ({
  id: item[0],
  name: item[1],
  price: item[2],
  category: item[3],
  description: item[4],
}));

export const categories = Object.entries(categoryMeta).map(
  ([slug, data]) => ({
    slug,
    ...data,
  })
);

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}
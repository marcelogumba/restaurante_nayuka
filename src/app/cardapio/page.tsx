import MenuBrowser from "@/components/MenuBrowser";
import { categories, products } from "@/data/menu";

export default function CardapioPage() {
  return <MenuBrowser categories={categories} products={products} />;
}

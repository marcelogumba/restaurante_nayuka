
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/types/menu";

type ProductListItemProps = {
  product: Product;
};

export default function ProductListItem({
  product,
}: ProductListItemProps) {
  return (
    <Link
      href={`/produto/${product.id}`}
      className="product-list-item"
      aria-label={`Ver detalhes de ${product.name}`}
    >
      <div className="product-list-info">
        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <span className="product-list-link">
          Ver detalhes
          <ArrowUpRight size={14} />
        </span>
      </div>

      <div className="product-list-price">
        <span>{product.price}</span>
        <ArrowUpRight
          className="product-list-arrow"
          size={18}
        />
      </div>
    </Link>
  );
}

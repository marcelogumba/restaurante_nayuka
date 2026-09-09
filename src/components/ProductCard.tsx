import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Product } from '@/types/menu'
import { categoryMeta } from '@/data/menu'

const productImages: Record<string, string> = {
  'grelhada-mista-casa': '/images/categories/categoria-8.jpg',
  'grelhada-mista-plus': '/images/categories/categoria-8.jpg',
  'grelhada-mil-maravilhas': '/images/categories/categoria-8.jpg',
  'hamburguer-simples': '/images/categories/categoria-7.jpg',
  'hamburguer-composto': '/images/categories/categoria-7.jpg',
  'churrasco-casa': '/images/categories/categoria-5.jpg',
  'frango-inteiro': '/images/categories/categoria-5.jpg',
  chourico: '/images/categories/categoria-5.jpg',
  bitoque: '/images/categories/categoria-2.jpg',
  'picanha-brasileira': '/images/categories/categoria-2.jpg',
  'funje-peito': '/images/categories/categoria-3.jpg',
  'champanhe-jcl': '/images/categories/categoria-4.jpg',
  moscato: '/images/categories/categoria-4.jpg',
  'cerveja-lata': '/images/categories/categoria-6.jpg',
}

export function ProductCard({ product }: { product: Product }) {
  const image = productImages[product.id]

  return (
    <Link
      href={`/produto/${product.id}`}
      className="product-card"
    >
      <div className="product-image">
        {image ? (
          <Image
            src={image}
            alt={product.name}
            fill
            sizes="(max-width: 700px) 50vw, 280px"
          />
        ) : (
          <span>Nayuka</span>
        )}

        <span className="product-arrow" aria-hidden="true">
          <ArrowUpRight size={17} />
        </span>
      </div>

      <div className="product-card-body">
        <p className="product-category">
          {categoryMeta[product.category]?.name ?? 'Nayuka'}
        </p>

        <h3>{product.name}</h3>

        <div className="product-meta">
          <span>{product.price}</span>
          <span>Ver detalhe</span>
        </div>
      </div>
    </Link>
  )
}
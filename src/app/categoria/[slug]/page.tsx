
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { categories, categoryMeta, products } from "@/data/menu";
import ProductListItem from "@/components/ProductListItem";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;

  const category = categoryMeta[slug];

  if (!category) {
    notFound();
  }

  const items = products.filter(
    (product) => product.category === slug
  );

  const imageName = category.image.split("/").pop();

  return (
    <section className="section category-page">
      <div className="container">

        {/* Voltar ao cardápio */}
        <Link className="back-link" href="/cardapio">
          <ArrowLeft size={16} />
          Voltar ao cardápio
        </Link>

        {/* Cabeçalho da categoria */}
        <div className="category-hero">
          <div className="category-hero-copy">
            <p className="eyebrow">NAYUKA · CATEGORIAS</p>

            <h1>{category.name}</h1>

            <p>{category.subtitle}</p>

            <span className="category-item-count">
              {items.length} opções disponíveis
            </span>
          </div>

          <div className="category-hero-image">
            {imageName && (
              <Image
                src={`/images/categories/${imageName}`}
                alt={category.name}
                fill
                priority
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            )}
          </div>
        </div>

        {/* Lista de produtos */}
        <div className="category-products">

          <div className="category-products-heading">
            <div>
              <p className="eyebrow">DA NOSSA COZINHA</p>
              <h2>Escolha o seu favorito.</h2>
            </div>

            <span>
              {items.length} {items.length === 1 ? "item" : "itens"}
            </span>
          </div>

          <div className="product-list">
            {items.length > 0 ? (
              items.map((product) => (
                <ProductListItem
                  key={product.id}
                  product={product}
                />
              ))
            ) : (
              <p className="empty-category">
                Ainda não existem produtos nesta categoria.
              </p>
            )}
          </div>

        </div>

        {/* Navegação */}
        <Link className="next-category" href="/cardapio">
          Explorar todas as categorias
          <ArrowRight size={17} />
        </Link>

      </div>
    </section>
  );
}

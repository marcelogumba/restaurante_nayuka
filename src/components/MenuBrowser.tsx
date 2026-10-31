
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowRight } from "lucide-react";

import type { Category, Product } from "@/types/menu";
import ProductListItem from "@/components/ProductListItem";

type MenuBrowserProps = {
  categories: (Category & { slug: string })[];
  products: Product[];
};

export default function MenuBrowser({
  categories,
  products,
}: MenuBrowserProps) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("todos");

  const filteredProducts = useMemo(() => {
    const search = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        active === "todos" || product.category === active;

      const matchesSearch =
        !search ||
        `${product.name} ${product.description}`
          .toLowerCase()
          .includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [active, query, products]);

  const visibleCategories = useMemo(() => {
    return active === "todos"
      ? categories
      : categories.filter((category) => category.slug === active);
  }, [active, categories]);

  const getCategoryProducts = (slug: string) => {
    return filteredProducts.filter(
      (product) => product.category === slug
    );
  };

  return (
    <section className="menu-page section">
      <div className="container">

        {/* CABEÇALHO */}
        <div className="page-heading">
          <p className="eyebrow">NAYUKA · SABORES DA ALMA</p>

          <h1>Escolha o que combina com o seu momento.</h1>

          <p>
            Explore os nossos sabores, descubra os favoritos
            da casa e encontre algo especial para si.
          </p>
        </div>

        {/* PESQUISA E CATEGORIAS */}
        <div className="menu-tools">

          <div className="search-box">
            <Search size={18} />

            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Pesquisar no cardápio..."
              aria-label="Pesquisar produtos"
            />

            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Limpar pesquisa"
                type="button"
              >
                <X size={17} />
              </button>
            )}
          </div>

          <div className="category-tabs">
            <button
              type="button"
              className={active === "todos" ? "active" : ""}
              onClick={() => setActive("todos")}
            >
              Todos
            </button>

            {categories.map((category) => (
              <button
                type="button"
                key={category.slug}
                className={
                  active === category.slug ? "active" : ""
                }
                onClick={() => setActive(category.slug)}
              >
                {category.name}
              </button>
            ))}
          </div>

        </div>

        {/* RESULTADOS */}
        <div className="results-label">
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "produto encontrado" : "produtos encontrados"}
        </div>

        {/* CATEGORIAS E LISTAS */}
        <div className="menu-category-groups">

          {visibleCategories.map((category) => {
            const categoryProducts = getCategoryProducts(
              category.slug
            );

            // Não mostrar categorias sem resultados na pesquisa
            if (categoryProducts.length === 0) {
              return null;
            }

            const imageName = category.image.split("/").pop();

            return (
              <section
                className="menu-category-section"
                key={category.slug}
                id={category.slug}
              >

                {/* IMAGEM E INFORMAÇÕES DA CATEGORIA */}
                <div className="menu-category-header">

                  <div className="menu-category-image">
                    {imageName && (
                      <Image
                        src={`/images/categories/${imageName}`}
                        alt={category.name}
                        fill
                        sizes="(max-width: 700px) 100vw, 40vw"
                      />
                    )}
                  </div>

                  <div className="menu-category-info">
                    <p className="eyebrow">CATEGORIA NAYUKA</p>

                    <h2>{category.name}</h2>

                    <p>{category.subtitle}</p>

                    <span>
                      {categoryProducts.length}{" "}
                      {categoryProducts.length === 1
                        ? "opção disponível"
                        : "opções disponíveis"}
                    </span>

                    {active === "todos" && (
                      <Link
                        href={`/categoria/${category.slug}`}
                        className="menu-category-link"
                      >
                        Explorar categoria
                        <ArrowRight size={15} />
                      </Link>
                    )}
                  </div>

                </div>

                {/* LISTA DE PRODUTOS */}
                <div className="product-list">
                  {categoryProducts.map((product) => (
                    <ProductListItem
                      key={product.id}
                      product={product}
                    />
                  ))}
                </div>

              </section>
            );
          })}

          {/* ESTADO VAZIO */}
          {filteredProducts.length === 0 && (
            <div className="menu-empty">
              <Search size={30} />

              <h2>Nenhum produto encontrado.</h2>

              <p>
                Experimente pesquisar por outro nome ou
                selecionar uma categoria diferente.
              </p>

              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setActive("todos");
                }}
              >
                Limpar filtros
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

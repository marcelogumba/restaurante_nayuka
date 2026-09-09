"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { Category, Product } from "@/types/menu";
import { ProductCard } from "@/components/ProductCard";

export default function MenuBrowser({ categories, products }: { categories: (Category & {slug:string})[]; products: Product[] }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("todos");
  const filtered = useMemo(() => products.filter((p) => {
    const matchesCategory = active === "todos" || p.category === active;
    const q = query.trim().toLowerCase();
    return matchesCategory && (!q || `${p.name} ${p.description}`.toLowerCase().includes(q));
  }), [active, query, products]);
  return <section className="menu-page section"><div className="container">
    <div className="page-heading"><p className="eyebrow">CARDÁPIO NAYUKA</p><h1>Escolha o que combina com o seu momento.</h1><p>Explore por categoria ou pesquise diretamente pelo nome.</p></div>
    <div className="menu-tools"><div className="search-box"><Search size={18}/><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Pesquisar no cardápio..." />{query && <button onClick={()=>setQuery("")} aria-label="Limpar pesquisa"><X size={17}/></button>}</div><div className="category-tabs"><button className={active === "todos" ? "active" : ""} onClick={()=>setActive("todos")}>Todos</button>{categories.map(c=><button key={c.slug} className={active===c.slug?"active":""} onClick={()=>setActive(c.slug)}>{c.name}</button>)}</div></div>
    <div className="results-label">{filtered.length} {filtered.length === 1 ? "item" : "itens"}</div>
    <div className="product-grid">{filtered.map(p=><ProductCard key={p.id} product={p}/>)}</div>
  </div></section>;
}

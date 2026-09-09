import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { categories, categoryMeta, products } from "@/data/menu";
import { ProductCard } from "@/components/ProductCard";
import { notFound } from "next/navigation";

export function generateStaticParams() { return categories.map(c => ({slug:c.slug})); }
export default async function CategoryPage({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params; const category = categoryMeta[slug]; if (!category) notFound();
  const items = products.filter(p=>p.category===slug);
  return <section className="section category-page"><div className="container"><Link className="back-link" href="/cardapio"><ArrowLeft size={16}/> Voltar ao cardápio</Link><div className="category-hero"><div><p className="eyebrow">CATEGORIA</p><h1>{category.name}</h1><p>{category.subtitle}</p></div><div className="category-hero-image"><Image src={`/images/categories/${category.image.split('/').pop()}`} alt="" fill sizes="(max-width: 800px) 100vw, 40vw"/></div></div><div className="results-label">{items.length} itens</div><div className="product-grid">{items.map(p=><ProductCard key={p.id} product={p}/>)}</div><Link className="next-category" href="/cardapio">Explorar todas as categorias <ArrowRight size={17}/></Link></div></section>;
}

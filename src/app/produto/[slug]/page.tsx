import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { getProduct, products, categoryMeta } from "@/data/menu";
import { whatsappUrl } from "@/lib/whatsapp";
import { notFound } from "next/navigation";

export function generateStaticParams() { return products.map(p => ({slug:p.id})); }
const images: Record<string,string> = { "bitoque":"/images/categories/categoria-2.jpg", "picanha-brasileira":"/images/categories/categoria-2.jpg", "funje-peito":"/images/categories/categoria-3.jpg", "champanhe-jcl":"/images/categories/categoria-4.jpg", "moscato":"/images/categories/categoria-4.jpg", "churrasco-casa":"/images/categories/categoria-5.jpg", "cerveja-lata":"/images/categories/categoria-6.jpg", "hamburguer-simples":"/images/categories/categoria-7.jpg", "grelhada-mista-casa":"/images/categories/categoria-8.jpg" };
export default async function ProductPage({ params }: { params: Promise<{slug:string}> }) {
 const {slug}=await params; const product=getProduct(slug); if(!product) notFound(); const image=images[product.id];
 const message=`Olá, Nayuka! Gostaria de pedir: ${product.name} — ${product.price}.`;
 return <section className="section product-page"><div className="container"><Link className="back-link" href={`/categoria/${product.category}`}><ArrowLeft size={16}/> Voltar para {categoryMeta[product.category]?.name}</Link><div className="product-detail"><div className="product-detail-image">{image?<Image src={image} alt={product.name} fill sizes="(max-width: 800px) 100vw, 55vw"/>:<span>Nayuka</span>}</div><div className="product-detail-copy"><p className="eyebrow">{categoryMeta[product.category]?.name}</p><h1>{product.name}</h1><p className="detail-price">{product.price}</p><p className="detail-description">{product.description}</p><a className="button button-dark" href={whatsappUrl(message)} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Pedir pelo WhatsApp</a><p className="detail-note">Disponibilidade e preço podem variar. Confirme diretamente com a Nayuka.</p></div></div><Link className="next-category" href="/cardapio">Ver mais opções <ArrowRight size={17}/></Link></div></section>;
}

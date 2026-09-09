import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Clock3, MapPin, MessageCircle } from "lucide-react";
import { categories, products } from "@/data/menu";
import { ProductCard } from "@/components/ProductCard";
import { whatsappUrl } from "@/lib/whatsapp";

export default function Home() {
  const featured = products.slice(0, 6);
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">LUENA · ANGOLA</p>
            <h1>Sabores que ficam na memória.</h1>
            <p className="hero-lead">Uma mesa com identidade, sabores da casa e a alma de quem gosta de receber bem.</p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/cardapio">Explorar cardápio <ArrowRight size={17}/></Link>
              <a className="button button-light" href={whatsappUrl("Olá, Nayuka! Gostaria de fazer um pedido.")} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Pedir pelo WhatsApp</a>
            </div>
            <div className="hero-info"><span><Clock3 size={15}/> 08:00–01:00</span><span><MapPin size={15}/> Rotunda do Aeroporto</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-card hero-card-main"><Image src="/images/categories/categoria-2.jpg" alt="Pratos Nayuka" fill priority sizes="(max-width: 900px) 90vw, 48vw" /></div>
            <div className="hero-card hero-card-small"><Image src="/images/categories/categoria-3.jpg" alt="Funje Nayuka" fill sizes="240px" /></div>
            <div className="hero-stamp">SABORES<br/>DA ALMA</div>
          </div>
        </div>
        <div className="hero-scroll"><ArrowDown size={15}/> Descubra a Nayuka</div>
      </section>

      <section className="section categories-section">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">O CARDÁPIO</p><h2>Escolha o seu momento.</h2></div><Link href="/cardapio">Ver tudo <ArrowRight size={16}/></Link></div>
          <div className="category-grid">
            {categories.map((category) => (
              <Link href={`/categoria/${category.slug}`} className="category-card" key={category.slug}>
                <Image src={`/images/categories/${category.image.split('/').pop()}`} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" />
                <div className="category-overlay"><span>{category.name}</span><ArrowRight size={17}/></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section featured-section">
        <div className="container"><div className="section-heading"><div><p className="eyebrow">DA COZINHA PARA A MESA</p><h2>Alguns favoritos.</h2></div><Link href="/cardapio">Abrir cardápio <ArrowRight size={16}/></Link></div><div className="product-grid">{featured.map((product) => <ProductCard key={product.id} product={product}/>)}</div></div>
      </section>

      <section className="story-section"><div className="container story-grid"><div className="story-image"><Image src="/images/categories/categoria-5.jpg" alt="Experiência Nayuka" fill sizes="(max-width: 800px) 100vw, 50vw"/></div><div className="story-copy"><p className="eyebrow">NAYUKA · SABORES DA ALMA</p><h2>Comer bem também é sentir-se em casa.</h2><p>Na Nayuka, a experiência começa antes do primeiro prato. É o encontro, o aroma, a conversa e a vontade de voltar.</p><Link className="text-link" href="/informacoes">Conhecer a casa <ArrowRight size={17}/></Link></div></div></section>
    </>
  );
}

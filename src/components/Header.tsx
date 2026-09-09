import Image from "next/image";
import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Nayuka — início">
          <Image src="/images/logo.png" alt="Nayuka — Sabores da Alma" width={180} height={70} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <Link href="/">Início</Link>
          <Link href="/cardapio">Cardápio</Link>
          <Link href="/informacoes">Informações</Link>
        </nav>
        <a className="header-cta" href={whatsappUrl("Olá, Nayuka! Gostaria de fazer um pedido.")} target="_blank" rel="noreferrer">
          <MessageCircle size={17} />
          <span>WhatsApp</span>
        </a>
      </div>
      <div className="location-strip">
        <div className="container location-inner">
          <span><MapPin size={14} /> Rotunda do Aeroporto, Luena</span>
          <span>Aberto todos os dias · 08:00–01:00</span>
        </div>
      </div>
    </header>
  );
}

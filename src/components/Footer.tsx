import Link from "next/link";
import { AtSign, MapPin, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">NAYUKA</p>
          <h2>Sabores da Alma.</h2>
          <p className="footer-copy">Comércio e prestação de serviços. Uma experiência feita para saborear sem pressa.</p>
        </div>
        <div className="footer-links">
          <Link href="/cardapio">Cardápio</Link>
          <Link href="/informacoes">Informações</Link>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={16}/> WhatsApp</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><AtSign size={16}/> Instagram</a>
        </div>
        <div className="footer-contact">
          <p><MapPin size={16}/> Rotunda do Aeroporto, Luena</p>
          <p>08:00–01:00 · Todos os dias</p>
          <p>+244 923 102 672</p>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Nayuka</span><span>Sabores da Alma</span></div>
    </footer>
  );
}

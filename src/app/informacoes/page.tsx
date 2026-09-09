import { Clock3, AtSign, MapPin, MessageCircle, Phone } from 'lucide-react'
import { whatsappUrl } from '@/lib/whatsapp'

export default function InformacoesPage() {
  return (
    <section className="section info-page">
      <div className="container">
        <div className="page-heading">
          <p className="eyebrow">NAYUKA</p>
          <h1>Informações da casa.</h1>
          <p>Encontre-nos em Luena e fale connosco diretamente.</p>
        </div>
        <div className="info-grid">
          <div className="info-card">
            <MapPin />
            <p className="eyebrow">LOCALIZAÇÃO</p>
            <h2>Rotunda do Aeroporto</h2>
            <p>Luena, Angola</p>
          </div>
          <div className="info-card">
            <Clock3 />
            <p className="eyebrow">HORÁRIO</p>
            <h2>08:00–01:00</h2>
            <p>Todos os dias</p>
          </div>
          <div className="info-card">
            <Phone />
            <p className="eyebrow">CONTACTO</p>
            <h2>+244 923 102 672</h2>
            <p>Também disponível no WhatsApp.</p>
          </div>
          <div className="info-card">
            <AtSign />
            <p className="eyebrow">REDES SOCIAIS</p>
            <h2>@NAYUKA-SABORES DA ALMA</h2>
            <p>@ISAMANA LDA</p>
          </div>
        </div>
        <a
          className="button button-dark info-button"
          href={whatsappUrl('Olá, Nayuka! Gostaria de obter mais informações.')}
          target="_blank"
          rel="noreferrer">
          <MessageCircle size={17} /> Falar pelo WhatsApp
        </a>
      </div>
    </section>
  )
}

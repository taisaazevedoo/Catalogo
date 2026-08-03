import { Link } from 'react-router-dom'
import { Instagram, Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { to: '/avapex-transportes', label: 'Início' },
  { to: '/avapex-transportes/historia', label: 'História' },
  { to: '/avapex-transportes/produtos', label: 'Produtos' },
  { to: '/avapex-transportes/redes-sociais', label: 'Redes Sociais' },
]

const IconWrap = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full border border-avpx-steel flex items-center justify-center text-avpx-iron hover:text-avpx-yellow hover:border-avpx-yellow transition-colors shrink-0"
  >
    {children}
  </a>
)

export default function AvapexFooter() {
  return (
    <footer className="bg-avpx-navy border-t border-avpx-steel font-avpxBody">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        <div className="flex flex-col gap-5">
          <img
            src="/img/logos/logo-avapex-transportes-v2.svg"
            alt="Avapex Transportes"
            className="h-11 w-auto object-contain"
          />
          <div className="flex items-center gap-3">
            <IconWrap href="https://www.instagram.com/avapextransportes/" label="Instagram">
              <Instagram size={16} aria-hidden="true" />
            </IconWrap>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-white font-avpxHead font-bold text-sm uppercase tracking-wider mb-1">Contato</p>
          <a href="https://wa.me/5531995324129" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-avpx-iron hover:text-avpx-yellow transition-colors text-sm">
            <Phone size={13} className="text-avpx-yellow shrink-0" aria-hidden="true" />
            Taís · (31) 9 9532-4129
          </a>
          <a href="https://wa.me/5531984657066" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-avpx-iron hover:text-avpx-yellow transition-colors text-sm">
            <Phone size={13} className="text-avpx-yellow shrink-0" aria-hidden="true" />
            Joice · (31) 9 8465-7066
          </a>
          <a href="mailto:comercial@avapex.com.br" className="flex items-center gap-2 text-avpx-iron hover:text-avpx-yellow transition-colors text-sm">
            <Mail size={13} className="text-avpx-yellow shrink-0" aria-hidden="true" />
            comercial@avapex.com.br
          </a>
          <div className="flex items-start gap-2 text-avpx-iron text-sm">
            <MapPin size={13} className="text-avpx-yellow shrink-0 mt-0.5" aria-hidden="true" />
            <span>Rodovia BR-040 · Conselheiro Lafaiete/MG</span>
          </div>
        </div>

        <div>
          <p className="text-white font-avpxHead font-bold text-sm uppercase tracking-wider mb-4">Navegação</p>
          <ul className="flex flex-col gap-2.5">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-avpx-iron text-sm hover:text-avpx-yellow transition-colors">
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/" className="text-avpx-iron text-sm hover:text-avpx-yellow transition-colors">
                Voltar ao Catálogo Grupo Seday
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-avpx-yellow">
        <p className="max-w-6xl mx-auto px-6 py-3 text-center text-avpx-navy text-xs font-avpxHead font-bold">
          © {new Date().getFullYear()} avapex.com.br — todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}

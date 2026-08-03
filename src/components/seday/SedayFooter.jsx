import { Link } from 'react-router-dom'
import { Instagram, Phone, Mail } from 'lucide-react'

const navLinks = [
  { to: '/seday-equipamentos', label: 'Início' },
  { to: '/seday-equipamentos/historia', label: 'História' },
  { to: '/seday-equipamentos/produtos', label: 'Produtos' },
  { to: '/seday-equipamentos/redes-sociais', label: 'Redes Sociais' },
]

export default function SedayFooter() {
  return (
    <footer className="bg-sd-bg border-t border-sd-outline/20 font-sd">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-2xl font-black text-sd-primary tracking-widest">SEDAY</div>
          <p className="text-sm text-sd-onSurfaceVariant max-w-sm leading-relaxed">
            Locação de máquinas e equipamentos e transporte de pesados com competência e
            credibilidade desde 1999.
          </p>
          <a
            href="https://www.instagram.com/sedayequipamentos?igsh=b2N6Y2pobng5ZGl3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sd-onSurfaceVariant hover:text-sd-primary transition-colors text-sm bg-sd-surface py-2 px-4 border border-sd-outline/30"
          >
            <Instagram className="w-4 h-4" aria-hidden="true" />
            <span>Instagram</span>
          </a>
        </div>

        <div className="flex flex-col items-center md:items-start gap-3">
          <p className="text-white font-bold uppercase tracking-wider text-sm mb-1">Contato</p>
          <a href="https://wa.me/553195324129" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sd-onSurfaceVariant hover:text-sd-primary transition-colors text-sm">
            <Phone size={13} className="text-sd-primary shrink-0" aria-hidden="true" />
            +55 31 9532-4129
          </a>
          <a href="tel:+553184657066" className="flex items-center gap-2 text-sd-onSurfaceVariant hover:text-sd-primary transition-colors text-sm">
            <Phone size={13} className="text-sd-primary shrink-0" aria-hidden="true" />
            +55 31 8465-7066
          </a>
          <a href="mailto:comercial@seday.com.br" className="flex items-center gap-2 text-sd-onSurfaceVariant hover:text-sd-primary transition-colors text-sm">
            <Mail size={13} className="text-sd-primary shrink-0" aria-hidden="true" />
            comercial@seday.com.br
          </a>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2.5">
          <p className="text-white font-bold uppercase tracking-wider text-sm mb-1">Navegação</p>
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} className="text-sd-onSurfaceVariant text-sm hover:text-sd-primary transition-colors">
              {label}
            </Link>
          ))}
          <Link to="/" className="text-sd-onSurfaceVariant text-sm hover:text-sd-primary transition-colors">
            Voltar ao Catálogo Grupo Seday
          </Link>
        </div>
      </div>

      <div className="border-t border-sd-outline/20">
        <p className="max-w-6xl mx-auto px-6 py-4 text-center text-sd-onSurfaceVariant text-xs">
          © {new Date().getFullYear()} SEDAY Transportes. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

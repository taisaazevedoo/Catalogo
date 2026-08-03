import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/avapex-transportes', label: 'Início' },
  { to: '/avapex-transportes/historia', label: 'História' },
  { to: '/avapex-transportes/produtos', label: 'Produtos' },
  { to: '/avapex-transportes/redes-sociais', label: 'Redes Sociais' },
]

export default function AvapexHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-avpx-navy border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <Link
          to="/avapex-transportes"
          className="shrink-0"
          aria-label="Avapex Transportes — página inicial"
          onClick={close}
        >
          <img
            src="/img/logos/logo-avapex-transportes-v2.svg"
            alt="Avapex Transportes"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        <nav aria-label="Navegação Avapex" className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-avpxHead font-bold uppercase tracking-wide text-sm text-white hover:text-avpx-yellow transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="hidden md:inline-flex border border-white text-white px-4 py-2 text-sm font-avpxHead font-bold uppercase hover:bg-white hover:text-avpx-navy transition-colors"
          >
            Voltar ao catálogo
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-1 text-white"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Menu mobile Avapex"
          className="md:hidden bg-avpx-navy border-t border-white/10 px-6 py-5 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={close}
              className="font-avpxHead font-bold uppercase text-sm text-white hover:text-avpx-yellow"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/"
            onClick={close}
            className="bg-avpx-yellow text-avpx-navy px-5 py-3 font-avpxHead font-extrabold uppercase text-sm text-center mt-2"
          >
            Voltar ao catálogo
          </Link>
        </nav>
      )}
    </header>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/seday-equipamentos', label: 'Início' },
  { to: '/seday-equipamentos/historia', label: 'História' },
  { to: '/seday-equipamentos/produtos', label: 'Produtos' },
  { to: '/seday-equipamentos/redes-sociais', label: 'Redes Sociais' },
]

export default function SedayHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-sd-bg border-b border-sd-outline/40 font-sd">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <Link
          to="/seday-equipamentos"
          className="shrink-0"
          aria-label="Seday Equipamentos — página inicial"
          onClick={close}
        >
          <img
            src="/img/logos/seday-logo-gps.svg"
            alt="Seday Equipamentos"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        <nav aria-label="Navegação Seday" className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-bold uppercase tracking-tight text-sm text-white hover:text-sd-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="hidden md:inline-flex bg-sd-primary text-white px-5 py-2 text-sm font-bold uppercase rounded-none hover:opacity-90 transition-opacity"
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
          aria-label="Menu mobile Seday"
          className="md:hidden bg-sd-bg border-t border-sd-outline/40 px-6 py-5 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={close}
              className="font-bold uppercase text-sm text-white hover:text-sd-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/"
            onClick={close}
            className="bg-sd-primary text-white px-5 py-3 font-bold uppercase text-sm text-center mt-2"
          >
            Voltar ao catálogo
          </Link>
        </nav>
      )}
    </header>
  )
}

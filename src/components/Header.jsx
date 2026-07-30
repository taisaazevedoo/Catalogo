import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header({ links }) {
  const [isOpen, setIsOpen] = useState(false)

  const close = () => setIsOpen(false)

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Grupo Seday página inicial" onClick={close}>
        <img className="brand-logo" src="/img/logos/grupo.webp" alt="Logo Grupo Seday" />
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`site-nav${isOpen ? ' is-open' : ''}`} aria-label="Navegação principal">
        {links.map((link) => (
          <Link key={link.href} to={link.href} onClick={close}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header({ links, transparentOnTop = false }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(!transparentOnTop)

  useEffect(() => {
    if (!transparentOnTop) return undefined

    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [transparentOnTop])

  const close = () => setIsOpen(false)

  const headerClassName = [
    'site-header',
    transparentOnTop && 'site-header--transparent',
    isScrolled && 'is-scrolled',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={headerClassName}>
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

import { Link } from 'react-router-dom'

export default function Footer({ linkPrefix = '' }) {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img className="footer-logo" src="/img/logos/logo escura.webp" alt="Logo Grupo Seday" />
        <p>© <span>{new Date().getFullYear()}</span> Grupo Seday. Todos os direitos reservados.</p>
      </div>
      <div className="footer-links">
        <Link to={`${linkPrefix}#sobre`}>Sobre</Link>
        <Link to={`${linkPrefix}#contato`}>Contato</Link>
      </div>
    </footer>
  )
}

import { Link } from 'react-router-dom'

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#empresas', label: 'Empresas' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#segmentos', label: 'Segmentos' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#contato', label: 'Contato' },
]

const empresas = [
  { href: '/seday-equipamentos', label: 'Seday Equipamentos' },
  { href: '/avapex-transportes', label: 'Avapex Transportes' },
  { href: '/innomach', label: 'Innomach' },
]

export default function Footer({ linkPrefix = '' }) {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-col footer-col--brand">
          <Link to="/" aria-label="Grupo Seday página inicial">
            <img className="footer-logo-full" src="/img/logos/grupo.webp" alt="Logo Grupo Seday" />
          </Link>
          <p>
            Locação de equipamentos, transporte rodoviário e soluções em movimentação de cargas
            com qualidade, confiança e excelência.
          </p>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Navegação</p>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link to={`${linkPrefix}${link.href}`}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Empresas</p>
          <ul>
            {empresas.map((link) => (
              <li key={link.href}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Grupo Seday. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

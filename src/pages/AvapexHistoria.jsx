import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import GrupoSeday from '../components/GrupoSeday.jsx'
import useReveal from '../hooks/useReveal.js'

const navLinks = [
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#empresas', label: 'Empresas' },
  { href: '/#contato', label: 'Contato' },
]

export default function AvapexHistoria() {
  useReveal()

  return (
    <>
      <Helmet>
        <title>Nossa História | Avapex Transportes</title>
        <meta
          name="description"
          content="Conheça a trajetória de 18 anos da Avapex Transportes e sua certificação ISO 9001."
        />
      </Helmet>
      <Header links={navLinks} />

      <main className="section-shell">
        <section className="page-hero reveal">
          <div>
            <span className="eyebrow">Nossa História</span>
            <h1>Qualidade que inspira confiança.</h1>
            <p>
              A Avapex Transportes celebra 18 anos de excelência no mercado, consolidando-se pela
              credibilidade e compromisso com resultados. Especializada em transporte rodoviário,
              movimentação de cargas e locação de máquinas e equipamentos (com ou sem mão de obra),
              atende principalmente os setores de mineração, indústria e ferroviário.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/avapex-transportes">Conhecer a empresa</Link>
              <a
                className="btn btn-secondary"
                href="https://wa.me/5531995324129"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale conosco
              </a>
            </div>
          </div>
          <img className="page-logo" src="/img/logos/logo-avapex-transportes-v2.svg" alt="Logo Avapex Transportes" />
        </section>

        <section className="section-heading reveal">
          <span className="eyebrow">Nossos Serviços</span>
          <h2>Soluções completas em transporte e locação.</h2>
        </section>

        <section className="about-grid reveal">
          <article className="info-card">
            <h3>Transporte rodoviário</h3>
            <p>Prestação de serviços de transporte rodoviário de cargas fechadas.</p>
          </article>
          <article className="info-card">
            <h3>Locação de máquinas e equipamentos</h3>
            <p>Locação e prestação de serviços com ou sem mão de obra com máquinas e equipamentos.</p>
          </article>
          <article className="info-card">
            <h3>Movimentação de carga</h3>
            <p>
              Prestação de serviço de movimentação de carga, com empilhadeiras, paleteiras e
              equipamentos de movimentação.
            </p>
          </article>
        </section>

        <section className="page-content reveal">
          <article className="info-card">
            <h2>Certificação ISO 9001</h2>
            <p>
              Em julho de 2024, a Avapex alcançou uma importante conquista ao obter a certificação
              ISO 9001, reconhecendo seu compromisso contínuo com a qualidade e a excelência em seus
              processos.
            </p>
            <p>
              Este marco reafirma a dedicação da empresa em oferecer soluções logísticas eficientes
              e aprimoradas, garantindo a satisfação de seus clientes e a melhoria constante de seus
              serviços.
            </p>
          </article>
          <article className="info-card">
            <h2>Contato</h2>
            <ul className="page-list">
              <li>Joice · (31) 9 8465-7066</li>
              <li>Taís · comercial@avapex.com.br</li>
              <li>Site · (31) 9 9532-4129 · comercial3@avapex.com.br</li>
              <li>avapex.com.br</li>
              <li>@avapextransportes</li>
            </ul>
          </article>
        </section>
      </main>

      <GrupoSeday />
      <Footer linkPrefix="/" />
    </>
  )
}

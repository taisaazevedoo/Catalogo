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

export default function CompanyPage({
  title,
  description,
  eyebrow,
  heading,
  intro,
  ctaLabel,
  heroImage,
  heroAlt,
  logo,
  logoAlt,
  ctas,
  listId,
  listTitle,
  listItems,
  extraId,
  extraTitle,
  extraText,
}) {
  useReveal([title])

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header links={navLinks} />

      <main className="section-shell">
        <section className="page-hero reveal">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h1>{heading}</h1>
            <p>{intro}</p>
            <div className="actions">
              {ctas ? (
                ctas.map((cta, i) =>
                  cta.to.startsWith('http') ? (
                    <a
                      key={cta.label}
                      className={`btn ${i === 0 ? 'btn-primary' : 'btn-secondary'}`}
                      href={cta.to}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {cta.label}
                    </a>
                  ) : (
                    <Link key={cta.label} className={`btn ${i === 0 ? 'btn-primary' : 'btn-secondary'}`} to={cta.to}>
                      {cta.label}
                    </Link>
                  )
                )
              ) : (
                <Link className="btn btn-primary" to="/#contato">{ctaLabel}</Link>
              )}
            </div>
          </div>
          {logo ? (
            <img className="page-logo" src={logo} alt={logoAlt} />
          ) : (
            <img src={heroImage} alt={heroAlt} />
          )}
        </section>

        {(listItems || extraText) && (
          <section className="page-content reveal">
            {listItems && (
              <article className="info-card" id={listId}>
                <h2>{listTitle}</h2>
                <ul className="page-list">
                  {listItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            )}
            {extraText && (
              <article className="info-card" id={extraId}>
                <h2>{extraTitle}</h2>
                <p>{extraText}</p>
              </article>
            )}
          </section>
        )}
      </main>

      <GrupoSeday />
      <Footer linkPrefix="/" />
    </>
  )
}

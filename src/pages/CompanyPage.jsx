import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
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
  listTitle,
  listItems,
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
              <Link className="btn btn-primary" to="/#contato">{ctaLabel}</Link>
            </div>
          </div>
          <img src={heroImage} alt={heroAlt} />
        </section>

        <section className="page-content reveal">
          <article className="info-card">
            <h2>{listTitle}</h2>
            <ul className="page-list">
              {listItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="info-card">
            <h2>{extraTitle}</h2>
            <p>{extraText}</p>
          </article>
        </section>
      </main>

      <Footer linkPrefix="/" />
    </>
  )
}

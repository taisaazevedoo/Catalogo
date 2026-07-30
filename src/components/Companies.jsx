import { Link } from 'react-router-dom'

export default function Companies() {
  return (
    <section id="empresas" className="section-shell reveal">
      <div className="card-grid">
        <article className="company-card company-card--seday">
          <img className="company-logo" src="/img/logos/seday.webp" alt="Logo Seday Equipamentos" />
          <h3>Seday Equipamentos</h3>
          <p>Atuação forte em soluções para operação, manutenção e desempenho industrial.</p>
          <Link to="/seday-equipamentos">Conhecer empresa</Link>
        </article>
        <article className="company-card company-card--avapex">
          <img className="company-logo" src="/img/logos/avapex.webp" alt="Logo Avapex Transportes" />
          <h3>Avapex Transportes</h3>
          <p>Logística e transporte com foco em segurança, rastreio e agilidade.</p>
          <Link to="/avapex-transportes">Conhecer empresa</Link>
        </article>
        <article className="company-card company-card--innomach">
          <img className="company-logo" src="/img/logos/innomach.webp" alt="Logo Innomach" />
          <h3>Innomach</h3>
          <p>Estratégia, inovação e implementação de projetos com alto padrão técnico.</p>
          <Link to="/innomach">Conhecer empresa</Link>
        </article>
      </div>
    </section>
  )
}

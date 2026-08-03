export default function Hero() {
  return (
    <section className="hero reveal">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="hero-content">
        <span className="eyebrow">Inovação, mobilidade e eficiência operacional</span>
        <h1>
          <span className="hero-title-line">Bem-vindo ao</span>
          <span className="hero-title-main">Grupo Seday</span>
        </h1>
        <p className="hero-lead">
          Movendo negócios, entregando resultados. Descubra a força do Grupo Seday.
        </p>
        <div className="actions">
          <a className="btn btn-primary" href="#empresas">Conheça as empresas</a>
          <a className="btn btn-secondary" href="#contato">Fale com a equipe</a>
        </div>
      </div>

      <ul className="hero-stats" aria-label="Números do Grupo Seday">
        <li>
          <a className="hero-stat-card" href="#sobre">
            <span className="hero-diamond" aria-hidden="true"></span>
            <strong>+27 anos de atuação</strong>
            <span className="hero-stat-desc">
              Décadas de atuação consolidada no setor de transporte e locação.
            </span>
            <span className="hero-stat-link">Explore a história <span aria-hidden="true">→</span></span>
          </a>
        </li>
        <li>
          <a className="hero-stat-card" href="#empresas">
            <span className="hero-diamond" aria-hidden="true"></span>
            <strong>3 empresas do grupo</strong>
            <span className="hero-stat-desc">
              Seday, Avapex e Innomach atuando de forma integrada.
            </span>
            <span className="hero-stat-link">Explore as empresas <span aria-hidden="true">→</span></span>
          </a>
        </li>
        <li>
          <a className="hero-stat-card" href="#segmentos">
            <span className="hero-diamond" aria-hidden="true"></span>
            <strong>100% foco em soluções</strong>
            <span className="hero-stat-desc">
              Equipes dedicadas a soluções sob medida para cada operação.
            </span>
            <span className="hero-stat-link">Explore os segmentos <span aria-hidden="true">→</span></span>
          </a>
        </li>
      </ul>
    </section>
  )
}

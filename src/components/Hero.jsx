export default function Hero() {
  return (
    <section className="hero reveal">
      <div className="hero-copy">
        <span className="eyebrow">Inovação, mobilidade e eficiência operacional</span>
        <h1>
          <span className="hero-title-line">BEM VINDO AO</span>
          <span className="hero-title-main">GRUPO SEDAY</span>
        </h1>
        <div className="actions">
          <a className="btn btn-primary" href="#empresas">Conheça as empresas</a>
          <a className="btn btn-secondary" href="#contato">Fale com a equipe</a>
        </div>
        <ul className="hero-stats" aria-label="Números do Grupo Seday">
          <li><strong>+27 anos</strong><span>de atuação</span></li>
          <li><strong>3 empresas</strong><span>do grupo</span></li>
          <li><strong>100%</strong><span>foco em soluções</span></li>
        </ul>
      </div>
    </section>
  )
}

const items = [
  {
    title: 'Missão',
    text:
      'Oferecer meios eficientes em transportes e locação de máquinas e equipamentos de forma sustentável e segura, com agilidade, qualidade e respeito aos nossos parceiros de negócios, minimizando os impactos ambientais.',
  },
  {
    title: 'Visão',
    text:
      'Ser uma empresa reconhecida pela excelência nos segmentos em que atua, agregando valores aos nossos clientes, colaboradores e demais parceiros, com compromisso no resultado e responsabilidade socioambiental.',
  },
  {
    title: 'Valores',
    text:
      'Segurança, Respeito, Ética, Desenvolvimento Profissional, Melhoria Contínua, Credibilidade e Comprometimento guiam cada decisão do grupo.',
  },
]

export default function About() {
  return (
    <section id="sobre" className="about-shell reveal">
      <div className="about-grid-v2">
        <div className="about-intro">
          <span className="eyebrow eyebrow--dark">01 · Sobre</span>
          <h2>Soluções que movimentam negócios.</h2>
          <p>
            O Grupo Seday reúne Seday, Avapex e Innomach, oferecendo locação de
            equipamentos, transporte rodoviário e soluções em movimentação de cargas com
            qualidade, confiança e excelência.
          </p>
          <a className="btn btn-outline-dark" href="#empresas">Conheça as empresas</a>
        </div>

        <ol className="about-list">
          {items.map((item, index) => (
            <li className="about-list-item" key={item.title}>
              <span className="about-list-diamond" aria-hidden="true">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </span>
              <div className="about-list-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

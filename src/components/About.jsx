const values = [
  'Segurança',
  'Respeito',
  'Ética',
  'Desenvolvimento Profissional',
  'Melhoria Contínua',
  'Credibilidade',
  'Comprometimento',
]

export default function About() {
  return (
    <section id="sobre" className="section-shell reveal">
      <div className="section-heading">
        <span className="eyebrow">Quem Somos</span>
        <h2>Soluções que movimentam negócios.</h2>
        <p>
          O Grupo Seday reúne Seday, Avapex e Innomach, oferecendo locação de
          equipamentos, transporte rodoviário e soluções em movimentação de cargas com
          qualidade, confiança e excelência.
        </p>
      </div>
      <div className="about-grid">
        <article className="info-card">
          <h3>Missão</h3>
          <p>
            Oferecer meios eficientes em transportes e locação de máquinas e equipamentos de forma
            sustentável e segura, com agilidade, qualidade e respeito aos nossos parceiros de
            negócios, minimizando os impactos ambientais.
          </p>
        </article>
        <article className="info-card">
          <h3>Visão</h3>
          <p>
            Ser uma empresa reconhecida pela excelência nos segmentos em que atua, agregando
            valores aos nossos clientes, colaboradores e demais parceiros, com compromisso no
            resultado e responsabilidade socioambiental.
          </p>
        </article>
        <article className="info-card">
          <h3>Valores</h3>
          <ul className="values-list">
            {values.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

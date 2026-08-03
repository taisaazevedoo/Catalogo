const figures = [
  { src: '/img/clientes/galpoes.webp', alt: 'Galpão', label: 'GALPÃO' },
  { src: '/img/clientes/rodovia.webp', alt: 'Rodovia', label: 'RODOVIA' },
  { src: '/img/clientes/mineracao.webp', alt: 'Mineração', label: 'MINERAÇÃO' },
  { src: '/img/clientes/industria.webp', alt: 'Indústria', label: 'INDÚSTRIA' },
]

export default function Services() {
  return (
    <section id="servicos" className="services-shell reveal">
      <div className="services-heading-v2">
        <span className="eyebrow">Onde atuamos</span>
        <h2>A ESCOLHA IDEAL PARA A SUA OPERAÇÃO</h2>
      </div>
      <div className="services-gallery">
        {figures.map((figure) => (
          <figure className="service-figure" key={figure.label}>
            <img src={figure.src} alt={figure.alt} />
            <figcaption>{figure.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

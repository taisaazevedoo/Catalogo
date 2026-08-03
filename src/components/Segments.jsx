const segments = ['Indústria', 'Logística', 'Construção', 'Energia', 'Transporte', 'Infraestrutura']

export default function Segments() {
  return (
    <section id="segmentos" className="section-shell reveal">
      <div className="section-heading">
        <span className="eyebrow">Segmentos atendidos</span>
        <h2>Atendimento recorrente para setores que exigem alta performance.</h2>
      </div>
      <ul className="segments-list">
        {segments.map((segment) => (
          <li key={segment}>
            <span className="segments-diamond" aria-hidden="true"></span>
            {segment}
          </li>
        ))}
      </ul>
    </section>
  )
}

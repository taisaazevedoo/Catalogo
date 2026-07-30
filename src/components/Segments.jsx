const segments = ['Indústria', 'Logística', 'Construção', 'Energia', 'Transporte', 'Infraestrutura']

export default function Segments() {
  return (
    <section id="segmentos" className="section-shell reveal">
      <div className="section-heading">
        <span className="eyebrow">Segmentos atendidos</span>
        <h2>Atendimento recorrente para setores que exigem alta performance.</h2>
      </div>
      <div className="chips">
        {segments.map((segment) => (
          <span key={segment}>{segment}</span>
        ))}
      </div>
    </section>
  )
}

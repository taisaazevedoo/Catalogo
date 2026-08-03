const segments = [
  {
    numero: '01',
    titulo: 'Indústria',
    descricao:
      'Locação de máquinas e transporte para operações industriais que não podem parar, com agilidade na resposta e manutenção preventiva.',
  },
  {
    numero: '02',
    titulo: 'Logística',
    descricao:
      'Frota e equipamentos dedicados a operações de movimentação de carga, intralogística e armazenagem de alto giro.',
  },
  {
    numero: '03',
    titulo: 'Construção',
    descricao:
      'Máquinas pesadas e caminhões para obras que exigem cronograma apertado e disponibilidade constante de equipamento.',
  },
  {
    numero: '04',
    titulo: 'Energia',
    descricao:
      'Suporte a operações do setor energético com equipamentos e transporte adequados a ambientes de alta exigência técnica.',
  },
  {
    numero: '05',
    titulo: 'Transporte',
    descricao:
      'Transporte rodoviário de cargas fechadas com foco em segurança, rastreio e cumprimento de prazo.',
  },
  {
    numero: '06',
    titulo: 'Infraestrutura',
    descricao:
      'Equipamentos e logística para projetos de infraestrutura de grande porte, do canteiro à entrega final.',
  },
]

export default function Segments() {
  return (
    <section id="segmentos" className="section-shell reveal">
      <div className="section-heading">
        <span className="eyebrow">Segmentos atendidos</span>
        <h2>Atendimento recorrente para setores que exigem alta performance.</h2>
      </div>
      <div className="segments-grid">
        {segments.map((segment) => (
          <article className="segment-cell" key={segment.titulo}>
            <span className="segment-number">{segment.numero}</span>
            <h3>{segment.titulo}</h3>
            <p>{segment.descricao}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

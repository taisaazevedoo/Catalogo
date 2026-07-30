import CompanyPage from './CompanyPage.jsx'

export default function SedayEquipamentos() {
  return (
    <CompanyPage
      title="Seday Equipamentos | Grupo Seday"
      description="Conheça a Seday Equipamentos, marca do Grupo Seday especializada em soluções industriais e operacionais."
      eyebrow="Seday Equipamentos"
      heading="Entrega de soluções robustas para operação industrial."
      intro="A Seday Equipamentos atua com foco em desempenho, confiabilidade e apoio continuo para clientes que buscam eficiência e segurança."
      ctaLabel="Solicitar contato"
      heroImage="/img/seday-equipamentos.svg"
      heroAlt="Ilustração da Seday Equipamentos"
      listTitle="O que a empresa oferece"
      listItems={[
        'Suporte técnico especializado',
        'Planejamento e execução de soluções integradas',
        'Atendimento com foco em disponibilidade e produtividade',
      ]}
      extraTitle="Por que escolher"
      extraText="Estrutura operacional sólida, equipe qualificada e um olhar estratégico para cada demanda."
    />
  )
}

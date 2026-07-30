import CompanyPage from './CompanyPage.jsx'

export default function AvapexTransportes() {
  return (
    <CompanyPage
      title="Avapex Transportes | Grupo Seday"
      description="Conheça a Avapex Transportes, companhia do Grupo Seday voltada a logística e transporte com segurança e rastreio."
      eyebrow="Avapex Transportes"
      heading="Mobilidade inteligente para operações de carga e transporte."
      intro="A Avapex Transportes une logística, rastreio e organização para oferecer respostas ágeis e confiáveis."
      ctaLabel="Solicitar orçamento"
      heroImage="/img/avapex-transportes.svg"
      heroAlt="Ilustração da Avapex Transportes"
      listTitle="Principais diferenciais"
      listItems={[
        'Operação com foco em segurança',
        'Planejamento logístico e acompanhamento',
        'Parcerias com visão de continuidade',
      ]}
      extraTitle="Indicadores de excelência"
      extraText="Agilidade, rastreio e alto padrão de atendimento fazem parte do modelo operacional da empresa."
    />
  )
}

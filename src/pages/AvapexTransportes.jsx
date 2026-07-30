import CompanyPage from './CompanyPage.jsx'

export default function AvapexTransportes() {
  return (
    <CompanyPage
      title="Avapex Transportes | Grupo Seday"
      description="Conheça a Avapex Transportes, companhia do Grupo Seday voltada a logística e transporte com segurança e rastreio."
      eyebrow="Avapex Transportes"
      heading="Mobilidade inteligente para operações de carga e transporte."
      intro="A Avapex Transportes une logística, rastreio e organização para oferecer respostas ágeis e confiáveis."
      logo="/img/logos/logo-avapex-transportes-v2.svg"
      logoAlt="Logo Avapex Transportes"
      ctas={[
        { label: 'Fale conosco', to: 'https://wa.me/5531995324129' },
        { label: 'Conheça nossos equipamentos', to: '/#servicos' },
        { label: 'Conheça nossa história', to: '/avapex-transportes/historia' },
      ]}
    />
  )
}

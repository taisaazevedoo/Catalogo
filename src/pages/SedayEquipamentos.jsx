import CompanyPage from './CompanyPage.jsx'

export default function SedayEquipamentos() {
  return (
    <CompanyPage
      title="Seday Equipamentos | Grupo Seday"
      description="Conheça a Seday Equipamentos, marca do Grupo Seday especializada em soluções industriais e operacionais."
      eyebrow="Seday Equipamentos"
      heading="Entrega de soluções robustas para operação industrial."
      intro="A Seday Equipamentos atua com foco em desempenho, confiabilidade e apoio continuo para clientes que buscam eficiência e segurança."
      logo="/img/logos/seday-logo-gps.svg"
      logoAlt="Logo Seday Equipamentos"
      ctas={[
        { label: 'Fale conosco', to: 'https://wa.me/5531995324129' },
        { label: 'Conheça nossos equipamentos', to: '/#servicos' },
        { label: 'Conheça nossa história', to: '/seday-equipamentos/historia' },
      ]}
    />
  )
}

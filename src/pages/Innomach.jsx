import CompanyPage from './CompanyPage.jsx'

export default function Innomach() {
  return (
    <CompanyPage
      title="Innomach | Grupo Seday"
      description="Conheça a Innomach, marca do Grupo Seday voltada a inovação, projetos e soluções de alto padrão técnico."
      eyebrow="Innomach"
      heading="Inovação e execução com excelência técnica."
      intro="A Innomach trabalha com visão estratégica e execução de alto nível para oferecer soluções que impulsionam crescimento e evolução operacional."
      ctaLabel="Falar com a equipe"
      heroImage="/img/innomach.svg"
      heroAlt="Ilustração da Innomach"
      listTitle="Áreas de atuação"
      listItems={[
        'Projetos e implementação',
        'Desenvolvimento de soluções personalizadas',
        'Estratégia e estruturação operacional',
      ]}
      extraTitle="Compromisso"
      extraText="Combinação entre inovação, profundidade técnica e parceria para entregar valor real ao cliente."
    />
  )
}

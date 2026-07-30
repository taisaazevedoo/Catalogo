import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import GrupoSeday from '../components/GrupoSeday.jsx'
import useReveal from '../hooks/useReveal.js'

const navLinks = [
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#empresas', label: 'Empresas' },
  { href: '/#contato', label: 'Contato' },
]

const timeline = [
  {
    year: '1999',
    text: 'Fundação da Seday Transportes em Ouro Branco/MG e início das operações na Gerdau Açominas, com transporte de escória do Alto-Forno em regime 24h. No mesmo período, atuação junto à Prefeitura de Ouro Branco em obras de infraestrutura.',
  },
  {
    year: '2006',
    text: 'Início da parceria com a Harsco Metals na Gerdau Açominas, realizando transporte de agregados (escória e sucata) e locação de equipamentos.',
  },
  {
    year: '2011–2015',
    text: 'Prestação de serviços para a MIP Engenharia nas operações da Vale S/A, nas minas de Vargem Grande e Mina do Pico (Itabirito/MG), com até 30 equipamentos operando simultaneamente.',
  },
  {
    year: '2013',
    text: 'Contrato com a Usiminas Mecânica para locação de equipamentos na Vale – Mina Cauê, em Itabira/MG.',
  },
  {
    year: '2015',
    text: 'Expansão das operações para Canaã dos Carajás/PA, com contratos junto à Usiminas Mecânica, Consórcio Montcalm/MIP, MIP Engenharia e Techint.',
  },
  {
    year: '2017',
    text: 'Retomada da parceria com a Harsco, atuando na ArcelorMittal, em Serra/ES, com transporte de agregados e locação de equipamentos.',
  },
  {
    year: '2021',
    text: 'Grande projeto com a Andrade Gutierrez na construção do Linhão de Transmissão MG/BA, com mais de 90 equipamentos e prestação completa de serviços com operadores e estrutura técnica dedicada.',
  },
  {
    year: '2022',
    text: 'Início de contrato estratégico com a Usiminas Siderúrgica, em Ipatinga/MG, com fornecimento de veículos, equipamentos e mão de obra própria. Operação ampliada de cerca de 60 para mais de 300 colaboradores.',
  },
  {
    year: '2025',
    text: 'Novo contrato com a Vale S/A, atendendo operações em Brumadinho, Juatuba, Paraopeba e região, com mais de 140 colaboradores, focado no transporte de água potável e água bruta.',
  },
]

export default function SedayHistoria() {
  useReveal()

  return (
    <>
      <Helmet>
        <title>Nossa História | Seday Equipamentos</title>
        <meta
          name="description"
          content="Conheça a trajetória de 27 anos da Seday Transportes, desde a fundação em Ouro Branco/MG até os grandes contratos atuais."
        />
      </Helmet>
      <Header links={navLinks} />

      <main className="section-shell">
        <section className="page-hero reveal">
          <div>
            <span className="eyebrow">Nossa História</span>
            <h1>27 anos de estrada, competência e credibilidade.</h1>
            <p>
              A Seday Transportes completa 27 anos de estrada, período marcado pela parceria
              formada com grandes empresas e composta de sinceridade, eficiência e pontualidade.
              Fundada em 1999 na cidade de Ouro Branco/MG, a empresa atua no ramo de locação e
              prestação de serviço com máquinas e equipamentos, além do transporte de pesados.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/seday-equipamentos">Conhecer a empresa</Link>
              <a
                className="btn btn-secondary"
                href="https://wa.me/5531995324129"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale conosco
              </a>
            </div>
          </div>
          <img className="page-logo" src="/img/logos/seday-logo-gps.svg" alt="Logo Seday Equipamentos" />
        </section>

        <section className="page-content reveal">
          <article className="info-card">
            <h2>Quem somos</h2>
            <p>
              Com atuação significativa neste segmento, a Seday Transportes atende siderúrgicas,
              mineradoras, construtoras e empresas terceiras, locando máquinas e equipamentos e
              realizando o transporte de seus produtos e subprodutos, em harmonia com o meio
              ambiente, conquistando o respeito e a confiança de seus stakeholders.
            </p>
            <p>
              A Seday destaca-se por suprir de forma inteligente e eficaz as mais diversas
              necessidades relacionadas a logística, transporte e movimentação de carga, agregando
              valor e eficiência aos processos de seus clientes.
            </p>
            <p>
              Dotado de profissionais capacitados e comprometidos com o bom atendimento, a Seday
              vem construindo ao longo desses 27 anos, junto de seus colaboradores e clientes, uma
              história alicerçada em competência e credibilidade.
            </p>
          </article>
        </section>

        <section className="section-heading reveal">
          <span className="eyebrow">Trajetória</span>
          <h2>Uma linha do tempo de conquistas.</h2>
        </section>

        <section className="timeline reveal">
          {timeline.map((item) => (
            <article className="timeline-item" key={item.year}>
              <span className="timeline-year">{item.year}</span>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className="page-content reveal">
          <article className="info-card">
            <h2>Contato</h2>
            <ul className="page-list">
              <li>Joice · (31) 9 8465-7066</li>
              <li>comercial@seday.com.br</li>
              <li>@sedayequipamentos</li>
            </ul>
          </article>
        </section>
      </main>

      <GrupoSeday />
      <Footer linkPrefix="/" />
    </>
  )
}

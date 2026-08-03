import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { MessageCircle, Mail, MapPin } from 'lucide-react'
import SedayHeader from '../components/seday/SedayHeader.jsx'
import SedayFooter from '../components/seday/SedayFooter.jsx'
import GrupoSeday from '../components/GrupoSeday.jsx'

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
  return (
    <>
      <Helmet>
        <title>Nossa História | Seday Equipamentos</title>
        <meta
          name="description"
          content="Conheça a trajetória de 27 anos da Seday Transportes, desde a fundação em Ouro Branco/MG até os grandes contratos atuais."
        />
      </Helmet>

      <div className="bg-sd-bg font-sd">
        <SedayHeader />

        <main>
          <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-4 px-3 py-1 bg-sd-primary/20 text-sd-primary text-xs font-bold uppercase tracking-widest">
                Nossa história
              </span>
              <h1 className="font-black uppercase text-white text-4xl md:text-5xl leading-[0.95] mb-4">
                27 anos de estrada, competência e credibilidade.
              </h1>
              <p className="text-sd-onSurfaceVariant text-base md:text-lg mb-8">
                A Seday Transportes completa 27 anos de estrada, período marcado pela parceria
                formada com grandes empresas e composta de sinceridade, eficiência e pontualidade.
                Fundada em 1999 na cidade de Ouro Branco/MG, a empresa atua no ramo de locação e
                prestação de serviço com máquinas e equipamentos, além do transporte de pesados.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/seday-equipamentos"
                  className="bg-sd-primary text-white px-6 py-3 font-bold uppercase text-sm hover:opacity-90 transition-opacity"
                >
                  Conhecer a empresa
                </Link>
                <a
                  href="https://wa.me/5531995324129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white text-white px-6 py-3 font-bold uppercase text-sm hover:bg-white hover:text-sd-bg transition-colors"
                >
                  Fale conosco
                </a>
                <a
                  href="mailto:comercial@seday.com.br"
                  className="border border-sd-outline text-sd-onSurfaceVariant px-6 py-3 font-bold uppercase text-sm hover:border-sd-primary hover:text-white transition-colors"
                >
                  Enviar e-mail
                </a>
              </div>
            </div>
            <img
              className="w-full max-w-md mx-auto"
              src="/img/logos/seday-logo-gps.svg"
              alt="Logo Seday Equipamentos"
            />
          </section>

          <section className="max-w-6xl mx-auto px-6 pb-16">
            <article className="border border-sd-outline/40 bg-sd-surface p-6 md:p-8">
              <h2 className="font-black uppercase text-sd-primary text-xl md:text-2xl mb-3">
                Quem somos
              </h2>
              <p className="text-sd-onSurfaceVariant text-sm md:text-base mb-3">
                Com atuação significativa neste segmento, a Seday Transportes atende siderúrgicas,
                mineradoras, construtoras e empresas terceiras, locando máquinas e equipamentos e
                realizando o transporte de seus produtos e subprodutos, em harmonia com o meio
                ambiente, conquistando o respeito e a confiança de seus stakeholders.
              </p>
              <p className="text-sd-onSurfaceVariant text-sm md:text-base mb-3">
                A Seday destaca-se por suprir de forma inteligente e eficaz as mais diversas
                necessidades relacionadas a logística, transporte e movimentação de carga, agregando
                valor e eficiência aos processos de seus clientes.
              </p>
              <p className="text-sd-onSurfaceVariant text-sm md:text-base">
                Dotado de profissionais capacitados e comprometidos com o bom atendimento, a Seday
                vem construindo ao longo desses 27 anos, junto de seus colaboradores e clientes, uma
                história alicerçada em competência e credibilidade.
              </p>
            </article>
          </section>

          <section className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="font-black uppercase text-white text-2xl md:text-3xl mb-4">
                Nossa localização
              </h2>
              <p className="text-sd-onSurfaceVariant text-sm md:text-base">
                Com o objetivo de otimizar suas operações logísticas, a Seday está estrategicamente
                localizada com sua matriz em Conselheiro Lafaiete/MG, às margens da BR-040, um posto
                avançado em Belo Horizonte/MG, e filiais nos estados de São Paulo e Rio de Janeiro.
                Além de contar com unidades de apoio em Juatuba/MG, Paraopeba/MG e Ipatinga/MG.
              </p>
            </div>
            <div className="h-64 md:h-72 border border-sd-outline/40 overflow-hidden">
              <iframe
                className="w-full h-full"
                title="Mapa de localização da Seday Equipamentos"
                src="https://maps.google.com/maps?q=Rodovia%20BR040,%2022750,%20Barreira%20-%20Conselheiro%20Lafaiete%20/%20MG&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>

          <section className="max-w-6xl mx-auto px-6 pb-16">
            <h2 className="font-black uppercase text-white text-2xl md:text-3xl mb-8 text-left">
              Uma linha do tempo de conquistas
            </h2>
            <div className="grid gap-4">
              {timeline.map((item) => (
                <article
                  key={item.year}
                  className="border border-sd-outline/40 border-l-4 border-l-sd-primary bg-sd-surface p-5 md:p-6 md:grid md:grid-cols-[140px_1fr] md:gap-6"
                >
                  <span className="block font-black text-sd-primary text-lg mb-1 md:mb-0">
                    {item.year}
                  </span>
                  <p className="text-sd-onSurfaceVariant text-sm md:text-base m-0">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="max-w-6xl mx-auto px-6 pb-20">
            <article className="border border-sd-outline/40 bg-sd-surface p-6 md:p-8">
              <h2 className="font-black uppercase text-sd-primary text-xl md:text-2xl mb-6">
                Contato
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 shrink-0 bg-sd-primary flex items-center justify-center">
                      <MessageCircle className="text-white" size={18} aria-hidden="true" />
                    </div>
                    <p className="font-bold uppercase text-white text-xs tracking-wider">
                      Central de Atendimento
                    </p>
                  </div>
                  <a
                    href="https://wa.me/5531984657066"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 bg-sd-primary text-white px-4 py-2 text-sm font-bold hover:opacity-90 transition-opacity"
                  >
                    Joice · +55 31 9 8465-7066
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 shrink-0 bg-sd-outline/30 flex items-center justify-center">
                      <Mail className="text-sd-primary" size={18} aria-hidden="true" />
                    </div>
                    <p className="font-bold uppercase text-white text-xs tracking-wider">
                      E-mail Corporativo
                    </p>
                  </div>
                  <a
                    href="mailto:comercial@seday.com.br"
                    className="inline-flex w-fit items-center gap-2 border border-sd-outline text-sd-onSurfaceVariant px-4 py-2 text-sm hover:border-sd-primary hover:text-white transition-colors"
                  >
                    comercial@seday.com.br
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 shrink-0 bg-sd-outline/30 flex items-center justify-center">
                      <MapPin className="text-sd-primary" size={18} aria-hidden="true" />
                    </div>
                    <p className="font-bold uppercase text-white text-xs tracking-wider">
                      Matriz
                    </p>
                  </div>
                  <p className="text-sd-onSurfaceVariant text-sm">
                    Rodovia BR-040, 22750, Barreira – Conselheiro Lafaiete/MG
                  </p>
                </div>
              </div>
            </article>
          </section>
        </main>

        <GrupoSeday />
        <SedayFooter />
      </div>
    </>
  )
}

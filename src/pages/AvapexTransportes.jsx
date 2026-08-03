import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Instagram, Globe, Linkedin, Facebook } from 'lucide-react'
import AvapexHeader from '../components/avapex/AvapexHeader.jsx'
import AvapexFooter from '../components/avapex/AvapexFooter.jsx'
import GrupoSeday from '../components/GrupoSeday.jsx'

const redes = [
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@avapextransportes',
    href: 'https://www.instagram.com/avapextransportes/',
    disabled: false,
  },
  {
    icon: Globe,
    label: 'Site',
    value: 'avapex.com.br',
    href: 'https://avapex.com.br',
    disabled: false,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Avapex Transportes',
    href: 'https://www.linkedin.com/company/avapex-transportes/posts/?feedView=all',
    disabled: false,
  },
  {
    icon: Facebook,
    label: 'Facebook',
    value: 'Em breve',
    href: '#',
    disabled: true,
  },
]

const servicos = [
  {
    title: 'Transporte rodoviário',
    text: 'Prestação de serviços de transporte rodoviário de cargas fechadas.',
  },
  {
    title: 'Locação de máquinas e equipamentos',
    text: 'Locação e prestação de serviços com ou sem mão de obra com máquinas e equipamentos.',
  },
  {
    title: 'Movimentação de carga',
    text: 'Movimentação de carga com empilhadeiras, paleteiras e equipamentos de movimentação.',
  },
]

export default function AvapexTransportes() {
  return (
    <>
      <Helmet>
        <title>Avapex Transportes | Grupo Seday</title>
        <meta
          name="description"
          content="Avapex Transportes: transporte rodoviário, locação de máquinas e equipamentos e movimentação de carga com 18 anos de excelência."
        />
      </Helmet>

      <div className="bg-avpx-navy font-avpxBody">
        <AvapexHeader />

        <main>
          <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-4 px-3 py-1 rounded-none bg-white/10 text-white text-xs font-avpxHead font-bold uppercase tracking-widest">
                Avapex Transportes
              </span>
              <h1 className="font-avpxHead font-extrabold uppercase text-white text-4xl md:text-5xl leading-[0.95] mb-4">
                Mobilidade inteligente para operações de carga e transporte.
              </h1>
              <p className="text-avpx-iron text-base md:text-lg mb-8">
                A Avapex Transportes celebra 18 anos de excelência no mercado, consolidando-se pela
                credibilidade e compromisso com resultados. Especializada em transporte rodoviário,
                movimentação de cargas e locação de máquinas e equipamentos, atende principalmente os
                setores de mineração, indústria e ferroviário.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/5531995324129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-avpx-yellow text-avpx-navy px-6 py-3 font-avpxHead font-bold uppercase text-sm hover:bg-yellow-400 transition-colors"
                >
                  Fale conosco
                </a>
                <a
                  href="mailto:comercial@avapex.com.br"
                  className="border border-avpx-steel text-avpx-iron px-6 py-3 font-avpxHead font-bold uppercase text-sm hover:border-avpx-yellow hover:text-white transition-colors"
                >
                  Enviar e-mail
                </a>
                <Link
                  to="/avapex-transportes/produtos"
                  className="border border-white text-white px-6 py-3 font-avpxHead font-bold uppercase text-sm hover:bg-white hover:text-avpx-navy transition-colors"
                >
                  Conheça nossos equipamentos
                </Link>
                <Link
                  to="/avapex-transportes/historia"
                  className="border border-avpx-steel text-avpx-iron px-6 py-3 font-avpxHead font-bold uppercase text-sm hover:border-white hover:text-white transition-colors"
                >
                  Conheça nossa história
                </Link>
              </div>
            </div>
            <Link to="/avapex-transportes" aria-label="Avapex Transportes — página inicial" className="block">
              <img
                className="w-full max-w-md mx-auto"
                src="/img/logos/logo-avapex-transportes-v2.svg"
                alt="Logo Avapex Transportes"
              />
            </Link>
          </section>

          <section className="max-w-6xl mx-auto px-6 pb-16">
            <h2 className="font-avpxHead font-bold uppercase text-white text-2xl md:text-3xl mb-8 text-left">
              Nossos serviços
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {servicos.map((s) => (
                <article key={s.title} className="border border-avpx-steel bg-white/5 p-6">
                  <h3 className="font-avpxHead font-bold uppercase text-avpx-yellow text-lg mb-2">
                    {s.title}
                  </h3>
                  <p className="text-avpx-iron text-sm">{s.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="font-avpxHead font-bold uppercase text-white text-2xl md:text-3xl mb-4">
                Nossa localização
              </h2>
              <p className="text-avpx-iron text-sm md:text-base">
                Com o objetivo de otimizar suas operações logísticas, a Avapex está estrategicamente
                localizada com sua matriz em Conselheiro Lafaiete/MG, às margens da BR-040, um posto
                avançado em Belo Horizonte/MG, e filiais nos estados de São Paulo e Rio de Janeiro.
                Além de contar com unidades de apoio em Juatuba/MG, Paraopeba/MG e Ipatinga/MG.
              </p>
            </div>
            <div className="h-64 md:h-72 border border-avpx-steel overflow-hidden">
              <iframe
                className="w-full h-full"
                title="Mapa de localização da Avapex Transportes"
                src="https://maps.google.com/maps?q=Rodovia%20BR040,%2022750,%20Barreira%20-%20Conselheiro%20Lafaiete%20/%20MG&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>

          <section className="max-w-6xl mx-auto px-6 pb-20">
            <h2 className="font-avpxHead font-bold uppercase text-white text-2xl md:text-3xl mb-4 text-left">
              Redes sociais
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {redes.map(({ icon: Icon, label, value, href, disabled }) =>
                disabled ? (
                  <div
                    key={label}
                    className="flex items-center gap-3 border border-avpx-steel bg-white/5 p-4 opacity-50 cursor-not-allowed"
                  >
                    <Icon className="text-avpx-iron shrink-0" size={22} aria-hidden="true" />
                    <div>
                      <p className="font-avpxHead font-bold uppercase text-white text-xs">{label}</p>
                      <p className="text-avpx-iron text-xs">{value}</p>
                    </div>
                  </div>
                ) : (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-avpx-steel bg-white/5 hover:border-avpx-yellow transition-colors p-4"
                  >
                    <Icon className="text-avpx-yellow shrink-0" size={22} aria-hidden="true" />
                    <div>
                      <p className="font-avpxHead font-bold uppercase text-white text-xs">{label}</p>
                      <p className="text-avpx-iron text-xs">{value}</p>
                    </div>
                  </a>
                )
              )}
            </div>
          </section>
        </main>

        <GrupoSeday />
        <AvapexFooter />
      </div>
    </>
  )
}

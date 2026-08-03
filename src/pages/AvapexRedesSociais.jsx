import { Helmet } from 'react-helmet-async'
import { Instagram, Linkedin, Facebook } from 'lucide-react'
import AvapexHeader from '../components/avapex/AvapexHeader.jsx'
import AvapexFooter from '../components/avapex/AvapexFooter.jsx'

const redes = [
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@avapextransportes',
    href: 'https://www.instagram.com/avapextransportes/',
    disabled: false,
  },
  {
    logo: '/img/logos/logo-avapex-transportes-v2.svg',
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

export default function AvapexRedesSociais() {
  return (
    <>
      <Helmet>
        <title>Redes Sociais | Avapex Transportes</title>
        <meta name="description" content="Siga a Avapex Transportes nas redes sociais." />
      </Helmet>

      <div className="bg-avpx-navy font-avpxBody min-h-screen">
        <AvapexHeader />

        <main className="max-w-3xl mx-auto px-6 py-16">
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-avpxHead font-bold uppercase tracking-widest">
            Redes sociais
          </span>
          <h1 className="font-avpxHead font-extrabold uppercase text-white text-3xl md:text-4xl mb-10">
            Siga a Avapex Transportes
          </h1>

          <div className="grid sm:grid-cols-2 gap-4">
            {redes.map(({ icon: Icon, logo, label, value, href, disabled }) =>
              disabled ? (
                <div
                  key={label}
                  className="flex items-center gap-4 border border-avpx-steel bg-white/5 p-5 opacity-50 cursor-not-allowed"
                >
                  {logo ? (
                    <img src={logo} alt="" className="h-8 w-auto object-contain opacity-60" />
                  ) : (
                    <Icon className="text-avpx-iron" size={28} aria-hidden="true" />
                  )}
                  <div>
                    <p className="font-avpxHead font-bold uppercase text-white text-sm">{label}</p>
                    <p className="text-avpx-iron text-sm">{value}</p>
                  </div>
                </div>
              ) : (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 border border-avpx-steel bg-white/5 hover:border-avpx-yellow transition-colors p-5"
                >
                  {logo ? (
                    <img src={logo} alt="" className="h-8 w-auto object-contain" />
                  ) : (
                    <Icon className="text-avpx-yellow" size={28} aria-hidden="true" />
                  )}
                  <div>
                    <p className="font-avpxHead font-bold uppercase text-white text-sm">{label}</p>
                    <p className="text-avpx-iron text-sm">{value}</p>
                  </div>
                </a>
              )
            )}
          </div>
        </main>

        <AvapexFooter />
      </div>
    </>
  )
}

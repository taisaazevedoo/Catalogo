import { Helmet } from 'react-helmet-async'
import { Instagram, Linkedin, Facebook } from 'lucide-react'
import SedayHeader from '../components/seday/SedayHeader.jsx'
import SedayFooter from '../components/seday/SedayFooter.jsx'

const redes = [
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@sedayequipamentos',
    href: 'https://www.instagram.com/sedayequipamentos?igsh=b2N6Y2pobng5ZGl3',
    disabled: false,
  },
  {
    logo: '/img/logos/seday-logo-gps.svg',
    label: 'Site',
    value: 'seday.com.br',
    href: 'https://seday.com.br',
    disabled: false,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Seday Equipamentos',
    href: 'https://www.linkedin.com/company/seday-equipamentos-loca%C3%A7%C3%B5es-de-m%C3%A1quinas-e-equipamentos/posts/?feedView=all',
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

export default function SedayRedesSociais() {
  return (
    <>
      <Helmet>
        <title>Redes Sociais | Seday Equipamentos</title>
        <meta name="description" content="Siga a Seday Equipamentos nas redes sociais." />
      </Helmet>

      <div className="bg-sd-bg font-sd min-h-screen">
        <SedayHeader />

        <main className="max-w-3xl mx-auto px-6 py-16">
          <span className="inline-block mb-4 px-3 py-1 bg-sd-primary/20 text-sd-primary text-xs font-bold uppercase tracking-widest">
            Redes sociais
          </span>
          <h1 className="font-black uppercase text-white text-3xl md:text-4xl mb-10">
            Siga a Seday Equipamentos
          </h1>

          <div className="grid sm:grid-cols-2 gap-4">
            {redes.map(({ icon: Icon, logo, label, value, href, disabled }) =>
              disabled ? (
                <div
                  key={label}
                  className="flex items-center gap-4 border border-sd-outline/40 bg-sd-surface p-5 opacity-50 cursor-not-allowed"
                >
                  {logo ? (
                    <img src={logo} alt="" className="h-8 w-auto object-contain opacity-60" />
                  ) : (
                    <Icon className="text-sd-onSurfaceVariant" size={28} aria-hidden="true" />
                  )}
                  <div>
                    <p className="font-bold uppercase text-white text-sm">{label}</p>
                    <p className="text-sd-onSurfaceVariant text-sm">{value}</p>
                  </div>
                </div>
              ) : (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 border border-sd-outline/40 bg-sd-surface hover:border-sd-primary transition-colors p-5"
                >
                  {logo ? (
                    <img src={logo} alt="" className="h-8 w-auto object-contain" />
                  ) : (
                    <Icon className="text-sd-primary" size={28} aria-hidden="true" />
                  )}
                  <div>
                    <p className="font-bold uppercase text-white text-sm">{label}</p>
                    <p className="text-sd-onSurfaceVariant text-sm">{value}</p>
                  </div>
                </a>
              )
            )}
          </div>
        </main>

        <SedayFooter />
      </div>
    </>
  )
}

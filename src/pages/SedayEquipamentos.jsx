import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Instagram, Globe, Linkedin, Facebook } from 'lucide-react'
import SedayHeader from '../components/seday/SedayHeader.jsx'
import SedayFooter from '../components/seday/SedayFooter.jsx'
import GrupoSeday from '../components/GrupoSeday.jsx'

const redes = [
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@sedayequipamentos',
    href: 'https://www.instagram.com/sedayequipamentos?igsh=b2N6Y2pobng5ZGl3',
    disabled: false,
  },
  {
    icon: Globe,
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

const servicos = [
  {
    title: 'Transporte interno (intralogística)',
    text: 'Prestação de serviços de transporte interno (intralogística).',
  },
  {
    title: 'Locação de máquinas e equipamentos',
    text: 'Locação e prestação de serviços com ou sem mão de obra com máquinas e equipamentos.',
  },
  {
    title: 'Movimentação de carga',
    text: 'Movimentação de carga com equipamentos de movimentação e linha amarela.',
  },
]

export default function SedayEquipamentos() {
  return (
    <>
      <Helmet>
        <title>Seday Equipamentos | Grupo Seday</title>
        <meta
          name="description"
          content="Seday Equipamentos: locação de máquinas e equipamentos e transporte de pesados com 27 anos de competência e credibilidade."
        />
      </Helmet>

      <div className="bg-sd-bg font-sd">
        <SedayHeader />

        <main>
          <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-4 px-3 py-1 bg-sd-primary/20 text-sd-primary text-xs font-bold uppercase tracking-widest">
                Seday Equipamentos
              </span>
              <h1 className="font-black uppercase text-white text-4xl md:text-5xl leading-[0.95] mb-4">
                Entrega de soluções robustas para operação industrial.
              </h1>
              <p className="text-sd-onSurfaceVariant text-base md:text-lg mb-8">
                A Seday Equipamentos atua com foco em desempenho, confiabilidade e apoio contínuo
                para clientes que buscam eficiência e segurança, atendendo siderúrgicas, mineradoras,
                construtoras e empresas terceiras.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/5531995324129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sd-primary text-white px-6 py-3 font-bold uppercase text-sm hover:opacity-90 transition-opacity"
                >
                  Fale conosco
                </a>
                <Link
                  to="/seday-equipamentos/produtos"
                  className="border border-white text-white px-6 py-3 font-bold uppercase text-sm hover:bg-white hover:text-sd-bg transition-colors"
                >
                  Conheça nossos equipamentos
                </Link>
                <Link
                  to="/seday-equipamentos/historia"
                  className="border border-sd-outline text-sd-onSurfaceVariant px-6 py-3 font-bold uppercase text-sm hover:border-white hover:text-white transition-colors"
                >
                  Conheça nossa história
                </Link>
              </div>
            </div>
            <img
              className="w-full max-w-md mx-auto"
              src="/img/logos/seday-logo-gps.svg"
              alt="Logo Seday Equipamentos"
            />
          </section>

          <section className="max-w-6xl mx-auto px-6 pb-16">
            <h2 className="font-black uppercase text-white text-2xl md:text-3xl mb-8 text-center">
              Nossos serviços
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {servicos.map((s) => (
                <article key={s.title} className="border border-sd-outline/40 bg-sd-surface p-6">
                  <h3 className="font-bold uppercase text-sd-primary text-lg mb-2">{s.title}</h3>
                  <p className="text-sd-onSurfaceVariant text-sm">{s.text}</p>
                </article>
              ))}
            </div>
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

          <section className="max-w-6xl mx-auto px-6 pb-20">
            <h2 className="font-black uppercase text-white text-2xl md:text-3xl mb-4 text-center">
              Redes sociais
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {redes.map(({ icon: Icon, label, value, href, disabled }) =>
                disabled ? (
                  <div
                    key={label}
                    className="flex items-center gap-3 border border-sd-outline/40 bg-sd-surface p-4 opacity-50 cursor-not-allowed"
                  >
                    <Icon className="text-sd-onSurfaceVariant shrink-0" size={22} aria-hidden="true" />
                    <div>
                      <p className="font-bold uppercase text-white text-xs">{label}</p>
                      <p className="text-sd-onSurfaceVariant text-xs">{value}</p>
                    </div>
                  </div>
                ) : (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 border border-sd-outline/40 bg-sd-surface hover:border-sd-primary transition-colors p-4"
                  >
                    <Icon className="text-sd-primary shrink-0" size={22} aria-hidden="true" />
                    <div>
                      <p className="font-bold uppercase text-white text-xs">{label}</p>
                      <p className="text-sd-onSurfaceVariant text-xs">{value}</p>
                    </div>
                  </a>
                )
              )}
            </div>
          </section>
        </main>

        <GrupoSeday />
        <SedayFooter />
      </div>
    </>
  )
}

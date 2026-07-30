const logos = [
  { src: '/img/Empresas/GPS.svg', name: 'Grupo GPS', href: 'https://gpssa.com.br/' },
  { src: '/img/Empresas/USIMINAS.svg', name: 'Usiminas', href: 'https://www.usiminas.com/' },
  { src: '/img/Empresas/MRS.svg', name: 'MRS Logística', href: 'https://www.mrs.com.br/' },
  { src: '/img/Empresas/MAGNESITA.svg', name: 'RHI Magnesita', href: 'https://www.rhimagnesita.com/pt/' },
  { src: '/img/Empresas/VALE.svg', name: 'Vale', href: 'https://vale.com/pt' },
  { src: '/img/Empresas/VLI.svg', name: 'VLI', href: 'https://www.vli-logistica.com.br/' },
  { src: '/img/Empresas/MIP.svg', name: 'MIP Engenharia', href: 'https://mipengenharia.com.br/' },
  { src: '/img/Empresas/MILPLAN.svg', name: 'Milplan', href: 'https://sustentabilidade.milplan.com.br/' },
  { src: '/img/Empresas/TIMKEN.svg', name: 'Timken', href: 'https://www.timkenstorebrasil.com.br/' },
  { src: '/img/Empresas/ATERPA.svg', name: 'Aterpa', href: 'https://www.grupoaterpa.com.br/' },
  { src: '/img/Empresas/REFRAMAX.svg', name: 'Reframax', href: 'https://reframax.com.br/portal/' },
  { src: '/img/Empresas/TERRAÇO.svg', name: 'Terraço', href: 'https://construtoraterraco.com.br/' },
]

const row1 = logos.slice(0, 6)
const row2 = logos.slice(6)

function CarouselLogo({ src, name, href }) {
  const inner = (
    <div className="logo-item">
      <img className="client-logo-img" src={src} alt={name} loading="eager" decoding="async" />
    </div>
  )

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Visitar site ${name}`}>
      {inner}
    </a>
  ) : (
    inner
  )
}

export default function ClientsMarquee() {
  return (
    <section id="clientes" className="section-shell reveal marquee-section">
      <div className="section-heading section-heading--centered">
        <h2 className="marquee-title">
          <span>EMPRESAS QUE CONFIAM NO</span>
          <strong>GRUPO SEDAY</strong>
        </h2>
      </div>

      <div className="logo-carousel">
        <div className="logo-track row-1 hardware-accel">
          <div className="logo-set">
            {row1.map((logo) => (
              <CarouselLogo key={logo.name} {...logo} />
            ))}
          </div>
          <div className="logo-set" aria-hidden="true">
            {row1.map((logo) => (
              <CarouselLogo key={`${logo.name}-dup`} {...logo} />
            ))}
          </div>
        </div>
        <div className="logo-track row-2 hardware-accel">
          <div className="logo-set">
            {row2.map((logo) => (
              <CarouselLogo key={logo.name} {...logo} />
            ))}
          </div>
          <div className="logo-set" aria-hidden="true">
            {row2.map((logo) => (
              <CarouselLogo key={`${logo.name}-dup`} {...logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

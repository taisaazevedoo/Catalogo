import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const empresas = [
  { logo: '/img/logos/logo-avapex-transportes-v1.svg', alt: 'Avapex Transportes', href: '/avapex-transportes', height: '72px', label: 'Início' },
  { logo: '/img/logos/seday-logo-gps.svg', alt: 'Seday Equipamentos', href: '/seday-equipamentos', height: '110px', label: 'Visitar site' },
  { logo: '/img/logos/logo-innomach-equipamentos-branco.svg', alt: 'Innomach', href: '/innomach', height: '72px', label: 'Visitar site' },
]

export default function GrupoSeday() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="grupo-seday-section">
      <p className="grupo-seday-tagline">
        Movendo negócios, entregando resultados.{' '}
        <strong>Descubra a força do Grupo Seday.</strong>
      </p>

      <img className="grupo-seday-logo" src="/img/logos/grupo-seday-topo.png" alt="Grupo Seday" />

      <div ref={ref} className="grupo-seday-companies">
        {empresas.map((empresa, i) => (
          <Link
            key={empresa.alt}
            to={empresa.href}
            aria-label={`Ir para ${empresa.alt}`}
            className="grupo-seday-item"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${i * 150}ms`,
            }}
          >
            <img src={empresa.logo} alt={empresa.alt} style={{ height: empresa.height }} />
            <span className="grupo-seday-underline" />
            <span
              className="grupo-seday-label"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(8px)',
                transitionDelay: `${i * 150 + 300}ms`,
              }}
            >
              {empresa.label}
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
                className="grupo-seday-arrow"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

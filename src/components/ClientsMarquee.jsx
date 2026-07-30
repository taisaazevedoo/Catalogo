const clients = [
  { src: '/img/clientes/aterpa.webp', alt: 'Aterpa' },
  { src: '/img/clientes/gps.webp', alt: 'GPS' },
  { src: '/img/clientes/magnesita.webp', alt: 'Magnesita' },
  { src: '/img/clientes/milplan.webp', alt: 'Milplan' },
  { src: '/img/clientes/mip.webp', alt: 'MIP' },
  { src: '/img/clientes/mrs-amarelo.webp', alt: 'MRS' },
  { src: '/img/clientes/reframax.webp', alt: 'Reframax' },
  { src: '/img/clientes/terraco.webp', alt: 'Terraco' },
  { src: '/img/clientes/timken.webp', alt: 'Timken' },
  { src: '/img/clientes/usiminas.webp', alt: 'Usiminas' },
  { src: '/img/clientes/vale.webp', alt: 'Vale' },
  { src: '/img/clientes/vli.webp', alt: 'VLI' },
]

export default function ClientsMarquee() {
  const track = [...clients, ...clients]

  return (
    <section id="clientes" className="section-shell reveal marquee-section">
      <div className="section-heading section-heading--centered">
        <h2 className="marquee-title">
          <span>EMPRESAS QUE CONFIAM NO</span>
          <strong>GRUPO SEDAY</strong>
        </h2>
      </div>
      <div className="marquee">
        <div className="marquee-band"></div>
        <div className="marquee-track">
          {track.map((client, index) => (
            <div className="marquee-item" key={`${client.alt}-${index}`}>
              <img src={client.src} alt={client.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

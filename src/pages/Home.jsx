import { Helmet } from 'react-helmet-async'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Companies from '../components/Companies.jsx'
import Services from '../components/Services.jsx'
import Segments from '../components/Segments.jsx'
import ClientsMarquee from '../components/ClientsMarquee.jsx'
import useReveal from '../hooks/useReveal.js'

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#empresas', label: 'Empresas' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#segmentos', label: 'Segmentos' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#contato', label: 'Contato' },
]

export default function Home() {
  useReveal()

  return (
    <>
      <Helmet>
        <title>Grupo Seday | Catálogo Virtual</title>
        <meta
          name="description"
          content="Catálogo virtual do Grupo Seday com informações sobre Seday Equipamentos, Avapex Transportes e Innomach."
        />
      </Helmet>
      <Header links={navLinks} />
      <main>
        <Hero />
        <About />
        <Companies />
        <Services />
        <Segments />
        <ClientsMarquee />
      </main>
      <Footer />
    </>
  )
}

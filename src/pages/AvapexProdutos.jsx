import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Truck } from 'lucide-react'
import AvapexHeader from '../components/avapex/AvapexHeader.jsx'
import AvapexFooter from '../components/avapex/AvapexFooter.jsx'
import { avapexEquipamentos } from '../data/avapexEquipamentos.js'

export default function AvapexProdutos() {
  return (
    <>
      <Helmet>
        <title>Produtos | Avapex Transportes</title>
        <meta name="description" content="Fotos e vídeos dos equipamentos da frota Avapex Transportes." />
      </Helmet>

      <div className="bg-avpx-navy font-avpxBody min-h-screen">
        <AvapexHeader />

        <main className="max-w-6xl mx-auto px-6 py-16">
          <span className="inline-block mb-4 px-3 py-1 rounded-none bg-white/10 text-white text-xs font-avpxHead font-bold uppercase tracking-widest">
            Produtos
          </span>
          <h1 className="font-avpxHead font-extrabold uppercase text-white text-3xl md:text-4xl mb-3">
            Nossa frota de equipamentos
          </h1>
          <p className="text-avpx-iron mb-2 max-w-2xl">
            Selecione um equipamento para ver fotos e, quando disponível, o vídeo de apresentação.
          </p>
          <p className="text-avpx-iron mb-10 max-w-2xl">
            Implementamos de acordo com a sua necessidade.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {avapexEquipamentos.map((eq) => (
              <Link
                key={eq.slug}
                to={`/avapex-transportes/produtos/${eq.slug}`}
                className="group border border-avpx-steel bg-white/5 hover:border-avpx-yellow transition-colors p-5 flex flex-col gap-3"
              >
                <div className="h-28 flex items-center justify-center bg-avpx-steel/50">
                  <Truck className="text-avpx-yellow" size={36} aria-hidden="true" />
                </div>
                <h2 className="font-avpxHead font-bold uppercase text-white text-base group-hover:text-avpx-yellow transition-colors">
                  {eq.nome}
                </h2>
              </Link>
            ))}
          </div>
        </main>

        <AvapexFooter />
      </div>
    </>
  )
}

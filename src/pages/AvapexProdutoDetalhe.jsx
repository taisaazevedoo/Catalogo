import { Helmet } from 'react-helmet-async'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Truck, Clock } from 'lucide-react'
import AvapexHeader from '../components/avapex/AvapexHeader.jsx'
import AvapexFooter from '../components/avapex/AvapexFooter.jsx'
import { avapexEquipamentos } from '../data/avapexEquipamentos.js'

export default function AvapexProdutoDetalhe() {
  const { slug } = useParams()
  const equipamento = avapexEquipamentos.find((eq) => eq.slug === slug)

  if (!equipamento) {
    return <Navigate to="/avapex-transportes/produtos" replace />
  }

  return (
    <>
      <Helmet>
        <title>{equipamento.nome} | Avapex Transportes</title>
        <meta name="description" content={`Fotos e vídeo do equipamento ${equipamento.nome} da Avapex Transportes.`} />
      </Helmet>

      <div className="bg-avpx-navy font-avpxBody min-h-screen">
        <AvapexHeader />

        <main className="max-w-4xl mx-auto px-6 py-16">
          <Link
            to="/avapex-transportes/produtos"
            className="text-avpx-iron hover:text-avpx-yellow text-sm font-avpxHead font-bold uppercase mb-6 inline-block"
          >
            ← Voltar aos produtos
          </Link>

          <h1 className="font-avpxHead font-extrabold uppercase text-white text-3xl md:text-4xl mb-6">
            {equipamento.nome}
          </h1>

          <div className="h-64 md:h-80 flex items-center justify-center bg-avpx-steel/50 border border-avpx-steel mb-6">
            <Truck className="text-avpx-yellow" size={64} aria-hidden="true" />
          </div>

          <div className="border border-avpx-steel bg-white/5 p-6 flex items-start gap-3">
            <Clock className="text-avpx-yellow shrink-0 mt-0.5" size={20} aria-hidden="true" />
            <div>
              <h2 className="font-avpxHead font-bold uppercase text-white text-lg mb-1">
                Vídeo em breve
              </h2>
              <p className="text-avpx-iron text-sm">
                Quando este equipamento tiver vídeo de demonstração, ele será aberto diretamente do
                Google Drive a partir desta página.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="https://wa.me/5531995324129"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-avpx-yellow text-avpx-navy px-6 py-3 font-avpxHead font-bold uppercase text-sm hover:bg-yellow-400 transition-colors"
            >
              Perguntar sobre este equipamento
            </a>
          </div>
        </main>

        <AvapexFooter />
      </div>
    </>
  )
}

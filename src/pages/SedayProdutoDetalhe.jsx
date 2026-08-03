import { Helmet } from 'react-helmet-async'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Truck, Clock } from 'lucide-react'
import SedayHeader from '../components/seday/SedayHeader.jsx'
import SedayFooter from '../components/seday/SedayFooter.jsx'
import { sedayEquipamentos } from '../data/sedayEquipamentos.js'

export default function SedayProdutoDetalhe() {
  const { slug } = useParams()
  const equipamento = sedayEquipamentos.find((eq) => eq.slug === slug)

  if (!equipamento) {
    return <Navigate to="/seday-equipamentos/produtos" replace />
  }

  return (
    <>
      <Helmet>
        <title>{equipamento.nome} | Seday Equipamentos</title>
        <meta name="description" content={`Fotos e vídeo do equipamento ${equipamento.nome} da Seday Equipamentos.`} />
      </Helmet>

      <div className="bg-sd-bg font-sd min-h-screen">
        <SedayHeader />

        <main className="max-w-4xl mx-auto px-6 py-16">
          <Link
            to="/seday-equipamentos/produtos"
            className="text-sd-onSurfaceVariant hover:text-sd-primary text-sm font-bold uppercase mb-6 inline-block"
          >
            ← Voltar aos produtos
          </Link>

          <h1 className="font-black uppercase text-white text-3xl md:text-4xl mb-6">
            {equipamento.nome}
          </h1>

          <div className="h-64 md:h-80 flex items-center justify-center bg-sd-outline/20 border border-sd-outline/40 mb-6">
            <Truck className="text-sd-primary" size={64} aria-hidden="true" />
          </div>

          <div className="border border-sd-outline/40 bg-sd-surface p-6 flex items-start gap-3">
            <Clock className="text-sd-primary shrink-0 mt-0.5" size={20} aria-hidden="true" />
            <div>
              <h2 className="font-bold uppercase text-white text-lg mb-1">Vídeo em breve</h2>
              <p className="text-sd-onSurfaceVariant text-sm">
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
              className="inline-flex bg-sd-primary text-white px-6 py-3 font-bold uppercase text-sm hover:opacity-90 transition-opacity"
            >
              Perguntar sobre este equipamento
            </a>
          </div>
        </main>

        <SedayFooter />
      </div>
    </>
  )
}

import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Truck } from 'lucide-react'
import SedayHeader from '../components/seday/SedayHeader.jsx'
import SedayFooter from '../components/seday/SedayFooter.jsx'
import { sedayEquipamentos } from '../data/sedayEquipamentos.js'

export default function SedayProdutos() {
  return (
    <>
      <Helmet>
        <title>Produtos | Seday Equipamentos</title>
        <meta name="description" content="Fotos e vídeos dos equipamentos da frota Seday Equipamentos." />
      </Helmet>

      <div className="bg-sd-bg font-sd min-h-screen">
        <SedayHeader />

        <main className="max-w-6xl mx-auto px-6 py-16">
          <span className="inline-block mb-4 px-3 py-1 bg-sd-primary/20 text-sd-primary text-xs font-bold uppercase tracking-widest">
            Produtos
          </span>
          <h1 className="font-black uppercase text-white text-3xl md:text-4xl mb-3">
            Nossa frota de equipamentos
          </h1>
          <p className="text-sd-onSurfaceVariant mb-2 max-w-2xl">
            Selecione um equipamento para ver fotos e, quando disponível, o vídeo de apresentação.
          </p>
          <p className="text-sd-onSurfaceVariant mb-10 max-w-2xl">
            Implementamos de acordo com a sua necessidade.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {sedayEquipamentos.map((eq) => (
              <Link
                key={eq.slug}
                to={`/seday-equipamentos/produtos/${eq.slug}`}
                className="group border border-sd-outline/40 bg-sd-surface hover:border-sd-primary transition-colors p-5 flex flex-col gap-3"
              >
                <div className="h-28 flex items-center justify-center bg-sd-outline/20">
                  <Truck className="text-sd-primary" size={36} aria-hidden="true" />
                </div>
                <h2 className="font-bold uppercase text-white text-base group-hover:text-sd-primary transition-colors">
                  {eq.nome}
                </h2>
              </Link>
            ))}
          </div>
        </main>

        <SedayFooter />
      </div>
    </>
  )
}

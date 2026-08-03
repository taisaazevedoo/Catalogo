import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { MessageCircle, Mail, MapPin, Globe, Instagram } from 'lucide-react'
import AvapexHeader from '../components/avapex/AvapexHeader.jsx'
import AvapexFooter from '../components/avapex/AvapexFooter.jsx'
import GrupoSeday from '../components/GrupoSeday.jsx'

export default function AvapexHistoria() {
  return (
    <>
      <Helmet>
        <title>Nossa História | Avapex Transportes</title>
        <meta
          name="description"
          content="Conheça a trajetória de 18 anos da Avapex Transportes e sua certificação ISO 9001."
        />
      </Helmet>

      <div className="bg-avpx-navy font-avpxBody">
        <AvapexHeader />

        <main>
          <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-4 px-3 py-1 rounded-none bg-white/10 text-white text-xs font-avpxHead font-bold uppercase tracking-widest">
                Nossa história
              </span>
              <h1 className="font-avpxHead font-extrabold uppercase text-white text-4xl md:text-5xl leading-[0.95] mb-4">
                Qualidade que inspira confiança.
              </h1>
              <p className="text-avpx-iron text-base md:text-lg mb-8">
                A Avapex Transportes celebra 18 anos de excelência no mercado, consolidando-se pela
                credibilidade e compromisso com resultados. Especializada em transporte rodoviário,
                movimentação de cargas e locação de máquinas e equipamentos (com ou sem mão de obra),
                atende principalmente os setores de mineração, indústria e ferroviário.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/avapex-transportes"
                  className="bg-avpx-yellow text-avpx-navy px-6 py-3 font-avpxHead font-bold uppercase text-sm hover:bg-yellow-400 transition-colors"
                >
                  Conhecer a empresa
                </Link>
                <a
                  href="https://wa.me/5531995324129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white text-white px-6 py-3 font-avpxHead font-bold uppercase text-sm hover:bg-white hover:text-avpx-navy transition-colors"
                >
                  Fale conosco
                </a>
                <a
                  href="mailto:comercial@avapex.com.br"
                  className="border border-avpx-steel text-avpx-iron px-6 py-3 font-avpxHead font-bold uppercase text-sm hover:border-avpx-yellow hover:text-white transition-colors"
                >
                  Enviar e-mail
                </a>
              </div>
            </div>
            <img
              className="w-full max-w-md mx-auto"
              src="/img/logos/logo-avapex-transportes-v2.svg"
              alt="Logo Avapex Transportes"
            />
          </section>

          <section className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="font-avpxHead font-bold uppercase text-white text-2xl md:text-3xl mb-4">
                Nossa localização
              </h2>
              <p className="text-avpx-iron text-sm md:text-base">
                Com o objetivo de otimizar suas operações logísticas, a Avapex está estrategicamente
                localizada com sua matriz em Conselheiro Lafaiete/MG, às margens da BR-040, um posto
                avançado em Belo Horizonte/MG, e filiais nos estados de São Paulo e Rio de Janeiro.
                Além de contar com unidades de apoio em Juatuba/MG, Paraopeba/MG e Ipatinga/MG.
              </p>
            </div>
            <div className="h-64 md:h-72 border border-avpx-steel overflow-hidden">
              <iframe
                className="w-full h-full"
                title="Mapa de localização da Avapex Transportes"
                src="https://maps.google.com/maps?q=Rodovia%20BR040,%2022750,%20Barreira%20-%20Conselheiro%20Lafaiete%20/%20MG&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>

          <section className="max-w-6xl mx-auto px-6 pb-16">
            <article className="border border-avpx-steel bg-white/5 p-6 md:p-8">
              <h2 className="font-avpxHead font-bold uppercase text-avpx-yellow text-xl md:text-2xl mb-3">
                Certificação ISO 9001
              </h2>
              <p className="text-avpx-iron text-sm md:text-base mb-3">
                Em julho de 2024, a Avapex alcançou uma importante conquista ao obter a certificação
                ISO 9001, reconhecendo seu compromisso contínuo com a qualidade e a excelência em seus
                processos.
              </p>
              <p className="text-avpx-iron text-sm md:text-base">
                Este marco reafirma a dedicação da empresa em oferecer soluções logísticas eficientes
                e aprimoradas, garantindo a satisfação de seus clientes e a melhoria constante de seus
                serviços.
              </p>
            </article>
          </section>

          <section className="max-w-6xl mx-auto px-6 pb-20">
            <article className="border border-avpx-steel bg-white/5 p-6 md:p-8">
              <h2 className="font-avpxHead font-bold uppercase text-avpx-yellow text-xl md:text-2xl mb-6">
                Contato
              </h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 shrink-0 bg-avpx-yellow flex items-center justify-center">
                      <MessageCircle className="text-avpx-navy" size={18} aria-hidden="true" />
                    </div>
                    <p className="font-avpxHead font-bold uppercase text-white text-xs tracking-wider">
                      Central de Atendimento
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href="https://wa.me/5531995324129"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-2 bg-avpx-yellow text-avpx-navy px-4 py-2 text-sm font-avpxHead font-bold hover:bg-yellow-400 transition-colors"
                    >
                      Taís · +55 31 9 9532-4129
                    </a>
                    <a
                      href="https://wa.me/5531984657066"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-2 bg-avpx-yellow text-avpx-navy px-4 py-2 text-sm font-avpxHead font-bold hover:bg-yellow-400 transition-colors"
                    >
                      Joice · +55 31 9 8465-7066
                    </a>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 shrink-0 bg-avpx-steel/60 flex items-center justify-center">
                      <Mail className="text-avpx-yellow" size={18} aria-hidden="true" />
                    </div>
                    <p className="font-avpxHead font-bold uppercase text-white text-xs tracking-wider">
                      E-mail Corporativo
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href="mailto:comercial@avapex.com.br"
                      className="inline-flex w-fit items-center gap-2 border border-avpx-steel text-avpx-iron px-4 py-2 text-sm hover:border-avpx-yellow hover:text-white transition-colors"
                    >
                      comercial@avapex.com.br
                    </a>
                    <a
                      href="mailto:comercial3@avapex.com.br"
                      className="inline-flex w-fit items-center gap-2 border border-avpx-steel text-avpx-iron px-4 py-2 text-sm hover:border-avpx-yellow hover:text-white transition-colors"
                    >
                      comercial3@avapex.com.br
                    </a>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 shrink-0 bg-avpx-steel/60 flex items-center justify-center">
                      <MapPin className="text-avpx-yellow" size={18} aria-hidden="true" />
                    </div>
                    <p className="font-avpxHead font-bold uppercase text-white text-xs tracking-wider">
                      Matriz
                    </p>
                  </div>
                  <p className="text-avpx-iron text-sm">
                    Rodovia BR-040, 22750, Barreira – Conselheiro Lafaiete/MG
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 shrink-0 bg-avpx-steel/60 flex items-center justify-center">
                      <Globe className="text-avpx-yellow" size={18} aria-hidden="true" />
                    </div>
                    <p className="font-avpxHead font-bold uppercase text-white text-xs tracking-wider">
                      Site &amp; Redes
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href="https://avapex.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-2 border border-avpx-steel text-avpx-iron px-4 py-2 text-sm hover:border-avpx-yellow hover:text-white transition-colors"
                    >
                      <Globe size={14} aria-hidden="true" /> avapex.com.br
                    </a>
                    <a
                      href="https://www.instagram.com/avapextransportes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-2 border border-avpx-steel text-avpx-iron px-4 py-2 text-sm hover:border-avpx-yellow hover:text-white transition-colors"
                    >
                      <Instagram size={14} aria-hidden="true" /> @avapextransportes
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </main>

        <GrupoSeday />
        <AvapexFooter />
      </div>
    </>
  )
}

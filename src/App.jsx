import { useEffect, useLayoutEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import SedayEquipamentos from './pages/SedayEquipamentos.jsx'
import SedayHistoria from './pages/SedayHistoria.jsx'
import SedayProdutos from './pages/SedayProdutos.jsx'
import SedayProdutoDetalhe from './pages/SedayProdutoDetalhe.jsx'
import SedayRedesSociais from './pages/SedayRedesSociais.jsx'
import AvapexTransportes from './pages/AvapexTransportes.jsx'
import AvapexHistoria from './pages/AvapexHistoria.jsx'
import AvapexProdutos from './pages/AvapexProdutos.jsx'
import AvapexProdutoDetalhe from './pages/AvapexProdutoDetalhe.jsx'
import AvapexRedesSociais from './pages/AvapexRedesSociais.jsx'
import Innomach from './pages/Innomach.jsx'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useLayoutEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/seday-equipamentos" element={<SedayEquipamentos />} />
      <Route path="/seday-equipamentos/historia" element={<SedayHistoria />} />
      <Route path="/seday-equipamentos/produtos" element={<SedayProdutos />} />
      <Route path="/seday-equipamentos/produtos/:slug" element={<SedayProdutoDetalhe />} />
      <Route path="/seday-equipamentos/redes-sociais" element={<SedayRedesSociais />} />
      <Route path="/avapex-transportes" element={<AvapexTransportes />} />
      <Route path="/avapex-transportes/historia" element={<AvapexHistoria />} />
      <Route path="/avapex-transportes/produtos" element={<AvapexProdutos />} />
      <Route path="/avapex-transportes/produtos/:slug" element={<AvapexProdutoDetalhe />} />
      <Route path="/avapex-transportes/redes-sociais" element={<AvapexRedesSociais />} />
      <Route path="/innomach" element={<Innomach />} />
    </Routes>
  )
}

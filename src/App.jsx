import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import SedayEquipamentos from './pages/SedayEquipamentos.jsx'
import SedayHistoria from './pages/SedayHistoria.jsx'
import AvapexTransportes from './pages/AvapexTransportes.jsx'
import AvapexHistoria from './pages/AvapexHistoria.jsx'
import Innomach from './pages/Innomach.jsx'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const element = document.querySelector(location.hash)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }, [location])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/seday-equipamentos" element={<SedayEquipamentos />} />
      <Route path="/seday-equipamentos/historia" element={<SedayHistoria />} />
      <Route path="/avapex-transportes" element={<AvapexTransportes />} />
      <Route path="/avapex-transportes/historia" element={<AvapexHistoria />} />
      <Route path="/innomach" element={<Innomach />} />
    </Routes>
  )
}

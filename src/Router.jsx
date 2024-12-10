import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importa tus páginas
import Home from './pages/Home'
//import About from './pages/About'
//import Projects from './pages/Projects'
//import Contact from './pages/Contact'
//import Navbar from './components/Navbar'
import App from './App'

function AppRouter() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<App/>} /> {/* Ruta principal con tu App original */}
        <Route path="/home" element={<Home />} />
        {/*<Route path="/about" element={<About />} />
         <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  )
}

export default AppRouter
import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo1.png";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (

    <nav className="fixed py-6 top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between space-x-20">
        {/* Logo */}
        <a href="/" className="flex items-center ml-20">
          <img src={logo} alt="Logo" className="w-32 sm:w-40" />
        </a>

        {/* Menú Hamburguesa (para móviles) */}
        <button
          className="text-white text-2xl lg:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Contenedor del Nombre y los Enlaces */}
        <div
          className={`flex-grow lg:flex items-center lg:justify-center lg:space-x-8 ${isMenuOpen ? "block" : "hidden"
            }`}
        >
          {/* Nombre */}
          <div className="text-center text-xl lg:text-3xl font-bold mb-4 lg:mb-0">
            Innovación y Creatividad en Cada Proyecto
          </div>

          {/* Enlaces */}
          <div className="flex flex-col lg:flex-row lg:space-x-8 text-lg font-bold">
            <Link to="/" className="hover:text-indigo-400">
              Inicio
            </Link>
            <Link to="/about" className="hover:text-indigo-400">
              Sobre Mí
            </Link>
            <Link to="/projects" className="hover:text-indigo-400">
              Proyectos
            </Link>
            <a
              href="https://wa.link/uo7roo"
              className="hover:text-indigo-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contacto
            </a>

          </div>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;

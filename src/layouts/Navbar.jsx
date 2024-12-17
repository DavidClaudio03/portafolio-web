import React from "react";
import { Link } from "react-router-dom";
import Modal from "../components/PantallaFlotante"; // Asegúrate de tener la ruta correcta al componente Modal

import "../Animation/Navbar/AnimacionFondo.css"
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed py-7 top-0 left-0 w-full bg-gray-100 bg-opacity-80 text-black shadow-md z-50">
        <ul class="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
        <div className="circle context container mx-auto flex items-center justify-start px-0">
            
          
        {/* Sección izquierda: Nombre y descripción */}
        <div className="font-extrabold flex items-center space-x-16 lg:space-x-28 md:space-x-2 ml-auto mr-auto ">
          {/* Nombre */}
          <div className="text-lg sm:text-2xl md:text-3xl lg:text-2xl xl:text-2xl text-indigo-700">
            David Claudio <sup>™</sup>
          </div>

          {/* Descripción (visible solo en pantallas grandes) */}
          <div className="hidden lg:block text-2xl sm:text-base md:text-lg lg:text-xl xl:text-3xl font-medium">
            Innovación y Creatividad en Cada Proyecto
          </div>
        </div>

        {/* Botón de Menú (para móviles) */}
        <button
          className="lg:hidden text-xl sm:text-2xl md:text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
        >
          ☰
        </button>

        {/* Enlaces del menú (pantallas grandes) */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl ml-auto mr-auto">
          <Link to="/" className="hover:text-indigo-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-indigo-400">
            About
          </Link>
          <Link to="/projects" className="hover:text-indigo-400">
            Projects
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
        

        {/* Modal del Menú (pantallas pequeñas) */}
        <Modal isOpen={isMenuOpen} onClose={handleCloseMenu}>
          <div className="flex flex-col text-center space-y-4 text-lg font-bold">
            <Link to="/" onClick={handleCloseMenu} className="hover:text-indigo-400">
              Home
            </Link>
            <Link to="/about" onClick={handleCloseMenu} className="hover:text-indigo-400">
              About
            </Link>
            <Link to="/projects" onClick={handleCloseMenu} className="hover:text-indigo-400">
              Projects
            </Link>
            <a
              href="https://wa.link/uo7roo"
              onClick={handleCloseMenu}
              className="hover:text-indigo-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contacto
            </a>
          </div>
        </Modal>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import Modal from "../components/PantallaFlotante"; // Asegúrate de tener la ruta correcta al componente Modal
import "../Animation/Navbar/AnimacionFondo.css";
import { FaHome, FaFolderOpen, FaMailBulk, FaUserSecret } from "react-icons/fa";
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
        <div className="font-extrabold flex items-center space-x-8 lg:space-x-20 md:space-x-2 ml-auto mr-auto ">
          {/* Nombre */}
          <div className="text-lg sm:text-2xl md:text-3xl lg:text-2xl xl:text-2xl text-indigo-700">
            David Claudio <sup>™</sup>
          </div>

          {/* Descripción (visible solo en pantallas grandes) */}
          <div className="hidden lg:block text-2xl sm:text-base md:text-lg lg:text-xl xl:text-3xl font-medium">
            Innovation and Creativity in Every Project
          </div>
        </div>

        {/* Botón de Menú (para móviles) */}
        <button
          className="mr-8 lg:hidden text-xl sm:text-2xl md:text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
        >
          ☰
        </button>

        {/* Enlaces del menú (pantallas grandes) */}
        <div className="hidden lg:flex lg:items-center lg:space-x-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl ml-auto mr-auto">
          <li id="item" className="item_1">
            <div className="inner_item inner_item_1 flex items-center space-x-2">
              <a href="#home" className="flex items-center space-x-2 hover:text-indigo-400">
                <FaHome className="ml-4" size={30} />
              </a>
            </div>
          </li>
          <li id="item" className="item_1">
            <div className="inner_item inner_item_2 flex items-center space-x-2">
              <a href="#about" className="flex items-center space-x-2 hover:text-indigo-400">
                <FaFolderOpen className="ml-4" size={30}/>
              </a>
            </div>
          </li>
          <li id="item" className="item_1">
            <div className="inner_item inner_item_3 flex items-center space-x-2">
              <a href="#projects" className="flex items-center space-x-2 hover:text-indigo-400">
                <FaMailBulk className="ml-4" size={30} />
              </a>
            </div>
          </li>
          <li id="item" className="item_1">
            <div className="inner_item inner_item_4 flex items-center space-x-2">

              <a
                href="https://wa.link/uo7roo"
                className="hover:text-indigo-400 ml-4" size={30}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaUserSecret />
              </a>
            </div>
          </li>
        </div>


        {/* Modal del Menú (pantallas pequeñas) */}
        <Modal isOpen={isMenuOpen} onClose={handleCloseMenu}>
          <div className="flex flex-col text-center justify-center items-center space-y-4 text-lg font-bold">
            <li id="item" className="item_1">
              <div className="inner_item inner_item_1 flex items-center space-x-2">
                <FaHome />
              </div>
            </li>
            <li id="item" className="item_1">
              <div className="inner_item inner_item_2 flex items-center space-x-2">
                <FaFolderOpen />
              </div>
            </li>
            <li id="item" className="item_1">
              <div className="inner_item inner_item_3 flex items-center space-x-2">
                <FaMailBulk />
              </div>
            </li>
            <li id="item" className="item_1">
              <div className="inner_item inner_item_4 flex items-center space-x-2">
                <FaUserSecret />
                <a
                  href="https://wa.link/uo7roo"
                  className="hover:text-indigo-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                </a>
              </div>
            </li>
          </div>
        </Modal>
      </div>
    </nav >
  );
}

export default Navbar;

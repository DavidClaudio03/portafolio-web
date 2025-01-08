import React from 'react';
import Modal from "../components/PopupBase"
import { FaHome, FaFolderOpen, FaMailBulk, FaUserSecret } from "react-icons/fa"
import { RiMenu5Fill } from "react-icons/ri";
import "../Styles/Navbar/AnimationNombre.css"

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 max-w-screen-2xl flex items-center justify-between px-16 py-6">
        {/* Sección izquierda: Nombre y descripción */}
        <div className="font-extrabold flex items-center space-x-8 lg:space-x-20 md:space-x-2">
          <div className="shimmer text-lg sm:text-2xl md:text-3xl lg:text-2xl xl:text-2xl text-customIndigo">
            <h1 className="shimmer font-medium">David Claudio™</h1>
          </div>
        </div>

        {/* Botón de Menú (para móviles) */}
        <button
          data-toggle="modal"
          data-target="#myModal"
          className="btn btn-primary btn-lg lg:hidden text-xl sm:text-2xl md:text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
        >
          <RiMenu5Fill />
        </button>

        {/* Enlaces del menú (pantallas grandes) */}
        <ul className="hidden lg:flex lg:items-center text-xl lg:space-x-2 ml-auto">
          <li id="item" className="item_1">
            <div className="inner_item inner_item_1 flex items-center space-x-2">
              <a
                href="#home"
                className="flex items-center space-x-2 hover:text-indigo-400"
              >
                <FaHome className="ml-4" size={30} />
              </a>
            </div>
          </li>
          <li id="item" className="item_1">
            <div className="inner_item inner_item_2 flex items-center space-x-2">
              <a
                href="#about"
                className="flex items-center space-x-2 hover:text-indigo-400"
              >
                <FaFolderOpen className="ml-4" size={30} />
              </a>
            </div>
          </li>
          <li id="item" className="item_1">
            <div className="inner_item inner_item_3 flex items-center space-x-2">
              <a
                href="#projects"
                className="flex items-center space-x-2 hover:text-indigo-400"
              >
                <FaMailBulk className="ml-4" size={30} />
              </a>
            </div>
          </li>
          <li id="item" className="item_1">
            <div className="inner_item inner_item_4 flex items-center space-x-2">
              <a
                href="https://wa.link/uo7roo"
                className="hover:text-indigo-400 ml-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaUserSecret />
              </a>
            </div>
          </li>
        </ul>

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
                ></a>
              </div>
            </li>
          </div>
        </Modal>
      </div>

    </div>
  );
};

export default NavBar;


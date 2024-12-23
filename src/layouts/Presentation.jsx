import React, { useState } from "react";
import "../Styles/PresentationCss/AnimationBorder.css"
import PantallaFlotante from "../components/PantallaFlotante";
import foto from "../image/perfil.png";
import cv from "../Document/ClaudioDavid_CV.pdf"
import Modal from "../components/PantallaFlotante"; // Asegúrate de tener la ruta correcta al componente Modal
import { FaHome, FaFolderOpen, FaMailBulk, FaUserSecret } from "react-icons/fa";
import { RiMenu5Fill } from "react-icons/ri";

function Presentation() {
  //Pantalla flotante
  const [isPantallaFlotanteOpen, setIsPantallaFlotanteOpen] = useState(false);
  const openPantalla = () => setIsPantallaFlotanteOpen(true);
  const closePantalla = () => setIsPantallaFlotanteOpen(false);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <section className="w-full h-screen px-4 sm:px-6 lg:px-8 bg-gray-800 ">
      <div className="max-w-7xl mx-auto pt-8 relative overflow-hidden py-20">
        {/* <nav className="fixed py-7 top-0 left-0 w-full bg-opacity-80 text-black shadow-md "> */}
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
        <div className="circle py-2 shadow-md z-50 absolute bg-opacity-80 rounded-md context container mx-auto flex items-center justify-start px-0">
          {/* Sección izquierda: Nombre y descripción */}
          <div className="font-extrabold text-white flex items-center space-x-8 lg:space-x-20 md:space-x-2 ml-auto mr-auto ">
            {/* Nombre */}
            <div className="text-lg sm:text-2xl md:text-3xl lg:text-2xl xl:text-2xl text-white">
              David Claudio <sup>™</sup>
            </div>

            {/* Descripción (visible solo en pantallas grandes) */}
            <div className="hidden lg:block text-2xl sm:text-base md:text-lg lg:text-xl xl:text-3xl font-medium">
              Innovation and Creativity in Every Project
            </div>
          </div>

          {/* Botón de Menú (para móviles) */}
          <button
            class="btn btn-primary btn-lg"
            data-toggle="modal"
            data-target="#myModal"
            className="mr-8 lg:hidden text-xl sm:text-2xl md:text-3xl focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
          >
            <RiMenu5Fill />
          </button>

          {/* Enlaces del menú (pantallas grandes) */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl ml-auto mr-auto">
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
                  size={30}
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
                  ></a>
                </div>
              </li>
            </div>
          </Modal>
        </div>
        {/* </nav > */}
        <div className="portfolio-experiment w-full flex flex-col items-center justify-center min-h-screen">
          <div className="animacionborde flex flex-col md:flex-row w-full max-w-screen-lg items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
            <span class="line -right"></span>
            <span class="line -top"></span>
            <span class="line -left"></span>
            <span class="line -bottom"></span>
            {/* Contenedor de texto */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-indigo-600">
                Desarrollador de Software
              </h1>
              <p className="mt-3 text-sm md:text-base text-white text-justify">
                Estudiante de Ingeniería de Software con una pasión ardiente por el desarrollo de software, enfocado
                en tecnologías web y móviles. Mi trayectoria se caracteriza por una combinación de creatividad,
                adaptabilidad y un firme compromiso con el aprendizaje continuo.
              </p>
              <div className="mt-5 flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
                <a
                  href="https://wa.link/uo7roo"
                  target="_blank"
                  className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm lg:px-4 lg:py-2 lg:text-base text-white bg-indigo-600 rounded-md hover:bg-indigo-700 text-center"
                >
                  Contáctame
                </a>
                <a
                  href="https://github.com/DavidClaudio03"
                  target="_blank"
                  className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm lg:px-4 lg:py-2 lg:text-base text-indigo-600 bg-white rounded-md hover:bg-gray-50 text-center"
                >
                  Ver Proyectos
                </a>
                <button
                  onClick={openPantalla}
                  className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm lg:px-4 lg:py-2 lg:text-base text-indigo-600 bg-white rounded-md hover:bg-gray-50 text-center"
                >
                  Visión Profesional
                </button>
                <a
                  href={cv}
                  download
                  className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm lg:px-4 lg:py-2 lg:text-base text-white bg-green-600 rounded-md hover:bg-green-700 text-center"
                >
                  Descargar CV
                </a>
              </div>
            </div>
            {/* Contenedor de imagen */}
            <div className="flex-shrink-0">
              <img
                src={foto}
                alt="Foto de perfil"
                className="w-24 h-24 md:w-48 md:h-48 object-cover rounded-full border-4 border-indigo-600"
              />
            </div>
          </div>
        </div>
      </div>
      {/* FIN - Primer contenido de Presentación */}
      <PantallaFlotante isOpen={isPantallaFlotanteOpen} onClose={closePantalla}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Visión
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Visión Profesional
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Mi objetivo es convertirme en un desarrollador Full Stack Senior,
              con una especialización emergente en ciberseguridad y hacking
              ético.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Aspiraciones
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Dominar múltiples tecnologías de desarrollo</li>
                    <li>
                      Desarrollar software innovador con integración de
                      Inteligencia Artificial
                    </li>
                    <li>Contribuir a soluciones de seguridad informática</li>
                  </ul>
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Retos Profesionales
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Desarrollo de software con Inteligencia Artificial</li>
                    <li>
                      Implementación de soluciones de seguridad informática
                    </li>
                    <li>Proyectos que desafíen mis límites tecnológicos</li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </PantallaFlotante>
    </section>
  );
}

export default Presentation;

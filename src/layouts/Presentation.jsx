import React, { useState } from "react";
import AnimationBody from "../Animation/Body/Ani_Body";
import NavBar from "./Navbar";
import AnimationBorder from "../Animation/Presentation/Ani_BorderPresentation"

import "../Styles/PresentationCss/AnimationBackground.css"
import PantallaFlotante from "../components/PantallaFlotante";
import foto from "../image/perfil.png";
import cv from "../Document/ClaudioDavid_CV.pdf"

function Presentation() {
  //Pantalla flotante
  const [isPantallaFlotanteOpen, setIsPantallaFlotanteOpen] = useState(false);
  const openPantalla = () => setIsPantallaFlotanteOpen(true);
  const closePantalla = () => setIsPantallaFlotanteOpen(false);
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 bg-neutral-900">
      <AnimationBody />
      <div className="max-w-7xl h-screen mx-auto pt-2 relative overflow-hidden py-10">
        <NavBar />
        <div className="portfolio-experiment md:pt-8 w-full flex flex-col items-center justify-center ">
          <div className="animacionborde flex flex-col md:flex-row flex-wrap w-full max-w-screen-lg min-h-[60vh] md:min-h-[50vh] items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 overflow-hidden">
            <AnimationBorder/> 
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-xl md:text-4xl font-bold text-indigo-600">
                Desarrollador de Software
              </h1>
              <p className="mt-3 text-sm md:text-base text-white text-justify">
                Estudiante de Ingeniería de Software con una pasión ardiente por el desarrollo de software, enfocado
                en tecnologías web y móviles. Mi trayectoria se caracteriza por una combinación de creatividad,
                adaptabilidad y un firme compromiso con el aprendizaje continuo.
              </p>
              <div className="mt-4 flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
                <a
                  href="https://wa.link/uo7roo"
                  target="_blank"
                  className="px-1 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm lg:px-4 lg:py-2 lg:text-base text-white bg-indigo-600 rounded-md hover:bg-indigo-700 text-center"
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
                className="w-24 h-24 md:w-48 md:h-48 object-cover rounded-full border-2 border-indigo-600"
              />
            </div>
          </div>
          {/* <div class="slider mt-6">
            <div class="move">
              <div class="box">
                <div class="circless">
                  <div></div>
                  <div></div>
                  <div></div>
                  <span></span>
                </div>
              </div>
              <div class="box">
                <div class="circless">
                  <div></div>
                  <div></div>
                  <div></div>
                  <span></span>
                </div>
              </div>
              <div class="box">
                <div class="circlesss">
                  <div></div>
                  <div></div>
                  <div></div>
                  <span></span>
                </div>
              </div>
              <div class="box">
                <div class="circless">
                  <div></div>
                  <div></div>
                  <div></div>
                  <span></span>
                </div>
              </div>
              <div class="box">
                <div class="circless">
                  <div></div>
                  <div></div>
                  <div></div>
                  <span></span>
                </div>
              </div>
              <div class="box">
                <div class="circless">
                  <div></div>
                  <div></div>
                  <div></div>
                  <span></span>
                </div>
              </div>
            </div> 
          </div>*/}
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

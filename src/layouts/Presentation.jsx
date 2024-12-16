import React, { useState } from "react";
import "./styles.css";
import PantallaFlotante from "../components/PantallaFlotante"

function Presentation() {
  //Pantalla flotante
  const [isPantallaFlotanteOpen, setIsPantallaFlotanteOpen] = useState(false);
  const openPantalla = () => setIsPantallaFlotanteOpen(true);
  const closePantalla = () => setIsPantallaFlotanteOpen(false);

  return (
    <section className="pt-2 mt-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* INICIO - Primer contenido de Presentación */}
      <div className="max-w-7xl mx-auto py-10 relative overflow-hidden">
        <div className="portfolio-experiment border-2 border-gray-100 rounded-lg">
          <div className="enlace w-full text-center py-5 relative z-10 bg-white">
            <span class="line -right"></span>
            <span class="line -top"></span>
            <span class="line -left"></span>
            <span class="line -bottom"></span>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mt-6">
              <span className="block text-indigo-600">
                Desarrollador de Software
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base font-semibold text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Estudiante de Ingeniería de Software con una pasión ardiente por el
              desarrollo de software, enfocado en tecnologías web y móviles. Mi
              trayectoria se caracteriza por una combinación de creatividad,
              adaptabilidad y un firme compromiso con el aprendizaje continuo.
            </p>
            <div className="mt-5  mx-auto sm:flex sm:justify-center md:mt-8 mb-6">
              <div className="rounded-md">
                 <a
                  href="https://wa.link/uo7roo"
                  target="_blank"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Contáctame
                </a> 
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                 <a
                  href="https://github.com/DavidClaudio03"
                  target="_blank"
                  className="relative btn6 btn6_1 w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 overflow-hidden group"
                >
                  <span>Ver Proyectos</span>

                </a> 
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <button
                  onClick={openPantalla}
                  className="relative btn6 w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 overflow-hidden group"
                >
                  <span>Visión Profesional</span>
                </button>
              </div>
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

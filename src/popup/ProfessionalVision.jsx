import React from "react";
import Popup from "../components/PopupBase";

function ProfessionalVision({ isPopupOpen, closePopup }) {
  return (
    <Popup isOpen={isPopupOpen} onClose={closePopup}>
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
    </Popup>
  );
}

export default ProfessionalVision;

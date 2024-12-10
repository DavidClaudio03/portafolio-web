import React from "react";
import { motion } from "framer-motion";
import fotoperfil from "../image/perfil.png";
import "./styles.css";

function Presentation() {
  return (
    <section className="pt-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* INICIO - Primer contenido de Presentación */}
      <div className="max-w-7xl mx-auto py-20 border-2 border-gray-200 rounded-lg relative overflow-hidden">
        <div className="text-center relative z-10 bg-white">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mt-6">
            <span className="block mb-5">David Claudio</span>
            <span className="block text-indigo-600">
              Desarrollador de Software
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Estudiante de Ingeniería de Software con una pasión ardiente por el
            desarrollo de software, enfocado en tecnologías web y móviles. Mi
            trayectoria se caracteriza por una combinación de creatividad,
            adaptabilidad y un firme compromiso con el aprendizaje continuo.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 mb-6">
            <div className="rounded-md shadow">
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
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Ver Proyectos
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* FIN - Primer contenido de Presentación */}
    </section>
  );
}

export default Presentation;

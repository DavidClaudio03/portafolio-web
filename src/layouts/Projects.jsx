import geoportal from '../image/geoportal.png';
import gamerfest from '../image/gamerfest.png';
import PantallaFlotante from "../components/PopupBase";
import React, { useState } from "react";

export default function Projects() {
  const [isPantallaFlotanteOpen, setIsPantallaFlotanteOpen] = useState(false);
  const openPantalla = () => setIsPantallaFlotanteOpen(true);
  const closePantalla = () => setIsPantallaFlotanteOpen(false);
  const projects = [
    {
      title: "GeoPortal Municipal",
      description: "Desarrollo de una solución geoespacial para un Gobierno Autónomo Descentralizado, demostrando habilidades en desarrollo web y manejo de bases de datos.",
      image: geoportal,
      link: "https://www.salcedo.gob.ec/portalciudad/geo",
    },
    {
      title: "GamerFest Web",
      description: "Gestión del sitio web para un evento de videojuegos, evidenciando capacidad para entregar soluciones funcionales y atractivas.",
      image: gamerfest ,
      link: "https://www.youtube.com/watch?v=U3shhh922Oo"
    },
  ];

  return (
    <section id="projects" className="py-10 bg-gray-50">
      <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-2 border-gray-200 bg-white rounded-lg">
        <div className="">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Proyectos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Proyectos Destacados
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Estos proyectos demuestran mi capacidad para desarrollar soluciones innovadoras y funcionales.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {projects.map((project, index) => (
              <div key={index} className="relative">
                <dt>
                  {project.image ? (
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-lg shadow-lg object-cover w-full h-full"
                        />
                    </a>
                    </div>
                  ) : (
                    <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-200 flex items-center justify-center rounded-lg shadow-lg">
                      {/* <p className="text-gray-500">Imagen no disponible</p> */}
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-lg shadow-lg object-cover w-full h-full"
                        />
                    </a>
                    </div>
                  )}
                  <p className="text-lg leading-6 font-medium text-gray-900">{project.title}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{project.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative h-20">
          <button
            onClick={openPantalla}
            className="absolute bottom-2 right-2 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-sm md:px-6"
          >
            Más Proyectos
          </button>
        </div>
      </div>
      <PantallaFlotante isOpen={isPantallaFlotanteOpen} onClose={closePantalla}></PantallaFlotante>
    </section>
  );
}

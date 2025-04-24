import geoportal from '../image/geoportal.png';
import gamerfest from '../image/gamerfest.png';
import education from '../image/education.png';
import PantallaFlotante from "../components/PopupBase";
import useScrollReveal from "../hooks/useScrollReveal";
import { useState } from "react";

export default function Projects() {
  useScrollReveal();
  const [isPantallaFlotanteOpen, setIsPantallaFlotanteOpen] = useState(false);
  const openPantalla = () => setIsPantallaFlotanteOpen(true);
  const closePantalla = () => setIsPantallaFlotanteOpen(false);
  const projects = [
    {
      title: "GeoPortal Municipal",
      description: "Development of a geospatial solution for a Decentralized Autonomous Government, demonstrating skills in web development and database management.",
      image: geoportal,
      link: "https://www.salcedo.gob.ec/portalciudad/geo",
    },
    {
      title: "Web GamerFest ",
      description: "Website management for a video game event, demonstrating the ability to deliver functional and attractive solutions.",
      image: gamerfest ,
      link: "https://github.com/DavidClaudio03/gamerfest_project"
    },
    {
      title: "School Platform",
      description: "Development of a school management platform using Odoo, focused on academic and administrative management.",
      image: education,
      link: "https://github.com/Vandal593/Education"
    },
  ];

  return (
    <section id="projects" className="py-2">
      <div className="py-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <h2 className="reveal-rotate text-base text-purple-500 font-semibold tracking-wide">Projetcs</h2>
          <p className="reveal-right mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-3xl">
          Featured Projects
          </p>
          <p className="reveal-right mt-4 text-base text-white">
            These projects demonstrate my ability to develop innovative and functional solutions. 
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-2 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-2">
            {projects.map((project, index) => (
              <div key={index} className="relative py-4">
                <dt>
                  {project.image ? (
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="reveal-zoom rounded-lg shadow-lg object-cover w-full h-full"
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
                        className="reveal-zoom rounded-lg shadow-lg object-cover w-full h-full"
                        />
                    </a>
                    </div>
                  )}
                  <p className="reveal-fade text-lg leading-6 font-medium text-purple-500">{project.title}</p>
                </dt>
                <dd className="reveal-fade mt-2 text-sm text-gray-50">{project.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative h-20">
          <button
            onClick={openPantalla}
            className="skill absolute bottom-2 right-2 flex items-center justify-center px-4 py-2 text-sm text-white md:py-2 md:text-sm md:px-4"
          >
            More Projects
          </button>
        </div>
      </div>
      <PantallaFlotante isOpen={isPantallaFlotanteOpen} onClose={closePantalla}></PantallaFlotante>
    </section>
  );
}

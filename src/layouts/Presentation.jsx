import React, {useState} from "react";
import AnimationBody from "../Animation/Body/Ani_Body";
import NavBar from "./Navbar";
import AnimationBorder from "../Animation/Presentation/Ani_BorderPresentation"
import ProfessionalVision from "../popup/ProfessionalVision";
import LogoSlider from "../components/Slider"
import foto from "../image/perfil.png";
import cv from "../Document/ClaudioDavid_CV.pdf"

function Presentation() {
  // Popup Professional Vision
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPantalla = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 bg-neutral-900">
      <AnimationBody />
      <div className="max-w-7xl h-screen mx-auto pt-20 relative overflow-hidden py-10">
        <NavBar />
        <div className="portfolio-experiment md:pt-14 w-full flex flex-col items-center justify-center ">
          <div className="animacionborde flex flex-col  md:flex-row flex-wrap w-full max-w-screen-lg min-h-[60vh] md:min-h-[50vh] items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 overflow-hidden">
            <AnimationBorder/> 
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-xl md:text-4xl font-bold text-customIndigo">
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
            <div className="flex-shrink-0">
              <img
                src={foto}
                alt="Foto de perfil"
                className="w-24 h-24 md:w-48 md:h-48 object-cover rounded-full border-2 border-indigo-600"
              />
            </div>
          </div>
        {/* Animacion LOGOS */}
        <LogoSlider />
        </div>
      </div>
      <ProfessionalVision isPopupOpen={isPopupOpen} closePopup={closePopup}/>
    </section>
  );
}

export default Presentation;

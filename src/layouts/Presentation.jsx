import React, { useState } from "react";
import AnimationBody from "../Animation/Body/Ani_Body";
import NavBar from "./Navbar";
import AnimationBorder from "../Animation/Presentation/Ani_BorderPresentation";
import ProfessionalVision from "../popup/ProfessionalVision";
import LogoSlider from "../components/Slider";
import foto from "../image/perfil.png";
import cv from "../Document/ClaudioDavid_CV.pdf";
import "../Styles/PresentationCss/whatsApp.css";
import { FaWhatsapp, FaMailBulk, FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { MdArrowUpward } from "react-icons/md";
import "../Styles/PresentationCss/Booton/Contact.css";
import "../Styles/PresentationCss/Booton/Download.css";



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
            <AnimationBorder />
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-xl md:text-4xl font-bold text-customIndigo">
                Desarrollador de Software
              </h1>
              <p className="mt-3 text-sm md:text-base text-white text-justify">
                Estudiante de Ingeniería de Software con una pasión ardiente por
                el desarrollo de software, enfocado en tecnologías web y
                móviles. Mi trayectoria se caracteriza por una combinación de
                creatividad, adaptabilidad y un firme compromiso con el
                aprendizaje continuo.
              </p>
              <div className="mt-4 flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
                <button className="btnP w-full md:w-auto px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm lg:px-4 lg:py-2 lg:text-base flex items-center justify-center gap-2">
                  <a
                    href="mailto:davidclaudio5000@gmail.com"
                    target="_blank"
                    className="text-center w-full md:w-auto flex items-center justify-center gap-2"
                  >
                    <p>Email</p> <FaMailBulk className="svg" size={30} />
                  </a>
                </button>

                <button className="btnP w-full md:w-auto px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm lg:px-4 lg:py-2 lg:text-base flex items-center justify-center gap-2">
                  <a
                    href="https://github.com/DavidClaudio03"
                    target="_blank"
                    className="text-center w-full md:w-auto flex items-center justify-center gap-2"
                  >
                    <p>Projects</p> <FaGithub className="svg" size={30} />
                  </a>
                </button>

                <button
                  onClick={openPantalla}
                  className="w-full md:w-auto flex font-medium font-bold justify-center gap-2 items-center mx-auto shadow-xl text-gay-50 text-xs sm:text-sm lg:text-base bg-green-500 backdrop-blur-md isolation-auto border-green-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-2 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-2 overflow-hidden border-2 rounded-md group"
                >
                  Vision
                  <MdArrowUpward className="w-6 h-6 sm:w-7 sm:h-7 justify-end group-hover:rotate-90 group-hover:bg-green-500 text-gray-50 ease-linear duration-300 rounded-full border border-gray-50 group-hover:border-none p-1 rotate-45" />
                </button>
                <a
                  href={cv}
                  target="_blank"
                  class="w-full md:w-auto px-2 py-2 gap-2 bg-green-500 hover:bg-green-500 sm:px-3 sm:py-1 lg:px-4 lg:py-2 cursor-pointer flex items-center justify-center rounded-md text-gray-50 text-sm lg:text-base shadow-xl hover:scale-105 duration-500 hover:ring-1 font-medium font-bold"
                >
                  Download Cv
                  <HiDownload className="w-5 h-5 animate-bounce" />
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
        <div>
          <a
            className="btn-whats pulse"
            href="https://wa.link/uo7roo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={30} color="white" />
          </a>
        </div>
      </div>
      <ProfessionalVision isPopupOpen={isPopupOpen} closePopup={closePopup} />
    </section>
  );
}

export default Presentation;

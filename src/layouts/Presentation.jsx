import {useState } from "react";
import AnimationBody from "../Animation/Body/Ani_Body";
import AnimationBorder from "../Animation/Presentation/Ani_BorderPresentation";
import ProfessionalVision from "../popup/ProfessionalVision";
import LogoSlider from "../components/Slider";
import foto from "../image/perfil.png";
import cv from "../Document/ClaudioDavid_CV.pdf";
import { FaWhatsapp, FaMailBulk, FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { MdArrowUpward } from "react-icons/md";
import "../Styles/PresentationCss/IconWhats.css";
import "../Styles/PresentationCss/Booton/Contact.css";
import "../Styles/PresentationCss/ProfileAvatar.css";
import "../Styles/PresentationCss/Booton/Vision.css";
import useScrollReveal from "../hooks/useScrollReveal";


function Presentation() {
  useScrollReveal();
  // Popup Professional Vision
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPantalla = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <AnimationBody />
      <div className="max-w-7xl mx-auto pt-8 relative py-1 md:py-4 lg:py-8">
        {/* <NavBar /> */}
        <div className="portfolio-experiment md:pt-2 w-full flex flex-col items-center justify-center ">
          <div className="animacionborde flex flex-col  md:flex-row flex-wrap w-full max-w-screen-lg min-h-[60vh] md:min-h-[50vh] items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 overflow-hidden">
            <AnimationBorder />
            <div className="flex-1 text-center md:text-left">
              <h1
                className="reveal-title text-4xl font-bold text-green-400
                  shadow-[2px_2px_0_#fff,
                  -2px_2px_0_#fff,
                  2px_-2px_0_#fff,
                  -2px_-2px_0_#fff]"
              >
                Software Developer
              </h1>
              <p className="reveal-text mt-3 text-sm md:text-base text-white text-justify">
              Software Engineering student with a burning passion for software development, focused on web and mobile technologies. My background is characterized by a combination of creativity, adaptability and a strong commitment to continuous learning.
              </p>
              <div className="reveal-buttons mt-4 flex flex-col md:flex-row md:space-x-3 space-y-0 md:space-y-0">
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
                  className="w-full md:w-auto flex font-medium justify-center gap-1 items-center mx-auto shadow-xl text-xs sm:text-sm lg:text-[14px] leading-none bg-green-500 backdrop-blur-md isolation-auto border-green-100 before:absolute before:w-full before:h-full before:top-0 before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-md before:bg-emerald-500 hover:text-gray-100 before:-z-10 before:hover:scale-150 before:hover:duration-700 relative z-10 px-2 py-1 sm:py-1 lg:px-2 lg:py-0 lg:h-[30px] overflow-hidden border-[1px] rounded-md group min-h-0"
                >
                  Vision
                  <MdArrowUpward className="w-3 h-3 group-hover:rotate-90 text-gray-50 ease-linear duration-300 rotate-45" />
                </button>
                <a
                  href={cv}
                  target="_blank"
                  className="w-full md:w-auto px-2 py-2 sm:px-3 sm:py-1 lg:px-2 lg:py-0 lg:h-[30px] gap-2 bg-green-500 hover:bg-green-500 cursor-pointer flex items-center justify-center rounded-md text-gray-50 text-sm lg:text-[12px] shadow-xl hover:scale-105 duration-500 hover:ring-1 font-medium leading-none min-h-0"
                >
                  Download Cv
                  <HiDownload className="w-4 h-4 lg:w-3 lg:h-3 animate-bounce" />
                </a>
              </div>
            </div>
            <div className="reveal-img flex-shrink-0">
               <img
                src={foto}
                alt="Foto de perfil"
                className="w-24 h-24 relative md:w-48 md:h-48 object-cover rounded-full bg-gray-100"
              /> 
              <div className="status-ring"></div>
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

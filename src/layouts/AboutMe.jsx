import { useState } from "react";
import PantallaFlotante from "../components/PopupBase"
import "../Styles/button.css"
import useScrollReveal from "../hooks/useScrollReveal";

export default function About() {
  const [isPantallaFlotanteOpen, setIsPantallaFlotanteOpen] = useState(false);
  const openPantalla = () => setIsPantallaFlotanteOpen(true);
  const closePantalla = () => setIsPantallaFlotanteOpen(false);

  const skills = [
    { name: "Web development", description: "HTML, CSS, Tailwindcss, Bootstrap, JavaScript, PHP, React" },
    { name: "Mobile development", description: "Flutter y FireBase" },
    { name: "Database management", description: "SQL, MySQL, SQLServer, Mariadb" },
    { name: "Laravel - Angular", description: "En aprendizaje: ApiRestFull " },
  ]
  useScrollReveal();

  return (
    <section id="about" className="mt-16 md:mt-0">
      <div className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="">
          <h2 className="reveal-fade text-base sm:text-base text-yellow-400 font-semibold tracking-wide mt-2">About me</h2>
          <p className="reveal-title mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-3xl">
            Passion for development and innovation
          </p>
          <p className="reveal-text mt-4 max-w-2xl text-base text-white">
            My background is characterized by a combination of creativity, adaptability and a strong commitment to continuous learning.
          </p>
        </div>
        <div className="reveal-zoom mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="reveal-icon absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-400 text-white">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-yellow-400">Professional Strengths</p>
              </dt>
              <dd className="mt-2 ml-16 text-sm sm:text-base text-white">
              Creativity in problem solving, effective communication, high adaptability, teamwork and commitment to responsibility.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <div className="reveal-icon absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-400 text-white">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-yellow-400">Personal Values</p>
              </dt>
              <dd className="mt-2 ml-16 text-sm sm:text-base text-white">
                Responsibility, continuous learning, collaboration, constant self-improvement and peer support. 
              </dd>
            </div>
          </dl>
        </div>
        <div className="relative h-20">
          <button
            onClick={openPantalla}
            className="skill absolute bottom-2 right-2 flex items-center justify-center px-4 py-2 text-sm font-medium text-white md:py-2 md:text-sm md:px-4"
          >
            Skills
          </button>
        </div>
      </div>
      <PantallaFlotante isOpen={isPantallaFlotanteOpen} onClose={closePantalla}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <div className="lg:text-center">
            <h2 className="text-base text-yellow-400 font-semibold tracking-wide">Skills</h2>
            <p className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-2xl">
              Technical skills  
            </p>
            <p className="mt-4 max-w-2xl text-base text-gray-100 lg:mx-auto">
              My skills span several areas of software development, allowing me to approach projects in a comprehensive manner. 
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {skills.map((skill) => (
                <div key={skill.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-10 w-10 rounded-md bg-yellow-400 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <p className="ml-16 text-base leading-6 font-medium text-yellow-400">{skill.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-sm text-white">{skill.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </PantallaFlotante>
    </section>
  )
}

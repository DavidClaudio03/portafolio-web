export default function About() {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="py-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-2 border-gray-200 rounded-lg">
          <div className="">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase mt-2">Sobre mí</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Pasión por el desarrollo y la innovación
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 ">
              Mi trayectoria se caracteriza por una combinación de creatividad, adaptabilidad y un firme 
              compromiso con el aprendizaje continuo.
            </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Fortalezas Profesionales</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Creatividad en la resolución de problemas, comunicación efectiva, alta adaptabilidad, 
                  trabajo en equipo y compromiso con la responsabilidad.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Valores Personales</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Responsabilidad, aprendizaje continuo, colaboración, mejora personal constante y 
                  apoyo a los compañeros.
                </dd>
              </div>
            </dl>
          </div>
          <div className="relative h-20">
            <button
                //onClick={openPantalla}
                className="absolute bottom-2 right-2 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-sm md:px-6"
              >
                Más sobre mi
              </button>
            </div>
        </div>
      </section>
    )
  }
  
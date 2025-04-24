import Popup from "../components/PopupBase";
import PropTypes from "prop-types";

function ProfessionalVision({ isPopupOpen, closePopup }) {
  return (
    <Popup isOpen={isPopupOpen} onClose={closePopup}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-400 font-semibold tracking-wide uppercase">
            Vision
          </h2>
          <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl">
            Professinal Vision
          </p>
          <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
          My goal is to become a Senior Full Stack Developer, with an emerging specialization in cybersecurity and ethical hacking.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-8 w-10 rounded-md bg-green-500 text-white">
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
                <p className="ml-16 text-lg leading-6 font-medium text-green-400">
                  Aspirations
                </p>
              </dt>
              <dd className="mt-2 ml-14 text-sm text-white">
                <ul className="list-disc pl-5 space-y-2 flex flex-col p-2">
                  <li>Master multiple development technologies</li>
                  <li>Develop innovative software with Artificial Intelligence integration</li>
                  <li>Contribute to computer security solutions</li>
                </ul>
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-8 w-10 rounded-md bg-green-500 text-white">
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
                <p className="ml-16 text-lg leading-6 font-medium text-green-400">
                Professional Challenges
                </p>
              </dt>
              <dd className="mt-2 ml-14 text-sm text-white">
                <ul className="list-disc pl-5 space-y-2 flex flex-col p-2">
                  <li>Software development with Artificial Intelligence</li>
                  <li>Implementation of computer security solutions</li>
                  <li>Projects that challenge my technological limits</li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Popup>
  );
}
ProfessionalVision.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default ProfessionalVision;


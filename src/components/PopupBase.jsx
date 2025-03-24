import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../Styles/Popup/ModalAnimation.css"; // crea este archivo con animaciones

const Modal = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(false);
  const [animateClass, setAnimateClass] = useState("");

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setAnimateClass("modal-enter");
    } else if (showModal) {
      setAnimateClass("modal-exit");
      setTimeout(() => {
        setShowModal(false);
      }, 300); // Duración de la animación
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity">
      <div
        className={`bg-neutral-900 rounded-lg shadow-lg p-6 w-full max-w-xl sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-4 overflow-y-auto max-h-[90%] ${animateClass}`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold"></h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-300 transition duration-200"
          >
            ✖
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;

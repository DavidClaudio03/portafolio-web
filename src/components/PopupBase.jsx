import React from "react";
import "../Styles/Navbar/AnimationMenu.css";
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Si el modal no está abierto, no se renderiza

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      {/* Contenedor principal con animación */}
      <div className="bg-neutral-700 rounded-lg shadow-lg p-6 w-full max-w-xl sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-4 overflow-y-auto max-h-[90%] custome-animate">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold"></h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;

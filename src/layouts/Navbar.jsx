import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo1.png";

function Navbar() {
  return (
    <nav className="fixed py-4 top-0 left-0 w-full bg-indigo-600 text-white shadow-md z-50">
      <div className="container flex justify-between items-center">
        {/* Logo */}
          <a href="/">
            <img src={logo} alt="Logo" className="w-64 ml-10"/>
          </a>

        {/* Nombre */}
        <div className="text-4xl font-bold font-extrabold text-white" >Innovación y Creatividad en Cada Proyecto</div>

        {/* Enlaces */}
        <div className="flex space-x-4 text-lg text-black font-bold">
          <Link to="/" className="hover:text-white">
            Inicio
          </Link>
          <Link to="/about" className="hover:text-white">
            Sobre Mí
          </Link>
          <Link to="/projects" className="hover:text-white">
            Proyectos
          </Link>
          <Link to="/contact" className="hover:text-white">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

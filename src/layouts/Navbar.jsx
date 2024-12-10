import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo1.png";

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-6">
      <div className="container flex justify-between items-center">
        {/* Logo */}
          <a href="/">
            <img src={logo} alt="Logo" className="w-64 ml-10"/>
          </a>

        {/* Nombre */}
        <div className="text-3xl font-bold" style={{ color: 'rgb(68, 222, 200, 1)' }}>Innovación y Creatividad en Cada Proyecto</div>

        {/* Enlaces */}
        <div className="flex space-x-4 text-lg">
          <Link to="/" className="hover:text-green-600">
            Inicio
          </Link>
          <Link to="/about" className="hover:text-green-600">
            Sobre Mí
          </Link>
          <Link to="/projects" className="hover:text-green-600">
            Proyectos
          </Link>
          <Link to="/contact" className="hover:text-green-600">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

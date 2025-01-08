import React, { useState, useEffect, useRef } from "react";
import Modal from "../components/PopupBase";
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiMenu5Fill } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import "../Styles/Navbar/AnimationNombre.css";
import "../Styles/Navbar/AnimationMenu2.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const [markerStyle, setMarkerStyle] = useState({});
  const menuRef = useRef(null);

  useEffect(() => {
    const marker = document.querySelector("#marker");
    const activeItem = menuRef.current?.children[activeIndex];

    if (activeItem) {
      setMarkerStyle({
        left: `${activeItem.offsetLeft}px`,
        width: `${activeItem.offsetWidth}px`,
      });
    }
  }, [activeIndex]);

  const handleMouseOver = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 max-w-screen-2xl flex items-center justify-between px-16 py-4">
        {/* Nombre */}
        <div className="font-extrabold flex items-center space-x-8">
          <h1 className="shimmer font-medium">David Claudio™</h1>
        </div>
        {/* Botón de Menú (para móviles) */}
        <button
          data-toggle="modal"
          data-target="#myModal"
          className="btn btn-primary btn-lg lg:hidden text-xl sm:text-2xl md:text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(false)}
        >
          <RiMenu5Fill color="white" />
        </button>
        {/* Menú */}
        <ul
          ref={menuRef}
          className="hidden lg:flex lg:items-center text-xl lg:space-x-2 ml-auto"
        >
          <li
            className={`menu-item ${activeIndex === 0 ? "active" : ""}`}
            onMouseOver={() => handleMouseOver(0)}
          >
            <a href="#home">
              <IoHomeOutline size={20} />
            </a>
          </li>
          <li
            className={`menu-item ${activeIndex === 1 ? "active" : ""}`}
            onMouseOver={() => handleMouseOver(1)}
          >
            <a href="#about">
              <IoPersonOutline size={20} />
            </a>
          </li>
          <li
            className={`menu-item ${activeIndex === 2 ? "active" : ""}`}
            onMouseOver={() => handleMouseOver(2)}
          >
            <a href="#projects">
              <AiOutlineFundProjectionScreen size={20} />
            </a>
          </li>
          <li
            className={`menu-item ${activeIndex === 3 ? "active" : ""}`}
            onMouseOver={() => handleMouseOver(3)}
          >
            <a
              href="https://wa.link/uo7roo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiPhone size={20} />
            </a>
          </li>
          <div
            id="marker"
            style={{
              position: "absolute",
              top: 0,
              height: "4px",
              backgroundColor: "blue",
              borderRadius: "2px",
              transition: "left 0.3s, width 0.3s",
              ...markerStyle,
            }}
          ></div>
        </ul>
         {/* Modal del Menú (pantallas pequeñas) */}
         <Modal isOpen={isMenuOpen} onClose={handleCloseMenu}>
          <div className="flex flex-col text-center justify-center items-center space-y-4 text-lg font-bold">
            <li id="item" className="item_1">
              <div className="inner_item inner_item_1 flex items-center space-x-2">
                <IoHomeOutline  />
              </div>
            </li>
            <li id="item" className="item_1">
              <div className="inner_item inner_item_2 flex items-center space-x-2">
                <IoPersonOutline  />
              </div>
            </li>
            <li id="item" className="item_1">
              <div className="inner_item inner_item_3 flex items-center space-x-2">
                <AiOutlineFundProjectionScreen/>
              </div>
            </li>
            <li id="item" className="item_1">
              <div className="inner_item inner_item_4 flex items-center space-x-2">
                <FiPhone />
                <a
                  href="https://wa.link/uo7roo"
                  className="hover:text-indigo-400"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </div>
            </li>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default NavBar;

import { useState, useEffect, useRef } from "react";
import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiMenu5Fill } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import "../Styles/Navbar/AnimationNombre.css";
import "../Styles/Navbar/AnimationMenu2.css";

function NavBar() {
  const [setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [markerStyle, setMarkerStyle] = useState({});
  const menuRef = useRef(null);

  useEffect(() => {
    //const marker = document.querySelector("#marker");
    const activeItem = menuRef.current?.children[activeIndex];

    if (activeItem) {
      setMarkerStyle({
        left: `${activeItem.offsetLeft}px`,
        width: `${activeItem.offsetWidth}px`,
      });
    }
  }, [activeIndex]);

  const sections = [
    { id: "home", index: 0 },
    { id: "about", index: 1 },
    { id: "projects", index: 2 },
    { id: "contact", index: 3 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let newActiveIndex = activeIndex;

      if (window.scrollY === 0) {
        newActiveIndex = 0;
      } else {
        sections.forEach((section) => {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (
              rect.top <= window.innerHeight / 2 &&
              rect.bottom >= window.innerHeight / 2
            ) {
              newActiveIndex = section.index;
            }
          }
        });
      }

      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex, sections]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-transparent w-full">
      <div className="max-w-[1100px] w-full mx-auto flex items-center justify-between px-4 py-3">
          <div className="font-extrabold flex items-center space-x-2">
            <div className="NameEfection">
              <svg id="svg" className="relative">
                <symbol id="unique-s-text">
                  <rect x="1%" y="10%" width="28%" height="60%" opacity="0" />
                  <text
                    textAnchor="middle"
                    x="42%"
                    y="50%"
                    dominantBaseline="middle"
                  >
                    David Claudio ™
                  </text>
                </symbol>
                <g className="g-ants">
                  <use xlinkHref="#unique-s-text" className="text-copy"></use>
                  <use xlinkHref="#unique-s-text" className="text-copy"></use>
                  <use xlinkHref="#unique-s-text" className="text-copy"></use>
                  <use xlinkHref="#unique-s-text" className="text-copy"></use>
                  <use xlinkHref="#unique-s-text" className="text-copy"></use>
                </g>
              </svg>
            </div>
          </div>

          <button
            className="btn btn-primary btn-lg lg:hidden text-xl sm:text-2xl md:text-3xl focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <RiMenu5Fill color="white" />
          </button>
          <ul ref={menuRef} className="hidden lg:flex lg:items-center text-xl lg:space-x-2 ml-auto">
            {sections.map((section, index) => (
              <li
                key={section.id}
                className={`menu-item ${activeIndex === index ? "active" : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => {
                  if (section.id === "contact") {
                    window.open("https://wa.link/uo7roo", "_blank");
                  } else {
                    const element = document.getElementById(section.id);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                      setActiveIndex(index);
                    }
                  }
                }}
              >
                <a href={section.id === "contact" ? "#" : `#${section.id}`}>
                  {index === 0 && <IoHomeOutline size={20} />}
                  {index === 1 && <IoPersonOutline size={20} />}
                  {index === 2 && <AiOutlineFundProjectionScreen size={20} />}
                  {index === 3 && <FiPhone size={20} />}
                </a>
              </li>
            ))}
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
        </div>
      </div>
  );
}

export default NavBar;

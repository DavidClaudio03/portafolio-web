import { useEffect } from "react";
import { SiSpringboot, SiAngular, SiFlutter, SiFirebase,SiMysql} from "react-icons/si";
import {DiMsqlServer } from "react-icons/di";
import {FaDocker, FaNodeJs, FaUnity } from "react-icons/fa";
import { TbBrandLaravel } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import "../Styles/PresentationCss/SliderLogo.css";

const LogoSlider = () => {
  // Lista de íconos dinámicos
  const icons = [
    { Icon: RiReactjsLine, label: "React" },
    { Icon: SiSpringboot, label: "Spring Boot" },
    { Icon: SiAngular, label: "Angular" },
    { Icon: FaNodeJs, label: "Node.js" },
    { Icon: TbBrandLaravel , label: "Laravel" },
    { Icon: FaDocker, label: "Docker" },
    { Icon: SiFlutter, label: "Flutter" },
    { Icon: SiFirebase, label: "FireBase" },
    { Icon: SiMysql, label: "MySQL" },
    { Icon: DiMsqlServer, label: "MS SQL Server" },
    { Icon: FaUnity, label: "Unity" },
  ];

  useEffect(() => {
    // Clonar dinámicamente el contenido
    const logosSlide = document.querySelector(".logos-slide");
    if (logosSlide) {
      const copy = logosSlide.cloneNode(true);
      document.querySelector(".logo-slider").appendChild(copy);
    }
  }, []);
  

  return (
    <div className="reveal-title logo-slider">
      <div className="logos-slide">
        {icons.map(({ Icon, label }, index) => (
          <div key={index} className="icon-container" title={label}>
            <Icon size={60} color="gray" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;

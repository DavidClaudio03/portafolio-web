import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const useScrollReveal = () => {
  useEffect(() => {
    // Título principal
    ScrollReveal().reveal(".reveal-title", {
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    // Textos de párrafo
    ScrollReveal().reveal(".reveal-text", {
      delay: 300,
      origin: "bottom",
      distance: "20px",
      reset: true,
    });

    // Botones
    ScrollReveal().reveal(".reveal-buttons", {
      delay: 500,
      interval: 200,
      origin: "bottom",
      distance: "40px",
      reset: true,
    });

    // Imagen de perfil
    ScrollReveal().reveal(".reveal-img", {
      delay: 400,
      origin: "left",
      distance: "60px",
      reset: true,
    });

    // Nuevos efectos:

    // Fade + Zoom para secciones destacadas
    ScrollReveal().reveal(".reveal-zoom", {
      scale: 0.85,
      opacity: 0,
      duration: 1500,
      reset: true,
    });

    // Entrada desde la derecha para contenedores grandes
    ScrollReveal().reveal(".reveal-right", {
      origin: "right",
      distance: "100px",
      duration: 1800,
      reset: true,
    });

    // Títulos con rotación leve
    ScrollReveal().reveal(".reveal-rotate", {
      rotate: {
        x: 0,
        y: 20,
        z: 0,
      },
      duration: 1500,
      reset: true,
    });

    // Íconos o elementos pequeños
    ScrollReveal().reveal(".reveal-icon", {
      delay: 200,
      distance: "10px",
      duration: 1000,
      scale: 0.9,
      reset: true,
    });

    // Fade simple con opacidad
    ScrollReveal().reveal(".reveal-fade", {
      opacity: 0,
      duration: 1200,
      reset: true,
    });

  }, []);
};

export default useScrollReveal;

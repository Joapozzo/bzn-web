import { useState, useEffect } from "react";
import gsap from "gsap";
import NavLink from "./UI/NavLink";
import Button from "./UI/Button";
import Plus from "../../public/imgs/icons/Plus";
import { CONTACTO_TELEFONO, enviarMensajeWhatsApp } from "../scripts/buttonsFunctions";

const Navbar = () => {
  const textoMensaje = "Hola, quiero saber más sobre tu empresa y tus proyectos. ¿Te interesa?";

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const abrirMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      setScrolled(true); // Cuando el menú está abierto, activar el scroll
    } else {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [menuOpen]);

  const navToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Animación con GSAP
  useEffect(() => {
    if (scrolled) {
      gsap.to(".logo", {
        scale: 0.9,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(".logo", {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [scrolled]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from("nav", {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .to("nav", {
        y: 0,
        duration: 0.4,
        ease: "bounce.out",  // Efecto de rebote sutil
      });
  }, []);

  const handleOverlayClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40"
          onClick={handleOverlayClick}
        />
      )}

      <nav
        className={`fixed top-2 py-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out px-6 rounded-full max-w-[1200px] mx-auto w-full
          ${scrolled
            ? `backdrop-blur-lg border border-white/30 py-3 px-8 ${window.innerWidth < 1024 ? "bg-[var(--red)] max-w-[600px]" : "bg-[var(--red)] max-w-[900px]"}`
            : "bg-transparent"} 
          ${menuOpen ? "rounded-xl" : "rounded-xl"}`}
      >
        <div className="flex justify-between items-center w-full mx-auto">
          <img
            src="/imgs/logos/logo-bzn.png"
            alt="Logo"
            className={`w-32 sm:w-36 md:w-48 transition-all duration-300 ease-in-out logo ${scrolled ? "filter invert brightness-0" : ""
              }`}
            onClick={navToHome}
          />


          <div className="hidden md:flex gap-4">
            <NavLink href="#works" text="Trabajos" />
            <NavLink href="#services" text="Servicios" />
            <NavLink href="#about" text="Nosotros" />
            <NavLink href="#contact" text="Contacto" />
          </div>

          <div className="hidden md:block">
            <Button text="Saber más" icon={<Plus />} color={scrolled ? "var(--red-200)" : "var(--red)"} onClick={() => enviarMensajeWhatsApp(textoMensaje, CONTACTO_TELEFONO)}/>
          </div>

          <button
            className="md:hidden flex flex-col space-y-1 z-50"
            onClick={abrirMenu}
          >
            <div
              className={`w-6 h-1 bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <div
              className={`w-6 h-1 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            />
            <div
              className={`w-6 h-1 bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "max-h-[300px] opacity-100 pt-4" : "max-h-0 opacity-0 pointer-events-none"}`}
        >
          <div className="flex flex-col items-center gap-4 py-4 px-6 sm:px-8 md:px-8 bg-[var(--red)] border-t border-white/30 rounded-b-3xl">
            <NavLink href="#works" text="Trabajos" onClick={abrirMenu} />
            <NavLink href="#services" text="Servicios" onClick={abrirMenu} />
            <NavLink href="#about" text="Nosotros" onClick={abrirMenu} />
            <NavLink href="#contact" text="Contacto" onClick={abrirMenu} />
            <Button text="Saber más" icon={<Plus />} color="var(--red-200)" onClick={() => enviarMensajeWhatsApp(textoMensaje, CONTACTO_TELEFONO)}
            />
            <div className="hidden md:block"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

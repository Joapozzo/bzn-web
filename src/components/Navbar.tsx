import { useState, useEffect } from "react";
import gsap from "gsap";
import NavLink from "./UI/NavLink";
import Button from "./UI/Button";
import Plus from "../../public/imgs/icons/Plus";
import { CONTACTO_TELEFONO, enviarMensajeWhatsApp } from "../scripts/buttonsFunctions";

interface NavbarProps {
  navLinks?: string[];
  isWissenPage?: boolean;
  homeUrl?: string;
  wissenUrl?: string;
}

const Navbar = ({ 
  navLinks = ["Trabajos", "Servicios", "Nosotros", "Contacto"],
  isWissenPage = false,
  homeUrl = "/",
  wissenUrl = "/wissen-df"
}: NavbarProps) => {
  const textoMensaje = isWissenPage 
    ? "Hola, quiero más información sobre Wissen DF." 
    : "Hola, quiero saber más sobre tu empresa y tus proyectos. ¿Te interesa?";

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const abrirMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      setScrolled(true);
    } else {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [menuOpen]);

  const navToHome = () => {
    if (isWissenPage) {
      window.location.href = homeUrl;
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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
        ease: "bounce.out",
      });
  }, []);

  const handleOverlayClick = () => {
    setMenuOpen(false);
  };

  // Función para generar href basado en el contexto
  const getNavHref = (link: string) => {
    if (isWissenPage) {
      const linkMap: { [key: string]: string } = {
        "Ubicación": "#ubicacion",
        "Características": "#caracteristicas", 
        "Tipologías": "#tipologias",
        "Contacto": "#contacto"
      };
      return linkMap[link] || `#${link.toLowerCase()}`;
    } else {
      const linkMap: { [key: string]: string } = {
        "Trabajos": "#works",
        "Servicios": "#services", 
        "Nosotros": "#about",
        "Contacto": "#contact"
      };
      return linkMap[link] || `#${link.toLowerCase()}`;
    }
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

      <nav className="fixed top-2 z-50 w-full transition-all duration-300 ease-in-out">
        <div
          className={`mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col rounded-xl transition-all duration-300
      ${
        scrolled
          ? "max-w-[950px] backdrop-blur-lg border border-white/30 bg-[var(--red)] py-3"
          : "max-w-[1200px] bg-transparent py-4"
      }
    `}
        >
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <img
              src="/imgs/logos/logo-bzn.png"
              alt="Logo BZN"
              className={`w-32 sm:w-36 md:w-48 transition-all duration-300 ease-in-out logo cursor-pointer ${
                scrolled ? "filter invert brightness-0" : ""
              }`}
              onClick={navToHome}
            />

            {/* Links desktop */}
            <div className="hidden md:flex gap-4 items-center">
              {navLinks.map((link, index) => (
                <NavLink 
                  key={index}
                  href={getNavHref(link)} 
                  text={link} 
                />
              ))}
              
              {isWissenPage ? (
                <NavLink 
                  href={homeUrl} 
                  text="Inicio" 
                />
              ) : (
                <NavLink 
                  href={wissenUrl} 
                  text="Wissen DF" 
                />
              )}
            </div>

            {/* Botón desktop */}
            <div className="hidden md:block">
              <Button
                text={isWissenPage ? "Más info" : "Saber más"}
                icon={<Plus />}
                color={scrolled ? "var(--red-200)" : "var(--red)"}
                onClick={() =>
                  enviarMensajeWhatsApp(textoMensaje, CONTACTO_TELEFONO)
                }
              />
            </div>

            {/* Menú hamburguesa */}
            <button
              className="md:hidden flex flex-col space-y-1 z-50"
              onClick={abrirMenu}
              aria-label="Toggle menu"
            >
              <div
                className={`w-6 h-1 bg-white transition-transform ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <div
                className={`w-6 h-1 bg-white transition-opacity ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <div
                className={`w-6 h-1 bg-white transition-transform ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>

          {/* Menú mobile */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              menuOpen
                ? "max-h-[400px] opacity-100 pt-4"
                : "max-h-0 opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex flex-col items-center gap-4 py-4 px-6 sm:px-8 bg-[var(--red)] border-t border-white/30 rounded-b-3xl">
              {navLinks.map((link, index) => (
                <NavLink 
                  key={index}
                  href={getNavHref(link)} 
                  text={link} 
                  onClick={abrirMenu} 
                />
              ))}
              
              {/* Link para cambiar de página en mobile */}
              {isWissenPage ? (
                <NavLink 
                  href={homeUrl} 
                  text="Volver al Inicio" 
                  onClick={abrirMenu}
                />
              ) : (
                <NavLink 
                  href={wissenUrl} 
                  text="Ver Wissen DF" 
                  onClick={abrirMenu}
                />
              )}
              
              <Button
                text={isWissenPage ? "Más info" : "Saber más"}
                icon={<Plus />}
                color="var(--red-200)"
                onClick={() => {
                  enviarMensajeWhatsApp(textoMensaje, CONTACTO_TELEFONO);
                  abrirMenu();
                }}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
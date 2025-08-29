"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

// Función placeholder para el WhatsApp (reemplaza con tu función real)
const sendWhatsApp = () => {
    const mensaje = "Hola, quiero más información sobre Wissen DF";
    const numero = "+543517516450";
    const mensajeCodificado = encodeURIComponent(mensaje);
    const numeroLimpio = numero.replace(/\D/g, "");
    const url = `https://wa.me/${numeroLimpio}?text=${mensajeCodificado}`;
    window.open(url, "_blank");
};

const NavbarWissen = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const menuItemsRef = useRef<HTMLButtonElement[]>([]);

    const navLinks = ["Ubicación", "Características", "Tipologías", "Contacto"];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Detectar scroll para cambiar el estilo del navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Animación inicial del navbar
    useEffect(() => {
        const tl = gsap.timeline();

        tl.from("nav", {
            y: -80,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        }).to("nav", {
            y: 0,
            duration: 0.3,
            ease: "bounce.out",
        });
    }, []);

    // Animación del logo cuando se hace scroll
    useEffect(() => {
        if (scrolled) {
            gsap.to(".navbar-logo", {
                scale: 0.9,
                duration: 0.3,
                ease: "power2.out",
            });
        } else {
            gsap.to(".navbar-logo", {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    }, [scrolled]);

    useEffect(() => {
        if (mobileMenuRef.current) {
            if (menuOpen) {
                // Abrir menú
                gsap.set(mobileMenuRef.current, { display: 'block' });
                gsap.fromTo(mobileMenuRef.current,
                    { maxHeight: 0, opacity: 0 },
                    { maxHeight: 400, opacity: 1, duration: 0.3, ease: "power2.out" }
                );

                // Animar items
                gsap.fromTo(menuItemsRef.current,
                    { x: -20, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.3, stagger: 0.1, delay: 0.1 }
                );
            } else {
                // Cerrar menú
                gsap.to(menuItemsRef.current,
                    { x: -20, opacity: 0, duration: 0.2, stagger: 0.05 }
                );
                gsap.to(mobileMenuRef.current,
                    {
                        maxHeight: 0,
                        opacity: 0,
                        duration: 0.3,
                        ease: "power2.in",
                        onComplete: () => gsap.set(mobileMenuRef.current, { display: 'none' })
                    }
                );
            }
        }
    }, [menuOpen]);


    // Cerrar menú al hacer clic en overlay
    const handleOverlayClick = () => {
        setMenuOpen(false);
    };

    // Función para scroll suave a secciones
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        closeMenu();
    };

    return (
        <>
            {/* Overlay para mobile */}
            {menuOpen && (
                <div
                    className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-[999] md:hidden"
                    onClick={handleOverlayClick}
                />
            )}

            <nav
                className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${scrolled
                    ? "bg-[var(--black-200)]/95 backdrop-blur-md shadow-lg py-3"
                    : "bg-[var(--black-200)] backdrop-blur-md py-5"
                    }`}
            >
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex justify-between items-center">
                    {/* Logo + subtítulo */}
                    <div className="navbar-logo flex items-center gap-3 transition-all duration-300">
                        <h1 className="text-white text-xl sm:text-2xl font-extrabold tracking-wide">
                            WISSEN <span className="text-red-400">DF</span>
                        </h1>
                        <span className="hidden sm:block text-xs sm:text-sm text-red-500">
                            por BZN Urban Making
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-4">
                            {navLinks.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => scrollToSection(item)}
                                    className="group relative text-white text-sm font-medium transition-all duration-300 hover:text-red-400 uppercase"
                                >
                                    {item}
                                    <span className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-[2px] bg-red-400 transition-all duration-300 group-hover:w-full"></span>
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={sendWhatsApp}
                            className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-5 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            CONTACTAR
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 z-[1001]"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <div
                            className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""
                                }`}
                        />
                        <div
                            className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                                }`}
                        />
                        <div
                            className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                                }`}
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    ref={mobileMenuRef}
                    className="md:hidden absolute top-full left-0 right-0 bg-[var(--black-200)] backdrop-blur-md border-t border-gray-700/50"
                    style={{ display: 'none', overflow: 'hidden' }}
                >
                    <div className="px-4 py-6 space-y-4">
                        {navLinks.map((item, idx) => (
                            <button
                                key={idx}
                                ref={el => { if (el) menuItemsRef.current[idx] = el; }}
                                onClick={() => scrollToSection(item)}
                                className="block w-full text-left text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-red-500/20 hover:text-red-400 uppercase"
                            >
                                {item}
                            </button>
                        ))}

                        <div className="pt-4 border-t border-gray-700/50">
                            <button
                                ref={el => { if (el) menuItemsRef.current[navLinks.length] = el; }}
                                onClick={sendWhatsApp}
                                className="w-full bg-red-500 hover:bg-red-600 text-white text-base font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105"
                            >
                                CONTACTAR
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavbarWissen;
// src/components/ContactoWissen.tsx
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./UI/Button";
import Input from "./UI/Input";
import TextArea from "./UI/TextArea";
import { CONTACTO_TELEFONO, enviarMensajeWhatsApp } from "../scripts/buttonsFunctions";

const ContactoWissen = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const formRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const textoMensaje = "Hola, me interesa WISSEN DF. ¿Podrían contactarme para recibir más información?";

    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });

            tl.from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            })
                .from(formRef.current, {
                    x: -50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.4")
                .from(infoRef.current, {
                    x: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.6");
        }
    }, []);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);

        // Simular envío de formulario
        setTimeout(() => {
            setFormSubmitted(false);
        }, 3000);
    };

    const contactMethods = [
        {
            icon: "fab fa-whatsapp",
            title: "WhatsApp",
            subtitle: "Respuesta inmediata",
            value: "+54 351 751-6450",
            action: () => enviarMensajeWhatsApp(textoMensaje, CONTACTO_TELEFONO),
            color: "#25D366"
        },
        {
            icon: "fas fa-phone",
            title: "Teléfono",
            subtitle: "Llamanos directamente",
            value: "+54 351 751-6450",
            action: () => window.open(`tel:${CONTACTO_TELEFONO}`),
            color: "var(--red)"
        },
        {
            icon: "fas fa-envelope",
            title: "Email",
            subtitle: "Consultas por correo",
            value: "info@bznurbanmaking.com.ar",
            action: () => window.open("mailto:info@bznurbanmaking.com.ar?subject=Consulta WISSEN DF"),
            color: "var(--black)"
        },
        {
            icon: "fas fa-map-marker-alt",
            title: "Oficina",
            subtitle: "Visitanos en persona",
            value: "Av. Colón 1234, Córdoba",
            action: () => window.open("https://maps.google.com/?q=Dean+Funes+1928+Cordoba"),
            color: "var(--red-200)"
        }
    ];

    const schedule = [
        { day: "Lunes a Viernes", hours: "9:00 - 18:00" },
        { day: "Sábados", hours: "9:00 - 13:00" },
        { day: "Domingos", hours: "Cerrado" }
    ];

    return (
        <section
            ref={sectionRef}
            id="contacto"
            className="py-20"
            style={{ backgroundColor: 'var(--black-200)' }}
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Título */}
                <div className="text-center mb-16">
                    <h2
                        ref={titleRef}
                        className="text-4xl md:text-5xl font-black mb-4 text-white"
                    >
                        CONTACTO
                        <span style={{ color: 'var(--red-200)' }}> DIRECTO</span>
                    </h2>
                    <div
                        className="w-24 h-1 mx-auto rounded-full mb-6"
                        style={{ backgroundColor: 'var(--red)' }}
                    ></div>
                    <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--black-400)' }}>
                        Estamos listos para responder todas tus consultas sobre WISSEN DF.
                        Elegí el canal que prefieras para contactarte.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Formulario de contacto */}
                    <div ref={formRef}>
                        <div
                            className="p-8 rounded-2xl"
                            style={{ backgroundColor: 'var(--white)' }}
                        >
                            <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--black)' }}>
                                Envianos tu consulta
                            </h3>

                            {formSubmitted ? (
                                <div className="text-center py-12">
                                    <div
                                        className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl text-white"
                                        style={{ backgroundColor: 'var(--red)' }}
                                    >
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <h4 className="text-xl font-bold mb-2" style={{ color: 'var(--black)' }}>
                                        ¡Mensaje enviado!
                                    </h4>
                                    <p style={{ color: 'var(--black-300)' }}>
                                        Te contactaremos a la brevedad para brindarte toda la información.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleFormSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <Input
                                            name="nombre"
                                            type="text"
                                            placeholder="Tu nombre completo"
                                            required
                                            icon={<i className="fas fa-user"></i>}
                                        />
                                        <Input
                                            name="telefono"
                                            type="tel"
                                            placeholder="Tu teléfono"
                                            required
                                            icon={<i className="fas fa-phone"></i>}
                                        />
                                    </div>

                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="Tu email"
                                        required
                                        icon={<i className="fas fa-envelope"></i>}
                                    />

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <select
                                                name="interes"
                                                required
                                                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-var(--red) focus:border-transparent"
                                                style={{ backgroundColor: 'var(--black-200)', color: 'white' }}
                                            >
                                                <option value="">¿Qué te interesa?</option>
                                                <option value="compra">Comprar departamento</option>
                                                <option value="inversion">Inversión</option>
                                                <option value="financiamiento">Financiamiento</option>
                                                <option value="visita">Agendar visita</option>
                                            </select>
                                        </div>
                                        <div>
                                            <select
                                                name="tipologia"
                                                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-var(--red) focus:border-transparent"
                                                style={{ backgroundColor: 'var(--black-200)', color: 'white' }}
                                            >
                                                <option value="">Tipología preferida</option>
                                                <option value="1-dormitorio">1 Dormitorio</option>
                                                <option value="3-dormitorios">3 Dormitorios</option>
                                                <option value="cualquiera">Sin preferencia</option>
                                            </select>
                                        </div>
                                    </div>

                                    <TextArea
                                        name="mensaje"
                                        placeholder="Contanos más sobre tu consulta..."
                                        required
                                        icon={<i className="fas fa-comment"></i>}
                                    />

                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            id="acepto"
                                            required
                                            className="mt-1"
                                        />
                                        <label htmlFor="acepto" className="text-sm" style={{ color: 'var(--black-300)' }}>
                                            Acepto recibir información comercial sobre WISSEN DF y otros proyectos de BZN Urban Making.
                                        </label>
                                    </div>

                                    <Button
                                        type="submit"
                                        text="ENVIAR CONSULTA"
                                        color="var(--red)"
                                    />
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Información de contacto */}
                    <div ref={infoRef} className="space-y-8">
                        {/* Métodos de contacto */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-white">
                                Canales de contacto
                            </h3>

                            <div className="grid gap-4">
                                {contactMethods.map((method, index) => (
                                    <div
                                        key={index}
                                        onClick={method.action}
                                        className="group flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 hover:scale-102"
                                        style={{ backgroundColor: 'var(--black)' }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = method.color + '20';
                                            e.currentTarget.style.borderColor = method.color;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = 'var(--black)';
                                            e.currentTarget.style.borderColor = 'transparent';
                                        }}
                                    >
                                        <div
                                            className="w-12 h-12 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"
                                            style={{ backgroundColor: method.color }}
                                        >
                                            <i className={method.icon}></i>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-white">{method.title}</h4>
                                            <p className="text-sm" style={{ color: 'var(--black-400)' }}>
                                                {method.subtitle}
                                            </p>
                                            <p className="text-sm font-medium" style={{ color: method.color }}>
                                                {method.value}
                                            </p>
                                        </div>
                                        <i className="fas fa-arrow-right text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Horarios */}
                        <div
                            className="p-6 rounded-2xl"
                            style={{ backgroundColor: 'var(--black)' }}
                        >
                            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-3">
                                <i className="fas fa-clock" style={{ color: 'var(--red)' }}></i>
                                Horarios de atención
                            </h3>
                            <div className="space-y-3">
                                {schedule.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center">
                                        <span className="text-white">{item.day}</span>
                                        <span className="font-medium" style={{ color: 'var(--red-200)' }}>
                                            {item.hours}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA WhatsApp destacado */}
                        <div
                            className="p-6 rounded-2xl text-center relative overflow-hidden cursor-pointer group"
                            style={{ backgroundColor: '#25D366' }}
                            onClick={() => enviarMensajeWhatsApp(textoMensaje, CONTACTO_TELEFONO)}
                        >
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <i className="fab fa-whatsapp text-4xl text-white mb-3"></i>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Consulta Rápida por WhatsApp
                                </h3>
                                <p className="text-white/90 text-sm mb-4">
                                    Te respondemos al instante
                                </p>
                                <div className="inline-flex items-center gap-2 text-white font-medium">
                                    <span>Iniciar chat</span>
                                    <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform duration-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactoWissen;
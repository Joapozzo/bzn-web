import { useEffect, useRef } from "react";
import gsap from "gsap";

const ServiciosAnimados = () => {
    const leftRef = useRef<HTMLDivElement>(null);
    const topRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const animate = async () => {
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);

            if (!leftRef.current || !topRef.current || !bottomRef.current) return;

            gsap.from(leftRef.current, {
                scrollTrigger: {
                    trigger: leftRef.current,
                    start: "top 80%",
                },
                x: -100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            gsap.from(topRef.current, {
                scrollTrigger: {
                    trigger: topRef.current,
                    start: "top 85%",
                },
                y: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            gsap.from(bottomRef.current, {
                scrollTrigger: {
                    trigger: bottomRef.current,
                    start: "top 85%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
        };

        animate(); // ⬅️ Llamamos a la función que registra el plugin correctamente
    }, []);

    return (
        <div className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto bg-[#8C1D2C] p-8 rounded-lg text-white">
            {/* Izquierda */}
            <div ref={leftRef} className="md:w-1/2 mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-2">SABEMOS DE CAMBIOS</h2>
                <p className="text-lg">
                    Somos una desarrollista cordobesa con trayectoria de más de 40 años en el sector inmobiliario.
                </p>
            </div>

            {/* Derecha */}
            <div className="md:w-1/2 flex flex-col space-y-4">
                <div ref={topRef} className="flex items-center bg-[#E04E4E] p-4 rounded-lg">
                    <span className="text-2xl mr-4">🗺️</span>
                    <span className="text-lg font-semibold">PROYECTAMOS, DIRIGIMOS Y CONSTRUIMOS</span>
                </div>
                <div ref={bottomRef} className="flex items-center bg-[#E04E4E] p-4 rounded-lg">
                    <span className="text-2xl mr-4">🏢</span>
                    <span className="text-lg font-semibold">DISEÑAMOS Y EJECUTAMOS EDIFICIOS</span>
                </div>
            </div>
        </div>
    );
};

export default ServiciosAnimados;

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import gsap from "gsap";
import emprendimientosActuales from "../data/emprendimientosActuales";
import Pdf from "../../public/imgs/icons/Pdf";

const SliderProyectos = () => {
  const proyecto = emprendimientosActuales[0];
  const [activeTab, setActiveTab] = useState<"caracteristicas" | "ubicacion" | "planos">("caracteristicas");

  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import("gsap/ScrollTrigger").then((module) => {
      const ScrollTrigger = module.default;
      gsap.registerPlugin(ScrollTrigger);

      if (leftRef.current && rightRef.current) {
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

        gsap.from(rightRef.current, {
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 80%",
          },
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      }
    });
  }, []);

  const tabContent = {
    caracteristicas: (
      <ul className="list-disc pl-5 space-y-2">
        {proyecto.caracteristicas.map((carac, i) => (
          <li key={i}>
            {carac.texto}
          </li>
        ))}
      </ul>
    ),
    ubicacion: (
      <iframe
        className="w-full h-64 rounded"
        src={`https://www.google.com/maps?q=${encodeURIComponent(proyecto.ubicacion)}&output=embed`}
        loading="lazy"
        allowFullScreen
      />
    ),
    planos: (
      <ul className="grid gap-4">
        {proyecto.planos.map((plano, idx) => (
          <li key={idx} className="flex items-center gap-4 bg-[var(--black-200)] px-4 py-3 rounded-md shadow-md">
            <Pdf />
            <div className="flex flex-col">
              <span className="font-semibold text-white">{plano.nombre}</span>
              <a
                href={plano.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--red)] hover:underline"
              >
                Ver plano
              </a>
            </div>
          </li>
        ))}
      </ul>
    )

  };

  return (
    <div className="relative w-full h-[800px] md:h-[600px] lg:h-[700px] xl:h-[600px] mt-16">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ dynamicBullets: true }}
        loop={true}
        className="w-full h-full"
      >
        {proyecto.imgs.map((img, idx) => (
          <SwiperSlide key={idx} className="relative">
            <img
              src={img}
              alt="Proyecto"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-20 left-1/2 -translate-x-1/2 flex flex-col lg:flex-row lg:justify-between items-start w-full z-10 max-w-[1200px] mx-auto px-6 h-full">
        {/* Izquierda */}
        <div
          ref={leftRef}
          className="text-white text-center lg:text-start max-w-[500px] self-start"
        >
          <div className="flex space-x-3 mb-4 justify-center lg:justify-start">
            <span className="bg-[var(--red)] text-white px-4 py-1 rounded text-sm md:text-base">
              PROYECTO ACTUAL
            </span>
            <span className="bg-gray-900 text-white px-4 py-1 rounded text-sm md:text-base uppercase">
              {proyecto.tipo}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            {proyecto.nombre}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl text-start">
            {proyecto.descripcion}
          </p>
        </div>

        {/* Derecha */}
        <div
          ref={rightRef}
          className="py-4 md:p-6 text-black z-10 w-full max-w-[500px] flex flex-col self-start"
        >
          <div className="flex space-x-2 mb-4 bg-[var(--red)] px-4 py-2 rounded-lg justify-center items-center w-full">
            {(["caracteristicas", "ubicacion", "planos"] as const).map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 relative text-sm md:text-lg uppercase ${activeTab === tab
                    ? "font-bold text-[var(--white)]"
                    : "font-light text-[var(--white)]"
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  <span
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[75%] h-[2px] bg-[var(--white)] transition-transform duration-300 ease-in-out ${activeTab === tab ? "scale-x-100" : "scale-x-0"
                      }`}
                  />

                </button>
              )
            )}
          </div>

          <div className="text-gray-700 bg-[var(--white)] px-4 py-2 rounded-lg text-sm md:text-base max-h-80 overflow-y-auto">
            {tabContent[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderProyectos;

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import gsap from "gsap";
import emprendimientosActuales from "../data/emprendimientosActuales";
import Pdf from "../../public/imgs/icons/Pdf";
import Button from "./UI/Button";

const SliderProyectos = () => {
  const proyecto = emprendimientosActuales[0];
  const [activeTab, setActiveTab] = useState<"caracteristicas" | "ubicacion" | "planos" /* | "obra" */>("caracteristicas");

  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  // Solapa obra comentada
  // Generar array de imágenes de obra excluyendo las que no existen
  // const obrasImages: string[] = Array.from({ length: 52 }, (_, i) => {
  //   const imageNumber = i + 1;
  //   if (imageNumber === 19 || imageNumber === 26) {
  //     return null;
  //   }
  //   const extension = imageNumber === 52 ? 'jpeg' : 'jpg';
  //   return `/imgs/wissen/obras/${imageNumber}.${extension}`;
  // }).filter((img): img is string => img !== null);

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
    ),
    // obra: (
    //   <div className="w-full max-w-[400px] mx-auto rounded-lg">
    //     <Swiper
    //       modules={[Autoplay, Pagination, Navigation]}
    //       autoplay={{ delay: 3000, disableOnInteraction: false }}
    //       pagination={{
    //         dynamicBullets: true,
    //         clickable: true
    //       }}
    //       navigation={true}
    //       loop={true}
    //       spaceBetween={10}
    //       slidesPerView={1}
    //       className="w-full h-64 max-[768px]:h-56 max-[1199px]:h-72 min-[1200px]:h-80 rounded-lg"
    //     >
    //       {obrasImages.map((imagen, idx) => (
    //         <SwiperSlide key={idx} className="relative">
    //           <img
    //             src={imagen}
    //             alt={`Obra ${idx + 1}`}
    //             loading="lazy"
    //             className="w-full h-full object-cover rounded-lg"
    //             onError={(e) => {
    //               e.currentTarget.style.display = 'none';
    //             }}
    //           />
    //           <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
    //             {idx + 1}/{obrasImages.length}
    //           </div>
    //         </SwiperSlide>
    //       ))}
    //     </Swiper>
    //     <p className="text-center mt-2 text-xs text-gray-600">
    //       Galería de obra
    //     </p>
    //   </div>
    // )
  };

  return (
    <div className="relative w-full h-[800px] max-[800px]:h-[770px] max-[1199px]:h-[700px] min-[1200px]:h-[600px] mt-16 overflow-x-hidden">
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
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-20 max-[1199px]:top-5 left-1/2 -translate-x-1/2 flex flex-col min-[1200px]:flex-row justify-between items-center min-[1200px]:items-start w-full z-10 max-w-[1200px] mx-auto px-6 text-center min-[1200px]:text-start">
        {/* Izquierda */}
        <div
          ref={leftRef}
          className="py-4 px-4 max-[1199px]:px-6 text-white flex flex-col items-center min-[1200px]:items-start w-full max-[1199px]:self-center"
        >
          <div className="flex space-x-3 mb-4 justify-center min-[1200px]:justify-start">
            <span className="bg-[var(--red)] text-white px-4 py-1 rounded text-xs max-[768px]:text-sm max-[1199px]:text-base min-[1200px]:text-lg">
              PROYECTO ACTUAL
            </span>
            <span className="bg-gray-900 text-white px-4 py-1 rounded text-xs max-[768px]:text-sm max-[1199px]:text-base min-[1200px]:text-lg uppercase">
              {proyecto.tipo}
            </span>
          </div>
          <h1 className="text-2xl max-[768px]:text-3xl max-[1199px]:text-5xl min-[1200px]:text-7xl font-bold leading-tight">
            {proyecto.nombre}
          </h1>
          <p className="mt-4 text-sm max-[768px]:text-base max-[1199px]:text-lg min-[1200px]:text-xl max-w-3xl">
            {proyecto.descripcion}
          </p>
          <div className="mt-3 w-full flex md:justify-start justify-center">
            <Button
              text="Ver más"
              onClick={() => (window.location.href = proyecto.url)}
            />
          </div>
        </div>

        {/* Derecha */}
        <div
          ref={rightRef}
          className="py-4 px-4 max-[1199px]:px-6 text-black z-10 w-full flex flex-col items-center min-[1200px]:items-start self-center min-[1200px]:self-start"
        >
          <div className="flex gap-1 mb-4 bg-[var(--red)] px-2 py-2 rounded-lg justify-center items-center w-full">
            {(["caracteristicas", "ubicacion", "planos" /* , "obra" */] as const).map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-2 py-2 relative text-[10px] max-[768px]:text-xs max-[1199px]:text-sm min-[1200px]:text-base uppercase ${activeTab === tab
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

          <div className="text-start text-gray-700 bg-[var(--white)] px-4 py-2 rounded-lg text-xs max-[768px]:text-sm max-[1199px]:text-base min-[1200px]:text-lg max-h-96 overflow-y-auto w-full">
            {tabContent[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderProyectos;
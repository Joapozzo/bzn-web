import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const SliderProyectos = () => {
  const [activeTab, setActiveTab] = useState<"caracteristicas" | "ubicacion" | "planos">("caracteristicas");

  const slides = [
    { id: 1, image: "/imgs/1.jpg" },
    { id: 2, image: "/imgs/2.jpg" },
    { id: 3, image: "/imgs/3.jpg" },
  ];

  const tabContent = {
    caracteristicas: <p>Características principales del proyecto.</p>,
    ubicacion: <p>Ubicación estratégica del edificio.</p>,
    planos: <p>Planos disponibles bajo solicitud.</p>,
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[500px] mt-16">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ dynamicBullets: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <img src={slide.image} alt="Proyecto" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex flex-col lg:flex-row justify-between items-start w-full z-10 max-w-[1200px] mx-auto px-6">
      
        {/* Izquierda */}
        <div className="text-white text-center lg:text-start max-w-[500px]">
          <div className="flex space-x-3 mb-4 justify-center lg:justify-start">
            <span className="bg-[var(--red)] text-white px-4 py-1 rounded text-sm md:text-base">PROYECTO ACTUAL</span>
            <span className="bg-gray-900 text-white px-4 py-1 rounded text-sm md:text-base">EDIFICIOS</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">WISSEN DF</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl text-start">
            “Wissen DF” es un edificio de departamentos que se ubica sobre la calle Dean Funes 1950, B Alberdi de la
            ciudad de Córdoba. Se trata de una excelente zona residencial con calidad ambiental, ya que se encuentra ubicado
            a metros de la plaza Dr. Roberto Cisneros, cerca de Av. Colón y Av. Duartes Quirós.
          </p>
        </div>

        {/* Derecha */}
        <div className="p-4 md:p-6 text-black z-10 w-full max-w-[500px] flex flex-col">
          <div className="flex space-x-2 mb-4 bg-[var(--red)] px-4 py-2 rounded-lg justify-center items-center w-full">
            {(["caracteristicas", "ubicacion", "planos"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 relative text-sm md:text-lg uppercase ${activeTab === tab ? "font-bold text-[var(--white)]" : "font-light text-[var(--white)]"}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[75%] h-[2px] bg-[var(--white)]"></span>
                )}
              </button>
            ))}
          </div>

          {/* Contenido de la pestaña activa */}
          <div className="text-gray-700 mt-2 bg-[var(--white)] px-4 py-2 rounded-lg text-sm md:text-base">
            {tabContent[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderProyectos;

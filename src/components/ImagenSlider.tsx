import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import ItemCountHero from "../components/ItemCountHero";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Button from "./UI/Button";
import Arrow from "../../public/imgs/icons/Arrow";
import gsap from "gsap";
import TypingTitle from "./TypingTitle";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { CONTACTO_TELEFONO, enviarMensajeWhatsApp } from "../scripts/buttonsFunctions";

interface ImageSliderProps {
  images: string[];
}

const textoMensaje = "Hola, quiero contactarme con un asesor. ¿Te interesa?";

const stats = [
  { title: 19, text: "EDIFICIOS" },
  { title: 600, text: "DEPARTAMENTOS" },
  { title: 40, text: "AÑOS DE TRAYECTORIA" },
  { title: 100000, text: "M2 EJECUTADOS" },
];

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [counts, setCounts] = useState(stats.map(() => 0));

  // REGISTRA LOS PLUGINS SOLO EN EL CLIENTE
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger, TextPlugin);
    }
  }, []);

  const animateNumbers = () => {
    let intervals: NodeJS.Timeout[] = [];

    stats.forEach((stat, index) => {
      let count = 0;
      const step = Math.ceil(stat.title / 100);
      intervals[index] = setInterval(() => {
        count += step;
        if (count >= stat.title) {
          count = stat.title;
          clearInterval(intervals[index]);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = count;
          return newCounts;
        });
      }, 20);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      animateNumbers();
    }
  }, [isVisible]);

  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && paragraphRef.current) {
      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);
  return (
    <div ref={sectionRef} className="relative w-full h-[800px] md:h-[600px]">

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ dynamicBullets: true }}
        loop={true}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center relative"
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 top-10 flex flex-col justify-center items-start text-white px-6 z-10 w-full max-w-[1200px] mx-auto">
        <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-start gap-6 items-start">
          {stats.map((item, index) => (
            <ItemCountHero
              key={index}
              title={counts[index].toString()}
              text={item.text}
            />
          ))}
        </div>

        <TypingTitle />

        <p
          ref={paragraphRef}
          className="mt-4 text-base md:text-lg lg:text-xl text-[var(--white)] max-w-4xl text-left"
        >
          Con <span className="font-semibold">años de experiencia</span> en el
          sector inmobiliario, brindamos{" "}
          <span className="font-semibold">soluciones seguras y efectivas</span>{" "}
          para que encuentres el espacio ideal. Confianza, profesionalismo y{" "}
          <span className="font-semibold">resultados</span> que hablan por sí
          solos.
        </p>

        <div className="mt-6">
          <Button text="HABLAR CON UN ASESOR" icon={<Arrow />} onClick={() => enviarMensajeWhatsApp(textoMensaje, CONTACTO_TELEFONO)}/>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

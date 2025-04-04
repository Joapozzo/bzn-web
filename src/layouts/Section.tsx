import { useEffect } from "react";
import gsap from "gsap";

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
  useEffect(() => {
    const animate = async () => {
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      // Animación para títulos y líneas
      const titles = gsap.utils.toArray<HTMLElement>(".section-title");
      const lines = gsap.utils.toArray<HTMLElement>(".section-line");

      titles.forEach((titleEl, i) => {
        const lineEl = lines[i];

        const tl = gsap.timeline({
          defaults: { duration: 1, ease: "power3.out" },
          scrollTrigger: {
            trigger: titleEl,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        tl.from(titleEl, { x: -100, opacity: 0 });
        tl.from(
          lineEl,
          {
            x: -100,
            opacity: 0,
            scaleX: 0,
            transformOrigin: "left",
          },
          "-=0.5"
        );
      });

      // Cajas normales (menos las estadísticas)
      const boxes = gsap.utils.toArray<HTMLElement>("[data-animate]");

      boxes.forEach((box, i) => {
        // Si contiene contador, la ignoramos
        if (box.querySelector(".count-up")) return;

        gsap.from(box, {
          x: i % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: box,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Cajas de estadísticas animadas juntas
      const statBoxes = gsap
        .utils
        .toArray<HTMLElement>(".count-up")
        .map((el) => el.parentElement!);

      gsap.from(statBoxes, {
        scale: 0.7,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: statBoxes[0],
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    };

    animate();
  }, []);

  return (
    <div
      id={id}
      className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-16"
    >
      {/* Título */}
      <h2 className="section-title text-3xl font-extrabold mb-4 text-[var(--red)]">
        {title}
      </h2>

      {/* Rectángulo rojo animado */}
      <div className="section-line h-1 w-20 mb-6 bg-[var(--red)] origin-left scale-x-100"></div>

      {/* Contenido */}
      <div>{children}</div>
    </div>
  );
};

export default Section;

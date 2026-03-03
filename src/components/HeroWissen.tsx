import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "./UI/Button";

const CHAR_DELAY_MS = 85;
const PAUSE_WHEN_FULL_MS = 2200;
const PAUSE_WHEN_EMPTY_MS = 900;

export type HeroProps = {
  heroImage: string;
  badge?: string;
  subtitle?: React.ReactNode;
  phone: string;
  whatsappMessage: string;
} & (
  | { title: string; titleLine1?: never; titleLine2?: never }
  | { title?: never; titleLine1: string; titleLine2: string }
);

const Hero = (props: HeroProps) => {
  const {
    heroImage,
    badge = "PROYECTO ACTUAL",
    subtitle,
    phone,
    whatsappMessage,
  } = props;

  const isLoopMode = "titleLine1" in props && "titleLine2" in props;
  const line1: string = isLoopMode ? (props.titleLine1 ?? "") : "";
  const line2: string = isLoopMode ? (props.titleLine2 ?? "") : "";
  const singleTitle: string = !isLoopMode ? (props.title ?? "") : "";
  const totalLength = line1.length + line2.length;
  const totalLen = isLoopMode ? totalLength : singleTitle.length;

  const [displayLength, setDisplayLength] = useState(0);
  const directionRef = useRef<1 | -1>(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Mismo comportamiento en ambos modos: tipeo → pausa → borrado → repite
  useEffect(() => {
    if (totalLen === 0) return;

    setDisplayLength(0);
    let count = 0;
    directionRef.current = 1;

    const run = () => {
      if (directionRef.current === 1) {
        count += 1;
        setDisplayLength(count);
        if (count >= totalLen) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          intervalRef.current = null;
          directionRef.current = -1;
          timeoutRef.current = setTimeout(() => {
            intervalRef.current = setInterval(run, CHAR_DELAY_MS);
          }, PAUSE_WHEN_FULL_MS);
        }
      } else {
        count -= 1;
        setDisplayLength(count);
        if (count <= 0) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          intervalRef.current = null;
          count = 0;
          directionRef.current = 1;
          timeoutRef.current = setTimeout(() => {
            intervalRef.current = setInterval(run, CHAR_DELAY_MS);
          }, PAUSE_WHEN_EMPTY_MS);
        }
      }
    };

    intervalRef.current = setInterval(run, CHAR_DELAY_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [totalLen]);

  const sendWhatsApp = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-white relative"
      style={{
        background: `linear-gradient(rgba(26, 25, 25, 0.7), rgba(153, 25, 43, 0.3)), url('${heroImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-[var(--red)]/20 border border-[var(--red)]/40 px-4 py-2 rounded-full mb-8 text-sm font-medium"
        >
          <motion.div
            className="w-2 h-2 bg-[var(--red)] rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {badge}
        </motion.div>

        <div className="mb-8 min-h-[10rem] md:min-h-[12rem] lg:min-h-[14rem] flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-center">
            {isLoopMode ? (
              <>
                <span className="block">
                  {line1.slice(0, Math.min(displayLength, line1.length))}
                  {displayLength <= line1.length && (
                    <span
                      className="inline-block w-0.5 md:w-1 h-[0.9em] align-baseline bg-[var(--red)] ml-0.5 animate-typing-cursor"
                      aria-hidden
                    />
                  )}
                </span>
                <span className="block font-black text-[var(--red-200)]">
                  {displayLength > line1.length ? line2.slice(0, displayLength - line1.length) : ""}
                  {displayLength > line1.length && displayLength < totalLength && (
                    <span
                      className="inline-block w-0.5 md:w-1 h-[0.9em] align-baseline bg-[var(--red)] ml-0.5 animate-typing-cursor"
                      aria-hidden
                    />
                  )}
                </span>
              </>
            ) : (
              <span className="inline-flex flex-wrap justify-center items-baseline gap-0">
                <span>{singleTitle.slice(0, displayLength)}</span>
                {displayLength < totalLen && (
                  <span
                    className="inline-block w-0.5 md:w-1 h-[0.9em] align-baseline bg-[var(--red)] ml-0.5 shrink-0 animate-typing-cursor"
                    aria-hidden
                  />
                )}
              </span>
            )}
          </h1>
        </div>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-lg md:text-xl lg:text-2xl font-light mb-12 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-center"
        >
          <Button text="QUIERO MÁS INFORMACIÓN" onClick={sendWhatsApp} />
        </motion.div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -100, 0], opacity: [0, 0.6, 0] }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </section>
  );
};

/** Componente Hero unificado: mismo layout y animaciones para proyecto y Wissen */
export { Hero };

/** Default: Hero con datos fijos para la página Wissen DF (dos líneas, loop tipeo-borrado) */
export default function HeroWissen() {
  return (
    <Hero
      titleLine1="WISSEN"
      titleLine2="DF"
      heroImage="/imgs/wissen/wissen-hero.jpg"
      badge="PROYECTO ACTUAL"
      subtitle={
        <>
          Un nuevo concepto de vivienda en el corazón de <span className="font-bold text-white">Córdoba</span>
        </>
      }
      phone="543517516450"
      whatsappMessage="Hola, quiero más información sobre WISSEN DF"
    />
  );
}

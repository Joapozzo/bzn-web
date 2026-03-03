import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { motion, useInView } from "framer-motion";

export interface CaracteristicasProyectoProps {
  images: string[];
  characteristics: string[];
  stats?: { number: string; label: string; icon: string }[];
  sectionSubtitle?: string;
  introTitle?: string;
  introText?: string;
}

const CaracteristicasProyecto = ({
  images,
  characteristics,
  stats = [],
  sectionSubtitle = "ÚNICAS",
  introTitle = "Calidad en cada detalle",
  introText,
}: CaracteristicasProyectoProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  useEffect(() => {
    if (!isPlaying || images.length === 0) return;
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section
      ref={sectionRef}
      id="caracteristicas"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(239,68,68,0.1),transparent_50%)]" />

      <motion.div
        className="max-w-7xl mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            CARACTERÍSTICAS{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              {sectionSubtitle}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Diseño que combina calidad y funcionalidad
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 md:gap-12 gap-0 items-center">
          <motion.div className="relative group" variants={slideVariants}>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-6 md:mb-0">
              {images.length > 0 ? (
                <>
                  <div className="relative w-full h-full">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                          index === currentSlide
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-105"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Proyecto ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={prevSlide}
                      className="bg-black/20 backdrop-blur-sm hover:bg-red-600/80 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="bg-black/20 backdrop-blur-sm hover:bg-red-600/80 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm hover:bg-red-600/80 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                  </button>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? "bg-red-500 scale-125"
                            : "bg-white/50 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-400">
                  Sin imágenes
                </div>
              )}
            </div>

            {stats.length > 0 && (
              <motion.div
                className="md:absolute md:-bottom-20 md:left-0 md:right-0 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 px-4 md:px-4"
                variants={containerVariants}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-black/80 backdrop-blur-sm border border-gray-700 rounded-lg p-2 sm:p-3 text-center transform hover:scale-105 transition-all duration-300 hover:border-red-500"
                  >
                    <div className="text-lg sm:text-2xl mb-1">{stat.icon}</div>
                    <div className="text-lg sm:text-2xl font-bold text-red-400">
                      {stat.number}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-300 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          <motion.div className="mt-16 lg:mt-0" variants={itemVariants}>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                {introTitle}
              </h3>
              {introText && (
                <p className="text-gray-400 text-base">{introText}</p>
              )}
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[400px] overflow-y-auto custom-scrollbar"
              variants={containerVariants}
            >
              {characteristics.map((characteristic, index) => {
                const parts = characteristic.split(" ");
                const emoji = parts[0];
                const text = parts.slice(1).join(" ");
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-3 hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <span className="text-base sm:text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {emoji}
                      </span>
                      <span className="text-gray-300 text-xs sm:text-sm leading-tight group-hover:text-white transition-colors duration-300 break-words">
                        {text}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              className="mt-6 grid grid-cols-2 gap-4"
              variants={containerVariants}
            >
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-lg p-3 sm:p-4 text-center"
              >
                <div className="text-xl sm:text-2xl mb-2">🛡️</div>
                <div className="text-white font-semibold text-xs sm:text-sm">
                  Calidad
                </div>
                <div className="text-gray-400 text-[10px] sm:text-xs">
                  Terminaciones de nivel
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-lg p-3 sm:p-4 text-center"
              >
                <div className="text-xl sm:text-2xl mb-2">🌱</div>
                <div className="text-white font-semibold text-xs sm:text-sm">
                  Entorno
                </div>
                <div className="text-gray-400 text-[10px] sm:text-xs">
                  Contacto con la naturaleza
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(55, 65, 81, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(239, 68, 68, 0.8);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(239, 68, 68, 1);
        }
      `}</style>
    </section>
  );
};

export default CaracteristicasProyecto;

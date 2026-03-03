import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export interface AmenityItem {
  icon: string;
  title: string;
  desc: string;
}

export interface UbicacionProyectoProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  address: string;
  addressDetail?: string;
  mapEmbedUrl: string;
  mapLink?: string;
  description?: string;
  amenities: AmenityItem[];
  stats?: { number: string; label: string }[];
   
}

const UbicacionProyecto = ({
  sectionTitle = "UBICACIÓN",
  sectionSubtitle = "PRIVILEGIADA",
  address,
  addressDetail,
  mapEmbedUrl,
  mapLink,
  description,
  amenities,
  stats = [
    { number: "5", label: "MIN AL CENTRO" },
    { number: "15", label: "LÍNEAS DE COLECTIVO" },
    { number: "200M", label: "A AV. COLÓN" },
  ],
}: UbicacionProyectoProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section ref={sectionRef} id="ubicacion" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--black)] mb-4"
          >
            {sectionTitle}{" "}
            <span className="text-[var(--red)]">{sectionSubtitle}</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-[var(--red)] mx-auto mb-8 rounded-full"
          />
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-2xl shadow-2xl group"
          >
            <iframe
              src={mapEmbedUrl}
              className="w-full h-96 border-0 transition-transform duration-500 group-hover:scale-105"
              allowFullScreen
              loading="lazy"
              title="Mapa"
            />
            <motion.div
              className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl text-[var(--red)]">📍</div>
                <div className="min-w-0 flex-1">
                  {mapLink ? (
                    <a
                      href={mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <h3 className="font-bold text-lg text-[var(--black)] m-0">
                        {address}
                      </h3>
                      {addressDetail && (
                        <p className="text-sm text-[var(--black-300)] m-0">
                          {addressDetail}
                        </p>
                      )}
                      <span className="text-xs text-[var(--red)] font-medium mt-1 inline-block">
                        Ver en Google Maps →
                      </span>
                    </a>
                  ) : (
                    <>
                      <h3 className="font-bold text-lg text-[var(--black)] m-0">
                        {address}
                      </h3>
                      {addressDetail && (
                        <p className="text-sm text-[var(--black-300)] m-0">
                          {addressDetail}
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 text-[var(--black)]">
              Todo lo que necesitás cerca de casa
            </h3>
            {description && (
              <p className="text-lg mb-8 text-[var(--black-300)] leading-relaxed">
                {description}
              </p>
            )}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {amenities.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="p-6 bg-white border border-gray-200 rounded-xl cursor-pointer group hover:border-[var(--red-200)] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-[var(--red)] rounded-lg text-2xl">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-2 text-[var(--black)] text-base group-hover:text-[var(--red)] transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[var(--black-300)] m-0 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {stats.length > 0 && (
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 text-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-[var(--black)] text-white rounded-xl"
              >
                <div className="text-2xl md:text-3xl font-black text-[var(--red)] mb-1">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default UbicacionProyecto;

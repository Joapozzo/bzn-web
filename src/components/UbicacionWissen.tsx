import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const UbicacionWissen = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const amenities = [
        {
            icon: "🛒",
            title: "Centros Comerciales",
            desc: "A metros de importantes centros comerciales",
        },
        {
            icon: "🏥",
            title: "Centros de Salud",
            desc: "Cerca de clínicas y hospitales de primer nivel",
        },
        {
            icon: "🌳",
            title: "Espacios Verdes",
            desc: "A pasos de Plaza Dr. Roberto Cisneros",
        },
        {
            icon: "🚌",
            title: "Transporte",
            desc: "Excelente conectividad con transporte público",
        },
    ];

    return (
        <section
            ref={sectionRef}
            id="ubicacion"
            className="py-20 bg-white"
        >
            <div className="max-w-6xl mx-auto px-6">
                {/* Header animado */}
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
                        UBICACIÓN{" "}
                        <span className="text-[var(--red)]">PRIVILEGIADA</span>
                    </motion.h2>
                    
                    <motion.div 
                        variants={itemVariants}
                        className="w-24 h-1 bg-[var(--red)] mx-auto mb-8 rounded-full"
                    />
                </motion.div>

                {/* Grid principal */}
                <motion.div 
                    className="grid lg:grid-cols-2 gap-12 items-stretch"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Mapa con overlay */}
                    <motion.div 
                        variants={itemVariants}
                        className="relative overflow-hidden rounded-2xl shadow-2xl group"
                    >
                        <motion.iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.567!2d-64.200!3d-31.417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985c4b8e7a23%3A0x9e8f8e8e8e8e8e8e!2sDean%20Funes%201928%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1634567890123!5m2!1ses!2sar"
                            className="w-full h-96 border-0 transition-transform duration-500 group-hover:scale-110"
                            allowFullScreen
                            loading="lazy"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Overlay con información */}
                        <motion.div 
                            className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="text-2xl text-[var(--red)]">📍</div>
                                <div>
                                    <h3 className="font-bold text-lg text-[var(--black)] m-0">
                                        Dean Funes 1928
                                    </h3>
                                    <p className="text-sm text-[var(--black-300)] m-0">
                                        Barrio Alberdi, Córdoba Capital
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Información y características */}
                    <motion.div variants={itemVariants}>
                        <motion.h3 
                            className="text-2xl font-bold mb-4 text-[var(--black)]"
                            variants={itemVariants}
                        >
                            Todo lo que necesitás cerca de casa
                        </motion.h3>
                        
                        <motion.p 
                            className="text-lg mb-8 text-[var(--black-300)] leading-relaxed"
                            variants={itemVariants}
                        >
                            WISSEN DF se encuentra en una ubicación estratégica en el
                            corazón de Alberdi, cerca de Av. Colón y Av. Duarte Quirós,
                            con acceso a todos los servicios.
                        </motion.p>

                        {/* Grid de amenidades */}
                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            variants={containerVariants}
                        >
                            {amenities.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={cardVariants}
                                    whileHover={{ 
                                        y: -5,
                                        transition: { duration: 0.2 }
                                    }}
                                    className="p-6 bg-white border border-gray-200 rounded-xl cursor-pointer group hover:border-[var(--red-200)] hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <motion.div
                                            className="w-12 h-12 flex items-center justify-center bg-[var(--red)] rounded-lg text-2xl"
                                            whileHover={{ 
                                                scale: 1.1,
                                                rotate: 5,
                                                transition: { duration: 0.2 }
                                            }}
                                        >
                                            {item.icon}
                                        </motion.div>
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

                {/* Estadísticas adicionales (opcional) */}
                <motion.div 
                    className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {[
                        { number: "5", label: "MIN AL CENTRO" },
                        { number: "15", label: "LÍNEAS DE COLECTIVO" },
                        { number: "200M", label: "A AV. COLÓN" },
                    ].map((stat, idx) => (
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
            </div>
        </section>
    );
};

export default UbicacionWissen;
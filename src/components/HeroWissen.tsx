import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "./UI/Button";

const sendWhatsApp = () => {
    const message = "Hola, quiero más información sobre WISSEN DF";
    const phone = "543517516450";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
};

const HeroWissen = () => {
    const [text, setText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const fullText = "WISSEN DF";

    useEffect(() => {
        // Cursor parpadeando
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 1000);

        // Efecto de tipeo progresivo
        let progress = 0;
        const typingInterval = setInterval(() => {
            progress += 1;
            const currentProgress = Math.floor((progress / 100) * fullText.length);
            setText(fullText.substring(0, currentProgress));
            
            if (progress >= 100) {
                clearInterval(typingInterval);
            }
        }, 50); // Velocidad del tipeo

        return () => {
            clearInterval(cursorInterval);
            clearInterval(typingInterval);
        };
    }, []);

    return (
        <section
            className="h-screen bg-cover bg-center flex items-center justify-center text-white relative"
            style={{
                background: `linear-gradient(rgba(26, 25, 25, 0.7), rgba(153, 25, 43, 0.3)), url('/imgs/wissen/wissen-hero.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="text-center max-w-4xl px-6">
                {/* Badge animado */}
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
                    PROYECTO ACTUAL
                </motion.div>

                {/* Título con efecto de tipeo - MANTENEMOS ALTURA FIJA */}
                <div className="mb-8 h-32 md:h-40 lg:h-48 flex items-center justify-center">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
                        <span>
                            {text.substring(0, 6)} {/* "WISSEN" */}
                        </span>
                        {text.length > 6 && (
                            <span className="block font-black text-[var(--red-200)]">
                                {text.length > 7 ? "DF" : text.substring(7)}
                                {text.length >= 8 && (
                                    <span className="text-[var(--red-200)]">
                                        {showCursor && "|"}
                                    </span>
                                )}
                            </span>
                        )}
                        {text.length <= 6 && showCursor && "|"}
                    </h1>
                </div>

                {/* Descripción animada */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="text-lg md:text-xl lg:text-2xl font-light mb-12 max-w-2xl mx-auto"
                >
                    Un nuevo concepto de vivienda en el corazón de{" "}
                    <span className="font-bold text-white">Córdoba</span>
                </motion.p>

                {/* Botón animado */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex justify-center"
                >
                    <Button
                        text="QUIERO MÁS INFORMACIÓN"
                        onClick={sendWhatsApp}
                    />
                </motion.div>
            </div>

            {/* Información flotante - Solo desktop */}
            {/* <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 2.5 }}
                className="absolute top-1/4 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-white hidden lg:block"
            >
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                    className="font-bold text-lg mb-4"
                >
                    WISSEN DF
                </motion.h3>

                <div className="text-sm space-y-2">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 3.2 }}
                        className="flex items-center gap-2"
                    >
                        📍 <span>Dean Funes 1928</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 3.4 }}
                        className="flex items-center gap-2"
                    >
                        🏢 <span>33 Departamentos</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 3.6 }}
                        className="flex items-center gap-2"
                    >
                        🚗 <span>8 Cocheras</span>
                    </motion.div>
                </div>
            </motion.div> */}

            {/* Partículas de fondo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/20 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 0.6, 0],
                        }}
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

export default HeroWissen;
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const WissenFeaturesSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    // Datos del proyecto
    const projectImages = [
        "/imgs/wissen/1.jpg",
        "/imgs/wissen/3.jpg",
        "/imgs/wissen/5.jpg",
        "/imgs/wissen/7.jpg"
    ];

    const characteristics = [
        "🛡️ Ingreso jerarquizado con guardia y CCTV",
        "🧱 Terminaciones en ladrillo visto y H° visto",
        "🛗 Ascensor de última generación en acero inoxidable",
        "🛋️ Pisos cerámicos, porcelanatos y revestimientos de calidad",
        "🪟 Carpinterías de aluminio anodizado",
        "🚪 Puertas placas en MDF color blanco",
        "🍽️ Muebles de cocina con granito y alacena de diseño",
        "🧱 Muros interiores terminados en yeso",
        "🛁 Baños completos con bañera, sanitarios y vanitory",
        "🔥 Sistema contra incendios con detección y presurización",
        "🍳 Artefactos a gas y termotanque eléctrico",
        "💡 Iluminación colocada en todos los espacios",
        "🧥 Dormitorios con interiores de placards",
        "🎥 CCTV en cada departamento",
        "🚗 Cocheras cubiertas con portón levadizo",
        "🌳 Patio interior con equipamiento y parquizado"
    ];

    const stats = [
        { number: "5", label: "Pisos", icon: "🏢" },
        { number: "33", label: "Departamentos", icon: "🏠" },
        { number: "8", label: "Cocheras", icon: "🚗" },
        { number: "1", label: "Plaza Interior", icon: "🌳" },
    ];

    // Auto-slider
    useEffect(() => {
        if (!isPlaying) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % projectImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isPlaying, projectImages.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % projectImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + projectImages.length) % projectImages.length);
    };

    return (
        <section
            id="caracteristicas"
            className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(239,68,68,0.1),transparent_50%)]"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
                        CARACTERÍSTICAS{" "}
                        <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                            ÚNICAS
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-6"></div>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Diseño contemporáneo que combina materiales nobles con tecnología de vanguardia
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Image Slider */}
                    <div className="relative group">
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            {/* Image Container */}
                            <div className="relative w-full h-full">
                                {projectImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide
                                                ? 'opacity-100 scale-100'
                                                : 'opacity-0 scale-105'
                                            }`}
                                    >
                                        <img
                                            src={image}
                                            alt={`Proyecto WISSEN ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Controls */}
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

                            {/* Play/Pause Button */}
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm hover:bg-red-600/80 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                            >
                                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                            </button>

                            {/* Dots Indicator */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {projectImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                                ? 'bg-red-500 scale-125'
                                                : 'bg-white/50 hover:bg-white/80'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Stats Cards - Positioned over slider */}
                        <div className="absolute -bottom-8 left-0 right-0 grid grid-cols-4 gap-3 px-4">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-black/80 backdrop-blur-sm border border-gray-700 rounded-lg p-3 text-center transform hover:scale-105 transition-all duration-300 hover:border-red-500"
                                >
                                    <div className="text-2xl mb-1">{stat.icon}</div>
                                    <div className="text-2xl font-bold text-red-400">{stat.number}</div>
                                    <div className="text-xs text-gray-300 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Features Grid */}
                    <div className="mt-16 lg:mt-0">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Calidad en cada detalle
                            </h3>
                            <p className="text-gray-400 text-base">
                                WISSEN DF combina materiales nobles con tecnología de vanguardia para crear espacios únicos y sustentables.
                            </p>
                        </div>

                        {/* Compact Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[400px] overflow-y-auto custom-scrollbar">
                            {characteristics.map((characteristic, index) => {
                                const [emoji, ...textParts] = characteristic.split(' ');
                                const text = textParts.join(' ');

                                return (
                                    <div
                                        key={index}
                                        className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-3 hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 cursor-pointer"
                                    >
                                        <div className="flex items-start space-x-3">
                                            <span className="text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                {emoji}
                                            </span>
                                            <span className="text-gray-300 text-sm leading-tight group-hover:text-white transition-colors duration-300">
                                                {text}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Additional Info */}
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-lg p-4 text-center">
                                <div className="text-2xl mb-2">🛡️</div>
                                <div className="text-white font-semibold text-sm">Seguridad 24/7</div>
                                <div className="text-gray-400 text-xs">Sistema integral</div>
                            </div>
                            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-lg p-4 text-center">
                                <div className="text-2xl mb-2">🌱</div>
                                <div className="text-white font-semibold text-sm">Sustentable</div>
                                <div className="text-gray-400 text-xs">Diseño ecológico</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Scrollbar Styles */}
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

export default WissenFeaturesSection;
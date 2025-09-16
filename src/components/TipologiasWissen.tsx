import { TrendingUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaHome, FaBath, FaExpand, FaSquare, FaCar, FaStore, FaBolt, FaMapMarkerAlt, FaUsers, FaBuilding } from 'react-icons/fa';
import { FaShield } from 'react-icons/fa6';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface Tipologia {
    tipo: string;
    supPropia: number;
    supBalcon: number;
    supComun: number;
    supTotal: number;
    dormitorios: number;
    banos: number;
    disponibles: number;
}

const WissenTipologiasSection = () => {
    const [selectedTipologia, setSelectedTipologia] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

    const tipologias: Tipologia[] = [
        { tipo: "A", supPropia: 42.69, supBalcon: 1.25, supComun: 5.15, supTotal: 49.09, dormitorios: 1, banos: 1, disponibles: 1 },
        { tipo: "B", supPropia: 40.77, supBalcon: 1.25, supComun: 4.54, supTotal: 46.56, dormitorios: 1, banos: 1, disponibles: 1 },
        { tipo: "C", supPropia: 42.73, supBalcon: 0, supComun: 5.52, supTotal: 48.25, dormitorios: 1, banos: 1, disponibles: 1 },
        { tipo: "D", supPropia: 40.15, supBalcon: 0, supComun: 4.80, supTotal: 44.95, dormitorios: 1, banos: 1, disponibles: 1 },
        { tipo: "E", supPropia: 43.11, supBalcon: 1.25, supComun: 5.19, supTotal: 49.55, dormitorios: 1, banos: 1, disponibles: 2 },
        { tipo: "F", supPropia: 40.87, supBalcon: 1.25, supComun: 4.93, supTotal: 47.05, dormitorios: 1, banos: 1, disponibles: 2 },
        { tipo: "G", supPropia: 44.00, supBalcon: 1.25, supComun: 5.70, supTotal: 50.95, dormitorios: 1, banos: 1, disponibles: 4 }
    ];

    // Animaciones en scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0');
                        setVisibleCards(prev => new Set([...prev, index]));
                    }
                });
            },
            { threshold: 0.2, rootMargin: '50px' }
        );

        const cards = sectionRef.current?.querySelectorAll('[data-index]');
        cards?.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    const getAvailabilityColor = (available: number): string => {
        if (available > 3) return 'bg-green-500';
        if (available > 1) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    const getAvailabilityText = (available: number): string => {
        if (available > 1) return 'Unidades disponibles';
        if (available === 1) return 'Unidad disponible';
        return 'Últimas unidades';
    };

    const sendWhatsApp = (message: string = "Hola, me interesa WISSEN DF. ¿Podrían contactarme?"): void => {
        const phone = "5493517516450";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const getImagePath = (tipo: string): string => {
        const imageMap: Record<string, string> = {
            'A': '/imgs/wissen/tipologias/A.png',
            'B': '/imgs/wissen/tipologias/B.png',
            'C': '/imgs/wissen/tipologias/Baja.png',
            'D': '/imgs/wissen/tipologias/D.png',
            'E': '/imgs/wissen/tipologias/E.png',
            'F': '/imgs/wissen/tipologias/F.png',
            'G': '/imgs/wissen/tipologias/G.png'
        };
        return imageMap[tipo] || `/imgs/wissen/tipologias/${tipo}.png`;
    };

    return (
        <section ref={sectionRef} id="tipologias" className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header con animación */}
                <div className="text-center mb-16 opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
                        TIPOLOGÍAS{" "}
                        <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                            DISPONIBLES
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Departamentos de 1 y 3 dormitorios diseñados para maximizar el confort y la funcionalidad en cada espacio.
                    </p>
                </div>

                {/* Tipologías Grid */}
                <div className="space-y-6">
                    {tipologias.map((tipologia, index) => (
                        <div
                            key={index}
                            data-index={index}
                            className={`group relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-700 overflow-hidden transform ${
                                visibleCards.has(index) 
                                    ? 'translate-y-0 opacity-100' 
                                    : 'translate-y-10 opacity-0'
                            } ${selectedTipologia === index
                                ? 'border-red-500 shadow-2xl scale-[1.02]'
                                : 'border-gray-200 hover:border-red-300 hover:shadow-xl'
                            }`}
                            style={{ 
                                transitionDelay: `${index * 100}ms`,
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            {/* Availability Badge */}
                            <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-white text-sm font-bold ${getAvailabilityColor(tipologia.disponibles)} shadow-lg`}>
                                {tipologia.disponibles} {getAvailabilityText(tipologia.disponibles)}
                            </div>

                            {/* Main Content - Horizontal Layout */}
                            <div className="grid lg:grid-cols-2 gap-0">

                                {/* Left: Image */}
                                <div className="relative h-64 lg:h-80 overflow-hidden bg-gray-100">
                                    <img
                                        src={getImagePath(tipologia.tipo)}
                                        alt={`Plano Tipología ${tipologia.tipo}`}
                                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                    />

                                    {/* Overlay with type */}
                                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                                        <h3 className="text-2xl font-black">TIPO {tipologia.tipo}</h3>
                                        <div className="flex items-center gap-3 text-sm">
                                            <span className="flex items-center gap-1">
                                                <FaHome className="w-4 h-4" />
                                                {tipologia.dormitorios} {tipologia.dormitorios === 1 ? 'Dorm' : 'Dorms'}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <FaBath className="w-4 h-4" />
                                                {tipologia.banos} {tipologia.banos === 1 ? 'Baño' : 'Baños'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Special badge for 3 bedrooms */}
                                    {tipologia.dormitorios === 3 && (
                                        <div className="absolute bottom-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                                            ⭐ 3 DORMITORIOS
                                        </div>
                                    )}
                                </div>

                                {/* Right: Info */}
                                <div className="p-6 lg:p-8 flex flex-col justify-between">

                                    {/* Surface Details */}
                                    <div className="space-y-4 mb-6">
                                        <div className="grid grid-cols-2 gap-4">

                                            {/* Main Surface */}
                                            <div className="bg-gray-50 rounded-lg p-4 text-center group-hover:bg-gray-100 transition-colors duration-300">
                                                <div className="flex items-center justify-center mb-2">
                                                    <FaSquare className="w-5 h-5 text-gray-600 mr-2" />
                                                    <span className="text-sm font-medium text-gray-600">Superficie Propia</span>
                                                </div>
                                                <div className="text-2xl font-black text-gray-900">{tipologia.supPropia}</div>
                                                <div className="text-sm text-gray-500">m²</div>
                                            </div>

                                            {/* Total Surface - Con menos rojo */}
                                            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-4 text-center text-white group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300">
                                                <div className="flex items-center justify-center mb-2">
                                                    <FaExpand className="w-5 h-5 mr-2" />
                                                    <span className="text-sm font-medium">Total</span>
                                                </div>
                                                <div className="text-2xl font-black">{tipologia.supTotal}</div>
                                                <div className="text-sm opacity-80">m²</div>
                                            </div>
                                        </div>

                                        {/* Additional Details */}
                                        <div className="grid grid-cols-2 gap-3 text-sm">
                                            {tipologia.supBalcon > 0 && (
                                                <div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                                                    <span className="text-blue-700 font-medium">🏢 Balcón</span>
                                                    <span className="font-bold text-blue-900">{tipologia.supBalcon} m²</span>
                                                </div>
                                            )}
                                            <div className="flex justify-between items-center bg-green-50 p-3 rounded-lg hover:bg-green-100 transition-colors duration-300">
                                                <span className="text-green-700 font-medium">🌳 Común</span>
                                                <span className="font-bold text-green-900">{tipologia.supComun} m²</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button
                                            onClick={() => setSelectedTipologia(selectedTipologia === index ? null : index)}
                                            className="flex-1 bg-gray-900 hover:bg-black text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                                        >
                                            <span>MÁS DETALLES</span>
                                            {selectedTipologia === index ?
                                                <FiChevronUp className="w-5 h-5" /> :
                                                <FiChevronDown className="w-5 h-5" />
                                            }
                                        </button>

                                        <button
                                            onClick={() => sendWhatsApp(`Hola, me interesa la tipología ${tipologia.tipo} de WISSEN DF. ¿Podrían contactarme?`)}
                                            className="border-2 border-red-500 text-red-600 hover:bg-red-500 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                                        >
                                            <FaWhatsapp className="w-5 h-5" />
                                            <span>CONSULTAR</span>
                                        </button>
                                    </div>

                                    {/* Expanded Content */}
                                    <div className={`overflow-hidden transition-all duration-500 ${selectedTipologia === index ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                                        }`}>
                                        <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                                            <h4 className="font-bold text-gray-900 text-lg mb-3">Detalles Completos</h4>

                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                <div className="space-y-2">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Superficie propia:</span>
                                                        <span className="font-semibold">{tipologia.supPropia} m²</span>
                                                    </div>
                                                    {tipologia.supBalcon > 0 && (
                                                        <div className="flex justify-between">
                                                            <span className="text-gray-600">Balcón:</span>
                                                            <span className="font-semibold">{tipologia.supBalcon} m²</span>
                                                        </div>
                                                    )}
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Superficie común:</span>
                                                        <span className="font-semibold">{tipologia.supComun} m²</span>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Dormitorios:</span>
                                                        <span className="font-semibold">{tipologia.dormitorios}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Baños:</span>
                                                        <span className="font-semibold">{tipologia.banos}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Disponibles:</span>
                                                        <span className="font-semibold text-red-600">{tipologia.disponibles}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border-t pt-4">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-lg font-bold text-gray-900">SUPERFICIE TOTAL:</span>
                                                    <span className="text-2xl font-black text-red-600">{tipologia.supTotal} m²</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Espacios Adicionales */}
                <div className="mt-16 mb-16">
                    <div className="text-center mb-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.5s_forwards]">
                        <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                            ESPACIOS{" "}
                            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                                ADICIONALES
                            </span>
                        </h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Completá tu inversión con cocheras seguras y local comercial de alta rentabilidad
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {/* Cocheras */}
                        <div className="group bg-white rounded-2xl shadow-lg border-2 border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-500 overflow-hidden opacity-0 animate-[fadeInUp_0.8s_ease-out_0.7s_forwards]">
                            <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="relative z-10 flex items-center gap-4">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <FaCar className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black">COCHERAS</h4>
                                        <p className="opacity-90">Espacios seguros para tu vehículo</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-gray-600 font-medium">Disponibilidad</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="font-bold text-green-600 text-lg">5 Disponibles</span>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <FaShield className="w-4 h-4 text-red-500" />
                                        <span>Seguridad 24/7</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <FaBolt className="w-4 h-4 text-red-500" />
                                        <span>Portón automático</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <FaMapMarkerAlt className="w-4 h-4 text-red-500" />
                                        <span>Ubicación privilegiada</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => sendWhatsApp("Hola, me interesa una cochera en WISSEN DF. ¿Podrían contactarme?")}
                                    className="w-full border-2 border-red-500 text-red-600 hover:bg-red-500 hover:text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                                >
                                    <FaWhatsapp className="w-5 h-5" />
                                    <span>CONSULTAR COCHERA</span>
                                </button>
                            </div>
                        </div>

                        {/* Local */}
                        <div className="group bg-white rounded-2xl shadow-lg border-2 border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-500 overflow-hidden opacity-0 animate-[fadeInUp_0.8s_ease-out_0.9s_forwards]">
                            <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="relative z-10 flex items-center gap-4">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <FaStore className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-black">LOCAL COMERCIAL</h4>
                                        <p className="opacity-90">Oportunidad de inversión</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-gray-600 font-medium">Disponibilidad</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                                        <span className="font-bold text-yellow-600 text-lg">1 Disponible</span>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <TrendingUp className="w-4 h-4 text-red-500" />
                                        <span>Alta rentabilidad</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <FaUsers className="w-4 h-4 text-red-500" />
                                        <span>Zona de alto tránsito</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <FaBuilding className="w-4 h-4 text-red-500" />
                                        <span>Planta baja</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => sendWhatsApp("Hola, me interesa el local comercial en WISSEN DF. ¿Podrían contactarme?")}
                                    className="w-full border-2 border-red-500 text-red-600 hover:bg-red-500 hover:text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                                >
                                    <FaWhatsapp className="w-5 h-5" />
                                    <span>CONSULTAR LOCAL</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default WissenTipologiasSection;
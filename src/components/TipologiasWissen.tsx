import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, Home, Bath, Maximize, Square, Car, Store, Shield, Zap, MapPin, TrendingUp, Users, Building } from 'lucide-react';

const WissenTipologiasSection = () => {
    const [selectedTipologia, setSelectedTipologia] = useState(null);

    const tipologias = [
        { tipo: "A", supPropia: 42.69, supBalcon: 1.25, supComun: 5.15, supTotal: 49.09, dormitorios: 1, banos: 1, disponibles: 1 },
        { tipo: "B", supPropia: 40.77, supBalcon: 1.25, supComun: 4.54, supTotal: 46.56, dormitorios: 1, banos: 1, disponibles: 1 },
        { tipo: "C", supPropia: 42.73, supBalcon: 0, supComun: 5.52, supTotal: 48.25, dormitorios: 1, banos: 1, disponibles: 1 },
        { tipo: "D", supPropia: 40.15, supBalcon: 0, supComun: 4.80, supTotal: 44.95, dormitorios: 1, banos: 1, disponibles: 1 },
        { tipo: "E", supPropia: 43.11, supBalcon: 1.25, supComun: 5.19, supTotal: 49.55, dormitorios: 1, banos: 1, disponibles: 2 },
        { tipo: "F", supPropia: 40.87, supBalcon: 1.25, supComun: 4.93, supTotal: 47.05, dormitorios: 1, banos: 1, disponibles: 2 },
        { tipo: "G", supPropia: 44.00, supBalcon: 1.25, supComun: 5.70, supTotal: 50.95, dormitorios: 3, banos: 2, disponibles: 4 }
    ];

    const getAvailabilityColor = (available) => {
        if (available > 3) return 'bg-green-500';
        if (available > 1) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    const getAvailabilityText = (available) => {
        if (available > 3) return 'Disponible';
        if (available > 1) return 'Pocas unidades';
        return 'Últimas unidades';
    };

    const sendWhatsApp = (message = "Hola, me interesa WISSEN DF. ¿Podrían contactarme?") => {
        const phone = "5493515000000"; // Reemplazar con número real
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const getImagePath = (tipo) => {
        const imageMap = {
            'A': '/imgs/wissen/tipologias/A.png',
            'B': '/imgs/wissen/tipologias/B.png',
            'C': '/imgs/wissen/tipologias/Baja.png', // Asumiendo que C es "Baja"
            'D': '/imgs/wissen/tipologias/D.png',
            'E': '/imgs/wissen/tipologias/E.png',
            'F': '/imgs/wissen/tipologias/F.png',
            'G': '/imgs/wissen/tipologias/Patio.png' // Asumiendo que G es "Patio"
        };
        return imageMap[tipo] || `/imgs/wissen/tipologias/${tipo}.png`;
    };

    return (
        <section id="tipologias" className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
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
                            className={`group relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-500 overflow-hidden ${selectedTipologia === index
                                ? 'border-red-500 shadow-2xl scale-[1.02]'
                                : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
                                }`}
                        >
                            {/* Availability Badge */}
                            <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-white text-sm font-bold ${getAvailabilityColor(tipologia.disponibles)}`}>
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
                                                <Home className="w-4 h-4" />
                                                {tipologia.dormitorios} {tipologia.dormitorios === 1 ? 'Dorm' : 'Dorms'}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Bath className="w-4 h-4" />
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
                                            <div className="bg-gray-50 rounded-lg p-4 text-center">
                                                <div className="flex items-center justify-center mb-2">
                                                    <Square className="w-5 h-5 text-gray-600 mr-2" />
                                                    <span className="text-sm font-medium text-gray-600">Superficie Propia</span>
                                                </div>
                                                <div className="text-2xl font-black text-gray-900">{tipologia.supPropia}</div>
                                                <div className="text-sm text-gray-500">m²</div>
                                            </div>

                                            {/* Total Surface - Highlighted */}
                                            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-4 text-center text-white">
                                                <div className="flex items-center justify-center mb-2">
                                                    <Maximize className="w-5 h-5 mr-2" />
                                                    <span className="text-sm font-medium">Total</span>
                                                </div>
                                                <div className="text-2xl font-black">{tipologia.supTotal}</div>
                                                <div className="text-sm opacity-80">m²</div>
                                            </div>
                                        </div>

                                        {/* Additional Details */}
                                        <div className="grid grid-cols-2 gap-3 text-sm">
                                            {tipologia.supBalcon > 0 && (
                                                <div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg">
                                                    <span className="text-blue-700 font-medium">🏢 Balcón</span>
                                                    <span className="font-bold text-blue-900">{tipologia.supBalcon} m²</span>
                                                </div>
                                            )}
                                            <div className="flex justify-between items-center bg-green-50 p-3 rounded-lg">
                                                <span className="text-green-700 font-medium">🌳 Común</span>
                                                <span className="font-bold text-green-900">{tipologia.supComun} m²</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button
                                            onClick={() => setSelectedTipologia(selectedTipologia === index ? null : index)}
                                            className="flex-1 bg-gray-900 hover:bg-black text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            <span>MÁS DETALLES</span>
                                            {selectedTipologia === index ?
                                                <ChevronUp className="w-5 h-5" /> :
                                                <ChevronDown className="w-5 h-5" />
                                            }
                                        </button>

                                        <button
                                            onClick={() => sendWhatsApp(`Hola, me interesa la tipología ${tipologia.tipo} de WISSEN DF. ¿Podrían contactarme?`)}
                                            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            <MessageCircle className="w-5 h-5" />
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

                <div className="mt-16 mb-16">
                    <div className="text-center mb-8">
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
                        <div
                            className="group bg-white rounded-2xl shadow-lg border-2 border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-500 overflow-hidden"
                            style={{ '--red': '#99192B' }}
                        >
                            <div
                                className="p-6 text-white relative overflow-hidden"
                                style={{ background: 'linear-gradient(135deg, #99192B 0%, #EB484E 100%)' }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="relative z-10 flex items-center gap-4">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Car className="w-8 h-8" />
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
                                        <Shield className="w-4 h-4" style={{ color: '#99192B' }} />
                                        <span>Seguridad 24/7</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <Zap className="w-4 h-4" style={{ color: '#99192B' }} />
                                        <span>Portón automático</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <MapPin className="w-4 h-4" style={{ color: '#99192B' }} />
                                        <span>Ubicación privilegiada</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => sendWhatsApp("Hola, me interesa una cochera en WISSEN DF. ¿Podrían contactarme?")}
                                    className="w-full text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                                    style={{
                                        background: 'linear-gradient(135deg, #99192B 0%, #EB484E 100%)',
                                        boxShadow: '0 4px 15px rgba(153, 25, 43, 0.3)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = 'linear-gradient(135deg, #EB484E 0%, #99192B 100%)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'linear-gradient(135deg, #99192B 0%, #EB484E 100%)';
                                    }}
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    <span>CONSULTAR COCHERA</span>
                                </button>
                            </div>
                        </div>

                        {/* Local */}
                        <div
                            className="group bg-white rounded-2xl shadow-lg border-2 border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-500 overflow-hidden"
                            style={{ '--red': '#99192B' }}
                        >
                            <div
                                className="p-6 text-white relative overflow-hidden"
                                style={{ background: 'linear-gradient(135deg, #99192B 0%, #EB484E 100%)' }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="relative z-10 flex items-center gap-4">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Store className="w-8 h-8" />
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
                                        <TrendingUp className="w-4 h-4" style={{ color: '#99192B' }} />
                                        <span>Alta rentabilidad</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <Users className="w-4 h-4" style={{ color: '#99192B' }} />
                                        <span>Zona de alto tránsito</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600">
                                        <Building className="w-4 h-4" style={{ color: '#99192B' }} />
                                        <span>Planta baja</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => sendWhatsApp("Hola, me interesa el local comercial en WISSEN DF. ¿Podrían contactarme?")}
                                    className="w-full text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                                    style={{
                                        background: 'linear-gradient(135deg, #99192B 0%, #EB484E 100%)',
                                        boxShadow: '0 4px 15px rgba(153, 25, 43, 0.3)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.background = 'linear-gradient(135deg, #EB484E 0%, #99192B 100%)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.background = 'linear-gradient(135deg, #99192B 0%, #EB484E 100%)';
                                    }}
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    <span>CONSULTAR LOCAL</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                {/* <div className="mt-16 text-center">
                    <div className="inline-block bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 max-w-lg mx-auto">
                        <div className="text-white mb-6">
                            <h3 className="text-2xl font-bold mb-2">¿Necesitás más información?</h3>
                            <p className="text-gray-300">Nuestro equipo te ayudará a elegir la tipología perfecta para vos</p>
                        </div>
                        <button
                            onClick={() => sendWhatsApp()}
                            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span>CONTACTAR ASESOR</span>
                        </button>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default WissenTipologiasSection;
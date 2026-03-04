import { useState, useEffect, useRef } from 'react';
import { FaHandshake } from 'react-icons/fa';
import Button from './UI/Button';
import { useWhatsApp } from '../hooks/useWhatsApp';
import { WHATSAPP_MESSAGES } from '../data/whatsappMessages';

const FinanciamientoWissen = () => {
  const { openChat } = useWhatsApp();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="financiamiento"
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl animate-bounce delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Título */}
        <h2 className={`text-4xl md:text-6xl font-black text-white mb-4 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          FINANCIAMIENTO{" "}
          <span className="text-red-400 animate-pulse">FLEXIBLE</span>
        </h2>

        {/* Línea decorativa */}
        <div className={`w-24 h-1 bg-red-500 mx-auto mb-8 rounded-full transition-all duration-600 delay-300 ${
          isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}></div>

        {/* Slogan */}
        <p className={`text-xl md:text-2xl text-gray-400 mb-16 font-light transition-all duration-800 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Elegí el plan que mejor se adapte a tu situación
        </p>

        {/* ENTREGA + CUOTAS - Elemento principal */}
        <div className={`mb-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
        }`}>
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-16 border border-gray-700 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-red-500/30 relative overflow-hidden">
            {/* Patrón de fondo sutil */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-red-600/20"></div>
            </div>

            <div className="relative z-10">
              {/* Ícono principal */}
              <div className={`w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl transition-all duration-800 delay-1000 ${
                isVisible ? 'opacity-100 scale-100 animate-bounce-slow' : 'opacity-0 scale-0'
              }`}>
                <FaHandshake className="text-white text-3xl" />
              </div>

              {/* Texto principal */}
              <h3 className={`text-4xl md:text-6xl font-black text-white mb-6 tracking-wider transition-all duration-800 delay-1200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                ENTREGA <span className="text-red-400">+</span> CUOTAS
              </h3>

              {/* Descripción */}
              <p className={`text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-800 delay-1400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                La forma más accesible de acceder a tu propiedad.
                <br />
                <span className="text-red-300 font-semibold">
                  Plan inversor, descuento por pago de contado.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Botón de acción */}
        <div className={`flex items-center justify-center gap-4 flex-col transition-all duration-800 delay-1600 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
        }`}>
          <Button
            text="QUIERO MÁS INFORMACIÓN"
            onClick={() => openChat(WHATSAPP_MESSAGES.wissenFinanciamiento)}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 20%, 53%, 80%, 100% {
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            transform: translate3d(0, 0, 0);
          }
          40%, 43% {
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            transform: translate3d(0, -15px, 0);
          }
          70% {
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            transform: translate3d(0, -8px, 0);
          }
          90% {
            transform: translate3d(0, -3px, 0);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default FinanciamientoWissen;
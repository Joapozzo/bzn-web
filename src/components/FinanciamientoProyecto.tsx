import { useState, useEffect, useRef } from "react";
import { FaHandshake } from "react-icons/fa";
import Button from "./UI/Button";

export interface FinanciamientoProyectoProps {
  title?: string;
  subtitle?: string;
  slogan?: string;
  showEntregaCuotas?: boolean;
  showPrecioTitle?: boolean;
  estadoBadge?: string;
  priceLabel?: string;
  priceValue?: string;
  whatsappMessage: string;
  phone: string;
  buttonText?: string;
}

const FinanciamientoProyecto = ({
  title = "FINANCIAMIENTO",
  subtitle = "FLEXIBLE",
  slogan = "Elegí el plan que mejor se adapte a tu situación",
  showEntregaCuotas = true,
  showPrecioTitle = true,
  estadoBadge,
  priceLabel,
  priceValue,
  whatsappMessage,
  phone,
  buttonText = "QUIERO MÁS INFORMACIÓN",
}: FinanciamientoProyectoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const sendWhatsApp = () => {
    const cleanPhone = phone.replace(/\D/g, "");
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      ref={sectionRef}
      id="financiamiento"
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent animate-pulse" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-bounce" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl animate-bounce delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {showPrecioTitle && (
          <>
            <h2
              className={`text-4xl md:text-6xl font-black text-white mb-4 transition-all duration-800 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {title}{" "}
              <span className="text-red-400 animate-pulse">{subtitle}</span>
            </h2>
            <div
              className={`w-24 h-1 bg-red-500 mx-auto mb-8 rounded-full transition-all duration-600 delay-300 ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            />
          </>
        )}

        {estadoBadge && (
          <div
            className={`mb-8 transition-all duration-800 delay-200 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <span className="inline-block px-8 py-4 text-2xl md:text-3xl font-black uppercase tracking-widest text-white bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl shadow-lg shadow-emerald-500/30 border-2 border-emerald-400/50 animate-pulse">
              {estadoBadge}
            </span>
          </div>
        )}

        <p
          className={`text-xl md:text-2xl text-gray-300 mb-12 font-light transition-all duration-800 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {slogan}
        </p>

        {showEntregaCuotas && (
          <div
            className={`mb-16 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-20 scale-95"
            }`}
          >
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-16 border border-gray-700 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-red-500/30 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-red-600/20" />
              </div>
              <div className="relative z-10">
                <div
                  className={`w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl transition-all duration-800 delay-1000 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                >
                  <FaHandshake className="text-white text-3xl" />
                </div>
                <h3
                  className={`text-4xl md:text-6xl font-black text-white mb-6 tracking-wider transition-all duration-800 delay-1200 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  ENTREGA <span className="text-red-400">+</span> CUOTAS
                </h3>
                <p
                  className={`text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-800 delay-1400 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  La forma más accesible de acceder a tu propiedad.
                </p>
              </div>
            </div>
          </div>
        )}

        {!estadoBadge && priceLabel && priceValue && (
          <div
            className={`mb-8 transition-all duration-800 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-gray-400 text-lg mb-2">{priceLabel}</p>
            <p className="text-3xl md:text-4xl font-black text-red-400">
              {priceValue}
            </p>
          </div>
        )}

        <div
          className={`flex justify-center transition-all duration-800 delay-1600 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <Button text={buttonText} onClick={sendWhatsApp} />
        </div>
      </div>
    </section>
  );
};

export default FinanciamientoProyecto;

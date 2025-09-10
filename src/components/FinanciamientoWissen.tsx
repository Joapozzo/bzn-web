import { sendWhatsApp } from "../data/utils";
import { HeartHandshake } from "lucide-react";
import Button from "./UI/Button";

const FinanciamientoWissen = () => {
  return (
    <section
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
        <h2 className="text-5xl md:text-7xl font-black text-white mb-4 animate-slide-up">
          FINANCIAMIENTO{" "}
          <span className="text-red-400 animate-pulse">FLEXIBLE</span>
        </h2>

        {/* Línea decorativa */}
        <div className="w-24 h-1 bg-red-500 mx-auto mb-8 rounded-full animate-scale-in delay-300"></div>

        {/* Slogan */}
        <p className="text-xl md:text-2xl text-gray-400 mb-16 animate-slide-up delay-500 font-light">
          Elegí el plan que mejor se adapte a tu situación
        </p>

        {/* ENTREGA + CUOTAS - Elemento principal */}
        <div className="mb-16 animate-fade-in delay-700">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-16 border border-gray-700 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-red-500/30 relative overflow-hidden">
            {/* Patrón de fondo sutil */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-red-600/20"></div>
            </div>

            <div className="relative z-10">
              {/* Ícono principal */}
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-slow shadow-2xl">
                <HeartHandshake className="text-white" size={50} />
              </div>

              {/* Texto principal */}
              <h3 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wider">
                ENTREGA <span className="text-red-400">+</span> CUOTAS
              </h3>

              {/* Descripción */}
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                La forma más accesible de acceder a tu propiedad.
                <br />
                <span className="text-red-300 font-semibold">
                  Plan inversor, descuento por pago de contado.
                </span>
              </p>

              {/* Features rápidas */}
              {/* <div className="flex flex-wrap justify-center gap-4 mb-8">
                {[
                  "Sin interés por pago adelantado",
                  "Cuotas fijas en pesos",
                  "Hasta 24 meses",
                  "Plan más elegido",
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-700/50 px-4 py-2 rounded-full border border-gray-600 text-gray-300 text-sm font-medium hover:border-red-500 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${1000 + idx * 200}ms` }}
                  >
                    {feature}
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>

        {/* Botón de acción */}
        <div className="animate-fade-in delay-1500 flex items-center justify-center gap-4 flex-col">
          <Button
            text="QUIERO MÁS INFORMACIÓN"
            // className="transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-red-500/50 text-xl px-12 py-4"
            onClick={() =>
              sendWhatsApp(
                "Hola, me interesa el plan de ENTREGA + CUOTAS para WISSEN DF. ¿Podrían contactarme?"
              )
            }
          />

          {/* Texto adicional */}
          {/* <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 animate-fade-in delay-1700">
            <span className="text-red-400 animate-pulse text-xl">📞</span>
            <span className="font-medium">
              Asesoramiento gratuito y sin compromiso
            </span>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.3);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce-slow {
          0%,
          20%,
          53%,
          80%,
          100% {
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            transform: translate3d(0, 0, 0);
          }
          40%,
          43% {
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

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }

        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
        .delay-1500 {
          animation-delay: 1500ms;
        }
        .delay-1700 {
          animation-delay: 1700ms;
        }
      `}</style>
    </section>
  );
};

export default FinanciamientoWissen;
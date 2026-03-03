import React from 'react';
import { MapPin, Building, Instagram, Facebook, MessageCircle, Award } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const WissenFooter = () => {
  const sendWhatsApp = () => {
    const phone = "5493517516450";
    const message = "Hola, me interesa WISSEN DF. ¿Podrían contactarme?";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <footer id="contacto" className="bg-[var(--black)] text-white">
      {/* Top Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project Info */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black mb-2">
                WISSEN <span className="text-red-400">DF</span>
              </h2>
              <p className="text-red-500 font-medium mb-4">
                Por BZN Urban Making
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-lg">
                Un nuevo concepto de vivienda en el corazón de Córdoba. 
                Departamentos de 1 y 3 dormitorios con terminaciones de primera calidad.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-sm">Dean Funes 1928, Barrio Alberdi, Córdoba</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-sm">33 Departamentos • 8 Cocheras • Plaza Interior</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaWhatsapp className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-sm">+54 351 751-6450</span>
                </div>
              </div>
            </div>

            {/* Social Networks */}
            <div>
              <h3 className="text-xl font-bold mb-6">Síguenos</h3>
              
              <div className="flex gap-4 mb-8">
                <a
                  href="https://instagram.com/grupo.bzn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                
                <a
                  href="https://www.facebook.com/profile.php?id=61569261744008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                
                <button
                  onClick={sendWhatsApp}
                  className="w-12 h-12 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <FaWhatsapp className="w-6 h-6" />
                </button>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-xs text-gray-400 leading-relaxed">
                  40 años de experiencia en desarrollos inmobiliarios. 
                  Más de 100.000 m² ejecutados en Córdoba.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Full Width Different Color */}
      <div className="bg-[var(--black-0)] py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2025 BZN Urban Making. Todos los derechos reservados.
            </p>
            
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              <Award className="w-4 h-4" />
              <span>Desarrollista de Confianza</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WissenFooter;
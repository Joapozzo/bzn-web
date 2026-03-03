import React from "react";
import { MapPin, Mail, Instagram, Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export interface FooterProyectoProps {
  projectName: string;
  projectNameHighlight?: string;
  projectDescription: string;
  address?: string;
  addressExtra?: string;
  phone: string;
  phoneFormatted: string;
  email?: string;
  whatsappMessage: string;
  instagramUrl?: string;
  facebookUrl?: string;
  showExperienceBlock?: boolean;
}

const FooterProyecto = ({
  projectName,
  projectNameHighlight,
  projectDescription,
  address,
  addressExtra,
  phone,
  phoneFormatted,
  email,
  whatsappMessage,
  instagramUrl = "https://instagram.com/grupo.bzn",
  facebookUrl = "https://www.facebook.com/profile.php?id=61569261744008",
  showExperienceBlock = true,
}: FooterProyectoProps) => {
  const sendWhatsApp = () => {
    const cleanPhone = phone.replace(/\D/g, "");
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

  const displayName = projectNameHighlight ? (
    <>
      {projectName.split(" ")[0]}{" "}
      <span className="text-red-400">{projectNameHighlight}</span>
    </>
  ) : (
    projectName
  );

  return (
    <footer id="contacto" className="bg-[var(--black)] text-white">
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black mb-2">{displayName}</h2>
              <p className="text-red-500 font-medium mb-4">
                Por BZN Urban Making
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-lg">
                {projectDescription}
              </p>

              <div className="space-y-3">
                {address && (
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-sm">
                      {address}
                      {addressExtra && ` • ${addressExtra}`}
                    </span>
                  </div>
                )}
                {email && (
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <a
                      href={`mailto:${email}`}
                      className="text-sm hover:text-red-400 transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <FaWhatsapp className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <a
                    href={`https://wa.me/${phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-red-400 transition-colors"
                  >
                    {phoneFormatted}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Contacto</h3>
              <div className="flex gap-4 mb-8">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href={facebookUrl}
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

              {showExperienceBlock && (
                <div className="bg-gray-800 rounded-lg p-4">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    40 años de experiencia en desarrollos inmobiliarios. Más de
                    100.000 m² ejecutados en Córdoba.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[var(--black-0)] py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2025 BZN Urban Making. Todos los derechos reservados.
            </p>
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              <span>Desarrollista de Confianza</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterProyecto;

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Maximize2,
  Car,
  BedDouble,
  Bath,
  Home,
  Ruler,
  Building2,
} from "lucide-react";

export interface DetalleItem {
  label: string;
  value: string;
  icon?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  terreno: <Ruler className="w-6 h-6" />,
  cubierta: <Maximize2 className="w-6 h-6" />,
  semicubierta: <Maximize2 className="w-6 h-6" />,
  total: <Home className="w-6 h-6" />,
  antiguedad: <Building2 className="w-6 h-6" />,
  garage: <Car className="w-6 h-6" />,
  dormitorios: <BedDouble className="w-6 h-6" />,
  estudio: <Home className="w-6 h-6" />,
  banos: <Bath className="w-6 h-6" />,
  toilette: <Bath className="w-6 h-6" />,
  ambientes: <Home className="w-6 h-6" />,
};

const getIcon = (label: string): React.ReactNode => {
  const key = label
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s/g, "")
    .replace(/sup\.?/g, "")
    .replace(/terreno/g, "terreno")
    .replace(/cubierta/g, "cubierta")
    .replace(/semicubierta/g, "semicubierta")
    .replace(/total/g, "total")
    .replace(/antigüedad/g, "antiguedad")
    .replace(/garage/g, "garage")
    .replace(/dormitorios/g, "dormitorios")
    .replace(/estudio/g, "estudio")
    .replace(/baños/g, "banos")
    .replace(/toilette/g, "toilette")
    .replace(/ambientes/g, "ambientes");
  return (
    iconMap[key] || (
      <Ruler className="w-6 h-6" />
    )
  );
};

export interface DetallesProyectoProps {
  items: DetalleItem[];
  sectionTitle?: string;
  sectionSubtitle?: string;
}

const DetallesProyecto = ({
  items,
  sectionTitle = "DETALLES",
  sectionSubtitle = "DE LA VIVIENDA",
}: DetallesProyectoProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="detalles"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            {sectionTitle}{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              {sectionSubtitle}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-6" />
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-6 shadow-sm hover:shadow-lg hover:border-red-200 transition-all duration-300 min-w-0"
            >
              <div className="flex items-start gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-[var(--red)]/10 text-[var(--red)] flex-shrink-0 scale-90 sm:scale-100 [&>svg]:max-w-full [&>svg]:max-h-full [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                  {item.icon ? (
                    <span className="text-lg sm:text-2xl">{item.icon}</span>
                  ) : (
                    getIcon(item.label)
                  )}
                </div>
                <div className="min-w-0 flex-1 overflow-hidden">
                  <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide mb-0.5 sm:mb-1 truncate">
                    {item.label}
                  </p>
                  <p className="text-sm sm:text-lg font-bold text-gray-900 truncate">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DetallesProyecto;

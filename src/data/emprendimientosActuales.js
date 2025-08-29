const emprendimientosActuales = [
  {
    tipo: "Edificio",
    nombre: "WISSEN DF",
    descripcion:
      "“Wissen DF” es un edificio de departamentos que se ubica sobre la calle Dean Funes 1928, Bº Alberdi de la ciudad de Córdoba.",
    imgs: Array.from({ length: 14 }, (_, i) => `/imgs/wissen/${i + 1}.jpg`),
    caracteristicas: [
      { texto: "🛡️ Ingreso jerarquizado con guardia y CCTV" },
      { texto: "🧱 Terminaciones en ladrillo visto y H° visto" },
      { texto: "🛗 Ascensor de última generación en acero inoxidable" },
      { texto: "🛋️ Pisos cerámicos, porcelanatos y revestimientos de calidad" },
      { texto: "🪟 Carpinterías de aluminio anodizado" },
      { texto: "🚪 Puertas placas en MDF color blanco" },
      { texto: "🍽️ Muebles de cocina con granito y alacena de diseño" },
      { texto: "🧱 Muros interiores terminados en yeso" },
      { texto: "🛁 Baños completos con bañera, sanitarios y vanitory" },
      { texto: "🔥 Sistema contra incendios con detección y presurización" },
      { texto: "🍳 Artefactos a gas y termotanque eléctrico" },
      { texto: "💡 Iluminación colocada en todos los espacios" },
      { texto: "🧥 Dormitorios con interiores de placards" },
      { texto: "🎥 CCTV en cada departamento" },
      { texto: "🚗 Cocheras cubiertas con portón levadizo" },
      { texto: "🌳 Patio interior con equipamiento y parquizado" },
    ],
    ubicacion: "Dean Funes 1928, Bº Alberdi",
    planos: [
      { nombre: "Dpto A.pdf", url: "/pdfs/wissen/Dpto A.pdf" },
      { nombre: "Dpto B.pdf", url: "/pdfs/wissen/Dpto B.pdf" },
      // { nombre: "Dpto C.pdf", url: "/pdfs/wissen/Dpto C.pdf" },
      { nombre: "Dpto D.pdf", url: "/pdfs/wissen/Dpto D.pdf" },
      { nombre: "Dpto E.pdf", url: "/pdfs/wissen/Dpto E.pdf" },
      { nombre: "Dpto F.pdf", url: "/pdfs/wissen/Dpto F.pdf" },
    ],
  },
];

export default emprendimientosActuales;

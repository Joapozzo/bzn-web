import { useEffect, useState } from "react";
import "../styles/FlipCard.css";

interface FlipCardProps {
  emprendimiento: any;
}

export default function FlipCard({ emprendimiento }: FlipCardProps) {
  const { tipo, nombre, direccion, m2, duracion, descripcion, unidades } = emprendimiento;

  const [randomFrontImg, setRandomFrontImg] = useState('');
  const [randomBackImg, setRandomBackImg] = useState('');

  useEffect(() => {
    const getRandomImg = () => `/imgs/${Math.floor(Math.random() * 3) + 1}.jpg`;
    const front = getRandomImg();
    let back = getRandomImg();
    while (back === front) {
      back = getRandomImg();
    }

    setRandomFrontImg(front);
    setRandomBackImg(back);
  }, []);

  // Hasta que se definan las imágenes, no renderizar la tarjeta (opcional para evitar parpadeo)
  if (!randomFrontImg || !randomBackImg) return null;

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front" style={{ backgroundImage: `url(${randomFrontImg})` }}>
          <div className="overlay"></div>
          <p>{tipo}</p>
          <h2>{nombre}</h2>
        </div>

        <div className="flip-card-back" style={{ backgroundImage: `url(${randomBackImg})` }}>
          <div className="overlay"></div>
          <p>{descripcion}</p>
          <ul>
            {duracion && <li>🗓️ Año: {duracion}</li>}
            {m2 && <li>📐 Metros cuadrados: {m2.toLocaleString()}</li>}
            {direccion && <li>📍 Dirección: {direccion}</li>}
            {unidades && <li>🏢 Unidades: {unidades}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}

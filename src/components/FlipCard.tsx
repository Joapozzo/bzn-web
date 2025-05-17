import { useEffect, useState } from "react";
import "../styles/FlipCard.css";

interface FlipCardProps {
  emprendimiento: any;
}

export default function FlipCard({ emprendimiento }: FlipCardProps) {
  const { tipo, nombre, direccion, m2, duracion, descripcion, unidades, img } = emprendimiento;

  const frontImg = img?.frente || '/imgs/1.jpg';
  const backImg = img?.dorso || '/imgs/2.jpg';

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front" style={{ backgroundImage: `url(${frontImg})` }}>
          <div className="overlay"></div>
          <p>{tipo}</p>
          <h2>{nombre}</h2>
        </div>

        <div className="flip-card-back" style={{ backgroundImage: `url(${backImg})` }}>
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
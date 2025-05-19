
import { useState } from "react";
import "../styles/FlipCard.css";

interface FlipCardProps {
  emprendimiento: any;
}

export default function FlipCard({ emprendimiento }: FlipCardProps) {
  const { tipo, nombre, direccion, m2, duracion, descripcion, unidades, img } = emprendimiento;
  const [isFlipped, setIsFlipped] = useState(false);

  const frontImg = img?.frente || '/imgs/1.jpg';
  const backImg = img?.dorso || '/imgs/2.jpg';

  return (
    <div 
      className={`flip-card ${isFlipped ? 'is-flipped' : ''}`} 
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flip-card-container">
        {/* Cara frontal con efecto de paralaje */}
        <div className="card-side front-wrapper">
          <div className="card-front" style={{ backgroundImage: `url(${frontImg})` }}>
            <div className="overlay"></div>
            <div className="shine-effect"></div>
            <div className="card-content">
              <div className="info-wrapper">
                <p className="card-category">{tipo}</p>
                <h2 className="card-title">{nombre}</h2>
              </div>
            </div>
          </div>
        </div>
        
        {/* Cara trasera con efecto de despliegue */}
        <div className="card-side back-wrapper">
          <div className="card-back" style={{ backgroundImage: `url(${backImg})` }}>
            <div className="overlay"></div>
            <div className="card-content">
              <p className="card-description">{descripcion}</p>
              <ul className="card-details">
                {duracion && <li>🗓️ Año: {duracion}</li>}
                {m2 && <li>📐 Metros cuadrados: {m2.toLocaleString()}</li>}
                {direccion && <li>📍 Dirección: {direccion}</li>}
                {unidades && <li>🏢 Unidades: {unidades}</li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
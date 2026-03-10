import "../styles/FlipCard.css";
import { useState } from "react";

interface FlipCardProps {
  emprendimiento: any;
}

export default function FlipCard({ emprendimiento }: FlipCardProps) {
  const { tipo, nombre, img, direccion, m2, duracion, descripcion, unidades } = emprendimiento;
  const [showExtra, setShowExtra] = useState(false);

  const frontImg = img?.frente || '/imgs/1.jpg';

  return (
    <article
      className="emprendimiento-card"
      onClick={() => setShowExtra((prev) => !prev)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setShowExtra((prev) => !prev)}
      aria-expanded={showExtra}
    >
      <div
        className="emprendimiento-card__image"
        style={{ backgroundImage: `url(${frontImg})` }}
      >
        <div className="emprendimiento-card__overlay" />
        <div className="emprendimiento-card__content">
          <span className="emprendimiento-card__badge">{tipo}</span>
          <h3 className="emprendimiento-card__title">{nombre}</h3>
          {showExtra && (
            <div className="emprendimiento-card__hover-info">
              {/* {descripcion && <p className="emprendimiento-card__description">{descripcion}</p>} */}
              <ul className="emprendimiento-card__details">
                {duracion && <li>Año: {duracion}</li>}
                {m2 != null && <li>{Number(m2).toLocaleString()} m²</li>}
                {direccion && <li>{direccion}</li>}
                {unidades && <li>{unidades}</li>}
              </ul>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

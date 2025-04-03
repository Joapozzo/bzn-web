import "../styles/FlipCard.css";

interface FlipCardProps {
  emprendimiento: any;
}

export default function FlipCard({ emprendimiento }: FlipCardProps) {
  const { tipo, nombre, direccion, m2, duracion, descripcion, img } = emprendimiento;
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        
        {/* Cara frontal */}
        <div className="flip-card-front">
          <div className="overlay"></div>
          <p>{tipo}</p>
          <h2>{nombre}</h2>
        </div>

        {/* Cara trasera */}
        <div className="flip-card-back">
          <div className="overlay"></div>
          <p>{descripcion}</p>
          <ul>
            {duracion && <li>⏳ {duracion} meses</li>}
            {m2 && <li>📏 Metros cuadrados: {m2}</li>}
            {img && <li>🏠 Habitaciones: {img}</li>}
            {direccion && <li>📍 {direccion}</li>}
          </ul>
        </div>

      </div>
    </div>
  );
}

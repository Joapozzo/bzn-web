import "../styles/FlipCard.css";

interface FlipCardProps {
  emprendimiento: any;
}

export default function FlipCard({ emprendimiento }: FlipCardProps) {
  const { tipo, nombre, direccion, m2, duracion, descripcion, unidades } = emprendimiento;

  // Generar imágenes aleatorias
  const randomFrontImg = `/imgs/${Math.floor(Math.random() * 3) + 1}.jpg`;
  let randomBackImg;
  do {
    randomBackImg = `/imgs/${Math.floor(Math.random() * 3) + 1}.jpg`;
  } while (randomBackImg === randomFrontImg); // Evitar que sean iguales

  return (
    <div className="flip-card">
      <div className="flip-card-inner">

        {/* Cara frontal */}
        <div className="flip-card-front" style={{ backgroundImage: `url(${randomFrontImg})` }}>
          <div className="overlay"></div>
          <p>{tipo}</p>
          <h2>{nombre}</h2>
        </div>

        {/* Cara trasera */}
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


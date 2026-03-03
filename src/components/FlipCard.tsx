import "../styles/FlipCard.css";

interface FlipCardProps {
  emprendimiento: any;
}

export default function FlipCard({ emprendimiento }: FlipCardProps) {
  const { tipo, nombre, img } = emprendimiento;
  // const { direccion, m2, duracion, descripcion, unidades } = emprendimiento; // data no mostrada

  const frontImg = img?.frente || '/imgs/1.jpg';

  return (
    <article className="emprendimiento-card">
      <div
        className="emprendimiento-card__image"
        style={{ backgroundImage: `url(${frontImg})` }}
      >
        <div className="emprendimiento-card__overlay" />
        <div className="emprendimiento-card__content">
          <span className="emprendimiento-card__badge">{tipo}</span>
          <h3 className="emprendimiento-card__title">{nombre}</h3>
        </div>
        {/* Info extra no mostrada por pedido del cliente
        <div className="emprendimiento-card__hover-info">
          {descripcion && <p className="emprendimiento-card__description">{descripcion}</p>}
          <ul className="emprendimiento-card__details">
            {duracion && <li>Año: {duracion}</li>}
            {m2 && <li>{m2.toLocaleString()} m²</li>}
            {direccion && <li>{direccion}</li>}
            {unidades && <li>{unidades}</li>}
          </ul>
        </div>
        */}
      </div>
    </article>
  );
}

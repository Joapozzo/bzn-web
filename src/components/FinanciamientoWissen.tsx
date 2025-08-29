import { colors, sendWhatsApp } from "../data/utils";
import Button from "./UI/Button";

const FinanciamientoWissen = () => {
  return (
    < section
      id="financiamiento"
      style={{ padding: "5rem 0", backgroundColor: colors.blackLight }
      }
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: "900",
              color: colors.white,
              marginBottom: "1rem",
            }}
          >
            FINANCIAMIENTO{" "}
            <span style={{ color: colors.redLight }}>FLEXIBLE</span>
          </h2>
          <div
            style={{
              width: "96px",
              height: "4px",
              backgroundColor: colors.red,
              margin: "0 auto 2rem",
              borderRadius: "2px",
            }}
          ></div>
          <p
            style={{
              fontSize: "1.125rem",
              maxWidth: "600px",
              margin: "0 auto",
              color: colors.blackFaded,
            }}
          >
            Elegí el plan que mejor se adapte a tu situación. Tenemos
            opciones para todos los perfiles.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {[
            {
              title: "Plan Tradicional",
              subtitle: "Entrega + Cuotas",
              features: [
                "30% de entrega inicial",
                "Cuotas fijas en pesos",
                "Financiación hasta 24 meses",
                "Sin interés por pago adelantado",
              ],
              highlight: "Más elegido",
              color: colors.red,
            },
            {
              title: "Plan Inversor",
              subtitle: "100% Financiado",
              features: [
                "Sin entrega inicial",
                "Financiación extendida",
                "Ideal para inversión",
                "Rentabilidad garantizada",
              ],
              highlight: "Oportunidad",
              color: colors.black,
            },
            {
              title: "Plan Contado",
              subtitle: "Pago Único",
              features: [
                "Descuento por pago contado",
                "Máximo ahorro total",
                "Escrituración inmediata",
                "Sin trámites de financiación",
              ],
              highlight: "Mayor descuento",
              color: colors.redLight,
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              style={{
                position: "relative",
                backgroundColor: colors.white,
                border: "2px solid #e5e7eb",
                borderRadius: "16px",
                overflow: "hidden",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = plan.color;
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow = `0 20px 40px ${plan.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e5e7eb";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Badge destacado */}
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  backgroundColor: plan.color,
                  color: colors.white,
                  padding: "0.25rem 0.75rem",
                  borderRadius: "9999px",
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  zIndex: 10,
                }}
              >
                {plan.highlight}
              </div>

              {/* Header */}
              <div
                style={{
                  backgroundColor: plan.color,
                  color: colors.white,
                  padding: "2rem",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%)`,
                    backgroundSize: "20px 20px",
                  }}
                ></div>

                <div style={{ position: "relative", zIndex: 1 }}>
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      margin: "0 auto 1rem",
                      backgroundColor: "rgba(255,255,255,0.2)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                    }}
                  >
                    {idx === 0 ? "🤝" : idx === 1 ? "📈" : "💰"}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {plan.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "300",
                      opacity: 0.9,
                      margin: 0,
                    }}
                  >
                    {plan.subtitle}
                  </p>
                </div>
              </div>

              {/* Contenido */}
              <div style={{ padding: "2rem" }}>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 2rem 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {plan.features.map((feature, featureIdx) => (
                    <li
                      key={featureIdx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                      }}
                    >
                      <div
                        style={{
                          width: "24px",
                          height: "24px",
                          backgroundColor: plan.color,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: colors.white,
                          fontSize: "0.75rem",
                          flexShrink: 0,
                          marginTop: "0.125rem",
                        }}
                      >
                        ✓
                      </div>
                      <span
                        style={{
                          fontSize: "0.875rem",
                          color: colors.black,
                          lineHeight: 1.5,
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  text="CONSULTAR"
                  color={plan.color}
                  onClick={() =>
                    sendWhatsApp(
                      `Hola, me interesa el ${plan.title} para WISSEN DF. ¿Podrían contactarme?`
                    )
                  }
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Principal financiamiento */}
        <div
          style={{
            textAlign: "center",
            padding: "3rem",
            backgroundColor: colors.black,
            borderRadius: "24px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `radial-gradient(circle at 25% 25%, ${colors.red} 2px, transparent 2px), radial-gradient(circle at 75% 75%, ${colors.red} 2px, transparent 2px)`,
              backgroundSize: "100px 100px",
              opacity: 0.05,
            }}
          ></div>

          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                fontWeight: "900",
                marginBottom: "1rem",
                color: colors.white,
              }}
            >
              ¿Necesitás un plan{" "}
              <span style={{ color: colors.redLight }}>personalizado</span>?
            </h3>
            <p
              style={{
                fontSize: "1.125rem",
                marginBottom: "2rem",
                color: colors.blackFaded,
                lineHeight: 1.6,
              }}
            >
              Nuestros asesores te ayudarán a encontrar la mejor opción de
              financiamiento según tu perfil y posibilidades. ¡Consultá sin
              compromiso!
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Button
                text="SOLICITAR PLAN PERSONALIZADO"
                onClick={() =>
                  sendWhatsApp(
                    "Hola, me interesa un plan personalizado para WISSEN DF. ¿Podrían contactarme?"
                  )
                }
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: colors.white,
                  fontSize: "0.875rem",
                }}
              >
                <span style={{ color: colors.redLight }}>📞</span>
                <span>Atención personalizada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ section >
  )
}

export default FinanciamientoWissen;
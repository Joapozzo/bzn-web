import { colors } from "../data/utils";

const UbicacionWissen = () => {
    return (
        <section
            id="ubicacion"
            style={{ padding: "5rem 0", backgroundColor: colors.white }}
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
                            color: colors.black,
                            marginBottom: "1rem",
                        }}
                    >
                        UBICACIÓN{" "}
                        <span style={{ color: colors.red }}>PRIVILEGIADA</span>
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
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "3rem",
                        alignItems: "start",
                    }}
                >
                    {/* Mapa */}
                    <div
                        style={{
                            position: "relative",
                            overflow: "hidden",
                            borderRadius: "16px",
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                        }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.567!2d-64.200!3d-31.417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985c4b8e7a23%3A0x9e8f8e8e8e8e8e8e!2sDean%20Funes%201928%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1634567890123!5m2!1ses!2sar"
                            style={{ width: "100%", height: "460px", border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>

                        <div
                            style={{
                                position: "absolute",
                                bottom: "1rem",
                                left: "1rem",
                                right: "1rem",
                                backgroundColor: `${colors.white}f5`,
                                backdropFilter: "blur(4px)",
                                padding: "1rem",
                                borderRadius: "8px",
                                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                }}
                            >
                                <div style={{ fontSize: "1.5rem", color: colors.red }}>
                                    📍
                                </div>
                                <div>
                                    <h3
                                        style={{
                                            fontWeight: "700",
                                            fontSize: "1.125rem",
                                            color: colors.black,
                                            margin: 0,
                                        }}
                                    >
                                        Dean Funes 1928
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: "0.875rem",
                                            color: colors.blackMid,
                                            margin: 0,
                                        }}
                                    >
                                        Barrio Alberdi, Córdoba Capital
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Características de ubicación */}
                    <div>
                        <h3
                            style={{
                                fontSize: "1.5rem",
                                fontWeight: "700",
                                marginBottom: "1rem",
                                color: colors.black,
                            }}
                        >
                            Todo lo que necesitás cerca de casa
                        </h3>
                        <p
                            style={{
                                fontSize: "1.125rem",
                                marginBottom: "2rem",
                                color: colors.blackMid,
                                lineHeight: 1.6,
                            }}
                        >
                            WISSEN DF se encuentra en una ubicación estratégica en el
                            corazón de Alberdi, cerca de Av. Colón y Av. Duarte Quirós,
                            con acceso a todos los servicios.
                        </p>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                gap: "1.5rem",
                            }}
                        >
                            {[
                                {
                                    icon: "🛒",
                                    title: "Centros Comerciales",
                                    desc: "A metros de importantes centros comerciales",
                                },
                                {
                                    icon: "🏥",
                                    title: "Centros de Salud",
                                    desc: "Cerca de clínicas y hospitales de primer nivel",
                                },
                                {
                                    icon: "🌳",
                                    title: "Espacios Verdes",
                                    desc: "A pasos de Plaza Dr. Roberto Cisneros",
                                },
                                {
                                    icon: "🚌",
                                    title: "Transporte",
                                    desc: "Excelente conectividad con transporte público",
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        padding: "1.5rem",
                                        backgroundColor: colors.white,
                                        border: `1px solid #e5e7eb`,
                                        borderRadius: "12px",
                                        transition: "all 0.3s ease",
                                        cursor: "pointer",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = colors.redLight;
                                        e.currentTarget.style.transform = "translateY(-4px)";
                                        e.currentTarget.style.boxShadow =
                                            "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = "#e5e7eb";
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: "1rem",
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize: "2rem",
                                                width: "3rem",
                                                height: "3rem",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: colors.red,
                                                borderRadius: "8px",
                                            }}
                                        >
                                            {item.icon}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <h4
                                                style={{
                                                    fontWeight: "700",
                                                    marginBottom: "0.5rem",
                                                    color: colors.black,
                                                    fontSize: "1rem",
                                                }}
                                            >
                                                {item.title}
                                            </h4>
                                            <p
                                                style={{
                                                    fontSize: "0.875rem",
                                                    color: colors.blackMid,
                                                    margin: 0,
                                                    lineHeight: 1.4,
                                                }}
                                            >
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default UbicacionWissen;
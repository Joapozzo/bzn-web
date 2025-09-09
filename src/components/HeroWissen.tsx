import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Button from "./UI/Button";
import { colors, sendWhatsApp } from "../data/utils";

const HeroWissen = () => {
    return (
        <section
            style={{
                height: "100vh",
                background: `linear-gradient(rgba(26, 25, 25, 0.7), rgba(153, 25, 43, 0.3)), url('/imgs/wissen/wissen-hero.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: colors.white,
                position: "relative",
            }}
        >
            <div
                style={{
                    textAlign: "center",
                    maxWidth: "800px",
                    padding: "0 1.5rem",
                }}
            >
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        backgroundColor: `${colors.red}33`,
                        border: `1px solid ${colors.red}66`,
                        padding: "0.5rem 1rem",
                        borderRadius: "9999px",
                        marginBottom: "2rem",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                    }}
                >
                    <div
                        style={{
                            width: "8px",
                            height: "8px",
                            backgroundColor: colors.red,
                            borderRadius: "50%",
                        }}
                    ></div>
                    PROYECTO ACTUAL
                </div>

                <h1
                    style={{
                        fontSize: "clamp(3rem, 8vw, 6rem)",
                        fontWeight: "900",
                        marginBottom: "2rem",
                        lineHeight: 0.9,
                    }}
                >
                    WISSEN
                    <span style={{ display: "block", color: colors.redLight }}>
                        DF
                    </span>
                </h1>

                <p
                    style={{
                        fontSize: "clamp(1.125rem, 3vw, 1.5rem)",
                        fontWeight: "300",
                        marginBottom: "3rem",
                        maxWidth: "600px",
                        margin: "0 auto 3rem",
                    }}
                >
                    Un nuevo concepto de vivienda en el corazón de{" "}
                    <span style={{ fontWeight: "800", color: colors.white }}>
                        Córdoba
                    </span>
                </p>

                <div className="w-full flex justify-center">
                    <Button
                        text="QUIERO MÁS INFORMACIÓN"
                        onClick={() => sendWhatsApp()}
                    />
                </div>
            </div>

            {/* Información flotante */}
            <div
                style={{
                    position: "absolute",
                    top: "20%",
                    right: "2rem",
                    backgroundColor: `${colors.white}1a`,
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${colors.white}33`,
                    padding: "1.5rem",
                    borderRadius: "12px",
                    color: colors.white,
                    display: "none",
                    "@media (min-width: 1024px)": { display: "block" },
                }}
            >
                <h3
                    style={{
                        fontWeight: "700",
                        fontSize: "1.125rem",
                        marginBottom: "1rem",
                    }}
                >
                    WISSEN DF
                </h3>
                <div
                    style={{
                        fontSize: "0.875rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                    }}
                >
                    <div
                        style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                    >
                        📍 <span>Dean Funes 1928</span>
                    </div>
                    <div
                        style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                    >
                        🏢 <span>33 Departamentos</span>
                    </div>
                    <div
                        style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                    >
                        🚗 <span>8 Cocheras</span>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HeroWissen;
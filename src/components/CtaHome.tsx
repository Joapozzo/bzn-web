import Button from "./UI/Button";
import { CONTACTO_TELEFONO, enviarMensajeWhatsApp } from "../scripts/buttonsFunctions";

const textoMensaje = "Hola, quiero contactarme con un asesor. ¿Te interesa?";

const CtaHome = () => {
    return (
        <section
            className="w-full bg-[var(--black-200)] text-white py-12 px-6 flex flex-col mt-16"
            id="cta-home"
        >
            <div
                className="max-w-[1200px] w-full mx-auto flex flex-col gap-6 items-start justify-start px-4 sm:px-6 lg:px-8"
                data-gsap
            >
                <h1 className="text-3xl md:text-5xl font-bold max-w-4xl">
                    ENCONTRÁ{" "}
                    <span className="text-[var(--red)]">TU PRÓXIMO HOGAR</span> O INVERSIÓN
                    CON BZN URBAN MAKING
                </h1>
                <p className="text-lg max-w-2xl">
                    Más de 40 años de experiencia en desarrollos inmobiliarios respaldan
                    nuestro compromiso con la calidad, el diseño y la seguridad. Descubrí
                    nuestras oportunidades y sumate a quienes ya confiaron en nosotros.
                </p>
                <Button
                    text="HABLAR CON UN ASESOR"
                    onClick={() => {
                        console.log("CLICK OK");
                        enviarMensajeWhatsApp(textoMensaje, CONTACTO_TELEFONO);
                    }}
                />
            </div>
        </section>
    );
};

export default CtaHome;

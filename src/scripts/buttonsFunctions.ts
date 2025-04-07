 export const CONTACTO_TELEFONO = "+543517516450";

export function enviarMensajeWhatsApp(texto: string, numero: string) {
    const mensajeCodificado = encodeURIComponent(texto);
    const numeroLimpio = numero.replace(/\D/g, "");
    const url = `https://wa.me/${numeroLimpio}?text=${mensajeCodificado}`;
    window.open(url, "_blank");
}
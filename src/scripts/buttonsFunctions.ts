import { WHATSAPP_PHONE, getWhatsAppUrl } from "../data/whatsapp";

/** Número de contacto (centralizado en data/whatsapp.ts). Formato display. */
export const CONTACTO_TELEFONO = WHATSAPP_PHONE;

export function enviarMensajeWhatsApp(texto: string, numero?: string) {
  const url = numero
    ? `https://wa.me/${numero.replace(/\D/g, "")}?text=${encodeURIComponent(texto)}`
    : getWhatsAppUrl(texto);
  window.open(url, "_blank");
}

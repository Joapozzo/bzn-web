/**
 * WhatsApp centralizado: número único editable y helpers para URLs/mensajes.
 * Cambiar WHATSAPP_PHONE aquí actualiza todo el sitio.
 */

/** Número para wa.me (solo dígitos, con código país). Ej: 5493517659117 */
export const WHATSAPP_PHONE = "5493517659117";

/** Número formateado para mostrar en UI */
export const WHATSAPP_PHONE_DISPLAY = "+54 9 351 765-9117";

/** Formato corto para footer (ej: 351-7659117) */
export const WHATSAPP_PHONE_SHORT = "351 765-9117";

/**
 * Arma la URL de WhatsApp con mensaje opcional.
 * @param message Mensaje predefinido o personalizado (se codifica para URL).
 */
export function getWhatsAppUrl(message: string = ""): string {
  const encoded = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${WHATSAPP_PHONE}${encoded}`;
}


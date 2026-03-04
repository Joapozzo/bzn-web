import {
  WHATSAPP_PHONE,
  WHATSAPP_PHONE_DISPLAY,
  getWhatsAppUrl,
} from "../data/whatsapp";

/**
 * Hook reutilizable para WhatsApp: número centralizado y abrir chat con mensaje personalizable.
 */
export function useWhatsApp() {
  const openChat = (message: string = "") => {
    window.open(getWhatsAppUrl(message), "_blank");
  };

  const getUrl = (message: string = "") => getWhatsAppUrl(message);

  return {
    phone: WHATSAPP_PHONE,
    phoneDisplay: WHATSAPP_PHONE_DISPLAY,
    openChat,
    getUrl,
  };
}

import { getWhatsAppUrl, WHATSAPP_PHONE } from "./whatsapp";

export const URL = import.meta.env.PUBLIC_BASE_URL;

/** @deprecated Usar data/whatsapp.ts y hooks/useWhatsApp.ts */
export const whatsappNumber = WHATSAPP_PHONE;
export { getWhatsAppUrl };

export const sendWhatsApp = (message = "Hola, quisiera más información.") => {
  window.open(getWhatsAppUrl(message), "_blank");
};

export const colors = {
  red: "#99192B",
  redLight: "#EB484E",
  black: "#1A1919",
  blackLight: "#272525",
  blackMid: "#524e4e",
  blackFaded: "#868181",
  white: "#FFFFFF",
};

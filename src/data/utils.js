export const URL = import.meta.env.PUBLIC_BASE_URL;

export const whatsappMessage =
  "Hola, me interesa WISSEN DF. ¿Podrían contactarme?";
export const whatsappNumber = "543517516450";

export const sendWhatsApp = (message = whatsappMessage) => {
  const encodedMessage = encodeURIComponent(message);
  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
    "_blank"
  );
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

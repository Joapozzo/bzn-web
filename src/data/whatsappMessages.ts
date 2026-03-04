/**
 * Mensajes por defecto por contexto (solo para componentes que los usan).
 * El número y getWhatsAppUrl están en data/whatsapp.ts
 */

export const WHATSAPP_MESSAGES = {
  default: "Hola, quisiera más información.",
  home: "Hola, podrías darme más información.",
  wissen: "Hola, quiero más información sobre WISSEN DF.",
  wissenTipologia: (tipo: string) =>
    `Hola, me interesa la tipología ${tipo} de WISSEN DF. ¿Podrían contactarme?`,
  wissenCochera: "Hola, me interesa una cochera en WISSEN DF. ¿Podrían contactarme?",
  wissenLocal: "Hola, me interesa el local comercial en WISSEN DF. ¿Podrían contactarme?",
  wissenFinanciamiento:
    "Hola, me interesa el plan de ENTREGA + CUOTAS para WISSEN DF. ¿Podrían contactarme?",
  tejas4: "Hola, quiero más información sobre la casa de 2 dormitorios en Tejas 4.",
  tejas4Financiamiento:
    "Hola, me interesa la casa de 2 dormitorios en Tejas 4. ¿Podrían darme más información?",
  tejas4Footer: "Hola, me interesa Tejas 4. ¿Podrían contactarme?",
} as const;

export const WHATSAPP = "244923102672";
export const SECONDARY_WHATSAPP = "244923560733";

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

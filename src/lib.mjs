export const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
export function safeUrl(value) {
  if (!value) return null;
  try { const url = new URL(value); return url.protocol === 'https:' ? url.href : null; } catch { return null; }
}
export function whatsappUrl(number, message = '') {
  return /^\d{8,15}$/.test(number ?? '') ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : null;
}
export function quoteMessage(data, serviceName) {
  return ['Hola VAGTech, me interesa una cotización.', `Nombre: ${data.name.trim()}`, `WhatsApp: ${data.phone.trim()}`, `Servicio: ${serviceName}`, data.vehicle?.trim() && `Vehículo: ${data.vehicle.trim()}`, data.description?.trim() && `Descripción: ${data.description.trim()}`].filter(Boolean).join('\n');
}

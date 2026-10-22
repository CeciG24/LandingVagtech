import { seo } from '../../content/seo.mjs';
import { safeUrl, escapeHtml } from '../lib.mjs';
export const prerender = true;
export function GET() {
  const canonical = safeUrl(seo.canonicalUrl);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${canonical && seo.indexable ? `<url><loc>${escapeHtml(canonical)}</loc></url>` : ''}</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}

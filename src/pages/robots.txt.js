import { seo } from '../../content/seo.mjs';
import { safeUrl } from '../lib.mjs';
export const prerender = true;
export function GET() {
  const canonical = safeUrl(seo.canonicalUrl);
  const text = seo.indexable && canonical ? `User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml', canonical)}\n` : 'User-agent: *\nDisallow: /\n';
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

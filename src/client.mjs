import { quoteMessage, whatsappUrl } from './lib.mjs';
const config = JSON.parse(document.getElementById('site-config').textContent);
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('navigation');
toggle.hidden = false;
nav.dataset.enhanced = 'true';
function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open);
});
nav.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); toggle.focus(); } });
document.addEventListener('click', (event) => { if (!event.target.closest('.header')) closeMenu(); });
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => { document.getElementById('service').value = link.dataset.service; }));
document.getElementById('prepare-quote').disabled = false;
const form = document.getElementById('quote-form');
const preview = document.getElementById('quote-preview');
const send = document.getElementById('quote-send');
form.addEventListener('input', () => { preview.hidden = true; send.removeAttribute('href'); });
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  const selected = config.services.find(service => service.id === data.service);
  if (!form.reportValidity() || !selected) return;
  const message = quoteMessage(data, selected.name);
  document.getElementById('quote-message').textContent = message;
  const url = whatsappUrl(config.whatsapp, message);
  send.hidden = !url;
  if (url) send.href = url;
  document.getElementById('quote-status').textContent = url ? 'Solicitud preparada. Todavía no se ha enviado: continúa a WhatsApp para enviarla.' : 'Solicitud preparada localmente. No se ha enviado. El WhatsApp de VAGTech está pendiente de confirmación.';
  preview.hidden = false;
});
const motion = matchMedia('(prefers-reduced-motion: reduce)');
if (!motion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.08 });
  document.querySelectorAll('.section-heading, .featured-service, .quote-intro, .locations-empty').forEach(element => { element.classList.add('reveal'); observer.observe(element); });
  motion.addEventListener('change', () => { if (motion.matches) { document.querySelectorAll('.reveal').forEach(element => element.classList.add('is-visible')); observer.disconnect(); } });
}

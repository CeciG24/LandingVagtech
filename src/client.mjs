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
document.querySelectorAll('[data-results-gallery]').forEach(gallery => {
  const panels = [...gallery.querySelectorAll('[data-result-panel]')];
  if (!panels.length) return;
  const buttons = [...gallery.querySelectorAll('[data-result-target]')];
  gallery.dataset.enhanced = 'true';
  gallery.querySelector('.results-thumbnails').hidden = false;
  gallery.querySelector('.comparison-help').hidden = false;
  panels.forEach((panel, index) => {
    panel.hidden = index !== 0;
    panel.querySelector('.comparison-control').hidden = false;
    const range = panel.querySelector('.comparison-range');
    range.addEventListener('input', () => {
      panel.querySelector('.comparison-view').style.setProperty('--comparison-position', `${range.value}%`);
      range.setAttribute('aria-valuetext', `${range.value}% antes, ${100 - Number(range.value)}% después`);
    });
  });
  buttons.forEach(button => button.addEventListener('click', () => {
    panels.forEach(panel => { panel.hidden = panel.id !== button.dataset.resultTarget; });
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    gallery.querySelector('[data-result-status]').textContent = button.getAttribute('aria-label');
  }));
});

const motion = matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('[data-certifications-carousel]').forEach(carousel => {
  const track = carousel.querySelector('.certifications-track');
  const previous = carousel.querySelector('[data-carousel-previous]');
  const next = carousel.querySelector('[data-carousel-next]');
  carousel.querySelector('.certifications-controls').hidden = false;
  const update = () => {
    previous.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
  };
  const move = direction => track.scrollBy({ left: direction * track.clientWidth * .85, behavior: motion.matches ? 'instant' : 'smooth' });
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  track.addEventListener('scroll', update, { passive: true });
  track.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    if (event.key === 'Home' || event.key === 'End') track.scrollTo({ left: event.key === 'Home' ? 0 : track.scrollWidth, behavior: motion.matches ? 'instant' : 'smooth' });
    else move(event.key === 'ArrowLeft' ? -1 : 1);
  });
  if ('ResizeObserver' in window) new ResizeObserver(update).observe(track);
  else window.addEventListener('resize', update);
  update();
});
if (!motion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.08 });
  document.querySelectorAll('.section-heading, .featured-service, .quote-intro, .locations-empty').forEach(element => { element.classList.add('reveal'); observer.observe(element); });
  motion.addEventListener('change', () => { if (motion.matches) { document.querySelectorAll('.reveal').forEach(element => element.classList.add('is-visible')); observer.disconnect(); } });
}

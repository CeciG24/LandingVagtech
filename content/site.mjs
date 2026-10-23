import logo from '../src/assets/logo-client.jpeg';
import heroPhoto from '../src/assets/hero1.JPG';
import brandTexture from '../src/assets/brand-texture.png';
import carePhoto from '../src/assets/cuidado.jpg';
// null means unconfirmed. Never substitute a fabricated destination.
export const site = {
  name: 'VAGTech',
  provisional: false,
  logo: { src: logo, alt: 'VAGTech' }, // Supplied original; Astro optimizes the local asset.
  texture: brandTexture,
  phone: { display: '222 118 8950', international: '+522221188950' },
  whatsapp: '522217314930', // Updated by the user; the separate phone contact is unchanged.
  slogan: 'Llevamos tu auto de lo ordinario a lo extraordinario',
  assurance: {
    warranty: 'Garantía de 90 días',
    note: 'Consulta los alcances y condiciones de la garantía para tu servicio.',
    certificationsTitle: 'Certificaciones de marca',
    brands: ['XPEL', 'Carpro', 'Axalta', 'Focal', 'HELIX', 'herz', 'RIGID', 'KC', 'ILLUME', '3M'],
  },
  appointmentUrl: null, // Only a technically validated external URL.
  privacyUrl: null,
  socialLinks: [
    { label: 'Facebook', url: 'https://www.facebook.com/VaagTech/?locale=es_LA' },
    { label: 'Instagram', url: 'https://www.instagram.com/vagtech_puebla/?hl=es' },
    { label: 'TikTok', url: 'https://www.tiktok.com/@vaagtech' },
    { label: 'YouTube', url: 'https://youtube.com/@vaagtech?si=nO_SwlW8mXhaOV6b' },
  ],
  navigation: [
    ['inicio', 'Inicio'], ['servicios', 'Servicios'], ['resultados', 'Resultados'],
    ['cotizacion', 'Cotización'], ['sucursales', 'Sucursales'], ['contacto', 'Contacto'],
  ],
  hero: {
    eyebrow: 'Personalización automotriz',
    lines: ['DETALLADO,', 'HOJALATERÍA', 'Y PINTURA', 'QUE ELEVA TU AUTO'],
    description: 'Llevamos tu auto de lo ordinario a lo extraordinario. Conoce nuestros servicios de personalización, carrocería, protección y equipamiento automotriz.',
    image: {
      src: heroPhoto,
      alt: 'Vista frontal de un Jaguar negro personalizado con una franja amarilla en el cofre, fotografiado en VAGTech.',
    },
  },
  quote: {
    image: { src: carePhoto, alt: 'Porsche verde lima fotografiado dentro del taller de VAGTech.' },
  },
  copy: {
    servicesTitle: 'SOLUCIONES INTEGRALES\nPARA TU VEHÍCULO',
    servicesIntro: 'Desde la carrocería y los acabados hasta el interior y los accesorios. Descubre las opciones para hacer único tu auto.',
    resultsTitle: 'ANTES Y\nDESPUÉS.',
    resultsIntro: 'De lo ordinario a lo extraordinario. Explora cuatro transformaciones realizadas por VAGTech.',
    quoteTitle: 'DE LO ORDINARIO\nA LO EXTRAORDINARIO',
    quoteIntro: 'Comparte la idea, el vehículo y el servicio que te interesa.',
    locationsTitle: 'MÁS CERCA\nDE TI',
    locationsIntro: 'Visítanos de lunes a viernes, de 9 a.m. a 7 p.m. Consulta la ubicación de cada sucursal directamente en Google Maps.',
    footerTitle: 'DALE FORMA\nA TU IDEA.',
  },
};

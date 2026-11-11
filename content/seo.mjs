const canonicalUrl = 'https://landing-vagtech.vercel.app/';

export const seo = {
  title: 'VAGTech | Personalización automotriz',
  description: 'VAGTech: personalización automotriz, hojalatería y pintura, PPF, audio, interiores y accesorios. Conoce nuestros servicios y solicita tu cotización.',
  provisional: false,
  canonicalUrl,
  indexable: process.env.VERCEL_ENV !== 'preview',
  image: null, // Absolute approved OpenGraph image URL.
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VAGTech',
    url: canonicalUrl,
    slogan: 'Llevamos tu auto de lo ordinario a lo extraordinario',
    telephone: '+522221188950',
    sameAs: [
      'https://www.facebook.com/VaagTech/',
      'https://www.instagram.com/vagtech_puebla/',
      'https://www.tiktok.com/@vaagtech',
      'https://youtube.com/@vaagtech',
    ],
  },
};

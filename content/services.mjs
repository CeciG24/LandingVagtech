import servicePhoto from '../src/assets/hero2.webp';
// Confirmed names from respuesta-formulario.zip. Groups are editorial organization.
export const services = [
  {
    id: 'personalizacion', name: 'Personalización automotriz', featured: true,
    provisional: false,
    shortDescription: 'Audio, insonorización, pantallas, tapicería, luz ambiental y accesorios para llevar tu auto de lo ordinario a lo extraordinario.',
    image: {
      src: servicePhoto,
      alt: 'BMW plateado personalizado con rines blancos y detalles amarillos en los faros, fotografiado en VAGTech.',
    },
  },
  ...[
    ['hojalateria-pintura', 'Hojalatería y pintura', 'Carrocería y acabados'],
    ['varillaje', 'Varillaje', 'Carrocería y acabados'],
    ['correccion-pintura-ceramico', 'Corrección de pintura y cerámico', 'Cuidado y protección'],
    ['detallado-interior', 'Detallado interior', 'Cuidado y protección'],
    ['ppf', 'PPF', 'Cuidado y protección'],
    ['audio', 'Audio', 'Interior y tecnología'],
    ['insonorizacion', 'Insonorización', 'Interior y tecnología'],
    ['pantallas', 'Pantallas', 'Interior y tecnología'],
    ['tapiceria', 'Tapicería', 'Interior y tecnología'],
    ['luz-ambiental', 'Luz ambiental', 'Interior y tecnología'],
    ['accesorios-offroad', 'Accesorios offroad', 'Accesorios'],
    ['accesorios-aftermarket', 'Accesorios aftermarket', 'Accesorios'],
  ].map(([id, name, group]) => ({ id, name, group, featured: false, provisional: false, pendingConfirmation: false })),
];
// PPF brand spelling is inconsistent in the form ("Carpio" vs "Carpro").
// Keep this service brand-neutral until clarified; no invented product or performance claims.

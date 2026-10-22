import before1 from '../src/assets/antes1.png';
import after1 from '../src/assets/despues1.jpg';
import before2 from '../src/assets/antes2.jpeg';
import after2 from '../src/assets/despues2.jpeg';
import before3 from '../src/assets/antes3.jpg';
import after3 from '../src/assets/despues3.jpg';
import before4 from '../src/assets/antes4.jpg';
import after4 from '../src/assets/despues4.jpg';

// Pairing follows the client-provided file numbers. Preserve the original photographs.
const sizes = '(max-width: 700px) 100vw, 50vw';
export const results = [
  {
    id: 'porsche-911', title: '01 — Porsche 911', serviceId: 'personalizacion',
    description: 'Cambio de apariencia con acabado mate y detalles en naranja.',
    beforeImage: { src: before1, alt: 'Antes: Porsche 911 negro con acabado brillante y rines plateados.', sizes },
    afterImage: { src: after1, alt: 'Después: Porsche 911 con acabado negro mate, franja lateral naranja y rines negros con detalles naranjas.', sizes },
  },
  {
    id: 'jeep', title: '02 — Jeep', serviceId: 'accesorios-offroad', orientation: 'portrait',
    description: 'Personalización del frente y equipamiento offroad.',
    beforeImage: { src: before2, alt: 'Antes: Jeep blanco visto de frente, con defensa gris y faros redondos.', sizes },
    afterImage: { src: after2, alt: 'Después: Jeep blanco con defensa negra, luces auxiliares, cabrestante y neumáticos offroad.', sizes },
  },
  {
    id: 'mazda-mx5', title: '03 — Mazda MX-5', serviceId: 'personalizacion',
    description: 'Nueva combinación de colores para carrocería, techo y rines.',
    beforeImage: { src: before3, alt: 'Antes: Mazda MX-5 azul con rines plateados, visto desde atrás y de lado.', sizes },
    afterImage: { src: after3, alt: 'Después: Mazda MX-5 con carrocería gris mate, techo rojo y rines negros.', sizes },
  },
  {
    id: 'mazda3', title: '04 — Mazda3', serviceId: 'personalizacion',
    description: 'Personalización de la carrocería con diseño gráfico y contrastes de color.',
    beforeImage: { src: before4, alt: 'Antes: Mazda3 blanco visto desde atrás y de lado.', sizes },
    afterImage: { src: after4, alt: 'Después: Mazda3 con diseño en blanco y gris, franjas rojas y número 03 en la puerta.', sizes },
  },
];

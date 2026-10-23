import xpel from '../src/assets/Certificaciones/XPEL_White-2048x557.webp';
import carpro from '../src/assets/Certificaciones/carpro.jpg';
import axalta from '../src/assets/Certificaciones/Axalta.png';
import focal from '../src/assets/Certificaciones/focal.png';
import helix from '../src/assets/Certificaciones/helix.webp';
import herz from '../src/assets/Certificaciones/herz.png';
import rigid from '../src/assets/Certificaciones/rigidwhite_1200x1200.webp';
import illume from '../src/assets/Certificaciones/illume.png';
import threeM from '../src/assets/Certificaciones/c877f7913e05ff8c9262b5f35edc0e07.png';

// Only client-supplied logos. KC remains in the confirmed catalog; no image was supplied.
export const certifications = [
  { name: 'XPEL', image: xpel },
  { name: 'Carpro', image: carpro },
  { name: 'Axalta', image: axalta },
  { name: 'Focal', image: focal },
  { name: 'HELIX', image: helix },
  { name: 'herz', image: herz, padded: true },
  { name: 'RIGID', image: rigid },
  { name: 'ILLUME', image: illume, padded: true },
  { name: '3M', image: threeM },
];

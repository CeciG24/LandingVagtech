# VAGTech — Astro static landing

Una página de marketing, totalmente prerenderizada con Astro. No hay React, SSR, backend, CMS ni base de datos.

Requiere Node.js **22.19+** o **24 LTS** (incluida una dependencia transitiva de build). Se conserva `package-lock.json` para instalaciones reproducibles.

```powershell
npm ci
npm run dev
npm test
npm run preview
```

`dev` sirve la vista de desarrollo con actualización automática en http://127.0.0.1:4321. `test` genera producción y comprueba el HTML resultante. `preview` sirve el build estático. `npm run build` genera `dist/`, publicable en hosting estático.

El sistema tiene Node 22.14. Para usar el Node 24 ya incluido en Codex sin modificar el sistema:

```powershell
$env:PATH = 'C:\Users\ceci_\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;' + $env:PATH
$env:ASTRO_TELEMETRY_DISABLED = '1'
npm run dev
```

## Fuente de verdad

- `docs/system-contract-vagtech.md`: alcance y funcionalidad.
- `docs/ui-design-contract-vagtech.md`: dirección visual.
- `docs/architecture-decision.md`: revisión Astro, tipografía y decisiones de esta iteración.

## Organización

- `src/pages/index.astro`: única página HTML; compone Header, Hero, Services, Results, Quote, Branches y Footer.
- `src/layouts/Layout.astro`: estructura HTML, metadata, fuentes locales y script de interacción.
- `src/components/`: componentes Astro nativos y pequeños elementos compartidos.
- `src/styles/tokens.css`: paleta, tipografía Saira, tracking, pesos y geometría.
- `src/styles/main.css`: composición editorial, responsive y motion.
- `src/client.mjs`: JavaScript ligero para menú móvil, servicio seleccionado, revisión de solicitud y reveal.
- `src/lib.mjs`: URLs seguras, escaping XML y construcción del mensaje.
- `src/pages/robots.txt.js`, `sitemap.xml.js`: generan archivos en build; no existen APIs de producción.
- `content/`: contenido desacoplado del layout.
- `src/assets/logo-client.jpeg`: logo completo entregado en el formulario, optimizado por Astro.
- `src/assets/trabajo-rines.jpeg`: fotografía real entregada por el cliente.

## Reemplazar contenido

`content/site.mjs` concentra copy, navegación, logo, WhatsApp, citas, privacidad y redes. El logo es un import local para optimización por Astro. El original proporcionado en `public/assets/logo.png` se conserva intacto y no se carga en el HTML de la landing.

`content/services.mjs` contiene el catálogo confirmado en `respuesta-formulario.zip`; `featured` decide la jerarquía y `group` organiza los servicios secundarios. `content/results.mjs` contiene cuatro comparaciones antes/después, emparejadas por los números de los archivos entregados. `content/branches.mjs` contiene los enlaces directos a Maps y los horarios confirmados para ambas sucursales: lunes a viernes 9 a.m.–7 p.m., sábado y domingo cerrado. Fuente y pendientes: `docs/client-content.md`.

Fotografías: `{ src, alt, width, height, srcset?, sizes? }` o un import local de Astro en `src`. Los imports se optimizan a WebP con variantes responsive hasta 1920 px, sin ampliar originales más pequeños. El hero usa `hero1.JPG` (Jaguar negro con franja amarilla), carga eager/high priority y las demás imágenes lazy. Las cuatro parejas `antes1`/`despues1` hasta `antes4`/`despues4` se muestran completas, sin filtros ni recortes que alteren la comparación; se apilan en móvil. La imagen destacada en «Soluciones para tu vehículo» usa `hero2.webp` (BMW plateado), convertido de `hero2.heic` sin modificar el original. Esa imagen se configura por separado del hero principal.

La alineación visual con la propuesta se concentra en `src/styles/proposal.css`. El contenido del formulario reemplaza el catálogo provisional de la propuesta. La textura inspirada en el fondo del logo se conserva en resultados y cotización mediante `site.texture`, con overlays oscuros. El registro `docs/proposal-alignment.md` documenta la iteración visual anterior; el estado de contenido vigente está en `docs/client-content.md`.

El formulario prepara un mensaje local y permite revisarlo. WhatsApp se actualizó por indicación de la usuaria a 2217314930: una segunda acción abre ese destino para completar el envío allí. El contacto de llamadas del formulario continúa en 2221188950. No se guardan datos en el sitio. El CTA de citas consulta por WhatsApp mientras no haya una URL validada del sistema externo; no reserva ni simula disponibilidad.

En `content/seo.mjs`, title/description y JSON-LD Organization reflejan los datos reales recibidos. No se inventa un LocalBusiness por sucursal sin domicilio completo. Confirmar dominio HTTPS e imagen OpenGraph antes de producción. `indexable` permanece desactivado mientras no haya dominio final: noindex, robots bloqueado y sitemap sin URLs inventadas.

`site.provisional` está desactivado y los servicios confirmados ya no llevan etiquetas provisionales. Falta recibir el aviso de privacidad, precisar algunos nombres de marcas y completar las direcciones postales; horarios y enlaces directos a Maps ya se incorporaron. No se han añadido analytics, cuentas ni integraciones de agenda no confirmadas.

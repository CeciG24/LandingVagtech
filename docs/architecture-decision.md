# Arquitectura y tipografía — revisión

## Decisión

Migrar el generador manual a Astro 7, con `output: 'static'` y `prerender = true`. Hay una sola ruta HTML (`/`); `robots.txt` y `sitemap.xml` son archivos prerenderizados durante el build, no APIs en producción. No hay adapter, SSR, React, hidratación, backend ni almacenamiento.

El generador anterior ya entregaba HTML indexable. La migración no se justifica por una ventaja SEO exclusiva: se justifica por componentes nativos con escaping automático, composición legible, pipeline de assets, bundling de CSS/JS, imágenes optimizadas y servidor de desarrollo estándar. Se elimina el mantenimiento de plantillas concatenadas, copiado de archivos y servidor propio.

El coste es añadir dependencias de build y un lockfile. El resultado alojado sigue siendo exclusivamente archivos estáticos. Astro no aporta un runtime de componentes al navegador; solo se empaqueta el JavaScript existente de menú, formulario y motion.

Referencias oficiales: [prerenderizado](https://docs.astro.build/en/guides/on-demand-rendering/), [scripts](https://docs.astro.build/en/guides/client-side-scripts/), [imágenes](https://docs.astro.build/en/guides/images/).

## Estructura

`src/pages/index.astro` compone las mismas siete secciones. `src/layouts/Layout.astro` concentra fuentes, estilos, metadata y el script existente. `src/components/*.astro` contiene plantillas nativas; se comparten únicamente Brand, Media, Title, SectionLabel y CTAs. `content/` conserva datos y placeholders. `src/lib.mjs` conserva helpers de URLs y mensajes. El generador y servidor manuales se retiraron.

## SEO y rendimiento

Todo el contenido se recibe en el HTML inicial. Se conservan H1 único, jerarquía, anchors, title, descripción y OpenGraph. Canonical, OG image y JSON-LD solo se emiten con datos confirmados. El preview conserva noindex; sitemap vacío y robots bloqueado hasta confirmar dominio e indexación. No hay nuevas páginas de negocio.

El logo original suministrado pesa aproximadamente 4.8 MB. Se conserva intacto y se importa una copia en `src/assets/`; Astro produce variantes WebP de 48/96 px para header/footer con dimensiones explícitas. El original en `public/` no se descarga al cargar la página. Las fotografías siguen pendientes: `Media.astro` admite dimensiones, srcset y sizes para assets optimizados futuros, eager/high priority en hero y lazy loading en el resto.

Las fuentes son locales de Fontsource, con `font-display: swap`, subset Latin (incluye acentos de español), WOFF2 y preloads únicamente de display 900 y cuerpo 400. El build empaqueta y minifica los assets. No se han medido Core Web Vitals de campo; necesitan contenido definitivo y despliegue real.

## Tipografía y marca

| Token | Valor |
| --- | --- |
| `--font-display` | Saira Semi Condensed |
| `--font-body` | Saira |
| `--weight-display` | 900 |
| `--weight-heading` | 800 |
| `--weight-body` | 400 |
| `--weight-ui` | 600 |
| `--tracking-display` | -0.035em |
| `--tracking-heading` | -0.025em |
| `--tracking-label` | 0.12em |
| `--leading-display` | 0.98 |
| `--leading-heading` | 1.06 |
| `--leading-body` | 1.6 |
| `--brand-slant` | -12deg |

Saira Semi Condensed se distribuye en estilos normales; el gesto inclinado se aplica geométricamente al wordmark y a una sola línea del hero, en consonancia con las formas orientadas hacia delante del logo suministrado. No se simula una familia italic inexistente ni se inclina texto de lectura o UI. Títulos y espacios conservan la escala y composición previas.

El logo real se muestra como emblema; el wordmark de texto complementario no sustituye ni altera su arte original. Corrección de marca: el slash no está establecido como símbolo recurrente por los assets aprobados y se retiró del wordmark, labels y elementos gráficos. Se retiró también el monograma provisional V/T; los placeholders son superficies neutrales. El favicon se genera directamente a partir del logo suministrado, en lugar de usar un símbolo inventado.

La geometría se apoya en los contornos angulares y formas orientadas hacia delante del logo real: se conservan la inclinación tipográfica selectiva y los cortes de las superficies, sin incorporar un nuevo símbolo de marca. Se mantienen verde ácido, negro/charcoal, gris metálico/plata, alto contraste, hero asimétrico y prioridad de personalización. No se replica la textura metálica del logo en toda la UI. El uso de `/` como puntuación funcional (por ejemplo, «Teléfono / WhatsApp») no representa identidad gráfica.

Esta dirección continúa UI §§4–6, 8 y 17–19, con la preferencia explícita del usuario por Saira. La arquitectura mantiene sistema §§2, 7–8 y 12: una landing, contenido desacoplado y JavaScript mínimo.

## Archivos afectados

- Agregados: `astro.config.mjs`, `tsconfig.json`, `package-lock.json`, `src/pages/*`, `src/layouts/Layout.astro`, componentes `.astro`, `src/assets/logo.png` y este registro.
- Actualizados: `package.json`, `.gitignore`, `content/site.mjs`, tokens y estilos, pruebas y README.
- Retirados: `src/page.mjs`, componentes `.mjs` de generación, `scripts/build.mjs`, `scripts/serve.mjs`.
- Conservados: contratos, datos de servicios/resultados/sucursales/SEO y lógica de interacción del cliente.

Node recomendado: 22.19+ o 24 LTS. Una dependencia de build transitiva (`undici`) requiere 22.19+, aunque el mínimo de Astro sea 22.12. El Node del sistema detectado era 22.14; el runtime Node 24 incluido en Codex está disponible para desarrollo y validación sin cambiar la instalación del sistema.

## Validación de esta iteración

Build estático correcto con Node 24. Cinco pruebas sobre el HTML de producción comprueban secciones/anchors/H1, ausencia de runtime servidor e hidratación, tamaño acotado del script, metadata provisional sin destinos inventados, preparación/encoding del mensaje, fuentes locales y logo optimizado. La vista de producción se sirve con `astro preview`.

La herramienta de control de navegador no pudo inicializarse en esta iteración (error al preparar sus archivos de sesión). No se afirma una revisión visual responsive ni una medición de Core Web Vitals posteriores a la migración; quedan pendientes de inspección en navegador. Los breakpoints y lógica de interacción previos se conservaron.

## Ajuste de títulos a la presentación (23 de octubre de 2026)

Por solicitud del usuario, Russo One sustituye Saira Semi Condensed en los encabezados. Sus formas anchas, pesadas y de contornos cuadrados se aproximan más a los títulos de los mockups. Es una aproximación visual, no una identificación exacta de la fuente de las imágenes.

Los tokens de títulos son ahora `--font-display: 'Russo One', sans-serif`, `--weight-display: 400`, `--weight-heading: 400`, `--tracking-display: -.02em` y `--tracking-heading: -.015em`. El peso 400 es el único estilo de la familia y ya tiene trazos gruesos; se desactiva la síntesis para evitar una negrita artificial. Se ajusta la escala responsive para acomodar el mayor ancho de las letras. Saira continúa en cuerpo y UI; el logo conserva su arte original.

La fuente se empaqueta localmente con Fontsource, subset Latin, WOFF2, `font-display: swap` y preload del archivo de títulos. No se añaden solicitudes a Google Fonts en tiempo de ejecución ni JavaScript. Referencia de distribución y licencia: https://fontsource.org/fonts/russo-one/about

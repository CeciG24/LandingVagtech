# Alineación con la propuesta visual

Registro histórico de la iteración de propuesta. El formulario recibido posteriormente reemplaza sus placeholders y la imagen conceptual; consultar `docs/client-content.md` para el contenido vigente.

Referencia inspeccionada: `C:/Users/ceci_/Downloads/propuesta_vagtech_cecilia_web_studio.pptx`, nueve diapositivas. Se extrajo el texto y se inspeccionaron las imágenes incorporadas de inicio, servicios, resultados, cotización y sucursales. No se modificó el PPTX.

## Aplicación al sitio

- Inicio (slide 3): fotografía conceptual amplia, texto superpuesto a la izquierda, titular blanco y verde, cotización y WhatsApp juntos. Se conserva personalización como prioridad vigente.
- Servicios (slide 4): servicio principal con imagen y contorno metálico; servicios secundarios más compactos. Sus nombres proceden del texto explícito de la propuesta, pero siguen marcados como provisionales. No se copian descripciones ni promesas no confirmadas.
- Resultados (slide 5): comparación amplia con etiquetas antes/después y separación verde. Se conservan placeholders vacíos hasta recibir trabajos reales.
- Cotización (slide 6): formulario vertical sobre superficie oscura, campos grandes y CTA verde; se conserva revisión local del mensaje y estado sin envío hasta confirmar WhatsApp.
- Sucursales (slide 7): se conservan datos pendientes. Las direcciones, horarios, teléfonos y cantidad de sucursales de los mockups no se trataron como información real.

La propuesta es referencia visual, no una fuente que reemplace el alcance comercial y funcional de los contratos. No se añaden garantías, estadísticas, testimonios, agenda, páginas de servicio ni formularios de fotografías. Se mantienen Astro estático, Saira, las siete secciones, datos desacoplados y la corrección explícita de marca sin slash.

## Textura y assets

Herramienta: `image_gen` integrada, sin CLI ni API key. Assets guardados dentro del proyecto:

- `src/assets/brand-texture.png`: reconstrucción de la textura granular negra del fondo del logo suministrado, sin emblema, letras ni aro. Astro genera WebP de 640 px (~102 KiB), usado en resultados y cotización con overlays para legibilidad. Es una derivación generada, no un recorte exacto.
- `src/assets/hero-concept.png`: imagen conceptual inspirada en el hero de la propuesta. Astro genera WebP responsive de 640, 960, 1440 y 1672 px (~27–124 KB). Se rotula en hero y servicio prioritario; no es evidencia de trabajo real ni fotografía de una sucursal VAGTech.

El logo original permanece sin alterar. Las fuentes son locales y el JavaScript de interacción no se amplió.

### Prompt de textura

Edit target: supplied VAGTech logo image. Asset needed: texture-only background for selected sections of its automotive customization website. Isolate and faithfully extend ONLY the fine charcoal black rough powder-coated/grained industrial surface behind the logo. Remove ALL emblem shapes, silver lettering, lime circle, lime pigment, text and branding, filling those areas with the same underlying black fine-grain surface. Uniform neutral black/charcoal texture across the whole square image, subtle diffuse lighting, fine rough granular detail, no dramatic spotlight, no heavy vignette, no seams, no carbon fiber, no stripes, no symbols, no car. Preserve the source surface character, micro texture and dark tones. A flat texture asset, not a redesigned logo.

### Prompt de hero

Use supplied client proposal mockup only as visual art-direction reference. Generate ONLY a clean photographic automotive hero asset, landscape wide 16:9. No laptop, screen frame, website UI, text, typography, labels, watermarks, emblems, wall branding, or invented VAGTech premises. A charcoal premium European-style performance sport sedan, front three-quarter view pointing toward camera and right, black multi-spoke wheels and immaculate metallic body. Vehicle occupies right 65% with entire nose and wheels visible, left 35% clean dark negative space for website headings. Neutral premium dark automotive studio, subtle rough black wall, precise overhead white strip lighting, restrained acid-lime reflection accents on body and floor only. Realistic cinematic high contrast, sophisticated industrial mood, not gaming, not cyberpunk, no luminous HUD or large green glows. Keep visual atmosphere and subject scale close to the supplied proposal. This will be visibly captioned as a conceptual reference image, not a real customer result. No before-after comparison. Do not render text in image.

## Verificación

Build estático y las cinco pruebas existentes pasan. La herramienta de control del navegador vuelve a fallar al inicializar sus archivos de sesión: no se afirma inspección visual responsive en esta iteración. Se conserva la vista previa local para revisión manual.

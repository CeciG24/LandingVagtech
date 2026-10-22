# Información del formulario incorporada

Fuente: `respuesta-formulario.zip`, archivo Markdown «Vagtech» y sus tres imágenes. El ZIP se extrajo a `tmp/client-response/` (ignorado). No se publica el formulario ni el nombre de su persona de contacto.

## Datos aplicados

- Eslogan literal: «Llevamos tu auto de lo ordinario a lo extraordinario».
- Prioridad comercial: personalización y vehículos únicos. Acción principal: conocer servicios; CTA de cotización y WhatsApp conservados.
- Catálogo: hojalatería y pintura, varillaje, corrección de pintura y cerámico, detallado interior, PPF, audio, insonorización, pantallas, tapicería, luz ambiental, accesorios offroad y accesorios aftermarket. Personalización se mantiene destacada; grupos editoriales facilitan recorrer la lista sin nuevas rutas.
- Teléfono de llamadas: 2221188950, proporcionado en el formulario. Actualización posterior de la usuaria: WhatsApp pasa a 2217314930 (+522217314930). Todos los CTAs y el formulario usan ese nuevo WhatsApp global; no se cambia el teléfono de llamadas ni se presenta como número exclusivo de una sucursal.
- Redes: Facebook VaagTech, Instagram vagtech_puebla, TikTok vaagtech y YouTube vaagtech; se conservan los enlaces entregados.
- Garantía de 90 días tal como informó el cliente; se invita a consultar alcances sin inventar cobertura, exclusiones ni condiciones.
- Certificaciones indicadas por el cliente: XPEL, Carpro, axalta, focal, HELIX, herz, RIGID, KC, ILLUME y 3m. Solo se normalizó capitalización inequívoca. «herz» se conserva literalmente, sin asumir Hertz. No se añaden sellos, logotipos de certificación ni acreditaciones específicas.

## Sucursales

El cliente confirma dos y proporciona los enlaces:

- https://share.google/aizkbwXzshdKZKFui — redirige a Google con `kgmid=/g/11k0rr9tt6`, consulta «VAGTECH 15 OTE».
- https://share.google/Azt4LTIbRNAzj9jH0 — redirige a Google con `kgmid=/g/11zdb0gf7t`, consulta «VAGTECH COLOMBRES».

Inicialmente se usaron los nombres derivados de esas redirecciones y enlaces a las fichas. Actualización posterior: la usuaria proporcionó los enlaces directos de Google Maps para 15 Ote y Colombres, que ahora reemplazan los enlaces `share.google` en la página. Se retienen identificador de lugar y coordenadas, sin parámetros de seguimiento. No se asume una dirección postal no entregada.

La usuaria confirmó mediante captura el mismo horario para ambas sucursales: lunes a viernes de 9 a.m. a 7 p.m.; sábado y domingo cerrado. Se muestra directamente bajo cada sucursal y se centraliza en `content/branches.mjs`.

## Material visual

- `IMG_0435.jpeg` se conserva como `src/assets/logo-client.jpeg`: logo completo recibido.
- `IMG_0453.png` se conserva como `src/assets/emblem-client.png`: segundo arte recibido, disponible para uso posterior.
- `47279d58-0484-4d5e-b5a2-bbafac108803.jpeg` se conserva como `src/assets/trabajo-rines.jpeg`: fotografía real de rines en cabina, usada inicialmente mientras se recibía más material. No se identifica una sucursal concreta ni se afirma una transformación terminada. Las nuevas fotografías descritas abajo la sustituyen en la página.

La imagen conceptual anterior deja de usarse. La textura previamente aprobada se conserva en fondos seleccionados.

Actualización con las fotografías añadidas posteriormente: se restauró el título «Antes y después» y cuatro comparaciones con los archivos `antes1`/`despues1`, `antes2`/`despues2`, `antes3`/`despues3` y `antes4`/`despues4`. Los nombres de archivo determinan las parejas; los títulos y descripciones se limitan a vehículos y cambios visibles. Las fotos se muestran completas con `object-fit: contain`, sin filtros. Se conservan al lado en escritorio y se apilan en móvil.

El hero usa `src/assets/hero1.JPG`, la foto frontal del Jaguar negro con franja amarilla. Por indicación posterior de la usuaria, «Soluciones para tu vehículo» utiliza `hero2.webp`, conversión web del BMW plateado de `hero2.heic`. El original HEIC se conserva intacto; se convirtió con heic-convert y Sharp, sin cambios de contenido. El conversor se instaló temporalmente bajo `tmp/`, sin añadir dependencias al proyecto. Astro limita las variantes a 1920 px y no amplía las fotos de menor ancho.

## Pendientes que no bloquean esta actualización

- Dominio final: canonical/sitemap con URL real e indexación de producción. Se conserva noindex en la vista local.
- Aviso de privacidad del cliente.
- URL o documentación del sistema de citas. El CTA actual solo inicia una consulta por WhatsApp; no reserva ni simula disponibilidad.
- Direcciones postales de ambas sucursales para mostrarlas como texto; los horarios ya están confirmados y los botones abren directamente Maps.
- Alcances de la garantía y precisión de nombres de marca: el servicio PPF menciona «XPEL y Carpio», mientras las certificaciones dicen «Carpro». La ficha PPF se mantiene sin atribución de marca hasta aclarar esa diferencia.

SEO: title/description reales y JSON-LD Organization con nombre, eslogan, teléfono y redes. Sin domicilio, rating, horario ni dominio inventados; LocalBusiness por sucursal queda pendiente de datos completos.

# Fotografías y mockups de esta iteración

- Servicios: `hojalateria.JPG`, `cuidado.jpg`, `interior.HEIC` y `Accesorios.heic`, proporcionados por el usuario. Los dos HEIC se convierten a WebP para su uso web; los originales se conservan.
- Cotización: la misma fotografía suministrada `cuidado.jpg`, configurada en `site.quote.image`.
- Sucursales: los archivos `sucursal-mockup-15-ote.webp` y `sucursal-mockup-colombres.webp` contienen únicamente las áreas de fachadas de la diapositiva 7 de la presentación suministrada. No son fotografías de las sucursales reales. No se copian las direcciones, teléfonos ni nombres ficticios de esa diapositiva.
- Los mockups están identificados visiblemente como provisionales y sus rutas están centralizadas en `content/branches.mjs`. Para sustituirlos, cambiar `image.src`, su texto alternativo y retirar `provisional`, `placeholderLabel` y `caption` al recibir fotografías reales.
- La franja de citas utiliza el enlace existente de consulta por WhatsApp. No se asume una agenda ni disponibilidad en tiempo real.

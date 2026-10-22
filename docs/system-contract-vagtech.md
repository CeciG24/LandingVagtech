# VAGTech Website — System Contract

## 1. Purpose

VAGTech necesita un sitio web corporativo de una sola página orientado a:

1. Presentar profesionalmente sus servicios.
2. Mostrar resultados reales mediante fotografías y comparaciones de antes/después.
3. Facilitar solicitudes de cotización.
4. Dirigir usuarios a WhatsApp.
5. Mostrar información de sucursales.
6. Dar mayor relevancia al servicio de personalización automotriz dentro del contenido del sitio.
7. Dejar la landing correctamente preparada para indexación y SEO básico.
8. Integrarse, si técnicamente es posible, con el sistema actual de citas de VAGTech.

El sitio NO sustituirá sus redes sociales ni su sistema actual de citas.

---

## 2. Project Type

El proyecto es una **landing page one-page**.

No se crearán páginas independientes por servicio dentro del MVP.

La navegación principal utilizará enlaces internos por secciones.

Estructura base:

```text
/
#inicio
#servicios
#resultados
#cotizacion
#sucursales
#contacto
```

---

## 3. MVP Scope

La primera etapa incluye:

- Diseño visual adaptado a la identidad de VAGTech.
- Landing page responsive.
- Sección de inicio / hero.
- Sección de servicios.
- Sección de resultados / antes y después.
- Sección de cotización.
- Sección de sucursales.
- Botones de WhatsApp.
- Formulario de solicitud de cotización.
- CTA para citas.
- Revisión de viabilidad de integración con el sistema actual de citas.
- SEO técnico y on-page básico para la landing.
- Optimización básica de rendimiento.
- Publicación del sitio.

---

## 4. Out of Scope

No forman parte del MVP:

- Panel administrativo.
- CRM.
- Agenda propia desarrollada desde cero.
- Procesamiento de pagos.
- Historial de clientes.
- Gestión de empleados.
- Seguimiento interno de vehículos.
- Facturación.
- Inventario.
- Automatizaciones avanzadas.
- Aplicación móvil.
- Blog.
- Páginas individuales por servicio.
- Estrategia SEO mensual.
- Link building.
- Gestión continua de Google Business Profile.
- Garantía de posiciones específicas en Google.

Estas funcionalidades podrán implementarse posteriormente como fases adicionales.

---

## 5. Site Sections

### 5.1 Header / Navigation

Debe incluir:

- Logo VAGTech.
- Navegación por anchors internos.
- CTA de WhatsApp.

Navegación prevista:

```text
Inicio
Servicios
Resultados
Cotización
Sucursales
Contacto
```

La navegación debe hacer scroll hacia las secciones correspondientes de la misma página.

---

### 5.2 Hero / Inicio

Objetivo:

Dar una primera impresión premium y dirigir rápidamente al usuario hacia cotización o WhatsApp.

Debe incluir:

- Headline principal.
- Descripción breve.
- CTA principal: solicitar cotización.
- CTA secundario: WhatsApp.
- Imagen o fotografía alineada al branding de VAGTech.
- Mensaje relacionado con los servicios prioritarios del negocio.

El contenido final debe ser proporcionado o aprobado por VAGTech.

---

### 5.3 Servicios

Objetivo:

Permitir que el visitante identifique rápidamente qué servicio necesita.

Cada servicio puede contener:

```ts
type Service = {
  id: string
  name: string
  shortDescription: string
  image?: string
  featured?: boolean
}
```

No existen rutas individuales para servicios dentro del MVP.

Todos los servicios se muestran dentro de la sección `#servicios`.

Los servicios prioritarios podrán recibir mayor jerarquía visual.

### Personalización automotriz

VAGTech ha indicado que la personalización de autos es un servicio comercialmente prioritario.

Dentro del alcance one-page:

- Puede aparecer como servicio destacado.
- Puede tener más espacio visual que otros servicios.
- Puede mencionarse en el hero si el contenido final lo justifica.
- Puede utilizarse en encabezados y textos SEO cuando sea relevante.
- Puede apoyarse con fotografías de resultados o trabajos realizados.

No se creará una página independiente para personalización automotriz dentro del MVP.

---

### 5.4 Resultados / Antes y Después

Objetivo:

Mostrar evidencia visual de la calidad del trabajo.

Modelo conceptual:

```ts
type ResultItem = {
  id: string
  title?: string
  serviceId?: string
  beforeImage?: string
  afterImage?: string
  image?: string
  description?: string
}
```

Reglas:

- No utilizar resultados ficticios.
- No inventar estadísticas.
- No inventar testimonios.
- Las imágenes deben ser proporcionadas o aprobadas por VAGTech.
- Priorizar fotografías de buena calidad.
- Los trabajos de personalización automotriz pueden recibir prioridad visual.

---

### 5.5 Cotización

Objetivo:

Recibir solicitudes de prospectos de forma más ordenada que mediante mensajes directos.

Campos mínimos previstos:

```ts
type QuoteRequest = {
  name: string
  phone: string
  vehicle?: string
  service: string
  description?: string
}
```

Campos obligatorios:

- Nombre.
- Teléfono / WhatsApp.
- Servicio de interés.

Campos opcionales:

- Modelo del vehículo.
- Descripción del servicio o problema.

La propuesta comercial contempla que las fotografías del vehículo puedan implementarse en una etapa posterior.

### Flujo de envío

La primera implementación debe priorizar simplicidad.

Opciones permitidas:

1. Preparar mensaje para WhatsApp.
2. Enviar datos mediante un formulario simple.
3. Utilizar un endpoint ligero únicamente si es necesario.

No se debe introducir una base de datos persistente salvo que exista una necesidad confirmada.

---

### 5.6 WhatsApp

WhatsApp debe estar disponible en puntos estratégicos:

- Header.
- Hero.
- Servicios.
- Cotización.
- Sucursales.
- Footer.

El número puede ser:

- Global.
- Específico por sucursal.

Esto queda pendiente de confirmación con VAGTech.

---

### 5.7 Sucursales

Cada sucursal puede contener:

```ts
type Branch = {
  id: string
  name: string
  address: string
  phone?: string
  whatsapp?: string
  schedule?: string
  mapsUrl?: string
  googleBusinessUrl?: string
}
```

La sección debe mostrar, cuando la información esté disponible:

- Nombre de sucursal.
- Dirección.
- Horario.
- Teléfono.
- WhatsApp.
- Enlace a Google Maps.
- Enlace a Google Business Profile.

Debe incluir CTA relacionado con contacto o cita.

---

### 5.8 Contacto / Footer

Debe incluir:

- Datos de contacto.
- Redes sociales.
- WhatsApp.
- Sucursales o acceso a la sección correspondiente.
- Aviso de privacidad cuando aplique.
- Copyright.

---

## 6. Appointment System Integration

VAGTech ya utiliza un sistema a medida para gestionar citas.

No se desarrollará una agenda nueva dentro del MVP.

Antes de implementar cualquier integración se debe revisar la capacidad técnica del sistema existente.

### Posibles niveles de integración

#### Nivel 1 — Enlace externo

El sitio dirige al usuario al enlace existente del sistema de citas.

#### Nivel 2 — Deep link o flujo externo

Si el sistema lo permite, el sitio puede enviar contexto como sucursal o servicio seleccionado.

#### Nivel 3 — API Integration

Solo se implementará si:

- Existe una API utilizable.
- Se dispone de documentación suficiente.
- La integración es viable dentro del alcance técnico acordado.

Operaciones potenciales:

```text
GET services
GET branches
GET availability
POST appointment
```

Estas operaciones son únicamente ejemplos conceptuales.

No deben implementarse ni asumirse hasta contar con documentación real.

#### Nivel 4 — Modificación del sistema existente

Si el software actual no tiene API o requiere cambios internos:

- Se considera fuera del alcance inicial.
- Requiere revisión técnica adicional.
- Puede requerir una cotización independiente.

---

## 7. Content Management

No existe panel administrativo en el MVP.

El contenido se administrará directamente desde el proyecto.

Estructura recomendada:

```text
/content
  site.ts
  services.ts
  branches.ts
  seo.ts
```

o una estructura equivalente mediante JSON, TypeScript o configuración estática.

Las imágenes deberán almacenarse en assets del proyecto o en un servicio externo aprobado.

No debe introducirse un CMS si no existe una necesidad explícita.

---

## 8. SEO Basic Scope

El MVP incluye optimización SEO básica para la landing principal.

El objetivo es dejar el sitio correctamente estructurado para que los buscadores puedan entenderlo, indexarlo y relacionarlo con los servicios principales de VAGTech.

No se incluyen campañas SEO, generación continua de contenido, link building ni páginas independientes por servicio.

### Requisitos incluidos

- HTML semántico.
- Un H1 principal.
- Jerarquía correcta de H2 y H3.
- Title tag optimizado.
- Meta description.
- URL principal limpia.
- Canonical URL.
- `sitemap.xml`.
- `robots.txt`.
- OpenGraph metadata.
- Alt text en imágenes relevantes.
- Imágenes optimizadas y responsive.
- Diseño responsive.
- Optimización básica de velocidad.
- Navegación interna mediante anchors.
- Datos estructurados básicos mediante Schema.org / JSON-LD cuando la información proporcionada por VAGTech sea suficiente.
- Enlaces a Google Maps / Google Business Profile cuando estén disponibles.

### Enfoque SEO

La landing puede dar mayor relevancia a la personalización automotriz mediante:

- Headline o copy principal.
- Sección de servicios destacada.
- Textos descriptivos.
- Alt text de imágenes relevantes.
- Contenido de resultados / antes y después.
- Términos geográficos cuando corresponda.

La redacción final dependerá de:

- Servicios confirmados.
- Ubicaciones.
- Palabras clave proporcionadas por el cliente.
- Información de Google Business.
- Material visual disponible.

### Importante

El SEO incluido es de carácter básico y técnico/on-page.

No se garantiza:

- Primera posición en Google.
- Aparición inmediata.
- Resultados en un plazo específico.
- Posicionamiento competitivo para múltiples términos de alta dificultad.

---

## 9. Local SEO

Cuando VAGTech proporcione los datos necesarios, la landing debe incluir:

- Nombre comercial.
- Dirección de cada sucursal.
- Teléfono.
- Horarios.
- Google Maps.
- Google Business Profile.

Debe utilizarse el tipo de Schema.org más adecuado al negocio cuando la información permita implementarlo correctamente.

No se inventarán datos estructurados.

---

## 10. Analytics

Las siguientes integraciones son recomendadas, pero dependen de disponibilidad de cuentas y aprobación del cliente:

- Google Analytics 4.
- Google Search Console.

Eventos recomendados:

```text
whatsapp_click
quote_started
quote_submitted
appointment_click
maps_click
phone_click
```

No se debe bloquear la entrega del MVP si el cliente aún no proporciona acceso a estas herramientas.

---

## 11. Responsive Design

El sitio debe funcionar correctamente en:

- Móvil.
- Tablet.
- Escritorio.

Prioridades:

- Mobile-first.
- Botones táctiles claros.
- Tipografía legible.
- Formularios fáciles de completar.
- Imágenes adaptativas.
- Navegación usable.
- CTAs visibles.

---

## 12. Performance

Requisitos:

- Evitar JavaScript innecesario.
- Optimizar imágenes.
- Utilizar formatos modernos cuando sea posible.
- Lazy-load en imágenes no críticas.
- Evitar videos pesados en autoplay.
- Evitar dependencias innecesarias.
- Mantener una carga inicial razonable.
- Priorizar buenas Core Web Vitals cuando sea viable.

---

## 13. Accessibility

Buenas prácticas mínimas:

- Contraste suficiente.
- Alt text en imágenes relevantes.
- Labels asociados a formularios.
- Navegación con teclado donde corresponda.
- Botones y enlaces semánticos.
- Jerarquía correcta de encabezados.
- Estados de foco visibles.

---

## 14. Security

Reglas:

- No exponer credenciales en frontend.
- No guardar API keys en el repositorio.
- Utilizar variables de entorno cuando sean necesarias.
- Validar entradas de formularios.
- Sanitizar datos si existe procesamiento backend.
- HTTPS obligatorio en producción.
- No almacenar datos personales innecesariamente.
- No introducir autenticación si no existe una necesidad real.

Si se integra el sistema de citas:

- Sus credenciales nunca deben estar en código cliente.
- Sus tokens o secretos no deben almacenarse en Git.
- La integración debe respetar los mecanismos de autenticación del proveedor.

---

## 15. Privacy

El formulario debe solicitar únicamente información necesaria para la cotización.

No se deben solicitar datos sensibles que no estén relacionados con el servicio.

Si el flujo almacena datos personales en algún sistema externo, debe documentarse antes de producción.

El aviso de privacidad del cliente deberá enlazarse si existe.

---

## 16. External Dependencies

Posibles integraciones:

- WhatsApp.
- Google Maps.
- Google Business Profile.
- Google Analytics.
- Google Search Console.
- Sistema actual de citas de VAGTech.

No debe asumirse que ninguna integración externa está disponible hasta comprobarlo.

---

## 17. Pending Client Information

Antes de cerrar contenido definitivo deben confirmarse:

- Lista final de servicios.
- Servicios prioritarios.
- Descripción de personalización automotriz.
- Diferenciadores reales.
- Sucursales.
- Direcciones.
- Horarios.
- Teléfonos.
- Números de WhatsApp.
- Redes sociales.
- Logo.
- Manual de marca.
- Fotografías.
- Trabajos de antes/después.
- Google Business Profiles.
- Zonas objetivo SEO.
- Búsquedas prioritarias.
- Nombre del sistema de citas.
- Proveedor o desarrollador del sistema.
- Contacto técnico.
- API/documentación disponible.
- Enlace actual de reservas, si existe.
- Dominio final.
- Aviso de privacidad, si existe.

---

## 18. Fase 2 — Future Scope

No incluida en los $3,000 MXN de la primera etapa.

Puede incluir:

- Agenda propia o integración más avanzada.
- Horarios por sucursal.
- Seguimiento de prospectos.
- Seguimiento de cotizaciones.
- Automatizaciones.
- Base de datos.
- CRM.
- Notificaciones.

---

## 19. Fase 3 — Future Scope

No incluida en los $3,000 MXN de la primera etapa.

Puede incluir:

- Pagos en línea.
- Panel administrativo.
- Historial de clientes.
- Automatizaciones avanzadas.
- Módulos internos adicionales.

---

## 20. Implementation Rules for Codex

Before implementing or modifying a feature:

1. Verify that the feature is inside this contract.
2. Do not create additional routes unless explicitly approved.
3. Do not create service detail pages.
4. Do not add a CMS or admin panel.
5. Do not introduce authentication.
6. Do not introduce a database unless the approved quote workflow requires it.
7. Do not implement an appointment API based on assumptions.
8. Do not invent client content, locations, statistics, reviews or services.
9. Keep the architecture proportional to a small one-page business website.
10. Prefer simple, maintainable solutions over unnecessary abstractions.

If a requested change conflicts with this contract, report the conflict before implementation.

---

## 21. Suggested Information Architecture

```text
/
│
├── Header
│
├── #inicio
│   ├── Headline
│   ├── Supporting copy
│   ├── Cotizar CTA
│   └── WhatsApp CTA
│
├── #servicios
│   ├── Personalización automotriz (prioritario)
│   ├── Otros servicios confirmados
│   └── Cotizar CTA
│
├── #resultados
│   ├── Antes / después
│   └── Galería
│
├── #cotizacion
│   ├── Nombre
│   ├── WhatsApp
│   ├── Vehículo
│   ├── Servicio
│   └── Descripción
│
├── #sucursales
│   ├── Dirección
│   ├── Horario
│   ├── Contacto
│   ├── Google Maps
│   └── CTA cita / WhatsApp
│
└── #contacto
    ├── Redes sociales
    ├── WhatsApp
    ├── Aviso de privacidad
    └── Copyright
```

---

## 22. Acceptance Criteria

El MVP se considera funcional cuando:

- Existe una sola landing publicada.
- El sitio funciona correctamente en móvil y escritorio.
- La navegación por anchors funciona.
- El hero utiliza contenido aprobado.
- Los servicios aprobados aparecen correctamente.
- La personalización automotriz recibe la prioridad acordada.
- La galería utiliza material real aprobado.
- Las sucursales muestran información correcta.
- Los botones de WhatsApp funcionan.
- El formulario de cotización funciona.
- El CTA de citas funciona según el nivel de integración validado.
- Title y meta description están configurados.
- `sitemap.xml` está disponible.
- `robots.txt` está disponible.
- Las imágenes relevantes tienen alt text.
- La estructura de headings es correcta.
- Los datos estructurados se implementan únicamente si existe información suficiente.
- El sitio está publicado en producción.
- No existe panel administrativo.
- No existen páginas individuales por servicio.
- No existen funcionalidades de fase 2 o fase 3 implementadas sin aprobación adicional.

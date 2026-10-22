# VAGTech Website — UI Design Contract

## 1. Visual Direction

The website must feel like a premium automotive customization brand.

Primary visual direction:

**Premium Automotive Editorial with Neo-Brutalist Accents**

The interface should combine:

- Editorial layouts.
- Oversized typography.
- Strong photographic composition.
- Dark industrial surfaces.
- High contrast.
- Acid/lime green brand accents.
- Metallic gray details.
- Asymmetric layouts.
- Sharp geometric elements inspired by VAGTech's branding.
- Controlled neo-brutalist elements.

The website must NOT feel like:

- A generic car repair shop template.
- A SaaS dashboard.
- A corporate consulting website.
- A gaming website.
- A cyberpunk interface.
- A glassmorphism-heavy landing page.
- A neon-heavy nightclub aesthetic.

The brand should feel:

- Premium.
- Technical.
- Aggressive.
- Modern.
- Precise.
- Automotive.
- Custom-built.

---

## 2. Brand References

The visual identity is based on the existing VAGTech branding.

Key visual cues:

- Black / charcoal backgrounds.
- Acid lime green accent.
- Metallic silver / gray.
- White typography.
- Angular shapes.
- Automotive photography.
- High contrast.
- Performance / customization aesthetic.

The lime green should be used as an accent, not as the dominant background color.

Avoid large full-screen fluorescent green areas.

---

## 3. Color System

Use a restrained palette.

Suggested semantic tokens:

```css
--background: #080A08;
--background-secondary: #111311;
--surface: #171A17;
--surface-elevated: #1D211D;

--text-primary: #F5F5F2;
--text-secondary: #A5AAA4;
--text-muted: #71766F;

--brand-lime: #C7FF00;
--brand-lime-hover: #B5E900;

--metal-light: #D5D8D3;
--metal-mid: #8A8F89;
--metal-dark: #454A45;

--border: rgba(255,255,255,0.12);
```

These values are starting references, not immutable constants.

The exact lime tone should be adjusted to match the supplied VAGTech assets.

### Color usage

Lime green:
- CTAs.
- Active navigation.
- Small dividers.
- Eyebrows.
- Icons.
- Key numbers.
- Hover states.

Do NOT use lime green for:
- Large paragraphs.
- Large backgrounds.
- Every border.
- Every heading.

---

## 4. Typography

Typography should feel editorial and automotive.

Use two typographic roles:

### Display typography

Used for:
- Hero headline.
- Section titles.
- Strong statements.
- Large labels.

Characteristics:
- Wide or geometric sans-serif.
- Heavy weight.
- Uppercase may be used selectively.
- Tight line height.
- Strong visual presence.

### Body typography

Used for:
- Paragraphs.
- Service descriptions.
- Form fields.
- Supporting copy.

Characteristics:
- Neutral sans-serif.
- Highly readable.
- Medium contrast against dark background.

Do not use futuristic fonts for body text.

### Suggested hierarchy

Desktop:

```text
Hero H1: 64–96px
Section H2: 48–72px
Card H3: 22–30px
Body large: 18–20px
Body: 16–18px
Eyebrow / labels: 11–14px
```

Mobile:

```text
Hero H1: 42–56px
Section H2: 32–42px
Card H3: 20–24px
Body: 16px
```

Use fluid typography with `clamp()` when appropriate.

---

## 5. Editorial Layout

Avoid repetitive centered sections.

The page should feel designed, not templated.

Prefer:

- Asymmetric grids.
- Offset text blocks.
- Large editorial headlines.
- Photos that partially break the grid.
- Alternating image/text alignment.
- Intentional empty space.
- Full-width photographic moments.
- Strong section numbering or labels.

Examples:

```text
01 — SERVICES
02 — RESULTS
03 — QUOTE
04 — LOCATIONS
```

Section numbers may be used subtly as a recurring editorial device.

Do not put every section inside identical rounded cards.

---

## 6. Geometry

VAGTech branding contains sharp and angular forms.

Reflect this subtly in the UI.

Allowed:

- Slanted separators.
- Angular clipping.
- Diagonal image masks.
- Sharp corners.
- Offset borders.
- Geometric accents.

Avoid:

- Excessive rounded cards.
- Pill-shaped containers everywhere.
- Soft bubbly UI.
- Cartoon-like shapes.

Border radius should generally stay low.

Suggested:

```css
--radius-small: 4px;
--radius-medium: 8px;
```

Large rounded cards should be rare.

---

## 7. Hero

The hero is the strongest visual moment.

Recommended composition:

```text
LEFT / CENTER
Large editorial headline

PERSONALIZACIÓN
AUTOMOTRIZ
EN PUEBLA

Supporting copy

[ COTIZAR PROYECTO ] [ WHATSAPP ]

RIGHT / BACKGROUND
High-quality customized vehicle photography
```

The hero may use:

- Full-bleed photography.
- Dark gradient overlay.
- Lime graphic accents.
- Large cropped typography.
- Subtle angular shapes derived from the logo.

Avoid a generic centered hero with a small image underneath.

---

## 8. Personalización Automotriz Priority

Personalización automotriz is the primary commercial focus.

It must receive the strongest visual treatment in the Services section.

Possible treatment:

```text
01
PERSONALIZACIÓN
AUTOMOTRIZ

Large image
Large headline
Short supporting text
CTA
```

Other services may appear as smaller editorial cards or rows.

Do not give every service identical visual hierarchy.

---

## 9. Services Section

The services area should feel like a curated automotive portfolio.

Preferred patterns:

### Option A — Editorial grid

One large featured service + smaller secondary services.

### Option B — Horizontal editorial list

```text
01  PERSONALIZACIÓN AUTOMOTRIZ
02  DETALLADO
03  HOJALATERÍA
04  PINTURA
05  PROTECCIÓN CERÁMICA
```

Each row may reveal or accompany an image.

Avoid generic icon + title + paragraph cards.

Icons are optional and should never dominate.

---

## 10. Results / Before & After

This section should be highly visual.

Photography is the protagonist.

Recommended treatments:

- Large before/after slider.
- Split-image comparisons.
- Editorial gallery.
- Masonry or asymmetric grid.
- Full-width image transitions.

Text should be minimal.

Possible labels:

```text
BEFORE
AFTER

PROJECT 01
PERSONALIZACIÓN
```

Do not place every photograph in a small rounded card.

---

## 11. Quote Section

The quote form should contrast with the gallery sections.

Recommended:

- Clean dark surface.
- Strong headline.
- Large form inputs.
- Simple fields.
- Lime CTA.

Example structure:

```text
LET'S BUILD
YOUR PROJECT.

Tell us what your car needs.

[ Name              ]
[ WhatsApp          ]
[ Vehicle           ]
[ Service           ]
[ Description       ]

[ REQUEST QUOTE → ]
```

The form should feel premium and simple, not administrative.

---

## 12. Locations

Use large typography and clear information.

Example:

```text
01
VAGTECH
PUEBLA

Address
Opening hours
WhatsApp

[ OPEN IN MAPS ]
```

Each branch can use an editorial row rather than a generic card.

---

## 13. Buttons

Primary CTA:

- Lime background.
- Dark text.
- Bold typography.
- Medium/large size.
- Minimal border radius.

Secondary CTA:

- Transparent or dark.
- Light border.
- White text.

Possible icon:
`→`

Buttons may use subtle directional motion on hover.

Avoid:
- Excessive shadows.
- Gradient buttons.
- Pill-shaped SaaS buttons.

---

## 14. Glass Effects

Glassmorphism may only be used as a secondary decorative technique.

Allowed examples:

- Navigation overlay over hero photography.
- Small floating information panels.
- Before/after labels.

Do not build the entire website using glass cards.

---

## 15. Neo-Brutalist Accents

Neo-brutalism is an accent, not the full visual system.

Allowed:

- Strong borders.
- Oversized labels.
- Sharp hierarchy.
- Offset graphic elements.
- Large numbers.
- Intentional typography.
- High contrast.

Avoid:

- Cartoonish drop shadows.
- Random primary colors.
- Intentionally ugly layouts.
- Oversized borders everywhere.

---

## 16. Photography

Photography is a central brand asset.

Preferred imagery:

- Customized vehicles.
- Close-up automotive details.
- Paint.
- Wheels.
- Bodywork.
- Lighting.
- Interior customization.
- Before/after transformations.
- Workshop environment.

Image treatment:

- High contrast.
- Dark.
- Cinematic.
- Detailed.
- Premium.

Do not apply strong green overlays to all images.

Brand green should complement the photography, not obscure it.

---

## 17. Motion

Motion should feel mechanical and precise.

Allowed:

- Smooth reveal on scroll.
- Image clipping animations.
- Text reveal.
- Subtle parallax.
- Hover image zoom.
- Arrow translation.
- Section transitions.

Typical duration:

```text
200–500ms interaction
500–900ms entrance animations
```

Avoid:

- Bouncy animation.
- Excessive spring motion.
- Constant moving backgrounds.
- Long loading animations.

Respect:

```css
prefers-reduced-motion
```

---

## 18. Navigation

Navigation should be minimal.

Desktop:

```text
VAGTECH

SERVICIOS
RESULTADOS
SUCURSALES
CONTACTO

[COTIZAR]
```

It may use a transparent header over the hero and transition to a dark surface after scroll.

Mobile should use a simple menu.

---

## 19. Responsive Behaviour

The editorial character must survive on mobile.

Do not simply shrink desktop layouts.

On mobile:

- Stack asymmetric compositions intelligently.
- Maintain large typography.
- Keep strong imagery.
- Reduce decorative elements.
- Preserve clear CTA hierarchy.
- Keep WhatsApp easily accessible.

---

## 20. Visual Density

The website should alternate between:

- Dense visual sections.
- Quiet sections with breathing room.

Example rhythm:

```text
Hero        → High impact
Services    → Structured
Results     → Highly visual
Quote       → Calm
Locations   → Structured
Footer      → Minimal
```

This rhythm is intentional.

---

## 21. UI Anti-Patterns

Do NOT generate:

- Generic Tailwind landing page aesthetics.
- Repeated `rounded-xl` cards.
- Large collections of icons.
- Gradient blobs.
- Purple/blue SaaS gradients.
- Glass cards everywhere.
- Floating dashboard elements.
- Excessive shadows.
- Generic stock automotive photos when real content exists.
- Neon green glow on every component.
- Cyberpunk HUD interfaces.
- Racing-game UI.
- Speedometer graphics.
- Carbon-fiber textures everywhere.
- Fake customer metrics.
- Fake testimonials.
- Fake certifications.

---

## 22. Implementation Principle

Before implementing a component, ask:

> Does this look like a premium automotive customization brand, or like a generic web template?

If the answer is generic template, redesign it.

Visual hierarchy and photography are more important than decorative UI components.

Keep the implementation maintainable and responsive.

---

## 23. Reference Intent

The supplied proposal mockups define the visual direction, not pixel-perfect layouts.

Codex should preserve:

- Dark premium palette.
- Acid lime accents.
- Strong automotive photography.
- Large editorial typography.
- Clean conversion-focused CTAs.
- Brand identity.

Codex may improve:

- Grid.
- Spacing.
- Responsive behavior.
- Typography.
- Motion.
- Visual rhythm.

Codex must not radically reinterpret the brand.

---

## 24. Placeholder Content Before Client Response

Development may begin before the client completes the onboarding form.

Until final content is received:

- Use clearly marked placeholder copy.
- Use temporary service labels only when already known from the proposal.
- Do not invent addresses, phone numbers, schedules, testimonials, statistics, certifications, guarantees or business claims.
- Do not invent technical details about the appointment system.
- Do not hardcode final SEO keywords beyond the confirmed commercial focus on personalización automotriz.
- Keep content data-driven so placeholders can be replaced easily.
- Store provisional content separately from layout logic.
- Any placeholder image must be easy to replace with approved VAGTech photography.

When client content arrives, replace placeholders without redesigning the core UI unless the information materially changes the structure.

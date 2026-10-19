# Inventario NAP y datos de contacto (A0)

Fecha: 2026-10-19. Rama: `claude/amazing-allen-1me0tc`.
Alcance: `src/`, `public/`, `README.md`, `design.md`, `astro.config.mjs`. Solo lectura: no se ha modificado ningún otro fichero.

Canónico propuesto:
- Dirección: `Avenida de Madrid, 62, 28752 Lozoyuela, Madrid`
- Teléfono: `+34 613 95 50 69`
- Email: `agnresuelvetuherencia@gmail.com`

Los números de línea corresponden al fichero tal como está en el momento del inventario.

## Tabla de ocurrencias

| fichero:línea | campo | valor exacto | ¿coincide con el canónico? |
|---|---|---|---|
| public/llms.txt:6 | nombre comercial | `Resuelve Tu Herencia` | Sí (nombre) |
| public/llms.txt:8 | contacto (email) | `agnresuelvetuherencia@gmail.com` | Sí |
| public/llms.txt:9 | sede física | `28752, Lozoyuela, Madrid, España` | Parcial: sin calle ni número |
| public/llms.txt:10 | área de servicio | `Comunidad de Madrid ... Madrid Capital, Zona Norte y Sierra de Madrid (Lozoyuela, Alcobendas, San Sebastián de los Reyes, Tres Cantos, Colmenar Viejo, San Agustín del Guadalix, etc.)` | No aplica a dirección. Discrepa de la lista de áreas: incluye Tres Cantos, que no aparece en ningún otro fichero |
| README.md:1 | nombre | `Resuelve Tu Herencia` | Sí (nombre) |
| README.md:3 | nombre y zona | `"Resuelve Tu Herencia" ... Comunidad de Madrid` | Sí (sin dirección) |
| README.md:67 | email de destino (plantilla .env) | `CONTACT_EMAIL=tu-email-de-contacto@ejemplo.com` | No: placeholder. La variable no se lee en ningún fichero de `src/` ni en `astro.config.mjs` |
| README.md:104 | titular | `Resuelve Tu Herencia` | Sí (nombre) |
| design.md:3 | nombre | `Resuelve Tu Herencia` | Sí (nombre) |
| design.md:37 | logotipo (texto) | `RESUELVE TU HERENCIA` | Sí en contenido (grafía de logotipo en mayúsculas) |
| design.md:102 | logotipo (texto) | `RESUELVE TU HERENCIA` | Sí en contenido (grafía de logotipo en mayúsculas) |
| design.md:109 | dirección física | `Paseo de la Castellana, Madrid` | No: dirección obsoleta |
| design.md:113 | correo | `agnresuelvetuherencia@gmail.com` | Sí |
| design.md:114 | copyright (nombre) | `Copyright © 2026 Resuelve tu Herencia.` | Parcial: grafía "tu" en minúscula |
| astro.config.mjs:8 | URL del sitio | `https://resuelvetuherencia.es` | No es NAP (dominio) |
| src/layouts/RootLayout.astro:44 | JSON-LD name | `Resuelve Tu Herencia` | Sí (nombre) |
| src/layouts/RootLayout.astro:49 | JSON-LD email | `agnresuelvetuherencia@gmail.com` | Sí |
| src/layouts/RootLayout.astro:50 | JSON-LD telephone | `+34613955069` | Sí (mismo número, formato E.164) |
| src/layouts/RootLayout.astro:54 | JSON-LD streetAddress | `Avenida de Madrid, 62` | Sí |
| src/layouts/RootLayout.astro:55 | JSON-LD postalCode | `28752` | Sí |
| src/layouts/RootLayout.astro:56 | JSON-LD addressLocality | `Lozoyuela` | Sí |
| src/layouts/RootLayout.astro:57 | JSON-LD addressRegion | `Comunidad de Madrid` | Sí (campo adicional) |
| src/layouts/RootLayout.astro:58 | JSON-LD addressCountry | `ES` | Sí (campo adicional) |
| src/layouts/RootLayout.astro:62-63 | JSON-LD geo | `40.925864 / -3.617637` | Sí (coordenadas del mapa redondeadas) |
| src/layouts/RootLayout.astro:71 | JSON-LD name (segundo bloque) | `Resuelve Tu Herencia` | Sí (nombre) |
| src/layouts/RootLayout.astro:126 | geo.region | `ES-M` | No aplica (meta geo) |
| src/layouts/RootLayout.astro:127 | geo.placename | `Lozoyuela, Madrid` | Parcial: sin calle |
| src/data/site.ts:5-21 | areaServed (JSON-LD) | `Lozoyuela, Buitrago del Lozoya, Torrelaguna, La Cabrera, San Agustín del Guadalix, El Molar, Colmenar Viejo, Alcobendas, San Sebastián de los Reyes, Venturada, Bustarviejo, Miraflores de la Sierra, Soto del Real, Guadalix de la Sierra, Madrid` (15) | No aplica a dirección. Es la lista de áreas más completa |
| src/components/sections/SobreNosotros.astro:3-14 | lista de localidades (áreas) | `Lozoyuela, Buitrago del Lozoya, Torrelaguna, La Cabrera, San Agustín del Guadalix, El Molar, Colmenar Viejo, Alcobendas, San Sebastián de los Reyes, Venturada, Bustarviejo, Miraflores de la Sierra` (12) | No aplica a dirección. Es un subconjunto de site.ts sin Soto del Real, Guadalix de la Sierra ni Madrid. Duplica la lista en lugar de importarla |
| src/components/sections/SobreNosotros.astro:35 | sede en texto | `📍 Asesoría en Lozoyuela` | Parcial: solo localidad |
| src/components/sections/SobreNosotros.astro:45-47 | nombre | `En Resuelve Tu Herencia somos una asesoría...` | Sí (nombre) |
| src/components/sections/SobreNosotros.astro:196 | nombre | `Resuelve Tu Herencia` | Sí (nombre) |
| src/components/sections/Hero.astro:42 | área de servicio | `Lozoyuela, Alcobendas, Colmenar Viejo y toda la Sierra Norte.` | No aplica a dirección. Subconjunto de site.ts |
| src/data/faqs.ts:13 | área presencial | `presencial en Lozoyuela, Alcobendas, San Sebastián de los Reyes o Colmenar Viejo` | No aplica a dirección. Subconjunto de site.ts |
| src/data/servicios.ts:57 | área de servicio | `Atención digital en toda la Comunidad de Madrid y presencial en Lozoyuela, Alcobendas, San Sebastián de los Reyes, Colmenar Viejo y la Sierra Norte.` | No aplica a dirección. Subconjunto de site.ts |
| src/data/servicios.ts:70 | sede en texto | `nuestra oficina de Lozoyuela` | Parcial: solo localidad |
| src/pages/[servicio].astro:30 | areaServed | `Comunidad de Madrid` | No aplica (genérico) |
| src/components/common/Footer.astro:21 | alt del logotipo | `Resuelve Tu Herencia` | Sí (nombre) |
| src/components/common/Footer.astro:82 | oficina (dirección) | `28752, Lozoyuela` | Parcial: sin calle ni número |
| src/components/common/Footer.astro:83 | oficina (provincia) | `Madrid, Madrid` | No: localidad duplicada y sin calle |
| src/components/common/Footer.astro:97 | href del teléfono | `tel:+34613955069` | Sí |
| src/components/common/Footer.astro:100 | teléfono visible | `+34 613 95 50 69` | Sí |
| src/components/common/Footer.astro:105 | href del email | `mailto:agnresuelvetuherencia@gmail.com` | Sí |
| src/components/common/Footer.astro:108 | email visible | `agnresuelvetuherencia@gmail.com` | Sí |
| src/components/common/Footer.astro:118 | copyright (nombre) | `Copyright © {año} Resuelve tu Herencia.` | Parcial: grafía "tu" en minúscula |
| src/components/common/Navbar.astro:12 | alt del logotipo | `Resuelve Tu Herencia` | Sí (nombre) |
| src/components/common/WhatsAppButton.astro:16 | enlace WhatsApp | `https://wa.me/34613955069?text=...` | Sí (mismo número, sin "+") |
| src/components/sections/MapSection.astro:27 | texto de oficina | `Nuestra oficina en Lozoyuela` | Parcial: solo localidad |
| src/components/sections/MapSection.astro:55 | dirección | `Avenida de Madrid, 62, 28752 Lozoyuela, Madrid` | Sí |
| src/components/sections/MapSection.astro:76 | título de horario | `Horario de Atención` | No aplica |
| src/components/sections/MapSection.astro:79 | horario | `Lunes a Viernes: 09:00 - 18:00 (Cita previa recomendada)` | Horario (no existe canónico). Coincide con contacto.astro:279 |
| src/components/sections/MapSection.astro:139-141 | coordenadas | `-3.6176370164417504 / 40.92586430923798` (comentario: "Avenida de Madrid 62, Lozoyuela") | Sí |
| src/components/sections/MapSection.astro:209 | nombre (popup) | `Resuelve Tu Herencia` | Sí (nombre) |
| src/components/sections/MapSection.astro:210 | dirección (popup) | `Avenida de Madrid, 62, 28752 Lozoyuela, Madrid` | Sí |
| src/components/sections/Contacto.astro:12 | action del formulario (destino) | `https://formsubmit.co/ajax/agnresuelvetuherencia@gmail.com` | Sí |
| src/components/sections/Contacto.astro:59 | placeholder del teléfono | `+34 600 00 00 00` | No: ejemplo, no es dato de la empresa |
| src/components/sections/Contacto.astro:76 | placeholder del email | `tucorreo@ejemplo.com` | No: ejemplo |
| src/components/sections/Contacto.astro:184 | fetch (destino) | `https://formsubmit.co/ajax/agnresuelvetuherencia@gmail.com` | Sí |
| src/components/sections/Contacto.astro:191 | asunto | `Nueva solicitud de sesión - Resuelve Tu Herencia` | Sí (nombre) |
| src/components/sections/InheritanceAssistant.astro:545 | placeholder del email | `tucorreo@ejemplo.com` | No: ejemplo |
| src/components/sections/InheritanceAssistant.astro:1244 | texto de plantilla | `En Resuelve Tu Herencia somos especialistas...` | Sí (nombre) |
| src/components/sections/InheritanceAssistant.astro:1246 | teléfono en texto | `llamando al +34 613 95 50 69` | Sí |
| src/components/sections/InheritanceAssistant.astro:1249 | firma | `El equipo de Resuelve Tu Herencia.` | Sí (nombre) |
| src/components/sections/InheritanceAssistant.astro:1253 | fetch (destino) | `https://formsubmit.co/ajax/agnresuelvetuherencia@gmail.com` | Sí |
| src/components/sections/InheritanceAssistant.astro:1260 | asunto | `Nueva solicitud de hoja de ruta - Resuelve Tu Herencia` | Sí (nombre) |
| src/components/sections/TaxCalculator.astro:194 | comentario | `Honorarios de Asesoría (Resuelve tu herencia)` | Parcial: grafía "tu" en minúscula (solo comentario) |
| src/components/sections/TaxCalculator.astro:369 | comentario | `Resuelve Tu Herencia estimate` | Sí (nombre) |
| src/pages/contacto.astro:10 | meta description | `...visítanos en nuestra oficina en Lozoyuela, Sierra Norte de Madrid.` | Parcial: solo localidad |
| src/pages/contacto.astro:55 | action del formulario (destino) | `https://formsubmit.co/ajax/agnresuelvetuherencia@gmail.com` | Sí |
| src/pages/contacto.astro:136 | placeholder del teléfono | `Ej. +34 600 00 00 00` | No: ejemplo |
| src/pages/contacto.astro:162 | placeholder del email | `tucorreo@ejemplo.com` | No: ejemplo |
| src/pages/contacto.astro:255 | dirección | `Avenida de Madrid, 62, 28752 Lozoyuela, Madrid` | Sí |
| src/pages/contacto.astro:279 | horario | `Lunes a Viernes: 09:00 - 18:00 (Cita previa recomendada)` | Horario (no existe canónico). Coincide con MapSection.astro:79 |
| src/pages/contacto.astro:302 | href del teléfono | `tel:+34613955069` | Sí |
| src/pages/contacto.astro:305 | teléfono visible | `+34 613 95 50 69` | Sí |
| src/pages/contacto.astro:328 | href del email | `mailto:agnresuelvetuherencia@gmail.com` | Sí |
| src/pages/contacto.astro:331 | email visible | `agnresuelvetuherencia@gmail.com` | Sí |
| src/pages/contacto.astro:386-388 | coordenadas | `-3.6176370164417504 / 40.92586430923798` (comentario: "Avenida de Madrid 62, Lozoyuela") | Sí |
| src/pages/contacto.astro:439 | nombre (popup) | `Resuelve Tu Herencia` | Sí (nombre) |
| src/pages/contacto.astro:440 | dirección (popup) | `Avenida de Madrid, 62, 28752 Lozoyuela, Madrid` | Sí |
| src/pages/contacto.astro:545 | fetch (destino) | `https://formsubmit.co/ajax/agnresuelvetuherencia@gmail.com` | Sí |
| src/pages/contacto.astro:552 | asunto | `Nueva solicitud de sesión - Resuelve Tu Herencia` | Sí (nombre) |
| src/pages/aviso-legal.astro:26 | NIF | `02580458L` | No hay canónico. Dato legal, única ocurrencia; verificar antes de publicar |
| src/pages/aviso-legal.astro:27 | nombre comercial | `Resuelve Tu Herencia` | Sí (nombre) |
| src/pages/aviso-legal.astro:28 | domicilio profesional | `Avenida de Madrid, 62, 28752 Lozoyuela, Madrid, España` | Parcial: añade ", España" |
| src/pages/aviso-legal.astro:29 | teléfono | `+34 613 95 50 69` | Sí |
| src/pages/aviso-legal.astro:30 | contacto (email) | `agnresuelvetuherencia@gmail.com` | Sí |
| src/pages/politica-privacidad.astro:26 | correo del responsable | `agnresuelvetuherencia@gmail.com` | Sí |
| src/pages/politica-privacidad.astro:51 | correo para ejercer derechos | `agnresuelvetuherencia@gmail.com` | Sí |

Notas sobre lo que no aparece:
- Horario: solo existe en contacto.astro:279 y MapSection.astro:79, y es idéntico en ambos. No aparece en el JSON-LD de RootLayout.astro (falta `openingHours`), ni en el Footer.
- Teléfono y email: no aparecen en MapSection.astro.
- `src/styles/globals.css`, `design.md` (resto) y `public/robots.txt`: sin datos NAP. Las coincidencias de patrones genéricos ("@", "Madrid") son ruido.

## Discrepancias encontradas

Versión mayoritaria por campo:
- Dirección: `Avenida de Madrid, 62, 28752 Lozoyuela, Madrid`. Aparece completa en contacto.astro:255,440, MapSection.astro:55,210 y aviso-legal.astro:28 (con ", España"), y desglosada en RootLayout.astro:54-56.
- Teléfono: `+34 613 95 50 69`. Sin discrepancias de dato. Solo cambia el formato (ver punto 9).
- Email: `agnresuelvetuherencia@gmail.com`. Sin discrepancias de dato en ningún punto de contacto real.
- Nombre: `Resuelve Tu Herencia`. Minoritarias: "Resuelve tu Herencia" y "Resuelve tu herencia".
- Áreas de servicio: la lista de `src/data/site.ts` (15 entradas), que es la que declara ser fuente única.

Discrepancias:
1. **design.md:109**: dirección `Paseo de la Castellana, Madrid`. Es la única dirección distinta del canónico y está desactualizada. Versión minoritaria (1 ocurrencia).
2. **src/components/common/Footer.astro:82-83**: `28752, Lozoyuela` sin calle, y `Madrid, Madrid` como provincia duplicada y atípica. Versión minoritaria, la dirección del footer está incompleta.
3. **public/llms.txt:9**: `28752, Lozoyuela, Madrid, España` sin calle ni número.
4. **src/layouts/RootLayout.astro:127** (`geo.placename`): `Lozoyuela, Madrid` sin calle. Aceptable en una meta geo, pero no coincide con el canónico completo.
5. **src/pages/aviso-legal.astro:28**: añade `, España` al canónico. Diferencia menor de formato.
6. **Áreas de servicio, tres listas distintas**:
   - `site.ts` (15): incluye Madrid, Soto del Real y Guadalix de la Sierra.
   - `SobreNosotros.astro:3-14` (12): lista duplicada, sin esos tres.
   - `public/llms.txt:10`: incluye Tres Cantos, que no aparece en ningún otro fichero.
   Mayoritaria: `site.ts`. `SobreNosotros.astro` debería importar la lista en lugar de repetirla.
7. **Nombre, grafía**: "Resuelve tu Herencia" en `Footer.astro:118`, `design.md:114` y `TaxCalculator.astro:194` (comentario). Mayoritaria: "Resuelve Tu Herencia". El logotipo en mayúsculas (`design.md:37,102`) es estilo de marca y no cuenta como discrepancia.
8. **Email de destino en README**: `README.md:67` indica `CONTACT_EMAIL=tu-email-de-contacto@ejemplo.com`. Es un placeholder, y la variable `CONTACT_EMAIL` no se lee en ningún punto de `src/` ni en `astro.config.mjs`. Los formularios tienen el email de destino fijo en 5 sitios: contacto.astro:55,545, Contacto.astro:12,184 e InheritanceAssistant.astro:1253. Mayoritaria: `agnresuelvetuherencia@gmail.com`. La documentación del README no se corresponde con el código.
9. **Formato del teléfono** (no es discrepancia de dato): `+34 613 95 50 69` en texto visible, `+34613955069` en `tel:` y JSON-LD, y `34613955069` en `wa.me`. Es el mismo número.
10. **Horario**: solo en contacto.astro:279 y MapSection.astro:79, idénticos. Sin `openingHours` en JSON-LD. Es un hueco de datos estructurados, no una discrepancia.
11. **Placeholders de ejemplo** (no son datos de la empresa): `+34 600 00 00 00` (Contacto.astro:59, contacto.astro:136) y `tucorreo@ejemplo.com` (Contacto.astro:76, contacto.astro:162, InheritanceAssistant.astro:545).
12. **NIF** `02580458L` en aviso-legal.astro:26: dato legal sin contraste en el resto del repo. Verificar antes de cualquier cambio.
13. **Copyright con año fijo**: design.md:114 indica `2026` fijo, mientras que Footer.astro:118 usa el año dinámico. No es NAP, se anota solo como contexto.

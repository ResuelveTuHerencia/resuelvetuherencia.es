# Tablero de coordinación — plan de autoridad local

Estado al arrancar la ejecución (2026-10-19). Actualizado por el coordinador.

| Tarea | Agente | Modelo | Fase | Estado | Ficheros reclamados |
|---|---|---|---|---|---|
| Inventario NAP | A0 | haiku | 0 | en curso | docs/seo/00-nap-inventario.md |
| Verificación de afirmaciones | A0b | haiku | 0 | en curso | docs/seo/00-claims-verificacion.md |
| Ficha GBP y citas | A2 | haiku | 1 | en curso | docs/seo/A2-gbp-y-citas.md |
| Keywords locales | A3 | haiku | 1 | en curso | docs/seo/A3-keywords.md |
| NAP canónico y JSON-LD | A1 | sonnet | 1 | bloqueado (decisión de dirección) | src/data/site.ts, src/layouts/RootLayout.astro, ... |
| Páginas por municipio | B1 | sonnet | 2 | bloqueado (Fase 0 + decisión de municipios) | src/data/municipios.ts, src/pages/zona/ |
| Servicios y contenido fiscal | B2 | sonnet | 2 | bloqueado (Fase 0 + keywords A3) | src/data/servicios.ts |
| Borradores de blog | B3 | haiku | 2 | bloqueado (keywords A3) | docs/seo/blog/ |
| Home, FAQs, prueba social | B4 | sonnet | 2 | bloqueado (verificación A0b) | Hero, Beneficios, src/data/faqs.ts |
| Integración, build, medición | C1-C3 | sonnet/haiku | 3 | pendiente | astro.config.mjs, public/llms.txt |

Reglas: ver plan en scratchpad. Ningún agente edita un fichero reclamado por otro; las peticiones se hacen por mensaje al dueño.

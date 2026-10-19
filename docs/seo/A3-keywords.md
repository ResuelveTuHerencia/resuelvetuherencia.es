# A3: investigación de palabras clave locales

Fecha: 2026-10-19. Ámbito: 4 servicios × 15 municipios de `areaServed` (src/data/site.ts) × 3 intenciones.
Estado: solo lectura del repo. No se han modificado ficheros de `src/` ni hecho commits.

## Resumen ejecutivo

- Los 4 servicios existentes (`src/data/servicios.ts`) tienen slug con sufijo `-madrid` y no hay ninguna página por municipio. Las rutas `/zona/<municipio>` que se proponen **no existen** en `src/pages/` (solo hay `[servicio].astro`, `[...slug].astro` y páginas legales/índice). Todas las páginas por municipio son nuevas.
- Prioridad 1: Lozoyuela, Alcobendas, San Sebastián de los Reyes y Colmenar Viejo (presencia real según `servicios.ts`: "presencial en Lozoyuela, Alcobendas, San Sebastián de los Reyes, Colmenar Viejo y la Sierra Norte").
- Oportunidades claras por baja competencia observada: **Lozoyuela** (ningún abogado de herencias local en la SERP) y **Sierra Norte** (ningún resultado específico). Torrelaguna, con solo un resultado registral, también es un hueco.
- Las búsquedas con intención informativa sobre impuestos son muy densas (Comunidad de Madrid, Taxdown, Garrigues, Bolsamania). Ahí no basta con repetir: hay que ser más exactos y citar la normativa vigente. En la SERP aparecen **cifras contradictorias** (bonificación del grupo III, plazo de la plusvalía). Antes de publicar cualquier cifra, hay que verificarla (ver "Lagunas de contenido").
- **Volúmenes: ningún dato verificado.** No hay acceso a Search Console ni a Keyword Planner desde esta sesión. Todas las cifras de volumen y dificultad quedan como "por verificar".

## Matriz (plantillas)

Cada celda de la matriz se genera con la plantilla de la fila. Son 4 servicios × 15 municipios × 3 intenciones = 180 combinaciones. Aquí se listan las plantillas y la tabla priorizada reúne las combinaciones que merecen atención.

| Servicio (slug existente) | Transaccional | Informacional | Navegacional |
|---|---|---|---|
| tramitacion-herencia-madrid | `abogado herencias {m}`, `tramitación herencia {m}`, `gestoría herencias {m}` | `tramitar herencia {m}`, `cómo tramitar una herencia {m}` | `tramitación herencias resuelve tu herencia` |
| impuesto-sucesiones-madrid | `gestor impuesto sucesiones {m}` | `impuesto sucesiones {m}`, `impuesto sucesiones Madrid bonificación` | `impuesto sucesiones Madrid` (marca propia: Resuelve Tu Herencia) |
| plusvalia-municipal-herencia-madrid | `plusvalía herencia {m}` (cuando el cliente busca pagar o reclamar) | `plusvalía municipal herencia {m}`, `cómo se calcula la plusvalía en una herencia {m}` | `plusvalía herencia Madrid` (solo si hay página propia) |
| herencia-sin-testamento-madrid | `abogado herencia sin testamento {m}` | `herencia sin testamento {m}`, `declaración herederos abintestato {m}` | `herencia sin testamento Madrid` |

`{m}` = municipio de `areaServed`. Para Madrid, la capital se usa sin `{m}` y apunta a la página de servicio.

## Tabla priorizada

Prioridad: **P1** = municipio con presencia real o hueco claro en la SERP. **P2** = municipio de la zona con demanda previsible, o keyword de competencia alta. **P3** = resto de municipios, que se cubren con una página de zona sin campaña dedicada.

Volumen y dificultad: "por verificar" en todas las filas (no hay datos fiables).

| keyword | intención | prioridad | página propuesta | volumen estimado |
|---|---|---|---|---|
| abogado herencias Lozoyuela | transaccional | P1 | /zona/lozoyuela (nueva) | por verificar |
| tramitar herencia Lozoyuela | informacional | P1 | /zona/lozoyuela (nueva) | por verificar |
| herencia sin testamento Lozoyuela | informacional | P2 | /zona/lozoyuela + /herencia-sin-testamento-madrid | por verificar |
| tramitar herencia Sierra Norte | informacional / transaccional | P1 | /zona/sierra-norte (nueva, hub) + /tramitacion-herencia-madrid | por verificar |
| abogado herencias Alcobendas | transaccional | P1 | /zona/alcobendas (nueva) | por verificar |
| tramitación herencia Alcobendas | transaccional | P1 | /zona/alcobendas (nueva) | por verificar |
| plusvalía herencia Alcobendas | informacional | P1 | /plusvalia-municipal-herencia-madrid + /zona/alcobendas | por verificar |
| impuesto sucesiones Alcobendas | informacional | P2 | /impuesto-sucesiones-madrid + /zona/alcobendas | por verificar |
| herencia sin testamento Alcobendas | informacional | P2 | /herencia-sin-testamento-madrid + /zona/alcobendas | por verificar |
| abogado herencias San Sebastián de los Reyes | transaccional | P1 | /zona/san-sebastian-de-los-reyes (nueva) | por verificar |
| plusvalía herencia San Sebastián de los Reyes | informacional / transaccional | P1 | /plusvalia-municipal-herencia-madrid + /zona/san-sebastian-de-los-reyes | por verificar |
| impuesto sucesiones San Sebastián de los Reyes | informacional | P2 | /impuesto-sucesiones-madrid + /zona/san-sebastian-de-los-reyes | por verificar |
| abogado herencias Colmenar Viejo | transaccional | P1 | /zona/colmenar-viejo (nueva) | por verificar |
| gestoría herencias Colmenar Viejo | transaccional | P1 | /zona/colmenar-viejo (nueva) | por verificar |
| impuesto sucesiones Colmenar Viejo | informacional | P1 | /impuesto-sucesiones-madrid + /zona/colmenar-viejo | por verificar |
| herencia sin testamento Colmenar Viejo | informacional | P2 | /herencia-sin-testamento-madrid + /zona/colmenar-viejo | por verificar |
| notaría herencia Torrelaguna | transaccional | P2 | /zona/torrelaguna (nueva) | por verificar |
| abogado herencias Torrelaguna | transaccional | P3 | /zona/torrelaguna (nueva) | por verificar |
| abogado herencias Madrid | transaccional | P2 | /tramitacion-herencia-madrid | por verificar |
| tramitación herencia Madrid precio | transaccional | P1 | /tramitacion-herencia-madrid (sección de presupuesto, ver lagunas) | por verificar |
| herencia sin testamento Madrid | informacional | P1 | /herencia-sin-testamento-madrid | por verificar |
| declaración herederos abintestato Madrid notario | informacional / transaccional | P2 | /herencia-sin-testamento-madrid | por verificar |
| impuesto sucesiones Madrid bonificación 99% | informacional | P1 | /impuesto-sucesiones-madrid | por verificar |
| impuesto sucesiones Madrid calculadora | informacional | P2 | /impuesto-sucesiones-madrid | por verificar |
| plusvalía municipal herencia Madrid | informacional | P2 | /plusvalia-municipal-herencia-madrid | por verificar |
| resuelve tu herencia | navegacional | P1 | / (home) | por verificar (Search Console) |
| resuelvetuherencia.es | navegacional | P1 | / (home) | por verificar (Search Console) |
| abogado herencias Miraflores de la Sierra / Bustarviejo / Venturada / El Molar / La Cabrera / Soto del Real / Guadalix de la Sierra / San Agustín del Guadalix / Buitrago del Lozoya | transaccional | P3 (un bloque por municipio) | /zona/<municipio> (nuevas, plantilla común) | por verificar |
| tramitar herencia {municipio P3} (mismos 9 municipios) | informacional | P3 | /zona/<municipio> | por verificar |

Nota: "Madrid" como municipio de `areaServed` se cubre con las páginas de servicio, no con `/zona/madrid`, para no duplicar contenido.

## Competidores observados

Observación de una sola pasada en la SERP (búsqueda pública, modo estándar, 2026-10-19). Sirve para entender el tipo de competencia, no como medición de posición.

| Tipo | Competidor | Dónde aparece | Observación |
|---|---|---|---|
| Directorio de presupuestos | Cronoshare | "abogado herencias Alcobendas", "tramitación herencia Madrid precio", "gestoría herencias Colmenar Viejo" | Páginas por municipio con patrón `/servicios/abogados-herencias/madrid/<municipio>`. En la muestra aparecen Tres Cantos, Parla, Móstoles, Arroyomolinos, Las Rozas, Fuenlabrada, Rivas, Leganés. Alcobendas y Colmenar Viejo no aparecen con ese patrón (sí una página de gestoría en Colmenar Viejo). Usa precio medio genérico. |
| Directorio | TrustLocal, Páginas Amarillas | Alcobendas, Colmenar Viejo | Listados genéricos, con poca información. |
| Guías de abogados | asesor.legal | Alcobendas, Colmenar Viejo, SS de los Reyes (plusvalía y tributario), herencia sin testamento Madrid | Competidor de contenido más fuerte en la zona. Publica guías por municipio. Algunas cifras de honorarios no están verificadas. |
| Despacho local (Alcobendas) | Vilches Abogados | "abogado herencias Alcobendas" (Trustpilot) | Presencia real en Alcobendas. Reseñas de herencias. |
| Despacho Madrid | Elías y Muñoz Abogados | Alcobendas, herencias Madrid | Tiene web de herencias en Madrid y contenido en inglés. |
| Despacho zona Oeste | SOUM Abogados (Las Rozas) | Lozoyuela (búsqueda) | Opera en Las Rozas, Majadahonda, Pozuelo, Boadilla y Madrid capital. Pocas reseñas. |
| Despacho Madrid | Asesoría Madrid (Rivas y Madrid) | Madrid | Gestión de herencias con delegaciones en Rivas y Madrid. |
| Gestoría con precio fijo | Billeo (Las Rozas) | "tramitación herencia Madrid precio" | Afirma precio fijo, unos 15 días y bonificación del 99%. Es el único con precio cerrado en la muestra. Competidor a tener en cuenta para la intención transaccional sobre precio. |
| Gestoría Colmenar Viejo | Asesoría Semcol; Legismadrid | "gestoría herencias Colmenar Viejo" | Semcol se presenta como despacho de sucesiones. Legismadrid no menciona herencias de forma expresa. |
| Calculadora / informativo | Taxdown, Bolsamania, Garrigues | "impuesto sucesiones Madrid bonificación 99%" | Dominan la intención informativa. Cifras contradictorias entre ellos (ver lagunas). |
| Institucional | Comunidad de Madrid (formularios y consultas), Ayuntamiento de Colmenar Viejo (IIVTNU), Ayuntamiento de SS de los Reyes | Impuesto, plusvalía | Fuentes oficiales que cualquier página debe citar. |
| Localización de herederos | Grupo Hereda | "herencia sin testamento Madrid" | Competidor en herencias sin herederos localizados, no en gestión clásica. |

Huecos observados en la SERP:
- **Lozoyuela**: ningún abogado de herencias local aparece. La búsqueda devuelve Wikipedia del municipio y despachos de otras zonas.
- **Sierra Norte**: sin resultados específicos. Solo trámites generales de la Comunidad de Madrid.
- **Torrelaguna**: sin directorio notarial ni despachos. Solo una resolución de la DGRN (2014) sobre la Registradora de Torrelaguna.

## Lagunas de contenido (para B1 / B2)

Ninguna de estas cifras debe publicarse sin verificarla en la fuente oficial primero.

**Estructura (B2 / desarrollo):**
1. No existen rutas `/zona/<municipio>` ni `/zona/sierra-norte`. Hace falta una plantilla común (Astro) y una entrada de datos por municipio, o reutilizar `servicios.ts` con un campo de zona. Confirmar si `[...slug].astro` ya resuelve esas rutas antes de crear nada.
2. Las páginas de servicio existentes solo se refieren a "Madrid" y a la zona de forma genérica en un párrafo. No hay enlaces internos a municipios.
3. El JSON-LD usa `areaServed` (site.ts), pero no hay páginas que respalden esos 15 municipios. Un municipio sin página no tiene peso en SEO local.

**Contenido (B1 / redacción):**
4. **Bonificación del Impuesto de Sucesiones (grupo III)**: las fuentes dan cifras distintas (25 % en Bolsamania y Garrigues, 50 % en Taxdown para fallecimientos desde el 1 de julio de 2025). Verificar en la web oficial de la Comunidad de Madrid antes de escribir cualquier porcentaje. La bonificación del 99 % para grupos I y II sí aparece de forma consistente.
5. **Plazo de liquidación del impuesto**: varias fuentes indican 6 meses desde el fallecimiento. Confirmar con la Comunidad de Madrid y con la sección de sucesiones de la Agencia Tributaria madrileña.
6. **Plazo y pago de la plusvalía municipal en herencias**: las fuentes dan 30 días (una de 2023) y 6 meses (otra). Confirmar con la ordenanza vigente de cada ayuntamiento (Colmenar Viejo publica instrucciones IIVTNU; SS de los Reyes y Alcobendas, ordenanzas propias).
7. **Sentencia del Constitucional de 2021 sobre la plusvalía**: contenido que la web ya resume en general. Falta explicar en cada página de municipio cómo se aplica.
8. **Precio**: Billeo anuncia precio fijo, y Cronoshare, precios medios genéricos. No hay página propia que explique qué incluye el presupuesto. Es una oportunidad para la intención "tramitación herencia Madrid precio".
9. **Diferencia abogado / gestoría / notaría**: varias SERP mezclan los tres. Una página que lo aclare puede captar consultas informativas que luego convierten.
10. **Sierra Norte y Lozoyuela**: sin contenido local (qué notaría corresponde, qué registro de la propiedad, qué ayuntamiento tramita la plusvalía). Es el hueco de mayor valor para B1.
11. **Herencia sin testamento**: la web dice que la declaración abintestato se formaliza ante notario, en línea con la SERP (competencia notarial según la Ley de Jurisdicción Voluntaria). Faltan el orden de llamamiento y los certificados, con enlace a la fuente oficial.

**Local (B1 / fuera del repo):**
12. Ficha de Google Business Profile por municipio prioritario (Lozoyuela, Alcobendas, SS de los Reyes, Colmenar Viejo). No se ha comprobado su existencia desde este análisis.
13. Reseñas en Trustpilot / Google en la zona, similares a las de Vilches Abogados en Alcobendas.

## Próximos pasos

- Obtener volúmenes y dificultad reales de Search Console (consultas de los últimos 3 meses, por país España) y, si hay acceso, Keyword Planner. Sustituir "por verificar" en la tabla.
- Confirmar qué resuelve `[...slug].astro` antes de proponer nuevas rutas.
- Antes de publicar cifras (bonificación, plazos, plusvalía), contrastarlas con la fuente oficial. Las del SERP no son fiables por sí solas.

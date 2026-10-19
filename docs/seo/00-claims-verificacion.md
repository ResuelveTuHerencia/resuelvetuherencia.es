# Verificación de afirmaciones y cifras públicas

Alcance: `src/`, `public/llms.txt`, `README.md` y `design.md`. Fecha de revisión: 2026-10-19.

Leyenda de clasificación:
- **VERIFICABLE**: fuente oficial conocida (BOE, BOCM, Agencia Tributaria, Código Civil, TRLHL).
- **REFORMULAR**: cierta en lo general pero imprecisa, incompleta o sin cita normativa.
- **RETIRAR**: sin fuente, no demostrable, o no coincide con la web.

Fuentes consultadas en esta revisión: búsqueda web de resultados secundarios para la bonificación del 99% y el plazo de prórroga (no se ha leído directamente el texto oficial). Enlaces de referencia a confirmar en origen: [Comunidad de Madrid](https://www.comunidad.madrid), [BOE](https://www.boe.es), [Agencia Tributaria](https://sede.agenciatributaria.gob.es).

## Tabla de afirmaciones

| Afirmación | Ubicación | Clasificación | Fuente | Acción propuesta |
|---|---|---|---|---|
| "+50 familias en Madrid ya confían en nuestra gestión" | `src/components/sections/Hero.astro:100` | RETIRAR | Ninguna en el repo | Retirar, o sustituir por un dato real del cliente con fecha y criterio de cómputo. |
| "Valoración 5/5" | `src/components/sections/Hero.astro:95` | RETIRAR | Ninguna (sin reseñas enlazadas) | Retirar o enlazar a las reseñas públicas de origen verificable. |
| "Lighthouse score cercano a 100" | `README.md:5` | RETIRAR | Ninguna (sin informe) | Retirar del README o adjuntar un informe Lighthouse reproducible. |
| "rendimiento sobresaliente" | `README.md:5` | RETIRAR | Ninguna | Sustituir por una descripción técnica sin superlativos. |
| "años de experiencia" | Búsqueda en `src/`, `public/`, `design.md`, `README.md` | No aparece | n/a | Ninguna. Si se añade en el futuro, exigir dato del cliente. |
| "bonificación del 99%" para grupos I y II | `public/llms.txt:15` | REFORMULAR (requiere revisión jurídica) | Comunidad de Madrid, Decreto Legislativo 1/2010, art. 25 (cita obtenida de resultados secundarios, no del texto oficial) | Reescribir: "bonificación del 99% de la cuota para descendientes, adoptados, cónyuges y ascendientes (grupos I y II), con condiciones". Confirmar la norma vigente en BOCM. |
| "bonificación del 99%" entre padres, hijos y cónyuges | `src/components/sections/InheritanceAssistant.astro:1406` | REFORMULAR (requiere revisión jurídica) | Igual que la fila anterior | Añadir "según grupo y condiciones". Quitar "prácticamente simbólico", que no está demostrado para todos los casos. |
| "bonificación del 99%" con grupos I y II (hijos, nietos, padres, abuelos, cónyuges) y "solo pagarán el 1%" | `src/data/faqs.ts:29` | REFORMULAR (requiere revisión jurídica) | Igual. La afirmación de "1%" es sobre la cuota bonificada, no sobre el impuesto total | Precisar "1% de la cuota resultante tras reducciones". Mantener la advertencia de presentar en plazo, con cita. |
| "La Comunidad de Madrid aplica una bonificación muy elevada" | `src/data/servicios.ts:86` | REFORMULAR | Igual | Sustituir "muy elevada" por el porcentaje y el grupo, con cita normativa. |
| Tabla de bonificación 99% (Madrid, Andalucía, Valencia, La Rioja, Murcia, Extremadura, Castilla y León, Galicia) y 100% (Cantabria, Baleares) | `src/components/sections/TaxCalculator.astro:313-323` | RETIRAR (hasta verificar cada comunidad) | No verificado para las demás comunidades | Retirar la tabla o verificar cada porcentaje con la norma autonómica vigente. Revisión jurídica obligatoria. |
| Andalucía: "bonificado al 99%" y "reducción de hasta 1.000.000 €" | `src/components/sections/InheritanceAssistant.astro:1408` | REFORMULAR (requiere revisión jurídica) | No verificado | Verificar en la norma andaluza o retirar la cifra. |
| Cataluña: bonificaciones "entre el 99% y el 57%" | `src/components/sections/InheritanceAssistant.astro:1410` | RETIRAR (sin verificar) | No verificado | Retirar la cifra o contrastarla con la norma catalana. |
| Galicia: "reducción de hasta 1.000.000 €" y "5% o menos" | `src/components/sections/InheritanceAssistant.astro:1412` | RETIRAR (sin verificar) | No verificado | Retirar o verificar con la norma gallega. |
| Plazo de 6 meses desde el fallecimiento, prorrogable 6 meses si se solicita en los primeros 5 meses | `src/data/faqs.ts:9`; `public/llms.txt:25` | REFORMULAR (requiere revisión jurídica) | Resultados secundarios coinciden en 6 + 6 meses y solicitud en 5 meses. Ninguna fuente oficial leída | Confirmar en la Comunidad de Madrid el plazo, el modo de solicitar la prórroga y el cómputo. Citar la norma. |
| "ante la Agencia Tributaria de Madrid" | `src/data/faqs.ts:9` | REFORMULAR (requiere revisión jurídica) | La Agencia Tributaria de Madrid es un organismo municipal; el ISD en la Comunidad de Madrid lo gestiona la propia Comunidad | Cambiar a "ante la Comunidad de Madrid (Dirección General de Tributos)" tras verificarlo. |
| "plazo obligatorio de 6 meses desde el fallecimiento" | `src/components/sections/InheritanceAssistant.astro:1418` | REFORMULAR | Igual que la fila anterior | Añadir "salvo prórroga" y citar la norma. |
| "Plazos" de la guía de tramitación (2 a 4 meses; 15-20 días, 30 días, 1 día, 15 días, 15-30 días) | `src/data/faqs.ts:41` | REFORMULAR | Estimación interna, sin fuente | Presentar como orientativo ("suele tardar"), sin cifras por fase, o documentar la base de la estimación. |
| "Plusvalía Municipal: debe ser pagado por los herederos que adquieren un inmueble urbano" | `src/data/faqs.ts:45`; `src/data/servicios.ts:122,139` | VERIFICABLE | TRLHL (RDLeg. 2/2004), arts. 104 y ss. (IIVTNU). Confirmar el artículo exacto de sujeto pasivo | Mantener, citando la norma. |
| "Se calcula en base al valor catastral del suelo y los años de tenencia" | `src/data/faqs.ts:45` | VERIFICABLE | TRLHL, art. 107 (confirmar en BOE) | Mantener, citando la norma. |
| "bonificaciones de hasta el 95% de la cuota para la vivienda habitual si se tramita dentro de los 6 meses" | `src/data/faqs.ts:45` | REFORMULAR (requiere revisión jurídica) | No verificado. Revisar la ordenanza fiscal del Ayuntamiento de Madrid | Confirmar en la ordenanza municipal o retirar la cifra. |
| Cálculo de plusvalía con 1,5% sobre el valor de la vivienda | `src/components/sections/TaxCalculator.astro:357-358` | RETIRAR | Sin base legal: es una estimación arbitraria | Retirar el cálculo o sustituirlo por un aviso de que la plusvalía depende del valor catastral del suelo y de los años de tenencia. Riesgo alto de cifras engañosas. |
| "Liquidamos tu Impuesto de Sucesiones y Plusvalía Municipal" y "Calculamos el Impuesto de Sucesiones y Plusvalía Municipal aplicando deducciones y bonificaciones vigentes" | `src/components/sections/Hero.astro:39`; `src/components/sections/Metodo.astro:56` | REFORMULAR | Servicio declarado por la propia web; la cifra de bonificaciones debe citarse | Mantener el servicio. Enlazar las bonificaciones a la norma. |
| "plusvalía municipal" (servicio y descripción) | `src/components/sections/Servicios.astro:192`; `src/data/servicios.ts:44,116-122`; `public/llms.txt:7,15,32` | VERIFICABLE | TRLHL (RDLeg. 2/2004), IIVTNU | Mantener. |
| "Blog" en la navegación | `design.md:51` y `design.md:106` | RETIRAR (no implementado) | `src/components/common/Navbar.astro` no contiene enlace a Blog (enlaces en líneas 35-55 y 101-121). No hay ruta de blog en `src/pages/`. Existe `docs/seo/blog/` sin contenido publicado | Quitar "Blog" del diseño o crear la sección antes de enlazarla. Revisar también el footer del diseño (línea 106 de `design.md`). |
| "consulta/sesión diagnóstica 100% gratuita" | `src/data/faqs.ts:21`; `src/pages/contacto.astro:34`; `src/components/sections/InheritanceAssistant.astro:1246` | REFORMULAR | Política comercial interna, no pública | Confirmar con el cliente que la sesión no tiene coste. Si es así, mantener con la condición. |
| "gestión de herencias 100% digitalizada" y "100% digital u online" | `src/data/faqs.ts:13`; `public/llms.txt:10` | REFORMULAR | Contradice la oferta presencial (oficina en Lozoyuela) y la firma notarial presencial | Reformular: "gestión remota, con reuniones presenciales si lo prefieres". |
| "Gestión 100% Sin Desplazamientos" | `src/components/sections/SobreNosotros.astro:72` | REFORMULAR | Igual que la fila anterior: la firma en notaría requiere presencia | Cambiar a "Reducimos los desplazamientos". |
| "La gestión puede hacerse 100% en remoto" | `src/data/servicios.ts:70` | REFORMULAR | Igual | Añadir "salvo actos que requieran presencia, como la firma en notaría". |
| "protegiendo al 100% tu patrimonio personal" (beneficio de inventario) | `src/data/faqs.ts:37` | REFORMULAR (requiere revisión jurídica) | Código Civil, arts. 1010 y ss. (beneficio de inventario). La responsabilidad se limita a los bienes heredados, no es "al 100%" en todos los casos | Reformular: "limita tu responsabilidad a los bienes heredados". Citar el CC. |
| "garantizando que no habrá sorpresas, sobrecostes de gestión ni honorarios inesperados" | `src/data/faqs.ts:21` | REFORMULAR | Promesa comercial. Los gastos de terceros (notaría, registro, tasas) pueden variar | Precisar: "presupuesto cerrado de nuestros honorarios; los gastos de terceros se indican aparte". |
| "Lighthouse" y "rendimiento" (ver filas de README) | n/a | RETIRAR | Ya cubierto arriba | Ver acción propuesta de README. |

## Notas finales

- Esto no es asesoramiento jurídico. Los textos fiscales (porcentajes de bonificación, plazos, prórrogas, plusvalía y cifras por comunidad autónoma) necesitan revisión por profesional colegiado antes de publicarse.
- Las cifras de la Comunidad de Madrid se han contrastado solo con resultados web secundarios. Antes de cambiar el texto, comprobar el texto vigente en BOCM o en la web oficial de la Comunidad de Madrid.
- Dentro de este alcance no se ha editado ningún otro fichero, ni se ha hecho commit ni push.

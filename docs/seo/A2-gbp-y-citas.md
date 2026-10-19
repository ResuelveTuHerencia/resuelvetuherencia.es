# A2 · Ficha de Google Business Profile y citas locales

Proyecto: Resuelve Tu Herencia (asesoría de herencias, Lozoyuela, Sierra Norte de Madrid).
Fecha de redacción: 2026-10-19. Fase 1 del plan de autoridad local.

**Convenciones.** "Pendiente de confirmar por el cliente" marca todo dato que no consta en el repo. "A confirmar" marca datos que sí aparecen en el sitio pero que deben validarse antes de publicarse.

**Fuentes de verificación.** Las páginas oficiales de ayuda de Google no pudieron consultarse desde el entorno de trabajo (error de resolución DNS). Las políticas citadas en este documento proceden de fuentes secundarias (ver sección 6) y deben contrastarse en support.google.com antes de aplicarlas.

---

## 1. Ficha de Google Business Profile (GBP)

### 1.1 Nombre del negocio

- **Resuelve Tu Herencia**, tal cual figura en el sitio y en los datos estructurados.
- No añadir palabras clave al nombre (por ejemplo, "Herencias Madrid"). Google lo considera incumplimiento de las directrices de nombre.

### 1.2 Categorías

| Tipo | Categoría propuesta | Comentario |
|---|---|---|
| Principal | **Asesoría fiscal** (o la equivalente que muestre el desplegable en español) | Refleja el núcleo del servicio: liquidación de impuestos y gestión fiscal de la herencia. Confirmar el nombre exacto en el desplegable de GBP. |
| Secundaria 1 | Asesor legal (o equivalente) | Cubre la parte jurídica de la sucesión: declaración de herederos, reparto y acompañamiento. |
| Secundaria 2 | Asesor financiero o de planificación patrimonial (solo si existe en el desplegable) | Encaja con la planificación del reparto que describe el sitio. Opcional. |

- **Abogado** solo como categoría principal si una persona colegiada como abogada presta de forma directa el servicio jurídico. Si no es así, no usarla: puede generar una incoherencia entre categoría y servicio. **Pendiente de confirmar por el cliente**: si hay abogado colegiado en el equipo y en qué servicios interviene.
- Máximo 9 categorías secundarias. Recomendación: no llegar a ese número; mantener solo las que describen servicios reales.

### 1.3 Servicios a dar de alta

Los cuatro servicios de `src/data/servicios.ts`, con su nombre de servicio y una descripción breve (máximo 300 caracteres por servicio, a verificar en el formulario):

| Servicio en GBP | Descripción breve propuesta | Origen |
|---|---|---|
| Tramitación de herencias en Madrid | Gestión integral del proceso sucesorio: documentación, notaría, impuestos e inscripción en el Registro. Sesión diagnóstica gratuita. | `servicios.ts` (tramitacion-herencia-madrid) |
| Impuesto de Sucesiones en Madrid | Liquidación del Impuesto de Sucesiones y Donaciones en la Comunidad de Madrid, con revisión de bonificaciones y plazos. | `servicios.ts` (impuesto-sucesiones-madrid) |
| Plusvalía municipal en una herencia | Cálculo y tramitación de la plusvalía municipal, con análisis previo de si existe incremento real de valor. | `servicios.ts` (plusvalia-municipal-herencia-madrid) |
| Herencia sin testamento en Madrid | Declaración de herederos abintestato ante notario, con certificados y reparto según la ley. | `servicios.ts` (herencia-sin-testamento-madrid) |

Servicios adicionales que el repo sí respalda (dar de alta, a confirmar):

- **Coordinación de firma de escritura con notarías de la zona norte de Madrid.** Aparece en `src/components/sections/SobreNosotros.astro`.
- **Sesión diagnóstica inicial (gratuita).** Aparece en `servicios.ts` y en la descripción. Darla de alta como servicio sin precio; no como oferta con fecha de caducidad.

No añadir precios en los servicios. El sitio no publica tarifas cerradas y un precio en GBP generaría una promesa que no está verificada. **Pendiente de confirmar por el cliente**: si quiere mostrar algún precio de referencia.

### 1.4 Atributos

Marcar solo los que sean verdad y estén disponibles para la categoría elegida:

- **Cita previa recomendada.** Dato del sitio (`MapSection.astro`). Pendiente: URL de reserva, si la hay.
- **Videoconferencia.** Atributo de atención remota, si Google lo ofrece para la categoría. Respaldado por `SobreNosotros.astro` (videoconferencia y teléfono).
- **Idiomas: español.** Pendiente de confirmar por el cliente si se atiende en otros idiomas.
- **Visitas a domicilio.** `SobreNosotros.astro` lo menciona ("a domicilio en tu municipio"). Pendiente de confirmar por el cliente si es un servicio ofrecido de forma habitual; si no lo es, no marcarlo.
- Atributos de accesibilidad (acceso para silla de ruedas, aparcamiento, etc.): **pendiente de confirmar por el cliente**; no constan en el repo.

### 1.5 Horario (a confirmar)

- Sitio (`src/components/sections/MapSection.astro`): **lunes a viernes, 09:00 - 18:00, cita previa recomendada.**
- Horario propuesto para GBP: **lunes a viernes 09:00-18:00 (a confirmar)**. Sábados, domingos y festivos: **cerrado (a confirmar)**.
- Google exige que el horario coincida con la realidad. Si la oficina atiende por cita y fuera de horario se hace gestión remota, indicarlo en la descripción o en la sección de servicios, no en el horario.
- **Pendiente de confirmar por el cliente:** horario real, si hay horario de verano, si se atiende en agosto y si hay horarios especiales en festivos.

### 1.6 Área de servicio y visibilidad de la dirección

Municipios de `src/data/site.ts` (`areaServed`), 15 en total:

1. Lozoyuela
2. Buitrago del Lozoya
3. Torrelaguna
4. La Cabrera
5. San Agustín del Guadalix
6. El Molar
7. Colmenar Viejo
8. Alcobendas
9. San Sebastián de los Reyes
10. Venturada
11. Bustarviejo
12. Miraflores de la Sierra
13. Soto del Real
14. Guadalix de la Sierra
15. Madrid

**Discrepancia a resolver.** `SobreNosotros.astro` lista solo 12 municipios: omite Soto del Real, Guadalix de la Sierra y Madrid. Antes de publicar, el cliente debe decidir si la lista oficial es la de 15 (`site.ts`) o la de 12. Esta guía usa la de `site.ts`, como indica la tarea.

Dirección visible: la oficina de Avenida de Madrid, 62 existe y atiende con cita previa. Opciones:

- **Opción A (recomendada si la oficina tiene personal en el horario publicado):** mostrar la dirección y añadir el área de servicio con los municipios anteriores. Google indica que la dirección solo debe ocultarse en negocios de área de servicio que no atienden en su local.
- **Opción B:** si la oficina no atiende al público de forma regular, configurar el negocio como área de servicio y ocultar la dirección.

**Pendiente de confirmar por el cliente:** si la oficina está atendida de forma regular, en qué horario y si recibe clientes sin cita. Esto decide entre la opción A y la B.

### 1.7 Descripción (732 caracteres, límite 750)

> Resuelve Tu Herencia es una asesoría jurídica y fiscal especializada en la tramitación integral de herencias en la Sierra Norte de Madrid. Nos encargamos del proceso completo: documentación, coordinación con la notaría (declaración de herederos o copia del testamento), adjudicación de bienes, liquidación del Impuesto de Sucesiones y, en su caso, de la plusvalía municipal, e inscripción de inmuebles. Empezamos con una sesión diagnóstica gratuita. Atendemos en nuestra oficina de Lozoyuela, por videoconferencia, y damos servicio en Alcobendas, San Sebastián de los Reyes, Colmenar Viejo, Buitrago del Lozoya y toda la Comunidad de Madrid. Revisamos bonificaciones fiscales y plazos para evitar recargos. Recomendamos cita previa.

Notas:

- Sin URL, sin teléfono y sin HTML (Google lo prohíbe en la descripción).
- Sin promociones ni precios.
- Las palabras clave locales están integradas en el texto: Sierra Norte de Madrid, Lozoyuela, Alcobendas, San Sebastián de los Reyes, Colmenar Viejo, Buitrago del Lozoya, Impuesto de Sucesiones, plusvalía municipal, declaración de herederos.
- Los primeros 250 caracteres son los que se muestran sin pulsar "Más". Ya contienen la propuesta de valor y la zona.
- Revisar de nuevo si el cliente cambia el horario, la lista de municipios o los servicios.

### 1.8 Fotos recomendadas

| Foto | Descripción | Estado |
|---|---|---|
| Logo | Versión cuadrada en alta resolución, sin texto cortado. El repo importa el logo en Navbar y Footer, pero el original no está en `public/`. | Pendiente de confirmar por el cliente (pedir el original) |
| Portada | Fachada de Avenida de Madrid, 62, con luz natural. La imagen `public/og-image.png` del repo es una candidata solo si el cliente la aprueba como foto real del negocio; no es fotografía de local. | Pendiente de confirmar por el cliente |
| Interior | Sala de atención o mesa de reuniones de la oficina. | Pendiente de confirmar por el cliente |
| Equipo | Fotografía de las personas que atienden, con consentimiento escrito. | Pendiente de confirmar por el cliente |
| Entorno | Lozoyuela o la Sierra Norte, si el cliente quiere reforzar la zona. Solo fotos propias o con licencia. | Pendiente de confirmar por el cliente |
| Documentos ilustrativos | Fotos genéricas de una mesa con documentación, sin datos personales ni expedientes reales. | Pendiente de confirmar por el cliente |

Reglas: fotos reales y recientes, sin stock, sin texto promocional superpuesto, sin datos de clientes ni de expedientes en ningún documento visible.

### 1.9 Publicaciones quincenales (3 ejemplos)

Cadencia: una publicación cada 15 días, alternando formato (información, servicio, invitación). Sin precios, sin promesas de plazo y sin datos de clientes.

**Publicación 1 · Documentación**

> ¿Qué documentos suelen pedirse para tramitar una herencia? Normalmente, el certificado de defunción, la relación de bienes y derechos (inmuebles, cuentas, seguros de vida) y los datos de cada heredero. En la sesión diagnóstica gratuita revisamos qué hace falta en tu caso. Cita previa.

**Publicación 2 · Plazos**

> El Impuesto de Sucesiones tiene un plazo legal que empieza con el fallecimiento. Si no es posible cumplirlo, puede solicitarse una prórroga dentro del plazo inicial. Revisamos las fechas de tu caso desde la primera sesión para evitar recargos e intereses de demora.

Antes de publicar: confirmar el plazo exacto y su forma de cómputo en la normativa vigente de la Comunidad de Madrid, y revisarlo con el cliente.

**Publicación 3 · Sin testamento**

> ¿El fallecido dejó testamento? Antes de empezar, consultamos el Registro General de Actos de Última Voluntad. Si no hubo testamento, la declaración de herederos abintestato se formaliza ante notario, y nosotros preparamos la documentación y coordinamos la cita.

---

## 2. Citas y directorios

### 2.1 NAP canónico (usar siempre idéntico)

- **Nombre:** Resuelve Tu Herencia
- **Dirección:** Avenida de Madrid, 62, 28752 Lozoyuela, Madrid
- **Teléfono:** +34 613 95 50 69
- **Email:** agnresuelvetuherencia@gmail.com
- **Web:** https://resuelvetuherencia.es

Concordancia con el repo: `src/components/common/Footer.astro`, `src/components/sections/MapSection.astro` y los datos estructurados de `src/layouts/RootLayout.astro` usan la misma dirección, teléfono y email.

### 2.2 Plataformas

Los métodos de verificación indicados son orientativos, procedentes de fuentes secundarias. Confirmar el método que ofrece cada plataforma en el momento del alta.

| Plataforma | Tipo de alta | NAP a usar | Verificación | Notas |
|---|---|---|---|---|
| Google Business Profile | Ficha principal | Canónico | Google decide el método según categoría y dirección: tarjeta postal, llamada/SMS, vídeo o instantánea. Las fuentes consultadas indican que la tarjeta postal es cada vez menos frecuente. | Ver sección 1. Es la ficha madre del resto de citas. |
| Bing Places | Ficha; permite importar desde GBP | Canónico | A comprobar en el alta (teléfono o SMS, o tarjeta postal, según la plataforma). | Importar desde GBP para evitar duplicados. |
| Apple Business Connect | Ficha propia | Canónico | A comprobar en el alta (llamada o SMS al número de contacto, o email del dominio si aplica). | Importante para Apple Maps y Siri. |
| Páginas Amarillas | Ficha de empresa | Canónico | A comprobar en el alta (email y/o teléfono). | Revisar que la categoría no duplique otra ficha existente. |
| Páginas Blancas | Ficha de empresa | Canónico | A comprobar en el alta. | Opcional, baja prioridad. |
| Cámara de Comercio de Madrid | Directorio de empresas asociadas | Canónico | Requiere ser empresa registrada o socio. | **Solo si el negocio es miembro.** Pendiente de confirmar por el cliente. |
| Ayuntamiento de Lozoyuela | Directorio o guía de comercio local | Canónico | Verificar si existe el directorio antes de solicitar alta. | Sin confirmación de existencia del directorio. |
| Ayuntamientos de Buitrago del Lozoya, Torrelaguna, Colmenar Viejo, Alcobendas y San Sebastián de los Reyes | Directorios de empresas locales, si existen | Canónico | Verificar caso por caso. | Prioridad: Colmenar Viejo, Alcobendas y San Sebastián de los Reyes, por volumen de población. |
| Directorios de la Sierra Norte (asociaciones empresariales, entidades de turismo o promoción comarcal) | Directorio comarcal | Canónico | Verificar si existen y si admiten empresas de servicios profesionales. | No dar de alta en directorios que no tengan entidad clara. |
| Colegios profesionales (Colegio de Abogados de Madrid, Colegio de Economistas de Madrid, Colegio de Gestores Administrativos de Madrid, entre otros) | Directorio de colegiados o empresas colegiadas | Canónico | Solo si el negocio o sus profesionales están colegiados. | **Solo si es miembro.** Pendiente de confirmar por el cliente. |

### 2.3 Reglas de consistencia

- El NAP debe escribirse exactamente igual en todas las plataformas: mismo nombre, misma dirección con "Avenida de Madrid, 62" (no "Av. Madrid" ni "C/ Madrid"), mismo teléfono con prefijo +34, mismo email.
- No usar teléfonos alternativos ni números de móvil personales en las fichas de directorio.
- Si el cliente cambia de teléfono o de dirección, se corrige en GBP primero y después en el resto.

---

## 3. Reseñas

### 3.1 Políticas que aplican

Fuentes secundarias (ver sección 6). Contrastar con la política oficial de contenido de reseñas de Google:

- Está prohibido ofrecer cualquier beneficio a cambio de reseñas: descuentos, regalos, sorteos, puntos de fidelidad o condiciones especiales. Aplica también a reseñas negativas.
- No se puede filtrar a los clientes: pedir reseña solo a los satisfechos y no a los demás se considera "review gating". Hay que pedirla a todos los clientes que terminan el encargo, sin selección.
- No se pueden fijar cuotas ni incentivos para el personal por número de reseñas.
- Sí se puede pedir reseña. La solicitud debe hacerse de forma neutral, después de la prestación del servicio, y sin condicionar nada a la opinión.
- Google puede retirar reseñas y restringir el perfil si detecta incentivos.

### 3.2 Política interna de reseñas

- Solicitar reseña a **todos** los clientes que cierran un encargo, sin excepciones, por correo o mensaje posterior al cierre.
- No pedir reseñas en la firma de escritura, en la notaría ni en presencia de terceros.
- No mencionar en la solicitud ningún beneficio, descuento o compensación.
- No pedir a familiares, amigos ni personal que dejen reseñas.
- Responder a todas las reseñas, positivas y negativas, en un plazo razonable (sin comprometer tiempos concretos en el texto público).
- **Confidencialidad:** en ninguna respuesta se confirma que una persona es cliente, ni se comenta ningún expediente, dato fiscal, patrimonial o familiar. Es un negocio sujeto a secreto profesional y a protección de datos.

### 3.3 Plantillas de respuesta

**Reseña positiva (4-5 estrellas)**

> Gracias, [nombre o "por tu valoración"]. Nos alegra que el proceso te haya resultado claro y cercano. Seguimos a tu disposición para cualquier duda. Un saludo, el equipo de Resuelve Tu Herencia.

**Reseña neutra (3 estrellas)**

> Gracias por tu valoración y por comentarnos tu experiencia. Tomamos nota de lo que mencionas sobre [aspecto general: por ejemplo, plazos de comunicación o claridad de la documentación] y lo tendremos en cuenta para mejorar. Si quieres comentarnos algo con más detalle, puedes escribirnos a agnresuelvetuherencia@gmail.com. Un saludo.

**Reseña negativa (1-2 estrellas)**

> Lamentamos que tu experiencia no haya sido la esperada. Nos gustaría entender lo ocurrido para revisarlo con calma. Puedes contactarnos en agnresuelvetuherencia@gmail.com o en el +34 613 95 50 69. Por confidencialidad, no podemos comentar detalles de ningún expediente en este espacio público. Un saludo, el equipo de Resuelve Tu Herencia.

Reglas para la respuesta negativa: no discutir, no atribuir culpas, no borrar ni pedir que se borre la reseña a cambio de nada, y no responder en caliente.

### 3.4 Texto de solicitud de reseña al cliente

Enviar por correo o mensaje a **todos** los clientes que terminan el encargo, una vez cerrado. El enlace de reseña se genera desde la ficha de GBP (función "Pedir reseña"); sustituir `[ENLACE DE RESEÑA]`.

> Asunto: Gracias por confiar en Resuelve Tu Herencia
>
> Hola [nombre]:
>
> Gracias por confiar en nosotros para la tramitación de la herencia de [nombre del causante, o "su familiar"]. Hemos cerrado el encargo y quedamos a tu disposición para cualquier duda posterior.
>
> Si la experiencia te ha resultado útil, nos ayudaría mucho que dejaras tu opinión en Google. Puedes hacerlo aquí: [ENLACE DE RESEÑA]
>
> Tu opinión ayuda a otras familias de la Sierra Norte a saber qué esperar del proceso. Es totalmente opcional y no condiciona nada de nuestro servicio.
>
> Un saludo,
> [firma del profesional]
> Resuelve Tu Herencia · +34 613 95 50 69

Reglas para la solicitud: no usar el nombre del causante si el cliente no lo ha autorizado, no enviar la solicitud en momentos de duelo reciente (esperar a cerrar el encargo), y no reenviar tras una negativa.

---

## 4. Pendiente de confirmar por el cliente

| Dato | Motivo | Donde se usa |
|---|---|---|
| Horario real y horario de verano, festivos y agosto | No consta en el repo como dato verificado; solo aparece en `MapSection.astro` | Ficha GBP, sección 1.5 |
| Fotos (logo original, fachada, interior, equipo, entorno) | No hay fotografías del negocio en el repo | Ficha GBP, sección 1.8 |
| Año de fundación | No aparece en el repo | Descripción y atributo "Fecha de inicio", si GBP lo pide |
| Número de empleados o de profesionales | No aparece en el repo | Descripción (no incluido), ficha |
| Si hay abogado colegiado y en qué servicios interviene | Afecta a la categoría principal | Sección 1.2 |
| Membresía en Cámara de Comercio y colegios profesionales | Solo se dan de alta si es miembro | Sección 2.2 |
| Oficina atendida de forma regular (dirección visible u oculta) | Decide entre opción A y B | Sección 1.6 |
| Lista oficial de municipios (15 de `site.ts` o 12 de `SobreNosotros.astro`) | Hay discrepancia en el repo | Sección 1.6 |
| Visitas a domicilio como servicio habitual | Mencionado en el sitio, no confirmado | Atributos, sección 1.4 |
| Precios de referencia | No publicados en el sitio | Sección 1.3 (decisión de no publicarlos) |
| Plazo legal exacto del Impuesto de Sucesiones para la publicación 2 | Verificar normativa vigente antes de publicar | Sección 1.9 |
| URL de reserva de cita previa, si existe | No consta en el repo | Atributos, sección 1.4 |

---

## 5. Orden de ejecución sugerido

1. Confirmar con el cliente las decisiones de la sección 4 (sobre todo horario, dirección visible, categoría y municipios).
2. Crear o reclamar la ficha de GBP con el nombre exacto y el NAP canónico.
3. Completar categorías, servicios, atributos, horario y área de servicio.
4. Publicar la descripción (sección 1.7) y subir las fotos aprobadas.
5. Completar la verificación de GBP y, después, dar de alta Bing Places (importando desde GBP) y Apple Business Connect.
6. Dar de alta Páginas Amarillas y directorios locales. Cámara de Comercio y colegios solo si el negocio es miembro.
7. Activar la solicitud de reseñas (sección 3.4) para los encargos que se cierren a partir de ese momento.
8. Publicar la primera publicación de GBP y establecer la cadencia quincenal.

---

## 6. Fuentes

Fuentes secundarias consultadas (no se pudo acceder a las páginas oficiales de Google):

- Política de reseñas, incentivos y solicitud: https://tynmagazine.com/?p=225859 · https://www.wisevu.com/blog/google-review-policy-update-for-businesses/ · https://www.dacgroup.com/?p=155617 · https://robbenmedia.com/how-to-incentivize-google-reviews-legal-strategies-that-actually-work-in-2025/
- Descripción (límite de 750 caracteres, sin URL ni HTML, ocultar dirección en área de servicio): https://support.google.com/business/answer/3038177?hl=en (ruta oficial citada en resultados de búsqueda, no leída directamente) · https://www.brightlocal.com/learn/google-business-profile-description/
- Verificación (métodos, tarjeta postal en retroceso, vídeo como método habitual en 2026): https://www.digitalapplied.com/blog/google-business-profile-verification-methods · https://www.jxtgroup.com/?p=3922907 · https://daltonluka.com/blog/google-my-business-verification

Fuentes internas del repo:

- `src/data/site.ts` (municipios de la zona de servicio)
- `src/data/servicios.ts` (los cuatro servicios)
- `src/components/sections/MapSection.astro` (dirección y horario)
- `src/components/sections/SobreNosotros.astro` (atención remota, notarías, 12 municipios)
- `src/components/common/Footer.astro` (NAP)
- `src/layouts/RootLayout.astro` (datos estructurados del negocio)

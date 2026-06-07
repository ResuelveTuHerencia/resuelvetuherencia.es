# MVP DE REDISEÑO WEB DE ALTA CONVERSIÓN – RESUELVE TU HERENCIA
**Estatus del Proyecto:** Plan de Arquitectura y Estrategia de Crecimiento Digital  
**Consultor de Élite:** Architect Pro (Socio Estratégico de Guadatech)  
**Stack Tecnológico Seleccionado:** Astro + Tailwind CSS + shadcn/ui (Sitio Estático Ultra-Optimizado)  
**Enfoque de Negocio:** Asesoría Integral Especializada en Sucesiones y Gestión Patrimonial (No Bufete de Abogados)  
**Ámbito de Actuación:** Comunidad de Madrid (Foco en Madrid Capital y Zona Norte / Sierra de Madrid)

---

## 1. FICHA TÉCNICA Y REPOSICIONAMIENTO DE NEGOCIO
Para maximizar las ventas, eliminamos la percepción de "despacho de abogados tradicional, lento y litigioso" y nos posicionamos como una **Asesoría de Gestión de Herencias Ágil, Humana y Eficiente**.

*   **Modelo de Negocio:** Tramitación de herencias "llave en mano", liquidación fiscal óptima de sucesiones, mediación familiar extrajudicial y gestión documental integral.
*   **Propuesta de Valor Core:** "Hacemos que tramitar una herencia en Madrid sea un proceso sencillo, rápido y sin sorpresas fiscales, protegiendo la tranquilidad y el patrimonio de tu familia."
*   **Público Objetivo:** Herederos que buscan delegar toda la burocracia, personas que necesitan liquidar el Impuesto de Sucesiones en la Comunidad de Madrid y familias en el Norte de Madrid que requieren una gestión cercana y experta.

---

## 2. INVESTIGACIÓN ESTRATÉGICA SEO (Keywords & Enfoque Localizado)
El tráfico orgánico se estructurará bajo una estrategia de **clústeres locales** para dominar Madrid Capital y capturar el mercado de alto poder adquisitivo de la zona Norte/Sierra.

### A. Palabras Clave Principales (Alta Intención de Transacción)
*   *Gestión herencias Madrid*, *tramitación de herencias en Madrid*, *asesoría herencias Madrid norte*.
*   *Liquidar impuesto de sucesiones Madrid*, *plusvalía municipal Madrid herencia*.
*   *Asesores expertos en herencias Sierra de Madrid*, *gestión de herencias Alcobendas / San Sebastián de los Reyes / Colmenar Viejo*.

### B. Palabras Clave Secundarias / Informacionales (Captación en Fase Temprana)
*   *Pasos para tramitar una herencia en Madrid*, *cuánto se paga por herencia en Madrid*, *qué pasa si un heredero no quiere firmar*.
*   *Plazo para liquidar sucesiones en la Comunidad de Madrid*, *cómo hacer testamento en la sierra de Madrid*.

### C. Enfoque Estratégico Localizado
La web dispondrá de páginas de aterrizaje hiper-locales. El usuario de la Sierra de Madrid o de municipios del norte busca un servicio próximo que evite desplazamientos innecesarios al centro de la capital. Resaltaremos la cercanía, el conocimiento de las normativas de los ayuntamientos locales para las plusvalías y la opción de atención digital o presencial.

---

## 3. ARQUITECTURA DE FICHEROS (Estructura del Proyecto Astro)
Astro nos proporciona un rendimiento óptimo de carga (100% en Lighthouse) al eliminar JavaScript del navegador por defecto y renderizar todo de forma estática en el servidor (SSG).

```text
resuelvetuherencia-web/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/                 # Componentes atómicos de shadcn/ui
│   │   ├── sections/           # Secciones modulares de las páginas
│   │   └── common/             # Elementos comunes reutilizables
│   ├── layouts/
│   │   └── RootLayout.astro    # Layout principal de la web
│   ├── pages/
│   │   ├── index.astro         # Home - Embudo Principal
│   │   ├── servicios/
│   │   │   ├── index.astro     # Listado de servicios
│   │   │   ├── tramitacion.astro
│   │   │   └── optimizacion-fiscal.astro
│   │   ├── localizaciones/
│   │   │   ├── madrid-centro.astro
│   │   │   └── madrid-norte-sierra.astro
│   │   └── contacto.astro      # Página de conversión directa
│   └── styles/
│       └── globals.css         # Configuración y variables de Tailwind
├── astro.config.mjs
├── tailwind.config.js
└── package.json
```

---

## 4. ESTRUCTURA DE COMPONENTES Y LAYOUT

### A. RootLayout (`src/layouts/RootLayout.astro`)
El contenedor global del sitio que garantiza la consistencia visual y la velocidad de carga.
*   **Metadatos Avanzados (SEO OpenGraph):** Configuración automatizada de títulos, descripciones geolocalizadas y etiquetas sociales.
*   **Inyección de Tipografías:** Carga optimizada de fuentes tipográficas para evitar bloqueos visuales durante el renderizado.
*   **Estructura Semántica:** Envoltura que incluye el encabezado de navegación, el área de contenido dinámico principal y el pie de página institucional.

### B. Componentes Comunes (`src/components/common/`)
*   **Navbar (Navegación):** Diseño minimalista, fijo en la parte superior con un sutil desenfoque de fondo. En su versión móvil se transforma en un menú desplegable limpio con acceso prioritario al botón de contacto.
*   **Footer (Pie de página):** Organización de enlaces por categorías de servicios, áreas geográficas de actuación en Madrid y enlaces legales obligatorios, reforzando la seriedad de la asesoría.
*   **CTA_Banner (Llamada a la Acción):** Bloque intercalado que invita al usuario a reservar su sesión diagnóstica gratuita.

### C. Componentes de la Interfaz (`src/components/ui/` - Basados en shadcn/ui)
*   **Button:** Variantes estilizadas (principal en tono corporativo oscuro, secundario en tono claro) con bordes ligeramente redondeados para dar un aire moderno pero formal.
*   **Card:** Tarjetas con sombras suaves y bordes limpios para estructurar los servicios o las etapas del proceso.
*   **Accordion:** Menú colapsable optimizado para la sección de Preguntas Frecuentes (FAQ), permitiendo una lectura limpia sin saturar la pantalla del móvil.
*   **Dialog / Modal:** Ventanas emergentes nativas y ligeras para albergar el formulario de contacto rápido sin redirigir al usuario.

---

## 5. DISEÑO VISUAL, PSICOLOGÍA Y DIRECCIÓN DE ARTE
El diseño huye de las webs legales oscuras, recargadas y barrocas. Buscamos transmitir un entorno de **paz mental, claridad, transparencia y modernidad**.

*   **Paleta de Colores (Seriedad + Calidez):**
    *   *Color Primario Dominante:* Azul Marino Profundo (Confianza, rigor institucional, seguridad jurídica).
    *   *Color Secundario:* Gris Piedra Suave / Blanco Roto (Claridad, limpieza visual, modernidad).
    *   *Color de Acento:* Dorado Atenuado / Champagne (Exclusividad, excelencia en la gestión, valor patrimonial).
*   **Tipografía (Legibilidad y Prestigio):**
    *   *Encabezados:* Serif moderna y elegante, que denota solidez y experiencia de asesoría de alto nivel.
    *   *Cuerpo de Texto:* Sans-serif geométrica altamente legible, especialmente optimizada para pantallas móviles.
*   **Estilo Visual General:** Uso generoso de espacios en blanco, líneas finas y limpias (estilo shadcn), imágenes reales y luminosas que evoquen tranquilidad familiar tras resolver un problema complejo.

---

## 6. DESCRIPCIÓN DE LOS APARTADOS DE LA WEB (Páginas y Secciones)

### A. Página de Inicio (Home - El Embudo de Conversión)
Diseñada bajo la estructura psicológica de ventas para retener y convertir al usuario de inmediato.
*   **Sección Hero (Impacto Inicial):** Título contundente centrado en el beneficio del cliente. Imagen de fondo limpia. Dos llamadas a la acción claras: "Solicitar Asesoramiento Gratuito" y "Ver Servicios". Optimizado para que en móviles el botón de contacto quede al alcance del pulgar.
*   **Sección de Empatía y Dolor:** Breve bloque donde se exponen las dudas más comunes del cliente ("¿Abrumado por el papeleo?", "¿Preocupado por los impuestos de la Comunidad de Madrid?"). Sirve para conectar y demostrar que entendemos su situación.
*   **Sección del Método (El Proceso en 3 Pasos):** Bloque visual interactivo que simplifica el servicio: 
    1. *Diagnóstico Inicial Gratuito*, 2. *Recopilación y Tramitación Eficiente*, 3. *Liquidación y Descanso Familiar*.
*   **Sección de Servicios Destacados:** Tarjetas limpias que enlazan a las especialidades (Aceptación, Impuestos, Testamentos).
*   **Sección de Autoridad Local (Madrid y Sierra Norte):** Explicación explícita de por qué somos expertos en la legislación fiscal de la Comunidad de Madrid y cómo ayudamos tanto a clientes del centro de la capital como a residentes en la Sierra.
*   **Sección de Prueba Social:** Testimonios reales de clientes que destacan la rapidez, la cercanía y el ahorro de dinero en impuestos.
*   **Sección de FAQ (Preguntas Frecuentes):** Desplegables rápidos sobre plazos, costes y documentación para resolver objeciones antes del contacto.

### B. Páginas de Servicios Detallados
Cada servicio cuenta con su propia landing page estática para capturar búsquedas específicas en Google.
*   **Tramitación Integral de Herencias:** Explicación del servicio "llave en mano", desde la obtención del certificado de defunción hasta la firma en notaría.
*   **Optimización Fiscal (Impuesto de Sucesiones):** Enfoque directo en el ahorro de dinero. Explicación de las bonificaciones existentes en la Comunidad de Madrid explicadas de forma sencilla para el ciudadano de a pie.

### C. Páginas de Localización (Foco en SEO Local)
Páginas optimizadas para capturar el tráfico geográfico.
*   **Asesoría de Herencias en Madrid Centro:** Orientado a la gestión ágil, plusvalías del Ayuntamiento de Madrid y firma con notarías céntricas.
*   **Asesoría de Herencias en la Sierra / Madrid Norte:** Enfoque en la comodidad, servicio a domicilio o digital para municipios como Colmenar Viejo, San Agustín del Guadalix, Tres Cantos, etc., destacando que no necesitan desplazarse a Madrid centro para resolver sus trámites patrimoniales.

### D. Página de Contacto Integrada
*   Formulario de contacto de alta fricción positiva (pide los datos justos para poder clasificar el caso: Nombre, Teléfono, Municipio de Madrid y Tipo de Consulta).
*   Información visible de contacto directo (Teléfono, Correo y enlace directo a WhatsApp Business) para usuarios que exigen inmediatez.

---

## 7. SIGUIENTE PASO PROACTIVO PARA GUADATECH
Este MVP de arquitectura define con precisión el alcance técnico y estratégico del nuevo sitio estático. El siguiente paso lógico es presentar este plan estructural al cliente junto con un prototipo visual básico de la sección *Hero* para cerrar el contrato de desarrollo web y comenzar la fase de despliegue de la plataforma en Astro.

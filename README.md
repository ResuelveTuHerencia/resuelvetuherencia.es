# ⚖️ Resuelve Tu Herencia

> **Página web estática de alta conversión para "Resuelve Tu Herencia"** – Asesoría integral especializada en la tramitación de herencias, sucesiones y gestión patrimonial en la Comunidad de Madrid.

Desarrollada utilizando **Astro**, **Tailwind CSS** y **TypeScript** con un enfoque principal en SEO avanzado, rendimiento sobresaliente (Lighthouse score cercano a 100) y seguridad robusta.

---

## 🛠️ Pila Tecnológica (Tech Stack)

*   **Framework:** [Astro v6](https://astro.build/) (Generación Estática - SSG)
*   **Estilos:** [Tailwind CSS v3](https://tailwindcss.com/)
*   **Lenguaje:** [TypeScript](https://www.typescript.org/)
*   **Integración de Formularios:** [Web3Forms](https://web3forms.com/) (Envío directo de leads)
*   **SEO & Estructura:** JSON-LD local business y FAQ Schema integrados para posicionamiento AEO/GEO/SEO.

---

## 📂 Estructura del Proyecto

```text
├── .astro/                 # Directorio interno de caché de Astro
├── public/                 # Recursos estáticos públicos (Favicon, robots.txt, llms.txt)
├── src/
│   ├── assets/             # Imágenes y assets multimedia optimizados
│   ├── components/         # Componentes modulares y reutilizables
│   │   ├── common/         # Navbar, Footer
│   │   └── sections/       # Secciones del landing (Hero, FAQs, Metodo, Contacto, etc.)
│   ├── layouts/            # Plantilla base (RootLayout.astro con SEO y Metadatos)
│   ├── pages/              # Páginas principales y rutas (Index, Aviso Legal, Cookies, Privacidad)
│   └── styles/             # Ficheros CSS globales e inicialización de Tailwind
├── .env.template           # Plantilla para variables de entorno locales
├── .env                    # Configuración de variables locales (ignorado por Git)
├── .gitignore              # Reglas de exclusión de ficheros en el control de versiones
├── astro.config.mjs        # Configuración central del framework Astro
├── package.json            # Script del proyecto y dependencias
├── tailwind.config.mjs     # Configuración de Tailwind (paleta de colores primarios y dorados)
└── tsconfig.json           # Configuración del compilador de TypeScript
```

---

## 🚀 Inicio Rápido (Local Development)

Sigue estos pasos para levantar el entorno de desarrollo localmente:

### Prerrequisitos

Asegúrate de contar con [Node.js](https://nodejs.org/) y el gestor de paquetes `pnpm` instalados en tu sistema.

### 1. Clonar e Instalar Dependencias

```bash
pnpm install
```

### 2. Configurar Variables de Entorno

Copia el archivo de plantilla `.env.template` como `.env` e introduce tu clave de acceso de Web3Forms (puedes obtener una clave gratuita en [web3forms.com](https://web3forms.com)):

```bash
cp .env.template .env
```

Edita `.env` y define tu clave:
```env
WEB3FORMS_ACCESS_KEY=tu-access-key-de-web3forms
```

### 3. Levantar Servidor de Desarrollo

Inicia el servidor local de desarrollo:

```bash
pnpm dev
```
El sitio estará disponible en [http://localhost:4321](http://localhost:4321).

### 4. Compilar para Producción

Para generar el build estático y optimizado en el directorio `dist/`:

```bash
pnpm build
```

---

## 🔒 Características de Seguridad (SAST Implementada)

El proyecto ha sido sometido a una auditoría estática de seguridad de caja blanca bajo las metodologías de **OWASP Top 10** y **ASVS v4.0 Nivel 3**:

*   **Evitación de Fuga de Credenciales:** La API key de Web3Forms no está hardcodeada; se carga dinámicamente durante el build utilizando variables de entorno de Astro (`import.meta.env`).
*   **Honeypot Anti-Spam:** Se incluye un campo oculto `botcheck` para detectar e interceptar envíos de bots automatizados de forma transparente para los humanos.
*   **Validaciones Regex en Cliente:** Los campos sensibles (`Nombre`, `Teléfono`, `Municipio`) contienen patrones de caracteres muy estrictos que evitan payloads imprevistos en el navegador.
*   **Control de Inyección Script (XSS/SQLi):** Un script nativo intercepta el formulario en el submit para prevenir caracteres HTML especiales y de formateo (`<`, `>`, `&`, `=`), abortando solicitudes con cargas potencialmente maliciosas.

---

## 📄 Licencia

Este proyecto es propiedad privada de **Resuelve Tu Herencia**. Todos los derechos reservados.

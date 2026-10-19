// Páginas de zona por municipio (/zona/<slug>).
// PUBLICACIÓN CONTROLADA: todas las entradas llevan `publicado: false`. Solo las que
// tengan `publicado: true` generan página (ver getStaticPaths en src/pages/zona/[municipio].astro).
// No poner un municipio en true hasta que el cliente confirme los datos marcados con TODO.
// Fuente de la lista y del orden de oleadas: docs/seo/B1-municipios-propuesta.md

import { servicios } from './servicios';

export interface DatoLocal {
  /** Hecho verificable y específico del municipio (notaría, Registro, juzgado, ayuntamiento...). */
  texto: string;
  /** Fuente comprobable (URL o referencia oficial). Obligatoria: sin fuente no se renderiza. */
  fuente: string;
}

export interface BloqueServicio {
  /** Slug de src/data/servicios.ts. */
  slug: string;
  /** Texto breve de este servicio aplicado al municipio. */
  texto: string;
}

export interface Municipio {
  slug: string;
  nombre: string;
  /** Habitantes (padrón). null si no hay cifra fiable: entonces no se muestra. */
  poblacion: number | null;
  /** Origen y estado del dato de población, tal como figura en B1. */
  fuenteDato: string;
  /** Distancia aproximada en línea recta desde la oficina de Lozoyuela. */
  distanciaKm: number;
  oleada: 1 | 2 | 'hub';
  publicado: boolean;
  /** Es Madrid capital: página hub sin distritos. */
  esHub?: boolean;
  intro: string;
  bloques: BloqueServicio[];
  /** Datos locales reales aportados por el cliente. Vacío = no se renderiza el bloque. */
  datoLocal: DatoLocal[];
  faqs: { question: string; answer: string }[];
}

export const OFICINA = {
  nombre: 'Resuelve Tu Herencia',
  direccion: 'Avenida de Madrid, 62, 28752 Lozoyuela',
};

// Texto por servicio: describe qué hacemos, sin afirmar nada sobre instituciones locales.
const textosServicio: Record<string, (n: string) => string> = {
  'tramitacion-herencia-madrid': (n) =>
    `Si la persona fallecida residía o tenía bienes en ${n}, nos ocupamos de la tramitación completa de la herencia: documentación, partición, escritura y liquidación de impuestos.`,
  'impuesto-sucesiones-madrid': (n) =>
    `Preparamos y presentamos la liquidación del Impuesto de Sucesiones y Donaciones de los herederos con inmuebles o cuentas vinculados a ${n}.`,
  'plusvalia-municipal-herencia-madrid': (n) =>
    `Calculamos y gestionamos la plusvalía municipal (IIVTNU) de los inmuebles heredados en ${n}, que se liquida ante el ayuntamiento donde se encuentra el inmueble.`,
  'herencia-sin-testamento-madrid': (n) =>
    `Si un familiar de ${n} falleció sin testamento, te guiamos en la declaración de herederos abintestato y en el reparto posterior.`,
};

function bloquesPara(nombre: string): BloqueServicio[] {
  return servicios
    .filter((s) => textosServicio[s.slug])
    .map((s) => ({ slug: s.slug, texto: textosServicio[s.slug](nombre) }));
}

function faqsPara(nombre: string, km: number): Municipio['faqs'] {
  return [
    {
      question: `¿Atendéis herencias de ${nombre}?`,
      answer: `Sí. Atendemos de forma digital (teléfono, videollamada y documentación por correo o WhatsApp) y de forma presencial en nuestra oficina de ${OFICINA.direccion}, a unos ${km} km en línea recta de ${nombre} (distancia aproximada).`,
    },
    {
      question: `¿Qué ayuntamiento cobra la plusvalía de una herencia en ${nombre}?`,
      answer: `La plusvalía municipal la liquida el ayuntamiento del municipio donde está el inmueble heredado. Si el inmueble está en ${nombre}, se presenta ante su ayuntamiento; plazos e importes dependen de su ordenanza fiscal, que revisamos en cada caso.`,
    },
  ];
}

function crear(
  m: Pick<Municipio, 'slug' | 'nombre' | 'poblacion' | 'fuenteDato' | 'distanciaKm' | 'oleada'>,
): Municipio {
  return {
    ...m,
    publicado: false,
    intro: `Si has heredado en ${m.nombre} o tu familia es de allí, puedes tramitar la herencia con Resuelve Tu Herencia sin desplazamientos innecesarios: trabajamos por vía digital y, cuando hace falta, en persona en nuestra oficina de Lozoyuela, a unos ${m.distanciaKm} km en línea recta de ${m.nombre}.`,
    bloques: bloquesPara(m.nombre),
    // TODO(cliente): aportar datos locales reales con fuente (notaría/s que usan habitualmente,
    // Registro de la Propiedad y juzgado que corresponden, ayuntamiento y oficina de plusvalía).
    datoLocal: [],
    faqs: faqsPara(m.nombre, m.distanciaKm),
  };
}

export const municipios: Municipio[] = [
  // ---- Oleada 1 ----
  // TODO(cliente): confirmar padrón INE 2025 (B1: ~13.825, fuente secundaria) y cobertura real en el municipio.
  crear({ slug: 'san-agustin-del-guadalix', nombre: 'San Agustín del Guadalix', poblacion: 13825, fuenteDato: 'Fuente secundaria (INE 2025, vía Wikipedia); pendiente de contrastar con el INE', distanciaKm: 37, oleada: 1 }),
  // TODO(cliente): confirmar padrón (B1: ~9.970-9.999, fuente secundaria).
  crear({ slug: 'el-molar', nombre: 'El Molar', poblacion: 9970, fuenteDato: 'Fuente secundaria (rango 9.970-9.999); pendiente de contrastar con el INE', distanciaKm: 25, oleada: 1 }),
  // Dato verificado en B1 (feb. 2025).
  crear({ slug: 'guadalix-de-la-sierra', nombre: 'Guadalix de la Sierra', poblacion: 6904, fuenteDato: 'Verificado, feb. 2025 (B1)', distanciaKm: 20, oleada: 1 }),
  // TODO(cliente): B1 no tiene cifra fiable (~50.000 estimado). Se deja sin población hasta verificar.
  crear({ slug: 'colmenar-viejo', nombre: 'Colmenar Viejo', poblacion: null, fuenteDato: 'Por verificar', distanciaKm: 35, oleada: 1 }),
  // ---- Oleada 2 ----
  // TODO(cliente): confirmar padrón (B1: ~9.648, fuente secundaria).
  crear({ slug: 'manzanares-el-real', nombre: 'Manzanares el Real', poblacion: 9648, fuenteDato: 'Fuente secundaria; pendiente de contrastar con el INE', distanciaKm: 30, oleada: 2 }),
  // TODO(cliente): confirmar padrón (B1: ~9.400, fuente secundaria).
  crear({ slug: 'soto-del-real', nombre: 'Soto del Real', poblacion: 9400, fuenteDato: 'Fuente secundaria; pendiente de contrastar con el INE', distanciaKm: 35, oleada: 2 }),
  // TODO(cliente): confirmar padrón (B1: 9.178-9.310; memoria PRCAM 2024: 9.178).
  crear({ slug: 'hoyo-de-manzanares', nombre: 'Hoyo de Manzanares', poblacion: 9178, fuenteDato: 'Fuente secundaria (memoria PRCAM 2024); pendiente de contrastar con el INE', distanciaKm: 36, oleada: 2 }),
  // TODO(cliente): confirmar padrón INE 2025 (B1: ~7.350, fuente secundaria).
  crear({ slug: 'miraflores-de-la-sierra', nombre: 'Miraflores de la Sierra', poblacion: 7350, fuenteDato: 'Fuente secundaria (INE 2025); pendiente de contrastar con el INE', distanciaKm: 25, oleada: 2 }),
  // ---- Hub: Madrid capital ----
  {
    ...crear({ slug: 'madrid', nombre: 'Madrid', poblacion: 3497277, fuenteDato: 'Verificado: padrón del Ayuntamiento de Madrid, 1 ene. 2026', distanciaKm: 56, oleada: 'hub' }),
    esHub: true,
    intro:
      'Si la herencia está en Madrid capital, la gestionamos de forma digital y, cuando es necesario, en persona en nuestra oficina de Lozoyuela. Aquí tienes los servicios que prestamos para sucesiones en Madrid.',
    // TODO(cliente): confirmar si se quiere mencionar notarías o Registros concretos de Madrid (no se enlazan distritos).
  },
];

export const municipiosPublicados = municipios.filter((m) => m.publicado);

export function getMunicipio(slug: string): Municipio | undefined {
  return municipios.find((m) => m.slug === slug);
}

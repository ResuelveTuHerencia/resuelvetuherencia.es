// Páginas de servicio con URL propia. Cada entrada genera una página en /<slug>
// (ver src/pages/[servicio].astro). Añadir un servicio = añadir una entrada aquí.

export interface ServicioSection {
  heading: string;
  paragraphs: string[];
  items?: string[];
}

export interface ServicioFAQ {
  question: string;
  answer: string;
}

export interface Servicio {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: ServicioSection[];
  faqs: ServicioFAQ[];
}

export const servicios: Servicio[] = [
  {
    slug: 'tramitacion-herencia-madrid',
    title: 'Tramitación de Herencias en Madrid | Gestión Llave en Mano',
    description:
      'Gestión integral de herencias en la Comunidad de Madrid: documentación, notaría, impuestos e inscripción en el Registro. Sesión diagnóstica gratuita.',
    h1: 'Tramitación de herencias en Madrid',
    intro:
      'Nos encargamos de todo el proceso sucesorio, de principio a fin: desde la recopilación de documentos hasta la inscripción de los bienes a nombre de los herederos. Los herederos no tienen que hacer colas ni desplazamientos: coordinamos cada paso por ellos.',
    sections: [
      {
        heading: 'Qué incluye la tramitación',
        paragraphs: [
          'La tramitación completa cubre las fases habituales de una herencia en la Comunidad de Madrid. Antes de empezar, hacemos una sesión diagnóstica gratuita para revisar herederos, bienes y si existe testamento.',
        ],
        items: [
          'Recopilación y revisión de la documentación personal y patrimonial',
          'Coordinación con la notaría: declaración de herederos o copia del testamento',
          'Adjudicación y partición de los bienes',
          'Liquidación del Impuesto sobre Sucesiones y Donaciones y, en su caso, de la plusvalía municipal',
          'Inscripción de los inmuebles en el Registro de la Propiedad',
        ],
      },
      {
        heading: 'Cómo trabajamos',
        paragraphs: [
          'Empezamos con un diagnóstico y un presupuesto cerrado. Después planificamos el reparto y la fiscalidad, y tramitamos cada fase informando a la familia en un lenguaje claro.',
        ],
      },
      {
        heading: 'Dónde prestamos el servicio',
        paragraphs: [
          'Atención digital en toda la Comunidad de Madrid y presencial en Lozoyuela, Alcobendas, San Sebastián de los Reyes, Colmenar Viejo y la Sierra Norte.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Cuánto tarda el proceso completo de una herencia en Madrid?',
        answer:
          'Depende de la complejidad: número de herederos, tipo de bienes y si hay testamento. Lo estimamos en la sesión diagnóstica y te damos un calendario orientativo por fases.',
      },
      {
        question: '¿Puedo tramitar la herencia sin desplazarme a Madrid?',
        answer:
          'Sí. La gestión puede hacerse 100% en remoto y, si lo prefieres, de forma presencial en nuestra oficina de Lozoyuela. Coordinamos la firma en la notaría correspondiente.',
      },
    ],
  },
  {
    slug: 'impuesto-sucesiones-madrid',
    title: 'Impuesto de Sucesiones en Madrid | Liquidación y Bonificaciones',
    description:
      'Liquidación del Impuesto de Sucesiones en la Comunidad de Madrid, aplicando las bonificaciones vigentes para hijos, padres y cónyuges. Presupuesto cerrado.',
    h1: 'Impuesto de Sucesiones en Madrid',
    intro:
      'Presentamos y liquidamos el Impuesto sobre Sucesiones y Donaciones en la Comunidad de Madrid, revisando las bonificaciones aplicables a cada heredero y los plazos legales para evitar recargos e intereses de demora.',
    sections: [
      {
        heading: 'Bonificaciones para familiares directos',
        paragraphs: [
          'La Comunidad de Madrid aplica una bonificación muy elevada en el impuesto para descendientes, ascendientes y cónyuge. Confirmamos la que corresponde a cada caso antes de presentar la liquidación.',
        ],
      },
      {
        heading: 'Plazos que conviene no perder',
        paragraphs: [
          'El impuesto tiene un plazo legal desde el fallecimiento. Si no es posible cumplirlo, existe la posibilidad de solicitar una prórroga dentro del plazo inicial. Controlamos las fechas por ti para evitar recargos.',
        ],
      },
      {
        heading: 'Qué necesitamos para liquidarlo',
        paragraphs: [
          'Principalmente el certificado de defunción, la relación de bienes y derechos (inmuebles, cuentas, seguros de vida) y los datos de cada heredero.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Quién paga el Impuesto de Sucesiones en Madrid?',
        answer:
          'Lo paga cada heredero o legatario en proporción a lo que recibe. Calculamos la cuota individual de cada uno.',
      },
      {
        question: '¿Qué pasa si no pagamos el impuesto a tiempo?',
        answer:
          'Se generan recargos e intereses de demora. Por eso revisamos los plazos desde la primera sesión y, si es necesario, tramitamos la prórroga.',
      },
    ],
  },
  {
    slug: 'plusvalia-municipal-herencia-madrid',
    title: 'Plusvalía Municipal en una Herencia en Madrid | Cálculo y Tramitación',
    description:
      'Cálculo y tramitación de la plusvalía municipal en una herencia en Madrid. Revisamos si existe incremento real de valor antes de pagar.',
    h1: 'Plusvalía municipal en una herencia en Madrid',
    intro:
      'La plusvalía municipal es el impuesto que grava el incremento de valor de un terreno urbano. En una herencia, la obligación la asume el heredero, y su cálculo depende del ayuntamiento y de la normativa vigente.',
    sections: [
      {
        heading: 'No siempre hay que pagarla',
        paragraphs: [
          'Tras la reforma y la jurisprudencia del Tribunal Constitucional, el impuesto solo se exige cuando hay un incremento real de valor del terreno. Analizamos cada caso antes de liquidar para no pagar de más.',
        ],
      },
      {
        heading: 'Cómo la tramitamos',
        paragraphs: [
          'Identificamos el inmueble y el valor catastral, calculamos la base imponible según el periodo de titularidad del causante y presentamos la declaración ante el ayuntamiento correspondiente.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Quién paga la plusvalía municipal en una herencia?',
        answer:
          'Normalmente el heredero que recibe el inmueble. Lo revisamos caso por caso con el reparto previsto.',
      },
      {
        question: '¿Se puede pagar la plusvalía si el inmueble ha bajado de valor?',
        answer:
          'Si no hay incremento de valor real, en muchos casos no hay obligación de pago. Lo comprobamos en el diagnóstico inicial.',
      },
    ],
  },
  {
    slug: 'herencia-sin-testamento-madrid',
    title: 'Herencia sin Testamento en Madrid | Declaración de Herederos Abintestato',
    description:
      'Tramitación de una herencia sin testamento en Madrid: declaración de herederos abintestato ante notario, certificados y reparto según la ley.',
    h1: 'Herencia sin testamento en Madrid',
    intro:
      'Cuando el fallecido no dejó testamento, la ley determina quiénes son los herederos. Gestionamos la declaración de herederos abintestato ante notario y todos los certificados necesarios para empezar la tramitación.',
    sections: [
      {
        heading: 'Qué es la declaración de herederos abintestato',
        paragraphs: [
          'Es el acta notarial que identifica a los herederos según el orden de sucesión del Código Civil (descendientes, ascendientes, cónyuge y, en su caso, otros parientes). Es el documento que permite después aceptar la herencia e inscribir los bienes.',
        ],
      },
      {
        heading: 'Certificados que se necesitan',
        paragraphs: [
          'Solicitamos los certificados de defunción, de actos de última voluntad (para confirmar que no hay testamento) y de seguros de cobertura de fallecimiento, además de la documentación de los herederos.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Puedo hacer la declaración de herederos sin acudir al notario?',
        answer:
          'No: la declaración de herederos abintestato se formaliza ante notario. Nosotros preparamos la documentación y coordinamos la cita.',
      },
      {
        question: '¿Cómo sé si el fallecido dejó testamento?',
        answer:
          'Se consulta el Registro General de Actos de Última Voluntad. Lo solicitamos como parte de los certificados iniciales.',
      },
    ],
  },
];

export function getServicio(slug: string): Servicio | undefined {
  return servicios.find((s) => s.slug === slug);
}

// Datos compartidos del sitio: una sola fuente para dominio, zona de servicio y servicios.
export const SITE_URL = 'https://resuelvetuherencia.es';

// NAP canónico (Name, Address, Phone): única fuente de datos de contacto del sitio.
// Pendiente de confirmar por el cliente: horario (no añadir openingHours) y nombre oficial del municipio.
export const NAP = {
  name: 'Resuelve Tu Herencia',
  streetAddress: 'Avenida de Madrid, 62',
  postalCode: '28752',
  addressLocality: 'Lozoyuela',
  addressRegion: 'Comunidad de Madrid',
  addressCountry: 'ES',
  addressLine: 'Avenida de Madrid, 62, 28752 Lozoyuela, Madrid',
  telephone: '+34 613 95 50 69',
  telephoneTel: '+34613955069',
  email: 'agnresuelvetuherencia@gmail.com',
} as const;

// Municipios de la zona de servicio (usados en el JSON-LD del negocio)
export const areaServed = [
  'Lozoyuela',
  'Buitrago del Lozoya',
  'Torrelaguna',
  'La Cabrera',
  'San Agustín del Guadalix',
  'El Molar',
  'Colmenar Viejo',
  'Alcobendas',
  'San Sebastián de los Reyes',
  'Venturada',
  'Bustarviejo',
  'Miraflores de la Sierra',
  'Soto del Real',
  'Guadalix de la Sierra',
  'Madrid',
];

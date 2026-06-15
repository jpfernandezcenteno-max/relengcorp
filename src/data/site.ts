/* ============================================================
   RELENGCORP — DATOS CENTRALIZADOS DEL SITIO
   Punto único de verdad para navegación, servicios y contacto.
   Editar aquí actualiza header, footer, sitemap y páginas a la vez.
   ============================================================ */

export const site = {
  name: 'Relengcorp',
  legalName: 'Relengcorp',
  tagline: 'Confiabilidad inteligente para la minería',
  description:
    'Relengcorp es una empresa especializada en soluciones integrales de confiabilidad, mantenimiento, monitoreo de condición y transformación digital para la industria minera e industrial.',
  url: 'https://www.relengcorp.com',
  locale: 'es_PE',
  email: 'comercial@relengcorp.com',
  phone: '+51 947 541 183',
  phoneRaw: '+51947541183',
  whatsapp: '51947541183',
} as const;

// TODO: reemplazar '#' por las URLs reales de las redes sociales.
export const social = {
  facebook: '#',
  instagram: '#',
  linkedin: '#',
} as const;

export const offices = [
  {
    city: 'Arequipa',
    label: 'Oficina Central',
    address: 'Urb. Magisterial III Etapa – Yanahuara, Arequipa – Perú',
    country: 'Perú',
  },
  {
    city: 'Lima',
    label: 'Oficina Lima',
    address: 'Av. El Derby 77, Torre 1, Piso 7, Surco',
    country: 'Perú',
  },
  {
    city: 'Antofagasta',
    label: 'Oficina Chile',
    address: 'Av. Ascotán 155, Edificio Faro Norte 1812-B, La Chimba',
    country: 'Chile',
  },
] as const;

/* ---------- SERVICIOS ESPECIALIZADOS (cada uno es una landing page) ---------- */
export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  groups: { name: string; items: string[] }[];
};

export const services: Service[] = [
  {
    slug: 'integridad-estructural',
    title: 'Integridad Estructural',
    short: 'Ingeniería, END avanzado y monitoreo para activos críticos.',
    intro:
      'Combinamos ingeniería especializada, END avanzado, monitoreo de condición y tecnologías digitales para detectar degradación temprana, reducir riesgos estructurales y maximizar la confiabilidad de activos críticos.',
    groups: [
      {
        name: 'Integridad Estructural',
        items: [
          'Evaluación de Integridad Estructural de Equipos Críticos',
          'Monitoreo de Condición y END/NDT Avanzado',
        ],
      },
      {
        name: 'Integridad de Molinos',
        items: [
          'Inspección de Elongación de Pernos de Molinos',
          'Auditoría de Instalación de Pernos de Molinos',
          'Inspección de Lainers de Molinos',
          'Inspección UTPA de Bridas de Molinos',
        ],
      },
      {
        name: 'Certificación e Integridad Mecánica',
        items: [
          'Certificación de Tanques de Alta Capacidad',
          'Certificación de Recipientes a Presión',
          'Certificación de Tuberías de Relaves',
        ],
      },
      {
        name: 'Otros Servicios',
        items: ['Escaneo Láser 3D', 'END/NDT en Paradas de Planta'],
      },
    ],
  },
  {
    slug: 'monitoreo-mantenimiento-predictivo',
    title: 'Monitoreo y Mantenimiento Predictivo',
    short: 'Anticipación de fallas con analítica y Machine Learning.',
    intro:
      'Integramos mantenimiento predictivo, análisis eléctrico, gestión avanzada de lubricación y modelos de Machine Learning para anticipar fallas, optimizar la confiabilidad y maximizar la continuidad operacional de activos críticos.',
    groups: [
      {
        name: 'Servicios',
        items: [
          'Mantenimiento Predictivo',
          'Mantenimiento Predictivo Eléctrico',
          'Lubricación',
          'Machine Learning Predictivo',
        ],
      },
    ],
  },
  {
    slug: 'ingenieria-de-confiabilidad',
    title: 'Ingeniería de Confiabilidad',
    short: 'De los datos y el riesgo a la continuidad operacional.',
    intro:
      'Convertimos datos, riesgo y estrategia en continuidad operacional. A través de metodologías avanzadas de confiabilidad, readiness operacional y optimización de mantenimiento, ayudamos a las organizaciones a evolucionar hacia operaciones más predictivas, resilientes y orientadas al desempeño.',
    groups: [
      {
        name: 'Estrategias de Activos',
        items: ['Estrategias de Mantenimiento', 'Optimización del Mantenimiento'],
      },
      {
        name: 'Readiness Operacional',
        items: ['Operational Readiness', 'Comisionamiento', 'Preparación Operacional'],
      },
      {
        name: 'Ingeniería de Confiabilidad',
        items: [
          'RCA',
          'RCM',
          'Análisis de Criticidad',
          'Análisis RAM',
          'Gestión del Riesgo',
          'Optimización Operacional',
          'Asset Performance',
          'Software de Confiabilidad',
        ],
      },
    ],
  },
  {
    slug: 'metalurgia-inteligente',
    title: 'Metalurgia Inteligente',
    short: 'Laboratorio avanzado y ML para optimizar recuperación.',
    intro:
      'Integramos metalurgia, laboratorio avanzado y Machine Learning para optimizar la recuperación y el desempeño operacional.',
    groups: [
      {
        name: 'Servicios',
        items: [
          'Operaciones metalúrgicas (muestreo y preparación)',
          'Laboratorio especializado',
          'Caracterización avanzada',
          'Analítica y Machine Learning',
        ],
      },
    ],
  },
  {
    slug: 'confiabilidad-inteligente',
    title: 'Confiabilidad Inteligente',
    short: 'IIoT, monitoreo remoto y analítica predictiva.',
    intro:
      'Integramos sensorización inteligente, IIoT, monitoreo remoto y analítica predictiva para transformar datos operacionales en decisiones inteligentes y accionables. A través de modelos de Machine Learning, plataformas IoT y centros de confiabilidad remota, anticipamos anomalías, estimamos vida útil remanente (RUL) y optimizamos la continuidad operacional de activos críticos.',
    groups: [
      {
        name: 'Sensorización Inteligente',
        items: ['IoT', 'Monitoreo Remoto', 'Adquisición de Datos'],
      },
      {
        name: 'Inteligencia Predictiva',
        items: ['Detección de Anomalías', 'RUL', 'Root Cause', 'Modelos ML'],
      },
      {
        name: 'Plataformas',
        items: [
          'Plataforma IoT',
          'Centro de Confiabilidad Remota',
          'Gemelo Digital de Confiabilidad',
        ],
      },
    ],
  },
  {
    slug: 'ingenieria-digital',
    title: 'Ingeniería Digital',
    short: 'Digitalización de operación y mantenimiento.',
    intro:
      'Digitalizamos la operación y el mantenimiento mediante aplicaciones inteligentes y tecnologías inmersivas.',
    groups: [
      {
        name: 'Servicios',
        items: [
          'Aplicaciones Digitales',
          'Manuales Interactivos',
          'Aplicaciones con Tecnologías Inmersivas RA/RV/RX',
          'Plataforma Operacional Digital Portal',
          'Integración de Datos',
        ],
      },
    ],
  },
  {
    slug: 'gestion-de-reparables-criticos',
    title: 'Gestión de Reparables Críticos',
    short: 'Disponibilidad, trazabilidad y QA/QC garantizados.',
    intro:
      'Integramos gestión comercial, QA/QC y control técnico para asegurar disponibilidad, trazabilidad y continuidad operacional.',
    groups: [
      {
        name: 'Gestión Comercial',
        items: [
          'Gestión Comercial de Reparables',
          'Planificación',
          'Seguimiento',
          'Trazabilidad',
          'Coordinación',
          'Supply Chain Técnico',
        ],
      },
      {
        name: 'QA/QC de Reparables Críticos',
        items: [
          'Inspección técnica',
          'Control Dimensional',
          'END',
          'Liberación Técnica',
          'Aseguramiento de Calidad',
        ],
      },
    ],
  },
];

/* ---------- NAVEGACIÓN PRINCIPAL ---------- */
export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: 'Nosotros', href: '/nosotros' },
  {
    label: 'Servicios',
    href: '/servicios',
    children: services.map((s) => ({ label: s.title, href: `/servicios/${s.slug}` })),
  },
  { label: 'Portafolio', href: '/portafolio' },
  { label: 'Clientes', href: '/clientes' },
  { label: 'Blog', href: '/blog' },
  { label: 'Trabaja con nosotros', href: '/trabaja-con-nosotros' },
];

/* Certificaciones ISO (Trinorma) */
export const certifications = [
  { code: 'ISO 9001', scope: 'Gestión de la Calidad' },
  { code: 'ISO 14001', scope: 'Gestión Ambiental' },
  { code: 'ISO 45001', scope: 'Seguridad y Salud en el Trabajo' },
] as const;

/* Homologaciones */
export const homologations = ['CIAL', 'SGS', 'Bureau Veritas'] as const;

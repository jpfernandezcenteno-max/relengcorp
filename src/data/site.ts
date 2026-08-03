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

export const social = {
  facebook: 'https://www.facebook.com/relengcorp',
  instagram: 'https://www.instagram.com/relengcorp/',
  linkedin: 'https://www.linkedin.com/company/relengcorp/',
  youtube: 'https://www.youtube.com/channel/UCtHcOWlia13_UugiOn88iZQ',
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
export type Subservice = { name: string; slogan: string };

export type Service = {
  slug: string;
  title: string;
  message: string;   // tagline de la línea de negocio (showcase + hero del servicio)
  short: string;
  intro: string;
  subservices: Subservice[];
  groups: { name: string; items: string[] }[];
};

export const services: Service[] = [
  {
    slug: 'integridad-estructural',
    title: 'Integridad Estructural',
    message: 'Protegemos la integridad de los activos que sostienen la operación.',
    short: 'Ingeniería, END avanzado y monitoreo para activos críticos.',
    intro:
      'Combinamos ingeniería especializada, END avanzado, monitoreo de condición y tecnologías digitales para detectar degradación temprana, reducir riesgos estructurales y maximizar la confiabilidad de activos críticos.',
    subservices: [
      { name: 'Evaluación de Integridad Estructural Inteligente', slogan: 'Conozca el estado real de sus activos.' },
      { name: 'NDT Avanzado – Inspección Inteligente de Activos Críticos', slogan: 'Inspección inteligente. Decisiones seguras.' },
      { name: 'Medición Inteligente de Elongación de Pernos', slogan: 'Precisión que asegura cada unión crítica.' },
      { name: 'Auditoría de Ajuste de Pernos', slogan: 'Torque correcto. Riesgo mínimo.' },
      { name: 'Auditoría de Calibración de Herramientas de Ajuste', slogan: 'La confiabilidad comienza en la calibración.' },
      { name: 'Inspección Phased Array UTPA de Bridadas', slogan: 'Detectamos lo invisible antes de la falla.' },
      { name: 'Inspección Integral de Liners de Molinos', slogan: 'La información correcta antes de intervenir.' },
      { name: 'Gestión Inteligente de Revestimientos', slogan: 'Más vida útil. Más productividad.' },
      { name: 'Certificación de Tanques de Recipientes a Presión', slogan: 'Integridad certificada para operar con confianza.' },
      { name: 'Certificación de Tuberías de Relaves', slogan: 'Seguridad para cada kilómetro de operación.' },
      { name: 'Escaneo Láser 3D', slogan: 'La realidad digital de su planta.' },
      { name: 'Paradas de Planta', slogan: 'Menos tiempo detenido. Más continuidad operacional.' },
    ],
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
    message: 'Anticipamos fallas antes de que afecten su producción.',
    short: 'Anticipación de fallas con analítica y Machine Learning.',
    intro:
      'Integramos mantenimiento predictivo, análisis eléctrico, gestión avanzada de lubricación y modelos de Machine Learning para anticipar fallas, optimizar la confiabilidad y maximizar la continuidad operacional de activos críticos.',
    subservices: [
      { name: 'Monitoreo de Condición', slogan: 'Escuchamos sus activos antes que fallen.' },
      { name: 'Mantenimiento Predictivo', slogan: 'Predicción que maximiza disponibilidad.' },
      { name: 'Mantenimiento Predictivo Eléctrico', slogan: 'La energía también puede predecirse.' },
      { name: 'Lubricación', slogan: 'Cada gota protege productividad.' },
      { name: 'Machine Learning Predictivo', slogan: 'La inteligencia artificial al servicio de la confiabilidad.' },
    ],
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
    message: 'Diseñamos estrategias que eliminan incertidumbre operacional.',
    short: 'De los datos y el riesgo a la continuidad operacional.',
    intro:
      'Convertimos datos, riesgo y estrategia en continuidad operacional. A través de metodologías avanzadas de confiabilidad, readiness operacional y optimización de mantenimiento, ayudamos a las organizaciones a evolucionar hacia operaciones más predictivas, resilientes y orientadas al desempeño.',
    subservices: [
      { name: 'Estrategias de Mantenimiento', slogan: 'Mantenimiento diseñado para generar valor.' },
      { name: 'Readiness Operacional', slogan: 'Listos para producir desde el primer día.' },
      { name: 'Ingeniería de Confiabilidad', slogan: 'Confiabilidad diseñada desde la ingeniería.' },
      { name: 'Análisis de Criticidad', slogan: 'Priorice donde realmente importa.' },
      { name: 'RCM / RCA', slogan: 'La estrategia correcta para cada activo.' },
      { name: 'RAM', slogan: 'Disponibilidad cuantificada. Decisiones optimizadas.' },
      { name: 'Gestión del Riesgo', slogan: 'Controle el riesgo antes que el riesgo lo controle.' },
      { name: 'Optimización Operacional', slogan: 'Más eficiencia. Menor incertidumbre.' },
    ],
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
    message: 'Transformamos datos metalúrgicos en mayor recuperación.',
    short: 'Laboratorio avanzado y ML para optimizar recuperación.',
    intro:
      'Integramos metalurgia, laboratorio avanzado y Machine Learning para optimizar la recuperación y el desempeño operacional.',
    subservices: [
      { name: 'Operaciones Metalúrgicas', slogan: 'Información confiable desde el proceso.' },
      { name: 'Laboratorio Especializado', slogan: 'Resultados que respaldan decisiones críticas.' },
      { name: 'Caracterización Avanzada', slogan: 'Conozca su mineral como nunca antes.' },
      { name: 'Analítica y Machine Learning', slogan: 'Predicción aplicada al proceso metalúrgico.' },
    ],
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
    message: 'Conectamos activos, datos y decisiones en tiempo real.',
    short: 'IIoT, monitoreo remoto y analítica predictiva.',
    intro:
      'Integramos sensorización inteligente, IIoT, monitoreo remoto y analítica predictiva para transformar datos operacionales en decisiones inteligentes y accionables. A través de modelos de Machine Learning, plataformas IoT y centros de confiabilidad remota, anticipamos anomalías, estimamos vida útil remanente (RUL) y optimizamos la continuidad operacional de activos críticos.',
    subservices: [
      { name: 'Sensorización Remota', slogan: 'Los datos nunca descansan.' },
      { name: 'Centro de Confiabilidad', slogan: 'La operación siempre bajo observación.' },
      { name: 'Gemelo Digital', slogan: 'Su activo digital antes de intervenir el real.' },
      { name: 'Modelos Machine Learning', slogan: 'Aprendemos de los datos para anticipar el futuro.' },
      { name: 'Plataforma IoT', slogan: 'Todo conectado. Todo visible.' },
      { name: 'Analítica Multivariable', slogan: 'Transformamos datos complejos en decisiones inteligentes.' },
    ],
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
    message: 'Digitalizamos la operación para acelerar las decisiones.',
    short: 'Digitalización de operación y mantenimiento.',
    intro:
      'Digitalizamos la operación y el mantenimiento mediante aplicaciones inteligentes y tecnologías inmersivas.',
    subservices: [
      { name: 'Aplicaciones Digitales', slogan: 'Software diseñado para la industria.' },
      { name: 'Manuales Interactivos de Operación y Mantenimiento', slogan: 'Información crítica disponible cuando más se necesita.' },
      { name: 'Plataforma Operacional – Digital Portal', slogan: 'Toda la operación en una sola plataforma.' },
      { name: 'Aplicaciones con Tecnología RA / RV / RX', slogan: 'La ingeniería inmersiva ya está aquí.' },
      { name: 'Adquisición e Integración de Datos', slogan: 'Unificamos datos. Simplificamos decisiones.' },
    ],
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
    message: 'Gestionamos reparables como activos estratégicos.',
    short: 'Disponibilidad, trazabilidad y QA/QC garantizados.',
    intro:
      'Integramos gestión comercial, QA/QC y control técnico para asegurar disponibilidad, trazabilidad y continuidad operacional.',
    subservices: [
      { name: 'Gestión Comercial de Reparables', slogan: 'Más control. Menores tiempos.' },
      { name: 'QA/QC de Reparables Críticos', slogan: 'Cada reparable certificado para volver a producir.' },
    ],
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
  { code: 'ISO 9001', scope: 'Gestión de la Calidad', logo: '/logos/iso-9001.png' },
  { code: 'ISO 14001', scope: 'Gestión Ambiental', logo: '/logos/iso-14001.png' },
  { code: 'ISO 45001', scope: 'Seguridad y Salud en el Trabajo', logo: '/logos/iso-45001.png' },
] as const;

/* Homologaciones (logo cuando exista) */
export const homologations = [
  { name: 'CIAL', logo: '/logos/cial.png' },
  { name: 'SGS', logo: '/logos/sgs.jpg' },
  { name: 'Bureau Veritas', logo: '/logos/bureau-veritas.png' },
] as const;

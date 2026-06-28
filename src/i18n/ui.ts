export const SUPPORTED_LOCALES = ['en', 'es'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export function isLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

/** Prefix a path with Astro's configured base (handles GitHub Pages subpaths). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}` || '/';
}

/** Path for a locale's landing page (default locale lives at root). */
export function localePath(locale: Locale): string {
  return withBase(locale === DEFAULT_LOCALE ? '/' : `/${locale}/`);
}

export interface Feature {
  icon: 'leaf' | 'map' | 'clipboard' | 'basket' | 'calendar' | 'bell';
  title: string;
  body: string;
}

export interface Step {
  num: string;
  title: string;
  body: string;
}

export interface Dictionary {
  meta: { title: string; description: string };
  nav: {
    features: string;
    how: string;
    cta: string;
    skipToContent: string;
  };
  themeToggle: { toLight: string; toDark: string };
  langToggle: { label: string; other: string };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    titleTail: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    note: string;
    cardCaption: string;
    cardPlants: string;
    cardSpaces: string;
    cardHarvest: string;
    cardTask1: string;
    cardTask2: string;
    cardTask3: string;
  };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Feature[];
  };
  how: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: Step[];
  };
  cta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    button: string;
    note: string;
  };
  footer: {
    tagline: string;
    columns: { heading: string; links: string[] }[];
    rights: string;
    madeWith: string;
  };
}

export const ui: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title: 'Gardenia — Your gardening companion',
      description:
        'Gardenia helps you track your plants, spaces, care logs, harvests, and planting calendar — all in one calm, beautiful place.',
    },
    nav: {
      features: 'Features',
      how: 'How it works',
      cta: 'Get started',
      skipToContent: 'Skip to content',
    },
    themeToggle: { toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
    langToggle: { label: 'Language', other: 'Español' },
    hero: {
      eyebrow: 'Gardening companion',
      titleLead: 'Grow a garden that ',
      titleAccent: 'remembers',
      titleTail: ' everything for you.',
      subtitle:
        'Track every plant, space, watering and harvest in one place. Gardenia keeps your notes, your calendar and your green thumb in sync — season after season.',
      ctaPrimary: 'Start growing',
      ctaSecondary: 'See how it works',
      note: 'Free to start · No card required',
      cardCaption: 'This week in your garden',
      cardPlants: 'Plants',
      cardSpaces: 'Spaces',
      cardHarvest: 'Harvest',
      cardTask1: 'Water the tomatoes',
      cardTask2: 'Pot up the basil seedlings',
      cardTask3: 'Harvest the first courgettes',
    },
    features: {
      eyebrow: 'Everything in one place',
      title: 'A calmer way to tend your garden',
      subtitle:
        'From the first seed to the last harvest, Gardenia gives every plant a home and every task a reminder.',
      items: [
        {
          icon: 'leaf',
          title: 'Plant tracking',
          body: 'Keep a living profile for every plant — variety, sowing date, notes and photos as it grows.',
        },
        {
          icon: 'map',
          title: 'Spaces & spots',
          body: 'Map out beds, pots and greenhouses, then place each plant exactly where it lives.',
        },
        {
          icon: 'clipboard',
          title: 'Care logs',
          body: 'Log watering, feeding and pruning in a tap, and look back on what actually worked.',
        },
        {
          icon: 'basket',
          title: 'Harvest records',
          body: 'Record every harvest by weight and date to see which plants truly earn their patch.',
        },
        {
          icon: 'calendar',
          title: 'Planting calendar',
          body: 'A season-aware calendar tells you what to sow, transplant and harvest, and when.',
        },
        {
          icon: 'bell',
          title: 'Gentle reminders',
          body: 'Timely nudges for the jobs that matter, so nothing wilts while you are away.',
        },
      ],
    },
    how: {
      eyebrow: 'How it works',
      title: 'Up and growing in three steps',
      subtitle: 'No spreadsheets, no scattered notes. Just your garden, organised.',
      steps: [
        {
          num: '01',
          title: 'Map your spaces',
          body: 'Add your beds, pots and plots so every plant has a place to call home.',
        },
        {
          num: '02',
          title: 'Add your plants',
          body: 'Drop in what you are growing and Gardenia builds each plant a tidy profile.',
        },
        {
          num: '03',
          title: 'Log & harvest',
          body: 'Follow your calendar, log the care, and watch your harvests add up.',
        },
      ],
    },
    cta: {
      eyebrow: 'Ready when you are',
      title: 'Plant the first seed today',
      subtitle:
        'Join the gardeners growing more with less guesswork. Gardenia is free to start and grows with you.',
      button: 'Get started',
      note: 'No credit card · Cancel anytime',
    },
    footer: {
      tagline: 'Your gardening companion, season after season.',
      columns: [
        { heading: 'Product', links: ['Features', 'How it works', 'Pricing', 'Changelog'] },
        { heading: 'Company', links: ['About', 'Blog', 'Contact'] },
        { heading: 'Legal', links: ['Privacy', 'Terms'] },
      ],
      rights: 'All rights reserved.',
      madeWith: 'Grown with care by Sisques Labs.',
    },
  },

  es: {
    meta: {
      title: 'Gardenia — Tu compañera de jardinería',
      description:
        'Gardenia te ayuda a llevar el control de tus plantas, espacios, registros de cuidado, cosechas y calendario de siembra, todo en un lugar tranquilo y bonito.',
    },
    nav: {
      features: 'Funciones',
      how: 'Cómo funciona',
      cta: 'Empezar',
      skipToContent: 'Saltar al contenido',
    },
    themeToggle: { toLight: 'Cambiar a tema claro', toDark: 'Cambiar a tema oscuro' },
    langToggle: { label: 'Idioma', other: 'English' },
    hero: {
      eyebrow: 'Compañera de jardinería',
      titleLead: 'Cultiva un jardín que lo ',
      titleAccent: 'recuerda',
      titleTail: ' todo por ti.',
      subtitle:
        'Lleva el control de cada planta, espacio, riego y cosecha en un solo lugar. Gardenia mantiene tus notas, tu calendario y tu buena mano en sintonía, temporada tras temporada.',
      ctaPrimary: 'Empieza a cultivar',
      ctaSecondary: 'Ver cómo funciona',
      note: 'Gratis para empezar · Sin tarjeta',
      cardCaption: 'Esta semana en tu jardín',
      cardPlants: 'Plantas',
      cardSpaces: 'Espacios',
      cardHarvest: 'Cosecha',
      cardTask1: 'Regar los tomates',
      cardTask2: 'Trasplantar las albahacas',
      cardTask3: 'Cosechar los primeros calabacines',
    },
    features: {
      eyebrow: 'Todo en un solo lugar',
      title: 'Una forma más serena de cuidar tu jardín',
      subtitle:
        'Desde la primera semilla hasta la última cosecha, Gardenia da un hogar a cada planta y un recordatorio a cada tarea.',
      items: [
        {
          icon: 'leaf',
          title: 'Seguimiento de plantas',
          body: 'Mantén una ficha viva de cada planta: variedad, fecha de siembra, notas y fotos según crece.',
        },
        {
          icon: 'map',
          title: 'Espacios y rincones',
          body: 'Dibuja bancales, macetas e invernaderos y coloca cada planta justo donde vive.',
        },
        {
          icon: 'clipboard',
          title: 'Registros de cuidado',
          body: 'Anota riegos, abonos y podas con un toque, y descubre qué funcionó de verdad.',
        },
        {
          icon: 'basket',
          title: 'Registro de cosechas',
          body: 'Registra cada cosecha por peso y fecha para ver qué plantas se ganan su sitio.',
        },
        {
          icon: 'calendar',
          title: 'Calendario de siembra',
          body: 'Un calendario que conoce la temporada te dice qué sembrar, trasplantar y cosechar, y cuándo.',
        },
        {
          icon: 'bell',
          title: 'Recordatorios amables',
          body: 'Avisos a tiempo para las tareas importantes, para que nada se marchite mientras no estás.',
        },
      ],
    },
    how: {
      eyebrow: 'Cómo funciona',
      title: 'Listo y creciendo en tres pasos',
      subtitle: 'Sin hojas de cálculo ni notas sueltas. Solo tu jardín, ordenado.',
      steps: [
        {
          num: '01',
          title: 'Dibuja tus espacios',
          body: 'Añade tus bancales, macetas y parcelas para que cada planta tenga su hogar.',
        },
        {
          num: '02',
          title: 'Añade tus plantas',
          body: 'Apunta lo que estás cultivando y Gardenia crea una ficha cuidada para cada planta.',
        },
        {
          num: '03',
          title: 'Registra y cosecha',
          body: 'Sigue tu calendario, anota los cuidados y mira cómo se suman tus cosechas.',
        },
      ],
    },
    cta: {
      eyebrow: 'Cuando tú quieras',
      title: 'Planta hoy la primera semilla',
      subtitle:
        'Únete a quienes cultivan más con menos incertidumbre. Gardenia es gratis para empezar y crece contigo.',
      button: 'Empezar',
      note: 'Sin tarjeta · Cancela cuando quieras',
    },
    footer: {
      tagline: 'Tu compañera de jardinería, temporada tras temporada.',
      columns: [
        { heading: 'Producto', links: ['Funciones', 'Cómo funciona', 'Precios', 'Novedades'] },
        { heading: 'Empresa', links: ['Sobre nosotros', 'Blog', 'Contacto'] },
        { heading: 'Legal', links: ['Privacidad', 'Términos'] },
      ],
      rights: 'Todos los derechos reservados.',
      madeWith: 'Cultivado con cariño por Sisques Labs.',
    },
  },
};

export const SITE = {
  name: 'RedBox',
  title: 'RedBox Cybersecurity',
  description:
    'RedBox Cybersecurity — Ciberseguridad ofensiva de élite. Red Team, Pentesting, Ethical Hacking, Auditorías y Formación profesional.',
  url: 'https://redbox.security',
  locale: 'es-ES',
  defaultOgImage: '/image/home-circuit-board.png',
} as const;

export type Site = typeof SITE;

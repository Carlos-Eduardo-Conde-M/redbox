import type { Service } from '../types/services';

export const HOME_CAPABILITIES: Pick<Service, 'id' | 'title' | 'blurb'>[] = [
  {
    id: 'red-team',
    title: 'Red Team Operations',
    blurb:
      'Ejercicios extendidos de amenaza persistente simulada para probar defensas reales.',
  },
  {
    id: 'pentesting',
    title: 'Penetration Testing',
    blurb:
      'Identificación y validación de vulnerabilidades web, móvil, cloud y wireless.',
  },
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking',
    blurb:
      'Pruebas ofensivas controladas para Revelar caras ocultas del perímetro digital.',
  },
];

export const HOME_OFFENSIVE_SERVICES: Service[] = [
  {
    id: 'web-pentesting',
    title: 'Web Pentesting',
    href: '/servicios#web-pentesting',
    blurb:
      'Análisis profundo de aplicaciones web: OWASP Top 10, lógica de negocio y autenticación.',
    tags: ['SQLi', 'XSS', 'IDOR', 'CSRF'],
    icon: 'language',
  },
  {
    id: 'mobile-security',
    title: 'Mobile Security',
    href: '/servicios#mobile-security',
    blurb:
      'Audiotoría de aplicaciones iOS y Android: análisis estático, dinámico y de tráfico.',
    tags: ['iOS', 'Android', 'API', 'Binary'],
    icon: 'smartphone',
  },
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking',
    href: '/servicios#ethical-hacking',
    blurb:
      'Reconocimiento, escaneo de infraestructura, mapeo de red y explotación controlada.',
    tags: ['INFRA_SCN', 'NET_MAP', 'WIFI_CRK'],
    icon: 'military_tech',
  },
  {
    id: 'red-team',
    title: 'Red Team Operations',
    href: '/servicios#red-team',
    blurb:
      'Ejercicios de amenaza persistente (APT) cubriendo phishing, movement lateral y persistencia.',
    tags: ['APT', 'LATERAL', 'C2', 'PERSIST'],
    icon: 'crisis_alert',
  },
];

export const SERVICES_PAGE_ITEMS: Service[] = [
  {
    id: 'web-pentesting',
    title: 'Web Pentesting',
    href: '/servicios#web-pentesting',
    blurb:
      'Pruebas ofensivas sobre aplicaciones web: OWASP Top 10, autenticación, autorización y lógica de negocio.',
    tags: ['SQL Injection', 'XSS', 'CSRF', 'SSRF', 'IDOR'],
    icon: 'language',
  },
  {
    id: 'mobile-security',
    title: 'Mobile Security',
    href: '/servicios#mobile-security',
    blurb:
      'Análisis estático y dinámico de aplicaciones móviles iOS y Android. Traffico, almacenamiento y cifrado.',
    tags: ['iOS', 'Android', 'API', 'Binary'],
    icon: 'smartphone',
  },
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking',
    href: '/servicios#ethical-hacking',
    blurb:
      'Reconocimiento de infraestructura, escaneo de superficie de ataque y explotación verificificada.',
    tags: ['INFRA_SCN', 'NET_MAP', 'WIFI_CRK', 'CVE'],
    icon: 'military_tech',
  },
  {
    id: 'red-team',
    title: 'Red Team Operations',
    href: '/servicios#red-team',
    blurb:
      'Ejercicios de amenaza persistente simulada (APT). Phishing, explotación interna, movimiento lateral y persistencia.',
    tags: ['APT', 'LATERAL', 'C2', 'PERSIST'],
    icon: 'crisis_alert',
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security',
    href: '/servicios#cloud-security',
    blurb:
      'Configuración segura de AWS, Azure y GCP. IAM, segmentación de red y control de exposición pública.',
    tags: ['AWS', 'Azure', 'GCP', 'IAM'],
    icon: 'cloud',
  },
  {
    id: 'compliance-audit',
    title: 'Compliance Audit',
    href: '/servicios#compliance-audit',
    blurb:
      'Auditorías ISO 27001, NIST CSF, GDPR y Essenciales. Preparación y validación aliñada con frameworks.',
    tags: ['ISO 27001', 'NIST', 'GDPR', 'ENS'],
    icon: 'verified_user',
  },
];

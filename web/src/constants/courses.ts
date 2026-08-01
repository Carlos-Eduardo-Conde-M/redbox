import type { Course } from '../types/services';

export const HOME_COURSES: Course[] = [
  {
    id: 'offensive-hacking',
    title: 'Offensive Hacking',
    blurb:
      'Fundamentos de hacking ofensivo: footprinting, escaneo, explotación y post-explotación.',
    duration: '12 semanas',
    price: 'On request',
    href: '/academia#offensive-hacking',
  },
  {
    id: 'ad-exploitation',
    title: 'Active Directory Exploitation',
    blurb:
      'Explotación de entornos Active Directory: Kerberoasting, AS-REP, movement lateral y privilege escalation.',
    duration: '8 semanas',
    price: 'On request',
    href: '/academia#ad-exploitation',
  },
];

export const ACADEMIA_COURSES: Course[] = [
  {
    id: 'rcof',
    title: 'RedBox Certified Offensive Foundation',
    blurb:
      'Curso introductorio gratuito. Fundamentos de ciberseguridad ofensiva, herramientas y metodología.',
    duration: '40 horas',
    price: 'Free',
    badge: 'Free',
    href: '/academia#rcof',
  },
  {
    id: 'web-audit',
    title: 'Web Audit Pro',
    blurb:
      'Auditoría avanzada de aplicaciones web: OWASP, Burp Suite profesional y reporting técnico.',
    duration: '16 horas',
    price: '299€',
    badge: 'Intermedio',
    href: '/academia#web-audit',
  },
  {
    id: 'burpsuite-workshop',
    title: 'Burp Suite Tactical Workshop',
    blurb:
      'Taller intensivo sobre el uso profesional de Burp Suite en pentesting web: proxies, intruder y extensions.',
    duration: '4 horas',
    price: 'On request',
    badge: 'Workshop',
    href: '/academia#burpsuite-workshop',
  },
];

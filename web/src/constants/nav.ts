import type { NavLink, FooterColumn, SocialLink } from '../types/nav';

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Quiénes Somos', href: '/quienes-somos' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Academia', href: '/academia' },
  { label: 'Comunidad', href: '/comunidad' },
  { label: 'Blog', href: '/blog' },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Servicios',
    links: [
      { label: 'Pentesting', href: '/servicios#pentesting' },
      { label: 'Red Team', href: '/servicios#red-team' },
      { label: 'Cloud Security', href: '/servicios#cloud-security' },
      { label: 'Wireless Audit', href: '/servicios#wireless-audit' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Quiénes Somos', href: '/quienes-somos' },
      { label: 'Comunidad', href: '/comunidad' },
      { label: 'Blog', href: '/blog' },
      { label: 'Certificaciones', href: '/academia#certificaciones' },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Facebook', href: '#', icon: 'groups' },
  { label: 'TikTok', href: '#', icon: 'music_video' },
  { label: 'LinkedIn', href: '#', icon: 'work' },
  { label: 'YouTube', href: '#', icon: 'play_circle' },
  { label: 'WhatsApp', href: '#', icon: 'chat' },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: 'Privacy Protocol', href: '/privacy-protocol' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Legal Notice', href: '/legal-notice' },
];

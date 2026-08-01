export interface LegalPage {
  slug: 'privacy-protocol' | 'terms-of-service' | 'legal-notice';
  title: string;
  shortTitle: string;
  description: string;
  lang: 'es' | 'en';
  breadcrumbs: string[];
  classificationTag: string;
  version?: string;
  secureNodeId?: string;
  status?: string;
  href: string;
  breadcrumbNav: string;
}

export const LEGAL_PAGES: LegalPage[] = [
  {
    slug: 'privacy-protocol',
    title: 'Privacy Protocol',
    shortTitle: 'Privacy Protocol',
    description:
      'Política de privacidad, protección de datos y derechos del usuario de RedBox Cybersecurity.',
    lang: 'es',
    breadcrumbs: ['SYSTEM', 'GOVERNANCE', 'PRIVACY_DISPATCH_v2.4'],
    classificationTag: '[ SECURITY CLEARANCE: LEVEL 4 ]',
    version: '2.4.0-BETA',
    secureNodeId: 'RDX-77',
    status: 'ACTIVE_DEFENSE',
    href: '/privacy-protocol',
    breadcrumbNav: 'SYSTEM › GOVERNANCE › PRIVACY_DISPATCH_v2.4',
  },
  {
    slug: 'terms-of-service',
    title: 'Terms of Service',
    shortTitle: 'Terms of Service',
    description:
      'Términos de servicio y condiciones operacionales de RedBox Cybersecurity.',
    lang: 'es',
    breadcrumbs: ['SYSTEM', 'GOVERNANCE', 'OPERATIONAL_DISPATCH_v2.4'],
    classificationTag: '[ CLASSIFIED // OPERATIONAL PROTOCOL ]',
    version: '2.4.0-BETA',
    secureNodeId: 'RDX-77',
    status: 'ACTIVE_DEFENSE',
    href: '/terms-of-service',
    breadcrumbNav: 'SYSTEM › GOVERNANCE › OPERATIONAL_DISPATCH_v2.4',
  },
  {
    slug: 'legal-notice',
    title: 'Aviso Legal',
    shortTitle: 'Legal Notice',
    description:
      'Aviso legal, identidad de la companía y jurisdicción de RedBox Cybersecurity.',
    lang: 'es',
    breadcrumbs: ['SYSTEM', 'GOVERNANCE', 'LEGAL_DISPATCH_v2.4'],
    classificationTag: '[ PUBLIC // LEGAL_NOTICE ]',
    version: '2.4.0',
    secureNodeId: 'RDX-77',
    status: 'COMPLIANT',
    href: '/legal-notice',
    breadcrumbNav: 'SYSTEM › GOVERNANCE › LEGAL_DISPATCH_v2.4',
  },
];

export function getLegalPageBySlug(slug: string): LegalPage | undefined {
  return LEGAL_PAGES.find((page) => page.slug === slug);
}

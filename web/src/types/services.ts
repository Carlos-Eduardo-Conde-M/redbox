export type ServiceId =
  | 'pentesting'
  | 'red-team'
  | 'cloud-security'
  | 'wireless-audit'
  | 'web-pentesting'
  | 'mobile-security'
  | 'ethical-hacking'
  | 'compliance-audit';

export interface Service {
  id: ServiceId;
  title: string;
  href: string;
  blurb: string;
  description?: string;
  tags?: string[];
  icon?: string;
}

export interface Course {
  id: string;
  title: string;
  blurb: string;
  duration?: string;
  price?: string;
  badge?: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumnLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterColumnLink[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
  customIcon?: 'facebook' | 'tiktok' | 'linkedin' | 'youtube' | 'whatsapp';
}

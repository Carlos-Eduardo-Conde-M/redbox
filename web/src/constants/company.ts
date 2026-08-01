export const COMPANY = {
  legalName: 'RedBox Cybersecurity',
  email: 'info@redboxcibersecurity.com',
  phone: '+591 73271900',
  phoneRaw: '+591 73271900',
  address: 'Avenida 16 de Julio, La Paz Bolivia',
  addressLines: ['Avenida 16 de Julio', 'La Paz, Bolivia'],
  hours: '24/7/365',
} as const;

export type Company = typeof COMPANY;

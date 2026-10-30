/**
 * Central copy for the reconstructed UNION Cafe page.
 *
 * Address, hours, phone, email, Instagram, and the WiFi line match the
 * cafe’s Instagram bio and Google listing (see docs/PHOTO-CREDITS.md).
 * Customer-upload photos still need rights confirmation. There is no
 * owner-supplied menu.
 */

export const needsOwnerConfirmation = {
  address: false,
  hours: false,
  email: false,
  instagram: false,
  mapLink: false,
  phone: false,
  wifi: false,
  photographyGm: true,
  menu: true,
} as const;

/** TODO(owner): replace the descriptive cards with the real menu. Do not invent items. */

export const links = {
  instagram: 'https://www.instagram.com/unioncafenyc/',
  map: 'https://maps.app.goo.gl/oQBU6zFPd7KSW1ob9',
  email: 'unioncafenyc@gmail.com',
} as const;

export const fluidColors = ['#f4dfb8', '#b77b44', '#6b351e', '#d8ad78'] as const;

/** Text nodes in the marquee. Asterisks render in separate spans, matching the snapshot. */
export const tickerParts = [
  'COFFEE BRINGS US TOGETHER ',
  ' MADE FRESH, EVERYDAY ',
  ' YOUR HARLEM HANGOUT ',
  ' COFFEE BRINGS US TOGETHER ',
  ' MADE FRESH, EVERYDAY ',
] as const;

export const photoCards = [
  {
    href: '#favorites',
    photo: 'drinks' as const,
    alt: 'Iced drinks in Union Cafe cups, from the cafe’s Instagram',
    label: 'THE COFFEE ',
  },
  {
    href: '#together',
    photo: 'banquette' as const,
    alt: 'Banquette and tables inside Union Cafe',
    label: 'THE FEELING ',
  },
  {
    href: '#visit',
    photo: 'case' as const,
    alt: 'Pastries in the Union Cafe case',
    label: 'THE LITTLE THINGS ',
  },
] as const;

export const picks = [
  {
    name: 'The coffee ritual',
    tag: 'ESPRESSO & SLOW MOMENTS',
    photo: 'drinks' as const,
    copy: 'Your first sip. Your favorite part of the morning. Come find your coffee at Union.',
  },
  {
    name: 'Something sweet',
    tag: 'FRESH FROM THE COUNTER',
    photo: 'case' as const,
    copy: 'A little treat makes a good day better. See what’s fresh at the counter today.',
  },
  {
    name: 'Make it your usual',
    tag: 'ICED, HOT, YOUR WAY',
    photo: 'banquette' as const,
    copy: 'Find a seat, catch up with a friend, and stay for another sip.',
  },
] as const;

/** Facts from the cafe’s Instagram bio and Google listing, 2026-10-30. See docs/PHOTO-CREDITS.md. */
export const visitFacts = {
  streetLine: '115 W 142nd St',
  cityLine: 'New York, NY 10030',
  heroLocator: '115 W 142ND ST · NYC',
  days: 'Every day',
  hours: '8 AM–6 PM',
  phone: '(212) 281-7450',
  phoneHref: 'tel:+12122817450',
  wifi: 'Yes, we have WiFi',
  hoursNote: 'Hours from Union Cafe’s Instagram and Google listing. Check before a holiday visit.',
} as const;

export const conceptNote =
  'DESIGN PREVIEW · Instagram photos are the cafe’s own posts. Other photos are customer uploads and need rights confirmation before production. Menu still needs the owner.';

export const footer = {
  wordmark: 'UNION',
  brand: 'union cafe',
  blurb: 'Coffee, fresh little things, and a place to come together. See you in Harlem.',
  tagline: 'Good coffee. Better together.',
  preset: 'sunny',
  palette: { background: '#f6ce55', ink: '#342315', accent: '#a24928' },
  fontFamily: 'Arial Black, Arial, sans-serif',
  serifFamily: 'Georgia, serif',
  height: '700px',
  crew: [
    {
      kind: 'yeti',
      letter: 0,
      seat: 'front',
      name: 'Bean',
      says: 'Coffee first. Everything else later.',
    },
    { kind: 'bird', letter: 1, seat: 'top', name: 'Pip', says: 'Meet me at Union!' },
    {
      kind: 'kid',
      letter: 2,
      seat: 'top',
      name: 'Sunny',
      says: 'My usual? A little good company.',
    },
    { kind: 'ghost', letter: 3, seat: 'behind', name: 'Steam', says: 'Fresh cup, fresh start.' },
    {
      kind: 'cat',
      letter: 4,
      seat: 'front',
      flip: true,
      name: 'Crumb',
      says: 'Save me a pastry.',
    },
  ],
  doodles: ['sandwich', 'heart', 'star', 'sparkle', 'spiral'],
  columns: [
    {
      title: 'Come together',
      links: [
        { label: 'Our favorites', href: '#favorites' },
        { label: 'Find Union', href: '#visit' },
      ],
    },
    {
      title: 'Keep in touch',
      links: [
        { label: 'Instagram ↗', href: links.instagram },
        { label: 'Say hello', href: `mailto:${links.email}` },
      ],
    },
  ],
  actions: [
    { label: 'Come on in', href: links.map, variant: 'solid', icon: 'heart' },
    { label: 'Follow Union', href: links.instagram, variant: 'outline', icon: 'sparkle' },
  ],
  legal: [] as { label: string; href: string }[],
  socials: [] as { label: string; href: string }[],
  copyright: '© 2026 Union Cafe · Website concept by Timeless Visions.',
};

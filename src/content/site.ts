/**
 * Central copy for the reconstructed UNION Cafe page.
 *
 * Strings match the recovered production snapshot so the page stays visually
 * faithful. Business facts below are NOT owner-confirmed. They are carried
 * forward from the public prototype and must be verified before an official
 * launch. Photography is illustrative and is loaded from the immutable
 * original deployment host; the JPEGs are not committed here because
 * redistribution rights are not established.
 */

export const needsOwnerConfirmation = {
  address: true,
  hours: true,
  email: true,
  instagram: true,
  mapLink: true,
  photography: true,
  menu: true,
} as const;

export const imageHost = 'https://union-cafe-31ppw27i8-on-point100.vercel.app';

export type PhotoName = 'coffee' | 'cafe' | 'pastry' | 'latte';

export function photoSrc(name: PhotoName): string {
  return `${imageHost}/images/${name}.jpg`;
}

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
    image: 'coffee' as const,
    alt: 'Iced coffee inspiration',
    label: 'THE COFFEE ',
  },
  {
    href: '#together',
    image: 'cafe' as const,
    alt: 'Cafe atmosphere inspiration',
    label: 'THE FEELING ',
  },
  {
    href: '#visit',
    image: 'pastry' as const,
    alt: 'Fresh pastry inspiration',
    label: 'THE LITTLE THINGS ',
  },
] as const;

export const picks = [
  {
    name: 'The coffee ritual',
    tag: 'ESPRESSO & SLOW MOMENTS',
    image: 'latte' as const,
    copy: 'Your first sip. Your favorite part of the morning. Come find your coffee at Union.',
  },
  {
    name: 'Something sweet',
    tag: 'FRESH FROM THE COUNTER',
    image: 'pastry' as const,
    copy: 'A little treat makes a good day better. See what’s fresh at the counter today.',
  },
  {
    name: 'Make it your usual',
    tag: 'ICED, HOT, YOUR WAY',
    image: 'coffee' as const,
    copy: 'Find a seat, catch up with a friend, and stay for another sip.',
  },
] as const;

/** Shown on the recovered site. Treat as a proposal until the owner confirms it. */
export const visitFacts = {
  streetLine: '115 W 142nd Street',
  cityLine: 'New York, NY 10030',
  heroLocator: '115 W 142ND ST · NYC',
  days: 'Every day',
  hours: '8:00 AM – 6:00 PM',
  hoursNote: 'Hours from Union’s Instagram. Check before a holiday visit.',
} as const;

export const conceptNote =
  'DESIGN PREVIEW · Illustrative photography; replace with Union’s own photos before public launch. Menu and ordering integration pending owner details.';

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

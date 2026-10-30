import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
  conceptNote,
  footer,
  links,
  needsOwnerConfirmation,
  photoCards,
  visitFacts,
} from '../../src/content/site';

describe('site content', () => {
  it('keeps the animated wordmark spelled UNION', () => {
    expect(footer.wordmark).toBe('UNION');
    expect(footer.crew).toHaveLength(5);
  });

  it('uses verified listing facts and still flags the menu', () => {
    expect(needsOwnerConfirmation.address).toBe(false);
    expect(needsOwnerConfirmation.hours).toBe(false);
    expect(needsOwnerConfirmation.phone).toBe(false);
    expect(needsOwnerConfirmation.menu).toBe(true);
    expect(needsOwnerConfirmation.photographyGm).toBe(true);
    expect(visitFacts.streetLine).toBe('115 W 142nd St');
    expect(visitFacts.cityLine).toBe('New York, NY 10030');
    expect(visitFacts.hours).toBe('8 AM–6 PM');
    expect(visitFacts.phone).toBe('(212) 281-7450');
    expect(visitFacts.wifi).toBe('Yes, we have WiFi');
    expect(visitFacts.hoursNote).toMatch(/Instagram/);
    expect(conceptNote).toMatch(/rights confirmation/);
    expect(conceptNote).not.toMatch(/plantain|coquito|date latte/i);
    expect(links.instagram).toBe('https://www.instagram.com/unioncafenyc/');
    expect(links.email).toBe('unioncafenyc@gmail.com');
    expect(photoCards.map((card) => card.photo)).toEqual(['drinks', 'banquette', 'case']);
  });

  it('does not commit illustrative JPEGs into public/', () => {
    const entries = readFileSync('public/favicon.svg', 'utf8');
    expect(entries).toContain('svg');
    expect(() => readFileSync('public/images/latte.jpg')).toThrow();
  });

  it('keeps noindex in the document shell and a Vite output directory', () => {
    const html = readFileSync('index.html', 'utf8');
    expect(html).toContain('noindex,nofollow');
    expect(html).toContain('UNION CAFE — A little more together.');
    const vercel = JSON.parse(readFileSync('vercel.json', 'utf8')) as {
      installCommand: string;
      buildCommand: string;
      outputDirectory: string;
      framework: string;
    };
    expect(vercel.framework).toBe('vite');
    expect(vercel.installCommand).toBe('npm ci --include=dev');
    expect(vercel.buildCommand).toBe('npm run build');
    expect(vercel.outputDirectory).toBe('dist');
  });
});

describe('reconstructed motion contract', () => {
  const runtime = readFileSync('src/motion/recoveredRuntime.js', 'utf8');

  it('is labeled reconstructed and preserves the safety behaviors', () => {
    expect(runtime).toMatch(/RECONSTRUCTED/);
    expect(runtime).toContain('document.hidden');
    expect(runtime).toContain('prefers-reduced-motion');
    expect(runtime).toContain('pan-y');
    expect(runtime).toContain('captureTouch');
    expect(runtime).toContain('Coffee shader initialization');
    expect(runtime).toContain('webglcontextlost');
  });
});

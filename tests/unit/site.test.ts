import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
  conceptNote,
  footer,
  imageHost,
  links,
  needsOwnerConfirmation,
  photoSrc,
  visitFacts,
} from '../../src/content/site';

describe('site content', () => {
  it('keeps the animated wordmark spelled UNION', () => {
    expect(footer.wordmark).toBe('UNION');
    expect(footer.crew).toHaveLength(5);
  });

  it('marks unverified business facts for owner confirmation', () => {
    expect(needsOwnerConfirmation.address).toBe(true);
    expect(needsOwnerConfirmation.hours).toBe(true);
    expect(needsOwnerConfirmation.email).toBe(true);
    expect(needsOwnerConfirmation.instagram).toBe(true);
    expect(needsOwnerConfirmation.mapLink).toBe(true);
    expect(needsOwnerConfirmation.photography).toBe(true);
    expect(needsOwnerConfirmation.menu).toBe(true);
    expect(visitFacts.hoursNote).toMatch(/Instagram/);
    expect(conceptNote).toMatch(/Illustrative photography/);
    expect(conceptNote).toMatch(/pending owner details/);
  });

  it('loads illustrative photos from the immutable deployment host', () => {
    expect(photoSrc('latte')).toBe(`${imageHost}/images/latte.jpg`);
    expect(photoSrc('cafe')).toContain('union-cafe-31ppw27i8-on-point100.vercel.app');
    expect(links.instagram).toBe('https://www.instagram.com/unioncafenyc/');
    expect(links.map).toBe('https://maps.app.goo.gl/oQBU6zFPd7KSW1ob9');
    expect(links.email).toBe('unioncafenyc@gmail.com');
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

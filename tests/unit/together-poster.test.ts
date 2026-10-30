import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('together poster', () => {
  const source = readFileSync('src/components/TogetherSection.tsx', 'utf8');

  it('keeps the line and drops the asterisk', () => {
    expect(source).toContain('YOU');
    expect(source).toContain('+ ME');
    expect(source).toContain('+ COFFEE.');
    expect(source).toContain('that’s a good union.');
    expect(source).not.toContain('✳');
    expect(source).toContain('aria-hidden');
  });

  it('records the font license and the owner-supplied crema', () => {
    expect(source).toContain('SIL Open Font License');
    expect(source).toContain('@fontsource/anton');
    expect(source).toContain('owner-supplied');
    const css = readFileSync('src/styles/together-poster.css', 'utf8');
    expect(css).toContain('/textures/espresso-crema.jpg');
    expect(css).toContain('prefers-reduced-motion');
    const bytes = readFileSync('public/textures/espresso-crema.jpg');
    expect(bytes.byteLength).toBeGreaterThan(1000);
    expect(bytes.byteLength).toBeLessThan(120_000);
  });
});

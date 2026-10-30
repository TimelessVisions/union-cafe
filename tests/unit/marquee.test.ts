import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { tickerParts } from '../../src/content/site';

function channel(value: number) {
  const scaled = value / 255;
  return scaled <= 0.04045 ? scaled / 12.92 : ((scaled + 0.055) / 1.055) ** 2.4;
}

function contrast(foreground: [number, number, number], background: [number, number, number]) {
  const lum = (rgb: [number, number, number]) =>
    0.2126 * channel(rgb[0]) + 0.7152 * channel(rgb[1]) + 0.0722 * channel(rgb[2]);
  const lighter = Math.max(lum(foreground), lum(background));
  const darker = Math.min(lum(foreground), lum(background));
  return (lighter + 0.05) / (darker + 0.05);
}

describe('marquee art', () => {
  it('keeps the recovered marquee words', () => {
    expect(tickerParts).toEqual([
      'COFFEE BRINGS US TOGETHER ',
      ' MADE FRESH, EVERYDAY ',
      ' YOUR HARLEM HANGOUT ',
      ' COFFEE BRINGS US TOGETHER ',
      ' MADE FRESH, EVERYDAY ',
    ]);
  });

  it('points at the painting crops and records rights', () => {
    const source = readFileSync('src/components/Ticker.tsx', 'utf8');
    expect(source).toContain('/art/cloud-coffee-cup.png');
    expect(source).toContain('karenmvaz');
    expect(source).toContain('https://www.cosmos.so/e/1815613725');
    expect(source).toContain("MS '16");
    expect(source).not.toContain('TEMP');
    expect(source).not.toContain('✳');
    const css = readFileSync('src/styles/ticker-sky.css', 'utf8');
    expect(css).toContain('/art/cloud-coffee-sky.jpg');
    expect(css).toContain('#1a120e');
    expect(readFileSync('public/art/cloud-coffee-cup.png').byteLength).toBeGreaterThan(8000);
    expect(readFileSync('public/art/cloud-coffee-sky.jpg').byteLength).toBeLessThan(80_000);
  });

  it('keeps dark marquee type above WCAG AA on the sky stops', () => {
    const ink: [number, number, number] = [0x1a, 0x12, 0x0e];
    expect(contrast(ink, [0x8f, 0xc3, 0xbd])).toBeGreaterThan(4.5);
    expect(contrast(ink, [0xcf, 0xe6, 0xc9])).toBeGreaterThan(4.5);
  });
});

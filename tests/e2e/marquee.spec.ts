import { expect, test } from '@playwright/test';
import { tickerParts } from '../../src/content/site';

test('the marquee keeps its words and uses the cup painting', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const ticker = page.locator('.ticker');
  const text = await ticker.innerText();
  for (const phrase of tickerParts) {
    expect(text).toContain(phrase.trim());
  }
  expect(text).not.toContain('✳');
  const images = ticker.locator('img');
  await expect(images).toHaveCount(tickerParts.length);
  const sources = await images.evaluateAll((nodes) => nodes.map((node) => node.getAttribute('src')));
  expect(sources.every((src) => src === '/art/cloud-coffee-cup.png')).toBe(true);
  const alts = await images.evaluateAll((nodes) => nodes.map((node) => node.getAttribute('alt')));
  expect(alts.every((alt) => alt === '')).toBe(true);
  const color = await ticker.evaluate((node) => getComputedStyle(node).color);
  expect(color).toBe('rgb(26, 18, 14)');
});

test('the marquee does not scroll when reduced motion is on', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  const motion = await page.locator('.ticker > div').evaluate((node) => getComputedStyle(node).animationName);
  expect(motion).toBe('none');
  await expect(page.locator('.ticker img').first()).toBeVisible();
});

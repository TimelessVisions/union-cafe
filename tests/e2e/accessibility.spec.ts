import { expect, test } from '@playwright/test';

test('keyboard skip link, names, alts, and heading order', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();

  const images = page.locator('img');
  const count = await images.count();
  expect(count).toBeGreaterThan(0);
  for (let index = 0; index < count; index += 1) {
    const image = images.nth(index);
    const alt = await image.getAttribute('alt');
    const decorative = (await image.locator('xpath=ancestor::div[contains(@class,"ticker")]').count()) > 0;
    if (decorative) {
      expect(alt).toBe('');
    } else {
      expect(alt && alt.trim().length).toBeGreaterThan(0);
    }
  }

  const buttons = page.getByRole('button');
  const buttonCount = await buttons.count();
  for (let index = 0; index < buttonCount; index += 1) {
    const name = await buttons.nth(index).getAttribute('aria-label');
    const text = ((await buttons.nth(index).textContent()) || '').replace(/\s+/g, ' ').trim();
    expect(name || text).not.toBe('');
  }

  const levels = await page.locator('h1,h2,h3,h4').evaluateAll((nodes) =>
    nodes.map((node) => Number(node.tagName.slice(1))),
  );
  expect(levels[0]).toBe(1);
  expect(levels.filter((level) => level === 1)).toHaveLength(1);
  let previous = 0;
  for (const level of levels) {
    expect(level).toBeLessThanOrEqual(previous + 1);
    previous = level;
  }

  const contrast = await page.evaluate(() => {
    const relative = (color: string) => {
      const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (!match) return 0;
      const channel = (value: number) => {
        const scaled = value / 255;
        return scaled <= 0.03928 ? scaled / 12.92 : ((scaled + 0.055) / 1.055) ** 2.4;
      };
      const r = channel(Number(match[1]));
      const g = channel(Number(match[2]));
      const b = channel(Number(match[3]));
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    const ratio = (foreground: string, background: string) => {
      const lighter = Math.max(relative(foreground), relative(background));
      const darker = Math.min(relative(foreground), relative(background));
      return (lighter + 0.05) / (darker + 0.05);
    };
    const announcement = document.querySelector('.announcement');
    const favorites = document.querySelector('#favorites h2');
    if (!announcement || !favorites) return { announcement: 0, favorites: 0 };
    const announcementStyle = getComputedStyle(announcement);
    const favoritesStyle = getComputedStyle(favorites);
    const favoritesBackground = getComputedStyle(document.body).backgroundColor;
    return {
      announcement: ratio(announcementStyle.color, announcementStyle.backgroundColor),
      favorites: ratio(favoritesStyle.color, favoritesBackground),
    };
  });
  expect(contrast.announcement).toBeGreaterThan(4.5);
  expect(contrast.favorites).toBeGreaterThan(4.5);
});

import { expect, test } from '@playwright/test';

test('the together panel is a lime block of real text with hidden doors', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const art = page.locator('.together-art');
  await art.scrollIntoViewIfNeeded();
  await expect(art).toContainText('YOU');
  await expect(art).toContainText('+ ME');
  await expect(art).toContainText('+ COFFEE.');
  await expect(art).toContainText('that’s a good union.');
  await expect(art).not.toContainText('✳');
  await expect(art.locator('.poster-door')).toHaveCount(3);
  const hidden = await art.locator('.poster-door').evaluateAll((nodes) =>
    nodes.every((node) => node.getAttribute('aria-hidden') === 'true'),
  );
  expect(hidden).toBe(true);
  await expect(art).toHaveAttribute('data-reveal', 'open');
  const copy = page.locator('.together-copy');
  await expect(copy.getByRole('heading', { name: /Your cup/ })).toBeVisible();
  await expect(copy.getByRole('link', { name: 'Pull up a chair' })).toHaveAttribute('href', '#visit');
});

test('reduced motion shows the words with the doors already open', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const art = page.locator('.together-art');
  await art.scrollIntoViewIfNeeded();
  await expect(art).toHaveAttribute('data-reveal', 'open');
  const motion = await art.locator('.poster-door').evaluateAll((nodes) =>
    nodes.map((node) => {
      const style = getComputedStyle(node);
      const row = node.parentElement?.getBoundingClientRect().width ?? 1;
      const visual = node.getBoundingClientRect().width;
      return {
        transition: style.transitionDuration,
        cover: visual / row,
      };
    }),
  );
  for (const door of motion) {
    expect(door.transition === '0s' || door.transition.startsWith('0s')).toBe(true);
    expect(door.cover).toBeLessThan(0.9);
  }
  const coffee = art.getByText('+ COFFEE.');
  await expect(coffee).toBeVisible();
});

for (const viewport of [
  { name: '320', width: 320, height: 700 },
  { name: '390', width: 390, height: 844 },
  { name: '1440', width: 1440, height: 900 },
]) {
  test(`together panel does not overflow at ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/');
    await page.locator('#together').scrollIntoViewIfNeeded();
    const box = await page.evaluate(() => {
      const art = document.querySelector('.together-art');
      const rect = art?.getBoundingClientRect();
      return {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        right: rect ? rect.right : 0,
        left: rect ? rect.left : 0,
      };
    });
    expect(box.scrollWidth).toBeLessThanOrEqual(box.clientWidth + 1);
    expect(box.left).toBeGreaterThanOrEqual(-1);
    expect(box.right).toBeLessThanOrEqual(box.clientWidth + 1);
  });
}

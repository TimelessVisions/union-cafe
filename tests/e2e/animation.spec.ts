import { expect, test } from '@playwright/test';

test('the UNION footer spells the word and animates on entry', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  const footer = page.locator('footer.dcf');
  await expect(footer).toHaveAttribute('data-play', '0');
  await footer.scrollIntoViewIfNeeded();
  await expect(footer).toHaveAttribute('data-play', '1');
  await expect(page.locator('.dcf text')).toHaveText(['U', 'N', 'I', 'O', 'N']);
  const box = await footer.boundingBox();
  expect(box?.width).toBeGreaterThan(200);
  expect(box?.height).toBeGreaterThan(200);
});

test('coffee fluid stays pointer-friendly and does not capture vertical pan', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(String(error)));
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  const canvas = page.getByRole('img', { name: 'Interactive espresso and cream fluid animation' });
  await expect(canvas).toBeVisible();
  const touch = await page.locator('.coffee-fluid').evaluate((element) => getComputedStyle(element).touchAction);
  expect(touch).toBe('pan-y');
  const box = await canvas.boundingBox();
  expect(box).not.toBeNull();
  if (box) {
    await page.mouse.move(box.x + box.width * 0.3, box.y + box.height * 0.45);
    await page.mouse.move(box.x + box.width * 0.7, box.y + box.height * 0.55, { steps: 8 });
  }
  await page.getByRole('button', { name: 'Pause coffee animation' }).click();
  await page.getByRole('button', { name: 'Play coffee animation' }).click();
  await page.getByRole('button', { name: '↻ Stir the coffee' }).click();
  expect(errors).toEqual([]);
});

test('scrolling the footer off the hero leaves the page usable', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.locator('footer.dcf').scrollIntoViewIfNeeded();
  await expect(page.locator('.dcf text')).toHaveText(['U', 'N', 'I', 'O', 'N']);
  await page.locator('.hero').scrollIntoViewIfNeeded();
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

import { expect, test } from '@playwright/test';

test('reduced motion keeps the wordmark and stops decorative loops', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  const footer = page.locator('footer.dcf');
  await footer.scrollIntoViewIfNeeded();
  await expect(footer).toHaveAttribute('data-play', '1');
  await expect(page.locator('.dcf text')).toHaveText(['U', 'N', 'I', 'O', 'N']);
  const motion = await page.evaluate(() => {
    const letter = document.querySelector('.dcf-letter');
    const ticker = document.querySelector('.ticker > div');
    return {
      letter: letter ? getComputedStyle(letter).animationName : '',
      ticker: ticker ? getComputedStyle(ticker).animationName : '',
      opacity: letter ? getComputedStyle(letter).opacity : '0',
    };
  });
  expect(motion.letter).toBe('none');
  expect(motion.ticker).toBe('none');
  expect(Number(motion.opacity)).toBeGreaterThan(0.9);
});

test('a missing WebGL context shows the static coffee fallback', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(String(error)));
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function getContext(
      this: HTMLCanvasElement,
      type: string,
      ...rest: unknown[]
    ) {
      if (type === 'webgl' || type === 'webgl2' || type === 'webgl2-compute') return null;
      return original.call(this, type as '2d', ...(rest as []));
    } as typeof HTMLCanvasElement.prototype.getContext;
  });
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1, name: /A little more/ })).toBeVisible();
  await expect(page.locator('canvas.coffee-marble')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Find your favorite' })).toBeVisible();
  expect(errors).toEqual([]);
});

test('a hidden document does not remove the hero', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('canvas').first()).toBeVisible();
  await page.evaluate(() => {
    Object.defineProperty(document, 'hidden', { configurable: true, get: () => true });
    Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'hidden' });
    document.dispatchEvent(new Event('visibilitychange'));
  });
  await page.waitForTimeout(300);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.locator('.coffee-fluid canvas').first()).toBeAttached();
});

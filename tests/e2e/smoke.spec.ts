import { expect, test } from '@playwright/test';

test('homepage mounts the cafe sections', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(String(error)));
  const response = await page.goto('/');
  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle('UNION CAFE — A little more together.');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex,nofollow');
  await expect(page.getByRole('heading', { level: 1, name: /A little more/ })).toBeVisible();
  await expect(page.locator('#favorites')).toBeVisible();
  await expect(page.locator('#together')).toBeVisible();
  await expect(page.locator('#visit')).toBeVisible();
  await expect(page.locator('.dcf')).toBeAttached();
  await expect(page.getByText('DESIGN PREVIEW')).toBeVisible();
  expect(errors).toEqual([]);
});

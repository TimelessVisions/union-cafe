import { expect, test } from '@playwright/test';

const expectedLinks = [
  { name: 'Skip to content', href: '#main' },
  { name: 'The good stuff', href: '#favorites' },
  { name: 'Find us', href: '#visit' },
  { name: 'Find your favorite', href: '#favorites' },
  { name: 'Meet us at Union', href: '#visit' },
  { name: 'THE COFFEE', href: '#favorites' },
  { name: 'THE FEELING', href: '#together' },
  { name: 'THE LITTLE THINGS', href: '#visit' },
  { name: 'Pull up a chair', href: '#visit' },
  { name: 'Our favorites', href: '#favorites' },
  { name: 'Find Union', href: '#visit' },
  { name: 'Say hello', href: 'mailto:unioncafenyc@gmail.com' },
  { name: 'unioncafenyc@gmail.com', href: 'mailto:unioncafenyc@gmail.com' },
];

test('in-page and contact links point at the recovered targets', async ({ page }) => {
  await page.goto('/');
  for (const link of expectedLinks) {
    const anchor = page.getByRole('link', { name: link.name }).first();
    await expect(anchor).toHaveAttribute('href', link.href);
  }
  await expect(page.getByRole('link', { name: 'Instagram', exact: true })).toHaveAttribute(
    'href',
    'https://www.instagram.com/unioncafenyc/',
  );
  await expect(page.getByRole('link', { name: 'Get directions' })).toHaveAttribute(
    'href',
    'https://maps.app.goo.gl/oQBU6zFPd7KSW1ob9',
  );
  await expect(page.getByRole('link', { name: '@unioncafenyc' })).toHaveAttribute(
    'href',
    'https://www.instagram.com/unioncafenyc/',
  );
});

test('header anchors scroll to the named sections', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  await page.getByRole('link', { name: 'The good stuff' }).click();
  await expect(page).toHaveURL(/#favorites$/);
  await expect(page.locator('#favorites')).toBeInViewport();
  await page.getByRole('link', { name: 'Find us' }).click();
  await expect(page).toHaveURL(/#visit$/);
  await expect(page.locator('#visit')).toBeInViewport();
});

test('the phone menu opens, navigates, and closes', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Open menu' });
  await toggle.click();
  await expect(page.getByRole('button', { name: 'Close menu' })).toBeVisible();
  await page.getByRole('link', { name: 'Find us' }).click();
  await expect(page).toHaveURL(/#visit$/);
  await expect(page.getByRole('button', { name: 'Open menu' })).toBeVisible();
});

test('a favorites card reveals its copy', async ({ page }) => {
  await page.goto('/');
  const button = page.getByRole('button', { name: 'Read about The coffee ritual' });
  await button.click();
  await expect(page.locator('#pick-0')).toHaveText(/Your first sip/);
  await expect(button).toHaveAttribute('aria-expanded', 'true');
});

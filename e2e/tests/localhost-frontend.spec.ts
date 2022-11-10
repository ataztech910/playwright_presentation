import { test, expect } from '@playwright/test';
import { SERVER_URL } from './namespace';

test('Localhost should load and provide elements', async ({ page }) => {
  await page.goto(SERVER_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create Next App/);

  // create a locator
  const getStarted = page.locator('h1 a');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', 'https://nextjs.org/docs/getting-started');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*started/);
});

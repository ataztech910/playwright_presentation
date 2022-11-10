import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright'; // 1
import { SERVER_URL } from './namespace';

test.describe('Localhost test', () => { // 2
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto(SERVER_URL); // 3

    const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
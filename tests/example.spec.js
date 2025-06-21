import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/word-app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/单词学习/);
}); 
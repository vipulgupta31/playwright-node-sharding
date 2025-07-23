import { test, expect } from '@playwright/test';

test('Selenium Playground title check', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/');
  await expect(page).toHaveTitle("Selenium Grid Online | Run Selenium Test On Cloud");
});

test('Home page header text', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/');
  await expect(page.getByText('Checkbox Demo')).toBeVisible;
});
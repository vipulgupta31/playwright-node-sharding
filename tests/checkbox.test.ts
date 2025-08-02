import { test, expect } from '@playwright/test';

test('Checkbox demo page loads', async ({ page }) => {
 await page.goto('https://www.lambdatest.com/selenium-playground/');
 await page.getByText('Checkbox Demo').click();
 await expect(page.getByText('Single Checkbox Demo')).toBeVisible();
});

test('Checkbox checked on click', async ({ page }) => {
 await page.goto('https://www.lambdatest.com/selenium-playground/');
 await page.getByText('Checkbox Demo').click();
 const checkbox = await page.locator("input[type='checkbox']");
 await checkbox.nth(0).click();
 await expect(page.getByText('Checked!')).toBeVisible();
});

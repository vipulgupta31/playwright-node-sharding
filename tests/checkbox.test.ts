import { test, expect } from '@playwright/test';

test('Checkbox demo page loads', async ({ page }) => {
 await page.goto('https://www.lambdatest.com/selenium-playground/');
 await page.getByText('Checkbox Demo').click;
 await page.getByText('Single Checkbox Demo').isVisible;
});

test('Checkbox checked on click', async ({ page }) => {
 await page.goto('https://www.lambdatest.com/selenium-playground/');
 await page.getByText('Checkbox Demo').click;
 await page.getByText('Single Checkbox Demo').isVisible;
 const checkbox = await page.locator('type=checkbox');
 await checkbox.click;
 await page.getByText('Checked!').isVisible;
});
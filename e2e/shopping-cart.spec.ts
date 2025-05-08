import { test, expect } from '@playwright/test';

test('Registration + Login + Add to cart + View Cart', async ({ page }) => {
  await page.goto('http://localhost:4200/register');

  // Register
  await page.fill('input[formcontrolname="email"]', 'test@example.com');
  await page.fill('input[formcontrolname="password"]', 'Test1234');
  await page.fill('input[formcontrolname="confirmPassword"]', 'Test1234');
  await page.click('button[type="submit"]');

  // Login
  await page.goto('http://localhost:4200/login');
  await page.fill('input[formcontrolname="email"]', 'test@example.com');
  await page.fill('input[formcontrolname="password"]', 'Test1234');
  await page.click('button[type="submit"]');

  // Go to products and add one
  await page.goto('http://localhost:4200/application/products');
  await page.click('text=Add to Cart');

  // Go to cart and verify
  await page.goto('http://localhost:4200/application/cart');
  await expect(page.locator('.cart-item')).toHaveCount(1);
});

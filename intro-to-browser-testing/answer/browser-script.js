import { browser } from "k6/browser";
import { fail } from 'k6';
import { expect } from "https://jslib.k6.io/k6-testing/0.5.0/index.js";

const BASE_URL = "https://quickpizza.grafana.com";

export const options = {
  scenarios: {
    ui: {
      executor: "shared-iterations",
      vus: 1,
      iterations: 1,
      options: {
        browser: {
          type: "chromium",
        },
      },
    },
  },
};

export default async function() {
  const page = await browser.newPage();

  try {
    await page.goto(BASE_URL);

    const loginButton = await page.locator('//a[. = "Login"]');
    await loginButton.click();

    const usernameField = await page.locator('#username');
    await usernameField.type('default', { delay: 30 });
    const passwordField = await page.locator('#password');
    await passwordField.type('12345678', { delay: 30 });

    const signInButton = await page.locator('//button[. = "Sign in"]');
    await signInButton.click();

    const logoutButton = await page.locator('//button[. = "Logout"]');
    await logoutButton.waitFor({ state: 'visible' });

    expect(logoutButton).toBeVisible();
    expect(logoutButton).toHaveText('Logout');
  } catch (error) {
    fail(`Browser iteration failed: ${error.message}`);
  } finally {
    await page.close();
  }
}
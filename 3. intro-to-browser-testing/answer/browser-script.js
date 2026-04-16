import { browser } from "k6/browser";
import exec from "k6/execution"
import { expect } from "https://jslib.k6.io/k6-testing/0.6.1/index.js";

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

    const loginButton = page.locator('//a[. = "Login"]');
    await loginButton.click();

    const usernameField = page.locator('#username');
    await usernameField.type('default', { delay: 30 });
    const passwordField = page.locator('#password');
    await passwordField.type('12345678', { delay: 30 });

    const signInButton = page.locator('//button[. = "Sign in"]');
    await signInButton.click();

    const logoutButton = page.locator('//button[. = "Logout"]');
    await logoutButton.waitFor({ state: 'visible' });

    expect(logoutButton).toBeVisible();
    expect(logoutButton).toHaveText('Logout');
  } catch (error) {
    exec.test.fail(`Browser test failed: ${error.message}`)
  } finally {
    await page.close();
  }
}
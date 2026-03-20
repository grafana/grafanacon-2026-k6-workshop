# k6 Browser Code Snippets

Quick reference for the browser testing exercise. Copy these snippets into your script as you work through the login flow.

## Selectors

Use these selectors with `page.locator()` to find elements on the QuickPizza page:

| Element        | Selector                |
| -------------- | ----------------------- |
| Login button   | `//a[. = "Login"]`      |
| Username field | `#username`             |
| Password field | `#password`             |
| Sign in button | `//button[. = "Sign in"]` |
| Logout button  | `//button[. = "Logout"]`  |

---

## Clicking elements

Use `page.locator()` to find an element, then call `.click()`:

```js
const loginButton = await page.locator('//a[. = "Login"]');
await loginButton.click();
```

## Typing in input fields

Use `.type()` to enter text into username and password fields. See the [locator.type() docs](https://grafana.com/docs/k6/latest/javascript-api/k6-browser/locator/type/) for more options.

```js
const usernameField = await page.locator('#username');
await usernameField.type('default', { delay: 30 });
```

**Tip:** The `delay` option adds a 30ms pause between keystrokes, which simulates real user typing more closely.

## Adding checks

Use the `expect` function from jslib k6-testing to validate that elements behave correctly.

**Step 1:** Add this import at the top of your file (with your other imports):

```js
import { expect } from 'https://jslib.k6.io/k6-testing/0.6.1/index.js';
```

**Step 2:** After the login completes, add checks for the logout button. You may want to wait for it to be visible first:

```js
const logoutButton = await page.locator('//button[. = "Logout"]');
await logoutButton.waitFor({ state: 'visible' });

expect(logoutButton).toBeVisible();
expect(logoutButton).toHaveText('Logout');
```

# Introduction to Browser Testing

## Lab Exercise

In this exercise, you'll create a k6 browser script that automates the QuickPizza login flow. By the end, your script will:

- Log in to the QuickPizza demo site
- Add checks to verify the logout button is visible and displays the text "Logout"

**Need help?** Raise your hand and we'll come assist you!

### Step 1: Create a new test file

Create a new JavaScript file in a folder of your choice. For example, in your terminal:

```bash
touch browser-script.js
```

Then open the file in your IDE.

### Step 2: Add the starter code and complete the login flow

Copy the code below into your test file. Your job is to fill in the four steps in the middle.

**Reference:** [code-snippets.md](./code-snippets.md) has the selectors, API examples, and the `expect` import you'll need for the checks in step 4.

```js
import { browser } from "k6/browser";
import exec from "k6/execution"

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

    // 1. Click the Login button to open the login form

    // 2. Fill in the username and password fields (demo credentials: username "default", password "12345678")

    // 3. Click the Sign in button to submit the form

    // 4. Add checks: verify the Logout button is visible and has the text "Logout"

  } catch (error) {
    exec.test.fail(`Browser test failed: ${error.message}`);
  } finally {
    await page.close();
  }
}
```

### Step 3: Run your test

1. Save your file.
2. In your terminal, run (replace `browser-script.js` with your actual filename):

   ```bash
   K6_BROWSER_HEADLESS=false k6 run browser-script.js
   ```

   **Tip:** Setting `K6_BROWSER_HEADLESS=false` opens a visible browser window so you can watch the test run—helpful for debugging!

**Success looks like:** A browser window opens, navigates to QuickPizza, logs in automatically, and the test completes with your checks passing. You'll see output indicating the test passed.

## Lab Answer

Once you've completed the exercise, you can compare your solution with our sample answer. The reference implementation in [browser-script.js](./answer/browser-script.js) shows one way to automate the login flow and add the required checks.

## (Bonus) Step 4: Record a browser test in k6 Studio

k6 Studio can also record browser events. As a bonus exercise, try recording a browser test using k6 Studio and export the script locally!

We'll be here to help in case you get stuck. 

## Other Resources

Check out the following resources to know more about k6 browser and browser testing in general.

- [Documentation: k6 Browser](https://grafana.com/docs/k6/latest/using-k6-browser/)
- [Video: Browser testing with k6](https://www.youtube.com/watch?v=N7VJ9X5yAKo)
- [How to: Hybrid performance with k6 browser](https://grafana.com/docs/k6/latest/using-k6-browser/recommended-practices/hybrid-approach-to-performance/)
- [How to: Using the page object model pattern to improve your tests](https://grafana.com/docs/k6/latest/using-k6-browser/recommended-practices/page-object-model-pattern/)
- [How to: Migrate a Playwright script to k6](https://grafana.com/docs/k6/latest/using-k6-browser/migrate-from-playwright-to-k6/)

---

[← Previous exercise](../2.%20intro-to-k6-oss/) · [Workshop homepage](https://github.com/grafana/grafanacon-2026-k6-workshop) · [Next exercise →](../4.%20intro-to-synthetic-monitoring/)
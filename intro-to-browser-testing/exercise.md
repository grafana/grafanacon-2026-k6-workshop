# Introduction to Browser Testing

## Lab Exercise

For this exercise, you are going to create a k6 browser script that automates the QuickPizza login flow and create a new check. Sample checks to add include:

- Verifying a logout button's text
- Verifying that pizza ratings exist when you are logged in

If you have any questions, let us know and we'll come and help!

### Create a new test file

### Extend the test below to add the login automation flow 

```js
import { browser } from "k6/browser";
import { check } from 'k6';

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
  let checkData;
  const page = await browser.newPage();

  try {
    await page.goto(BASE_URL);

    // 1. Click login button

    // 2. Fill in username and password

    // 3. Click sign in button

    // 4. Add a check
    
  } catch (error) {
    fail(`Browser iteration failed: ${error.message}`);
  } finally {
    await page.close();
  }
}


```

### Run your test

Save your changes and run `k6 run <file-name.js>` to run your test.
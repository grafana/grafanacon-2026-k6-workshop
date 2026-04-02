# Introduction to Synthetic Monitoring

## Lab Exercise

In this exercise, you'll create your first Synthetic tests _(or checks as we call them)_. We'll reuse the k6 scipts we created in earlier exercises to showcase just how similar they are. By the end, you will have created two Synthetic Checks:

1. A Browser based Synthetic Check that verifies that QuickPizza login works as expected.
2. A HTTP Synthetic Check that verifies that QuickPizza home page is reachable.

**Need help?** Raise your hand and we'll come assist you!

## Exercise 1: Your first Browser Synthetic Test

### Step 1: Create a new test file

Copy the k6 Browser test you created in the Introduction to Browser Testing exercise: [browser-script.md](../intro-to-browser-testing/answer/browser-script.js)

Then open the file in your IDE.

### Step 2: Verify that the test is suitable as a Synthetics Test

Things to verify:
1. The Load: Make sure it runs **1 VU** for **1 Iteration**.
2. Explicit Pass/Fail: The test should fail if the tested functionality is not working. 

Inspect the test to Make sure above conditions are true.  
When you are confident in the test, run the test to validate that it's running as expected.

In your terminal, run the following command:

```bash
# replace `browser-script.js` with your actual filename

K6_BROWSER_HEADLESS=false k6 run browser-script.js
```

**Success looks like:** A browser window opens, navigates to QuickPizza, logs in automatically, and the test completes with your checks passing. You'll see output indicating the test passed.

Since that was so quick and did not require any modifications, let's continue with creating a HTTP Synthetic Test! 🎉

## Exercise 2: Your first HTTP Synthetic Test

Copy the code below into your test file. Your job is to fill in the four steps in the middle.

**Reference:** [code-snippets.md](./code-snippets.md) has the API examples you'll need in step 1, 2 and 3.

```js
import http from "k6/http"
import { sleep, check } from "k6"


export const options = {
  // 1. Add the right properties here for k6 to run 1 VU, 1 Iteration
}

export default function main() {
  const response = http.get("https://quickpizza.grafana.com")

  // 2. Create a k6 Check that validate that the http response status code is 200

  // 3. Add a condition that fails the test if the check fails

  sleep(1)
}
```

### Step 3: Run your test

1. Save your file.
2. In your terminal, run the following command:

```bash
# replace `http-synthetic-check.js` with your actual filename

k6 run http-synthetic-check.js
```

**Success looks like:** The test completes with your checks passing. You'll see a green ✔ output indicating the test passed 

## Lab Answer

Once you've completed the exercise, you can compare your solution with our sample answer. The reference implementation in [http-synthetic-check.js](./answer/http-synthetic-check.js) shows one way to check the home page reachability and fail based on a check.

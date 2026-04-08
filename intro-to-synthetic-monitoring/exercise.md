# Introduction to Synthetic Monitoring

## Lab Exercise

In this exercise, you'll create your first Synthetic test _(or check as we call them)_. By the end, you will have created:

- A HTTP Synthetic Check that verifies that QuickPizza home page is reachable.


**Need help?** Raise your hand and we'll come assist you!

## Step 1: Create a new test file

Create a new JavaScript file in a folder of your choice. For example, in your terminal:

```bash
touch http-synthetic-test.js
```

Then open the file in your IDE.

Copy the code below into your test file. Your job is to fill in the steps outlined as comments.

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

### Step 2: Run your test

1. Save your file.
2. In your terminal, run the following command:

```bash
# replace `http-synthetic-check.js` with your actual filename

k6 run http-synthetic-check.js
```

**Success looks like:** The test completes with your checks passing. You'll see a green ✔ output indicating the test passed 

## Lab Answer

Once you've completed the exercise, you can compare your solution with our sample answer. The reference implementation in [http-synthetic-check.js](./answer/http-synthetic-check.js) shows one way to check the home page reachability and fail based on a check.

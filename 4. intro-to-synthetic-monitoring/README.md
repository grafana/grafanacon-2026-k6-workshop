# Introduction to Synthetic Monitoring

## Lab Exercise

In this exercise, you'll create your first Synthetic test _(or check as we call them)_. By the end, you will have created:

- A simple Synthetic Check that verifies that QuickPizza home page is reachable.

**Need help?** Raise your hand and we'll come assist you!

### Step 1: Create a new test file

Create a new JavaScript file in a folder of your choice, then open the file in your IDE.

Copy the code below into your test file. Your job is to fill in the steps outlined as comments.

**Reference:** [code-snippets.md](./code-snippets.md) has examples and docs references that you'll need for the steps.

```js
import http from "k6/http"

export const options = {
  // 1. Add the right properties here for k6 to run 1 VU, 1 Iteration
}

export default function main() {
  const response = http.get("https://quickpizza.grafana.com")

  // 2. Add a condition that fails the test if the response status code is not 200
}
```

### Step 2: Run your test

1. Save your file.
2. In your terminal, run the following command:

```bash
# replace `synthetic-check.js` with your actual filename

k6 run synthetic-check.js
```

**Success looks like:** The test completes with your checks passing. You'll see a green ✔ output indicating the test passed 

## Lab Answer

Once you've completed the exercise, you can compare your solution with our sample answer. The reference implementation in [synthetic-check.js](./answer/synthetic-check.js) shows one way to check the home page reachability and fail based on a check.

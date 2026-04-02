# k6 Synthetics Code Snippets

Quick reference for the k6 Synthetics exercise. Copy these snippets into your script as you work through the HTTP check.


## Options

| Key        | Description                                                      |
| ---------- | ---------------------------------------------------------------- |
| vus        | Desired number of Virtual Users to spawn                         |
| iterations | Desired count of iterations to run                               |

```js
export const options = {
  vus: 1,
  iterations: 1
}
```


## Checks

A simple check looks as follows:

```js
const value = "Hello world"

const checkResult = check(value, {
  "My description of what the check does": (val) => val === "Hello world",
})
```

## Failing a test

For failing a test programatically, use the exec API:

```js
import exec from "k6/execution"
```

```js
if (!checkResult) {
  exec.test.abort() // Abort immediately exits and does not continue the iteration
  // exec.test.fail() // Fail marks the test as failed but continues to run the complete iteration
}
```

## Using k6-testing helper module

To define a pass/fail criteria in a more readable and elegant way, we can make use of the k6-testing library from jslib.k6.io:

```js
import { expect } from "https://jslib.k6.io/k6-testing/0.5.0/index.js"
```

```js
export default async function main() {
  const response = http.get("https://quickpizza.grafana.com")

  expect(response.status).toBe(200)
}
```

# k6 Synthetics Code Snippets

Quick reference for the k6 Synthetics exercise. Copy these snippets into your script as you work through the exercise.


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



## Failing a test based on a check condition

There are several ways of achieving this, the two most common patterns are:

### 1. Using `checks` and `exec`

Checks and exec are modules that come built-in with the k6 standard library.
- See docs for [checks](https://grafana.com/docs/k6/latest/using-k6/checks/)
- See docs for [k6/execution](https://grafana.com/docs/k6/latest/javascript-api/k6-execution/)


```js
import { check } from "k6"
import http from "k6/http"
import exec from "k6/execution"
```

```js
export default function main() {
  const response = http.get("https://quickpizza.grafana.com")

  const isCheckSuccess = check(response, {
    'status should be 200': (res) => res.status === 200,
  })

  if (!isCheckSuccess) {
    exec.test.abort()
  }
}
```

### 2. Using `expect`

k6-testing is a functional testing library, available via [jslib.k6.io](https://jslib.k6.io/). It can be directly imported as a dependency in your k6 script. 

- Docs for [k6-testing](https://github.com/grafana/k6-jslib-testing?tab=readme-ov-file#k6-testing)
- jslib.k6.io is a collection of reusable JavaScript libraries that can be directly imported and used in your k6 scripts.


```js
import http from "k6/http"
import { expect } from "https://jslib.k6.io/k6-testing/0.6.1/index.js"
```

```js
export default function main() {
  const response = http.get("https://quickpizza.grafana.com")

  expect(response.status).toBe(200)
}
```

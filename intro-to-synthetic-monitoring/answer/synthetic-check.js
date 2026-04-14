// import { check } from "k6"
// import exec from "k6/execution"
import http from "k6/http"
import { expect } from "https://jslib.k6.io/k6-testing/0.6.1/index.js"

export const options = {
  vus: 1,
  iterations: 1,
}

export default function main() {
  const response = http.get("https://quickpizza.grafana.com")

  expect(response.status).toBe(200)

  // Alternative solution:
  
  // const isCheckSuccess = check(response, {
  //   'status should be 200': (res) => res.status === 200,
  // })

  // if (!isCheckSuccess) {
  //   exec.test.abort()
  // }
}

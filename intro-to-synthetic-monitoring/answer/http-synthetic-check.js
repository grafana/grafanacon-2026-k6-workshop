import http from "k6/http"
import { expect } from "https://jslib.k6.io/k6-testing/0.6.1/index.js"

export const options = {
  vus: 1,
  iterations: 1,
}

export default function main() {
  const response = http.get("https://quickpizza.grafana.com")

  expect(response.status).toBe(200)
}

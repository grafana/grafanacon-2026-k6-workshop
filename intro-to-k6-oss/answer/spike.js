import { sleep } from "k6"
import http from "k6/http"

export const options = {
  thresholds: {
    http_req_duration: ["p(95)<=200"],
  },
  stages: [
    { duration: "10s", target: 10 }, // Quickly ramp up to 10 users
    { duration: "1m", target: 10 }, // Hold at 10 users for 1 minute
    { duration: "30s", target: 30 }, // Ramp up to 30 users
    { duration: "10s", target: 10 }, // Quickly ramp down to 10 users
    { duration: "20s", target: 10 }, // Ramp down to 10 users
  ],
}

export default function main() {
  http.get("https://quickpizza.grafana.com")

  sleep(1)
}

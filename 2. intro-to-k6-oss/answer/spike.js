import { sleep } from "k6"
import http from "k6/http"

export const options = {
  thresholds: {
    http_req_duration: ["p(95)<=200"],
  },
  vus: 10, // Start at 10 VUs
  stages: [
    { duration: "30s", target: 10 }, // Ramp up to 10 VUs over 30 seconds
    { duration: "30s", target: 30 }, // Spike up to 30 VUs
    { duration: "30s", target: 10 }, // Ramp down to 10 VUs
  ],
}

export default function main() {
  http.get("https://quickpizza.grafana.com")

  sleep(1)
}

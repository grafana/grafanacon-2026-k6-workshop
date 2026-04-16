# k6 Code Snippets

Quick reference for the k6 OSS exercise. Copy these snippets into your script as you work through the excersise.

## Tresholds

```js
export const options = {
  thresholds: {
    http_req_duration: ['p(95)<=200'], // 95% of requests should be below 200ms
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
  },
}
```

_Reference to k6 OSS docs for [Thresholds](https://grafana.com/docs/k6/latest/using-k6/thresholds/)_  
_Reference to k6 OSS docs for [Metrics](https://grafana.com/docs/k6/latest/using-k6/metrics/reference/)_


## Stages

| Key      | Description                                                      |
| -------- | ---------------------------------------------------------------- |
| target   | VU (Virtual User) target to ramp up to                           |
| duration | Duration in time (h, m, s) to ramp up to the specified VU target |

```js
export const options = {
  vus: 10, // Starting at 10 VUs
  stages: [
    { duration: "30s", target: 10 }, // Hold at 10 users for 30 seconds
    { duration: "30s", target: 30 }, // Ramp up to 30 users
    { duration: "30s", target: 10 }, // Ramp down to 10 users
  ],
}
```

_Reference to k6 OSS docs for [Stages](https://grafana.com/docs/k6/latest/using-k6/k6-options/reference/#stages)_

# k6 Code Snippets

Quick reference for the k6 OSS exercise. Copy these snippets into your script as you work through the excersise.

## Tresholds

```js
export const options = {
  thresholds: {
    http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
  },
}
```

_Reference to k6 OSS docs for [Thresholds](https://grafana.com/docs/k6/latest/using-k6/thresholds/)_

## Stages

| Key      | Description                                                      |
| -------- | ---------------------------------------------------------------- |
| Target   | VU (Virtual User) target to ramp up to                           |
| Duration | Duration in time (h, m, s) to ramp up to the specified VU target |

```js
export const options = {
  stages: [
    { duration: "20s", target: 2 },
    { duration: "1m", target: 5 },
  ],
}
```

_Reference to k6 OSS docs for [Stages](https://grafana.com/docs/k6/latest/using-k6/k6-options/reference/#stages)_

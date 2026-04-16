```bash
# Connect k6 CLI with Grafana Cloud
k6 cloud login --token <TOKEN>
```

```bash
# Running a test in Grafana Cloud k6
k6 cloud run basic.js
```

```bash
# Running a test locally, streaming results to Grafana Cloud k6
k6 cloud run -local-execution basic.js
```
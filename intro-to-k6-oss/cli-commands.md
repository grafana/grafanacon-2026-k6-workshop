```bash
# Running k6 CLI test locally
k6 run basic.js
```

```bash
# Visualizing the metrics of a live local test on the web dashboard
K6_WEB_DASHBOARD=true k6 run basic.js
```

```bash
# Exporting the results to a web dashboard
K6_WEB_DASHBOARD_EXPORT=report.html k6 run basic.js
```
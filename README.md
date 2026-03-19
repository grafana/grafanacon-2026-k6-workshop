# Shift left with reliability testing: A hands-on introduction to k6

Hands-on lab resources for GrafanaCON Barcelona 2026 - Introduction to k6

Facilitators:
- Simon Legander
- Marie Cruz

In-room support staff:
- Imma Valls
- Théo Crevon

## What you will learn

By the end of this workshop, you will have built:
- A complete k6 test flow starting from k6 Studio and evolving into a full script
- API performance tests with meaningful thresholds and assertions
- Browser-based tests that simulate real user journeys
- Synthetic monitoring checks for continuous validation
- Grafana dashboards to visualize test results and understand how the system behaves under a heavy load.

## Pre-requisites

In order to participate in the lab, you must have a laptop with Wi-Fi/Internet connectivity, running Linux/MacOS/Windows. 

The following also needs to be installed:
- IDE installed like [VSCode](https://code.visualstudio.com/download) or [Cursor](https://cursor.com/download).
- [k6 OSS](https://grafana.com/docs/k6/latest/set-up/install-k6/) binary installed
- [k6 studio](https://grafana.com/docs/k6-studio/set-up/install/) installed

## Your Grafana Cloud Stack

You should have access to your own Grafana Cloud stack, for which you have admin permissions.

## Hands-on lab agenda

| Topic                                              | Facilitator     | Duration | Code Snippets                                            |
| -------------------------------------------------- | --------------- | -------- | -------------------------------------------------------- |
| Introduction                                       | Marie and Simon | 5 mins   |                                                          |
| Lab setup                                          | Marie and Simon | 15 mins  |                                                          |
| Reliability in the Developer Workflow              | Marie           | 10 mins  |                                                          |
| Introduction to k6 and k6 Studio                   | Marie           | 30 mins  |                                                          |
| Break                                              |                 | 5 mins   |                                                          |
| Introduction to k6 OSS                             | Simon           | 25 mins  | [k6 OSS](./intro-to-k6-oss)                              |
| Introduction to Browser Testing                    | Marie           | 20 mins  | [Browser Testing](./intro-to-browser-testing/)           |
| Break                                              |                 | 5 mins   |                                                          |
| Introduction to Synthetic Monitoring               | Simon           | 20 mins  | [Synthetic Monitoring](./intro-to-synthetic-monitoring/) |
| Introduction to Grafana Cloud k6                   | Simon           | 20 mins  |                                                          |
| Introduction to Grafana Cloud Synthetic Monitoring | Simon           | 20 mins  |                                                          |
| Lab wrap-up                                        | Marie           | 10 mins  |                                                          |
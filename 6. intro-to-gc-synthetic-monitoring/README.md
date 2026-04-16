# Introduction to Grafana Cloud Synthetic Monitoring

## Lab Exercise

In this exercise, you'll get familiar with Grafana Cloud Synthetics. By the end, you will have:

- Deployed your first Synthetic Check to Grafana Cloud, verifying that the QuickPizza website is reachable.
- (Bonus): Deployed your first Synthetic Browser Check, verifying that the QuickPizza login works as expected.

**Need help?** Raise your hand and we'll come assist you!

## Exercise 1: Create your first Synthetic Monitoring Check

### Step 1: Sign in to your Grafana Cloud instance and navigate to Synthetics page

1. Open your Grafana Cloud stack in the browser (for example `https://<your-stack>.grafana.net`) and sign in.
2. From the navigation menu on the left, click **Testing & Synthetics** > **Synthetics**.

### Step 2: Take the "Create new Scripted Synthetics Check" Pathfinder guide

1. Click the question mark in the top right
2. Scroll down to the "Interactive Guide: Create a new Scripted Synthetic Monitoring Check" 
3. Click **Start** and take the tour.

<img src="./images/sm-pathfinder.png" alt="Grafana Cloud Synthetic Monitoring" width="800" />

> [!IMPORTANT]
> 
> If the "Interactive Guide: Create a new Scripted Synthetic Monitoring Check" card is not on screen, scroll down and expand **Other documentation**, and look for the guide in that section.
> 
> ![](./images/sm-pathfinder-other-documentation.png)

**Success looks like:** 
The tour leads you to create your first Synthetic Monitoring Check and run it. By the end of the tour, you see check runs automatically being scheduled in the check dashboard like the following screenshot:

<img src="./images/gc-synthetics.png" alt="Grafana Cloud Synthetic Monitoring" width="800" />

## (Bonus) Exercise 2: Create your first Browser Synthetic Monitoring Check

### Step 1: Create a new Browser Check

Follow the same steps you took in the Interactive guide, but this time select the "Browser" check type.

<img src="./images/browser-check.png" alt="Browser Check" width="800" />

### Step 2: Re-using the QuickPizza Browser login test

In the Check creation step where you need to input a Script, take the QuickPizza login test that you created in the earlier exercise [browser-script.js](../intro-to-browser-testing/answer/browser-script.js).

### Step 3: Complete the Check creation wizard

Fill out all the details necessary and complete the check.

**Success looks like:** 
Your first Browser Check is now successfully created, you see check runs being scheduled automatically in the check dashboard like screenshot in Exercise 1.

## Other Resources

Check out the following resources to know more about Grafana Cloud Synthetic Monitoring

- [Documentation: Synthetic Monitoring](https://grafana.com/docs/grafana-cloud/testing/synthetic-monitoring/)
- [Documentation: Check types](https://grafana.com/docs/grafana-cloud/testing/synthetic-monitoring/create-checks/checks/)
- [Interactive Guides: Synthetic Monitoring](https://play.grafana.org/a/grafana-synthetic-monitoring-app/home?from=now-3h&to=now&timezone=utc&var-probe=$__all&var-region=$__all&var-check_type=$__all) - try out the other interactive guides to get hands-on experience with other synthetic monitoring check types.

---

[← Previous exercise](../5.%20intro-to-gc-k6/) · [Workshop homepage](../)
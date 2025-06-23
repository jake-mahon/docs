---
title: anomaly detection
sidebar_label: anomaly-detection
description: Auditor 10.7 documentation for anomaly detection with configuration details, usage instructions, and implementation guidance.
---

# Review Behavior Anomalies Dashboard

To review the Behavior Anomalies dashboard, process and filter anomalies in user profiles, you must
be assigned the Global administrator or Global reviewer role in the product. See the
[Role-Based Access and Delegation](/docs/auditor/10.7/monitoring-plans/delegation-and-permissions.md) topic for additional
information.

You can add any elements (a dashboard, report, alert, risk, etc.) to the Auditor Home screen to
access them instantly. See the [Navigation](/docs/auditor/10.7/administration/navigation-and-ui/index.md) and
[Customize Home Screen](/docs/auditor/10.7/administration/navigation-and-ui/customizing-dashboard.md) topics for additional information.

To review the Behavior Anomalies dashboard:

On the main Auditor page, click
![ba_tile](/img/product_docs/auditor/auditor/admin/behavioranomalies/ba_tile.webp)
on the left.

![dashboard_thumb_0_0](/img/product_docs/dataclassification/ndc/admin/reporting/dashboard_thumb_0_0.webp)

The dashboards includes the following sections:

- The Risk score timeline that helps you review anomaly surges over time.
- The Risk score by top five users chart that helps you identify the most active users. To see the
  chart, click the pie chart icon in the upper left corner of the page.
- The user list with all users who provoked alerts and their total risk scores.

Once you reviewed the general anomaly trend and identified users that merit your special attention,
review their profiles and process anomalies. Click View Profile next to a user name to dive into
user activity and investigate each action in details.
[Review User Profiles and Process Anomalies](/docs/auditor/10.7/administration/behavior-analytics/user-profiles.md)

[Review User Profiles and Process Anomalies](/docs/auditor/10.7/administration/behavior-analytics/user-profiles.md)

# Behavior Anomalies Assessment Tips and Tricks

This topic contains various frequently asked questions as well as tips and tricks you might find
helpful when configuring scoring settings and reviewing behavior anomalies.

- The user has a high score and keeps provoking same alerts almost every day.

  Drill-down to the user profile and then click Show user activity. Review user actions and
  compare them to his or her job responsibilities. Does the user seem trustworthy? Are there any
  rights elevation or suspicious access attempts?

  Try to review user tasks—you may find out that the anomaly the user keeps provoking is a genuine
  part of his or her daily routine. For example, the office staff should not reset passwords for
  other accounts while this is a basic task for a system administrator. In this case, review your
  alert settings and exclude the user from the alert filters.

- Everyone in organization has a huge score

  Probably, you have configured too many alerts that turn behavior anomalies assessment into mess.
  It takes some time to learn what matters most to your organization and get accustomed to setting
  proper risk scores. Try to review your scoring settings regularly and adjust them when
  necessary.

- Is anyone who is charge of "Failed..." anomaly a bad actor?

  Anyone can forget a password or accidentally try to access some data in a wrong folder. Such
  users are not subject to immediate prosecution unless they do not provoke repetitive alerts. The
  best practice is to review user profile after some time and check if there are any threat
  patterns in user behavior.

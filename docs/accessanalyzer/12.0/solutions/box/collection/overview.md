---
title: box collection overview
sidebar_label: overview
description: Solution guide for box collection overview including implementation steps, configuration, and best practices.
---

# 0.Collection Job Group

The 0.Collection Job Group collects data which will be further analyzed in order to provide details
on Box access rights, policies, configurations, activities, and content.

![Box > Collection Job Group in the Jobs Tree](/img/product_docs/accessanalyzer/admin/hostmanagement/jobstree.webp)

The 0.Collection Job Group is comprised of:

- [1-Box_Access Scans Job](/docs/accessanalyzer/12.0/solutions/box/collection/1-box-access-scans.md) – Collects the data which will be further analyzed
  in order to provide details on Box access rights, policies, configurations, and content
- [1-Box_Activity Scans Job](/docs/accessanalyzer/12.0/solutions/box/collection/1-box-activity-scans.md) – Collects the data which will be further
  analyzed in order to provide visibility into user activity events within Box
- [2-Box_Import Job](/docs/accessanalyzer/12.0/solutions/box/collection/2-box-import.md) – Takes the data that has been collected from Box and imports
  it to the Access Analyzer database to be analyzed in order to provide detailed reports on Box
  access rights, policies, configurations, activities, and content

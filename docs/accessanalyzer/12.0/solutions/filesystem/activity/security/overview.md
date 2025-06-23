---
title: filesystem activity security overview
sidebar_label: overview
description: Solution guide for filesystem activity security overview including implementation steps, configuration, and best practices.
---

# Security Job Group

The Security job group is designed to report on security related activity event information from
targeted file servers.

![Security Job Group in the Jobs Tree](/img/product_docs/accessanalyzer/admin/hostmanagement/jobstree.webp)

The Security Job Group is comprised of:

- [FS_AdminActvity Job](/docs/accessanalyzer/12.0/solutions/filesystem/activity/security/fs-adminactvity.md) – Designed to report on administrator related activity
  event information from targeted file servers

  - Requires **Access Auditing** component data collection

- [FS_HighRiskActivity Job](/docs/accessanalyzer/12.0/solutions/filesystem/activity/security/fs-highriskactivity.md) – Designed to report on high risk activity event
  information from targeted file servers

  - Requires **Access Auditing** component data collection

- [FS_LocalUserActivity Job](/docs/accessanalyzer/12.0/solutions/filesystem/activity/security/fs-localuseractivity.md) – Designed to report on local user activity
  event information from targeted file servers

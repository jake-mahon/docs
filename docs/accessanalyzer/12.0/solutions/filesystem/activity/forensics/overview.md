---
title: filesystem activity forensics overview
sidebar_label: overview
description: Solution guide for filesystem activity forensics overview including implementation steps, configuration, and best practices.
---

# Forensics Job Group

The Forensics job group is designed to report on forensic related activity event information from
targeted file servers.

![Forensics Job Group in the Jobs Tree](/img/product_docs/accessanalyzer/admin/hostmanagement/jobstree.webp)

The Forensics job group is comprised of:

- [FS_Deletions Job](/docs/accessanalyzer/12.0/solutions/filesystem/activity/forensics/fs-deletions.md) – Designed to report on deletion activity event information
  from targeted file servers

  - Includes a Notification analysis task option
  - Requires **Access Auditing** component data collection

- [FS_PermissionChanges Job](/docs/accessanalyzer/12.0/solutions/filesystem/activity/forensics/fs-permissionchanges.md) – Designed to report on permission change
  activity event information from targeted file servers

  - Includes a Notification analysis task option
  - Requires **Access Auditing** component data collection

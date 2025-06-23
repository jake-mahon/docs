---
title: filesystem activity usagestatistics overview
sidebar_label: overview
description: Solution guide for filesystem activity usagestatistics overview including implementation steps, configuration, and best practices.
---

# Usage Statistics Job Group

The Usage Statistics job group is designed to report on usage statistics from targeted file servers.

![Usage Statistics Job Group in the Jobs Tree](/img/product_docs/accessanalyzer/admin/hostmanagement/jobstree.webp)

The Usage Statistics job group is comprised of:

- [FS_GroupUsage Job](/docs/accessanalyzer/12.0/solutions/filesystem/activity/usagestatistics/fs-groupusage.md) – Designed to report on group usage from targeted file
  servers

  - Requires **Access Auditing** component data collection

- [FS_MostActiveServers Job](/docs/accessanalyzer/12.0/solutions/filesystem/activity/usagestatistics/fs-mostactiveservers.md) – Designed to report on the most active
  servers within an environment
- [FS_MostActiveUsers Job](/docs/accessanalyzer/12.0/solutions/filesystem/activity/usagestatistics/fs-mostactiveusers.md) – Designed to report on the most active users
  within an environment
- [FS_StaleShares Job](/docs/accessanalyzer/12.0/solutions/filesystem/activity/usagestatistics/fs-staleshares.md) – Designed to report on stale shares from targeted file
  servers

  - Requires **Access Auditing** component data collection

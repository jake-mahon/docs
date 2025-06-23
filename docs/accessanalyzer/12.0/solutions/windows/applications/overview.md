---
title: windows applications overview
sidebar_label: overview
description: Solution guide for windows applications overview including implementation steps, configuration, and best practices.
---

# Applications Job Group

The Applications job group tracks various aspects of installed application management, identifying
installed software and utilization, unauthorized programs and rogue systems, and more.

![Applications Job Group in the Jobs Tree](/img/product_docs/accessanalyzer/admin/hostmanagement/jobstree.webp)

The jobs in the Applications job group are:

- [SG_InstalledApplications Job](/docs/accessanalyzer/12.0/solutions/windows/applications/sg-installedapplications.md) – This job identifies installed
  applications on all targeted hosts, highlighting the most common applications installed across the
  audited environment
- [SG_RunAtBoot Job](/docs/accessanalyzer/12.0/solutions/windows/applications/sg-runatboot.md) – This job lists applications which are set to **Run** or
  **Run Once** on all targeted hosts
- [SG_ScheduledTasks Job](/docs/accessanalyzer/12.0/solutions/windows/applications/sg-scheduledtasks.md) – This job lists scheduled task details on all
  targeted hosts

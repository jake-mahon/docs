---
title: allexpiringgroups
sidebar_label: allexpiringgroups
description: Directory Manager 11.1 documentation for allexpiringgroups with configuration details, usage instructions, and implementation guidance.
---

# Expiring Groups

This page shows only the expiring groups in the connected identity store.

Groups that will expire in 30 days or less are considered as expiring groups. The expiry date is
calculated from a group’s expiry policy. The Group Lifecycle job is responsible for expiring these
groups on their respective expiry dates; however, you can also manually expire a group before it
reaches the expiry date.

You can [Modify Search Directory](/docs/directorymanager/11.1/group-management/allgroups.md#modify-search-directory) to search expiring groups
and add [Filter All Groups](/docs/directorymanager/11.1/group-management/allgroups.md#filter-all-groups) by clicking **Expiring Group Grid
Filters**. All the expiring groups matching the filters will be displayed.

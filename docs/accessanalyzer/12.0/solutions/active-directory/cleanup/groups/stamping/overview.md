---
title: active directory cleanup groups stamping overview
sidebar_label: overview
description: Solution guide for active directory cleanup groups stamping overview including implementation steps, configuration, and best practices.
---

# 2.Group Stamping Job Group

The 2. Group Stamping Job Group updates the Notes attribute for all security groups to show where
the group is provisioned inside the environment.

![2.Group Stamping Job Group in the Jobs Tree](/img/product_docs/accessanalyzer/solutions/activedirectory/cleanup/groups/stamping/groupsstampingjobtree.webp)

The jobs in the 2. Group Stamping Job Group are:

- [AD_GroupCleanup_Permissions Job](/docs/accessanalyzer/12.0/solutions/active-directory/cleanup/groups/stamping/ad-group-cleanup-permissions.md) – Reports on where security
  groups are being used to assign permissions
- [AD_GroupStamping Job](/docs/accessanalyzer/12.0/solutions/active-directory/cleanup/groups/stamping/ad-group-stamping.md) – Updates the Note attribute for all security groups
  to show where the group is provisioned inside of the environment

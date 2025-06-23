---
title: active directory activity changes overview
sidebar_label: overview
description: Solution guide for active directory activity changes overview including implementation steps, configuration, and best practices.
---

# Changes Job Group

The Changes Job Group provides an audit trail for changes made to Computer, Group and User objects
within the environment.

![Changes Job Group in the Jobs Tree](/img/product_docs/accessanalyzer/admin/hostmanagement/jobstree.webp)

The following Jobs make up the Changes Job Group:

**_RECOMMENDED:_** Schedule these jobs to run with the 0.Collection job group.

- [AD_ComputerModifications Job](/docs/accessanalyzer/12.0/solutions/active-directory/activity/changes/ad-computer-modifications.md) – Reports on activity relating to
  changes made on computer objects
- [AD_GroupModifications Job](/docs/accessanalyzer/12.0/solutions/active-directory/activity/changes/ad-group-modifications.md) – Reports on activity relating to changes
  made on a group objects and changes made to group membership
- [AD_UserModifications Job](/docs/accessanalyzer/12.0/solutions/active-directory/activity/changes/ad-user-modifications.md) – Reports on activity relating to changes made
  on user objects

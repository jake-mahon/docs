---
title: exchange mailboxes permissions collection overview
sidebar_label: overview
description: Solution guide for exchange mailboxes permissions collection overview including implementation steps, configuration, and best practices.
---

# 0. Collection Job Group

The 0. Collection job group is comprised of data collection and analysis that focus on access
granted to each mailbox in the environment including: Mailbox Rights, Active Directory Permissions,
Delegation, and Folder Permissions.

![0.Collection Job Group in the Jobs Tree](/img/product_docs/accessanalyzer/solutions/exchange/databases/collection/collectionjobstree.webp)

The jobs in the 0. Collection job group are:

- [EX_Delegates Job](/docs/accessanalyzer/12.0/solutions/exchange/mailboxes/permissions/collection/ex-delegates.md) – Collects data from Active Directory to identify the
  delegates applied to a mailbox
- [EX_MBRights Job](/docs/accessanalyzer/12.0/solutions/exchange/mailboxes/permissions/collection/ex-mbrights.md) – Collects data from Active Directory to identify the mailbox
  rights applied to a mailbox
- [EX_Perms Job](/docs/accessanalyzer/12.0/solutions/exchange/mailboxes/permissions/collection/ex-perms.md) – Collects information about permissions applied to the folders within
  Exchange mailboxes
- [EX_SendAs Job](/docs/accessanalyzer/12.0/solutions/exchange/mailboxes/permissions/collection/ex-sendas.md) – Collects data from Active Directory to identify the Active
  Directory rights applied to a mailbox

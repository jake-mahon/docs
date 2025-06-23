---
title: unix privilegedaccess sudoers collection overview
sidebar_label: overview
description: Solution guide for unix privilegedaccess sudoers collection overview including implementation steps, configuration, and best practices.
---

# 0.Collection Job Group

The 0.Collection job group collects details on all rights granted via sudoers within audited Unix
and Linux Environments.

![0.Collection Job Group in the Jobs Tree](/img/product_docs/accessanalyzer/solutions/exchange/databases/collection/collectionjobstree.webp)

The jobs in the 0.Collection job group are:

- [UX_MakeDirectory Job](/docs/accessanalyzer/12.0/solutions/unix/privilegedaccess/sudoers/collection/ux-makedirectory.md) – This job creates a temporary Access Analyzer
  directory on target Unix and Linux environments to be used by the UX_ParseSudoers job
- [UX_ParseSudeors Job](/docs/accessanalyzer/12.0/solutions/unix/privilegedaccess/sudoers/collection/ux-parsesudeors.md) – This job parses all rights granted via sudoers in the
  audited environment

---
title: unix privilegedaccess sudoers collection ux makedirectory
sidebar_label: ux makedirectory
description: Solution guide for unix privilegedaccess sudoers collection ux makedirectory including implementation steps, configuration, and best practices.
---

# UX_MakeDirectory Job

The UX_MakeDirectory job creates a temporary Access Analyzer directory on the target host to be used
by the UX_ParseSudoers job.

## Queries for the UX_MakeDirectory Job

The UX_MakeDirectory job uses the Unix Data Collector for the following query:

**CAUTION:** The query is preconfigured for this job. Never modify the query.

![Queries for the UX_MakeDirectory Job](/img/product_docs/accessanalyzer/solutions/unix/privilegedaccess/sudoers/collection/makedirectoryquery.webp)

- MakeDirectory – Makes a directory for the sudoers.pl file on the target host

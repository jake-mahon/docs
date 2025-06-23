---
title: filesystem collection 2 seek bulk import
sidebar_label: 2 seek bulk import
description: Solution guide for filesystem collection 2 seek bulk import including implementation steps, configuration, and best practices.
---

# 2-SEEK Bulk Import Job

The 2-SEEK Bulk Import job is designed to import collected sensitive data information from the
targeted file servers.

## Query for the 2-SEEK Bulk Import Job

The Bulk Import query uses the FSAA Data Collector and has been preconfigured to use the Sensitive
data Bulk import category.

![Query for the 2-SEEK Bulk Import Job](/img/product_docs/accessanalyzer/solutions/filesystem/collection/seekbulkimportquery.webp)

- Bulk Import – Imports data into SQL server

  - Typically this query is not modified. See the
    [FileSystemAccess Data Collector](/docs/accessanalyzer/12.0/data-collection/fsaa/overview.md) topic for
    information on when this query should be modified.

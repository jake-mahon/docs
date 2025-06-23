---
title: category
sidebar_label: category
description: Documentation for category functionality in Access Analyzer including configuration and usage information.
---

# AWS: Category

Use the Category page to select the type of scan for the targeted AWS instance or maintenance task
to perform.

![AWS Category page](/img/product_docs/accessanalyzer/admin/datacollector/adinventory/category.webp)

The options on the Category page are:

- AWS scan jobs

  - Collect Org data – Collects all organization info from an AWS instance
  - Collect IAM data – Collects all users, groups, and roles from an AWS instance
  - Collect S3 – Collects S3 data
  - Collect SDD data – Scans S3 objects for potentially sensitive data

- Maintenance

  - Drop AWS DC Tables – Removes AWS data collector data and tables from the Access Analyzer
    database. See the [Drop AWS Tables](/docs/accessanalyzer/12.0/data-collection/aws/drop-tables.md) topic for additional information.

---
title: databases redshift collection overview
sidebar_label: overview
description: Solution guide for databases redshift collection overview including implementation steps, configuration, and best practices.
---

# 0.Collection Job Group

The Redshift Solution Collection group collects high level summary information from targeted
Redshift Servers.  Other jobs in the Redshift Solution Set use this information for further analysis
and for producing respective reports.

![0](/img/product_docs/accessanalyzer/solutions/databases/redshift/collection/0.collection.webp)

The jobs in the 0.Collection Job Group are:

- [Redshift_Configuration Job](/docs/accessanalyzer/12.0/solutions/databases/redshift/collection/redshift-configuration.md) — Returns additional configuration
  settings from Redshift servers
- [Redshift_SensitiveDataScan Job](/docs/accessanalyzer/12.0/solutions/databases/redshift/collection/redshift-sensitivedatascan.md) — Discovers sensitive data in
  PostgreSQL databases based on pre-defined or user-defined search criteria
- [Redshift_TablePrivileges Job](/docs/accessanalyzer/12.0/solutions/databases/redshift/collection/redshift-tableprivileges.md) - Designed to collect Redshift table
  privileges from all the targeted servers.

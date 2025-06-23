---
title: databases redshift sensitive data overview
sidebar_label: overview
description: Solution guide for databases redshift sensitive data overview including implementation steps, configuration, and best practices.
---

# Sensitive Data Job Group

This job provides insight into where sensitive data exists and who has access to it across all the
targeted Redshift databases.

![sensitivedatajobgroup](/img/product_docs/accessanalyzer/solutions/databases/postgresql/sensitivedata/sensitivedatajobgroup.webp)

The job(s) in the Sensitive Data Job Group are:

- [Redshift_SensitiveData Job](/docs/accessanalyzer/12.0/solutions/databases/redshift/sensitive-data/redshift-sensitivedata.md) - Provides information on all the data
  that was discovered in the targeted Redshift database servers based on the selected scan criteria
- [Redshift_SensitiveDataPermissions Job](/docs/accessanalyzer/12.0/solutions/databases/redshift/sensitive-data/redshift-sensitivedatapermissions.md) - Designed to
  provide information on all types of permissions on database objects containing sensitive data
  across all the targeted PostgreSQL servers based on the selected scan criteria.

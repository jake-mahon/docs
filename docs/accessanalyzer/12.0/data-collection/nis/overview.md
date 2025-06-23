---
title: overview
sidebar_label: overview
description: Documentation for overview functionality in Access Analyzer including configuration and usage information.
---

# NIS Data Collector

The NIS Data Collector inventories a NIS domain for user and group information, mapping to
Windows-style SIDs. This data collector is a core component of Access Analyzer and has been
preconfigured within the .NIS Inventory Solution. Both this data collector and the solution are
available with all Access Analyzer license options. See the
[.NIS Inventory Solution](/docs/accessanalyzer/12.0/solutions/nisinventory/overview.md) topic for additional
information.

Protocols

- NIS

Ports

- TCP 111 or UDP 111
- Randomly allocated high TCP ports

Permissions

- No special permissions are needed aside from access to a NIS server

## NIS Query Configuration

The NIS Data Collector is configured through the NIS Data Collector Wizard, which contains the
following wizard pages:

- Welcome
- [NIS: Category](/docs/accessanalyzer/12.0/data-collection/nis/category.md)
- [NIS: NIS Settings](/docs/accessanalyzer/12.0/data-collection/nis/settings.md)
- [NIS: SID Mappings](/docs/accessanalyzer/12.0/data-collection/nis/sid-mappings.md)
- [NIS: NIS Query](/docs/accessanalyzer/12.0/data-collection/nis/query.md)
- [NIS: Results](/docs/accessanalyzer/12.0/data-collection/nis/results.md)
- [NIS: Summary](/docs/accessanalyzer/12.0/data-collection/nis/summary.md)

![NIS Data Collector Wizard Welcome page](/img/product_docs/activitymonitor/activitymonitor/install/welcome.webp)

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox
when the wizard is open and configuration settings are saved.

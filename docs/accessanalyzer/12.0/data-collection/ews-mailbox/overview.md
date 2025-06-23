---
title: overview
sidebar_label: overview
description: Documentation for overview functionality in Access Analyzer including configuration and usage information.
---

# EWSMailbox Data Collector

The EWSMailbox Data Collector provides configuration options to scan mailbox contents, permissions,
and sensitive data, and is preconfigured within the Exchange Solution. Both this data collector and
the solution are available with a special Access Analyzer license. See the
[Exchange Solution](/docs/accessanalyzer/12.0/solutions/exchange/overview.md) topic for additional information.

Protocols

- HTTPS
- ADSI
- LDAP

Ports

- TCP 389
- TCP 443

Permissions

- Exchange Admin Role
- Discovery Management Role
- Application Impersonation Role
- Exchange Online License

Sensitive Data Discovery Considerations

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount
of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job
is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

## EWSMailbox Query Configuration

The EWSMailbox Data Collector is configured through the Exchange Mailbox Data Collector Wizard,
which contains the following wizard pages:

**NOTE:** The Category selected may alter the subsequent steps displayed by the wizard.

- [EWSMailbox: Category](/docs/accessanalyzer/12.0/data-collection/ews-mailbox/category.md)
- [EWSMailbox: Options](/docs/accessanalyzer/12.0/data-collection/ews-mailbox/options.md)
- [EWSMailbox: Scope](/docs/accessanalyzer/12.0/data-collection/ews-mailbox/scope.md)
- [EWSMailbox: Scope Select](/docs/accessanalyzer/12.0/data-collection/ews-mailbox/scope-select.md)
- [EWSMailbox: SDD Options](/docs/accessanalyzer/12.0/data-collection/ews-mailbox/sdd-options.md)
- [EWSMailbox: Criteria](/docs/accessanalyzer/12.0/data-collection/ews-mailbox/criteria.md)
- [EWSMailbox: Filter](/docs/accessanalyzer/12.0/data-collection/ews-mailbox/filter.md)
- [EWSMailbox: Search Filter](/docs/accessanalyzer/12.0/data-collection/ews-mailbox/search-filter.md)
- [EWSMailbox: Results](/docs/accessanalyzer/12.0/data-collection/ews-mailbox/results.md)
- [EWSMailbox: Summary](/docs/accessanalyzer/12.0/data-collection/ews-mailbox/summary.md)

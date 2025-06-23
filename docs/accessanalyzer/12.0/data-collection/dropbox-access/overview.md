---
title: overview
sidebar_label: overview
description: Documentation for overview functionality in Access Analyzer including configuration and usage information.
---

# DropboxAccess Data Collector

The DropboxAccess Data Collector audits access, group membership, and content within a Dropbox
environment. Dropbox can scan the contents of over 400 file types to discover which files contain
sensitive data using Sensitive Data Discovery. The DropboxAccess Data Collector has been
preconfigured within the Dropbox Solution. Both this data collector and the solution are available
with a special Access Analyzer license. See the
[Dropbox Solution](/docs/accessanalyzer/12.0/solutions/dropbox/overview.md) topic for additional information.

Protocols

- HTTP
- HTTPS

Ports

- TCP 80
- TCP443

Permissions

- Dropbox Team Administrator

Sensitive Data Discovery Considerations

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount
of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job
is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

## Query Configuration

The DropboxAccess Data Collector is configured through the Dropbox Access Auditor Data Collector
Wizard. The wizard contains the following pages, which change based upon the query category
selected:

- Welcome
- [DropboxAccess: Category](/docs/accessanalyzer/12.0/data-collection/dropbox-access/category.md)
- [DropboxAccess: Scan Options](/docs/accessanalyzer/12.0/data-collection/dropbox-access/scan-options.md)
- [DropboxAccess: Scoping](/docs/accessanalyzer/12.0/data-collection/dropbox-access/scoping.md)
- [DropboxAccess: DLP Audit Settings](/docs/accessanalyzer/12.0/data-collection/dropbox-access/dlp-audit-settings.md)
- [DropboxAccess: Select DLP Criteria](/docs/accessanalyzer/12.0/data-collection/dropbox-access/select-dlp-criteria.md)
- [DropboxAccess: Summary (Completion)](/docs/accessanalyzer/12.0/data-collection/dropbox-access/completion.md)

![Dropbox Access Auditor Data Collector Wizard Welcome page](/img/product_docs/activitymonitor/activitymonitor/install/welcome.webp)

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox
when the wizard is open and configuration settings are saved.

---
title: overview
sidebar_label: overview
description: Documentation for overview functionality in Access Analyzer including configuration and usage information.
---

# Unix Data Collector

The Unix Data collector provides host inventory, software inventory, and logical volume inventory on
UNIX & Linux platforms. The Unix Data Collector has been preconfigured within the Unix Solution.
Both this data collector and the solution are available with a special Access Analyzer license. See
the [Unix Solution](/docs/accessanalyzer/12.0/solutions/unix/overview.md) topic for additional information.

Protocols

- SSH

Ports

- TCP 22
- User configurable

Permissions

- Root permissions in Unix/Linux

If the Root permission is unavailable, a least privileged model can be used. See the
[Least Privilege Model](/docs/accessanalyzer/12.0/getting-started/system-requirements/target/unix.md#least-privilege-model) topic additional
information.

## Unix Query Configuration

The Unix Data Collector is configured through the Unix Data Collector Wizard. It is designed to scan
and import information from UNIX / Linux systems. The Unix Data Collector has these pages:

- [Unix: Settings](/docs/accessanalyzer/12.0/data-collection/unix/settings.md)
- [Unix: Input](/docs/accessanalyzer/12.0/data-collection/unix/input.md)
- [Unix: Edit Script](/docs/accessanalyzer/12.0/data-collection/unix/edit-script.md)
- [Unix: Parsing](/docs/accessanalyzer/12.0/data-collection/unix/parsing.md)
- [Unix: Results](/docs/accessanalyzer/12.0/data-collection/unix/results.md)

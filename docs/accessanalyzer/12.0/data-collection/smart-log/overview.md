---
title: overview
sidebar_label: overview
description: Documentation for overview functionality in Access Analyzer including configuration and usage information.
---

# SMARTLog Data Collector

The SMARTLog Data Collector provides search and extraction of details from Windows Event Logs
(online or offline) and Microsoft Exchange Internet Information Server (IIS) logs.

The SMARTLog Data Collector is a core component of Access Analyzer, but it has been preconfigured
within the Active Directory Solution, Exchange Solution, SQL Solution, and the Windows Solution.
While the data collector is available with all Access Analyzer license options, these solutions are
only available with a special Access Analyzer licenses. See following sections for additional
information:

- [Active Directory Solution](/docs/accessanalyzer/12.0/solutions/active-directory/overview.md)
- [Exchange Solution](/docs/accessanalyzer/12.0/solutions/exchange/overview.md)
- [SQL Job Group](/docs/accessanalyzer/12.0/solutions/databases/sql/overview.md)
- [Windows Solution](/docs/accessanalyzer/12.0/solutions/windows/overview.md)

Protocols

- Log
- Remote Event
- RPC

Ports

- TCP 135
- TCP 445
- Randomly allocated high TCP ports

Permissions

- Member of the Domain Administrators group (if targeting domain controllers)
- Member of the local Administrators group

See the
[Exchange Remote Connections Permissions](/docs/accessanalyzer/12.0/getting-started/system-requirements/solutions/exchange/remote-connections.md)
topic for additional information related to permissions required for targeting Exchange servers.

## SMARTLog Query Configuration

The SMARTLog Data Collector is configured through the SMART Log DC Wizard, which contains the
following wizard pages:

- Welcome
- [SMARTLog: Log Type](/docs/accessanalyzer/12.0/data-collection/smart-log/log-type.md)
- [SMARTLog: Sample Host](/docs/accessanalyzer/12.0/data-collection/smart-log/sample-host.md)
- [SMARTLog: Target Log](/docs/accessanalyzer/12.0/data-collection/smart-log/target-log.md)
- [SMARTLog: Results](/docs/accessanalyzer/12.0/data-collection/smart-log/results.md)
- [SMARTLog: Criteria](/docs/accessanalyzer/12.0/data-collection/smart-log/criteria.md)
- [SMARTLog: Collection Method](/docs/accessanalyzer/12.0/data-collection/smart-log/collection-method.md)
- [SMARTLog: Log State](/docs/accessanalyzer/12.0/data-collection/smart-log/log-state.md)
- [SMARTLog: Event Log Options](/docs/accessanalyzer/12.0/data-collection/smart-log/event-log-options.md)
- [SMARTLog: Summary](/docs/accessanalyzer/12.0/data-collection/smart-log/summary.md)

![SMART Log DC Wizard Welcome page](/img/product_docs/activitymonitor/activitymonitor/install/welcome.webp)

There are no configurable settings on the Welcome page. Click **Next** to proceed to the Log Type
page.

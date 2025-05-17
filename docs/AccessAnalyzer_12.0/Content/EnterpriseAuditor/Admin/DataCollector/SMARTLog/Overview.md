---
sidebar_position: 6142
title: SMARTLog Data Collector
---

# SMARTLog Data Collector

The SMARTLog Data Collector provides search and extraction of details from Windows Event Logs (online or offline) and Microsoft Exchange Internet Information Server (IIS) logs.

The SMARTLog Data Collector is a core component of Access Analyzer, but it has been preconfigured within the Active Directory Solution, Exchange Solution, SQL Solution, and the Windows Solution. While the data collector is available with all Access Analyzer license options, these solutions are only available with a special Access Analyzer licenses. See following sections for additional information:

* [Active Directory Solution](../../../Solutions/ActiveDirectory/Overview "Active Directory Solution")
* [Exchange Solution](../../../Solutions/Exchange/Overview "Exchange Solution")
* [SQL Job Group](../../../Solutions/Databases/SQL/Overview "SQL Job Group")
* [Windows Solution](../../../Solutions/Windows/Overview "Windows Solution")

Protocols

* Log
* Remote Event
* RPC

Ports

* TCP 135
* TCP 445
* Randomly allocated high TCP ports

Permissions

* Member of the Domain Administrators group (if targeting domain controllers)
* Member of the local Administrators group

See the [Exchange Remote Connections Permissions](../../../Requirements/Solutions/Exchange/RemoteConnections "Exchange Remote Connections Permissions") topic for additional information related to permissions required for targeting Exchange servers.

## SMARTLog Query Configuration

The SMARTLog Data Collector is configured through the SMART Log DC Wizard, which contains the following wizard pages:

* Welcome
* [SMARTLog: Log Type](LogType "SMARTLog: Log Type")
* [SMARTLog: Sample Host](SampleHost "SMARTLog: Sample Host")
* [SMARTLog: Target Log](TargetLog "SMARTLog: Target Log")
* [SMARTLog: Results](Results "SMARTLog: Results")
* [SMARTLog: Criteria](Criteria "SMARTLog: Criteria")
* [SMARTLog: Collection Method](CollectionMethod "SMARTLog: Collection Method")
* [SMARTLog: Log State](LogState "SMARTLog: Log State")
* [SMARTLog: Event Log Options](EventLogOptions "SMARTLog: Event Log Options")
* [SMARTLog: Summary](Summary "SMARTLog: Summary")

![SMART Log DC Wizard Welcome page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/SMARTLog/Welcome.png "SMART Log DC Wizard Welcome page")

There are no configurable settings on the Welcome page. Click **Next** to proceed to the Log Type page.
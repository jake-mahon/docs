---
sidebar_position: 4913
title: Target Exchange Servers Requirements, Permissions, and Ports
---

# Target Exchange Servers Requirements, Permissions, and Ports

The Access Analyzer for Exchange Solution is compatible with the following Exchange Server versions as targets:

* Exchange 2019 (Limited)
* Exchange 2016 (Limited)
* Exchange 2013
* Exchange 2010 (Limited)

See the [Exchange Support and Permissions Explained](../Solutions/Exchange/Support "Exchange Support and Permissions Explained") topic for details on the type of auditing supported by data collector and by job group.

Domain Controller Requirements

The following are requirements for the Exchange servers to be scanned:

* Enable Remote PowerShell on one Client Access Server (CAS)
* Enable Windows Authentication for the PowerShell Virtual Directory on the same CAS
* .NET Framework 4.5+ installed on all Exchange servers to be targeted
* WINRM Service installed on all Exchange servers to be targeted as a back up in the event of a remote PowerShell failure
* Within the Access Analyzer Console, the global **Settings > Exchange** node must be configured

  **NOTE:** For Exchange 2013, 2016, and 2019 – If the global Settings have been configured for "MAPI over HTTP," then an actual CAS server name was supplied and will be used by the ExchangePS Data Collector. If the global Settings have been configured for "MAPI over HTTPS," then the global Settings will have a web address instead of an actual server. Therefore, each ExchangePS query requires the CAS server to be set as the specific server on the Category page. See the [ExchangePS Data Collector & Client Access Server](../../Solutions/Exchange/Recommended#_ExchangePS_Data_Collector_1 "ExchangePS Data Collector & Client Access Server") topic for a list of queries for which this would apply.

Data Collectors

This solution employs the following data collector to scan the target environment:

* [ADInventory Data Collector](../../Admin/DataCollector/ADInventory/Overview "ADInventory Data Collector")
* [EWSMailbox Data Collector](../../Admin/DataCollector/EWSMailbox/Overview "EWSMailbox Data Collector")
* [EWSPublicFolder Data Collector](../../Admin/DataCollector/EWSPublicFolder/Overview "EWSPublicFolder Data Collector")
* [Exchange2K Data Collector](../../Admin/DataCollector/Exchange2K/Overview "Exchange2K Data Collector")
* [ExchangeMailbox Data Collector](../../Admin/DataCollector/ExchangeMailbox/Overview "ExchangeMailbox Data Collector")
* [ExchangeMetrics Data Collector](../../Admin/DataCollector/ExchangeMetrics/Overview "ExchangeMetrics Data Collector")
* [ExchangePS Data Collector](../../Admin/DataCollector/ExchangePS/Overview "ExchangePS Data Collector")
* [ExchangePublicFolder Data Collector](../../Admin/DataCollector/ExchangePublicFolder/Overview "ExchangePublicFolder Data Collector")
* [SMARTLog Data Collector](../../Admin/DataCollector/SMARTLog/Overview "SMARTLog Data Collector")

## Permissions

For .Active Directory Inventory Prerequisite

* Read access to directory tree
* List Contents & Read Property on the Deleted Objects Container

  **NOTE:** See the Microsoft [Searching for Deleted Objects](https://technet.microsoft.com/en-us/library/cc978013.aspx "Opens the Searching for Deleted Objects article in a new window") article and the Microsoft [Dsacls](https://technet.microsoft.com/en-us/library/cc771151(v=ws.11).aspx "Opens the Dsacls article in a new window") article for additional information.

For Exchange Web Services API Permissions with the EWSMailbox Data Collector

* Exchange Admin Role
* Discovery Management Role
* Application Impersonation Role
* Exchange Online License

See the [Exchange Web Services API Permissions](../Solutions/Exchange/WebServicesAPI "Exchange Web Services API Permissions") topic for additional information.

For Exchange Web Services API Permissions with the EWSPublicFolder Data Collector

* Exchange Admin Role
* Discovery Management Role
* Application Impersonation Role
* Exchange Online License with a mailbox

See the [Exchange Web Services API Permissions](../Solutions/Exchange/WebServicesAPI "Exchange Web Services API Permissions") topic for additional information.

For Exchange2K Data Collector

* Member of the Exchange Administrator group
* Domain Admin for AD property collection
* Public Folder Management

For ExchangeMailbox Data Collector

* Member of the Exchange Administrator group
* Organization Management
* Discovery Management

For Exchange Mail Flow with ExchangeMetrics Data Collector

* Member of the local Administrator group on the targeted Exchange server(s)

See the [Exchange Mail-Flow Permissions](../Solutions/Exchange/MailFlow "Exchange Mail-Flow Permissions") topic for additional information.

For Exchange Remote Connection with SMARTLog Data Collector

* Member of the local Administrators group

See the [Exchange Remote Connections Permissions](../Solutions/Exchange/RemoteConnections "Exchange Remote Connections Permissions") topic for additional information.

For Exchange PowerShell with ExchangePS Data Collector

* Remote PowerShell enabled on a single Exchange server
* Windows Authentication enabled for the PowerShell Virtual Directory on the same Exchange server where Remote PowerShell has been enabled
* View-Only Organization Management Role Group
* Discovery Search Management Role Group
* Public Folder Management Role Group
* Mailbox Search Role

See the [Exchange PowerShell Permissions](../Solutions/Exchange/PowerShell "Exchange PowerShell Permissions") topic for additional information.

For ExchangePublicFolders Data Collector

* Member of the Exchange Administrator group
* Organization Management

## Ports

The following firewall ports are needed:

For ADInventory Data Collector

* TCP 389
* TCP 135-139
* Randomly allocated high TCP ports

For EWSMailbox Data Collector

* TCP 389
* TCP 443

For EWSPublicFolder Data Collector

* TCP 389
* TCP 443

For Exchange2K Data Collector

* TCP 135-139
* Randomly allocated high TCP ports
* TCP 389
* Optional TCP 445

For ExchangeMailbox Data Collector

* TCP 135
* Randomly allocated high TCP ports

For ExchangeMetrics Data Collector

* TCP 135
* Randomly allocated high TCP ports

For ExchangePS Data Collector

* TCP 135
* Randomly allocated high TCP ports

For ExchangePublicFolder Data Collector

* TCP 135
* Randomly allocated high TCP ports

For SMARTLog Data Collector

* TCP 135
* TCP 445
* Randomly allocated high TCP ports
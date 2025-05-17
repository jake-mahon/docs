---
sidebar_position: 4909
title: SharePoint Support
---

# SharePoint Support

Netwrix products audit and monitor Microsoft® SharePoint® environments. Access Analyzer employs the SharePoint solution to execute Access Auditing (SPAA) and Sensitive Data Discovery Auditing scans against SharePoint on-premise and SharePoint Online. Through integration with Activity Monitor, Access Analyzer can also execute Activity Auditing (SPAC) scans against SharePoint on-premise and SharePoint online environments. Additionally, Activity Monitor can be configured to provide activity data to various SIEM products.

Ports and permissions vary based on the scan mode option selected as well as the target environment.

Data Collectors

This solution employs the following data collector to scan the target environment:

* [ADInventory Data Collector](../../Admin/DataCollector/ADInventory/Overview "ADInventory Data Collector")
* [AzureADInventory Data Collector](../../Admin/DataCollector/AzureADInventory/Overview "AzureADInventory Data Collector")
* [SharePointAccess Data Collector](../../Admin/DataCollector/SPAA/Overview "SharePointAccess Data Collector")

Permissions and Ports for ADInventory Data Collector Prerequisite

The following permissions are needed:

* Read access to directory tree
* List Contents & Read Property on the Deleted Objects Container

  **NOTE:** See the Microsoft [Searching for Deleted Objects](https://technet.microsoft.com/en-us/library/cc978013.aspx "Opens the Searching for Deleted Objects article in a new window") article and the Microsoft [Dsacls](https://technet.microsoft.com/en-us/library/cc771151(v=ws.11).aspx "Opens the Dsacls article in a new window") article for additional information.

The following firewall ports are needed:

* TCP 389
* TCP 135-139
* Randomly allocated high TCP ports

Permissions and Ports for AzureADInventory Data Collector Prerequisite

The following permissions are needed:

* Microsoft Graph API

  * Application Permissions:

    * AuditLog.Read.All – Read all audit log data
    * Directory.Read.All – Read directory data
  * Delegated Permissions:

    * Group.Read.All – Read all groups
    * User.Read.All – Read all users' full profiles
* Access URLs

  * https://login.windows.net
  * https://graph.windows.net
  * https://login.microsoftonline.com
  * https://graph.microsoft.com

    * All sub-directories of the access URLs listed

The following firewall ports are needed:

* TCP 80 and 443

## Supported SharePoint Online

The following are supported Microsoft® SharePoint® Online:

* SharePoint Online® (Agent-less mode scans only)

* OneDrive® for Business (Access Auditing and/or Sensitive Data Discovery Auditing for Agent-less mode scans only)

See the [SharePoint Scan Options](../Solutions/SharePoint/ScanOptions "SharePoint Scan Options") topic for additional information.

**NOTE:** You can use the **SP\_RegisterAzureAppAuth** instant job to make the configuration for SharePoint Online easier. This job registers the necessary Microsoft Entra ID application and provisions it with the required permissions. See the [SP\_RegisterAzureAppAuth Job](../../Admin/Jobs/InstantJobs/SP_RegisterAzureAppAuth "SP_RegisterAzureAppAuth Job") topic for additional information.

## Supported SharePoint On-Premise

The following are supported Microsoft® SharePoint® operating systems:

* SharePoint® 2019
* SharePoint® 2016
* SharePoint® 2013

See the [SharePoint Scan Options](../Solutions/SharePoint/ScanOptions "SharePoint Scan Options") topic for additional information.
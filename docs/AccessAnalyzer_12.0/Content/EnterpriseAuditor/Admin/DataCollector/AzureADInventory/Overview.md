---
sidebar_position: 6002
title: AzureADInventory Data Collector
---

# AzureADInventory Data Collector

The AzureADInventory Data Collector catalogs user and group object information from Microsoft Entra ID, formerly Azure Active Directory. This data collector is a core component of Access Analyzer and is preconfigured in the .Entra ID Inventory Solution.

Both this data collector and the solution are available with all Access Analyzer license options. See the [.Entra ID Inventory Solution](../../../Solutions/EntraIDInventory/Overview ".Entra ID Inventory Solution") topic for additional information.

Protocols

* HTTP
* HTTPS
* REST

Ports

* TCP 80 and 443

Permissions

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

## AzureADInventory Query Configuration

The AzureADInventory Data Collector is configured through the Entra ID Inventory DC Wizard, which contains the following wizard pages:

* Welcome
* [AzureADInventory: Category](Category "AzureADInventory: Category")
* [AzureADInventory: Options](Options "AzureADInventory: Options")
* [AzureADInventory: Custom Attributes](CustomAttributes "AzureADInventory: Custom Attributes")
* [AzureADInventory: Results](Results "AzureADInventory: Results")
* [AzureADInventory: Summary](Summary "AzureADInventory: Summary")

![Entra ID Inventory Data Collector Wizard Welcome page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/EntraIDInventory/Welcome.png "Entra ID Inventory Data Collector Wizard Welcome page")

Hide the Welcome page the next time this data collected is accessed by selecting the **Do not display this page the next time** checkbox.
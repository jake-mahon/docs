---
sidebar_position: 5963
title: Exchange2K Data Collector
---

# Exchange2K Data Collector

The Exchange2K Data Collector extracts configuration details from Exchange organizations for versions 2003 and later. This is a MAPI-based data collector which requires the **Settings** > **Exchange** node to be enabled and configured. See the [Exchange](../../Settings/Exchange "Exchange") topic for additional information.

The Exchange2K Data Collector has been preconfigured within the Exchange Solution. Both this data collector and the solution are available with a special Access Analyzer license. See the [Exchange Solution](../../../Solutions/Exchange/Overview "Exchange Solution") topic for additional information.

Protocols

* LDAP
* MAPI
* PowerShell
* RPC
* WMI

Ports

* TCP 135-139
* Randomly allocated high TCP ports
* TCP 389
* Optional TCP 445

Permissions

* Member of the Exchange Administrator group
* Domain Admin for AD property collection
* Public Folder Management

## Exchange2K Query Configuration

The Exchange2K Data Collector is configured through the Exchange 2K+ Data Collector Wizard, which contains the following wizard pages:

* Welcome
* [Exchange2K: Category](Category "Exchange2K: Category")
* [Exchange2K: Scope](Scope "Exchange2K: Scope")
* [Exchange2K: Results](Results "Exchange2K: Results")
* [Exchange2K: MAPI Settings](MAPISettings "Exchange2K: MAPI Settings")
* [Exchange2K: Options](Options "Exchange2K: Options")
* [Exchange2K: Summary](Summary "Exchange2K: Summary")

![Exchange 2K+ Data Collector Wizard Welcome page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/Exchange2K/Welcome.png "Exchange 2K+ Data Collector Wizard Welcome page")

The Welcome page can be hidden by selecting the **Do not show this page the next time** checkbox when the wizard is open and configuration settings are saved.
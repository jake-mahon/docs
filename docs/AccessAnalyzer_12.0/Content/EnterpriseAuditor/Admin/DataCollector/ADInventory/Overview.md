---
sidebar_position: 5927
title: ADInventory Data Collector
---

# ADInventory Data Collector

The extraction and correlation of user, group, and computer attributes drastically transforms the meaning of data collected across the many systems and applications that are linked to Active Directory. The ADInventory Data Collector is designed as a highly scalable and useful data collection mechanism to catalogue user, group, and computer object information that can be used by other solutions within Access Analyzer.

The ADInventory Data Collector is a core component of Access Analyzer and has been preconfigured to be used within the .Active Directory Inventory Solution. Both this data collector and the solution are available with all Access Analyzer license options. See the [.Active Directory Inventory Solution](../../../Solutions/ActiveDirectoryInventory/Overview ".Active Directory Inventory Solution") topic for additional information.

Protocols

* LDAP

Ports

* TCP 389
* TCP 135-139
* Randomly allocated high TCP ports

Permissions

* Read access to directory tree
* List Contents & Read Property on the Deleted Objects Container

  **NOTE:** See the Microsoft [Searching for Deleted Objects](https://technet.microsoft.com/en-us/library/cc978013.aspx "Opens the Searching for Deleted Objects article in a new window") article and the Microsoft [Dsacls](https://technet.microsoft.com/en-us/library/cc771151(v=ws.11).aspx "Opens the Dsacls article in a new window") article for additional information.

## Functional Design of the ADInventory Data Collector

The ADInventory Data Collector has been designed to update incrementally. Once it has run against a domain controller, additional collections gather changes made since the last scan. This enables the ADInventory Data Collector to function efficiently within large environments. Each time it is run against different domain controllers, it restarts the cycle.

## ADInventory Query Configuration

The ADInventory Data Collector is configured through the Active Directory Inventory DC Wizard, which contains the following wizard pages:

* Welcome
* [ADInventory: Category](Category "ADInventory: Category")
* [ADInventory: Results](Results "ADInventory: Results")
* [ADInventory: Options](Options "ADInventory: Options")
* [ADInventory: Index Update Options](IndexUpdateOptions "ADInventory: Index Update Options")
* [ADInventory: Custom Attributes](CustomAttributes "ADInventory: Custom Attributes")
* [ADInventory: Summary](Summary "ADInventory: Summary")

![Active Directory Inventory DC Wizard Welcome page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/ADInventory/Welcome.png "Active Directory Inventory DC Wizard Welcome page")

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox when the wizard is open and configuration settings are saved.
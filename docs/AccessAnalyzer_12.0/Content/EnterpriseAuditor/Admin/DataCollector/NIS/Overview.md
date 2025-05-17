---
sidebar_position: 6152
title: NIS Data Collector
---

# NIS Data Collector

The NIS Data Collector inventories a NIS domain for user and group information, mapping to Windows-style SIDs. This data collector is a core component of Access Analyzer and has been preconfigured within the .NIS Inventory Solution. Both this data collector and the solution are available with all Access Analyzer license options. See the [.NIS Inventory Solution](../../../Solutions/NISInventory/Overview ".NIS Inventory Solution") topic for additional information.

Protocols

* NIS

Ports

* TCP 111 or UDP 111
* Randomly allocated high TCP ports

Permissions

* No special permissions are needed aside from access to a NIS server

## NIS Query Configuration

The NIS Data Collector is configured through the NIS Data Collector Wizard, which contains the following wizard pages:

* Welcome
* [NIS: Category](Category "NIS: Category")
* [NIS: NIS Settings](Settings "NIS: NIS Settings")
* [NIS: SID Mappings](SIDMappings "NIS: SID Mappings")
* [NIS: NIS Query](Query "NIS: NIS Query")
* [NIS: Results](Results "NIS: Results")
* [NIS: Summary](Summary "NIS: Summary")

![NIS Data Collector Wizard Welcome page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/NIS/Welcome.png "NIS Data Collector Wizard Welcome page")

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox when the wizard is open and configuration settings are saved.
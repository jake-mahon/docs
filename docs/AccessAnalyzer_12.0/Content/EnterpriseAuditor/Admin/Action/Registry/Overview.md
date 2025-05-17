---
sidebar_position: 5781
title: Registry Action Module
---

# Registry Action Module

The Registry action module allows users to make bulk changes to the Microsoft Windows Registry. Use the Registry Action Module Wizard to choose the data table column that identifies the folders and to configure the operations performed against the selected folders. The Registry action module requires a column containing the hosts to be targeted.

Prior to configuring the Registry Action Module Wizard, scope the source data table to ensure the actions apply only to the desired hosts.

**CAUTION:** Unexpected values in the registry can cause major system failures when deleting or modifying registry items.

***RECOMMENDED:*** Backup the system registry before making changes using the Registry action module.

## Registry Action Source Table Configuration

All data tables used in Access Analyzer action modules require the presence of certain data columns. In addition, individual action modules including Registry may have their own column requirements. The Registry action module requires a column containing the hosts that are going to be targeted.

## Configuration

The Registry action module is configured through the Registry Action Module Wizard, which contains the following wizard pages:

* Welcome
* [Registry: Target Hosts](TargetHosts "Registry: Target Hosts")
* [Registry: Operations](Operations "Registry: Operations")
* [Registry: Summary](Summary "Registry: Summary")

The Welcome page gives an overview of the Registry Action Module Wizard. The steps navigation pane contains links to the pages in the wizard. Review the introductory and caution information about the Registry Action Module before proceeding.

![Registry Action Module Wizard Welcome page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Action/Registry/Welcome.png "Registry Action Module Wizard Welcome page")

To proceed, click Next or use the Steps navigation pane to open another page in the wizard.
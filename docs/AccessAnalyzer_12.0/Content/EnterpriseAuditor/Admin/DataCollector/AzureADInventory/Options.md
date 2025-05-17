---
sidebar_position: 6008
title: "AzureADInventory:\_Options"
---

# AzureADInventory: Options

The Options page provides scan options to use when gathering Microsoft Entra ID information. It is a wizard page for the Scan Entra ID category.

![Entra ID Inventory DC Wizard Options page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/EntraIDInventory/Options.png "Entra ID Inventory DC Wizard Options page")

Scan options for collecting Microsoft Entra ID information include:

* Collect only updates since the last scan
* Collect sign-in activity with scan
  * This option is required to collect the LastLogonTimestamp attribute of user objects
* Collect directory audit events
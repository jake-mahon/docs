---
sidebar_position: 5953
title: Box Data Collector
---

# Box Data Collector

The Box Data Collector audits access, group membership, and content within a Box enterprise.

**NOTE:** If the Box Data Collector is used in a new job, outside of the Box Solution, it is necessary to deselect the **Skip Hosts that do not respond to PING** option on the job’s **Properties** > **Performance** tab.

The Box Data Collector has been preconfigured within the Box Solution. Both this data collector and the solution are available with a special Access Analyzer license. See the [Box Solution](../../../Solutions/Box/Overview "Box Solution") topic for additional information.

Protocols

* HTTP
* HTTPS

Ports

* TCP 80
* TCP 443

Permissions

* Box Enterprise Administrator

## Box Query Configuration

The Box Data Collector is configured through the Box Data Collector Wizard. The wizard contains the following pages, which change based up on the query category selected:

* Welcome
* [Box: Category](Category "Box: Category")
* [Box: Exclusions Page](Exclusions "Box: Exclusions Page")
* [Box: Scope by User Page](ScopeByUser "Box: Scope by User Page")
* [Box: Additional Scoping](AdditionalScoping "Box: Additional Scoping")
* [Box: Activity Timeframe Scope](ActivityTimeframeScope "Box: Activity Timeframe Scope")
* [Box: Activity Operation Scope](ActivityOperationScope "Box: Activity Operation Scope")
* [Box: Authenticate](Authenticate "Box: Authenticate")
* [Box: Results](Results "Box: Results")
* [Box: Summary](Summary "Box: Summary")

The Welcome page gives an overview of the data collector. To proceed through the pages, click **Next** or use the Steps navigation pane to open another page in the wizard. Review the introductory and caution information about the Box Data Collector before proceeding.

![Box DC Wizard Welcome page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/Box/Welcome.png "Box DC Wizard Welcome page")

The Welcome page can be hidden by checking the **Do not display this page the next time** box when the wizard is open and configuration settings are saved.
---
sidebar_position: 6086
title: SharePointAccess Data Collector
---

# SharePointAccess Data Collector

The SharePointAccess (SPAA) Data Collector audits access, group membership, and content within a SharePoint on-premises and SharePoint Online environment. The SPAA Data Collector has been preconfigured within the SharePoint Solution. Both this data collector and the solution are available with a special Access Analyzer license. See the [SharePoint Solution](../../../Solutions/SharePoint/Overview "SharePoint Solution") topic for additional information. The SPAA Data Collector has the following requirements:

Protocols

* MS SQL
* Remote Registry
* SP CSOM (Web Services via HTTP & HTTPS)
* SP Server API
* WCF AUTH via TCP (configurable)

Ports

* Ports vary based on the Scan Mode selected and target environment. See the [SharePoint Scan Options](../../../Requirements/Solutions/SharePoint/ScanOptions "SharePoint Scan Options") topic for additional information.

Permissions

* Permissions vary based on the Scan Mode selected and target environment. See the [SharePoint Support](../../../Requirements/Target/SharePoint "SharePoint Support") topic for additional information.

Sensitive Data Discovery Considerations

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

## SPAA Query Configuration

The SharePointAccess Data Collector is configured through the SharePoint Access Auditor Data Collector Wizard. The wizard contains the following pages, which change based up on the query Category selected:

* Welcome
* [SPAA: Category](Category "SPAA: Category")
* [SPAA: SharePoint Data Collection Settings](Settings "SPAA: SharePoint Data Collection Settings")
* [SPAA: Scan Scoping Options](ScanScopingOptions "SPAA: Scan Scoping Options")
* [SPAA: Additional Scoping](AdditionalScoping "SPAA: Additional Scoping")
* [SPAA: Agent Settings](AgentSettings "SPAA: Agent Settings")
* [SPAA: Bulk Import Settings](BulkImportSettings "SPAA: Bulk Import Settings")
* [SPAA: DLP Audit Settings](DLPAuditSettings "SPAA: DLP Audit Settings")
* [SPAA: Select DLP Criteria](SelectDLPCriteria "SPAA: Select DLP Criteria")
* [SPAA: Activity Date Scope](ActivityDateScope "SPAA: Activity Date Scope")
* [SPAA: Activity Log Locations](ActivityLogLocations "SPAA: Activity Log Locations")
* [SPAA: Test Access](TestAccess "SPAA: Test Access")
* [SPAA: Results](Results "SPAA: Results")
* [SPAA: Summary Page](Summary "SPAA: Summary Page")

![SPAA Data Collector Wizard Welcome Page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/SPAA/WelcomePage.png "SPAA Data Collector Wizard Welcome Page")

The Welcome page can be hidden by checking the **Do not display this page the next time** box when the wizard is open and configuration settings are saved.
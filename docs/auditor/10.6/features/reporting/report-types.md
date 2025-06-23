---
title: Interactive Reports for Change Management
sidebar_label: Report Types
description: Navigate interactive reports in Netwrix Auditor for comprehensive change management workflow analysis and audit trail review.
---

# Interactive Reports for Change Management Workflow

Change management is one of the critical processes for many companies referring to such areas as
requesting, planning, implementing, and evaluating changes to various systems. For your change
management workflow, Netwrix Auditor offers several reports with interactive capabilities – not only
they list changes in your infrastructure but also allow you to track, analyze, assign appropriate
status and comment on these changes.

This capability can supplement your organization's workflow of monitoring and resolving potential
issues through the following automated course of action:

1. The reported changes to the monitored environment are assigned the New status by default.
2. If a change seems unauthorized, or requires further analysis, you can click the Click to update
   status link next to the change detailed data:
   ![reviewstatus](/img/versioned_docs/auditor_10.6/auditor/admin/reports/reviewstatus.webp)3. In the
   **Review status** dialog for selected change, set its status to In Review and provide a reason.
3. Once the change has been approved of, or rolled back, you can set its status to Resolved.

This capability is supported for the following reports:

| Data source              | Report location                                                                               |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| Entire IT infrastructure | Organization Level Reports                                                                    |
| Active Directory         | Active Directory → Active Directory Changes → All Active Directory Changes with Review Status |
| Exchange                 | Exchange → All Exchange Server Changes with Review Status                                     |
| SharePoint               | SharePoint → All SharePoint Changes with Review Status                                        |
| Windows Server           | Windows Server → Windows Server Changes → All Windows Server Changes with Review Status       |
| Group Policy             | Active Directory → Group Policy Changes → All Group Policy Changes with Review Status         |

In the report filters, select a monitoring plan you want to generate a report for. To review data
sources and items included in each plan, navigate to the Monitoring Plans section.

They list

Each report has a set of filters which help organize audit data in the most convenient way. See the
[View Reports](/docs/auditor/10.6/features/reporting/report-types.md) topic for additional
information. You can also create a subscription to any report you want to receive on a regular
basis. See the [Subscriptions](/docs/auditor/10.6/features/reporting/subscriptions.md)
topic for additional information.

# Change and Activity Reports

Change and activity reports provide information on changes to different aspects of the audited
environment. Depending on the data source, navigate to one of the following locations, or use the
search field to look for the keywords you need:

| Data source                          | Report location                                      |
| ------------------------------------ | ---------------------------------------------------- |
| Active Directory                     | **Active Directory** → **Active Directory Changes**  |
| Active Directory Federation Services | **Active Directory Federation Services (AD** **FS)** |
| Microsoft Entra ID Plans             | Microsoft Entra ID Plans                             |
| Group Policy                         | Active Directory → Group Policy Changes              |
| Exchange                             | Exchange                                             |
| Exchange Online                      | Exchange Online                                      |
| File Servers                         | File Servers → File Servers Activity                 |
| Oracle Database                      | Oracle Database                                      |
| SharePoint                           | SharePoint                                           |
| SharePoint Online                    | SharePoint Online                                    |
| SQL Server                           | SQL Server                                           |
| VMware                               | VMware                                               |
| Windows Server                       | Windows Server → Windows Server Changes              |
| Event Log                            | Windows Server → Event Log                           |
| IIS                                  | Windows Server→ Event Log                            |
| Logon Activity                       | **Active Directory** → **Logon Activity**            |
| Integration API                      | Organization Level Reports                           |
| Netwrix Auditor self-audit           | Organization Level Reports                           |

In the report filters, select a monitoring plan you want to generate a report for. To review data
sources and items included in each plan, navigate to the Monitoring Plans section.

![allactivedirectorychanges](/img/versioned_docs/auditor_10.6/auditor/admin/reports/allactivedirectorychanges.webp)

Each report has a set of filters which help organize audit data in the most convenient way. See the
[View Reports](/docs/auditor/10.6/features/reporting/report-types.md) topic for additional
information. You can also create a subscription to any report you want to receive on a regular
basis. See the [Subscriptions](/docs/auditor/10.6/features/reporting/subscriptions.md)
topic for additional information.

# Compliance Reports

For your convenience, besides grouping by data source the reports are grouped by compliance
standards. Auditor provides out-of-box reports that allow validating compliance with different
standards and regulations, including but not limited to:

- FERPA
- FISMA/NIST SP800-53 rev4
- GDPR
- GLBA
- HIPAA
- ISO/IEC 27001
- NERC
- PCI DSS v3.2
- SOX
- CJIS

Each compliance folder provides overview on a selected standard, to read it, click on the folder
name. Click Read More to learn more about mapping between these standards and Auditor reports.

In the report filters, select a monitoring plan you want to generate a report for. To review data
sources and items included in each plan, navigate to the Monitoring Plans section.

Review the following for additional information:

- See the [View Reports](/docs/auditor/10.6/features/reporting/report-types.md) topic for
  additional information on how to find the report you need and view reports in a web browser.

# Data Discovery and Classification Reports

Follow the steps to review Data Discovery and Classification reports:

**Step 1 –** Navigate to **Reports** > **Data Discovery and Classification** and select a report you
are interested in.

**Step 2 –** Click View.

Data Discovery and Classification reports grouped by data sources.

The table below lists the reports available for Data Discovery and Classification:

| Report                                          | Description                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| File Servers                                    |                                                                                                                                                                                                                                                                                                                                                                                               |
| Activity reports                                |                                                                                                                                                                                                                                                                                                                                                                                               |
| Activity Related to Sensitive Files and Folders | This report lists all access attempts to files and folders that contain certain categories of sensitive data at the moment.                                                                                                                                                                                                                                                                   |
| State-in-time reports                           |                                                                                                                                                                                                                                                                                                                                                                                               |
| Most Accessible Sensitive Files and Folders     | This report shows the number of users that effectively have access to sensitive files or folders, sorted in descending order. Use this report to identify data at high risk and plan for corrective actions accordingly.                                                                                                                                                                      |
| Overexposed Files and Folders                   | This report shows sensitive files and folders accessible by the specified users or groups, based on the combination of folder and share permissions. Use this report to identify data at high risk and plan for corrective actions accordingly.                                                                                                                                               |
| Sensitive Files and Folders by Owner            | This report shows ownership of files and folders that are stored in the specified file share and contain selected categories of sensitive data. Use this report to determine the owners of particular sensitive data.                                                                                                                                                                         |
| Files and Folders Categories by Object          | This report shows files and folders that contain specific categories of sensitive data. Use this report to see whether a specific file or folder contains sensitive data.                                                                                                                                                                                                                     |
| Sensitive Files Count by Source                 | This report shows the number of files that contain specific categories of sensitive data. Use this report to estimate amount of your sensitive data in each category, plan for data protection measures and control their implementation.                                                                                                                                                     |
| Sensitive File and Folder Permissions Details   | This report shows permissions granted on files and folders that contain certain categories of sensitive data. Use this report to see who has access to a particular file or folder, via either group membership or direct assignment. Reveal sensitive content that has permissions different from the parent folder.                                                                         |
| SharePoint                                      |                                                                                                                                                                                                                                                                                                                                                                                               |
| Activity reports                                |                                                                                                                                                                                                                                                                                                                                                                                               |
| Activity Related to Sensitive Data Objects      | This report shows changes and read operations on SharePoint sites and documents that contain sensitive information. Use this report to detect suspicious activity around your sensitive data.                                                                                                                                                                                                 |
| State-in-time reports                           |                                                                                                                                                                                                                                                                                                                                                                                               |
| Sensitive Data Objects by Site Collection       | For each SharePoint site collection listed, this report shows the categories of sensitive data stored there and the number of documents in each category. Use this report to reveal the number of sensitive files stored in your SharePoint site collections.                                                                                                                                 |
| Sensitive Data Objects                          | For each site collection listed, this report shows the SharePoint objects (sites, lists and documents) that have been classified as containing sensitive information. Use this report to plan and control data protection measures for sensitive information stored on your SharePoint.                                                                                                       |
| Sensitive Data Object Permissions               | For each SharePoint object (site, list or document) listed, this report shows the user accounts that have access to this object, their effective permissions and how those permissions were granted (for example, permissions can be granted directly, via group membership or using SharePoint policy). Use this report to control access to SharePoint objects that contain sensitive data. |
| Overexposed Sensitive Data Objects              | For each user account listed, this report shows the SharePoint objects (sites, lists and documents) containing sensitive data that the user can access based on their effective permissions. Use this report to identify overexposed data and plan measures to mitigate your risk.                                                                                                            |
| Most Exposed Sensitive Data Objects             | Lists the SharePoint objects (sites, lists and documents) containing sensitive data that can be accessed by the most users (or even Everyone), based on effective permissions. Use this report to identify data at high risk and plan corrective actions.                                                                                                                                     |

## Requirements for Data Discovery and Classification Reports

The table below contains requirements to run Data Discovery and Classification reports. These are
reports that help you to reduce the risk of data leaks and non-compliance by ensuring that all
sensitive data resides in safe locations, that it isn't overexposed and that user activity around it
is in line with security policies.

Applicable for:

- File Servers
- SharePoint
- SharePoint Online

| Report                                          | Requirement                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| File Servers                                    |                                                                                                                                                                                                                                                                                                                             |
| Activity Related to Sensitive Files and Folders | - Monitoring plan for File Server data source with activity audit enabled in Netwrix Auditor; - Netwrix Data Classification instance configured to crawl from the same source (naming must exactly match); - Sensitive Data Discovery correctly configured on the Netwrix Auditor Server.                                   |
| File and Folder Categories by Object            | - Monitoring plan for File Server data source with 'Collect data for State-In-Time reports' feature enabled in Netwrix Auditor; - Netwrix Data Classification instance configured to crawl from the same source (naming must exactly match); - Sensitive Data Discovery correctly configured on the Netwrix Auditor Server. |
| Most Accessible Sensitive Files and Folders     | - Monitoring plan for File Server data source with 'Collect data for State-In-Time reports' feature enabled in Netwrix Auditor; - Netwrix Data Classification instance configured to crawl from the same source (naming must exactly match); - Sensitive Data Discovery correctly configured on the Netwrix Auditor Server. |
| Overexposed Files and Folders                   | - Monitoring plan for File Server data source with 'Collect data for State-In-Time reports' feature enabled in Netwrix Auditor; - Netwrix Data Classification instance configured to crawl from the same source (naming must exactly match); - Sensitive Data Discovery correctly configured on the Netwrix Auditor Server. |
| Sensitive File and Folder Permissions Details   | - Monitoring plan for File Server data source with 'Collect data for State-In-Time reports' feature enabled in Netwrix Auditor; - Netwrix Data Classification instance configured to crawl from the same source (naming must exactly match); - Sensitive Data Discovery correctly configured on the Netwrix Auditor Server. |
| Sensitive Files and Folders by Owner            | - Monitoring plan for File Server data source with 'Collect data for State-In-Time reports' feature enabled in Netwrix Auditor; - Netwrix Data Classification instance configured to crawl from the same source (naming must exactly match); - Sensitive Data Discovery correctly configured on the Netwrix Auditor Server. |
| Sensitive Files and Folders by Source           | - Monitoring plan for File Server data source with 'Collect data for State-In-Time reports' feature enabled in Netwrix Auditor; - Netwrix Data Classification instance configured to crawl from the same source (naming must exactly match); - Sensitive Data Discovery correctly configured on the Netwrix Auditor Server. |
| SharePoint                                      |                                                                                                                                                                                                                                                                                                                             |
| Activity Related to Sensitive Data Objects      | - Monitoring plan for SharePoint data source with activity audit enabled in Netwrix Auditor; - Netwrix Data Classification instance configured to crawl from the same source (naming must exactly match); - Sensitive Data Discovery correctly configured on the Netwrix Auditor Server.                                    |
| Overexposed Sensitive Data Objects              | - Monitoring plan for File Server data source with 'Collect data for State-In-Time reports' feature enabled in Netwrix Auditor; - Netwrix Data Classification instance configured to crawl from the same source (naming must exactly match); - Sensitive Data Discovery correctly configured on the Netwrix Auditor Server. |
| Sensitive Data Object Permissions               | - Monitoring plan for File Server data source with 'Collect data for State-In-Time reports' feature enabled in Netwrix Auditor; - Netwrix Data Classification instance configured to crawl from the same source (naming must exactly match); - Sensitive Data Discovery correctly configured on the Netwrix Auditor Server. |
| Sensitive Data Objects by Site Collection       | - Monitoring plan for File Server data source with 'Collect data for State-In-Time reports' feature enabled in Netwrix Auditor; - Netwrix Data Classification instance configured to crawl from the same source (naming must exactly match); - Sensitive Data Discovery correctly configured on the Netwrix Auditor Server. |
| Sensitive Data Objects                          | - Monitoring plan for File Server data source with 'Collect data for State-In-Time reports' feature enabled in Netwrix Auditor; - Netwrix Data Classification instance configured to crawl from the same source (naming must exactly match); - Sensitive Data Discovery correctly configured on the Netwrix Auditor Server. |

## Make Reports Handy

In addition to reviewing reports, you can customize them with filters and create report
subscriptions. Review the following for additional information:

- [View Reports](/docs/auditor/10.6/features/reporting/report-types.md)
- [Create Subscriptions](/docs/auditor/10.6/features/reporting/subscriptions.md)

# Enterprise Overview Dashboard

Enterprise Overview dashboard provide a high-level overview of activity trends by date, user,
server, object type or audited system in your IT infrastructure. They allow you to see the activity
trends by date, user, object type, server or audited IT system, and drill through to detailed
reports for further analysis. The Enterprise diagram aggregates data on all Managed Objects and all
audited systems, while system-specific diagrams provide quick access to important statistics within
one audited system.

The current version of Netwrix Auditor contains the following diagrams:

- Enterprise (aggregates data on all audited systems listed below)
- Active Directory
- Exchange
- File Servers
- SharePoint
- SQL Server
- VMware
- Windows Server

If you are sure that some audit data is missing (e.g., you do not see information on your file
servers in reports and search results), verify that the Audit Database settings are configured and
that data is written to databases that reside on the default SQL Server instance.

By default, Auditor allows generating reports and running interactive searches on data collected in
the last 180 days. If you want to investigate incidents that occurred more than 180 days ago, ask
your Auditor Global administrator to import that data from the Long-Term Archive.

All diagrams provide the drill-down functionality, which means that by clicking on a segment, you
will be redirected to a report with the corresponding filtering and grouping of data that renders
the next level of detail.

Follow the steps to review a diagram:

- On the Auditor home screen, click the **Reports** tile and open the Enterprise Overview section.
  Click a tile to open a corresponding diagram.
- Navigate to Reports and select one of the following locations:

  | Title                     | Location                                     |
  | ------------------------- | -------------------------------------------- |
  | Enterprise                | Organization Level Reports                   |
  | Active Directory Overview | Active Directory ® Active Directory Changes |
  | Exchange Overview         | Exchange                                     |
  | File Servers Overview     | File Servers ® File Servers Activity        |
  | SharePoint Overview       | SharePoint                                   |
  | SQL Server Overview       | SQL Server                                   |
  | VMware Overview           | VMware                                       |
  | Windows Server Overview   | Windows Server ® Windows Server Changes     |

The example below applies to Enterprise.

![dashboard](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/enduser/dashboard.webp)

Each report has a set of filters which help organize audit data in the most convenient way. See the
[View Reports](/docs/auditor/10.6/features/reporting/report-types.md) topic for additional
information. You can also create a subscription to any report you want to receive on a regular
basis. See the [Subscriptions](/docs/auditor/10.6/features/reporting/subscriptions.md)
topic for additional information.

# Organization Level Reports

Organization Level reports aggregate data on all monitoring plans and list changes and activity that
occurred across all data sources. Also, this folder includes a report on Auditor self-audit - it
provides detailed information on changes to monitoring plans, data sources and audited items.

Organization Level reports can be found in the Organization Level Reports folder under the Reports
node.

This folder includes:

| Report                          | Details                                                                                                                                                                                                                                                                                                     |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enterprise Overview             | Dashboard report with diagrams showing all activities and changes across the monitored data sources. See also: [Enterprise Overview Dashboard](/docs/auditor/10.6/features/reporting/report-types.md)                                                                                                       |
| All Activity with Review Status | Shows all activity across the entire IT infrastructure, including changes, read access and logons. Features interactive review status to supplement your change management workflow. See also: [Interactive Reports for Change Management Workflow](/docs/auditor/10.6/features/reporting/report-types.md). |
| All Changes by Data Source      | Shows all changes across your IT infrastructure, grouped by data source.                                                                                                                                                                                                                                    |
| All Changes by Server           | Shows all changes across the entire IT infrastructure, grouped by the server where the change was made.                                                                                                                                                                                                     |
| All Changes by User             | Shows all changes across your IT infrastructure, grouped by the user who made the change.                                                                                                                                                                                                                   |
| All Integration API Activity    | Shows all activity records imported with Netwrix Auditor Integration API.                                                                                                                                                                                                                                   |
| Self-Audit                      | Help to ensure that the scope of data to be audited is complete and all changes are in line with the workflows adopted by your organization.                                                                                                                                                                |

Each report has a set of filters which help organize audit data in the most convenient way. See the
[View Reports](/docs/auditor/10.6/features/reporting/report-types.md) topic for additional
information. You can also create a subscription to any report you want to receive on a regular
basis. See the [Subscriptions](/docs/auditor/10.6/features/reporting/subscriptions.md)
topic for additional information.

# Predefined Reports

Netwrix Auditor is shipped with 250+ ready-to-use reports designed by Netwrix industry experts. To
find a report that is right for you, check out the predefined report types available in the product.

- Enterprise Overview—A dashboard with a set of widgets that provide quick access to important
  statistics across the audited IT infrastructure. They allow you to see the activity trends by
  date, user, data source, server or audited IT system, and drill through to detailed reports for
  further analysis. The Enterprise Overview dashboard aggregates the information on changes from all
  data sources and provides a centralized overview. System-specific dashboards reflect all changes
  across all monitoring plans where audit of this target system is enabled. See the
  [Enterprise Overview Dashboard](/docs/auditor/10.6/features/reporting/report-types.md)
  topic for additional information.
- Organization level reports—High-level reports that aggregate data from all data sources and
  monitoring plans. They list all activity that occurred across the audited IT infrastructure.
  Enterprise Overview provides bird's eye view of changes and activity from all data sources and
  provides a centralized overview. See the
  [ Organization Level Reports](/docs/auditor/10.6/features/reporting/report-types.md)
  topic for additional information.
- Overview diagrams—System-specific diagram reports that aggregate audit data for an auditing
  system. They provide a high-level overview of changes within a selected time period. Overviews
  consist of four charts, showing the activity trends by date, user, object type or server, and
  drill through to detailed reports for further analysis.
- Change and activity reports—System-specific reports that aggregate audit data for a specific data
  source within specified monitoring plans. These reports show detailed data on changes and activity
  and provide grouping, sorting and filtering capabilities. Each report has a different set of
  filters allowing you to manage collected data in the most convenient way. See the
  [Change and Activity Reports](/docs/auditor/10.6/features/reporting/report-types.md)
  topic for additional information.
- State-in-time reports—System-specific reports that aggregate data for a specific data source
  within a specified individual monitoring plan and allow reviewing the point-in-time state of the
  data source. These reports are based on daily snapshots and help you paint a picture of your
  system configuration at a specific moment in time. Currently, the Windows Server State-in-Time
  report set provides baselining functionality that help identify aberrant servers. See the
  [State–In–Time Reports](/docs/auditor/10.6/features/reporting/report-types.md)
  topic for additional information.
- Changes with video reports—Windows server-based reports that provide video recordings of user
  activity on audited computers. See the
  [Reports with Video](/docs/auditor/10.6/features/reporting/report-types.md) topic for
  additional information.
- Changes with review status reports—Both system-specific and overview reports that can be used in
  the basic change management process. These reports allow setting a review status for each change
  and providing comments. See the
  [Interactive Reports for Change Management Workflow](/docs/auditor/10.6/features/reporting/report-types.md)
  topic for additional information.

Review the following for additional information:

- See the [View Reports](/docs/auditor/10.6/features/reporting/report-types.md) topic for
  additional information on how to find the report you need and view reports in a web browser.
- See the [View Reports](/docs/auditor/10.6/features/reporting/report-types.md) topic for
  additional information on how to apply filters to reports.

# Active Directory State-In-Time Reports

Examine the Active Directory state-in-time data on the user account attributes:

- User Accounts - Attributes

To instruct Netwrix Auditor to collect data needed for the report, make sure that **Collect data for
state-in-time reports** option is selected in the corresponding monitoring plan properties. See the
[Settings for Data Collection](/docs/auditor/10.6/monitoring-plans/creating-plans.md#settings-for-data-collection)
topic for additional information.

## User Accounts - Attributes

This report shows specific AD attributes for the accounts that meet the specified filtering
criteria. Use this report to discover user accounts with settings that violate company policies or
applicable compliance standards.

Supported object types and attributes are listed in the
[Active Directory](/docs/auditor/10.6/data-sources/active-directory/index.md)
topic.

For this report to function properly, you must enable the **Collect data for state-in-time reports**
option for the data source in the monitoring plan settings. See the
[Settings for Data Collection](/docs/auditor/10.6/monitoring-plans/creating-plans.md#settings-for-data-collection)
topic for additional information.

### Tips to Work with Report

1. Set desired filters in the report header. See [Filters](#filters) for more information.
2. Select as many Accounts details to show as needed. Selected details are shown in the table view
   for each account that comply filtering criteria.
3. Filter on Sort by to bring important accounts' data to front.
4. Add filters by specific attribute values to narrow your report scope. In this case, the report
   shows only accounts that contains these values. See the
   [Reported Attributes](#reported-attributes)  topic below for more information.
5. The report is limited by 2000 records. To view all, create subscription to the report. The
   subscription (email attachment or file uploaded to a file share) will contain complete data.
6. If you have more than 2000 entities within the report scope, sorting might work incorrectly.
   Apply filters to narrow your report scope.

Please consider that if you are going to export the report in .csv format or want to subscribe to
the .csv report, the file will contain the full list of available attributes regardless of which
filters you specified. Note that unseleted attributes have no values.

### Filters

You can narrow your reporting scope using multiple filters. Review the full list of available
filters and values:

- Monitoring plan — name of the monitoring plan set to collect data from the AD domain you need.
- Item — name of the item within your monitoring plan.
- Account details to show — set of AD attributes to display in the report for each account.
- Sort by — list of available sorting parameters.
- Attribute/Value — list of available AD attributes with the ability to provide specific value.
  Review the full list in the [Reported Attributes](#reported-attributes)

### Reported Data

For the account(s) you selected using filters, the summary section includes:

- **Total account count** — total number of accounts that meet selected filtering criteria.
- **Enabled accounts** —total number of enabled accounts that meet selected filtering criteria.
- **Disabled accounts** —total number of disabled accounts that meet selected filtering criteria.

#### Reported Attributes

The following account attributes are reported:

| Attribute                     | Description                                                                                                                                                                                                                                                                  | Possible values                                                                                                                                        | Filtering |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| Account                       |                                                                                                                                                                                                                                                                              |                                                                                                                                                        |           |
| Account enabled               | Shows whether an account enabled or not.                                                                                                                                                                                                                                     | Yes No                                                                                                                                                 | +         |
| Account locked                | Shows whether an account locked or not.                                                                                                                                                                                                                                      | Yes No                                                                                                                                                 | +         |
| Canonical name                | Equals the Canonical-Name attribute. See the corresponding Microsoft article for more information: [Canonical-Name attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-canonicalname).                                                                      | Example: _USRegion.OrgName.com/Finance/JDoe_                                                                                                           | +         |
| Display name                  | Equals the Display-Name attribute. See the corresponding Microsoft article for more information: [Display-Name attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-displayname).                                                                            | Example: _John Smith_                                                                                                                                  | +         |
| Logon name (sAMAccountName)   | Equals the sAMAccountName attribute. See the corresponding Microsoft article for more information: [sAMAccountName](https://docs.microsoft.com/en-us/windows/win32/ad/naming-properties#samaccountname).                                                                     | Example: _JSmith_                                                                                                                                      | +         |
| Logon name (UPN)              | Equals the userPrincipalName attribute. See the corresponding Microsoft article for more information: [User-Principal-Name attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-userprincipalname).                                                          | Example: _JSmith@domain.com_                                                                                                                           | +         |
| Parent OU/container           | Shows the path to account's parent object (OU or container)                                                                                                                                                                                                                  | Example: _test.corp.local/UserAccounts/user with all properties_                                                                                       | +         |
| Member of                     | Shows direct AD group membership for the account. The report is limited to 10 groups. To view all groups the account is member of, export the report to .CSV file.                                                                                                           | Example: _Domain Admins, Backup Operators_ Clicking the Expand group membership link opens a detailed report on the user’s effective group membership. | +         |
| Employee details              |                                                                                                                                                                                                                                                                              |                                                                                                                                                        |           |
| First name                    | Shows the first name.                                                                                                                                                                                                                                                        | Example: _John_                                                                                                                                        | +         |
| Last name                     | Shows the last name.                                                                                                                                                                                                                                                         | Example: _Smith_                                                                                                                                       | +         |
| Job title                     | Equals the Title attribute. See the corresponding Microsoft article for more information: [Title attribute (AD Schema)](https://docs.microsoft.com/en-us/windows/win32/adschema/a-title).                                                                                    | Example: _Manager_                                                                                                                                     | +         |
| Department                    | Shows the name for the department in which the user works.                                                                                                                                                                                                                   | Example: _Sales_                                                                                                                                       | +         |
| Telephone number              | Equals the Telephone-Number attribute. See the corresponding Microsoft article for more information: [Telephone-Number attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-telephonenumber).                                                                | Example: _949-555-1234_                                                                                                                                | +         |
| Email address                 | Equals the E-mail-Addresses attribute. See the corresponding Microsoft article for more information: [E-mail-Addresses attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-mail).                                                                           | Email address _Example: JSmith@domain.com_                                                                                                             | +         |
| Manager                       | Shows manager specified for the account.                                                                                                                                                                                                                                     | Display name (default) If empty, the report shows common name.                                                                                         | +         |
| Manager email address         | Equals the manager / mail attribute.                                                                                                                                                                                                                                         | Email address _Example: JSmith@domain.com_                                                                                                             | +         |
| Office                        | Equals the Physical-Delivery-Office-Name attribute. See the corresponding Microsoft article for more information: [Physical-Delivery-Office-Name attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-physicaldeliveryofficename).                           | Example: _London Office_                                                                                                                               | +         |
| Company                       | Equals the Company attribute. See the corresponding Microsoft article for more information: [Company attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-company).                                                                                          | Example: _Corporation_                                                                                                                                 | +         |
| Street address                | Shows address based on the Street-Address and postOfficeBox attributes.                                                                                                                                                                                                      | Example: _The Main Road; 10_                                                                                                                           | +         |
| City                          | Shows the locality, such as the town or city, in the user's address.                                                                                                                                                                                                         | Example: _NewLondon_                                                                                                                                   | +         |
| State/province                | Equals the State-Or-Province-Name attribute. See the corresponding Microsoft article for more information: [State-Or-Province-Name attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-st).                                                                 | Example: _New York_                                                                                                                                    | +         |
| ZIP/postal code               | Equals the Postal-Code attribute. See the corresponding Microsoft article for more information: [Postal-Code attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-postalcode).                                                                               | Example: _61441_                                                                                                                                       | +         |
| Country/region                | Shows the country/region in which the user is located.                                                                                                                                                                                                                       | Example: _Ireland_                                                                                                                                     | +         |
| Security                      |                                                                                                                                                                                                                                                                              |                                                                                                                                                        |           |
| Account cannot be delegated   | Shows whether the account can be delegated or not based on the User-Account-Control attribute. See the corresponding Microsoft article for more information: [User-Account-Control attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-useraccountcontrol). | Yes No                                                                                                                                                 | +         |
| Account expiration date       | Equals the Account-Expires attribute. See the corresponding Microsoft article for more information: [Account-Expires attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-accountexpires).                                                                   | Date                                                                                                                                                   | –         |
| Password age                  | Shows password age for the account based on the Pwd-Last-Set attribute. See the corresponding Microsoft article for more information: [Pwd-Last-Set attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-pwdlastset).                                        | Number of days N/A — if password never set When the filter applied, the report shows above or equal results                                            | +         |
| Password expired              | Shows whether the account has the "_Password expired_" flag set under the AccountControl attribute.                                                                                                                                                                          | Yes No                                                                                                                                                 | +         |
| Password last changed         | Equals the Pwd-Last-Set attribute. See the corresponding Microsoft article for more information: [Pwd-Last-Set attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-pwdlastset).                                                                             | Date                                                                                                                                                   | –         |
| Never – if password never set | +                                                                                                                                                                                                                                                                            |                                                                                                                                                        |           |
| Password never expires        | Shows whether the account has the "_Password never expires_" flag set on the Account tab in properties.                                                                                                                                                                      | Yes No                                                                                                                                                 | +         |
| Password not required         | Shows whether the account has the "_Password not required_" flag set under the AccountControl attribute. Such account may have empty password.                                                                                                                               | Yes No                                                                                                                                                 | +         |
| User cannot change password   | Shows whether the account has the "_User cannot change password_" flag set on the Account tab in properties.                                                                                                                                                                 | Yes No                                                                                                                                                 | +         |
| User must change password     | Shows whether the account has the "_User must change password_" flag set on the Account tab in properties.                                                                                                                                                                   | Yes No                                                                                                                                                 | +         |
| Other                         |                                                                                                                                                                                                                                                                              |                                                                                                                                                        |           |
| Creation date                 | Shows account creation date.                                                                                                                                                                                                                                                 | Date                                                                                                                                                   | –         |
| Days inactive                 | Shows the number of days the account is considered to be inactive.                                                                                                                                                                                                           | Days When the filter applied, the report shows above or equal results                                                                                  | +         |
| Description                   | Contains account description if provided.                                                                                                                                                                                                                                    | Example: _Sales Manager_                                                                                                                               | +         |
| Last logon                    | Shows the date of account's last logon.                                                                                                                                                                                                                                      | Date Never A user's last logon time is updated only once every 9-14 days, so some data may be outdated.                                                | -         |
| Last modified                 | Equals the When-Changed attribute. See the corresponding Microsoft article for more information: [When-Changed attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-whenchanged).                                                                            | Date The Last modified attribute is considered as last object's modification date and not appears immediately. So some data may be outdated.           | –         |
| Logon script path             | Equals the Script-Path attribute. See the corresponding Microsoft article for more information: [Script-Path attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-scriptpath).                                                                               | Example: _C:\Powershellscripts\old scripts\script.ps1_                                                                                                 | +         |
| Recipient type                | Shows recipient type based on the msExchRecipientTypeDetails attribute.                                                                                                                                                                                                      | Mail user User Mailbox                                                                                                                                 | +         |
| Working (logon) hours         | Shows time interval based on the Logon-Hours attribute. See the corresponding Microsoft article for more information: [Logon-Hours attribute](https://docs.microsoft.com/en-us/windows/win32/adschema/a-logonhours).                                                         | Specified time interval (in hours).                                                                                                                    | –         |

### Related Reports

Clicking the **Account name** link opens the Account Permissions in Active Directory report.

Clicking the **Expand group membership** link opens the Effective Group Membership report for this
account.

### Usage Example

An IT administrators wants to find all user accounts from the OU named _Finance_ that are currently
locked out and disabled with information about their managers to contact them in case of any
questions. This OU is included in the monitoring plan named _Active Directory Monitoring_. They need
to set report filters as follows:

- Monitoring plan: Active Directory Monitoring
- In the "Account details to show" filter, select Manager.
- Attribute 1: Parent OU/container - equals | Value: Domain.com/Finance
- Attribute 2: Account enabled | Value: No
- Attribute 3: Account locked | Value: Yes
- All other filter values can be left default.

A security manager wants to find administrators of the _corp.local_ domain with incorrect password
settings (password not required). Service accounts (_svc_%_) must be skipped in the report. This
domain is included in the monitoring plan named \_Active Directory Monitoring_. He or she needs to
set report filters as follows:

- Monitoring plan: Active Directory Monitoring
- Item: corp.local
- In the "Account details to show" filter, select Member of, Password not required.
- Attribute 1: Member of - equals | Value: Domain Admins
- Attribute 2: Password not required| Value: Yes
- Attribute 3: Logon name (sAMAccountName) - not equal to | Value: svc\_%
- All other filter values can be left default.

# File Servers State-In-Time Reports

This section contains limitations and considerations for File Server State-in-Time reports
generation.

## Limitations

1. For the following File Server State-in-Time reports wildcard _%_ is not supported for the
   "_Object Path_" field:

   - Account permissions
   - Duplicate files
   - Empty folders
   - Excessive Access Permissions
   - Excessive Access Permissions with Account Details
   - Files and Folders by Owner
   - Folder and File Permission Details
   - Folder and File Permissions with Account Details
   - Folder Permissions
   - Folder Permissions with Account Details
   - Folder Summary Report
   - Largest Files
   - Potential Data Owners by Folder
   - Stale Data by Folder
   - Top Owners by Total File Size

2. For the Folder TreeView State-in-Time report, the wildcard _%_ is supported.

# Microsoft Entra ID State-In-Time Reports

To instruct Netwrix Auditor to collect data needed for the report, make sure that Collect data for
state-in-time reports option is selected in the corresponding monitoring plan properties. See
[Create a New Monitoring Plan](/docs/auditor/10.6/monitoring-plans/creating-plans.md).

**NOTE:** For Microsoft Entra ID, only the current date snapshot can be used for Reports.

## User Accounts - Attributes

The report shows specific AD attributes for the Microsoft Entra ID (formerly Azure AD) accounts that
meet the specified filtering criteria. Use this report to discover Microsoft Entra ID accounts with
settings that violate company policies or applicable compliance standards.

For this report to function properly, you must enable the Collect data for state-in-time reports
option for the data source in the monitoring plan settings. See the
[Settings for Data Collection](/docs/auditor/10.6/monitoring-plans/creating-plans.md#settings-for-data-collection)
topic for more information.

### Tips to Work with Report

- Set desired filters in the report header. See the [Filters](#filters) topic for more information.

- Select as many Accounts details to show as needed. Selected details are shown in the table view
  for each account that comply filtering criteria.

- Filter on Sort by to bring important accounts' data to front.

- Add filters by specific attribute values to narrow your report scope. In this case, the report
  shows only accounts that contains these values. See the
  [Reported Attributes](#reported-attributes) topic for more information.

- The report is limited by 2000 records. To view all, create subscription to the report. The
  subscription (email attachment or file uploaded to a file share) will contain complete data.

- If you have more than 2000 entities within the report scope, sorting might work incorrectly. Apply
  filters to narrow your report scope.

### Filters

You can narrow your reporting scope using multiple filters. Review the full list of available
filters and values:

- Monitoring plan — name of the monitoring plan set to collect data from the AD domain you need.
- Time zone — select you time zone.
- Item — name of the item within your monitoring plan.
- Sort by — list of available sorting parameters.
- Account enabled — select whether you want to see disabled accounts or not.
- Department — provide the name of the department if needed.
- Attribute/Value — list of available AD attributes with the ability to provide specific value.

### Reported Data

For the account(s) you selected using filters, the summary section includes:

- Total account count — total number of accounts that meet selected filtering criteria.

- Enabled accounts —total number of enabled accounts that meet selected filtering criteria.
- Disabled accounts —total number of disabled accounts that meet selected filtering criteria.

### Reported Attributes

The following account attributes are reported:

| Attribute (display name in report)       | Microsoft Entra ID attribute mapping        | Possible values                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Account enabled                          | accountEnabled                              | Yes/No                                                             | Specifies, whether the user account is enabled or disabled: the "true" value indicates that the account is enabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Change password on next sign in          | passwordProfile                             | Yes/No                                                             | Specifies the password profile for a user. The password in the profile must satisfy the minimum requirements as specified by the passwordPolicies property. By default, a strong password is required.                                                                                                                                                                                                                                                                                                                                                                                                              |
| Change password on next sign in with MFA | passwordProfile                             | Yes/No                                                             | Specifies the password profile for the user. The password in the profile must satisfy the minimum requirements as specified by the passwordPolicies property. By default, a strong password is required.                                                                                                                                                                                                                                                                                                                                                                                                            |
| City                                     | city                                        | Example: "_London_"                                                | The city where a user is located. Maximum length 128.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Cloud-only                               | onPremisesSyncEnabled                       | Yes/No                                                             | true if this object is synced from any on- premises directory; false if this object was originally synced from any on- premises directory but is no longer synced; null if this object has never been synced from any on-premises directory (default).                                                                                                                                                                                                                                                                                                                                                              |
| Country                                  | country                                     | Example: "_US_"                                                    | The country/region in which the user is located. Example: "US" or "UK". Maximum length 128.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Creation date                            | createdDateTime                             | 1/21/2021 4:08:00 PM                                               | The created date of the user object.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Department                               | department                                  | Example: "_Accounting and Finance_"                                | The name for the department in which the user works. Maximum length is 64 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Display name                             | displayName                                 | Example: "_John Smith_"                                            | The name displayed in the address book for the user. This is usually the combination of the user's first name, middle initial and last name. This property is required when a user is created and it cannot be cleared during updates. Maximum length is 256 characters.                                                                                                                                                                                                                                                                                                                                            |
| First name                               | givenName                                   | Example: "_John_"                                                  | The given name (first name) of the user. Maximum length is 64 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Is licensed                              | –                                           | –                                                                  | –                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Last DirSync time                        | onPremisesLastSyncDateTime                  | Example: _3/20/2021 2:13:00 PM_                                    | M Indicates the last time at which the object was synchronized with the on-premises directory; for example: "2013- 02- 16T03:04:54Z". The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time.                                                                                                                                                                                                                                                                                                                                                                      |
| Last name                                | surname                                     | Example: "_Smith_"                                                 | The user's surname (family name or last name). Maximum length is 64 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Licenses                                 | –                                           | Example: _Microsoft 365 E1_                                        | –                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Manager                                  | manager                                     | Example: "_James\_\_Williams_"                                     | The user or contact that is this user's manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Manager email                            | –                                           | Example: _JWilliams@gmail.com_                                     | –                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Office                                   | physicalDeliveryOfficeName (officeLocation) | Example: _1068_                                                    | The office location in the user's place of business. Maximum length is 128 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Password last change                     | lastPasswordChangeDateTime                  | Example: _4/6/2021 6:17:00 PM_                                     | The time when this Microsoft Entra ID Plans user last changed their password. The date and time information uses ISO 8601 format and is always in UTC time.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Password never expires                   | passwordPolicies                            | Yes/No                                                             | Specifies password policies for the user. This value is an enumeration with one possible value being “DisableStrongPassword”, which allows weaker passwords than the default policy to be specified. “DisablePasswordExpiration” can also be specified. The two may be specified together; for example: "DisablePasswordExpiration, DisableStrongPassword".                                                                                                                                                                                                                                                         |
| Phone number                             | businessPhones                              | Example: _+1-202-555-155_                                          | The telephone numbers for the user. Although this is a string collection, only one number can be set for this property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Role membership                          | –                                           | Example: "_Exchange Service Administrator, Company Administrator_" | –                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Sign in names                            | identities                                  | _Example: "user_company.com#EXT#@officenwxqc.onmicrosoft.com"_     | Represents the identities that can be used to sign into this user account. An identity can be provided by Microsoft (also known as a local account), by organizations, or by social identity providers such as Facebook, Google, and Microsoft, and tied to a user account. May contain multiple items with the same signInType value. https://docs.microsoft.com/en- us/graph/api/resources/objectid entity?view=graph-rest-1.0                                                                                                                                                                                    |
| Strong password required                 | passwordPolicies                            | Yes/No                                                             | Specifies password policies for the user. This value is an enumeration with one possible value being “DisableStrongPassword”, which allows weaker passwords than the default policy to be specified. “DisablePasswordExpiration” can also be specified. The two may be specified together; for example: "DisablePasswordExpiration, DisableStrongPassword".                                                                                                                                                                                                                                                         |
| Title                                    | jobTitle                                    | Example: "_Business development manager_"                          | The user's job title. Max length is 128.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| User principal name                      | userPrincipalName                           | Example: "_user_company.com#EXT#@officenwxqc.onmicrosoft.com_"     | The user principal name (UPN) of wxq the user. The UPN is an Internet- style login name for the user based on the Internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where the domain must be present in the tenant's collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of organization. NOTE: While this property can contain accent characters, they can cause access issues to first-party applications for the user. |
| User type                                | userType                                    | Example: "_Member_"                                                | A string value that can be used to classify user types in your directory, such as "Member" and "Guest".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

# State–In–Time Reports

The state-in-time reports functionality allows generating reports on the system's state at a
specific moment of time in addition to change and activity reports. State-in-time reports are based
on the daily configuration snapshots, and reflect a particular aspect of the audited environment.

This functionality is currently available for the following data sources:

- Active Directory
- Microsoft Entra ID
- File Servers
- Exchange Online
- MS Teams
- Windows Server
- SharePoint
- SharePoint Online
- SQL Server
- Group Policy
- VMware

**NOTE:** The State-in-Time functionality is not available for SQL Server Availability Groups.

To provide data for state-in-time reports, remember to select the **Collect data for state-in-time
reports** option when you configure a monitoring plan for the selected data source. See the
[Settings for Data Collection](/docs/auditor/10.6/monitoring-plans/creating-plans.md#settings-for-data-collection)
topic for additional information.

The state-in-time reports are available under the Reports node. Depending on the data source,
navigate to the corresponding subfolder, for example, **Predefined\_\_**>_**\_Active
Directory\_\_**>_**\_Active Directory\_\_**>\_**\_State-in-Time**.

In the report filters, select a monitoring plan you want to generate a report for. To review data
sources and items included in each plan, navigate to the Monitoring Plans section.

![fileshareswindowsservers](/img/versioned_docs/auditor_10.6/auditor/admin/reports/types/stateintime/fileshareswindowsservers.webp)

Each report has a set of filters which help organize audit data in the most convenient way. See the
[View Reports](/docs/auditor/10.6/features/reporting/report-types.md) topic for additional
information. You can also create a subscription to any report you want to receive on a regular
basis. See the [Subscriptions](/docs/auditor/10.6/features/reporting/subscriptions.md)
topic for additional information.

By default, state-in-time reports reflect the current state of the data source. If you want to
generate a report to assess your system at a particular moment in the past, you can select the
corresponding snapshot from the Snapshot Date filter.

To be able to generate reports based on different snapshots, ask your Auditor Global administrator
to import historical snapshots to the Audit Database, otherwise only the Current Session option is
available in the drop-down list.

**NOTE:** Importing historical snapshots is not available for Microsoft 365.

When auditing file servers, changes to both access and audit permissions are tracked. To exclude
information on access permissions, contact your Auditor Global administrator or Configurator of this
plan.

## Baseline Reports

Most reports in Windows Server—State-in-Time folder allow you to specify baselines. A _baseline_
defines a certain safe level or state. If a server parameter falls below it, it is a considered a
threat or at least merits your special attention. With baselines specified right in report filters,
you can easily identify servers that are different from your corporate policies or best practices.
Risks are marked with red color and are easy to spot in the report.

![windowsserverinventory](/img/versioned_docs/auditor_10.6/auditor/admin/reports/types/stateintime/windowsserverinventory.webp)

You can specify baseline values specific to your organization in one of the following ways:

- As a baseline filter value in the report filters. Baselines in the field should be separated by
  commas.

  While inputting text inline is easy, your baseline values will not be preserved for the next
  report generation. You will have to input them every time you generate a report. This method is
  recommended you plan to subscribe to this report.

# Account Permissions in SQL Server

Details the effective permissions that the specified account has on the SQL Server objects of the
selected type. Use this report to review the permissions granted to users through your SQL Server
objects.

![accountpermissionssqlserver](/img/versioned_docs/auditor_10.6/auditor/admin/reports/types/stateintime/accountpermissionssqlserver.webp)

## Reported data

The report has a summary section with general information on the selected account, and the details
section presented in the table format.

The summary section shows:

- **User account**— name or SID of the account
- **Account type** —possible values:
  - Windows Account
  - Login SQL Authentication
  - DB SQL User with password
- **Job title** —reported for Active Directory users as set in their corresponding attribute. If not
  set, _`<not set>`_ is reported.
- **Total objects count** — total number of objects that this account has access to.

The detailed information under summary includes:

- **Object path** — monitored object path as formatted by Netwrix Auditor in the activity records
  (see '_What_' field in the reports, search results and activity summaries). For example, if
  reporting on the database hosted on selected SQL Server, the path will be as follows:
  _Databases\database_name_.
- **Object type** — monitored object type; for the full list of supported object types, refer to
  [SQL Server](/docs/auditor/10.6/data-sources/databases/sql-server.md) topic.
- **Means granted** —how access permissions were granted to this account, e.g., _Direct permissions_
  or _Server role permissions_.
- **Effective grant** —the effective set of permissions granted to this account on the selected
  object.

## Filters

This report has the following filters:

- **Monitoring plan** — name of the monitoring plan set to collect data from the SQL Server you
  need.
- **Time zone** — time zone where Netwrix Auditor server is located, for example, UTC-08:00. This
  value is filled in automatically.
- **Snapshot date** —select the date of state-in-time snapshot you want to report on. By default,
  the report includes data obtained during the latest data collection session (_Current Session_).
  To report on other snapshots, make sure they are available through import. For details, see
  **Manage historical snapshots** option description in
  [SQL Server](/docs/auditor/10.6/monitoring-plans/data-sources-config.md)
- **Item**— name of the SQL Server instance monitored with selected monitoring plan.
- **Object path** — path to the monitored object, as formatted by Netwrix Auditor in the activity
  records (see '_What_' field in the reports, search results and activity summaries). Wildcard (\*)
  is supported. For example, to report on the database hosted on selected SQL Server, specify the
  path as follows: _Databases\database_name_.
- **Object type**— type of the monitored object that provided data for this report. Possible values:
  _Database_, _Server Instance_.
- **Permissions** —access permissions whose assignment you want to be reported for selected account.
- **Means granted** —how access permissions were granted to this account. You can select _Directly_,
  _Inherited_, or both (default setting).
- **Account type** —possible values: _Windows Account_, _Login SQL Authentication_, _DB SQL User
  with password_.
- **User account**—name or SID of the account whose permission assignments are reported.

## Considerations and limitations

- Reporting for case-sensitive SQL Servers and databases is not supported.
- Permissions for INFORMATION*SCHEMA granted via \_master db* will not be reported.
- The report will not show the RESTORE capability for the database owner.

- The report will not show the ALTER (SERVER_ROLE) capability for the privileged users in SQL Server
  2008 R2 due to that SQL Server version implementation.

- When calculating effective rights and permissions, the following will not be considered:

  - Ownership chaining
  - Cross DB ownership chaining
  - Trustworthy database
  - SQL Server agent fixed database roles

## Related reports

- Clicking a Object permissions link opens the
  [Object Permissions in SQL Server](/docs/auditor/10.6/features/reporting/report-types.md)
  report.
- Clicking a Means granted link opens the
  **[SQL Server Means Granted](/docs/auditor/10.6/features/reporting/report-types.md)**
  report.

## Usage example

Database administrators in the _Corp_ organization need to discover what kind of permissions a
certain user has on the **SQLSrv01\SQLServer2016** instance. This instance is included in the
monitoring plan named _SQL Servers Monitoring_.

To examine the relevant data, they generated the **Account Permissions in SQL Server** report with
the filters set as follows:

- **Monitoring plan:\_**SQL Servers Monitoring\_
- **Snapshot date:\_**Current Session\_
- **Item:\_**SQLSrv01\SQLServer2016\_
- **User account:** _Corp\Ian.Harris_

The report revealed that this user has access permissions for the master database. To discover how
they were granted, click the link in the **Means granted** field.

# SQL Server Databases

This report lists the properties of databases and database snapshots hosted on the selected SQL
Server instance. Use this report for your SQL Server database inventory.

![sqlserverdatabases](/img/versioned_docs/auditor_10.6/auditor/admin/reports/types/stateintime/sqlserverdatabases.webp)

## Reported data

For each database, the following information is reported:

- **Database name**
- **Restrict access** mode— as set in the database properties **>Options>State**. Possible values
  are: _Multi_user_ (for _Multiple_), _Restricted_, _Single_. See
  [this Microsoft article](https://docs.microsoft.com/en-us/sql/relational-databases/databases/database-properties-options-page?view=sql-server-ver15)
  for details.
- **State**— as set in the database properties**>Options>State**. See
  [this Microsoft article](https://docs.microsoft.com/en-us/sql/relational-databases/databases/database-states?view=sql-server-ver15)
  for details
- **Size (MB)**
- **Shrink enabled**— as set in the database properties **>Options>Automatic>Auto Shrink**. See
  [this Microsoft article](https://docs.microsoft.com/en-us/sql/relational-databases/databases/database-properties-options-page?view=sql-server-ver15)
  for details.
- **Encryption status**— as set in the database properties **>Options>State**. See
  [this Microsoft article](https://docs.microsoft.com/en-us/sql/relational-databases/databases/database-properties-options-page?view=sql-server-ver15#this-microsoft-article)
  for details.
- **Last full backup date**— local date and time for the audited SQL Server instance.

In some cases, the backup time will be displayed in server ticks.

- **Data file path**— .MDF file path.
- **Log file path**— .LDF file path.

For each database snapshot, the following information is reported:

- **Database snapshot name**
- **Source database name**
- **Restrict access** mode — as set in the database properties at snapshot creation time.
- **State** — as set in the database properties at snapshot creation time.

## Filters

This report has the following filters:

- **Monitoring plan** — name of the monitoring plan set to collect data from the SQL Server instance
  hosting the required database.
- **Item** — name of the item within your monitoring plan, here — SQL Server instance.
- **Time zone** — time zone where Netwrix Auditor server is located, for example, UTC-08:00. This
  value is filled in automatically.
- **Database name** — database to report on. Default is all databases on selected SQL Server
  instance (_%_).

## Considerations and recommendations

Reporting for case-sensitive SQL Servers and databases is not supported.

## Usage example

Database administrators in the _Corp_ organization need to perform an inventory of the
**SQLSrv01\SQLServer2016** instance. This instance is included in the monitoring plan named _SQL
Servers Monitoring_.

To examine the relevant data, they generated the **SQL Server Databases** report with the default
filters.

# SQL Server Means Granted

This report shows accounts with explicit and inherited permissions on the selected SQL Server object
and how those permissions were granted (directly, through role membership, etc.). Use this report to
investigate how permissions are granted.

Supported object types and attributes are listed in the
[SQL Server](/docs/auditor/10.6/data-sources/databases/sql-server.md) section.

To instruct Netwrix Auditor to collect data needed for this report, make sure that **Collect data
for state-in-time reports** option is selected in the monitoring plan properties.

![sqlservermeansgranted](/img/versioned_docs/auditor_10.6/auditor/admin/reports/types/stateintime/sqlservermeansgranted.webp)

## Reported data

The report has a summary section with general information on the selected SQL Server object, and the
details section presented in the table format.

The summary section shows:

- **User account** — name or SID of the account that has permissions on the selected object.

- **Account type** —possible values:
  - Windows Account
  - Login SQL Authentication
  - DB SQL User with password
- **Job title** —reported for Active Directory users as set in their corresponding attribute. If not
  set, _`<not set>`_ is reported.
- **Object path** —path to the monitored object, as formatted by Netwrix Auditor in the activity
  records (see '_What_' field in the reports, search results and activity summaries). For example,
  when reporting on the database hosted on selected SQL Server, the path will be as follows:
  _Databases\database_name_.
- **Object type** — monitored object type; for the full list of supported object types, refer to
  [SQL Server](/docs/auditor/10.6/data-sources/databases/sql-server.md).

The detailed information under summary includes:

- **Means granted** —how access permissions were granted to this account, e.g., _Direct permissions_
  or _Server role permissions_.
- **Granted to**— the security principal to which the access permissions were granted, e.g.
  _sysadmin_.
- **Type**— the security principal type, e.g. _Server role_.
- **Grant** —the set of permissions granted to this account on the selected object by all means.

Covering rules do not need to be applied, since **Grant** permissions are reported automatically
using these rules.

## Filters

This report has the following filters:

- **Monitoring plan** — name of the monitoring plan set to collect data from the SQL Server you
  need.
- **Time zone** — time zone where Netwrix Auditor server is located, for example, UTC-08:00. This
  value is filled in automatically.
- **Snapshot date** —select the date of state-in-time snapshot you want to report on. By default,
  the report includes data obtained during the latest data collection session (_Current Session_).
  To report on other snapshots, make sure they are available through import. For details, see
  **Manage historical snapshots** option description in SQL Server.
- **Item**—name of the SQL Server instance monitored with selected monitoring plan.
- **Object path** —path to the monitored object, as formatted by Netwrix Auditor in the activity
  records (see '_What_' field in the reports, search results and activity summaries). Wildcard (\*)
  is supported. For example, to report on the database hosted on selected SQL Server, specify the
  path as follows: _Databases\database_name_.
- **User account**—name or SID of the account that has permissions on the selected object. Default
  is _%_ (all accounts).
- **Account type** —possible values: _Windows Account_, _Login SQL Authentication_, _DB SQL User
  with password_.

## Considerations and limitations

- Reporting is not supported for the following objects:
  - Case-sensitive SQL Servers and databases
  - Read-only Filegroups
  - Contained databases.
- Permissions assigned using **With Grant option** are not reported (see
  [this Microsoft article](https://docs.microsoft.com/en-us/sql/t-sql/statements/grant-object-permissions-transact-sql?view=sql-server-ver15)
  on that means).
- When calculating effective rights and permissions, the following will not be considered:

  - Ownership chaining
  - Cross DB ownership chaining
  - Trustworthy database
  - SQL Server agent fixed database roles

## Usage example

When examining the **Object Permissions in SQL Server** report, database administrators in the
_Corp_ organization discovered that the accounts with Contractor job title has access to the
**SQLSrv01\SQLServer2016** instance. To explore how this could happen, they drilled down to the
**SQL Server Means Granted** report for that account by clicking the link in the **Means granted**
field for that account.

![sqlservermeansgranteddetails](/img/versioned_docs/auditor_10.6/auditor/admin/reports/types/stateintime/sqlservermeansgranteddetails.webp)

# Object Permissions in SQL Server

This report shows a detailed list of the effective permissions that accounts have on the selected
object. Use this report to review who has access to your SQL Server objects.

Supported object types and attributes are listed in the
[SQL Server](/docs/auditor/10.6/data-sources/databases/sql-server.md) section.

![objectpermissionssqlserver](/img/versioned_docs/auditor_10.6/auditor/admin/reports/types/stateintime/objectpermissionssqlserver.webp)

## Reported data

The report has a summary section with general information on the selected SQL Server object, and the
details section presented in the table format.

The summary section shows:

- **Object path** — monitored object path as formatted by Netwrix Auditor in the activity records
  (see '_What_' field in the reports, search results and activity summaries). For example, if
  reporting on the database hosted on selected SQL Server, the path will be as follows:
  _Databases\database_name_.
- **Object type** — monitored object type; for the full list of supported object types, refer to
  [SQL Server](/docs/auditor/10.6/data-sources/databases/sql-server.md) topic.
- **Total account count** — total number of accounts that have access to this object.

The detailed information under summary includes:

- **User account** —name or SID of the account that has permissions on the selected object.
- **Account type** —possible values:
  - Windows Account
  - Login SQL Authentication
  - DB SQL User with password
- **Means granted** —how access permissions were granted to this account, e.g., _Direct permissions_
  or _Server role permissions_.
- **Job title** —reported for Active Directory users as set in their corresponding attribute. If not
  set, _`<not set>`_ is reported.
- **Effective grant** —the effective set of permissions granted to this account on the selected
  object.

Covering rules do not need to be applied, since **Effective grant** permissions are reported
automatically using these rules.

## Filters

This report has the following filters:

- **Monitoring plan** — name of the monitoring plan set to collect data from the SQL Server you
  need.
- **Time zone** — time zone where Netwrix Auditor server is located, for example, UTC-08:00. This
  value is filled in automatically.
- **Snapshot date** —select the date of state-in-time snapshot you want to report on. By default,
  the report includes data obtained during the latest data collection session (_Current Session_).
  To report on other snapshots, make sure they are available through import. For details, see
  **Manage historical snapshots** option description in the
  [SQL Server](/docs/auditor/10.6/monitoring-plans/data-sources-config.md)
  topic.
- **Item**—name of the SQL Server instance monitored with selected monitoring plan.
- **Object path** —path to the monitored object, as formatted by Netwrix Auditor in the activity
  records (see '_What_' field in the reports, search results and activity summaries). Wildcard (\*)
  is supported. For example, to report on the database hosted on selected SQL Server, specify the
  path as follows: _Databases\database_name_.
- **Permissions** —access permissions which assignment you want to be reported for the selected
  object.
- **Means granted** —how access permissions were granted to this account. You can select _Directly_,
  _Inherited_, or both (default setting).
- **User account**—name or SID of the account that has permissions on the selected object. Default
  is _%_ (all accounts).
- **Account type** —possible values: _Windows Account_, _Login SQL Authentication_, _DB SQL User
  with password_.
- **Job title (Active Directory)** —reported for Active Directory users as set in their
  corresponding attribute. Default is _%_ (any title).

## Considerations and limitations

- Reporting for case-sensitive SQL Servers and databases is not supported.
- The report will not show the RESTORE capability for the database owner.

- The report will not show the **ALTER (SERVER_ROLE)** capability for the privileged users in SQL
  Server 2008 R2 due to that SQL Server version implementation.

- When calculating effective rights and permissions, the following will not be considered:
  - Ownership chaining
  - Cross DB ownership chaining
  - Trustworthy database
  - SQL Server agent fixed database roles
- Some permissions may not be reported correctly due to the known issues. See Release Notes for
  details.

## Related reports

- Clicking a User account link opens the
  [Account Permissions in SQL Server](/docs/auditor/10.6/features/reporting/report-types.md)
  report.
- Clicking a Means granted link opens
  the[SQL Server Means Granted](/docs/auditor/10.6/features/reporting/report-types.md)
  report.

## Usage example

Database administrators need to discover who currently has access permissions to **FinReports**
database stored on the **SQLSrv01\SQLServer2016** instance. This instance is included in the
monitoring plan named _SQL Servers Monitoring_.

To examine the relevant data, they need to generate **Object Permissions in SQL Server** report with
the filters set as follows:

- **Monitoring plan:** _SQL Servers Monitoring_
- **Snapshot date:** _Current Session_
- **Item:** _SQLSrv01\SQLServer2016_
- **Object path:** _Databases\FinReports_

All other filter values can be left default.

# SQL Server-Level Roles

This report shows the server-level fixed and custom roles for the selected SQL Server instance,
grouped by role name. The details for each role include its name, type, and a list of the effective
role members and member types. Use this report to control role membership and permissions.

To read more about SQL server-level roles, refer to
[this Microsoft article](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/server-level-roles?view=sql-server-ver15).

To instruct Netwrix Auditor to collect data needed for this report, make sure that **Collect data
for state-in-time reports** option is selected in the monitoring plan properties. See Settings for
Data Collection.

![sqlserverlevelroles](/img/versioned_docs/auditor_10.6/auditor/admin/reports/types/stateintime/sqlserverlevelroles.webp)

## Reported data

The report has a summary section with general information on the selected SQL Server object, and the
details section presented in the table format.

The summary section shows:

- **Role name**
- **Role type** — _Fixed server role_ or _Custom role_

The detailed information under summary includes the list of effective members for this role, where:

- **Member** — role member name.
- **Member type** —possible values:
  - Windows Account
  - Login SQL Authentication
  - DB SQL User with password

## Filters

This report has the following filters:

- **Monitoring plan** — name of the monitoring plan set to collect data from the SQL Server you
  need.
- **Time zone** — time zone where Netwrix Auditor server is located, for example, UTC-08:00. This
  value is filled in automatically. time zone where Netwrix Auditor server is located, for example,
  UTC-08:00.
- **Snapshot date** —select the date of state-in-time snapshot you want to report on. By default,
  the report includes data obtained during the latest data collection session (_Current Session_).
  To report on other snapshots, make sure they are available through import. For details, see
  **Manage historical snapshots** option description in SQL Server.
- **Item**— name of the SQL Server instance monitored with selected monitoring plan.
- **Server-level role** —select the role that you want to explore.
- **Role type** — _Fixed server role_ or _Custom role_.
- **Member**— role member name.

## Considerations and limitations

- Reporting for case-sensitive SQL Servers and databases is not supported.

## Related reports

- Clicking a role member (account) link opens the
  [Account Permissions in SQL Server](/docs/auditor/10.6/features/reporting/report-types.md)
  report.

## Usage example

Database administrators in the _Corp_ organization need to discover what fixed server roles a
certain user has on the **SQLSrv01\SQLServer2016** instance. This instance is included in the
monitoring plan named _SQL Servers Monitoring_.

To examine the relevant data, they generated the **SQL Server-Level Roles** report with the filters
set as follows:

- **Monitoring plan:\_**SQL Servers Monitoring\_
- **Snapshot date:\_**Current Session\_
- **Item:\_**SQLSrv01\SQLServer2016\_
- **Server-level role:** %
- **Role type:** Fixed server role
- **Member:\_**Corp\Jim.White\_

# SQL Server State-In-Time Reports

These are reports on the SQL Server state-in-time data, including roles, permissions and other
configuration settings:

- [Account Permissions in SQL Server](/docs/auditor/10.6/features/reporting/report-types.md)
- [Object Permissions in SQL Server](/docs/auditor/10.6/features/reporting/report-types.md)
- [SQL Server Databases](/docs/auditor/10.6/features/reporting/report-types.md)
- [SQL Server Means Granted](/docs/auditor/10.6/features/reporting/report-types.md)
- [SQL Server-Level Roles](/docs/auditor/10.6/features/reporting/report-types.md)

To instruct Netwrix Auditor to collect data needed for these reports, make sure that **Collect data
for state-in-time reports** option is selected in the corresponding monitoring plan properties. See
the [Settings for Data Collection](/docs/auditor/10.6/monitoring-plans/creating-plans.md#settings-for-data-collection)
topic for additional information. By default, data collection will run daily at 4 AM.

# VMware State-In-Time Reports

These are reports on the VMware vCenter state-in-time data, including account permissions and object
permissions:

- [Account Permissions in vCenter](#account-permissions-in-vcenter)
- [Detailed Account Permissions in vCenter](#detailed-account-permissions-in-vcenter)
- [Object Permissions in vCenter](#object-permissions-in-vcenter)

To instruct Netwrix Auditor to collect data needed for these reports, make sure that **Collect data
for state-in-time reports** option is selected in the corresponding monitoring plan properties. See
the
[Settings for Data Collection](/docs/auditor/10.6/monitoring-plans/creating-plans.md#settings-for-data-collection)
topic for more information.

## Account Permissions in vCenter

Shows vCenter objects that user or group has explicit or inherited permissions on (either granted
directly or through group membership). Use this report to see who has permissions to what and
prevent rights elevation.

Supported object types and attributes are listed in the
[VMware](/docs/auditor/10.6/data-sources/infrastructure/vmware.md) topic.

For this report to function properly, you must enable the **Collect data for state-in-time reports**
option for the data source in the monitoring plan settings. See the
[Settings for Data Collection](/docs/auditor/10.6/monitoring-plans/creating-plans.md#settings-for-data-collection)
topic for more information.

### Filters

You can narrow your reporting scope using multiple filters. Review the full list of available
filters and values:

- **Monitoring plan** — name of the monitoring plan set to collect data from the AD domain you need.
- Time zone — is set automatically.
- **Snapshot date** —select the date of state-in-time snapshot you want to report on. By default,
  the report includes data obtained during the latest data collection session (_Current Session_).
  To report on other snapshots, make sure they are available through import. For details, see
  **Manage historical snapshots** option description in
  [VMware](/docs/auditor/10.6/monitoring-plans/data-sources-config.md)
- Item — name of the item within your monitoring plan.
- Inherited — select whether to show inherited permissions or not.
- Role – select the name of the VMware role you want to see in the report.
- User (domain\account) – select a specific user to be displayed in the report.

### Related Reports

- Clicking a Object path link opens the
  [Object Permissions in vCenter](#object-permissions-in-vcenter) report.
- Clicking a Role link opens the detailed report on privileges for the account report.
- Clicking the Defined in link opens the object permissions on vCenter level report.

## Detailed Account Permissions in vCenter

Shows detailed list of privileges that the specified account has on the VMware objects. Use this
report to prevent unnecessary privileges assigned to custom roles.

Supported object types and attributes are listed in the
[VMware](/docs/auditor/10.6/data-sources/infrastructure/vmware.md) topic.

For this report to function properly, you must enable the **Collect data for state-in-time reports**
option for the data source in the monitoring plan settings. See the
[Settings for Data Collection](/docs/auditor/10.6/monitoring-plans/creating-plans.md#settings-for-data-collection)
topic for more information.

### Filters

You can narrow your reporting scope using multiple filters. Review the full list of available
filters and values:

- **Monitoring plan** — name of the monitoring plan set to collect data from the AD domain you need.
- Time zone — is set automatically.
- **Snapshot date** —select the date of state-in-time snapshot you want to report on. By default,
  the report includes data obtained during the latest data collection session (_Current Session_).
  To report on other snapshots, make sure they are available through import. For details, see
  **Manage historical snapshots** option description in
  [VMware](/docs/auditor/10.6/monitoring-plans/data-sources-config.md)
- Item — name of the item within your monitoring plan.
- Role – select the name of the VMware role you want to see in the report.
- Object path — path to the monitored object, as formatted by Netwrix Auditor in the activity
  records.
- User (domain\account) – select a specific user to be displayed in the report.
- Inherited — select whether to show inherited permissions or not.

## Object Permissions in vCenter

Shows accounts with explicit or inherited permissions on a specific object in your vCenter (either
granted directly or through group membership). Use this report to see who has permissions to what
and prevent rights elevation.

Supported object types and attributes are listed in the
[VMware](/docs/auditor/10.6/data-sources/infrastructure/vmware.md) topic.

For this report to function properly, you must enable the **Collect data for state-in-time reports**
option for the data source in the monitoring plan settings. See the
[Settings for Data Collection](/docs/auditor/10.6/monitoring-plans/creating-plans.md#settings-for-data-collection)
topic for more information.

### Filters

You can narrow your reporting scope using multiple filters. Review the full list of available
filters and values:

- **Monitoring plan** — name of the monitoring plan set to collect data from the AD domain you need.
- Time zone — is set automatically.
- **Snapshot date** —select the date of state-in-time snapshot you want to report on. By default,
  the report includes data obtained during the latest data collection session (_Current Session_).
  To report on other snapshots, make sure they are available through import. For details, see
  **Manage historical snapshots** option description in
  [VMware](/docs/auditor/10.6/monitoring-plans/data-sources-config.md)
- Item — name of the item within your monitoring plan.
- Role – select the name of the VMware role you want to see in the report.
- **Object path** —path to the monitored object, as formatted by Netwrix Auditor in the activity
  records .
- User (domain\account) – select a specific user to be displayed in the report.

### Related Reports

- Clicking a User account link opens the
  [Account Permissions in vCenter](#account-permissions-in-vcenter) report.
- Clicking a Role link opens the detailed report on privileges for the account report.
- Clicking the Defined in link opens the object permissions on vCenter level report.

# User Behavior and Blind Spot Analysis Reports

The User Behavior and Blind Spot Analysis report pack contains a set of smart reports that help you
identify vulnerabilities and easily answer questions such as:

- Has there been any abnormal access to sensitive data?
- Is anyone accessing stale data?
- Have there been any unusual spikes in failed activity?
- Who is active outside of business hours and what are they doing?
- Has anyone put harmful files on corporate data storage?
- Are there any files likely to contain credentials, Social Security numbers, PHI or other sensitive
  data?

Analytics reports can be found in the User Behavior and Blind Spot Analysis folder under the
Predefined node.

![userbehaviorblindspotanalysis](/img/versioned_docs/auditor_10.6/auditor/admin/reports/types/userbehaviorblindspotanalysis.webp)

If you are sure that some audit data is missing (e.g., you do not see information on your file
servers in reports and search results), verify that the Audit Database settings are configured and
that data is written to databases that reside on the default SQL Server instance.

By default, Auditor allows generating reports and running interactive searches on data collected in
the last 180 days. If you want to investigate incidents that occurred more than 180 days ago, ask
your Auditor Global administrator to import that data from the Long-Term Archive.

![failedactivitytrend](/img/versioned_docs/auditor_10.6/auditor/admin/reports/types/failedactivitytrend.webp)

Each report has a set of filters which help organize audit data in the most convenient way. See the
[View Reports](/docs/auditor/10.6/features/reporting/report-types.md) topic for additional
information. You can also create a subscription to any report you want to receive on a regular
basis. See the [Subscriptions](/docs/auditor/10.6/features/reporting/subscriptions.md)
topic for additional information.

# Reports with Video

Netwrix Auditor can be configured to capture video of user activity on the monitored computers that
helps analyze and control changes made there. When you click a link, a video player opens and
playback of the recorded user activity starts, showing launched applications, actions, etc.

To view reports with video, navigate to Reports → User Activity.

In the report filters, select a monitoring plan you want to generate a report for. To review data
sources and items included in each plan, navigate to the Monitoring Plans section.

![ReportsWithVideo](/img/versioned_docs/auditor_10.6/auditor/admin/reports/alluseractivityvideo.webp)

Each report has a set of filters which help organize audit data in the most convenient way. See the
[View Reports](/docs/auditor/10.6/features/reporting/report-types.md) topic for additional
information. You can also create a subscription to any report you want to receive on a regular
basis. See the [Subscriptions](/docs/auditor/10.6/features/reporting/subscriptions.md)
topic for additional information.

Follow the steps to play a video:

**Step 1 –** Navigate to **Reports** → **User Activity**. Select any report and click View.

**Step 2 –** Click a link in the **When** column.

To open User Activity report for the selected user or server, you can also click the link in the Who
and Where columns of the All Users Activity report.

# View Reports

To view reports, users need the following:

1. Sufficient access rights in Netwrix Auditor, which are provided through role assignment:

- Users with _Reviewer_ role can generate the reports for their delegated scope only, and view them
  in any Netwrix Auditor client or in a web browser.
- Users with _Global administrator_ or _Global reviewer_ role can also create subscriptions to
  reports.

2. The Browser role on the SSRS Report Server. See the
   [SQL Server Reporting Services](/docs/auditor/10.6/getting-started/requirements.md)
   topic for additional information.

To view a report

You can add any elements (a dashboard, report, alert, risk, etc.) to the Auditor Home screen to
access them instantly. See the
[Navigation](/docs/auditor/10.6/administration/navigation/index.md) and
[Customize Home Screen](/docs/auditor/10.6/administration/navigation/customization.md)
topics for additional information.

1. In Netwrix Auditor Home screen, click
   ![reports_tile](/img/versioned_docs/auditor_10.6/auditor/admin/reports/reports_tile.webp)on the
   left, and in the tree on the left select the report you need.

To speed up the process, you can use the **Search** field, entering the keyword to search by.

![searchreports](/img/versioned_docs/auditor_10.6/auditor/admin/reports/searchreports.webp)

2. Click View button in the right pane.

To learn how to subscribe to a report, see
[Create Subscriptions](/docs/auditor/10.6/features/reporting/subscriptions.md).

## Troubleshooting

If no data is displayed in the report, you may need to do the following:

1. Make sure that the Audit Database settings are configured properly in the monitoring plan, and
   that data is written to databases that reside on the default SQL Server instance. See the
   [Audit Database](/docs/auditor/10.6/administration/settings/database-settings.md) topic for
   additional information.
2. For SSRS-based reports - verify that SSRS (SQL Server Reporting Services) settings are configured
   properly. See the
   [Audit Database](/docs/auditor/10.6/administration/settings/database-settings.md) topic for
   additional information.
3. For state-in-time reports - verify that the monitoring plan that provides data for the report has
   the corresponding option selected. See the
   [Create a New Monitoring Plan](/docs/auditor/10.6/monitoring-plans/creating-plans.md)
   topic for additional information.

## Customize Report with Filters

Report filters allow you to display changes matching certain criteria. For example, you can filter
changes by audited domain or object type. Filtering does not delete changes, but modifies the report
view allowing you to see changes you are interested in. Filters can be found in the upper part of
the Preview Report page.

To apply filters

1. Navigate to Reports and generate a report.
2. Apply required filters to the report and click View Report. For example, you can update report
   timeframe, change _Who_ and _Where_ values, apply sorting, etc.

Wildcards are supported. For example, type _%corp\administrator%_ in the in the Who domain\user
field if you want to view changes made by the corp\administrator user only .

Do not use % in the exclusive filters (e.g., Who (Exclude domain\user)). Otherwise, you will receive
an empty report.

_escape_characters_ are not supported.

The example below applies to the All Changes by Server report and shows the before and after views
of the report. The filters may vary slightly depending on the audited system and report type.

The report without filtering:

![allchangesserver](/img/versioned_docs/auditor_10.6/auditor/admin/reports/allchangesserver.webp)

The report below displays changes for all audited systems made by the CORP\Administrator user on the
ROOTDC2 domain controller for a month sorted by the action type.

![allchangesserverfiltered](/img/versioned_docs/auditor_10.6/auditor/admin/reports/allchangesserverfiltered.webp)

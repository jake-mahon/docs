---
title: entra id inventory reports
sidebar_label: inventory reports
description: Solution guide for entra id inventory reports including implementation steps, configuration, and best practices.
---

# Entra ID Solution

The Entra ID Solution is a comprehensive set of audit jobs and reports that provide the information
regarding Microsoft Entra ID configuration, operational management, and troubleshooting. The jobs
within this group help pinpoint potential areas of administrative and security concerns related to
Microsoft Entra ID users and groups, including syncing with on-premises Active Directory.

Supported Platforms

- Microsoft Entra ID (formerly Azure AD)

Requirements, Permissions, and Ports

See the
[Microsoft Entra ID Tenant Target Requirements](/docs/accessanalyzer/11.6/configuration-guides/directory-services/entra-id.md)
topic for additional information.

Location

The Entra ID Solution requires a special Enterprise Auditor license. It can be installed from the
Instant Job Wizard, see the
[Instant Job Wizard](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/instant-jobs.md)
topic for additional information. Once it has been installed into the Jobs tree, navigate to the
solution: **Jobs** > **Entra ID**.

The .Entra ID Inventory Job Group collects the data. The Entra ID Job Groups run analysis and
generate reports on the collected data.

## Job Groups

![Entra ID Job Group Overview page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/runninginstances/overviewpage.webp)

The job groups in the Entra ID Solution are:

- [1.Groups Job Group](/docs/accessanalyzer/11.6/solutions/entra-id/group-analysis.md)
  – Identifies group conditions and pinpoints potential areas of administrative concern
- [2.Users Job Group](/docs/accessanalyzer/11.6/solutions/entra-id/user-analysis.md)
  – Identifies areas of administrative concern related to Microsoft Entra ID users

# 1-AAD_Scan Job

The **1-AAD_Scan** Job is responsible for collecting data from Microsoft Entra ID. This job requires
no additional customizations before being used, but can be scoped to disable collecting sign-in
activity with the scan.

## Queries for the 1-AAD_Scan Job

The 1-AAD_Scan job uses the AzureADInventory Data Collector for the following query:

![Query Selection page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/entraidinventory/scanqueryselection.webp)

- AAD Inventory – Targets Microsoft Entra tenants to collect inventory data for user group objects
  - _(Optional)_ This query can be modified to specify scan options and to collect custom
    attributes. See the [Configure the 1-AAD_Scan Query](#configure-the-1-aad_scan-query) topic
    for additional information.

### Configure the 1-AAD_Scan Query

The 1-AAD_Scan Job is configured to run with the default settings with the category of Scan Entra
ID. Follow the steps to customize configurations.

**Step 1 –** Navigate to the **.Entra ID Inventory** > **1-AAD_Scan** > **Configure** node and
select **Queries**.

![Query Properties button on Query Selection page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/entraidinventory/scanqueryselectionproperties.webp)

**Step 2 –** In the Query Selection view, click on **Query Properties** to open the Query Properties
window.

![Query Properties window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/entraidinventory/scanqueryproperties.webp)

**Step 3 –** Select the **Data Source** tab, and click **Configure** to open the Entra ID Inventory
DC Wizard.

![Entra ID Inventory DC Wizard Options page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectoryinventory/scandcwizardoptions.webp)

**Step 4 –** On the Options page, select the different Scan Options as needed:

- Collect only updates since the last scan – Enables differential scanning.

  **NOTE:** Enabling the Collect Open Extensions option on the Custom Attributes page overrides
  this function.

- Collect sign-in activity with scan – Required to collect the LastLogonTimestamp attribute of user
  objects. A message will alert users that deselecting this option will disable this function.
- Collect Directory Audit Events – Collect Microsoft Entra ID audit logs

![Entra ID Inventory DC Wizard Custom Attributes page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectoryinventory/scandcwizardcustomattributes.webp)

**Step 5 –** On the Custom Attributes page, click **Add** or **Import** to add or import custom
attributes.

- Select **Collect Open Extensions** to enable the data collector to collect all extension
  attributes in Microsoft Entra ID. Enabling this option will increase scan times.

  **NOTE:** Enabling this option overrides the differential scan setting and will direct the data
  controller to run a full scan every time the job is run.

- See the
  [AzureADInventory Data Collector](/docs/accessanalyzer/11.6/data-collection/entra-id/configuration.md)
  topic for additional information on adding and importing custom attributes.

**Step 6 –** Navigate to the Summary page. Click **Finish** to save changes or click **Cancel** to
exit without saving. Then click **OK** to close the Query Properties window.

The 1-AAD_Scan Job is now ready to run with the customized settings.

## Analysis Tasks for the 1-AAD_Scan Job

Navigate to the **.Entra ID Inventory** > **1-AAD_Scan** > **Configure** node and select
**Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for 1-AAD_Scan Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/entraidinventory/scananalysistasks.webp)

The default analysis tasks are:

- Import functions – Imports effective group membership function into the database
- Bring Users View to Console – Enables the SA_AzureADInventory_UsersView to be accessible under the
  job’s Results node
- Bring Groups View to Console – Enables the SA_AzureADInventory_GroupsView to be accessible under
  the job’s Results node
- Bring Group Members View to Console – Enables the SA_AzureADInventory_GroupMemberssView to be
  accessible under the job’s Results node
- Summarize Domains – Creates interim processing tables in the database for use by downstream
  analysis and report generation
- Summarize Stats – Creates interim processing tables in the database for use by downstream analysis
  and report generation

In addition to the tables and views listed in the
[Standard Reference Tables & Views for the AzureADInventory Data Collector](/docs/accessanalyzer/11.6/data-collection/entra-id/configuration.md)
section, the 1-AAD_Scan Job produces the following preconfigured report.

| Report           | Description                                                        | Default Tags | Report Elements                                                                                                                                                                                                                |
| ---------------- | ------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Entra ID Summary | This report provides a summary of all audited domains and objects. | None         | This report has two elements: - Table – Provides details on general statistics on the Users and groups found with each tenant scanned - Table – Provides details on statistical information for each of these Entra ID objects |

# 2-AAD_Exceptions Job

The 2-AAD_Exceptions Job identifies toxic conditions that exist within Microsoft Entra ID which may
leave environments at risk or add unnecessary administrative overhead.

## Analysis Tasks for the 2-AAD_Exceptions Job

Navigate to the **.Entra ID Inventory** > **2-AAD_Exceptions** > **Configure** node and select
**Analysis**. Analysis tasks with configuration parameters that define security concerns can be
modified.

**CAUTION:** Most of these analysis tasks are preconfigured and should not be modified and not be
deselected. There are a few which are deselected by default, as they are for troubleshooting
purposes.

![Analysis Tasks for 2-AAD_Exceptions Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/entraidinventory/exceptionsanalysistasks.webp)

The default analysis tasks are:

- Create Exception Type Table – Creates a processing table in the database for use by downstream
  analysis and report generation
- Large Groups
  - Identifies groups that exceed the defined threshold for effective group membership
  - Populates processing tables in the database for use by downstream analysis and report
    generation
  - This analysis task has configurable parameters
    - Definition of a larger group can be customized
- Deeply Nested Groups
  - Identifies groups that exceed the defined threshold of deep levels of membership nesting
  - Populates processing tables in the database for use by downstream analysis and report
    generation
  - This analysis task has configurable parameters
    - Definition of a deeply nested group can be customized
- Circular Nesting
  - Identifies groups with circular references in their effective membership
  - Populates processing tables in the database for use by downstream analysis and report
    generation
- Empty Groups
  - Identifies groups with no membership
  - Populates processing tables in the database for use by downstream analysis and report
    generation
- Single Member Groups
  - Identifies groups with a single direct member
  - Populates processing tables in the database for use by downstream analysis and report
    generation
- Stale Users
  - Identifies user accounts that are disabled or exceed the defined threshold of inactivity
  - Populates processing tables in the database for use by downstream analysis and report
    generation
  - This analysis task has configurable parameters
    - Definition of a stale user can be customized
- Stale Membership
  - Identifies groups with a high percentage of effective members that are stale users
  - Populates processing tables in the database for use by downstream analysis and report
    generation
  - This analysis task has configurable parameters
    - Definition of a stale membership can be customized
- Display Exceptions View – Creates the SA_AzureADInventory_ExceptionsView accessible under the
  job’s Results node

### Customize Analysis Parameters for the 2-AAD_Exceptions Job

The default values for parameters that can be customized are:

| Analysis Task        | Customizable Parameter Name | Default Value | Value Indicates                                                       |
| -------------------- | --------------------------- | ------------- | --------------------------------------------------------------------- |
| Large Groups         | @LARGE_THRESHOLD            | 1000          | A group object with 1000 members or more                              |
| Deeply Nested Groups | @NESTING_THRESHOLD          | 10            | A group object nested 10 levels or deeper within another group object |
| Stale Users          | @STALE_THRESHOLD            | 30            | A user object that has been inactive for 30 days or more              |
|                      | @INCLUDE_DISABLED           | True          | A user object that has been disabled                                  |
| Stale Membership     | @STALE_THRESHOLD            | 10            | A group where 10% of its effective members are stale users            |

See the
[Configure the Analysis Tasks for the 2-AAD_Exceptions Job](#configure-the-analysis-tasks-for-the-2-aad_exceptions-job)
section for instructions to modify parameters. See the
[AzureADInventory Exception Types Translated](/docs/accessanalyzer/11.6/data-collection/entra-id/configuration.md#azureadinventory-exception-types-translated)
topic for an explanation of Exception Types.

### Configure the Analysis Tasks for the 2-AAD_Exceptions Job

Customizable parameters enable Enterprise Auditor users to set the values used to classify user and
group objects during this job’s analysis. The parameters can be customized and are listed in a
section at the bottom of the SQL Script Editor. Follow the steps to customize an analysis task’s
parameters.

**CAUTION:** Modifying these parameters affects solutions with .Entra ID Inventory Job Group
dependency.

**Step 1 –** Navigate to the **.Entra ID Inventory** > **2-AAD_Exceptions** > **Configure** node and
select **Analysis**.

![Analysis Configuration option on Analysis Selection page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/entraidinventory/exceptionsanalysisconfiguration.webp)

**Step 2 –** In the Analysis Selection view, select an analysis task and click **Analysis
Configuration**. The SQL Script Editor opens.

**Step 3 –** Click Parameters to open the Parameters section.

![Change Parameter Value in SQL Script Editor](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/entraidinventory/exceptionssqlscripteditor.webp)

**Step 4 –** Double-click in a field in the Value column and enter a custom value.

**CAUTION:** Do not change any parameters where the Value states **Created during execution**.

**Step 5 –** Click **Save and Close** to finalize the customization and close the SQL Script Editor.

Repeat these steps to customize other analysis tasks for this job.

# .Entra ID Inventory Solution

The .Entra ID Inventory Solution is designed to inventory, analyze, and report on Microsoft Entra
ID. It provides essential user and group membership details to the Entra ID Solution. Key
information includes managers, email addresses, and direct memberships. Collected data helps an
organization identify toxic conditions like nested groups, circular nesting, disabled users, and
duplicate groups. The user and group information assists with understanding probable group
ownership, group memberships, largest groups, user status, attribute completion, and synchronization
status between on-premises Active Directory and Microsoft Entra ID.

Supported Platforms

- Microsoft Entra ID (formerly Azure AD)

Requirements, Permissions, and Ports

See the
[Microsoft Entra ID Tenant Target Requirements](/docs/accessanalyzer/11.6/configuration-guides/directory-services/entra-id.md)
topic for additional information.

Location

The .Entra ID Inventory Solution is a core component of all Enterprise Auditor installations. It can
be installed from the Enterprise Auditor Instant Job Wizard. See the
[Instant Job Wizard](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/instant-jobs.md)
topic for additional information. Navigate to the solution by expanding the Jobs tree and selecting
the **.Entra ID Inventory** Job Group. This group has been named in such a way to keep it at the top
of the Jobs tree.

## Jobs

![.Entra ID Inventory overview page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/runninginstances/overviewpage.webp)

The jobs in the .Entra ID Inventory Solution are:

- [1-AAD_Scan Job](/docs/accessanalyzer/11.6/solutions/entra-id/inventory-reports.md)
  – Provides essential Microsoft Entra ID User and Group membership details to several Enterprise
  Auditor built-in solution sets. Key information includes user status, user attributes, and group
  membership.
- [2-AAD_Exceptions Job](/docs/accessanalyzer/11.6/solutions/entra-id/inventory-reports.md)
  – Runs analysis on the collected data and identifies toxic conditions that exist within Microsoft
  Entra ID which may leave your environment at risk or add unnecessary administrative overhead

The data collection is conducted by the AzureADInventory Data Collector. See the
[Standard Reference Tables & Views for the AzureADInventory Data Collector](/docs/accessanalyzer/11.6/data-collection/entra-id/configuration.md)
topic for database table information.

**NOTE:** This solution is required for SharePoint Online reports in the Netwrix Access Information
Center.

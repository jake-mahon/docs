---
title: job groups Administration
sidebar_label: job groups
description: Administration guide for job groups including configuration, management, and best practices for Access Analyzer.
---

# Connection Node

At the job group level, the **Connection** node identifies the Connection Profile assigned for the
job group. All Connection Profiles are created at the global level (**Settings** > **Connection**).

![Job Group Connection Settings](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/monitoredhosts/add/connection.webp)

By default, all job groups are set to inherit the **Use Default Profile** option from the global
level or a parent job group. See the
[Connection](/docs/accessanalyzer/11.6/administration/settings/connections.md)
topic for additional information.

If the Default Setting is not preferred, select the custom type of connection settings desired
below:

- System default

  - For manual or ad hoc job execution, the account logged into the Enterprise Auditor Console is
    applied to the target hosts for authentication
  - For scheduled job execution, the account supplied as the Schedule Service account at the
    **Settings** > **Schedule** node is applied to the target hosts for authentication

- Select one of the following user defined profiles

  - Select a pre-configured Connection Profile from the drop-down menu

Selecting the **Set all the child objects to inherit these settings** option forces inheritance of
this setting to all sub-groups and jobs within the job group. When enabled, this option overrides
any custom settings configured for the child objects.

# History Node

At the job group level, the History node identifies data retention and log retention periods
assigned for the job group.

![Job Group History Settings](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/settings/history.webp)

By default, all job groups are set to inherit **Use Default Setting** option from the global level
(**Settings** > **History**) or a parent job group. See the
[History](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/history.md) topic
for additional information.

**CAUTION:** It is important to understand that some pre-configured jobs require history retention
while others do not support it. See job group and job descriptions for additional information.

If the Default Setting is not preferred, select the custom type of retention settings desired below:

- Data Retention Period

  - Never retain previous job data
  - Retain previous job data for [number] [time period]
  - Always retain previous job data

- Log Retention Period

  - Retain previous job logs for [number] [time period]

Selecting the **Set all the child objects to inherit these settings** option forces inheritance of
this setting to all sub-groups and jobs within the job group. When enabled, this option overrides
any custom settings configured for the child objects.

# Host Lists Assignment

At the job group level, the Host Lists Assignment node identifies target host lists assigned for the
job group.

![Job Group Host Lists Assignment](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/jobs/group/hostlistassignment.webp)

At a top-level job group, there is no host list to be inherited. The **Use Default Settings** option
is grayed-out. However, a sub-job group can inherit host lists from a parent job group. Host lists
are configured through the **Host Management** node. See the
[Host Management](/docs/accessanalyzer/11.6/administration/host-management/management.md)
topic for additional information.

Several pre-defined solutions have default host lists already assigned to the solution, for example
the .Active Directory Inventory Job Group has the Default domain controller assigned at the job
group and inherited to the jobs.

Select the host lists to be targeted by the job group. The **Filter host lists by** feature scopes
the list to match the search string provided. At the bottom of the list is an indicator of how many
hosts lists have been selected out of the total number of hosts lists known to the Enterprise
Auditor Console. If a filter has been applied, there is also an indicator of how many host lists
matched the search string.

Selecting the **Set all the child objects to inherit these settings** option forces inheritance of
this setting to all sub-groups and jobs within the job group. When enabled, this option overrides
any custom settings configured for the child objects.

# Job Groups

Job groups are designed to manage related jobs and can contain sub-job groups to ensure that related
jobs are executed in the correct order. To create a new job group, right-click on the desired
location (Jobs tree or another job group) and select **Create Group**. Then provide a unique,
descriptive name taking into consideration the alphanumeric ordering of the Jobs tree.

![Example of Job Group Structure](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/jobs/group/jobgroupstructure.webp)

Job groups are organized similar to the Jobs tree, with the Settings node at the top, followed by
sub-job groups (job group for collection first, if applicable), then followed by analysis and
reporting jobs. Both are sorted in alphanumeric order. This is necessary because data collection
jobs must run prior to the analysis and reporting jobs that rely on the collected data without
consideration to the job’s name (alphanumeric order).

## Job Group Description Page

The Job Group Description page displays shortcuts, links, and important information on the job group
and the jobs contained within the Job Group. Depending on the type of job group, the description
page will appear different and display information specific to the job group selected.

| ![Job Group Description page for a pre-configured job group](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/jobs/group/descriptionpage.webp) | ![Job Group Description page for a user-created job group](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/jobs/group/descriptionpagenewgroup.webp) |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pre-Configured Job Group                                                                                                                                   | User-Created Job Group                                                                                                                                           |

The two types of job groups in Enterprise Auditor are:

- Pre-configured – The job group description page provides a brief summary of the purpose of the job
  group, the jobs contained within, and special requirements if applicable
- User Created – Job group description of job description only provides generic information and
  options

**NOTE:** Every job group’s description includes options for creating a group, opening the Instant
Job Library, and creating a job.

Pre-configured job group description pages provide users with shortcuts and links to many of the
functions that can be accessed in the Jobs Tree in the Navigation Pane.

![Job Group Description page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/jobs/group/descriptionpage.webp)

The sections of the job group description page are:

- Job Group Settings Shortcuts – These pages can also be accessed through the job group Settings
  Nodes in the Navigation Pane. See the
  [Job Groups Settings Node](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-groups.md)
  topic for additional information.

  - Storage – Configure the job group’s Storage options
  - History – Configure the job group’s History options
  - Connection – Configure the job group’s Connection options
  - Reporting – Configure the job group’s Reporting options
  - Host Lists Assignment – Select the targeted host list in the job group’s Host Lists Assignment

- Help – Opens the [Netwrix Technical Knowledge Center](https://helpcenter.netwrix.com/) in a
  browser to a relevant landing page for the job group
- Run Now – Runs the currently selected job group
- Schedule – Opens the Schedule page to schedule the job group
- Open Folder – Opens the job group’s folder location with supporting files in the Windows Explorer
- Create Group – Creates a job group within the currently selected job group
- Create Job – Creates a job within the currently selected Job
- Add Instant Job – Add an Instant Job using the Instant Job Wizard. See the
  [Instant Job Wizard](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/instant-jobs.md)
  topic for additional information.

![Overview section of Job Group description page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/jobs/group/descriptionpageoverview.webp)

The Overview section provides summary information about the job group. This section includes the
following information:

- Assigned Host List – Hovering over the **Assigned Host List** button shows a tool-tip with
  information on the hosts lists are assigned to the job group

  - Click on the **Assigned Host List** button to go to the Job Group's Host List Assignment node.
    See the
    [Host Lists Assignment](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-groups.md)
    topic for additional information.

- Show Inherited Settings – Click on the **Show Inherited Settings** button to view information on
  the following:

  - Connection Profile
  - Data Retention Period
  - Log Retention Period
  - Reporting Settings
  - Storage Account

- Contents – Shows the job groups and jobs contained within the currently selected job group

**NOTE:** If applicable, the page shows special instructions for which hosts need to be targeted for
proper job group execution.

### Job Settings: Inherited and Directly Applied

Job group settings can be applied directly or inherited. On the job group level, it is considered
that all settings are applied directly.

![Show Inherited Settings on Job Overview page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/jobs/group/showinheritedsettings.webp)

If not, click the **Show inherited settings** button to expand the inherited settings list (they are
highlighted in blue).

The following inherited settings are available:

| Setting               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection profile    | The tooltip shows the account name used in the connection profile. Clicking the button opens the parent Connection settings for the selected job group. See [Connection Node](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-groups.md) for more information. Clicking the three dots menu on the right part of the button opens the Edit menu. The following options are available: - Edit the Profile – Clicking the link opens the Connection settings for the current profile - Use Default Profile – Clicking the link applies the connection profile set as default on a global level to a job. In this case, this setting is hidden under the **Show Inherited Settings** button. - List of profiles – Allows switching between existing connection profiles and apply a desired one to a job |
| Data Retention Period | The tooltip shows the current value for the data retention period (by default, **Never retain previous job data**). Clicking the button opens the parent History settings for the selected job group. See the [History Node](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-groups.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Log Retention Period  | The tooltip shows the current value for log retention period (by default, **Retain previous job log for 7 times**). Clicking the button opens the parent History settings for the selected job group. See the [History Node](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-groups.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Hosts Lists           | The tooltip shows the names of the host lists assigned to this job group. If you have more than three host lists assigned to a job group, the tooltip shows 3 hosts name and the number of other hosts lists assigned (for example, if 5 hosts are assigned it shows `Host1, Host2, Host3 + 2 more`). Clicking the button opens the parent Host Lists setting for the selected job group. See the [Host Lists Assignment](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-groups.md) topic for additional information.                                                                                                                                                                                                                                                                                |
| Reporting Settings    | Clicking the Reporting Settings button opens the parent Reporting settings for the selected job group including publishing options, email settings, and roles. See the [Reporting Node](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-groups.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Storage Profile       | The tooltip shows the current SQL Server instance, database name, user account, and authentication type used for the selected job group. See the [Storage Node](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-groups.md)s topic for additional information. Clicking the three dots menu on the right part of the button opens the Edit menu. The following options are available: - Edit This Profile – Clicking the link opens the Storage settings for the current profile - Use Default Profile – Clicking the link applies the storage profile set as default on a global level to a job. In this case, this setting is hidden under the **Show Inherited Settings** button - List of existing profiles – Allows switching between existing storage profiles and apply a desired one to a job  |

# Reporting Node

At the job group level, the **Reporting** node identifies the report publishing and email
configurations assigned for the job group. By default, all job groups are set to inherit the
reporting settings, the **Use default setting** option, from the global level (**Settings** >
**Reporting**), or a parent job group. See the
[Reporting](/docs/accessanalyzer/11.6/administration/settings/reporting.md)
topic for additional information.

**NOTE:** If the Role Based Access feature is enabled, it also displays a list of all accounts
granted access to the published reports via the Web Console that are generated by any jobs within
the job group.

![Job Group Reporting Settings page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/settings/reporting.webp)

Checking the **Set all the child objects to inherit these settings** option at the bottom of the
page forces inheritance of these settings to all sub-groups and jobs within the job group. When
enabled, this option overrides any custom settings configured for the child objects.

**NOTE:** The **Set all the child objects to inherit these settings** option has no impact on the
inheritance of Report Roles.

## Publish

# Job Groups Settings Node

A job group’s Settings node is where custom configurations can be set and where the host lists are
assigned to a job group.

![Job group settings in the Jobs Tree](/img/versioned_docs/activitymonitor_7.1/config/dellpowerscale/settings.webp)

These settings inherit the global settings down by default unless inheritance is broken at a job
group or a job level.

- [Connection Node](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-groups.md)
  – Use the default Connection Profile or break inheritance to select the Connection Profile needed
  for the assigned host lists for this job group
- [History Node](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-groups.md)
  – Use the default history settings or break inheritance on data retention and log retention
  settings for this job group
- [Host Lists Assignment](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-groups.md)
  – Use the default host list configured on a parent job group or break inheritance on assigned host
  lists for this job group

  **NOTE:** Host List Assignments is not a global setting. The pre-configured solutions may
  contain Host List Assignments configured to use Global Default Host Lists, for example All
  Domain Controllers. See the
  [Default Host Lists](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/hostinventory.md#default-host-lists)
  topic for additional information.

- [Reporting Node](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-groups.md)
  – Use the default report settings or break inheritance on Published Report settings, Email
  settings, and Report role assignment for this job group
- [Storage Node](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-groups.md)
  – Use the default storage profile or break inheritance on where this job group's data is stored

If changes are made, click **Save** to implement the changes. Changes are not implemented unless
they are saved.

**Host List Assignment** and **Connection** are the two settings that should always be confirmed
before executing a job group or job when data collection is included. The assigned host lists
contains the hosts that are targeted by the job’s data collection queries. The assigned Connection
Profile must have the appropriate level of permissions in order for the data collection to be
successful. See the
[Permissions by Data Collector (Matrix)](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/permissionmatrix.md)
topic for information on the recommended permissions needed on the targeted hosts in order to
collect data.

# Storage Node

At the job group level, the Storage node identifies the Storage Profile assigned for the job group.
All Storage Profiles are created at the global level (**Settings** > **Storage**). See the
[Storage](/docs/accessanalyzer/11.6/administration/settings/storage.md)
topic for additional information.

![Job Group Storage Settings](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/settings/storage/storage.webp)

By default, all job groups are set to inherit the **Use Default Profile** option from the global
level or a parent job group. If it is necessary for a job group to send data to a different
database, the Storage Profile must already exist at the global level. Select the **Use This
Profile** radio button and choose the non-default Storage Profile from the drop-down menu.

Selecting the **Set all the child objects to inherit these settings** option forces inheritance of
this setting to all sub-groups and jobs within the job group. When enabled, this option overrides
any custom settings configured for the child objects.

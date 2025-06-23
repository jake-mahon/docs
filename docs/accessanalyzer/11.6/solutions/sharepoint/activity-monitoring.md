---
title: sharepoint activity monitoring
sidebar_label: activity monitoring
description: Solution guide for sharepoint activity monitoring including implementation steps, configuration, and best practices.
---

# Forensics Job Group

This group will highlight deletions, group membership changes, permission changes, and activity
around sensitive data.

![Forensics Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/sharepoint/activity/forensics/forensicsjobstree.webp)

The jobs in the Forensics Job Group are:

- [SP_Deletions Job](/docs/accessanalyzer/11.6/solutions/sharepoint/activity-monitoring.md)
  – Identifies SharePoint deletion events which have occurred over the past 30 days
- [SP_PermissionChanges Job](/docs/accessanalyzer/11.6/solutions/sharepoint/activity-monitoring.md)
  – Identifies permission changes which have been performed on all monitored SharePoint sites over
  the past 30 days
- [SP_SensitiveDataActivity Job](/docs/accessanalyzer/11.6/solutions/sharepoint/activity-monitoring.md)
  – Highlights user activity involving sensitive data and provides details on who is interacting
  with your environments sensitive content

# SP_Deletions Job

This job identifies SharePoint deletion events which have occurred over the past 30 days.

## Analysis Tasks for the SP_Deletions Job

Navigate to the **Jobs** > **SharePoint** > **7.Activity** > **Forensics** > **SP_Deletions** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the SP_Deletions Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/activity/forensics/deletionsanalysis.webp)

The default analysis task is:

- Analyze SPAC Deletion Events – Creates the SA_SPAC_Deletions_Last30Days table accessible under the
  job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_Deletions Job produces
the following pre-configured report:

| Report           | Description                                                                                                                                                                        | Default Tags | Report Elements                                                                                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Deletion Details | This report identifies deletion events for the past 30 days. The detailed report shows all resources that were successfully deleted as well as which users performed those events. | None         | This report is comprised of two elements: - Bar Chart – Displays total number of deletions in the past 30 days - Table – Provides details on deletions in the past 30 days |

# SP_PermissionChanges Job

This job identifies permission changes which have been performed on all monitored SharePoint sites
over the past 30 days.

## Analysis Tasks for the SP_PermissionChanges Job

Navigate to the **Jobs** > **SharePoint** > **7.Activity** > **Forensics** >
**SP_PermissionChanges** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the SP_PermissionChanges Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/activity/forensics/permissionchangesanalysis.webp)

The default analysis tasks are:

- Analyze Permission Changes – Creates the SA_SP_PermissionChanges table accessible under the job’s
  Results node
- Permission Changes Counts – Creates the SA_SP_PermissionChanges_Counts table accessible under the
  job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_PermissionChanges Job
produces the following pre-configured report:

| Report             | Description                                                                                                                                                            | Default Tags | Report Elements                                                                                                                                                 |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permission Changes | This report identifies SharePoint permission changes based on activity events and determines whether or not that permission change is considered a high security risk. | None         | This report is comprised of two elements: - Bar Chart – Displays permission change activity in the past seven days - Table – Provides permission change details |

# SP_SensitiveDataActivity Job

This job highlights user activity involving sensitive data and provides details on who is
interacting with your environments sensitive content.

## Analysis Tasks for the SP_SensitiveDataActivity Job

Navigate to the **Jobs** > **SharePoint** > **7.Activity** > **Forensics** >
**SP_SensitiveDataActivity** > **Configure** node and select **Analysis** to view the analysis
tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the SP_SensitiveDataActivity Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/suspiciousactivity/sensitivedataactivityanalysis.webp)

The default analysis tasks are:

- Sensitive Data Activity – Creates the SA_SP_SensitiveDataActivity table accessible under the job’s
  Results node
- Sensitive Data Activity User Count – Creates an interim processing table in the database for use
  by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the SQL_SensitiveDataActivity Job
produces the following pre-configured report:

| Report                  | Description                                        | Default Tags | Report Elements                                                                                                                                |
| ----------------------- | -------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Sensitive Data Activity | This Report shows user activity on sensitive data. | None         | This report is comprised of two elements: - Bar Chart – Displays sensitive data activity - Table – Provides details on sensitive data activity |

# 7.Activity Job Group

The 7.Activity job group generates summary and detail reports of SharePoint activity on the
specified sites. These reports can be used for identifying file, folder, and user related activity
across your SharePoint environment.

![7.Activity Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The job groups in the 7.Activity Job Group are:

- [Forensics Job Group](/docs/accessanalyzer/11.6/solutions/sharepoint/activity-monitoring.md)
  – Highlights deletions, group membership changes, permission changes, and activity around
  sensitive data
- [Usage Statistics Job Group](/docs/accessanalyzer/11.6/solutions/sharepoint/activity-monitoring.md)–
  Identifies long term trends of activity across your SharePoint environment highlighting most
  active sites and users as well as stale users

# Usage Statistics Job Group

The Usage Statistics job group identifies long term trends of activity across your SharePoint
environment highlighting most active sites and users as well as stale sites.

![Usage Statistics Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/sharepoint/activity/usagestatistics/usagestatisticsjobstree.webp)

The jobs in the Usage Statistics Job Group are:

- [SP_InactiveSites Job](/docs/accessanalyzer/11.6/solutions/sharepoint/activity-monitoring.md)
  – Highlights your environments least active Sites or Site Collections
- [SP_MostActiveSites Job](/docs/accessanalyzer/11.6/solutions/sharepoint/activity-monitoring.md)
  – Identifies the top five most active sites monitored by Enterprise Auditor
- [SP_MostActiveUsers Job](/docs/accessanalyzer/11.6/solutions/sharepoint/activity-monitoring.md)
  – Identifies the most active users from the last 30 days on all monitored SharePoint servers with
  a view of Reads, Updates, Deletes, and Permission changes performed by a user

# SP_InactiveSites Job

This job highlights your environments least active Sites or Site Collections.

## Analysis Tasks for the SP_InactiveSites Job

Navigate to the **Jobs** > **SharePoint** > **7.Activity** > **Usage Statistics** >
**SP_InactiveSites** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the SP_InactiveSites Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/sharepoint/activity/usagestatistics/inactivesitesanalysis.webp)

The default analysis task is:

- Inactive Sites Last 30 Days – Creates the SA_SP_InactiveSites_Last30Days table accessible under
  the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_InactiveSites Job
produces the following pre-configured report:

| Report         | Description                                                                                                                                                                                                                                 | Default Tags | Report Elements                                                                                                                             |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Inactive Sites | This report identifies Sites that have not had activity for at least 30 days. [View], [Delete], [Update], [Delete] fields reflect the number of unique operations of each type that was performed on the inactive site for this time frame. | None         | This report is comprised of two elements: - Bar Chart – Displays information on inactive sites - Table – Provides details on inactive sites |

# SP_MostActiveSites Job

This job identifies the top five most active monitored sites.

## Analysis Tasks for the SP_MostActiveSites Job

Navigate to the **Jobs** > **SharePoint** > **7.Activity** > **Usage Statistics** >
**SP_MostActiveSites** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the SP_MostActiveSites Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/sharepoint/activity/usagestatistics/mostactivesitesanalysis.webp)

The default analysis task is:

- Most Active Sites Last 30 Days – Creates the SA_SPAC_MostActiveSites_Last30Days table accessible
  under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_MostActiveSites Job
produces the following pre-configured report:

| Report                           | Description                                                                                                                                                                                                                                                                                                                                                                                                   | Default Tags | Report Elements                                                                                                                                                                 |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Most Active Sites – Last 30 Days | This report identifies the top five most active sites for the past 30 days. [Reads], [Updates], [Deletes], [Permission Changes] fields reflect the number of unique operations of each type that was performed on the site for this time frame. Unique Resources Accessed, number of active user performing operations on the site, as well as whether or not the active site contains sensitive information. | None         | This report is comprised of two elements: - Bar Chart – Displays information on most active sites by event count - Table – Provides details on most active sites by event count |

# SP_MostActiveUsers Job

This job identifies the most active users from the last 30 days on all monitored SharePoint servers
with a view of Reads, Updates, Deletes, and Permission changes performed by a user.

## Analysis Tasks for the SP_MostActiveUsers Job

Navigate to the **Jobs** > **SharePoint** > **7.Activity** > **Usage Statistics** >
**SP_MostActiveUsers** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the SP_MostActiveUsers Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/usagestatistics/mostactiveusersanalysis.webp)

The default analysis task is:

- Most Active Users Last 30 Days – SA_SPAC_MostActiveUsers_Last30Days table accessible under the
  job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL_MostActiveUsers Job
produces the following pre-configured report:

| Report                           | Description                                                                                                                                                                                                                                                                                                    | Default Tags | Report Elements                                                                                                                                                         |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Most Active Users – Last 30 Days | This report identifies the top users for the past 30 days. [View], [Delete], [Update], [Delete] fields reflect the number of unique operations of each type that was performed by the user for this time frame. Unique Resources are the number of distinct resources that have had activity during that time. | None         | This report is comprised of two elements: - Bar Chart – Displays information on top users by operation count - Table – Provides details on top users by operation count |

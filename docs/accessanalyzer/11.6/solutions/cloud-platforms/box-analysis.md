# Box_Deletions Job

The Box_Deletions Job is comprised of analysis and reports, which use the data collected by the
0.Collection Job Group to identify file and folder deletions that have occurred over the past 30
days.

## Analysis Tasks for the Box_Deletions Job

Navigate to **Box** > **1.Activity** > **Forensics** > **Box_Deletions** > **Configure** node and
select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Box_Deletions Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/activity/forensics/deletionsanalysis.webp)

The following analysis tasks are selected by default:

- Deletion Details – Creates the Box_Deletion_Details table accessible under the job’s Results node
- Deletions (Last 30 Days) – Creates an interim processing table in the database for use by
  downstream analysis and report generation

In addition to the tables created by the analysis tasks, the Box_Deletions Job produces the
following pre-configured report:

| Report                                      | Description                                                                                                                                                                        | Default Tags | Report Elements                                                                                                                     |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| File and Folder Deletions (Deletion Events) | This report identifies deletion events for the past 30 days. The detailed report shows all resources that were successfully deleted as well as which users performed those events. | None         | This report is comprised of two elements: - Line Chart – Displays last 30 days of deletions - Table – Provides details on deletions |

# Box_Downloads Job

The Box_Downloads Job provides details on file and folder deletions that have occurred over the past
30 days.

## Analysis Tasks for the Box_Downloads Job

Navigate to **Box** > **1.Activity** > **Forensics** > **Box_Downloads** > **Configure** node and
select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Box_Downloads Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/activity/forensics/downloadsanalysis.webp)

The following analysis tasks are selected by default:

- Download Details – Creates the Box_Download_Details table accessible under the job’s Results node
- Downloads Summary – Creates an interim processing table in the database for use by downstream
  analysis and report generation

In addition to the tables created by the analysis tasks, the Box_Downloads Job produces the
following pre-configured report:

| Report                              | Description                                                                                                                                                                           | Default Tags | Report Elements                                                                                                                       |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| Download Activity (Download Events) | This report identifies download events for the past 30 days. The detailed report shows all resources that were successfully downloaded as well as which users performed those events. | None         | This report is comprised of three elements: - Line Chart – Displays last 30 days of downloads - Table – Provides details on downloads |

# Box_ExternalUserActivity Job

The Box_ExternalUserActivity Job identifies and analyzes activity events performed by external users
over the last 30 days. External Users are collaborators from outside your organization. They can be
granted the same collaborator access and sharing rights as Managed Users, but there is limited
control over the content they own and their security settings.

## Analysis for the Box_ExternalUserActivity Job

Navigate to **Box** > **1.Activity** > **Forensics** > **Box_ExternalUserActivity** > **Configure**
node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis for the Box_ExternalUserActivity Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/activity/forensics/externaluseractivityanalysis.webp)

The following analysis tasks are selected by default:

- External User Activity Details – Creates the Box_ExternalUserActivity_Details table accessible
  under the job’s Results node
- External User Summary – Creates an interim processing table in the database for use by downstream
  analysis and report generation

In addition to the tables created by the analysis tasks, the Box_ExternalUserActivity Job produces
the following pre-configured report:

| Report                    | Description                                                                                                                                       | Default Tags | Report Elements                                                                                                                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Most Active External User | This report identifies highest resource activity by external users. The bar chart and summary table outline the top 5 most active external users. | None         | This report is comprised of three elements: - Bar Chart – Displays top events by top external users - Table – Provides summary of events by top external user - Table – Provides details on external users |

# Box_ExternalUserCollaborations Job

The Box_ExternalUserCollaborations Job External Users are collaborators from outside your
organization. They can be granted the same collaborator access and sharing rights as Managed Users,
but there is limited control over the content they own and their security settings.

## Analysis Tasks for the Box_ExternalUserCollaborations Job

Navigate to **Box** > **1.Activity** > **Forensics** > **Box_ExternalUserCollaborations** >
**Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Box_ExternalUserCollaborations Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/activity/forensics/externalusercollaborationsanalysis.webp)

The following analysis tasks are selected by default:

- External User Collaboration Details – Creates the Box_ExternalUserCollaboration_Details table
  accessible under the job’s Results node
- External User Collaboration (Last 30 Days) – Creates an interim processing table in the database
  for use by downstream analysis and report generation

In addition to the tables created by the analysis tasks, the Box_ExternalUserCollaborations Job
produces the following pre-configured report:

| Report                       | Description                                                                                                            | Default Tags | Report Elements                                                                                                                                                           |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| External User Collaborations | This report identifies high-risk collaborations, highlighting most active collaborations by invites of external users. | None         | This report is comprised of two elements: - Line Chart – Displays last 30 days of external user collaborations - Table – Provides details on external user collaborations |

# Box_PermissionChanges Job

The Box_PermissionChannges Job provides details on permission changes that have occurred over the
past 30 days.

## Analysis Tasks for the Box_PermissionChanges Job

Navigate to **Box** > **1.Activity** > **Forensics** > **Box_PermissionChanges** > **Configure**
node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Box_PermissionChanges Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/activity/forensics/permissionchangesanalysis.webp)

The following analysis tasks are selected by default:

- Permission Change Details – Creates the Box_PermissionChange_Details table accessible under the
  job’s Results node
- Permission Changes (Last 30 Days) – Creates an interim processing table in the database for use by
  downstream analysis and report generation

In addition to the tables created by the analysis tasks, the Box_PermissionChanges Job produces the
following pre-configured report:

| Report             | Description                                                                                                                                  | Default Tags | Report Elements                                                                                                                                       |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permission Changes | This report identifies all resources where successful permission changes have occurred. The line chart shows data for the past 30 days only. | None         | This report is comprised of two elements: - Line Chart – Displays last 30 days of permission changes - Table – Provides details on permission changes |

# Box_Sharing Job

The Box_Sharing Job provides details on sharing activity that has occurred over the past 30 days.

## Analysis Tasks for the Box_Sharing Job

Navigate to **Box** > **1.Activity** > **Forensics** > **Box_Sharing** > **Configure** node and
select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Box_Sharing Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/activity/forensics/sharinganalysis.webp)

The following analysis tasks are selected by default:

- Box Sharing – Creates the Box_Sharing_Details table accessible under the job’s Results node
- Sharing Summary – Creates an interim processing table in the database for use by downstream
  analysis and report generation

In addition to the tables created by the analysis tasks, the Box_Sharing Job produces the following
pre-configured report:

| Report                   | Description                                                                                                                                                                    | Default Tags | Report Elements                                                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sharing Activity Summary | This report identifies resource sharing within the target Box environments. The line graph will highlight time periods of the highest rate of sharing within the past 30 days. | None         | This report is comprised of two elements: - Line Chart – Displays last 30 days of sharing activity - Table – Provides details on sharing activity |

# Forensics Job Group

The Forensics Job Group highlights deletions, file downloads, permissions changes, external user
activity, collaboration activity and high-risk collaborations within the targeted Box environment.
It is dependent on data collected by the 0.Collection Job Group, also housed in the Box Job Group.
The jobs that comprise the 1.Activity Job Group process analysis tasks and generate a report.

![Forensics Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The Forensics Job Group is comprised of:

- [Box_Deletions Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Provides details on file and folder deletions that have occurred over the past 30 days
- [Box_Downloads Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Provides details on file and folder deletions that have occurred over the past 30 days
- [Box_ExternalUserActivity Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Identifies and analyzes external user activity which has occurred over the past 30 days
- [Box_ExternalUserCollaborations Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Identifies collaboration invites sent to external users. These collaborations should be reviewed
  to ensure sensitive data is not being shared outside of your organization.
- [Box_PermissionChanges Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Provides details on permission changes that have occurred over the past 30 days
- [Box_Sharing Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Provides details on sharing activity that has occurred over the past 30 days

# 1.Activity Job Group

The **Box** > **1.Activity** Job Group identifies long term trends of activity providing insight
into user activity, usage statistics, and suspicious behavior identifies long-term trends of
activity providing insight into user activity, usage statistics, and suspicious behavior.

![1.Activity Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The 1.Activity Job Group is comprised of:

- [Forensics Job Group](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Provides details on the types of operations occurring within audited Box enterprises, including
  deletions, file downloads, permission changes, and more
- [Suspicious Activity Job Group](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Identifies areas and times of abnormal activity by analyzing typical activity patterns and
  identifying outliers based on factors such as amount of activity or time of day
- [Usage Statistics Job Group](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Identifies long-term trends of activity and usage statistics across your Box environment,
  highlighting conditions such as most active or stale folders

# Box_FailedLogins Job

The Box_FailedLogins Job identifies failed logon events that have occurred over the last 30 days. A
failed logon can be an indication of security issues such as an attempt to access unauthorized
content, or operational issues such as a misconfigured service account.

## Analysis Tasks for the Box_FailedLogins Job

Navigate to **Box** > **1.Activity** > **Suspicious Activity** > **Box_FailedLogins** >
**Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Box_FailedLogins Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/activity/suspiciousactivity/failedloginsanalysis.webp)

The following analysis tasks are selected by default:

- Failed Logins – Creates the Box_FailedLogin_Details table accessible under the job’s Results node
- Failed Login User Summary – Creates an interim processing table in the database for use by
  downstream analysis and report generation
- Failed Login Summary – Creates an interim processing table in the database for use by downstream
  analysis and report generation

In addition to the tables created by the analysis tasks, the Box_FailedLogins Job produces the
following pre-configured report:

| Report        | Description                                                                                                     | Default Tags | Report Elements                                                                                                                                                            |
| ------------- | --------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Failed Logins | This report highlights the failed login activity occurring in the target Box environment over the last 30 days. | None         | This report is comprised of two elements: - Line Chart – Displays last 30 days summary of failed logins - Table – Provides details on last 30 days of failed login details |

# Box_FirstTimeFolderAccess Job

The Box_FirstTimeFolderAccess Job identifies the first time a user performs any activity on a folder
or a file over the past 30 days.

## Analysis Tasks for the Box_FirstTimeFolderAccess Job

View the analysis tasks by navigating to the **Box** > **1.Activity** > **Suspicious Activity** >
**Box_FirstTimeFolderAccess** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Box_FirstTimeFolderAccess Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/activity/suspiciousactivity/firsttimefolderaccessanalysis.webp)

The following analysis tasks are selected by default:

- First Time Folder Access – Creates the Box_FirstTimeFolderAccess_Details table accessible under
  the job’s Results node
- First Time Folder Access Last 30 Days – Creates an interim processing table in the database for
  use by downstream analysis and report generation

In addition to the tables created by the analysis tasks, the Box_FirstTimeFolderAccess Job produces
the following pre-configured report:

| Report                   | Description                                                           | Default Tags | Report Elements                                                                                                                                                                                                                           |
| ------------------------ | --------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| First Time Folder Access | This report highlights details for first time folder access per user. | None         | This report is comprised of three elements: - Bar Chart – Displays last 30 days of first time folder access - Table – Provides summary of last 30 days of first time folder access - Table – Provides details on first time folder access |

# Box_UnusualDownloadActivity Job

The Box_UnusualDownloadActivity Job highlights unusual download activity for a user on a specific
day by analyzing the download activity for a given user and looking for outliers. Unusual download
activity could indicate a compromised account or a malicious insider.

## Analysis Task for the Box_UnusualDownloadActivity Job

Navigate to **Box** > **1.Activity** > **Suspicious Activity** > **Box_UnusualDownloadActivity** >
**Configure** node and select **Analysis** to view analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Task for the Box_UnusualDownloadActivity Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/activity/suspiciousactivity/unusualdownloadactivityanalysis.webp)

The following analysis task is selected by default:

- Unusual Download Activity – Creates the Box_UnusualDownload_Details table accessible under the
  job’s Results node

In addition to the tables created by the analysis tasks, the Box_UnusualDownloadActivity Job
produces the following pre-configured report:

| Report                    | Description                                                                                                                                                                | Default Tags | Report Elements                                                                                                                                                      |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unusual Download Activity | This report provides insight into download activity that deviates from the normal range of expected downloads.  This is determined by using historical data for each file. | None         | This report is comprised of two elements: - Bar Chart – Displays top 5 most recent unusual download activity - Table – Provides details on unusual download activity |

# Box_UnusualUserActivity Job

The Box_UnusualUserActivity Job highlights unusual download activity for a user on a specific day by
analyzing the download activity for a given user and looking for outliers. Unusual download activity
could indicate a compromised account or a malicious insider.

## Analysis Tasks for the Box_UnusualUserActivity Job

Navigate to **Box** > **1.Activity** > **Suspicious Activity** > **Box_UnusualUserActivity** >
**Configure** node and select **Analysis** to view analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Box_UnusualUserActivity Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/activity/suspiciousactivity/unusualuseractivityanalysis.webp)

The following analysis task is selected by default:

- Unusual User Activity – Creates the Box_UnusualUserActivity table accessible under the job’s
  Results node

In addition to the tables created by the analysis tasks, the Box_Content Job produces the following
pre-configured report:

| Report                | Description                                                                                                                                                           | Default Tags | Report Elements                                                                                                                                              |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unusual User Activity | This report provides insight into user activity that deviates from the normal range of expected activity.  This is determined by using historical data for each user. | None         | This report is comprised of two elements: - Bar Chart – Displays top 5 most recent unusual user activity - Table – Provides details on unusual user activity |

# Box_WeekendActivity Job

The Box_WeekendActivity Job highlights unusual download activity for a user on a specific day by
analyzing the download activity for a given user and looking for outliers. Unusual download activity
could indicate a compromised account or a malicious insider.

## Analysis Tasks for the Box_WeekendActivity Job

Navigate to **Box** > **1.Activity** > **Suspicious Activity** > **Box_WeekendActivity** >
**Configure** node and select **Analysis** to view analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Box_WeekendActivity Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/activity/suspiciousactivity/weekendactivityanalysis.webp)

The following analysis tasks are selected by default:

- Weekend Activity – Creates the Box_WeekendActivity_Details table accessible under the job’s
  Results node
- Weekend Activity Summary – Creates an interim processing table in the database for use by
  downstream analysis and report generation

In addition to the tables created by the analysis tasks, the Box_WeekendActivity Job produces the
following pre-configured report:

| Report           | Description                                                                                                    | Default Tags | Report Elements                                                                                                                                                                                                                       |
| ---------------- | -------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Weekend Activity | This report highlights the activity occurring on weekends in the target Box environment over the last 30 days. | None         | This report is comprised of three elements: - Bar Chart – Displays last 30 days of weekend activity for top 5 users - Table – Provides summary top 30 days of weekend activity - Table – Provides details on weekend Activity Details |

# Suspicious Activity Job Group

The Suspicious Activity Job Group identifies areas and times of abnormal activity by analyzing
typical activity patterns and identifying outliers based on factors such as amount of activity or
time of day.

![Suspicious Activity Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The Suspicious Activity Job Group is comprised of:

- [Box_FailedLogins Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Identifies failed logon events that have occurred over the last 30 days
- [Box_FirstTimeFolderAccess Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Identifies the first time a user performs any activity on a folder or a file over the past 30
  days
- [Box_UnusualDownloadActivity Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Highlights unusual download activity for a user on a specific day by analyzing the download
  activity for a given user and looking for outliers
- [Box_UnusualUserActivity Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Highlights unusual activity for a user on a specific day by analyzing the activity for a given
  user and looking for outliers
- [Box_WeekendActivity Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Identifies Box activity events which have occurred on weekends over the last 30 days

# Box_Folders_MostActive Job

The Box_Folders_MostActive Job identifies long-term trends of activity and usage statistics across
your Box environment, highlighting conditions such as most active or stale folders.

## Analysis Tasks for the Box_Folders_MostActive Job

Navigate to **Box** > **1.Activity** > **Usage Statistics** > **Box_Folders_MostActive** >
**Configure** node and select **Analysis** to view analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Box_Folders_MostActive Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/activity/usagestatistics/foldersmostactiveanalysis.webp)

The following analysis task is selected by default:

- Most Active Folders – Creates the Box_Folders_MostActive table accessible under the job’s Results
  node

In addition to the tables created by the analysis tasks, the Box_Folders_MostActive Job produces the
following pre-configured report:

| Report              | Description                                                                                       | Default Tags | Report Elements                                                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Most Active Folders | This report highlights the most active folder in the target Box environment over the last 30 days | None         | This report is comprised of two elements: - Bar Chart – Displays last 30 days of most active folders - Table – Provides summary of most active folders |

# Box_Folders_Stale Job

The Box_Folders_Stale Job identifies the last time activity occurred for each folder in the Box
environment, highlighting stale folders which have not had activity in the last 30 days. These
folders can be subject to cleanup or consolidation.

## Analysis Tasks for the Box_Folders_Stale Job

Navigate to **Box** > **1.Activity** > **Usage Statistics** > **Box_Folders_Stale** > **Configure**
node and select **Analysis** to view analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Box_Folders_Stale Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/activity/usagestatistics/foldersstaleanalysis.webp)

The following analysis tasks are selected by default:

- Stale Folder Details – Creates the Box_Folders_Stale table accessible under the job’s Results node
- No Activity – Creates the Box_Folders_NoActivity table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the Box_Folders_Stale Job produces the
following pre-configured report:

| Report        | Description                                                                                | Default Tags | Report Elements                                                                                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stale Folders | This report highlights stale resources in the target Box environment over the last 30 days | None         | This report is comprised of three elements: - Bar Chart – Displays top 5 stale folders - Table – Provides summary of folders with no activity - Table – Provides details on stale folders |

# Box_Users_MostActive Job

The Box_Users_MostActive Job analyzes user activity to highlight the most active and potentially
stale users within the environment based on the last 30 days of activity events.

## Analysis Tasks for the Box_Users_MostActive Job

Navigate to **Box** > **1.Activity** > **Usage Statistics** > **Box_Users_MostActive** >
**Configure** node and select **Analysis** to view analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Box_Users_MostActive Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/activity/usagestatistics/usersmostactiveanalysis.webp)

The default analysis task is:

- Most Active Users – Creates the Box_Users_MostActive table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the Box_Users_MostActive Job produces the
following pre-configured report:

| Report            | Description                                                                                                                                                                | Default Tags | Report Elements                                                                                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Most Active Users | This report highlights the most active users in the target Box environment over the last 30 days. It also lists stale users that have had no activity in the last 30 days. | None         | This report is comprised of three elements: - Bar Chart – Displays last 30 days of the most active users - Table – Provides summary of last 30 days of the most active users |

# Usage Statistics Job Group

The Usage Statistics Job Group identifies long term trends of activity and usage statistics across
your Box environment, highlighting conditions such as most active or stale folders.

![Usage Statistics Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The Usage Statistics Job Group is comprised of:

- [Box_Folders_MostActive Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Identifies long-term trends of activity and usage statistics across your Box environment,
  highlighting conditions such as most active or stale folders
- [Box_Folders_Stale Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Identifies long-term trends of activity and usage statistics across your Box environment,
  highlighting conditions such as most active or stale folders
- [Box_Users_MostActive Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Identifies long-term trends of activity and usage statistics across your Box environment,
  highlighting conditions such as most active or stale folders

# Box_Access Job

The Box_Access Job analyzes access granted to users and groups in an organization's Box environment
in order to report on effective access rights, file-level permissions, and inactive access rights
that can be revoked.

## Analysis Tasks for the Box_Access Job

Navigate to **Box** > **Box_Access** > **Configure** node and select **Analysis** to view analysis
tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Box_Access Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/accessanalysis.webp)

The following analysis tasks are selected by default:

- Calculate Access Details – Creates the Box_Access_Details table accessible under the job’s Results
  node
- Summarize Access by User – Creates an interim processing table in the database for use by
  downstream analysis and report generation
- Summarize Access by Group – Creates an interim processing table in the database for use by
  downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the Box_Access Job produces the
following pre-configured reports.

| Report                             | Description                                                                               | Default Tags | Report Elements                                                                                                                                                                               |
| ---------------------------------- | ----------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group Access (Box Access Overview) | This report highlights groups with access to Box resources, and summarizes them by group. | None         | This report is comprised of three elements: - Bar Chart – Displays top groups by access granted - Table – Provides details on top groups by access - Table – Provides details on group access |
| User Access                        | This report highlights users with access to Box resources, and summarizes them by group.  | None         | This report is comprised of three elements: - T-Chart – Displays top users by direct access - Table – Provides summary of user access - Table – Provides details on user access               |

# Box_GroupMembership Job

The Box_GroupMembership Job provides visibility into group membership within an organization's Box
environment.

## Analysis Tasks for the Box_GroupMembership Job

Navigate to **Box** > **Box_GroupMembership** > **Configure** node and select **Analysis** to view
analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the Box_GroupMembership Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/groupmembershipanalysis.webp)

The following analysis task is selected by default:

- Summarize Group Membership – Creates the Box_GroupMembership_Details table accessible under the
  job’s Results node

In addition to the tables created by the analysis tasks, the Box_Content Job produces the following
pre-configured report.

| Report                                  | Description                                                                                                | Default Tags | Report Elements                                                                                                                                                                             |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group Membership (Box Group Membership) | This report summarizes Box group membership and lists all group membership across the audited environment. | None         | This report is comprised of three elements: - Bar Chart – Displays top groups by member count - Table – Provides summary of group membership - Table – Provides details on group membership |

# 1-Box_Access Scans Job

The 1-Box_Access Scans Job collects the data which will be further analyzed in order to provide
details on Box access rights, policies, configurations, and content.

## Queries for the 1-Box_Access Scans Job

The Scan Query uses the Box Data Collector to target all Box hosts and has been preconfigured to use
the Scan Box Permissions Category. If this query is not configured but has the access token, a full
scan of all folders at full depth is performed. Optionally, configure the query to limit the depth
of the scan.

![Queries for the 1-Box_Access Scans Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/collection/accessqueries.webp)

The 1-Box_Access Scans Job has the following queries:

- Scan Query – Collects access data which will be further analyzed in order to provide details on
  Box access rights, policies, configurations, and content

Prior to the first execution, it is necessary to authenticate to the targeted Box environment. This
is done on the Authenticate page of the Scan query. Additionally, the following default
configurations are commonly customized:

- Exclusions page:

  - Not scoped

- Additional Scoping page:

  - Not scoped

See the [Configure the 1-Box_Access Scans Job](#configure-the-1-box_access-scans-job) section for
instructions.

### Configure the 1-Box_Access Scans Job

The 1-Box_Access Scans Job contains the Scan Query. Follow the steps to configure the query.

**Step 1 –** Navigate to the **Box** > **0.Collection** > **1-Box_Access Scans** > **Configure**
node and select **Queries**.

**Step 1 –** In the Query Selection view, select the Scan Query and click **Query Properties**. The
Query Properties window opens.

**Step 2 –** Select the **Data Source** tab, and click **Configure**. The Box Data Collector Wizard
opens.

![Box Data Collector Wizard Exclusions page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/collection/accessexclusions.webp)

**Step 3 –** On the Exclusions Page:

- Add folders to be excluded
- Add folders to be included (scope scan to only these folders)

![Box Data Collector Wizard Additional Scoping page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/collection/accessadditionalscoping.webp)

**Step 4 –** On the Additional Scoping page:

- Optionally, select this option to limit the depth of the scan across the targeted Box account

![Box Data Collector Wizard Scope by User page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/collection/accessuserscope.webp)

**Step 5 –** On the Scope By User Page:

- Optionally, limit the scope of the scan to specified users by providing a CSV file

![Box Data Collector Wizard Authenticate page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/collection/accessauthenticate.webp)

**Step 6 –** The Authenticate page is where the connection to the target Box environment is
configured. Click **Authorize** to launch the BoxLogin window and generate an authorization code.
This code allows Enterprise Auditor to report on the Box Enterprise.

**NOTE:** Authentication to the target Box environment only needs to be completed once, prior to the
first scan and only in one of the scan jobs.

**Step 7 –** Navigate to the Summary page, click **Finish** to save any setting modifications or
click **Cancel** if no changes were made. Then click **OK** to close the Query Properties window.

The 1-Box_Access Scans Job will execute according to the connection settings configuration.

# 1-Box_Activity Scans Job

The 1-Box_Activity Scans Job collects the data which will be further analyzed in order to provide
visibility into user activity events within Box.

## Queries for the 1-Box_Activity Scans Job

The Scan Query uses the Box Data Collector to target all Box hosts and has been preconfigured to use
the Scan Box Permissions Category.

![Queries for the 1-Box_Activity Scans Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/collection/activityqueries.webp)

The 1-Box_Activity Scans Job has the following queries:

- Activity Scan – Collects activity data which will be further analyzed in order to provide
  visibility into user activity events within Box.

Prior to the first execution, it is necessary to authenticate to the targeted Box environment if
this has not already been done when configuring the 1-Box_Access Scans Job. This is done on the
Authenticate page of the Activity Scan query. Additionally, the following default configurations are
commonly customized:

- Exclusions page:

  - Not scoped

- Additional Scoping page:

  - Not scoped

See the [Configure the 1-Box_Activity Scans Job](#configure-the-1-box_activity-scans-job) section
for instructions.

### Configure the 1-Box_Activity Scans Job

The 1-Box_Activity Scans Job contains the Activity Scan Query. Follow the steps to configure the
query.

**Step 1 –** Navigate to the **Box** > **0.Collection** > **1-Box_Activity Scans** > **Configure**
node and select **Queries**.

**Step 2 –** In the Query Selection view, select the Scan Query and click **Query Properties**. The
Query Properties window displays.

**Step 3 –** Select the Data Source tab, and click **Configure**. The Box Data Collector Wizard
opens.

![Box Data Collector Wizard Exclusions page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/collection/activityexclusions.webp)

**Step 4 –** On the Exclusions page:

- Add folders to be excluded
- Add folders to be included (scope scan to only these folders)

![Box Data Collector Wizard Additional Scoping page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/collection/activityadditionalscoping.webp)

**Step 5 –** On the Additional Scoping page:

- Optionally, select this option to limit the depth of the scan across the targeted Box account

![Box Data Collector Wizard Scope by User page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/collection/activityuserscope.webp)

**Step 6 –** On the Scope By User Page:

- Optionally, limit the scope of the scan to specified users by providing a CSV file

![Box Data Collector Wizard Activity Timespan Scope page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/collection/activitytimespanscope.webp)

**Step 7 –** On the Activity Timespan Scope page:

- Collect activity data within a Relative Timespan
- Collect activity data within an Absolute Timespan

![Box Data Collector Wizard Activity Operation Scope page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/collection/activityoperationscope.webp)

**Step 8 –** On the Activity Operation Scope page:

- Select Box enterprise event operations to collect

![Box Data Collector Wizard Authenticate page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/collection/activityauthenticate.webp)

**Step 9 –** The Authenticate page is where the connection to the target Box environment is
configured. Click **Authorize** to launch the BoxLogin window and generate an authorization code.
This code allows Enterprise Auditor to report on the Box Enterprise.

**NOTE:** Authentication to the target Box environment only needs to be completed once, prior to the
first scan and only in one of the scan jobs.

**Step 10 –** Navigate to the Summary page, click **Finish** to save any setting modifications or
click **Cancel** if no changes were made. Then click **OK** to close the Query Properties window.

The 1-Box_Activity Scans Job will execute according to the connection settings configuration.

# 2-Box_Import Job

The 2-Box_Import Job takes the data that has been collected from the 1-Box_Access Scans Job and the
1-Box_Activity Scans Job and imports it to the Enterprise Auditor database to be analyzed in order
to provide detailed reports on Box access rights, policies, configurations, activities, and content.

## Queries for the 2-Box_Import Job

The Import Query uses the Box Data Collector and has been preconfigured to use the Import Box
Permissions Category.

![Queries for the 2-Box_Import Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/collection/importqueries.webp)

The 2-Box_Import Job has the following query:

- Import - Takes the data that has been collected from Box and imports it to the Enterprise Auditor
  database to be analyzed in order to provide detailed reports on Box access rights, policies,
  configurations, activities, and content.

# 0.Collection Job Group

The 0.Collection Job Group collects data which will be further analyzed in order to provide details
on Box access rights, policies, configurations, activities, and content.

![Box > Collection Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The 0.Collection Job Group is comprised of:

- [1-Box_Access Scans Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Collects the data which will be further analyzed in order to provide details on Box access
  rights, policies, configurations, and content
- [1-Box_Activity Scans Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Collects the data which will be further analyzed in order to provide visibility into user
  activity events within Box
- [2-Box_Import Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Takes the data that has been collected from Box and imports it to the Enterprise Auditor
  database to be analyzed in order to provide detailed reports on Box access rights, policies,
  configurations, activities, and content

# Box_FileMetrics Job

The Box_FileMetrics Job offers insight into content sizing, staleness, and ownership of files in the
Box environment.

**NOTE:** The staleness threshold can be customized within the **File Metrics Details** analysis.

## Analysis Tasks for the Box_FileMetrics Job

Navigate to **Box** > **2.Content** > **Box_FileMetrics** > **Configure** node and select
**Analysis** to view analysis tasks.

**CAUTION:** Most of these analysis tasks should never be modified and never be deselected.

![Analysis Tasks for the Box_FileMetrics Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/content/filemetricsanalysis.webp)

The following analysis tasks are selected by default:

- File Metrics Details – Creates the Box_FileMetrics_Details table accessible under the job’s
  Results node
  - Set to consider content stale after 30 days which is the @STALETHRESHOLD parameter value
  - See the
    [Customize Analysis Tasks for the Box_FileMetrics Job](#customize-analysis-tasks-for-the-box_filemetrics-job)
    topic for additional information.
- File Count by User – Creates the Box_FileMetrics_UserFileCount table accessible under the job’s
  Results node
- Total File Size by User – Creates the Box_FileMetrics_UserFileSize table accessible under the
  job’s Results node
- File Counts by File Extension – Creates the Box_FileMetrics_ExtFileCount table accessible under
  the job’s Results node
- File Size by File Extension – Creates the Box_FileMetrics_ExtFileSize table accessible under the
  job’s Results node

In addition to the tables created by the analysis tasks, the Box_FileMetrics Job produces the
following pre-configured reports:

| Report             | Description                                               | Default Tags | Report Elements                                                                                                                                                                                                                                                                       |
| ------------------ | --------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Files by Extension | This report summarizes the Box content by file extension. | None         | This report is comprised of four elements: - Pie Chart – Displays top 20 file counts by file extension - Bar Chart – Displays top 5 file size by file extension - Table – Provides details on file counts by file extension - Table – Provides details on file size by file extension |
| Files by User      | This report summarizes the Box content by user.           | None         | This report is comprised of four elements: - Bar Chart – Displays top 5 file count by user - Bar Chart – Displays top 5 file size by user - Table – Provides details on file count by user - Table – Provides details on file size by user                                            |

### Customize Analysis Tasks for the Box_FileMetrics Job

The default values for parameters that can be customized are:

| Analysis Task        | Customizable Parameter Name | Default Value | Value Indicates                      |
| -------------------- | --------------------------- | ------------- | ------------------------------------ |
| File Metrics Details | @STALE_THRESHOLD            | 30            | Consider content stale after 30 days |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md)
topic for instructions on how to modify parameters.

# Box_FolderMetrics Job

The Box_FolderMetrics Job offers insight into content sizing, staleness, and ownership of folders in
the Box environment.

**NOTE:** The staleness threshold can be customized within the **Folder Metrics Details** analysis.
Largest and smallest folder size thresholds can be configured in a similar way on their respective
analysis tasks.

## Analysis Tasks for the Box_FolderMetrics Job

Navigate to **Box** > **2.Content** > **Box_FolderMetrics** > **Configure** node and select
**Analysis** to view analysis tasks.

**CAUTION:** Most of these analysis tasks should never be modified and never be deselected.

![Analysis Tasks for the Box_FolderMetrics Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/content/foldermetricsanalysis.webp)

The following analysis tasks are selected by default:

- Folder Metrics Details – Creates the Box_FolderMetrics_Details table accessible under the job’s
  Results node
  - Set to consider content stale after 30 days which is the @STALETHRESHOLD parameter value
  - See the
    [Customizable Analysis Tasks for the Box_FolderMetrics Job](#customizable-analysis-tasks-for-the-box_foldermetrics-job)
    topic for additional information.
- Largest Folders – Creates the Box_FolderMetrics_Largest table accessible under the job’s Results
  node
- Smallest Non-Empty Folders – Creates the Box_FolderMetrics_Smallest table accessible under the
  job’s Results node

In addition to the tables created by the analysis tasks, the Box_FolderMetrics Job produces the
following pre-configured reports.

| Report           | Description                                            | Default Tags | Report Elements                                                                                                                                                                                            |
| ---------------- | ------------------------------------------------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Largest Folders  | This report summarizes the Box content by folder size. | None         | This report is comprised of two elements: - Bar Chart – Displays top 5 largest folders - Table – Provides details on largest folders                                                                       |
| Smallest Folders | This report summarizes the Box content by folder size. | None         | This report is comprised of three elements: - Bar Chart – Displays top 5 smallest folders with files - Table – Provides details on smallest folders with files - Table – Provides details on empty folders |

### Customizable Analysis Tasks for the Box_FolderMetrics Job

The default values for parameters that can be customized are:

| Analysis Task          | Customizable Parameter Name | Default Value | Value Indicates                      |
| ---------------------- | --------------------------- | ------------- | ------------------------------------ |
| Folder Metrics Details | @STALE_THRESHOLD            | 30            | Consider content stale after 30 days |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md) topic
for instructions on how to modify parameters.

# 2.Content Job Group

The 2.Content Job Group analyzes and summarizes the content of the targeted Box environment,
highlighting users with the most content as well as what type of content exists. This information
can also be used to identify stale content that can be removed or archived to reduce risk.

![2.Content Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The 2.Content Job Group is comprised of:

- [Box_FileMetrics Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Offers insight into content sizing, staleness, and ownership of files in the Box environment.
  The staleness threshold can be customized within the **File Metrics Details** analysis.
- [Box_FolderMetrics Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Offers insight into content sizing, staleness, and ownership of folders in the Box environment.
  The staleness threshold can be customized within the **Folder Metrics Details** analysis. Largest
  and smallest folder size thresholds can be configured in a similar way in their respective
  analysis tasks.

# Box Solution

The Box solution set contains jobs to provide visibility into Box access rights, policies,
configurations, activities, and more, ensuring you never lose sight or control of your critical
assets residing in Box.

Supported Platforms

- Box for Business

Requirements, Permissions, and Ports

See the
[Target Box Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
topic for additional information.

Location

The Box Solution requires a special Enterprise Auditor license. It can be installed from the Instant
Job Wizard. Once it has been installed into the Jobs tree, navigate to the solution: **Jobs** >
**Box**.

![Box Solution in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The 0.Collection Job Group collects the data. The other job groups run analysis on the collected
data and generate reports.

## Jobs

The Box solution contains jobs to highlight access, analyze content, and expand group membership in
an organization's Box environment.

![Box Solution Overview page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/runninginstances/overviewpage.webp)

The Box Solution has the following job groups and jobs:

- [0.Collection Job Group](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Collects the data which will be further analyzed in order to provide details on Box access
  rights, policies, configurations, activities, and content
- [1.Activity Job Group](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Identifies long term trends of activity providing insight into user activity, usage statistics,
  and suspicious behavior by analyzing enterprise events within the Box environment
- [2.Content Job Group](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Analyzes and summarizes the content of the Box environment, highlighting users with the most
  content as well as what type of content exists
- [Box_Access Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Analyzes access granted to users and groups in an organization's Box environment in order to
  report on effective access rights, file-level permissions, and inactive access rights that can be
  revoked
- [Box_GroupMembership Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/box-analysis.md)
  – Expands group membership in an organization's Box environment

# Recommended Configurations for the Box Solution

The jobs that run analysis tasks in the Box Solution requires the host list to be assigned.

Dependencies

- The .Active Directory Inventory Job Group must be successfully run prior to running this Job Group
- 2-Box_Import Job – Imports data collected by the 1-Box_Access Scans Job and 1-Box_Activity Scans
  Job

Targeted Hosts

- Enterprise_ID for the target Box environment

Within host inventory, the Box hosts will return a HostStatus of **Offline**.

If multiple Enterprise_IDs are to be scanned, it is necessary to duplicate the jobs within the
0.Collection Job Group for each target host. Since the 2-Box_Import Job must always be run after the
1-Box_Access Scans Job and 1-Box_Activity Scans Job, it is a best practice to set up sub-job groups
for each target named to identify the target, for example EMEA Box. Copying the jobs will append a
number to the job’s name. Once authorization codes have been generated for each 1-Box_Access Scans
Job and 1-Box_Activity Scans Job, then the solution can be scheduled to run as desired.

Connection Profile

The Box Solution requires a specific credential for the Connection Profile which has access to the
SA Installer location. It is also necessary to authenticate to the target Box environment, which is
done through the Box Data Collector query configuration. An Enterprise Admin account (or Co-Admin
account with permission to **Run new reports and access existing reports** enabled) credential is
needed to generate an authorization code in the form of an Access Token. This can be done through
the query configuration either in the 1-Box_Access Scans Job’ Authentication wizard page or the
1-Box_Activity Scans Job’s Authentication wizard page of the Box Data Collector Wizard. See the
[Box Data Collector](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/box.md)
topic for additional information.

Access Token

The Access Token is valid for 60 days. If Box scans are running on a regular schedule, then the
Access Token automatically refreshes once an hour. However, if it has been more than 60 days since
the last scan, it is necessary to regenerate the Access Token.

Schedule Frequency

The Box Job Group can be scheduled to run as desired.

Query Configuration

This solution can be run with the default query configuration. However, the following queries in the
0.Collection Job Group can be modified to limit the depth of the scan:

- 1-Box_Access Scans Scan query
- 1-Box_Activity Scans Activity Scan query

The Box_Import Job's Import query is preconfigured to run a full import and should not be modified.

Analysis Configuration

This solution can be run with the default analysis configuration. However, the following parameters
can be modified:

- The @STALETHRESHOLD parameter determines the number of days after which content is considered
  stale. It is set to default of 30 days. The @STALETHRESHOLD parameter can be customized in the
  following analysis tasks:
  - 2.Content > Box_FileMetrics in the File Metrics Details analysis task
  - 2.Content > Box_FolderMetrics Folder in the Metrics Details analysis task

Workflow

**Step 1 –** Prerequisite: Run the .Active Directory Inventory Job Group.

**Step 2 –** (Optional) Modify query configurations for the 0.Collection Job Group to limit the scan
depth.

**Step 3 –** In the 1-Box_Access Scans Job, configure the Scan query to generate an authentication
code to authenticate to the targeted Box environment. This step only needs to be run prior to the
first scan.

**Step 4 –** (Optional) Modify analysis task parameters for the reporting jobs.

**Step 5 –** Schedule the Box Job Group to run as desired.

**NOTE:** The 0.Collection > 2-Box_Import Job must be run after the 1-Box_Access Scans Job and
1-Box_Activity Scans Job because it imports the data collected by the scan jobs.

**Step 6 –** Review the reports generated by the jobs.

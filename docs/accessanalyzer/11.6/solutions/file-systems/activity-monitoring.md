# FS_Deletions Job

The FS_Deletions job is designed to report on deletion activity event information from targeted file
servers.

## Analysis Tasks for the FS_Deletions Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Forensics** >
**FS_Deletions** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the FS_Deletions Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/activity/forensics/deletionsanalysis.webp)

The following analysis tasks are selected by default:

- 1. Create deletions view – Creates the SA_FSAC_DeletesView view accessible under the job’s
     Results node
- 2. Last 30 Days – Creates the SA_FS_Deletions_Last30Days table accessible under the job’s
     Results node
- 3. Trend – Creates the SA_FS_Deletions_TrendOverTime table accessible under the job’s Results
     node
- 4. Create view to alert - Past 24 hours – Creates the SA_FS_Deletions_Notification_NOTIFICATION
     table accessible under the job’s Results node
- 6. Raw Details – Creates the SA_FS_Deletions_Details view accessible under the job’s Results
     node

The Notification analysis task is an optional analysis task which requires configuration before
enabling it. The following analysis task is deselected by default:

- 5. Notify on large number of deletes – Alerts when large number of deletions have occurred

  - Add recipients, notification subject, and email content
  - See the [Configure the Notification Analysis Task](#configure-the-notification-analysis-task)
    topic for additional information

In addition to the tables and views created by the analysis tasks, the FS_Deletions job produces the
following pre-configured report:

| Report                                      | Description                                                                                                                                                                        | Default Tags | Report Elements                                                                                                           |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------- |
| File and Folder Deletions (Deletion Events) | This report identifies deletion events for the past 30 days. The detailed report shows all resources that were successfully deleted as well as which users performed those events. | None         | This report is comprised of two elements: - Line Chart– Displays the last 30 Days - Table – Provides details on deletions |

### Configure the Notification Analysis Task

A Notification analysis task sends email notification to recipients when the job is executed. It
requires the global **Notification** settings to be configured (**Settings** > **Notifications**)
for SMTP server information, but it uses the recipient list provided through the analysis task.
Follow the steps to configure a notification analysis task.

**Step 1 –** Navigate to the job’s **Configure** node and select **Analysis**.

**Step 2 –** In the Analysis Selection view, select the Notification analysis task and click
**Analysis Configuration** . The Notification Data Analysis Module wizard opens.

**CAUTION:** Do not make changes to other wizard pages as they have been pre-configured for the
purpose of this job.

![Notification Data Analysis Module wizard SMTP page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/forensics/notificationsmtp.webp)

**Step 3 –** Navigate to the SMTP page of the wizard.

![Recipients section](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/forensics/notificationsmtprecipients.webp)

**Step 4 –** In the Recipients section, provide the email addresses or distribution lists (fully
qualified address) for those who are to receive this notification. Multiple addresses can be
provided. You can use the following options:

- Add – Add an email address to the E-mail field
- Remove – Remove an email address from the Recipients list
- Combine multiple messages into single message – Sends one email for all objects in the record set
  instead of one email per object to all recipients

  **_RECOMMENDED:_** Leave the **Combine multiple messages into single message** option selected.

![Message section](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/forensics/notificationsmtpmessage.webp)

**Step 5 –** In the Message section, edit the **Subject**. It is not recommended to remove any
parameters. Then, customize the email content in the textbox to provide an explanation of the
notification to the recipients.

**Step 6 –** Navigate to the Summary page. Click **Finish** to save any setting modifications or
click **Cancel** if no changes were made. The Notification Data Analysis Module wizard closes.

**Step 7 –** This Notification analysis task is now configured to send emails to the provided
recipient list. In the Analysis Selection view, select this task so that notifications can be sent
automatically during the execution of the job.

_Remember,_ all of the analysis tasks should remain in the default order indicated by the numbering.
Do not deselect any of the SQLscripting analysis tasks.

Once the Notification analysis task is configured and enabled alerts are sent when the trigger has
been identified by this job.

# FS_PermissionChanges Job

The FS_PermissionChanges job is designed to report on permission change activity event information
from targeted file servers.

## Analysis Tasks for the FS_PermissionChanges Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Forensics** >
**FS_PermissionChanges** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the FS_PermissionChanges Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/activity/forensics/permissionchangesanalysis.webp)

The following analysis tasks are selected by default:

- 0. Create Permission Change Events Table – Creates an interim processing table in the database
     for use by downstream analysis and report generation
- 1. Create Permission Changes Table and View – Creates the SA_ENG_PermissionChangesView view
     accessible under the job’s Results node
- 2. Last 30 Days – Creates the SA_FS_PermissionChanges_Last30Days table accessible under the
     job’s Results node
- 3. Trend – Creates the SA_FS_PermissionChanges_TrendOverTime table accessible under the job’s
     Results node
- 4. Create view to notify on - By user, per share, for the past 24 hours – Creates the
     SA_FS_PermissionChanges_Notification_NOTIFICATION table accessible under the job’s Results
     node
- 6. Raw Details – Creates the SA_FS_PermissionChanges_Details view accessible under the job’s
     Results node
- 7. High risk permission changes – Creates the SA_FS_PermissionChanges_HighRisk table accessible
     under the job’s Results node
- 8. High risk permission changes summary – Creates the SA_FS_PermissionChanges_HighRiskSummary
     table accessible under the job’s Results node

The Notification analysis task is an optional analysis task which requires configuration before
enabling it. The following analysis task is deselected by default:

- 5. Alert on Permission Changes – Alerts when permission changes have occurred

  - Add recipients, notification subject, and email content
  - See the
    [Configure the Notification Analysis Task](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md#configure-the-notification-analysis-task)
    topic for additional information

In addition to the tables and views created by the analysis tasks, the FS_PermissionChanges job
produces the following pre-configured reports:

| Report             | Description                                                                                                                                  | Default Tags                                          | Report Elements                                                                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| High Risk Changes  | This report highlights successful permission changes performed on a high risk trustee. The line chart shows data for the past 30 days only.  | GDPR SOX HIPAA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of two elements: - Line Chart– Displays last 30 days of high risk changes - Table – Provides details on high risk changes   |
| Permission Changes | This report identifies all resources where successful permission changes have occurred. The line chart shows data for the past 30 days only. | None                                                  | This report is comprised of two elements: - Line Chart– Displays last 30 days of permission changes - Table – Provides details on permission changes |

# Forensics Job Group

The Forensics job group is designed to report on forensic related activity event information from
targeted file servers.

![Forensics Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The Forensics job group is comprised of:

- [FS_Deletions Job](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on deletion activity event information from targeted file servers

  - Includes a Notification analysis task option
  - Requires **Access Auditing** component data collection

- [FS_PermissionChanges Job](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on permission change activity event information from targeted file servers

  - Includes a Notification analysis task option
  - Requires **Access Auditing** component data collection

# Least Privileged Access > FS_LeastPrivilegedAccess Job

The FS_LeastPrivilegedAccess job is designed to report on activity event information that can assist
in identifying least privilege from targeted file servers. It identifies where trustees are not
leveraging their permissions to resources from targeted file servers. Requires **Access Auditing**
component data collection.

![Least Privileged Access > FS_LeastPrivilegedAccess Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/leastprivilegedaccessjobstree.webp)

The FS_LeastPrivilegedAccess job is located in the Least Privileged Access job group.

## Analysis Tasks for the FS_LeastPrivilegedAccess Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Least Privileged
Access** > **FS_LeastPrivilegedAccess** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the FS_LeastPrivilegedAccess Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/leastprivilegedaccessanalysis.webp)

The following analysis tasks are selected by default:

- 1. Join Activity Data to Share – Creates the SA_FS_LeastPrivilegedAccess_ActivityByShare table
     accessible under the job’s Results node
- 2. Get Effective Share Access for all Shares with Activity – Creates the
     SA_FS_LeastPrivilegedAccess_EffectiveShareAccess table accessible under the job’s Results
     node
- 3. Compare Users activity to access – Creates the SA_FS_LeastPrivilegedAccess_Comparision table
     accessible under the job’s Results node
- 4. Summarize Comparison by Share – Creates an interim processing table in the database for use
     by downstream analysis and report generation
- 5. Rollup by Share - Pie Chart – Creates an interim processing table in the database for use by
     downstream analysis and report generation
- 6. Summarize Entitlement Usage - Enterprise Wide – Creates interim processing tables in the
     database for use by downstream analysis and report generation
- 7. Recommend Changes to Group ACLs – Creates the SA_FS_LeastPrivilegedAccess_RecommendedChanges
     table accessible under the job’s Results node
- 8. Resource Based Groups – Creates the SA_FS_LeastPrivilegedAccess_ResourceGroups table
     accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_LeastPrivilegedAccess job
produces the following pre-configured reports:

| Report                         | Description                                                                                                                            | Default Tags                                          | Report Elements                                                                                                                                                |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Overprovisioning Risk by Share | This report identifies shares with the largest amount of unutilized entitlements and assigns a risk rating to each one.                | GDPR SOX HIPAA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of two elements: - Pie Chart – Displays shares by overprovisioning risk - Table – Provides details on shares by overprovisioning risk |
| Overprovisioning Summary       | This report shows the percentage of all entitlements which are being used. An entitlement refers to one user's access to one folder.   | GDPR SOX HIPAA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of two elements: - Pie Chart – entitlements by level of usage - Table – Provides details on entitlements                              |
| Remediation                    | If all members of a group are not using their full access, then modification to group permissions on the share will be suggested here. | None                                                  | This report is comprised of one element: - Table – Provides details on recommended changes to permissions                                                      |

# 5.Activity Job Group

The 5.Activity job group is designed to report on activity event information from targeted file
servers.

![5.Activity Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The 5.Activity job group is comprised of:

- [Forensics Job Group](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on forensic related activity event information from targeted file servers
- [Least Privileged Access > FS_LeastPrivilegedAccess Job](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on activity event information that can assist in identifying least privilege
  from targeted file servers
- [Security Job Group](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on security related activity event information from targeted file servers
- [Suspicious Activity Job Group](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on potentially suspicious activity event information from targeted file
  servers
- [Usage Statistics Job Group](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on usage statistics from targeted file servers

# FS_AdminActvity Job

The FS_AdminActivity job is designed to report on administrator related activity event information
from targeted file servers.

## Analysis Tasks for the FS_AdminActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Security** >
**FS_AdminActivity** > **Configure** node and select Analysis.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the FS_AdminActivity Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/security/adminactivityanalysis.webp)

The following analysis tasks are selected by default:

- 1. Create Admin Activity View – Creates an interim processing view in the database for use by
     downstream analysis and report generation
- 2. Effective Access to Locations with Admin Activity – Creates an interim processing table in
     the database for use by downstream analysis and report generation
- 3. Suspicious Admin Activity – Creates the SA_FS_AdminActivity_SuspiciousActivity table
     accessible under the job’s Results node
- 4. Operations Overview – Creates an interim processing table in the database for use by
     downstream analysis and report generation
- 5. Rank admins by activity – Creates an interim processing table in the database for use by
     downstream analysis and report generation
- 6. Pivot Admin Activity for Details Report – Creates an interim processing table in the database
     for use by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the FS_AdminActivity job produces
the following pre-configured reports:

| Report                          | Description                                                                                    | Default Tags                                          | Report Elements                                                                                                                                              |
| ------------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Administrator Activity Details  | This report shows the details of administrator activity on file shares.                        | None                                                  | This report is comprised of one element: - Table – Provides details on last 30 days of administrator activity                                                |
| Administrator Activity Overview | This report identifies the types of actions administrators are performing across your network. | None                                                  | This report is comprised of two elements: - Pie Chart – Displays last 30 days of administrator activity - Table – Provides details on types of actions       |
| Most Active Administrators      | This report ranks administrators by number of shares they have activity in.                    | None                                                  | This report is comprised of two elements: - Bar Chart – Displays last 30 days of administrator activity - Table – Provides details on administrator activity |
| Suspicious Admin Activity       | This report highlights all administrator reads in shares where they do not have access.        | GDPR SOX HIPAA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of one element: - Table – Provides details on last 30 days of administrator activity                                                |

# FS_HighRiskActivity Job

The FS_HighRiskActivity job is designed to report on high risk activity event information from
targeted file servers.

## Analysis Tasks for the FS_HighRiskActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Security** >
**FS_HighRiskActivity** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the FS_HighRiskActivity Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/security/highriskactivityanalysis.webp)

- 0. Drop Tables – Drops tables from previous runs
- 1. Analyze for High Risk Activity – Creates the SA_FS_HighRiskActivity_HighRiskUserActivity
     table accessible under the job’s Results node
- 2. Pivot High Risk Activity – Creates the SA_FS_HighRiskActivity_HighRiskDetails table
     accessible under the job’s Results node
- 3. Summarize Share Activity – Creates the SA_FS_HighRiskActivity_ShareSummary table accessible
     under the job’s Results node
- 4. Global User Activity – Creates an interim processing table in the database for use by
     downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the FS_HighRiskActivity job
produces the following pre-configured report:

| Report             | Description                                                                                                                                                                                                                                                                           | Default Tags                                          | Report Elements                                                                                                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| High Risk Activity | High Risk Activity is any action performed by a user who has access to a particular resource only through a High Risk Trustee (for example, Everyone, Authenticated Users, or Domain Users). Unless action is taken, these users will lose access once the open access is remediated. | GDPR SOX HIPAA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of three elements: - Pie Chart – Displays last 30 days of activity - Table – Provides details on activity by user - Table – Provides details on activity by share |

# FS_LocalUserActivity Job

The FS_LocalUserActivity job is designed to report on local user activity event information from
targeted file servers.

## Analysis Tasks for the LocalUserActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Security** >
**FS_LocalUserActivity** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the LocalUserActivity Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/security/localuseractivityanalysis.webp)

- 1. Local User Activity Details – Creates the SA_FS_LocalUserActivity_Details table accessible
     under the job’s Results node
- 2. Top Local User Accounts – Creates the SA_FS_LocalUserActivity_TopUsers table accessible under
     the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_LocalUserActivity job
produces the following pre-configured report:

| Report              | Description                                                      | Default Tags | Report Elements                                                                                                                                                   |
| ------------------- | ---------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Local User Activity | This report identifies local accounts with file system activity. | None         | This report is comprised of two elements: - Bar Chart – Displays top local user account activity (last 30 days) - Table – Provides details on local user activity |

# Security Job Group

The Security job group is designed to report on security related activity event information from
targeted file servers.

![Security Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The Security Job Group is comprised of:

- [FS_AdminActvity Job](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on administrator related activity event information from targeted file
  servers

  - Requires **Access Auditing** component data collection

- [FS_HighRiskActivity Job](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on high risk activity event information from targeted file servers

  - Requires **Access Auditing** component data collection

- [FS_LocalUserActivity Job](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on local user activity event information from targeted file servers

# FS_DeniedActivity Job

The FS_DeniedActivity job is designed to report on denied activity event information from targeted
file servers.

## Analysis Tasks for the FS_DeniedActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious
Activity** > **FS_DeniedActivity** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the FS_DeniedActivity Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/suspiciousactivity/deniedactivityanalysis.webp)

The following analysis tasks are selected by default:

- Denied Activity Hourly Summary – Creates the SA_FS_DeniedActivity_HourlySummary table accessible
  under the job’s Results node

In addition to the tables and views created by the analysis task, the FS_DeniedActivity job produces
the following pre-configured report:

| Report          | Description                                                                          | Default Tags | Report Elements                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Denied Activity | This report highlights high periods of denied user activity during the past 30 days. | None         | This report is comprised of two elements: - Bar Chart – Displays top denied periods for the last 30 days - Table – Provides details on denied activity |

# FS_HighestHourlyActivity Job

The FS_HighestHourlyActivity job is designed to report on the highest hourly activity event
information from targeted file servers broken down by user.

## Analysis Tasks for the FS_HighestHourlyActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious
Activity** > **FS_HighestHourlyActivity** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the FS_HighestHourlyActivity Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/suspiciousactivity/highesthourlyactivityanalysis.webp)

The following analysis task is selected by default:

- Users Ranked – Creates the SA_FS_HighestHourlyActivity_UsersRanked table accessible under the
  job’s Results node

The following analysis task is deselected by default:

- Create notifications view – Restores the SA_FS_HighestHourlyActivity_Last24Hours_NOTIFICATION view
  to be visible under the job’s Results node

The Notification analysis task is an optional analysis task which requires configuration before
enabling it. The following analysis task is deselected by default:

- Hour Activity Notification – Alerts when large amounts of activity for a user have occurred within
  an hour

  - Add recipients, notification subject, and email content
  - See the
    [Configure the Notification Analysis Task](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md#configure-the-notification-analysis-task)
    topic for additional information

In addition to the tables and views created by the analysis tasks, the FS_HighestHourlyActivity job
produces the following pre-configured report:

| Report                | Description                                                                                                                            | Default Tags | Report Elements                                                                                                                            |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Unusual User Activity | This report identifies user accounts and time ranges where there was the largest and widest amount of activity across the file system. | None         | This report is comprised of two elements: - Bar Chart – Displays abnormal user activity - Table – Provides details on hourly user activity |

# FS_HourlyShareActivity Job

The FS_HourlyShareActivity job is designed to report on the highest hourly activity event
information from targeted file servers broken down by share.

## Analysis Tasks for the FS_HourlyShareActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious
Activity** > **FS_HourlyShareActivity** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the FS_HourlyShareActivity Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/suspiciousactivity/hourlyshareactivityanalysis.webp)

The following analysis task is selected by default:

- Summarize hourly norms and deviations – Creates the SA_FS_HourlyShareActivity_Deviations table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the FS_HourlyShareActivity job
produces the following pre-configured report:

| Report                 | Description                                                                                       | Default Tags | Report Elements                                                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| Unusual Share Activity | This report will show any outliers in hourly share activity, broken down by day of week and hour. | None         | This report is comprised of two elements: - Bar Chart – Displays abnormal share activity - Table – Provides details on share activity |

# FS_ModifiedBinaries Job

The FS_ModifiedBinaries job is designed to report on activity event information where binaries were
modified from targeted file servers.

## Analysis Tasks for the FS_ModifiedBinaries Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious
Activity** > **FS_ModifiedBinaries** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the FS_ModifiedBinaries Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/suspiciousactivity/modifiedbinariesanalysis.webp)

The following analysis task is selected by default:

- Summarize modifications to binaries

  - Creates an interim processing table in the database for use by downstream analysis and report
    generation
  - Creates the SA_FS_ModifiedBinaries_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the FS_ModifiedBinaries job
produces the following pre-configured report:

| Report                          | Description                                                                                    | Default Tags | Report Elements                                                                                                                                          |
| ------------------------------- | ---------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| First Time Binary Modifications | This report highlights recent instances where users have modified binaries for the first time. | None         | This report is comprised of two elements: - Bar Chart – Displays first time binary modifications by host - Table – Provides details on modified binaries |

# FS_PeerGroupActivity Job

The FS_PeerGroupActivity job is designed to report on abnormal activity event information based on
peer group analysis from targeted file servers.

## Analysis Tasks for the FS_PeerGroupActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious
Activity** > **FS_PeerGroupActivity** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the FS_PeerGroupActivity Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/suspiciousactivity/peergroupactivityanalysis.webp)

- Summarize Hourly Norms and Deviations – Creates the SA_FS_PeerGroupActivity_Details table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_PeerGroupActivity job
produces the following pre-configured report:

| Report                      | Description                                                                                                                                                                                                                                | Default Tags | Report Elements                                                                                     |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------------------- |
| Unusual Peer Group Activity | This report highlights unusual periods of activity based on peer group analysis. When a user accesses an abnormal amount of data from outside of their own department, the failure of separation of duties can indicate a security threat. | None         | This report is comprised of one element: - Table – Provides details on abnormal peer group activity |

# FS_Ransomware Job

The FS_Ransomware job is comprised of analysis and reports which use the data collected by the
**0.Collection** job group to provide information on periods of time in which users are responsible
for an abnormally high number of updates. This can be indicative of ransomware. Additionally,
activity involving files which are known as ransomware artifacts is highlighted.

## Analysis Tasks for the FS_Ransomeware Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious
Activity** > **FS_Ransomware** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the FS_Ransomeware Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/suspiciousactivity/ransomewareanalysis.webp)

The following analysis tasks are selected by default:

- Summarize Hourly Norms and Deviations – Creates the SA_FS_Ransomware_Details table accessible
  under the job’s Results node
- Summarize activity on known ransomware artifacts

  - Creates the SA_FS_Ransomware_Artifacts table accessible under the job’s Results node
  - Creates an interim processing table in the database for use by downstream analysis and report
    generation

In addition to the tables and views created by the analysis tasks, the FS_Ransomware job produces
the following pre-configured reports:

| Report                              | Description                                                                                                                                 | Default Tags | Report Elements                                                                                                                                                                                  |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Ransomware Activity                 | This report summarizes Add or Rename activity involving known ransomware artifacts.                                                         | None         | This report is comprised of three elements: - Bar Chart – Displays top ransomware patterns - Table – Provides details on ransomware activity - Table – Provides summary of ransomware by pattern |
| Unusual Write Activity (Ransomware) | This report highlights periods of abnormally high update activity involving shared resources. This can be indicative of ransomware attacks. | None         | This report is comprised of two elements: - Bar Chart – Displays abnormal update activity - Table – Provides details on abnormal update activity                                                 |

# FS_SensitiveDataActivity Job

The FS_SensitiveDataActivity job is designed to report on activity event information on resources
identified to contain sensitive information from targeted file servers.

## Analysis Tasks for the FS_SensitiveDataActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious
Activity** > **FS_SensitiveDataActivity** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the FS_SensitiveDataActivity Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/suspiciousactivity/sensitivedataactivityanalysis.webp)

The following analysis tasks are selected by default:

- Summarize Hourly Norms and Deviations – Creates the SA_FS_SensitiveDataActivity_Details table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the FS_SensitiveDataActivity job
produces the following pre-configured report:

| Report                       | Description                                                                          | Default Tags                                          | Report Elements                                                                                                                                         |
| ---------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User Sensitive Data Activity | This report highlights periods of abnormally high activity involving sensitive data. | GDPR SOX HIPAA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of two elements: - Bar Chart – Displays abnormal sensitive data activity - Table – Provides details on sensitive data activity |

# FS_StaleFileActivity Job

The FS_StaleFileActivity job is designed to report on user activity event information involving
stale files from targeted file servers.

## Analysis Tasks for the FS_StaleFileActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious
Activity** > **FS_StaleFileActivity** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the FS_StaleFileActivity Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/suspiciousactivity/stalefileactivityanalysis.webp)

- Summarize Hourly Norms and Deviations – Creates the SA_FS_StaleFileActivity_Details table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the FS_StaleFileActivity job
produces the following pre-configured report:

| Report                   | Description                                                                                  | Default Tags | Report Elements                                                                                                                                          |
| ------------------------ | -------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User Stale File Activity | This report highlights periods of abnormally high activity involving stale shared resources. | None         | This report is comprised of two elements: - Bar Chart – Displays abnormal stale file activity - Table – Provides details on abnormal stale file activity |

# FS_UserShareActivity Job

The FS_UserShareActivity job is designed to report on normal user activity within a share from
targeted file servers.

## Analysis Tasks for the FS_UserShareActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious
Activity** > **FS_UserShareActivity** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the FS_UserShareActivity Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/suspiciousactivity/usershareactivityanalysis.webp)

- Track Latest Activity Per User Per Share – Creates the SA_FS_UserShareActivity_LatestActivity
  table accessible under the job’s Results node
- Average days since last Access – Creates the SA_FS_UserShareActivity_ShareSummary table accessible
  under the job’s Results node
- New Access Last Week – Creates an interim processing table in the database for use by downstream
  analysis and report generation

In addition to the tables and views created by the analysis tasks, the FS_UserShareActivity job
produces the following pre-configured reports:

| Report                            | Description                                                                                                                                        | Default Tags | Report Elements                                                                                                                                                           |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| First Time Share Activity by User | This report shows the last date that a user accessed a share, ordered by the oldest activity. This lack of access may indicate unused permissions. | None         | This report is comprised of two elements: - Bar Chart – Displays shares with new users accessing data - past 7 days - Table – Provides details on first time share access |
| Longest Inactivity                | This report shows which users have returned to a share after the longest periods of inactivity.                                                    | None         | This report is comprised of one element: - Table – Provides details on user share activity                                                                                |

# FS_WeekendActivity Job

The FS_WeekendActivity job is comprised of analysis and reports which use the data collected by the
**0.Collection** job group to provide information on weekend file server activity and the user
accounts which perform the most weekend activity. Best practices often dictate monitoring of weekend
activity for potential security concerns.

## Analysis Tasks for the FS_WeekendActivity Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Suspicious
Activity** > **FS_WeekendActivity** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the FS_WeekendActivity Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/box/activity/suspiciousactivity/weekendactivityanalysis.webp)

The following analysis tasks are selected by default:

- Weekend Activity – Creates the SA_FS_WeekendActivity_Details table accessible under the job’s
  Results node
- User Summary – Creates the SA_FS_WeekendActivity_UserSummary table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis tasks, the FS_WeekendActivity job
produces the following pre-configured report:

| Report                                          | Description                                                               | Default Tags | Report Elements                                                                                                                                                    |
| ----------------------------------------------- | ------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Weekend Activity (Most Active Users on Weekend) | This report shows users who are active on the weekend inside file shares. | None         | This report is comprised of two elements: - Bar Chart – Displays weekend share activity - top 5 users - Table – Provides details on weekend share activity by user |

# Suspicious Activity Job Group

The Suspicious Activity job group is designed to report on potentially suspicious activity event
information from targeted file servers.

![Suspicious Activity Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The Suspicious Activity job group is comprised of:

- [FS_DeniedActivity Job](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on denied activity event information from targeted file servers

  - Requires **Access Auditing** component data collection

  [FS_HighestHourlyActivity Job](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on the highest hourly activity event information from targeted file servers
  broken down by user

  - Includes a Notification analysis task option
  - Requires **Access Auditing** component data collection

- [FS_HourlyShareActivity Job](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on the highest hourly activity event information from targeted file servers
  broken down by share

  - Requires **Access Auditing** component data collection

- [FS_ModifiedBinaries Job](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on activity event information where binaries were modified from targeted file
  servers

  - Requires **Access Auditing** component data collection

- [FS_PeerGroupActivity Job](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on abnormal activity event information based on peer group analysis from
  targeted file servers

  - Requires **Access Auditing** component data collection
  - Requires Ownership be assigned within the Access Information Center. See the Resource Owners
    Overview topic in the
    [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)
    for additional information.

- [FS_Ransomware Job](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on potential ransomware activity event information based on file extensions
  and large number of modified file events from targeted file servers
- [FS_SensitiveDataActivity Job](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on activity event information on resources identified to contain sensitive
  information from targeted file servers

  - Requires **Access Auditing** component data collection
  - Requires **Sensitive Data Discovery Auditing** component data collection

- [FS_StaleFileActivity Job](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on user activity event information involving stale files from targeted file
  servers
- [FS_UserShareActivity Job](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on normal user activity within a share from targeted file servers

  - Requires **Access Auditing** component data collection

- [FS_WeekendActivity Job](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on activity events that occur over the weekend from targeted file servers

  - Requires **Access Auditing** component data collection

# FS_GroupUsage Job

The FS_GroupUsage job is designed to report on group usage from targeted file servers.

## Analysis Tasks for the FS_GroupUsage Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Usage
Statistics** > **FS_GroupUsage** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the FS_GroupUsage Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/usagestatistics/groupusageanalysis.webp)

The following analysis task is selected by default:

- 1. Identify Last Time a Group was used for Access

  - Creates an interim processing table in the database for use by downstream analysis and report
    generation
  - Creates the SA_FS_GroupUsage_DaysSinceUse view accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the FS_GroupUsage job produces the
following pre-configured report:

| Report       | Description                                                                                      | Default Tags | Report Elements                                                                                                                |
| ------------ | ------------------------------------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| Stale Groups | This report identifies the last possible time a group was used for providing file system access. | None         | This report is comprised of two elements: - Bar Chart – Displays top unused groups - Table – Provides details on unused groups |

# FS_MostActiveServers Job

The FS_MostActiveServers job is designed to report on the most active servers within an environment.

## Analysis Task for the FS_MostActiveServers Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Usage
Statistics** > **FS_MostActiveServers** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Task for the FS_MostActiveServers Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/usagestatistics/mostactiveserversanalysis.webp)

The following analysis task is selected by default:

- Last 30 Days – Creates the SA_FS_MostActiveServers_Last30Days table accessible under the job’s
  Results node

In addition to the table and views created by the analysis task, the FS_MostActiveServers job
produces the following pre-configured report:

| Report                             | Description                                                                                                                                                                                                                                                                                                                                      | Default Tags | Report Elements                                                                                                                        |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| Most Active Servers – Last 30 Days | This report identifies the top servers for the past 30 days. [Read], [Add], [Update], [Delete], [Permission Change], [Rename] fields reflect the number of unique operations of each type that was performed in that server for this time frame. Unique Folders are the number of distinct folders that have had activity during the time frame. | None         | This report is comprised of two elements: - Bar Chart – Displays most active servers - Table – Provides details on most active servers |

# FS_MostActiveUsers Job

The FS_MostActiveUsers job is designed to report on the most active users within an environment.

## Analysis Tasks for the FS_MostActiveUsers Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Usage
Statistics** > **FS_MostActiveUsers** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the FS_MostActiveUsers Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/usagestatistics/mostactiveusersanalysis.webp)

The following analysis task is selected by default:

- Last 30 Days – Creates the SA_FS_MostActiveUsers_Last30Days table accessible under the job’s
  Results node

In addition to the tables and views created by the analysis task, the FS_MostActiveUsers job
produces the following pre-configured report:

| Report                           | Description                                                                                                                                                                                                                                                                                                                                 | Default Tags | Report Elements                                                                                                                                   |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Most Active Users – Last 30 Days | This report identifies the top users for the past 30 days. [Read], [Add], [Update], [Delete], [Permission Change], [Rename] fields reflect the number of unique operations of each type that was performed by the user for this time frame. Unique Folders are the number of distinct folders that have had activity during the time frame. | None         | This report is comprised of two elements: - Bar Chart – Displays top users by operation count - Table – Provides details on the most active users |

# FS_StaleShares Job

The FS_StaleShares job is designed to report on stale shares from targeted file servers.

## Analysis Tasks for the FS_StaleShares Job

View the analysis tasks by navigating to the **FileSystem** > **5.Activity** > **Usage
Statistics** > **FS_StaleShares** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the FS_StaleShares Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/activity/usagestatistics/stalesharesanalysis.webp)

The following analysis tasks are selected by default:

- 1. Find Date of last Activity

  - Creates an interim processing table in the database for use by downstream analysis and report
    generation
  - Creates the SA_FS_StaleShares_LastActivityPivot view accessible under the job’s Results node

- 2. Find Shares with no Recorded Activity – Creates the SA_FS_StaleShares_NoRecordedActivity
     table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_StaleShares job produces
the following pre-configured report:

| Report       | Description                                                         | Default Tags | Report Elements                                                                                                                |
| ------------ | ------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| Stale Shares | This report identifies the last date there was activity on a share. | None         | This report is comprised of two elements: - Bar Chart – Displays top 5 stale shares - Table – Provides details on stale shares |

# Usage Statistics Job Group

The Usage Statistics job group is designed to report on usage statistics from targeted file servers.

![Usage Statistics Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The Usage Statistics job group is comprised of:

- [FS_GroupUsage Job](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on group usage from targeted file servers

  - Requires **Access Auditing** component data collection

- [FS_MostActiveServers Job](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on the most active servers within an environment
- [FS_MostActiveUsers Job](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on the most active users within an environment
- [FS_StaleShares Job](/docs/accessanalyzer/11.6/solutions/file-systems/activity-monitoring.md)
  – Designed to report on stale shares from targeted file servers

  - Requires **Access Auditing** component data collection

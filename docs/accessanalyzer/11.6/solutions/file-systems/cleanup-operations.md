# FS_DeleteFiles_Status Job

The FS_DeleteFiles_Status job is designed to report on deleted resources from targeted file servers
that were deleted from the FS_DeleteFiles job. See the
[FS_DeleteFiles Job](/docs/accessanalyzer/11.6/solutions/file-systems/cleanup-operations.md) topic
for additional information.

## Analysis Tasks for the FS_DeleteFiles_Status Job

Navigate to the **FileSystem** > **Cleanup** > **4. Delete** > **FS_DeleteFiles_Status** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the FS_DeleteFiles_Status Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/cleanup/delete/deletefilesstatusanalysis.webp)

The following analysis task is selected by default:

- Summarize file deletion actions – Creates the SA_FS_Delete_Status_Summary table accessible under
  the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_DeleteFiles_Status job
produces the following pre-configured report.

| Report         | Description                                                                          | Default Tags | Report Elements                                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| File Deletions | This report summarizes file deletions which have occurred during the Cleanup process | None         | This report is comprised of two elements: - Line Chart – Displays the historical summary of file deletions - Table – provides details on file deletions |

# FS_DeleteFiles Job

The FS_DeleteFiles job is designed to delete resources from targeted file servers that were
previously quarantined and can be deleted.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

The FS_DeleteFiles job has the following configurable parameter:

- Number of days without access after which a file is a deletion candidate

See the
[Customizable Analysis Tasks for the FS_DeleteFiles Job](#customizable-analysis-tasks-for-the-fs_deletefiles-job)
topic for additional information.

## Analysis Tasks for the FS_DeleteFiles Job

Navigate to the **FileSystem** > **Cleanup** > **4. Delete** > **FS_DeleteFiles** > **Configure**
node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the FS_DeleteFiles Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/cleanup/delete/deletefilesanalysis.webp)

The following analysis tasks are selected by default:

- Determine candidates for deletion – Creates the SA_FS_Delete_CandidatesView table accessible under
  the job’s Results node

  - The threshold for the number of days without access after which a file becomes a candidate for
    deletion can be configured. See the [Parameter Configuration](#parameter-configuration) topic
    for additional information.

### Customizable Analysis Tasks for the FS_DeleteFiles Job

The default values for parameters that can be customized are:

| Analysis Task                     | Customizable Parameter Name | Default Value | Value Indicates                                                                           |
| --------------------------------- | --------------------------- | ------------- | ----------------------------------------------------------------------------------------- |
| Determine candidates for deletion | @DELETE_THRESHOLD           | 180           | Set the number of days without access after which a file becomes a candidate for deletion |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md)
topic for instructions to modify parameters.

## Action Tasks for the FS_DeleteFiles Job

Navigate to the **FileSystem** > **Cleanup** > **4. Delete** > **FS_DeleteFiles** > **Configure**
node and select **Actions** to view the action tasks.

**CAUTION:** Do not enable the action unless it is required. Disable the action after execution to
prevent making unintended and potentially harmful changes to Active Directory.

![Action Tasks for the FS_DeleteFiles Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/cleanup/delete/deletefilesaction.webp)

The following actions are deselected by default:

- Delete files – Deletes files that are listed as candidates for deletion in the
  FS_Delete_CandidatesView table. The threshold for the number of days without access after which a
  file becomes a candidate for deletion can be configured through the **Determines candidates for
  deletion** analysis task.

  - See the [Parameter Configuration](#parameter-configuration) topic for additional information

# 4. Delete Job Group

The 4. Delete job group is designed to report on and take action against resources from targeted
file servers that can be deleted.

![4. Delete Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

This job group includes the following jobs:

- [FS_DeleteFiles Job](/docs/accessanalyzer/11.6/solutions/file-systems/cleanup-operations.md)
  – Designed to delete resources from targeted file servers that were previously quarantined and can
  be deleted
- [FS_DeleteFiles_Status Job](/docs/accessanalyzer/11.6/solutions/file-systems/cleanup-operations.md)
  – Designed to report on deleted resources from targeted file servers that were deleted from the
  DeleteFiles job

Workflow

The following is the recommended workflow for using the job group:

**Step 1 –** **Prerequisite:** Successfully execute the following job groups:

- .Active Directory Inventory
- File System > 0.Collection
- File System > Cleanup > 3. Quarantine

**Step 2 –** Schedule the 4. Delete job group to run as desired after the prerequisites have
completed.

**Step 3 –** Review the reports generated by the 4. Delete job group.

# 1. Cleanup Assessment > FS_CleanupAssessment Job

The FS_CleanupAssessment job is designed to report on and assess the status of target file servers
that can be cleaned up.

To include share ownership information in the analyses, populate the SA_AIC_ResourceOwnersView prior
to running this job. This view populates when you assign owners to resources through the Access
Information Center Manage Owners page. See the Resource Owners topics in the
[Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)
for additional information.

![1. Cleanup Assessment > FS_CleanupAssessment Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The FS_CleanupAssessment job is located in the 1. Cleanup Assessment job group.

Workflow

The following is the recommended workflow for using the job group:

**Step 1 –** **Prerequisite:** Successfully execute the following job groups:

- .Active Directory Inventory
- File System > 0.Collection

**Step 2 –** Schedule the 1. Cleanup Assessment job group to run as desired after the prerequisites
have completed.

**Step 3 –** Review the reports generated by the 1. Cleanup Assessment group.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

The FS_CleanupAssessment job has the following configurable parameters:

- Number of days after which a resource’s LastModified timestamp classifies it as stale
- If 1, LastModified will be used to calculate staleness. If 0, LastAccessed will be used.
- UNC Paths of folders to exclude from staleness consideration (recursive)
- Lower bound for files to be included in the FileDetails table (by LastModfied, in days)
- Upper bound for files to be included in the FileDetails table (by LastModfied, in days)

See the
[Customizable Analysis Tasks for the FS_CleanupAssessment Job](#customizable-analysis-tasks-for-the-fs_cleanupassessment-job)
topic for additional information.

## Analysis Tasks for the FS_CleanupAssessment Job

Navigate to the **FileSystem** > **Cleanup** > **1. Cleanup Assessment** >
**FS_CleanupAssessment** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the FS_CleanupAssessment Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/cleanup/cleanupassessmentanalysis.webp)

The following analysis tasks are selected by default:

- Create file-level view – Creates the SA_FS_CleanupView table accessible under the job’s Results
  node.

  - See the [Include Metadata Tag Information](#include-metadata-tag-information) topic for
    instructions on how to include metadata tag information in this table
  - Has 3 configurable parameters. See the
    [Customizable Analysis Tasks for the FS_CleanupAssessment Job](#customizable-analysis-tasks-for-the-fs_cleanupassessment-job)
    topic for additional information.

- Create file-level details table – Creates the SA_FS_CleanupAssessment_FileDetails table accessible
  under the job’s Results node

  - Has 2 configurable parameters. See the
    [Customizable Analysis Tasks for the FS_CleanupAssessment Job](#customizable-analysis-tasks-for-the-fs_cleanupassessment-job)
    topic for additional information.

- Summarize share-level information – Creates the SA_FS_CleanupAssessment_ShareDetails table
  accessible under the job’s Results node
- Summarize host-level information – Creates the SA_FS_CleanupAssessment_HostDetails table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_CleanupAssessment job
produces the following pre-configured report.

| Report                       | Description                                            | Default Tags | Report Elements                                                                                                                               |
| ---------------------------- | ------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| File System Cleanup - Files  | This report highlights file-level cleanup information  | None         | This report is comprised of two elements: - Pie Chart – Displays enterprise stale file breakdown - Table – Provides details on files          |
| File System Cleanup - Hosts  | This report highlights host-level cleanup information  | None         | This report is comprised of two elements: - Stacked Chart – Displays top hosts by stale file percentage - Table – Provides details on hosts   |
| File System Cleanup - Shares | This report highlights share-level cleanup information | None         | This report is comprised of two elements: - Stacked Chart – Displays top shares by stale file percentage - Table – Provides details on shares |

### Customizable Analysis Tasks for the FS_CleanupAssessment Job

The default values for parameters that can be customized are:

| Analysis Task                   | Customizable Parameter Name | Default Value                                                                                          | Value Indicates                                                                                     |
| ------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| Create File-Level View          | @STALE_THRESHOLD            | 365                                                                                                    | Set the number of days after which a resource’s Last Modified timestamp classifies it as stale      |
| @USE_LAST_MODIFIED              | 1                           | If set to 1, Last Modified will be used to calculate staleness. If set to 0, Last Access will be used. |                                                                                                     |
| #FOLDERS_TO_EXCLUDE             | BLANK                       | Specify which UNC Paths of folders to exclude from staleness consideration                             |                                                                                                     |
| Create File Level Details Table | @MIN_STALE_THRESHOLD        | 730                                                                                                    | Set the lower bound of the files to be included in the FileDetails table (by Last Modfied, in days) |
| @MAX_STALE_THRESHOLD            | 365                         | Set the upper bound of the files to be included in the FileDetails table (by Last Modfied, in days)    |                                                                                                     |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md)
topic for instructions to modify parameters.

### Include Metadata Tag Information

To include metadata tag information in the SA_FS_CleanupView table, the **FileSystem** >
**0.Collection** > **1-FSAA System Scans** job needs configuring to use the required option. Follow
the steps to enable the option on the File Detail Scan Settings page of the File System Scan query.

**Step 1 –** Navigate to the **FileSystem** > **0.Collection** > **1-FSAA System Scans** >
**Configure** node and select **Queries**.

**Step 2 –** In the Query Selection view, select the **File System Scan** query and click **Query
Properties**. The Query Properties window opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The File System Access Auditor
Data Collector Wizard opens.

![File Details tab of the FSAA Data Collector Wizard Default Scoping Options page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/fsaa/defaultscopingoptions/filedetails.webp)

**Step 4 –** Navigate to the **Default Scoping Options** page and click the **File Details** tab.

![Options to select on File Details tab](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/cleanup/includemetadatatagoptions.webp)

**Step 5 –** On the File Details tab, select the **Scan file-level details** option, and then select
the **Collect tags/keywords from file metadata properties** option.

**CAUTION:** Do not make changes to other wizard pages as they have been pre-configured for the
purpose of this job.

**Step 6 –** Navigate to the **Scoping Queries** page of the File System Access Auditor Data
Collector Wizard and click Finish to save the changes and close the wizard.

Metadata Tag Information will now be included in the SA_FS_CleanupView table the next time the
FS_CleanupAssessment job is run.

# FS_CleanupProgress Job

The FS_CleanupProgress job summarizes the progress of the cleanup effort and highlights the amount
of storage reclaimed on each host.

## Analysis Tasks for the FS_CleanupProgress Job

Navigate to the **FileSystem** > **Cleanup** > **FS_CleanupProgress** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the FS_CleanupProgress Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/cleanup/cleanupprogressanalysis.webp)

The following analysis tasks are selected by default:

- Summarize share- and host-level cleanup progress – Creates the SA_FS_CleanupProgress_ShareDetails
  table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_CleanupProgress job
produces the following pre-configured report.

| Report           | Description                                                                 | Default Tags | Report Elements                                                                                                                                      |
| ---------------- | --------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cleanup Progress | This report gives a high-level overview of an organization's cleanup effort | None         | This report is comprised of two elements: - Bar Chart – Displays the host summary of cleanup progress - Table – provides details on cleanup progress |

# FS_NotifyOwners_Status Job

The FS_NotifyOwners_Status job is comprised of analysis and reports that summarize the actions
performed by the FS_NotifyOwners job. See the
[FS_NotifyOwners Job](/docs/accessanalyzer/11.6/solutions/file-systems/cleanup-operations.md) topic
for additional information.

## Analysis Tasks for the FS_NotifyOwners_Status Job

Navigate to the **FileSystem** > **Cleanup** > **2. Notify** > **FS_NotifyOwners_Status** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the FS_NotifyOwners_Status Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/cleanup/notify/notifyownersstatusanalysis.webp)

The following analysis tasks are selected by default:

- Summarize notifications – Creates the SA_FS_CleanupAssessment_ShareDetails_NotifySummary table
  accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_NotifyOwners_Status job
produces the following pre-configured report.

| Report                                          | Description                                                                                    | Default Tags | Report Elements                                                                                                                                                   |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Owner Notifications (Share Owner Notifications) | This report summarizes share owner notifications which have occurred during the Cleanup effort | None         | This report is comprised of two elements: - Line Chart – Displays the historical summary of notify share owners - Table – provides details on notify share owners |

# FS_NotifyOwners Job

The FS_NotifyOwners job is comprised of the SendMail action module that uses the data collected by
the **FileSystem** > **Cleanup** > **1. Cleanup Assessment** > **FS_CleanupAssessment** job to
contact owners of shares containing data for which cleanup is pending.

## Action Tasks for the FS_NotifyOwners Job

Navigate to the **FileSystem** > **Cleanup** > **2. Notify** > **FS_NotifyOwners** > **Configure**
node and select **Actions** to view the action tasks.

**CAUTION:** Do not enable the action unless it is required. Disable the action after execution to
prevent making unintended and potentially harmful changes to Active Directory.

![Action Tasks for the FS_NotifyOwners Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/cleanup/notify/notifyownersaction.webp)

The following action task is deselected by default.

- Notify Owners – Notifies share owners using SendMail module

Prior to running the FS_NotifyOwners job, it is necessary to select the **Notify Owners** task and
configure the properties for the SendMail action module. See the
[Configure the FS_NotifyOwners Action](#configure-the-fs_notifyowners-action) topic for additional
information.

### Configure the FS_NotifyOwners Action

The recipients and the text of the email can be customized on the Properties page within the Send
Mail Action Module Wizard. The
[1. Cleanup Assessment > FS_CleanupAssessment Job](/docs/accessanalyzer/11.6/solutions/file-systems/cleanup-operations.md)
must be run before the Send Mail Action Module Wizard can be opened. Follow these steps to customize
the Notify Owners action task.

**Step 1 –** Navigate to the job’s **Configure** node and select **Actions**.

**Step 2 –** In the Action Selection view, select the desired action task and click **Action
Properties** to view the Action Properties page.

**Step 3 –** Click **Configure Action** to open the Send Mail Action Module Wizard.

_Remember,_ the FS_CleanupAssessment job must be run before the Send Mail Action Module Wizard can
be opened.

![Send Mail Action Module Wizard Properties page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/cleanup/notify/sendmailwizardproperties.webp)

**Step 4 –** On the Properties page, customize the following fields:

- Carbon copy (CC) – Add the recipient emails within this field

  **NOTE:** Email recipients may also be added within the Notification node under the Global
  Settings pane.

![Send Mail Action Module Wizard Message page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/cleanup/notify/sendmailwizardmessage.webp)

**Step 5 –** On the Message page, customize the following fields:

- Subject – Enter text for the display line on delivered emails
- Text Entry Box – Enter text to display on the body of each email

**Step 6 –** Navigate to the Summary page, click **Finish** to save any setting modifications or
click **Cancel** if no changes were made. Then click **OK** to close the Send Mail Action Module
Wizard.

The action task has been customized. It can now be selected and run as part of the FS_NotifyOwners
job.

# 2. Notify Job Group

The 2. Notify job group is designed to report on and notify owners of resources of target file
servers that data is pending cleanup.

**NOTE:** The SendMail action module requires configuration of the Notification Settings in the
Global Settings. See the
[Notification](/docs/accessanalyzer/11.6/administration/settings/notifications.md)
topic for additional information.

![2. Notify Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

This job group includes the following jobs:

- [FS_NotifyOwners Job](/docs/accessanalyzer/11.6/solutions/file-systems/cleanup-operations.md)
  – Designed to notify share owners that there is data within their share pending cleanup
- [FS_NotifyOwners_Status Job](/docs/accessanalyzer/11.6/solutions/file-systems/cleanup-operations.md)
  – Designed to summarize the actions taken by the NotifyOwners job

Workflow

The following is the recommended workflow for using the job group:

**Step 1 –** **Prerequisite:** Successfully execute the following job groups:

- .Active Directory Inventory
- File System > 0.Collection
- File System > Cleanup > 1. Cleanup Assessment

**Step 2 –** Schedule the 2. Notify job group to run as desired after the prerequisites have
completed.

**Step 3 –** Review the reports generated by the 2. Notify job group.

# Cleanup Job Group

The Cleanup job group is designed to report on and take action against resources from targeted file
servers that can be cleaned up. Use this job group to assess and remediate stale files according to
the data collected by the **0.Collection** job group. The Cleanup job group runs independently from
the rest of the File System solution.

**NOTE:** The Cleanup job group requires additional licenses to function. For information, contact
your Netwrix representative.

![Cleanup Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The Cleanup job group includes the following job groups and jobs:

- [1. Cleanup Assessment > FS_CleanupAssessment Job](/docs/accessanalyzer/11.6/solutions/file-systems/cleanup-operations.md)
  – Designed to report on and assess the status of target file servers that can be cleaned up
- [2. Notify Job Group](/docs/accessanalyzer/11.6/solutions/file-systems/cleanup-operations.md)
  – Designed to report on and notify the owners of resources of target file servers that data is
  pending cleanup
- [3. Quarantine Job Group](/docs/accessanalyzer/11.6/solutions/file-systems/cleanup-operations.md)
  – This job group offers a framework for using the File System actions modules to quarantine files,
  and to restore access to quarantined files if necessary
- [4. Delete Job Group](/docs/accessanalyzer/11.6/solutions/file-systems/cleanup-operations.md)
  – Designed to report on and take action against resources from targeted file servers that can be
  deleted
- [FS_CleanupProgress Job](/docs/accessanalyzer/11.6/solutions/file-systems/cleanup-operations.md)
  – Summarizes the progress of the Cleanup effort and highlights the amount of storage reclaimed on
  each host

Many jobs in this group include one or more pre-built actions designed to apply operations to the
data tables generated by the job’s analysis tasks. These actions perform the cleanup operations. By
default, the actions do not execute as part of the job group. You must select the actions you want
to run prior to execution. See the
[Action Modules](/docs/accessanalyzer/11.6/accessanalyzer/admin/action/overview.md)
topic for additional information.

## Recommended Configurations for the FS Cleanup Job Group

The Cleanup job group has the following recommended configuration settings.

Dependencies

The Cleanup job group has the following prerequisites:

- Successfully execute the **.Active Directory Inventory** job group prior to running this job group
- The **File System Actions** license must be installed
- Successfully execute the **FileSystem** > **0.Collection** job group with the following options
  enabled:

  - Scan file-level details
  - Collect ownership and permission information for files

  See the
  [FSAA: Default Scoping Options](/docs/accessanalyzer/11.6/data-collection/file-systems/configuration.md)
  topic for additional information.

Individual jobs and job groups within the Cleanup job group may have their own prerequisites and
dependencies. See the relevant topic for the job or job group for information about these.

Target Host

This job group does not collect data. No target host is required.

Schedule Frequency

This job group can be scheduled to run as desired.

# FS_QuarantineData_Status Job

The FS_QuarantineData_Status job is designed to report on the FS_QuarantineData job. See the
[FS_QuarantineData Job](/docs/accessanalyzer/11.6/solutions/file-systems/cleanup-operations.md) topic
for additional information.

## Analysis Tasks for the FS_QuarantineData_Status Job

Navigate to the **FileSystem** > **Cleanup** > **3. Quarantine** > **FS_QuarantineData_Status** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the FS_QuarantineData_Status Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/cleanup/quarantine/quarantinedatastatusanalysis.webp)

The following analysis task is selected by default:

- Summarize quarantine actions – Creates the SA_FS_Quarantine_Status_Summary table accessible under
  the job’s Results node

In addition to the tables and views created by the analysis tasks, the FS_QuarantineData_Status job
produces the following pre-configured report.

| Report            | Description                                                                            | Default Tags | Report Elements                                                                                                                                               |
| ----------------- | -------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| File Quarantining | This report summarizes file quarantining which has occurred during the Cleanup process | None         | This report is comprised of two elements: - Line Chart – Displays the historical summary of file quarantining - Table – provides details on file quarantining |

# FS_QuarantineData Job

The FS_QuarantineData job is designed to quarantine files subject to be cleaned up.

## Action Tasks for the FS_QuarantineData Job

Navigate to the **FileSystem** > **Cleanup** > **3. Quarantine** > **FS_QuarantineData** >
**Configure** node and select **Actions** to view the action tasks.

**CAUTION:** Do not enable the actions unless they are required. Disable the actions after execution
to prevent making unintended and potentially harmful changes to Active Directory.

**CAUTION:** Do not modify the action tasks. The action tasks are preconfigured for this job.

![Action Tasks for the FS_QuarantineData Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/cleanup/quarantine/quarantinedataactions.webp)

The following action tasks are deselected by default:

- Give domain user full control – Gives a specified domain user full control over stale files
- Break inherited permissions – Breaks inherited permissions

Prior to running the FS_QuarantineData job, it is necessary to select the **Give domain user full
control** or **Break inherited permissions** task to perform an action.

# FS_RestoreInheritance_Status Job

The FS_RestoreInheritance_Status job is designed to report on inheritance that was restored to
previously quarantined files.

## Analysis Tasks for the FS_RestoreInheritance_Status Job

Navigate to the **FileSystem** > **Cleanup** > **3. Quarantine** >
**FS_RestoredInheritance_Status** > **Configure** node and select **Analysis** to view the analysis
tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the FS_RestoreInheritance_Status Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/cleanup/quarantine/restoreinheritancestatusanalysis.webp)

The following analysis tasks are selected by default:

- Summarize restore inheritance actions – Creates an interim processing table in the database for
  use by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the FS_RestoreInheritance_Status
job produces the following pre-configured report.

| Report               | Description                                                                               | Default Tags | Report Elements                                                                                                                                                     |
| -------------------- | ----------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Restored Inheritance | This report summarizes restored inheritance which has occurred during the Cleanup process | None         | This report is comprised of two elements: - Line Chart – Displays the historical summary of restored inheritance - Table – provides details on restored inheritance |

# FS_RestoreInheritance Job

The FS_RestoreInheritance job is designed to restore inheritance to previously quarantined files.

## Analysis Tasks for the FS_RestoreInheritance Job

Navigate to the **FileSystem** > **Cleanup** > **3. Quarantine** > **FS_RestoreInheritance** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the FS_RestoreInheritance Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/cleanup/quarantine/restoreinheritanceanalysis.webp)

The following analysis task is selected by default:

- Determines candidates for restored inheritance – Creates the
  SA_FS_RestoreInheritance_CandidatesView table accessible under the job’s Results node

## Action Tasks for the FS_RestoreInheritance Job

Navigate to the **FileSystem** > **Cleanup** > **3. Quarantine** > **FS_RestoreInheritance** >
**Configure** node and select **Actions** to view the action tasks.

**CAUTION:** Do not enable the action unless it is required. Disable the action after execution to
prevent making unintended and potentially harmful changes to Active Directory.

**CAUTION:** Do not modify the action task. The action task is preconfigured for this job.

![Action Tasks for the FS_RestoreInheritance Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/cleanup/quarantine/restoreinheritanceaction.webp)

The following action tasks are deselected by default:

- Restore Permissions – Restores permission inheritance to quarantined files where activity has
  occurred

# 3. Quarantine Job Group

The 3. Quarantine job group is designed to report on and quarantine files that are pending cleanup.

![3. Quarantine Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

This job group includes the following jobs:

- [FS_QuarantineData Job](/docs/accessanalyzer/11.6/solutions/file-systems/cleanup-operations.md)
  – Designed to quarantine files subject to be cleaned up
- [FS_QuarantineData_Status Job](/docs/accessanalyzer/11.6/solutions/file-systems/cleanup-operations.md)
  – Designed to report on the FS_QuarantineData job
- [FS_RestoreInheritance Job](/docs/accessanalyzer/11.6/solutions/file-systems/cleanup-operations.md)
  – Designed to restore inheritance to previously quarantined files
- [FS_RestoreInheritance_Status Job](/docs/accessanalyzer/11.6/solutions/file-systems/cleanup-operations.md)
  – Designed to report on inheritance that was restored to previously quarantined files

Workflow

The following is the recommended workflow for using the job group:

**Step 1 –** **Prerequisite:** Successfully execute the following job groups:

- .Active Directory Inventory
- File System > 0.Collection
- File System > Cleanup > 1. Cleanup Assessment

**Step 2 –** Schedule the 3. Quarantine job group to run as desired after the prerequisites have
completed.

**Step 3 –** Review the reports generated by the 3. Quarantine job group.

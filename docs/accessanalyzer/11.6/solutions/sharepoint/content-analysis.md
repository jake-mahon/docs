# 4.Content Job Group

This group provides insight into content stored across SharePoint farms in order to help more
efficiently manage that content. It will provide information on the content taking up the most
space, the content that has not been accessed for extended periods of time, and additional data
describing SharePoint content and the configuration of the repositories such as lists and libraries
which store that content.

![4.Content Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/sharepoint/content/contentjobstree.webp)

The 4.Content Job Group is comprised of:

- [SP_LargestFiles Job](/docs/accessanalyzer/11.6/solutions/sharepoint/content-analysis.md)
  – Identifies the largest files across SharePoint farms. Changes to a document or its metadata
  create new versions that result in added storage. It is therefore important to manage file size
  and control versioning. Report includes file names, URLs, total file size, versions, and version
  size, along with file owner and file editor information.
- [SP_StaleFiles Job](/docs/accessanalyzer/11.6/solutions/sharepoint/content-analysis.md)
  – Identifies files that have been modified in at least a year across SharePoint farms. This aids
  administrators and users in cleaning up or archiving old and unchanged files to help maintain a
  clean and healthy SharePoint environment. Report includes files, their last modified time, total
  file size, versions and version size, along with file owner and file editor information.

# SP_LargestFiles Job

The SP_LargestFiles Job identifies the largest files across SharePoint farms. Changes to a document
or its metadata create new versions that result in added storage. It is therefore important to
manage file size and control versioning. Report includes file names, URLs, total file size,
versions, and version size, along with file owner and file editor information.

## Analysis Tasks for the SP_LargestFiles Job

Navigate to the **Jobs** > **SharePoint** > **4.Content** > **SP_LargestFiles** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the SP_LargestFiles Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/sharepoint/content/largestfilesanalysis.webp)

The default analysis task is:

- Identify Large Files – Creates the SA_SP_LargestFiles_Details table accessible under the job’s
  Results node

In addition to the table created by the analysis task which displays the largest file resources, the
SP_LargestFiles Job produces the following pre-configured report:

| Report        | Description                                                                     | Default Tags | Report Elements                                                                                                                                                                |
| ------------- | ------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Largest Files | This report identifies where the largest files, including versions, are stored. | None         | This report is comprised of three elements: - Bar Chart – Displays largest files - Table – Provides a summary of the largest sites - Table – Provides details on largest files |

# SP_StaleFiles Job

The SP_StaleFiles Job identifies files that have not been modified in at least a year across
SharePoint farms. This aids administrators and users in cleaning up or archiving old and unchanged
files to help maintain a clean and healthy SharePoint environment. Report includes files, their last
modified time, total file size, versions and version size, along with file owner and file editor
information.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

The SP_StaleFiles page has the following configurable parameters:

- Days since last modification to be considered stale

See the
[Customizable Analysis Tasks for the SP_StaleFiles Job](#customizable-analysis-tasks-for-the-sp_stalefiles-job)
for additional information.

## Analysis Tasks for the SP_StaleFiles Job

Navigate to the **Jobs** > **SharePoint** > **4.Content** > **SP_StaleFiles** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job. Only the `@stale` parameter can be configured for the analysis task.

![Analysis Tasks for the SP_StaleFiles Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/sharepoint/content/stalefilesanalysis.webp)

The default analysis task is:

- Stale File Details – Creates the SA_SP_StaleFiles_Details table accessible under the job’s Results
  node

  - This analysis task contains a configurable parameter: `@stale`. See the
    [Customizable Analysis Tasks for the SP_StaleFiles Job](#customizable-analysis-tasks-for-the-sp_stalefiles-job)
    topic for additional information.

In addition to the table created by the analysis task which displays the stale file resources, the
SP_StaleFiles Job produces the following pre-configured report:

| Report      | Description                                                                                  | Default Tags | Report Elements                                                                                                                                                                                            |
| ----------- | -------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stale Files | This report identifies the files which have not been modified in the longest amount of time. | Stale Data   | This report is comprised of three elements: - Bar Chart – Provides a comparison of stale vs active content - Bar Chart – Displays top 5 Sites by Stale Data (GB) - Table – Provides details on stale files |

### Customizable Analysis Tasks for the SP_StaleFiles Job

The default values for customizable parameters are:

| Analysis Task      | Customizable Parameter Name | Default Value | Instruction                                                              |
| ------------------ | --------------------------- | ------------- | ------------------------------------------------------------------------ |
| Stale File Details | @stale                      | 365           | Determines days since last modification that files are considered stale. |

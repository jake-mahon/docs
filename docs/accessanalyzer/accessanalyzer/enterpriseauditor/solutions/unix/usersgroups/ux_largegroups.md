# UX\_LargeGroups Job

The UX\_LargeGroups job identifies groups with large member counts. These types of groups may cause administrative overhead and burden in being able to easily understand who is getting access to resources, or how much access is being granted to resources through these groups.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable parameters used by analysis tasks in the job. See the [Parameter Configuration](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/job/overview.md#Parameter-Configuration) topic for instructions on how to edit parameters on a job overview page.

The UX\_LargeGroups job has the following customizable parameter:

- Minimum size for a group to be considered large – Sets the threshold used by the Find large groups analysis task to determine if a group is considered to be large. The default is 5.

## Analysis Tasks for the UX\_LargeGroups Job

Navigate to the __Unix__ > __1.Users and Groups__ > __UX\_LargeGroups__ > __Configure__ node and select Analysis to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the UX_LargeGroups Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/unix/usersgroups/largegroupsanalysis.png)

The default analysis task is:

- Finds large groups. The parameter determining the minimum size for a large group can be configured in the SQL scripting module. – Creates the UX\_LargeGroups\_Details table accessible under the job’s Results node

  - The threshold value used to determine if a group is considered large can be customized. See the [Parameter Configuration](#Parameter-Configuration) for additional information.

In addition to the table and views created by the analysis tasks, the UX\_LargeGroups job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Large Groups | This report identifies large groups within the audited domains | None | This report is comprised of two elements:   - Bar Chart – Displays Top 5 Large Groups - Table – Provides information on Large Group Details |

# AAD\_UserDirSync Job

The AAD\_UserDirSync Job summarizes on-premises Active Directory syncing in the audited Microsoft Entra ID environment.

## Analysis Tasks for the AAD\_UserDirSync Job

Navigate to the __Jobs__ > __Entra ID__ > __2.Users__ > __AAD\_UserDirSync__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AAD_UserDirSync Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/entraid/users/userdirsyncanalysis.png)

The default analysis tasks are:

- Get user DirSync details – Creates the AAD\_UserDirSync\_Details table accessible under the job’s Results node
- Summarize user DirSync details – Creates the AAD\_UserDirSync\_EnterpriseSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD\_UserDirSync Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| User Syncing | This report indicates the sync status of user accounts within the audited environment. | None | This report is comprised of two elements:   - Bar Chart – Displays enterprise user synchronization summary - Table – Provides user sync details |

# AAD\_DisabledUsers Job

The AAD\_DisabledUsers Job identifies disabled user accounts within Microsoft Entra ID. These accounts should be reviewed and cleaned up in order to increase security and reduce complexity.

## Analysis Tasks for the AAD\_DisabledUsers Job

Navigate to the __Jobs__ > __Entra ID__ > __2.Users__ > __AAD\_DisabledUsers__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AAD_DisabledUsers Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/entraid/users/disabledusersanalysis.png)

The default analysis tasks are:

- Get disabled user account information – Creates the AAD\_DisabledUsers\_Details table accessible under the job’s Results node
- Summarize disabled user information – Creates the AAD\_DisabledUsers\_Summary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD\_DisabledUsers Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Disabled User Accounts | This report identifies disabled user accounts and summarizes them by domain. | None | This report is comprised of three elements:   - Stacked Bar Chart – Displays disabled users by domain - Table – Provides user details - Tables – Provides details on disabled users by domain |

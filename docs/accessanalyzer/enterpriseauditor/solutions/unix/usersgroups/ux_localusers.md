# UX\_LocalUsers Job

The UX\_LocalUsers job provides an overview of all local users within the audited Unix and Linux environments.

## Analysis Tasks for the UX\_LocalUsers Job

Navigate to the __Unix__ > __1.Users and Groups__ > __UX\_LocalUsers__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the UX_LocalUsers Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/unix/usersgroups/localusersanalysis.webp)

The default analysis tasks are:

- Creates local users table – Creates the SA\_UX\_LocalUsers\_Details table accessible under the job’s Results node
- Creates local users summary table – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the table and views created by the analysis tasks, the UX\_LocalUsers job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Local Users | This report summarizes local users in the audited environment. Hosts with large numbers of local users are highlighted. | None | This report is comprised of three elements:   - Bar Chart – Displays Top 5 Hosts by Local User Count - Table – Provides details on Top 5 Local User Count bar chart - Table – Provides details on All Local Users |

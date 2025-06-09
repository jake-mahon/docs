# Oracle\_Users Job

The Oracle\_Users Job is designed to provide insight into all attributes associated with users in all databases in targeted Oracle database servers.

## Analysis Tasks for the Oracle\_Users Job

Navigate to the __Oracle__ > __1.Users and Roles__ > __Oracle\_Users__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/usersroles/jobgroup24.png)

The default analysis tasks are:

- Determine user details – Creates the SA\_Oracle\_Users\_Details table accessible under the job’s Results node
- Summarize by Instance – Creates the SA\_Oracle\_Users\_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the Oracle\_Users Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Oracle Users | This report shows details on users in the audited Oracle environment | None | This report is comprised of three elements:   - Bar Chart – Displays users by instance - Table – Provides details on oracle user instance summary - Table – Provides information on oracle user details |

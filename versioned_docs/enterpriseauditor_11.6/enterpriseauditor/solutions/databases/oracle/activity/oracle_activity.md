# Oracle\_Activity Job

The Oracle\_Activity Job is designed to provide insight into user activity in target Oracle database servers and instances based on Oracle Unified Audit settings.

## Analysis Tasks for the Oracle\_Activity Job

Navigate to the __Oracle__ > __2.Activity__ > __Oracle\_Activity__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/oracle/activity/jobgroup26.png)

The default analysis tasks are:

- Oracle Activity Details – Creates the SA\_Oracle\_Activity\_Details table accessible under the job’s Results node
- Activity Database Summary – Summarizes all activity by database. Creates the SA\_Oracle\_Activity\_UserDatabaseSummary table accessible under the job’s Results node.
- Activity Instance Summary – Summarizes Oracle activity by Instance. Creates the SA\_Oracle\_Activity\_UserInstanceSummary table accessible under the job’s Results node.

In addition to the tables and views created the analysis task, the Oracle\_Activity Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| User Activity Summary | This report lists all Oracle events, and summarizes them by database and instance. | None | This report is comprised of three elements:   - Bar Chart – Displays users with most events by instance - Table – Provides details on users with most events by instance - Table – Provides details on event details |

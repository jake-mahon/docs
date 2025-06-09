# Oracle\_SensitiveDataActivity Job

The Oracle\_SensitiveDataActivity Job is designed to provide detailed information about DML (UPDATE, INSERT, DELETE, TRUNCATE) against objects containing sensitive data.

## Analysis Tasks for the Oracle\_SensitiveDataActivity Job

Navigate to the __Oracle__ > __2.Activity__ > __Oracle\_SensitiveDataActivity__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/oracle/activity/jobgroup30.png)

The default analysis tasks are:

- SDD Activity – Highlights activity on Oracle sensitive data. Creates the SA\_Oracle\_SensitiveDataActivity\_Details table accessible under the job’s Results node.
- SDD Activity Instance Summary – Summarizes SDD Activity by Instance. Creates the SA\_Oracle\_SensitiveDataActivity\_UserSummary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis tasks, the Oracle\_SensitiveDataActivity Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Sensitive Data Activity | This report highlights events in databases containing sensitive data. | None | This report is comprised of three elements:   - Bar Chart – Displays top users by instance - Table – Provides details on user activity by instance - Table – Provides details on sensitive data activity details by database |

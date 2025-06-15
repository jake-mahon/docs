# Oracle_SuspiciousActivity Job

The Oracle_SuspiciousActivity job is designed to provide insight into suspicious behavior based on user activity that does not conform to normal database activity.

## Analysis Tasks for the Oracle_SuspiciousActivity Job

Navigate to the __Oracle__ > __2.Activity__ > __Oracle_SuspiciousActivity__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/oracle/activity/jobgroup31.png)

The default analysis tasks are:

- Oracle Suspicious Activity Details – Analyzes the audited events and collects those that represent suspicious activity by the database users. Creates the SA_Oracle_SuspiciousActivity_Details table accessible under the job’s Results node.
- Suspicious Activity Instance Summary – Summarizes all suspicious activity found and groups it by instance. Creates the SA_Oracle_SuspiciousActivity_Summary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle_SuspiciousActivity Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Suspicious Activity | This report highlights the number of suspicious events found per instance as well as provides the details about those events | None | This report is comprised of three elements:   - Bar Chart – Displays suspicious activity by instance - Table –  Provides details on suspicious activity by instance - Table – Provides details on suspicious activity details |

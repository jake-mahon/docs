# Oracle\_Logons Job

The Oracle\_Logons Job is designed to provide insight into failed and successful Oracle database login activity across all targeted Oracle database servers.

## Analysis Tasks for the Oracle\_Logons Job

Navigate to the __Oracle__ > __2.Activity__ > __Oracle\_Logons__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/oracle/activity/jobgroup27.webp)

The default analysis tasks are:

- Oracle Logons – Reports on all Oracle logon events. Creates the SA\_Oracle\_Logons\_Details table accessible under the job’s Results node.
- Logons Summary – Provides a summary of logons by Instance. Creates the SA\_Oracle\_Logons\_Summary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis tasks, the Oracle\_Logons Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Logon Summary | This report outlines successful and failed logins over the last 30 days | None | This report is comprised of three elements:   - Bar Chart – Displays top instances by failed logons - Table – Provides details on logon summary - Table – Provides details on logon details |

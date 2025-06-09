# SP\_SensitiveDataActivity Job

This job highlights user activity involving sensitive data and provides details on who is interacting with your environments sensitive content.

## Analysis Tasks for the SP\_SensitiveDataActivity Job

Navigate to the __Jobs__ > __SharePoint__ > __7.Activity__ > __Forensics__ > __SP\_SensitiveDataActivity__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SP_SensitiveDataActivity Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/filesystem/activity/suspiciousactivity/sensitivedataactivityanalysis.png)

The default analysis tasks are:

- Sensitive Data Activity – Creates the SA\_SP\_SensitiveDataActivity table accessible under the job’s Results node
- Sensitive Data Activity User Count – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the SQL\_SensitiveDataActivity Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Sensitive Data Activity | This Report shows user activity on sensitive data. | None | This report is comprised of two elements:   - Bar Chart – Displays sensitive data activity - Table – Provides details on sensitive data activity |

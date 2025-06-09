# Oracle\_SensitiveData Job

The Oracle\_SensitveData Job is designed to provide information on all sensitive data that was discovered in targeted Oracle database servers based on selected scan criteria.

## Analysis Tasks for the Oracle\_SensitiveData Job

Navigate to the __Oracle > 5.Sensitve Data > Oracle\_SensitveData > Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/oracle/sensitivedata/jobgroup44.png)

The default analysis tasks are:

- Determine sensitive data details – Creates the SA\_Oracle\_SensitiveData\_Details table accessible under the job’s Results node
- Instance Summary – Creates the SA\_Oracle\_SensitiveData\_InstanceSummary table accessible under the job’s Results node
- Enterprise Summary – Creates the SA\_Oracle\_SensitiveData\_EnterpriseSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the __Oracle\_SensitveData Job__ produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Enterprise Summary | This report shows a summary of the criteria matches found in the Enterprise | None | This report is comprised of two elements:   - Pie Chart – Displays exceptions by match count - Table – Provides information on exception details |
| Sensitive Data Overview | This report highlights objects which contain sensitive data criteria | None | This report is comprised of three elements:   - Bar Chart – Displays top instances by sensitive data hits - Table – Provides details on instances with sensitive data - Table – Provides information on sensitive data details |

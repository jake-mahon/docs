# MySQL\_SensitiveData Job

The MySQL\_SensitiveData Job is designed to provide information on all the sensitive data that was discovered in the targeted MySQL servers based on the selected scan criteria.

## Analysis Tasks for the MySQL\_SensitiveData Job

Navigate to the __Jobs > MySQL > Sensitive Data > MySQL\_SensitiveData > Configure__ node and select Analysis to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/mysql/sensitivedata/analysismysqlsensitivedata.png)

The default analysis tasks are:

- Sensitive Data Details - Returns details around sensitive data in MySQL
- Database Summary - Summarizes sensitive data in MySQL by database
- Enterprise Summary - Summarizes MySQL sensitive data for the organization

In addition to the tables and views created the analysis task, the MySQL\_SensitiveData Job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Enterprise Summary | This report shows a summary of the criteria matches found in the Enterprise. |  | This report is comprised of two elements:   - Bar Chart - Displays exceptions by match count - Table - Displays exception details |
| Sensitive Data Overview | This report highlights objects which contain sensitive data criteria. | Sensitive Data | This report is comprised of three elements:   - Bar Chart - Displays top databases by Sensitive Data Hits - Table - Provides details on top databases by sensitive data - Table - Provides details on sensitive data |

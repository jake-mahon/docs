# Sensitive Data > MongoDB\_SensitiveData Job

The Sensitive Data Job Group is designed to provide insight into where sensitive data exists and who has access to it across all the targeted MongoDB databases.

![Sensitive Data Job Group](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/postgresql/sensitivedata/sensitivedatajobgroup.png)

The job in the Sensitive Data Job Group is:

- MongoDB\_SensitiveData Job - Provides details on all the sensitive data that was discovered in the targeted MongoDB databases based on the selected scan criteria

### Analysis Tasks for the MongoDB\_SensitiveData Job

Navigate to the MongoDB > __Databases__ > __Sensitive Data__> MongoDB\_SensitiveData > Configure node and select Analysis to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/mongodb/analysismongodbsensitivedatajob.png)

The default analysis tasks are:

- Sensitive Data Details — Returns details around sensitive data in MongoDB
- Database Summary — Summarizes MongoDB sensitive data by database
- Enterprise Summary — Summarizes MongoDB sensitive data across the enterprise

### Reports for the for the MongoDB\_SensitiveData Job

In addition to the tables and views created the analysis task, the MongoDB\_SensitiveData Job produces the following preconfigured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Enterprise Summary | This report shows a summary of the criteria matches found in the Enterprise. | None | This report is comprised of two elements:   - Bar Chart - Displays exceptions by Match Count - Table - Displays exception details |
| Sensitive Data Overview | This report highlights objects which contain sensitive data criteria. | Sensitive Data | This report is comprised of three elements:   - Bar Chart - Displays top databases by Sensitive Data Hits - Table - Provides details on top databases by Sensitive Data Hits - Table - Provides details |

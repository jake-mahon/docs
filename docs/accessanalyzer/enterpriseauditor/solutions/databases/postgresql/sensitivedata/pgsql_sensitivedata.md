# PgSQL\_SensitiveData Job

The PsSQL\_SensitiveData Job is designed to provide information on all the sensitive data that was discovered in the targeted PostgreSQL servers based on the selected scan criteria.

## Analysis Tasks for the PgSQL\_SensitiveData Job

Navigate to the __Jobs > Databases > PostgreSQL > Sensitive Data > PgSQL\_SensitiveData > Configure__ node and select Analysis to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![pgsqlsensitivedataanalysis](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/postgresql/sensitivedata/pgsqlsensitivedataanalysis.png)

The default analysis tasks are:

- Sensitive Data Details - Returns details around sensitive data in PostgreSQL
- Database Summary - Summarizes sensitive data in PostgreSQL by database
- Enterprise Summary - Summarizes PostgreSQL sensitive data for the organization

In addition to the tables and views created the analysis task, the PgSQL\_SensitiveData Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Enterprise Summary | This report shows a summary of the criteria matches found in the Enterprise | None | This report is comprised of two elements:   - Bar Chart – Displays exceptions by match count - Table – Provides exception details |
| Sensitive Data Overview | This report highlights objects which contain sensitive data crtieria. | Sensitive Data | This report is comprised of three elements:   - Bar Chart - Displays top databases by Sensitive Data Hits - Table - Provides information on databases with sensitive data - Table - Provides details on sensitive data |

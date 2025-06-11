# SQL\_ControlServer Job

The SQL\_ControlServer Job provides information on control server permissions. Users with control server permissions can command full control of a SQL and Azure SQL server instance.

## Analysis Tasks for the SQL\_ControlServer Job

Navigate to the __Databases__ > SQL > 3.Permissions > SQL\_ControlServer > Configure node and select Analysis to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task(s). The analysis task(s) are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/sql/permissions/sqljobgroup37.webp)

The default analysis tasks are:

- Determine Control Server Rights – Creates the SA\_SQL\_ControlServer\_Details table accessible under the job’s Results node
- Control Server Domain Users – Creates the SA\_SQLServer\_ControlServer\_DomainUsers table accessible under the job’s Results node
- Control Server Instance Summary – Creates the SA\_SQLServer\_ControlServer\_InstanceSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the SQL\_ControlServer Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Control Server Permissions | This report highlights control server permissions, and summarizes them by instance and by domain user. | None | This report is comprised of three elements:   - Bar Chart – Displays top instances by control server permissions - Table – Provides details on instances by control server permission count - Table – Provides details on control server permissions |

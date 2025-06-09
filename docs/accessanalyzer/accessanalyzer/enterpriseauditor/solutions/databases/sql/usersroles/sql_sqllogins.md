# SQL\_SQLLogins Job

The SQL\_SQLLogins Job provides information on successful and failed SQL server logins across all targeted SQL or Azure SQL servers.

## Analysis Tasks for the SQL\_SQLLogins Job

Navigate to the __Databases__ > SQL > 3.Users and Roles > SQL\_SQLLogins > Configure node and select Analysis to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task(s). The analysis task(s) are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/sql/usersroles/sqljobgroup28.png)

The default analysis tasks are:

- Calculate user login details – Creates the SA\_SQL\_UserLogin\_Details table accessible under the job’s Results node
- User Logins Instance Summary – Creates the SA\_SQLServer\_UserLogins\_Summary table accessible under the job's Results node

In addition to the tables and views created by the analysis task, the SQL\_SQLLogins Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| SQL Logins | This report lists user login information. | None | This report is comprised of three elements:   - Bar Chart– Displays number of logins by instance - Table – Provides details on login exceptions by instance - Table – Provides details on SQL logins |

# SQL\_Logons Job

The SQL\_Logons Job provides insight into failed and successful SQL and Azure SQL server logon activity across all targeted SQL and Azure SQL servers.

## Analysis Tasks for the SQL\_Logons Job

Navigate to the __Databases__ > SQL > 2.Activity > SQL\_Logons > Configure node and select Analysis to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task(s). The analysis task(s) are preconfigured for this job.

![Analysis Selection](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/sql/activity/sqljobgroup32.png)

The default analysis tasks are:

- Logon Details – Creates the SA\_SQLServer\_Logons\_Details table accessible under the job’s Results node
- Logons Summary – Creates the SA\_SQL\_Logons\_Summary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL\_Logons Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Server Logon Details | This report outlines successful and failed logins over the last 30 days | None | This report is comprised of three elements:   - Stacked Bar Chart – Displays logon summary - Table – Provides details on logon summary - Table – Provides details on logon details |

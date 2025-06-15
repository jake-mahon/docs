# SQL_SysAdmins Job

The SQL_SysAdmins Job provides insight into users who have SQL server administration roles across all targeted SQL or Azure SQL servers.

## Analysis Tasks for the SQL_SysAdmins Job

Navigate to the __Databases__ > SQL > 3.Users and Roles > SQL_SysAdmins > Configure node and select Analysis to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task(s). The analysis task(s) are preconfigured for this job.

![Analysis Selection](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/sql/usersroles/sqljobgroup29.png)

The default analysis tasks are:

- Calculate admin details – Creates the SA_SQL_SysAdmins_Details table accessible under the job’s Results node
- Summarize SysAdmins – Creates the SA_SQL_SysAdmins_InstanceSummary table accessible under the job’s Results node
- Sys Admin Domain Users - Creates the SA_SQL_SysAdmins_DomainUsers table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the __SQL_SysAdmins Job__ produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Admin Summary | This report highlights all principals with the 'sysadmin' role. | None | This report is comprised of three elements:   - Bar Chart – Displays top instances by admin count - Table – Provides top instances by admin count - Table – Provides details on admin details - Table – Provides details on domain user admin details |

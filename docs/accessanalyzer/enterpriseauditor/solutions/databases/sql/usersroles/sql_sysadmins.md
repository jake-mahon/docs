# SQL\_SysAdmins Job

The SQL\_SysAdmins Job provides insight into users who have SQL server administration roles across all targeted SQL or Azure SQL servers.

## Analysis Tasks for the SQL\_SysAdmins Job

Navigate to the __Databases__ > SQL > 3.Users and Roles > SQL\_SysAdmins > Configure node and select Analysis to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task(s). The analysis task(s) are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/sql/usersroles/sqljobgroup29.png)

The default analysis tasks are:

- Calculate admin details – Creates the SA\_SQL\_SysAdmins\_Details table accessible under the job’s Results node
- Summarize SysAdmins – Creates the SA\_SQL\_SysAdmins\_InstanceSummary table accessible under the job’s Results node
- Sys Admin Domain Users - Creates the SA\_SQL\_SysAdmins\_DomainUsers table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the __SQL\_SysAdmins Job__ produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Admin Summary | This report highlights all principals with the 'sysadmin' role. | None | This report is comprised of three elements:   - Bar Chart – Displays top instances by admin count - Table – Provides top instances by admin count - Table – Provides details on admin details - Table – Provides details on domain user admin details |

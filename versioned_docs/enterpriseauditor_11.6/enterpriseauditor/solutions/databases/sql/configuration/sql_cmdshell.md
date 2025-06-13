# SQL\_CMDShell Job

The SQL\_CMDShell Job reports on whether the ```xp_cmdshell``` stored procedure is enabled or disabled. Since ```xp_cmdshell``` allows users to execute operating system commands when connected to the SQL or the Azure SQL server, it can be used to launch malicious attacks. Microsoft recommends that the ```xp_cmdshell``` stored procedure be disabled.

## Analysis Tasks for the SQL\_CMDShell Job

Navigate to the __Databases__ > SQL > 4.Configuration > SQL\_CMDShell > Configure node and select Analysis to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task(s). The analysis task(s) are preconfigured for this job.

![Analysis Selection](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/databases/sql/configuration/sqljobgroup45.png)

The default analysis task is:

- XP CMD Shell – Creates the SA\_SQL\_CMDShell\_Status table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the SQL\_CMDShell Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| xp\_cmdshell Settings | Because malicious users sometimes attempt to elevate their privileges by using xp\_cmdshell, xp\_cmdshell is disabled by default. Use sp\_configure or Policy Based Management to disable it on any instances which have it enabled. | None | This report is comprised of two elements:   - Pie Chart – Displays instance summary - Table– Displays configuration details |

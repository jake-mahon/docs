---
sidebar_position: 5425
title: SQL_CMDShell Job
---

# SQL\_CMDShell Job

The SQL\_CMDShell Job reports on whether the `xp_cmdshell` stored procedure is enabled or disabled. Since `xp_cmdshell` allows users to execute operating system commands when connected to the SQL or the Azure SQL server, it can be used to launch malicious attacks. Microsoft recommends that the `xp_cmdshell` stored procedure be disabled.

## Analysis Tasks for the SQL\_CMDShell Job

Navigate to the **Databases** > SQL > 4.Configuration > SQL\_CMDShell > Configure node and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/SQLJobGroup45.png "Analysis Selection")

The default analysis task is:

* XP CMD Shell – Creates the SA\_SQL\_CMDShell\_Status table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the SQL\_CMDShell Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| xp\_cmdshell Settings | Because malicious users sometimes attempt to elevate their privileges by using xp\_cmdshell, xp\_cmdshell is disabled by default. Use sp\_configure or Policy Based Management to disable it on any instances which have it enabled. | None | This report is comprised of two elements:   * Pie Chart – Displays instance summary * Table– Displays configuration details |
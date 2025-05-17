---
sidebar_position: 5448
title: SQL_ServerPrincipals Job
---

# SQL\_ServerPrincipals Job

The SQL\_ServerPrincipals Job provides information on server principals at the instance level across targeted SQL or Azure SQL servers.

## Analysis Tasks for the SQL\_ServerPrincipals Job

Navigate to the **Databases** > SQL > 3.Users and Roles > SQL\_ServerPrincipals > Configure node and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task(s). The analysis task(s) are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/SQLJobGroup27.png "Analysis Selection")

The default analysis tasks are:

* Determine user details – Creates the SA\_SQL\_ServerPrincipals\_Details table accessible under the job’s Results node
* Summarize by Instance – Creates the SA\_SQL\_ServerPrincipals\_InstanceSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the SQL\_ServerPrincipals Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Server Principals | This report determines all server principals on a per-instance basis. Users are considered stale if they have not authenticated to the domain in 60 days. This threshold can be configured in the 3-AD\_Exceptions job in the .Active Directory Inventory job group. | None | This report is comprised of three elements:   * Bar Chart – Displays top instances * Table – Provides details on principal count by instance * Table – Provides details on principal details |
---
sidebar_position: 5526
title: PgSQL_TablePrivileges Job
---

# PgSQL\_TablePrivileges Job

The PgSQL\_TablePrivileges job is designed to collect PostgreSQL table privileges from all the targeted servers.

## Queries for the PgSQL\_TablePrivileges Job

The PgSQL\_TablePrivileges Job uses the SQL Data Collector for queries.

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/PostgreSQL/TablePrivileges_Query.png "Query Selection")

The query is:

* Table Privileges - Returns table privileges from all the targeted servers.

## Analysis Task for the PgSQL\_TablePrivileges Job

Navigate to the **Databases** > **0.Collection** > **PostgreSQL** > **PgSQL\_TablePrivileges** > **Configure** node and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/PostgreSQL/TablePrivileges_Analysis.png "Analysis Selection")

The default analysis task is:

* AIC Import - PostgreSQL Permissions – Imports PostgreSQL permissions to the AIC.
* AIC Import - Databases – Imports PostgreSQL database and schema nodes to the AIC.
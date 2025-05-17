---
sidebar_position: 5481
title: Redshift_TablePrivileges Job
---

# Redshift\_TablePrivileges Job

The Redshift\_TablePrivileges job is designed to collect Redshift table privileges from all the targeted servers.

## Queries for the Redshift\_TablePrivileges Job

The Redshift\_TablePrivileges Job uses the SQL Data Collector for queries.

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Redshift/TablePrivilegesQuery.png "Query Selection")

The query is:

* Table Privileges - Returns table privileges from all the targeted servers.

## Analysis Task for the Redshift\_TablePrivileges Job

Navigate to the **Databases** > **0.Collection** > **Redshift** > **Redshift\_TablePrivileges** > **Configure** node and select Analysis to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Redshift/TablePrivilegesAnalysis.png "Analysis Selection")

The default analysis task is:

* AIC Import - Redshift Permissions – Imports Redshift table privileges to the AIC.
* AIC Import - Databases – Imports Redshift database and schema nodes to the AIC.
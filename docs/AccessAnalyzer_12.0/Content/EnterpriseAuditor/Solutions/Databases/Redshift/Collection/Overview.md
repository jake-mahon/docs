---
sidebar_position: 5478
title: 0.Collection Job Group
---

# 0.Collection Job Group

The Redshift Solution Collection group collects high level summary information from targeted Redshift Servers.  Other jobs in the Redshift Solution Set use this information for further analysis and for producing respective reports.

![](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Redshift/0.Collection.png)

The jobs in the 0.Collection Job Group are:

* [Redshift\_Configuration Job](Redshift_Configuration "Redshift_Configuration Job") — Returns additional configuration settings from Redshift servers
* [Redshift\_SensitiveDataScan Job](Redshift_SensitiveDataScan#MongoDB_SensitiveDataScan_Job "Redshift_SensitiveDataScan") — Discovers sensitive data in PostgreSQL databases based on pre-defined or user-defined search criteria
* [Redshift\_TablePrivileges Job](Redshift_TablePrivileges "Redshift_TablePrivileges Job") - Designed to collect Redshift table privileges from all the targeted servers.
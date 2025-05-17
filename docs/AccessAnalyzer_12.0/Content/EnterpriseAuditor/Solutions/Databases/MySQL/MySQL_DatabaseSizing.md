---
sidebar_position: 5413
title: Configuration > MySQL_DatabaseSizing Job
---

# Configuration > MySQL\_DatabaseSizing Job

The Configuration Job Group is designed to provide insight into MySQL server configuration settings.

![Configuration Job Group](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/MySQL/ConfigurationJobGroup.png "Configuration Job Group")

The job in the Configuration Job Group is:

* MySQL\_DatabaseSizing Job - Provides details on database table sizes and overall database size

### Analysis Tasks for the MySQL\_DatabaseSizing Job

Navigate to the **Jobs > Databases > MySQL > Configuration > MySQL\_DatabaseSizing > Configure** node and select Analysis to view the Analysis Tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/MySQL/AnalysisMySQLDatabaseSizing.png "Analysis Selection")

The default analysis tasks are:

* Database Details - Returns size details for MySQL databases
* Database Summary - Summarizes database sizes by host

In addition to the tables and views created the analysis task, the MySQL\_DatabaseSizing Job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Database Sizing | This report provides details on database tables and sizing. |  | This report is comprised of three elements:   * Bar Chart - Displays top databases by size (MB) * Bar Chart - Displays database size by host (GB) * Table - Displays details on database sizing |
---
sidebar_position: 5409
title: Configuration > Redshift_DatabaseSizing Job
---

# Configuration > Redshift\_DatabaseSizing Job

This group provides insight into details about the Redshift environment and potential vulnerabilities related to instance configuration settings.

![](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Redshift/ConfigurationJobGroup.png)

The job(s) in the Configuration Job Group are:

* Redshift\_DatabaseSizing Job — Provides details about Redshift databases and overall database size.

### Analysis Tasks for the Redshift\_DatabaseSizing Job

Navigate to the **Jobs** > **Databases**> **Redshift** >  **Configuration** >  **Redshift\_DatabaseSizing** > **Configure** node and select **Analysis** to view the Analysis Tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Redshift/AnalysisRedshiftConfigurationJob.png)

The default analysis tasks are:

* Database Sizing Details — Provides details about Redshift databases and sizing
* Database Sizing Summary — Summarizes Redshift database sizing by host

## Report for the Redshift\_Database Sizing Job

In addition to the tables and views created the analysis task, the Redshift\_DatabaseSizing Job produces the following preconfigured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Database Sizing | This report highlights the size of databases in Redshift. | None | This report is comprised of three elements:   * Bar Chart – Displays top databases by size (MB) * Bar Chart – Displays sizes by host (GB) * Table – Provides database details |
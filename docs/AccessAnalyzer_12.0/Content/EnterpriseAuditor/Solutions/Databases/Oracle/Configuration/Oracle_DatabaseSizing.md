---
sidebar_position: 5493
title: Oracle_DatabaseSizing Job
---

# Oracle\_DatabaseSizing Job

The Oracle\_DatabaseSizing Job provides details on tablespace file sizes and overall tablespace sizes.

## Analysis Tasks for the Oracle\_DatabaseSizing Job

Navigate to the **Jobs >  Databases > Oracle > 4.Configuration > Oracle\_DatabaseSizing Job >Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Oracle/AnalysisDBSizing.png "Analysis Selection")

The default analysis tasks are:

* Database Sizing Details – Provides details on database files and sizes
* Database Sizing Summary – Summarizes file size by instance

In addition to the tables created by the analysis tasks, the **Oracle\_DatabaseSizing Job** produces the following preconfigured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Database Sizing | This report highlights the size of tablespace files in Oracle. | None | This report is comprised of three elements:   * Bar Chart – Provides information on top tablespaces by size * Bar Chart – Provides information on size by host (GB) * Table – Provides details on database sizes |
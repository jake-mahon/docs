---
sidebar_position: 5491
title: Oracle_DatabaseLinks Job
---

# Oracle\_DatabaseLinks Job

The Oracle\_DatabaseLinks Job contains a report that provides information on Database Links where the listed Oracle Server is able to execute remote commands.

## Analysis Tasks for the Oracle\_DatabaseLinks Job

Navigate to the **Jobs >  Databases > Oracle > 4.Configuration > Oracle\_DatabaseLinks Job >Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/Oracle/AnalysisDBLinks.png "Analysis Selection")

The default analysis tasks are:

* Database Link Details – Provides details about Oracle Database links
* Oracle Database Link Summary – Summarizes Oracle Database links by instance

In addition to the tables created by the analysis tasks, the **Oracle\_DatabaseLinks Job** produces the following preconfigured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Database Links | This report highlights Database Links where the listed Oracle Server is able to execute remote commands. | None | This report is comprised of three elements:   * Bar Chart – Provides information on top five database links by instance * Bar Chart – Provides information on database links by instance (GB) * Table – Provides details on database links |
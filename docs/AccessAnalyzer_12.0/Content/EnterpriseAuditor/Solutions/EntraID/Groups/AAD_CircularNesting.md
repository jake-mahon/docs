---
sidebar_position: 5175
title: AAD_CircularNesting Job
---

# AAD\_CircularNesting Job

The AAD\_CircularNesting Job identifies circularly nested groups within Microsoft Entra ID which can pose administrative and operational challenges with identifying effective access to resources.

## Analysis Tasks for the AAD\_CircularNesting Job

Navigate to the **Jobs** > **Entra ID** > **1.Groups** > **AAD\_CircularNesting** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis tasks for AAD_CircularNesting Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/EntraID/Groups/CircularNestingAnalysis.png "Analysis tasks for AAD_CircularNesting Job")

The default analysis tasks are:

* Provide detail on instances of circular nesting – Creates the SA\_AAD\_CircularNesting\_Details table accessible under the job’s Results node
* Summarize circular nesting by domain – Creates the SA\_AAD\_Circularnesting\_DomainSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD\_CircularNesting Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Circular Nesting | This report identifies instances of circular nesting within your environment. | None | This report is comprised of three elements:   * Bar Chart– Displays circular nesting by domain * Table – Provides details on circular nesting * Table – Provides details on circular nesting by domain |
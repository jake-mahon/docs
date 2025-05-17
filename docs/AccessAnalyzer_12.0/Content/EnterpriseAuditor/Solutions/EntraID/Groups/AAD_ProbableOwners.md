---
sidebar_position: 5179
title: AAD_ProbableOwners Job
---

# AAD\_ProbableOwners Job

The AAD\_ProbableOwners Job determines potential owners for Microsoft Entra ID Groups which can be used to perform automated membership reviews and enable self-service group management and membership requests.

## Analysis Tasks for the AAD\_ProbableOwners Job

Navigate to the **Jobs** > **Entra ID** > **1.Groups** > **AAD\_ProbableOwners** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis tasks for AAD_ProbableOwners Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/EntraID/Groups/ProbableOwnersAnalysis.png "Analysis tasks for AAD_ProbableOwners Job")

The default analysis tasks are:

* Calculates group probable owners – Creates the AAD\_ProbableOwners\_Details table accessible under the job’s Results node
* Summarizes group probable owners by domain – Creates the AAD\_ProbableOwners\_DomainSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AAD\_ProbableOwners Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Probable Owners | This report identifies the most probable manager based on effective member attributes. | None | This report is comprised of three elements:   * Stacked Bar Chart – Displays top domains by blank manager field * Table – Provides probable owner details * Tables – Provides details on top domains by blank manager field |
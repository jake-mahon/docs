---
sidebar_position: 5316
title: AD_CircularNesting Job
---

# AD\_CircularNesting Job

The AD\_CircularNesting Job identifies circularly nested groups within Active Directory which can pose administrative and operational challenges with identifying effective access to resources.

## Analysis Tasks for the AD\_CircularNesting Job

Navigate to the **Active Directory** > **1.Groups** > **AD\_CircularNesting** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_CircularNesting Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Groups/CircularNestingAnalysis.png "Analysis Tasks for the AD_CircularNesting Job")

The default analysis tasks are :

* Circular Nesting Details – Creates the SA\_AD\_CircularNesting\_Details table accessible under the job’s Results node
* Domain Summary – Creates the SA\_AD\_CircularNesting\_DomainSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD\_CircularNesting Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Circular Nesting | This report identifies instances of circular nesting within the environment. | None | This report is comprised of three elements:   * Bar Chart – Displays circular nesting by domain  * Table – Provides details on circular nesting  * Table – Provides details on circular nesting by domain |
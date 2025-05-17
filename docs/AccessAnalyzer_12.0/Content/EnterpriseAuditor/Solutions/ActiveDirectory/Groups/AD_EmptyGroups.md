---
sidebar_position: 5310
title: AD_EmptyGroups Job
---

# AD\_EmptyGroups Job

The AD\_EmptyGroups Job identifies empty and single member groups which are suitable candidates for consolidation or cleanup.

## Analysis Tasks for the AD\_EmptyGroups Job

Navigate to the **Active Directory** > **1.Groups** > **AD\_EmptyGroups** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_EmptyGroups Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Groups/EmptyGroupsAnalysis.png "Analysis Tasks for the AD_EmptyGroups Job")

The default analysis tasks are:

* Empty Groups – Creates the SA\_AD\_EmptyGroups\_Empty table accessible under the job’s Results node
* Single User Groups – Creates the SA\_AD\_EmptyGroups\_SingleUser table accessible under the job’s Results node
* Summarize Empty Groups – Creates the SA\_AD\_EmptyGroups\_EmptySummary table accessible under the job’s Results node
* Summarize Single User Groups – Creates the SA\_AD\_EmptyGroups\_SingleUserSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD\_EmptyGroups Job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Empty Groups | This report identifies all groups without any members. | None | This report is comprised of three elements:   * Bar Chart – Displays top domains by empty group counts  * Table – Provides details on empty groups  * Table – Provides details on empty groups by domain |
| Single User Groups | This report identifies groups which only contain a single user. | None | This report is comprised of three elements:   * Bar Chart – Displays top domains by single user groups  * Table – Provides details on groups  * Table – Provides details on single user groups by domain |
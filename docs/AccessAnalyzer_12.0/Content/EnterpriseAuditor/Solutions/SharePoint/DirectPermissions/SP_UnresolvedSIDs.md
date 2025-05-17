---
sidebar_position: 5149
title: SP_UnresolvedSIDs Job
---

# SP\_UnresolvedSIDs Job

This job identifies Unresolved SIDs that have permissions to any SharePoint resources. Unresolved SIDs can be safely cleaned up without affecting user access.

## Analysis Tasks for the SP\_UnresolvedSIDs Job

Navigate to the **Jobs** > **SharePoint** > **1.Direct Permissions** > **SP\_UnresolvedSIDs** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SP_UnresolvedSIDs Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/DirectPermissions/UnresolvedSIDsAnalysis.png "Analysis Tasks for the SP_UnresolvedSIDs Job")

They need to remain in the default order:

* 1. Create Function – Creates an interim processing table in the database for use by downstream analysis and report generation
* 2. Find Unresolved SID ACLs – Creates the SA\_SP\_UnresolvedSIDs\_DirectPermissions table accessible under the job’s Results node
* 3. Find Affected Resource Count per SID – Creates the SA\_SP\_UnresolvedSIDs\_ResourceCount table accessible under the job’s Results node
* 4. Rank Resources by SID Count – Creates the SA\_SP\_UnresolvedSIDs\_DirectPermissions table accessible under the job’s Results node

In addition to the tables created by the analysis tasks which display direct permissions for unresolved SIDs, the SP\_UnresolvedSIDs Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Unresolved SID Permissions | Unresolved SIDs can be safely cleaned up without affecting user access. | None | This report is comprised of three elements:   * Bar Chart – Displays top 5 unresolved SIDs by affected resources * Table – Provides details on resources with unresolved SIDs applied * Table – Provides details on unresolved SIDs by affected resources |
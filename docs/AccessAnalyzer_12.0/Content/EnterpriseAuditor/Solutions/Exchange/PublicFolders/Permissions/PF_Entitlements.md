---
sidebar_position: 5589
title: PF_Entitlements Job
---

# PF\_Entitlements Job

The PF\_Entitlements job is comprised of analyses and reports that provide visibility into permissions applied to each public folder within the Exchange environment.

## Analysis Tasks for the PF\_Entitlements Job

View the analysis tasks by navigating to the **Exchange** > **5. Public Folders** > **Permissions** > **PF\_Entitlements** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the PF_EntitlementScans Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/PublicFolders/Permissions/EntitlementsAnalysis.png "Analysis Tasks for the PF_EntitlementScans Job")

The following analysis tasks are selected by default:

* 00.Default + Anonymous ACLs – Creates the SA\_PF\_Entitlements\_DefaultAnonymous table accessible under the job’s Results node
* 01.No Explicit Permissions – Creates an interim processing table in the database for use by downstream analysis and report generation
* 02.Stale User Entitlements – Creates the SA\_PF\_Entitlements\_StaleUserEntitlements table, accessible under the job’s Results node
* 03.Unresolved SID Summary – Creates the SA\_PF\_Entitlements\_UnresolvedSIDSummary table, accessible under the job’s Results node
* 04.Unresolved SIDs – Creates the SA\_PF\_Entitlements\_UnresolvedSIDDetails table, accessible under the job’s Results node
* AIC Import - PF Entitlements – Imports public folder entitlements to the Access Information Center

In addition to the tables and views created by the analysis tasks, the PF\_Entitlements job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Default and Anonymous Entitlement | Indicates entitlements that are explicitly assigned to the default or anonymous accounts across all public folders. | None | This report is comprised of two elements:   * Stacked Bar Chart – Displays folder trees by default and anonymous entitlements * Table – Provides details on folder trees by default and anonymous entitlements |
| No Explicit Permissions  (Leaf Folders with No Explicit Perms) | Provides all leaf Public Folders that only have Default, Anonymous, or unresolved SIDs as the explicit permissions, and have no child folders. These can potentially be deleted since they may not be accessed by active users. | None | This report is comprised of three elements:   * Bar Chart – Displays percent of enterprises with issues * Table – Provides details on percent of enterprises with issues * Table – Provides details on folders with no explicit permissions |
| Unresolved SIDs  (Unresolved SID Entitlements) | This report identifies any places where unresolved SIDs have been given entitlements. | None | This report is comprised of two elements:   * Bar Chart – Displays top level trees by unresolved entitlements * Table – Provides details on top level trees by unresolved entitlements |
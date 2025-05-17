---
sidebar_position: 5057
title: AD_ContainerPermissions Job
---

# AD\_ContainerPermissions Job

The AD\_ContainerPermissions Job is responsible for reporting on all Active Directory permissions applied to container objects within the targeted domains.

## Analysis Tasks for the AD\_ContainerPermissions Job

Navigate to the **Active Directory Permissions Analyzer** > **7.Containers** > **AD\_ContainerPermissions** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_ContainerPermissions Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Containers/ContainerPermissionsAnalysis.png "Analysis Tasks for the AD_ContainerPermissions Job")

The default analysis tasks are:

* List container object permissions – Creates the SA\_AD\_ContainerPermissions\_Details table accessible under the job’s Results node
* Summarize container object permissions – Creates the SA\_AD\_ContainerPermissions\_DomainSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD\_ContainerPermissions Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Container Permissions | This report highlights instances where permissions are applied to Active Directory container objects. This information is summarized at the domain and enterprise levels. | None | This report is comprised of three elements:   * Bar Chart – Displays container permissions by domain * Pie Chart – Provides details on enterprise container permissions by type * Table – Provides details on container permissions |
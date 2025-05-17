---
sidebar_position: 5036
title: AD_ContainerRights Job
---

# AD\_ContainerRights Job

The AD\_ContainerRights Job provides data collection to identify permissions applied to Containers in Active Directory.

## Query for the AD\_ContainerRights Job

The AD\_ContainerRights Job uses the ADPermissions Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query for the AD_ContainerRights Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Collection/ContainerRightsQuery.png "Query for the AD_ContainerRights Job")

* Container Access Permissions – Returns containers under the given scope

  * See the [ADPermissions Data Collector](../../../Admin/DataCollector/ADPermissions/Overview "ADPermissions Data Collector") topic for additional information

## Analysis Tasks for the AD\_ContainerRights Job

Navigate to the **Active Directory Permissions Analyzer** > **0.Collection** > **AD\_ContainerRights** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_ContainerRights Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Collection/ContainerRightsAnalysis.png "Analysis Tasks for the AD_ContainerRights Job")

The default analysis tasks are:

* Container Rights View – Creates the SA\_AD\_ContainerRights\_Details\_PermissionsView visible under the job’s Results node
* AIC container permissions import – Creates an interim processing table in the database for use by downstream analysis and report generation
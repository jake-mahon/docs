---
sidebar_position: 5038
title: AD_GroupRights Job
---

# AD\_GroupRights Job

The AD\_GroupRights Job provides data collection to identify permissions applied to groups in Active Directory.

## Query for the AD\_GroupRights Job

The AD\_GroupRights Job uses the ADPermissions Data Collector for the following query:

**CAUTION:**  Do not modify the query. The query is preconfigured for this job.

![Query for the AD_GroupRights Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Collection/GroupRightsQuery.png "Query for the AD_GroupRights Job")

* Group Access Permissions – Returns group access permissions

  * See the [ADPermissions Data Collector](../../../Admin/DataCollector/ADPermissions/Overview "ADPermissions Data Collector") topic for additional information

## Analysis Tasks for the AD\_GroupRights Job

Navigate to the **Active Directory Permissions Analyzer** > **0.Collection** > **AD\_GroupRights** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_GroupRights Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Collection/GroupRightsAnalysis.png "Analysis Tasks for the AD_GroupRights Job")

The default analysis tasks are:

* Group Rights View – Creates the SA\_AD\_GroupRights\_Details\_PermissionsView visible under the job’s Results node
* AIC group permissions import – Creates an interim processing table in the database for use by downstream analysis and report generation
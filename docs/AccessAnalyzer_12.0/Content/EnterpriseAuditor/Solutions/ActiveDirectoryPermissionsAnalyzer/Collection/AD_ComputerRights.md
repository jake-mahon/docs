---
sidebar_position: 5037
title: AD_ComputerRights Job
---

# AD\_ComputerRights Job

The AD\_ComputerRights Job provides data collection to identify permissions applied to computers in Active Directory.

## Query for the AD\_ComputerRights Job

The AD\_ComputerRights Job uses the ADPermissions Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query for the AD_ComputerRights Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Collection/ComputerRightsQuery.png "Query for the AD_ComputerRights Job")

* Computer Access Permissions – Returns computer access permission

  * See the [ADPermissions Data Collector](../../../Admin/DataCollector/ADPermissions/Overview "ADPermissions Data Collector") topic for additional information

## Analysis Tasks for the AD\_ComputerRights Job

Navigate to the **Active Directory Permissions Analyzer** > **0.Collection** > **AD\_ComputerRights** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Task for the AD_ComputerRights Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Collection/ComputerRightsAnalysis.png "Analysis Task for the AD_ComputerRights Job")

* Computer Rights View – Creates the SA\_AD\_ComputerRights\_Details\_PermissionsView visible under the job’s Results node
* AIC computer permissions import – Creates an interim processing table in the database for use by downstream analysis and report generation
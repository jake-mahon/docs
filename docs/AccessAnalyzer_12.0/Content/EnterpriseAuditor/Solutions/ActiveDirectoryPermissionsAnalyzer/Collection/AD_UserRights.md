---
sidebar_position: 5035
title: AD_UserRights Job
---

# AD\_UserRights Job

The AD\_UserRights Job provides data collection to identify permissions applied to users in Active Directory.

## Query for the AD\_UserRights Job

The AD\_UserRights Job uses the ADPermissions Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query for the AD_UserRights Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Collection/UserRightsQuery.png "Query for the AD_UserRights Job")

* User Access Permissions – Returns user permissions

  * See the [ADPermissions Data Collector](../../../Admin/DataCollector/ADPermissions/Overview "ADPermissions Data Collector") topic for additional information

## Analysis Tasks for the AD\_UserRights Job

Navigate to the **Active Directory Permissions Analyzer** > **0.Collection** > **AD\_UserRights** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_UserRights Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Collection/UserRightsAnalysis.png "Analysis Tasks for the AD_UserRights Job")

The default analysis tasks are:

* User Rights View – Creates the SA\_AD\_UserRights\_Details\_PermissionsView visible under the job’s Results node
* AIC user permissions import – Creates an interim processing table in the database for use by downstream analysis and report generation
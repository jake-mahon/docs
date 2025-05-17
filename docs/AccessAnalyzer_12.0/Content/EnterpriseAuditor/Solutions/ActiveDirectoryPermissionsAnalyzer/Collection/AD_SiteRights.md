---
sidebar_position: 5034
title: AD_SiteRights Job
---

# AD\_SiteRights Job

The AD\_SiteRights Job provides data collection to identify permissions applied to sites in Active Directory.

## Query for the AD\_SiteRights Job

The AD\_SiteRights Job uses the ADPermissions Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query for the AD_SiteRights Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Collection/SiteRightsQuery.png "Query for the AD_SiteRights Job")

* Site Access Permissions – Returns site permissions

  * See the [ADPermissions Data Collector](../../../Admin/DataCollector/ADPermissions/Overview "ADPermissions Data Collector") topic for additional information

## Analysis Tasks for the AD\_SiteRights Job

Navigate to the **Active Directory Permissions Analyzer** > **0.Collection** > **AD\_SiteRights** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_SiteRights Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Collection/UserRightsAnalysis.png "Analysis Tasks for the AD_SiteRights Job")

The default analysis tasks are:

* Site Rights View – Creates the SA\_AD\_SiteRights\_Details\_PermissionsView visible under the job’s Results node
* AIC Site Permissions Import – Creates an interim processing table in the database for use by downstream analysis and report generation
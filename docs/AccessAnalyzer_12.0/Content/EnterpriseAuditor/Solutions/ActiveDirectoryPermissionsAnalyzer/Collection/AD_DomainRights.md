---
sidebar_position: 5040
title: AD_DomainRights Job
---

# AD\_DomainRights Job

The AD\_DomainRights Job provides data collection to identify permissions applied to Domains in Active Directory.

## Query for the AD\_DomainRights Job

The AD\_DomainRights Job uses the ADPermissions Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query for the AD_DomainRights Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Collection/DomainRightsQuery.png "Query for the AD_DomainRights Job")

* Domain Access Permissions – Returns domain access permissions

  * See the [ADPermissions Data Collector](../../../Admin/DataCollector/ADPermissions/Overview "ADPermissions Data Collector") topic for additional information

## Analysis Tasks for the AD\_DomainRights Job

Navigate to the **Active Directory Permissions Analyzer** > **0.Collection** > **AD\_DomainRights** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_DomainRights Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Collection/DomainRightsAnalysis.png "Analysis Tasks for the AD_DomainRights Job")

The default analysis tasks are:

* Domain Rights View – Creates the SA\_AD\_DomainRights\_Details\_PermissionsView visible under the job’s Results node
* AIC domain permissions import – Creates an interim processing table in the database for use by downstream analysis and report generation
---
sidebar_position: 5039
title: AD_OURights Job
---

# AD\_OURights Job

The AD\_OURights Job provides data collection to identify permissions applied to organizational units in Active Directory.

## Query for the AD\_OURights Job

The AD\_OURights Job uses the ADPermissions Data Collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query for the AD_OURights Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Collection/OURightsQuery.png "Query for the AD_OURights Job")

* OU Access Permissions – Returns organizational unit permissions

  * See the [ADPermissions Data Collector](../../../Admin/DataCollector/ADPermissions/Overview "ADPermissions Data Collector") topic for additional information

## Analysis Tasks for the AD\_OURights Job

Navigate to the **Active Directory Permissions Analyzer** > **0.Collection** > **AD\_OURights** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_OURights Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Collection/OURightsAnalysis.png "Analysis Tasks for the AD_OURights Job")

The default analysis tasks are:

* OU Rights View – Creates the SA\_AD\_OURights\_Details\_PermissionsView visible under the job’s Results node
* AIC OU permissions import – Creates an interim processing table in the database for use by downstream analysis and report generation
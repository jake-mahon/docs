---
sidebar_position: 5032
title: AD_CertificateRights Job
---

# AD\_CertificateRights Job

The AD\_CertificateRights job collects all Active Directory permissions applied to certificate objects within the targeted domains.

## Query for the AD\_CertificateRights Job

The AD\_CertificateRights job uses the ADPermissions data collector for the following query:

**CAUTION:** Do not modify the query. The query is preconfigured for this job.

![Query for the AD_CertificateRights Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Collection/CertificateRightsQuery.png "Query for the AD_CertificateRights Job")

* Certificate Template Permissions – Collects certificate templates from Active Directory

  * See the [ADPermissions Data Collector](../../../Admin/DataCollector/ADPermissions/Overview "ADPermissions Data Collector") topic for additional information

## Analysis Tasks for the AD\_CertificateRights Job

Navigate to the **Active Directory Permissions Analyzer** > **0.Collection** > **AD\_CertificateRights** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_CertificateRights Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Collection/CertificateRightsAnalysis.png "Analysis Tasks for the AD_CertificateRights Job")

* Certificate Rights View – Creates the SA\_AD\_CertificateRights\_Details\_PermissionsView visible under the job’s Results node
* AIC Certificate Permissions Import – Creates an interim processing table in the database for use by downstream analysis and report generation
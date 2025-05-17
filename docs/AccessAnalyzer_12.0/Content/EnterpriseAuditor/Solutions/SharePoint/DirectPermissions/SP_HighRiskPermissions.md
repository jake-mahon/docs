---
sidebar_position: 5148
title: SP_HighRiskPermissions Job
---

# SP\_HighRiskPermissions Job

The SP\_HighRiskPermissions Job identifies where Authenticated Users, Everyone Except External Users, Anonymous Logon, or Domain users have been directly assigned permissions

## Analysis Tasks for the SP\_HighRiskPermissions Job

Navigate to the **Jobs** > **SharePoint** > **1.Direct Permissions** > **SP\_HighRiskPermissions** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SP_HighRiskPermissions Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/DirectPermissions/HighRiskPermissionsAnalysis.png "Analysis Tasks for the SP_HighRiskPermissions Job")

The default analysis tasks are:

* 1. Detailed View – Creates the SA\_SP\_HighRiskPermissions\_Details table accessible under the job’s Results node
* 2. Permissions Matrix. Resource counts by Permission Level and Trustee – Creates the SA\_SP\_HighRiskPermissions\_Details table (SP\_HighRiskPermissions\_Matrix) accessible under the job’s Results node
* 3.Open Manage Rights – Creates the SA\_SP\_HighRiskPermissions\_ManageRights table accessible under the job’s Results node
* 4. Pivot Permissions by Resource Type – Creates the SA\_SP\_HighRiskPermissions\_SiteCollectionSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks which display information on open resources from directly applied permissions, the SP\_HighRiskPermissions Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| High Risk Permissions | This report shows permissions of Authenticated Users, Anonymous Logon, or Domain users. Applying these trustees to permissions may inadvertently open security holes. | GDPR, SOX, HIPAA, PCI-DSS, GLBA, ITAR, FERPA, FISMA, ISO27001 | This report is comprised of three elements:   * Stacked Bar Chart – Displays Open Resources * Table – Provides details on resource counts by permissions and high risk trustees * Table – Provides details top resources with open manage rights |
---
sidebar_position: 5044
title: AD_CertificateAuthorityRights Job
---

# AD\_CertificateAuthorityRights Job

The AD\_CertificateAuthorityRights job provides details on certificate enrollment permissions, specifically risky permissions where users have write or higher access.

#### Analysis Tasks for the AD\_CertificateAuthorityRights Job

Navigate to the **Active Directory Permissions Analyzer** > **8.Domains** > **AD\_CertificateAuthorityRights** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_CertificateAuthorityRights Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Domains/CertificateAuthorityRightsAnalysis.png "Analysis Tasks for the AD_CertificateAuthorityRights Job")

The default analysis tasks are:

* Certificate Enrollment Rights – Creates a view to show all certificate enrollment permissions
* General Audit – Audits certificate template settings
* Risky Template Permissions – Identifies write and higher permissions on templates, which are considered risky. Creates the SA\_AD\_CertificateConfiguration\_TemplateRiskyPermissions table accessible under the job’s Results node.
* Risky Permissions Summary – Summarizes the count of risky permissions by principal and permission type

In addition to the tables and views created by the analysis tasks, the AD\_CertificateAuthorityRights job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Enrollment Permissions | This report highlights vulnerable Access control Lists (ACLs) with permissions or owners assigned to open groups and non-standard ACLs with owners that are not domain or enterprise admins. | None | This report is comprised of three elements:   * Bar Chart – Displays risky permissions by principal * Pie Chart – Displays risky permissions by count * Table – Provides details on risky permissions |
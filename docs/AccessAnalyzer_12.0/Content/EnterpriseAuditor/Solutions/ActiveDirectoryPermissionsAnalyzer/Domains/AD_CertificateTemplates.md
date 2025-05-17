---
sidebar_position: 5042
title: AD_CertificateTemplates Job
---

# AD\_CertificateTemplates Job

The AD\_CertificateTemplates job provides details on certificate template settings.

#### Analysis Tasks for the AD\_CertificateTemplates Job

Navigate to the **Active Directory Permissions Analyzer** > **8.Domains** > **AD\_CertificateTemplates** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_CertificateTemplates Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectoryPermissionsAnalyzer/Domains/CertificateTemplatesAnalysis.png "Analysis Tasks for the AD_CertificateTemplates Job")

The default analysis tasks are:

* Certificate Templates – Provides details on certificate templates. Creates the SA\_AD\_CertificateAudit\_Templates table accessible under the job’s Results node.
* Templates Summary – Summarizes the counts of templates for each Certificate Authority and permission

In addition to the tables and views created by the analysis tasks, the AD\_CertificateTemplates job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Certificate Template Configuration | This report highlights certificate templates and their configurations in the audited Certificate Authority. | None | This report is comprised of three elements:   * Bar Chart – Displays templates by Certificate Authority * Pie Chart – Displays templates by permission count * Table – Provides details on certificate templates |
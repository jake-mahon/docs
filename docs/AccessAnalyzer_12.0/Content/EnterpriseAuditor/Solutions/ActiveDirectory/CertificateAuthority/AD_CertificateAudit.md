---
sidebar_position: 5338
title: AD_CertificateAudit Job
---

# AD\_CertificateAudit Job

The AD\_CertificateAudit job provides details on access rights to the Certificate Authority.

## Analysis Tasks for the AD\_CertificateAudit Job

Navigate to the **Active Directory** > **7.Certificate Authority** > **AD\_CertificateAudit** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_CertificateAudit Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/CertificateAuthority/CertificateAuditAnalysis.png "Analysis Tasks for the AD_CertificateAudit Job")

The default analysis tasks are:

* Certificate Authorities – Summarizes the Certificate Authority configuration. Creates the SA\_AD\_CertificateAudit\_Authorites view accessible under the job’s Results node.
* Certificate Authority Rights – Provides permissions on the Certificate Authority. Creates the SA\_AD\_CertificateAudit\_CARights table accessible under the job’s Results node.

In addition to the tables and views created by the analysis tasks, the AD\_CertificateAudit job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Certificate Authority Configuration | This report helps in identifying Certificate Authority configuration risks associated with permissions applied on the Active Directory object level as well as other unintended configurations set on the Certificate Authority level. Additionally, the rights on a Certificate Authority should be limited to those intended to administer or manage the Certificate Authority, so the ManageCA rights and ManageCertificate rights should be reviewed for potential misconfiguration. | None | This report is comprised of three elements:   * Stacked Bar Chart – Displays a summary of Certificate Authority permissions * Table – Provides details on Certificate Authorities * Table – Provides details on access rights |
---
sidebar_position: 5367
title: AD_AuthenticationProtocol Job
---

# AD\_AuthenticationProtocol Job

The AD\_Authentication Job shows what protocols are being used to authenticate across the environment and will help to identify what services and computers may be affected when disabling NTLM.

## Analysis Tasks for the AD\_AuthenticationProtocol Job

Navigate to the **Active Directory** > **6.Activity** > **Operations** > **AD\_AuthenticationProtocol** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_AuthenticationProtocol Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Activity/Operations/AuthenticationProtocolAnalysis.png "Analysis Tasks for the AD_AuthenticationProtocol Job")

The default analysis tasks are:

* Summarize Protocol Usage – Creates the SA\_AD\_AuthenticationProtocol\_Summary table accessible under the job’s Results node
* Summarize Host Protocol Usage – Creates the SA\_AD\_AuthenticationProtocol\_Hosts table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AD\_AuthenticationProtocol Job produces the follow pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Authentication Protocols | Track the prevalence of NTLM versus Kerberos within the environment. | CCPA  GDPR  SOX  HIPPA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of two elements:   * Pie – Displays authentication protocols  * Table –  Displays authentication protocols summary |
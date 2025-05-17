---
sidebar_position: 5365
title: AD_HardcodedDCs Job
---

# AD\_HardcodedDCs Job

The AD\_HardcodedDCs Job highlights machines that have communicated with only one domain controller.

## Analysis Tasks for the AD\_HardcodedDCs Job

Navigate to the **Active Directory** > **6.Activity** > **Operations** > **AD\_HardcodedDCs** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_HardcodedDCs Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Activity/Operations/HardcodedDCsAnalysis.png "Analysis Tasks for the AD_HardcodedDCs Job")

The default analysis tasks are:

* Hardcoded DCs – Creates the SA\_AD\_Hardcoded\_DCs table accessible under the job’s Results node
* Summarizes Hardcoded DC Information – Creates the SA\_AD\_Hardcoded\_Summary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AD\_Hardcoded DCs Job produces the follow pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Hardcoded DCs | This report identifies hosts which may have hardcoded domain controller information in server or application settings. Each host identified in this report has only contacted one domain controller. | CCPA  GDPR  SOX  HIPPA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of three elements:   * Pie –  Displays top domain controllers  * Table – Displays hardcoded domain controller summary  * Table – Displays host details |
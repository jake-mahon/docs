---
sidebar_position: 5362
title: AD_GroupHosts Job
---

# AD\_GroupHosts Job

The AD\_GroupHosts Job attempts to identify where groups may be used to provide access.

## Analysis Tasks for the AD\_GroupHosts Job

Navigate to the **Jobs** > **Active Directory** > **6.Activity** > **GroupUsage** > **AD\_GroupHosts** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_GroupHosts Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Activity/GroupUsage/GroupHostsAnalysis.png "Analysis Tasks for the AD_GroupHosts Job")

The default analysis tasks are:

* Group Authentication Details – Creates the SA\_AD\_GroupHosts\_Details table accessible under the job’s Results node
* Summarize Authentication Events by Group – Creates the SA\_AD\_GroupHosts\_GroupSummary table accessible under the job’s Results node
* Summarize Authentication Events by Host – Creates the SA\_AD\_GroupHosts\_HostSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AD\_GroupHosts Job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Group Host Usage | Understand what groups are utilizing what hosts in the environment. | CCPA  GDPR  SOX  HIPPA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of three elements:   * Table – Displays security groups by target hosts  * Table – Displays hosts by associated groups  * Table – Displays authentication details |
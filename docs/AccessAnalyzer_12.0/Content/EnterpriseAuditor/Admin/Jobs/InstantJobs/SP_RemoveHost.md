---
sidebar_position: 5679
title: SP_RemoveHost Job
---

# SP\_RemoveHost Job

The SP\_RemoveHost Job removes desired SharePoint hosts from the Access Analyzer database. It is available through the Instant Job Library under the SharePoint library. See the [Instant Job Wizard](Overview "Instant Job Wizard") topic for instructions to add this instant job into the Jobs tree.

![SP_RemoveHost job in the Jobs tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Jobs/InstantJobs/SPRemoveHost/JobsTree.png "SP_RemoveHost job in the Jobs tree")

Runtime Details:

* Dependencies – None
* Target Hosts – SharePoint host to be deleted
* Scheduling – This job should be scheduled to run as desired
* History Retention – Not supported and should be turned off
* Multi-console Support – Not supported
* Additional Notes – None

The SP\_RemoveHosts Job removes desired SharePoint hosts from the Access Analyzer database, target the hosts on the job and run it to delete the respective hosts SharePoint data.

## Analysis Tasks for the SP\_RemoveHost Job

Navigate to the **Jobs** > **SP\_RemoveHost** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Default Analysis tasks for the job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Jobs/InstantJobs/FSDEFENDSDD/AnalysisTasks.png "Default Analysis tasks for the job")

The default analysis tasks are:

* Remove Host(s) — Remove Scanned Hosts from Tier 1
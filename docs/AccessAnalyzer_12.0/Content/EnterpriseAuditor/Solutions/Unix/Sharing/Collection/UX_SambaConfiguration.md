---
sidebar_position: 5205
title: UX_SambaConfiguration Job
---

# UX\_SambaConfiguration Job

The **0.Collection** > **UX\_SambaConfiguration** job collects Samba configuration information which will be further analyzed to identify and categorize risk within audited Unix and Linux environments.

## Queries for the UX\_SambaConfiguration Job

The UX\_SambaConfiguration job uses the Unix Data Collector for the following queries:

**CAUTION:** The queries are preconfigured for this job. Never modify the queries.

![Queries for the UX_SambaConfiguration Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Unix/Sharing/SambaConfigurationQueries.png "Queries for the UX_SambaConfiguration Job")

The queries for the UX\_SambaConfiguration Job are:

* Samba Configuration – Uses the Unix Data Collector to parse the smb.conf file
* Host OS – Gets the operating system of the target hosts

## Analysis Tasks for the UX\_SambaConfiguration Job

Navigate to the **Unix** > **3.Sharing** > **0.Collection** > **UX\_SambaConfiguration** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the UX_SambaConfiguration Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Unix/Sharing/SambaConfigurationAnalysis.png "Analysis Tasks for the UX_SambaConfiguration Job")

The default analysis task is:

* Creates Samba Parameters table from scan results – Creates the SA\_UX\_Sharing\_SambaParameters table accessible under the job’s Results node
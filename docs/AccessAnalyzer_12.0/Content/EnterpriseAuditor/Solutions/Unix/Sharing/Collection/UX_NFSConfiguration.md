---
sidebar_position: 5207
title: UX_NFSConfiguration Job
---

# UX\_NFSConfiguration Job

The **0.Collection** > **UX\_NFSConfiguration** job collects NFS configuration information which will be further analyzed to identify and categorize risk within audited Unix and Linux environments.

## Queries for the UX\_NFSConfiguration Job

The UX\_NFSConfiguration job uses the Unix Data Collector for the following queries:

**CAUTION:** The queries are preconfigured for this job. Never modify the queries.

![Queries for the UX_NFSConfiguration Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Unix/Sharing/NFSConfigurationQueries.png "Queries for the UX_NFSConfiguration Job")

The queries for the UX\_NFSConfiguration job are:

* NFS Config – NFS Configuration
* Host OS – Gets the operating system of the target hosts

## Analysis Tasks for the UX\_NFSConfiguration Job

Navigate to the **Unix** > **3.Sharing** > **0.Collection** > **UX\_NFSConfiguration** > **Configure** node and select **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the UX_NFSConfiguration Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Unix/Sharing/NFSConfigurationAnalysis.png "Analysis Tasks for the UX_NFSConfiguration Job")

The default analysis task is:

* Create NFS Options table – Creates the SA\_UX\_Sharing\_NFSOptions table accessible under the job’s Results node
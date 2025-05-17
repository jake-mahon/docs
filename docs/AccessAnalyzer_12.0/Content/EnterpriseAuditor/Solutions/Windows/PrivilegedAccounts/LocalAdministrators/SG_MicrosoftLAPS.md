---
sidebar_position: 5084
title: SG_MicrosoftLAPS Job
---

# SG\_MicrosoftLAPS Job

The SG\_MicrosoftLAPS job assesses the Local Administrator Password Solution (LAPS) local policies on all targeted hosts. This offers insight into LAPS enablement and configuration across an environment. LAPS allows for centralized local administrator password management within Active Directory. See the Microsoft [Local Administrator Password Solution](https://learn.microsoft.com/en-us/previous-versions/mt227395(v=msdn.10) "Local Administrator Password Solution") article for additional information.

## Queries for the SG\_MicrosoftLAPS Job

The SG\_MicrosoftLAPS job uses the Registry Data Collector for the following query:

**CAUTION:** The query is preconfigured for this job. Never modify the query.

![Queries for the SG_MicrosoftLAPS Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Windows/PrivilegedAccounts/LocalAdministrators/MicrosoftLAPSQuery.png "Queries for the SG_MicrosoftLAPS Job")

The query for the SG\_MicrosoftLAPS job is:

* Registry Check – Checks for LAPS related registry keys

## Analysis Tasks for the SG\_MicrosoftLAPS Job

Navigate to the **Windows** > **Privileged Accounts** > **Local Administrators** > **SG\_MicrosoftLAPS** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the SG_MicrosoftLAPS Job](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Windows/PrivilegedAccounts/LocalAdministrators/MicrosoftLAPSAnalysis.png "Analysis Tasks for the SG_MicrosoftLAPS Job")

The default analysis task is:

* List LAPS details – Creates the SG\_MicrosoftLAPS\_Details table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the SG\_MicrosoftLAPS job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Microsoft LAPS Overview | This report gives an overview of LAPS policies in the audited environment. LAPS allows for centralized local administrator password management within Active Directory. | None | This report is comprised of two elements:   * Pie Chart – Displays LAPS status by host * Table – Provides LAPS policy details |
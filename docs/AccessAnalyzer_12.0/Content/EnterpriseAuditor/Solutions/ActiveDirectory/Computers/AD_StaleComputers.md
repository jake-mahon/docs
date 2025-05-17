---
sidebar_position: 5286
title: AD_StaleComputers Job
---

# AD\_StaleComputers Job

The AD\_StaleComputers Job provides details on stale computers that may be candidates for cleanup.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable parameters used by analysis tasks in the job. See the [Parameter Configuration](../../../Admin/Jobs/Job/Overview#Parameter_Configuration "Parameter Configuration") topic for instructions on how to edit parameters on a job overview page.

The AD\_StaleComputers Job has the following configurable parameters:

* Days since Last Logon
* Consider disabled accounts as stale

See the [Customizable Analysis Parameters for the AD\_StaleComputers Job](#Customiz "Customizable Analysis Parameters for the AD_StaleComputers Job") topic for additional information.

## Analysis Tasks for the AD\_StaleComputers Job

Navigate to the **Active Directory** > **3.Computers** > **AD\_StaleComputers** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the **2. Summarize by Domain** analysis task. This analysis task is preconfigured for this job.

![Analysis Tasks for the AD_StaleComputers Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Computers/StaleComputersAnalysis.png "Analysis Tasks for the AD_StaleComputers Job")

The default analysis tasks are:

* 1. Identify Stale Computers

  * Identifies computer objects that are disabled or have exceeded the defined threshold of inactivity
  * Creates the SA\_AD\_StaleComputers\_Details table accessible under the job’s Results node
  * Definition of a stale computer can be customized
* 2. Summarize by Domain – Creates the SA\_AD\_StaleComputers\_DomainSummay table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD\_StaleComputers Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Stale Computers | This report presents potentially stale computers. Computers are considered stale if they have never logged onto the domain, have not logged onto the domain in the past 90 days, or are disabled.  **NOTE:** The definition of a stale computer is customizable. | None | This report is comprised of three elements:   * Stacked Bar Chart – Displays stale computers by domain  * Table – Provides details on computers  * Table – Provides summary of stale computers |

### Customizable Analysis Parameters for the AD\_StaleComputers Job

Analysis parameters that can be customized have the following default values:

| Analysis Task | Customizable Parameter Name | Default Value | Value Indicates |
| --- | --- | --- | --- |
| 1. Identify Stale Computers | @days\_since\_last\_logon | 90 | A computer object that has been inactive for 90 days or more |
| 1. Identify Stale Computers | @consider\_disable | 1 | A computer object that has been disabled:   * Value 1 = Disabled computers are included as stale  * Value 0 = Disabled computers are not included as stale |

See the [Configure the Customizable Parameters in an Analysis Task](../../../Admin/Jobs/Job/Configure/AnalysisCustomizableParameters "Configure the Customizable Parameters in an Analysis Task") topic for additional information.
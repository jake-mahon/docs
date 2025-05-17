---
sidebar_position: 5158
title: SP_StaleTeamSites Job
---

# SP\_StaleTeamSites Job

The SP\_StaleTeamSites Job identifies Teams that have not had activity for a number of days that can be set in the analysis (Set as 30 Days by Default).

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable parameters used by analysis tasks in the job. See the [Parameter Configuration](../../../Admin/Jobs/Job/Overview#Parameter_Configuration "Parameter Configuration") topic for instructions on how to edit parameters on a job overview page.

The SP\_StaleTeamSites page has the following configurable parameters:

* Desired Number of Days Since Last Activity To Determine Staleness

See the [Customizable Analysis Tasks for the SP\_StaleTeamSites Job](#Customiz "Customizable Analysis Tasks for the SP_StaleTeamSites Job") for additional information.

## Analysis Tasks for the SP\_StaleTeamSites Job

Navigate to the **Jobs** > **SharePoint** > **8.M365** > **SP\_StaleTeamSites** >**Configure** node and select **Analysis** to view the analysis tasks.

![Analysis Tasks for the SP_StaleTeamSites Job](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/M365/StaleTeamSitesAnalysis.png "Analysis Tasks for the SP_StaleTeamSites Job")

The default analysis task is:

* Find Stale Teams – Creates the SA\_SP\_StaleTeamSites table accessible under the job’s Results node

  * This task contains a configurable parameter to set the number of days a Team has not had activity for before it's considered stale. See the [Customizable Analysis Tasks for the SP\_StaleTeamSites Job](#Customiz "Customizable Analysis Tasks for the SP_StaleTeamSites Job") topic for additional information.

In addition to the table created by the analysis task, the SP\_StaleTeamSites Job produces the following preconfigured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Stale Teams | This report identifies Teams that have not had activity for a number of days that can be set in the analysis (Set at 30 Days by Default) | None | This report is comprised of two elements:   * Bar Chart – Provides information on the top five least active sites * Table – Provides details on stale Teams sites |

### Customizable Analysis Tasks for the SP\_StaleTeamSites Job

The default values for customizable parameters are:

| Analysis Task | Customizable Parameter Name | Default Value | Description |
| --- | --- | --- | --- |
| Find Stale Teams | @days | 30 | Desired number of days since last activity to determine staleness. |

See the [Configure the Customizable Parameters in an Analysis Task](../../../Admin/Jobs/Job/Configure/AnalysisCustomizableParameters "Configure the Customizable Parameters in an Analysis Task") topic for instructions on customizing the analysis parameters.
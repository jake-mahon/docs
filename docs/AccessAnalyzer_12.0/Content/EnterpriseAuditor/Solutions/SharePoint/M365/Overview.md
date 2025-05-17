---
sidebar_position: 5157
title: 8.M365
---

# 8.M365 Job Group

The 8.M365 Job Group generates summary and detail reports of SharePoint Activity on the specified Teams sites. These reports can be used for identifying file, folder, and user related activity across your SharePoint environment.

![8.M365 Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/M365/JobsTree.png "8.M365 Job Group in the Jobs Tree")

The jobs in the 8.M365 Job Group are:

* [SP\_ExternalUsers Job](SP_ExternalUsers "SP_ExternalUsers Job") – Identifies activity of external users on all monitored Sharepoint servers
* [SP\_OneDrives Job](SP_OneDrives "SP_OneDrives Job") – Collects the activity, sensitive data, summary level information across OneDrives
* [SP\_SharedLinks Job](SP_SharedLinks "SP_SharedLinks Job") – Provides an overview of the shared links configured with Sharpoint Online, with visibility into Anonymous Sharing, External User Sharing, and activity pertaining to Shared Links
* [SP\_StaleTeamSites Job](SP_StaleTeamSites "SP_StaleTeamSites Job") – Identifies Teams that have not had activity for a number of days that can be set in the analysis (Set at 30 Days by Default)
* [SP\_Teams](SP_Teams "SP_Teams") – Identifies activities, sensitive data and a summary of collected data for SharePoint Teams
* [SP\_TeamsExternalUserActivity Job](SP_TeamsExternalUserActivity "SP_TeamsExternalUserActivity Job") – Identifies all activity events performed by external users in Teams, including details on the date/time, resource, and operation
* [SP\_TeamsSensitiveData Job](SP_TeamsSensitiveData "SP_TeamsSensitiveData Job") – Analyzes sensitive data activity within Teams sites
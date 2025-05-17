---
sidebar_position: 5547
title: 5. Public Folders Job Group
---

# 5. Public Folders Job Group

The 5. Public Folders job group is comprised of data collection, analyses, and reports that focus on public folder sizing, content aging, entitlement, ownership, and the identification of each public folder’s Most Probable Owner. The Most Probable Owner is a unique algorithm built into the public folder data collector that is determined based on folder ownership, content posted, and size of content posted.

![5.Public Folders Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Exchange/PublicFolders/JobsTree.png "5.Public Folders Job Group in the Jobs Tree")

The following comprise the 5. Public Folders job group:

* [Content Job Group](Content/Overview "Content Job Group") – Provides visibility into public folder sizing and content aging
* [Growth and Size Job Group](GrowthSize/Overview "Growth and Size Job Group") – Comprised of data collection, analysis, and reports that focus on public folder sizing and growth
* [Ownership Job Group](Ownership/Overview "Ownership Job Group") – Comprised of analysis and reports that focus on public folder ownership, and most importantly the identification of each public folder's Most Probable Owner
* [Permissions Job Group](Permissions/Overview "Permissions Job Group") – Provides visibility into permissions applied to each public folder
* [PF\_Overview Job](PF_Overview "PF_Overview Job") – Comprised of analysis and reports that provides a top level summary of each parent public folder and correlates information from the message tracking logs to identify the last time a public folder received mail

The **5. Public Folders** > **Ownership** job group uses the ExchangePublicFolder, a MAPI-based data collector. Therefore, it requires both Access Analyzer MAPI CDO and Microsoft Exchange MAPI CDO to be installed on the Access Analyzer Console server. Once these have been installed, the **Settings** > **Exchange** node must be configured for proper connection to the Exchange server. See the [Exchange](../../../Admin/Settings/Exchange "Exchange") topic for additional information.
---
sidebar_position: 5144
title: 1.Direct Permissions Job Group
---

# 1.Direct Permissions Job Group

The **SharePoint** > **1.Direct Permissions** Job Group provides insight into how directly applied permissions are configured within the targeted SharePoint environment. It is dependent on data collected by the [SharePoint Access Auditing](../Collection/Overview#SharePoi "SharePoint Access Auditing") or [SharePoint Sensitive Data Discovery Auditing (SEEK)](../Collection/Overview#SharePoi3 "SharePoint Sensitive Data Discovery Auditing (SEEK)") components of the [0.Collection Job Group](../Collection/Overview "0.Collection Job Group"). The jobs which comprise the 1.Direct Permissions Job Group process analysis tasks and generate reports.

![1.Direct Permissions Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/SharePoint/DirectPermissions/JobsTree.png "1.Direct Permissions Job Group in the Jobs Tree")

The 1.Direct Permissions Job Group is comprised of:

* [SP\_DomainUsers Job](SP_DomainUsers "SP_DomainUsers Job") – Identifies locations where there are domain users directly applied on permissions. Best practices dictate that groups should be used to provide access to resources.
* [SP\_EmptyDomainGroupPerms Job](SP_EmptyDomainGroupPerms "SP_EmptyDomainGroupPerms Job") – Identifies empty security groups with directly assigned permissions to resources, these groups should be deleted from SharePoint farms, where found. Inadvertent changes to group membership may open up unwanted access.
* [SP\_HighRiskPermissions Job](SP_HighRiskPermissions "SP_HighRiskPermissions Job") – Identifies where Authenticated Users, Everyone Except External Users, Anonymous Logon, or Domain users have been directly assigned permissions
* [SP\_SiteCollectionPerms Job](SP_SiteCollectionPerms "SP_SiteCollectionPerms Job") – Most content will inherit the permissions configured at the root of the site collection. Having an understanding of how those permissions are assigned is useful for gaining perspective on the overall SharePoint permission configuration.
* [SP\_StaleUsers Job](SP_StaleUsers "SP_StaleUsers Job") – Identifies locations where there are stale users directly applied on SharePoint resources. These permissions can be safely removed.
* [SP\_UnresolvedSIDs Job](SP_UnresolvedSIDs "SP_UnresolvedSIDs Job") – Identifies Unresolved SIDs that have permissions to any SharePoint resources. Unresolved SIDs can be safely cleaned up without affecting user access.
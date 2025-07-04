---
id: data-collecting-account
title: "Data Collecting Account"
pagination_label: "Data Collecting Account"
sidebar_label: "Data Collecting Account"
sidebar_position: 59
description: "Learn about service accounts used by 1Secure to collect audit data from monitored systems and their requirements."
---

# Data Collecting Account

The data collecting account is a service account that Netwrix 1Secure uses to collect audit data
from the monitored items (domains, OUs, servers, etc.). Netwrix recommends creating a dedicated
service account for that purpose. Depending on the data source and connector, the account must meet
the corresponding requirements (see the table below).

You can use group Managed Service Account (gMSA) as data collecting account. See the
[Using Group Managed Service Account (gMSA)](/docs/1secure/admin/datacollection/gmsa/gmsa.md) topic for additional information.

Currently, the following data sources are supported:

| Data source       | Provided connectors                               | Required rights and permissions:                                                                                                    |
| ----------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Active Directory  | Active Directory Activity Active Directory Logons | [Active Directory Auditing](/docs/1secure/admin/datacollection/activedirectory/activedirectoryauditing.md) [Logon Activity Auditing](/docs/1secure/admin/datacollection/logonactivity/overview.md) |
| Azure AD          | Azure AD Activity Azure AD Logons                 | [Microsoft Entra ID Auditing](/docs/1secure/admin/datacollection/entraid.md)                                                                                        |
| Computer          | File Server Activity                              | [Computer Auditing](/docs/1secure/admin/datacollection/computer/overview.md)                                                                                        |
| SharePoint Online | SharePoint Online Activity                        | [SharePoint Online Auditing](/docs/1secure/admin/datacollection/sharepointonline.md)                                                                                |
| Exchange Online   | Exchange Online Activity                          | [Exchange Online Auditing](/docs/1secure/admin/datacollection/exchangeonline.md)                                                                                    |

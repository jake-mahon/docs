---
id: activedirectoryauditing
title: Active Directory Auditing
---

# Active Directory Auditing

|  |  |
| --- | --- |

## Use GMSA

**NOTE:** If you are using gMSA for data collection, consider that AAL event data collection from your on-premise Exchange server will not be possible. Thus, changes made to your Active Directory domain via that Exchange server will be reported with *domain\Exchange_server_name$* instead of the initiator (user) name in the "*Who*" field of reports, search results and activity summaries.
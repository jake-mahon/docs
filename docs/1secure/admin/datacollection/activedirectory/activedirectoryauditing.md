---
id: active-directory-auditing
title: "Active Directory Auditing"
pagination_label: "Active Directory Auditing"
sidebar_label: "Active Directory Auditing"
sidebar_position: 64
description: "Learn how to configure accounts with specific permissions for Active Directory data collection."
---

# Active Directory Auditing

To collect data from Active Directory, you need an account with specific permissions. The following
options are available:

## Use Domain Admin Account

You can use an account from the Domain Admins group. This account inherently has all necessary
permissions for data collection.

## Use Non-Domain Admin Account

If using a Non-Domain Admin account, set up the account with specific permissions depending on the
following aspects:

|                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| In the target domain                                                                                                       | Account Permission Required                                                                                                                                                                                                                                                                                                                                                                                                             |
| Do you plan to use [Network Traffic Compression](/docs/1secure/configuration/networktrafficcompression.md) for data processing? | If **YES**, account must belong to Domain Admin group. If **NO**, add an account to 'Manage auditing and security log' policy. See [Configure the Manage Auditing and Security Log Policy](/docs/1secure/admin/datacollection/activedirectory/manageauditingsecuritylog.md) for more information.                                                                                                                                                                                          |
| Do you plan to use AD Deleted Objects container for data processing?                                                       | If **YES**, account requires Read permission on the read container. See [Granting Permissions for 'Deleted Objects' Container](/docs/1secure/admin/datacollection/activedirectory/permissionsadcontainer.md) topic for more information.                                                                                                                                                                                                                                                   |
| Is auto-backup _enabled_ for the domain controller event logs?                                                             | If **YES**, account needs the following: - Access to specific registry key on the domain controllers. See[Assigning Permission To Read the Registry Key](/docs/1secure/admin/datacollection/activedirectory/permissionsregistrykeys.md) for additional information. - Membership in either Administrators, Print Operators, or Server Operators group. - Read/Write and Full Control permissions on the logs back up folder.                                                               |
| Is there an on-premises Exchange server in your Active Directory domain?                                                   | If **YES**, account needs the following: - Membership in the **Organization Management** or **Records Management** group or having Audit Logs management role. See [Assigning Management Roles](/docs/1secure/admin/datacollection/activedirectory/auditlogsrole.md) topic for additional information. - Adjustment of the Exchange Administrator Audit Logging settings. See [Configure Exchange Administrator Audit Logging Settings](/docs/1secure/admin/datacollection/activedirectory/auditlogging.md) topic for additional information. |

## Use GMSA

You can use group Managed Service Accounts (gMSA) as data collecting accounts. It should also meet
the same requirements.

**NOTE:** If you are using gMSA for data collection, consider that AAL event data collection from
your on-premise Exchange server will not be possible. Thus, changes made to your Active Directory
domain via that Exchange server will be reported with _domain\\Exchange_server_name$_ instead of the
initiator (user) name in the "_Who_" field of reports, search results and activity summaries.

For more information on gMSA, refer to [Using Group Managed Service Account (gMSA)](/docs/1secure/admin/datacollection/gmsa/gmsa.md)
and to
[Microsoft documentation](https://docs.microsoft.com/en-us/windows-server/security/group-managed-service-accounts/group-managed-service-accounts-overview).

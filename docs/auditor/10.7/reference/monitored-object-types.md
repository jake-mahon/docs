# Monitored Object Types, Actions, and Attributes

Netwrix Auditor monitored object types, actions, attributes and components for each data source are
located in the following topics:

- [Active Directory](/docs/auditor/10.7/data-sources/active-directory/index.md)
- [AD FS](/docs/auditor/10.7/data-sources/infrastructure/index.md)
- [Exchange](/docs/auditor/10.7/data-sources/infrastructure/exchange-server.md)
- [File Servers](/docs/auditor/10.7/data-sources/file-servers/index.md)

  - [Dell Data Storage](/docs/auditor/10.7/data-sources/file-servers/dell-emc.md)
  - [Dell Isilon/PowerScale](/docs/auditor/10.7/data-sources/file-servers/dell-emc.md)
  - [NetApp Data ONTAP](/docs/auditor/10.7/data-sources/file-servers/netapp.md)
  - [Nutanix](/docs/auditor/10.7/data-sources/file-servers/nutanix.md)
  - [Qumulo](/docs/auditor/10.7/data-sources/file-servers/qumulo.md)
  - [Synology](/docs/auditor/10.7/data-sources/file-servers/synology.md)
  - [Windows File Servers](/docs/auditor/10.7/data-sources/file-servers/windows-file-servers.md)

- [Group Policy](/docs/auditor/10.7/data-sources/infrastructure/group-policy.md)
- [Logon Activity](/docs/auditor/10.7/data-sources/infrastructure/logon-activity.md)
- [Microsoft 365](/docs/auditor/10.7/data-sources/microsoft-365/index.md)

  - [Exchange Online](/docs/auditor/10.7/data-sources/microsoft-365/exchange-online.md)
  - [Microsoft Entra ID](/docs/auditor/10.7/data-sources/microsoft-365/azure-entra-id.md)
  - [SharePoint Online](/docs/auditor/10.7/data-sources/microsoft-365/sharepoint-online.md)
  - [MS Teams](/docs/auditor/10.7/data-sources/microsoft-365/microsoft-teams.md)

- [Network Devices](/docs/auditor/10.7/data-sources/network-devices/index.md)
- [Oracle Database](/docs/auditor/10.7/data-sources/databases/oracle.md)
- [SharePoint](/docs/auditor/10.7/data-sources/infrastructure/sharepoint-server.md)
- [SQL Server](/docs/auditor/10.7/data-sources/databases/sql-server.md)
- [User Activity](/docs/auditor/10.7/installation-and-setup/installation/sharepoint-core-service.md)
- [VMware](/docs/auditor/10.7/data-sources/infrastructure/vmware.md)
- [Windows Server](/docs/auditor/10.7/data-sources/infrastructure/windows-servers.md)

Review the list of actions audited and reported by Netwrix Auditor. Actions vary depending on the
data source and the object type.

| Action                                    | Active Directory | Active Directory Federation Services | Exchange Exchange Online | File Servers | Group Policy | Logon Activity | Microsoft Entra ID (formerly Azure AD) | Oracle database | SharePoint SharePoint Online | SQL Server | User Activity | VMware Servers | Windows Server |
| ----------------------------------------- | ---------------- | ------------------------------------ | ------------------------ | ------------ | ------------ | -------------- | -------------------------------------- | --------------- | ---------------------------- | ---------- | ------------- | -------------- | -------------- |
| Added                                     | +                | -                                    | +\*                      | +            | +            | –              | +                                      | +               | +                            | +          | –             | +              | +              |
| Removed                                   | +                | -                                    | +\*                      | +            | +            | –              | +                                      | +               | +                            | +          | –             | +              | +              |
| Modified                                  | +                | –                                    | +\*                      | +            | +            | –              | +                                      | +               | +                            | +          | –             | +              | +              |
| Add (failed attempt)                      | –                | –                                    | –                        | +            | –            | –              | –                                      | +               | –                            | –          | –             | –              | –              |
| Remove (failed attempt)                   | –                | –                                    | –                        | +            | –            | –              | –                                      | +               | –                            | –          | –             | –              | –              |
| Modify (failed attempt)                   | –                | –                                    | –                        | +            | –            | –              | –                                      | +               | –                            | –          | –             | –              | +              |
| Read                                      | –                | –                                    | +\*                      | +            | –            | –              | –                                      | +               | +                            | –          | –             | –              | –              |
| Read (failed attempt)                     | –                | –                                    | –                        | +            | –            | –              | –                                      | +               | –                            | –          | –             | –              | –              |
| Renamed                                   | –                | –                                    | –                        | +            | –            | –              | –                                      | +               | +\*\*                        | –          | –             | –              | –              |
| Moved                                     | –                | –                                    | +\*                      | +            | –            | –              | –                                      | –               | +                            | –          | –             | –              | –              |
| Rename (failed attempt)                   | –                | –                                    | –                        | +            | –            | –              | –                                      | +               | –                            | –          | –             | –              | –              |
| Move (failed attempt)                     | –                | –                                    | –                        | +            | –            | –              | –                                      | –               | –                            | –          | –             | –              | –              |
| Checked in                                | –                | –                                    | –                        | –            | –            | –              | –                                      | –               | +                            | –          | –             | –              | –              |
| Checked out                               | –                | –                                    | –                        | –            | –            | –              | –                                      | –               | +                            | –          | –             | –              | –              |
| Discard check out                         | –                | –                                    | –                        | –            | –            | –              | –                                      | –               | +                            | –          | –             | –              | –              |
| Successful logon                          | –                | +                                    | –                        | –            | –            | +              | +                                      | +               | –                            | +          | –             | +              | –              |
| Failed logon                              | –                | +                                    | –                        | –            | –            | +              | +                                      | +               | –                            | +          | –             | +\*\*\*        | –              |
| Logoff                                    | –                | –                                    | –                        | –            | –            | –              | –                                      | +               | –                            | –          | –             | –              | –              |
| Copied                                    | –                | –                                    | +\*                      | +            | –            | –              | –                                      | –               | +\*\*                        | –          | –             | –              | –              |
| Sent                                      | –                | –                                    | +\*                      | –            | –            | –              | –                                      | –               | –                            | –          | –             | –              | –              |
| Activated                                 | –                | –                                    | –                        | –            | –            | –              | –                                      | –               | –                            | –          | +             | –              | –              |
| Support for state-in-time data collection | +                | –                                    | +                        | +            | +            | -              | +                                      | -               | +                            | -          | -             | +              | +              |

\* —these actions are reported when auditing non-owner mailbox access for Exchange or Exchange
Online.

\*\* — these actions are reported for SharePoint Online only.

\*\*\* — Auditor will not collect data on _Failed Logon_ event for VMware in case of incorrect logon
attempt through VMware vCenter Single Sign-On; also, it will not collect logons using SSH.

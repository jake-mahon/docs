# Monitored Object Types, Actions, and Attributes

Netwrix Auditor monitored object types, actions, attributes and components for each data source are located in the following topics:

- [Active Directory](../configuration/activedirectory/overview.md)
- [AD FS](../configuration/activedirectoryfederatedservices/overview.md)
- [Exchange](../configuration/exchange/overview.md)
- [File Servers](../configuration/fileservers/overview.md)

  - [Dell Data Storage](../configuration/fileservers/delldatastorage/overview.md)
  - [Dell Isilon/PowerScale](../configuration/fileservers/dellisilon/overview.md)
  - [NetApp Data ONTAP](../configuration/fileservers/netappcmode/overview.md)
  - [Nutanix](../configuration/fileservers/nutanix/overview.md)
  - [Qumulo](../configuration/fileservers/qumulo/overview.md)
  - [Synology](../configuration/fileservers/synology/overview.md)
  - [Windows File Servers](../configuration/fileservers/windows/overview.md)
- [Group Policy](../configuration/grouppolicy/overview.md)
- [Logon Activity](../configuration/logonactivity/overview.md)
- [Microsoft 365](../configuration/microsoft365/overview.md)

  - [Exchange Online](../configuration/microsoft365/exchangeonline/overview.md)
  - [Microsoft Entra ID](../configuration/microsoft365/microsoftentraid/overview.md)
  - [SharePoint Online](../configuration/microsoft365/sharepointonline/overview.md)
  - [MS Teams](../configuration/microsoft365/teams/overview.md)
- [Network Devices](../configuration/networkdevices/overview.md)
- [Oracle Database](../configuration/oracle/overview.md)
- [SharePoint](../configuration/sharepoint/overview.md)
- [SQL Server](../configuration/sqlserver/overview.md)
- [User Activity](../configuration/useractivity/overview.md)
- [VMware](../configuration/vmware/overview.md)
- [Windows Server](../configuration/windowsserver/overview.md)

Review the list of actions audited and reported by Netwrix Auditor. Actions vary depending on the data source and the object type.

| Action | Active Directory | Active Directory Federation Services | Exchange  Exchange Online | File Servers | Group Policy | Logon Activity | Microsoft Entra ID (formerly Azure AD) | Oracle database | SharePoint  SharePoint Online | SQL Server | User Activity | VMware Servers | Windows Server |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Added | + | - | +\* | + | + | – | + | + | + | + | – | + | + |
| Removed | + | - | +\* | + | + | – | + | + | + | + | – | + | + |
| Modified | + | – | +\* | + | + | – | + | + | + | + | – | + | + |
| Add (failed attempt) | – | – | – | + | – | – | – | + | – | – | – | – | – |
| Remove (failed attempt) | – | – | – | + | – | – | – | + | – | – | – | – | – |
| Modify (failed attempt) | – | – | – | + | – | – | – | + | – | – | – | – | + |
| Read | – | – | +\* | + | – | – | – | + | + | – | – | – | – |
| Read (failed attempt) | – | – | – | + | – | – | – | + | – | – | – | – | – |
| Renamed | – | – | – | + | – | – | – | + | +\*\* | – | – | – | – |
| Moved | – | – | +\* | + | – | – | – | – | + | – | – | – | – |
| Rename (failed attempt) | – | – | – | + | – | – | – | + | – | – | – | – | – |
| Move (failed attempt) | – | – | – | + | – | – | – | – | – | – | – | – | – |
| Checked in | – | – | – | – | – | – | – | – | + | – | – | – | – |
| Checked out | – | – | – | – | – | – | – | – | + | – | – | – | – |
| Discard check out | – | – | – | – | – | – | – | – | + | – | – | – | – |
| Successful logon | – | + | – | – | – | + | + | + | – | + | – | + | – |
| Failed logon | – | + | – | – | – | + | + | + | – | + | – | +\*\*\* | – |
| Logoff | – | – | – | – | – | – | – | + | – | – | – | – | – |
| Copied | – | – | +\* | + | – | – | – | – | +\*\* | – | – | – | – |
| Sent | – | – | +\* | – | – | – | – | – | – | – | – | – | – |
| Activated | – | – | – | – | – | – | – | – | – | – | + | – | – |
| Support for state-in-time data collection | + | – | + | + | + | - | + | - | + | - | - | + | + |

\* —these actions are reported when auditing non-owner mailbox access for Exchange or Exchange Online.

\*\* — these actions are reported for SharePoint Online only.

\*\*\* — Auditor will not collect data on _Failed Logon_ event for VMware in case of incorrect logon attempt through VMware vCenter Single Sign-On; also, it will not collect logons using SSH.

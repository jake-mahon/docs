# Monitored Object Types, Actions, and Attributes

Netwrix Auditor monitored object types, actions, attributes and components for each data source are located in the following topics:

- [Active Directory](/docs/product_docs/auditor/auditor/configuration/activedirectory/overview.md)
- [AD FS](/docs/product_docs/auditor/auditor/configuration/activedirectoryfederatedservices/overview.md)
- [Exchange](/docs/product_docs/auditor/auditor/configuration/exchange/overview.md)
- [File Servers](/docs/product_docs/auditor/auditor/configuration/fileservers/overview.md)

  - [Dell Data Storage](/docs/product_docs/auditor/auditor/configuration/fileservers/delldatastorage/overview.md)
  - [Dell Isilon/PowerScale](/docs/product_docs/auditor/auditor/configuration/fileservers/dellisilon/overview.md)
  - [NetApp Data ONTAP](/docs/product_docs/auditor/auditor/configuration/fileservers/netappcmode/overview.md)
  - [Nutanix](/docs/product_docs/auditor/auditor/configuration/fileservers/nutanix/overview.md)
  - [Qumulo](/docs/product_docs/auditor/auditor/configuration/fileservers/qumulo/overview.md)
  - [Synology](/docs/product_docs/auditor/auditor/configuration/fileservers/synology/overview.md)
  - [Windows File Servers](/docs/product_docs/auditor/auditor/configuration/fileservers/windows/overview.md)
- [Group Policy](/docs/product_docs/auditor/auditor/configuration/grouppolicy/overview.md)
- [Logon Activity](/docs/product_docs/auditor/auditor/configuration/logonactivity/overview.md)
- [Microsoft 365](/docs/product_docs/auditor/auditor/configuration/microsoft365/overview.md)

  - [Exchange Online](/docs/product_docs/auditor/auditor/configuration/microsoft365/exchangeonline/overview.md)
  - [Microsoft Entra ID](/docs/product_docs/auditor/auditor/configuration/microsoft365/microsoftentraid/overview.md)
  - [SharePoint Online](/docs/product_docs/auditor/auditor/configuration/microsoft365/sharepointonline/overview.md)
  - [MS Teams](/docs/product_docs/auditor/auditor/configuration/microsoft365/teams/overview.md)
- [Network Devices](/docs/product_docs/auditor/auditor/configuration/networkdevices/overview.md)
- [Oracle Database](/docs/product_docs/auditor/auditor/configuration/oracle/overview.md)
- [SharePoint](/docs/product_docs/auditor/auditor/configuration/sharepoint/overview.md)
- [SQL Server](/docs/product_docs/auditor/auditor/configuration/sqlserver/overview.md)
- [User Activity](/docs/product_docs/auditor/auditor/configuration/useractivity/overview.md)
- [VMware](/docs/product_docs/auditor/auditor/configuration/vmware/overview.md)
- [Windows Server](/docs/product_docs/auditor/auditor/configuration/windowsserver/overview.md)

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

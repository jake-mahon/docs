# Data Collecting Account

This is a service account that Auditor uses to collect audit data from the monitored items (domains, OUs, servers, etc.). Netwrix recommends creating a dedicated service account for that purpose. Depending on the data source your monitoring plan will process, the account must meet the corresponding requirements (see the table below).

If you are going to enable integration with Netwrix Data Classification (NDC Provider), additional server roles must be assigned to the account. See [Sensitive Data Discovery ](/versioned_docs/auditor_10.6/auditor/admin/settings/sensitivedatadiscovery.md) topic for additional information.

Starting with version 9.96, you can use group Managed Service Account (gMSA) as data collecting account. Currently, the following data sources are supported: Active Directory (also for Group Policy and Logon Activity), Windows Server, File Server (currently for Windows File Servers), SQL Server, SharePoint.

For more details about gMSA usage, see the [Use Group Managed Service Account (gMSA)](/versioned_docs/auditor_10.6/auditor/requirements/gmsa.md)topic for additional information.

The gMSA should also meet the related requirements (see the table below).

| Data source | Required rights and permissions: |
| --- | --- |
| Active Directory | [Permissions for Active Directory Auditing](/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/permissions.md) |
| Active Directory Federation Services | [Permissions for AD FS Auditing](/versioned_docs/auditor_10.6/auditor/configuration/activedirectoryfederatedservices/permissions.md) |
| Microsoft Entra ID (formerly Azure AD), Exchange Online, SharePoint Online, MS Teams | [Permissions for Microsoft Entra ID Auditing](/versioned_docs/auditor_10.6/auditor/configuration/microsoft365/microsoftentraid/permissions.md)  [Permissions for Exchange Online Auditing](/versioned_docs/auditor_10.6/auditor/configuration/microsoft365/exchangeonline/permissions.md)  [Permissions for SharePoint Online Auditing ](/versioned_docs/auditor_10.6/auditor/configuration/microsoft365/sharepointonline/permissions.md)  [Permissions for Teams Auditing](/versioned_docs/auditor_10.6/auditor/configuration/microsoft365/teams/permissions.md) |
| Exchange | [Permissions for Exchange Auditing](/versioned_docs/auditor_10.6/auditor/configuration/exchange/permissions.md) |
| Windows File Servers | [Permissions for Windows File Server Auditing](/versioned_docs/auditor_10.6/auditor/configuration/fileservers/windows/permissions.md) |
| Dell Isilon | [Permissions for Dell Isilon/PowerScale Auditing](/versioned_docs/auditor_10.6/auditor/configuration/fileservers/dellisilon/permissions.md) |
| Dell VNX/VNXe/Unity | [Permissions for Dell Data Storage Auditing](/versioned_docs/auditor_10.6/auditor/configuration/fileservers/delldatastorage/permissions.md) |
| NetApp | [Permissions for NetApp Auditing](/versioned_docs/auditor_10.6/auditor/configuration/fileservers/netappcmode/permissions.md) |
| Nutanix Files | [Permissions for Nutanix Files Auditing](/versioned_docs/auditor_10.6/auditor/configuration/fileservers/nutanix/permissions.md) |
| Qumulo | [Permissions for Qumulo Auditing](/versioned_docs/auditor_10.6/auditor/configuration/fileservers/qumulo/permissions.md) |
| Synology | [Permissions for Synology Auditing](/versioned_docs/auditor_10.6/auditor/configuration/fileservers/synology/permissions.md) |
| Network Devices | [Permissions for Network Devices Auditing](/versioned_docs/auditor_10.6/auditor/configuration/networkdevices/permissions.md) |
| Oracle Database | [Permissions for Oracle Database Auditing](/versioned_docs/auditor_10.6/auditor/configuration/oracle/permissions.md) |
| SharePoint | [Permissions for SharePoint Auditing](/versioned_docs/auditor_10.6/auditor/configuration/sharepoint/permissions.md) |
| SQL Server | [Permissions for SQL Server Auditing ](/versioned_docs/auditor_10.6/auditor/configuration/sqlserver/permissions.md) |
| VMware | [Permissions for VMware Server Auditing ](/versioned_docs/auditor_10.6/auditor/configuration/vmware/permissions.md) |
| Windows Server (including DNS and DHCP) | [Permissions for Windows Server Auditing ](/versioned_docs/auditor_10.6/auditor/configuration/windowsserver/permissions.md) |
| Event Log (including IIS)—collected with Event Log Manager | [Permissions for Windows Server Auditing ](/versioned_docs/auditor_10.6/auditor/configuration/windowsserver/permissions.md#Permissions-for-Windows-Server-Auditing) |
| Group Policy | [Permissions for Group Policy Auditing ](/versioned_docs/auditor_10.6/auditor/configuration/grouppolicy/permissions.md) |
| Logon Activity | [Permissions for Logon Activity Auditing ](/versioned_docs/auditor_10.6/auditor/configuration/logonactivity/permissions.md) |
| Inactive Users in Active Directory—collected with Inactive User Tracker | In the target domain   - A member of the Domain Admins group |
| Password Expiration in Active Directory—collected with Password Expiration Notifier | In the target domain   - A member of the Domain Users group |
| User Activity | On the target server   - A member of the local Administrators group |
| Sensitive Data Discovery | [Sensitive Data Discovery ](/versioned_docs/auditor_10.6/auditor/admin/settings/sensitivedatadiscovery.md) |

## Update Credentials for Account

Once a Data Collecting Account has been configured, you can always update the password for this account in Netwrix Auditor.

Follow the steps to update credentials for the accounts used by Auditor:

__Step 1 –__ On the Auditor home page, navigate to __Settings__.

__Step 2 –__ Locate the General tab.

__Step 3 –__ Click the __Manage__ button under __Accounts and Passwords__.

__Step 4 –__ Select an account you want to update the password for.

__Step 5 –__ Review the account configuration scope and click __Update password__ next to this account.

![updatecredentials](/img/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/updatecredentials.png)

__Step 6 –__ Save your edits.

See the [General](/versioned_docs/auditor_10.6/auditor/admin/settings/general.md) topic for additional information.

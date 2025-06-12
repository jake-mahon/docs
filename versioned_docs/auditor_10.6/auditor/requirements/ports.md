# Protocols and Ports Required

To ensure successful data collection and activity monitoring, Auditor has to communicate through firewall and requires some ports to be opened for inbound and outbound connections.

___RECOMMENDED:___ Netwrix recommends reviewing your current port configuration after every re-installation or upgrade.

| If you use... | Do the following... |
| --- | --- |
| Windows Firewall | If you are running Windows Firewall on the computer where Auditor Server is going to be installed, the 135, 9004, 9699, 9011, and one dynamic port will be opened automatically for inbound connections during Auditor installation. For outbound rules, create or enable predefined Windows Firewall rules.  Before installing Auditor, make sure that the Windows Firewall service is started. |
| Third-party Firewall | If you use a third-party firewall, you must create rules manually. |

Follow the steps to create Firewall rules manually.

The example below applies to Windows Firewall and explains how to create a rule for inbound connection.

__Step 1 –__ Start the Windows Firewall service.

__Step 2 –__ Navigate to __Start__ > __Control Panel__ and select __Windows Firewall__.

__Step 3 –__ In the __Help Protect your computer with Windows Firewall__ page, click __Advanced settings__ on the left.

__Step 4 –__ In the Windows Firewall with Advanced Security dialog, select Inbound Rules on the left.

__Step 5 –__ Click New Rule. In the New Inbound Rule wizard, complete the following steps:

- On the Rule Type step, select Port.
- On the Protocol and Ports step, select TCP or UDP. In the Specific local ports field specify the port number.
- On the Action step, select the Allow the connection action.
- On the Profile step, make sure that the rule applies to all profiles (Domain, Private, Public).
- On the Name step, specify the rule's name, for example Netwrix Auditor TCP port\_number Access.

In most cases, this configuration is enough to ensure successful data collection and processing. If your organization policy requires you to provide a justification for each particular port, review the following for a full list of ports to be opened on the computer where Auditor Server is going to be installed and on your target servers.

- [Active Directory Ports](/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/ports.md)
- [AD FS Ports](/versioned_docs/auditor_10.6/auditor/configuration/activedirectoryfederatedservices/ports.md)
- [Microsoft Entra ID Ports](/versioned_docs/auditor_10.6/auditor/configuration/microsoft365/microsoftentraid/ports.md)
- [Dell Data Storage Ports](/versioned_docs/auditor_10.6/auditor/configuration/fileservers/delldatastorage/ports.md)
- [Exchange Ports](/versioned_docs/auditor_10.6/auditor/configuration/exchange/ports.md)
- [Exchange Online Ports](/versioned_docs/auditor_10.6/auditor/configuration/microsoft365/exchangeonline/ports.md)
- [Group Policy Ports](/versioned_docs/auditor_10.6/auditor/configuration/grouppolicy/ports.md)
- [Integration API Ports](/versioned_docs/auditor_10.6/auditor/api/ports.md)
- [ Logon Activity Ports](/versioned_docs/auditor_10.6/auditor/configuration/logonactivity/ports.md)
- [Nutanix Ports](/versioned_docs/auditor_10.6/auditor/configuration/fileservers/nutanix/ports.md)
- [Oracle Database Ports](/versioned_docs/auditor_10.6/auditor/configuration/oracle/ports.md)
- [Qumulo Ports](/versioned_docs/auditor_10.6/auditor/configuration/fileservers/qumulo/ports.md)
- [SharePoint Ports](/versioned_docs/auditor_10.6/auditor/configuration/sharepoint/ports.md)
- [SharePoint Online Ports](/versioned_docs/auditor_10.6/auditor/configuration/microsoft365/sharepointonline/ports.md)
- [SQL Server Ports](/versioned_docs/auditor_10.6/auditor/configuration/sqlserver/ports.md)
- [Synology Ports](/versioned_docs/auditor_10.6/auditor/configuration/fileservers/synology/ports.md)
- [Teams Ports](/versioned_docs/auditor_10.6/auditor/configuration/microsoft365/teams/ports.md)
- [User Activity Ports](/versioned_docs/auditor_10.6/auditor/configuration/useractivity/ports.md)
- [VMware Ports](/versioned_docs/auditor_10.6/auditor/configuration/vmware/ports.md)
- [Windows File Server Ports](/versioned_docs/auditor_10.6/auditor/configuration/fileservers/windows/ports.md)
- [Windows Server Ports](/versioned_docs/auditor_10.6/auditor/configuration/windowsserver/ports.md)

## Netwrix Auditor Server

During installation, Netwrix Auditor automatically creates inbound Windows Firewall rules for the essential ports required for the product to function properly. If you use a third-party firewall, make sure to allow inbound connections to local ports on the target and outbound connections to remote ports on the source.

Tip for reading the table: For example, on the computer where Netwrix Auditor client is installed (source), allow outbound connections to remote 135 TCP port. On the computer where Netwrix Auditor Server resides (target), allow inbound connections to local 135 TCP port.

| Port | Protocol | Source | Target | Purpose |
| --- | --- | --- | --- | --- |
| 135 | TCP | Computer where Netwrix Auditor client is installed | Netwrix Auditor Server | Netwrix Auditor remote client console |
| 9004 | TCP | Monitored computers | Netwrix Auditor Server | Core services responsible for user activity monitoring |
| 9011 | TCP | Computers where Netwrix Auditor for Windows Server Compression Services reside | Netwrix Auditor Server | Network traffic compression and interaction with hubs and services |
| 9699 | TCP | Script / query host | Netwrix Auditor Server | Netwrix Auditor Integration API |
| Dynamic:  1024 -65535 | TCP | Computers where Netwrix Auditor Server and Netwrix Auditor client are installed | Netwrix Auditor Server | Netwrix Auditor internal components interaction.  Allow C:\Program Files (x86)\Netwrix Auditor\Audit Core\NwCoreSvc.exe to use the port. |
| For Managed Service Providers:  443 | TCP | Netwrix Auditor Server | Netwrix Partner Portal | Reporting on active MSP licenses |
| - 80 for http - 443 for https | TCP | SSRS | Netwrix Auditor Server | Reports  __NOTE:__ If your environment is configured differently, we recommend that you check with your DBA or the SSRS settings through the Configuration Manage. |

In most environments, the rules are created automatically and you do not need to open more ports to ensure successful data collection.

In rare cases, for example if your security policies require you to provide a justification for opening each particular port, you might need a more detailed overview.

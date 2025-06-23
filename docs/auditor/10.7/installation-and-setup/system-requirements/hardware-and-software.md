---
title: hardware and software
sidebar_label: hardware-and-software
description: Auditor 10.7 documentation for hardware and software with configuration details, usage instructions, and implementation guidance.
---

# Hardware Requirements

This topic covers hardware requirements for Netwrix Auditor installation and provides estimations of
the resources required for Netwrix Auditor deployment.

The actual hardware requirements will depend on the number of activities collected per day in
addition to the number of files and folders monitored.

**CAUTION:** To keep your systems safe, Auditor should not be exposed to inbound access from the
internet.

## Full Installation

The full installation includes both Auditor Server and Auditor Client. This is the initial product
installation.

Requirements provided in this section apply to a clean installation on a server without any
additional roles or third-party applications installed.

Use these requirements only for initial estimations and be sure to correct them based on your data
collection and monitoring workflow.

You can deploy Auditor on a virtual machine running Microsoft Windows guest OS on the corresponding
virtualization platform, in particular:

- VMware vSphere
- Microsoft Hyper-V
- Nutanix AHV

Auditor supports only Windows OS versions listed in the [Software Requirements](/docs/auditor/10.7/installation-and-setup/system-requirements/hardware-and-software.md) topic.

Netwrix Auditor and SQL Server instance will be deployed on different servers.

Requirements below apply to Netwrix Auditor server.

| Hardware component | Evaluation, PoC or starter environment | Regular environment (up to 1m ARs\*/day) | Large environment (1-10m ARs\*/day)       | XLarge environment (10m ARs\*/day or more)                       |
| ------------------ | -------------------------------------- | ---------------------------------------- | ----------------------------------------- | ---------------------------------------------------------------- |
| CPUs               | 2 cores                                | 4 CPUs                                   | 8 CPUs                                    | 16 CPUs                                                          |
| RAM                | 8 GB                                   | min 8 GB                                 | min 16 GB                                 | 64 GB                                                            |
| Disk space         | 100 GB—System drive 100 GB—Data drive  | 100 GB—System drive 400 GB—Data drive    | 500 GB—System drive\*\* 1.5 TB—Data drive | Up to 1 TB—System drive\*\* Up to several TB per year—Data drive |
| Others             | —                                      | —                                        | Network capacity 1 Gbit                   | Network capacity 1 Gbit                                          |

\* — ARs stands for Activity Records, that is, Netwrix-compatible format for the audit data. See
[Activity Records](/docs/auditor/10.7/api-reference/activity-records/writing-records.md)[Activity Records](/docs/auditor/10.7/api-reference/activity-records/writing-records.md)
for more details.

\*\* — By default, the Long-Term Archive and working folder are stored on a system drive. To reduce
the impact on the system drive in large and xlarge environments, Netwrix recommends storing your
Long-Term Archive and working folder on a data drive and plan for their capacity accordingly. For
details, see:

- [File-Based Repository for Long-Term Archive](/docs/auditor/10.7/installation-and-setup/system-requirements/hardware-and-software.md)
- [Working Folder](/docs/auditor/10.7/installation-and-setup/system-requirements/hardware-and-software.md)

Netwrix Auditor informs you if you are running out of space on a system disk where the Long-Term
Archive is stored by default. You will see related events in the Health log once the free disk space
starts approaching the minimum level. When the free disk space is less than 3 GB, the Netwrix
services responsible for audit data collection will be stopped.

For detailed information about hardware requirements for a standalone SQL Server, refer to the
following Microsoft article:
[SQL Server: Hardware and software requirements](https://learn.microsoft.com/en-us/sql/sql-server/install/hardware-and-software-requirements-for-installing-sql-server-2019?view=sql-server-ver16)

**NOTE:** In larger environments, SQL Server may become underprovisioned on resources. For
troubleshooting such cases, refer to the [Sample Deployment Scenarios](/docs/auditor/10.7/reference/deployment-scenarios.md)
topic.

Additional Sizing Information for File Data Source

Use this table to determine the requirements for file servers monitoring based on the number of
files in the system. These requirements will add up to the requirements for other monitoring plans.

| Netwrix Auditor                          | Per 1 Million Files | Per 5 Million Files |
| ---------------------------------------- | ------------------- | ------------------- |
| CPUs                                     | 0.2 CPUs            | 1.0 CPUs            |
| RAM (Activity Records only)              | 0.125 GB RAM        | 0.625 GB RAM        |
| RAM (Activity Records and State-in-Time) | 0.5 GB RAM          | 2.5 GB RAM          |

If you are monitoring both Active Directory and Windows File Servers data sources, you calculate
using the requirements for AD, and then add the requirements for your File Servers.

For example, you have a large Active Directory environment which requires 8 cores and 16 GB RAM. Add
the requirements for 5 million files which are 1 CPU and 2.5 GB RAM. Therefore, you will need 9 CPUs
and 18.5 GB RAM.

If you need assistance calculating the number of files you have and already using Netwrix Auditor,
this information is displayed in the Environment Stats located on the Home Screen.

If you have not already started using Netwrix Auditor, you can download the Resource Estimation Tool
by clicking
[the download link](https://releases.netwrix.com/products/auditor/10.7/auditor-resource-estimation-tool-1.2.39.zip).

## Client Installation

The client installation includes only Netwrix Auditor client console that enables you to connect to
the Netwrix Auditor Server installed remotely.

Virtual deployment is recommended.

| Hardware component | Minimum required                                 | Recommended                                                      |
| ------------------ | ------------------------------------------------ | ---------------------------------------------------------------- |
| CPUs               | Any modern CPU (e.g. Intel or AMD 32 bit, 2 GHz) | Any modern 2 CPUs (e.g. Intel Core 2 Duo 2x or 4x 64 bit, 3 GHz) |
| RAM                | 2 GB                                             | 8 GB                                                             |
| Disk space         | 200 MB                                           |                                                                  |

# File-Based Repository for Long-Term Archive

Long-Term Archive is a file-based repository for keeping activity records collected by Auditor.

## Location

Long-Term Archive can be located on the same computer with Auditor Server, or separately - in this
case ensure that the Auditor Server can access the remote machine. By default, the Long-Term Archive
(repository) and Auditor working folder are stored on the system drive. Default path to the
Long-Term Archive is `%ProgramData%\NetwrixAuditor\Data`.

To reduce the impact on the system drive in large and extra-large environments, it is recommended to
move Long-Term Archive to another disk. For that, you should estimate the required capacity using
recommendations in the next section.

Then you should prepare the new folder for repository, target Netwrix Auditor at that folder, and,
if necessary, move repository data from the old to the new location.

Follow the steps to modify Long-Term Archive location and other settings.

**Step 1 –** In Auditor client, click Settings > Long-Term Archive; alternatively, if you are
viewing the Long-Term Archive widget of the Health Status dashboard, click Open settings.

**Step 2 –** Click Modify.

![archive_modify_settings_thumb_0_0](/img/product_docs/auditor/auditor/requirements/archive_modify_settings_thumb_0_0.webp)

**Step 3 –** Enter new path or browse for the required folder.

**Step 4 –** Provide retention settings and access credentials.

**Step 5 –** To move data from the old repository to the new location, take the steps described in
the following Netwrix knowledge base article:
[How to Move Long-Term Archive to a New Location](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA00g000000H9SSCA0.html).

Auditor client will start writing data to the new location right after you complete data moving
procedure.

## Retention

Default retention period for repository data is **120 months**. You can specify the value you need
in the Long-Term Archive settings. When retention period is over, data will be deleted
automatically.

If the retention period is set to **0**, the following logic will be applied:

- **Audit data for SQL Server, file servers, Windows Server:** only data stored by the last **2**
  data collection sessions will be preserved.
- **User activity data:** only data stored by the last **7** data collection sessions will be
  preserved.
- **Other data sources:** only data stored by the last **4** data collection sessions will be
  preserved.

## Capacity

To examine the repository capacity and daily growth, use the Long-Term Archive Capacity of the
Health Status dashboard.

![healthstatusdashboard_thumb_0_0](/img/product_docs/auditor/auditor/admin/healthstatus/dashboard/healthstatusdashboard_thumb_0_0.webp)

To estimate the amount of activity records collected and stored to the repository day by day, use
the [Activity Records Statistics](/docs/auditor/10.7/administration/health-monitoring/activity-statistics.md)
widget. Click View details to see how many activity records were produced by each data source,
collected and saved to the Long-Term Archive and to the database.

Netwrix Auditor will inform you if you are running out of space on a system disk where the
repository is stored by default — you will see this information in the Health Status dashboard, in
the health summary email, and also in the events in the Netwrix Auditor health log.

When free disk space is less than **3 GB**, the Netwrix services responsible for audit data
collection will be stopped.

## Configure Long-Term Archive Account

An account used to write data to the Long-term Archive and upload report subscriptions to shared
folders. By default, the LocalSystem account is used for the archive stored locally and the computer
account is used for archive stored on a file share.

If you want to store the Long-term Archive on a file share, you can specify custom account in
Settings>**Long-Term Archive** in Auditor.

Starting with version 9.96, you can use Group Managed Service Account (gMSA) as the account for
accessing Long-term Archive.

The custom account must be granted the following rights and permissions:

- Advanced permissions on the folder where the Long-term Archive is stored:
  - List folder / read data
  - Read attributes
  - Read extended attributes
  - Create files / write data
  - Create folders / append data
  - Write attributes
  - Write extended attributes
  - Delete subfolders and files
  - Read permissions
- On the file shares where report subscriptions are saved:

  - Change share permission
  - Create files / write data folder permission

  Subscriptions created in the Auditor client  are uploaded to file servers under the Long-Term
  Archive service account as well. See the [Subscriptions](/docs/auditor/10.7/reporting/report-management/report-subscriptions.md)
  topic for additional information.

### Assign Permissions on the Long-Term Archive Folder

The procedure below applies to Windows Server 2012 R2 and above and may vary slightly depending on
your OS.

Follow the steps to assign permissions on the Long-Term Archive folder:

**Step 1 –** Navigate to a folder where the Long-Term Archive will be stored, right-click it and
select Properties.

**Step 2 –** In the **`<Folder_name>` Properties** dialog, select the **Security** tab and click
**Advanced**.

**Step 3 –** In the Advanced Security dialog, select the Permissions tab and click Add.

**Step 4 –** In the Permission Entry for `<Folder_Name>` dialog, apply the following settings:

- Specify an account as principal.
- Set Type to _"Allow"_.
- Set Applies to to _"This folder, subfolders and files"_.
- Switch to the Advanced permissions section.
- Check the following permissions:
  - List folder / read data
  - Read attributes
  - Read extended attributes
  - Create files / write data
  - Create folders / append data
  - Write attributes
  - Write extended attributes
  - Delete subfolders and files
  - Read permissions

### Assign Change and Create Files/Write Data Permissions to Upload Subscriptions to File Shares

The procedure below applies to Windows Server 2012 R2 and above and may vary slightly depending on
your OS.

Follow the steps to assign the **Change** and **Create Files/Write Data** permissions to upload
subscriptions to file shares:

**Step 1 –** Navigate to a folder where report subscriptions will be stored, right-click it and
select Properties.

**Step 2 –** In the **`<Share_Name>` Properties** dialog, select the **Sharing** tab and click
**Advanced Sharing**.

**Step 3 –** In the Advanced Sharing dialog, click Permissions.

**Step 4 –** In the Permissions for `<Share_Name>` dialog, select a principal or add a new, then
check the Allow flag next to Change.

**Step 5 –** Apply settings and return to the **`<Share_Name>` Properties** dialog.

**Step 6 –** In the **`<Share_Name>` Properties** dialog, select the **Security** tab and click
**Advanced**.

**Step 7 –** In the **Advanced Security Settings for `<Share_Name>`** dialog, navigate to the
**Permissions** tab, select a principal and click Edit, or click Add to add a new one.

**Step 8 –** Apply the following settings to your Permission Entry.

- Specify a Netwrix Auditor user as principal.
- Set Type to _"Allow"_.
- Set Applies to to _"This folder, subfolders and files"_.
- Check Create files / write data in the Advanced permissions section.

The users who are going to access report subscriptions must be granted read access to these shares.
Netwrix recommends you to create a dedicated folder and grant access to the entire Netwrix Auditor
Client Users group or any other group assigned the Global reviewer role in Auditor.

## System Health

Long-Term Archive is a file-based storage where Auditor saves the collected activity records. By
default, it is located on the system drive at `%PROGRAMDATA%\Netwrix Auditor\Data` and keeps data
for 120 months. You may want to modify these settings, for example, move the storage from the system
drive to another location. The Long-Term Archive widget will help you to monitor the Long-Term
Archive capacity. The widget displays the current size and daily increase of the Long-Term Archive,
and the remaining free space on the target drive.

To open the Long-Term Archive settings, click the corresponding link. Then you will be able to
adjust the settings as necessary. See the [Long-Term Archive](/docs/auditor/10.7/administration/system-settings/long-term-archive.md)
topic for additional information.

# Software Requirements

The table below lists the software requirements for the Auditor installation:

| Component                       | Full installation (both Auditor Server and Client)                                                                                                                                                                                                                                                                                                     | Client installation (client only)                                                                                                                                                                                                                                                                                                     |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Operating system (English-only) | Windows Server OS: - Windows Server 2025 - Windows Server 2022 - Windows Server 2019 - Windows Server 2016 - Windows Server 2012 R2 Windows Desktop OS (64-bit): - Windows 11 - Windows 10                                                                                                                                                             | Windows Server OS: - Windows Server 2025 - Windows Server 2022 - Windows Server 2019 - Windows Server 2016 - Windows Server 2012 R2 Windows Desktop OS (32 and 64-bit): - Windows 11 - Windows 10                                                                                                                                     |
| .NET Framework                  | - .NET Framework 4.8 and above. See the following Microsoft article for additional information about .Net Framework installer redistributable: [Microsoft .NET Framework 4.8 offline installer for Windows.](https://support.microsoft.com/en-us/topic/microsoft-net-framework-4-8-offline-installer-for-windows-9d23f658-3b97-68ab-d013-aa3c3e7495e0) | —                                                                                                                                                                                                                                                                                                                                     |
| Installer                       | - Windows Installer 3.1 and above See the following Microsoft article for additional information about Windows Installer redistributable: [Windows Installer 3.1 v2 (3.1.4000.2435) is available](https://support.microsoft.com/en-us/topic/windows-installer-3-1-v2-3-1-4000-2435-is-available-e3978d9b-5fbf-bfec-71b9-1a463290065a)                  | - Windows Installer 3.1 and above See the following Microsoft article for additional information about Windows Installer redistributable: [Windows Installer 3.1 v2 (3.1.4000.2435) is available](https://support.microsoft.com/en-us/topic/windows-installer-3-1-v2-3-1-4000-2435-is-available-e3978d9b-5fbf-bfec-71b9-1a463290065a) |

## Other Components

To monitor your data sources, you will need to install additional software components on Auditor
Server, in the monitored environment, or in both locations.

| Data source                                                                 | Components                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Active Directory - Exchange Server - Exchange Online                      | _On the computer where_ Auditor _Server_ _is installed:_ - [Windows PowerShell 3.0](https://www.microsoft.com/en-us/download/details.aspx?id=34595) and above                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| - AD FS                                                                     | _On the computer where_ Auditor _Server_ _is installed:_ - Windows Remote Management must be configured to allow remote PowerShell usage. For that, set up the **TrustedHosts** list: - to include all AD FS servers, use the following cmdlet: `Set-Item wsman:\localhost\Client\TrustedHosts -value '*' -Force;` - to include specific AD FS servers (monitored items), do the following: 1. Use Get cmdlet to obtain the existing **TrustedHosts** list. 2. If necessary, add the IP addresses of required AD FS servers to existing list (use comma as a separator). 3. Provide the updated list to the cmdlet as a parameter. For example: `Set-Item wsman:\localhost\Client\TrustedHosts -value '172.28.57.240,172.28.57.127' -Force;` See the following Microsoft article [Installation and configuration for Windows Remote Management](https://docs.microsoft.com/en-us/windows/win32/winrm/installation-and-configuration-for-windows-remote-management) for additional information about TrustedHosts.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| - Windows Server (with enabled network traffic compression) - User Activity | _In the monitored environment:_ - .NET Framework 4.8 and above. See the following Microsoft article for additional information about .Net Framework installer redistributable: [Microsoft .NET Framework 4.8 offline installer for Windows.](https://support.microsoft.com/en-us/topic/microsoft-net-framework-4-8-offline-installer-for-windows-9d23f658-3b97-68ab-d013-aa3c3e7495e0)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| - Microsoft Entra ID Ports - SharePoint Online                              | Usually, there is no need in any additional components for data collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| - Oracle Database                                                           | Oracle Database 12c and above: _On the computer where_ Auditor _Server_ _is installed:_ - Oracle Instant Client. - Download the appropriate package from Oracle website: [Instant Client Packages](https://www.oracle.com/database/technologies/instant-client.html). Netwrix recommends installing the latest available version (Netwrix Auditor is compatible with version 12 and above). - Install, following the instructions, for example,[ Instant Client Installation for Microsoft Windows 64-bit](https://www.oracle.com/database/technologies/instant-client/winx64-64-downloads.html#instant-client-installation-for-microsoft-windows-64-bit). Check your Visual Studio Redistributable version. Applicable packages for each Oracle Database version with downloading links are listed in the installation instructions: [Instant Client Installation for Microsoft Windows 64-bit](https://www.oracle.com/database/technologies/instant-client/winx64-64-downloads.html#instant-client-installation-for-microsoft-windows-64-bit). Oracle Database 11g: Auditor provides limited support of Oracle Database 11g. See the [Considerations for Oracle Database 11g](/docs/auditor/10.7/data-sources/databases/oracle.md#considerations-for-oracle-database-11g) topic for additional information. _On the computer where_ Auditor _Server_ _is installed:_ - [Microsoft Visual C++ 2010 Redistributable Package](https://www.microsoft.com/en-us/download/details.aspx?id=14632)—can be installed automatically during the monitoring plan creation. - Oracle Data Provider for .NET and Oracle Instant Client Netwrix recommends the following setup steps: 1. Download the [64-bit Oracle Data Access Components 12c Release 4 (12.1.0.2.4) for Windows x64 (ODAC121024_x64.zip)](http://www.oracle.com/technetwork/database/windows/downloads/index-090165.html) package. 2. Run the setup and select the Data Provider for .NET checkbox. Oracle Instant Client will be installed, too. 3. On the ODP.NET (Oracle Data Provider) step make sure the Configure ODP.NET and/or Oracle Providers for ASP.Net at machine-wide level checkbox is selected . |
| - Group Policy                                                              | _On the computer where_ Auditor _Server_ _is installed:_ - Group Policy Management Console. Download Remote Server Administration Tools that include GPMC for: - [Windows 8.1](http://www.microsoft.com/en-us/download/details.aspx?id=39296) - [Windows 10](https://www.microsoft.com/en-us/download/details.aspx?id=45520) - For Windows Server 2012 R2/2016, Group Policy Management is turned on as a Windows feature.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## Using SSRS-based Reports

SQL Server Reporting Services are needed for this kind of reports. See the
[Requirements for SQL Server to Store Audit Data](/docs/auditor/10.7/installation-and-setup/system-requirements/sql-server-requirements.md) topic for additional information. If
you plan to export or print such reports, check the requirements below.

**NOTE:** Please note that if you are going to use SQL Express plan, do not install SSRS and Auditor
on the domain controller.

Export SSRS-based reports

To export SSRS-based reports, it is recommended Internet Explorer is installed on the machine where
Auditor client runs. If IE is not available, you can use the **Print** function or click the button
**Open in browser** and export the report directly from Netwrix Auditor.

See the following Microsoft article for the full list of the supported browsers:
[Browser Support for Reporting Services and Power View](https://learn.microsoft.com/en-us/sql/reporting-services/browser-support-for-reporting-services-and-power-view?view=sql-server-ver16).

Follow the steps to configure Internet Options to allow file downloads for the Local intranet zone.

**Step 1 –** Select **Internet Options** and click **Security**.

**Step 2 –** Select **Local intranet** zone and click **Custom level**.

**Step 3 –** In the Settings list, locate **Downloads** > **File download** and make sure the
**Enabled** option is selected.

Printing

To print SSRS-based reports, SSRS Report Viewer and Auditor Client require ActiveX Control to be
installed and enabled on the local machine. See the
[Impossible to Export a Report ](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u000000HDfkCAG.html)
Netwrix knowledge base article for additional information.

You can, for example, open any SSRS-based report using your default web browser and click **Print**.
The browser will prompt for installation of the additional components it needs for printing. Having
them installed, you will be able to print the reports from Auditor UI as well.

## Server and Client

It is recommended to deploy Auditor server on the virtualized server – to simplify backup, provide
scalability for future growth, and facilitate hardware configuration updates. Auditor client can be
deployed on a physical or virtual workstation, as it only provides the UI.

You can deploy Netwrix Auditor on the VM running on any of the following hypervisors:

- VMware vSphere Hypervisor (ESXi)

  - You can deploy Netwrix Auditor to VMware cloud. You can install the product to a virtual
    machine or deploy as virtual appliance.

- Microsoft Hyper-V
- Nutanix AHV (Acropolis Hypervisor Virtualization) 20180425.199

See the [Virtual Deployment Overview](/docs/auditor/10.7/installation-and-setup/installation/virtual-appliance.md) topic for additional
information.

### Domains and Trusts

You can deploy Auditor on servers or workstations running supported Windows OS version. See system
requirements for details.

Installation on the domain controller is not supported.

If you plan to have the audited system and Auditor Server residing in the workgroups, consider that
in such scenario the product cannot be installed on the machine running Windows 7.

Domain trusts, however, may affect data collection from different data sources. To prevent this,
consider the recommendations and restrictions listed below.

| If Auditor Server and the audit system reside... | Mind the following restrictions...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| In the same domain                               | No restrictions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| In two-way trusted domains                       | No restrictions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| In non-trusted domains                           | - The computer where Auditor Server is installed must be able to access the target system (server, share, database instance, SharePoint farm, DC, etc.) by its DNS or NetBIOS name. - For monitoring Active Directory, File Servers, SharePoint, Group Policy, Inactive Users, Logon Activity, and Password Expiration, the domain where your target system resides as well as all domain controllers must be accessible by DNS or NetBIOS names—use the _nslookup_ command-line tool to look up domain names. - For monitoring Windows Server and User Activity, each monitored computer (the computer where Netwrix Auditor User Activity Core Service resides) must be able to access the Auditor Server host by its DNS or NetBIOS name. |
| In workgroups                                    | - The computer where Auditor Server is installed must be able to access the target system (server, share, database instance, SharePoint farm, DC, etc.) by its DNS or NetBIOS name. - For monitoring Active Directory, File Servers, SharePoint, Group Policy, Inactive Users, Logon Activity, and Password Expiration, the domain where your target system resides as well as all domain controllers must be accessible by DNS or NetBIOS names—use the _nslookup_ command-line tool to look up domain names. - For monitoring Windows Server and User Activity, each monitored computer (the computer where Netwrix Auditor User Activity Core Service resides) must be able to access the Auditor Server host by its DNS or NetBIOS name. |

In the next sections you will find some recommendations based on the size of your monitored
environment and the number of activity records (ARs) the product is planned to process per day.

Activity record stands for one operable chunk of information in Auditor workflow.

### Simple Deployment

This scenario can be used for PoC, evaluation, or testing purposes. It can be also suitable for
small infrastructures, producing only several thousands of activity records per day. In this
scenario, you only deploy Auditor Server and default client, selecting Full installation option
during the product setup.

![na_setup_select_type_thumb_0_0](/img/product_docs/auditor/auditor/requirements/na_setup_select_type_thumb_0_0.webp)

If you plan to implement this scenario in bigger environments, consider hardware requirements listed
in the Auditor documentation.

### Distributed Deployment (Client-Server)

In this scenario, multiple Auditor clients are installed on different machines.

Follow the steps to perform distributed deployment.

**Step 1 –** Install Auditor server and default client, selecting Full installation during the
product setup.

**Step 2 –** Then install as many clients as you need, running the setup on the remote machines and
selecting Client installation during the setup. Alternatively, you can install Auditor client using
Group Policy. See the [Install Client via Group Policy](/docs/auditor/10.7/installation-and-setup/installation/group-policy-deployment.md) topic for
additional information.

Default local client will be always installed together with the Auditor in all scenarios.

# Working Folder

The working folder is a file-based storage that also keeps operational information (configuration
files of the product components, log files, and other data). To ensure audit trail continuity,
Netwrix Auditor also caches some audit data locally in its working folder for a short period (up to
30 days) prior to storing it to the Long-Term Archive or audit database.

By default, the working folder is located at _%ProgramData%\Netwrix Auditor_.

In busy environments and during activity peaks, working folder size may grow significantly and
require up to 1 TB, so plan for this file-based storage accordingly. To track the working folder
capacity, you can use the Working Folder widget of the Health Status dashboard.

If you want to change the working folder default location, run the specially designed utility. See
the
[How to Migrate Netwrix Auditor Working Folder to a New Location](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA00g000000PcOLCA0.html)
Knowledge Base article for additional information.

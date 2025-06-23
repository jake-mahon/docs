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

Auditor supports only Windows OS versions listed in the
[Software Requirements](/docs/auditor/10.6/getting-started/requirements.md) topic.

Netwrix Auditor and SQL Server instance will be deployed on different servers.

Requirements below apply to Netwrix Auditor server.

| Hardware component | Evaluation, PoC or starter environment | Regular environment (up to 1m ARs\*/day) | Large environment (1-10m ARs\*/day)       | XLarge environment (10m ARs\*/day or more)                       |
| ------------------ | -------------------------------------- | ---------------------------------------- | ----------------------------------------- | ---------------------------------------------------------------- |
| CPUs               | 2 cores                                | 4 CPUs                                   | 8 CPUs                                    | 16 CPUs                                                          |
| RAM                | 8 GB                                   | min 8 GB                                 | min 16 GB                                 | 64 GB                                                            |
| Disk space         | 100 GB—System drive 100 GB—Data drive  | 100 GB—System drive 400 GB—Data drive    | 500 GB—System drive\*\* 1.5 TB—Data drive | Up to 1 TB—System drive\*\* Up to several TB per year—Data drive |
| Others             | —                                      | —                                        | Network capacity 1 Gbit                   | Network capacity 1 Gbit                                          |

\* — ARs stands for Activity Records, that is, Netwrix-compatible format for the audit data. See
[Activity Records](/docs/auditor/10.6/api/activity-records.md)[Activity Records](/docs/auditor/10.6/api/activity-records.md)
for more details.

\*\* — By default, the Long-Term Archive and working folder are stored on a system drive. To reduce
the impact on the system drive in large and xlarge environments, Netwrix recommends storing your
Long-Term Archive and working folder on a data drive and plan for their capacity accordingly. For
details, see:

- [File-Based Repository for Long-Term Archive](/docs/auditor/10.6/getting-started/requirements.md)
- [Working Folder](/docs/auditor/10.6/getting-started/requirements.md)

Netwrix Auditor informs you if you are running out of space on a system disk where the Long-Term
Archive is stored by default. You will see related events in the Health log once the free disk space
starts approaching the minimum level. When the free disk space is less than 3 GB, the Netwrix
services responsible for audit data collection will be stopped.

For detailed information about hardware requirements for a standalone SQL Server, refer to the
following Microsoft article:
[SQL Server: Hardware and software requirements](https://learn.microsoft.com/en-us/sql/sql-server/install/hardware-and-software-requirements-for-installing-sql-server-2019?view=sql-server-ver16)

**NOTE:** In larger environments, SQL Server may become underprovisioned on resources. For
troubleshooting such cases, refer to the
[Sample Deployment Scenarios](/docs/auditor/10.6/reference/deployment-scenarios.md)
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
Long-Term Archive is _%ProgramData%\NetwrixAuditor\Data_.

To reduce the impact on the system drive in large and extra-large environments, it is recommended to
move Long-Term Archive to another disk. For that, you should estimate the required capacity using
recommendations in the next section.

Then you should prepare the new folder for repository, target Netwrix Auditor at that folder, and,
if necessary, move repository data from the old to the new location.

Follow the steps to modify Long-Term Archive location and other settings.

**Step 1 –** In Auditor client, click Settings > Long-Term Archive; alternatively, if you are
viewing the Long-Term Archive widget of the Health Status dashboard, click Open settings.

**Step 2 –** Click Modify.

![archive_modify_settings](/img/versioned_docs/auditor_10.6/auditor/requirements/archive_modify_settings.webp)

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

![healthstatusdashboard](/img/versioned_docs/auditor_10.6/auditor/admin/healthstatus/dashboard/healthstatusdashboard.webp)hboard.webp)

To estimate the amount of activity records collected and stored to the repository day by day, use
the
[Activity Records Statistics](/docs/auditor/10.6/features/health-monitoring/health-dashboard.md)
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
  Archive service account as well. See the
  [Subscriptions](/docs/auditor/10.6/features/reporting/subscriptions.md) topic for
  additional information.

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
default, it is located on the system drive at _%PROGRAMDATA%\Netwrix Auditor\Data_ and keeps data
for 120 months. You may want to modify these settings, for example, move the storage from the system
drive to another location. The Long-Term Archive widget will help you to monitor the Long-Term
Archive capacity. The widget displays the current size and daily increase of the Long-Term Archive,
and the remaining free space on the target drive.

To open the Long-Term Archive settings, click the corresponding link. Then you will be able to
adjust the settings as necessary. See the
[Long-Term Archive](/docs/auditor/10.6/administration/settings/archive-settings.md) topic
for additional information.

# Requirements

This topic provides the requirements for the server where Netwrix Auditor will be installed. See the
following topics for additional information:

- [Supported Data Sources](/docs/auditor/10.6/getting-started/requirements.md)
- [Hardware Requirements](/docs/auditor/10.6/getting-started/requirements.md)
- [Software Requirements](/docs/auditor/10.6/getting-started/requirements.md)
- [Requirements for SQL Server to Store Audit Data](/docs/auditor/10.6/getting-started/requirements.md)

## Architecture Overview

Netwrix Auditor provides comprehensive auditing of applications, platforms and storage systems. The
product architecture and components interactions are shown in the figure below.

![Netwrix Auditor architecture and components interactions](/img/versioned_docs/auditor_10.6/auditor/requirements/auditorarchitecture.webp)

- Netwrix Auditor Server — the central component that handles the collection, transfer and
  processing of audit data from the various data sources (audited systems). Data from the sources
  not yet supported out of the box is collected using RESTful Integration API.
- Netwrix Auditor Client — a component that provides a friendly interface to authorized personnel
  who can use this console UI to manage the product settings, examine alerts, reports and search
  results. Other users can obtain audit data by email or with 3rd party tools — for example, reports
  can be provided to the management team via the intranet portal.
- Data sources — entities that represent the types of audited systems supported by Netwrix Auditor
  (for example, Active Directory, Exchange Online, NetApp storage system, and so on), or the areas
  you are interested in (Group Policy, User Activity, and others).
- Long-Term Archive — a file-based repository storage keeps the audit data collected from all your
  data sources or imported using Integration API in a compressed format for a long period of time.
  Default retention period is 120 months.
- Audit databases — these are Microsoft SQL Server databases used as operational storage. This type
  of data storage allows you to browse recent data, run search queries, generate reports and
  alerts.  
  Typically, data collected from the certain data source (for example, Exchange Server) is stored to
  the dedicated Audit database and the long-term archive. So, you can configure as many databases as
  the data sources you want to process. Default retention period for data stored in the Audit
  database is 180 days

**NOTE:** When auditing Active Directory domains, Exchange servers, expired passwords, and inactive
users, the data sent by the product can be encrypted using Signing and Sealing. See the following
Netwrix knowledge base article for additional information on how to secure Netwrix Auditor:
[Best Practices for Securing Netwrix Auditor](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA00g000000H9SPCA0.html).

### Workflow Stages

The general workflow stages are as follows:

- Authorized administrators prepare IT infrastructure and data sources they are going to audit, as
  recommended in Netwrix Auditor documentation and industry best practices; they use Netwrix Auditor
  Client (management UI) to set up automated data processing.
- Netwrix Auditor collects audit data from the specified data source (application, server, storage
  system, and so on).

  - To provide a coherent picture of changes that occurred in the audited systems, the product can
    consolidate data from multiple independent sources (event logs, configuration snapshots,
    change history records, etc.). This capability is implemented with Netwrix Auditor Server and
    Integration API.
  - See the [Integration API](/docs/auditor/10.6/api/index.md) topic for
    additional information on custom data source processing workflow.

- Audit data is stored to the Audit databases and the repository (Long-Term Archive) and preserved
  there according to the corresponding retention settings.
- Netwrix Auditor analyzes the incoming audit data and alerts appropriate staff about critical
  changes, according to the built-in alerts you choose to use and any custom alerts you have
  created.
- Authorized users use the Netwrix Auditor Client to view pre-built dashboards, run predefined
  reports, conduct investigations, and create custom reports based on their searches. Other users
  obtain the data they need via email or third-party tools.
- To enable historical data analysis, Netwrix Auditor can extract data from the repository and
  import it to the Audit database, where it becomes available for search queries and report
  generation.

# Software Requirements

The table below lists the software requirements for the Auditor installation:

| Component                       | Full installation (both Auditor Server and Client)                                                                                                                                                                                                                                                                                                     | Client installation (client only)                                                                                                                                                                                                                                                                                                     |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Operating system (English-only) | Windows Server OS: - Windows Server 2022 - Windows Server 2019 - Windows Server 2016 - Windows Server 2012 R2 Windows Desktop OS (64-bit): - Windows 10 - Windows 8.1                                                                                                                                                                                  | - Windows Desktop OS (32 and 64-bit): Windows 8.1, Windows 10 - Windows Server OS: Windows Server 2012 R2, Windows Server 2016, and Windows Server 2019                                                                                                                                                                               |
| .NET Framework                  | - .NET Framework 4.8 and above. See the following Microsoft article for additional information about .Net Framework installer redistributable: [Microsoft .NET Framework 4.8 offline installer for Windows.](https://support.microsoft.com/en-us/topic/microsoft-net-framework-4-8-offline-installer-for-windows-9d23f658-3b97-68ab-d013-aa3c3e7495e0) | —                                                                                                                                                                                                                                                                                                                                     |
| Installer                       | - Windows Installer 3.1 and above See the following Microsoft article for additional information about Windows Installer redistributable: [Windows Installer 3.1 v2 (3.1.4000.2435) is available](https://support.microsoft.com/en-us/topic/windows-installer-3-1-v2-3-1-4000-2435-is-available-e3978d9b-5fbf-bfec-71b9-1a463290065a)                  | - Windows Installer 3.1 and above See the following Microsoft article for additional information about Windows Installer redistributable: [Windows Installer 3.1 v2 (3.1.4000.2435) is available](https://support.microsoft.com/en-us/topic/windows-installer-3-1-v2-3-1-4000-2435-is-available-e3978d9b-5fbf-bfec-71b9-1a463290065a) |

## Other Components

To monitor your data sources, you will need to install additional software components on Auditor
Server, in the monitored environment, or in both locations.

| Data source                                                                 | Components                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Active Directory - Exchange Server - Exchange Online                      | _On the computer where_ Auditor _Server_ _is installed:_ - [Windows PowerShell 3.0](https://www.microsoft.com/en-us/download/details.aspx?id=34595) and above - If target server is running Windows 2008 R2, then Microsoft Visual C++ 2008 SP1 Redistributable Package (x64) is required (available here: [Microsoft Visual C++ 2008 Service Pack 1 Redistributable Package MFC Security Update](https://www.microsoft.com/en-us/download/details.aspx?id=26368)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| - AD FS                                                                     | _On the computer where_ Auditor _Server_ _is installed:_ - Windows Remote Management must be configured to allow remote PowerShell usage. For that, set up the **TrustedHosts** list: - to include all AD FS servers, use the following cmdlet: `Set-Item wsman:\localhost\Client\TrustedHosts -value '*' -Force;` - to include specific AD FS servers (monitored items), do the following: 1. Use Get cmdlet to obtain the existing **TrustedHosts** list. 2. If necessary, add the IP addresses of required AD FS servers to existing list (use comma as a separator). 3. Provide the updated list to the cmdlet as a parameter. For example: `Set-Item wsman:\localhost\Client\TrustedHosts -value '172.28.57.240,172.28.57.127' -Force;` See the following Microsoft article [Installation and configuration for Windows Remote Management](https://docs.microsoft.com/en-us/windows/win32/winrm/installation-and-configuration-for-windows-remote-management) for additional information about TrustedHosts.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| - Windows Server (with enabled network traffic compression) - User Activity | _In the monitored environment:_ - .NET Framework 4.8 and above. See the following Microsoft article for additional information about .Net Framework installer redistributable: [Microsoft .NET Framework 4.8 offline installer for Windows.](https://support.microsoft.com/en-us/topic/microsoft-net-framework-4-8-offline-installer-for-windows-9d23f658-3b97-68ab-d013-aa3c3e7495e0)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| - Microsoft Entra ID Ports - SharePoint Online                              | Usually, there is no need in any additional components for data collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| - Oracle Database                                                           | Oracle Database 12c and above: _On the computer where_ Auditor _Server_ _is installed:_ - Oracle Instant Client. - Download the appropriate package from Oracle website: [Instant Client Packages](https://www.oracle.com/database/technologies/instant-client.html). Netwrix recommends installing the latest available version (Netwrix Auditor is compatible with version 12 and above). - Install, following the instructions, for example,[ Instant Client Installation for Microsoft Windows 64-bit](https://www.oracle.com/database/technologies/instant-client/winx64-64-downloads.html#instant-client-installation-for-microsoft-windows-64-bit). Check your Visual Studio Redistributable version. Applicable packages for each Oracle Database version with downloading links are listed in the installation instructions: [Instant Client Installation for Microsoft Windows 64-bit](https://www.oracle.com/database/technologies/instant-client/winx64-64-downloads.html#instant-client-installation-for-microsoft-windows-64-bit). Oracle Database 11g: Auditor provides limited support of Oracle Database 11g. See the [Considerations for Oracle Database 11g](/docs/auditor/10.6/data-sources/databases/oracle.md#considerations-for-oracle-database-11g) topic for additional information. _On the computer where_ Auditor _Server_ _is installed:_ - [Microsoft Visual C++ 2010 Redistributable Package](https://www.microsoft.com/en-us/download/details.aspx?id=14632)—can be installed automatically during the monitoring plan creation. - Oracle Data Provider for .NET and Oracle Instant Client Netwrix recommends the following setup steps: 1. Download the [64-bit Oracle Data Access Components 12c Release 4 (12.1.0.2.4) for Windows x64 (ODAC121024_x64.zip)](http://www.oracle.com/technetwork/database/windows/downloads/index-090165.html) package. 2. Run the setup and select the Data Provider for .NET checkbox. Oracle Instant Client will be installed, too. 3. On the ODP.NET (Oracle Data Provider) step make sure the Configure ODP.NET and/or Oracle Providers for ASP.Net at machine-wide level checkbox is selected . |
| - Group Policy                                                              | _On the computer where_ Auditor _Server_ _is installed:_ - Group Policy Management Console. Download Remote Server Administration Tools that include GPMC for: - [Windows 8.1](http://www.microsoft.com/en-us/download/details.aspx?id=39296) - [Windows 10](https://www.microsoft.com/en-us/download/details.aspx?id=45520) - For Windows Server 2012 R2/2016, Group Policy Management is turned on as a Windows feature. - If target server is running Windows 2008 R2, then Microsoft Visual C++ 2008 SP1 Redistributable Package (x64) is required (available here: at [Microsoft Visual C++ 2008 Service Pack 1 Redistributable Package MFC Security Update](https://www.microsoft.com/en-us/download/details.aspx?id=26368)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

## Using SSRS-based Reports

SQL Server Reporting Services are needed for this kind of reports. See the
[Requirements for SQL Server to Store Audit Data](/docs/auditor/10.6/getting-started/requirements.md)
topic for additional information. If you plan to export or print such reports, check the
requirements below.

**NOTE:** Please note that if you are going to use SQL Express plan, do not install SSRS and Auditor
on the domain controller.

Export SSRS-based reports

To export SSRS-based reports, Internet Explorer recommended to be installed on the machine where
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
scalability for future growth, and facilitate hardware configuration updates. Auditor clent can be
deployed on a physical or virtual workstation, as it only provides the UI.

You can deploy Netwrix Auditor on the VM running on any of the following hypervisors:

- VMware vSphere Hypervisor (ESXi)

  - You can deploy Netwrix Auditor to VMware cloud. You can install the product to a virtual
    machine or deploy as virtual appliance.

- Microsoft Hyper-V
- Nutanix AHV (Acropolis Hypervisor Virtualization) 20180425.199

See the
[Virtual Deployment Overview](/docs/auditor/10.6/installation/virtual-appliance.md)
topic for additional information.

### Domains and Trusts

You can deploy Auditor on servers or workstations running supported Windows OS version. See system
requirements for details.

Installation on the domain controller is not supported.

If you plan to have the audited system and Auditor Server residing in the workgroups, consider that
in such scenario the product cannot be installed on the machine running Windows 7 or Windows Server
2008 R2.

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

![na_setup_select_type](/img/versioned_docs/auditor_10.6/auditor/requirements/na_setup_select_type.webp)

If you plan to implement this scenario in bigger environments, consider hardware requirements listed
in the Auditor documentation.

### Distributed Deployment (Client-Server)

In this scenario, multiple Auditor clients are installed on different machines.

Follow the steps to perform distributed deployment.

**Step 1 –** Install Auditor server and default client, selecting Full installation during the
product setup.

**Step 2 –** Then install as many clients as you need, running the setup on the remote machines and
selecting Client installation during the setup. Alternatively, you can install Auditor client using
Group Policy. See the
[Install Client via Group Policy](/docs/auditor/10.6/installation/install-guide.md)
topic for additional information.

Default local client will be always installed together with the Auditor in all scenarios.

# Requirements for SQL Server to Store Audit Data

If you plan to generate reports, use alerts and run search queries in Netwrix Auditor, consider that
your deployment must include Microsoft SQL Server where audit data will be stored. For report
generation, Reporting Services (or Advanced Services) are also required.

Supported SQL Server versions and editions are listed below.

Due to limited database size, Express Edition (with Reporting Services) is recommended only for
evaluation, PoC or small environments. For production environment, consider using Standard or
Enterprise Edition.

| Version                                                                      | Edition                                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SQl Server 2022                                                              | - Standard or Enterprise Edition - [Express Edition](https://www.microsoft.com/en-us/download/details.aspx?id=104781) with [Reporting Services](https://www.microsoft.com/en-us/download/details.aspx?id=104502) (for evaluation, PoC and small environments)                                             |
| SQL Server 2019 (on-premises Windows version) cumulative update 10 and above | - Standard or Enterprise Edition - [Express Edition](https://go.microsoft.com/fwlink/?linkid=866658) with [Reporting Services](https://www.microsoft.com/en-us/download/details.aspx?id=100122) (for evaluation, PoC and small environments)                                                              |
| SQL Server 2017                                                              | - Standard or Enterprise Edition - [Express Edition](https://go.microsoft.com/fwlink/?linkid=866658) with [Reporting Services](https://www.microsoft.com/en-us/download/details.aspx?id=100122) (for evaluation, PoC and small environments)                                                              |
| SQL Server 2016                                                              | - Standard or Enterprise Edition - [Express Edition with Advanced Services (SP2)](https://www.microsoft.com/en-us/download/details.aspx?id=56840) (for evaluation, PoC and small environments)                                                                                                            |
| SQL Server 2014                                                              | - Standard or Enterprise Edition - [Express Edition with Advanced Services](https://www.microsoft.com/en-us/download/details.aspx?id=42299) (for evaluation, PoC and small environments)                                                                                                                  |
| SQL Server 2012                                                              | - Standard or Enterprise Edition - [Express Edition with Advanced Services](http://www.microsoft.com/en-us/download/details.aspx?id=29062) (for evaluation, PoC and small environments)                                                                                                                   |
| SQL Server 2008 R2                                                           | - Standard or Enterprise Edition - [Express Edition with Advanced Services](http://www.microsoft.com/en-us/download/details.aspx?id=30438) (for evaluation, PoC and small environments)                                                                                                                   |
| SQL Server 2008                                                              | - [Express Edition with Advanced Services](http://www.microsoft.com/download/en/details.aspx?displaylang=en&id=1695) - Standard or Enterprise Edition SQL Server Reporting Services 2008 is not supported. In this case you have to manually install and configure Reporting Services 2008 R2 (or later). |

**NOTE:** SQL express is only supported for small environments. It might cause performance issues on
the medium and large environments.

SQL Server
[AlwaysOn Availability Group](https://docs.microsoft.com/en-us/sql/database-engine/availability-groups/windows/overview-of-always-on-availability-groups-sql-server)
can also be used for hosting Netwrix Auditor audit databases. For that, after specifying audit
database settings in Netwrix Auditor, you should manually add created database to a properly
configured AlwaysOn Availability Group. These steps must be taken each time a new audit database is
created in Netwrix Auditor.

See the
[Add a database to an Always On availability group with the 'Availability Group Wizard'](https://docs.microsoft.com/en-us/sql/database-engine/availability-groups/windows/availability-group-add-database-to-group-wizard)
Microsoft article for details on adding a database to AlwaysOn Availability Group.

You can configure Netwrix Auditor to use an existing SQL Server instance, or deploy a new instance.

If your deployment planning reveals that SQL Server Express Edition will be suitable for your
production environment, then you can install, for example, SQL Server 2016 SP2 Express with Advanced
Services using the Audit Database Settings wizard or by manually downloading it from Microsoft web
site. See the
[Install Microsoft SQL Server and Reporting Services](#install-microsoft-sql-server-and-reporting-services)
section for additional information.

## SQL Server and Databases

Netwrix Auditor uses SQL Server databases as operational storages that keep audit data for analysis,
search and reporting purposes. Supported versions are SQL Server 2008 and later (Reporting Services
versions should be 2008 R2 or later).

- You will be prompted to configure the default SQL Server instance when you create the first
  monitoring plan; also, you can specify it Netwrix Auditor settings.
- You can configure Netwrix Auditor to use an existing instance of SQL Server, or deploy a new
  instance, as described in the
  [Create a New Monitoring Plan](/docs/auditor/10.6/monitoring-plans/creating-plans.md)
  topic.

For evaluation and PoC projects you can deploy Microsoft SQL Server 2016 SP2 Express Edition with
Advanced Services (sufficient for report generation).

For production deployment in bigger environments, it is recommended to use Microsoft SQL Server
Standard Edition or higher because of the limited database size and other limitations of Express
Edition.

Make your choice based on the size of the environment you are going to monitor, the number of users
and other factors. This refers, for example, to Netwrix Auditor for Network Devices: if you need to
audit successful logons to these devices, consider that large number of activity records will be
produced, so plan for SQL Server Standard or Enterprise edition (Express edition will not fit).

Netwrix Auditor supports automated size calculation for all its databases in total, displaying the
result, in particular, in the
[Database Statistics](/docs/auditor/10.6/features/health-monitoring/health-dashboard.md)
of the Health Status dashboard. This feature, however, is supported only for SQL Server 2008 SP3 and
later.

### Databases

To store data from the data sources included in the monitoring plan, the Monitoring Plan Wizard
creates an Audit Database. Default database name is _Netwrix_Auditor_`<monitoring_plan_name>`\_.

It is strongly recommended to target each monitoring plan at a separate database.

Also, several dedicated databases are created automatically on the default SQL Server instance.
These databases are intended for storing various data, as listed below.

| Database name                 | Description                                                                                                                                                                               |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Netwrix_AlertsDB              | Stores alerts.                                                                                                                                                                            |
| Netwrix_Auditor_API           | Stores activity records collected using Integration API.                                                                                                                                  |
| Netwrix_Auditor_EventLog      | Stores internal event records.                                                                                                                                                            |
| **Netwrix_CategoriesDB**      | Intended for integration with Netwrix Data Classification. This database is always created but is involved in the workflow only if the DDC Provider is enabled. See for more information. |
| Netwrix_CommonDB              | Stores views to provide cross-database reporting.                                                                                                                                         |
| Netwrix_ImportDB              | Stores data imported from Long-Term Archive.                                                                                                                                              |
| **Netwrix_OverviewReportsDB** | Stores data required for overview reports.                                                                                                                                                |
| **Netwrix_Self_Audit**        | Stores data collected by Netwrix Auditor self-audit (optional, created if the corresponding feature is enabled).                                                                          |

These databases usually do not appear in the UI; they are only listed in the **Database statistics**
widget of the **Health Status** dashboard. If you need their settings to be modified via SQL Server
Management Studio, please contact your database administrator. For example, you may need to change
logging and recovery model (by default, it is set to **simple** for all these databases, as well as
for the Audit databases).

## Install Microsoft SQL Server and Reporting Services

Netwrix Auditor uses Microsoft SQL Server database as short-term data storage and utilizes SQL
Server Reporting Services engine for report generation. You can either use your existing SQL Server
for these purposes, or deploy a new server instance. System requirements for SQL Server are listed
in the corresponding section of this guide.

Consider the following:

- Supported versions are 2008 and later. Note that SQL Server Reporting Services 2008 is not
  supported; for this version you should install and configure Reporting Services 2008 R2 or later.
- **NOTE:** Please, note that for the Reporting Services, only English operating systems are
  supported.
- Supported editions are Enterprise, Standard and Express with Advanced Services (it includes
  Reporting Services).
- If downloading SQL Server Express Edition with Advanced Services from Microsoft site, make sure
  you download the file whose name contains SQLEXPRADV. Otherwise, Reporting Services will not be
  deployed, and you will not be able to analyze and report on collected data.

By the way of example, this section provides instructions on how to:

- [SQL Server Reporting Services](/docs/auditor/10.6/getting-started/requirements.md)

For detailed information on installing other versions/editions, refer to Microsoft website.

Maximum database size provided in SQL Server Express editions may be insufficient for storing data
in bigger infrastructures. Thus, when planning for SQL Server, consider maximum database capacity in
different editions, considering the size of the audited environment.

## SQL Server

When planning for SQL Server that will host Auditor databases, consider the following:

- For PoC, evaluation scenario or small environment SQL Server can run on the same computer where
  Netwrix Auditor Server will be installed, or on the remote machine accessible by Netwrix Auditor.
  Remember to check connection settings and access rights.
- In large and extra-large infrastructures SQL Server should be installed on a separate server or
  cluster. Installation of Netwrix Auditor and SQL Server on the same server is not recommended in
  such environments.
- If you plan to have Netwrix Auditor and SQL Server running on different machines, establish fast
  and reliable connection between them (100 Mbps or higher).
- Both standalone servers and SQL Server clusters are supported, as well as AlwaysOn Availability
  Groups.
- You can configure Netwrix Auditor to use an existing SQL Server instance, or create a new one. As
  an option, you can install SQL Server 2016 Express Edition, using the Audit Database Settings
  wizard or manually downloading it from Microsoft web site (see
  [Install Microsoft SQL Server and Reporting Services](#install-microsoft-sql-server-and-reporting-services)).

**CAUTION:** It is not recommended to install Netwrix Auditor databases to a production SQL Server
instance. Such instances may have a lot of maintenance plans or scripts running that may affect data
uploaded by the product. The product databases are designed for reporting and searching and do not
require maintenance or backup. For the long-term data storage, Netwrix Auditor uses Long-Term
Archive. See
[File-Based Repository for Long-Term Archive](/docs/auditor/10.6/getting-started/requirements.md)
for additional information.

If you select to set up a new SQL Server instance, the current user account (this should be a member
of local Administrators group) will be assigned the _sysadmin_ server role for it.

You will also need to provide a path for storing the SQL Server databases - it is recommended to
specify the data drive for that purpose (by default, system drive is used).

- If you plan to have more than one Netwrix Auditor Servers in your network, make sure to configure
  them to use different SQL Server instances. The same SQL Server instance cannot be used to store
  audit data collected by several Netwrix Auditor Servers.
- Consider that sufficient access rights will be required for the account that will write data to
  the audit databases hosted on the default SQL Server. This account should be assigned the
  following roles:

  1. **Database owner (db_owner)** database-level role
  2. dbcreator server-level role

  This account can be specified when you configure the
  [Audit Database](/docs/auditor/10.6/administration/settings/database-settings.md) settings.

## Database Sizing

For database sizing, it is recommended to estimate:

- Size of the environment you are going to monitor
- Amount of activity records produced by the audited system
- Retention policy for the audit databases
- Maximum database size supported by different SQL Server versions

To estimate the number of the activity records produced by your data sources, collected and saved by
Auditor during the week, you can use the Activity records by date widget of the Health Status
dashboard. See the
[Activity Records Statistics](/docs/auditor/10.6/features/health-monitoring/health-dashboard.md)
topic for additional information.

Auditor supports automated size calculation for all its databases in total, displaying the result,
in particular, in the Database Statistics widget of the Health Status dashboard. To estimate current
capacity and daily growth for each database, you can click View details and examine information in
the table. See the
[Database Statistics](/docs/auditor/10.6/features/health-monitoring/health-dashboard.md)
topic for additional information.

This feature is supported only for SQL Server 2008 SP3 and later.

Remember that database size in SQL Server Express editions may be insufficient. For example,
Microsoft SQL Server 2012 SP3 Express Edition has the following limitations which may affect
performance:

- Each instance uses only up to 1 GB of RAM
- Each instance uses only up to 4 cores of the first CPU
- Database size cannot exceed 10 GB

## Database Settings

Settings of the certain Audit database, including hosting SQL Server, can be specified when you
create a monitoring plan and configure data collection for an audited system. Consider the
following:

- To store data from the data sources included in the monitoring plan, you can configure the Audit
  database on the default SQL Server (recommended), or select another server.
- By default, database name will be _Netwrix_Auditor_`<monitoring_plan_name>`_; you can name the
  database as you need, for example, \_Active_Directory_Audit_Data_.

To avoid syntax errors, for instance, in the PowerShell cmdlets, it is recommended to use the
underscore character (\_) instead of space character in the database names.

If not yet existing on the specified SQL server instance, the database will be created there. For
this operation to succeed, ensure that Netwrix Auditor service account has sufficient rights on that
SQL Server.

Settings of other Auditor databases cannot be modified.

### Example

As a database administrator, you can have SQL Server cluster of 2 servers, and 2 Oracle servers. If
so, you can create 2 monitoring plans:

1. First monitoring plan for collecting data from SQL Servers, targeted at
   _Netwrix_Auditor_SQL_Monitoring_ database.
2. Second monitoring plan for collecting data from Oracle servers, targeted at
   _Netwrix_Auditor_Oracle_Monitoring_ database.

### Database Retention

Consider that retention is a global setting, that is, it applies to all Audit databases you
configure for your monitoring plans.

Follow the steps to change database retention after the product deployment.

**Step 1 –** In the Auditor main screen, select Settings > Audit Database.

![audit_db_settings](/img/versioned_docs/auditor_10.6/auditor/admin/settings/audit_db_settings.webp)

**Step 2 –** In the dialog displayed, make sure the Clear stale data when a database retention
period is exceeded: is set to ON, then click Modify to specify the required retention period (in
days).

This setting also applies to the _Netwrix_Auditor_API_ database.

## Configure Audit Database Account

This is the account that Auditor uses to write the collected audit data to the audit databases.
Starting with version 9.96, you can use Group Managed Service Account (gMSA) for that purpose.

_Remember,_ gMSA cannot be used to access SSRS. Use a standard account for that. See the
[SQL Server Reporting Services](/docs/auditor/10.6/getting-started/requirements.md)
topic for additional information.

This account must be granted the **Database owner (db_owner)** role and the **dbcreator** server
role on the SQL Server instance hosting your audit databases.

Follow the steps to assign the **dbcreator** and **db_owner** roles.

**Step 3 –** On the computer where SQL Server instance with the Audit Database resides, navigate to
**Start** > **All Programs** > **Microsoft SQL Server** > **SQL Server Management Studio**.

**Step 4 –** Connect to the server.

**Step 5 –** In the left pane, expand the **Security** node. Right-click the **Logins** node and
select **New Login** from the pop-up menu.

![manualconfig_ssms_newlogin2016](/img/versioned_docs/auditor_10.6/auditor/configuration/sqlserver/manualconfig_ssms_newlogin2016.webp)

**Step 6 –** Click **Search** next to **Login Name** and specify the user that you want to assign
the **db_owner** role to.

**Step 7 –** Select **Server roles** on the left and assign the **dbcreator** role to the new login.

**Step 8 –** Select the **User Mapping** tab. Select all databases used by Auditor to store audit
data in the upper pane and check **db_owner** in the lower pane.

**NOTE:** This step is only required when changing the existing Audit Database Account to a new one.

**Step 9 –** If the account that you want to assign the **db_owner** role to has been already added
to **SQL Server Logins**, expand the **Security** > **Logins** node, right-click the account, select
**Properties** from the pop-up menu, and edit its roles.

If you need to migrate the Audit Database, see the
[How to Migrate Netwrix Auditor Databases to Another SQL Server Instance](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA00g000000Pbd8CAC.html)
knowledge base article.

# SQL Server Reporting Services

Netwrix Auditor utilizes SQL Server Reporting Services (SSRS) engine for report generation.

If you want to generate reports and run search queries against data collected by Netwrix Auditor,
you should configure SQL Server Reporting Services (2012 R2 and above required).

Consider the following:

- SQL Server and SQL Server Reporting Services can be deployed on the separate machines only in
  commercial edition. SQL Server Express Edition with Advanced Services does not support such
  deployment scenario.

**NOTE:** It is recommended to use HTTPS instead of HTTP. HTTPS connection should also be configured
for Reporting Service.

If you plan, however, not to use Netwrix Auditor built-in intelligence (search, alerts or reports)
but only to receive e-mail notifications on audit data collection results, you may not need to
configure SSRS or audit database settings.

## Configure SSRS Account

An account used to upload data to the SQL Server Reporting Services (SSRS) Server must be granted
the Content Manager role on the SSRS **Home** folder.

**NOTE:** gMSA cannot be used to access SSRS. Use a standard account for that purpose.

Follow the steps to assign the Content Manager role.

**Step 1 –** Navigate to your **Report Manager** URL.

**Step 2 –** On the Home page, navigate to **Folder Settings** and click **New Role Assignment**
(the path can slightly vary depending on your SQL Server version).

**Step 3 –** Specify an account in the following format: _domain\user_. The account must belong to
the same domain where Netwrix Auditor is installed, or to a trusted domain.

**Step 4 –** Select **Content Manager**.

## Grant Additional Permissions on Report Server

To be able to generate a report, any user assigned the Global administrator, Global reviewer, or
Reviewer role must be granted the Browser role on the Report Server. Netwrix Auditor grants this
role automatically when adding a user. If for some reason the product was unable to grant the role,
do it manually.

Follow the steps to assign the Browser role to a user.

**Step 1 –** Open the **Report Manager** URL in your web browser.

**Step 2 –** Depending on the user's delegated scope, select the entire Home folder or drill-down to
specific data sources or event reports.

**Step 3 –** Navigate to **Manage Folder** (the path can slightly vary depending on your SQL Server
version) and select Add group or user.

**Step 4 –** Specify an account in the following format: _domain\user_. The account must belong to
the same domain where Netwrix Auditor Server is installed, or to a trusted domain.

**Step 5 –** Select **Browser**.

As a rule, Auditor can use Reporting Services with the default settings. However, to ensure that
Reporting Services is properly configured, perform the following procedure:

You must be logged in as a member of the local Administrators group on the computer where SQL Server
2016 Express is installed.

Follow the steps to verify Reporting Services installation.

**Step 1 –** Navigate to **Start >\_\_**All Apps > SQL Server\_**\_Reporting Services Configuration
Manager**.

**Step 2 –** In the Reporting Services Configuration Connection dialog, make sure that your local
report server instance (for example, _SQLExpress_) is selected, and click **Connect**.

**Step 3 –** In the **Reporting Services Configuration Manager** left pane, select **Web Service
URL**. Make sure that:

- **Virtual Directory** is set to _ReportServer_`<YourSqlServerInstanceName>` (e.g.,
  _ReportServer_SQLEXPRESS_ for _SQLEXPRESS_ instance)
- **TCP Port** is set to _80_

**Step 4 –** In the Reporting Services Configuration Manager left pane, select **Database**. Make
sure that the SQL Server Name and Database Name fields contain correct values. If necessary, click
**Change Database** and complete the Report Server Database Configuration wizard.

**Step 5 –** In the Reporting Services Configuration Manager left pane, select **Report Manager
URL**. Make sure **Virtual Directory** is set correctly, and that the URL is valid.

# Supported Data Sources

This section lists platforms and systems that can be monitored with Netwrix Auditor.

## Active Directory

Auditor supports monitoring the following domain controller operating system versions:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016
- Windows Server 2012 R2
- Windows Server 2012
- Windows Server 2008 R2
- Windows Server 2008

See the
[Active Directory](/docs/auditor/10.6/data-sources/active-directory/index.md)
topic for additional information.

## Active Directory Federation Services (AD FS)

Auditor supports monitoring the following AD FS operating system versions:

- AD FS 5.0 – Windows Server 2019
- AD FS 4.0 – Windows Server 2016
- AD FS 3.0 – Windows Server 2012 R2

See the
[AD FS](/docs/auditor/10.6/data-sources/authentication/adfs.md)
topic for additional information.

## Exchange

Auditor supports monitoring the following Exchange Server versions:

- Microsoft Exchange Server 2019
- Microsoft Exchange Server 2016
- Microsoft Exchange Server 2013

See the [Exchange](/docs/auditor/10.6/data-sources/infrastructure/exchange-server.md) topic
for additional information.

## File Servers

Dell Data Storage

Auditor supports monitoring the following device versions:

- Dell Data Storage (Unity XT, UnityVSA) running any of the following operating environment
  versions:

  - 5.2.x
  - 5.0.x
  - 4.5.x
  - 4.4.x

- Dell VNX/VNXe/Celerra families

**NOTE:** Only CIFS configuration is supported.

See the
[Dell Data Storage](/docs/auditor/10.6/data-sources/file-servers/dell-storage.md)
topic for additional information.

Dell Ilison/PowerScale

Auditor supports monitoring the following device versions:

- Dell Isilon/PowerScale versions 7.2 – 9.4

**NOTE:** Only CIFS configuration is supported.

Auditing of _System_ zone is not supported. As stated by Dell, this zone should be reserved for
configuration access only. Current data should be stored in other access zones. See the
[Isilon OneFS 8.2.1 CLI Administration Guide](https://www.dellemc.com/en-us/collaterals/unauth/technical-guides-support-information/2019/09/docu95372.pdf)
for additional information.

See the
[Dell Isilon/PowerScale](/docs/auditor/10.6/data-sources/file-servers/dell-storage.md)
topic for additional information.

NetApp Data ONTAP

Auditor supports monitoring the following device versions:

- Clustered-Mode

  - 9.0 – 9.14
  - 8.3, 8.3.1, 8.3.2
  - 8.2.1 – 8.2.3

**NOTE:** Only CIFS configuration is supported.

See the
[NetApp Data ONTAP](/docs/auditor/10.6/data-sources/file-servers/netapp.md)
topic for additional information.

Nutanix

Auditor supports monitoring the following device versions:

- Files 3.6 - 4.3.0

See the
[Nutanix](/docs/auditor/10.6/data-sources/file-servers/nutanix.md) topic
for additional information.

Qumulo

Auditor supports monitoring the following device versions:

- Core 3.3.5 - 6.x.x

See the [Qumulo](/docs/auditor/10.6/data-sources/file-servers/qumulo.md)
topic for additional information.

Synology

Auditor supports monitoring the following device versions:

- DSM 7.2
- DSM 7.1
- DSM 7.0
- DSM 6.2.3

See the
[Synology](/docs/auditor/10.6/data-sources/file-servers/synology.md)
topic for additional information.

Windows File Servers

Auditor supports monitoring the following operating system versions:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016
- Windows Server 2012 R2
- Windows Server 2012
- Windows Server 2008 R2
- Windows Server 2008

- Windows 11
- Windows 10 (32 and 64-bit)
- Windows 8.1 (32 and 64-bit)
- Windows 7 (32 and 64-bit)

See the
[Windows File Servers](/docs/auditor/10.6/data-sources/file-servers/windows-file-servers.md)
topic for additional information.

## Group Policy

Auditor supports monitoring the following domain controller operating system versions:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016
- Windows Server 2012 R2
- Windows Server 2012
- Windows Server 2008 R2
- Windows Server 2008

See the [Group Policy](/docs/auditor/10.6/data-sources/infrastructure/group-policy.md)
topic for additional information.

## Logon Activity

Auditor supports monitoring the following domain controller operating system versions:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016
- Windows Server 2012 R2
- Windows Server 2012
- Windows Server 2008 R2
- Windows Server 2008

See the
[Logon Activity](/docs/auditor/10.6/data-sources/authentication/logon-activity.md) topic
for additional information.

## Microsoft 365

Exchange Online

Auditor supports monitoring the following versions:

- Exchange Online version provided within Microsoft 365
- Microsoft GCC (government community cloud) and GCC High

  **NOTE:** DoD tenant types are not supported.

See the
[Exchange Online](/docs/auditor/10.6/data-sources/microsoft-365/exchange-online.md)
topic for additional information.

Microsoft Entra ID (formerly Azure AD)

Auditor supports monitoring the following versions:

- Microsoft Entra ID version provided within Microsoft 365
- Microsoft GCC (government community cloud) and GCC High

  **NOTE:** DoD tenant types are not supported.

See the Microsoft Entra ID (formerly Azure AD) topic for additional information.

Microsoft Teams (MS Teams)

Auditor supports monitoring the following versions:

- Microsoft Entra ID version provided within Microsoft 365
- Microsoft GCC (government community cloud) and GCC High

  **NOTE:** DoD tenant types are not supported.

See the
[MS Teams](/docs/auditor/10.6/data-sources/microsoft-365/teams.md) topic
for additional information.

SharePoint Online

Auditor supports monitoring the following versions:

- SharePoint Online version provided within Microsoft 365
- Microsoft GCC (government community cloud) and GCC High

  **NOTE:** DoD tenant types are not supported.

See the
[SharePoint Online](/docs/auditor/10.6/data-sources/microsoft-365/sharepoint-online.md)
topic for additional information.

## Network Devices

Cisco ASA Devices

Auditor supports monitoring the following device versions:

- ASA (Adaptive Security Appliance) 8 and above

See the
[Configure Cisco ASA Devices](/docs/auditor/10.6/data-sources/infrastructure/network-devices.md)
topic for additional information.

Cisco IOS Devices

Auditor supports monitoring the following device versions:

- IOS (Internetwork Operating System) 12, 15, 16, and 17

See the
[Configure Cisco IOS Devices](/docs/auditor/10.6/data-sources/infrastructure/network-devices.md)
topic for additional information.

Cisco Meraki Dashboard

Auditor supports monitoring the following device versions:

- Netwrix recommends the latest version of the Meraki Dashboard

See the
[Cisco Meraki Dashboard ](/docs/auditor/10.6/data-sources/infrastructure/network-devices.md)
topic for additional information.

Cisco FTD

Auditor supports monitoring the following device versions:

- FTD (Firepower Threat Defense) 6.5

Fortinet FortiGate Devices

Auditor supports monitoring the following device versions:

- FortiOS 5.6 and above

See the
[Configure Fortinet FortiGate Devices](/docs/auditor/10.6/data-sources/infrastructure/network-devices.md)
topic for additional information.

HPE Aruba Devices

Auditor supports monitoring the following device versions:

- Aruba OS 6.46.4.x – 8.6.0.x (Mobility Master, Mobility Controller)

See the
[Configure Pulse Secure Devices](/docs/auditor/10.6/data-sources/infrastructure/network-devices.md)
topic for additional information.

Juniper Devices

Auditor supports monitoring the following device versions:

- vSRX with Junos OS 12.1, Junos OS 18.1, Junos OS 20.4R2
- vMX with Junos OS 17.1

See the
[Configure Juniper Devices](/docs/auditor/10.6/data-sources/infrastructure/network-devices.md)
topic for additional information.

PaloAlto Devices

Auditor supports monitoring the following device versions:

- PAN-OS 7.0, 8.0, 9.0, 10.0

See the
[Configure PaloAlto Devices](/docs/auditor/10.6/data-sources/infrastructure/network-devices.md)
topic for additional information.

Pulse Secure Devices

Auditor supports monitoring the following device versions:

- 9.1R3 and above

See the
[Configure Pulse Secure Devices](/docs/auditor/10.6/data-sources/infrastructure/network-devices.md)
topic for additional information.

SonicWall Devices

Auditor supports monitoring the following device versions:

- WAF 2.0.0.x / SMA v9.x & v10.x
- NS 6.5.х.х with SonicOS 6.5.х and 7.0.x
- SMA 12.2

See the
[Configure SonicWall Devices](/docs/auditor/10.6/data-sources/infrastructure/network-devices.md)
topic for additional information.

## Oracle

Auditor supports monitoring the following versions:

- Database 23c On-Premise
- Database 21c On-Premise
- Database 19c On-Premise
- Database 18c On-Premise
- Database 12c On-Premise (12.1, 12.2)
- Database 11g, limited support

  **NOTE:** See the
  [Considerations for Oracle Database 11g](/docs/auditor/10.6/data-sources/databases/oracle.md#considerations-for-oracle-database-11g)
  topic for additional information.

- Oracle Database Cloud Service (Enterprise Edition)

See the [Oracle Database](/docs/auditor/10.6/data-sources/databases/oracle.md)
topic for additional information.

## SharePoint

Auditor supports monitoring the following versions:

- Microsoft SharePoint Server Subscription Edition
- Microsoft SharePoint Server 2019
- Microsoft SharePoint Server 2016
- Microsoft SharePoint Foundation 2013 and SharePoint Server 2013
- Microsoft SharePoint Foundation 2010 and SharePoint Server 2010

See the [SharePoint](/docs/auditor/10.6/data-sources/infrastructure/sharepoint-server.md)
topic for additional information.

## SQL Server

Auditor supports monitoring the following versions:

- Microsoft SQL Server 2022
- Microsoft SQL Server 2019
- Microsoft SQL Server 2017
- Microsoft SQL Server 2016
- Microsoft SQL Server 2014
- Microsoft SQL Server 2012

**NOTE:** Linux-based versions are not supported.

See the [SQL Server](/docs/auditor/10.6/data-sources/databases/sql-server.md) topic
for additional information.

## User Activity

Auditor supports monitoring the following versions:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016
- Windows Server 2012 R2
- Windows Server 2012
- Windows Server 2008 R2
- Windows Server 2008

- Windows 11
- Windows 10 (32 and 64-bit)
- Windows 8.1 (32 and 64-bit)
- Windows 7 (32 and 64-bit)

User Activity data source can support around 300 targets with one user session per target without
scalability issues:

- Depending on how dense is the actual user activity, the number can be more for servers but less
  for workstations.
- 50-100 concurrent sessions per terminal server.

Netwrix recommends using the User Activity auditing only for those infrastructure areas that require
more attention due to their sensitivity or criticality. Applicable usage scenarios include, for
example:

- Terminal servers where users can log in from external locations
- Areas accessible by contractor personnel
- Servers with sensitive information
- Sessions with elevated privileges

See the [User Activity](/docs/auditor/10.6/add-ons/user-activity.md)
topic for additional information.

## VMware Servers

Auditor supports monitoring the following versions:

- VMware ESX/ESXi: 6.0 – 6.7, 7.0, 8.0
- VMware vCenter Server: 6.0 – 6.7, 7.0, 8.0

See the [VMware](/docs/auditor/10.6/data-sources/infrastructure/vmware.md) topic for
additional information.

## Windows Servers

Windows Servers & Desktops

Auditor supports monitoring the following operating system versions:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016
- Windows Server 2012 R2
- Windows Server 2012
- Windows Server 2008 R2
- Windows Server 2008

- Windows 11
- Windows 10 (32 and 64-bit)
- Windows 8.1 (32 and 64-bit)
- Windows 7 (32 and 64-bit)

DNS & DHCP

Auditor supports monitoring the following operating system versions:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016
- Windows Server 2012 R2
- Windows Server 2012
- Windows Server 2008 R2
- Windows Server 2008

**NOTE:** DNS support is limited on Windows Server 2008 to Windows Server 2008 SP2 (32 and 64-bit).
DHCP is not supported on Windows Server 2008.

Internet Information Services (IIS)

Auditor supports monitoring the following operating system versions:

- IIS 7.0 and above.

See the
[Windows Server](/docs/auditor/10.6/data-sources/infrastructure/windows-servers.md) topic
for additional information.

## Netwrix Integration API

In addition to data sources monitored within the product, Auditor supports technology integrations
leveraging its API. Download free add-ons from
[Netwrix Auditor Add-on Store](https://www.netwrix.com/netwrix_addons.html) to enrich your audit
trails with activity from the following systems and applications.

Also, there are even add-ons that can export data collected by Auditor to other systems (e.g.,
ArcSight and ServiceNow).

See the [Integration API](/docs/auditor/10.6/api/index.md) topic for additional
information.

## Monitored Object Types, Actions, and Attributes

Review the list of object types, attributes and components audited and reported by Netwrix Auditor.

- [Active Directory](/docs/auditor/10.6/data-sources/active-directory/index.md)
- [AD FS](/docs/auditor/10.6/data-sources/authentication/adfs.md)
- [Exchange](/docs/auditor/10.6/data-sources/infrastructure/exchange-server.md)
- [File Servers](/docs/auditor/10.6/data-sources/file-servers/index.md)

  - [Dell Data Storage](/docs/auditor/10.6/data-sources/file-servers/dell-storage.md)
  - [Dell Isilon/PowerScale](/docs/auditor/10.6/data-sources/file-servers/dell-storage.md)
  - [NetApp Data ONTAP](/docs/auditor/10.6/data-sources/file-servers/netapp.md)
  - [Nutanix](/docs/auditor/10.6/data-sources/file-servers/nutanix.md)
  - [Qumulo](/docs/auditor/10.6/data-sources/file-servers/qumulo.md)
  - [Synology](/docs/auditor/10.6/data-sources/file-servers/synology.md)
  - [Windows File Servers](/docs/auditor/10.6/data-sources/file-servers/windows-file-servers.md)

- [Group Policy](/docs/auditor/10.6/data-sources/infrastructure/group-policy.md)
- [Logon Activity](/docs/auditor/10.6/data-sources/authentication/logon-activity.md)
- [Microsoft 365](/docs/auditor/10.6/data-sources/microsoft-365/index.md)

  - [Exchange Online](/docs/auditor/10.6/data-sources/microsoft-365/exchange-online.md)
  - [Microsoft Entra ID](/docs/auditor/10.6/data-sources/microsoft-365/azure-entra-id.md)
  - [SharePoint Online](/docs/auditor/10.6/data-sources/microsoft-365/sharepoint-online.md)
  - [MS Teams](/docs/auditor/10.6/data-sources/microsoft-365/teams.md)

- [Network Devices](/docs/auditor/10.6/data-sources/infrastructure/network-devices.md)
- [Oracle Database](/docs/auditor/10.6/data-sources/databases/oracle.md)
- [SharePoint](/docs/auditor/10.6/data-sources/infrastructure/sharepoint-server.md)
- [SQL Server](/docs/auditor/10.6/data-sources/databases/sql-server.md)
- [User Activity](/docs/auditor/10.6/add-ons/user-activity.md)
- [VMware](/docs/auditor/10.6/data-sources/infrastructure/vmware.md)
- [Windows Server](/docs/auditor/10.6/data-sources/infrastructure/windows-servers.md)

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

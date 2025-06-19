# Active Directory Solution

The core components for Netwrix Enterprise Auditor are the Enterprise Auditor Console server, SQL
Server, and Access Information Center. See the
[Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/system-requirements.md)
topic for the core requirements.

In addition to these, integration with either the Netwrix Activity Monitor or the Netwrix Threat
Prevention is required for event activity data to be scanned. See the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor) or
the
[Netwrix Threat Prevention Documentation](https://helpcenter.netwrix.com/category/threatprevention)
for installation requirements and information on collecting activity data.

See the
[Active Directory Domain Target Requirements](/docs/accessanalyzer/11.6/configuration-guides/directory-services/active-directory.md)
topic for target environment requirements.

## Active Directory Solution Requirements on the Enterprise Auditor Console

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment:

| Environment | Large                   | Medium – Small         |
| ----------- | ----------------------- | ---------------------- |
| Definition  | ~100,000 Users & Groups | ~50,000 Users & Groups |
| RAM         | 8+ GB                   | 4+ GB                  |
| Cores       | 4 CPU                   | 2 CPU                  |
| Disk Space  | 30 GB                   | 30 GB                  |

## Active Directory Solution Requirements on the SQL Server

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment.

| Environment              | Large                   | Medium – Small         |
| ------------------------ | ----------------------- | ---------------------- |
| Definition               | ~100,000 Users & Groups | ~50,000 Users & Groups |
| RAM                      | 16+ GB                  | 16+ GB                 |
| Cores                    | 8 CPU                   | 4 CPU                  |
| Number of Disks          | 4                       | 4                      |
| Operating System Disk    | 160 GB                  | 160 GB                 |
| SQL Database Disk        | 300 GB                  | 70-120 GB              |
| SQL Transaction Log Disk | 80 GB                   | 50 GB                  |
| SQL TEMP DB Disk         | 160 GB                  | 100 GB                 |

# Active Directory Permissions Analyzer Solution

The core components for Netwrix Enterprise Auditor are the Enterprise Auditor Console server, SQL
Server, and Access Information Center. See the
[Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/system-requirements.md)
topic for the core requirements.

See the
[Domain Target Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
topic for target environment requirements.

## Active Directory Permissions Analyzer Solution Requirements on the Enterprise Auditor Console

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment:

| Environment | Large                   | Medium – Small         |
| ----------- | ----------------------- | ---------------------- |
| Definition  | ~100,000 Users & Groups | ~50,000 Users & Groups |
| RAM         | 8+ GB                   | 4+ GB                  |
| Cores       | 4 CPU                   | 2 CPU                  |
| Disk Space  | 30 GB                   | 30 GB                  |

## Active Directory Permissions Analyzer Solution Requirements on the SQL Server

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment.

| Environment              | Large                   | Medium – Small         |
| ------------------------ | ----------------------- | ---------------------- |
| Definition               | ~100,000 Users & Groups | ~50,000 Users & Groups |
| RAM                      | 16+ GB                  | 16+ GB                 |
| Cores                    | 8 CPU                   | 4 CPU                  |
| Number of Disks          | 4                       | 4                      |
| Operating System Disk    | 160 GB                  | 160 GB                 |
| SQL Database Disk        | 1 TB                    | 450 GB                 |
| SQL Transaction Log Disk | 240 GB                  | 120 GB                 |
| SQL TEMP DB Disk         | 350 GB                  | 240 GB                 |

# Amazon Web Services (AWS) Solution

The core components for Netwrix Enterprise Auditor are the Enterprise Auditor Console server, SQL
Server, and Access Information Center. See the
[Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/system-requirements.md)
topic for the core requirements.

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans.

See the
[Target Amazon Web Service Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
topic for target environment requirements.

## AWS Solution Requirements on the Enterprise Auditor Console

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment:

| Environment | Large          | Medium – Small |
| ----------- | -------------- | -------------- |
| Definition  | > 100 Accounts | < 100 Accounts |
| RAM         | 8+ GB          | 4+ GB          |
| Cores       | 4 CPU          | 2 CPU          |
| Disk Space  | 30 GB          | 30 GB          |

**NOTE:** If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the
minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For
example, if the job is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are
required (8x2=16).

Sensitive Data Discovery Auditing Requirement

The following is required to run Sensitive Data Discovery scans:

- Sensitive Data Discovery Add-On installed on the Enterprise Auditor Console server

**NOTE:** The Sensitive Data Discovery Add-on installation package installs the appropriate JDK
(Java) version on the server. The JDK deployed is prepackaged and does not require any
configuration; it has been preconfigured to work with Enterprise Auditor and should never be
customized through Java. It will not conflict with other JDKs or Java Runtimes in the same
environment.

## AWS Solution Requirements on the SQL Server

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment.

| Environment              | Large          | Medium – Small |
| ------------------------ | -------------- | -------------- |
| Definition               | > 100 Accounts | < 100 Accounts |
| RAM                      | 16+ GB         | 16+ GB         |
| Cores                    | 8 CPU          | 4 CPU          |
| Number of Disks          | 4              | 4              |
| Operating System Disk    | 160 GB         | 160 GB         |
| SQL Database Disk        | 300 GB         | 70-120 GB      |
| SQL Transaction Log Disk | 80 GB          | 50 GB          |
| SQL TEMP DB Disk         | 160 GB         | 100 GB         |

# Box Solution

The core components for Netwrix Enterprise Auditor are the Enterprise Auditor Console server, SQL
Server, and Access Information Center. See the
[Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/system-requirements.md)
topic for the core requirements.

See the
[Target Box Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
topic for target environment requirements.

## Box Solution Requirements on the Enterprise Auditor Console

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment:

| Environment | Large                   | Medium – Small         |
| ----------- | ----------------------- | ---------------------- |
| Definition  | ~100,000 Users & Groups | ~50,000 Users & Groups |
| RAM         | 8+ GB                   | 4+ GB                  |
| Cores       | 4 CPU                   | 2 CPU                  |
| Disk Space  | 30 GB                   | 30 GB                  |

## Box Solution Requirements on the SQL Server

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment.

| Environment              | Large                   | Medium – Small         |
| ------------------------ | ----------------------- | ---------------------- |
| Definition               | ~100,000 Users & Groups | ~50,000 Users & Groups |
| RAM                      | 16+ GB                  | 16+ GB                 |
| Cores                    | 8 CPU                   | 4 CPU                  |
| Number of Disks          | 4                       | 4                      |
| Operating System Disk    | 160 GB                  | 160 GB                 |
| SQL Database Disk        | 300 GB                  | 70-120 GB              |
| SQL Transaction Log Disk | 80 GB                   | 50 GB                  |
| SQL TEMP DB Disk         | 160 GB                  | 100 GB                 |

# Databases Solution

The core components for Netwrix Enterprise Auditor are the Enterprise Auditor Console server, SQL
Server, and Access Information Center. See the
[Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/system-requirements.md)
topic for the core requirements.

In addition to these, integration with either the Netwrix Activity Monitor is required for event
activity data to be scanned. See the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
for installation requirements and information on collecting activity data.

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans.

See the following topics for target environment requirements:

- [Target Db2 Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
- [Target MongoDB Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
- [Target MySQL Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
- [Target Oracle Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
- [Target PostgreSQL Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
- [Target Redshift Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
- [Target SQL Server Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)

## Databases Solution Requirements on the Enterprise Auditor Console

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment:

| Environment | Extra-Large          | Large                    | Medium                | Small                |
| ----------- | -------------------- | ------------------------ | --------------------- | -------------------- |
| Definition  | > 1 TB database size | Up to 1 TB database size | ~250 GB database size | ~50 GB database size |
| RAM         | 24 GB                | 16 GB                    | 12 GB                 | 4 GB                 |
| Cores       | 8 CPU                | 8 CPU                    | 4 CPU                 | 2 CPU                |
| Disk Space  | 460 GB               | 280 GB                   | 160 GB                | 80 GB                |

**NOTE:** If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the
minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host.For
example, if the job is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are
required (8x2=16).

Additional Server Considerations for Oracle Scans

For scanning Oracle databases, the following are additional requirements for the Console server:

- Windows Management Framework 3+ installed
- PowerShell 3.0+ installed
- NMAP installed
- For Instance Discovery, NMAP installed

Additional Server Considerations for SQL Server Scans

For scanning SQL databases, the following are additional requirements for the Console server:

- Windows Management Framework 3+ installed
- PowerShell 3.0+ installed

Sensitive Data Discovery Auditing Requirement

The following is required to run Sensitive Data Discovery scans:

- Sensitive Data Discovery Add-On installed on the Enterprise Auditor Console server

**NOTE:** The Sensitive Data Discovery Add-on installation package installs the appropriate JDK
(Java) version on the server. The JDK deployed is prepackaged and does not require any
configuration; it has been preconfigured to work with Enterprise Auditor and should never be
customized through Java. It will not conflict with other JDKs or Java Runtimes in the same
environment.

## Databases Solution Requirements on the SQL Server

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment.

| Environment              | Extra-Large          | Large                    | Medium                | Small                |
| ------------------------ | -------------------- | ------------------------ | --------------------- | -------------------- |
| Definition               | > 1 TB database size | Up to 1 TB database size | ~250 GB database size | ~50 GB database size |
| RAM                      | 64 GB                | 32 GB                    | 16 GB                 | 8 GB                 |
| Cores                    | 16 CPU               | 12 CPU                   | 8 CPU                 | 4 CPU                |
| Number of Disks          | 4                    | 4                        | 4                     | 4                    |
| Operating System Disk    | 160 GB               | 160 GB                   | 160 GB                | 160 GB               |
| SQL Database Disk        | 500 GB               | 320 GB                   | 240 GB                | 100 GB               |
| SQL Transaction Log Disk | 120 GB               | 100 GB                   | 80 GB                 | 40 GB                |
| SQL TEMP DB Disk         | 320 GB               | 240 GB                   | 160 GB                | 80 GB                |

# Dropbox Solution

The core components for Netwrix Enterprise Auditor are the Enterprise Auditor Console server, SQL
Server, and Access Information Center. See the
[Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/system-requirements.md)
topic for the core requirements.

In addition to these, integration with either the Netwrix Activity Monitor or the Netwrix Threat
Prevention is required for event activity data to be scanned. See the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor) or
the
[Netwrix Threat Prevention Documentation](https://helpcenter.netwrix.com/category/threatprevention)
for installation requirements and information on collecting activity data.

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans.

See the
[Target Dropbox Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
topic for target environment requirements.

## Dropbox Solution Requirements on the Enterprise Auditor Console

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment:

| Environment | Large                   | Medium – Small         |
| ----------- | ----------------------- | ---------------------- |
| Definition  | ~100,000 Users & Groups | ~50,000 Users & Groups |
| RAM         | 8+ GB                   | 4+ GB                  |
| Cores       | 4 CPU                   | 2 CPU                  |
| Disk Space  | 30 GB                   | 30 GB                  |

**NOTE:** If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the
minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host.For
example, if the job is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are
required (8x2=16).

Sensitive Data Discovery Auditing Requirement

The following is required to run Sensitive Data Discovery scans:

- Sensitive Data Discovery Add-On installed on the Enterprise Auditor Console server

**NOTE:** The Sensitive Data Discovery Add-on installation package installs the appropriate JDK
(Java) version on the server. The JDK deployed is prepackaged and does not require any
configuration; it has been preconfigured to work with Enterprise Auditor and should never be
customized through Java. It will not conflict with other JDKs or Java Runtimes in the same
environment.

## Dropbox Solution Requirements on the SQL Server

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment.

| Environment              | Large                   | Medium – Small         |
| ------------------------ | ----------------------- | ---------------------- |
| Definition               | ~100,000 Users & Groups | ~50,000 Users & Groups |
| RAM                      | 16+ GB                  | 16+ GB                 |
| Cores                    | 8 CPU                   | 4 CPU                  |
| Number of Disks          | 4                       | 4                      |
| Operating System Disk    | 160 GB                  | 160 GB                 |
| SQL Database Disk        | 300 GB                  | 70-120 GB              |
| SQL Transaction Log Disk | 80 GB                   | 50 GB                  |
| SQL TEMP DB Disk         | 160 GB                  | 100 GB                 |

# Entra ID Solution

**NOTE:** The Entra ID solution is for scanning Microsoft Entra ID, formerly Azure Active Directory.

The core components for Netwrix Enterprise Auditor are the Enterprise Auditor Console server, SQL
Server, and Access Information Center. See the
[Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/system-requirements.md)
topic for the core requirements.

See the
[Microsoft Entra ID Tenant Target Requirements](/docs/accessanalyzer/11.6/configuration-guides/directory-services/entra-id.md)
topic for target environment requirements.

## Entra ID Solution Requirements on the Enterprise Auditor Console

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment:

| Environment | Large                   | Medium – Small         |
| ----------- | ----------------------- | ---------------------- |
| Definition  | ~100,000 Users & Groups | ~50,000 Users & Groups |
| RAM         | 8+ GB                   | 4+ GB                  |
| Cores       | 4 CPU                   | 2 CPU                  |
| Disk Space  | 30 GB                   | 30 GB                  |

## Entra ID Solution Requirements on the SQL Server

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment.

| Environment              | Large                   | Medium – Small         |
| ------------------------ | ----------------------- | ---------------------- |
| Definition               | ~100,000 Users & Groups | ~50,000 Users & Groups |
| RAM                      | 16+ GB                  | 16+ GB                 |
| Cores                    | 8 CPU                   | 4 CPU                  |
| Number of Disks          | 4                       | 4                      |
| Operating System Disk    | 160 GB                  | 160 GB                 |
| SQL Database Disk        | 300 GB                  | 70-120 GB              |
| SQL Transaction Log Disk | 80 GB                   | 50 GB                  |
| SQL TEMP DB Disk         | 160 GB                  | 100 GB                 |

# Exchange Solution

The core components for Netwrix Enterprise Auditor are the Enterprise Auditor Console server, SQL
Server, and Access Information Center. See the
[Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/system-requirements.md)
topic for the core requirements.

In addition to these, integration with either the Netwrix Activity Monitor or the Netwrix Threat
Prevention is required for event activity data to be scanned. See the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor) or
the
[Netwrix Threat Prevention Documentation](https://helpcenter.netwrix.com/category/threatprevention)
for installation requirements and information on collecting activity data.

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans.

See the following topics for target environment requirements:

- [Target Exchange Servers Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
- [Target Exchange Online Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)

## Exchange Solution Requirements on the Enterprise Auditor Console

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment:

| Environment | Extra Large – Large       | Medium – Small          |
| ----------- | ------------------------- | ----------------------- |
| Definition  | ~50,000-120,000 Mailboxes | ~1,000-10,000 Mailboxes |
| RAM         | 16+ GB                    | 8+ GB                   |
| Cores       | 8 CPU                     | 4 CPU                   |
| Disk Space  | 120 GB                    | 120 GB                  |

**NOTE:** If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the
minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host.For
example, if the job is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are
required (8x2=16).

Sensitive Data Discovery Auditing Requirement

The following is required to run Sensitive Data Discovery scans:

- Sensitive Data Discovery Add-On installed on the Enterprise Auditor Console server

**NOTE:** The Sensitive Data Discovery Add-on installation package installs the appropriate JDK
(Java) version on the server. The JDK deployed is prepackaged and does not require any
configuration; it has been preconfigured to work with Enterprise Auditor and should never be
customized through Java. It will not conflict with other JDKs or Java Runtimes in the same
environment.

Permissions to Run Exchange Scans

The following are additional requirements for the Enterprise Auditor Console server specific to
running the Exchange Solution:

- Outlook should not be installed
- StealthAUDIT MAPI CDO installed (for MAPI- based data collectors). See the
  [StealthAUDIT MAPI CDO Installation](/docs/accessanalyzer/11.6/configuration-guides/stealthaudit/configuration.md)
  topic for additional information.
- Exchange MAPI CDO installed (for MAPI- based data collectors)
- For targeting Exchange 2010 – Exchange Management Tools 2010 installed on the Enterprise Auditor
  Console server
- For Targeting Exchange Online – PowerShell Execution Policy set to unrestricted for both 64-bit
  and 32-bit versions

Exchange Online Modern Authentication

The following prerequisites are required to use Modern Authentication for Exchange Online in
Enterprise Auditor.

- Exchange Online Management v3.4.0

  - You can install this module with the following command:

    ```
    Install-Module -Name ExchangeOnlineManagement -RequiredVersion 3.4.0
    ```

- Create a self-signed certificate that will be used by Enterprise Auditor for Modern Authentication

## Exchange Solution Requirements on the SQL Server

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment.

| Environment              | Extra-Large        | Large             | Medium            | Small            |
| ------------------------ | ------------------ | ----------------- | ----------------- | ---------------- |
| Definition               | ~120,000 Mailboxes | ~50,000 Mailboxes | ~10,000 Mailboxes | ~1,000 Mailboxes |
| RAM                      | 64 GB              | 16 GB             | 16 GB             | 8 GB             |
| Cores                    | 16 CPU             | 16 CPU            | 8 CPU             | 4 CPU            |
| Number of Disks          | 4                  | 4                 | 4                 | 4                |
| Operating System Disk    | 160 GB             | 160 GB            | 160 GB            | 160 GB           |
| SQL Database Disk        | 1.25 TB            | 650 GB            | 415 GB            | 325 GB           |
| SQL Transaction Log Disk | 650 GB             | 650 GB            | 325 GB            | 325 GB           |
| SQL TEMP DB Disk         | 325 GB             | 325 GB            | 325 GB            | 325 GB           |

# Exchange Mail-Flow Permissions

The ExchangeMetrics Data Collector collects Mail-Flow metrics from the Exchange Message Tracking
Logs on the Exchange servers. Some examples of this include server volume and message size
statistics. This data collector utilizes an applet to process and collect summarized metrics from
the Message Tracking Log.

1. HUB Metrics Job Group Requirement

In addition to the permissions required by the ExchangeMetrics Data Collector, the Connection
Profile assigned to the 1. HUB Metrics Job Group requires the following permission and User Rights
(based on default settings):

- Member of the local Administrator group on the targeted Exchange server(s) where the Hub Transport
  service is running
- Log on as a Service Group Policy:

  - Go to `GPedit.msc`
  - Go to Computer Configuration > Windows Settings > Security Settings > Local Policies > User
    Rights

Applet Permissions

This is required because the ExchangeMetrics Data Collector is an applet-based data collector. It
requires

- Member of the local Administrator group on the targeted Exchange server(s)

This grants access to the Message Tracking Logs and the ability to create the
`SA_ExchangeMetricsData` folder, which will contain the applet files and the processed message
tracking log files stored inside a SQLite database for each day. For example:

\\ExchangeServerName\c$\Program Files\Microsoft\Exchange
Server\V14\TransportRoles\Logs\MessageTracking

If there have been additional security or permission modifications on the server(s), the following
rights and policies may need to be enabled on the targeted host:

- Ensure the Administrator group has been granted Full Control over Message Tracking Log Directories
- WMI Control (`wmimgmt.msc`) > Right Click Properties > Security

  - Security Tab > Root > CIMV2 > Click Security

    - Ensure the Administrators group has been assigned:

      - Execute Methods
      - Remote Enable
      - Enable Account

- Local Security Policy (`secpol.msc`):

  - Local Policies > User Rights Assignment:

    - Ensure the ‘Replace a Process Level Token’ right grants access to Local Service, Network
      Service, and Administrators
    - Ensure the ‘Adjust Memory Quotas for a Process’ right grants access to Local Service,
      Network Service, and Administrators
    - Ensure the ‘Impersonate a client after authentication’ right grants access to Local
      Service and Administrators
    - Ensure the Administrators group has been granted the following rights:

      - Access this computer from a network
      - Allow Log on Locally
      - Log on as a batch job

# MAPI-Based Data Collector Permissions

The Exchange2K, ExchangeMailbox, and ExchangePublicFolder data collectors have other permission
requirements.

These data collectors supports Exchange 2010 through Exchange 2013. Since this data collectors are
MAPI-based, they do not support Exchange Online, Exchange 2019, nor Exchange 2016.

All MAPI-based data collectors have the following prerequisites:

- Microsoft MAPI CDO installed on the StealthAUDIT Console
- StealthAUDIT MAPI CDO installed on the StealthAUDIT Console
- Settings > Exchange node configured in the StealthAUDIT Console

The Exchange2K Data Collector is used in the 3. Databases Job Group has the following permission
requirements:

- Public Folder Management

The ExchangePublicFolder Data Collector is used in the 5. Public Folders Job Group has the following
permission requirements:

- Organization Management

The ExchangeMailbox Data Collector is used in the 7. Sensitive Data Job Group has the following
permission requirements:

- Organization Management
- Discovery Management

# Exchange PowerShell Permissions

The ExchangePS Data Collector utilizes PowerShell to collect various information from the Exchange
environment. This data collector utilizes Remote PowerShell to collect information about Exchange
Users Configuration, Mailboxes, Public Folders, and Exchange Online Mail-Flow.

Job Group Requirements in Addition to ExchangePS

In addition to the permissions required by the ExchangePS Data Collector, the Connection Profile
assigned to these job groups requires the following permissions:

- 2. CAS Metrics

  - This job group also requires remote connection permissions for the SMARTLog Data Collector.
    See the
    [Exchange Remote Connections Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
    topic for additional information.

- 3. Databases

  - This job group also requires permissions for the Exchange2K Data Collector, which is
    MAPI-based and has additional requirements

- 4. Mailboxes

  - This job group also requires Exchange Mailbox Access Auditing to be enabled. See the
    [Enable Exchange Mailbox Access Auditing](#enable-exchange-mailbox-access-auditing) topic for
    additional information.

- 5. Public Folders

  - This job group also requires permissions for the ExchangePublicFolder Data Collector, which is
    MAPI-based and has additional requirements

- 8. Exchange Online

  - This job group uses Modern Authentication to target Exchange Online. See the
    [Exchange Online Auditing Configuration](/docs/accessanalyzer/11.6/configuration-guides/collaboration/exchange-online.md) topic
    for additional information.

## Permissions Explained

Remote PowerShell and Windows Authentication Enabled

The Remote PowerShell and Windows Authentication configurations for Exchanges servers are required
to be enabled on at least one Exchange server running the Client Access Service so that the
ExchangePS Data Collector can make a remote PowerShell connection and authenticate through
Enterprise Auditor.

Enterprise Auditor passes credentials saved in the Connection Profile to the data collector so that
it is able to connect to the targeted host. This requires the Exchange server to allow for Windows
Authentication. See the
[Enable Remote PowerShell for ExchangePS Data Collector](#enable-remote-powershell-for-exchangeps-data-collector)
topic and the
[Enable Windows Authentication for PowerShell Virtual Directory](#enable-windows-authentication-for-powershell-virtual-directory)
topic for additional information.

View-Only Organization Management Role Group

This is required so the ExchangePS Data Collector is able to run the various Exchange PowerShell
cmdlets.

Public Folder Management

This permission is only required if utilizing the ExchangePublicFolder Data Collector or
ExchangeMailbox Data Collector, as well as the PublicFolder or Mailbox Action Modules. This is
required in order to make a connection through the MAPI protocol. The following job group requires
the Public Folder Management Role Group:

- 5. Public Folders > Ownership

If not running this collection, then this permission is not required.

Mailbox Search Role

This is required to collect Mailbox Access Audit logs and run Mailbox Search queries through the
ExchangePS Data Collector. The following job group requires the Mailbox Search Role:

- 4. Mailboxes > Logons

Application Impersonation Role

The Application Impersonation Role is a customer role you need to create. See the
[Create Custom Application Impersonation Role in Exchange](#create-custom-application-impersonation-role-in-exchange)
topic for additional information.

## Scoping Options

There are five different scoping options within this data collector. Since not all query categories
support all scoping options, No Scoping is an option. If there are no scoping options available,
then the data collector should be run against the host specified in the Summary page of the data
collector wizard.

No Scoping

This option will gather information about the entire Exchange Organization. When using the applet,
the data collector will gather information about the Exchange Forest in which the Enterprise Auditor
Console currently resides. For Remote PowerShell, the data collector will gather information about
the Exchange Organization to which the Remote PowerShell connection was made. This refers to the
server entered in the Client Access Server (CAS) field of the global configuration from the
**Settings** > **Exchange** node or on the Scope Page of the data collector wizard. See the
[ExchangePS: Scope](/docs/accessanalyzer/11.6/data-collection/exchange/configuration.md)
topic for additional information.

Scope by Database

This option will gather information about any databases which are chosen. When using the applet, the
data collector will return databases in the Scope by DB page of the data collector wizard for the
Exchange Organization in which the Enterprise Auditor Console currently resides, as well as, only
return information about those databases. For Remote PowerShell, the data collector will return
databases in the Scope by DB page of the data collector wizard for the Exchange Forest, as well as,
only return information about those databases. See the
[ExchangePS: Scope by DB](/docs/accessanalyzer/11.6/data-collection/exchange/configuration.md)
topic for additional information.

Scope by Mailbox

This option will gather information about any mailboxes which are chosen. When using the applet, the
data collector will return mailboxes in the Scope by Mailboxes page of the data collector wizard for
the Exchange Forest in which the Enterprise Auditor Console currently resides, as well as, only
return information about those mailboxes. For Remote PowerShell, the data collector will return
mailboxes in the Scope by Mailboxes page of the data collector wizard for the Exchange Forest, as
well as, only return information about those mailboxes. See the
[ExchangePS: Scope by Mailboxes](/docs/accessanalyzer/11.6/data-collection/exchange/configuration.md)
topic for additional information.

Scope by Server

This option will gather information about objects which reside on the chosen server. When choosing
this option, the data collector will then use the Host List applied to the job’s **Configure** >
**Hosts** node as the servers scoping list. When using the applet, the data collector will deploy a
process to the targeted host to run the PowerShell on that server. For Remote PowerShell, the data
collector will deploy no applet and utilize the WinRM protocol to gather information about the
objects on that server.

Scope by Public Folder

This option will gather information about any public folders which are chosen. When using the
applet, the data collector will return public folders in the Scope by Public Folders page of the
data collector wizard for the Exchange Forest in which the Enterprise Auditor Console currently
resides, as well as, only return information about those public folders. For Remote PowerShell, the
data collector will return public folders in the Scope by Public Folders page of the data collector
wizard for the Exchange Forest, as well as, only return information about those public folders. See
the
[ExchangePS: Scope by Public Folders](/docs/accessanalyzer/11.6/data-collection/exchange/configuration.md)
topic for additional information.

## Enable Remote PowerShell for ExchangePS Data Collector

Follow these steps to enable Remote PowerShell.

**Step 1 –** On the server that Enterprise Auditor will connect with Remote PowerShell, open
PowerShell.

**Step 2 –** Run the following command:

```
Enable-PSRemoting
```

**Step 3 –** When prompted, type `A` and `A` again to enable the appropriate services and protocols.

Remote PowerShell has been enabled. See the Microsoft
[Tip: Enable and Use Remote Commands in Windows PowerShell](https://technet.microsoft.com/en-us/library/ff700227.aspx)
article for additional information.

Next, enable Windows Authentication for PowerShell Virtual Directory on the same server.

## Enable Windows Authentication for PowerShell Virtual Directory

Once Remote PowerShell has been enabled on an Exchange Server in the environment, it is necessary to
also enable Windows Authentication for the PowerShell Virtual Directory on the same Exchange server.
Follow these steps to enable Windows Authentication.

**Step 1 –** On the server where Remote PowerShell was enabled, open the Internet Information
Services (IIS) Manager.

![IIS Authentication Open Feature](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/requirements/solutions/exchange/iismanager.webp)

**Step 2 –** Traverse to the **PowerShell** Virtual Directory under the **Default Web Site**. Select
**Authentication** and click **Open Feature**.

![IIS Enable Windows Authentication](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/requirements/solutions/exchange/iismanagerauth.webp)

**Step 3 –** Right-click on **Windows Authentication** and select **Enable**.

Windows Authentication has been enabled for the PowerShell Virtual Directory.

## Create Custom Application Impersonation Role in Exchange

Follow the steps to create the custom Application Impersonation role. The process is the same for
Exchange 2010 Service Pack 1 through Exchange 2019 and Exchange Online.

**Step 1 –** Within the Exchange Admin Center, navigate to the permissions section and select admin
roles.

**Step 2 –** Add a new role group by clicking on the + button, and the New Role Group window opens.

![New role group window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/requirements/solutions/exchange/rolegroup.webp)

**Step 3 –** Configure the new role group with the following settings:

- Name – Provide a distinct name for the role group, for example Application Impersonation
- Description – Optionally indicate in the description that the new role group is required for
  Enterprise Auditor
- Write scope – Remain set to **Default**
- Roles – Click the + button to open the Select a Role window. Select the
  **ApplicationImpersonation** role from the available list and click **Add**. Then click **OK** to
  close the Select a Role window.
- Members – Click the + button to open the Select Members window. Select the account from the
  available list and click **Add**. Remember, the account needs to be assigned the other permissions
  required for the **EWSMailbox** and/or **EWSPublicFolder** data collectors. Then click **OK** to
  close the Select Members window.

**Step 4 –** **Save** the new role group.

The new role group appears in the list.

## Enable Exchange Mailbox Access Auditing

The 4. Mailboxes Job Group requires the Exchange Mailbox Access Auditing to be enabled. In order to
collect Mailbox Access Auditing events, it is necessary to enable Exchange Mailbox Access Auditing
for Exchange. See the following Microsoft articles:

- Exchange Online –
  [Enable mailbox auditing in Office 365](https://technet.microsoft.com/en-us/library/dn879651.aspx)
  article
- Exchange 2016 – Exchange 2019 –
  [Enable or disable mailbox audit logging for a mailbox](<https://technet.microsoft.com/en-us/library/ff461937(v=exchg.160).aspx>)
  article
- Exchange 2013 –
  [Enable or disable mailbox audit logging for a mailbox](<https://technet.microsoft.com/en-us/library/ff461937(v=exchg.150).aspx>)
  article
- Exchange 2010 –
  [Enable or Disable Mailbox Audit Logging for a Mailbox](<https://technet.microsoft.com/en-us/library/ff461937(v=exchg.141).aspx>)
  article

# Exchange Remote Connections Permissions

The SMARTLog Data Collector processes the IIS Logs on the server running the Client Access Service
(CAS) to return information about the remote connections being made to Exchange. This data collector
uses an applet to process and collect the IIS Logs.

2. CAS Metrics Job Group Requirement

In addition to the permissions required by the SMARTLog Data Collector, the Connection Profile
assigned to the 2. CAS Metrics Job Group requires the following permissions and User Rights (based
on default settings):

- Member of the local Administrator group on the targeted Exchange server(s) where the Client Access
  Service is running
- Log on as a Service Group Policy:

  - Go to `GPedit.msc`
  - Go to Computer Configuration > Windows Settings > Security Settings > Local Policies > User
    Rights

- Permissions required by the ExchangePS Data Collector. See the
  [Exchange PowerShell Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
  topic for additional information.

Applet Permissions

This is required because the SMARTLog Data Collector is an applet-based data collector. It requires
the following permission on the target host which contain the IIS Logs:

- Member of the local Administrators group

This grants the ability to process logs folder which will contain the applet files and logs. For
example:

\\ExchangeServerName\c$\Program Files (x86)\STEALTHbits\StealthAUDIT\LogProcessor

If there have been additional security or permission modifications on the server(s), the following
rights and policies may need to be enabled on the targeted host:

- Ensure the Administrator group has been granted Full Control over IIS Log Directories
- WMI Control (`wmimgmt.msc`) > Right Click Properties > Security

  - Security Tab > Root > CIMV2 > Click Security

    - Ensure the Administrators group has been assigned:

      - Execute Methods
      - Remote Enable
      - Enable Account

- Local Security Policy (`secpol.msc`):

  - Local Policies > User Rights Assignment:

    - Ensure the ‘Replace a Process Level Token’ right grants access to Local Service, Network
      Service, and Administrators
    - Ensure the ‘Adjust Memory Quotas for a Process’ right grants access to Local Service,
      Network Service, and Administrators
    - Ensure the ‘Impersonate a client after authentication’ right grants access to Local
      Service and Administrators
    - Ensure the Administrators group has been granted the following rights:

      - Access this computer from a network
      - Allow Log on Locally
      - Log on as a batch job

# Exchange Support and Permissions Explained

This topic outlines what is supported for each type of Exchange version.

**NOTE:** Sensitive Data Discovery is available with the EWSMailbox, EWSPublicFolder, and
ExchangeMailbox data collectors.

## Support by Data Collector

The following tables provide a breakdown of support by data collector:

| Data Collector       | Exchange Online | Exchange 2019 | Exchange 2016 | Exchange 2013 | Exchange 2010 | MAPI-Based |
| -------------------- | --------------- | ------------- | ------------- | ------------- | ------------- | ---------- |
| EWSMailbox           | Yes             | Yes           | Yes           | Yes           | Limited\*     | No         |
| EWSPublicFolder      | Yes             | Yes           | Yes           | Yes           | Limited\*     | No         |
| Exchange2k           | No              | No            | No            | Yes           | Yes           | Yes        |
| ExchangeMailbox      | No              | No            | No            | Yes           | Yes           | Yes        |
| ExchangeMetrics      | No              | Yes           | Yes           | Yes           | Yes           | No         |
| ExchangePS           | Yes             | Yes           | Yes           | Yes           | Yes           | No         |
| ExchangePublicFolder | No              | No            | No            | Yes           | Yes           | Yes        |
| SMARTLog             | No              | Yes           | Yes           | Yes           | Yes           | No         |

\* The data collector can target Exchange 2010 Service Pack 1 and later.

## Support by Job Group

The following tables provide a breakdown of support by job group:

| Job Group             | Exchange Online | Exchange 2019 | Exchange 2016 | Exchange 2013 | Exchange 2010 | MAPI-Based |
| --------------------- | --------------- | ------------- | ------------- | ------------- | ------------- | ---------- |
| 1. HUB Metrics        | No              | Yes           | Yes           | Yes           | Yes           | No         |
| 2. CAS Metrics        | No              | Yes           | Yes           | Yes           | Yes           | No         |
| 3. Database           | No              | Limited\*     | Limited\*     | Yes           | Yes           | Yes        |
| 4. Mailboxes          | Yes             | Yes           | Yes           | Yes           | Yes           | No         |
| 5. Public Folders     | No              | No            | No            | Yes           | Yes           | Yes        |
| 6. Distribution Lists | Yes             | Yes           | Yes           | Yes           | Yes           | No         |
| 7. Sensitive Data     | Yes             | Yes           | Yes           | Yes           | Limited\*     | Mix\*\*    |
| 8. Exchange Online    | Yes             | No            | No            | No            | No            | No         |

\* Limited indicates that some of the data collectors can target the environment, but not all.

\*\* Mix indicates some data collectors are MAPI-based, but not all.

## Exchange Solution to Permissions Alignment

See the following sections for permission requirements according to the job group, data collector,
or action module to be used:

- [Exchange Mail-Flow Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)

  - ExchangeMetrics Data Collector
  - 1. HUB Metrics Job Group

- [Exchange Remote Connections Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)

  - SMARTLog Data Collector
  - 2. CAS Metrics Job Group

- [Exchange PowerShell Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)

  - ExchangePS Data Collector
  - PublicFolder Action Module
  - Mailbox Action Module
  - 2. CAS Metrics Job Group
  - 3. Databases Job Group
  - 4. Mailboxes Job Group
  - 5. Public Folders Job Group
  - 8. Exchange Online Job Group

- [Exchange Web Services API Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)

  - EWSMailbox Data Collector
  - EWSPublicFolder Data Collector
  - 7. Sensitive Data Job Group

- [MAPI-Based Data Collector Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)

  - Exchange2K Data Collector
  - ExchangeMailbox Data Collector
  - ExchangePublicFolder Data Collector
  - 3. Databases Job Group
  - 5. Public Folders Job Group
  - 7. Sensitive Data Job Group

**NOTE:** All MAPI-based data collectors require the **Settings** > **Exchange** node configured in
the Enterprise Auditor Console.

# Exchange Web Services API Permissions

The EWSMailbox and EWSPublicFolder data collectors utilizes Exchange Web Services API to access and
communicate with Exchange. These data collectors collect statistical, content, permission, and
sensitive data information from mailboxes and public folders.

Exchange Online Hybrid Environment Requirement

In addition to the permissions required by the EWSMailbox and EWSPublicFolder data collectors, the
Connection Profile assigned to the 7. Sensitive Data Job Group requires the following permissions
(based on default settings):

- Customized Administrator > Exchange Administrator Role

# File System Solution

The core components for Netwrix Enterprise Auditor are the Enterprise Auditor Console server, SQL
Server, and Access Information Center. See the
[Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/system-requirements.md)
topic for the core requirements.

The File System solution can be configure to use Proxy servers either an applet or as a service. See
the
[File System Scan Options](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
topic for additional information.

In addition to these, integration with either the Netwrix Activity Monitor or the Netwrix Threat
Prevention is required for event activity data to be scanned. See the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor) or
the
[Netwrix Threat Prevention Documentation](https://helpcenter.netwrix.com/category/threatprevention)
for installation requirements and information on collecting activity data.

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans.

**NOTE:** If proxy server scan options are used, it may also be necessary for the Sensitive Data
Discovery Add-On to be installed on those servers as well.

See the following topics for target environment requirements:

- [File System Scan Options](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
- [File System Supported Platforms](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)

## File System Solution Requirements on the Enterprise Auditor Console

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment:

| Environment | Enterprise                     | Extra-Large                         | Large                               | Medium                              | Small                               |
| ----------- | ------------------------------ | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| Definition  | 800+ million files and folders | Up to 800 million files and folders | Up to 500 million files and folders | Up to 200 million files and folders | Up to 100 million files and folders |
| RAM         | 24 GB                          | 24 GB                               | 16 GB                               | 12 GB                               | 4 GB                                |
| Cores       | 8 CPU                          | 8 CPU                               | 8 CPU                               | 4 CPU                               | 2 CPU                               |
| Disk Space  | 1.5 TB                         | 770 GB                              | 470 GB                              | 270 GB                              | 130 GB                              |

The above recommended disk space sizing information is based on the needs of Enterprise Auditor as
well as the File System solution for running Permission scans with default configuration (500 MB per
million files and folders), that means no tag collection, file-level scanning, activity, or
sensitive data.

- For tag collection, add 125 MB per million documents to the totals above
- For activity collection, add 250 MB per million files and folders and another 125 MB per million
  activity events to the totals above
- For sensitive data collection, add 500 MB per million files and folders and another 1%-10% of the
  total size of the documents scanned for sensitive data (depending on targeted document types and
  selected criteria) to the totals above

For example, in order to scan 200 million files and folders, of which 10 million files will be
scanned for tag collection and sensitive data with a total size of 6 TB, you would need: 160 GB for
permission collection + 1.25 GB for tag collection (10x125 MB) + 100 GB for sensitive data
collection (200x500 MB) + 600 GB additional for sensitive data collection (10% of 6 TB) = 861.25 GB
total disk space.

**NOTE:** If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the
minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. By
default, SDD scans are configured to run two concurrent threads. For example, if the job is
configured to scan 8 hosts at a time with two concurrent SDD threads, then an extra 32 GB of RAM are
required (8x2x2=32).

Additional Server Considerations for File System Scans

If Data Activity Tracking for NAS is required or if NetApp Filers running Clustered Data ONTAP are
in scope, reducing latency between the scanning server and the target device is highly recommended.
Additional hardware may be required, especially if the target NAS devices are not collocated with
the Enterprise Auditor Console server.

Sensitive Data Discovery Auditing Requirement

The following is required to run Sensitive Data Discovery scans:

- Sensitive Data Discovery Add-On installed on the Enterprise Auditor Console server

**NOTE:** The Sensitive Data Discovery Add-on installation package installs the appropriate JDK
(Java) version on the server. The JDK deployed is prepackaged and does not require any
configuration; it has been preconfigured to work with Enterprise Auditor and should never be
customized through Java. It will not conflict with other JDKs or Java Runtimes in the same
environment.

Permissions on the Console Server to Run File System Scans

In most cases the Enterprise Auditor user is a member of the local Administrators group on the
application server. However, if the Role Based Access usage is employed, then the user assigned the
role of Job Initiator (for manual execution) or the credential used for the Schedule Service Account
(for scheduled execution) must have the following permissions to execute File System scans in local
mode, applet mode, or proxy mode with applet:

- Group membership in either of the following local groups:

  - Backup Operators
  - Administrators

These permissions grant the credential the ability to create a high integrity token capable of
leveraging the “Back up files and directories” from where the Enterprise Auditor executable is run.

Additionally, the credential must have `WRITE` access to the `…\StealthAUDIT\FSAA` folder in the
installation directory. This is required by either the user account running the Enterprise Auditor
application, when manually executing jobs from the console, or the Schedule Service Account assigned
within Enterprise Auditor, when running jobs as a scheduled tasks.

See the
[File System Scan Options](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
topic and the
[File System Supported Platforms](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
topic for permissions required to scan the environment.

## File System Solution Requirements on the SQL Server

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment.

| Environment              | Enterprise                     | Extra-Large                         | Large                               | Medium                              | Small                               |
| ------------------------ | ------------------------------ | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| Definition               | 800+ million files and folders | Up to 800 million files and folders | Up to 500 million files and folders | Up to 200 million files and folders | Up to 100 million files and folders |
| RAM                      | 64 GB                          | 64 GB                               | 32 GB                               | 16 GB                               | 8 GB                                |
| Cores                    | 16 CPU                         | 16 CPU                              | 12 CPU                              | 8 CPU                               | 4 CPU                               |
| Number of Disks          | 4                              | 4                                   | 4                                   | 4                                   | 4                                   |
| Operating System Disk    | 160 GB                         | 160 GB                              | 160 GB                              | 160 GB                              | 160 GB                              |
| SQL Database Disk        | 1.6 TB                         | 830 GB                              | 530 GB                              | 400 GB                              | 170 GB                              |
| SQL Transaction Log Disk | 390 GB                         | 200 GB                              | 170 GB                              | 130 GB                              | 70 GB                               |
| SQL TEMP DB Disk         | 1 TB                           | 530 GB                              | 400 GB                              | 270 GB                              | 130 GB                              |

Additional SQL Server Requirements for File System Scans

The following are additional requirements for the SQL Server specifically for the File System
solution:

- For File-level Auditing – SQL Server standard edition or higher required
- For File Activity Auditing – SQL Server Enterprise Edition is required

# Applet Mode Permissions

When File System scans are run in applet mode, it means the File System applet is deployed to the
target host when the job is executed to conduct data collection. However, the applet can only be
deployed to a server with a Windows operating system. The data is collected on the Windows target
host where the applet is deployed. The final step in data collection is to compress and transfer the
data collected in the SQLite database(s), or Tier 2 database(s), back to the Enterprise Auditor
Console server. If the target host is a NAS device, the File System scans will default to local mode
for that host.

Configure the credential(s) with the following rights on the Windows target host(s):

- Group membership in the local Administrators group
- Granted the “Backup files and directories” local policy privilege
- Granted the “Log on as a batch” privilege
- Granted the "Network access: Restrict clients allowed to make remote calls to SAM" Local
  Policies > Security Options privilege

Additionally, the credential must have `WRITE` access to the `…\StealthAUDIT\FSAA` folder in the
installation directory on the target host/proxy server as well as on the Enterprise Auditor Console
server. This is required by either the user account running the Enterprise Auditor application, when
manually executing jobs within the console, or the Schedule Service Account assigned within
Enterprise Auditor, when running jobs as a scheduled tasks.

_Remember,_ Remote Registry Service must be enabled on the host where the applet is deployed (for
Applet Mode or Proxy Mode with Applet scans) to determine the system platform and where to deploy
the applet.

**CAUTION:** The local policy, “Network access: Do not allow storage of passwords and credentials
for network authentication” must be disabled in order for the applet to start.

Sensitive Data Discovery Auditing scans also require .NET Framework 4.7.2 or later. to be installed
on the server where the applet is to be deployed in order for Sensitive Data Discovery collections
to successfully occur. The Sensitive Data Discovery Add-On must be installed on the Enterprise
Auditor Console server, which enables Sensitive Data criteria for scans.

When running Access Auditing (FSAA) and/or Sensitive Data Discovery Auditing scans, the credentials
within the Connection Profile assigned to the File System scans must be properly configured as
explained above. Also the firewall rules must be configured to allow for communication between the
applicable servers.

See the
[Applet Mode Port Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
topic for firewall rule information.

# Applet Mode Port Requirements

The following are the firewall settings are required when executing the Access Auditing (FSAA)
and/or Sensitive Data Discovery Auditing scans in applet mode for communication between Enterprise
Auditor and the host:

| Communication Direction                               | Protocol | Ports | Description                              |
| ----------------------------------------------------- | -------- | ----- | ---------------------------------------- |
| Enterprise Auditor Console to Windows Server          | TCP      | 445   | SMB                                      |
| Between Enterprise Auditor Console and Windows Server | TCP      | 8767  | FSAA Applet Certificate Exchange         |
| Between Enterprise Auditor Console and Windows Server | TCP      | 8766  | FSAA Applet HTTPS communication security |

**NOTE:** The FSAA applet https requests configuration port 8766 and the FSAA Applet Certificate
Exchange port 8767 can be customized on the Applet Settings page of the File System Access Auditor
Data Collector Wizard.

**_RECOMMENDED:_** Configure target hosts to respond to ping requests.

# Local Mode Permissions

When File System scans are run in local mode, it means all of the data collection processing is
conducted by the Enterprise Auditor Console server across the network. The data is collected in the
SQLite database(s), or Tier 2 database(s), on the Enterprise Auditor Console server, and then
imported into theEnterprise Auditor database, or Tier 1 database, on the SQL Server.

The account used to run either a manual execution or a scheduled execution of the File System scans,
must have the following permissions on the StealthAUDIT Console server:

- Group membership in either of the following local groups:
  - Backup Operators
  - Administrators

Configure the credential(s) with the following rights on the Windows host(s):

- Group membership in both of the following local groups:
  - Power Users
  - Backup Operators
- Granted the “Backup files and directories” local policy privilege

For Windows Server target hosts, the credential also requires:

- Granted the "Network access: Restrict clients allowed to make remote calls to SAM" Local
  Policies > Security Options privilege

In order to collect data on administrative shares and local policies (logon policies) for a Windows
target, the credential must have group membership in the local Administrators group.

Additionally, the credential must have `WRITE` access to the `…\StealthAUDIT\FSAA` folder in the
installation directory on the Enterprise Auditor Console server. This is required by either the user
account running the Enterprise Auditor application, when manually executing jobs within the console,
or the Schedule Service Account assigned within Enterprise Auditor, when running jobs as a scheduled
tasks.

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans. If running Sensitive Data Discovery (SDD) scans, it
will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2
additional GB of RAM per host.  By default, SDD scans are configured to run two concurrent threads.
For example, if the job is configured to scan 8 hosts at a time with two concurrent SDD threads,
then an extra 32 GB of RAM are required (8x2x2=32).

When running Access Auditing (FSAA) and/or Sensitive Data Discovery Auditing scans, the credentials
within the Connection Profile assigned to the File System scans must be properly configured as
explained above. Also the firewall rules must be configured to allow for communication between the
applicable servers.

See the
[Local Mode Port Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
topic for firewall rule information.

# Local Mode Port Requirements

The following are the firewall settings are required when executing the Access Auditing (FSAA)
and/or Sensitive Data Discovery Auditing scans in local mode for communication between Enterprise
Auditor and the target host:

| Communication Direction                          | Protocol | Ports | Description |
| ------------------------------------------------ | -------- | ----- | ----------- |
| Enterprise Auditor Console to File Server/Device | TCP      | 445   | SMB         |

## Additional Firewall Rules for NetApp Data ONTAP Devices

The NetApp communication security is configured on the Scan Settings page of the File System Access
Auditor Data Collector Wizard. One additional firewall setting is required when targeting either a
NetApp Data ONTAP 7-Mode device or a NetApp Data ONTAP Cluster-mode device. The required setting is
dependent upon how the NetApp communication security option is configured:

| Communication Direction                     | Protocol | Ports | Description                         |
| ------------------------------------------- | -------- | ----- | ----------------------------------- |
| Enterprise Auditor Console to NetApp Device | TCP      | 80    | HTTP NetApp communication security  |
| Enterprise Auditor Console to NetApp Device | TCP      | 443   | HTTPS NetApp communication security |

# Proxy Mode with Applet Permissions

When File System scans are run in proxy mode with applet, it means the File System applet is
deployed to the Windows proxy server when the job is executed to conduct data collection. The data
collection processing is initiated by the proxy server where the applet is deployed and leverages a
local mode-type scan to each of the target hosts. The final step in data collection is to compress
and transfer the data collected in the SQLite databases, or Tier 2 databases, back to the Enterprise
Auditor Console server.

Configure the credential(s) with the following rights on the proxy server(s):

- Group membership in the local Administrators group
- Granted the Backup files and directories local policy privilege
- Granted the Log on as a batch privilege
- If the applet is deployed as a service, the service account requires the Log on as a service
  privilege

  - See the
    [FSAA: Applet Settings](/docs/accessanalyzer/11.6/data-collection/file-systems/configuration.md)
    topic for additional information on the applet launch mechanism

- If running FSAC, the service account in the credential profile requires access to the admin share
  (e.g. `C$`) where the `sbtfilemon.ini` file exists

Additionally, the credential must have `WRITE` access to the `…\StealthAUDIT\FSAA` folder in the
installation directory on the proxy server as well as on the Enterprise Auditor Console server. This
is required by either the user account running the Enterprise Auditor application, when manually
executing jobs within the console, or the Schedule Service Account assigned within Enterprise
Auditor, when running jobs as a scheduled tasks.

_Remember,_ Remote Registry Service must be enabled on the host where the applet is deployed (for
Applet Mode or Proxy Mode with Applet scans) to determine the system platform and where to deploy
the applet.

**CAUTION:** The local policy, “Network access: Do not allow storage of passwords and credentials
for network authentication” must be disabled in order for the applet to start.

Configure the credential(s) with the following rights on the Windows host(s):

- Group membership in both of the following local groups:
  - Power Users
  - Backup Operators
- Granted the “Backup files and directories” local policy privilege

For Windows Server target hosts, the credential also requires:

- Granted the "Network access: Restrict clients allowed to make remote calls to SAM" Local
  Policies > Security Options privilege

Sensitive Data Discovery Auditing scans also require .NET Framework 4.7.2 or later. to be installed
on the server where the applet is to be deployed in order for Sensitive Data Discovery collections
to successfully occur. The Sensitive Data Discovery Add-On must be installed on the Enterprise
Auditor Console server, which enables Sensitive Data criteria for scans.

When running Access Auditing (FSAA) and/or Sensitive Data Discovery Auditing scans, the credentials
within the Connection Profile assigned to the File System scans must be properly configured as
explained above. Also the firewall rules must be configured to allow for communication between the
applicable servers.

See the
[Proxy Mode with Applet Port Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
topic for firewall rule information.

Secure Proxy Communication Considerations

For Proxy Mode with Applet scans, the certificate exchange mechanism and certificate exchange port
must be configured via the File System Access Auditing Data Collector Wizard prior to executing a
scan. See the
[FSAA Applet Certificate Management Overview](/docs/accessanalyzer/11.6/data-collection/file-systems/configuration.md)
topic for additional information.

# Proxy Mode with Applet Port Requirements

The following are the firewall settings are required when executing the Access Auditing (FSAA)
and/or Sensitive Data Discovery Auditing scans in proxy mode with applet for communication between
Enterprise Auditor and the proxy server:

| Communication Direction                                     | Protocol | Ports | Description                              |
| ----------------------------------------------------------- | -------- | ----- | ---------------------------------------- |
| Enterprise Auditor Console to Windows Proxy Server          | TCP      | 445   | SMB                                      |
| Between Enterprise Auditor Console and Windows Proxy Server | TCP      | 8767  | FSAA Applet Certificate Exchange         |
| Between Enterprise Auditor Console and Windows Server       | TCP      | 8766  | FSAA Applet HTTPS communication security |

**NOTE:** The FSAA applet https requests configuration port 8766 and the FSAA Applet Certificate
Exchange port 8767 can be customized on the Applet Settings page of the File System Access Auditor
Data Collector Wizard.

The following are the firewall settings are required when executing the Access Auditing (FSAA)
and/or Sensitive Data Discovery Auditing scans in proxy mode with applet for communication between
the proxy server and the target host:

| Communication Direction                    | Protocol | Ports | Description |
| ------------------------------------------ | -------- | ----- | ----------- |
| Windows Proxy Server to File Server/Device | TCP      | 445   | SMB         |

## Additional Firewall Rules for NetApp Data ONTAP Devices

_Remember,_ NetApp communication security is configured on the Scan Settings page of the File System
Access Auditor Data Collector Wizard. One additional firewall setting is required when targeting
either a NetApp Data ONTAP 7-Mode device or a NetApp Data ONTAP Cluster-Mode device. The required
setting is dependent upon how the NetApp communication security option is configured:

| Communication Direction                     | Protocol | Ports | Description                         |
| ------------------------------------------- | -------- | ----- | ----------------------------------- |
| Enterprise Auditor Console to NetApp Device | TCP      | 80    | HTTP NetApp communication security  |
| Enterprise Auditor Console to NetApp Device | TCP      | 443   | HTTPS NetApp communication security |

## Additional Firewall Rules for Windows File Servers

The following firewall setting is also required when targeting a Windows file server:

| Communication Direction                      | Protocol | Ports | Description                |
| -------------------------------------------- | -------- | ----- | -------------------------- |
| Enterprise Auditor Console to Windows Server | TCP      | 135   | for pre-scan access checks |

**_RECOMMENDED:_** Configure target hosts to respond to ping requests.

# Proxy Mode Server Requirements

The Enterprise Auditor File System Proxy requirements apply for servers where either the service is
installed or the applet will be deployed unless otherwise stated.

**NOTE:** Align the proxy server requirements to match the environment size the proxy server will be
handling.

The server can be physical or virtual. The requirements for Enterprise Auditor are:

- Windows Server 2016 through Windows Server 2022

  - US English language installation
  - Domain member

RAM, CPU, and Disk Space

RAM, CPU, and Disk Space are dependent upon the size of the target environment:

**CAUTION:** If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the
minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. By
default, SDD scans are configured to run two concurrent threads. For example, if the job is
configured to scan 8 hosts at a time with two concurrent SDD threads, then an extra 32 GB of RAM are
required (8x2x2=32).

- Enterprise Environment (800 million+ files and folders)

  - 24 GB RAM
  - 8 CPU Cores
  - 1.5 TB Disk Space

- Extra-Large Environment (Up to 800 million files and folders)

  - 24 GB RAM
  - 8 CPU Cores
  - 770 GB Disk Space

- Large Environment (Up to 500 million files and folders)

  - 16 GB RAM
  - 8 CPU Cores
  - 470 GB Disk Space

- Medium Environment (Up to 200 million files and folders)

  - 12 GB RAM
  - 4 CPU Cores
  - 270 GB Disk Space

- Small Environment (Up to 100 million files and folders)

  - 4 GB RAM
  - 2 CPU Cores
  - 130 GB Disk Space

The above recommended disk space sizing information is based on the needs of Enterprise Auditor as
well as the File System solution for running Permission scans with out of the box configuration (500
MB per million files and folders), that means no tag collection, file-level scanning, activity, or
sensitive data.

- For tag collection, add 125 MB per million documents to the totals above
- For activity collection, add 250 MB per million files and folders and another 125 MB per million
  activity events to the totals above
- For sensitive data collection, add 500 MB per million files and folders and another 1%-10% of the
  total size of the documents scanned for sensitive data (depending on targeted document types and
  selected criteria) to the totals above

For example, in order to scan 200 million files and folders, of which 10 million files will be
scanned for tag collection and sensitive data with a total size of 6 TB, you would need: 160 GB for
permission collection + 1.25 GB for tag collection (10x125 MB) + 100 GB for sensitive data
collection (200x500 MB) + 600 GB additional for sensitive data collection (10% of 6 TB) = 861.25 GB
Disk Space.

Additional Server Requirements

The following are additional requirements for the server:

- .NET Framework 4.7.2 Installed

  **NOTE:** .NET Framework 4.7.2 can be downloaded from the link in the Microsoft
  [.NET Framework 4.7.2 offline installer for Windows](https://support.microsoft.com/en-us/topic/microsoft-net-framework-4-7-2-offline-installer-for-windows-05a72734-2127-a15d-50cf-daf56d5faec2)
  article.

- Remote Registry Service enabled

  **NOTE:** The Remote Registry Service only needs to be enabled when running Applet Mode or Proxy
  Mode with Applet scans.

Sensitive Data Discovery Auditing

The following is required to run Sensitive Data Discovery scans:

- Sensitive Data Discovery Add-On installed on the proxy server

**NOTE:** The Sensitive Data Discovery Add-on installation package installs the appropriate JDK
(Java) version on the server. The JDK deployed is prepackaged and does not require any
configuration. It will not conflict with other JDKs or Java Runtimes in the same environment.

See the following topics for additional information, based on the type of proxy mode you plan to
use:

- Proxy Mode with Applet

  - [Proxy Mode with Applet Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
  - [Proxy Mode with Applet Port Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)

- Proxy Mode as a Service

  - [Proxy Mode as a Service Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
  - [Proxy Mode as a Service Port Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)

# Proxy Mode as a Service Permissions

When File System scans are run in proxy mode as a service, there are two methods available for
deploying the service:

- Pre-Installed File System Proxy Service – File System Proxy Service installation package must be
  installed on the Windows proxy servers prior to executing the scans. This is the recommended
  method.
- Ad Hoc File System Proxy Service Deployment – File System Proxy Service is installed on the
  Windows proxy server when the job is executed

The data collection processing is conducted by the proxy server where the service is running and
leverages a local mode-type scan to each of the target hosts. The final step in data collection is
to compress and transfer the data collected in the SQLite databases, or Tier 2 databases, back to
the Enterprise Auditor Console server.

The secure communication is configured during the installation of the service on the proxy server.
The credential provided for the secure communications in the installation wizard is also added to
the Enterprise Auditor Connection Profile assigned to the File System Solution.

File System Proxy Service Credentials

The service can be run either as LocalSystem or with a domain account supplied during the
installation of the File System Proxy Service with the following permission on the proxy server:

- Membership in the local Administrators group
- Granted the Log on as a service privilege (**Local Security Policies** > **Local Policies** >
  **User Rights Assignment** > **Log on as a service**)
- If running FSAC, the service account in the credential profile requires access to the admin share
  (for example, `C$`) where the `sbtfilemon.ini` file exists

Additionally, the credential must have `WRITE` access to the `…\StealthAUDIT\FSAA` folder in the
installation directory.

Windows File Server Target Host Credentials

Configure the credential(s) with the following rights on the Windows host(s):

- Group membership in both of the following local groups:
  - Power Users
  - Backup Operators
- Granted the “Backup files and directories” local policy privilege

For Windows Server target hosts, the credential also requires:

- Granted the "Network access: Restrict clients allowed to make remote calls to SAM" Local
  Policies > Security Options privilege

In order to collect data on administrative shares and local policies (logon policies) for a Windows
target, the credential must have group membership in the local Administrators group.

Sensitive Data Discovery Auditing Consideration

The Sensitive Data Discovery Add-on must be installed on the proxy server. This requirement is in
addition to having the Sensitive Data Discovery Add-on installed on the Enterprise Auditor Console
server. Sensitive Data Discovery Auditing scans also require .NET Framework 4.7.2 or later.If
running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount of
RAM. Each thread requires a minimum of 2 additional GB of RAM per host.. By default, SDD scans are
configured to run two concurrent threads. For example, if the job is configured to scan 8 hosts at a
time with two concurrent SDD threads, then an extra 32 GB of RAM are required (8x2x2=32).

Secure Proxy Communication Considerations

For secure proxy communication via https, a credential is supplied during installation to provide
secure communications between the Enterprise Auditor server and the proxy server. This credential
must be a domain account, but no additional permissions are required. It is recommended to use the
same domain account configured to run the proxy service as a credential in the Connection Profile to
be used by the File System Solution

Secure Proxy Communication and Certificate Exchange

For Proxy Mode as a Service Scans, the certificate exchange mechanism and certificate exchange port
must be configured via the File System Access Auditing Data Collector Wizard prior to executing a
scan. See the
[FSAA Applet Certificate Management Overview](/docs/accessanalyzer/11.6/data-collection/file-systems/configuration.md)
topic for additional information.

Enterprise Auditor Connection Profile

When running Access Auditing (FSAA) and/or Sensitive Data Discovery Auditing scans, the credentials
within the Connection Profile assigned to the File System scans must be properly configured as
explained above. Also the firewall rules must be configured to allow for communication between the
applicable servers.

See the
[Proxy Mode as a Service Port Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
topic for firewall rule information.

# Proxy Mode as a Service Port Requirements

The following are the firewall settings are required when executing the Access Auditing (FSAA)
and/or Sensitive Data Discovery Auditing scans in proxy mode as a service for communication between
Enterprise Auditor and the proxy server:

| Communication Direction                                     | Protocol | Ports | Description                              |
| ----------------------------------------------------------- | -------- | ----- | ---------------------------------------- |
| Between Enterprise Auditor Console and Windows Proxy Server | TCP      | 8766  | FSAA Applet HTTPS communication security |
| Between Enterprise Auditor Console and Windows Proxy Server | TCP      | 8767  | FSAA Applet Certificate Exchange         |

**NOTE:** The FSAA applet https requests configuration port 8766 and the FSAA Applet Certificate
Exchange port 8767 can be customized on the Applet Settings page of the File System Access Auditor
Data Collector Wizard.

The following are the firewall settings are required when executing the Access Auditing (FSAA)
and/or Sensitive Data Discovery Auditing scans in proxy mode as a service for communication between
the proxy server and the target host:

| Communication Direction                    | Protocol | Ports | Description |
| ------------------------------------------ | -------- | ----- | ----------- |
| Windows Proxy Server to File Server/Device | TCP      | 445   | SMB         |

#### Additional Firewall Rules for NetApp Data ONTAP Devices

_Remember,_ NetApp communication security is configured on the Scan Settings page of the File System
Access Auditor Data Collector Wizard. One additional firewall setting is required when targeting
either a NetApp Data ONTAP 7-Mode device or a NetApp Data ONTAP Cluster-mode device. The required
setting is dependent upon how the NetApp communication security option is configured:

| Communication Direction                     | Protocol | Ports | Description                         |
| ------------------------------------------- | -------- | ----- | ----------------------------------- |
| Enterprise Auditor Console to NetApp Device | TCP      | 80    | HTTP NetApp communication security  |
| Enterprise Auditor Console to NetApp Device | TCP      | 443   | HTTPS NetApp communication security |

#### Additional Consideration for Windows File Servers

The following firewall setting is also required when targeting a Windows file server:

| Communication Direction                      | Protocol | Ports | Description                |
| -------------------------------------------- | -------- | ----- | -------------------------- |
| Enterprise Auditor Console to Windows Server | TCP      | 135   | for pre-scan access checks |

**_RECOMMENDED:_** Configure target hosts to respond to ping requests.

# File System Scan Options

Required permissions on the targeted file system are dependent upon not only the type of environment
targeted but also the mode in which the data collection scan is executed. There are three primary
types of scan modes: local, applet, or proxy. The proxy mode can be conducted via applet deployment,
or via running as a service (installed in advance).

For the purpose of this document, “applet” refers to the runtime deployment of the
`FSAAAppletServer.exe` to either the target host (applet mode scans) or the proxy host (proxy mode
with applet scans) via Microsoft Task Scheduler. A “proxy” host is any host which can be leveraged
for running File System scans against target hosts.

## Local Mode

When File System scans are run in local mode, it means all of the data collection processing is
conducted by the Enterprise Auditor Console server across the network. The data is collected in the
SQLite database(s), or Tier 2 database(s), on the Enterprise Auditor Console server, and then
imported into theEnterprise Auditor database, or Tier 1 database, on the SQL Server.

![Illustrates the Enterprise Auditor server running the scan against a file server](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/requirements/solutions/filesystem/localmode.webp)

The diagram illustrates the Enterprise Auditor server running the scan against a file server.

See the following topics for additional information:

- [Local Mode Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
- [Local Mode Port Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)

## Applet Mode

**CAUTION:** The local policy, “Network access: Do not allow storage of passwords and credentials
for network authentication” must be disabled in order for the applet to start.

When File System scans are run in applet mode, it means the File System applet is deployed to the
target host when the job is executed to conduct data collection. However, the applet can only be
deployed to a server with a Windows operating system. The data is collected on the Windows target
host where the applet is deployed. The final step in data collection is to compress and transfer the
data collected in the SQLite database(s), or Tier 2 database(s), back to the Enterprise Auditor
Console server. If the target host is a NAS device, the File System scans will default to local mode
for that host.

![Illustrates the Enterprise Auditor server sending an FSAA applet to a targeted Windows file server, which runs the scan against locally, and then returns data to the Enterprise Auditor server](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/requirements/solutions/filesystem/appletmode.webp)

The diagram illustrates the Enterprise Auditor server sending an FSAA applet to a targeted Windows
file server, which runs the scan against locally, and then returns data to the Enterprise Auditor
server.

See the following topics for additional information:

- [Applet Mode Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
- [Applet Mode Port Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)

## Proxy Mode with Applet

**CAUTION:** The local policy, “Network access: Do not allow storage of passwords and credentials
for network authentication” must be disabled in order for the applet to start.

When File System scans are run in proxy mode with applet, it means the File System applet is
deployed to the Windows proxy server when the job is executed to conduct data collection. The data
collection processing is initiated by the proxy server where the applet is deployed and leverages a
local mode-type scan to each of the target hosts. The final step in data collection is to compress
and transfer the data collected in the SQLite databases, or Tier 2 databases, back to the Enterprise
Auditor Console server.

![Diagram of Enterprise Auditor server sending an FSAA applet to a proxy server](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/filesystemproxy/proxymodewithapplet.webp)

The diagram illustrates the Enterprise Auditor server sending an FSAA applet to a proxy server,
which runs the scan against a file server, and then returns data to the Enterprise Auditor server.

See the following topics for additional information:

- [Proxy Mode Server Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
- [Proxy Mode with Applet Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
- [Proxy Mode with Applet Port Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)

## Proxy Mode as a Service

When File System scans are run in proxy mode as a service, there are two methods available for
deploying the service:

- Pre-Installed File System Proxy Service – File System Proxy Service installation package must be
  installed on the Windows proxy servers prior to executing the scans. This is the recommended
  method.
- Ad Hoc File System Proxy Service Deployment – File System Proxy Service is installed on the
  Windows proxy server when the job is executed

The data collection processing is conducted by the proxy server where the service is running and
leverages a local mode-type scan to each of the target hosts. The final step in data collection is
to compress and transfer the data collected in the SQLite databases, or Tier 2 databases, back to
the Enterprise Auditor Console server.

The proxy communication is configured during the installation of the service on the proxy server and
certificate exchange options are configured via the Applet Settings page of the File System Access
Auditing Data Collector Wizard. The credential provided for the secure communications in the
installation wizard is also added to the Enterprise Auditor Connection Profile assigned to the File
System Solution.

See the
[File System Proxy Service Installation](/docs/accessanalyzer/11.6/installation/filesystem-proxy/install.md)
topic for additional information.

![Diagram of Enterprise Auditor server communicating securely with the proxy service on a proxy server](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/filesystemproxy/proxymodeasservicewithsecurerpc.webp)

The diagram illustrates the Enterprise Auditor server communicating securely with the proxy service
on a proxy server, which runs the scan against a file server, collecting the data locally and
securely. Then the proxy service returns data securely to the Enterprise Auditor server.

See the following topics for additional information:

- [Proxy Mode Server Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
- [Proxy Mode as a Service Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
- [Proxy Mode as a Service Port Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)

# SharePoint Solution

The core components for Netwrix Enterprise Auditor are the Enterprise Auditor Console server, SQL
Server, and Access Information Center. See the
[Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/system-requirements.md)
topic for the core requirements.

The SharePoint solution can be configure to run without an agent or to use the Enterprise Auditor
SharePoint Agent. See the
[SharePoint Agent Installation](/docs/accessanalyzer/11.6/installation/sharepoint-agent/install.md)
topic for additional information.

In addition to these, integration with either the Netwrix Activity Monitor is required for event
activity data to be scanned. See the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
for installation requirements and information on collecting activity data.

**NOTE:** For Activity Auditing (SPAC) scans, the audit logs generated by SharePoint must be
retained for more days than the number of days between the Enterprise Auditor scans.

**_RECOMMENDED:_** When configuring the Netwrix Activity Monitor, select all events to be monitored
in both the Documents and Items section and the List, Libraries, and Site section.

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans.

**NOTE:** If the Enterprise Auditor SharePoint Agent scan option is used, it is also be necessary
for the Sensitive Data Discovery Add-On to be installed on the servers as well.

See the following topics for the SharePoint Agent and the target environment requirements:

- [SharePoint Scan Options](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
- [SharePoint Support](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)

**NOTE:** You can use the **SP_RegisterAzureAppAuth** instant job to make the configuration for
SharePoint Online easier. This job registers the necessary Microsoft Entra ID application and
provisions it with the required permissions. See the
[SP_RegisterAzureAppAuth Job](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/instant-jobs.md)
topic for additional information.

## SharePoint Solution Requirements on the Enterprise Auditor Console

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment:

| Environment | Extra-Large                                      | Large                                             | Medium                                            | Small                                           |
| ----------- | ------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------- | ----------------------------------------------- |
| Definition  | ~5,000 Site Collections or 5+ TB of managed data | ~2,500 Site Collections or 1-5 TB of managed data | ~1,000 Site Collections or 500 GB of managed data | ~100 Site Collections or 100 GB of managed data |
| RAM         | 24 GB                                            | 16 GB                                             | 12 GB                                             | 4 GB                                            |
| Cores       | 8 CPU                                            | 8 CPU                                             | 4 CPU                                             | 2 CPU                                           |
| Disk Space  | 460 GB                                           | 280 GB                                            | 160 GB                                            | 80 GB                                           |

**NOTE:** If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the
minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host.For
example, if the job is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are
required (8x2=16).

Sensitive Data Discovery Auditing Requirement

The following is required to run Sensitive Data Discovery scans:

- Sensitive Data Discovery Add-On installed on the Enterprise Auditor Console server

**NOTE:** The Sensitive Data Discovery Add-on installation package installs the appropriate JDK
(Java) version on the server. The JDK deployed is prepackaged and does not require any
configuration; it has been preconfigured to work with Enterprise Auditor and should never be
customized through Java. It will not conflict with other JDKs or Java Runtimes in the same
environment.

## SharePoint Solution Requirements on the SQL Server

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment.

| Environment              | Extra-Large                                      | Large                                             | Medium                                            | Small                                           |
| ------------------------ | ------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------- | ----------------------------------------------- |
| Definition               | ~5,000 Site Collections or 5+ TB of managed data | ~2,500 Site Collections or 1-5 TB of managed data | ~1,000 Site Collections or 500 GB of managed data | ~100 Site Collections or 100 GB of managed data |
| RAM                      | 64 GB                                            | 32 GB                                             | 16 GB                                             | 8 GB                                            |
| Cores                    | 16 CPU                                           | 12 CPU                                            | 8 CPU                                             | 4 CPU                                           |
| Number of Disks          | 4                                                | 4                                                 | 4                                                 | 4                                               |
| Operating System Disk    | 160 GB                                           | 160 GB                                            | 160 GB                                            | 160 GB                                          |
| SQL Database Disk        | 500 GB                                           | 320 GB                                            | 240 GB                                            | 100 GB                                          |
| SQL Transaction Log Disk | 120 GB                                           | 100 GB                                            | 80 GB                                             | 40 GB                                           |
| SQL TEMP DB Disk         | 320 GB                                           | 240 GB                                            | 160 GB                                            | 80 GB                                           |

# SharePoint Agent-Less Permissions

When SharePoint agent-less scans are run, it means all of the data collection processing is
conducted by the Enterprise Auditor Console server across the network.

The SharePoint agent-less scan architecture requires permissions to be configured on the specified
server:

- SharePoint Application Server permissions:

  - Membership in the local Backup Operators group

    - This is required so Enterprise Auditor can read remote registry to identify if the server
      is part of the farm, what the server’s role is, and to identify the location of the
      SharePoint configuration database.

  - Membership in the local WSS_WPG group

    - This is required to gain read access to system resources used by Microsoft SharePoint
      Foundation.

- SharePoint Farm permissions:

  - Membership in the Farm Read group at the farm level

    - This is required so the Enterprise Auditor auditing account can make calls against the
      SharePoint web services to remotely gather information around permissions, site hierarchy,
      content and more.
    - If the group does not exist already, then you will need to create a new group at that
      level and grant it ‘Read’ access. Specifically, it is a group that exists within Central
      Administration at the farm administrator level. This group only requires ‘Read’ access and
      is not giving farm admin access. Once the group is created, add the service account that
      Enterprise Auditor will be leveraging to scan SharePoint.

- Web Application permissions:

  - Custom Role with Site Collection Auditor at the web application level with the Open Items
    permission

    - This is needed for Enterprise Auditor to execute web service calls against Central
      Administration.

- SharePoint Database Server permissions:

  - SPDataAccess on the on the SharePoint Content database and all Configuration databases

    - This permission should be applied on the desired Configuration database and all Content
      databases for the SharePoint version.
    - This version-specific permission is required for Enterprise Auditor to execute read
      operations directly against the SharePoint databases, gather information from the
      configuration database regarding the names and locations of the web applications and
      content databases, and give read access around sites, roles, and users.

- MySites permissions are based on the SharePointAccess Data Collector configuration option:

  - Forcing the service account to become a temporary admin of the personal sites either as the
    service account or as a member of the Company Administrators group requires SharePoint Farm
    Administrator role or Site Collection Auditor at the web application housing MySites.
  - The skipping inaccessible personal sites option will only scan sites where the service account
    has administrative access. It requires the service account to be provisioned prior to the scan
    to scan OneDrives / personal sites.

# SharePoint Agent-Less Ports

One of the following ports must be open for communication between Enterprise Auditor and the
SharePoint Online environment:

| Port | Protocol | Source                            | Direction | Target                        | Purpose             |
| ---- | -------- | --------------------------------- | --------- | ----------------------------- | ------------------- |
| 80   | TCP      | Enterprise Auditor Console server | `<-->`    | SharePoint Online Environment | HTTP Communication  |
| 443  | TCP      | Enterprise Auditor Console server | `<-->`    | SharePoint Online Environment | HTTPS Communication |

The following ports must be open for communication between Enterprise Auditor and the SharePoint
on-premise environment:

| Port    | Protocol | Source                            | Direction | Target                        | Purpose                            |
| ------- | -------- | --------------------------------- | --------- | ----------------------------- | ---------------------------------- |
| 1433    | TCP      | Enterprise Auditor Console server | `<-->`    | SharePoint SQL Server         | SharePoint SQL Database Connection |
| 445     | TCP      | Enterprise Auditor Console server | `<-->`    | SharePoint Application Server | Remote Registry Connection         |
| 389/636 | TCP      | Enterprise Auditor Console server | `<-->`    | LDAP server                   | Authentication                     |
| 80      | TCP      | Enterprise Auditor Console server | `<-->`    | SharePoint Application Server | StealthAUDIT Communication Channel |

# SharePoint Agent Permissions

When Enterprise Auditor SharePoint scans are run in agent-based mode, the Enterprise Auditor
SharePoint Agent must be installed on the SharePoint Application server which hosts the Central
Administration component prior to executing the scans. This is typically the first server stood up
during the SharePoint farm installation process in this mode. The data collection processing is
conducted by the SharePoint Agent for the target environment. The final step in data collection is
to transfer the data collected in the SQLite databases, or Tier 2 databases, on the Enterprise
Auditor SharePoint Agent server back to the Enterprise Auditor Console server.

The Enterprise Auditor SharePoint Agent needs to be installed on the:

- SharePoint Application server hosting the Central Administration component

  - SharePoint® 2013 through SharePoint® 2019
  - Windows® Server 2012 through Windows® Server 2022

Additional Server Requirements

The following are additional requirements for the Enterprise Auditor SharePoint Agent server:

- .NET Framework 4.8 installed
- Port Sharing network feature

Sensitive Data Discovery Auditing Requirement

In addition to having the Sensitive Data Discovery Add-on be installed on the Enterprise Auditor
Console server, The following is required to run Sensitive Data Discovery scans:

- Sensitive Data Discovery Add-On, 64-bit version, installed on the Enterprise Auditor SharePoint
  Agent server
- .NET Framework 4.7.2 or later

**NOTE:** The Sensitive Data Discovery Add-on installation package installs the appropriate JDK
(Java) version on the server. The JDK deployed is prepackaged and does not require any
configuration; it has been preconfigured to work with Enterprise Auditor and should never be
customized through Java. It will not conflict with other JDKs or Java Runtimes in the same
environment.

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount
of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job
is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

## Permissions Explained

If limited provisioning of the service account is not required by the organization, then the
following permissions are sufficient for successful agent-based scans:

- Membership in the local Administrator group on the on server where the Enterprise Auditor
  SharePoint Agent is installed

  - Only needed for agent installation

- SharePoint Application Server permissions:

  - Membership in the local Backup Operators group

    - This is required so Enterprise Auditor can read remote registry to identify if the server
      is part of the farm, what the server’s role is, and to identify the location of the
      SharePoint configuration database

  - Membership in the local WSS_WPG group

    - This is required to gain read access to system resources used by Microsoft SharePoint
      Foundation

  - Log on as a Service in the Local Security Policy
  - Full Control on the agent install directory, default path is:

    `C:\Program Files\STEALTHbits\StealthAUDIT\SPAA`

- SharePoint Farm permissions:

  - Membership in the Farm Read group at the farm level

    - This is required so the Enterprise Auditor auditing account can make calls against the
      SharePoint web services to remotely gather information around permissions, site hierarchy,
      content and more
    - If the group does not exist already, then you need to create a new group at that level and
      grant it Read access. Specifically, it is a group that exists within Central
      Administration at the farm administrator level. This group only requires Read access and
      is not giving farm admin access. Once the group is created, add the service account that
      Enterprise Auditor will be leveraging to scan SharePoint.

- Web Application permissions:

  - Custom Role with Site Collection Auditor at the web application level with the Open Items
    permission

    - This is needed for Enterprise Auditor to execute web service calls against Central
      Administration

- SharePoint Database Server permissions:

  - SPDataAccess on the SharePoint Content database and all Configuration databases

    - This permission should be applied on the desired Configuration database and all Content
      databases for the SharePoint version
    - This version-specific permission is required for Enterprise Auditor to execute read
      operations directly against the SharePoint databases, gather information from the
      configuration database regarding the names and locations of the web applications and
      content databases, and give read access around sites, roles, and users

- DB_Owner on Enterprise Auditor database if using Windows Authentication for the Storage Profile
- MySites permissions are based on the SharePointAccess Data Collector configuration option:

  - Forcing the service account to become a temporary admin of the personal sites either as the
    service account or as a member of the Company Administrators group requires SharePoint Farm
    Administrator role or Site Collection Auditor at the web application housing MySites
  - The skipping inaccessible personal sites option only scans sites where the service account has
    administrative access
  - This grants Enterprise Auditor rights to scan MySites

Additional permission models are explained for a less and least permission model.

## SharePoint Agent-Based Less Privilege Permission Model

If restricted permissions are desired by the organization, then the following permissions are needed
for the service account to successfully run SharePoint Agent-based scans.

Prior to installation of the SharePoint Agent, the service account to be supplied during
installation and later used to run the Access Auditing (SPAA) and Sensitive Data Discovery Auditing
scans against the targeted SharePoint environment needs the following permissions:

- Log on as a Service in the Local Security Policy
- Membership in the local IIS_IUSRS group
- Performance Log Users (for Sensitive Data Discovery only)

After the SharePoint Agent installation, this service account needs the following additional
permissions to run the Access Auditing (SPAA) and Sensitive Data Discovery Auditing scans:

- Site Collection Administrator on all Site Collections to be scanned
- Membership in the local Users group on the server where the SharePoint Agent is installed
- DB_Owner on Enterprise Auditor database if using Windows Authentication for the Storage Profile

If the scans include Web Application scoping, then the following permissions are needed (can be
skipped if running full farm scans):

- Membership in the local Backup Operators group
- Membership in the local WSS_WPG group
- WSS_CONTENT_APPLICATION_POOLS on the SharePoint Configuration database

After the Enterprise Auditor SharePoint Agent is installed, ensure that the service account has the
following permissions:

- Full Control on the agent install directory, default path is:

  `C:\Program Files\STEALTHbits\StealthAUDIT\SPAA`

The Enterprise Auditor SharePoint Agent utilizes Microsoft APIs. The Microsoft APIs require an
account with the following permissions in order to collect all of the data:

- WSS_CONTENT_APPLICATION_POOLS on the SharePoint Content databases
- WSS_CONTENT_APPLICATION_POOLS on the SharePoint Configuration database

**NOTE:** If scans include Web Application scoping, this last permission requirement is already met.

## SharePoint Agent-Based Least Privilege Permission Model

If a least privilege model is required by the organization, then the following permissions are
needed for the service account to successfully run SharePoint Agent-based scans.

Prior to installation of the SharePoint Agent, the service account to be supplied during
installation and later used to run the Access Auditing (SPAA) and Sensitive Data Discovery Auditing
scans the targeted SharePoint environment needs the following permissions:

- Log on as a Service in the Local Security Policy
- Service Account SID added to the `SMSvcHost.exe.config` file
- Performance Log Users (for Sensitive Data Discovery only)

After the SharePoint Agent installation, this service account needs the following additional
permissions to run the Access Auditing (SPAA) scans:

- Site Collection Administrator on all Site Collections to be scanned
- Membership in the local Users group on the server where the SharePoint Agent is installed
- DB_Owner on Enterprise Auditor database if using Windows Authentication for the Storage Profile

If the scans include Web Application scoping, then the following permissions are needed (can be
skipped if running full farm scans):

- READ Access on the following registry keys:

  - `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg`
  - `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg\AllowPaths`
  - `HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg\AllowExactPaths`
  - For SharePoint 2013:

    - `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools\Web Server Extensions\15.0\Secure`
    - `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools\Web Server Extensions\15.0\Secure\ConfigDB`

- DB_DataReader on the SharePoint Configuration database
- `'GRANT EXECUTE'` permissions on the following stored procedures in the SharePoint Configuration
  database:

  - `proc_getObject`
  - `proc_getObjectsByClass`
  - `proc_getObjectsByBaseClass`
  - `proc_getDependentObjectsByBaseClass`
  - `proc_ReturnWebFeatures`

After the Enterprise Auditor SharePoint Agent is installed, ensure that the service account has the
following permissions:

- Full Control on the agent install directory, default path is:

  `C:\Program Files\STEALTHbits\StealthAUDIT\SPAA`

The Enterprise Auditor SharePoint Agent utilizes Microsoft APIs. The Microsoft APIs require an
account with the following permissions in order to collect all of the data:

- `'GRANT EXECUTE'` permissions on the following stored procedures in the SharePoint Configuration
  database:

  - `proc_getObject`
  - `proc_getObjectsByClass`
  - `proc_getObjectsByBaseClass`
  - `proc_getDependentObjectsByBaseClass`
  - `proc_ReturnWebFeatures`

    **NOTE:** The above four stored procedures would already have the correct permissions if Web
    Application scoping is desired.

  - `[dbo].proc_getSiteName`
  - `[dbo].proc_getSiteMap`
  - `[dbo].proc_getSiteMapById`

- DB_DataReader on the SharePoint Content databases and SharePoint AdminContent database, if
  applicable
- `'GRANT EXECUTE'` permissions on the following stored procedures in the SharePoint Content
  databases and SharePoint AdminContent database (if applicable):

  - `[dbo].proc_EnumLists`
  - `[dbo].proc_GetTpWebMetaDataAndListMetaData`
  - `[dbo].proc_GetListMetaDataAndEventReceivers`
  - `[dbo].proc_GetSiteProps`
  - `[dbo].proc_GetListWebParts`
  - `[dbo].proc_GetWebFeatureList`
  - `[dbo].proc_GetListFields`
  - `[dbo].proc_GetDocsMetaInfo`
  - `[dbo].proc_GetDocIdUrl`
  - `[dbo].proc_ListChildWebs`
  - `[dbo].proc_ListChildWebs`
  - `[dbo].proc_ListUrls`
  - `[dbo].proc_ListChildWebs`
  - `[dbo].proc_SecListAllSiteMembers`
  - `[dbo].proc_SecRefreshToken`
  - `[dbo].proc_SecListSiteGroups`
  - `[dbo].proc_SecListSiteGroupMembership`
  - `[dbo].proc_SecGetRoleDefs`
  - `[dbo].proc_SecListSiteGroups`
  - `[dbo].proc_SecListScopeUsers`
  - `[dbo].proc_SecListScopeGroups`
  - `[dbo].proc_SecAddWebMembership`
  - `[dbo].proc_SecGetSecurityInfo`
  - `[dbo].proc_SecGetPrincipalByLogin`
  - `[dbo].proc_SecGetPrincipalDisplayInformation20`
  - `[dbo].proc_SecGetRoleBindingsForAllPrincipals`

# SharePoint Agent Ports

The following are the firewall settings are required when executing the Access Auditing (FSAA)
and/or Sensitive Data Discovery Auditing scans in Agent-based mode for communication between
Enterprise Auditor and the target host:

| Port    | Protocol | Source                                     | Direction | Target                                     | Purpose                                                                |
| ------- | -------- | ------------------------------------------ | --------- | ------------------------------------------ | ---------------------------------------------------------------------- |
| 1433    | TCP      | Enterprise Auditor Console server          | `<-->`    | SharePoint SQL Server                      | SharePoint SQL Database Connection                                     |
| 445     | TCP      | Enterprise Auditor Console server          | `<-->`    | SharePoint Application Server              | Remote Registry Connection (Only required for Web Application scoping) |
| 389/636 | TCP      | Enterprise Auditor SharePoint Agent server | `<-->`    | LDAP server                                | Agent Authentication                                                   |
| 9876\*  | TCP      | Enterprise Auditor Console server          | `<-->`    | Enterprise Auditor SharePoint Agent server | Enterprise Auditor Agent Communication Channel                         |

\*Configurable value in the SharePoint Access Auditor Data Collector Wizard.

# SharePoint Online Permissions

SharePoint Online environments can only be scanned in Agent-less mode. When SharePoint agent-less
scans are run, it means all of the data collection processing is conducted by the Enterprise Auditor
Console server across the network.

## Modern Authentication

The SharePoint agent-less scan architecture uses modern authentication in the target environment:

Tenant Global Administrator Role

- Tenant Global Administrator role is required to provision the application

  - Modern authentication enables Enterprise Auditor to scan SharePoint Online and all OneDrives
    in the target environment

Permissions for Microsoft Graph APIs

- Application Permissions:

  - Application.Read.All – Read all applications
  - AuditLog.Read.All – Read all audit log data
  - Directory.Read.All – Read directory data
  - Domain.Read.All – Read domains
  - Files.Read.All – Read files in all site collections
  - GroupMember.Read.All – Read all group memberships
  - InformationProtectionPolicy.Read.All – Read all published labels and label policies for an
    organization
  - Member.Read.Hidden – Read all hidden memberships
  - Organization.Read.All – Read organization information
  - OrgContact.Read.All – Read organization contact
  - Policy.Read.All – Read your organization's policies
  - Policy.Read.ConditionalAccess – Read you organization's conditional access policies
  - Policy.Read.PermissionGrant – Read consent and permission grant policies
  - ServiceHealth.Read.All – Read service health
  - ServiceMessage.Read.All – Read service messages
  - Sites.Read.All – Read items in all site collections
  - Team.ReadBasic.All – Get a list of all teamss
  - TeamMember.Read.All – Read the members of all teams

- Delegated Permissions:

  - Group.Read.All – Read all groups
  - User.Read.All – Read all users' full profiles

Permissions for Office 365 Management APIs

- Application Permissions:

  - ActivityFeed.Read – Read activity data for your organization
  - ActivityFeed.ReadDlp – Read DLP policy events including detected sensitive data
  - ServiceHealth.Read – Read service health information for your organization

Permissions for SharePoint APIs

- Application Permissions:

  - Sites.FullControl.All – Have full control of all site collections
  - Sites.Read.All – Read items in all site collections
  - TermStore.Read.All – Read managed metadata
  - User.Read.All – Read user profiles

# SharePoint Online Ports

One of the following ports must be open for communication between Enterprise Auditor and the
SharePoint environment:

| Port | Protocol | Source                            | Direction | Target                        | Purpose             |
| ---- | -------- | --------------------------------- | --------- | ----------------------------- | ------------------- |
| 80   | TCP      | Enterprise Auditor Console server | `<-->`    | SharePoint Online Environment | HTTP Communication  |
| 443  | TCP      | Enterprise Auditor Console server | `<-->`    | SharePoint Online Environment | HTTPS Communication |

# SharePoint Scan Options

Required permissions on the targeted SharePoint environment are dependent upon not only the type of
environment targeted but also the type of data collection scan being executed. There are two types
of Access Auditing (SPAA) and/or Sensitive Data Discovery Auditing scans: agent-based and
agent-less. The Activity Auditing (SPAC) scans run as agent-less scans from Enterprise Auditor, but
they require the Netwrix Activity Monitor to have an activity agent deployed in the target
environment.

## Agent-Based Type

When Enterprise Auditor SharePoint scans are run in agent-based mode, the Enterprise Auditor
SharePoint Agent must be installed on the SharePoint Application server which hosts the Central
Administration component prior to executing the scans. This is typically the first server stood up
during the SharePoint farm installation process in this mode. The data collection processing is
conducted by the SharePoint Agent for the target environment. The final step in data collection is
to transfer the data collected in the SQLite databases, or Tier 2 databases, on the Enterprise
Auditor SharePoint Agent server back to the Enterprise Auditor Console server.

**NOTE:** Agent-based scans can only target on-premise environments.

See the following topics for additional information:

- [SharePoint Agent Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
- [SharePoint Agent Ports](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)

## Agent-Less Type

When SharePoint agent-less scans are run, it means all of the data collection processing is
conducted by the Enterprise Auditor Console server across the network.

**NOTE:** Agent-less scans can target both on-premise and online environments. This is the only scan
mode that can run Activity Auditing (SPAC) scans.

For Activity Auditing (SPAC) scans, target the server where the Netwrix Activity Monitor has a
deployed activity agent.

See the following topics for additional information:

- SharePoint Online

  - [SharePoint Online Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
  - [SharePoint Online Ports](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)

- SharePoint On-Premise

  - [SharePoint Agent-Less Permissions](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
  - [SharePoint Agent-Less Ports](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)

# Unix Solution

The core components for Netwrix Enterprise Auditor are the Enterprise Auditor Console server, SQL
Server, and Access Information Center. See the
[Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/system-requirements.md)
topic for the core requirements.

See the
[Target Unix Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
topic for target environment requirements.

## Unix Solution Requirements on the Enterprise Auditor Console

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment:

| Environment | Large  | Medium – Small |
| ----------- | ------ | -------------- |
| RAM         | 8+ GB  | 4+ GB          |
| Cores       | 4+ CPU | 2 CPU          |
| Disk Space  | 30 GB  | 30 GB          |

## Unix Solution Requirements on the SQL Server

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment.

| Environment              | Large  | Medium – Small |
| ------------------------ | ------ | -------------- |
| RAM                      | 16+ GB | 16+ GB         |
| Cores                    | 8 CPU  | 4 CPU          |
| Number of Disks          | 4      | 4              |
| Operating System Disk    | 160 GB | 160 GB         |
| SQL Database Disk        | 300 GB | 70-120 GB      |
| SQL Transaction Log Disk | 80 GB  | 50 GB          |
| SQL TEMP DB Disk         | 160 GB | 100 GB         |

# Windows Solution

The core components for Netwrix Enterprise Auditor are the Enterprise Auditor Console server, SQL
Server, and Access Information Center. See the
[Requirements](/docs/accessanalyzer/11.6/getting-started/requirements/system-requirements.md)
topic for the core requirements.

See the
[Target Windows Server and Desktop Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
topic for target environment requirements.

## Windows Solution Requirements on the Enterprise Auditor Console

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment:

| Environment | Large  | Medium – Small |
| ----------- | ------ | -------------- |
| RAM         | 8+ GB  | 4+ GB          |
| Cores       | 4+ CPU | 2 CPU          |
| Disk Space  | 30 GB  | 30 GB          |

## Windows Solution Requirements on the SQL Server

RAM, CPU, and Disk Space

These are dependent upon the size of the target environment.

| Environment              | Large  | Medium – Small |
| ------------------------ | ------ | -------------- |
| RAM                      | 16+ GB | 16+ GB         |
| Cores                    | 8 CPU  | 4 CPU          |
| Number of Disks          | 4      | 4              |
| Operating System Disk    | 160 GB | 160 GB         |
| SQL Database Disk        | 300 GB | 70-120 GB      |
| SQL Transaction Log Disk | 80 GB  | 50 GB          |
| SQL TEMP DB Disk         | 160 GB | 100 GB         |

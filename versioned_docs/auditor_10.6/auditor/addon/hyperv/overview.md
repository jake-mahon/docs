# Hyper-V SCVMM

Netwrix Auditor is a visibility platform for user behavior analysis and risk mitigation that enables control over changes, configurations and access in hybrid IT environments to protect data regardless of its location. The platform provides security analytic to detect anomalies in user behavior and investigate threat patterns before a data breach occurs.

Microsoft System Center Virtual Machine Manager (SCVMM) is a solution for configuring and managing virtualized infrastructure components across on-premises, service provider, and the Azure cloud environment. These components include virtualization servers, networking components and storage resources.

Virtualization teams, Managed Service Providers and other IT professionals need to detect who does what in the SCVMM-managed virtual infrastructure. For that, a unified audit trail is required, supporting detailed SCVMM monitoring and effective response to changes.

For that purpose, you can use a specially designed add-on. It works in collaboration with Netwrix Auditor, supplying data about operations on your SCVMM server to Netwrix database. Aggregating data into a single audit trail simplifies the analysis, makes activity monitoring more cost-effective, and helps you keep tabs on your virtual infrastructure.

Major benefits:

- Gain a high-level view of the data you store
- Detect unauthorized activity that might threaten your data

## How It Works

The add-on is implemented as a stand-alone application that collects activity data from Virtual Machine Manager and sends it to Auditor using the Integration API.

[![HIW](/img/versioned_docs/auditor_10.6/auditor/addon/cyberark/diagram.png)](/versioned_docs/auditor_10.6/resources/images/auditor/addon/hyperv/diagram.png)

On a high level, the solution works as follows:

1. An IT administrator configures the Integration API settings to enable data collection and storage to the Netwrix database for further reporting, search, etc.

   It is recommended to create a dedicated monitoring plan in Auditor and add a dedicated item of __Integration__ type to it — then you will be able to filter data in reports and search results by monitoring plan or item name.
2. On SCVMM side, the IT administrator prepares a dedicated user account for accessing SCVMM server. This account requires administrative rights.
3. Then the IT administrator opens the settings.xml configuration file and specifies the necessary parameters for add-on operation, including Netwrix Auditor server settings, etc.
4. The IT administrator selects the deployment scenario and runs install.ps1 PowerShell script file to deploy and configure the add-on components on the target server.
5. This script creates a Windows scheduled task that will run periodically (every 15 minutes) to collect audit data from VMM server.

   See the [Monitoring Scope](/versioned_docs/auditor_10.6/auditor/addon/hyperv/monitoredevents.md) for additional information on the default list of the events supported out-of-the box.
6. The add-on component __HVARunner.exe__ starts collecting activity data from VMM. Data communication is performed using TCP protocol.
7. The add-on processes this data into Auditor-compatible format (Activity Records). Each Activity Record contains the Who-What-When-Where-Action information (that is, initiator's account, time, action, and other details).

See the [Integration API](/versioned_docs/auditor_10.6/auditor/api/overview.md) topic for additional information on the structure of the Activity Record and the capabilities of the Integration API.

8. The add-on uses the Integration API to send the Activity Records to Auditor Server, where this data becomes available for search, reporting and alerting.
9. Users open Auditor Client to work with collected data:
   - Search for file changes using certain criteria
   - Export data to PDF or CSV files
   - Save search results as reports
   - Subscribe to search results
   - Configure and receive alerts

### Add-on Delivery Package

The add-on delivery package is a ZIP archive comprising several files, including DLLs, configuration and executable files. The latter ones are listed in the table below.

| File name | Description |
| --- | --- |
| install.ps1 | PowerShell script that installs the add-on components and creates a scheduled task for data collection. |
| settings.xml | Contains parameters for the add-on service operation. |
| __HVARunner.exe__ | Main add-on component, responsible for audit data collection from SCVMM. |

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as follows:

| On... | Ensure that... |
| --- | --- |
| Auditor Server | - Integration API and Audit Database settings are configured in Auditor Server settings. See the [Prerequisites](/versioned_docs/auditor_10.6/auditor/api/prerequisites.md) and [Audit Database](/versioned_docs/auditor_10.6/auditor/admin/settings/auditdatabase.md) topics for additional information. - The __TCP 9699__ port must be open on Windows firewall for inbound connections. - User account under which data will be written to the Audit Database requires the __Contributor__ role in Netwrix Auditor. See the [Role-Based Access and Delegation](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/delegation.md) topic for additional information.  Alternatively, you can grant it the __Global administrator__ role, or add that account to the __Netwrix Auditor Administrators__ group. |
| Add-on installation server, i.e. the machine where the add-on will be installed | - The __TCP 5985__ port must be open on Windows firewall for inbound connections. - NET Framework 4.5 or later. |
| Microsoft System Center Virtual Machine Manager | SCVMM versions:   - 2019 - 2016 |
| Virtualization hosts | - Microsoft Hyper-V (hardware and nested-virtualization) - VMware ESXi |

### Accounts and Rights

It is recommended to create a dedicated account for running the add-on.

This account should have the following minimal rights and permissions:

- __Administrator__ role in SCVMM
- __Contributor__ role in Auditor. See the [Role-Based Access and Delegation](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/delegation.md) topic for additional information.

### Considerations and Limitations

- By default, the add-on is targeted at a single SCVMM server.

- If Auditor Server becomes unavailable for some time, the add-on will reset the last data collection and will run it anew during the next scheduled interval.

## Compatibility Notice

The add-on is compatible with:

- Microsoft System Center Virtual Machine Manager 2019 and 2016
- Netwrix Auditor 9.9 and later

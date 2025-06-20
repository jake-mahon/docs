# Active Directory

Manages users and groups in Active Directory. This package supports incremental synchronization with
the DirSync mechanism.

| Package Characteristics | Value                               |
| ----------------------- | ----------------------------------- |
| Display Name            | Directory/Active Directory          |
| Identifier              | Usercube.AD@0000001                 |
| Export                  | Usercube-Export-ActiveDirectory.dll |
| Fulfill                 | Usercube-Fulfill-Ldap.dll           |
| Has Incremental Mode    | True                                |
| Publisher               | Identity Manager                    |

# Apache Directory

Manages users and groups in Apache Directory.

| Package Characteristics | Value                        |
| ----------------------- | ---------------------------- |
| Display Name            | Directory/Apache Directory   |
| Identifier              | Usercube.LDAP.Apache@0000001 |
| Export                  | Usercube-Export-Ldap.dll     |
| Fulfill                 | Usercube-Fulfill-Ldap.dll    |
| Has Incremental Mode    | False                        |
| Publisher               | Identity Manager             |

# Microsoft Entra ID

Manages users and groups in Microsoft Entra ID. This package supports incremental synchronization
with the delta API.

| Package Characteristics | Value                        |
| ----------------------- | ---------------------------- |
| Display Name            | Directory/Microsoft Entra ID |
| Identifier              | Usercube.AzureAD@0000001     |
| Export                  | Usercube-Export-AzureAD.dll  |
| Fulfill                 | Usercube-Fulfill-AzureAD.dll |
| Has Incremental Mode    | True                         |
| Publisher               | Identity Manager             |

# Azure

Exports Azure resources, role definitions and role assignments.

| Package Characteristics | Value                     |
| ----------------------- | ------------------------- |
| Display Name            | Cloud/Azure               |
| Identifier              | Usercube.Azure@0000001    |
| Export                  | Usercube-Export-Azure.dll |
| Fulfill                 | NONE                      |
| Has Incremental Mode    | False                     |
| Publisher               | Identity Manager          |

# CSV

Exports CSV to prepare synchronization.

| Package Characteristics | Value                   |
| ----------------------- | ----------------------- |
| Display Name            | File/CSV                |
| Identifier              | Usercube.CSV@0000001    |
| Export                  | Usercube-Export-Csv.dll |
| Fulfill                 | NONE                    |
| Has Incremental Mode    | True                    |
| Publisher               | Identity Manager        |

# CyberArk

Manages CyberArk entities, including user and group assignments.

| Package Characteristics | Value                          |
| ----------------------- | ------------------------------ |
| Display Name            | PAM/CyberArk                   |
| Identifier              | Usercube.SCIM.CyberArk@0000001 |
| Export                  | Usercube-Export-Scim.dll       |
| Fulfill                 | Usercube-Fulfill-Scim.dll      |
| Has Incremental Mode    | False                          |
| Publisher               | Identity Manager               |

# EasyVista

Manages users inside an EasyVista instance. This package supports incremental synchronization.

| Package Characteristics | Value                          |
| ----------------------- | ------------------------------ |
| Display Name            | ITSM/EasyVista                 |
| Identifier              | Usercube.EasyVista@0000001     |
| Export                  | Usercube-Export-EasyVista.dll  |
| Fulfill                 | Usercube-Fulfill-EasyVista.dll |
| Has Incremental Mode    | True                           |
| Publisher               | Identity Manager               |

# EasyVista Ticket

Creates tickets inside an EasyVista instance. This package does not support incremental
synchronization.

| Package Characteristics | Value                                                                                          |
| ----------------------- | ---------------------------------------------------------------------------------------------- |
| Display Name            | Ticket/EasyVista                                                                               |
| Identifier              | Usercube.EasyVistaTicket@0000001                                                               |
| Export                  | NONE                                                                                           |
| Fulfill                 | Usercube-Fulfill-ToEasyVistaTicket.dll and Usercube-EasyVistaTicket-UpdateFulfillmentState.dll |
| Has Incremental Mode    | False                                                                                          |
| Publisher               | Identity Manager                                                                               |

# Excel

Exports Excel data sheets.

| Package Characteristics | Value                     |
| ----------------------- | ------------------------- |
| Display Name            | File/Excel                |
| Identifier              | Usercube.Excel@0000001    |
| Export                  | Usercube-Export-Excel.dll |
| Fulfill                 | NONE                      |
| Has Incremental Mode    | True                      |
| Publisher               | Identity Manager          |

# Generic LDAP

Manages entries in an LDAP compliant directory.

| Package Characteristics | Value                     |
| ----------------------- | ------------------------- |
| Display Name            | Directory/Generic LDAP    |
| Identifier              | Usercube.LDAP@0000001     |
| Export                  | Usercube-Export-Ldap.dll  |
| Fulfill                 | Usercube-Fulfill-Ldap.dll |
| Has Incremental Mode    | False                     |
| Publisher               | Identity Manager          |

# Generic SCIM

Manages entities in SCIM compatible application.

| Package Characteristics | Value                     |
| ----------------------- | ------------------------- |
| Display Name            | Custom/SCIM               |
| Identifier              | Usercube.SCIM@0000001     |
| Export                  | Usercube-Export-Scim.dll  |
| Fulfill                 | Usercube-Fulfill-Scim.dll |
| Has Incremental Mode    | True                      |
| Publisher               | Identity Manager          |

# Generic SQL

Exports data from a SQL database.

| Package Characteristics | Value                   |
| ----------------------- | ----------------------- |
| Display Name            | Database/Generic SQL    |
| Identifier              | Usercube.SQL@0000001    |
| Export                  | Usercube-Export-Sql.dll |
| Fulfill                 | NONE                    |
| Has Incremental Mode    | False                   |
| Publisher               | Identity Manager        |

When creating a connection to a database which is not handled by Identity Manager's packages, you'll
need to fill in the `ProviderDllName` and `ProviderClassFullName` properties of the
[ Sql ](/docs/identitymanager/6.2/integration/connectors/connector-catalog/database-connectors.md) connector using the procedure given in the
example.

# Google Workspace

Manages Google Workspace entities.

| Package Characteristics | Value                                |
| ----------------------- | ------------------------------------ |
| Display Name            | Directory/Google Workspace           |
| Identifier              | Usercube.GoogleWorkspace@0000001     |
| Export                  | Usercube-Export-GoogleWorkspace.dll  |
| Fulfill                 | Usercube-Fulfill-GoogleWorkspace.dll |
| Has Incremental Mode    | False                                |
| Publisher               | Identity Manager                     |

# Home Folders

Manages Home Folders.

| Package Characteristics | Value                          |
| ----------------------- | ------------------------------ |
| Display Name            | Storage/Home Folders           |
| Identifier              | Usercube.HomeFolder@0000001    |
| Export                  | Usercube-Export-HomeFolder.dll |
| Fulfill                 | NONE                           |
| Has Incremental Mode    | False                          |
| Publisher               | Identity Manager               |

# Database

Updates the Identity Manager database for each provisioning order. This package is used for HR
systems, authoritative systems or other Identity Manager instances.

| Package Characteristics | Value                                  |
| ----------------------- | -------------------------------------- |
| Display Name            | Usercube/Database                      |
| Identifier              | Usercube.FulfillDatabase@0000001       |
| Export                  | NONE                                   |
| Fulfill                 | Usercube-Fulfill-InternalResources.dll |
| Has Incremental Mode    | False                                  |
| Publisher               | Identity Manager                       |

# References: Packages

If you are looking for the dll of a given package, be aware that you can often find it in the
[nuget catalog](https://www.nuget.org/packages). Then you can follow the procedure:

1. Download and extract the package.

2. Copy the dll file (corresponding to the appropriate .Net version) to the `Runtime` folder.

- #### [Active Directory](/docs/identitymanager/6.2/integration/connectors/connector-packages.md)
  Manages users and groups in Active Directory. This package supports incremental synchronization
  with the DirSync mechanism.- #### [Apache Directory](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Manages users
  and groups in Apache Directory.- #### [Azure](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Exports Azure resources, role
  definitions and role assignments.- #### [CSV](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Exports CSV to prepare
  synchronization.- #### [CyberArk](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Manages CyberArk entities, including user
  and group assignments.- #### [EasyVista](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Manages users inside an EasyVista
  instance. This package supports incremental synchronization.- ####
  [EasyVista Ticket](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Creates tickets inside an EasyVista instance. This
  package supports incremental synchronization.- #### [Excel ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Exports Excel data
  sheets.- #### [Generic LDAP](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Manages entries in an LDAP compliant
  directory.- #### [Generic SCIM](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Manages entities in SCIM compatible
  application.- #### [Generic SQL](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Exports data from a SQL database.- ####
  [Google Workspace](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Manages Google Workspace entities.- ####
  [Home Folders](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Manages Home Folders.- #### [JSON](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Generate
  JSON files for each provisioning order. These JSON can then be used by custom scripts.- ####
  [LDIF](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Exports entries from a LDIF file.- ####
  [Manual Ticket](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Opens manual provisioning tickets in Identity
  Manager.- #### [Manual Ticket and CUD Resources](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Opens
  manual provisioning tickets in Identity Manager.- ####
  [Microsoft Entra ID](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Manages users and groups in Microsoft
  Entra ID (formerly Microsoft Azure AD). This package supports incremental synchronization with
  the delta API.- #### [Microsoft Exchange](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Manages Microsoft
  Exchange mailboxes. This package supports incremental synchronization.- ####
  [MySQL](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Export data from a MySQL database.- #### [OData](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Manages
  OData entities.- #### [ODBC](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Exports data from a generic ODBC compatible
  database.- #### [Open LDAP](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Manages entries in Open LDAP. This package
  supports incremental synchronization with the sysrepl mechanism.- ####
  [Oracle Database](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Export data from an Oracle database.- ####
  [Oracle LDAP](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Manages entries in Oracle Internet Directory.- ####
  [PostgreSQL](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Export data from a PostgreSQL database.- ####
  [PowerShellProv](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Fulfills an external system with a custom PowerShell
  script.- #### [PowerShellSync](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Create a CSV export from a Powershell
  Script.- #### [RACF](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Exports the RACF users and profiles.- ####
  [Red Hat Directory Server](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Manages entries in a Red Hat
  Directory Server.- #### [Robot Framework](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Fulfills an external system
  using a Robot Framework script.- #### [Salesforce](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Manages Salesforce
  entities.- #### [SAP ASE](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Exports data from a SAP ASE database.- ####
  [SAP ERP 6.0](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Manages users and roles in SAP ERP 6.0.- ####
  [SAP S/4 HANA](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Manages users and roles in SAP S/4 HANA.- ####
  [ServiceNow](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Manages any data in the CMDB, including users and roles. This
  package supports incremental synchronization.- ####
  [ServiceNow Ticket](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Opens tickets in ServiceNow for the manual
  provisioning.- #### [Shared Folders](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Manages users and permissions in
  Shared Folders.- #### [SharePoint](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Exports sites, folders, SharePoint
  groups and permissions.- #### [Slack](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Manages Slack entities.- ####
  [SQL Server](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Export data from a SQL Server database.- ####
  [SQL Server Entitlements](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Exports SQL Server
  Entitlements- #### [TSS](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Exports the Top Secret users and profiles.- ####
  [Unplugged](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Manages an unplugged system with a completely custom data
  model.- #### [Database](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Updates the Identity Manager database for
  each provisioning order. This package is used for HR systems, authoritative systems or other
  Identity Manager instances.- #### [Workday](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Manages users and groups in
  Workday.- #### [Workflow](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) Triggers workflows in Identity Manager for each
  provisioning order.

# JSON

Generate JSON files for each provisioning order. These JSON can then be used by custom scripts.

| Package Characteristics | Value                          |
| ----------------------- | ------------------------------ |
| Display Name            | Custom/JSON                    |
| Identifier              | Usercube.FulfillToFile@0000001 |
| Export                  | NONE                           |
| Fulfill                 | Usercube-Fulfill-ToFile.dll    |
| Has Incremental Mode    | False                          |
| Publisher               | Identity Manager               |

# LDIF

Exports entries from a LDIF file.

| Package Characteristics | Value                    |
| ----------------------- | ------------------------ |
| Display Name            | Directory/LDIF           |
| Identifier              | Usercube.LDIF@0000001    |
| Export                  | Usercube-Export-Ldif.dll |
| Fulfill                 | NONE                     |
| Has Incremental Mode    | False                    |
| Publisher               | Identity Manager         |

# Manual Ticket and CUD Resources

Opens manual provisioning tickets in Identity Manager.

| Package Characteristics | Value                                                                                     |
| ----------------------- | ----------------------------------------------------------------------------------------- |
| Display Name            | Ticket/Usercube And Create/Update/Delete resources                                        |
| Identifier              | Usercube.UpdateManualProvisioningTicket@0000001                                           |
| Export                  | NONE                                                                                      |
| Fulfill                 | `Usercube-UpdateManualProvisioningTicket.dll` and `Usercube-Update-FulfillmentStates.dll` |
| Has Incremental Mode    | False                                                                                     |
| Publisher               | Identity Manager                                                                          |

## Virtual Resources

This package allows to create tickets in the Manual Provisioning screen.

After the validation of the ticket, the state of the resource will be `Executed`.  
If a synchronization is available for the system manually fulfilled, the state could change to
`Verified` if the synchronized data are the ones expected.  
If the external system cannot be synchronized, Identity Manager offers the possibility to create
virtual resources. It means that the data is not provided by a synchronization, but we trust the
validation of the ticket in the manual provisioning screen. The resources are created accordingly as
if they were coming from an external system.

## Rights for CUD Resources

If this package is used from the interface, the necessary rights will be automatically added.  
If this package is used from the XML configuration, some rights will need to be added to allow the
creation, update or deletion of virtual resources.

### Example

Here is an example for an entity type called `MyTicketEntity`:

```

<AccessControlRule Profile="Administrator" EntityType="MyTicketEntity" Identifier="Administrator_MyTicketEntity" DisplayName_L1="Administrator_MyTicketEntity">    <Entry Permission="/Custom/Resources/MyTicketEntity/Query" CanExecute="true" />    <Entry Permission="/Custom/Resources/MyTicketEntity/Create" CanExecute="true" />    <Entry Permission="/Custom/Resources/MyTicketEntity/Update" CanExecute="true" />    <Entry Permission="/Custom/Resources/MyTicketEntity/Delete" CanExecute="true" /></AccessControlRule>

```

# Manual Ticket

Opens manual provisioning tickets in Identity Manager.

| Package Characteristics | Value                                 |
| ----------------------- | ------------------------------------- |
| Display Name            | Ticket/Usercube                       |
| Identifier              | Usercube.Manual@0000001               |
| Export                  | NONE                                  |
| Fulfill                 | Usercube-Update-FulfillmentStates.dll |
| Has Incremental Mode    | False                                 |
| Publisher               | Identity Manager                      |

# Microsoft Exchange

Manages Microsoft Exchange mailboxes. This package supports incremental synchronization.

| Package Characteristics | Value                                 |
| ----------------------- | ------------------------------------- |
| Display Name            | Server/Microsoft Exchange             |
| Identifier              | Usercube.MicrosoftExchange@0000001    |
| Export                  | Usercube-Export-MicrosoftExchange.dll |
| Fulfill                 | Usercube-Fulfill-PowerShell.dll       |
| Has Incremental Mode    | True                                  |
| Publisher               | Identity Manager                      |

# MySQL

Export data from a MySQL database.

| Package Characteristics | Value                                     |
| ----------------------- | ----------------------------------------- |
| Display Name            | Database/MySQL                            |
| Identifier              | Usercube.SQL.MySQL@0000001                |
| Export                  | Usercube-Export-Sql.dll                   |
| Fulfill                 | NONE                                      |
| Has Incremental Mode    | False                                     |
| Publisher               | Identity Manager                          |
| ProviderClassFullName   | MySql.Data.MySqlClient.MySqlClientFactory |
| ProviderDllName         | MySql.Data.dll                            |

To use this package, `MySql.Data.dll` needs to be
[downloaded from the MySQL website](https://dev.mysql.com/downloads/connector/net/) (selecting the
**.NET & Mono** operating system) and copied to the `Runtime` folder.

You can click on the **Archives** tab to find other versions.

# OData

Manages OData entities.

| Package Characteristics | Value                     |
| ----------------------- | ------------------------- |
| Display Name            | Custom/OData              |
| Identifier              | Usercube.OData@0000001    |
| Export                  | Usercube-Export-OData.dll |
| Has Incremental Mode    | False                     |
| Publisher               | Identity Manager          |

# ODBC

Exports data from a generic ODBC compatible database.

| Package Characteristics | Value                        |
| ----------------------- | ---------------------------- |
| Display Name            | Database/ODBC                |
| Identifier              | Usercube.SQL.ODBC@0000001    |
| Export                  | Usercube-Export-Sql.dll      |
| Fulfill                 | NONE                         |
| Has Incremental Mode    | False                        |
| Publisher               | Identity Manager             |
| ProviderClassFullName   | System.Data.Odbc.OdbcFactory |
| ProviderDllName         | System.Data.Odbc.dll         |

# Open LDAP

Manages entries in Open LDAP. This package supports incremental synchronization with the sysrepl
mechanism.

| Package Characteristics | Value                        |
| ----------------------- | ---------------------------- |
| Display Name            | Directory/Open LDAP          |
| Identifier              | Usercube.OpenLDAP@0000001    |
| Export                  | Usercube-Export-OpenLdap.dll |
| Fulfill                 | Usercube-Fulfill-Ldap.dll    |
| Has Incremental Mode    | True                         |
| Publisher               | Identity Manager             |

# Oracle Database

Export data from an Oracle database.

| Package Characteristics | Value                                               |
| ----------------------- | --------------------------------------------------- |
| Display Name            | Database/Oracle                                     |
| Identifier              | Usercube.SQL.Oracle@0000001                         |
| Export                  | Usercube-Export-Sql.dll                             |
| Fulfill                 | NONE                                                |
| Has Incremental Mode    | False                                               |
| Publisher               | Identity Manager                                    |
| ProviderClassFullName   | Oracle.ManagedDataAccess.Client.OracleClientFactory |
| ProviderDllName         | Oracle.ManagedDataAccess.Core                       |

For this package, the default isolation level is **ReadCommitted**.

To use this package, `Oracle.ManagedDataAccess.Core` needs to be
[downloaded from the Oracle website](https://www.oracle.com/database/technologies/net-downloads.html)
(selecting the `ODP.NET` release) and copied to the `Runtime` folder.

**NOTE:** The DLL in the "Oracle.ManagedDataAccess" package isn't compatible with .NET 8

# Oracle LDAP

Manages entries in Oracle Internet Directory.

| Package Characteristics | Value                        |
| ----------------------- | ---------------------------- |
| Display Name            | Directory/Oracle LDAP        |
| Identifier              | Usercube.LDAP.Oracle@0000001 |
| Export                  | Usercube-Export-Ldap.dll     |
| Fulfill                 | Usercube-Fulfill-Ldap.dll    |
| Has Incremental Mode    | False                        |
| Publisher               | Identity Manager             |

# PostgreSQL

Export data from a PostgreSQL database.

| Package Characteristics | Value                           |
| ----------------------- | ------------------------------- |
| Display Name            | Database/PostgreSQL             |
| Identifier              | Usercube.SQL.PostgreSQL@0000001 |
| Export                  | Usercube-Export-Sql.dll         |
| Fulfill                 | NONE                            |
| Has Incremental Mode    | False                           |
| Publisher               | Identity Manager                |
| ProviderClassFullName   | Npgsql.NpgsqlFactory            |
| ProviderDllName         | Npgsql.dll                      |

# PowerShellProv

Syncronizes an external system with a custom PowerShell script.

| Package Characteristics | Value                           |
| ----------------------- | ------------------------------- |
| Display Name            | Custom/PowerShellProv           |
| Identifier              | Usercube.Powershell@0000001     |
| Export                  | NONE                            |
| Fulfill                 | Usercube-Fulfill-PowerShell.dll |
| Has Incremental Mode    | False                           |
| Publisher               | Identity Manager                |

# PowerShellSync

Syncronizes an external system with a custom PowerShell script.

| Package Characteristics | Value                           |
| ----------------------- | ------------------------------- |
| Display Name            | Custom/PowerShellSync           |
| Identifier              | Usercube.PowershellSync@0000001 |
| Export                  | Usercube-Export-PowerShell.dll  |
| Fulfill                 | NONE                            |
| Has Incremental Mode    | True                            |
| Publisher               | Identity Manager                |

# RACF

Exports the RACF users and profiles.

| Package Characteristics | Value                    |
| ----------------------- | ------------------------ |
| Display Name            | Mainframe/RACF           |
| Identifier              | Usercube.RACF@0000001    |
| Export                  | Usercube-Export-Racf.dll |
| Fulfill                 | NONE                     |
| Has Incremental Mode    | False                    |
| Publisher               | Identity Manager         |

# Red Hat Directory Server

Manages entries in a Red Hat Directory Server.

| Package Characteristics | Value                              |
| ----------------------- | ---------------------------------- |
| Display Name            | Directory/Red Hat Directory Server |
| Identifier              | Usercube.LDAP.RedHat@0000001       |
| Export                  | Usercube-Export-Ldap.dll           |
| Fulfill                 | Usercube-Fulfill-Ldap.dll          |
| Has Incremental Mode    | False                              |
| Publisher               | Identity Manager                   |

# Robot Framework

Fulfills an external system using a Robot Framework script.

| Package Characteristics | Value                               |
| ----------------------- | ----------------------------------- |
| Display Name            | Custom/Robot Framework              |
| Identifier              | Usercube.RobotFramework@0000001     |
| Export                  | NONE                                |
| Fulfill                 | Usercube-Fulfill-RobotFramework.dll |
| Has Incremental Mode    | False                               |
| Publisher               | Identity Manager                    |

# Salesforce

Manages Salesforce entities.

| Package Characteristics | Value                            |
| ----------------------- | -------------------------------- |
| Display Name            | CRM/Salesforce                   |
| Identifier              | Usercube.SCIM.Salesforce@0000001 |
| Export                  | Usercube-Export-Scim.dll         |
| Fulfill                 | Usercube-Fulfill-Scim.dll        |
| Has Incremental Mode    | True                             |
| Publisher               | Identity Manager                 |

# SAP ASE

Exports data from a SAP ASE database.

| Package Characteristics | Value                                 |
| ----------------------- | ------------------------------------- |
| Display Name            | Database/SAP ASE                      |
| Identifier              | Usercube.SQL.SAPAse@0000001           |
| Export                  | Usercube-Export-Sql.dll               |
| Fulfill                 | NONE                                  |
| Has Incremental Mode    | False                                 |
| Publisher               | Identity Manager                      |
| ProviderClassFullName   | AdoNetCore.AseClient.AseClientFactory |
| ProviderDllName         | AdoNetCore.AseClient.dll              |

# SAP ERP 6.0

Manages users and roles in SAP ERP 6.0.

| Package Characteristics | Value                        |
| ----------------------- | ---------------------------- |
| Display Name            | ERP/SAP ERP 6.0              |
| Identifier              | Usercube.SAP.ERP60@0000001   |
| Export                  | Usercube-Export-SapErp6.dll  |
| Fulfill                 | Usercube-Fulfill-SapErp6.dll |
| Has Incremental Mode    | False                        |
| Publisher               | Identity Manager             |

# SAP S/4 HANA

Manages users and roles in SAP S/4 HANA.

| Package Characteristics | Value                    |
| ----------------------- | ------------------------ |
| Display Name            | ERP/SAP S/4 HANA         |
| Identifier              | Usercube.SAP@0000001     |
| Export                  | Usercube-Export-Sap.dll  |
| Fulfill                 | Usercube-Fulfill-Sap.dll |
| Has Incremental Mode    | False                    |
| Publisher               | Identity Manager         |

# ServiceNow Ticket

Opens tickets in ServiceNow for the manual provisioning.

| Package Characteristics | Value                                                                                                |
| ----------------------- | ---------------------------------------------------------------------------------------------------- |
| Display Name            | Ticket/ServiceNow                                                                                    |
| Identifier              | Usercube.SnowTicket@0000001                                                                          |
| Export                  | NONE                                                                                                 |
| Fulfill                 | `Usercube-Fulfill-ToServiceNowTicket.dll` and `Usercube-ServiceNowTicket-UpdateFulfillmentState.dll` |
| Has Incremental Mode    | False                                                                                                |
| Publisher               | Identity Manager                                                                                     |

# ServiceNow

Manages any data in the CMDB, including users and roles. This package supports incremental
synchronization.

| Package Characteristics | Value                           |
| ----------------------- | ------------------------------- |
| Display Name            | ITSM/ServiceNow                 |
| Identifier              | Usercube.ServiceNow@0000001     |
| Export                  | Usercube-Export-ServiceNow.dll  |
| Fulfill                 | Usercube-Fulfill-ServiceNow.dll |
| Has Incremental Mode    | True                            |
| Publisher               | Identity Manager                |

# Shared Folders

Manages users and permissions in Shared Folders.

| Package Characteristics | Value                            |
| ----------------------- | -------------------------------- |
| Display Name            | Storage/Shared Folders           |
| Identifier              | Usercube.SharedFolder@0000001    |
| Export                  | Usercube-Export-SharedFolder.dll |
| Fulfill                 | NONE                             |
| Has Incremental Mode    | False                            |
| Publisher               | Identity Manager                 |

# SharePoint

Exports sites, folders, SharePoint groups and permissions.

| Package Characteristics | Value                           |
| ----------------------- | ------------------------------- |
| Display Name            | Storage/SharePoint              |
| Identifier              | Usercube.SharePoint@0000001     |
| Export                  | Usercube-Export-SharePoint.dll  |
| Fulfill                 | Usercube-Fulfill-SharePoint.dll |
| Has Incremental Mode    | True                            |
| Publisher               | Identity Manager                |

# Slack

Manages Slack entities.

| Package Characteristics | Value                       |
| ----------------------- | --------------------------- |
| Display Name            | Messaging/Slack             |
| Identifier              | Usercube.SCIM.Slack@0000001 |
| Export                  | Usercube-Export-Scim.dll    |
| Fulfill                 | Usercube-Fulfill-Scim.dll   |
| Has Incremental Mode    | True                        |
| Publisher               | Identity Manager            |

# SQL Server Entitlements

Exports SQL Server Entitlements

| Package Characteristics | Value                                      |
| ----------------------- | ------------------------------------------ |
| Display Name            | Database/SQL Server Entitlements           |
| Identifier              | Usercube.SQL.SQLServerEntitlements@0000001 |
| Export                  | Usercube-Export-SqlServerEntitlements.dll  |
| Fulfill                 | NONE                                       |
| Has Incremental Mode    | False                                      |
| Publisher               | Identity Manager                           |

# SQL Server

Export data from a SQL Server database.

| Package Characteristics | Value                          |
| ----------------------- | ------------------------------ |
| Display Name            | Database/SQL Server            |
| Identifier              | Usercube.SQL.SQLServer@0000001 |
| Export                  | Usercube-Export-Sql.dll        |
| Fulfill                 | NONE                           |
| Has Incremental Mode    | False                          |
| Publisher               | Identity Manager               |

# TSS

Exports the Top Secret users and profiles.

| Package Characteristics | Value                   |
| ----------------------- | ----------------------- |
| Display Name            | Mainframe/Top Secret    |
| Identifier              | Usercube.TSS@0000001    |
| Export                  | Usercube-Export-Tss.dll |
| Fulfill                 | NONE                    |
| Has Incremental Mode    | False                   |
| Publisher               | Identity Manager        |

# Unplugged

Manages an unplugged system with a completely custom data model.

| Package Characteristics | Value                   |
| ----------------------- | ----------------------- |
| Display Name            | Custom/Unplugged        |
| Identifier              | Usercube.Custom@0000001 |
| Export                  | NONE                    |
| Fulfill                 | NONE                    |
| Has Incremental Mode    | False                   |
| Publisher               | Identity Manager        |

# Workday

Manages users and groups in Workday.

| Package Characteristics | Value                       |
| ----------------------- | --------------------------- |
| Display Name            | ERP/Workday                 |
| Identifier              | Usercube.Workday@0000001    |
| Export                  | Usercube-Export-Workday.dll |
| Fulfill                 | NONE                        |
| Has Incremental Mode    | False                       |
| Publisher               | Identity Manager            |

# Workflow

Triggers workflows in Identity Manager for each provisioning order.

| Package Characteristics | Value                                  |
| ----------------------- | -------------------------------------- |
| Display Name            | Usercube/Workflow                      |
| Identifier              | Usercube.FulfillWorkflow@0000001       |
| Export                  | NONE                                   |
| Fulfill                 | Usercube-Fulfill-InternalWorkflows.dll |
| Has Incremental Mode    | False                                  |
| Publisher               | Identity Manager                       |

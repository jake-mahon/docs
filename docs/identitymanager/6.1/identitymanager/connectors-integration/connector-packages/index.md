# References: Connectors

Connectors are the mechanisms that enable Usercube to read and write data to/from your
organization's systems. Here is a list of reference connectors:

- [ Active Directory ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/active-directory.md)

  Exports and fulfills users and groups from/to an Active Directory instance.

- [ Azure ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)

  Exports Azure resources, role definitions and assignments.

- [ CSV ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)

  Exports data from a CSV file.

- [ EasyVista ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)

  Exports and fulfills users from/to an EasyVista-compliant system.

- [ EasyVista Ticket ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)

  Opens tickets in EasyVista for manual provisioning.

- [ Google Workspace ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/google-workspace.md)

  Exports and fulfills users and groups from/to a Google Workspace instance.

- [ Home Folder ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)

  Exports home folders' content.

- [InternalWorkflow](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)

  Triggers workflows in Usercube for a system's provisioning orders.

- [Internal Resources](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)

  Opens manual provisioning tickets in Usercube.

- [ JSON ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)

  Generates JSON files for each provisioning order.

- [ LDAP ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/ldap.md)

  Exports and fulfills entries from/to a LDAP-compliant system.

- [ LDIF ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)

  Exports entries from a LDIF file.

- Microsoft Entra ID

  Exports and fulfills user and groups from/to a Microsoft Entra ID instance.

- [ Microsoft Excel ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)

  Exports datasheets from a Microsoft Excel (XLSX) file.

- [ Microsoft Exchange ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/microsoft-exchange.md)

  Exports mailboxes from a Microsoft Exchange instance.

- [ OData ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)

  Exports and fulfills entries from/to an OData instance.

- [Okta](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/okta.md)

  Exports and fulfills entries from/to an Okta instance.

- [ OpenLDAP ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/ldap.md)

  Exports and fulfills entries from/to an OpenLDAP directory.

- [ PowerShellProv ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)

  Writes to an external system via a PowerShell script.

- [ PowerShellSync ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)

  Exports data from an external system via a Powershell script.

- [ RACF ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)

  Exports users and profiles from a RACF file.

- [ Robot Framework ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)

  Writes to an external system via a Robot Framework script.

- [SAP ERP 6.0 and SAP S4/HANA](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)

  Exports and fulfills users and roles from/to a SAP ERP 6.0 or SAP S4/HANA instance.

- [ SAP Netweaver ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)

  Exports and fulfills users and roles from/to a SAP Netweaver instance.

- [SCIM](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/scim.md)

  Exports and fulfills entities from/to a SCIM-compliant application.

- [ ServiceNow ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)

  Exports and fulfills any data from/to a ServiceNow CMDB.

- [ ServiceNowTicket ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)

  Opens tickets in ServiceNow for manual provisioning.

- [ SharedFolders ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)

  Exports users and permissions from Windows shared folders.

- [SharePoint](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/sharepoint.md)

  Exports sites, folders, groups and permissions from a SharePoint instance.

- [ Sql ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/sql-databases.md)

  Exports data from one of various Database Management Systems.

- [ Sql Server Entitlements ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/sql-databases.md)

  Exports entitlements from Microsoft SQL Server.

- [ Top Secret ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)

  Exports users and profiles from a Top Secret (TSS) instance.

- [ Workday ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/workday.md)

  Exports users and groups from a Workday instance.

# References: Packages

If you are looking for the dll of a given package, be aware that you can often find it in the
[nuget catalog](https://www.nuget.org/packages). Then you can follow the procedure:

1. Download and extract the package.

2. Copy the dll file (corresponding to the appropriate .Net version) to the `Runtime` folder.

- #### [Active Directory](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/active-directory.md)
  Manages users and groups in Active Directory. This package supports incremental synchronization
  with the DirSync mechanism.- ####
  [Apache Directory](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Manages users and groups in Apache Directory.- ####
  [Azure](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Exports Azure resources, role definitions and role assignments.- ####
  [CSV](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Exports CSV to prepare synchronization.- ####
  [CyberArk](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Manages CyberArk entities, including user and group assignments.- ####
  [EasyVista](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Manages users inside an EasyVista instance. This package supports incremental
  synchronization.- ####
  [EasyVista Ticket](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Creates tickets inside an EasyVista instance. This package supports incremental
  synchronization.- ####
  [Excel ](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Exports Excel data sheets.- ####
  [Generic LDAP](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/ldap.md)
  Manages entries in an LDAP compliant directory.- ####
  [Generic SCIM](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/scim.md)
  Manages entities in SCIM compatible application.- ####
  [Generic SQL](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/sql-databases.md)
  Exports data from a SQL database.- ####
  [Google Workspace](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/google-workspace.md)
  Manages Google Workspace entities.- ####
  [Home Folders](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Manages Home Folders.- ####
  [JSON](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Generate JSON files for each provisioning order. These JSON can then be used by custom
  scripts.- ####
  [LDIF](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Exports entries from a LDIF file.- ####
  [Manual Ticket](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Opens manual provisioning tickets in Usercube.- ####
  [Manual Ticket and CUD Resources](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Opens manual provisioning tickets in Usercube.- ####
  [Microsoft Entra ID](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/azure-active-directory.md)
  Manages users and groups in Microsoft Entra ID (formerly Microsoft Azure AD). This package
  supports incremental synchronization with the delta API.- ####
  [Microsoft Exchange](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/microsoft-exchange.md)
  Manages Microsoft Exchange mailboxes. This package supports incremental synchronization.- ####
  [MySQL](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/sql-databases.md)
  Export data from a MySQL database.- ####
  [OData](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Manages OData entities.- ####
  [ODBC](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Exports data from a generic ODBC compatible database.- ####
  [Open LDAP](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/ldap.md)
  Manages entries in Open LDAP. This package supports incremental synchronization with the sysrepl
  mechanism.- ####
  [Oracle Database](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/sql-databases.md)
  Export data from an Oracle database.- ####
  [Oracle LDAP](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/ldap.md)
  Manages entries in Oracle Internet Directory.- ####
  [PostgreSQL](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/sql-databases.md)
  Export data from a PostgreSQL database.- ####
  [PowerShellProv](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Fulfills an external system with a custom PowerShell script.- ####
  [PowerShellSync](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Create a CSV export from a Powershell Script.- ####
  [RACF](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Exports the RACF users and profiles.- ####
  [Red Hat Directory Server](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Manages entries in a Red Hat Directory Server.- ####
  [Robot Framework](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Fulfills an external system using a Robot Framework script.- ####
  [Salesforce](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/salesforce.md)
  Manages Salesforce entities.- ####
  [SAP ASE](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/sap-erp.md)
  Exports data from a SAP ASE database.- ####
  [SAP ERP 6.0](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/sap-erp.md)
  Manages users and roles in SAP ERP 6.0.- ####
  [SAP S/4 HANA](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/sap-erp.md)
  Manages users and roles in SAP S/4 HANA.- ####
  [ServiceNow](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/servicenow.md)
  Manages any data in the CMDB, including users and roles. This package supports incremental
  synchronization.- ####
  [ServiceNow Ticket](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/servicenow.md)
  Opens tickets in ServiceNow for the manual provisioning.- ####
  [Shared Folders](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Manages users and permissions in Shared Folders.- ####
  [SharePoint](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/sharepoint.md)
  Exports sites, folders, SharePoint groups and permissions.- ####
  [Slack](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Manages Slack entities.- ####
  [SQL Server](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/sql-databases.md)
  Export data from a SQL Server database.- ####
  [SQL Server Entitlements](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/sql-databases.md)
  Exports SQL Server Entitlements- ####
  [TSS](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Exports the Top Secret users and profiles.- ####
  [Unplugged](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Manages an unplugged system with a completely custom data model.- ####
  [Usercube Database](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Updates the Usercube database for each provisioning order. This package is used for HR systems,
  authoritative systems or other Usercube instances.- ####
  [Workday](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/workday.md)
  Manages users and groups in Workday.- ####
  [Workflow](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md)
  Triggers workflows in Usercube for each provisioning order.

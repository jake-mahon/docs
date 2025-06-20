# EasyVista

This connector exports and fulfills users from/to an
[EasyVista](https://wiki.easyvista.com/xwiki/bin/view/Documentation/?language=en)-compliant system.

This page is about [ EasyVista ](/docs/identitymanager/6.2/reference/index.md).

![Package: ITSM/EasyVista](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/easyvista/packages_easyvista_v603.webp)

## Overview

EasyVista is an IT Service Manager that provides a service to organize IT resources in a company by
using tickets. This allows users to manage projects, materials and teams through a customizable
interface.

## Prerequisites

Implementing this connector requires:

- Reading first the
  [appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)
  topic;
- An EasyVista account with reading/writing permissions on the target instance;
- A view to be created in EasyVista for each type of entity to export.

## Export

This connector exports a list of users, with their attributes specified in the connector's
configuration, to CSV files.

It can also export any custom entity, provided that a view exists for it in EasyVista.

### Configuration

This process is configured through a
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) in the UI and/or
the XML configuration, and in the `appsettings.agent.json > Connections` section:

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "<ConnectionIdentifier>": {
      ...
    }
  }
}
```

The identifier of the connection and thus the name of the subsection must:

- be unique.
- not begin with a digit.
- not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

> For example:
>
> ```
> appsettings.agent.json
> {
>     "Connections": {
>         ...
>         "ExportEasyVista": {
>             "Server": "https://easy-vista.instance.com/",
>             "Account": "11111",
>             "Login": "username",
>             "Password": "userPassword",
>             "ExportSettingsOptions": {
>                 "Profiles": "https://easy-vista.instance.com/api/v1/11111/internalqueries?queryguid={019B0523-F1C4-4G84-AA04-47BA16F16EB2}&filterguid={Z8A61D04-EZEC-42F1-A3E1-E9E09654BE68}&viewguid={2740V37A-A0ZC-4E50-A1F1-CF0987B9EFEA}"
>             }
>         }
>     }
> }
> ```

The `ExportSettingsOptions` attribute is necessary only if custom entities are exported. It is not
required if only the users are exported.  
Besides, `"Profiles"` is used here as an example and corresponds to a name to identify the exported
entities.

#### Setting attributes

| Name                           | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Server required                | **Type** String **Description** URI of the server to connect to.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Account required               | **Type** String **Description** Account to use to connect to the EasyVista instance.                                                                                                                                                                                                                                                                                                                                                                                                           |
| Login required                 | **Type** String **Description** Username to use to connect to the EasyVista instance.                                                                                                                                                                                                                                                                                                                                                                                                          |
| Password required              | **Type** String **Description** Password to use to connect to the EasyVista instance.                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---                            | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ExportSettingsOptions optional | **Type** List **Description** List of entities to retrieve from the EasyVista instance. **Note:** for any customized entity to be exported, this argument must contain its REST API URL. **Get REST API URLs** Access the relevant view in EasyVista and click on **...** > **Rest API Url** to copy the URL. For example: ![EasyVista Profiles View](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/easyvista/easyvista_view_v523.webp) |

### Output details

This connector is meant to generate to the
[Application Settings](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)
export output folder:

- a CSV file, named `<connectionIdentifier>_Employees.csv`, with one column for each property having
  a `ConnectionColumn` and each property without it but used in an entity association;
- a CSV file for each customized entity, named `<connectionIdentifier>_<EntityName>.csv`.

> For example, with the following entity type mapping for employees:
>
> ```
>
> <EntityType Identifier="EasyVista_User" DisplayName_L1="EasyVista User">  <Property Identifier="lastName" DisplayName_L1="lastName" TargetColumnIndex="0" Type="String" /></EntityType><EntityTypeMapping Identifier="EasyVista_User" Connector="ExportEasyVista" ConnectionTable="EasyVistaExport_Employees">  <Property Identifier="lastName" ConnectionColumn="last_name" /></EntityTypeMapping>
>
> ```
>
> And the following entity type mapping for profiles:
>
> ```
>
> EntityType Identifier="EasyVista_Profiles" DisplayName_L1="EasyVista Profiles"  Property Identifier="NAME_EN" DisplayName_L1="NAME_EN" TargetColumnIndex="23" Type="String" Type="String" IsKey="true" //EntityTypeEntityTypeMapping Identifier="EVProfiles" Connector="ExportEasyVista" ConnectionTable="EasyVistaExport_Profiles"  Property Identifier="PROFILE_GUID">>>> ><<<<<<ConnectionColumn="PROFILE_GUID" IsPrimaryKey="true" /  Property Identifier="NAME_EN" ConnectionColumn="NAME_EN" IsPrimaryKey="true" /></EntityTypeMapping>
>
> ```
>
> Then we will have `C:/UsercubeContoso/Sources/EasyVistaExport_Employees.csv` as follows:
>
> ```
> EasyVistaExport_Employees.csv
> last_name
> Talma Bart
> Tanner Carol
> Taverner David
> Taylor Eric
> Telemann Franck
> Thomson Georges
> ...
>
> ```
>
> Then we will have `C:/UsercubeContoso/Sources/EasyVistaExport_Profiles.csv` as follows:
>
> ```
> EasyVistaExport_Profiles.csv
> NAME_EN, PROFILE_GUID
> Administration {value of the PROFILE_GUID}
> LOB Manager {value of the PROFILE_GUID}
> Product Team {value of the PROFILE_GUID}
> Project Manager {value of the PROFILE_GUID}
> ...
>
> ```

Users created from the API are retrieved by Identity Manager only after a complete synchronization.

## Fulfill

The EasyVista connector writes to EasyVista to create, archive (delete from Identity Manager's point
of view) and update employees, initiated manually through the UI or automatically by
[Evaluate Policy](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md)

### Configuration

Same as for export, fulfill is configured through connections.

> For example:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "FulfillEasyVista": {
>         "Server": "https://easy-vista.instance.com/",
>         "Account": "11111",
>         "Login": "username",
>         "Password": "userPassword"
>     }
>   }
> }
> ```

#### Setting attributes

| Name              | Details                                                                               |
| ----------------- | ------------------------------------------------------------------------------------- |
| Server required   | **Type** String **Description** URI of the server to connect to.                      |
| Account required  | **Type** String **Description** Account to use to connect to the EasyVista instance.  |
| Login required    | **Type** String **Description** Username to use to connect to the EasyVista instance. |
| Password required | **Type** String **Description** Password to use to connect to the EasyVista instance. |

### Output details

This connector can:

- Create and update employees and their profiles, but is limited by
  [API limitations](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Integration/WebService%20REST/REST%20API%20-%20Create%20an%20employee/);

  In particular, this connector cannot set dates nor the `employee_id` property.

- Archive employees, i.e. set the `CONTRACT_END_DATE` to the date of the fulfill execution.

  This action is performed when Identity Manager fulfills a provisioning order with a `Deleted`
  change type.

## Authentication

### Password reset

See the
[appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)
topic to find out more on how to configure password reset settings.

### Credential protection

Data protection can be ensured through:

- [](/docs/identitymanager/6.2/reference/index.md)[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md),
  configured in the `appsettings.encrypted.agent.json` file;
- [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) safe;

- A
  [CyberArk's AAM Credential Providers ](/docs/identitymanager/6.2/administration/agent-configuration/credential-providers.md)
  able to store EasyVista's `Login`, `Password`, `Account` and `Server`.

# EasyVista Ticket

This connector opens tickets in
[EasyVista](https://wiki.easyvista.com/xwiki/bin/view/Documentation/?language=en) for manual
provisioning.

This page is about [ EasyVista Ticket ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md).

![Package: Ticket/EasyVista](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/easyvistaticket/packages_easyvistaticket_v603.webp)

## Overview

EasyVista is an IT Service Manager that provides a service to organize IT resources in a company by
using tickets. This allows users to manage projects, materials and teams through a customizable
interface.

This connector focuses on the creation of EasyVista tickets for editing manually EasyVista
resources.

## Prerequisites

Implementing this connector requires:

- Reading first the
  [appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md);
- An EasyVista account with reading/writing permissions on the target instance.

## Export

This connector exports some of EasyVista entities, see the export capabilities of the
[ EasyVista ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) connector. Some entities cannot be
exported.

## Fulfill

This connector writes to EasyVista to create incident and request tickets containing information to
create, update or delete a resource. It does not create a resource directly.

Once created, the ticket is managed in EasyVista, not in Identity Manager.

When the ticket is closed or canceled, Identity Manager updates the
[Entitlement Assignment](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md) of the
resource accordingly.

See the fulfill capabilities of the [ EasyVista ](/docs/identitymanager/6.2/reference/index.md) connector.

> For example:
>
> ```
> appsettings.agent.json
> "EasyVistaManual": {
>   "Server": "https://example.easyvista.com/",
>   "Login": "username",
>   "Password": "password",
>   "Account": "11111"
> },
>
> ```

## Authentication

### Password reset

See the
[appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)
topic to find out more on how to configure password reset settings.

### Credential protection

Data protection can be ensured through:

- [ RSA Encryption ](/docs/identitymanager/6.2/reference/index.md),
  configured in the `appsettings.encrypted.agent.json` file;
- An [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) safe;

- a
  [CyberArk's AAM Credential Providers ](/docs/identitymanager/6.2/administration/agent-configuration/credential-providers.md)
  able to store EasyVista's `Login`, `Password`, `Account` and `Server`.

# Home Folder

This connector exports [home folders](https://en.wikipedia.org/wiki/Home_directory)' content.

This page is about [ Home Folders ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md).

![Package: Storage/Home Folders](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/homefolder/packages_homefolders_v603.webp)

## Overview

Home Folders, also called Home Directory, is a user-dedicated storage area where users' personal
files can be accessed. In general, a home folder is private so only its owner and administrators can
access it. Moreover, the folders are often centralized because they are located on a network server.
It allows making backups regularly and easily accessing the folders.

## Prerequisites

Implementing this connector requires:

- reading first how to
  [Set, View, Change, or Remove Special Permissions](<https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-r2-and-2008/cc772196(v=ws.10)>)
  and check the
  [File and Folder Permissions](<https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-r2-and-2008/cc732880(v=ws.10)>)
  list;
- an account with at least the special permission Read on all home folders in order to be able to
  export them.

## Export

This connector exports all the home folders to a CSV file.

This connector performs only complete export, not incremental.

### Configuration

This process is configured through a
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) in the UI and/or
the XML configuration, and in the `appsettings.agent.json > Connections` section:

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "<ConnectionIdentifier>": {
      ...
    }
  }
}
```

The identifier of the connection and thus the name of the subsection must:

- be unique.
- not begin with a digit.
- not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

> For example:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "HomeFolderExport": {
>       "InputDirectories": [
>         "C:/ContosoFolder",
>         "C:/ContosoFolder2",
>       ],
>       "Domain": "Windows",
>       "Interactive": true,
>       "Login": "Contoso",
>       "Password": "ContOso$123456789"
>     }
>   }
> }
> ```

#### Setting attributes

| Name                             | Details                                                                                                                                                                                                                                                                                                  |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| InputDirectories required        | **Type** String List **Description** List of the directories that contain the home folders to be exported.                                                                                                                                                                                               |
| Domain optional                  | **Type** String **Description** Domain of the account used to access the home folders.                                                                                                                                                                                                                   |
| Interactive default value: False | **Type** Boolean **Description** `True` to set the authentication as interactive. `False` to set it batch. [See Microsoft's documentation for more details](https://docs.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-logonusera#see-microsofts-documentation-for-more-details).             |
|                                  |                                                                                                                                                                                                                                                                                                          |
| ---                              | ---                                                                                                                                                                                                                                                                                                      |
| Login optional                   | **Type** String **Description** Login of the account used to access the files and folders. **Note:** when not specified and `Password` neither, then the account running Identity Manager will be used. **Note:** if `Domain` is null, then `Login` must be set in the User Principal Name (UPN) format. |
| Password optional                | **Type** String **Description** Password of the account used to access the files and folders. **Note:** when not specified and `Login` neither, then the account running Identity Manager will be used.                                                                                                  |

### Output details

This connector is meant to generate a CSV file, named `<connectionIdentifier>.csv`, to the
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) folder, with the
following columns:

- **Command**: empty for now, as the connector performs only complete export.
- **Name**: name of the home folder.

> For example, when exporting with a connection named `HomeFolderExport`, then the output file will
> be named `HomeFolderExport.csv` and will look like:
>
> ```
> HomeFolderExport.csv
> Command,Name
> ...
> ```

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Password reset

This connector does not reset passwords.

### Credential protection

Data protection can be ensured through:

- [](/docs/identitymanager/6.2/reference/index.md)[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md),
  configured in the `appsettings.encrypted.agent.json` file;
- An [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)safe;

- [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) able to store
  Home Folder's `Login` and `Password`.

# JSON

This connector generates [JSON](https://www.json.org/json-en.html) files for each provisioning
order.

This page is about [ JSON ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md)

![Package: Custom/JSON](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/json/packages_json_v603.webp)

The documentation is not yet available for this page and will be completed in the near future.

# LDIF

This connector exports entries from an
[LDIF](https://en.wikipedia.org/wiki/LDAP_Data_Interchange_Format) file.

This page is about [ LDIF ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md).

![Package: Directory/LDIF](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/ldif/packages_ldif_v603.webp)

## Overview

The LDAP Data Interchange Format (LDIF) is a standard plain text data interchange format for
representing LDAP (Lightweight Directory Access Protocol) directory content and update requests.
LDIF conveys directory content as a set of records, one record for each object (or entry). It also
represents update requests, such as Add, Modify, Delete, and Rename, as a set of records, one record
for each update request.

## Prerequisites

Implementing this connector requires no particular prerequisites.

## Export

This connector generates a CSV file from an input LDIF file containing entries to be exported.

### Configuration

This process is configured through a
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)in the UI and/or
the XML configuration, and in the `appsettings.agent.json > Connections` section:

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "<ConnectionIdentifier>": {
      ...
    }
  }
}
```

The identifier of the connection and thus the name of the subsection must:

- be unique.
- not begin with a digit.
- not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

> For example:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "LdifExport": {
>         "LDIFFile": "C:/UsercubeContoso/Contoso/contoso.ldif",
>         "FilterAttribute": "objectClass",
>         "FilterValues": "user organizationalUnit",
>         "Attributes": [ "dn", "objectClass", "cn", "SAMAccountName", "Name", "userprincipalname" ],
>         "LdifEncoding": "UTF-8",
>     }
>   }
> }
> ```

#### Setting attributes

| Name                              | Details                                                                                                                                                                                                                                                                      |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LDIFFile required                 | **Type** String **Description** Path of the LDIF input file.                                                                                                                                                                                                                 |
| FilterAttribute required          | **Type** String **Description** Property from the connector's configuration whose value is to be compared with the values from `FilterValues`, in order to filter the entries to export.                                                                                     |
| FilterValues required             | **Type** String **Description** List of values to be compared with the value of `FilterAttribute`, in order to filter the entries to export. Identity Manager will export only the entries matching the filter. **Note:** multiple values must be separated by white spaces. |
| Attributes required               | **Type** String List **Description** List of properties from the connector's configuration to be exported.                                                                                                                                                                   |
| LdifEncoding default value: UTF-8 | Encoding of the file. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#see-the-list-of-available-encodings).                                                                                                          |

### Output details

This connector is meant to generate to the
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) folder a CSV file
named `LdifExport.csv`, with the following columns:

```
LdifExport.csv
Command,dn,objectClass,cn,SAMAccountName,Name,userprincipalname
Insert,value1,value2,...,valueN
```

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Credential protection

This connector has no credential attributes, and therefore does not use
[](/docs/identitymanager/6.2/reference/index.md)[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md),
nor a [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)Vault.

Still, data protection can be ensured through an
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) safe.

# Microsoft Exchange

This connector exports mailboxes from a
[Microsoft Exchange](https://support.microsoft.com/en-us/office/what-is-a-microsoft-exchange-account-47f000aa-c2bf-48ac-9bc2-83e5c6036793)
instance.

This page is about [ Microsoft Exchange ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md).

![Package: Server/Microsoft Exchange](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/microsoftexchange/packages_exchange_v603.webp)

## Overview

Microsoft Exchange Server is Microsoft's email, calendar, contact, scheduling and collaboration
platform. It is deployed on the Windows Server operating system (OS) for business use. This
connector uses
[Exchange Server PowerShell (Exchange Management Shell)](https://docs.microsoft.com/en-us/powershell/exchange/exchange-management-shell?view=exchange-ps)
to export databases and mailboxes.

## Prerequisites

Implementing this connector requires:

- a Microsoft Exchange Server 2010, or later.
  [See here Exchange Server 2016's requirements](https://docs.microsoft.com/en-us/exchange/plan-and-deploy/system-requirements?view=exchserver-2016);
- installing Windows PowerShell.
  [See how to connect to Exchange servers using remote PowerShell](https://docs.microsoft.com/en-us/powershell/exchange/connect-to-exchange-servers-using-remote-powershell?view=exchange-ps).

## Export

This connector exports
[mailboxes](https://docs.microsoft.com/en-us/powershell/module/exchange/get-mailbox?view=exchange-ps)
and
[mailbox databases](https://docs.microsoft.com/en-us/powershell/module/exchange/get-mailboxdatabase?view=exchange-ps).
Two CSV files are generated, one with the
[mailbox properties](<https://docs.microsoft.com/en-us/previous-versions/office/developer/exchange-server-2010/ff328629(v=exchg.140)>)
(like `Database`, `EmailAddresses`, `ServerName` , etc.) and the other with
[mailbox database properties](<https://docs.microsoft.com/en-us/previous-versions/office/developer/exchange-server-2010/ff328150(v=exchg.140)>)
(like `Name`, `Server`, `Mounted`, etc.). These properties are explicitly part of the PowerShell
script used by Identity Manager.

### Configuration

This process is configured through a
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) in the UI and/or
the XML configuration, and in the `appsettings.agent.json > Connections` section:

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "<ConnectionIdentifier>": {
      ...
    }
  }
}
```

The identifier of the connection and thus the name of the subsection must:

- be unique.
- not begin with a digit.
- not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

> For example:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "MicrosoftExchangeExport": {
>       "AuthType": "Kerberos",
>       "Server": "http://mailbox01.contoso.com/PowerShell/"
>     }
>   }
> }
> ```

#### Setting attributes

| Name                                                                                   | Details                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Server required                                                                        | **Type** String **Description** Address of the Exchange Server used by the remote PowerShell: `http://<ServerFQDN>/PowerShell/` where `<ServerFQDN>` is the fully qualified domain name of the Exchange server, like `mailbox01.contoso.com`. |
| PowerShellScriptPath default value: `{your usercube path}/Runtime/Export-Exchange.ps1` | **Type** String **Description** Path of the export script file.                                                                                                                                                                               |

### Output details

This connector is meant to generate the following files:

- `<connectionIdentifier>_mailboxes.csv` with the following columns:

  ```
  <connectionIdentifier>_databases.csv
  Command,Database,EmailAddresses,UseDatabaseRetentionDefaults,RetainDeletedItemsUntilBackup,DeliverToMailboxAndForward,ExchangeGuid,ExchangeUserAccountControl,ForwardingAddress,ForwardingSmtpAddress,IsMailboxEnabled,ProhibitSendQuota,ProhibitSendReceiveQuota,RecoverableItemsQuota,RecoverableItemsWarningQuota,CalendarLoggingQuota,IsResource,IsLinked,IsShared,SamAccountName,AntispamBypassEnabled,ServerName,UseDatabaseQuotaDefaults,UserPrincipalName,WhenMailboxCreated,IsInactiveMailbox,AccountDisabledIsDirSynced,Alias,OrganizationalUnit,DisplayName,MaxSendSize,MaxReceiveSize,PrimarySmtpAddress,RecipientType,RecipientTypeDetails,Identity,IsValid,Name,DistinguishedName,Guid,ObjectCategory,WhenChangedUTC,WhenCreatedUTC,ObjectState
  Insert,value1,value2,...,valueN
  ```

  > For example, we could have
  > `C:/UsercubeContoso/Temp/ExportOutput/MicrosoftExchangeExport_mailboxes.csv`.

  [See more details on mailbox properties in Microsoft's documentation](<https://docs.microsoft.com/en-us/previous-versions/office/developer/exchange-server-2010/ff328629(v=exchg.140)>).

- `<connectionIdentifier>_databases.csv` with the following columns:

  ```
  <connectionIdentifier>_databases.csv
  Command,Name,Server,Mounted,ObjectCategory,Guid,WhenChangedUTC,WhenCreatedUTC,ObjectState
  Insert,value1,value2,...,valueN
  ```

  [See more details on mailbox database properties in Microsoft's documentation](<https://docs.microsoft.com/en-us/previous-versions/office/developer/exchange-server-2010/ff328150(v=exchg.140)>).

- `<connectionIdentifier>_cookie.bin` which stores the time of the last successful export, thus
  allowing incremental processes.

The CSV files are stored in the
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) folder, and the
cookie file in the Export Cookies folder.

## Fulfill

This connector can create, update or
delete[ mailboxes](https://docs.microsoft.com/en-us/powershell/module/exchange/get-mailbox?view=exchange-ps)'
addresses (PrimarySmtpAddress, ProxyAddress) and mailbox databases.

As it works via a PowerShell script. See the [ PowerShellProv ](/docs/identitymanager/6.2/integration/connectors/connector-catalog/custom-connectors.md) topic
for additional information.

Identity Manager's PowerShell script can be found in the SDK in
`Usercube.Demo/Scripts/Fulfill-Exchange.ps1`.

See the [ PowerShellProv ](/docs/identitymanager/6.2/integration/connectors/connector-catalog/custom-connectors.md) topic for additional information.

## Authentication

### Authentication Type

This connector uses Kerberos authentication when trying to connect with the Exchange Server.

### Password reset

This connector does not reset passwords.

### Credential protection

Data protection can be ensured through:

- [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md), configured in
  the `appsettings.encrypted.agent.json` file;
- An [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) safe;

- A [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)able to store
  Microsoft Exchange's `Server`.

This kind of credential protection can be used only for the export process.

The fulfill process' credentials can be protected by following the instructions for the
PowerShellProv connector. See the [ PowerShellProv ](/docs/identitymanager/6.2/integration/connectors/connector-catalog/custom-connectors.md) topic for
additional information

# OData

This connector exports and fulfills data from/to an [OData](https://www.odata.org/) instance.

This page is about [ OData ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md).

![Package: Custom/OData](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/odata/packages_odata_v603.webp)

## Overview

OData (Open Data Protocol) comply with ISO/IEC and OASIS standards. This protocol defines the best
approaches for using RESTful APIs. OData helps you focus on your business logic while building
RESTful APIs without having to worry about the various approaches to define request and response
headers, status codes, HTTP methods, URL conventions, media types, payload formats, query options,
etc.

## Prerequisites

Implementing this connector requires reading first the appsettings documentation.

Identity Manager's service is based on
[OData RFC](https://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html).

## Export

This connector extracts all entity sets with all the information needed to rebuild them. This is
based on the connector's metadata.

### Configuration

This process is configured through a
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) in the UI and/or
the XML configuration, and in the `appsettings.agent.json > Connections` section:

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "<ConnectionIdentifier>": {
      ...
    }
  }
}
```

The identifier of the connection and thus the name of the subsection must:

- be unique.
- not begin with a digit.
- not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

> For example:
>
> ```
>
> appsettings.agent.json
> {
>     ...
>     "Connections": {
>         ...
>         "ODataExport": {
>             "Server": "https://YourODataService.com/",
>             "Login": "login",
>             "Password": "password"
>         }
>     }
> }
>
> ```

#### Setting attributes

| Name                       | Details                                                                       |
| -------------------------- | ----------------------------------------------------------------------------- |
| Server required            | **Type** String **Description** URL of the data system.                       |
| Login optional             | **Type** String **Description** Login to connect to the system.               |
| Password optional          | **Type** String **Description** Password to connect to the system.            |
| BearerToken optional       | **Type** String **Description** Token to authenticate to the system.          |
| ClientId optional          | **Type** String **Description** Id to connect to the system via OpenId.       |
| ClientSecret optional      | **Type** String **Description** Password to connect to the system via OpenId. |
| AuthenticationUrl optional | **Type** String **Description** URL to request the authentication via OpenId. |

#### XML configuration requirements

This connector requires from the XML configuration:

- An
  [ Entity Type Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md):
  - with the same identifier as the related entity type;
  - related to the right connector;
  - related to a connection table named `<Connection>_<ODataEntitySet>`;
  - with properties whose connection columns represent the property's path in the entity, see the
    configuration example below;
- An
  [ Entity Association Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md):
  - with the same identifier as the related entity association;
  - with its `Column1` in the format `UsercubeNav_<NavigationProperty>:<PropertyKey>` for the
    related property in the association;
  - with its `Column2` in the format `<NavigationProperty>Of:<PropertyKey>` for the related
    property in the association;
  - related to a connection table named `<Connection>_<ODataEntitySet>_<NavigationProperty>`.

The information contained in the entity types and entity associations does not impact the export.

### Output details

This connector is meant to generate to the
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) folder one CSV
file for each entity set provided in the connector's configuration.

The files' column headers come from the entity type mapping's `ConnectionColumn` properties.

If the connection column describes a sub-property, then the name should have the following pattern:
`{property}:{sub-property}`. The character `":"` should not be used in other situations.

> For example: \<EntityType Identifier="OData_People" DisplayName_L1="People"\>\<Property
> Identifier="UserName" DisplayName_L1="User name" Type="String" /\>\<Property
> Identifier="FamilyName" DisplayName_L1="Family name" Type="String" /\>\</EntityType\>
>
> ````<""""""Property Identifier=UserName ConnectionColumn=UserName /Property Identifier=FamilyName ConnectionColumn=Name:FamilyName //EntityTypeMapping
> ```EntityTypeMapping Identifier=OData Connector=OData ConnectionTable=OData_People\>\<""""\>\<""""\>\<\>
> Note that we have here ```UserName``` which is a single property, and ```FamilyName``` which is a sub-property of ```Name```, hence the name ```Name:FamilyName``` as the ```ConnectionColumn```.
> ````

# RACF

This connector exports users and profiles from a
[RACF](https://www.ibm.com/docs/en/zos-basic-skills?topic=zos-what-is-racf) file.

This page is about [ RACF ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md).

![Package: MainFrame/RACF](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/racf/packages_racf_v603.webp)

## Overview

Resource Access Control Facility (RACF) is a security program from IBM OS/390 used to protect users'
resources by controlling their accesses. The RACF connector exports the information saved by RACF
about users, groups and access authorities.

## Prerequisites

Implementing this connector requires the input file to be in the RACF format, but it can have any
extension.

## Export

This connector extracts the information found in a RACF file and transforms it into CSV files in
Identity Manager format.

Be aware that Identity Manager supports only the RACF records represented by the following codes:

- [0100; 0120; 0101; 0102](https://www.ibm.com/docs/en/zos/2.1.0?topic=records-record-formats-produced-by-database-unload-utility#0100-0120-0101-0102)
  (groups);
- [0200; 0203](https://www.ibm.com/docs/en/zos/2.1.0?topic=utility-user-record-formats) (users);
- [0500; 0503](https://www.ibm.com/docs/en/zos/2.1.0?topic=utility-general-resource-record-formats)
  (general resources).

### Configuration

This process is configured through a
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) in the UI and/or
the XML configuration, and in the `appsettings.agent.json > Connections` section:

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "<ConnectionIdentifier>": {
      ...
    }
  }
}
```

The identifier of the connection and thus the name of the subsection must:

- be unique.
- not begin with a digit.
- not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

> The following example reads RACF data from the `C:/UsercubeContoso/RacfFile.csv` iso-8859-1 file
> and exports it to CSV files in Identity Manager format:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "RACF": {
>       "Path": "C:/UsercubeContoso/RacfFile.csv",
>       "Encoding": "iso-8859-1",
>     }
>   }
> }
> ```

#### Setting attributes

| Name                          | Details                                                                                                                                                                                                   |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Path required                 | **Type** String **Description** Path of the RACF file to be exported.                                                                                                                                     |
|                               |                                                                                                                                                                                                           |
| ---                           | ---                                                                                                                                                                                                       |
| Encoding default value: UTF-8 | **Type** String **Description** Encoding of the input file. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#see-the-list-of-available-encodings). |

### Output details

This connector is meant to generate to the
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) folder one CSV
file per record type (0100, 0200, etc.), named `<connectionIdentifier>_<type>.csv`.

> For example, consider an export with a connection named `ExportRacf`, and a source file containing
> the record types 0100, 0120, 0203. Then we will have three output files named
> `ExportRacf_0100.csv`, `ExportRacf_0120.csv` and `ExportRacf_0203.csv`.

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Password reset

This connector does not reset passwords.

### Credential protection

This connector has no credential attributes, and therefore does not use
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md), nor a
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

Still, data protection can be ensured through an
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) safe.

# SAP ERP 6.0 and SAP S4/HANA

This connector exports and fulfills users and roles from/to an
[SAP ERP 6.0](https://www.sap.com/products/erp/what-is-sap-erp.html) or
[SAP HANA](https://www.sap.com/products/technology-platform/hana/what-is-sap-hana.html) instance.

This page is about ERP/SAP ERP 6.0.

![Package: ERP/SAP ERP 6.0](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/saperp6/packages_saperp6_v603.webp)

## Overview

The SAP Enterprise Resource Planning (SAP ERP) software incorporates the core business processes of
an organization, such as finance, production, supply chain services, procurements, human resources
(HR), etc. The SAP ERP connector exports and fulfills data from/to an SAP ERP 6.0 system.

## Prerequisites

Implementing this connector requires:

- Reading first the appsettings documentation; See the
  [appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)
  topic for additional information.
- An ASE or HANA database with a service account, as a database administrator
- A service account, as a SAP user with at least the roles for user management
- The prerequisites for reading should be set up
- The prerequisites for writing should be set up

ASE or HANA database with a service account, as a database administrator

To connect to the SAP database using SSH, use the following commands:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
su sybaba
isql -S <database (ABA is the default value)> -U<administrator's login> -P<administrator's password> -X
```

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
isql -S ABA -Usapsso -PV1H#M$4JIgU$qd -X
```

Service account, as a SAP user with at least the roles for user management

Create a login for Identity Manager's service account with at least reading access on user
management tables by using a command from the table below:

| Table             | Usage                                   |
| ----------------- | --------------------------------------- |
| USR02             | Users table                             |
| AGR_USERS         | Links between Users and Roles           |
| AGR_TEXTS         | Roles labels according to the language  |
| USER_ADDR         |                                         |
| AGR_1016 AGR_PROF | Links between Profiles and Roles        |
| USR10             | Profiles tables                         |
| USR11             | Profiles labels                         |
| AGR_DEFINE        | Roles table                             |
| AGR_AGRS          | Composition links                       |
| USGRP             | Groups table                            |
| USGRPT            | Groups labels                           |
| UST04             | Links between Users and Profiles        |
| UST10C            | Links between Profiles and Sub-profiles |
| AGR_TCODES        | Links between Roles and Transactions    |
| T002              | Languages codes                         |

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

execute sp_addlogin \<login\>, \<password\>, \<database (ABA is the default value)\>go use ABA go
execute sp_adduser \<login\>go grant select on ABA.SAPSR3.USR02 to usercube grant select on
ABA.SAPSR3.AGR_USERS to usercube grant select on ABA.SAPSR3.USER_ADDR to usercube grant select on
ABA.SAPSR3.AGR_1016 to usercube grant select on ABA.SAPSR3.USR10 to usercube grant select on
ABA.SAPSR3.USR11 to usercube grant select on ABA.SAPSR3.AGR_AGRS to usercube grant select on
ABA.SAPSR3.USGRP to usercube grant select on ABA.SAPSR3.UST04 to usercube grant select on
ABA.SAPSR3.AGR_TCODES to user grant select on ABA.SAPSR3.T002 to usercube Go

Set up the prerequisites for reading

To set up the prerequisites for reading follow the steps below.

**Step 1 –** Copy the DLL `Sap.Data.Hana.Core.v2.1.dll` into the Runtime of Identity Manager.

![connectorreadprerequisites1](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/saperp6/connectorreadprerequisites1.webp)

**Step 2 –** Unzip the "hdbclient.zip" archive to C: drive and add the path to the Path environment
variables.

![connectorreadprerequisites2](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/saperp6/connectorreadprerequisites2.webp)

**Step 3 –** Create environment variables: `HDBADOTNET=C:\hdbclient\ado.net` and
`HDBADOTNETCORE=C:\hdbclient\dotnetcore`.

Set up the prerequisites for writing

**NOTE:** Make sure the Read prerequisites are configured first.

**Step 1 –** Copy the provided DLL `sapnwrfc.dl` into the Runtime of Identity Manager.

**Step 2 –** Unzip the `dotnet86.zip` archive to `C:\dotnetx86`.

**Step 3 –** Copy the DLLs icudt50.dll, `icuin50.dll` and icuuc50.dll into the Runtime of Identity
Manager.

![connectorwriteprerequisites](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/saperp6/connectorwriteprerequisites.webp)

**Step 4 –** Disable DLLs search by adding the environment variable `NLSUI_7BIT_FALLBACK=YES`.

![connectorwriteprerequisites2](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/saperp6/connectorwriteprerequisites2.webp)

**Step 5 –** Add new environment variable `USERCUBE_DOTNET32` containing the path to dotnetx86
(e.g.: `C: \donetx86\dotnet.exe`).

## Export

This connector extracts users, roles, profiles, profile memberships, role memberships and groups
from an SAP ERP instance, and writes the output to CSV files.

### Configuration

This process is configured through a connection in the UI and/or the XML configuration, and in the
**appsettings.agent.json** > **Connections** section. See the
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for
additional information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "<ConnectionIdentifier>": {
      ...
    }
  }
}
```

_Remember,_ the identifier of the connection and thus the name of the subsection must:

- Be unique
- Not begin with a digit.
- Not contain \<, \>, :, /, \, |, ?, \*, and \_.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
appsettings.agent.json
{
    ...
    "Connections": {
        ...
        "SAPExportFulfillment": {
            "Server": "serverUrl",
            "AseLogin": "login",
            "AsePassword": "password",
            "Instance": "sapInstance",
            "Port": "4242",
            "Client": "123",
            "Language": "fr"
        }
    }
}

```

| Name                        | Type    | Description                                                    |
| --------------------------- | ------- | -------------------------------------------------------------- |
| IsHana default value: false | Boolean | True to connect to an S/4 HANA instance instead of an ERP 6.0. |
| AseLogin required           | String  | Login to connect to SAP ASE.                                   |
| AsePassword required        | String  | Password to connect to SAP ASE.                                |
| Client required             | String  | Client id of SAP.                                              |
| Instance required           | String  | Instance of the SAP database.                                  |
| Language required           | String  | SAP language.                                                  |
| Port required               | String  | Port of the SAP ERP server.                                    |
| Server required             | String  | URL of the SAP ERP server.                                     |

### Output details

This connector is meant to generate to the ExportOutput folder the following files:

- SAPExportFulfillment_users.csv;
- SAPExportFulfillment_roles.csv;
- SAPExportFulfillment_usersroles.csv;
- SAPExportFulfillment_profiles.csv;
- SAPExportFulfillment_profilesprofiles.csv;
- SAPExportFulfillment_rolesprofiles.csv;
- SAPExportFulfillment_usersprofiles.csv;
- SAPExportFulfillment_rolesroles.csv;
- SAPExportFulfillment_groups.csv;
- SAPExportFulfillment_rolestransactions.csv.

See the
[Application Settings](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)
topic for additional information.

## Fulfill

This connector can provision users, role memberships and group memberships to SAP ERP.

### Configuration

Same as for export, fulfill is configured through connections. See the
[SAP ERP 6.0 and SAP S4/HANA](/docs/identitymanager/6.2/reference/index.md) topic for additional information.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
appsettings.agent.json
{
    ...
    "Connections": {
        ...
        "SAPExportFulfillment": {
            "Server": "<serverUrl>",
            "BapiLogin": "<login>",
            "BapiPassword": "<password>"
        }
    }
}

```

#### Setting attributes

| Name                        | Type    | Description                                                    |
| --------------------------- | ------- | -------------------------------------------------------------- |
| IsHana default value: false | Boolean | True to connect to an S/4 HANA instance instead of an ERP 6.0. |
| Server required             | String  | URL of the SAP ERP server.                                     |
| BapiLogin required          | String  | Login to connect to the specified server.                      |
| BapiPassword required       | String  | Password to connect to the specified server.                   |

### Password reset

See the
[appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)
topic for additional information on how to configure password reset settings.

When setting a password for an SAP ERP user, the password attribute is defined by the password
specified in the corresponding RessourceTypeMapping. See the
[Sap Resource Type Mapping](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
topic for additional information.

### Credential protection

Data protection can be ensured through:

- RSA encryption, configured in the `appsettings.encrypted.agent.json` file
- An Azure Key Vault safe

| Attribute    | Naming Convention for the Key in Azure Key Vault |
| ------------ | ------------------------------------------------ |
| Server       | Connections--\<identifier\>--Server              |
| AseLogin     | Connections--\<identifier\>--AseLogin            |
| AsePassword  | Connections--\<identifier\>--AsePassword         |
| Instance     | Connections--\<identifier\>--Instance            |
| Port         | Connections--\<identifier\>--Port                |
| Client       | Connections--\<identifier\>--Client              |
| Language     | Connections--\<identifier\>--Language            |
| BapiLogin    | Connections--\<identifier\>--BapiLogin           |
| BapiPassword | Connections--\<identifier\>--BapiPassword        |
| SystemNumber | Connections--\<identifier\>--SystemNumber        |

- A CyberArk Vault able to store Active Directory's Login, Password, and Server.

See the
[ RSA Encryption ](/docs/identitymanager/6.2/reference/index.md),
[Azure Key Vault](/docs/identitymanager/6.2/administration/agent-configuration/credential-providers.md), and
[CyberArk's AAM Credential Providers ](/docs/identitymanager/6.2/administration/agent-configuration/credential-providers.md)topics
for additional information.

Protected attributes are stored inside a safe in CyberArk, into an account whose identifier can be
retrieved by Identity Manager from `appsettings.cyberark.agent.json`.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
appsettings.cyberark.agent.json
{
  ...
  "Connections": {
    ...
    "SAPExportFulfillment": {
        "Login": "SAPExportFulfillment_CyberArkKey",
        "Password": "SAPExportFulfillment_CyberArkKey",
        "Server": "SAPExportFulfillment_CyberArkKey"
    }
  }
}
```

# SAP Netweaver

This connector exports and fulfills users and roles from/to an
[SAP Netweaver](https://www.sap.com/france/products/technology-platform/hana/what-is-sap-hana.html)
instance.

This page is about [ SAP S/4 HANA ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md).

![Package: ERP/SAP S/4 HANA](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/sapnetweaver/packages_sap_v603.webp)

## Overview

SAP ERP is an enterprise resource planning software developed by the German company SAP SE. The
software incorporates the key business functions of an organization. ERP software includes programs
in all core business areas, such as procurement, production, materials management, sales, marketing,
finance, and human resources (HR).

## Prerequisites

Implementing this connector requires:

- reading first the
  [appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)documentation;
- a service account with reading and writing permissions on the SAP server.

## Export

This connector exports users, roles, role memberships and groups from an SAP instance and writes the
output to CSV files.

### Configuration

This process is configured through a
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) in the UI and/or
the XML configuration, and in the `appsettings.agent.json > Connections` section:

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "<ConnectionIdentifier>": {
      ...
    }
  }
}
```

The identifier of the connection and thus the name of the subsection must:

- be unique.
- not begin with a digit.
- not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

> For example:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "SAPExportFulfillment": {
>         "Server": "serverUrl",
>         "Login": "login",
>         "Password": "password"
>     }
>   }
> }
> ```

#### Setting attributes

| Name              | Details                                                                           |
| ----------------- | --------------------------------------------------------------------------------- |
| Server required   | **Type** String **Description** URL of the SAP server.                            |
| Login required    | **Type** String **Description** Login to authenticate to the specified server.    |
| Password required | **Type** String **Description** Password to authenticate to the specified server. |

### Output details

This connector is meant to generate to the
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) folder the
following CSV files:

- `sap_users.csv` with the following columns:

  ```
  sap_users.csv
  Command,logonname,isserviceuser,firstname,lastname,salutation,title,jobtitle,mobile,displayname,description,email,fax,locale,timezone,validfrom,validto,lastmodifydate,islocked,isaccountlocked,ispasswordlocked,ispassworddisabled,telephone,department,id,securitypolicy,datasource,company,streetaddress,city,zip,pobox,country,state,orgunit,accessibilitylevel,passwordchangerequired
  Insert,value1,value2,...,valueN
  ```

- `sap_groups.csv` with the following columns:

  ```
  sap_groups.csv
  Command,uniquename,displayname,description,lastmodifydate,id,datasource,distinguishedname
  Insert,value1,value2,...,valueN
  ```

- `sap_roles.csv` with the following columns:

  ```
  sap_roles.csv
  Command,uniquename,displayname,description,lastmodifydate,id,datasource,scopes,actions
  Insert,value1,value2,...,valueN
  ```

- `sap_roles_member.csv` with the following columns:

  ```
  sap_roles_member.csv
  Command,id,member
  Insert,value1,value2,...,valueN
  ```

## Fulfill

This connector writes to SAP to create, update, and/or delete users, groups, roles and group
memberships.

### Configuration

Same as for export, fulfill is configured through connections.

#### Setting attributes

| Name              | Details                                                                           |
| ----------------- | --------------------------------------------------------------------------------- |
| Server required   | **Type** String **Description** URL of the SAP server.                            |
| Login required    | **Type** String **Description** Login to authenticate to the specified server.    |
| Password required | **Type** String **Description** Password to authenticate to the specified server. |

> For example:
>
> ```
> appsettings.agent.json
> {
>  "Connections": {
>     "SAPExportFulfillment": {
>         "Server": "serverUrl",
>         "Login": "login",
>         "Password": "password"
>     }
>   }
> }
> ```

## Authentication

### Password reset

See the
[appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)
topic to learn more on how to configure password reset settings.

When setting a password for an SAP user, the password attribute is defined by the password specified
in the corresponding
[Resource Type Mappings](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

### Credential protection

Data protection can be ensured through:

- [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md), configured in
  the `appsettings.encrypted.agent.json` file;
- An [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) safe;

| Attribute | Naming Convention for the Key in Azure Key Vault |
| --------- | ------------------------------------------------ |
| Server    | `Connections--<identifier>--Server`              |
| Login     | `Connections--<identifier>--Login`               |
| Password  | `Connections--<identifier>--Password`            |

- a [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) able to store
  Active Directory's `Login`, `Password` and `Server`.

Protected attributes are stored inside a safe in CyberArk, into an account whose identifier can be
retrieved by Identity Manager from `appsettings.cyberark.agent.json`.

> For example:
>
> ```
> appsettings.cyberark.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "SAPExportFulfillment": {
>         "Login": "SAPExportFulfillment_CyberArkKey",
>         "Password": "SAPExportFulfillment_CyberArkKey",
>         "Server": "SAPExportFulfillment_CyberArkKey"
>     }
>   }
> }
> ```

# ServiceNow

This connector exports and fulfills any data, including users and roles, from/to a
[ServiceNow CMDB](https://www.servicenow.com/products/servicenow-platform/configuration-management-database.html).

This page is about [ ServiceNow ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md).

![Package: ITSM/ServiceNow](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/servicenowentitymanagement/packages_servicenow_v603.webp)

## Overview

ServiceNow is a cloud-based company that provides software as a service (SaaS) for technical
management support. The company specializes in IT service management (ITSM), IT operations
management (ITOM) and IT business management (ITBM), allowing users to manage projects, teams and
customer interactions via a variety of apps and plugins.  
This section focuses on ServiceNow Entity Management. To learn about how to use this connector to
create tickets for other resources, see
[ ServiceNow Ticket ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md).

## Prerequisites

Implementing this connector requires:

- reading first the appsettings documentation;
- a service account with the **snc_platform_rest_api_access** role, as well as reading and writing
  permissions on the target ServiceNow instance;
- the version ServiceNow London or later;
- the appropriate configuration in ServiceNow of authentication, Basic or OAuth.

## Export

This connector exports to CSV files ServiceNow's tables (Users, Groups, Group Memberships).

An incremental search is possible to retrieve added and updated records but a full delta (including
deleted items) can't be performed.

### Configuration

This process is configured through a
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) in the UI and/or
the XML configuration, and in the `appsettings.agent.json > Connections` section:

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "<ConnectionIdentifier>": {
      ...
    }
  }
}
```

The identifier of the connection and thus the name of the subsection must:

- be unique.
- not begin with a digit.
- not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

> The following example retrieves from users only those that are active, and no filter is applied to
> the other tables. A single request can retrieve up to 5,000 entries, no more. This means that if
> there are 6,000 `sys_user` to retrieve, then all of them will be retrieved but with two requests.
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "ServiceNowExportFulfillment": {
>         "Server": "https://instance.service-now.com/api/now/table",
>         "Login": "login",
>         "Password": "password",
>         "ResponseSizeLimit":"5000",
>         "Filter":"sys_user#active=true"
>     }
>   }
> }
> ```
>
> The following example is the same as above, but using OAuth Authentication:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "ServiceNowExportFulfillment": {
>         "Server": "https://instance.service-now.com/api/now/table",
>         "Login": "login",
>         "Password": "password",
>         "ClientId": "ClientId",
>         "ClientSecret": "ClientSecret",
>         "OAuth2Url": "https://instance.service-now.com/oauth_token.do",
>         "ResponseSizeLimit":"5000",
>         "Filter":"sys_user#active=true"
>     }
>   }
> }
> ```

#### Setting attributes

| Name                  | Details                                                                                                                                                                                                                                             |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Server required       | **Type** String **Description** URL of the ServiceNow Server Table API endpoint. [See ServiceNow Official API Reference](https://developer.servicenow.com/dev.do#see-servicenow-official-api-reference). **Info:** the URL must start with `https`. |
| Login required        | **Type** String **Description** Username of the service account used to connect to the server.                                                                                                                                                      |
| Password required     | **Type** String **Description** Password of the service account used to connect to the server.                                                                                                                                                      |
| ClientId optional     | **Type** String **Description** Client Id used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications.html).                                            |
| ClientSecret optional | **Type** String **Description** Client Secret used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications.html).                                        |
| OAuth2Url optional    | **Type** String **Description** Application endpoint used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications.html).                                 |
|                       |                                                                                                                                                                                                                                                     |
| ---                   | ---                                                                                                                                                                                                                                                 |
| Server required       | **Type** String **Description** URL of the ServiceNow Server Table API endpoint. [See ServiceNow Official API Reference](https://developer.servicenow.com/dev.do#see-servicenow-official-api-reference). **Info:** the URL must start with `https`. |
| Login required        | **Type** String **Description** Username of the service account used to connect to the server.                                                                                                                                                      |
| Password required     | **Type** String **Description** Password of the service account used to connect to the server.                                                                                                                                                      |
| ClientId optional     | **Type** String **Description** Client Id used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications.html).                                            |
| ClientSecret optional | **Type** String **Description** Client Secret used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications.html).                                        |
| OAuth2Url optional    | **Type** String **Description** Application endpoint used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications.html).                                 |

### Output details

This connector is meant to generate to the
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) folder one CSV
file for each table, named `<connectionIdentifier>_<tableName>.csv`.

Identity Manager lists the tables to retrieve based on
[ Entity Type Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)'s
and
[ Entity Association Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)'s
connection tables.

For the connector to work properly, the connection tables must follow the naming convention too:
`<connectionIdentifier>_<tableName>`.

> For example, with the following configuration:
>
> ```
>
> <EntityTypeMapping Identifier="User" Connector="ServiceNow"  ConnectionTable="ServiceNowExportFulfillment_sys_user">  <Property Identifier="sys_id" ConnectionColumn="sys_id" IsPrimaryKey="true" />  <Property Identifier="name" ConnectionColumn="name" />  <Property Identifier="user_name" ConnectionColumn="user_name" />  <Property Identifier="email" ConnectionColumn="email" /></EntityTypeMapping><EntityTypeMapping Identifier="User" Connector="ServiceNow"  ConnectionTable="ServiceNowExportFulfillment_sys_group">  <Property Identifier="sys_id" ConnectionColumn="sys_id" IsPrimaryKey="true" />  <Property Identifier="name" ConnectionColumn="name" />  <Property Identifier="description" ConnectionColumn="description" /></EntityTypeMapping><EntityAssociationMapping Identifier="Group_Members" Column1="user" EntityPropertyMapping1="User:sys_id" Column2="group" EntityPropertyMapping2="Group:sys_id" Connector="ServiceNow" ConnectionTable="ServiceNowExportFulfillment_sys_user_grmember" C0="sys_user_grmember"
> />
>
> ```
>
> We would have:
>
> ```
> ServiceNowExportFulfillment_sys_user.csv
> sys_id,active,name,user_name,email
> ...
>
> ```
>
> ServiceNowExportFulfillment_sys_group.csv sys_id,name,description ...
>
> ```
> ServiceNowExportFulfillment_sys_user_grmember.csv
> user,group
> ...
>
> ```

## Fulfill

This connector writes to ServiceNow to create, update, and/or delete any data.

### Configuration

Same as for export, fulfill is configured through connections.

> For example:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "ServiceNowExportFulfillment": {
>         "Server": "https://instance.service-now.com/api/now/table",
>         "Login": "login",
>         "Password": "password"
>     }
>   }
> }
> ```
>
> The following example is the same as above, but using OAuth Authentication:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "ServiceNowExportFulfillment": {
>         "Server": "https://instance.service-now.com/api/now/table",
>         "Login": "login",
>         "Password": "password",
>         "ClientId": "ClientId",
>         "ClientSecret": "ClientSecret",
>         "OAuth2Url": "https://instance.service-now.com/oauth_token.do"
>     }
>   }
> }
> ```

#### Setting attributes

| Name                  | Details                                                                                                                                                                                                                                             |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Server required       | **Type** String **Description** URL of the ServiceNow Server Table API endpoint. [See ServiceNow Official API Reference](https://developer.servicenow.com/dev.do#see-servicenow-official-api-reference). **Info:** the URL must start with `https`. |
| Login required        | **Type** String **Description** Username of the service account used to connect to the server.                                                                                                                                                      |
| Password required     | **Type** String **Description** Password of the service account used to connect to the server.                                                                                                                                                      |
| ClientId optional     | **Type** String **Description** Client Id used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications.html).                                            |
| ClientSecret optional | **Type** String **Description** Client Secret used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications.html).                                        |
| OAuth2Url optional    | **Type** String **Description** Application endpoint used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications.html).                                 |

## Authentication

### Password reset

See the
[appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)
topic to learn more on how to configure password reset settings.

When setting a password for an ServiceNow user, the password attribute is defined by the password
specified in the corresponding
[Resource Type Mappings](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

### Credentials protection

Data protection can be ensured through:

- [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md), configured in
  the `appsettings.encrypted.agent.json` file;
- An [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) safe;

| Attribute         | Naming Convention for the Key in Azure Key Vault |
| ----------------- | ------------------------------------------------ |
| Server            | `Connections--<identifier>--Server`              |
| Login             | `Connections--<identifier>--Login`               |
| Password          | `Connections--<identifier>--Password`            |
| ClientId          | `Connections--<identifier>--ClientId`            |
| ClientSecret      | `Connections--<identifier>--ClientSecret`        |
| OAuth2Url         | `Connections--<identifier>--OAuth2Url`           |
| Filter            | `Connections--<identifier>--Filter`              |
| ResponseSizeLimit | `Connections--<identifier>--ResponseSizeLimit`   |

- a [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) able to store
  Active Directory's `Login`, `Password`, `Server`, `ClientId` and `ClientSecret`.

Protected attributes are stored inside a safe in CyberArk, into an account whose identifier can be
retrieved by Identity Manager from `appsettings.cyberark.agent.json`.

> For example:
>
> ```
> appsettings.cyberark.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "ServiceNowExportFulfillment": {
>         "Login": "ServiceNowExportFulfillment_CyberArkKey",
>         "Password": "ServiceNowExportFulfillment_CyberArkKey",
>         "Server": "ServiceNowExportFulfillment_CyberArkKey",
>         "ClientId": "ServiceNowExportFulfillment_CyberArkKey",
>         "ClientSecret": "ServiceNowExportFulfillment_CyberArkKey"
>     }
>   }
> }
> ```

# ServiceNowTicket

This connector opens tickets in [ServiceNow](https://www.servicenow.com/) for manual provisioning.

This page is about [ ServiceNow Ticket ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md).

![Package: Ticket/ServiceNow](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/servicenowticket/packages_servicenowticket_v603.webp)

## Overview

ServiceNow is a cloud-based company that provides software as a service (SaaS) for technical
management support. The company specializes in IT service management (ITSM), IT operations
management (ITOM) and IT business management (ITBM), allowing users to manage projects, teams and
customer interactions via a variety of apps and plugins.  
This section focuses on ServiceNow ticket creation for the fulfillment of resources that can't or
shouldn't be performed with an existing fulfill. To learn about how to manage entities, see
[ ServiceNow ](/docs/identitymanager/6.2/reference/index.md)Entity Management.

## Prerequisites

Implementing this connector requires:

- reading first the
  [appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)documentation;
- a service account with the **snc_platform_rest_api_access** role, as well as reading and writing
  permissions on the target ServiceNow instance;
- the version ServiceNow London or later;
- the appropriate configuration in ServiceNow of authentication, Basic or OAuth.

## Export

This connector exports some of ServiceNow entities, see the export capabilities of the
[ ServiceNow ](/docs/identitymanager/6.2/reference/index.md)connector. Some entities cannot be exported.

## Fulfill

This connector writes to ServiceNow to create incident and request tickets containing information to
create, update or delete a resource. It does not create nor update a resource directly.

Once created, the ticket is managed in ServiceNow, not in Identity Manager.

When the ticket is closed or canceled, Identity Manager updates the
[Entitlement Assignment](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md) of the
resource accordingly.

See the fulfill capabilities of the [ ServiceNow ](/docs/identitymanager/6.2/reference/index.md)connector.

> For example:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "ServiceNowFulfillManual": {
>         "Server": "https://instance.service-now.com/api/now/table",
>         "Login": "login",
>         "Password": "password"
>     }
>   }
> }
> ```

## Authentication

### Password reset

See the
[appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)
topic to learn more on how to configure password reset settings.

When setting a password for a ServiceNow user, the password attribute is set to the chosen value and
the user's **password_needs_reset** attribute is set to `true`.

### Credential protection

Data protection can be ensured through:

- [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md), configured in
  the `appsettings.encrypted.agent.json` file;
- An [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) safe;

| Attribute                 | Naming Convention for the Key in Azure Key Vault       |
| ------------------------- | ------------------------------------------------------ |
| Server                    | `Connections--<identifier>--Server`                    |
| Login                     | `Connections--<identifier>--Login`                     |
| Password                  | `Connections--<identifier>--Password`                  |
| ClientId                  | `Connections--<identifier>--ClientId`                  |
| ClientSecret              | `Connections--<identifier>--ClientSecret`              |
| OAuth2Url                 | `Connections--<identifier>--OAuth2Url`                 |
| TicketCookieDirectoryPath | `Connections--<identifier>--TicketCookieDirectoryPath` |
| ResponseSizeLimit         | `Connections--<identifier>--ResponseSizeLimit`         |

- a [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) able to store
  Active Directory's `Login`, `Password`, `Server`, `ClientId` and `ClientSecret`.

Protected attributes are stored inside a safe in CyberArk, into an account whose identifier can be
retrieved by Identity Manager from `appsettings.cyberark.agent.json`.

> For example:
>
> ```
> appsettings.cyberark.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "ServiceNowFulfillManual": {
>         "Login": "ServiceNowFulfillManual_CyberArkKey",
>         "Password": "ServiceNowFulfillManual_CyberArkKey",
>         "Server": "ServiceNowFulfillManual_CyberArkKey",
>         "ClientId": "ServiceNowFulfillManual_CyberArkKey",
>         "ClientSecret": "ServiceNowFulfillManual_CyberArkKey"
>     }
>   }
> }
> ```

# SharedFolders

This connector exports users and permissions from Windows shared folders.

This page is about [ Shared Folders ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md).

![Package: Storage/Shared Folders](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/sharedfolder/packages_sharedfolders_v603.webp)

## Overview

Also known as UFA (Identity Manager Folder Access), this connector can be used to scan the access
rights assigned to folders and files in computers and networks which comply with the
[Windows File Security and Access Rights systems](https://docs.microsoft.com/en-us/windows/win32/fileio/file-security-and-access-rights).

## Prerequisites

Implementing this connector requires an account with the permissions:

- to access all relevant folders and files and read their entitlements;
- **Log on as a batch job** in the local group policy, when the connector's authentication mode is
  batch.

  ![SharedFolder - Permission for Batch Authentication](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/sharedfolder/sharedfolder_permission.webp)

## Export

This connector scans shared folders in order to export their content to CSV files.

### Configuration

This process is configured through a
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) in the UI and/or
the XML configuration, and in the `appsettings.agent.json > Connections` section:

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "<ConnectionIdentifier>": {
      ...
    }
  }
}
```

The identifier of the connection and thus the name of the subsection must:

- be unique.
- not begin with a digit.
- not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

> The following example reads `12` levels of folders in the folders `R&D_Projects` and `Management`
> in the network `OfficeNetwork` and in `C:/`. We only read entitlements about folders and we don't
> have access rights to the entitlements associated with the SIDs `S-1-3-2-4` and `S-5-7-6-8`. We
> use the service account [account@example.com](mailto:account@example.com) with its related
> password and domain, and interactive connection:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "SharedFolderExport": {
>         "InputDirectories": [ "OfficeNetwork/R&D_Projects", "OfficeNetwork/Management", "C:/" ],
>         "OnlyDirectoryScan": "true",
>         "LevelOfScan": "12",
>         "ListOfSIDToAvoid": [ "S-1-3-2-4", "S-5-7-6-8" ],
>         "Login": "account@example.com",
>         "Password": "accountexamplepassword",
>         "Domain": "Example",
>         "Interactive": true
>     }
>   }
> }
> ```

#### Setting attributes

| Name                                   | Details                                                                                                                                                                                                                                                                                                  |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| InputDirectories required              | **Type** String List **Description** Paths of the folders to be scanned.                                                                                                                                                                                                                                 |
| Domain optional                        | **Type** String **Description** Domain of the account used to access files and read their access rights.                                                                                                                                                                                                 |
| Interactive default value: False       | **Type** Boolean **Description** `True` to set authentication as interactive, `False` to set it as batch.                                                                                                                                                                                                |
| LevelOfScan optional                   | **Type** Int32 **Description** Number of file and folder levels to be scanned. By default, it scans the whole folder tree for each input directory.                                                                                                                                                      |
| ListOfSIDToAvoid optional              | **Type** String List **Description** SIDs (users or groups) to exclude from the scan.                                                                                                                                                                                                                    |
| OnlyDirectoryScan default value: False | **Type** Boolean **Description** `True` to scan only folders' entitlements and not files', `False` to scan all.                                                                                                                                                                                          |
|                                        |                                                                                                                                                                                                                                                                                                          |
| ---                                    | ---                                                                                                                                                                                                                                                                                                      |
| Login optional                         | **Type** String **Description** Login of the account used to access the files and folders. **Note:** when not specified and `Password` neither, then the account running Identity Manager will be used. **Note:** if `Domain` is null, then `Login` must be set in the User Principal Name (UPN) format. |
| Password optional                      | **Type** String **Description** Password of the account used to access the files and folders. **Note:** when not specified and `Login` neither, then the account running Identity Manager will be used.                                                                                                  |

### Output details

This connector is meant to generate to the
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) folder the
following CSV files:

- `<connectionIdentifier>_ACE.csv`, with the following columns:
  - **key**: concatenation of `Right`, `Path` and `OwnerSID`;
  - **Path**: path of the folder or file;
  - **Right**: entitlement among the following, listed from weakest to strongest:  
    ListDirectory / ReadData / CreateFiles / WriteData / AppendData / CreateDirectories /
    ReadExtendedAttributes / WriteExtendedAttributes / ExecuteFile / Traverse /
    DeleteSubdirectoriesAndFiles / ReadAttributes / WriteAttributes / Write / Delete /
    ReadPermissions / Read / ReadAndExecute / Modify / ChangePermissions / TakeOwnership /
    Synchronize / FullControl
  - **AllowOrDeny**: `0` (or `false`) if the entitlement is allowed, `1` (or `true`) if it is
    denied;
  - **OwnerSID**: SID of the entitlement's owner.
- `<connectionIdentifier>_PathInformations.csv`, with the following columns:
  - **Path**;
  - **ParentPath**: path of the file's or folder's parent folder;
  - **BlockInheritance**: `true` if the file or folder blocks entitlement inheritance in the tree;
  - **Hierarchy**: hierarchy in the scanned tree.
- `<connectionIdentifier>_SID.csv`, with only one column **SID**.

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Password reset

This connector does not reset passwords.

### Credential protection

Data protection can be ensured through:

- [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md), configured in
  the `appsettings.encrypted.agent.json` file;
- an [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) safe;

| Attribute         | Naming Convention for the Key in Azure Key Vault |
| ----------------- | ------------------------------------------------ |
| Domain            | `Connections--<identifier>--Domain`              |
| Interactive       | `Connections--<identifier>--Interactive`         |
| LevelOfScan       | `Connections--<identifier>--MembersFile`         |
| ListOfSIDToAvoid  | `Connections--<identifier>--ListOfSIDToAvoid`    |
| Login             | `Connections--<identifier>--Login`               |
| OnlyDirectoryScan | `Connections--<identifier>--OnlyDirectoryScan`   |
| Password          | `Connections--<identifier>--Password`            |
| InputDirectories  | `Connections--<identifier>--InputDirectories`    |

- a [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) able to store
  Active Directory's `Login` and `Password`.

Protected attributes are stored inside a safe in CyberArk, into an account whose identifier can be
retrieved by Identity Manager from `appsettings.cyberark.agent.json`.

> For example:
>
> ```
> appsettings.cyberark.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "SharedFolderExport": {
>         "Login": "SharedFolderSettings",
>         "Password": "SharedFolderSettings"
>     }
>   }
> }
> ```

# SharePoint

This connector exports sites, folders, groups and permissions from a
[SharePoint](https://www.microsoft.com/en-us/microsoft-365/sharepoint/collaboration) instance.

This page is about Storage/SharePoint.

![Package: Storage/SharePoint](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/sharepoint/packages_sharepoint_v603.webp)

## Overview

SharePoint is a system used by organizations to store, organize, share and access information.

## Prerequisites

Implementing this connector requires an account with the permissions to access all items and read
their entitlements.

### Configuration

This process is configured through a connection in the UI and/or the XML configuration, and in the
`appsettings.agent.json > Connections` section:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
                 
                        appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "<ConnectionIdentifier>": {
      ...
    }
  }
}
                
```

The identifier of the connection and thus the name of the subsection must:

- Be unique.
- Not begin with a digit.
- Not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

The following example scans the example.sharepoint.com SharePoint at the more detailed level
(ListItem) with the account [account.example@acme.com](mailto:account.example@usercube.com):

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "SharePointExport": {
        "Server": "https://example.sharepoint.com/",
        "Scanlevel": "ListItem",
        "Login": "account.example@usercube.com",
        "Password": "account'sexamplepassword",
        "CsvUrls": "C:/identitymanager/source/SP_others.csv¤URL¤,"
    }
  }
}
```

#### Setting attributes

| Name                              | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Login required                    | String    | Login of the account used to access files and read their entitlements.                                                                                                                                                                                                                                                                                                                                                      |
| Password required                 | String    | Password of the account used to access files and read their entitlements.                                                                                                                                                                                                                                                                                                                                                   |
| Server required                   | String    | URL of the SharePoint website to scan.                                                                                                                                                                                                                                                                                                                                                                                      |
| Domain optional                   | String    | Domain, sometimes needed in addition to Login to make the connection to the SharePoint server.                                                                                                                                                                                                                                                                                                                              |
| TimeOut default value: 300000     | Int32     | Timeout (in milliseconds) for requests.                                                                                                                                                                                                                                                                                                                                                                                     |
| Scanlevel default value: ListItem | Scanlevel | Level of scan to be performed, from less to more detailed: Site; List; and ListItem.                                                                                                                                                                                                                                                                                                                                        |
| CsvUrls optional                  | String    | Path, column and separator (split by ¤) of the CSV file containing the other sites to be scanned. Useful when scanning a SharePoint with a root site (https://example.sharepoint.com) with other sites (https://example.sharepoint.com/sites/OtherSite) which are not sub-sites (https://example.sharepoint.com/SubSite). Sub-sites don't need to be provided through a CSV file because they are found from the root site. |

### Limitations

Synchronization in incremental mode does not retrieve user account changes, because SharePoint is
not able to provide this information through its API.

To avoid unnecessary scanning and to increase performance, the connector in incremental mode does
not scan user accounts from the sites given through CsvUrls. However, it still retrieves the
folders, groups, permissions and the links between users and these elements.

When needing to retrieve all of user account information, then go through complete synchronization
instead of incremental.

### Output details

This connector is meant to generate to the Export Output folder the following CSV files:

`<connectionIdentifier>_Entity.csv`, with the following columns:

- **command**— empty for complete synchronization, and `merge` for incremental;
- **Collection**— SharePoint server's URL where the information was found;
- **Id**— Identifier of the entity;
- **SharePointId**— Identifier of the entity in the scanned site;
- **Name**— name of the entity;
- **Description**— description of the entity;
- **PrincipalType**— type of the entity, for example `User`, `SecurityGroup` or `SharePointGroup`,
  etc.;
- **Email**— email of the user;
- **IsEmailAuthenticationGuestUser**— `true` if the email is for the authentication of a guest user;
- **IsSiteAdmin**— `true` if the user is a site administrator;
- **IsShareByEmailGuestUser**— `true` if the user is a guest invited by email;
- **AadObjectId**— Microsoft Entra ID (formerly Microsoft Azure AD)'s identifier of the entity;

`<connectionIdentifier>_GroupMember.csv`, with the following columns:

- **command**;
- **Collection**;
- **Group_Id**: Identifier of the group;
- **Entity_Id**: Identifier of the entity related to the group member;

`<connectionIdentifier>_GroupMemberScanFail.csv`, with the following columns:

- **command**;
- **Collection**;
- **Id**;
- **Name**;
- **Description**;
- **PrincipalType**;

`<connectionIdentifier>_Role.csv`, with the following columns:

- **command**;
- **Collection**;
- **Id**;
- **Name**;
- **Description**;
- **Permissions**: permissions concatenated together with line breaks;

`<connectionIdentifier>_RoleAssignment.csv`, with the following columns:

- **command**;
- **Collection**;
- **Key**— concatenation (with `-`) of the `Role_Id`, the `Entity_Id` and the `SecurableObject_Key`;
- **Role_Id**— Identifier of the role;
- **Entity_Id**— Identifier of the entity related to the role;
- **Entity_Name**— name of the group member;
- **SecurableObject_Key**— concatenation (with `|`) of the `Collection` and the relative URLs where
  the object was found;

`<connectionIdentifier>_SecurableObject.csv`, with the following columns:

- **command**;
- **Key**— concatenation (with `|`) of the `Collection` and the relative URLs where the object was
  found;
- **Collection**;
- **Level**— level where the securable object was found, among: `Site`; `List`; `ListItem`;
- **Label**— title or display name of the securable object;
- **ParentKey**— key of the securable object's parent;
- **ScanStatus**— status of the scan (success or fail);
- **HasUniqueRoleAssignments**— `true` if entitlement inheritance is blocked for this securable
  object;

`<connectionIdentifier>_SecurableObjectRightInheritance.csv`, with the following columns:

- **command**;
- **Collection**;
- **SecurableObject_Key**;
- **Inheritance_Key**— key of the ancestor object that the securable object gets its inherited
  rights from;

`<connectionIdentifier>_SecurableObjectScanFail.csv`, with the following columns:

- **command**;
- **Key**: concatenation (with `|`) of the `Collection` and the relative URLs where the object was
  found;
- **Collection**;
- **Level**;
- **Label**;
- **ParentKey**;
- **HasUniqueRoleAssignments**.

## Fulfill

Identity Manager's fulfill functionality can add and remove members from existing SharePoint groups.

### Configuration

Same as for export, fulfill is configured through connections.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "SharePointFulfillment": {
        "Server": "https://example.sharepoint.com/",
        "Scanlevel": "ListItem",
        "Login": "account.example@usercube.com",
        "Password": "account'sexamplepassword",
        "CsvUrls": "C:/identitymanager/source/SP_others.csv¤URL¤,"
    }
  }
}
```

#### Setting attributes

| Name                          | Type   | Description                                                                                    |
| ----------------------------- | ------ | ---------------------------------------------------------------------------------------------- |
| Login required                | String | Login of the account used to access files and read their entitlements.                         |
| Password required             | String | Password of the account used to access files and read their entitlements.                      |
| Server required               | String | URL of the SharePoint website to scan.                                                         |
| Domain optional               | String | Domain, sometimes needed in addition to Login to make the connection to the SharePoint server. |
| TimeOut default value: 300000 | Int32  | Timeout (in milliseconds) for requests.                                                        |

### Password reset

This connector does not reset passwords.

### Credential protection

Data protection can be ensured through:

- RSA encryption, configured in the `appsettings.encrypted.agent.json` file;
- An Azure Key Vault safe;

| Attribute | Naming Convention for the Key in Azure Key Vault |
| --------- | ------------------------------------------------ |
| Domain    | `Connections--<identifier>--Domain`              |
| Login     | `Connections--<identifier>--Login`               |
| Password  | `Connections--<identifier>--Password`            |
| Scanlevel | `Connections--<identifier>--Scanlevel`           |
| TimeOut   | `Connections--<identifier>--TimeOut`             |
| Server    | `Connections--<identifier>--Server`              |
| CsvUrls   | `Connections--<identifier>--CsvUrls`             |

- A CyberArk Vault able to store SharePoint's `Login` and `Password`.

See the
[ RSA Encryption ](/docs/identitymanager/6.2/reference/index.md),
[Azure Key Vault](/docs/identitymanager/6.2/administration/agent-configuration/credential-providers.md), and
[CyberArk's AAM Credential Providers ](/docs/identitymanager/6.2/administration/agent-configuration/credential-providers.md)topics
for additional information.

Protected attributes are stored inside a safe in CyberArk, into an account whose identifier can be
retrieved by Identity Manager from `appsettings.cyberark.agent.json`.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
                        
                            appsettings.cyberark.agent.json
{
  ...
  "Connections": {
    ...
    "SharePointFulfill": {
        "Login": "SharePointSettings",
        "Password": "SharePointSettings"
    }
  }
}
                    
```

# Top Secret

This connector exports users and profiles from a
[Top Secret](https://www.ibm.com/docs/en/szs/2.2?topic=audit-top-secret) (TSS) instance.

This page is about [ TSS ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md).

![Package: Mainframe/Top Secret](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/topsecret/packages_tss_v603.webp)

The documentation is not yet available for this page and will be completed in the near future.

# RSA Encryption

Identity Manager provides a few options to protect sensitive data via RSA encryption.

## Overview

Sensitive data can be RSA encrypted by using Identity Manager's tools:

- [ Usercube-Protect-X509JsonValue ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)
  to encrypt given values;
- [ Usercube-Protect-X509JsonFile ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)
  to encrypt a whole file.

  The file encryption tool should be used only on files that contain only plain text values, not
  already encrypted ones.

Once encrypted, sensitive values can be added to the `appsettings.encrypted.json` and
`appsettings.encrypted.agent.json` files. Identity Manager will read first the values from the
encrypted appsettings files, before reading those from the usual non-encrypted appsettings files.

These methods require an [X.509 public key certificate](https://en.wikipedia.org/wiki/X.509) (the
same for the encrypted appsettings files and the tools).

The value encryption tool can be used to encrypt specific values to be added to the encrypted
appsettings files without having to encrypt the whole files again.

## Focus on the Encrypted Appsettings Files

The `appsettings.encrypted.json` and `appsettings.encrypted.agent.json` files contain respectively
the `appsettings.json` and `appsettings.agent.json` files' sensitive setting values which are
protected by RSA encryption.

These files follow the exact same structure as the [ Agent Configuration ](/docs/identitymanager/6.2/administration/agent-configuration/index.md).

### Read the Encrypted Files

Identity Manager can use an RSA decoding algorithm fed by a
[public-key certificate](https://en.wikipedia.org/wiki/X.509) in order to read the encrypted
application settings.

This requires the usual appsettings file(s) to have `UseEncryptedAppsettings` set to `true`. See
below.

```
appsettings.json and/or appsettings.agent.json

{
    ...
    "EncryptionCertificate": {
        "File": "./Usercube.pfx",
        "Password": "secret",
        "UseEncryptedAppsettings": true
    }
}
```

This way, values from the encrypted file take priority over the values from the non-encrypted
appsettings files.

> For example, if `Password` exists in both the encrypted file and the non-encrypted file, then the
> value from the encrypted file is used.

# User Interface

See how-to customize Identity Manager's User Interface.

# Architecture

Identity Manager is built to work via a specific architecture made of a server, an agent and a
database.

## Server, Agent and Database

Identity Manager works via:

- a server which operates computation, stores all applicative data in the database, and serves a web
  User Interface;
- at least one agent which operates data flows to/from the managed systems.

  The managed systems' credentials are used only by the agent and are never disclosed to the
  server.

The agent can call the server, but the server cannot call the agent. The data flows' initiatives are
always from the agent.

## Installation Types

Identity Manager can be installed:

- SaaS so that the server dwells in the cloud and is provided as a service;

  ![Architecture: SaaS](/img/product_docs/identitymanager/identitymanager/integration-guide/architecture/saas/architecture_saas.webp)

- on-premises so that the server is installed on an isolated network within the company.

  ![Architecture: On-Premises](/img/product_docs/identitymanager/identitymanager/integration-guide/architecture/on-prem/architecture_onprem.webp)

## Next Steps

Let's learn about Identity Manager [Configuration](/docs/identitymanager/6.2/reference/index.md).

## Learn More

Learn more on Identity Manager's Architecture.

See the [Network Configuration](/docs/identitymanager/6.2/administration/index.md) topic for
additional information.

# Configuration

There are several options for configuring Identity Manager.

## Application Configuration

### User Interface

Netwrix Identity Manager (formerly Usercube) strongly recommends that Identity Manager be
configured, as much as possible, via the UI.

### XML files

For advanced users, if the UI is not enough, Identity Manager can also be configured via XML files.
These XML files should be placed in a `Conf` folder directly inside the working directory.

### Database

Identity Manager's application configuration, whether it is made from the UI or the XML files, is
stored in a database which should never be modified manually.

## Network Configuration

Identity Manager's server and agent(s) are configured via JSON files, mainly `appsettings.json` and
`appsettings.agent.json`.

## Next Steps

This is the end of the introduction guide, so you should now be able to dive into:

- The [User Guide](/docs/identitymanager/6.2/reference/index.md) to configure Identity Manager from scratch via the UI,
  following the step-by-step procedures;
- The [Integration Guide](/docs/identitymanager/6.2/integration/index.md) to complete Identity Manager's
  configuration in XML according to your needs;
- The [Installation Guide](/docs/identitymanager/6.2/installation/index.md) to install Identity Manager in a
  production environment.

## Learn More

Learn more on how to
[ Create a Working Directory ](/docs/identitymanager/6.2/installation/pre-installation/working-directory-setup.md).

See the [User Guide](/docs/identitymanager/6.2/reference/index.md) topic to learn how to configure Identity Manager
from scratch via the UI.

See how to
[ Export the Configuration ](/docs/identitymanager/6.2/development/configuration-toolkit/deployment.md)
to XML files.

See how to
[ Identity Manager Deploy the Configuration ](/docs/identitymanager/6.2/development/configuration-toolkit/deployment.md).

Learn more about the
[ XML Configuration Schema ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

Learn more about the
[Network Configuration](/docs/identitymanager/6.2/administration/index.md).

# Introduction Guide

This guide is designed to give a complete overview of Identity Manager's principles, main objectives
and capabilities.

Netwrix Identity Manager (formerly Usercube) strongly recommends starting here to fully benefit from
the [Integration Guide](/docs/identitymanager/6.2/integration/index.md)'s or the
[User Guide](/docs/identitymanager/6.2/reference/index.md)'s contents.

## Target Audience

This guide is meant to be read by:

- integrators who configure Identity Manager to match their projects' needs;
- IGA project managers who want to get a better understanding of Identity Manager.

## Prior Knowledge

A basic knowledge of Identity and Access Management (IAM) and overview (IGA) is required to
understand this guide.

## First Steps

Let's dive in with an [IGA and Netwrix Identity Manager](/docs/identitymanager/6.2/reference/index.md) of IGA and Identity
Manager.

# Entitlement Management

Managing identities' entitlements requires managing entitlements and assigning them to identities.
This page is about the role model.

## Role Model Overview

A managed system's entitlements can have many forms. They authorize identities to access certain
data on a given system, or a physical location.

> For example, entitlements in the Active Directory are usually group memberships. For example, to
> have administrator rights in the Iris application, a user must be part of the members of the group
> `SG_APP_IT/Development/Iris/Administrator`.

Identity Manager is designed to help establish an exhaustive and reliable catalog of the
entitlements available in the managed systems, and assign the right entitlements to the right users.

![Role Catalog and Users](/img/product_docs/identitymanager/identitymanager/introduction-guide/overview/entitlement-management/entitlements_rolecatalogusers.webp)

Thus, the role model contains:

- the entitlements, as roles, for all managed systems;
- the rules that trigger the assignment of entitlements to identities, and more broadly manage the
  systems' resources. Some of them act as link between Identity Manager's roles and the systems'
  accounts and permissions. Some of them are linked to, and thus apply only to, specific resource
  types.

![Role Model](/img/product_docs/identitymanager/identitymanager/introduction-guide/overview/entitlement-management/entitlements_rolemodel.webp)

The role model is a subset of a policy that also includes [Governance](/docs/identitymanager/6.2/access-governance/index.md) data
such as risk definition. So, at a higher level, distinct policies can be used to implement distinct
behaviors.

## A Role Catalog

Identity Manager intends to represent IGA-related access right mechanisms by a
[role-based](https://en.wikipedia.org/wiki/Role-based_access_control) model. The goal of the role
catalog is contain an exhaustive list of entitlements from all managed systems.

Entitlements from the managed systems are modeled by roles. For each entitlement, NETWRIX advises
creating a single role, with an easily understandable name, more functional than technical, so that
everyone knows what the role is for.

![Single Roles](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/singlerolescatalog_schemarole.webp)

Each individual entitlement should usually be modeled by a single role, and single roles can be
grouped together into composite roles to be closer to real job positions.

![Composite Roles](/img/product_docs/identitymanager/identitymanager/introduction-guide/overview/entitlement-management/entitlements_compositeroles.webp)

## A Rule Set

Roles alone are not enough to give identities the systems' technical entitlements. We need rules to
have Identity Manager write users' entitlements in the managed systems. Rules are further used to
automatically assign roles to users, or to categorize users and accounts, etc.

### Provisioning rules

Just like identities, accounts are represented in Identity Manager by an
[ Identity Management ](/docs/identitymanager/6.2/identity-management/index.md) entity-relationship model. So Identity
Manager manages entitlements as resources' attribute values.

> For example, giving specific Active Directory permissions to a new user means not only creating a
> new AD account, but also setting values for certain account properties like `cn`,
> `sAMaccountName`, `userAccountControl` or `dn`, etc.

Provisioning rules write the actual entitlements to the managed systems, most often based on users'
roles.

> For example, to give an AD entitlement to a user, we usually need to give them a group membership.
> Thus, we should have a rule that, when a user is assigned a specific role, adds the user to the
> member list of a specific AD group.

![Provisioning Rules](/img/product_docs/identitymanager/identitymanager/introduction-guide/overview/entitlement-management/entitlements_provisioningrules.webp)

Even when a role is manually assigned, provisioning rules will determine which account (and
permission groups) are given as entitlements.

Identity Manager's provisioning rules are:

- scalar rules to compute simple string properties;
- navigation rules and query rules to compute properties that act as foreign keys in a database;
- resource type rules to automatically create resources.

### Assignment rules

While the role catalog and provisioning rules are together enough to manually give users their
access rights, we often want Identity Manager to do this automatically. Assignment rules
automatically assign roles to identities based on specific criteria.

> For example, we can choose to assign the role `Benefits Manager - FR` to any user whose job title
> is benefits manager and whose location is in France.

![Assignment Rules](/img/product_docs/identitymanager/identitymanager/introduction-guide/overview/entitlement-management/entitlements_assignmentrules.webp)

Once all assignment rules are created, Identity Manager is able to spot existing assignments that
are not supported by any rule, marking them as non-conforming.

Identity Manager's assignment rules are:

- single role rules and composite role rules to assign single and composite roles;
- resource type rules to assign accounts.

### Categorization rules

Different resources can be managed through different rules, by being part of different resource
types. So a resource type is a group a resources that have the same IGA-related purposes.
Categorization rules categorize resources into resource types and link identities to the accounts
they own.

> For example, we might need to differentiate AD's standard accounts from administration accounts.
> This way, we can configure different email addresses for privileged accounts, for example
> [adm.john.smith@contoso.com](mailto:adm.john.smith@contoso.com). We can also add more approval
> steps in the workflows related to privileged accounts, for more security than for standard
> accounts.

![Categorization Rules](/img/product_docs/identitymanager/identitymanager/introduction-guide/overview/entitlement-management/entitlements_categorizationrules.webp)

Identity Manager's categorization rules are:

- correlation rules to link identities to the accounts they own;
- classification rules to categorize resources into resource types.

### More rules

Identity Manager provides more kinds of rules for optimization purposes, for example role naming
conventions to help build the role catalog by generating roles and navigation rules based on the
entitlements' names, or automation rules to help with governance by automating the review of the
assignments that do not comply with the configured rules.

### Dimensions

Rules can be triggered based on users' assigned roles, but also based on user data.

The [ Identity Management ](/docs/identitymanager/6.2/identity-management/index.md) model can be refined by configuring
dimensions: criteria from among resources'
[attributes](https://en.wikipedia.org/wiki/Attribute-based_access_control) that will trigger the
application of the rules. Then Identity Manager applies the rule for any resource whose value for a
given attribute matches the reference value specified in the rule.

> For example, a user can be assigned the role `Benefits Manager - FR` only if their job title is
> benefits manager and their location is in France. In this case, users' attributes "job title" and
> "location" are the dimensions that trigger the assignment rule.

In a nutshell, dimensions determine who should be assigned the entitlements.

Identity Manager's name and logo are based on this dimension concept: entitlement assignment is
governed by users' attributes defined as dimensions. Let's schematize users around these dimensions:

- The schema for this with one dimension would be a line with all available values for the
  dimension, and identities are distributed along the line.
- The schema with two dimensions would be a table, a square.
- The schema with three dimensions would be a 3D cube. And you can imagine 4D or 5D hypercubes, etc.

![Dimensions - 1D](/img/product_docs/identitymanager/identitymanager/introduction-guide/overview/entitlement-management/entitlements_dimension1.webp)

#### 1D

![Dimensions - 2D](/img/product_docs/identitymanager/identitymanager/introduction-guide/overview/entitlement-management/entitlements_dimension2.webp)

#### 2D

![Dimensions - 3D](/img/product_docs/identitymanager/identitymanager/introduction-guide/overview/entitlement-management/entitlements_dimension3.webp)

## Next Steps

See the [Governance](/docs/identitymanager/6.2/access-governance/index.md) topic for additional information.

## Learn More

Learn more on the [ Role Model ](/docs/identitymanager/6.2/access-governance/role-management/role-model.md).

Learn how to
[ Create Roles in the Role Catalog ](/docs/identitymanager/6.2/reference/index.md).

Learn more on hoe to
[Create a Composite Role](/docs/identitymanager/6.2/reference/index.md).

Learn more on [Role Assignment](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md).

Learn more on
[ Create a Provisioning Rule ](/docs/identitymanager/6.2/reference/index.md).

Learn more on
[ Automate Role Assignments ](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md)
rules.

Learn more on the rules of
[ Categorize Resources ](/docs/identitymanager/6.2/reference/index.md).

# IGA and Netwrix Identity Manager

Identity Manager is a powerful tool for Identity Governance and Administration (IGA) automation.

## Identity Governance and Administration (IGA)

Identity Governance and Administration (IGA) is a combination of Identity Access Management (IAM)
and Identity Access Governance (IAG).

- IAM is about allowing the right identities to have the right permissions at the right time for the
  right reasons.
- IAG is about providing visibility regarding identities, user access, and for monitoring
  compliance.

[See Gartner's documentation on IGA](https://www.gartner.com/en/documents/3885381).

## Why Identity Manager

We could explain Identity Manager's purpose like this:

Typically, Identity Manager manages entitlements automatically according to a user's needs, for
example Active Directory group memberships.

---

**First, we need to manage identities.**

To do so, Identity Manager capitalizes on information from several source systems in order to build
a central repository. This repository should contain all the organizational data relevant for access
management for all users, meaning not only employees but also contractors, bots, or any kind of
identity.

![Synchronization](/img/product_docs/identitymanager/identitymanager/introduction-guide/overview/overview_synchronization.webp)

**This implies involving external systems.**

Access management requires reading/writing data to/from varied systems and applications, like the
Active Directory. Identity Manager provides an expanded set of connectors which contain the
technology required for IGA-related data flows.

![Connectors](/img/product_docs/identitymanager/identitymanager/introduction-guide/overview/overview_connectors.webp)

See more details on [ Identity Management ](/docs/identitymanager/6.2/identity-management/index.md) and connection between
systems.

---

**Then, we need to manage entitlements, in other words access rights, or permissions.**

Identity Manager helps you build a role catalog that lists all entitlements from all managed
systems. The technical entitlements can then associated with new, functional names that more clearly
represent a business-oriented view point.

In addition, Identity Manager helps you determine identities' expected entitlements by building a
role model. This model contains different kinds of rules that will suggest entitlement assignments,
or even assign them directly, based on the imported organizational data.

As each working environment has its own particularities, you will be able to refine the identity
model by defining dimensions, i.e. criteria from among organizational data that will trigger the
rules.

![Calculation](/img/product_docs/identitymanager/identitymanager/introduction-guide/overview/overview_calculation.webp)

---

**Finally, we need to actually give identities their entitlements and then govern them.**

Identity Manager can be configured to provision the managed systems in order to apply the changes
dictated by the role model. This provisioning can be done either directly, with automatic
provisioning, or by notifying system administrators of the needed changes. Thus, identities finally
get their entitlements.

![Provisioning](/img/product_docs/identitymanager/identitymanager/introduction-guide/overview/overview_provisioning.webp)

Furthermore, Identity Manager provides a few workflows for entitlement request or user data
modification, which often include approval from a third party, hence identities get their
entitlements securely.

See the [ Entitlement Management ](/docs/identitymanager/6.2/reference/index.md) topic for additional
information.

Thanks to the role model and data flows between Identity Manager and the managed systems, Identity
Manager ensures the compliance of existing permission assignments with the policy, pointing out
non-conforming assignments.

See the [Governance](/docs/identitymanager/6.2/access-governance/index.md) topic for additional information.

## Examples

Let's read some [ Use Case Stories ](/docs/identitymanager/6.2/reference/index.md).

# Use Case Stories

Here is a basic use case story to explain how Identity Manager manages IGA.

## Use Case

Mr. James was just hired to join the Contoso company as a mechanical engineer. He will need access
to some of the company's most sensitive data, such as confidential blueprints, mechanical design
software licenses, and source files.

### Identity management

The central repository already exists, containing all workers, all departments, etc.

Mr. James' manager uses one of Identity Manager's workflows to add Mr. James as a new employee,
filling in his first name, last name, job title ("Mechanical Engineer"), his contract type
("permanent") and his start date.

The rest of Mr. James' personal information, such as his birth date, etc., can be filled later by
someone from the HR department.

### Entitlement management

As Mr. James is not the first mechanical engineer in Contoso, Identity Manager already contains a
composite role named "R&D Mechanical Engineer". This role is meant to give its owners access to the
company's sensitive data useful for mechanical engineers. Assigning this role will trigger the
assignment of several single roles, each one giving one access right.

Technically speaking, each access right is granted via a membership to a specific Active Directory
group. Thus Identity Manager also contains a navigation rule that gives this group membership to any
user owning this single role.

In our example, each access right corresponds to an AD group membership, but it could be any
entitlement in any external system.

For Mr. James to get the access rights that he needs, there are several options:

- either Mr. James' manager manually assigns the "R&D Mechanical Engineer" role to him via a
  workflow before his arrival, for example setting the start date to two weeks after Mr. James'
  first day as he will be in training before then;
- or there may be an assignment rule that automatically assigns the role to any user with the job
  title "Mechanical Engineer", so Mr. James will get the role on his first day.

As the needed access rights involve the AD, Mr. James also needs to own an AD account which will be
linked to its identity in Identity Manager via correlation rules.

Once the requests for the role and the account are approved, Identity Manager can connect to the
Active Directory and create Mr. James' account and add it to the proper groups, via provisioning
rules.

### Governance

Once the role model is well underway, Identity Manager can compare existing access rights to
expected access rights. Thus, Identity Manager makes sure that Mr. James always has all the
entitlements he needs in order to work, but not more to prevent security breaches.

## Next Steps

Let's learn about Identity Manager [ Architecture ](/docs/identitymanager/6.2/reference/index.md).

# Migration Guide

This guide is designed to provide step-by-step procedures in order to migrate Identity Manager from
your current version to the latest one.

**NOTE:** For the latest SaaS versions, if you are using the administrator scaffolding the necessary
permissions for the update are added to the administrator scaffolding and they will be taken into
account the next time the configuration is deployed.

## General Upgrade Instructions for the Server with Integrated Agent

**Step 1 –** Download the `usercube-server-runtime` from the expected version from
[](https://extranet.usercube.com/)[Netwrix Portal](https://www.netwrix.com/sign_in.html?rf=my_products.html).

**Step 2 –** Stop the existing server.

**Step 3 –** Rename the `Runtime` folder to create a backup, for example `RuntimeOld`.

**Step 4 –** Extract the content of the new `Runtime`to the same folder as `RuntimeOld`, inside a
new `Runtime` folder.

**Step 5 –** Copy the original `appsettings.json` and `appsettings-agent.json` files from
`RuntimeOld` to the new `Runtime`.

**Step 6 –** Restart the server.

## General Upgrade Instructions for the Agent

**Step 1 –** Download the `usercube-agent-runtime` from the expected version from
[](https://extranet.usercube.com/)[Netwrix Portal](https://www.netwrix.com/sign_in.html?rf=my_products.html).

**Step 2 –** Stop the existing agent.

**Step 3 –** Rename the `Runtime` folder to create a backup, for example `RuntimeOld`.

**Step 4 –** Extract the content of the new `Runtime`to the same folder as `RuntimeOld`, inside a
new `Runtime` folder.

**Step 5 –** Copy the original `web.config, appsettings.json` and `appsettings-agent.json` files
from `RuntimeOld` to the new `Runtime`.

**Step 6 –** Restart the agent.

## Specific Information to Migrate from v6.1 to v6.2

If you are looking to upgrade the Netwrix Identity Manager version from 6.1 to 6.2 you will not need
to take any action because the database will automatically be upgraded. If you have problems
importing your configuration into 6.2 related to C# expressions, please run the Identity
Manager-Check-ExpressionsConsistency tool. See the
[Usercube-Check-ExpressionsConsistency](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)
topic for additional information.

## Specific Information to Migrate from v6.0 to v6.1

If you are looking to upgrade the Netwrix Identity Manager version from 6.0 to 6.1 you will not need
to take any action because the database will automatically be upgraded.

# Execute a Certification Campaign

How to execute access certification campaigns, i.e. review specific entitlement assignments and
deprovision inappropriate access.

## Overview

The aim of an access certification campaign is to review specific entitlement assignments for
specific identities, in order to certify them and express an audit opinion that justifies their
necessity.

Once certification campaigns are scheduled, the assigned reviewers must decide for all relevant
assignments if they ought to be deleted or not.

## Participants and Artifacts

The execution part should be performed in cooperation with the staff who review access in the
campaign scheduling.  
 The monitoring part should be performed in cooperation with the staff in charge of campaign
scheduling.

| Input                                                                                          | Output           |
| ---------------------------------------------------------------------------------------------- | ---------------- |
| [ Schedule a Certification Campaign ](/docs/identitymanager/6.2/reference/index.md) (required) | Certified access |

## Execute Certification

Execute certification by proceeding as follows:

1. Access the ongoing campaigns by clicking on the **Access Certification** section on the home
   page.

   ![Home - Access Certification](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/home_accesscertification_v523.webp)

   On this page, all assignments to be reviewed are listed.

   ![Access Certification](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_accesscertification_v602.webp)

   Each assignment can be commented by clicking on the corresponding icon.

   ![Comment Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_iconcomment_v522.svg)

2. Choose one of the three possibilities to verify all assignments one by one:

   In order to help reviewers in the decision-making process, each assignment shows a
   recommendation icon, indicating whether said assignment complies with the role model.

   See the icons below this note.

   The Recommended icon indicates that the entitlement has been automatically granted according to
   the security policy. You can approve it because it is compliant.  
   The Not Recommended icon indicates that the entitlement does not comply with the security
   policy. It is recommended to refuse it, unless the user really needs it.

   An absence of any icon indicates that the entitlement does not comply with the security policy.
   However, it has been manually granted or denied. Thus there is no recommendation, please review
   this entitlement carefully.

   ![Recommendation Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_iconrecommendation_v522.svg)

   ![Discouragement Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_icondiscouragement_v522.svg)

   - Either click on the approval icon to confirm that this entitlement is necessary for this
     identity.

   ![Approval Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_iconapproval_v522.svg)

   - Or click on the decline icon to confirm that this entitlement is not necessary for this
     identity.

   ![Decline Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connection-creation/certifcampaign_icondecline_v522.svg)

   - Or click on the three dots icon to highlight that this entitlement is not part of your scope
     of responsibility and forward it to the adequate person.

   ![Forward Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_iconforward_v522.svg)

3. Click on **Confirm Decisions** on the left of the page.

   If you've made an erroneous decision, exiting the page before confirming offers the possibility
   to quit without saving and start over from the last confirm.

## Monitor a Certification Campaign

Existing certification campaigns are listed on the page accessible via the **Access Certification
Campaigns** button on the home page in the **Administration** section.

![Home - Access Certification Campaigns](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/home_accesscertificationcampaigns_v602.webp)

![Campaigns Page](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_campaigns_v602.webp)

### Get reports

A **Download** button is available for each campaign. It downloads a CSV report that lists all the
entitlement assignments to be reviewed, the corresponding reviewers and their decisions.

![Report Example](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_decisions_v522.webp)

### Send notifications

The notification icon on the line of a given campaign offers the possibility to send reminder
notifications to the staff who has not finished processing the campaign.

### Generate provisioning orders

Once entitlement assignments have been reviewed, the final step is to apply these decisions.

An **Apply Decisions** button is available for each campaign. It shows all the decisions made in the
campaign. The campaign administrator can then decide to actually apply said decisions and generate
the appropriate provisioning orders for deprovisioning unjustified entitlements. Said orders will be
considered during the next provisioning job.

![Apply Decisions](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_applydecisions_v602.webp)

# Schedule a Certification Campaign

How to create and schedule access certification campaigns, defining their scope.

## Overview

The aim of an access certification campaign is to review specific access and entitlements for
specific identities, in order to certify them and express an audit opinion that justifies their
necessity.

Here, you will learn how to create and schedule a certification campaign, defining its scope via the
filters specifying the reviewers and items to be reviewed.

## Participants and Artifacts

This operation should be performed in cooperation with the staff in charge of auditing, because they
know what entitlements need to be reviewed.

| Input                                                                                                                                                                                                                                                                    | Output                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| [Create the Workforce Repository](/docs/identitymanager/6.2/reference/index.md) (required)<br />[Create Roles in the Role Catalog](/docs/identitymanager/6.2/reference/index.md) (optional)<br />[Manage Risks](/docs/identitymanager/6.2/reference/index.md) (optional) | Scheduled certification campaign(s) |

## Create a Certification Campaign

Create an access certification campaign by proceeding as follows:

1. Click on **Access Certification Campaigns** in the **Administration** section on the home page.

   ![Home - Access Certification Campaigns](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/home_accesscertificationcampaigns_v602.webp)

2. Click the addition button at the top right and fill in the fields:

   ![Addition Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

   ![New Certification Campaign](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_newcertificationcampaign_v602.webp)

   - `Identifier`: Must be unique among campaigns, without whitespace.
   - `Name`: Displayed in the UI to identify the campaign.
   - `Start Date`: Determines the access snapshot that will be reviewed. Only permissions existing
     at this date will be included.
   - `End Date`: Campaign deadline.
   - `Target Entity Type`: Entity type the campaign targets.
   - `Target Reviewers`: Identities responsible for the review, configured via
     [Access Certification policies](/docs/identitymanager/6.2/access-governance/access-certification/index.md).
   - `Target Specificities`:
     [AccessCertificationDataFilter](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
     that define what permissions to include (object type, category, approval state, etc.). The
     campaign scope is a **union** of all specificities.

     ![Target Specificities](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_targetspecificities_v602.webp)

     The campaign targets permissions that meet the **intersection (AND)** of all filters. When
     using role tags, roles with **any** of the listed tags are included (**OR** logic).

   - `Target Owners`: Filters based on identity dimensions. These are combined using **AND** logic.

     ![Target Owner Filters](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_targetowners_v602.webp)

     Additional filters may be available depending on the selected entity type:

     ![Target Owner Additional Filters](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_targetownersadditional_v603.webp)

     - `Individual Owner`: A single identity whose access will be certified.
     - `Active Target`: Identities for which a specific property (from `Directory_UserRecord`)
       was modified since a given date.

       > Only properties **not calculated** by Identity Manager can be used to filter target
       > owners.

       > Example: The following campaign certifies all single roles assigned to two specific
       > users:
       >
       > ![Campaign Example](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_example_v602.webp)

3. Click **Create**. The campaign appears in the list.

   ![Campaigns Page](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_newlycreated_v603.webp)

4. Click **Launch** to apply the changes and start the certification job.

   Logs for this job are available via the **Job Results** button.

   > Example:
   >
   > ![Execute Access Reviews Job](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_job_v522.webp)

## Impact of Modifications

You can modify any field in a certification campaign **before its start date**.  
After it begins, only the name, identifier, and end date can be changed.  
You may delete the campaign at any time.

## Verify Campaign Scheduling

To verify the setup, go to the **Access Certification Campaigns** page and check that the created
campaign has the correct parameters.

# Perform Access Certification

How to certify existing access by reviewing a specific range of assigned permissions for auditing
purposes.

## Overview

The aim of an access certification campaign is to review specific entitlement assignments for
specific identities, in order to certify them and express an audit opinion that justifies their
necessity. So, for all relevant permissions, the idea is to specify if these assignments ought to be
deleted or not.

There are several ways to arrange an access certification campaign. Among others, through filters
you can choose to focus on:

- a certain category of roles;
- a certain type of assignment;
- assignments not certified since a certain date;
- assignments presenting a certain level of risk.

Certification campaigns can be
[Access Certification](/docs/identitymanager/6.2/access-governance/access-certification/index.md) but the
UI described in this guide can be enough on its own.

## Participants and Artifacts

This operation should be performed in cooperation with the staff in charge of auditing because they
know which entitlements need to be reviewed.

| Input                                                                                                                                                                                                                                                              | Output           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| [ Create the Workforce Repository ](/docs/identitymanager/6.2/reference/index.md) (required) [ Create Roles in the Role Catalog ](/docs/identitymanager/6.2/reference/index.md)(optional) [ Manage Risks ](/docs/identitymanager/6.2/reference/index.md)(optional) | Certified access |

## Perform Access Certification

Perform access certification by proceeding as follows:

1. [ Schedule a Certification Campaign ](/docs/identitymanager/6.2/reference/index.md).
2. [ Execute a Certification Campaign ](/docs/identitymanager/6.2/reference/index.md).

# Review Assigned Roles

How to review user permissions grouped by categories.

**NOTE:** **Assigned Roles** is currently in a preview state and additional functionality will be
added in a future release.

## Overview

The **Assigned Roles** section displays a list of the users permissions grouped by categories. This
screen is visible for managers and displays the list of employees part of the team, their roles and
permissions.

You can review all assigned single roles by category. Through filters you can choose to focus on:

- **Entity Type**
- **Workflow State**
- **Policy**
- **Role**
- Other custom filters

## Participants and Artifacts

This operation should be performed by a user with the right permissions. See the
[ Configure a User Profile ](/docs/identitymanager/6.2/reference/index.md) topic for additional
information.

The following example provides the rights for the Administrator profile to see the Assigned Roles
page on the **Entity Type** directory user. See the
[ Create a Provisioning Rule ](/docs/identitymanager/6.2/reference/index.md) and
[ Create Roles in the Role Catalog ](/docs/identitymanager/6.2/reference/index.md) topics for
additional information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AssignedRolesAccessControlRules EntityType="Directory_User" Profile="Administrator" />
```

## Review Assigned Roles

Review the Assigned Roles by proceeding as follows:

![assignedroles](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/assigned-roles/assignedroles.webp)

**Step 1 –** On the home page, in the Administration section of the UI click on Assigned Roles.

![assignedrolesscreen](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/assigned-roles/assignedrolesscreen.webp)

**Step 2 –** View the list of users with different assigned roles and filter them by **Entity
Type**, **Workflow State**, **Policy**, **Role** or by using a custom filter.

**Step 3 –** Download an .xlsx file list of the **Assigned Roles** users according to the selected
filters.

Revisit the **Assigned Roles** section any time you need to review the information related to
Assigned roles.

# Administrate

In the Admin section you can do the following:

- [ Generate Reports ](/docs/identitymanager/6.2/reference/index.md)

  How to use Identity Manager's reporting modules to produce IGA reports for auditing and
  governance purposes.

- [Review Orphaned and Unused Accounts](/docs/identitymanager/6.2/reference/index.md)

  How to remediate license and security issues caused by orphaned and/or unused accounts.

- [Provision](/docs/identitymanager/6.2/identity-management/provisioning/index.md)

  How to write to a managed system.

- [ Review Provisioning ](/docs/identitymanager/6.2/reference/index.md)

  How to review provisioning orders before generation.

- [ Provision Manually ](/docs/identitymanager/6.2/identity-management/provisioning/index.md)

  How to use Identity Managerto manually write to the managed systems.

- [ Provision Automatically ](/docs/identitymanager/6.2/identity-management/provisioning/index.md)

  How to use Identity Manager to automatically write to the managed systems.

- [ Review Non-conforming Assignments ](/docs/identitymanager/6.2/reference/index.md)

  How to review non-conforming assignments, i.e. approve or decline the suggestions made by
  Identity Manager after every synchronization. The aim is to handle the differences between the
  values from the managed systems and those computed by Identity Manager's role model.

- [ Reconcile a Role ](/docs/identitymanager/6.2/reference/index.md)

  How to review non-conforming permissions, i.e. approve or decline the role suggestions made by
  Identity Manager after every synchronization. The aim is to handle the differences between the
  navigation values from the managed systems and those computed by Identity Manager according to
  the role catalog.

- [ Reconcile a Property ](/docs/identitymanager/6.2/reference/index.md)

  How to review unreconciled properties. The aim is to handle the differences between the property
  values from the managed systems and those computed by Identity Manager according to provisioning
  rules.

- [ Review an Unauthorized Account ](/docs/identitymanager/6.2/reference/index.md)

  How to remediate unauthorized accounts. The aim is to review the accounts whose assignments
  don't comply with the rules of the role model.

- [ Perform Access Certification ](/docs/identitymanager/6.2/reference/index.md)

  How to certify existing access by reviewing a specific range of assigned permissions for
  auditing purposes.

- [ Schedule a Certification Campaign ](/docs/identitymanager/6.2/reference/index.md)

  How to create and schedule access certification campaigns, defining their scope.

- [ Execute a Certification Campaign ](/docs/identitymanager/6.2/reference/index.md)

  How to execute access certification campaigns, i.e. review specific entitlement assignments and
  deprovision inappropriate access.

- [ Request Entitlement Assignment ](/docs/identitymanager/6.2/reference/index.md)

  How to send a manual request to add, update or remove an entitlement for an identity.

- [Review Assigned Roles](/docs/identitymanager/6.2/reference/index.md)

  How to review user permissions grouped by roles.

# Request Entitlement Assignment

How to send a manual request to add, update or remove an entitlement for an identity.

## Overview

Changes in an identity's entitlements can be handled using Identity Manager's predefined workflows
to:

- View the list of the identity's Request Entitlement Assignment with Identity Manager's suggestions
  according to the identity's position;
- Modify the identity's Request Entitlement Assignment (add, update, remove).

## Participants and Artifacts

An assignment can be requested for a user sometimes by said user themselves, most often by their
manager, and on some occasions by the involved application owner.

| Input                                                                                                                                                                                      | Output               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- |
| [ Create the Workforce Repository ](/docs/identitymanager/6.2/reference/index.md) (required) [ Create Roles in the Role Catalog ](/docs/identitymanager/6.2/reference/index.md) (required) | Updated entitlements |

## View Identity's Entitlements

View the identity's entitlements by proceeding as follows:

1. Access the user directory from the home page.

   ![Home Page - Directory User](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Click on the user to be checked.

   ![Workflow - User](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/manual-assignment-request/datamodif_user_v602.webp)

3. Click on **View Permissions** to access the entitlement list.

   ![View Permissions Tab](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

## Modify Identity's Entitlements

Act on an existing identity by proceeding as follows:

1. Access the user directory from the home page.

   ![Home Page - Directory User](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Click on the user to be modified.

   ![Workflow - User](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/manual-assignment-request/datamodif_user_v602.webp)

3. Click on **Actions** > **Modify Permissions** to launch the workflow for a manual entitlement
   request.

   ![Workflow - Modify Permissions](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/manual-assignment-request/datamodif_changeuser_v602.webp)

4. Follow the workflow's instructions to select entitlements and the action to be performed. You
   can:

   - select entitlements to add;
   - modify the potential options of the entitlements you are adding;
   - delete entitlements which were assigned or declined manually;
   - deny entitlements which were assigned automatically;
   - allow denied entitlements by assigning them back manually.

   If the request is about assigning an entitlement via a role which requires at least one
   approval, then sending the request triggers the display of said request on the **Role Review**
   screen.

   ````
   <img
     src="/buttons/Home_roleReview_V523.webp"  alt="Home Page - Role Review"  style=""/>

   ```In this case, the requested entitlement will be displayed in the user's \*\*View Permissions\*\* tab only after the request is reviewed.
   ````

## Verify Entitlement Request

In order to verify the process, check that the change you made in the user's entitlements is
displayed in their **View Permissions** tab in the directory.

![Home Page - Directory User](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

![View Permissions Tab](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

# Review Non-conforming Assignments

How to review non-conforming assignments, i.e. approve or decline the suggestions made by Identity
Manager after every synchronization. The aim is to handle the differences between the values from
the managed systems and those computed by Identity Manager's role model.

## Overview

Integrators must review three main types of non-conforming entitlement assignments:

- Non-conforming roles: Identity Manager finds roles assigned to users in the managed systems that
  no rule in the role model can justify.
- Unreconciled properties: Identity Manager's role model computes property values that are different
  from the values in the managed systems.
- Unauthorized accounts: no rule from the role model can justify their actual assignment to an
  identity.

Unreconciled properties, unauthorized accounts and non-conforming roles are part of
[Non-Conforming Assignments](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md).
The global aim of the review is to handle the gaps between the
[ Existing Assignments ](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md)
(real values) and the
[ Conforming Assignments ](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md)
(theoretical values computed by Identity Manager from the role model rules).

A high number of non-conforming assignments can come from an issue in configuration rules.

Non-conforming roles and unauthorized accounts can be mass reviewed through
[Automate the Review of Non-conforming Assignments](/docs/identitymanager/6.2/reference/index.md).

## Participants and Artifacts

This operation should be performed in cooperation with application owners who are in charge of
applications' entitlements (technical side), and/or managers who know their team's entitlements
(functional side).

| Input                                                                                                                                                              | Output                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- |
| [](/docs/identitymanager/6.2/identity-management/provisioning/index.md)[Provision](/docs/identitymanager/6.2/identity-management/provisioning/index.md) (required) | Complying assignments |

### Pre-existing assignments vs. non-conforming assignments

The assignments specified as non-conforming during the very first execution of the role model are
called pre-existing assignments. Pre-existing assignments are tagged differently from other
non-conforming assignments by the
[ Save Pre-Existing Access Rights Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
because they can indicate that:

- The rules are not optimal yet.
- Data in the managed system needs more cleanup.

Obviously, pre-existing assignments can also prove to be exceptions to the rules, like
non-conforming assignments, and need to be validated as such.

## Review Non-conforming Assignments

While there can be dependencies between the review of non-conforming roles and unreconciled
properties, there are no absolute requirements regarding the sequential order of the non-conforming
assignment review:

- Review [ Reconcile a Role ](/docs/identitymanager/6.2/reference/index.md).
- Review [ Reconcile a Property ](/docs/identitymanager/6.2/reference/index.md).
- [ Review an Unauthorized Account ](/docs/identitymanager/6.2/reference/index.md).

[ Manage Risks ](/docs/identitymanager/6.2/reference/index.md) can be defined to highlight the most
sensitive accounts/permissions, in order to establish a priority order in the review of
non-conforming assignments.

# Reconcile a Property

How to review unreconciled properties. The aim is to handle the differences between the property
values from the managed systems and those computed by Identity Manager according to
[ Create a Provisioning Rule ](/docs/identitymanager/6.2/reference/index.md).

## Overview

Unreconciled properties are considered as non-conforming assignments because Identity Manager's role
model has computed property values that are different from the values in the managed systems.

### Property reconciliation with role reconciliation

For some managed systems, roles are tightly linked to navigation properties.

> For example, the AD hosts groups for various applications, and a role is assigned through a group
> membership. An entitlement can be assigned to an identity by adding said identity's DN to the
> `member` property of the appropriate group. Identity Manager translates it by editing the
> identity's `memberOf` property with the new group.

In this case, when a role is assigned in the managed system without an existing rule that justifies
the role, then new items appear on the **Role Reconciliation**and the **Resource Reconciliation**
screens.

> In the case of the AD example, consider that we want to assign a specific role in SAP. Then, we
> find the corresponding group in the AD and add the identity's DN to its `member` property.
>
> The result is a new item on the **Role Reconciliation** screen for said SAP role, plus an item on
> the **Resource Reconciliation** screen for the new `memberOf` property for said identity.
>
> If the identity didn't have an AD account yet, then it is automatically created, and the item on
> the **Resource Reconciliation** screen displays also a modification of the `accountExpires`
> property.

As roles and navigation properties are technically bonded together, their reviews are linked too:

- If the role is reviewed (approved/declined), then the corresponding property is automatically
  reconciled accordingly.
- If the property is reviewed (approved/declined), then the corresponding role is automatically
  reviewed too, its workflow state transitioned to `Manual` (if approved) or `Cancellation` (if
  declined, then a deprovisioning order is sent).

> So let's say we add `Cedric Blanc` to the list of members of the SAP groups `SG_APP_SAP_1` and
> `SG_APP_SAP_211`. Then, after the next synchronization, Identity Manager displays one item for
> each role on the **Role Reconciliation** screen, and one item for all changes in the AD account on
> the **Resource Reconciliation** screen:
>
> ![Example - Role Reconciliation](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/reviewrole_examplerole_v602.webp)
>
> ![Example - Resource Reconciliation](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/reviewrole_exampleresource_v602.webp)
>
> ![Example - Resource Reconciliation - Properties](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/reviewrole_exampleresourceprop_v602.webp)

## Participants and Artifacts

This operation should be performed in cooperation with application owners in charge of applications'
entitlements.

| Input                                                                                       | Output               |
| ------------------------------------------------------------------------------------------- | -------------------- |
| [Provision](/docs/identitymanager/6.2/identity-management/provisioning/index.md) (required) | Complying properties |

## Review an Unreconciled Property

Review an unreconciled property by proceeding as follows:

1. Ensure that the task for the computation of the role model was launched recently, through the
   complete job on the **Job Execution** page�

   ![Home Page - Job Execution](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/home_jobexecution_v602.webp)

   � Or through the connector's overview page, **Jobs** > **Compute Role Model**.

   ![Resource Type Jobs](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

2. Get to the **Resource Reconciliation** page, accessible from the corresponding section on the
   home page.

   ![Home Page - Resource Reconciliation](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/home_resourcereconciliation_v523.webp)

3. Select `Unreconciled properties` as a `Workflow State`.

   ![Unreconciled Property](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/reviewprop_unreconciled_v522.webp)

4. Choose the default resource view or the property view with the top right toggle. See the
   Reconcile a Property topic for additional information.
5. Select a property to review.

   > In the following example, the user `Nicolas Faure` is the owner of a given resource, here a
   > nominative SAB account associated with his email address. In the **Resource Properties to be
   > Verified** frame, there is one unreconciled property that happens to be `Group`.
   >
   > ![Unreconciled Property Example](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/reviewprop_example_v602.webp)

   - `Name`: unreconciled property name.
   - `Proposed Value`: value proposed by Identity Manager.
   - `Current Value`: value currently in the managed system.
   - `Provisioning State`: provisioning state.
   - `Start Date`: date for the beginning of the property value existence.
   - `End Date`: date for the end of the property value existence.

   The **Other Resource Properties** frame shows the complying properties associated with the
   resource.

6. Choose one of the three possibilities to verify the property:

   Decisions must be made with caution as they cannot be undone.

   - Either click on the approval icon to update the property with the proposed value. It discards
     the whole property history.

     ![Addition Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconapprove_v602.svg)

     ![Edition Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconedit_v602.svg)

     ![Deletion Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/reviewrole_icondelete_v602.svg)

     Automatic changes are essential for frequently-changing attributes. However, saving history
     information can sometimes be important for some attributes such as logins and emails.

   - Or click on the decline icon to not update the property and keep the resource value. In the
     future, this property will no longer be changed automatically.

     ![Decline Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_icondecline_v522.svg)

     Retaining manual control of changes for sensitive data (i.e. `SAMAccountName`) can be of
     interest. Identity Manager won't be able to change this data and the service account manager
     will avoid authentication errors. It can be interesting to keep manual some sensitive data
     changes like `SAMAccountName` for example, so that Identity Manager does not change it and
     the service account manager does not risk problems in authentication.

   - Or click on the postponement icon to delay the decision. An unreconciled property is ignored
     by Identity Manager, and therefore cannot be modified.

     ![Postponement Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconpostpone_v522.svg)

7. Click on **Confirm Property Values**.
8. Trigger provisioning by launching, on the appropriate connector's overview page, **Jobs** >
   **Generate Provisioning Orders**, then, after this first task is done, **Jobs** > **Fulfill**.

   ![Resource Type Jobs](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

### Use property view

By default, non-conforming assignments are listed by resource. It is possible to click on a resource
and then access the list of all unreconciled properties for said resource.

![Resource View](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_resourceview_v523.webp)

It can be helpful to have the non-conforming assignments regrouped by property, as some of the
changes can be similar, so very likely to be validated by the same user. This is why a property view
can be enabled by clicking on the `Property View` toggle at the top right corner.

Once enabled, select a resource type to display all unreconciled properties linked to said resource
type. In addition, select a property to display only the unreconciled properties linked to said
resource type and property.

![Property View](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_propertyview_v603.webp)

The review process is the same with both views. However with property view, reviewers don't click on
a given line, but choose a decision directly on the left of the property line.

In addition, using property view enables bulk reconciliation to approve the proposed values or keep
the current values for several resources simultaneously.

![Bulk Reconcile](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_bulkreconcile_v603.webp)

## Verify Property Reconciliation

In order to verify the process, check that the changes you ordered appear on the corresponding
user's page in the directory.

# Reconcile a Role

How to review non-conforming permissions, i.e. approve or decline the role suggestions made by
Identity Manager after every synchronization. The aim is to handle the differences between the
navigation values from the managed systems and those computed by Identity Manager according to the
role catalog.

## Overview

Non-conforming roles are considered as non-conforming assignments because no rule from Identity
Manager's model can justify their actual assignment to an identity.

### Role reconciliation with property reconciliation

For some managed systems, roles are tightly linked to navigation properties.

> For example, the AD hosts groups dedicated to various applications, and a role is assigned through
> group membership. An entitlement can be assigned to an identity by adding said identity's DN to
> the `member` property of the appropriate group. Identity Manager translates it by editing the
> identity's `memberOf` property with the new group.

In this case, when a role is assigned in the managed system without an existing rule that justifies
the role, then new items appear on the **Role Reconciliation**and the **Resource Reconciliation**
screens.

> In the case of the AD example, consider that we want to assign a specific role in SAP. Then, we
> find the corresponding group in the AD and add the identity's DN to its `member` property.
>
> The result is a new item on the **Role Reconciliation** screen for said SAP role, plus an item on
> the **Resource Reconciliation** screen for the new `memberOf` property for said identity.
>
> If the identity didn't have an AD account yet, then it is automatically created, and the item on
> the **Resource Reconciliation** screen displays also a modification of the `accountExpires`
> property.

As roles and navigation properties are technically bonded together, their reviews are linked too:

- If the role is reviewed (approved/declined), then the corresponding property is automatically
  reconciled accordingly.
- If the property is reviewed (approved/declined), then the corresponding role is automatically
  reviewed too, its
  [Entitlement Assignment](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md)
  workflow state transitioned to `Manual` (if approved) or `Cancellation` (if declined, then a
  deprovisioning order is sent).

> So let's say we add `Cedric Blanc` to the list of members of the SAP groups `SG_APP_SAP_1` and
> `SG_APP_SAP_211`. Then, after the next synchronization, Identity Manager displays one item for
> each role on the **Role Reconciliation** screen, and one item for all changes in the AD account on
> the **Resource Reconciliation** screen:
>
> ![Example - Role Reconciliation](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/reviewrole_examplerole_v602.webp)
>
> ![Example - Resource Reconciliation](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/reviewrole_exampleresource_v602.webp)
>
> ![Example - Resource Reconciliation - Properties](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/non-conforming-assignment-review/property-reconciliation/reviewrole_exampleresourceprop_v602.webp)

## Participants and Artifacts

This operation should be performed in cooperation with managers who know their team's expected
entitlements.

| Input                                                                                       | Output          |
| ------------------------------------------------------------------------------------------- | --------------- |
| [Provision](/docs/identitymanager/6.2/identity-management/provisioning/index.md) (required) | Complying roles |

## Review a Non-conforming Permission

Review a non-conforming permission by proceeding as follows:

1. Ensure that the
   [ Compute Role Model Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
   was launched recently, through the complete job on the **Job Execution** page

   ![Home Page - Job Execution](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/home_jobexecution_v602.webp)

   � Or through the connector's overview page, **Jobs** > **Compute Role Model**.

   ![Resource Type Jobs](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

2. On the home page, click on the entity type that you want to manage in the **Role Reconciliation**
   section, to get to the non-conforming permissions page.

   ![Home Page - Role Reconciliation](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/non-conforming-assignment-review/role-reconciliation/home_rolereconciliation_v523.webp)

   ![Role Reconciliation Page](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/non-conforming-assignment-review/role-reconciliation/reviewrole_rolereconciliation_v603.webp)

   Each non-conforming permission can be commented by clicking on the corresponding icon.

   ![Comment Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/access-certification/certification-campaign-execution/certifcampaign_iconcomment_v522.svg)

3. Choose one of the two possibilities to verify the permission:

   Contrary to resources, reviewed roles are then displayed on the **Role Review** page accessible
   from the home page, and can be reviewed again.

   - Either click on the approval icon to keep the non-conforming permission.

   ![Approval Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/non-conforming-assignment-review/role-reconciliation/orphan_iconapprove_v602.svg)

   - Or click on the decline icon to delete the non-conforming permission.

   ![Decline Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/non-conforming-assignment-review/role-reconciliation/orphan_icondecline_v522.svg)

4. Trigger [provisioning](/docs/identitymanager/6.2/identity-management/provisioning/index.md) by launching, on the appropriate connector's
   overview page, **Jobs** > **Generate Provisioning Orders**, then, after this first task is done,
   **Jobs** > **Fulfill**.

   ![Resource Type Jobs](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

### Use bulk provisioning

Several roles can be reconciled simultaneously by clicking on **Bulk Reconcile Roles**.

![Bulk Reconcile Roles](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/non-conforming-assignment-review/role-reconciliation/reviewrole_rolereconciliationbulk_v603.webp)

## Verify Role Reconciliation

In order to verify the process, check that the changes you ordered appear on the corresponding
user's **View Permissions** tab.

![View Permissions Tab](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

# Review an Unauthorized Account

How to remediate unauthorized accounts. The aim is to review the accounts whose assignments don't
comply with the rules of the role model.

## Overview

Unauthorized accounts are considered as non-conforming assignments because no rule from Identity
Manager's model can justify their actual assignment to an identity.

## Participants and Artifacts

This operation should be performed in cooperation with application owners in charge of applications'
entitlements.

| Input                                                                                       | Output             |
| ------------------------------------------------------------------------------------------- | ------------------ |
| [Provision](/docs/identitymanager/6.2/identity-management/provisioning/index.md) (required) | Complying accounts |

## Review an Unauthorized Account

Review an unauthorized account by proceeding as follows:

1. Ensure that the
   [ Compute Role Model Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
   was launched recently, through the complete job on the **Job Execution** page:

   ![Home Page - Job Execution](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/home_jobexecution_v602.webp)

   Or through the connector's overview page, **Jobs** > **Compute Role Model**.

   ![Resource Type Jobs](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

2. Get to the **Resource Reconciliation** page, accessible from the corresponding section on the
   home page.

   ![Home Page - Resource Reconciliation](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/home_resourcereconciliation_v523.webp)

3. Select `Unauthorized account` as the `Workflow State`. Orphaned accounts appear with no owner.

   ![Resource Reconciliation Page](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/unauth_unauthorizedaccounts_v602.webp)

4. Choose the default resource view or the Review an Unauthorized Account with the top right toggle.
5. Click on the line of an account with an owner.

   In the following example, the nominative LDAP account linked to the resource
   `U40897 / Internal Users / acme / com` has the owner `Maxime Guillot` with an 80% confidence
   rate.

   ![Select Decision](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/non-conforming-assignment-review/unauthorized-account-review/unauth_reviewunauthorized_v602.webp)

   The displayed confidence rate means that a rule actually assigned the account to the identity,
   but with a confidence rate too low to imply full automatic assignment. Approval will be
   required. See the [ Classify Resources ](/docs/identitymanager/6.2/reference/index.md)
   topic for additional information.

   The **Resource Properties** frame shows all the properties of the resources. They can be updated
   by clicking on the edit button. See the
   [ Reconcile a Property ](/docs/identitymanager/6.2/reference/index.md) topic for additional information.

   ![Edit Button](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/non-conforming-assignment-review/unauthorized-account-review/unauth_updateprop_v522.webp)

6. Select the appropriate decision.

   Decisions must be made with caution as they cannot be undone.

7. Click on **Confirm Account Deletion** or **Authorize Account** according to the previous
   decision.
8. Trigger [Provision](/docs/identitymanager/6.2/identity-management/provisioning/index.md) by launching, on the appropriate connector's
   overview page, **Jobs** > **Generate Provisioning Orders**, then, after this first task is done,
   **Jobs** > **Fulfill**.

   ![Resource Type Jobs](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

### Use property view

By default, non-conforming assignments are listed by resource. It is possible to click on a resource
and then access the list of all unreconciled properties for said resource.

![Resource View](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_resourceview_v523.webp)

It can be helpful to have the non-conforming assignments regrouped by property, as some of the
changes can be similar, so very likely to be validated by the same user. This is why a property view
can be enabled by clicking on the `Property View` toggle at the top right corner.

Once enabled, select a resource type to display all unreconciled properties linked to said resource
type. In addition, select a property to display only the unreconciled properties linked to said
resource type and property.

![Property View](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_propertyview_v603.webp)

The review process is the same with both views. However with property view, reviewers don't click on
a given line, but choose a decision directly on the left of the property line.

In addition, using property view enables bulk reconciliation to approve the proposed values or keep
the current values for several resources simultaneously.

![Bulk Reconcile](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_bulkreconcile_v603.webp)

Bulk keeping non-authorized accounts, by clicking on **Bulk Reconcile** then **Approve Current
Values**, does not approve their unreconciled properties which will still be displayed on this
screen.

## Verify Review

In order to verify the process, check that the changes you ordered appear on the corresponding
user's **View Permissions** tab.

![View Permissions Tab](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

# Review Orphaned and Unused Accounts

How to remediate license and security issues caused by orphaned and/or unused accounts.

## Overview

The review of unused and orphaned accounts is essential to solve security and license management
issues. Orphan accounts are without an owner, while unused accounts remain open without any
activity.

### Orphaned accounts list

A list of all orphaned accounts can be found on some entity type pages. Said pages can be accessed
through the menu items on the left of the home page, in the **Connectors** section.

![Home - Entity Types](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/home_entitytypes_v602.webp)

These entity type pages can be configured via XML to customize all displayed columns and available
filters, especially the **Orphan** filter that spots uncorrelated resources, and the **Owner /
Resource Type** column that shows the owner of each resource. See
the[ Create Menu Items ](/docs/identitymanager/6.2/troubleshooting/common-issues.md) topic for
additional information on customization.

![Owner / Resource Type Column](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/reporting/orphan_entitytype_v523.webp)

In the **Orphan** field, select **Yes** to see all existing resources without an owner.

In addition, filters can be configured in the reporting module to list orphaned accounts. See the
[ Generate Reports ](/docs/identitymanager/6.2/reference/index.md) topic for additional information. Choose to display
**User** and **AD User** (nominative) with a filter on void user's display names.

**NOTE:** Some accounts are considered orphaned because of an error in the account data or
assignment rule.  
For an entity that is never the target of a resource type, the concept of an orphan does not apply
because the **Owner / Resource Type** column will be hidden.  
When using a display table to display these entities, use
DisplayTableDesignElement``({{< relref "/integration-guide/toolkit/xml-configuration/user-interface/displaytable#properties" >}}) `"table"``
or `"adaptable"`.

### Unused accounts list

The way to identify activity in a managed system is highly dependent on said system. Thus, activity
identification cannot be generalized, and the absence of activity in accounts isn't recognizable
with the configuration as is. Integrators must configure a specific property fulfilling this
purpose.

For example in the AD, we can compute a Boolean property **isUnused** based on other AD accounts'
properties. Below is an example that you can use and adjust to your specific configuration:

Here we write an expression for isUnused based on the bits of userAccountControl, the value of
**accountExpires** and the value of LastLogonTimeStamp:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<EntityPropertyExpression Identifier="AD_Entry_isUnused"Expression="C#:resource:
if (resource.userAccountControl == null) {
   return false;
     }
if ((int.Parse(resource.userAccountControl) &amp; 2) != 0) {      
return false;
    }
 if (resource.accountExpires != null &amp;&amp; resource.accountExpires != 
&quot;0&quot; &amp;&amp; resource.accountExpires !=
&quot;9223372036854775807&quot; &amp;&amp;
Usercube.Expressions.Functions.UtilExpressions.ParseSince1601Date(resource.accountExpires)
&lt; DateTime.UtcNow) {      
return false;      
}
  
return ((resource.lastLogonTimestamp == null) ||
(Usercube.Expressions.Functions.UtilExpressions.ParseSince1601Date(resource.lastLogonTimestamp)
&lt; DateTime.UtcNow.AddMonths(-6);
  " EntityType="AD_Entry" Property="isUnused" />
```

Once this "unused" property is created, a list of all unused accounts can be displayed thanks to the
filters in the query module, based on said property. See the
[ Generate Reports ](/docs/identitymanager/6.2/reference/index.md) topic for additional information.

The previous example about the AD's **isUnused** property can be complemented in the query module by
displaying this property alongside users' **EmployeeId**.

![Query of Unused Accounts](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_unusedquery_v602.webp)

## Participants and Artifacts

At this point, integrators should have all the elements they need to operate as indicated in the
table below.

| Input                                                                             | Output                               |
| --------------------------------------------------------------------------------- | ------------------------------------ |
| [ Categorize Resources ](/docs/identitymanager/6.2/reference/index.md) (required) | Removed orphaned and unused accounts |

## Review an Orphaned Account

Review an orphaned account by proceeding as follows:

![Home Page - Resource Reconciliation](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/home_resourcereconciliation_v523.webp)

**Step 1 –** Go to the **Resource Reconciliation** page, accessible from the corresponding section
on the home page.

![Resource Reconciliation Page](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/unauth_unauthorizedaccounts_v602.webp)

**Step 2 –** Select **Unauthorized account** as the **Workflow State**. Orphaned accounts are those
appearing with no owner.

**Step 3 –** Choose the default resource view or the property view with the top right toggle.

**Step 4 –** Click on the line of an account without an owner.

![Select Owner](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_revieworphans_v602.webp)

In the following example, the nominative AD account linked to the email address
nathan.smith@acme.com has no owner.

You can **Select owner** from the list by clicking on the check box.

![Owners List](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_revieworphans-owners_v602.webp)

**Step 5 –** Answer the following questions in order to understand the situation.

- Has the account been used recently?
- Why is it orphan?
- Who is it supposed to belong to?
- If it is a service account, is it useful? Has it been used recently?

  - A used account must be connected to its rightful owner
  - An unused account must be deleted

- If this account belongs to a person, is the user still in the organization or did they leave?

  - If the owner has left for more than XXX (time period defined by the security officer's rules),
    the account must be deleted
  - If the owner has left for less than XXX, the account must be connected to its owner and
    deactivated.
  - If the owner is still in the organization, the account must be connected to its owner. Is
    there a rule to change?

**NOTE:** We said that useful service accounts must be connected to their owners due to the fact
that an orphaned account cannot be certified. .See the
[ Perform Access Certification ](/docs/identitymanager/6.2/reference/index.md) topic for additional information.
But a service account must not be linked to a person, for the departure of said person from the
company may trigger the loss of the service account.  
This is why we create identities with **Application** as their **UserType**, each
application-identity linked to a person supposed to manage it. Thus,service accounts must be
connected to application identities, themselves owned by people. That way, if the owner of the
application leaves, the application-identity is not deleted, and the service accounts it owns are
not deprovisioned.

See the schema below this note.

![Schema - Service Accounts](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_serviceaccounts.webp)

**Step 6 –** Select the appropriate owner or no owner at all, according to the previous analysis.

_Remember,_ decisions must be made with caution as they cannot be undone.

**NOTE:** When binding an orphaned account to an existing owner, properties might need to be
reconciled.

**Step 7 –** Click on **Confirm Account Deletion** or **Authorize Account** according to the
previous decision.

By taking the necessary steps the orphan account will be delete or authorized.

### Use property view

By default, non-conforming assignments are listed by resource. It is possible to click on a resource
and then access the list of all unreconciled properties for said resource.

![Resource View](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_resourceview_v523.webp)

It can be helpful to have the non-conforming assignments regrouped by property, as some of the
changes can be similar, so very likely to be validated by the same user. This is why a property view
can be enabled by clicking on the **Property View** toggle at the top right corner.

Once enabled, select a resource type to display all unreconciled properties linked to said resource
type. In addition, select a property to display only the unreconciled properties linked to said
resource type and property.

![Property View](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_propertyview_v603.webp)

The review process is the same with both views. However with property view, reviewers don't click on
a given line, but choose a decision directly on the left of the property line.

![Bulk Reconcile](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/orphan-unused-account-review/orphan_bulkreconcile_v603.webp)

In addition, using property view enables bulk reconciliation to approve the proposed values or keep
the current values for several resources simultaneously.

## Verify Review

In order to verify the process, check that the line for your reviewed item has been removed from the
**Resource Reconciliation** screen.

![View Permissions Tab](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

In addition, if you reconciled an orphaned account with an owner, check the user's permissions to
see said account.

# Review Provisioning

How to review provisioning orders before generation.

## Overview

For security purposes, provisioning orders sometimes need to be reviewed before being computed and
actually generated. Then, a user with
[ Configure a User Profile ](/docs/identitymanager/6.2/reference/index.md) accesses the
**Provisioning Review** page. They can either approve provisioning orders that will then be
computed, generated and finally ready for actual provisioning, or they can decline orders that will
subsequently be ignored.

### Provisioning states

In an assignment request's lifecycle, provisioning review adds a few steps between the moment when
the request is issued and when provisioning orders are computed:

![Provisioning State Schema](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provreview_states_v523.webp)

## Participants and Artifacts

This operation should be performed in cooperation with the staff in charge of managed systems.

| Input                                                                                                                                                                                 | Output              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| [ Create a Provisioning Rule ](/docs/identitymanager/6.2/reference/index.md) (required) [ Create Roles in the Role Catalog ](/docs/identitymanager/6.2/reference/index.md) (required) | Provisioning orders |

## Implement Provisioning Review

Provisioning review is configured for a given resource type. Therefore, you can decide to force the
review of provisioning orders when
[ Create a Resource Type ](/docs/identitymanager/6.2/reference/index.md). You can
choose to:

- Set the number of required approvals by a
  [ Manage Role Officers ](/docs/identitymanager/6.2/reference/index.md), via the
  `Approval Workflow` option.
- Enable a technical approval by the application owner, via the `Block provisioning orders` option.

Provisioning review can also be triggered when a fulfillment error occurs. See
the[ Identity Management ](/docs/identitymanager/6.2/identity-management/index.md)topic
for additional information.

## Review Provisioning Orders

Review provisioning orders by proceeding as follows:

1. On the home page, click on the entity type that you want to manage in the **Provisioning Review**
   section.

   ![Home Page - Provisioning Review](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/home_provisioningreview_v523.webp)

   ![Provisioning Review](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_provreview_v602.webp)

2. Click on a line to access details and handle addition, association, update or deletion orders.

   Once reviewed, provisioning orders are to be executed by Identity Manager during the next
   **Fulfill** task, accessible from the corresponding connector's overview page, in the **Resource
   Types** frame.

   Automatic provisioning orders are directly executed, while manual provisioning orders are listed
   on the **Manual Provisioning** page.

   ![Fulfill Task](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

### Handle an addition order

Identity Manager shows all the properties of the new resource to be created:

![Addition Order Review](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_reviewaddition_v602.webp)

- `Proposed Value`: value proposed by Identity Manager.
- [Entitlement Assignment](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md)
- `Start Date`: date for the beginning of the property value existence.
- `End Date`: date for the end of the property value existence.
- `Workflow State`: describes the origin or approval state of an assignment.
- `Confidence Rate`: rate expressing the confidence in the corresponding query rule.

See the
[Entitlement Assignment](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md)
and [ Create a Provisioning Rule ](/docs/identitymanager/6.2/reference/index.md) topics for
additional information.

Handle an addition order by proceeding as follows:

1. For all resource properties to be verified, choose one of the possibilities:

   - Either click on the approval icon to order the property creation with the proposed value.

   ![Addition - Approval Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconapprove_v602.svg)

   - Or click on the decline icon to refuse the property creation.

   ![Addition - Decline Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_icondecline_v522.svg)

   - Or click on the postponement icon to delay the decision.

   ![Addition - Postponement Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconpostpone_v522.svg)

2. Choose to confirm or ignore the creation.

### Handle an association order

Identity Manager displays a given owner and a given resource to be associated with a given
[ Classify Resources ](/docs/identitymanager/6.2/reference/index.md)and all resource
properties to be verified:

![Association Order Review](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_reviewassociation_v602.webp)

- `Confidence rate of proposed resource`: rate expressing the confidence in this
  [ Correlate Resources ](/docs/identitymanager/6.2/reference/index.md).
- `Proposed Value`: value proposed by Identity Manager.
- `Current Value`: value currently in the managed system.
- `Provisioning State`
- `Start Date`: date for the beginning of the property value existence.
- `End Date`: date for the end of the property value existence.
- `Workflow State`: describes the origin or approval state of an assignment.
- `Confidence Rate`: rate expressing the confidence in the corresponding query rule.

See the
[Entitlement Assignment](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md)
and [ Create a Provisioning Rule ](/docs/identitymanager/6.2/reference/index.md) topics for
additional information.

Handle an association order by proceeding as follows:

1. For all resource properties to be verified, choose one of the possibilities:

   - Either click on the approval icon to validate the proposed property value.

     ![Addition Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconapprove_v602.svg)

     ![Edition Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconedit_v602.svg)

     ![Deletion Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/reviewrole_icondelete_v602.svg)

   - Or click on the decline icon to refuse the property association.

     ![Addition - Decline Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_icondecline_v522.svg)

   - Or click on the postponement icon to delay the decision.

     ![Addition - Postponement Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconpostpone_v522.svg)

2. Choose to confirm or deny the association.

### Handle an update order

Identity Manager shows a given resource and all resource properties to be verified:

![Edition Order Review](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_reviewedition_v602.webp)

- `Proposed Value`: value proposed by Identity Manager.
- `Current Value`: value currently in the managed system.
- `Provisioning State`
- `Start Date`: date for the beginning of the property value existence.
- `End Date`: date for the end of the property value existence.
- `Workflow State`: describes the origin or approval state of an assignment.
- `Confidence Rate`: rate expressing the confidence in the corresponding query rule.

See the
[Entitlement Assignment](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md)
and [ Create a Provisioning Rule ](/docs/identitymanager/6.2/reference/index.md) topics for
additional information.

Handle an update order by proceeding as follows:

1. For all resource properties to be verified, choose one of the possibilities:

   - Either click on the approval icon to order the property update with the proposed value.

     ![Edition - Addition Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconapprove_v602.svg)

     ![Edition Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconedit_v602.svg)

   - Or click on the decline icon to refuse the property update.

     ![Addition - Decline Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_icondecline_v522.svg)

   - Or click on the postponement icon to delay the decision.

     ![Addition - Postponement Icon](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_iconpostpone_v522.svg)

2. Click on **Confirm Property Values**.

### Handle a deletion order

Identity Manager shows a given owner and their resources to be deleted:

![Deletion Order Review](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provmanual_reviewdeletion_v602.webp)

Handle a deletion order by choosing either to confirm the deletion or to keep the resource.

### Use property view

By default, provisioning orders are listed by resource. It is possible to click on a resource and
then access the list of all provisioning orders for that resource.

![Resource View](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provreview_resourceview_v603.webp)

In addition, using resource view enables bulk unblocking for provisioning orders with errors.

![Bulk Unblock](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provreview_bulkunblock_v603.webp)

It can be helpful to have the provisioning orders regrouped by property, as some of the changes can
be similar, so very likely to be validated by the same user. This is why a property view can be
enabled by clicking on the `Property View` toggle at the top right corner.

Once enabled, select a resource type to display all provisioning orders linked to that resource
type. In addition, select a property to display only the provisioning orders linked to these
resource type and property.

![Property View](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/provisioning-review/provreview_propertyview_v603.webp)

The review process is similar on both views. However with property view, reviewers don't click on a
given line, but choose a decision directly on the left of the property line.

## Verify Provisioning Review

In order to verify the process:

1. Select a test user in the directory, accessible from the home page.

   ![Home Page - Directory User](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Follow the [ Request Entitlement Assignment ](/docs/identitymanager/6.2/reference/index.md) workflow
   to make a change in one of their permissions, which involves provisioning review.
3. Check that the provisioning state is `Pending` in the user's **View Permissions** tab.

   ![View Permissions Tab](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

4. Click on **Jobs** > **Fulfill** on the corresponding connector's overview page, in the **Resource
   Types** frame, to execute the provisioning orders.

   ![Home Page - Job Execution](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

5. The orders using automated provisioning should be automatically handled with their state
   switching to `Executed`, while those using manual provisioning should appear on the **Manual
   Provisioning** page with their state switching to `Transmitted`.

![Home Page - Manual Provisioning](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/provisioning/manual-provisioning/home_manualprovisioning_v523.webp)

# Generate Reports

How to use Identity Manager's reporting modules to produce IGA reports for auditing and governance
purposes.

## Overview

Reporting features help users produce reports for auditing and performance evaluation. The aim is to
be aware of the whole assignment landscape, display it for analysis, and act upon it if needed.
Governance also helps produce audit-ready reports. You can start to set up governance features
relatively early in your Identity Manager journey and measure your progress from the very start.

A few reporting tools are already available in Identity Manager, used in other parts of your IGA
project, for example:

- the list of entitlements for a given user in their **View Permissions** tab;

  ![View Permissions Tab](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

- the list of all requests that you are authorized to see in **Workflow Overview** accessible from
  the home page in the **Administration** section;

  ![Home - Workflow Overview](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/reporting/home_workflowoverview_v602.webp)

- the list of [Review Orphaned and Unused Accounts](/docs/identitymanager/6.2/reference/index.md).

  ![Orphaned Account List](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/reporting/orphan_entitytype_v523.webp)

Identity Manager puts users in control of their reporting. Rich features help produce customizable
reports that can be used to check the assignment policy results, or gather information for an audit.

Identity Manager provides several different levels of reporting according to your needs and
technical tools. You can:

- download predefined reports for simple needs;
- add new reports to the predefined ones through XML configuration, for recurring needs that aren't
  met by available reports (this requires XML configuration knowledge);
- create customized reports with the Query module and its universes configured beforehand, to meet
  specific needs (this requires certain technical knowledge);
- create customized graphic reports with PowerBI, to meet specific needs (this requires certain
  technical knowledge).

## Participants and Artifacts

This operation can be performed by any user interested in producing IGA reports.

| Input              | Output  |
| ------------------ | ------- |
| Entries (required) | Reports |

## Download Predefined Reports

Identity Manager provides a selection of predefined reports available in the solution. They
represent the most common use cases.

The accessibility of these predefined reports was configured during
[ Configure a User Profile ](/docs/identitymanager/6.2/reference/index.md).

Download predefined reports by proceeding as follows:

1. Click on **Reports** on the left of the home page to access the list of predefined reports.

   ![Home Page - Reports](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/reporting/home_reports_v602.webp)

   ![Reports](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/reporting/reporting_predefinedreports_v602.webp)

2. Choose the appropriate report and click on **Download** to get an Excel report. The
   downward-pointing arrow provides additional report formats.

## Add New Reports to the List

When facing frequent reporting requirements outside the scope of predefined reports, new reports can
be configured with XML via `Report Query` and specific query grammar. See the
[API query grammar](/docs/identitymanager/6.2/integration/api/query-language.md) topic for additional
information.

## Create Customized Reports

When facing a one-time need for producing specific reports, Identity Manager's Query module helps
display attributes chosen from the data which is already
[ Synchronize Data ](/docs/identitymanager/6.2/identity-management/synchronization/index.md) and
[ Classify Resources ](/docs/identitymanager/6.2/reference/index.md). This module offers the
possibility to customize reports and download them.

The Query module is based on predefined
[ Universe ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
that can be adjusted later on in XML configuration, just like the list of available query models.

Create a custom report by proceeding as follows:

1. Click on **Query** in the **Administration** section on the home page.

   ![Home Page - Query](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/reporting/home_query_v602.webp)

   ![Query Page](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/reporting/reporting_querypage_v602.webp)

2. Choose a query model from among the list.
3. Click on **Fields to Display** and select the appropriate fields from among the database
   [ Universe ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
   and click on **Confirm**.

   ![Fields to Display](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/reporting/reporting_fieldstodisplay_v522.webp)

   In cases where Identity Manager doesn't display correctly the information you need, you must try
   to understand the entity instances and association instances that constitute the
   [ Universe ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
   that you are working with. Perhaps the fields that you chose cannot be properly correlated.

4. Click on **Filters**, write the appropriate condition and click on **Confirm**.

   ![Filters](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/reporting/reporting_filters_v602.webp)

   For example, a report could list user names and identifiers but only those with their
   `Contract end date` less than today's date, so that we will see all the workers who have left
   the organization and are still stored in Identity Manager.

5. Once all report settings are defined, click on **Download** to get a CSV report.

## Create Customized Graphic Reports with Power BI

When facing a periodic need for producing specific reports, especially when a visual presentation is
required, Identity Manager offers the possibility to connect to the
[Power BI](https://powerbi.microsoft.com/en-us/what-is-power-bi) application. This application will
allow you to create customized reports with a vast range of display options (such as graphs, charts,
matrixes, etc.) using Identity Manager's universes.

See the
[Connect Power BI to Identity Manager](/docs/identitymanager/6.2/access-governance/reporting/power-bi-integration.md)
topic for additional information on how to analyze Identity Manager's data with Power BI.

# Set Up User Authentication

How to allow end-users to authenticate and use the Identity Manager application. See the
[ End-User Authentication](/docs/identitymanager/6.2/administration/server-configuration/authentication.md)
topic for additional information.

# Plan Change Management

How to anticipate the deep changes in the organization's applications and processes due to Identity
Manager installation as a new IGA tool.

Change management is not only part of any IGA project. It is a full project in itself that requires
its own project officer, objectives, success indicators, etc. It starts on the very first day with
the project kickoff, and runs alongside the technical project.

## Overview

The applications and processes of the organization are about to change deeply. Change management is
crucial because it determines the future proper use of the solution and the gain that can be
achieved by the organization. It requires an upstream impact analysis in order to define the
strategy to adopt.

### Process

A digital project follows two parallel processes:

- The organizational and digital process used to design, build and deploy the solution.
- The human process urging staff to accept the solution, familiarize themselves with it, join and
  interact with the project.

Change management aims to support the teams throughout the human process.

![Process of Change Management](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/change-management/changemanagement_process.webp)

These processes include mandatory steps that all staff members have to go through, but not
necessarily at the same pace. For that reason, change managers can benefit from the use of personas,
i.e. creating characters that represent key populations.

## Participants and Artifacts

![Actors of Change Management](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/change-management/changemanagement_actors.webp)

The aim of a Project Management Officer concerning critical stakeholders is to enable:

- Decision makers to trigger holistic change in response to recurring factors in daily issues. This
  can be translated into promoting efforts towards the broader enterprise strategy, focusing on
  recurring challenges, identifying common denominators, not exceeding Project Management Office's
  capacity and promoting PMO's shifting value proposition.
- Managers to grow maturity and confidence in change management because they allow responsibility
  distribution throughout the organization. They need support in self-assessment and change
  management at varying degrees according to the strategic importance and complexity level of
  change. This can be translated into DIY change supports like templates, change coaches for
  tailored guidance, or change drivers for end-to-end execution.
- The employees impacted by change to enter the decision-making process at an early stage, thus
  improving change absorption. They must be engaged as active participants in shaping change
  decisions, in order to avoid extreme leader-dictated or consensus-based strategies.

| Input                               | Output                   |
| ----------------------------------- | ------------------------ |
| Upstream impact analysis (required) | Business ready to change |

## Run Change Management for Identity Manager

In order to profitably handle change management, any project should start with the question: **in
three years from now, what will be the (three to five) main facts attesting the success of this
project?** The answer will shape the strategy.

Whether Identity Manager replaces manual processes or an existing IGA tool, change management
methods are going to be the same. Only the analysis of impacted populations and the effort made to
onboard them can define the appropriate response.

IGA impact is based on data quality. Therefore, change management must encompass everything and
everyone that consumes and/or feeds data. All three population segments (decision makers, managers
and employees) are involved in data quality in one way or another. Hence, it is essential that they
understand IGA as an advantage instead of a constraint.

Run change management by proceeding as follows:

1. Identify the populations impacted by change. Below is an example of impacted populations that can
   vary enormously.

   ![Usual Populations](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/change-management/changemanagement_populations.webp)

2. For all listed populations, estimate their size and the expected impact on them, through
   indicators like the frequency of their future use of the solution. Use Plan Change Management to
   represent key population members, such as VIP users that don't use the application much, or users
   not feeling comfortable with computers.
3. According to the previous impact analysis, implement adjusted change management methods. You can
   get inspiration from the following examples.

|                   | Population  | Size | Impact                 | Possible Actions                                                                                             |
| ----------------- | ----------- | ---- | ---------------------- | ------------------------------------------------------------------------------------------------------------ |
| [1](#example-1)   | All         | 500  | Low                    | Introduction email Public video Information article                                                          |
| [2](#example-2)   | End-Users   | 50   | High                   | Coffee corner: coffee break with the local support team offering tutorials and exercises on Identity Manager |
| [3a](#example-3a) | HR/Managers | 10   | High (daily use)       | Tutorials and exercises with a support team to get started quickly with Identity Manager                     |
| [3b](#example-3b) | HR/Managers | 10   | Medium (bimonthly use) | Step-by-step procedure video or flyer                                                                        |

##### Example 1

Informing relevant populations is essential. For large populations (ex.: 500 employees), an
introduction email can be sent to everyone or a video published on a public website or played on
screens visible in the workplace.

##### Example 2

A medium or large population (i.e. the size of a department in your organization) might be receptive
to informal meetings such as a coffee break with the local support team offering tutorials and
exercises on Identity Manager.

##### Example 3

Let us consider HR teams and managers which have a change impact depending on their frequency of use
of the application.

###### Example 3a

If they frequently use the application (i.e. daily use), they will benefit from tutorials and
exercises with a support team to get started quickly with Identity Manager.

###### Example 3b

If they infrequently use the application (i.e. bimonthly use), they may rather benefit from training
materials such as a step-by-step procedure video or flyer.

## Verify Change Management

In order to verify the process, change managers can rely on implemented indicators, in the same way
as for any project management situation.

# Implement Identity Manager

How to actually implement Identity Manager solution.

The documentation is not yet available for this page and will be completed in the near future.

# Deploy

- [ Plan Change Management ](/docs/identitymanager/6.2/reference/index.md)

  How to anticipate the deep changes in the organization's applications and processes due to
  Identity Manager installation as a new IGA tool.

- [ Install the Production Agent ](/docs/identitymanager/6.2/reference/index.md)

  How to install a local agent for production environment.

- [ Configure the Agent's Settings ](/docs/identitymanager/6.2/reference/index.md)

  How to configure the agent's application settings via the `web.config`, `appsettings.json` and
  `appsettings.agent.json` files.

- [ Install IIS via Server Manager ](/docs/identitymanager/6.2/reference/index.md)

  How to configure the local server to install IIS via Server Manager.

- [ Configure the Pool and Site ](/docs/identitymanager/6.2/reference/index.md)

  How to configure the application pool and website via IIS.

- [ Set the Working Directory's Permissions ](/docs/identitymanager/6.2/reference/index.md)

  How to assign to the pool the right permissions on the working directory.

- [ Finalize the Installation ](/docs/identitymanager/6.2/reference/index.md)

  How to finalize the installation of the agent.

- [Set Up User Authentication](/docs/identitymanager/6.2/reference/index.md)

  How to allow end-users to authenticate and use the Identity Manager application.

- [Implement Identity Manager](/docs/identitymanager/6.2/reference/index.md)

  How to actually implement Identity Manager solution.

# Set the Working Directory's Permissions

This guide shows how to assign to the pool the right permissions on the working directory.

## Overview

For Identity Manager to work correctly, the pool of the production agent must be configured with
specific permissions on the working directory.

This page describes the optimal configuration of the pool's permissions on the working directory to
prepare the production agent's installation.

## Set the Working Directory's Permissions

Set the working directory's permissions by proceeding as follows:

1. Right-click on the working directory, for example `C:/Usercube`, to select **Properties**, and in
   the **Security** tab, click on **Advanced**.

   ![Working Directory Properties: Step 1](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_directoryproperties1.webp)

2. In the **Permissions** tab, click on **Add**, and in the pop-up window click on **Select a
   principal**.

   ![Working Directory Properties: Step 2](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_directoryproperties2.webp)

3. Click on **Locations** to choose the current computer, and in the text area enter
   `iis apppool/Usercube` (`Usercube` being the name of the previously created pool).

   ![Working Directory Properties: Step 3](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_directoryproperties3.webp)

   An error at this point should come either from a mistake in the pool's name or in the selected
   location.

4. Click on **OK** and make sure that only the **Read and execute**, **List folder contents** and
   **Read** permissions are selected.

   ![Working Directory Properties: Step 4](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_directoryproperties4.webp)

5. Click on **OK** in the windows until they are all closed.
6. Right-click on the `Temp` folder to select **Properties**, and in the **Security** tab, click on
   **Edit**.

   ![Temp Folder Properties: Step 1](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_foldersproperties1.webp)

7. Select the user corresponding to the pool and give them `Full control`.

   ![Temp Folder Properties: Step 2](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/directory-permissions/prodagent_foldersproperties2.webp)

8. Click on **OK** in the windows until they are all closed.
9. Repeat the last few steps (those concerning the `Temp` folder) to apply them to the `Work` and
   `Mails` folders.

## Next Steps

To continue, [ Finalize the Installation ](/docs/identitymanager/6.2/reference/index.md)in a few steps.

# Finalize the Installation

This guide shows how finalize the installation of the agent.

## Overview

This page describes the last few steps that the production agent needs for Identity Manager to run
correctly.

## Finalize the Installation

Finalize the installation of the agent by proceeding as follows:

1. Install
   [Windows' hosting bundle for ASP.Net Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).

   If the bundle was installed before
   [ Configure the Pool and Site ](/docs/identitymanager/6.2/reference/index.md), then IIS might not display the
   AspNetCore module and Identity Manager will not run. In this case, relaunch the bundle's
   installation executable to perform a repair.

2. When using a proxy, adjust the configuration accordingly. See the
   [ Reverse Proxy ](/docs/identitymanager/6.2/installation/reverse-proxy-configuration.md)topic for additional
   information.

## Next Steps

To continue, follow the instructions to verify the agent's installation. See the
[ Install the Production Agent ](/docs/identitymanager/6.2/reference/index.md)topic for additional information.

# Configure the Pool and Site

This guide shows how to configure the application pool and website via IIS.

## Overview

IIS provides a platform for hosting and managing websites.
[See more details](https://learn.microsoft.com/fr-fr/iis/get-started/introduction-to-iis/introduction-to-iis-architecture).

To install the production agent, a website must be created and configured correctly, as part of an
application pool.

This page describes the optimal configuration in IIS to prepare the production agent's installation.

## Configure the Application Pool and Site

Configure the application pool and site by proceeding as follows:

1. Open IIS and remove the default site and pool.

   IIS can usually be found in Windows' search menu, or from Server Manager by accessing the
   **Tools** menu.

   ![IIS: Step 1](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_iis1.webp)

2. Right-click on **Application Pools** to add a new pool named `Usercube`.

   ![IIS: Step 2](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_iis2.webp)

3. Right-click on **Sites** to add a new site named `Usercube<Organization>`, make sure that the
   selected application pool is `Usercube` and set the `path` field to the `Runtime` folder.

   ![IIS: Step 3](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_iis3.webp)

4. Right-click on the application pool to open its advanced settings and make sure that the
   following parameters are set as such:

   ![IIS: Step 4](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_iis4.webp)

   ![IIS: Step 5](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_iis5.webp)

5. Make sure that IIS contains an SSL certificate, by accessing the home page of IIS server and
   double-clicking on **Server Certificates**.

   If the certificate is not ready yet, generate an auto-signed certificate.

   ![IIS Server Certificate: Step 1](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_servercertificate1.webp)

   If the certificate is not there yet, import it by clicking on **Import** in the right-side menu,
   and specify the certificate's path and password.

   ![IIS Server Certificate: Step 2](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_servercertificate2.webp)

6. Add the certificate's URL to the site by right-clicking on the site, selecting **Edit Bindings**
   and clicking on **Add**, then choosing `https` as type, `443` as port, specifying the server's
   URL (without the `https` part) as host name, and finally selecting the server certificate.

   ![IIS Server Certificate: Step 3](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-configuration/prodagent_servercertificate3.webp)

   Click on **OK**.

   If the server's certificate is not available at this point, then make sure it was correctly
   imported in the previous step.

## Next Steps

To continue, [ Set the Working Directory's Permissions ](/docs/identitymanager/6.2/reference/index.md).

# Install IIS via Server Manager

This guide shows how to configure the local server to install IIS via Server Manager.

## Overview

When running on Windows Server, Server Manager makes available parameters to configure the local
server at will.
[See more details](https://learn.microsoft.com/en-us/windows-server/administration/server-manager/manage-the-local-server-and-the-server-manager-console).

This page describes the optimal configuration of the local server to install IIS in order to prepare
the production agent's installation.

## Install IIS via Server Manager

Install IIS via Server Manager by proceeding as follows:

1. Open the Server Manager program and click on **Add roles and features**.

   ![Server Manager: Step 1](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager1.webp)

2. Click on **Next**, then in **Installation Type** make sure that **Role-based or feature-based
   installation** is selected and click on **Next**.

   ![Server Manager: Step 2](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager2.webp)

3. In **Server Selection** tick **Select a server from the server pool** and click on **Next**.

   ![Server Manager: Step 3](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager3.webp)

4. In **Server Roles** tick **Web Server (IIS)**.

   ![Server Manager: Step 4](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager4.webp)

5. In **Features** select **Remote Server Administration Tools** > **Role Administration Tools** >
   **AD DA and AD LDS Tools** > **AD DS Tools** > **AD DS Snap-Ins and Command-Line Tools**.

   ![Server Manager: Step 5](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager5.webp)

6. In **Confirmation** click on **Install**.

   ![Server Manager: Step 6](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/production-agent-installation/iis-installation/prodagent_servermanager6.webp)

## Next Steps

To continue, [ Configure the Pool and Site ](/docs/identitymanager/6.2/reference/index.md)the application pool and
website via IIS.

# Install the Production Agent

This guide shows how to install an agent separated from the server, for production environment. See
the [ Architecture ](/docs/identitymanager/6.2/reference/index.md)topic for additional
information.

## Overview

Like all agents, the production agent aims to extract data from a given managed system, and transmit
said data to the Identity Manager server. If necessary, the agent also enables the managed system's
provisioning according to the orders computed by the Identity Manager server. See the
[ Architecture ](/docs/identitymanager/6.2/reference/index.md)topic for additional information.

Identity Manager solution can use several agents, each of them manages a given system. This section
is about installing the agent managing the production environment.

Once agents are configured in addition to the default one provided by SaaS, you need to think about
what agent to choose during each
[ Create the Connector ](/docs/identitymanager/6.2/reference/index.md)declaration. The
appropriate agent has access to the managed system.

## Requirements

Ensure that all
[ Agent ](/docs/identitymanager/6.2/getting-started/system-requirements.md)requirements can be
met before starting the installation of the production agent.

Requirements for the agent installation can change over the course of the project, according to the
project purpose.

### Encryption certificates

Ensure that your encryption certificates are valid by checking their: expiration date; signatory;
key size exceeding 2048; sha256 and not sha-1.

### Server Manager

Ensure that the device used for the installation has the Server Manager program.

## Participants and Artifacts

Integrators should have all the elements they need to operate.

| Input                                                                                               | Output           |
| --------------------------------------------------------------------------------------------------- | ---------------- |
| [ Agent ](/docs/identitymanager/6.2/getting-started/system-requirements.md)prerequisites (required) | Production agent |

## Install the Production Agent

Install the production agent by proceeding as follows:

1. [ Create a Working Directory ](/docs/identitymanager/6.2/installation/pre-installation/working-directory-setup.md)and
   make sure it contains the folders: `Mails`; `Sources`; `Temp`; `Work`.
2. [ Configure the Agent's Settings ](/docs/identitymanager/6.2/reference/index.md) via the `web.config`,
   `appsettings.json` and `appsettings.agent.json` files.
3. Configure the local server to [ Install IIS via Server Manager ](/docs/identitymanager/6.2/reference/index.md).
4. [ Configure the Pool and Site ](/docs/identitymanager/6.2/reference/index.md) via IIS.
5. [ Set the Working Directory's Permissions ](/docs/identitymanager/6.2/reference/index.md).
6. [ Finalize the Installation ](/docs/identitymanager/6.2/reference/index.md).

## Verify Agent Installation

In order to verify the process:

- make sure the website is accessible from IIS by clicking on **Browse** (in the menu on the right),
  and from your browser;
- if logs are enabled, then stop the pool to make sure that no error is thrown;
- perform from a local device agent-side actions such as sending test emails, reading and/or writing
  inside working folders, or launching/scheduling agent-side tasks.

# Configure the Agent's Settings

This guide shows how to configure the agent's application settings via the `web.config`,
`appsettings.json` and `appsettings.agent.json` files.

## Overview

Identity Manager provides JSON files to configure varied application settings, named appsettings
json and appsettings.agent.json. See the
[Application Settings](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)
and
[appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)
topics for additional information.

This page describes the optimal configuration of the production agent's application settings.

## Configure the Agent's Settings

Configure the agent's settings by proceeding as follows:

1. From the `Runtime/Agent` folder, copy the files `appsettings.json`, `appsettings.agent.json` and
   `web.config` and paste them in the `Runtime` folder, thus replacing the pre-existing ones.
2. Open `web.config` and make sure that, in the `aspNetCore` tag, the value of `arguments` is set to
   `./identitymanager-Agent.dll`.

   When needing to get the agent's logs, set also `stdoutLogEnabled` to `true`. See more details in
   [Microsoft's documentation](https://learn.microsoft.com/fr-fr/aspnet/core/host-and-deploy/iis/logging-and-diagnostics?view=aspnetcore-7.0).

   ```

    web.config

    ...
    <aspNetCore processPath="dotnet" arguments="./identitymanager-Agent.dll" stdoutLogEnabled="true" stdoutLogFile="../Temp/stdout-server.log" hostingModel="inprocess">     ...
    </aspNetCore> ...

   ```

3. Open `appsettings.json` and make sure that:

   - **License** contains a valid license;
   - **IdentityServer** contains the encryption certificate's path and password provided by Netwrix
     Identity Manager (formerly Usercube) team, in order to secure agent/server identification;

     > For example:
     >
     > ```
     >
     > appsettings.json
     >
     > "IdentityServer": {
     >   "X509KeyFilePath": "./Usercube.pfx",
     >   "X509KeyFilePassword": "secret"
     > }
     >
     > ```

   - you get an encryption certificate which will be used to encrypt specific files such as logs or
     temporary files, and that **EncryptionCertificate** contains its path and password;

     > For example:
     >
     > ```
     >
     > appsettings.json
     >
     > "EncryptionCertificate": {
     >   "File": "./identitymanager-Files.pfx",
     >   "Password": "secret",
     >   "EncryptFile": true
     > }
     >
     > ```

     **EncryptFile** can stay set to `false` while verifying the agent installation, but for
     security reasons it must be set to `true` afterwards.

     If the certificates' passwords contain `@`, then they must be escaped via the `@` as first
     character of the strings.

   - **ApplicationUri** contains the server's address, provided by Netwrix Identity Manager
     (formerly Usercube) team when working in a SaaS environment;

     > For example:
     >
     > ```
     >
     > appsettings.json
     >
     > "ApplicationUri": "http://localhost:5000"
     >
     > ```

     Do not write a `/` character at the end of the string.

   - **Cors** > **AllowAnyHeader**, **AllowAnyMethod** and **AllowCredentials** are set to `true`;

     ```

       appsettings.json

       "Cors": {
           "AllowAnyHeader": "true",
           "AllowAnyMethod": "true",
           "AllowCredentials": "true"
       }

     ```

4. Open `appsettings.agent.json` and make sure that:

   - **OpenId** > **AgentIdentifier** specifies the agent's name which must match the XML
     configuration. See the
     [appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)
     topic for additional information..

     > For example:
     >
     > ```
     >
     >         appsettings.agent.json
     >
     >         "OpenId": {
     >           "AgentIdentifier": "MyAgent"
     >           }
     >
     > ```
     >
     > With the following configuration:
     >
     > ```
     >
     >         <Agent Identifier="MyAgent" DisplayName_L1="My Agent" URI="https://contoso.com" />
     >
     > ```

   - **OpenId** > **OpenIdClients** > **Job** contains the non-hashed value of the password of
     "Job-Remote" provided by NETWRIX' team

     > For example:
     >
     > ```
     >
     > appsettings.agent.json
     >
     > "OpenId": {
     >   "AgentIdentifier": "MyAgent",
     >   "OpenIdClients": {
     >       "Job": "secret"
     >   }
     > }
     >
     > ```

     and add the hashed value of this password to the `OpenIdClient` named `Job` from the XML
     configuration;

     > For example:
     >
     > ```
     >
     > <OpenIdClient Identifier="Job" HashedSecret="K7gNU3sdo+OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols=" ConsolidationMode="Merge" />
     >
     > ```

   - **OpenId** > **DefaultOpenIdClient** is set to `Job`;

     > For example:
     >
     > ```
     >
     > appsettings.agent.json
     >
     > "OpenId": {
     >   "AgentIdentifier": "MyAgent",
     >   "OpenIdClients": {
     >       "Job": "secret"
     >   },
     >   "DefaultOpenIdClient": "Job"
     > }
     >
     > ```

   - **PasswordResetSettings** > **TwoFactorSettings** > **ApplicationUri** contains the server's
     address, provided by NETWRIX' team when working in a SaaS environment;

     > For example:
     >
     > ```
     >
     > appsettings.agent.json
     >
     > "PasswordResetSettings": {
     >   "TwoFactorSettings": {
     >       "ApplicationUri": "http://localhost:5000"
     >   }
     > }
     >
     > ```

   - **PasswordResetSettings** > **EncryptionCertificate** contains contains the path and password
     of the certificate used to secure password tokens;

     > For example:
     >
     > ```
     >
     > appsettings.agent.json
     >
     > "PasswordResetSettings": {
     >   "TwoFactorSettings": {
     >       "ApplicationUri": "http://localhost:5000"
     >   },
     >   "EncryptionCertificate": {
     >       "File": "../Usercube.pfx",
     >       "Password": "secret"
     >   }
     > }
     >
     > ```

   - **PasswordResetSettings** > **MailSettings** > **PickupDirectory** is set to the `Mails`
     folder and **FromAddress** to `no-reply@<organization>.com`;

     > For example:
     >
     > ```
     >
     > appsettings.agent.json
     >
     > "PasswordResetSettings": {
     >   "TwoFactorSettings": {
     >       "ApplicationUri": "http://localhost:5000"
     >   },
     >   "EncryptionCertificate": {
     >       "File": "../Usercube.pfx",
     >       "Password": "secret"
     >   },
     >   "MailSettings": {
     >       "PickupDirectory": "../Mails",
     >       "FromAddress": "no-reply@contoso.com"
     >   }
     > }
     >
     > ```

   - **SourcesRootPaths** contains the path to the `Sources` folder.

     > For example:
     >
     > ```
     >
     > appsettings.agent.json
     >
     > "SourcesRootPaths": [
     >   "C:/identitymanager/Sources"
     > ]
     >
     > ```

## Next Steps

To continue,see the local server to
[ Install IIS via Server Manager ](/docs/identitymanager/6.2/reference/index.md).

# How to Maintain the Workforce Directory

How to keep the workforce directory up to date.

## Overview

![Process Schema - How to Implement a New System](/img/product_docs/identitymanager/identitymanager/user-guide/global-process/howto-maintaindirectory/globalprocess_schemamaintain.webp)

## Process Details

Be aware that the integration of an IGA tool is an iterative process. Thus, after following
the[ How to Start ](/docs/identitymanager/6.2/reference/index.md) process and creating the workforce directory, you can
come back at any time and complete the directory that you started
[ Update Identity Data ](/docs/identitymanager/6.2/reference/index.md).

# How to Implement a New System

How to add a new system to the solution.

## Overview

When connecting Identity Manager to a new system, several process paths can be taken according to
your strategy. There is no option fundamentally better than the others, your decision must depend on
your needs.

The **option A** leads quickly to the
[ Update Identity Data ](/docs/identitymanager/6.2/reference/index.md)in production
environment, i.e. a new application in Identity Manager's scope. With this, you can
[Review Orphaned and Unused Accounts](/docs/identitymanager/6.2/reference/index.md),
[Provision](/docs/identitymanager/6.2/identity-management/provisioning/index.md) the AD,
[ Reconcile a Property ](/docs/identitymanager/6.2/reference/index.md)properties,
and [ Generate Reports ](/docs/identitymanager/6.2/reference/index.md), for example the list of profiles
assigned to users.

The **option B** takes more time as it goes through the creation of the role model based on the
system's entitlements, but it leads to even more gain as you can also
[ Reconcile a Role ](/docs/identitymanager/6.2/reference/index.md),
[ Perform Access Certification ](/docs/identitymanager/6.2/reference/index.md)access
certification and
[ Request Entitlement Assignment ](/docs/identitymanager/6.2/reference/index.md), and also
[ Generate Reports ](/docs/identitymanager/6.2/reference/index.md), for example the list of assigned single
roles.

The option B is more complicated and time-consuming than the option A, but leads to more gain. Be
aware that you can go through the process options simultaneously.

![Process Schema - How to Implement a New System](/img/product_docs/identitymanager/identitymanager/user-guide/global-process/howto-newsystem/globalprocess_schemaconnectsyst.webp)

## Process Details

### Common starting steps

1. [ Connect to a Managed System ](/docs/identitymanager/6.2/reference/index.md): create the appropriate
   connector with its connections and entity types.
2. [ Synchronize Data ](/docs/identitymanager/6.2/identity-management/synchronization/index.md) into Identity Manager.

   Based on this, you can [ Generate Reports ](/docs/identitymanager/6.2/reference/index.md), for example
   the list of resources in the system. A few predefined reports are available from the start, you
   can generate any report from this list as soon as it makes sense according to the integration
   progress.

3. [ Categorize Resources ](/docs/identitymanager/6.2/reference/index.md) in order to classify them
   according to their intent, and correlate these resources with their owners.
4. [ Create a Provisioning Rule ](/docs/identitymanager/6.2/reference/index.md) to write to the
   system in order to update the resources' properties directly in the system.
5. Adjust the rules by
   [ Reconcile a Property ](/docs/identitymanager/6.2/reference/index.md)resources,
   i.e. analyze the differences spotted between the reality of resources' properties and those
   computed by the previously established rules. Especially, verify that accounts are correlated to
   the right owners and that their properties have the right values.

   Either the integrator handles the customization of the rules and the review of non-conforming
   resources, or they can assign an application administrator profile to a given user to perform
   it. Assigning this profile requires profile configuration, see steps 11 and 12.

After connecting Identity Manager to an external system, two process options are available according
to your needs: either aim directly to the implementation in production environment, or first build
the role model in order to enable more administration activities. Both options can be started
simultaneously.

### Option A: Straight to production implementation

Go directly to the common final steps (step 8).

### Option B: First build the role model

6. [ Create Roles in the Role Catalog ](/docs/identitymanager/6.2/reference/index.md) for
   applications managed by the system.
7. [ Automate Assignments ](/docs/identitymanager/6.2/reference/index.md) if needed: use Role
   Mining to create single role rules in bulk; adjust the generated rules individually and manually.

### Common final steps

8. Perform tests.
9. Deploy the pre-production configuration to the production environment.

# How to Start

How to start integrating Identity Manager with your own needs.

## Overview

When starting with Identity Manager, several process paths can be taken according to your strategy.
There is no option fundamentally better than the others, your decision must depend on your needs.

The **option 1** leads quickly to identity management, i.e. users' on-boarding/movement/off-boarding
without needing a periodic synchronization. See the
[ Update Identity Data ](/docs/identitymanager/6.2/reference/index.md) topic for additional
information.

The **option 2A** takes more time as it requires the installation of an agent on your network in
order to connect Identity Manager to the system and use the AD's data, but it leads to more gain as
you can also
[Review Orphaned and Unused Accounts](/docs/identitymanager/6.2/reference/index.md),
[Provision](/docs/identitymanager/6.2/identity-management/provisioning/index.md) the AD,
[ Reconcile a Property ](/docs/identitymanager/6.2/reference/index.md)properties,
and [ Generate Reports ](/docs/identitymanager/6.2/reference/index.md), for example the list of profiles
assigned to users.

The **option 2B** takes even more time as it goes through the creation of the role model based on
the system's entitlements, but it leads to even more gain as you can also
[ Reconcile a Role ](/docs/identitymanager/6.2/reference/index.md),
[ Perform Access Certification ](/docs/identitymanager/6.2/reference/index.md) and
[ Request Entitlement Assignment ](/docs/identitymanager/6.2/reference/index.md), and also
[ Generate Reports ](/docs/identitymanager/6.2/reference/index.md), for example the list of assigned single
roles.

The options 2A and 2B are more complicated and time-consuming than the option 1, but lead to more
gain. Be aware that you can go through the process options simultaneously.

Netwrix Identity Manager (formerly Usercube) recommends the option 1 to be able to start IGA without
waiting for the installation of an agent in your network, and go through the option 2
simultaneously.

![Process Schema - How to Start with Usercube](/img/product_docs/identitymanager/identitymanager/user-guide/global-process/howto-start/globalprocess_schemastart.webp)

## Process Details

### Common starting steps

1. [Install the Development Environment](/docs/identitymanager/6.2/reference/index.md).
2. [ Create the Workforce Repository ](/docs/identitymanager/6.2/reference/index.md): configure
   the generation of unique properties; load workforce identities to Identity Manager; adjust the
   data model.

After these first steps, two process options are available according to your needs: either aim
directly to identity management and the opening of Identity Manager to end-users, or first connect
Identity Manager to an external system in order to enable more administration activities. Both
options can be started simultaneously.

### Option 1: Based on the workforce directory

Starting with the workforce directory does not require the installation of a local agent.

Go directly to the common final steps (step 10).

### Option 2: Based on an external system

Starting with an external system requires the installation of a local agent.

3. Connect Identity Manager to the system by creating a connector. See the
   [ Connect to a Managed System ](/docs/identitymanager/6.2/reference/index.md) topic for additional
   information.
4. [ Synchronize Data ](/docs/identitymanager/6.2/identity-management/synchronization/index.md)the system's data into Identity
   Manager.

   Based on this, you can [ Generate Reports ](/docs/identitymanager/6.2/reference/index.md), for example
   the list of resources in the system. A few predefined reports are available from the start, you
   can generate any report from this list as soon as it makes sense according to the integration
   progress.

5. [ Categorize Resources ](/docs/identitymanager/6.2/reference/index.md) in order to classify them
   according to their intent, and correlate these resources with their owners.
6. [ Create a Provisioning Rule ](/docs/identitymanager/6.2/reference/index.md) to write to the
   system in order to update the resources' properties directly in the system.
7. Adjust the rules by reconciling resources, i.e. analyze the differences spotted between the
   reality of resources' properties and those computed by the previously established rules.
   Especially, verify that accounts are correlated to the right owners and that their properties
   have the right values. See the
   [ Reconcile a Property ](/docs/identitymanager/6.2/reference/index.md)
   topic for additional information.

   Either the integrator handles the customization of the rules and the review of non-conforming
   resources, or they can assign an application administrator profile to a given user to perform
   it. Assigning this profile requires profile configuration, see steps 11 and 12.

After connecting Identity Manager to an external system, two process options are available according
to your needs: either aim directly to identity management and the opening of Identity Manager to
end-users, or first build the role model in order to enable more administration activities. Both
options can be started simultaneously.

### Option 2A: Straight to identity management

Go directly to the common final steps (step 10).

### Option 2B: First build the role model

8. [ Create Roles in the Role Catalog ](/docs/identitymanager/6.2/reference/index.md) for
   applications managed by the system.
9. [ Automate Role Assignments ](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md)
   if needed: use Role Mining to create single role rules in bulk; adjust the generated rules
   individually and manually.

### Common final steps

10. Adjust HR workflows to keep the workforce directory updated (only in XML configuration).
11. Define the permissions for your user profiles. See the
    [ Configure a User Profile ](/docs/identitymanager/6.2/reference/index.md) topic for
    additional information.
12. Define the authentication mode by configuring `SelectUserByIdentityQueryHandlerSetting` (only in
    XML configuration), and [Assign Users a Profile](/docs/identitymanager/6.2/reference/index.md)
    to open the application to end-users.

# Global Process

How do the process activities success each other.

NETWRIX recommends working with a SaaS installation and with the User Interface as long as possible,
because identity management is optimized by mastering identities inside Identity Manager.

Be aware that the integration of an IGA tool is an iterative process. There is no simple linear
process. This user guide provides the following processes that can follow one another and
intertwine.

- #### [How to Start](/docs/identitymanager/6.2/reference/index.md)
  How to start integrating Identity Manager with your own needs.- ####
  [How to Maintain the Workforce Directory](/docs/identitymanager/6.2/reference/index.md) How to keep the
  workforce directory up to date.- #### [How to Implement a New System](/docs/identitymanager/6.2/reference/index.md)
  How to add a new system to the solution.

# User Guide

Identity Manager's User Guide leads the reader through all the necessary steps to autonomously build
an IGA solution based on Identity Manager, either from scratch or using Identity Manager's IGA Core
Solution, with the aim of quickly delivering value.

## Target Audience

This guide is intended to be read by Identity Manager administrators, i.e. power users who configure
Identity Manager to match their company's needs.

## Prior Knowledge

This guide presumes some knowledge of Identity Manager on the part of the reader who should have
previously read the [Introduction Guide](/docs/identitymanager/6.2/reference/index.md) in order to be aware of the
main purposes, principles and capabilities of Identity Manager.

Using this guide does not require any advanced IT skills. All the configuration steps take place
through Identity Manager's UI or MS Excel files.

Netwrix Identity Manager (formerly Usercube)strongly recommends starting from the
[Introduction Guide](/docs/identitymanager/6.2/reference/index.md) to fully benefit from the User Guide's content.

## Overview

This guide is made of step-by-step procedures that take the reader through setting up Identity
Manager from scratch and creating IGA value as quickly as possible.

The procedures are meant to guide the reader through a standard setup, based on Identity Manager's
IGA Core Solution, and with Netwrix Identity Manager (formerly Usercube) suggestions and
recommendations. Any advanced configuration can be performed later using the content of the
[Integration Guide](/docs/identitymanager/6.2/integration/index.md).

Thus, even when having very specific needs, Netwrix Identity Manager (formerly Usercube) still
recommends starting the project with the basics presented in this guide. The IGA solution can be
enhanced later on with the help of our experts. This way, IGA value can already be delivered while
the project continues for optimization purposes.

## Content

This guide is organized into activities, each activity containing an overview, the input, output,
and participants as well as step-by-step procedures and a way to verify the outcome.

Some activities are grouped together when they depend on each other to create value or when they
contribute to a same goal.

While some activities must be carried out before others for technical and/or functional reasons, the
order is not absolute. Please follow the instructions and recommendations detailed with the
[ Global Process ](/docs/identitymanager/6.2/reference/index.md).

All activities are organized into bigger sections which are distinguishable by their functional
intent: set up; administrate; optimize; deploy and maintain.

### Set up

Learn how to configure a working environment, how to set up identity lifecycles, and how to build a
catalog of roles for entitlement management, in order to configure the Minimum Viable Product.

### Administrate

Learn how to enforce your security policies through access certification, or resource/role
reconciliation, provisioning review, etc.

### Optimize

Learn how to enhance the IGA solution through automation and model optimization.

> For example, learn how to adjust the identity model and the role model in order to make them
> resemble the company's reality, learn how to improve the data quality by automating entitlement
> assignment decisions, or by automatically provisioning assignments to the managed systems. Learn
> how to push the automation wall thanks to Identity Manager's AI with role mining.

### Deploy

Learn how to deploy the solution to a production environment.

### Maintain

Learn how to maintain the solution, because the project is iterative. Learn how to keep the data
model up to date according to the company's changes, or how to add new systems to the loop, while
Identity Manager is already running in production.

## How to Use this Guide

Start by studying the [ Global Process ](/docs/identitymanager/6.2/reference/index.md). that details every activity in
their respective sections and how they relate to one another. You will get a good view of the steps
to take from start to finish.

Follow the path, stop at each activity, and go check out the details on the matching page of the
guide, in the corresponding section. There you will find recommendations and practical steps to
complete the activity and test it. Then you can resume following the path.

At any step along the way, once you feel comfortable, you can decide to take another direction than
the recommended process, as long as you take into account the input artifacts specified in each
activity page, which represent actual technical dependencies. You can start an activity only if all
the previous technical dependencies are met.

Keep in mind that completing sections one by one is the quickest way to deliver value. Nevertheless,
they are not rigorously dependent on each other. You do not have to complete one entirely in order
to go to the next. But they are not rigorously independent either. There are some activities in the
first one that are required for activities in the second. Read the input artifacts to choose the
correct order.

> For example, if you are looking forward to fixing non authorized account (from the
> **Administrate** section) you do not have to complete the **Set Up** section entirely. You just
> have to complete the **Categorize Resources** activity, and all the activities connected to it
> upstream . You do not have to complete other activities such as the **Create Roles in the Role
> Catalog** activity.

# Update Identity Data

How to perform modifications in the identity repository, to manage onboarding, offboarding and
position changes.

This part is not about changing the data model, but data itself.

## Overview

After the identity repository is initiated, you will need to modify it for many possible reasons.
Among them:

- update all identities with new attributes because you didn't have the required information during
  the repository creation, or because it wasn't a priority for you then;
- perform onboarding: add new identities as new workers arrive in the company;
- modify identities' attributes to fix existing errors, or to reflect a real change in users' data,
  or model a position change;
- remove identities' attributes, as they are no longer required to manage entitlements;
- perform offboarding: remove identities with all their attributes, as users leave the company.

## Participants and Artifacts

Integrators are able to perform an identity update if they master the new data.

| Input                                                       | Output                      |
| ----------------------------------------------------------- | --------------------------- |
| Identity repository (required) New identity data (required) | Updated identity repository |

See the [ Create the Workforce Repository ](/docs/identitymanager/6.2/reference/index.md) topic
for additional information.

## Modify Identity Data

Modify identity data by proceeding as follows, according to the changes to be made:

- either update data individually by using predefined workflows in the UI; See the
  [ Update an Individual Identity ](/docs/identitymanager/6.2/reference/index.md) topic for additional information.
- or perform a same change on several identities simultaneously by using Identity Manager's
  predefined workflow in the UI; See the [ Update Identities in Bulk ](/docs/identitymanager/6.2/reference/index.md) topic
  for additional information.
- or update data on a massive scale by uploading an external file into Identity Manager, as an
  incremental version of the identity repository.

# Update an Individual Identity

How to manage onboarding, position changes and offboarding through the UI, for a single identity.

This part is not about changing the data model, but data itself.

## Overview

Individual changes in identity data can be handled using Identity Manager's predefined workflows to:

- [declare a new identity](#declare-a-new-identity) (for an internal as well as an external worker);
- [act on existing identities](#act-on-an-existing-identity), including modify their data, manage
  their contract and/or positions, suspend all accounts linked to them, or reactivate them, repair
  some data, or delete these identities.

## Participants and Artifacts

A given user's data can be updated occasionally by their manager, but most often by the HR
department.

| Input                                                                                                       | Output                      |
| ----------------------------------------------------------------------------------------------------------- | --------------------------- |
| [Identity repository](/docs/identitymanager/6.2/reference/index.md) (required) New identity data (required) | Updated identity repository |

## Declare a New Identity

Declare a new worker by proceeding as follows:

1. Access the user directory from the home page.

   ![Home Page - Directory User](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. According to the type of the user to be declared, click on the corresponding button.

   ![Workflow - New User](/img/product_docs/identitymanager/identitymanager/user-guide/maintain/identity-data-modification/individual-update/datamodif_newuser_v602.webp)

3. Follow the workflow's instructions to fill the form with the user's data, choose the user's
   entitlements from your [role catalog](/docs/identitymanager/6.2/reference/index.md) and
   send the request.

## Act on an Existing Identity

Act on an existing identity by proceeding as follows:

1. Access the user directory from the home page.

   ![Home Page - Directory User](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Click on the user to be modified.

   ![Workflow - User](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/manual-assignment-request/datamodif_user_v602.webp)

3. Click on **Actions** or **Helpdesk** to select the action to perform.

   ![Workflow - Modify Permissions](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/manual-assignment-request/datamodif_changeuser_v602.webp)

4. Follow the workflow's instructions.

   If the workflow has been configured in this way, the update request may require a review. In
   this case, sending the request triggers the display of said request on the **My Tasks** screen
   for the reviewer, while the state of the request is pending. In this case, the requested updates
   will be displayed in Identity Manager only after the request has been reviewed.

   ![Request - Review Pending](/img/product_docs/identitymanager/identitymanager/user-guide/maintain/identity-data-modification/individual-update/datamodif_reviewpending_v523.webp)

## Verify Data Update

In order to verify the process, check that the right data is displayed in the directory for the
involved user.

![Home Page - Directory User](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

# Update Identities in Bulk

How to perform a mass change in identity data, by uploading an incremental version of the identity
repository.

This part is not about changing the data model, but data itself.

Here we describe the incremental update of identities, but the update of any other File/CSV works
the same.

## Overview

When the number of changes gets high, identity data update through the UI becomes tedious.
Therefore, Identity Manager offers the possibility to fill a predefined file with data to be
modified, in order to perform all changes simultaneously.

Data update can be performed in complete mode or incremental mode.

## Participants and Artifacts

Identity data can be updated most often in cooperation with the HR department.

| Input                                                       | Output                      |
| ----------------------------------------------------------- | --------------------------- |
| Identity repository (required) New identity data (required) | Updated identity repository |

See the [ Create the Workforce Repository ](/docs/identitymanager/6.2/reference/index.md)
topic for additional information.

## Update Data in Complete Mode

Mass update identity data (in complete mode) by proceeding as follows:

1. Access the directory connector from **Connectors** on the home page, in the **Configuration**
   section.

   ![Home - Connectors](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/home_connectors_v602.webp)

2. On the connector's page, choose the connection corresponding to identities.
3. In the connection's settings, download the Excel template full of the data from your database.

   ![Download Full Template](/img/product_docs/identitymanager/identitymanager/user-guide/maintain/identity-data-modification/mass-update/datamodif_downloadtemplatedata_v602.webp)

4. Update the data that needs change.
5. Ensure that the field `Path (Complete mode)` is filled with the path of the source file.
6. Click on **Upload** and choose the file you modified with new data.

   ![Upload](/img/product_docs/identitymanager/identitymanager/user-guide/maintain/identity-data-modification/mass-update/connection_upload_v602.webp)

7. Click on **Check Connection** to verify the path.

   ![Check Connection](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connection-creation/connectioncreation_checkconnection_v602.webp)

8. Click on **Save & Close**.
9. Back on the connector's page, launch synchronization. See the
   [ Synchronize Data ](/docs/identitymanager/6.2/identity-management/synchronization/index.md) topic for additional information.

   Be cautious about thresholds.

## Update Data in Incremental Mode

Mass update identity data (in incremental mode) by proceeding as follows:

1. Access the directory connector from **Connectors** on the home page, in the **Configuration**
   section.

   ![Home - Connectors](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/home_connectors_v602.webp)

2. On the connector's page, choose the connection corresponding to identities.
3. In the connection's settings, download the empty Excel template.

   ![Download Full Template](/img/product_docs/identitymanager/identitymanager/user-guide/maintain/identity-data-modification/mass-update/datamodif_downloadtemplateempty_v602.webp)

4. Fill only the data to be modified, specify the unique identifier for each entry (for correlation
   purposes), and fill the column `Command`, which can take a few available inputs:

   - `Add` to incorporate new attributes;
   - `Modify` to change existing attributes;

     Attributes can be emptied using the value `NULL_NULL`.

   - `Delete` to remove attributes from the datamodel;

     Instead of using `Delete`, you can scan the data model to exclude unused attributes. See the
     [ Create the Workforce Repository ](/docs/identitymanager/6.2/reference/index.md)
     topic for additional information.

   - `Merge` to input an identity's data and modify the corresponding attributes if said identity
     already exists, create a new identity otherwise.
     > For example, if a few users switch working sites, then the modification is performed by
     > filling the file only with said users' identifiers and new sites. Fill the column
     > `Command` with `Modify`. The rest will not be changed.

5. Ensure that the field `Path (Incremental mode)` is filled with the path of the source file.
6. Click on **Upload** and choose the file you modified with new data.

   ![Upload](/img/product_docs/identitymanager/identitymanager/user-guide/maintain/identity-data-modification/mass-update/connection_upload_v602.webp)

7. Click on **Check Connection** to verify the path.

   ![Check Connection](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connection-creation/connectioncreation_checkconnection_v602.webp)

8. Click on **Save & Close**.
9. Back on the connector's page, launch synchronization. See the
   [ Synchronize Data ](/docs/identitymanager/6.2/identity-management/synchronization/index.md) topic for additional information.

   Be cautious about thresholds.

## Verify Data Update

In order to verify the process:

- Check manually a sample in the `User` directory accessible from the home page. You should verify
  at least your own sheet and the sheets for your hierarchy.

  ![Home - Directory User](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

- Check that every organization still has a manager. Organizations are accessible in the
  `Department` directory accessible from the home page.

  ![Home - Directory Department](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/home_directorydepartment_v523.webp)

  ![List of Departments](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/initialload_departments_v602.webp)

  If the system contains many organizations, then it is also possible to list them with their
  managers through the Query module.

- Create reports with indicators on the workers number per type or per organization for example
  (through Identity Manager' predefined reports, the Query module or Power BI), in order to ensure
  that Identity Manager's content sticks to reality. See the
  [ Generate Reports ](/docs/identitymanager/6.2/reference/index.md) topic for additional information.

# Update Multiple Identities

How to perform a same change in data for several identities simultaneously.

This part is not about changing the data model, but data itself.

## Overview

When a same change is needed by a high number of users, then Identity Manager provides a UI workflow
to perform this change for all selected identities simultaneously.

> For example, if a whole department in the company is moved to a new working site, then all users
> working in said department must have their `Site` attribute updated.

## Participants and Artifacts

Given users' data can be updated occasionally by their managers, but most often by the HR
department.

| Input                                                       | Output                      |
| ----------------------------------------------------------- | --------------------------- |
| Identity repository (required) New identity data (required) | Updated identity repository |

See the [ Create the Workforce Repository ](/docs/identitymanager/6.2/reference/index.md)
topic for additional information.

## Update

Perform multiple updates by proceeding as follows:

1. Click on **Multiple Updates**, accessible from the directory on the home page.

   ![Home Page - Multiple Updates](/img/product_docs/identitymanager/identitymanager/user-guide/maintain/identity-data-modification/multiple-update/home_multipleupdates_v523.webp)

2. Follow the workflow's instructions to perform the change, assign new entitlements if needed, and
   send the request.

   ![Multiple Updates Form](/img/product_docs/identitymanager/identitymanager/user-guide/maintain/identity-data-modification/multiple-update/datamodif_multipleform_v602.webp)

   If the workflow has been configured in this way, the update request may require a review. In
   this case, sending the request triggers the display of said request on the **My Tasks** screen
   for the reviewer, while the state of the request is pending. In this case, the requested updates
   will be displayed in Identity Manager only after the request has been reviewed.

   ![Request - Review Pending](/img/product_docs/identitymanager/identitymanager/user-guide/maintain/identity-data-modification/individual-update/datamodif_reviewpending_v523.webp)

## Verify Data Update

In order to verify the process:

- Check manually a sample in the `User` directory accessible from the home page. You should verify
  at least your own sheet and the sheets assigned to your hierarchy.

  ![Home - Directory User](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

- Check that every organization still has a manager. Organizations are accessible in the
  `Department` directory on the home page.

  ![Home - Directory Department](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/home_directorydepartment_v523.webp)

  ![List of Departments](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/initialload_departments_v602.webp)

  If the system contains numerous organizations, it is also possible to list them with their
  managers through the Query module.

- Create reports with indicators, for example, on the number of workers per type or per organization
  (through Identity Manager's predefined reports, the Query module or Power BI), to ensure that
  Identity Manager's content sticks to reality. See the
  [ Generate Reports ](/docs/identitymanager/6.2/reference/index.md) topic for additional information.

# Maintain

- [ Update Identity Data ](/docs/identitymanager/6.2/reference/index.md)

  How to perform modifications in the identity repository, to manage onboarding, offboarding and
  position changes.

  - [ Update an Individual Identity ](/docs/identitymanager/6.2/reference/index.md)

    How to perform changes in data for a single identity, through the UI.

  - [ Update Multiple Identities ](/docs/identitymanager/6.2/reference/index.md)

    How to perform a same change in data for several identities simultaneously, through the UI.

  - [ Update Identities in Bulk ](/docs/identitymanager/6.2/reference/index.md)

    How to perform a mass change in identity data, by uploading a complete or incremental
    version of the identity repository.

- [ Troubleshoot ](/docs/identitymanager/6.2/reference/index.md)

  How to troubleshoot Identity Manager when facing technical issues.

# Troubleshoot

How to troubleshoot Identity Manager when facing technical issues.

## Overview

Daily technical issues can lead to some unexpected results in Identity Manager. This page is meant
to give some clues and use cases in order to solve usual issues.

> For example, the issues described below can happen when there is a network cut, or an application
> IP address is being changed, or an important password is being modified.

See the
[ Troubleshoot Connector Jobs ](/docs/identitymanager/6.2/administration/jobs-tasks/job-configuration.md)
troubleshooting instructions concerning connector jobs.

### Prerequisites

In order to troubleshoot Identity Manager efficiently, the user, usually an application
administrator, must have access to:

- the connector screens, especially the jobs available there;

  ![Connector Jobs](/img/product_docs/identitymanager/identitymanager/user-guide/maintain/troubleshooting/troubleshooting_connectorjobs_v603.webp)

- the resource screens (identities, accounts, etc.) with their data, and especially their history
  and sources;

  ![User Data](/img/product_docs/identitymanager/identitymanager/user-guide/maintain/troubleshooting/troubleshooting_userdata_v603.webp)

- basic workflows, for example the usual helpdesk workflow, that give access to users' entitlements
  and enable data modification and repair.

  ![Helpdesk Workflow](/img/product_docs/identitymanager/identitymanager/user-guide/maintain/troubleshooting/troubleshooting_helpdesk_v603.webp)

## Participants and Artifacts

Here integrators give way to managers to handle the solution by themselves.

| Input                                                                                 | Output              |
| ------------------------------------------------------------------------------------- | ------------------- |
| [Implement Identity Manager](/docs/identitymanager/6.2/reference/index.md) (required) | Working environment |

## Troubleshoot Synchronization Issues

### Errored export task

If the export task ends with an error, then you should:

- check the task's logs;
- check the export files' dates in the `Temp/ExportOutput` folder;
- if there was an external problem, then relaunch the export in complete mode.

### Missing data after incremental synchronization

If the data is incomplete after incremental synchronization, then you should relaunch
synchronization in complete mode.

Netwrix Identity Manager (formerly Usercube) recommends scheduling an incremental synchronization
approximately every 15 minutes, and a complete synchronization once a day.

### Exceeded thresholds

If a synchronization threshold is exceeded, then check whether the threshold is legitimate. If not,
it means that the warning comes from a change in the managed system, so you should fix the data
directly in the managed system.

See more details on [ Synchronize Data ](/docs/identitymanager/6.2/identity-management/synchronization/index.md) thresholds.

## Troubleshoot Provisioning Issues

### Blocked provisioning orders

If provisioning orders are blocked while expected to be automatic, it can come from:

- the **Require Provisioning Review** option being enabled in the related resource type;
- the role model being computed through the
  [ Compute Role Model Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
  or the corresponding executable, with the block provisioning option;
- a provisioning order being already blocked for the same resource due to a prior operation;
- a correlation/classification rule with a confidence rate below 100%, which means that either
  important data is missing or the rule is not right.

**Verify:** After debugging the blocked-order situation, the related blocked orders must be reviewed
on the **Provisioning Review** screen to be unblocked.

### Errored provisioning orders

> For example, consider a provisioning task supposed to delete 150 accounts, while the relevant
> service account does not have the relevant writing rights. Thus it ends up with 150 errored
> provisioning orders.

If provisioning orders end up with an error, then you should check the errors' details in
**Provisioning Review** to determine where the error comes from.

**Verify:** After debugging the errored-order situation, unblock one provisioning order and relaunch
provisioning to make sure the fix gives the expected result. Only then, unblock all related errored
orders and relaunch provisioning.

If the error comes from miscalculated properties, for example missing parent dn or duplicated
logins, then you should review scalar and/or query rules.

**Verify:** After debugging the situation, recompute the role model for only one user to make sure
the fix gives the expected result. Only then, recompute the role model for all users through the
**Compute Role Model** job of connector screens.

To recompute the role model for only one user, you can use the helpdesk workflow. It will give you
access to the user's entitlements via the workflow's **Access Permissions** step, where you can
check the changes without having to validate.

### Incorrect provisioned values

If provisioning orders produce incorrect values, then it can come from:

- incorrect identity data, in which case you should select a test user, click on **View Sources** to
  see which sources contributed to the data, and click on **View History** to see when the data
  changed.
- wrong provisioning rules, i.e. scalar, navigation and/or query rules;

  **Verify:** After debugging the situation, use the helpdesk workflow to edit a field and check
  the changes for only one user to make sure the fix gives the expected result. Only then,
  recompute the role model for all users through the **Compute Role Model** job of connector
  screens. See more details on how to use the Troubleshoot workflow for debug purposes.

> For example, if identity data has changed and HR data has not, then it must come from the rules.

### Exceeded thresholds

If a provisioning threshold is exceeded, then check whether the threshold is legitimate. If not, it
means that the warning can come from:

- incorrect identity data, in which case you should select a test user, click on **View Sources** to
  see which sources contributed to the data, and click on **View History** to see when the data
  changed.
- wrong provisioning rules, i.e. scalar, navigation and/or query rules;

  **Verify:** After debugging the situation, use the helpdesk workflow to edit a field and check
  the changes for only one user to make sure the fix gives the expected result. Only then,
  recompute the role model for all users through the **Compute Role Model** job of connector
  screens. See more details on how to use the helpdesk Troubleshoot workflow for debug purposes.

## Troubleshoot Entitlement Issues

If users have unexpected entitlements, then you should click on an entitlement and/or access
**Workflow Overview** to see the entitlements' details, for example who requested them, etc.

# Automate Assignments

How to automate entitlement assignment.

## Overview

Once you are able to assign manually the right entitlements to the right identities for the right
reasons, you realize how tedious and error-prone entitlement assignment is, and you want to automate
it.

The strategy for the automation of entitlement assignment lies in the automatic making of assignment
decisions, based on several automation levels provided by Identity Manager:

1. Automation of the creation of the role model, i.e. both roles and navigation rules that represent
   entitlements in the managed systems, through
   [ Create Roles in Bulk ](/docs/identitymanager/6.2/reference/index.md)
   based on resources' naming conventions in the managed systems.
2. Automation of entitlement assignment through assignment rules, which use identity criteria
   (called dimensions, like identities' department or work location, etc.) to decide what
   entitlements to assign automatically to identities. See the
   [ Conforming Assignments ](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md)
   topic for additional information.
3. Automation of the creation of said assignment rules through
   [ Perform Role Mining ](/docs/identitymanager/6.2/access-governance/role-management/role-mining.md), based on existing data analysis.

![Automation Concept](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/automation_schema.webp)

Assignment rules can sometimes give to users an entitlement that they had already received manually.
Hence, new assignment rules can imply redundancies between the entitlements assigned manually and
approved, and those calculated by a rule and assigned automatically.

Netwrix Identity Manager (formerly Usercube) recommends
[Remove Redundant Assignments](/docs/identitymanager/6.2/reference/index.md) after any assignment rule is
created or updated.

The main goal of automation is to reach the optimal cost, playing on assignment efficiency, quality
and quantity.

### Assessment of manual assignment

So far, Identity Manager's configuration has enabled users to use workflows to add and remove
entitlements to/from identities. These assignments can be fulfilled manually or automatically, but
the decision-making process that defines who gets what entitlement is still manual. Manual
assignment poses the following risks:

- Delay can happen: on the day a worker joins an organization, they rely on a manual action to get
  all the entitlements required for them to start working. Even with roles aiming to help managers
  to understand actual entitlements, delay happens. See
  the[ Create Roles in the Role Catalog ](/docs/identitymanager/6.2/reference/index.md) topic
  for additional information.Errors can happen: human mistakes are expected in role distribution,
  even though largely mitigated by the role review process and
  [ Perform Access Certification ](/docs/identitymanager/6.2/reference/index.md). See the
  [ Reconcile a Role ](/docs/identitymanager/6.2/reference/index.md)
  topic for additional information.
- It is time-consuming.

The entitlement management cost mainly varies according to the number of managed entitlements.
Manual processing for entitlement requests implies a linear growth of the management cost according
to the number of managed entitlements.

![Optimal Cost Chart - Manual Assignments](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/automation_optimalcost_manual.webp)

### Automation benefits

There is a high potential gain coming with the automation of assignment decisions:

- Machine Learning masters the error rate, as it is used as a parameter for Role Mining, i.e.
  masters false positive assignments (entitlements assigned to a user while they ought not to) which
  constitute a security breach, and false negative assignments (entitlements not assigned to a user
  who needs it) which are functionnaly blocking;
- Machine Learning achieves lower error rates than people;
- Machine Learning can compute the role model way faster than a person. Consequently, the model can
  be computed more frequently and thus sticks closer to reality.

![Optimal Cost Chart - Automation Benefits](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/automation_optimalcost_automationbenefits.webp)

Automation helps integrators find basic assignment rules and face the previous risks, thus reducing
cost.

### Automation precautions

Assignments do not have to be automated all at once.

On the one hand, before being automatically assigned, entitlements can be merely suggested by
Identity Manager and assigned manually.

On the other hand, a distinction can be made between assignments according to their sensitivity, for
example using different error rates, or using simulation, or automating the assignment of basic
entitlements while suggesting sensitive entitlements, etc.

This way, security can be improved for example by making certification target only the sensitive
entitlements that cannot be processed by Machine Learning. There is no need anymore to certify
automatic assignments.

Plus, you can also use attributes as additional precautions, such as a grace period during which,
after the application of a rule revoking a resource/entitlement, managers can decide for each user
individually whether they need to keep said entitlement.

In a way, maturity with Machine Learning in IGA is much like a GPS: once we traveled using only
paper maps, before the first navigation tools were commercialized. Then we learned how to use these
tools, while keeping a map to be able to verify the GPS instructions. We found secure methods to
navigate through all GPS evolutions, until we trusted GPS enough to guide us completely.

### Automation limits

However, automation implies an increasing number of rules. And a high number of rules implies a
certain complexity in rule model understanding, and consequently hiring expensive expert contractors
to write the right rules. It drives up costs considerably and draws you near the automation wall.

![Optimal Cost Chart - Automation Limits](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/automation_optimalcost_automationlimits.webp)

The automation wall represents the automation threshold that cannot be overcome. It mostly comes
from the fact that with limited data, automation capabilities are also limited. Everything cannot be
automated.

### Automation strategy

The idea is to stop automation when the automatic cost curve increases faster than the manual cost
curve. The optimal profitability is represented on the chart and can be achieved via the optimal mix
of automatic and manual assignments.

![Optimal Cost Chart](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/automation_optimalcost.webp)

Automation strategy consists in using Machine Learning through Role Mining to get closer to the
automation wall. And, as Role Mining doesn't enable overcoming said wall, the goal is to move the
wall further away by improving data quality and quantity.

## Participants and Artifacts

At this point, integrators should have all the elements they need to operate.

| Input                   | Output                       |
| ----------------------- | ---------------------------- |
| Role Catalog (required) | Ideally automated role model |

See the[ Create Roles in the Role Catalog ](/docs/identitymanager/6.2/reference/index.md)
topic for additional information.

## Automate Entitlement Assignment

The process of assignment automation is the following:

1. [ Perform Role Mining ](/docs/identitymanager/6.2/access-governance/role-management/role-mining.md) to approach the automation wall.

   Role Mining covers more use cases than writing assignment rules manually. It diminishes the
   error rate and implies a lower execution cost. And thus, it brings the optimal cost closer to
   the automation wall.

   ![Optimal Cost Chart - Role Mining](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/automation_optimalcost_rolemining.webp)

   **Enlarge the number of managed entitlements by tolerating errors:**

   Automation reduces the error rate by avoiding human mistakes. Errors can still occur such as
   "[false positives](https://en.wikipedia.org/wiki/Binary_classification)", i.e. users receiving
   inappropriate entitlements, thus creating security issues. However, experience shows that a
   slight error tolerance in Role Mining can highly benefit automation.

   NETWRIX recommends trying Role Mining with **1%** tolerated false positives, and **99.5%**
   expected precision. Then adapt to your situation according to the reports.

   For example, suppose an organization working with many distinct departments. If you see that the
   automation rate skyrockets when the error rate reaches the number of workers in one department,
   then it probably means that Identity Manager misses data concerning one of the departments. Thus
   the error rate allows Identity Manager to "ignore" one of the departments in the organization,
   and optimize automation.

2. [ Generate Reports ](/docs/identitymanager/6.2/reference/index.md)and analyze them with tools like Power
   BI to assess the automation wall and identify improvement areas.

   > For example in the following Power BI chart, automation is, on average, highly implemented
   > except for `SharePoint Projects`. This fact reveals a low level of awareness among the workers
   > about their respective projects. This is a typical area for improvement in data quality.
   >
   > ![Data Quality Example](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/automation_dataquality_ex.webp)

   > For example, if charts show a high number of identities in the category `No Position`,
   > integrators understand that the data model must be completed for role mining to be efficient.
   >
   > ![Data Quantity Example](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/automation_dataquality_ex2.webp)

   > For example, if charts show a high number of unused roles, integrators understand that the
   > role model needs further improvement because roles are not adequate.
   >
   > ![Data Quality Example](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/automation_dataquality_ex3.webp)

   > For example, if charts show low automation rate per department, integrators will understand
   > that many identities may have switched departments while keeping their previous entitlements.
   >
   > ![Data Quality Example](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/automation_dataquality_ex4.webp)

3. Improve data quality and quantity to move the automation wall.

   Whether automatic or manual, assignment decisions are based on existing data analysis. Data
   quantity and quality therefore define the position of the wall.

   Improvement in existing data quantity and quality entails the possibility of managing a higher
   number of entitlements.

   ![Optimal Cost Chart - Improved Data](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/automation_optimalcost_data.webp)

   A high quantity of data simplifies data analysis and inferences in assignment rules.

   A high quality of data also simplifies data analysis and enables better accuracy in assignment
   rules.

   > For example, contractors' data is often less familiar to HR departments. Efforts can be made
   > in this direction to enhance automation.

   Moreover, focus must be directed on actual and correct entitlements, using Identity Manager's
   [ Perform Access Certification ](/docs/identitymanager/6.2/reference/index.md).

   Data reliability prevents integrators from easy extrapolation mistakes.

   > For example, consider the Netwrix Identity Manager (formerly Usercube) team in Marseilles
   > mostly composed of R&D workers. If integrators miss information, they might inadvertently
   > create a rule giving `R&D` group membership to all workers in Marseilles, while there are also
   > workers from other departments.

4. Repeat.

# Remove Redundant Assignments

How to remove redundant assignments, i.e. manual assignments of roles and resource types that are
assigned by a rule too. See the
[Entitlement Assignment](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md)
topic for additional information.

## Overview

Assignment rules can sometimes give to users an entitlement that they had already received manually.
Hence, new assignment rules can imply redundancies between the entitlements assigned manually and
approved, and those calculated by a rule and assigned automatically. See the
[ Automate Role Assignments ](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md) topic for additional
information.

Netwrix recommends removing redundant assignments after any assignment rule is created or updated.

This guide is about switching the manual assignments, which are allowed by the role model, into
calculated automatic entitlements handled by the role model. Once automatic, an entitlement is fully
part of the role model and stops constituting an exception.

### Assignment validity period

All entitlements are assigned on a given validity period, i.e. from a given start date to a given
end date:

- When assigning an entitlement to a user manually, the start and end dates are specified explicitly
  unless the end date is locked. See the
  [Create a Role Manually](/docs/identitymanager/6.2/reference/index.md)
  topic for additional information.
- When assigning entitlements to users via assignment rules, the start and end dates are based on
  the owner's data, for example their contract or position start/end dates. These assignments are
  automatic.

Netwrix recommends always preferring calculated assignments over manual ones, because calculated
assignments follow the changes in their owners' data and are consequently more secure.

For example, consider a user Helen who starts working as an architect with a given role.  
When assigning the role manually, when Helen changes her job, her manager will have to remove the
role manually. When assigning the role via a rule, when Helen changes a job, the role will be
removed automatically.

### Process

This process is an optimization of the role model. It is part of the "compute role model" process
where all rules of the role model are applied.

The classic behavior gives priority to approved manual entitlements over calculated automatic ones.
A manual assignment stays as is, even if the entitlement is also assigned by a rule.

For example, consider a user who has a given entitlement which was assigned to them manually on
several distinct time periods. When creating a rule that assigns the same entitlement to them
automatically on a given time period, then we have:

![Schema - Compute Role Model](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/remove-redundant-assignments/redundantassignments_examplewithout.webp)

The redundant assignment analysis gives priority to the rules inside the role model and the policy.
When an entitlement is assigned via a rule, it is stated as calculated, even if it is also assigned
manually. Thus, manual assignments whose start and end dates overlap with the validity period are to
be truncated or deleted.

For example, consider the same situation as before. Using the redundant assignments analysis, then
we have:

![Schema - Redundant Assignment Analysis](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/remove-redundant-assignments/redundantassignments_examplewith.webp)

Redundant assignments can be removed by Identity Manager only when the corresponding assigned items
are tagged as redundant and displayed in the most recent report. The manual assigned items that are
not tagged are still kept as discretionary entitlements and will not be removed.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application's users, entitlements and data model.

| Input                                                                           | Output                 |
| ------------------------------------------------------------------------------- | ---------------------- |
| Role catalog (required) Role assignment rules (required) Role mining (optional) | Minimized derogation’s |

See the
[ Create Roles in the Role Catalog ](/docs/identitymanager/6.2/reference/index.md),
[ Automate Role Assignments ](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md), and
[ Perform Role Mining ](/docs/identitymanager/6.2/access-governance/role-management/role-mining.md) topics for additional information.

## Remove Redundant Assignments

Remove redundant assignments by proceeding as follows:

![Home Page - Redundant Assignments](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/remove-redundant-assignments/home_redundantassignments_v602.webp)

**Step 1 –** Click on **Redundant Assignments** on the home page in the **Administration** section.

![Redundant Assignments - Buttons](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/remove-redundant-assignments/redundantassignments_buttons_v602.webp)

**Step 2 –** Click on **Analyze** to tag the manual roles and resource types from all policies
eligible for conversion to an automatic state.

**NOTE:** Previous tags are cleared at each instance of this tagging process.

**Step 3 –** Click on **Download Excel** to download a dedicated XLSX report which contains one tab
per entity type representing identities.

![Redundant Assignments - Report Example](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/remove-redundant-assignments/redundantassignments_reportexample_v602.webp)

The example states that in the entity type Directory_User, the user Nicholas Acosta had the single
role Banking/Sales/Eunomia/Administrator starting from February 28th 2023 (dateA) until May 16th
(dateD). A new single role rule assigns him this role from April 14th (dateB) until 25th 2023
(dateC).

It means that Nicholas Acosta will have the role in the **Calculated** state from dateB to dateC,
and he will keep the role in the **Approved** state from dateA to dateB and from dateC to dateD.

**Step 4 –** If the report's content is satisfying, then click on **Apply** to actually switch
eligible manual roles to calculated.

## Verify Redundant Assignment Removal

In order to verify the process:

![Home Page - Directory User](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

**Step 1 –** Access the user directory from the home page.

![View Permissions Tab](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

**Step 2 –** For one of the users mentioned in the report, access their permissions.

**Step 3 –** Check that their roles (mentioned in the report) have actually switched from approved
to calculated.

![Redundant Assignments - Result](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/assignment-automation/remove-redundant-assignments/redundantassignments_reportexampleverif_v602.webp)

When removing redundant assignments based on the previous report example the setting will be as
above.

Once the steps above completed, the state changes to **Approved**.

# Create a Composite Role

How to define composite roles in order to create sets of single roles easy to assign. See the
[ Composite Role ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
and [ Create Roles in the Role Catalog ](/docs/identitymanager/6.2/reference/index.md)topics
for additional information.

## Overview

A composite role is a set of single roles that are usually assigned together, because they revolve
around the same application, or the same job, etc. Composite roles are aggregates of single roles,
they can help organize the role catalog. See the
[ Composite Role ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
topic for additional information.

![Schema](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/composite-role-creation/compositeroles_applicativeroles.webp)

A composite role is a business role comprehensible by managers. It provides an additional layer of
abstraction above existing entitlements and single roles. We can say that if a single role allows a
user to perform a task, a composite role allows them to perform a job.

### Composite roles and Role Mining

Composite roles can also be created based on the rules provided by Role Mining. Rules link roles to
dimensions. See the [ Perform Role Mining ](/docs/identitymanager/6.2/access-governance/role-management/role-mining.md) topic for
additional information.

The following example shows single roles from A to F. Role Mining suggested the rules on the schema,
linking these single roles to the organizations R&D and Project as well as to the functions
developer, writer, contractor and project manager. The idea is to use these rules to create
composite roles. Here, we clearly have one role for R&D-developer, one for R&D-writer,
Project-contractor and Project-project manager. Thus, it is clear here that composite roles add an
abstraction layer.

![Example](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/composite-role-creation/compositeroles_schema.webp)

Single role rules link composite roles to single roles: a single role rule states that specific
single roles are assigned according to specific criteria, particularly composite roles. See the
[Single Role Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
and [ Create Roles in the Role Catalog ](/docs/identitymanager/6.2/reference/index.md)topics
for additional information. Thus, a composite role assignment can imply specific single role
assignments.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owners who know the
application's users, entitlements and data model.

| Input                   | Output          |
| ----------------------- | --------------- |
| Role catalog (required) | Composite roles |

See the [ Create Roles in the Role Catalog ](/docs/identitymanager/6.2/reference/index.md)
topic for additional information.

## Create a Composite Role

Create a composite role by proceeding as follows:

**Step 1 –** On the home page in the **Configuration** section, click on **Access Roles** to access
the roles page.

![Home Page - Access Roles](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.webp)

**Step 2 –** On the roles page, click on the adequate category and create a role by clicking on **+
New** at the top right corner.

**Step 3 –** Fill in the fields.

![singlerolescatalog_createcompositerole_v62](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/composite-role-creation/singlerolescatalog_createcompositerole_v62.webp)

- **Identifier**: must be unique among roles and without any whitespace.
- **Name**: will be displayed in the UI to identify the single role.
- **Policy**: policy in which the role exists.
- **Entity Type**: entity type targeted by the role.
- **Category**: category assigned to the role.
- **Secondary Categories**: other potential categories assigned to the role.
- **Approval Workflow**: represents the number of validations required to assign the role.
- Lock the end date: locks manual permission at the end date. Has four options:

  - Inherited: the policy's setting will be used.
  - Explicit: at the time of assignment, the end date can be specified manually or can be locked
    to the applicable context rule.
  - **Never**: the end date will never be locked and needs to be specified manually.
  - **Always**: the end date is always locked according to the applicable context rule.

- **Approve Role Implicitly**: needs at least a simple approval workflow. **Implicit** mode bypasses
  the approval step(s) if the person who issues the role request is also the role officer.
  **Explicit** refuses said bypass. **Inherited** follows the policy decision to approve roles
  implicitly or not.
- **Hide in Simplified View**: hides the role from the users' **Simplified View** in **View
  Permissions** dialog. This setting does not apply to roles which are either inferred or have
  workflow states which require manual action.
- **Comment Management on Permission Review**: to change if different from the role policy.
- **Maximum Duration**: duration (in minutes) after which the role will be automatically revoked, if
  no earlier end date is specified. It impacts only the roles which are manually assigned after the
  maximum duration is set. Pre-assigned roles are not impacted. If no duration is set on the role,
  the **MaxDuration** of the associated policy is applied. If the **MaxDuration** is set to 0 on the
  role, it prevents the associated policy from applying its **MaxDuration** to it.

**Step 4 –** Click on **Create** and see a line added on the roles page.

**Step 5 –** Create at least one single role rule with the composite role as a criterion.

## Impact of Modifications

When deleting a composite role, caution must be used when deleting the corresponding single role
rules. Indeed, these rules thus lose their criteria and may be applied to far too many people after
that.

Simulations are available in order to anticipate the changes induced by a
creation/modification/deletion in roles and single role rules. See the
[ Perform a Simulation ](/docs/identitymanager/6.2/access-governance/role-management/index.md)topic for additional information.

## Verify Composite Role Creation

In order to verify the process, check that the role and rule are created with the right parameters.

For roles, click on **Access Roles** on the home page in the **Configuration** section.

![Home Page - Access Roles](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.webp)

Select composite roles and find the role you created inside the right category and with the right
parameters.

![Access Composite Roles](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/composite-role-creation/compositeroles_testroles_v602.webp)

For rules, follow the instructions about assignment rules. See the
[ Automate Role Assignments ](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md)

# Create an HR Connector

How to create a connector dedicated to the automation of identity management (creation, update,
deletion), via the synchronization of HR data into Identity Manager and internal provisioning. See
the[ Connect to a Managed System ](/docs/identitymanager/6.2/reference/index.md)provisioning.

## Overview

### HR connector in the global process

The HR connector is no priority but rather an optimization, handled at the end of the configuration
cycle.

The HR connector is sometimes the first created connector, used to develop the identity repository.

However, the HR connector requires a specific IT infrastructure (agent, proxy, Virtual Machine,
etc.) which can take time to implement, and delay the project's progress.

Moreover, in the long run it poses a few problems as HR data usually misses crucial information such
as contractor data, or the projects employees are working on. This can mean that:

- the identity repository is filled using several sources. And when creating identities
  automatically from HR data and other sources, you need to specify which properties of each
  identity can be overwritten by a change in HR and which cannot. This is to avoid manually changed
  attributes being overwritten by the HR data by mistake. This is very tedious.
- the HR data is rarely up to date early enough to be really useful as a trigger for identity
  creation and deletion. As a result, identities end up being created manually through workflows
  most of the time.

Hence we choose to build the first iteration of the project upon a manual data upload to
[ Create the Workforce Repository ](/docs/identitymanager/6.2/reference/index.md).

This way, we do not have to wait for the agent's implementation to create the first profiles and
start connecting systems (AD, SAB, SAP, etc.). Thus value is created faster and we can focus on IGA
activities such as the review of orphaned and unused accounts, eliminating risk earlier in the
process.

We can still connect HR data, later on, to check consistency between our identity repository and HR
data, through a certification-like process.

### Technical details

An HR connector is considered an inbound connector, as it writes to the central identity repository
inside Identity Manager.

![Inbound System=](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/hr-connector-creation/connectorcreation_inbound.webp)

As Identity Manager is able to feed all managed systems, it can also feed itself thanks to specific
connections such as the
[InternalWorkflow](/docs/identitymanager/6.2/integration/workflows/index.md)
connection. It means that the corresponding connector is able to launch workflows within Identity
Manager and keep track.

Typically, an HR connector with such a connection would be able to launch workflows inside Identity
Manager for identity creation, update and deletion, based on HR files.

## Participants and Artifacts

This operation should be performed in cooperation with HR staff who can access HR data.

| Input                           | Output       |
| ------------------------------- | ------------ |
| Identity Repository. (required) | HR connector |

See the [ Create the Workforce Repository ](/docs/identitymanager/6.2/reference/index.md)topic
for additional information.

## Create an HR Connector

Create an HR connector by proceeding as follows:

1. Outside Identity Manager,
   [ Model the Data ](/docs/identitymanager/6.2/reference/index.md)of your connector.
2. Declare an HR connector using your local agent. See the
   [ Create the Connector ](/docs/identitymanager/6.2/reference/index.md) topic for
   additional information.

   ![HR Connector Declaration](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/hr-connector-creation/hr_connectordeclaration_v602.webp)

3. Create an Export CSV connection for each HR file to connect. See the
   [Create a Connection](/docs/identitymanager/6.2/reference/index.md) topic for
   additional information.

   ![HR Connection](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/hr-connector-creation/hr_connection_v602.webp)

4. [Create an Entity Type](/docs/identitymanager/6.2/reference/index.md) corresponding
   to your model. For example:

   ![HR Entity Type - Scalar Properties](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/hr-connector-creation/hr_entitytypes_v602.webp)

   ![HR Entity Type - Navigation Properties](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/hr-connector-creation/hr_entitytypen_v602.webp)

5. Don't forget to reload and [ Synchronize Data ](/docs/identitymanager/6.2/identity-management/synchronization/index.md) to access
   HR data within Identity Manager.

   ![Reload](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_reload_v522.webp)

   ![Synchronize Job](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/synchro_executionjobs_v602.webp)

## Verify HR Connector Creation

In order to verify the process:

1. Launch synchronization.
2. Access the connector's logs (from **Job Results** on the connector's dashboard) to ensure that
   synchronization completed successfully.

   ![Jobs Results](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/synchro_results_v603.webp)

3. Check that the entity types have been added to the left menu of the home page.

   ![Test Entity Type](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/hr-connector-creation/hr_validatemenu_v600.webp)

4. Access the relevant entity types (from the menu items on the left of the home page) to check
   synchronized resources, by navigating in the UI from the accounts through a sample of
   associations, via the Eye icon:

   ![Eye Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/iconeye_v600.svg)

   You should seek configuration validation, not validation of the actual data being synchronized.

# Modify the Identity Data Model

How to make data model properties evolve according to the organization's needs.

## Overview

The identity data model must contain all the information needed to manage identities and their
permissions, and only the information strictly required for this purpose.

You already considered the data needed for identity management during:

- The initial identities loading and the creation of the identity repository; See the
  [ Create the Workforce Repository ](/docs/identitymanager/6.2/reference/index.md) topic for
  additional information.
- [ Model the Data ](/docs/identitymanager/6.2/reference/index.md)through connector
  modeling which is the analysis phase before connector creation;
- [Create an Entity Type](/docs/identitymanager/6.2/reference/index.md) which is the
  technical implementation of the connector model.

The data model established during these steps might change to evolve alongside the needs of the
connected systems, the management strategy, and any change in the organization such as a change of
structure, a new division, etc.

This part is about integrating these changes in the existing data model.

### Dimensions

Identity Manager calls dimensions the attributes that assignment rules rely on. They are essential
criteria that differentiate users in order to give them the appropriate roles. See the
[ Conforming Assignments ](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md)
topic for additional information.

### Personal data security

Only professional data should be used in the identity data model, not personal data.

## Participants and Artifacts

Integrators are able to perform an identity update if they master the new data model.

| Input                                                                    | Output                      |
| ------------------------------------------------------------------------ | --------------------------- |
| Initial identities loading (required) New identity data model (required) | Updated identity data model |

See the [ Create the Workforce Repository ](/docs/identitymanager/6.2/reference/index.md) topic
for additional information.

## Add or Modify Properties

The data model can be updated in the UI via a feature scanning the data model. This scan performs an
analysis on the data previously imported through the Excel file. It detects properties which are
always empty and suggests to remove them from the data model, for clarity purposes.

> For example, some systems don't store phone numbers. Then, scanning the data model will allow
> Identity Manager to suggest removing the property about phone numbers. Note that Identity Manager
> only provides suggestions but makes no decision. You could choose to keep the phone number
> property anyway in order to fill it later.

NETWRIX recommends updating the data model through the scan feature, as this feature is driven by
Identity Manager's suggestions.

However, the identity data model can also be updated through the directory's entity types, following
the previously given
[Create an Entity Type](/docs/identitymanager/6.2/reference/index.md).

### Through a data model scan

Add or modify properties within the identity data model by proceeding as follows:

1. On the home page, click on **Settings** in the **Configuration** section.

   ![Home Page - Configuration](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-configuration/home_settings_v523.webp)

2. Access the data model on the **Workforce** > **Data Model** page.
3. Change the display option to show or hide properties in the identity repository.

   ![Scan Data Model - Display Option](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/identity-datamodel-modification/datamodelmodif_scan_v600.webp)

4. After your changes are complete, click on the Save icon at the top.

   ![Save Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-configuration/iconsave_v602.svg)

5. Click on the **Reload** button to apply the recent changes to the application.

   ![Reload Button](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/generate-unique-properties/reload_v603.webp)

## Delete Properties

Integrators should keep in mind that the fields that they want to delete might be used in connectors
or other places they didn't think about. Existing assignments might be impacted.

Identity Manager suggests the removal only of empty fields. In this case, there is nothing to worry
about.

## Verify Data Model Modification

In order to verify the process:

- Check manually a sample in the user directory accessible from the home page. You should verify at
  least your own sheet and the sheets assigned to your hierarchy.

  ![Home - Directory User](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

- Check that every organization still has a manager. Organizations are accessible in the department
  directory accessible from the home page.

  ![Home - Directory Department](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/home_directorydepartment_v523.webp)

  ![List of Departments](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/initialload_departments_v602.webp)

  If the system contains numerous organizations, it is also possible to list them with their
  managers through the Query module. See
  the[ Generate Reports ](/docs/identitymanager/6.2/reference/index.md) topic for additional information.

- [ Generate Reports ](/docs/identitymanager/6.2/reference/index.md) with indicators, for example, on the
  number of workers per type or per organization (through Identity Manager's predefined reports, the
  Query module or Power BI), to ensure that Identity Manager's content sticks to reality.

# Optimize

- [ Modify the Identity Data Model ](/docs/identitymanager/6.2/reference/index.md)

  How to make data model properties evolve according to the organization's needs.

- [ Create an HR Connector ](/docs/identitymanager/6.2/reference/index.md)

  How to create a connector dedicated to the automation of identity management (creation, update,
  deletion), via the synchronization of HR data into Identity Manager and internal provisioning.

- [ Manage Risks ](/docs/identitymanager/6.2/reference/index.md)

  How to use the risk management module to identify entitlement assignments that pose a security
  risk, especially about segregation of duties and high privileges.

- [Create a Policy](/docs/identitymanager/6.2/reference/index.md)

  How to define policies to organize roles and rules.

- [Automate the Review of Non-conforming Assignments](/docs/identitymanager/6.2/reference/index.md)

  How to automate the review of non-conforming assignments through automation rules.

- [ Automate Assignments ](/docs/identitymanager/6.2/reference/index.md)

  How to automate entitlement assignment.

- [ Automate Role Assignments ](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md)

  How to manually build rules to automate the assignment of roles to identities.

- [ Perform Role Mining ](/docs/identitymanager/6.2/access-governance/role-management/role-mining.md)

  How to use role mining to suggest role assignment rules based on existing assignments, in order
  to push the automation wall further.

- [Remove Redundant Assignments](/docs/identitymanager/6.2/reference/index.md)

  How to remove redundant assignments, i.e. manual assignments of roles and resource types that
  are assigned by a rule too.

- [Create a Composite Role](/docs/identitymanager/6.2/reference/index.md)

  How to define composite roles in order to create sets of single roles easy to assign.

- [Configure a Parametrized Role](/docs/identitymanager/6.2/reference/index.md)

  How to reduce the number of roles in the model by configuring roles with parameters.

- [ Perform a Simulation ](/docs/identitymanager/6.2/access-governance/role-management/index.md)

  How to assess the impact of a modification on the role model, including the role catalog, role
  assignment rules and resource correlation rules, using a dedicated policy.

# Automate the Review of Non-conforming Assignments

How to automate the review of non-conforming assignments through automation rules. See the
[ Review Non-conforming Assignments ](/docs/identitymanager/6.2/reference/index.md)
and
[Automation Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
topics for additional information.

## Overview

Non-conforming assignments can't be reviewed entirely automatically because this type of review
sometimes needs the intervention of a knowledgeable user. However, automation rules can help by
making automatic decisions (in place of the reviewer) on assignments that need to be reviewed after
a given waiting period.

This type of rule is useful for example, when integrators intend to:

- Decline all non-conforming assignments after X days to avoid accumulation. The waiting time can be
  null if they need to delete non-conforming assignments as soon as they are detected;
- Automatically approve or decline discretionary requests if there is no validation after X days;
- Send notifications to validators before declining or approving pending approval assignments;
- Get information in order to deactivate an AD account if it hasn't been used in the past X days,
  before deleting it.

Integrators must show caution with pending approval assignments because this type of rule could
short-circuit the whole approval process.

## Participants and Artifacts

This operation should be performed in cooperation with managers who know the organization and their
team's entitlements.

| Input                                                                                | Output                      |
| ------------------------------------------------------------------------------------ | --------------------------- |
| Mastered non-conforming assignment review (required) Categorized accounts (optional) | Automated assignment review |

See the
[ Review Non-conforming Assignments ](/docs/identitymanager/6.2/reference/index.md)
and [ Categorize Resources ](/docs/identitymanager/6.2/reference/index.md) topics for additional
information.

## Create an Automation Rule

Create an automation rule by proceeding as follows:

![Home Page - Access Rules](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

**Step 1 –** On the home page in the **Configuration** section, click on **Access Rules**.

![Entity Type Choice](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/provrules_entitytype_v602.webp)

**Step 2 –** In the dropdown menu at the top left, choose the entity type to which the future rule
will be applied.

![Addition Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-assignment/iconadd_v602.webp)

**Step 3 –** Click on the **Automations** tab and on the addition button at the top right corner.

![New Automation Rule](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/non-conforming-assignment-review-automation/reviewautomation_newrulefields_v602.webp)

**Step 4 –** Fill in the fields.

- Decision — Action to be taken on the described assignments.
- Criteria — Conditions that, if met, trigger the rule.  
  Currently, the criteria are used to match the context of an assignment and not the user data.  
  For example, if a single role is assigned based on a specific Department, then the context of the
  assignment has the information about the Department. In that case, an automation rule having in
  its dimensions that given Department will match this assignment and could Deny/Accept it.
- However, if a single role is assigned without any context on the Department (for example, a manual
  assignment with no parameter on the role), the automation rule will never match this assignment.
- **NOTE:** No context will never be present for non-conforming or pre-existing roles
- Type — Assignment type concerned by the new rule. Once filled, a new field is displayed to select
  precisely an object from the existing objects belonging to this type.
- Workflow State — Workflow state of the assignments that need a decision.
- Waiting Period — Time period since the last change in the assignments' workflow states.

_Remember,_ in a nutshell, this rule applies Decision to all assignments of Type (and matching all
criteria), whose workflow state has been set to Workflow State for more than Waiting Period.

## Impact of Modifications

A modification in an automation rule doesn't impact the assignments affected by the previous version
of the rule.

## Verify Review Automation

In order to verify the process:

**Step 1 –** On the **Role Review** or **Role Reconciliation** screen, spot an entitlement
assignment.

**Step 2 –** Create an automation rule matching said assignment.

![Home Page - Job Execution](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/home_jobexecution_v602.webp)

**Step 3 –** Compute the role model through the complete job on the **Job Execution** page.

**Step 4 –** Check on the **Role Review** page that the assignment's workflow state changed
according to the rule's settings.

![New Automation Rule](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/non-conforming-assignment-review-automation/reviewautomation_rulemessage_v522.webp)

Any role affected by an automation rule shows a specific message on the **Role Review** page.

# Configure a Parametrized Role

How to reduce the number of roles in the model by configuring roles with parameters.

## Overview

The assignment of a role to a user gives them an entitlement, usually a group membership, thanks to
a navigation rule. See the
[ Create Roles in the Role Catalog ](/docs/identitymanager/6.2/reference/index.md) topic for
additional information.

![Simple Role](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/parameterized-role/parameterizedroles_simplerole.webp)

To enable the assignment of all existing entitlements, the role model usually contains numerous
roles.

For example, the SAP role can be given with slight differences according to the users' subsidiaries:

> ![Role Matrix](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/parameterized-role/parameterizedroles_numerousroles.webp)

In order to reduce the number of roles, we can configure roles with parameters by inserting a
criterion in the navigation rules. Thus, instead of having as many roles as entitlements (left on
the schema), we can have way fewer roles (right on the schema).

![With/Without Parameters](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/parameterized-role/parameterizedroles_parameters.webp)

In the previous example, with a parameter on the subsidiary, the number of roles would be divided by
three.

By extension, a composite role that assigns a parametrized single role is parametrized too.

This way, when assigning a parametrized role, a pop-up window is displayed where the parameter must
be specified.

The same thing goes with type rules instead of navigation rules when we want to assign resource
types instead of entitlements.

## Configure a Parametrized Role

Configure a parametrized role by proceeding as follows:

**Step 1 –** Create in XML a dimension corresponding to the parameter that will affect the role. See
the [ Dimension ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
topic for additional information.

For example, let's consider that we have many roles available on three different time slots: 8 hours
a day, 12 hours a day, or 24 hours a day. We create a dimension for these time slots.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<Dimension Identifier="TimeSlot" DisplayName_L1="Time Slot" EntityType="Access_TimeSlot" ColumnMapping="10" IsExcludedFromRoleMining="true" />
```

![Example - Role](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/parameterized-role/parameterizedrole_examplerole_v603.webp)

**Step 2 –** Create a single role. See the
[Create a Role Manually](/docs/identitymanager/6.2/reference/index.md)
topic for additional information.

**Step 3 –** Create one navigation rule linked to the role for each available value of the
parameter. See the
[Create a Role Manually](/docs/identitymanager/6.2/reference/index.md)
topic for additional information.

Here we have three navigation rules, one for each distinct time slot (dimension A). For example:

![Example - Rule](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/parameterized-role/parameterizedrole_examplerule_v603.webp)

**NOTE:** Make sure that the corresponding dimension is specified in the right `DisplayEntityType`
in XML to be displayed in the UI.

**NOTE:** It is important to note that for manually assigned roles, if a new dimension is added to
the definition of the role, the assignment's dimension will not be re-calculated, and will therefore
not be propagated to calculate automatic assignments.  
Example Scenario — Role A was created as a composite role with no parameters a long time ago. Role A
was later updated to depend on the optional parameter X and a single role rule was created to assign
a single role B if a user had Role A and parameter X set to value Y.  
If a user already manually had the role A, even if its dimension X (for example its department,
which could be calculated) was equal to value Y, got its permissions recalculated, that person would
not get the role B. Since the modification occurred after the assignment, it is understood as if the
role was assigned voluntarily with dimension X unset.  
However, if a user got role A assigned after the modification, and its dimension X was equal to
value Y, then that user would get the role B.

![Example - Role Parameter Required](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/parameterized-role/parameterizedrole_exampleroleparameter_v603.webp)

**Step 4 –** Go back to the roles page to edit the single role from step 2, if needing to set the
parameter required.

If you want Identity Manager to provide suggestions to set the parameter's value, then make sure
that users'
[context rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
specifies the dimension.

For example, with the `Title` dimension:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

<ContextRule Identifier="Directory_User" DisplayName_L1="Directory_User" B0="Directory_UserRecord:Organization" B1="Directory_UserRecord:Title" B2="Directory_UserRecord:Site" B3="Directory_UserRecord:Site.Region.Country" B4="Directory_UserRecord:UserType.Category" ... Policy="Default" SourceEntityType="Directory_User" />

```

## Verify the Parametrized Role

In order to verify the process, request manually the parametrized role for a test user. Some
additional pop-ups are displayed to set a value for the role's parameter. See the
[ Request Entitlement Assignment ](/docs/identitymanager/6.2/reference/index.md) topic for
additional information.

In our example:

![Example - Step 1](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/parameterized-role/parameterizedroles_parameterexamplestep1_v603.webp)

![Example - Step 2](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/parameterized-role/parameterizedroles_parameterexamplestep2_v603.webp)

If the dimension is specified in the users' context rule, then Identity Manager will provide
suggestions.

![Example - Suggestion](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/parameterized-role/parameterizedrole_examplerolesuggestion_v603.webp)

For example, concerning the `Title` dimension mentioned above.

# Create a Policy

How to define policies to organize roles and rules. See the
[Policy](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic
for additional information.

## Overview

A policy is a subgroup of the role model. It defines an ensemble of roles and assignment rules that
apply to specific identities. So policies are used to handle separately several sets of identities,
based on dimensions with different permissions and workflows. See the
[ Create Roles in the Role Catalog ](/docs/identitymanager/6.2/reference/index.md) and
[ Conforming Assignments ](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md)topics
for additional information.

Integrators must minimize the number of policies because it segments identities, and segmentation
implies high maintenance. Netwrix recommends using one policy per population. A population is a
group of people that can be managed following the same rules, role model, workflows, etc. This
means, for example, one policy for workers (meaning employees and contractors), another one for
partners, another one for clients. But sometimes partners are included in the same policy as
workers, it depends on the organization.

**NOTE:** Netwrix Identity Manager (formerly Usercube) provides a default policy. Only when the
project is mature enough should integrators think about creating additional policies.

## Participants and Artifacts

Integrators must have the knowledge of the organization strategy towards identity management.

| Input                    | Output |
| ------------------------ | ------ |
| Resource type (optional) | Policy |

See the [ Create a Resource Type ](/docs/identitymanager/6.2/reference/index.md)
topic for additional information.

## Create a Policy

Create a policy by proceeding as follows:

![Home - Access Policies](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/policy-creation/home_accesspolicies_v602.webp)

**Step 1 –** Access the policies screen by clicking on **Access Policies** on the home page in the
**Configuration** section.

![New Policy](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/policy-creation/policycreation_policies_v602.webp)

**Step 2 –** Click on **+ New policy** at the top right corner.

![createpolicy](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/policy-creation/createpolicy.webp)

**Step 3 –** Fill in the information fields.

The UI elements are identified as follows:

- Identifier — Must be unique among policies and without any whitespace
- Name — Will be displayed in the UI to identify the resource type
- Provisioning — Allows provisioning for the policy
- Simulation — Allows simulation creation for the policy
- Approve Roles Implicitly — Can be enabled to bypass approval steps if the person who issues a
  given role request is also the role officer
- Roles can be prolonged without a new approval workflow — Enables the policy's roles and resource
  types to have their assignment's end dates postponed without any validation
- Is Managed by External Source — Can be enabled only during policy creation to indicate that its
  permissions are managed by another IGA tool and are to be ignored by Identity Manager's role model
  computation
- Maximum Duration — Duration (in minutes) after which the policy's roles and resource types will be
  automatically revoked, if no earlier end date is specified. It impacts only the roles and resource
  types which are manually assigned after the maximum duration is set. Pre-assigned items are not
  impacted.
- Grace Period — Duration (in minutes) for which a lost automatic role or resource type is
  prolonged. A review will be required to validate or decline the entitlement prolongation. Inferred
  entitlements won't be lost unless the end of the grace period is reached or the prolongation is
  declined.
- Lock the end date — locks manual permission's at the end date

  - Explicit, by default not context bound — By default, the assignment's end date will not be
    context bound in order to encourage the manual entry of an end date
  - Explicit, by default context bound — By default, the assignment's end date will be context
    bound and therefore locked, but a manual date can be entered
  - Never — The assignment's end date will never be locked and needs to be specified manually
  - Always — The assignment's end date is always locked according to the applicable context rule
  - Dimensions — Criteria that, if met, trigger the membership of given identities to the policy

**NOTE:** What we call another IGA tool can be another application or even another version of
Identity Manager.

**Step 4 –** Click on **Create**.

Once you have completed the steps the policy is created.

## Verify Policy Creation

In order to verify the process, check that the policy has been added with the right options to the
list on the **Access Policies** page.

# Manage Risks

How to use the [ Risk Management ](/docs/identitymanager/6.2/access-governance/risk-management.md) module to
identify entitlement assignments that pose a security risk, especially about segregation of duties
and high privileges.

## Overview

A [ Risk ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
describes a sensitive situation in which entitlement assignments need to be monitored for security
purposes. Examples include:

- Segregation of duties: a situation where at least two entitlements pose a risk when assigned to
  the same identity.
- High privilege: a particularly sensitive entitlement.

[ Risk Management ](/docs/identitymanager/6.2/access-governance/risk-management.md) is essential to auditing.
Among other things, it allows auditors to:

- Identify the identities representing the highest security risk.
- Compute the corresponding risk score.
- Schedule and [ Perform Access Certification ](/docs/identitymanager/6.2/reference/index.md)
  accordingly.

Using risks involves three steps:

1. Create a risk: declare the nature of the risk.
2. Create risk rules: create the rules that assign risks to identities, depending on identities'
   entitlement assignments.
3. Monitor risks: via the **Identified Risks** screen or certification campaigns.

## Participants and Artifacts

Integrators may need the help of the application owner, security manager and role model officers to
assess risks inherent to entitlements.

| Input                                                  | Output        |
| ------------------------------------------------------ | ------------- |
| Identity repository (required) Role catalog (required) | Risks catalog |

See the [ Create the Workforce Repository ](/docs/identitymanager/6.2/reference/index.md) and
[ Create Roles in the Role Catalog ](/docs/identitymanager/6.2/reference/index.md) topics for
additional information.

## Create a Risk

Create a risk by proceeding as follows:

1. On the home page in the **Configuration** section, click on **Risks**.

   ![Home Page - Risks](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/risk-management/home_risks_v602.webp)

2. On the risks page, click on the addition button at the top right corner.

   ![Addition Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

3. Fill in the fields.

   ![New Risk](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/risk-management/riskmanagement_newrisk_v602.webp)

   - `Identifier`: must be unique among risks and without any whitespace.
   - `Name`: will be displayed in the UI to identify the risk.
   - `Policy`: [Create a Policy](/docs/identitymanager/6.2/reference/index.md) in which the risk exists.
   - `Entity Type`:
     [Create an Entity Type](/docs/identitymanager/6.2/reference/index.md) targeted by
     the risk.
   - `Description`: explanation of the risk that will be displayed with the exemption policy
     message.
   - `Remediation`: potential alternative solutions that will be displayed with the exemption
     policy message.
   - `Exemption Policy` See the
     [ Risk Management ](/docs/identitymanager/6.2/access-governance/risk-management.md) topic for additional
     information.
   - `Type`
   - `Level`: risk level that is used to compute risk scores.
   - `Rules`: a risk is based on the union of rules, themselves based on the intersection of rule
     items. A rule item specifies the risk-triggering resource(s). A high-privilege risk must
     contain at least one rule with one rule item. A segregation-of-duties risk must contain at
     least two rule items in the same rule.

   When risks are based on the exemption policy called **Approval required**, the corresponding
   role requests appear on the **Role Review** screen with a specific workflow state. See below
   this note. See the
   [ Reconcile a Role ](/docs/identitymanager/6.2/reference/index.md)
   topic for additional information.

   ![Risk Icon](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/risk-management/riskmanagement_workflowstate_v523.webp)

   ### Write risk rules

   A risk rule is simply the condition that triggers the assignment of a risk to an identity,
   depending on the identity's entitlements.

   Within Identity Manager, an entitlement assigned to an identity is represented by the value of a
   given navigation property, in a resource owned by said identity. See the
   [Create an Entity Type](/docs/identitymanager/6.2/reference/index.md) topic for
   additional information.

   > For example, imagine that we want to grant unlimited Internet access to the administrator
   > profile of an identity. This entitlement won't be assigned directly to the identity but to
   > their AD administration account. In our Active Directory, there is a resource called
   > `DL-INTERNET-Restricted` identified from among AD entries as a group. Therefore, we need to
   > add this group membership to the properties of the identity's AD account, using
   > `DL-INTERNET-Restricted` as a value of the `memberOf` property.

4. Choose the resource type to be targetted by the risk. See the
   [ Categorize Resources ](/docs/identitymanager/6.2/reference/index.md) topic for additional information.

   > We choose `AD User (administration)` to prevent this situation from happening in our example.

5. Choose the navigation property that corresponds to the situation.

   > `memberOf` in our example.

6. Choose a value for this navigation property. The value would be a resource from the unified
   resource repository. See the
   [ Identity Management ](/docs/identitymanager/6.2/identity-management/index.md) topic
   for additional information.

   > The group `DL-INTERNET-Restricted` in our example.

   ![Risk Item Example](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/risk-management/riskmanagement_newriskitem_v602.webp)

   This final value is an entitlement, linked to the owner identity through the navigation property
   and the ownership relationship.

   This final value is an entitlement, linked to the owner identity through the navigation property
   and the ownership relationship.

   > In our example, a risk is identified for a person as soon as their administration AD account
   > is part of the `DL-INTERNET-Restricted` group.

7. Click on **Create**.

   Risks are taken into account from the moment the `Compute Resource Risk Scores` task runs (or
   the complete job which contains said task).

   The `Compute Resource Risk Scores` task doesn't need to be launched right away, but new risks
   can't be identified before it runs at least once.

## Monitor Identified Risks

After creating at least one risk and computing risk scores, identified risks are listed on the
**Identified Risks** screen, accessible from the home page in the **Administration** section.

![Home Page - Identified Risks](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/risk-management/home_identifiedrisks_v602.webp)

![Identified Risks](/img/product_docs/identitymanager/identitymanager/user-guide/optimize/risk-management/riskmanagement_identifiedrisks_v522.webp)

For a given identity in the list, user information can be viewed and accessed by clicking
respectively on the eye and arrow buttons on the right-hand side.

## Impact of Modifications

Modifications in a risk are taken into account only after running the `Compute Risk Scores` task.
Therefore, risk scores are computed according to the new parameters.

**After a modification:** while risk scores are computed for all identities and assignments
(pre-existing and newly created), a modified exemption policy is applied only to future entitlement
assignments. For example, changing the exemption policy of a risk from warning to blocking won't
remove entitlements from the identities who already have them. But future assignments are going to
be blocked.

The deletion of a risk simply triggers the computation of risk scores during the next
`Compute Risk Scores` task, and removes any exemption policy steps in an assignment request. See the
[ Risk Management ](/docs/identitymanager/6.2/access-governance/risk-management.md) topic for additional
information.

## Verify Risk Management

In order to verify the process, assign to a fake identity a permission that is supposed to trigger
the created risk, and check the consequences:

- The message displayed at the end of the entitlement request must correspond to the configuration
  of the exemption policy. See the
  [ Risk Management ](/docs/identitymanager/6.2/access-governance/risk-management.md) topic for additional
  information.
- Once the entitlement is assigned, a line must appear on the **Identified Risks** page.

# Classify Resources

How to define
[ Resource Classification Rule ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
in order to classify remaining uncorrelated resources, assigning them resource types. See the
[ Create a Resource Type ](/docs/identitymanager/6.2/reference/index.md) topic for additional information.

## Overview

### Classification purpose

Classification is the process of putting on an existing resource a label called resource type, to
show its intent and/or purpose within the managed system. See the
[ Entitlement Management ](/docs/identitymanager/6.2/reference/index.md)
topic for additional information.

Every resource type can be assigned a set of classification rules.

### About the confidence rate

As the aim here is to classify uncorrelated resources in a given managed system, classification
rules are going to rely on the patterns in resources' attributes, such as naming conventions.

Sometimes, the managed system doesn't use rigorous rules and thus data quality isn't enough to allow
the creation of a single infallible correlation/classification rule for all resources. Hence, you
may need to create several correlation/classification rules.

Each rule is configured with a confidence rate to express its reliability, according to data quality
and sensitivity.

In our case, correlation/classification can be based on a first rule applicable to quality data
resources with a high confidence rate, and a second rule applicable to resources with a lower data
quality. This second rule is going to have a lower confidence rate, thus a lower priority, because
the strategy is to apply the first rule as much as possible. But the second rule is essential in
case the first one doesn't apply, though it cannot be trusted as much as the first rule.

Hence correlation/classification rules are configured with a confidence rate:

- from 100 to 150% to correlate resources automatically without a manual validation;
- from 0 to 99% to impose that a resource manager reviews the correlation/classification.

Identity Manager considers the rules in descending order of confidence rate. The first matching rule
is applied.

In other words:

- if there is at least one matching rule with a confidence rate above 100%, then the one with the
  highest rate is applied;
- if there isn't and there is at least one matching rule with a confidence rate below 100%, then the
  one with the highest rate is suggested.

There is no predefined priority order between two rules with the same confidence rate.

### Focus on reviews

When the confidence rate is below 100%, correlation and classification reviews are to be done:

- on the **Provisioning Review** page when the owned resource is allowed by the role model, i.e.
  requested manually or assigned automatically by a resource type rule;

  ![Correlation Review - Provisioning Review Screen](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/categorization_reviewsprovisioningreview_v603.webp)

- on the **Resource Reconciliation** page when the owned resource is not allowed by the role model,
  i.e. not requested manually nor assigned by a resource type rule. For example, the creation of a
  correlation rule without a resource type rule triggers unauthorized accounts on the **Resource
  Reconciliation** page.

  ![Correlation Review - Resource Reconciliation Screen](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/categorization_reviewsresourcereconciliation_v603.webp)

Broadly speaking, the **Resource Reconciliation** page displays non-conforming assignments/values
(gaps), i.e. resources and property values from the managed systems that are not allowed by a rule
in Identity Manager. The **Provisioning Review** page displays the resource and property changes
whose workflows require a manual approval.

### Classification rule example

Classification rules are commonly based on logins or organizational units. Account types are usually
assigned specific strings to be easily recognized, such as for example `adm` for administrator
accounts. They can also include the employee identifier which includes specific digits according to
the account type.

Consider an organization that places basic users in organizational units `Users` and `Locations`
with a CN starting with `U`. This means that a basic user should have a `dn` attribute different
from zero, containing `OU=Users` and `OU=Locations`, and starting with `CN=U`. Then, a
classification rule could take as a target expression:

```

return resource.dn != null && resource.dn.Contains("OU=Users,") && resource.dn.Contains("OU=Locations,") && resource.dn.StartsWith("CN=U");

```

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application users, entitlements and data model.

| Input                                                                                                                                                                                                                                                                           | Output               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| [ Create a Resource Type ](/docs/identitymanager/6.2/reference/index.md) (required) [ Synchronize Data ](/docs/identitymanager/6.2/identity-management/synchronization/index.md) (required) [ Correlate Resources ](/docs/identitymanager/6.2/reference/index.md) (recommended) | Classification rules |

## Create a Classification Rule

The principle of a classification rule is to use the expression of the target object, to assign (or
not), the resource type to said object.

Fill a resource type with a classification rule by proceeding as follows:

1. On the relevant resource type's page, click on **Classification Rules** and the addition icon.

   ![New Classification Rule](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/resourcetype_newclassifrule_v602.webp)

   Classification rules can also be created through the **Access Rules** screen (accessible from
   the home page, in the **Configuration** section), clicking on the **Classifications** tab and
   the addition button at the top right corner.

   ![Home - Access Rules](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

   ![Addition Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

2. Fill in the fields.

   ![New Classification Rule Fields](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/resourcetype_newclassifrulefields_v602.webp)

   - **Target Object** > `Expression`: C# expression based on the resource that needs to be
     classified.
   - `Confidence Rate`: rate expressing the rule's reliability, and its priority order..
     > Our overview example would look like:
     >
     > ![Classification Rule Example](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/classification_example_v602.webp)

3. Click on **Create** and see a line added on the rules page.
4. On the connector dashboard and in the **Resource Types** frame, click on **Jobs** > **Classify
   Resource Types** to apply the new classification rules.

![Resource Type Jobs](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

## Impact of Modifications

An action (addition/modification/deletion) on a classification rule doesn't trigger a new
computation of classification for the resources that are already categorized, i.e. both classified
and correlated. The new version of said classification rule will be applied only to new resources
along with the existing resources whose correlation and/or classification was not yet reviewed (as
unauthorized accounts on the **Resource Reconciliation** screen).

Thus only non-conforming resources (unauthorized accounts on the **Resource Reconciliation** screen)
can have their correlation and classification re-computed.

Even without selecting an owner, reviewing unauthorized accounts on the **Resource Reconciliation**
screen "blocks" correlation and classification "as is". Neither will be re-computed.

This also means that only non-conforming resources (displayed on the **Resource Reconciliation**
screen) can have their classification questioned and re-computed.

Simulations are available in order to anticipate the changes induced by a
creation/modification/deletion in classification rules. See the
[ Perform a Simulation ](/docs/identitymanager/6.2/access-governance/role-management/index.md) topic for additional information.

Any modification in classification rules is taken into account via the classification job: on the
connector dashboard and in the **Resource Types** frame, click on **Jobs** > **Classify Resource
Types**.

![Resource Type Jobs](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

## Verify Classification

In order to verify the process, analyze samples and check that all objects are classified, and well
classified. To do so, click on the target entity type(s) affected by your rule(s) in the left menu
of the home page.

![Test Entity Type](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/entitytypecreation_test_v602.webp)

The entity type's page can be configured via XML to customize all displayed columns and available
filters, especially the **Uncategorized** filter that spots unclassified resources, and the **Owner
/ Resource Type** column that shows the resource type assigned to each resource.

![Owner / Resource Type Column](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/classification_test_v522.webp)

Therefore, check that all resources show here a resource type. Moreover, a knowledgeable person must
analyze a few samples to ensure that resources are classified in the right resource type.

## Troubleshooting

If a resource is not classified (or not correctly), then:

![Unclassified Resource](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/classification_unclassified_v600.webp)

- If the resource is correlated, check whether the corresponding correlation rule is in the right
  resource type.
- If the resource is not correlated, check the validity of the classification rules.
- Check the resource's data quality.

# Correlate Resources

How to define the
[ Resource Correlation Rule ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
to match up resources across systems, usually accounts with their owner.

## Overview

### Correlation purpose

Correlation is the process of establishing an ownership relationship between a source resource
(usually an identity) and a target resource (usually an account). It is the basis of the link
between an identity and their fine-grained entitlements. See the
[ Entitlement Management ](/docs/identitymanager/6.2/reference/index.md)
topic for additional information.

Every resource type can be assigned a set of correlation rules.

Correlation rules must be created with caution as an error in the correlated attributes may result
in the unwanted assignment of a given account to an existing user.

Correlation should be based on immutable attributes, for example codes that don't change during the
resource's lifecycle rather than display names that can vary in time. This method prevents
integrators from losing the history of the changes made to a resource after a correction.

> In addition to display names, counter-examples for correlation properties are: positions; marital
> names; locations, etc.

### About the confidence rate

As the aim here is to correlate all resources in a given resource type, correlation rules are going
to rely on the patterns in resources' attributes, such as naming conventions.

Sometimes, the managed system doesn't use rigorous rules and thus data quality isn't enough to allow
the creation of a single infallible correlation/classification rule for all resources. Hence, you
may need to create several correlation/classification rules.

Each rule is configured with a confidence rate to express its reliability, according to data quality
and sensitivity.

In our case, correlation/classification can be based on a first rule applicable to quality data
resources with a high confidence rate, and a second rule applicable to resources with a lower data
quality. This second rule is going to have a lower confidence rate, thus a lower priority, because
the strategy is to apply the first rule as much as possible. But the second rule is essential in
case the first one doesn't apply, though it cannot be trusted as much as the first rule.

Hence correlation/classification rules are configured with a confidence rate:

- from 100 to 150% to correlate resources automatically without a manual validation;
- from 0 to 99% to impose that a resource manager reviews the correlation/classification.

Identity Manager considers the rules in descending order of confidence rate. The first matching rule
is applied.

In other words:

- if there is at least one matching rule with a confidence rate above 100%, then the one with the
  highest rate is applied;
- if there isn't and there is at least one matching rule with a confidence rate below 100%, then the
  one with the highest rate is suggested.

There is no predefined priority order between two rules with the same confidence rate.

### Focus on reviews

When the confidence rate is below 100%, correlation and classification reviews are to be done:

- on the **Provisioning Review** page when the owned resource is allowed by the role model, i.e.
  requested manually or assigned automatically by a resource type rule;

  ![Correlation Review - Provisioning Review Screen](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/categorization_reviewsprovisioningreview_v603.webp)

- on the **Resource Reconciliation** page when the owned resource is not allowed by the role model,
  i.e. not requested manually nor assigned by a resource type rule. For example, the creation of a
  correlation rule without a resource type rule triggers unauthorized accounts on the **Resource
  Reconciliation** page.

  ![Correlation Review - Resource Reconciliation Screen](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/categorization_reviewsresourcereconciliation_v603.webp)

Broadly speaking, the **Resource Reconciliation** page displays non-conforming assignments/values
(gaps), i.e. resources and property values from the managed systems that are not allowed by a rule
in Identity Manager. The **Provisioning Review** page displays the resource and property changes
whose workflows require a manual approval.

### Correlation rule examples

Consider AD accounts (target) and their owners (source). A classic example is to try and correlate
identities and AD accounts based on the first name and last name. We can write a correlation rule
that states that, for a given identity, Identity Manager looks for all AD accounts that bear the
same first name and the same last name. All AD accounts that match this description are said to be
correlated to the identity. The identity becomes the owner of the accounts.

A set of correlation rules for a resource type could be:

- a rule with 100% confidence on login + name + first name;
- a rule with 90% confidence on login only.

Usual rules can also be made, for example, on:

- name + first name using phonetics to avoid typos;
- first name + name + entry date if the entry date is known in the source systems;
- email address;
- Windows login.

Correlation rules don't have to compare equivalent properties from Identity Manager and from the
managed system. A rule can compare for example users' `Login` from Identity Manager with their
`sAMAccountName` from the AD, even using C# expressions if needed.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application users, entitlements and data model.

| Input                                                                                                                                                              | Output            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| Identity repository ( (required) Resource types (required) [ Synchronize Data ](/docs/identitymanager/6.2/identity-management/synchronization/index.md) (required) | Correlation rules |

See the [ Create the Workforce Repository ](/docs/identitymanager/6.2/reference/index.md) and
[ Create a Resource Type ](/docs/identitymanager/6.2/reference/index.md) topics for additional information.

## Create a Correlation Rule

The principle of a correlation rule is to compare the expressions of the source and target objects.

Fill a resource type with a correlation rule by proceeding as follows:

1. On the relevant resource type's page, click on **Correlation Rules** and **+ New**.

   ![New Correlation Rule](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/correlation/resourcetype_newcorrelrule_v602.webp)

   Correlation rules can also be created through the **Access Rules** screen (accessible from the
   home page, in the **Configuration** section), clicking on the **Correlations** tab and the
   addition button at the top right corner.

   ![Home - Access Rules](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

   ![Addition Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

2. Fill in the fields.

   ![New Correlation Rule Fields](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/correlation/resourcetype_newcorrelrulefields_v602.webp)

   - **Source Object**: at least one property from the source system that is going to be linked to
     a given target object. Can be defined by a property path and/or an
     [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md).
   - **Target Object**: one property from the managed system that is going to be linked to a given
     source object. Can be defined by a property path and/or an
     [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md).
   - `Confidence Rate`: rate expressing the rule's reliability, and its priority order.
     > In this example, a person via their login and name, is the owner of a nominative AD
     > account via its `sAMAccountName` attribute and display name:
     >
     > ![Correlation Rule Example](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/correlation/correlation_example_v602.webp)

3. Click on **Create** and see a line added on the rules page.
4. On the connector dashboard and in the **Resource Types** frame, click on **Jobs** > **Prepare
   Correlation Keys** to compute the expressions used in the new correlation rule(s), and click on
   **Jobs** > **Compute Role Model** to apply all correlation rules.

![Resource Type Jobs](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

## Impact of Modifications

An action (addition/modification/deletion) on a correlation rule doesn't trigger a new computation
of correlation for the resources that are already correlated. The new version of said correlation
rule will be applied only to new resources, along with the existing resources whose correlation was
not yet reviewed (as unauthorized accounts on the **Resource Reconciliation** screen).

Thus only non-conforming resources (unauthorized accounts on the **Resource Reconciliation** screen)
can have their correlation and classification re-computed.

Even without selecting an owner, reviewing unauthorized accounts on the **Resource Reconciliation**
screen "blocks" correlation and classification "as is". Neither will be re-computed.

Simulations are available in order to anticipate the changes induced by a
creation/modification/deletion in correlation rules. See the
[ Perform a Simulation ](/docs/identitymanager/6.2/access-governance/role-management/index.md) topic for additional information.

Any modification in correlation rules is taken into account via the following jobs: on the connector
dashboard and in the **Resource Types** frame, click on **Jobs** > **Prepare Correlation Keys**, and
then on **Jobs** > **Compute Role Model**.

![Resource Type Jobs](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

## Verify Correlation

In order to verify the process, check the list of
[Review Orphaned and Unused Accounts](/docs/identitymanager/6.2/reference/index.md)
and analyze them to look for patterns revealing correlation issues. To do so, click on the target
entity type(s) affected by your rule(s) in the left menu of the home page.

![Test Entity Type](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/entitytypecreation_test_v602.webp)

The entity type's page can be configured via XML to customize all displayed columns and available
filters, especially the **Orphan** filter that spots resources without an owner, and the **Owner /
Resource Type** column that shows the owner assigned to each resource.

![Owner / Resource Type Column](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/correlation/correlation_test_v522.webp)

A knowledgeable person must analyze a few samples to ensure that resources' owners can all be
justified, meaning that orphaned accounts are supposed to be so, and that correlated resources are
matched with the right owner.

Another possibility of correlation validation is to compare the number of AD accounts to the number
of users. However, keep in mind that several accounts are sometimes assigned to a single user.

## Troubleshooting

If a resource is not correlated (or not correctly), then:

![Uncorrelated Resource](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/correlation/correlation_uncorrelated_v600.webp)

- Check the validity of correlation rules.
- Check the resource's data quality.

# Categorize Resources

How to correlate managed systems' resources with identities, classifying resources into
[ Create a Resource Type ](/docs/identitymanager/6.2/reference/index.md).

## Overview

Managing resources can quickly become chaotic when the number of resources increases significantly.
You will need to manage orphaned (without an owner) and unused accounts through resource reviews,
and make sure that all accounts follow their owner's lifecycle. To do so, resources can be
categorized, which for our purposes means two things. They are:

- correlated with their owners, so that accounts follow the corresponding identity's lifecycle.
  > For example, if a user leaves the company, then their account is deactivated accordingly.
- classified according to their intents, in other words you need to specify resources' functions or
  goals within the managed system, especially in terms of security;
  > For example, a basic user account (low-privileged) and an administrator account
  > (high-privileged) have different intents. These two distinct account types are handled in
  > different ways security-wise, and they represent different entitlements with different
  > security measures applied.

Categorization is designed to help resource managers to easily identify a resource's owner and
purpose.

> For example, when Identity Manager spots an orphaned account, resource managers must be able to
> determine whether the account should have an owner, or if it is a service/technical account and
> thus does not need an owner.

### Technical principles

Technically, Identity Manager uses the notion of resource types to categorize resources. A resource
type is, in fact, a way to gather similar resources under one meaningful name, because they have the
same intent.

> Our example above would use a resource type `AD User (administration)` to group all AD
> administrator accounts, and `AD User (nominative)` to group all AD basic user accounts.

Thus, a resource type is a name that informs users about the intent of a resource. As stated above,
it serves to implement our two elements of categorization. This happens with two distinct sets of
rules, one for correlation, and the other for classification.

**Classification** is a process that simply aims to assign a resource type to specific resources. A
specific resource can only be assigned a single resource type. See the
[ Entitlement Management ](/docs/identitymanager/6.2/reference/index.md)
topic for additional information.

![Classification Schema](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/categorization_classifschema.webp)

Any resource that is unclassified will not be available for review.

**Correlation** is a process that aims to establish an ownership relationship between two resources.
In most cases, an identity resource that becomes the owner of an account resource. See the
[ Entitlement Management ](/docs/identitymanager/6.2/reference/index.md)
topic for additional information.

![Correlation Schema](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/categorization_correlschema.webp)

While an owner can possess several resources, a resource can have only one owner.

Some resources are orphaned (without an owner) for good reasons. For example service/technical
accounts are often used by applications to access data held in Identity Manager or other managed
systems and don't belong to a specific user.

As stated previously, both classification and correlation work through sets of rules.

> For basic users, we have in Identity Manager:
>
> ![Example - Basic Users in Usercube](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/categorization_examplebasicuser.webp)
>
> For basic users, we have in the AD:
>
> ![Example - Basic Users in AD](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/categorization_examplebasicad.webp)
>
> Thus our example could induce the following rules: | Classification Rules | Correlation Rules | |
> --- | --- | | all accounts from OU=Users | 1. mail (from AD) = user's email
> franck.antoine@acme.com = franck.antoine@acme.com 2. displayName = user's last name + user's first
> name Antoine Franck = Antoine + Franck |

> For administrators, we have in Identity Manager:
>
> ![Example - Basic Users in Usercube](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/categorization_exampleadminuser.webp)
>
> For administrators, we have in the AD:
>
> ![Example - Admin Users in AD](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/categorization_exampleadminad.webp)
>
> Thus our example could induce the following rules: | Classification Rules | Correlation Rules | |
> --- | --- | | all accounts from OU=Administrators | 1. sAMAccountName = "A" + user's employee id
> A28022 = A + 28022 2. displayName = "ADM" + user's last name + user's first name ADM Colin Jean =
> ADM + Colin + Jean |

Sometimes you may not know if your rules are always going to apply. Therefore, each rule expresses a
certain level of confidence. Identity Manager will establish a priority order between rules based on
the confidence rate, and will also act differently depending on whether the confidence rate is above
or below 100%. See the [ Correlate Resources ](/docs/identitymanager/6.2/reference/index.md) topic for additional
information.

A resource type can have zero correlation rules, since accounts can be without owners. But a
resource type with neither correlation nor classification rules serves no purpose.

**Correlation triggers classification:** a matching correlation rule for a given resource type will
perform both actions of categorization: both correlating a resource with its owner, and classifying
the resource at the same time.

See below this note.

Hence, integrators should start with correlation rules, and then write classification rules for any
remaining uncorrelated resources.

In the same way, Identity Manager will apply correlation rules before classification rules.

![Categorization Schema](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/categorization_categschema.webp)

Now that you have created resource types and their correlation/classification rules, you have
created the first elements for your role model. See the
[ Entitlement Management ](/docs/identitymanager/6.2/reference/index.md)
topic for additional information. The role model contains all the roles and rules which drive the
entitlement assignment logic inside Identity Manager.

A role model is made up of
[Policy](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) which
contain roles, rules and resource types. Most often the default policy is enough. However, in more
complex situations, additional policies can be created to separate groups of roles, rules and
resource types. See the [Create a Policy](/docs/identitymanager/6.2/reference/index.md) topic for
additional information.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application's users, entitlements and data model.

| Input                                                                                                                                                                                                                                                                                    | Output                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [ Create the Workforce Repository ](/docs/identitymanager/6.2/reference/index.md) (required) [ Create a Resource Type ](/docs/identitymanager/6.2/reference/index.md) (required) [ Synchronize Data ](/docs/identitymanager/6.2/identity-management/synchronization/index.md) (required) | Categorized resources Correlated accounts Orphaned account list |

## Categorize Resources

Categorize resources by proceeding as follows:

1. Create at least one [ Create a Resource Type ](/docs/identitymanager/6.2/reference/index.md);
2. Create the appropriate [ Correlate Resources ](/docs/identitymanager/6.2/reference/index.md);
3. Create the appropriate [ Classify Resources ](/docs/identitymanager/6.2/reference/index.md) for accounts that do not
   have an owner.

Netwrix Identity Manager (formerly Usercube) recommends creating/modifying/deleting correlation and
classification rules using [ Perform a Simulation ](/docs/identitymanager/6.2/access-governance/role-management/index.md) in order to
previsualize changes.

## Next Steps

Once accounts are categorized, integrators can start to
[ Create a Provisioning Rule ](/docs/identitymanager/6.2/reference/index.md).

Categorization also enables the
[Review Orphaned and Unused Accounts](/docs/identitymanager/6.2/reference/index.md).

# Create a Resource Type

How to create the container for future correlation and classification rules inside a given managed
system.

## Overview

A
[Resource Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
is created to highlight differences in intent between resources. It materializes the organization's
profiles. In a given managed system, different types of resources have different security needs.

> For example, can usually be found:
>
> - nominative accounts for basic user accounts with low privileges;
> - administrator accounts for accounts with higher privileges, on several administration
>   entitlements levels;
> - generic accounts, i.e. shared by a group of users (often for testing use);
> - old in opposition to new accounts because of potentially evolving naming conventions;
> - service accounts owned by applications instead of users.

In practice, a specific resource type is created for a given resource when there are differences in:

- the owner type (for example worker, partner, customer, application, robot, etc.);
- the required set of classification and/or correlation rules; See the
  [ Classify Resources ](/docs/identitymanager/6.2/reference/index.md), and
  [ Correlate Resources ](/docs/identitymanager/6.2/reference/index.md) topics for additional information.
- the approval circuit for a resource's modification or assignment, i.e. the number of required
  approvals, validators, etc.;
- the type of provisioning (manual or automatic). See the
  [Provision](/docs/identitymanager/6.2/identity-management/provisioning/index.md) topic for additional information.

### Source vs. target resource

Resource types are the vessel for ownership relationships. They involve the definition of source and
target objects chosen from among the properties of existing entity types. The source (usually
identities) is the owner of the target (usually resources from your managed systems, such as a
nominative AD account). This relationship is the basis for correlation as much as for future
provisioning. See the [Create an Entity Type](/docs/identitymanager/6.2/reference/index.md),
[ Correlate Resources ](/docs/identitymanager/6.2/reference/index.md),
and[Provision](/docs/identitymanager/6.2/identity-management/provisioning/index.md) topics for additional information.

See the
[ Entitlement Management ](/docs/identitymanager/6.2/reference/index.md)
topic for additional information.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application users, entitlements and data model.

| Input                                                                                   | Output        |
| --------------------------------------------------------------------------------------- | ------------- |
| Identity repository (optional) Target connector (required) Synchronized data (optional) | Resource type |

See the
[ Create the Workforce Repository ](/docs/identitymanager/6.2/reference/index.md)[ Connect to a Managed System ](/docs/identitymanager/6.2/reference/index.md),
and [ Synchronize Data ](/docs/identitymanager/6.2/identity-management/synchronization/index.md) topics for additional information.

## Create a Resource Type

A new resource type requires an existing entity type. See the
[Create an Entity Type](/docs/identitymanager/6.2/reference/index.md) topic for additional
information.

Create a resource type by proceeding as follows:

1. On the relevant connector page, click on the addition button in the **Resource Types** frame.

   ![Addition Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

   Resource types can also be created through the **Access Roles** screen (accessible from the home
   page, in the **Configuration** section), using the **+ New** button and selecting
   `Resource Type` in the first field called `Type`.

   ![Home - Access Roles](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.webp)

2. Fill in the fields.

   ![New Resource Type](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/resource-type-creation/resourcetype_newresourcet_v603.webp)

   - `Identifier`: must be unique among resource types, without any whitespace, and be
     C#-compatible.
     [See Microsoft lexical structure](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#see-microsoft-lexical-structure).
   - `Name`: will be displayed in the UI to identify the resource type.
   - `Policy`: [policy](/docs/identitymanager/6.2/reference/index.md) in which the resource type
     exists.
   - `Source Entity Type`: entity type (from any existing connector) used to fill the target entity
     type.
   - `Target Entity Type`: entity type (part of the connector) to be filled with the source entity
     type.
   - `Category`: category assigned to the resource type. It can be chosen from among the existing
     categories or [created](/docs/identitymanager/6.2/reference/index.md) directly from the
     categories list by clicking on the **+ Category** button.
   - `Approval Workflow`: represents the number of validations required to assign a resource from
     this type to an identity.
   - `Approve Role Implicitly`: relevant only for workflows with at least a simple approval
     process. `Implicit` mode bypasses the approval step(s) if the person who issues the role
     request is also the role officer. `Explicit` refuses said bypass. `Inherited` follows the
     policy decision to approve role implicitly or not. See the
     [Create a Policy](/docs/identitymanager/6.2/reference/index.md) topic for additional
     information.
   - `Prolongation without a new approval workflow`: enables the resource type to have its
     assignment's end date postponed without any validation. `Inherited` follows the policy
     decision to enable this option or not. See the
     [Create a Policy](/docs/identitymanager/6.2/reference/index.md) topic for additional
     information.
   - `Hide in Simplified View`: hides the role from the users' **Simplified View** in **View
     Permissions** dialog. This setting does not apply to roles which are either inferred or have
     workflow states which require manual action.
   - `Arguments Expression`: when using a connection for automatic provisioning, C# expression used
     to compute a dictionary of strings in order to compute the arguments of
     [provisioning](/docs/identitymanager/6.2/identity-management/provisioning/index.md) orders, such as the identifier of
     the workflow to launch within Identity Manager, or the identifier of the user's record to
     copy. See the [Provision](/docs/identitymanager/6.2/identity-management/provisioning/index.md) topic for additional
     information.
   - `Allow Addition`: enables Identity Manager to automatically create new resources in the
     managed system when their owners are given the right entitlements. Otherwise, resource
     managers must create resources manually directly in the managed system.

     > Consider a role `SAP` which assigns an SAP account to a user. Consider also that SAP
     > accounts are configured with `Allow Addition` disabled. In this case, if we give the role
     > `SAP` to a user, then said user doesn't automatically receive an SAP account. The relevant
     > resource manager must create an account for said user in the SAP application.

   - `Allow Removal`: enables Identity Manager to automatically deprovision resources in the
     managed system when their owners are deprived of the right entitlements. Otherwise, Identity
     Manager is able to delete resources in the managed system only with a manual approval on the
     **Resource Reconciliation** screen.

     > Consider a role `SAP` which assigns an SAP account to a user. Consider also that SAP
     > accounts are configured with `Allow Removal` disabled. Finally, consider a given user who
     > has the role `SAP` and the corresponding SAP account. In this case, if we deprive said
     > user from the role `SAP`, then the SAP account isn't automatically deleted. Identity
     > Manager displays this assignment as non-conforming on the **Resource Reconciliation**
     > page, and the relevant resource manager must confirm the account deletion.

     **Allow Addition / Allow Removal:**

     These options set to `No` are interesting especially in testing mode when the role model
     isn't entirely reliable yet.

   - `Remove If Orphaned`: enables Identity Manager to automatically deprovision resources when
     their owner is deleted. Otherwise, said resources are displayed on the **Resource
     Reconciliation** screen. Can be activated only if `Allow Removal` is activated too.
   - `Require Provisioning Review`: forces an additional mandatory review of all provisioning
     orders for the resource type (on the
     [ Review Provisioning ](/docs/identitymanager/6.2/reference/index.md)
     screen).

     > Consider AD accounts. While nominative accounts can be provisioned without specific
     > precautions (option set to `No`), administrator accounts sometimes require an additional
     > review (option set to `Yes`).

     This option can be bypassed when computing the role model by clicking on the **Compute Role
     Model, no provisioning review** job in the **Resource Type** frame on the connector's
     overview page.

   - `Discard Manual Assignments`: allows the provisioning of a new value computed by a
     provisioning rule for a property, based on a change in the source data, no matter the
     property's current workflow state.

     Set to `No`, any manual change of a property's value made directly in the target system will
     be "protected" (only after the change is approved in Identity Manager in **Resource
     Reconciliation**). It means that a future change in the source data will not trigger the
     provisioning of the new value. Instead, Identity Manager will keep the value of the manual
     change, and state the value as `Questioned`.

     > Consider an HR system (source) whose data isn't often synchronized into Identity Manager.
     > Let's say that a user marries and changes their name. In this case, the value in Identity
     > Manager needs to be updated (via workflows) so that all managed systems are updated too
     > with the new name. However, `Discard Manual Assignments` should be enabled because the HR
     > system should still be the authoritative source in case of another change.

   - `Correlate Multiple Resources`: enables Identity Manager to link a single owner to several
     existing target objects from this resource type.

     > Consider records, representing users' positions in the resource type
     > `User Record (from HR)`. In some organizations, one user can have several records at once,
     > or have several records that overlap, and these records can be created either via Identity
     > Manager's workflows or via the upload of an HR file. Thus, on the one hand it is complex
     > to anticipate the number of records created for an identity, on the other hand there
     > shouldn't be records without an owner. In other words, when creating a new record via a
     > workflow, we want the record to be linked to the right user, whether or not a record is
     > already linked to the user's HR sheet. Therefore, the correlation of multiple resources
     > (of the same resource type) to a single owner should be permitted.

   - `Transmitted State Validity`: The period in minutes during which fulfillment orders can stay
     in Transmitted/Executed state. When the time is exceeded the orders are set in error state.
   - `Depends On Resource Type`: potential resource type (other than the one presently created)
     which must be provisioned for a given identity before this resource type can be created for
     said identity.

     > This option can be used so that a user must have an AD account before they can own an
     > Exchange account, because the Exchange account needs the AD account's address.

   - `Depends On Owner Property`: potential properties which must be filled for a given identity
     before this resource type can be created for said identity.

     > This option can be used so that a user must have a ServiceNow identifier before they can
     > own an AD administrator account, because the AD administrator account needs this random
     > identifier computed by ServiceNow in order to be able to perform manual provisioning in
     > ServiceNow.

3. Fill the **Fulfill Settings** arguments according to the selected package.

   Integrators need to know the required provisioning connection, especially whether the connection
   is about manual or automated provisioning. Automatic provisioning means that Identity Manager
   writes in the managed system. Manual provisioning means that Identity Manager isn't allowed to
   write directly inside the managed system, and thus it creates tickets so that resource managers
   perform the needed changes.

4. Click on **+ Create & Close** > **Create**.

## Verify Resource Type Creation

In order to verify the process, check that the resource type has been added with the right options
to the list on the **Access Roles** page, accessible from the home page in the **Administration**
section.

![Home - Access Roles](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.webp)

![Test Connector](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/resource-type-creation/resourcetype_test_v602.webp)

# Configure Global Settings

This topic covers the customization in the application **Settings**.

## Overview

The Settings interface provides information and management options for the application.

![accesscertificationonlyapprovedenysettings](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-global-settings/accesscertificationonlyapprovedenysettings.webp)

### Look and Feel

The **Look and Feel** section allows you to customize the application to your preferences.

The customization includes the following:

- **Application Title**as the name of the application visible on the tabs
- The **Primary Color**, **Secondary Color**, **Banner Color**, **Banner Gradient Color**, **Banner
  Selected Tab Color**, and **Banner Text Color**
- The **Logo** to be displayed in the top left corner;

### Languages

It presents the languages in which the application can be displayed. In the above example you have
English-United States and French-France.

See the [ Languages ](/docs/identitymanager/6.2/development/configuration-toolkit/index.md) topic for additional
information.

### Features

The feature **Only allow approving and refusing on access certifications items** gives the
administrator the option to limit the user's option to either **Approve** or **Deny** the Access
Certification items while making the **More** button unavailable.

![allowapprovingdenyingaccesscertificationitems](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-global-settings/allowapprovingdenyingaccesscertificationitems.webp)

If the feature **Only allow approving and denying on access certification items** is set to **No**
the following will be visible on the certification screen:

![accesscertificationonlyapprovedeny](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-global-settings/accesscertificationonlyapprovedeny.webp)

If the feature **Only allow approving and denying on access certification items** is set to **Yes**
the following will be visible on the certification screen:

![accesscertificationonlyapprovedeny-disabled](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-global-settings/accesscertificationonlyapprovedeny-disabled.webp)

This is how the user's experience can be customized directly from the UI.

# Create a Connection

How to create a
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
inside a
[ Connector ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
and choose the appropriate package.

## Overview

A connection is the information that allows to connect to a managed system, which includes
credentials and path.

There is a minimum of one connection per connector. In many cases, there is one connection
to[ Synchronize Data ](/docs/identitymanager/6.2/identity-management/synchronization/index.md)and one connection for
[Provision](/docs/identitymanager/6.2/identity-management/provisioning/index.md).

A connection is associated with a package, representing the technology to use for the data transfer.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
purpose of the application.

| Input                                                   | Output        |
| ------------------------------------------------------- | ------------- |
| Connector container(required) Connector model(required) | Connection(s) |

See the [ Create the Connector ](/docs/identitymanager/6.2/reference/index.md) and
[ Model the Data ](/docs/identitymanager/6.2/reference/index.md) topics for additional information.

## Create a Connection

Create a connection by proceeding as follows:

1. Click on the addition button in the **Connections** frame on the connector's summary page.

   ![Add a New Connection](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connection-creation/connection_newconnection_v602.webp)

2. Fill in the connection information fields on the left, then select a package (AD, CSV, etc.) and
   fill the associated agent settings on the right.

   ![Connection Creation](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connection-creation/connectioncreation_connectioncreation_v602.webp)

   - `Identifier`: must be unique among connections, without any whitespace, start with a letter,
     and contain only letters, numbers, `.` and/or `-`.
   - `Name`: will be displayed in the UI to identify the connection.
   - `Package`: the technology that enables the connection. Choose the package that fits best the
     managed system. See details below.
   - `Agent Settings`: depends on the selected package.

   Then click on **Create & Close**.

### Select a package

A package is chosen according to the following constraints:

- What kind of technologies do we need?

  > An Active Directory, a plain CSV file, etc.

- Do we need incremental or complete synchronizations, or both?

  Incremental synchronizations, usually launched approximately every two hours, are to be
  performed for real-time needs, while complete synchronizations, scheduled no more than once a
  day, will recover any changes that may have slipped through the cracks of the incremental
  synchronizations. See the
  [ Upward Data Synchronization ](/docs/identitymanager/6.2/identity-management/synchronization/sync-configuration.md)
  topic for additional information.

- Do we need [Provision](/docs/identitymanager/6.2/identity-management/provisioning/index.md)? If so, should provisioning be
  performed manually or automatically by Identity Manager?

NETWRIX recommends starting by creating a connector that only does synchronization, and do not worry
yet about provisioning. It allows Identity Manager to read data from your managed system, without
writing to the system.

One connector can contain several connections, and each connection contains one package.

> For example, an `AD` connector, that will handle synchronization and provisioning between Identity
> Manager and an AD, would generally use the `Directory/Active Directory` package which can do
> synchronization and automated provisioning. A second package for manual provisioning,
> `Ticket/Usercube` could be added to request manual provisioning of administration accounts that
> need more security.

Each type of package needs its own settings, and secured options can be used to store sensitive
connection information. See the
[Connections](/docs/identitymanager/6.2/integration/connectors/connector-basics/connections.md)
topic for additional information.

## Refresh Schemas

A schema is a snapshot of the data structure (metadata) retrieved by a connection. It needs to be
refreshed to enable the configuration of entity types and resource types.

Identity Manager refreshes a connection's schema:

- after the connection creation;
- when clicking on **Refresh Schema** on the connection's page: only the schema of the current
  connection is refreshed;

  ![Refresh Schema of One Connection](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connection-creation/connectioncreation_refreshschema_v522.webp)

- when clicking on **Refresh all schemas** on the connector's page: all schemas of the connector are
  refreshed.

  ![Refresh all Schemas](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connection-creation/connectioncreation_refreshall_v602.webp)

In the **Connections** frame, either the last successful schema update is indicated or an icon is
shown if the refresh schema failed.

![Failed Refresh Schemas](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connection-creation/connectioncreation_failedindicator_v602.webp)

Some packages don't generate a schema. For these packages, the **Refresh Schema** button isn't
displayed on the connection's page. On the connector's page, a connection without schema is
indicated by the sentence "_There is no schema for this connection_".

![No Schema](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connection-creation/connectioncreation_noschema_v522.webp)

The connections' schemas must be refreshed before editing the connector's entity types via the UI,
whether the connections were created via the UI or XML configuration. Otherwise, there will be no
connection table available in the `Source` dropdown, so you will not be able to save anything.

## Impact of Modifications

Changes on a connection may imply changes in the connector's entity types. When a connection schema
changes, a warning may appear in the entity type screen indicating that a mapped property doesn't
exist anymore.

## Verify the Connection

In order to verify the process:

1. click on **Check Connection** to ensure that Identity Manager can reach the managed system;

   ![Check Connection](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connection-creation/connectioncreation_checkconnection_v602.webp)

   Some connectors have both incremental and complete setting modes. See the
   [ Jobs ](/docs/identitymanager/6.2/administration/jobs-tasks/job-configuration.md)topic for additional
   information. They are relatively independent so they both need to be tested.

2. check that the connection appears in the **Connections** frame with the right options, and
   without the Failed icon.

![Decline Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connection-creation/certifcampaign_icondecline_v522.svg)

## Troubleshooting

If the Failed icon appears, then:

![Decline Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connection-creation/certifcampaign_icondecline_v522.svg)

Ensure that the schema of the connection is refreshed.

If the schema couldn't be recovered, then:

![Schema Not Recovered](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connection-creation/connection_notrecovered_v523.webp)

- Ensure that the managed system is properly connected.
- Check the connection's settings.

  > Example: For a CSV connection, ensure that the file paths are written correctly in full, such
  > as `C:/UsercubeDemo/Sources/Directory.xlsx`.

You may have a schema that could not be recovered if you work with a system without a direct access
to the agent. In this case, schema refreshment will fail but that does not mean that there
necessarily is a problem.

Try again from a system that can access the agent.

# Create the Connector

How to declare the technical container of a
[ Connector ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

## Overview

Here, you will learn how to create a connector: the shell that harbors entity types and connections
related to a single managed system.

Keep in mind that a Identity Manager installation can have more than one agent. Connectors should be
created with a specific agent in mind since the agent needs to physically connect to the managed
system's data. Fortunately, you don't need to worry about that right now, since you are starting
with the agent provided with Identity Manager's SaaS environment. See the
[ Architecture ](/docs/identitymanager/6.2/reference/index.md) topic for additional
information.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
purpose of the application.

| Input | Output          |
| ----- | --------------- |
| -     | Empty connector |

## Create a Connector Container

Create a connector container by proceeding as follows:

1. On the home page in the **Configuration** section, click on the **Connectors** button.

   ![Home page - Connectors](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/home_connectors_v602.webp)

   You will see all existing connectors.

2. Click on the addition icon and fill in the information fields.

   ![Addition Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

   ![Connector creation](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connector-declaration/connectorcreation_declaration_v602.webp)

   - `Identifier`: must be unique among connectors, without any whitespace, start with a letter,
     and contain only letters, numbers, `.` and/or `-`.
   - `Name`: will be displayed in the UI to identify the connector.
   - `Agent`: agent that the connector is supposed to use.

     Netwrix Identity Manager (formerly Usercube)recommends choosing the provided SaaS agent.

   - `Complete Job`: [ Jobs ](/docs/identitymanager/6.2/administration/jobs-tasks/job-configuration.md) scheduled to
     perform a set of tasks, including completesynchronization and/or provisioning for all the
     connectors, for which you selected the corresponding checkbox.
   - `Incremental Job`: [ Jobs ](/docs/identitymanager/6.2/administration/jobs-tasks/job-configuration.md) scheduled
     to perform frequently a set of tasks, including incrementalsynchronization and/or provisioning
     for all the connectors, for which you selected the corresponding checkbox.

3. Click on **+ Create** to get on the connector's overview page:

   ![Connector page](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connector-declaration/connectorcreation_connectorpage_v602.webp)

## Verify the Connector Declaration

In order to verify the process, check that the connector has been added to the connectors list with
the right name and identifier.

![Test Connector](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connector-declaration/connectorcreation_test_v602.webp)

# Model the Data

How to choose the appropriate model for a connector's data.

## Overview

In this part, you work outside Identity Manager to define the model that is going to be used in the
next steps to represent a managed system's resources and entitlements inside Identity Manager, as a
connector.

This page is no technical procedure, but rather a guide aiming to give a global view on connectors
(with their components and their purpose), in order to help integrators choose the most appropriate
way to model the managed system in the form of a connector later inside Identity Manager.

The aim is to think about said managed system in order to specify:

- what data you need to import into Identity Manager;
- how you are going to organize this data together, and model it as a connector inside Identity
  Manager.

### Useful data

Modeling the connector is a matter of identifying what data you want to get into Identity Manager.
You should not retrieve all the data from the managed system, but only two kinds of useful data:

1. data that represents how the authorization system works in the managed system, i.e. data that
   composes entitlements and their assignments;
2. data that you want to watch and/or control and/or fulfill.

The model must take both into account. So both kinds of data must be extracted from the managed
system.

> Let's take an example. An Active Directory manages authorization through group membership (using
> the user-group paradigm).
>
> So first we need to retrieve both groups and accounts, in order to manage the AD's assignments of
> entitlements for our users (in the AD language: manage their accounts and group memberships).
>
> Secondly, we want to control attributes such as the name or e-mail of the account, and ensure they
> are consistent with the correlated identity. Thus these attributes are the second kind of
> information that we want to retrieve.

### Data models

Fortunately, you won't have to design your connector model from scratch. NETWRIX has done a little
work ahead, and you are presented here with four model templates that have proven to work so far.
Experience shows that most managed systems can be shaped using one or a mix of the following:

- the User model is the most simple model for a connector, where a user is directly associated with
  a list of entitlements;
- the User-Group model represents typical
  [Role-Based Access Control](https://en.wikipedia.org/wiki/Role-based_access_control) mechanisms,
  where the ability to perform an action is granted through accounts' membership to a specific group
  (also called role or profile according to the system);
- the Account-Profile-Transaction model represents a system, where the ability to perform an action
  is granted through the assignment of fine-grained entitlements (called transactions) which are
  packaged into profiles;
- the Star model represents a system, where the ability to perform an action is granted through the
  assignment of entitlements which are based on at least two variable parameters.

Each template presents a few objects and the relationships between them. To become the model of the
actual managed system, these objects must be renamed and their attributes defined according to the
reality of said managed system.

This sheet guides you through choosing the right model template for your connector. The actual
technical implementation of the model will be tackled in the last part of the connector
configuration: [Create an Entity Type](/docs/identitymanager/6.2/reference/index.md).

**Connector model and roles:**

The design of a model must take into account what is really going on inside the managed system in
terms of entitlements, and be flexible enough to express it as roles in the context of the role
model. The role model is the universal RBAC/ABAC language used by Identity Manager to express all
entitlements.

You don't have to worry about this "role" part right now. It is going to be tackled during single
role catalog creation. At this point, you will take a look at the way roles are defined and linked
to resources to represent entitlements. But the work starts here, by modeling the resources that
exist in the managed system. Some of those resources, such as Active Directory groups, include
interesting information about entitlements.

Right now, you can see the connector's model as a precise description of the shape of the technical
resources and entitlements of the managed system. And, you can see roles as the higher-order
universal language in which entitlements and their assignments are expressed in Identity Manager for
all managed systems.

**Connector model and provisioning**:

After defining the useful data that you need to model a given system, you also have to decide what
data you need Identity Manager to write to the managed system. Identity Manager writing to an
external system is called provisioning.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
purpose of the application.

| Input | Output          |
| ----- | --------------- |
| -     | Connector model |

## Define the Connector Model

Define your connector model by proceeding as follows:

1. Use the advice and examples given about each model template to find the template that most
   closely matches your use case.
2. Adapt the template to the reality of your managed system by renaming and adjusting the model's
   objects.
3. Define your useful data, and thus the attributes of each object according to the reality of the
   data in your managed system.
4. Ensure that all objects have at least one attribute that can serve as a key to be uniquely
   identified within Identity Manager. You will get more details about keys during entity type
   creation.
5. Ensure the following guidelines' enforcement:

   **Keep it simple**

   The model must stay as simple as possible. Embed just enough information.

   **Keep it readable for most users**

   The model must be easy to understand. For this, adopt a business approach, i.e. make the model
   user-friendly and close to real activities. This functional approach is essential to the
   efficiency of data flows (synchronization/provisioning loop). Keep in mind that the aim is to
   define a model close to the reality of the system.

   **Keep it open to changes**

   The model is going to change and evolve during the life of the application, to account for new
   needs or changes. This must be considered too in the initial model to make future changes less
   painful.

Find at the bottom a procedure example about modeling the Active Directory.

## Model Templates

All templates are detailed with examples and schemas with the following key:

![Schemas' Key](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_key.webp)

During the technical modeling inside Identity Manager, these objects will become entity types, their
attributes will become scalar properties, the links between them will become navigation properties.

### User

#### Authorization mechanisms

The User template is the most simple model for a connector, and used to represent a user directly
associated with a list of entitlements.

Users are represented by the accounts they own, and entitlements are represented by resources.

Permissions can be managed:

- by resource, with a list of authorized accounts for each resource;
- by account, with a list of authorized resources for each account.

#### Model

![User Model](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_user.webp)

Thus you need to create one entity type to represent either accounts or other resources.

Each entity type needs to be shaped with properties, chosen according to the data useful for
entitlement assignment.

The only sensitive and required properties are the keys and the property holding entitlements. It
means that:

- if entitlements are managed by resource, then the entity type representing resources must have an
  attribute (scalar property) containing the list of authorized accounts;
- if entitlements are managed by account, then the entity type representing accounts must have an
  attribute (scalar property) containing the list of authorized resources.

**Recommendation: categorize accounts in types**

Some of the managed systems following this model offer predefined types of accounts, with a
pre-packaged set of authorizations (such as the `basic` user with read/write permissions on
non-sensitive resources, or the `admin` with higher privileges).

Account types make modeling easier, as they bring another level of information about the
entitlements they contain. So we can embed more useful information in the model, thanks to an
attribute that represents the account type.

In further steps, you will be able to define one resource type per account type and map each one to
a role for assignment and provisioning.

#### Example - Canteen badges

Canteen badges are a simple system handled with the User model. Indeed users can simply have among
their attributes the access authorization for a given building and a given time. Or also, instead of
creating an entity type for users, we can create an entity type for the badges. They would have in
their attributes their respective access location and time, and an attribute listing authorized
users.

![User Model - Canteen Badges Example](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_user-canteen.webp)

#### Example - Mailboxes

Mailboxes constitute a complex system, but IGA purposes require little information (only accounts)
so this system can too be handled with the User model, either through users and their entitlement
lists, or through mailbox entitlements and their lists of authorized users.

![User Model - Mailboxes Example](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_user-mailbox.webp)

### User-Group

#### Authorization mechanisms

The User-Group template is better suited to represent typical Role-Based Access Control
authorization mechanisms, where a user is authorized to perform an action according to their
account's membership to a specific group. Instead of groups, some systems talk about roles or
profiles: users are authorized to perform an action through a given role or profile which they are
assigned, instead of a group membership. It is all the same idea, and the User-Group template is
perfect for them too.

Groups can also be categorized and grouped into larger groups.

Users are represented by the accounts they own.

#### Model

![User-Group Model](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_usergroup.webp)

Thus you need to create one entity type to represent groups (or roles or profiles) and one for
accounts.

Each entity type needs to be shaped with properties, chosen according to the data useful for
entitlement assignment.

The only sensitive and required properties are those constituting the link between both entity
types, i.e. the navigation properties representing the group membership.

**Recommendation: categorize accounts in types**

Many of the managed systems following this model, just like the User model, distinguish between
several types of accounts.

In further steps, you will be able to define one resource type per account type and map each one to
a role for assignment and provisioning.

#### Example - SAB

The SAB system handles authorizations using users and groups. A user is authorized to perform an
action according to their group membership.

We define two entity types `SAB - User` and `SAB - Group`. We fill them with a few attributes useful
to manage entitlements in the SAB application. Finally, we add a navigation property in both entity
types in order to link `User` with `Group` with an "n-to-n" relationship.

![User-Group Example - SAB](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_sab.webp)

#### Example - RACF

The [RACF](https://www.ibm.com/docs/en/zos-basic-skills?topic=zos-what-is-racf) connector is used to
manage critical entitlements on the mainframe. RACF is a complex system, but IGA purposes only
require information about accounts and groups, as entitlements are given by group membership. Thus
the system can be simplified to be managed by Identity Manager following the User-Group model.

![User-Group Example - RACF](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_racf.webp)

For RACF, Identity Manager provisions only the link between accounts and groups.

#### Example - TSS

The TSS connector is similar to RACF in its use, but manages fine-grained entitlements at a higher
level than RACF. TSS is at least as complex as RACF, and its connector follows a similar
simplification as RACF's.

Identity Manager manages users (with their accounts) and groups called here profiles. Both users and
profiles are grouped into departments, themselves grouped into partitions. Entitlements are called
authorizations, and are linked to users through group (profile) membership.

![User-Group Example - TSS](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_tss.webp)

For TSS, Identity Manager provisions only the link between users and profiles.

Identity Manager receives a write access for users and profiles, only a read access for the rest of
the model. It is interesting to keep the whole model for query goals such as listing a given user's
entitlements.

**Recommendation: categorize accounts in types**

Many of the managed systems following this model, just like the User model, distinguish between
several types of accounts.

In further steps, you will be able to define one resource type per account type and map each one to
a role for assignment and provisioning.

**Roles:** During
the[ Create Roles in the Role Catalog ](/docs/identitymanager/6.2/reference/index.md)step for this
connector you can build roles based on the group-membership system represented by users and
profiles. Thus you will create navigation rules to represent the link between users and profiles.

#### Example - SDGE

The SDGE connector is used not to manage people but positions, so the application screens depend on
the user's position. In other words, Identity Manager is going to manage users' entitlements in SDGE
through their positions.

The object `User` or `Account` from the template, which contains users' accounts, is called here
`Worker`.

The object `Group` from the template is called here `Position` (grouped into organizations,
themselves grouped into organization types). It contains the way an entitlement is given, here
through a given position and wallet.

![User-Group Example - SDGE](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_sdge.webp)

For SDGE, Identity Manager provisions only workers and the link between workers and positions.

### Account-Profile-Transaction

#### Authorization mechanisms

The Account-Profile-Transaction model is better suited to represent a system, with the following
basic characteristics:

- To be able to perform an action or read a piece of data, a user must be granted one or several
  transactions. Transactions represent fine-grained entitlements. They can be associated to a type
  and conditions that restrict their use, such as a maximum per day or a context of validity.
- Transactions are not assigned directly to an account, but are packaged into profiles, which are
  then assigned to accounts, which are owned by users.
- Profiles can sometimes be classified into categories representing the sensitivity of the
  transactions they contain.
  > For example, profile categories can be `Privilege Profiles` for high privilege transactions on
  > sensitive data, and `Technical Profiles` for technical transactions related to system
  > administration.

#### Model

![Account-Profile-Transaction Model](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_profiletransaction.webp)

Thus you need to create one entity type to represent accounts, one for profiles, and one for
transactions.

Each entity type needs to be shaped with properties, chosen according to the data useful for
entitlement assignment.

The only sensitive and required properties are those constituting the link between entity types,
i.e. the navigation properties representing the packaging of transactions into profiles on the one
hand, and the assignment of profiles to accounts on the other hand. You can potentially add a
navigation property in the `Profile` entity type in order to categorize profiles within larger
profiles.

Instead of creating as many `Profile` objects as there are categories of profile, NETWRIX recommends
shaping the `Profile` object with a `category` attribute. Indeed, a multiple-object model
complexifies the addition of new profiles in the future. And as new profiles can be created in the
future though, then you must plan for it.

For example, instead of modeling two artificial types of profiles called `PP` for "Privilege
Profile" and `TP` for "Technical Profile", prefer a single object `P` that represents all profiles
using a specific attribute to differenciate technical from privilege profiles. This way, the model
sticks to the real capacity of the technical tool and all use-cases are considered.

See the schema below this note.

![Profiles Example](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_profiles.webp)

Transactions are not mandatory in a model. Most of the time, the profile packages are predefined
once and for all, or are the responsibility of the application owner. Then Identity Manager doesn't
need to manage the specific transactions for a profile directly inside the managed system. You can
hence avoid modeling transactions altogether. In this case, you fall back on the User-Group model
with a twist: if profile categories are relevant in the system's authorization mechanism, then you
must take them into account.

#### Example - TSS

The TSS connector is actually a mix of the User-Group and Account-Profile-Transaction models. The
User-Group part is explained above.

![User-Group Example - TSS](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_tss-prof-trans.webp)

Transactions are called here authorizations.

For TSS, Identity Manager provisions only the link between users and profiles. Transactions (and the
rest of the model) are only readable.

### Star

#### Authorization mechanisms

The Star model is better suited to represent a system, where the ability to perform an action is
granted through the assignment of entitlements, based on several variable parameters, most often the
combination of a profile and at least one user data criteria.

> For example, you might want to give certain entitlements only to users who have an administrator
> profile and work in Marseilles.

As the parameter combination is not predetermined, the whole system can become highly complex with
the addition of data criteria.

Users are represented by the accounts they own.

**Comparison with other models:** while the User-Group model grants an entitlement via a group
membership, the Star model grants said entitlement via a special authorization linking the right
criteria altogether (i.e. the right profile and other user parameters).

#### Model

![Star Model](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_star.webp)

Thus you need to create one entity type to represent accounts, one for each criterion, and another
one to represent the object linking acounts to criteria.

Each entity type needs to be shaped with properties, chosen according to the data useful for
entitlement assignment.

The difficulty of this model is to map everything to roles in the role model. In Identity Manager's
role model, one assignment is always one role. But in this case, in the managed system, an
assignment is a tuple of things.

To map the tuple of things on a role, we have several choices:

1. Create a role per possible combination of tuple of things. This can quickly get out of hand as
   far as the number of created roles is concerned.
2. Use parametrized roles. The number of roles will be contained, but it is a little more
   complicated to configure.

The flexibility generated by parameters is particularly interesting for roles that incorporate
entitlements in a more complex way than application roles. If the information contained in a role is
complicated to deduce, then parameters can bring some clarity in the configuration. The objective is
always to minimize the number of distinct roles, and the number of roles that are assigned to one
given identity.

#### Example

Consider an application which manages entitlement assignment with different rules, according to
users' profiles, attachment areas and sites. Our example shows 4 profiles, 4 attachment areas and 3
sites. So a user may be assigned a given entitlement for a given profile, attachment area and site.

![Star Model Example](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_starmodel.webp)

For this connector, Identity Manager provisions only the links between accounts and linking objects,
and the links between linking objects and each criterion.

Concerning roles, integrators have two options:

- either create a specific role for `Profile_i` with `AttachmentArea_j` and `Site_k` for all
  available profiles, attachment areas and sites, which makes a total of 48 roles (for a quite
  simple example);
- or create a single role with parameters for profiles, attachment areas and sites.

## Procedure Example

**Step 1: choose the connector model.**

Let's say we are modeling an Active Directory, which handles authorization through the group
memberships of accounts. In other words, to assign an entitlement to an identity, we make the AD
account of said identity member of the corresponding AD group. That is exactly what the User-Group
template is designed to handle. See the Model the Data topic for additional information.

![User-Group Model](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_usergroup.webp)

**Step 2: adapt the model to your reality.**

We start by renaming the `Account` object as `AD_User` and the `Group` object as `AD_Group`.

![AD Example - Step 1](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_ad-step1.webp)

**Step 3: define useful data close to your reality.**

We shape these objects with the following attributes:

![AD Example - Step 2](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_ad.webp)

**Step 4: ensure that all objects have unique keys.**

Indeed we defined `objectGuid` as a key for both accounts and groups.

**Step 5: ensure the guidelines' enforcement.**

We could content ourselves with this model. The main benefit of this model is to closely mimic the
reality of the AD authorization mechanism. But we'd like to go a bit further, applying a "keep it
open to changes" approach.

Observe the similarities between `AD_User` and `AD_Group`. There are many attributes repeating
between the two entity types.

We can simplify: prefer a single object `AD_Entry` that can represent both users and groups. The
difference between the two types of object will be made clear via specific properties like
`objectCategory`, `member` and `memberOf`.

Beyond avoiding repetition, this makes the model easily adaptable if new elements pop up.

> For example, we could want to include computers or organizational units in the model in the
> future. Instead of creating two new additional objects `AD_Computer` and `AD_OU`, the existing
> object `AD_Entry` can represent them both at no additional modeling cost. Even though we could add
> `AD_Computer` and `AD_OU` without merging groups with entries, designing `AD_Entry` with all these
> attributes provides the means to add objects without creating new entity types.
>
> ![AD_Entry Example](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connector-modeling/connectormodel_adentry.webp)

# Organize Resources' Datasheets

How to change the default display of the resource data from this entity type, by creating display
groups.

## Overview

Here you will learn how to change how a resource's data is organized in the UI, by creating display
groups.

If you do not add display groups, Identity Manager displays the data of this entity type's resources
in alphabetic order.

> For example, for an HR user without any display groups:
>
> ![Without Display Groups](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/datasheet-organization/entitytypecreation_displaygroups_without_v603.webp)

## Organize Resources' Datasheets

Organize resources' datasheets by proceeding as follows:

1. Start by creating the entity type with its scalar properties and keys. See the
   [ Define Scalar Properties ](/docs/identitymanager/6.2/reference/index.md) and
   [ Select Primary Keys ](/docs/identitymanager/6.2/reference/index.md) topics for additional information.
2. Ensure that the created properties are saved by clicking on **Save & Close** > **Save** at the
   top right corner.
3. On the entity type's definition page, click on the **Display** tab.

   ![Display Groups](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/datasheet-organization/entitytypecreation_displaygroups_v603.webp)

4. Click on the arrow to see the entity type's properties listed in the alphabetical order, and drag
   and drop the properties to customize the order.

   > For example:
   >
   > ![Display Example](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/datasheet-organization/entitytypecreation_displaygroups_example1_v603.webp)

5. When needing to group properties together, click on **Add Display Group**, fill in the fields and
   select from the pop-up window the properties to be grouped.

   ![Display Group Fields](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/datasheet-organization/entitytypecreation_displaygroups_fields_v603.webp)

   - `Identifier`: must be unique among display groups, without any whitespace, and be
     C#-compatible.
     [See Microsoft lexical structure](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#see-microsoft-lexical-structure).
   - `Name`: will be displayed in the UI to indicate the property group.
     > For example:
     >
     > ![Display Example](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/datasheet-organization/entitytypecreation_displaygroups_example2_v603.webp)
     >
     > The entity type's resources would look like:
     >
     > ![Display Example](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/datasheet-organization/entitytypecreation_displaygroups_example2results_v603.webp)

6. Click on **Save & Close**.

   Changes in display groups won't take effect until the next
   [ Update Entity Property Expressions Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
   runs.

## Reload

Every time an entity type mapping is modified and saved, a green pop-up appears saying that you
should reload the schema to implement the changes. You do not need to click on the button every
time. It is essential though to reload after the final changes are made.

![Reload](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_reload_v522.webp)

The **Reload** button mostly enables your changes to appear in the menu items, which configure the
left menu links on the UI's home page.

You can find the **Reload** button either on the green warning, or on the connector's dashboard.

# Set Resources' Display Names

How to change the value of the display name for resources of an
[ Entity Type ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

## Overview

Here you will learn how to change a resource's display name, which is the name used by the UI to
identify a resource of an entity type. Its value is computed from existing properties. For example
for the entity type `HR - User`, integrators may set the display name to:  
`<Employee_Id> - <Last_name> <First_name>`.

![Display Name - Example](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_displaynameexample_v600.webp)

If you do not set your own display name, Identity Manager provides a default value based on the
first scalar property after alphabetizing all the properties whose name contains `name`.

## Set the Resource's Display Name

Set the resource's display name by proceeding as follows:

1. Start by creating the entity type with its calar properties and keys. See the
   [ Define Scalar Properties ](/docs/identitymanager/6.2/reference/index.md) and
   [ Select Primary Keys ](/docs/identitymanager/6.2/reference/index.md) topics for additional information.
2. Ensure that the created properties are saved by clicking on **Save & Close** > **Save** at the
   top right corner.
3. On the entity type's definition page, click on the **Settings** tab.

   ![Display Name - Property Path](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_displayname_v603.webp)

4. Set the display name. As a display name, you can use either the value of an existing property, or
   compute [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) based on
   existing properties.

   > A resource from `AD - Entry` can be displayed using its `userPrincipalName` with predefined
   > functions.
   >
   > ![AD Entity Type - Display Name](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_examplead4_v602.webp)
   >
   > ![AD Entity Type - Display Name Result](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_examplead4-result_v602.webp)

   > Another example from the HR connector (User entity type):
   >
   > ![HR User Entity Type - Display Name](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_examplehr_v602.webp)
   >
   > ![HR User Entity Type - Display Name Result](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_examplehr-result_v602.webp)

5. Click on **Save & Close**.

   Changes inside connectors won't take effect until the next
   [ Synchronize Data ](/docs/identitymanager/6.2/identity-management/synchronization/index.md). More specifically, changes in display
   names won't take effect until the next
   [ Update Entity Property Expressions Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
   runs.

## Reload

Every time an entity type mapping is modified and saved, a green pop-up appears saying that you
should reload the schema to implement the changes. You do not need to click on the button every
time. It is essential though to reload after the final changes are made.

![Reload](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_reload_v522.webp)

The **Reload** button mostly enables your changes to appear in the menu items, which configure the
left menu links on the UI's home page.

You can find the **Reload** button either on the green warning, or on the connector's dashboard.

## Troubleshooting

If no property appears in the display name auto-completion, then:

![No Property](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/display-name-setting/entitytypecreation_troubleprop_v602.webp)

Ensure that the created properties are saved by clicking on **Save & Close** > **Save** at the top
right corner of the screen.

# Create the Entity Type

How to create the technical container of an
[ Entity Type ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

## Overview

Here, you will learn how to create an
[ Entity Type ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md):
the shell that harbors the (scalar and navigation) properties which describe a given set of
resources related to one managed system.

## Create the Entity Type

Create the entity type by proceeding as follows:

1. Access the connector's page by clicking on the **Connectors** button on the home page in the
   **Configuration** section, then on the relevant connector.

   ![Home page - Connectors](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/home_connectors_v602.webp)

2. On the connector's page, in the **Entity Types** frame, click on the addition button.

   ![Addition Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

3. Fill in the information fields.

   ![Entity type creation](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/entity-type-declaration/entitytypecreation_entitytypecreation_v602.webp)

   - `Identifier`: must be unique among entity types, without any whitespace, and be C#-compatible.
     [See Microsoft lexical structure](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#see-microsoft-lexical-structure).
     NETWRIX recommends using `<connector>_<notion>` in the singular.
   - `Name`: will be displayed in the UI to identify the entity type.
   - `Icon`: can be chosen from [Microsoft's list](https://uifabricicons.azurewebsites.net/) and
     will be displayed with the entity type in the left menu of the home page.
   - `Auto Complete in Pickers`: can be set once properties are created (and saved) so that, when
     using a searchbar for selected properties, Identity Manager suggests existing entries.

4. In the entity type's **Properties** section, choose a source so that the connection provides the
   source's data structure.

   ![Properties' source](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/entity-type-declaration/entitytypecreation_propertiessource_v522.webp)

   > Let's use the example of an AD connector. We create an entity type `AD - Entry` to gather the
   > valuable information from the AD, i.e. all the AD entries (groups and accounts) which we want
   > to classify, with the properties that are useful for assignment management.
   >
   > The AD connector uses as a source `Connection Active Directory - entries`. Its structure was
   > retrieved when we refreshed the schemas of the `Active Directory` >
   > [Create a Connection](/docs/identitymanager/6.2/reference/index.md), thus retrieving the attributes from
   > the Active Directory and storing them temporarily on the agent side, inside CSV files.

## Next Steps

To continue,[ Define Scalar Properties ](/docs/identitymanager/6.2/reference/index.md)for this entity
type.

## Troubleshooting

If there are no connection tables available in the **Source** dropdown list of an entity type, then:

![Properties' source](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/entity-type-declaration/entitytypecreation_propertiessource_v522.webp)

Ensure that there are existing connections:

- if this is the case, then click on **Refresh all schemas** on the connector page, and verify that
  there is no error. See the [Create a Connection](/docs/identitymanager/6.2/reference/index.md) topic for
  additional information.
- if not, then you must create at least one connection.

If there is a message stating to refresh the connection's schema, then:

![No Connection Table Error](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/entity-type-declaration/entitytypecreation_troubleshootingschema_v603.webp)

Start by making sure that the connection's schema is refreshed by clicking on **Refresh all
schemas** on the connector page, and verify that there is no error.

If the message is still displayed, then it means that the previously selected connection table no
longer exists in the managed system. In this case, either the table's name simply changed, or the
table is not relevant anymore. Then you should find a relevant table in the **Source** dropdown
list.

# Create an Entity Type

How to create an
[ Entity Type ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
that corresponds to the connector model.

## Overview

An entity type is a model of a managed system's data. It defines the shape of the associated
resources (instances of said model) and not the intent (that would be a resource type. See the
[ Create a Resource Type ](/docs/identitymanager/6.2/reference/index.md) topic for
additional information. It defines a set of properties describing said resources and linking them
together.

In other words, an entity type is supposed to model the representation of a certain group of
resources inside Identity Manager. It is a relational model, made of properties
([ Define Scalar Properties ](/docs/identitymanager/6.2/reference/index.md)) and links between entity types
([ Define Navigation Properties ](/docs/identitymanager/6.2/reference/index.md)), both described later.

![Entity Type - Schema](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/entitytypecreation_schema.webp)

The configuration of entity types depends entirely on the previously established
by[ Model the Data ](/docs/identitymanager/6.2/reference/index.md).

Entity types will impact the import of the managed system's resources, and the way said resources
are displayed in the UI.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
purpose of the application.

| Input                                                                                                                                           | Output      |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Connection (required) Refreshed schemas (required) Connector's data [ Model the Data ](/docs/identitymanager/6.2/reference/index.md) (required) | Entity type |

See the [Create a Connection](/docs/identitymanager/6.2/reference/index.md) and
[ Model the Data ](/docs/identitymanager/6.2/reference/index.md) topics for additional information.

## Create an Entity Type

Create an entity type by proceeding as follows:

1. [ Create the Entity Type ](/docs/identitymanager/6.2/reference/index.md).
2. [ Define Scalar Properties ](/docs/identitymanager/6.2/reference/index.md)to be used in the entity type.
3. Choose the [ Select Primary Keys ](/docs/identitymanager/6.2/reference/index.md) and key properties which will identify
   resources.
4. Define [ Define Navigation Properties ](/docs/identitymanager/6.2/reference/index.md)if applicable.
5. Customize the [ Set Resources' Display Names ](/docs/identitymanager/6.2/reference/index.md) for the entity
   type's resources.
6. Organize the [ Organize Resources' Datasheets ](/docs/identitymanager/6.2/reference/index.md) for the entity
   type's resources in Identity Manager.

For some connectors, Identity Manager provides a template to automatically create a basic
configuration. See below this note.

> For example, the Active Directory template automatically creates an AD entity type and two
> resource types for a standard AD connector. The template is available for a connector with an AD
> connection but no entity types.
>
> ![Entity Type - AD Template](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/entitytype_template_v602.webp)

## Verify the Entity Type

Changes will take effect once you have launched synchronization. Therefore, in order to verify the
process, follow the verification procedure indicated
to[ Synchronize Data ](/docs/identitymanager/6.2/identity-management/synchronization/index.md).

# Select Primary Keys

How to choose its keys and an
[ Entity Type Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)key
in order to uniquely identify the
[ Entity Type ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)'s
resources at different points in a resource's lifecycle.

## Overview

Here you will learn how to select keys from among the entity type's scalar properties, in order to
ensure the unique identification of resources at different times.

It is important to show caution when choosing the mapping key and key properties for a set of data.
Every extracted resource must have unique keys in order to be uniquely identified in all IGA actions
performed by Identity Manager.

### Key properties

The key property of an entity type is a property chosen from among scalar properties. A key property
is used only in the XML configuration, but required when working both from the UI or from the XML
configuration.

The purpose of key properties is to uniquely identify a resource from the entity type in the XML
configuration. In particular, some rules need to fetch a resource, by querying the key property's
column in Identity Manager's database.

> For example a navigation rule involving an AD group can be written:
>
> ```
>
> <NavigationRule Property="memberOf" Resource="CN=SG_APP_AG002,OU=Applications,DC=acme,DC=internal" SingleRole="AG002" />
>
> ```
>
> Identity Manager needs to know what column to query to find the right resource via
> `CN=SG_APP_AG002...`. In this example we must choose `dn` as a key property because it is the `dn`
> property we use to represent the AD resource.

Key properties must be unique and immutable. They do not have to be immutable but they must enable
resources to be uniquely identifiable at t time.

> The `dn` attribute of a resource in the Active Directory usually depends on the resource's
> position, which often changes during the resource's lifecycle. However, `dn` is unique at a given
> time, and rather useful to define for example query rules for `parentdn`.

Only one key property is required, but using several key properties can sometimes help with the
rules in the XML configuration. Identity Manager will search the columns of each key property, one
by one, until a corresponding resource is found.

> For example, the AD's unique identifier is `objectGuid`. However, integrators may prefer to use
> `dn` because it constitutes a clearer group identification from a user's point of view. Plus,
> `objectGuid` is environment-specific so using it can complexify a situation where we want to move
> the configuration from an environment to another.
>
> Since an `objectGuid` can still be an interesting identifier, we want to have both the `dn` and
> the `objectGuid` as key properties. In this case, Identity Manager will be able to fetch a
> resource in a rule using said resource's `dn` or `objectGuid`.

### Mapping key

The mapping key is also chosen from among scalar properties, and serves to uniquely identify any
resource during the[ Synchronize Data ](/docs/identitymanager/6.2/identity-management/synchronization/index.md). It must be unique and
immutable, i.e. must not change during the whole lifecycle of the resource.

> A mapping key cannot be based on properties subject to change, such as the display name of any
> object, or users' title which could be renamed.
>
> For example, resources from the AD are usually identified through the `objectGuid` attribute which
> is therefore specified as mapping key.

Commonly used mapping keys are:

- `objectGuid` for the Active Directory
- `objectid` for Microsoft Entra ID
- `entryUuid` for LDAP
- `Identifier` for the directory
- `Login` for SAB
- `sapid` for SAP
- `sys_id` for ServiceNow
- `EmployeeId` for the HR

Since the mapping is able to uniquely identify any resource, NETWRIX recommends that your mapping
key is always part of your key properties.

## Select the Entity Type's Keys

Create an entity type by proceeding as follows:

1. Start by defining the entity type's scalar properties. See the
   [ Define Scalar Properties ](/docs/identitymanager/6.2/reference/index.md) topic for additional
   information.

   ![Keys](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_keys_v522.webp)

2. In the entity type's **Properties** section, choose the key properties.
3. Choose the mapping key.
4. Click on **Create & Close** > **Create** to save your changes.

## Reload

Every time an entity type mapping is modified and saved, a green pop-up appears saying that you
should reload the schema to implement the changes. You do not need to click on the button every
time. It is essential though to reload after the final changes are made.

![Reload](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_reload_v522.webp)

The **Reload** button mostly enables your changes to appear in the menu items, which configure the
left menu links on the UI's home page.

You can find the **Reload** button either on the green warning, or on the connector's dashboard.

## Next Steps

After the entity type is created with its scalar properties and keys, you can
[ Define Navigation Properties ](/docs/identitymanager/6.2/reference/index.md) and/or
[ Set Resources' Display Names ](/docs/identitymanager/6.2/reference/index.md).

# Define Navigation Properties

How to define the properties that describe the
[Entity Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)'s
relationships to other entity types.

## Overview

Navigation properties contain scalar values like other properties, but they link to other
properties—either from the same entity type or another one.  
See the [Define Scalar Properties](/docs/identitymanager/6.2/reference/index.md) topic for additional
context.

> **Example 1**: `memberOf` links a user to groups, or a group to other groups.  
> In the UI, `memberOf` behaves like a scalar property, but you can click its values to view the
> associated groups.  
> For the AD entry `ADM Vidal Pierre`:
>
> ![Navigation Property - memberOf](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_memberof_v600.webp)
>
> Clicking a group shows its properties, including the reverse side of `memberOf`, called `member`,
> which lists group members.  
> For the group `SG_APP_RAY_0_LDAP_READLDSFEDE`:
>
> ![Navigation Property - member](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_member_v600.webp)

> **Example 2**: Departments can link to managers using the `Manager` property, referencing a user’s
> identifier.  
> In the UI, `Manager` behaves like a scalar property, but clicking it opens the manager’s user
> profile:
>
> ![Navigation Property - Manager](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_manager_v600.webp)
>
> That profile includes a `Department` property, pointing back to the managed department:
>
> ![Navigation Property - Managed Department](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_managerof_v600.webp)

Navigation properties can link:

- Inside a single entity type
- Between two entity types from the same connector
- Between two entity types from different connectors

Identity Manager uses a "flip side" for each navigation link.  
For example, in AD:

- `member`: on groups, lists users
- `memberOf`: on users, lists groups

AD only stores `member` in groups; users don’t have a native `memberOf` property.  
Identity Manager synthesizes both ends to ensure full navigation mapping.

When importing data:

- `member` in AD updates `member` in Identity Manager
- Identity Manager then updates `memberOf` automatically

Usually, properties in Identity Manager are mapped to existing ones in the source system.  
If a property doesn’t exist in the source, it can still be created (e.g., for internal assignment
logic), but it won’t support read/write operations.

---

## Define the Entity Type's Navigation Properties

Follow these steps:

1. Declare the [Entity Type](/docs/identitymanager/6.2/reference/index.md).
2. In the **Properties** section, open the **Navigation Properties** tab.
3. Click **Map a navigation property** to view available source columns and select the desired
   properties.
4. Fill out the configuration fields:

   ![Navigation Properties](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_navigationproperties_v602.webp)

   - The **first line** maps the source column.
   - The **second line** defines the new property linked to that column.

### Application Metadata

- `Identifier`: Must be unique, whitespace-free, and C#-compatible.  
  [See Microsoft lexical structure](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#see-microsoft-lexical-structure)
- `Entity Type`: Always refers to the current entity type. Source property can be from any.
- `Storage Indicator`: Can be:

  - **Mono-valued** (1:1 or many:1)
  - **Multi-valued** (1:many or many:many)

  Identity Manager supports up to 25 optimized mono-valued navigation properties per entity
  type.  
   Prioritize:

  1. Properties used in forms and search
  2. Properties used in expressions and role models
  3. All others

- `Name`: Shown in the UI.  
  Use **singular** for mono-valued, **plural** for multi-valued.  
  Avoid names like `"Id"` for both identifier and display name.

### External System

- `Source`: Connection to the external system. You can select the source by:

  - Mapping from the source (auto-selects connection table)
  - Choosing from the dropdown (lists same-connector tables)
  - Using the search icon (all connectors)

- `Source Column`: The source field for data.
- `Column Content`: The field in the source used for identification.

> Example: If the column is `manager` and it stores user `dn`s, set `dn` as the column content.

> AD example navigation properties: `Entries`, `assistant`, `assistantOf`, `manager`,
> `directReports`, `memberOf`, `member`, `parentdn`, `children`

> ![AD Entity Type - Navigation Properties](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/navigation-property-definition/entitytypecreation_examplead3_v603.webp)

---

5. Click the gear icon to open **Advanced Settings**:

   ![Advanced Settings](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_propertiessettings_v602.webp)

   - `Icon`: Choose from [Microsoft's icon list](https://uifabricicons.azurewebsites.net/)
   - `Source Expression`: Defines the property using a property path or
     [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md)

     > Example: Create an `isUnused` scalar property based on `accountExpires` and
     > `lastLogonTimestamp`:
     >
     > ![Advanced Settings](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_sourceexpressionexample_v60.webp)

   - `Flexible Comparison Expression`: Improves search flexibility for the property.
   - `History Precision`: Sets how often the property’s value is historized.

     > Example: `lastLogonTimestamp` is frequently updated. To reduce historization noise, set
     > `History Precision` to 10080 minutes (1 week).  
     > This way, only one update per week is stored.

Clicking **Continue** closes the window but does **not save** the configuration.

---

## Reload

After saving changes, a green popup will prompt you to reload the schema.  
You can defer this, but **must reload after final changes**.

![Reload](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_reload_v522.webp)

Reloading ensures the updated navigation properties appear in the UI’s left menu structure.

You can access the **Reload** button via:

- The green popup
- The connector’s dashboard

---

## Next Steps

Once the entity type is configured with scalar, key, and navigation properties, you can
[Set Resources' Display Names](/docs/identitymanager/6.2/reference/index.md).

# Define Scalar Properties

How to define the simple, or scalar, properties of an
[ Entity Type ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)'s
resources.

## Overview

Here you will learn how to define scalar properties, which contain scalar values, mostly based on
the properties from the corresponding managed system.

> For example: `DisplayName`; `Email`; `Identifier`; `StartDate`; etc.
>
> ![Scalar Properties](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_scalarex_v600.webp)

Most often, properties inside Identity Manager are each linked to a property from the managed
system. This way, data from the managed system can be imported into Identity Manager and stored in
the corresponding property. These properties are mapped from the source (see step 2).

If the property to be created does not exist in the external source, it is impossible to map the
property, but it can still be created with **+ Add a scalar property**.

This can be used to store data needed for assignment management, but which you cannot write to the
connected system. Since these properties do not exist in the connected system, they cannot be
written or read.

For example, we may need to create in the AD the property `isUnused` to spot unused accounts. It
would be configured with a C# expression based on other properties from the same entity type. These
properties, such as `accountExpires` and `lastLogonTimestamp`, are each linked to a property from
the AD, while `isUnused` is for governance and surveying AD accounts.

Such properties do not exist in the AD, and thus will never be written to the AD, nor overwritten by
any property from the AD, but will be recalculated based on the other properties.

## Define the Entity Type's Scalar Properties

Define the entity type's scalar properties by proceeding as follows:

1. Start by declaring the [ Create the Entity Type ](/docs/identitymanager/6.2/reference/index.md).
2. In the entity type's **Properties** section, click on **Map scalar properties** to display
   existing columns from the external source, and select the properties to be used in the entity
   type.

   ![Map from source](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_scalarpropertiesmap_v602.webp)

   You need to configure at least one property to be able to define primary keys later, and thus
   create an entity type.

3. Fill in the information fields.

   ![Scalar properties](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_scalarproperties_v603.webp)

   - **APPLICATION METADATA**: fields about the future display of the properties inside Identity
     Manager.

     - `Identifier`: must be unique among properties, without any whitespace, and be
       C#-compatible.
       [See Microsoft lexical structure](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#see-microsoft-lexical-structure).
     - `Name`: will be displayed in the UI to indicate the property.

       Entity properties' names and identifiers cannot be "Id".

     - `Format`: format used for the property's display in Identity Manager, for search tools and
       computation based on said property. Do not keep the default string format if the property
       is not a string. See the
       [ References: Format for the EntityPropertyMapping ](/docs/identitymanager/6.2/integration/connectors/connector-basics/entity-property-mapping.md)
       topic for additional information.

       > For example, dates, booleans, integers, etc.

       For one entity type, Identity Manager can store up to 128 scalar properties of any
       format, and an unlimited number of binaries which are stored differently. Among these
       128 properties, only 4 can be formatted as more-than-443-character strings (with a limit
       of 4,000 characters), and 124 as less-than-443-character strings.

   - **EXTERNAL SYSTEM**: fields about the corresponding properties inside the connected system.

     - `Source Column`: column in the external system where the property data comes from.
       Advanced settings can be configured according to the description below.
     - `Format`: for mapped properties, format used to convert a value during export and fulfill
       from Identity Manager to the connected system, whenever different from a string.
       > To continue with the `AD - Entry` entity type, we map all the properties we need:
       >
       > `accountExpires`; `c`; `cn`; `comment`; `company`; `department`; `description`;
       > `displayName`; `division`; `dn`; `employeeId`; `employeeNumber`; `employeeType`;
       > `extensionAttribute10`; `extensionAttribute11`; `givenName`; `groupType`;
       > `homeDirectory`; `homeDrive`; `initials`; `l`; `lastLogonTimestamp`; `mail`; `mobile`;
       > `objectCategory`; `objectGuid`; `objectSid`; `ou`; `pwdLastSet`; `rdn`;
       > `sAMAccountName`; `scriptPath`; `sn`; `st`; `telephoneNumber`; `thumbnailPhoto`;
       > `title`; `uid`; `userAccountControl`; `userPrincipalName`; `whenCreated`.
       >
       > We create the properties that do not exist in the external system: `AppName`;
       > `businessCategory`; `isUnused`; `thumbnailPhotoTag`.
       >
       > Some of them have a specific format in case of provisioning to the managed AD like
       > `thumbnailPhoto` of format `Binary` or `objectCategory` as `RDN` or `pwdLastSet` as
       > `1601 Date`.
       >
       > ![AD Entity Type - Scalar Properties](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_examplead2_v602.webp)

4. Click on the Gear symbol to add advanced settings if needed.

   ![Advanced Settings](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_propertiessettings_v602.webp)

   - `Icon`: can be chosen from [Microsoft's list](https://uifabricicons.azurewebsites.net/) and
     will be displayed with the property among users' data.
   - **Source Expression**: expression that defines the property based on at least one source
     object. Can be defined by a property path and/or
     [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md).

     > For example, `isUnused` is created to spot unused accounts via a combination of
     > `accountExpires` and `lastLogonTimestamp`:
     >
     > ![Advanced Settings](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_sourceexpressionexample_v60.webp)

   - `Flexible Comparison Expression`: expression that inserts adaptable comparison flexibility
     when using a searchbar for the property.
   - `History Precision`: time period over which Identity Manager historically records only one
     value.

     > For example, the `lastLogonTimestamp` property of an AD resource is modified every time
     > the user connects to the application. Every modification triggers the historization of all
     > properties for said resource inside the database. Hence, the database can quickly become
     > full of data. In order to lighten the database, we can set the `History Precision` option
     > to one week (10080 minutes) so that resources are historized once a week at most
     > (concerning changes on `lastLogonTimestamp`). In the meantime, in case of a change,
     > instead of historizing resources with all their properties, only `lastLogonTimestamp` is
     > updated with the new value.

   Clicking on **Continue** closes the pop-up window so that you can continue the configuration of
   the entity type. But it does not save anything.

## Reload

Every time an entity type mapping is modified and saved, a green pop-up appears saying that you
should reload the schema to implement the changes. You do not need to click on the button every
time. It is essential though to reload after the final changes are made.

![Reload](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/key-selection/entitytypecreation_reload_v522.webp)

The **Reload** button mostly enables your changes to appear in the menu items, which configure the
left menu links on the UI's home page.

You can find the **Reload** button either on the green warning, or on the connector's dashboard.

## Next Steps

Before saving, you must first[ Select Primary Keys ](/docs/identitymanager/6.2/reference/index.md)for the entity type.

## Troubleshooting

If the Format column is not displayed in the External System part, then:

![Scalar properties](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/entity-type-creation/scalar-property-definition/entitytypecreation_scalarpropertieswithoutformat_v522.webp)

Refresh the connections' schemas.

# Connect to a Managed System

How to create a new
[ Connector ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
using the provided SaaS agent. See the
[ Architecture ](/docs/identitymanager/6.2/reference/index.md) topic for additional
information.

Identity Manager provides demo applications
([Run the Banking Demo Application](/docs/identitymanager/6.2/integration/connectors/connector-basics/configuration.md)
and
[Run the HR Demo Application](/docs/identitymanager/6.2/integration/connectors/connector-basics/configuration.md)) to
help set up connectors, test them, and understand Identity Manager's abilities towards external
systems.

## Overview

Connectors are the mechanisms that enable Identity Manager to read and write data to/from your
organization's systems. The feedback mechanism ensures Identity Manager's reliability.

In this documentation, we talk about managed systems (sometimes called external systems) to refer to
third-party applications, i.e. the applications used in your organization, such as Active Directory,
ServiceNow, EasyVista, SAP, SharePoint, etc.

A connector, therefore, acts as an interface between Identity Manager and a managed system.

![Connector Schema](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connectorcreation_connectorschema.webp)

NETWRIX strongly recommends the creation of one connector for one application.

> For example, integrators may create an `AD` connector with the goal of importing an Active
> Directory's data into Identity Manager, and writing to the Active Directory from Identity Manager,
> either manually for administration accounts, or automatically for basic accounts.
>
> Integrators may create a `SharePoint` connector in order to manage read and write entitlements for
> users in SharePoint.

### Data Flows

In the early steps of a project, we'll consider most of our connectors to be outbound, i.e. Identity
Manager will feed data into connected managed systems.

![Outbound System=](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connectorcreation_outbound.webp)

In this case, data flows between Identity Manager and the managed system are also called:

- synchronization in the "managed system-to-Identity Manager" direction;
- provisioning in the "Identity Manager-to-managed system" direction.

For a connector's synchronization, Identity Manager provides tools to perform a basic extraction of
the system's data in the form of CSV files. These files are cleaned and loaded into Identity
Manager. In other words, synchronizing means taking a snapshot of the managed system's data and
loading into Identity Manager.

For provisioning, Identity Manager generates provisioning orders and the connector provides tools to
either automatically write these orders to the managed system or to create a ticket for manual
provisioning.

> For example, we can use the data from Identity Manager's Identity repository to fill in later the
> AD's fields, such as users' display names based on their first names and last names from the
> repository. See the [ Create the Workforce Repository ](/docs/identitymanager/6.2/reference/index.md)
> topic for additional information.

Identity Manager can also benefit from inbound connectors, that will write data to Identity
Manager's central identity repository. While both inbound and outbound connectors allow data to flow
both ways, they do not work in the same manner.

### Technical principles

Identity Manager's connectors all operate on the same basic principles. Technically speaking:

> For example, let's say that we want to connect Identity Manager to our Active Directory, or AD.

- a connector must be created, first as a named container which will include the connections and
  entity types related to one managed system;

  > We create a connector named `AD` (so far, an empty shell).

- a
  [ Connector ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
  is linked to an agent which acts as the go-between for Identity Manager's server and the managed
  system;

  > Our `AD` connector uses the provided SaaS agent.

- a
  [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
  describes the technology used that enables data to flow back and forth between Identity Manager
  and the managed system;

  > We want to use a connection `Directory/Active Directory` to perform synchronization and
  > automated provisioning, and a second connection `Ticket/Usercube` to perform manual
  > provisioning through Identity Manager.

  You can find standard connections dedicated to one application (AD, Microsoft Entra ID, etc.),
  and generic connections to communicate with any application (CSV, Powershell, RobotFramework,
  SQL, etc.).

- the shape of the extracted managed system's data is modeled by
  [ Entity Type ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
  (we will use the term resource to refer to an entity type that has been instantiated);

  > We create a single entity type `AD - Entry` which contains all the attributes that will
  > describe its resources, i.e. AD groups and users. The attributes include the department, the
  > employee identifier, the manager, the group membership (`member`/`memberOf`), the dn, the
  > parent dn, etc.

- the intent of resources within the managed system is made clear by categorizing resources into
  [ Create a Resource Type ](/docs/identitymanager/6.2/reference/index.md). See the
  [ Categorize Resources ](/docs/identitymanager/6.2/reference/index.md) topic for additional information.

  > We categorize AD resources into distinct resource types: `AD User (nominative)` for basic
  > accounts, which we want Identity Manager to provision automatically;
  > `AD User (administration)` for sensitive administration accounts, which we want to provision
  > manually through Identity Manager.

![Connector Technical Schema](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/connect-system/connectorcreation_connectortechnicalschema.webp)

A connector requires at least one connection and one entity type.

When provisioning a managed system, the corresponding connector also needs at least one resource
type.

**Local vs. Saas agents:** To simplify things, Identity Manager has made it possible to start
configuring connectors without installing a local agent in your organization's network. Instead, you
can use the agent integrated with Identity Manager's server in the Cloud (SaaS agent).

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
functional and technical details of the application.

| Input                                                                                                                   | Output                     |
| ----------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| Administrator account for the Development Environment (required) Identity repository (required) User Profile (required) | Connector Connected System |

See the [Install the Development Environment,](/docs/identitymanager/6.2/reference/index.md)
[ Create the Workforce Repository ](/docs/identitymanager/6.2/reference/index.md), and
[ Configure a User Profile ](/docs/identitymanager/6.2/reference/index.md) topics for additional
information.

## Create a Target Connector

For one managed system, create a connector by proceeding as follows:

1. Outside Identity Manager, [ Model the Data ](/docs/identitymanager/6.2/reference/index.md).
2. [ Create the Connector ](/docs/identitymanager/6.2/reference/index.md) for said managed system.
3. Enable the technical transfer of data by creating and configuring
   [Create a Connection](/docs/identitymanager/6.2/reference/index.md).
4. Set up [Create an Entity Type](/docs/identitymanager/6.2/reference/index.md) to represent the data model decided
   upon in step 1.

**Connector modification:** The process for modifying a connector is not so different from the
process for creating a connector, as you mainly modify the fields specified during creation.
However, keep in mind that a connector must be deactivated before modification, in order to withdraw
the connector's synchronization- and provisioning-related tasks from any jobs. See below this note.

You can activate the connector again at any time using the same button.

![Jobs Results Dashboard](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/synchronization/synchro_dashboard_v522.webp)

## Next Steps

Once the connector has been created, you can start
to[ Synchronize Data ](/docs/identitymanager/6.2/identity-management/synchronization/index.md).
xml version="1.0" encoding="utf-8"?

# Install the Development Environment

How to connect to 's SaaS environment to set up the development environment.

When using 's on-premise option, follow the procedure of installation of the bootstrap version. See
the Quick Start Guide topic or additional information.

## Overview

The installation of 's production environment usually takes time, while we want to start configuring
at once.

This is why offers a bootstrap version of the application, useful as a development environment.

## Participants and Artifacts

Integrators must be in contact with to be able to get infos about the SaaS tenant URL and
authentication.

| Input | Output                  |
| ----- | ----------------------- |
| -     | Development environment |

## Install the Development Environment

The documentation is not yet available for this part and will be completed in the near future.

## Verify Environment Installation

In order to verify the process, try to authenticate to  server, and access the configuration
screens.

## Next Steps

Once the development environment is ready, integrators can start to Create the Workforce Repository.

# Set Up

- [ Install the Development Environment ](/docs/identitymanager/6.2/reference/index.md)

  How to connect to Identity Manager's SaaS environment to set up the development environment.

- [ Create the Workforce Repository ](/docs/identitymanager/6.2/reference/index.md)

  How to initiate the repository for workforce identities by loading identities into Identity
  Manager with the right attributes.

- [ Configure Unique Property Generation ](/docs/identitymanager/6.2/reference/index.md)

  How to configure Identity Manager to generate unique identifiers, mails and logins for any user
  who does not have them already.

- [Load Identities to Identity Manager](/docs/identitymanager/6.2/reference/index.md)

  How to load identities into Identity Manager for the first time using a basic data model in the
  form of a template MS Excel file.

- [Template Description](/docs/identitymanager/6.2/reference/index.md)

  Description of the MS Excel template for the creation of the identities repository.

- [ Adjust the Workforce Data Model ](/docs/identitymanager/6.2/reference/index.md)

  How to select the properties to be part of the data model for the workforce repository
  (therefore displayed in the UI), and choose their optimal displaying mode.

- [ Configure a User Profile ](/docs/identitymanager/6.2/reference/index.md)

  How to tweak the permissions for actions within Identity Manager, for a standard set of basic
  Identity Manager profiles.

- [ Configure Onboarding Workflows ](/docs/identitymanager/6.2/integration/workflows/index.md)

  How to adjust the parameters of onboarding workflows.

- [ Connect to a Managed System ](/docs/identitymanager/6.2/reference/index.md)

  How to create a new connector using the provided SaaS agent.

- [ Model the Data ](/docs/identitymanager/6.2/reference/index.md)

  How to choose the appropriate model for a connector's data.

- [ Create the Connector ](/docs/identitymanager/6.2/reference/index.md)

  How to create the technical container of a connector.

- [Create a Connection](/docs/identitymanager/6.2/reference/index.md)

  How to create a connection inside a connector and choose the appropriate package.

- [Create an Entity Type](/docs/identitymanager/6.2/reference/index.md)

  How to create an entity type that corresponds to the connector model.

- [ Synchronize Data ](/docs/identitymanager/6.2/identity-management/synchronization/index.md)

  How to launch data synchronization, i.e. read managed systems' data and load it into Identity
  Manager.

- [ Categorize Resources ](/docs/identitymanager/6.2/reference/index.md)

  How to correlate managed systems' resources with identities, classifying resources into resource
  types.

- [ Create a Resource Type ](/docs/identitymanager/6.2/reference/index.md)

  How to create the container for future correlation and classification rules inside a given
  managed system.

- [ Correlate Resources ](/docs/identitymanager/6.2/reference/index.md)

  How to define correlation rules to match up resources across systems, usually accounts with
  their owner.

- [ Classify Resources ](/docs/identitymanager/6.2/reference/index.md)

  How to define classification rules in order to classify remaining uncorrelated resources,
  assigning them resource types.

- [ Create a Provisioning Rule ](/docs/identitymanager/6.2/reference/index.md)

  How to define scalar rules, navigation rules and/or query rules to compute and provision target
  resources values from source resources values.

- [ Create Resources ](/docs/identitymanager/6.2/reference/index.md)

  How to define resource type rules to create new (target) resources for given users, computing
  and provisioning their properties based on source resources.

- [Compute a Scalar Property](/docs/identitymanager/6.2/reference/index.md)

  How to define scalar rules to compute and provision the values of scalar properties for target
  resources based on source resources.

- [ Compute a Navigation Property ](/docs/identitymanager/6.2/reference/index.md)

  How to define navigation rules and/or query rules to compute and provision the values of
  navigation properties for target resources based on source resources.

- [ Create Roles in the Role Catalog ](/docs/identitymanager/6.2/reference/index.md)

  How to define single roles to model entitlements, and organize them inside the role catalog,
  basis of the role model.

- [ Create Roles in Bulk ](/docs/identitymanager/6.2/reference/index.md)

  How to create role naming rules, which create single roles using existing naming conventions
  from the managed system.

- [ Create a Category ](/docs/identitymanager/6.2/reference/index.md)

  How to structure roles into categories.

- [Create a Role Manually](/docs/identitymanager/6.2/reference/index.md)

  How to create single roles manually.

- [Assign Users a Profile](/docs/identitymanager/6.2/reference/index.md)

  How to assign Identity Manager's access permissions to users through profiles.

- [ Manage Role Officers ](/docs/identitymanager/6.2/reference/index.md)

  How to manage role officers in order to ensure the approval for entitlement assignments.

# Adjust the Workforce Data Model

How to select the properties to be part of the data model for the workforce repository (therefore
displayed in the UI), and choose their optimal displaying mode.

## Overview

After you created the initial version of the workforce repository, Identity Manager provides an easy
method to optimize the structure of the data model, for example preventing empty fields in the UI.

According to the number of resources in the organization, Identity Manager's analysis of the data
model's usage suggests:

- to remove unused entity types (country, site, gender, subsidiary, etc.) from the data model and
  from the UI;
- to remove unused properties (phone number of a user, position end date, town of a site, etc.) from
  fields to fill in the workflows for entity creation, except for properties that are essential to
  Identity Manager's operation and thus ensured to be part of the data model (e.g. the contract's
  start date);
- an optimized display mode in the UI for all entity types, and for the fields which link to another
  entity (manager of a department, contract type of a user, gender of a user, etc.) and thus require
  a query tool (dropdown box, search bar, etc.).

You can then make your own choice about activating/deactivating/re-activating any property, and you
will be able to make modifications at any time.

## Participants and Artifacts

Integrators may need the help of the HR department who know the organization.

| Input                                                                      | Output                        |
| -------------------------------------------------------------------------- | ----------------------------- |
| Identity Manager Server (required) Initial workforce repository (required) | Adjusted workforce repository |

See the [Install the Development Environment](/docs/identitymanager/6.2/reference/index.md)
and [Load Identities to Identity Manager](/docs/identitymanager/6.2/reference/index.md) topics for additional
information.

## Adjust the Data Model

Adjust the data model by proceeding as follows:

1. On the home page, click on **Settings** in the **Configuration** section.

   ![Home Page - Configuration](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-configuration/home_settings_v523.webp)

2. On the **Workforce** > **Data Model** page, click on the following icon to adjust the data model
   to your specific situation.

   ![Scan Data Model](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/adjust-datamodel/iconscandatamodel_v602.svg)

   ![Scan Data Model](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/adjust-datamodel/initialload_scandatamodel_v60.webp)

   Identity Manager counts the entries for each attribute and suggests a quantification:

   - Empty attributes are deactivated as they should be excluded to simplify the data model.
   - Non-empty attributes are quantified (e.g. small, large, etc.) to be displayed in the UI's
     forms optimally (e.g. dropdown list, search tool, etc.).

   ![Scan Data Model - Result](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/adjust-datamodel/initialload_scandatamodel-result_v523.webp)

3. Observe the result and adjust manually the data model if needed, by clicking on the properties.

   While Identity Manager suggests a structure for the data model, the choice is yours to
   activate/deactivate any property.

   > For example, empty attributes should be excluded to simplify the data model. However, you can
   > choose to keep an empty property anyway if you know that you want to fill it in later.

   Note that Identity Manager stays authoritative to activate some properties that are mandatory
   for Identity Manager's operation.

   For example the contract's start date is necessary for Identity Manager's workflows.

   Modifications can be performed later, decisions can be reconsidered. See the
   [ Modify the Identity Data Model ](/docs/identitymanager/6.2/reference/index.md)
   topic for additional information.

4. Click on the Save icon at the top.

   ![Save Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-configuration/iconsave_v602.svg)

5. Click on the **Reload** button to apply the recent changes to the application.

   ![Reload Button](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/generate-unique-properties/reload_v603.webp)

## Verify Identities Loading

In order to validate the process:

1. Choose a test field and note its displaying mode.

   > For example, our `Region` field in `Site` is sized as `large`.
   >
   > ![Scan Data Model - Example](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/adjust-datamodel/initialload_scan-example_v523.webp)

2. Navigate within Identity Manager to find a workflow using the test field. Observe the displaying
   mode in the UI.

   > Our `State` field must be filled in during the creation of a new site. It can be filled by
   > opening a pop-up and choosing the region in the list.
   >
   > ![Scan Data Model - Example](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/adjust-datamodel/initialload_scan-example2_v523.webp)
   >
   > ![Scan Data Model - Example](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/adjust-datamodel/initialload_scan-example3_v523.webp)

3. Back on the scanning feature, change the displaying mode of your test field and save.

   > We change `large` to `extra small`.

4. Verify the test field's displaying mode.

# Configure Unique Property Generation

How to configure Identity Manager to generate unique identifiers, mails and logins for any user who
does not have them already.

## Overview

All users need to:

- be uniquely identifiable through an identifier, for example in order to link all accounts to their
  owners;
- have a reserved unique email address, even if they do not need a mailbox;
- have a unique login that can be used as a seed for all users' accounts.

For each unique property, Identity Manager provides a set of generation rules. You are free to
choose the most adequate method regarding your actual approach.

An identifier/email/login suffix can be specified later according to users' contract types, when
loading identities through an Excel template. See the
[Load Identities to Identity Manager](/docs/identitymanager/6.2/reference/index.md) topic for additional
information.  
For example, contractors can get `-ext` added automatically to their email addresses.  
The unicity checks performed for identifiers/emails/logins do not consider prefixes nor suffixes.

For example, `john.doe@acme.com` and `john.doe-ext@acme.com` cannot exist simultaneously.

## Participants and Artifacts

Integrators may need the help of the HR department to understand the actual approach of the
organization to compute these unique properties.

| Input                              | Output                                 |
| ---------------------------------- | -------------------------------------- |
| Identity Manager Server (required) | Generation rules for unique properties |

See the [Install the Development Environment](/docs/identitymanager/6.2/reference/index.md)
topic for additional information.

## Configure Unique Property Generation

Configure the generation of unique properties by proceeding as follows:

1. On the home page, click on **Settings** in the **Configuration** section.

   ![Home Page - Configuration](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-configuration/home_settings_v523.webp)

2. On the **Workforce** > **Identifiers, Mails & Logins** page, you can follow Identity Manager's
   instructions to configure the generation of a unique identifier for new workers (if needed),
   based on one of the available options.

   ![Unique Identifier Generation](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/generate-unique-properties/initialload_uniqueidentifier_v602.webp)

   - `Based on Full Name`: replaces all diacritics by the non-accentuated variants; removes all
     special characters; can add a separator between the first name and the last name if needed
     (such as `.` most often); in case of homonyms, appends a sequence number to the full name.
   - `Based on Last Name`: uses the first letter of the first name; in case of homonyms, uses more
     letters of the first name up to the whole first name; in case of homonyms still, appends a
     sequence number to the full name.
   - `Random Number`: uses a random number with a default prefix which is used when no specific
     prefix is specified on the user's contract type.

     Netwrix Identity Manager (formerly Usercube) recommends using random numbers, as they have
     the advantage of not containing any personal information nor giving any hint about the
     users' seniority.

   - `Sequence`: uses a sequence with a default prefix which is used when no specific prefix is
     configured on the user's contract type.

3. Follow Identity Manager's instructions to configure the generation of a unique email address for
   all users (who do not have one), based on one of the available options.

   ![Unique Email Generation](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/generate-unique-properties/initialload_uniqueemail_v602.webp)

   - `Based on Full Name`: replaces all diacritics by the non-accentuated variants; removes all
     special characters; can add a separator between the first name and the last name if needed
     (such as `.` most often); in case of homonyms, appends a sequence number to the full name.
   - `Based on Last Name`: uses the first letter of the first name; in case of homonyms, uses more
     letters of the first name up to the whole first name; in case of homonyms still, appends a
     sequence number to the full name.
   - `Based on Unique Identifier`: uses a combination of the unique identifier (defined on the same
     page) and the email domain.

     No matter the strategy:

     - the default email domain is used when no specific domain is specified on the user's
       subsidiary;
     - emails are generated in a way that lets users keep their email address, even if they move
       from contractors to employees, or change to another subsidiary.

4. Follow Identity Manager's instructions to configure the generation of a unique login for new
   workers (who do not have one), based on one of the available options.

   ![Unique Login Generation](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/generate-unique-properties/initialload_uniquelogin_v602.webp)

   - `Based on Email`: uses the local part of the email, i.e. before `@`.
   - `Based on Full Email`: uses the full email.
   - `Based on Unique Identifier`: uses the unique identifier (defined on the same page) prepended
     with the default prefix when no specific prefix is specified on the user's contract type.

5. Click on the Save icon at the top.

   ![Save Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-configuration/iconsave_v602.svg)

6. Click on the **Reload** button to apply the recent changes to the application.

   ![Reload Button](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/generate-unique-properties/reload_v603.webp)

## Verify Property Generation

In order to verify the process, add a fictitious employee through the workflows from the UI.

![Home - New Employee](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/generate-unique-properties/home_newemployee_v600.webp)

Verify in the directory that the employee's sheet displays the expected values for the configured
unique properties.

![Home - Directory User](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

# Create the Workforce Repository

How to initiate the repository for workforce identities by loading identities into Identity
Manager with the right attributes.

## Overview

Loading the digital identities into Identity Manager is the very first task you have to perform,
once you installed the development environment.

The identity repository is supposed to contain the list of all kinds of identities in the company.
Each identity will be represented by a set of properties that are to be used in the calculations for
entitlement assignments.

> For example, a user can be represented by an identifier and linked to their position which
> includes the user's employee id, last name and first name, email, user type, organization, etc.
>
> ![Identity Repository Example](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/identityrepository-example.webp)

> In Identity Manager, the identity repository can look like the following:
>
> ![Identity Repository Result](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/identityrepository_v602.webp)
>
> ![Identity Example](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/identityrepository-person_v602.webp)

See the
[ Identity Repository ](/docs/identitymanager/6.2/identity-management/identity-repository.md)
topic for additional information..

The initial workforce repository is going to be the first version of a comprehensive repository
containing all users in the organization. This repository is crucial in setting up the identity
lifecycle management features and managing assignments of entitlements.

### Creation strategy for the workforce repository

In a nutshell, Identity Manager has made it as easy as a copy-paste from employee and contractor HR
files into an MS Excel file.

#### Special properties generation

First, you have to choose rules about how email, login, and internal identifiers are going to be
built for new identities, and for existing identities who do not have these unique properties yet.

#### Organizational model creation

Then, you are going to need a model of the organization's structure where the identities fit in.
This model is supposed to provide valuable information for automation and governance features later.

The model is where you are going to identify for example the type of identities you want to manage
(such as employees and contractors), the hierarchical relationships between them, the geographical
areas they work in, and so on.

Identity Manager has already built a template model for you, in the form of an Excel file. This
basic model is customizable and will be adaptable to most organizations. You can customize it simply
by writing information from your organization into said Excel file.

Even if you have more specific or exotic needs that aren't met by this model, it is still a good
starting point and a good way to quickly start delivering value. We recommend that you start
building your project using this model, identify its limits along the way, and enhance it down the
road to make it fit your needs more accurately.

#### Organizational model filling

Then, you write down the actual identities information, still using the same Excel file, using data
from HR extractions or other records of contractors and temporary workers. As simple as a
copy-paste.

The data you are going to load is analyzed by the engine and some simplifications will be suggested.

**HR synchronization is not enough:**

Another way of handling a part of the initial data loading is to set up an automated synchronization
of HR data with Identity Manager.

While it seems to be a good idea, it poses a few problems. Among them:

- a specific IT infrastructure is required and its implementation is likely to delay the project's
  progress;
- HR data usually misses crucial information (for example contractor data) and is rarely up to date
  early enough to be really useful.

Hence, in order to rather focus on awaited IGA activities, we choose to build the first iteration of
the project upon a manual data upload to create the initial workforce repository. .

## Participants and Artifacts

Integrators may need the help of the HR department and its assistants who know the organization in
order to get the identity and organizational data. After the initial loading, the HR department can
review the data to confirm its accuracy.

| Input                                                                                                                    | Output                       |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| Identity Manager Server (required) Organizational chart (required)) HR data (required) Third-party staff data (optional) | Initial workforce repository |

## Create the Workforce Repository

Create the workforce repository by proceeding as follows:

1. [ Configure Unique Property Generation ](/docs/identitymanager/6.2/reference/index.md) for all users,
   pre-existing and new, who do not have them yet.
2. [Load Identities to Identity Manager](/docs/identitymanager/6.2/reference/index.md) to Identity Manager based on the
   recommended attributes from the provided organizational model
   [Template Description](/docs/identitymanager/6.2/reference/index.md).
3. [ Adjust the Workforce Data Model ](/docs/identitymanager/6.2/reference/index.md) following Identity Manager's
   suggestions.
4. Continue with the next steps of this guide, and come back later to fill the organizational model
   with additional data.

## Next Steps

Once the initial identities are loaded, integrators can start the User Profile configuration. See
the [ Configure a User Profile ](/docs/identitymanager/6.2/reference/index.md) topic for additional
information.

From there you will be able to keep your repository up to date:

- concerning identity data through workflows;
- concerning the data model

The initial identities loading also enables:

- HR connector creation.

# Load Identities to Identity Manager

How to load identities into Identity Manager for the first time using a basic data model in the form
of a template MS Excel file.

## Overview

Loading the digital identities into Identity Manager is the very first task you have to perform,
once you installed the development environment.

The initial workforce repository is going to be the first version of a comprehensive directory
containing all users in the organization. This directory is crucial in setting up the identity
lifecycle management features and managing assignments of entitlements.

Identity Manager contains a template model, downloadable as an Excel file. Below is an example of a
part of the `UserRecord` tab, used in Identity Manager's demo:

![Template Example](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/initialload_templateexample_v602.webp)

### Useful data

Not all data is useful for identity governance and administration. Thus, to start designing the
repository, you must be aware of which data is necessary and which is unhelpful. Useful data is the
data that:

- needs to be provisioned to the managed applications;

  > For example, if you need to provision users' phone numbers in a given application, then you
  > should fill in the workforce repository's `Phone Number` property.

- is needed to manage identities' lifecycles;

  > For example, consider that internal employees must be managed by HR officers only, then you'll
  > need to identify whether users are internal employees or external contractors. Then you should
  > make sure that you fill an `Employee Type` property with at least two values: one for internal
  > employees, and one for external contractors.

- is needed to automatically grant permissions.

  > For example, if a user's position title ("manager" for instance), defines what users currently
  > do, and thus what permissions they need, then you should make sure to fill in a property
  > storing the position's title in the workforce repository.

## Participants and Artifacts

Integrators may need the help of the HR department who knows the organization in order to get the
identity and organizational data. After the initial loading, the HR department can review the data
to confirm its accuracy.

| Input                                                                                   | Output                       |
| --------------------------------------------------------------------------------------- | ---------------------------- |
| Identity Manager Server (required) HR data (required) Third-party staff data (optional) | Initial workforce repository |

See the [Install the Development Environment](/docs/identitymanager/6.2/reference/index.md)
topic for additional information

## Load Identities

Load identities for the first time by proceeding as follows:

1. On the home page, click on **Settings** in the **Configuration** section.

   ![Home Page - Configuration](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-configuration/home_settings_v523.webp)

2. On the **Workforce** > **Data Upload** page, download the empty Excel template.

   ![Upload Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/icondownload_v602.svg)

3. Collect identity and organizational data.

   If you don't know where to start, identities most often include long-term employees, temporary
   employees (such as interns and temps) and external contractors. The template contains a
   `UserType` tab that lists all the types of workers that you want to include, i.e. the usual
   identities listed just before, but also partners, clients, even applications.

   Workforce should include obviously all current workers, but also incoming workers, and those who
   left the organization in the past XXX (time period defined by the rules of the security
   officer). It is interesting to have past workers in order to understand the process and ensure
   that they are supposed to be orphaned. See the
   [Review Orphaned and Unused Accounts](/docs/identitymanager/6.2/reference/index.md)
   topic for additional information.

   **Employees**

   The workers that are directly employed by the organization usually have their data stored in the
   HR system.

   **Contractors**

   Often third-party workers like contractors are not part of the HR system. Then, there are a few
   possible solutions to get their data:

   - through purchasing department if it doesn't imply any personal data security breach;
   - manually with knowledgeable people, for example department managers and assistants;
   - through a filter on data from available directories, for example on the email address if it
     contains a specific string like `.ext@`;
   - through an Active Directory extraction with a filter on an attribute that works with a
     specific part, for example on the employee identifier.

4. Fill said template with the data you collected.

   The Excel file contains several tabs which organize data, but not all tabs and columns are
   mandatory. You can find **more details about the
   [Template Description](/docs/identitymanager/6.2/reference/index.md)**. Below are the minimum recommended
   attributes (mandatory in orange):

   ![Template Recommendations](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/initialload_templatereco_v600.webp)

   [**Click here to download a template example**](/files/identitymanager/user-guide/set-up/initial-identities-loading/Directory_example_V602.xlsx).

   Every object (so every tab) of the directory must have a **key**, which is an attribute:

   - unique, i.e. designed to uniquely identify an object/resource, one key can't be shared;
   - immutable, i.e. must not change during the whole lifecycle of the object/resource, even for
     renaming for example;
   - consistent, i.e. identical everywhere the object/resource is specified.

   Among other things, a consistent key allows identities to use the same login in all
   applications. A consistent key is also essential to form the link between identities and the
   other objects (organizations, titles, etc.).

   **Create your initial workforce repository with only recommended attributes.**

   As we aim to quickly enable Identity Governance and Administration (IGA) actions (like the
   review of orphaned and unused accounts, or access certification, etc.), Netwrix Identity Manager
   (formerly Usercube) recommends loading identities with only necessary data. The model can be
   completed later.

   Moreover, Identity Manager's Query module can help gather data from other systems.

   For example, let's say that contractors' phone numbers are found only in the AD. Then we can
   wait for the connection of Identity Manager to the AD, and finally use the Query module to
   collect missing data. In this case:

   1. Upload the `Directory.xlsx` file with only recommended data, validate and synchronize as
      explained on this page.
   2. Connect the AD, synchronize AD data, update correlation and classification. See the
      [ Categorize Resources ](/docs/identitymanager/6.2/reference/index.md) topic for additional information.
   3. Follow the usual query procedure to request phone numbers from the AD.
   4. Ensure you display a key (for example `EmployeeId` or `email`) to master the order of the
      displayed data.
   5. Download the report.
   6. Copy the report's columns one by one to paste them into the Directory.xlsx file.
   7. Synchronize directory data.

5. Back on the **Workforce** > **Data Upload** page, upload the filled Excel file to the server in
   order to feed the data back to Identity Manager.

   ![Upload Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/iconupload_v602.svg)

   The latest uploaded file overwrites the previous one.

6. Click on **Verify and Synchronize** to check the file's consistency and import its data into
   Identity Manager.

   ![Verify and Synchronize](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/initialload_dataupload-synchronize_v602.webp)

   Now you are able to view users' pages in the directory.

   ![Directory - Users](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/initialload_directoryusers_v602.webp)

## Verify Identities Loading

In order to validate the process:

- Check manually a sample in the user directory accessible from the home page. You should verify at
  least your own sheet and the sheets for your hierarchy.

  ![Home - Directory User](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

- Check that every organization includes a manager. Organizations are accessible from the department
  directory on the home page.

  ![Home - Directory Department](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/home_directorydepartment_v523.webp)

  ![List of Departments](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/load-identities/initialload_departments_v602.webp)

  If the system contains many organizations, then it is also possible to list each organization
  with its manager through the Query module.

- Create reports with indicators on the number of workers per type or per organization for example
  (through Identity Manager's predefined reports, the Query module or Power BI), in order to ensure
  that Identity Manager's content sticks to reality.

  See the [ Generate Reports ](/docs/identitymanager/6.2/reference/index.md) topic for additional
  information.

# Template Description

Description of the MS Excel template for the creation of the identities repository.

[Click here to download a template example](/files/identitymanager/user-guide/set-up/initial-identities-loading/Directory_example_V602.xlsx).

![Template Model](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/initial-identities-loading/template-description/initialload_templatemodel_v603.webp)

All tabs contain a column `Command` only used at a later stage to modify (massively) identity data.
See the
[ Update Identities in Bulk ](/docs/identitymanager/6.2/reference/index.md)
topic for additional information.

## User - Required

An identity is split into two parts, the first one being the parent resource called `User` which
represents the user's identity card. It contains the few attributes which shall not change during
the identity's lifecycle. See the
[Identity Management](/docs/identitymanager/6.2/identity-management/index.md) topic for
additional information.

| Attribute                    | Type    | Description |
| ---------------------------- | ------- | ----------- |
| Identifier (required)        | String  |             |
| ConsentPhotoUsage (optional) | Boolean |             |
| IsDraft (optional)           | Boolean |             |

## UserRecord - Required

An identity is split into two parts, the second one being the one or several child resources called
`UserRecord` which represent the user's positions. Records belong to users and help materialize:

- several positions at once;
- validity periods for positions/assignments unrelated to the user itself;
- position changes.

In other words, records represent the lifecycle of a user inside the company, i.e. multiple
contracts, mutation, etc.

Thus, the `UserRecord` tab usually holds users' information that might change over time, while the
`User` tab groups all records of a given user around its identifier.

| Attribute                                                                                | Type       | Description                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RecordIdentifier (recommended)                                                           | String     | Identifier of the Records. See the[ Position Change via Records ](/docs/identitymanager/6.2/identity-management/user-lifecycle/position-changes.md). **Note:** it can be the same as `PositionIdentifier` when users can have no more than one contract simultaneously. **Note:** required when using records. |
| User (required)                                                                          | ForeignKey | `Identifier` from the `User` tab.                                                                                                                                                                                                                                                                              |
| EmployeeId (recommended)                                                                 | String     |                                                                                                                                                                                                                                                                                                                |
| Gender (optional)                                                                        | ForeignKey | `Identifier` from the `Gender` tab.                                                                                                                                                                                                                                                                            |
| PersonalTitle (optional)                                                                 | ForeignKey | `Identifier` from the `Personal Title` tab.                                                                                                                                                                                                                                                                    |
| FirstName (recommended)                                                                  | String     |                                                                                                                                                                                                                                                                                                                |
| LastName (recommended)                                                                   | String     |                                                                                                                                                                                                                                                                                                                |
| BirthName (optional)                                                                     | String     |                                                                                                                                                                                                                                                                                                                |
| BirthDate (optional)                                                                     | DateTime   |                                                                                                                                                                                                                                                                                                                |
| Email (recommended)                                                                      | String     |                                                                                                                                                                                                                                                                                                                |
| EmailAliases (optional)                                                                  | String     | Outdated, or any other email address associated with the user. This is used to prevent the re-assignment of a previously used address.                                                                                                                                                                         |
| Login (optional)                                                                         | String     |                                                                                                                                                                                                                                                                                                                |
| PhoneNumber (optional)                                                                   | String     |                                                                                                                                                                                                                                                                                                                |
| MobileNumber (optional)                                                                  | String     |                                                                                                                                                                                                                                                                                                                |
| VIP (optional)                                                                           | Boolean    | `True` to specify that the user is special/important.                                                                                                                                                                                                                                                          |
| ContractIdentifier (required)                                                            | String     |                                                                                                                                                                                                                                                                                                                |
| ContractStartDate (required)                                                             | DateTime   | Start date of the user's contract in the company.                                                                                                                                                                                                                                                              |
| ContractEndDate (recommended for permanent contracts, required for fixed-term contracts) | DateTime   | End date of the user's contract in the company.                                                                                                                                                                                                                                                                |
| AccessesExpirationDate (optional)                                                        | DateTime   | Date when the user will be deprived of their access rights.                                                                                                                                                                                                                                                    |
| UserType (required)                                                                      | ForeignKey | `Identifier` from the `User Type` tab.                                                                                                                                                                                                                                                                         |
| Subsidiary (optional)                                                                    | ForeignKey | `Identifier` from the `Subsidiary` tab.                                                                                                                                                                                                                                                                        |
| ExternalCompany (optional)                                                               | ForeignKey | `Identifier` from the `External Company` tab.                                                                                                                                                                                                                                                                  |
| PositionIdentifier (required)                                                            | String     |                                                                                                                                                                                                                                                                                                                |
| PositionStartDate (optional)                                                             | DateTime   |                                                                                                                                                                                                                                                                                                                |
| PositionEndDate (optional)                                                               | DateTime   |                                                                                                                                                                                                                                                                                                                |
| Organization (recommended)                                                               | ForeignKey | `Identifier` from the `Organization` tab.                                                                                                                                                                                                                                                                      |
| Manager (recommended)                                                                    | String     | Line manager. `Identifier` from the `User` tab.                                                                                                                                                                                                                                                                |
| IGAManager (optional)                                                                    | String     | Validator of IGA requests. `Identifier` from the `User` tab.                                                                                                                                                                                                                                                   |
| JobTitle (optional)                                                                      | String     |                                                                                                                                                                                                                                                                                                                |
| Title (optional)                                                                         | ForeignKey | `Identifier` from the `Title` tab.                                                                                                                                                                                                                                                                             |
| Site (optional)                                                                          | ForeignKey | `Identifier` from the `Site` tab.                                                                                                                                                                                                                                                                              |
| Office (optional)                                                                        | ForeignKey | `Identifier` from the `Office` tab.                                                                                                                                                                                                                                                                            |
| OfficeNumber (optional)                                                                  | String     |                                                                                                                                                                                                                                                                                                                |
| IsMainPosition (optional)                                                                | Boolean    |                                                                                                                                                                                                                                                                                                                |
| Suspended (optional)                                                                     | Boolean    |                                                                                                                                                                                                                                                                                                                |
| StartDate (optional)                                                                     | DateTime   | Start date of the record, used for changes that aren't related to contract and position information, for example a scheduled name change.                                                                                                                                                                      |
| EndDate (optional)                                                                       | DateTime   | End date of the record, used for changes that aren't related to contract and position information, for example a scheduled name change.                                                                                                                                                                        |

See the Template Description topic for additional information.

Recommendations:

- There is no absolute need for a unique identifier, because Identity Manager can compute one in the
  next steps.
- Be aware of the difference between a hierarchical manager and an IGA manager who approves
  entitlement requests. They aren't necessarily the same person.

## UserType - Required

User types represent users' contract types, such as permanent contract, fixed term contract,
interim, contractor, trainee, etc.

| Attribute                             | Type       | Description                                                                                                                                            |
| ------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Identifier (required)                 | String     |                                                                                                                                                        |
| DisplayName (recommended)             | String     |                                                                                                                                                        |
| Category (required)                   | ForeignKey | `Identifier` from the `User Category` tab.                                                                                                             |
| EmailSuffix (optional)                | String     | Suffix to concatenate to the email string (immediately before the `@` character).                                                                      |
| IsExternal (required)                 | Boolean    |                                                                                                                                                        |
| LoginPrefix (optional)                | String     |                                                                                                                                                        |
| LoginSuffix (optional)                | String     |                                                                                                                                                        |
| UniqueIdentifierPrefix (optional)     | String     |                                                                                                                                                        |
| UniqueIdentifierRangeEnd (optional)   | Int32      | Used to partition users' identifiers. For example, `UniqueIdentifierRangeEnd` set to 9999 means that no unique identifier should be greater than 9999. |
| UniqueIdentifierRangeStart (optional) | Int32      | Used to partition users' identifiers. For example, `UniqueIdentifierRangeStart` set to 1000 means that no unique identifier should be less than 1000.  |
| UniqueIdentifierSuffix (optional)     | String     |                                                                                                                                                        |

## UserCategory

Categories constitute an additional layer to organize users who can be sorted by types and then
further by categories, and categories can be transverse or not.

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |

## Subsidiary

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |
| EmailDomain (optional)    | String |             |

## ExternalCompany

Including external workers into the workforce repository requires listing external companies.

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |

## Organization

A company is divided into organizations, also called departments, such as the board of directors,
corporate banking, call center, USA operations, France operations, treasury, etc.

| Attribute                 | Type       | Description                                    |
| ------------------------- | ---------- | ---------------------------------------------- |
| Identifier (required)     | String     |                                                |
| DisplayName (recommended) | String     |                                                |
| Manager (recommended)     | ForeignKey | `Identifier` from the `User` tab.              |
| Assistant (optional)      | ForeignKey | `Identifier` from the `User` tab.              |
| Parent (optional)         | ForeignKey | `Identifier` of another organization.          |
| Type (optional)           | ForeignKey | `Identifier` from the `Organization Type` tab. |

## OrganizationType

Organizations can be categorized into organization types, if relevant.

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |

## Title

Each position can be represented by a title which names said position, such as architect, CEO,
purchasing manager, recruiter, etc.

| Attribute                 | Type       | Description                               |
| ------------------------- | ---------- | ----------------------------------------- |
| Identifier (required)     | String     |                                           |
| DisplayName (recommended) | String     |                                           |
| JobCategory (optional)    | ForeignKey | `Identifier` from the `Job Category` tab. |

## JobCategory

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |

## Country

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |
| ISOCode (optional)        | String |             |

## Region

| Attribute                 | Type       | Description                          |
| ------------------------- | ---------- | ------------------------------------ |
| Identifier (required)     | String     |                                      |
| DisplayName (recommended) | String     |                                      |
| Country (optional)        | ForeignKey | `Identifier` from the `Country` tab. |

## Site

All positions specify a working site.

| Attribute                    | Type       | Description                         |
| ---------------------------- | ---------- | ----------------------------------- |
| Identifier (required)        | String     |                                     |
| DisplayName (recommended)    | String     |                                     |
| Name (optional)              | String     |                                     |
| StreetNumber (optional)      | Int32      |                                     |
| StreetName (optional)        | String     |                                     |
| StreetType (optional)        | String     |                                     |
| Floor (optional)             | Int32      |                                     |
| PostalCode (optional)        | Int32      |                                     |
| City (optional)              | String     |                                     |
| Region (optional)            | ForeignKey | `Identifier` from the `Region` tab. |
| PreferredLanguage (optional) | String     |                                     |
| TimeZone (optional)          | Int32      |                                     |
| Latitude (optional)          | Int64      |                                     |
| Longitude (optional)         | Int64      |                                     |
| Url (optional)               | String     |                                     |

## Office

| Attribute                 | Type       | Description                       |
| ------------------------- | ---------- | --------------------------------- |
| Identifier (required)     | String     |                                   |
| DisplayName (recommended) | String     |                                   |
| Site (recommended)        | ForeignKey | `Identifier` from the `Site` tab. |

## PersonalTitle

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |

## Gender

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Identifier (required)     | String |             |
| DisplayName (recommended) | String |             |

## ReservedEmail

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Description (recommended) | String |             |
| Value (required)          | String |             |

## ReservedIdentifier

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Description (recommended) | String |             |
| Value (required)          | String |             |

## ReservedLogin

| Attribute                 | Type   | Description |
| ------------------------- | ------ | ----------- |
| Description (recommended) | String |             |
| Value (required)          | String |             |

# Create a Provisioning Rule

How to define scalar rules, navigation rules and/or query rules to compute and provision target
resources values from source resources values. See the
[Resource Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
topic for additional information.

## Overview

[ Categorize Resources ](/docs/identitymanager/6.2/reference/index.md) led to the grouping of resources into resource
types (classification), and the establishment of source-to-target relationships between these
resources (correlation).

Sources are usually identities, and targets are usually accounts from the managed systems.

Here, we are going to compute the values of scalar and navigation properties for the target
resources used in entitlement management, based on source resources. We are going to
[Provision](/docs/identitymanager/6.2/identity-management/provisioning/index.md) these properties, i.e. write them to the
managed system.

The right tools for the job are provisioning rules: scalar rules, navigation rules, query rules.

These provisioning rules are designed to:

1. retrieve the input data in source objects;
2. compute the output value for target objects;
3. provision the corresponding properties in the managed system with the computation result.

Another kind of provisioning rule is called resource type rule. Instead of computing existing
properties, resource type rules create automatically target resources to be owned by given source
resources (identities).

In testing mode, the impacted resource types can be configured to block provisioning, by adding a
mandatory review before actually writing to the managed system. See the
[ Create a Resource Type ](/docs/identitymanager/6.2/reference/index.md) topic for additional
information.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application users, entitlements and data model.

| Input                     | Output                                    |
| ------------------------- | ----------------------------------------- |
| Categorization (required) | Scalar rules Navigation rules Query rules |

See the [ Categorize Resources ](/docs/identitymanager/6.2/reference/index.md) topic for additional information.

## Create Provisioning Rules

- [ Create Resources ](/docs/identitymanager/6.2/reference/index.md)type rules to automatically create resources.
- [Compute a Scalar Property](/docs/identitymanager/6.2/reference/index.md) to compute scalar properties;
- Create navigation and/or query rules to compute navigation properties.

Netwrix Identity Manager (formerly Usercube) recommends creating/modifying/deleting provisioning
rules using simulations in order to anticipate changes. See the
[ Perform a Simulation ](/docs/identitymanager/6.2/access-governance/role-management/index.md) topic for additional information.

## Next Steps

Once provisioning rules are created, integrators can start
to[ Create Roles in the Role Catalog ](/docs/identitymanager/6.2/reference/index.md).

# Compute a Navigation Property

How to define navigation rules and/or query rules to compute and provision the values of navigation
properties for target resources based on source resources. See the
[Resource Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
topic for additional information.

## Overview

Sources are usually identities, and targets are usually accounts from the managed systems.

Here, we are going to compute the values of navigation properties for the target resources used in
entitlement management, based on source resources. See
the[ Define Navigation Properties ](/docs/identitymanager/6.2/reference/index.md)
topic for additional information. We are going to provision these properties, i.e. write them to the
managed system. See the [Provision](/docs/identitymanager/6.2/identity-management/provisioning/index.md) topic for
additional information.

The right tools for the job are navigation and query rules.

A navigation property's value can be computed by a navigation rule or a query rule, assigning a
given resource from the entity type pointed by the navigation property (which can be the target
entity type itself). Let's call this entity type the "other" one.

- A Navigation rule assigns a fixed resource, which is chosen from among the "other" entity type's
  resources during the rule's creation. The assigned resource is the same for all impacted accounts.
  Use a navigation rule when a given resource must be assigned, regardless of users' attributes.
- A Query rule assigns a resource from the "other" entity type too. However, the resource is chosen
  according to a query via a C# expression with conditions, based on the attributes of the source
  objects (usually users). Hence, contrary to a navigation rule, a query rule can assign a different
  resource for each impacted account, based on the attributes of the account's owner. Use a query
  rule when there is the need to use variables from among users' attributes to select the resource
  to assign.

![Schema - Scalar Rule](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/navigation-property-computation/provrules_schemanavigation.webp)

> A navigation rule could add the AD group `SG_APP_SQL` to the `memberOf` navigation property to all
> AD nominative accounts provided that the user has the single role `SQL Server Administration`.

> A query rule could compute the value of the `department` navigation property for ServiceNow
> nominative accounts (entity type `ServiceNow_User`), with a query from among resources from the
> `ServiceNow_Department` entity type, where the name of the resource would match the display name
> of the organization specified for the user (owner of the ServiceNow account).
>
> We need here to query the `ServiceNow_Department` entity type in order to find the right
> department to update the value of `department`, which is specific to each ServiceNow account.
>
> Thus, each user owning a ServiceNow account will see the value of `department` in their account
> updated with the resource from `ServiceNow_Department` which corresponds to the department
> specified for this user.

> Another query rule could compute the `parentdn` attribute for AD nominative accounts, with a query
> from among AD entries, where the `dn` attribute of the resource would match a complex expression
> based on the user's (owner of the AD account) presence state, employee type, location, etc.
>
> We need here to query the `AD - Entry` entity type in order to find the right dn to update the
> value of `parentdn`, which is specific to each AD nominative account.
>
> Thus, each AD nominative account will have the value of its `parentdn` set according to its
> owner's attributes (presence state, employee type, location, etc.).

The application of a navigation rule can depend on the assignment of a single role, and/or user
dimensions. See
the[ Create Roles in the Role Catalog ](/docs/identitymanager/6.2/reference/index.md) topic for
additional information on the assignment of a single role and
[ Conforming Assignments ](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md)
topic for additional information on dimensions.

A query rule does not use criteria as it is designed to compute a given navigation property for all
existing resources in a given resource type. However, in case of several query rules on a same
property, the application of a query rule depends on its confidence rate and the corresponding
priority it receives compared to other query rules. See the
[ Classify Resources ](/docs/identitymanager/6.2/reference/index.md) topic for additional
information.

While both navigation and query rules compute navigation properties, the value of one navigation
property should be computed by either navigation or query rules, not both.

In Identity Manager, a navigation property has two "sides", one for each linked element.

For example in the AD, the group membership of a user is represented by the properties `member` for
groups (containing a list of users) and `memberOf` for users (containing a list of groups).  
However, some managed systems only have one of these two sides.

The AD only uses `member` from among groups' properties. Users do not have a `memberOf` property. As
Identity Manager uses and links both sides, it is able to "translate" the information, so that the
corresponding navigation property, which actually exists in the managed system, is modified by the
navigation/query rule.

Identity Manager assigns an entitlement to a user by assigning a group-membership to an account.
Thus we can create a navigation rule which adds a group to the `memberOf` property of given
accounts. Identity Manager will update the `member` property of groups accordingly (in Identity
Manager), and then provision the `member` property of said groups in the AD, adding the impacted
accounts.

A navigation rule will trigger the creation of a target resource for all impacted source resources
(so all users), which are not yet correlated with a resource of this resource type.

**NOTE:** A query rule does not create resources, and only computes the navigation properties of
existing resources.

## Guidelines

Follow these guidelines when configuring navigation properties.

Expression code must not contain too much data

Once configured, a rule is a complicated object to modify. Therefore, you must keep business data in
the resource and out of the expression. It is easier to change data than to change a rule.

> For example, consider an organization that manages email addresses according to the site with
> `.fr` for France and `.be` for Belgium.
>
> A working option could be to write an expression with a condition `if` on the site to assign the
> domain name. However, if the organization expands and needs to consider an additional country,
> then the rule requires change in the expression code.
>
> A better solution is to change the identity data model by adding a field `Domain Name` to describe
> the object `Site`, and to be used in the rule expression. In this case, if there is an additional
> country, then a new field is added in the data model for `Site` and `Domain Name`. Thus, the rule
> expression remains simple by using the new objects, for example
> `Email = FirstName + "." + LastName + "@" + Company + "." + DomainName`.

Priority between navigation/query rules

When creating navigation and query priorities, follow these rules:

- Several rules computing the same property with different criteria should not coexist;
- The only reason to have several rules to compute a single property is when changing the property
  value over time, via time offsets. See the
  [Resource Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
  topic for additional information.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application users, entitlements and data model. See the
[ Categorize Resources ](/docs/identitymanager/6.2/reference/index.md) topic for additional information.

| Input                     | Output                       |
| ------------------------- | ---------------------------- |
| Categorization (required) | Navigation rules Query rules |

## Create a Navigation Rule

Fill an entity type with a navigation rule by proceeding as follows:

**Step 1 –** Click on **Access Rules** on the home page in the **Configuration** section.

![Home - Access Rules](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

**Step 2 –** In the dropdown menu at the top left, choose the source entity type for the future
navigation rule.

![Entity Type Choice](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/provrules_entitytype_v602.webp)

**Step 3 –** Click on the **Navigations** tab and on the addition button at the top right corner.

![Addition Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-assignment/iconadd_v602.webp)

**Step 4 –** Fill in the fields.

![Create a Navigation Rule](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-manual-creation/singlerolescatalog_createnavrule_v602.webp)

- `Join`: navigation property from the target entity type, whose value is to be impacted.
- `Resource`: resource from the entity type pointed by the `Join`, which is to be added to the
  `Join` property.
- `Navigation denied`: option that forbids the resource assignment.
- `Offset of effective date`: time period that defines the actual effective date for property
  computation according to the value's start and/or end date.

  > For example, account activation and deactivation can be managed according to the start and/or
  > end dates.

- **Criteria**: conditions that, if met, trigger the rule application.

> Our example would look like:
>
> ![Scalar Rule Example](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/navigation-property-computation/provrules_examplenav_v602.webp)

**Step 5 –** Click on **Create** and see a line added on the rules page.

The navigation rule is now configured and can be found in the Access Rules tab.

## Create a Query Rule

Fill an entity type with a query rule by proceeding as follows:

**Step 1 –** Click on **Access Rules** on the home page in the **Configuration** section.

![Home - Access Rules](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

**Step 2 –** In the dropdown menu at the top left, choose the source entity type for the future
query rule.

![Entity Type Choice](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/provrules_entitytype_v602.webp)

**Step 3 –** Click on the **Queries** tab and on the addition button at the top right corner.

![Addition Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-assignment/iconadd_v602.webp)

Fill in the fields.

![Create Query Rule](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/navigation-property-computation/provrules_queryrule_v522.webp)

Once the `Resource Type` is provided, more fields appear.

![Query Rule Fields](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/navigation-property-computation/provrules_queryrulefields_v602.webp)

- **Target Object** > `Property to fill`: navigation property from the target entity type, whose
  value is to be impacted.
- **Target Object**: property (or expression of properties) from the entity type pointed by the
  `Property to fill`, which will be the value of the `Property to fill` if it matches the source
  object. Can be defined by a property path and/or an expression. See the
  [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional
  information.
- **Source Object**: property (or expression of properties) from the source entity type. Can be
  defined by a property path and/or an expression. See the
  [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) topic for additional
  information.
- `Offset of effective date`: time period that defines the actual effective date according to the
  value's start and/or end date. An offset of effective date can be useful for some attributes. For
  example, account activation and deactivation can be managed according to the start and/or end
  dates.
- `Confidence Rate`: rate expressing the confidence in this link, and its priority order. See
  the[ Classify Resources ](/docs/identitymanager/6.2/reference/index.md) topic for additional
  information.

> Our examples would look like:
>
> ![Query Rule Example](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/navigation-property-computation/provrules_examplequery_v602.webp)
>
> ![Query Rule Example 2](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/navigation-property-computation/provrules_examplequerybis_v602.webp)

Click on **Create** and see a line added on the rules page.

## Impact of Modifications

Any modification in a navigation or query rule is taken into account when launching the role model
computation task, in the **Resource Types** frame of the corresponding connector's overview page,
via **Jobs** > **Compute Role Model**.

![Resource Type Jobs](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

This task applies the rules and computes new properties. Therefore, if a given rule's criterion is
modified, then all corresponding assignments are computed again. If a resource was created
automatically for an identity through a navigation rule (and its criteria), and if the user's
criteria do not comply with the new version of the rule, then the corresponding resource is
automatically deleted.

A modification in a provisioning rule can trigger the removal of a resource only on the Identity
Manager side. There are several barriers to cross before said resource is removed from the managed
system.

Simulations are available in order to anticipate the changes induced by a
creation/modification/deletion in navigation and query rules. See the
[ Perform a Simulation ](/docs/identitymanager/6.2/access-governance/role-management/index.md) topic for additional information.

## Verify Rule Creation

In order to verify the process:

**Step 1 –** On the corresponding connector's overview page, in the **Resource Types** frame click
on **Jobs** > **Compute Role Model** to apply all rules.

![Resource Type Jobs](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

Review unauthorized accounts (on the **Resource Reconciliation** screen) and roles (on the **Role
Reconciliation** screen) to help check query rules: if there are numerous properties to be
reconciled following the same pattern, then there may be a rule that needs to be changed.

**Step 2 –** On the corresponding connector's overview page, in the **Resource Types** frame click
on **Jobs** > **Compute Role Model** to apply all rules.

**Step 3 –** Review unauthorized accounts (on the **Resource Reconciliation** screen) and roles (on
the **Role Reconciliation** screen) to help check query rules: if there are numerous properties to
be reconciled following the same pattern, then there may be a rule that needs to be changed.

See
the[ Review an Unauthorized Account ](/docs/identitymanager/6.2/reference/index.md)
and
the[ Reconcile a Role ](/docs/identitymanager/6.2/reference/index.md)
topics for additional information.

# Create Resources

How to define
[Resource Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
rules to create new (target) resources for given users, computing and provisioning their properties
based on source resources.

## Overview

Sources are usually identities, and targets are usually accounts from the managed systems.

Here, we are going to create target resources and assign them to given users. We are going to
[Provision](/docs/identitymanager/6.2/identity-management/provisioning/index.md) these resources, i.e. write them to the
managed system.

The right tools for the job are resource type rules.

The application of a resource type rule can depend on the assignment of a single role, and/or user
dimensions.

> A resource type rule could assign a SAP account to users working in Germany, and who already have
> the role `SAP: manager access`.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application users, entitlements and data model.

| Input                     | Output              |
| ------------------------- | ------------------- |
| Categorization (required) | Resource type rules |

See the [ Categorize Resources ](/docs/identitymanager/6.2/reference/index.md) topic for additional information.

## Create a Resource Type Rule

Create a resource type rule by proceeding as follows:

1. Click on **Access Rules** on the home page in the **Configuration** section.

   ![Home - Access Rules](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

2. In the dropdown menu at the top left, choose the source entity type for the future scalar rule.

   ![Entity Type Choice](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/provrules_entitytype_v602.webp)

3. Click on the **Resource Types** tab and on the addition button at the top right corner.

   ![Addition Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

4. Fill in the fields.

   ![Create a Resource Type Rule](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/provrules_typerule_v602.webp)

   - `Resource Type`: resource type to be automatically assigned.
   - `Type`: assignment type that can be: `Suggested` so that the resource type is listed among
     suggested permissions in the permission basket of users matching the criteria during an
     entitlement request, suggested assignments must be selected manually to be requested; or
     `Automatic` so that the resource type is automatically assigned to users matching the
     criteria; or `Automatic but with validation` so that the resource type is listed in the
     permission basket of new workers, these assignments can still be modified.
   - `Resource type denied`: option that forbids the assignment.
   - `Offset of effective date`: time period that defines the actual effective date for resource
     creation/deletion according to the value's start and/or end date.
   - **Criteria**: conditions that, if met, trigger the resource creation.
     > Our example would look like:
     >
     > ![Resource Type Rule Example](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/provrules_exampletype_v602.webp)

5. Click on **Create** and see a line added on the rules page.

## Impact of Modifications

Any modification in a resource type rule is taken into account when launching the role model
computation task, in the **Resource Types** frame of the corresponding connector's overview page,
via **Jobs** > **Compute Role Model**.

![Resource Type Jobs](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

This task applies the rules and computes new assignments. Therefore, if a given rule's criterion is
modified, then all corresponding assignments are computed again. If a resource was created
automatically for an identity by a resource type rule, and if the user's criteria do not comply with
the new version of the rule, then the corresponding resource is automatically deleted.

A modification in a resource type rule can trigger the removal of a resource only on the Identity
Manager side. There are several barriers to cross before said resource is removed from the managed
system: first before the creation of an Assigned Resource Type in Identity Manager's database, and
again before the actual action in the managed system.

> In our example, let's say that we replace the country criterion `Germany` with `France`. Consider
> a user who had a SAP account assigned through this rule. Now that the country criterion has
> changed, our user working in Germany would be deprived of their account.

Simulations are available in order to anticipate the changes induced by a
creation/modification/deletion in resource type rules.

## Verify Rule Creation

In order to verify the process, start by checking the rule's details on the **Access Rules** page.
Then, you can:

1. Select a test user in the directory, accessible from the home page.

   ![Home Page - Directory User](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Create a resource type rule involving an account that said user doesn't already have, based on
   criteria which the selected user satisfies.
3. Trigger the computation of the role model by clicking, on the corresponding connector's overview
   page, in the **Resource Types** frame, on **Jobs** > **Compute Role Model** to apply all rules.

   ![Resource Type Jobs](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

4. See the new account in the user's **View Permissions** tab.

   ![View Permissions Tab](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/resource-creation/viewpermissions_v602.webp)

   If the type rule uses a single role as a criterion, and the user has said role, then both the
   resource type and the role will be displayed in the user's permissions, but only if the role is
   related to a [ Compute a Navigation Property ](/docs/identitymanager/6.2/reference/index.md).
   Otherwise, only the resource type will be visible.

# Compute a Scalar Property

How to define scalar rules to compute and provision the values of scalar properties for target
resources based on source resources. See the
[Resource Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic
for additional information.

## Overview

Sources are usually identities, and targets are usually accounts from the managed systems.

Here, we are going to compute the values of scalar properties for the target resources used in
entitlement management, based on source resources. See the
[Create an Entity Type](/docs/identitymanager/6.2/reference/index.md) topic for additional
information. We are going to provision these properties, i.e. write them to the managed system. See
the [Provision](/docs/identitymanager/6.2/identity-management/provisioning/index.md)topic for additional information.

The right tools for the job are scalar rules.

A scalar property's value can be computed by a scalar rule, based on at least one scalar property
from the source entity type, possibly writing a C# expression.

![Schema - Scalar Rule](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/scalar-property-computation/provrules_schemascalar.webp)

A scalar rule could define the scalar property displayName of nominative AD accounts based on its
owner's name with the expression:

return person.LastName + " " + person.FirstName;

The application of a scalar rule can depend on the assignment of a single role. See the
[ Create Roles in the Role Catalog ](/docs/identitymanager/6.2/reference/index.md) topic for
additional information.

Sometimes we create in Identity Manager properties which are not directly linked to any real
property in the managed system. A scalar rule on this kind of property will not find a property to
provision in the managed system, and thus will not produce any result.

For example, we may need to create in the AD the property isUnused (to spot unused accounts) with a
C# expression based on other properties from the same entity type. These properties, such as
accountExpires and lastLogonTimestamp, are each linked to a property from the AD, while isUnused is
for Identity Manager's use only. This scalar property isUnused does not exist in the AD, thus will
never be provisioned to the AD, and thus will not be computed by a scalar rule.

Also some properties, like lastLogonTimestamp in the AD or identifiers from ServiceNow, must be
changed only by their application. Identity Manager can/must not change these properties, thus no
provisioning rule is appropriate for them.

A scalar rule using a single role as criterion will trigger the creation of a target resource for
all impacted source resources (so all users), which are not yet correlated with a resource of this
resource type.

Without a criterion, a scalar rule does not create resources, and only computes the scalar
properties of existing resources.

## Guidelines

Expression code must not contain too much data

Once configured, a rule is a complicated object to modify. Therefore, you must keep business data in
the resource and out of the expression. It is easier to change data than to change a rule.

For example, consider an organization that manages email addresses according to the site with .fr
for France and .be for Belgium.

A working option could be to write an expression with a condition if on the site to assign the
domain name. However, if the organization expands and needs to consider an additional country, then
the rule requires change in the expression code.

A better solution is to change the identity data model by adding a field Domain Name to describe the
object Site, and to be used in the rule expression. In this case, if there is an additional country,
then a new field is added in the data model for Site and Domain Name. Thus, the rule expression
remains simple by using the new objects, for example
`Email = FirstName + "." + LastName + "@" + Company + "." + DomainName`.

Priority between scalar rules

A scalar rule with a role as a criterion has a higher priority than a rule without a role criterion.

For example, consider the situation where we want the login `A` for users with the single role `RA`,
and the login `B` for the others. In this case, we can write two distinct scalar rules where the
first one has the role `RA` as a criterion. This rule will be applied before the other.

Other than that, there should not be more than one rule meant to provision a given property on a
given time period.

It means that:

- Several rules computing the same property with different criteria should not coexist;
- The only reason to have several rules to compute a single property is when changing the property
  value over time, via time offsets.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application users, entitlements and data model.

| Input                     | Output       |
| ------------------------- | ------------ |
| Categorization (required) | Scalar rules |

See the [ Categorize Resources ](/docs/identitymanager/6.2/reference/index.md) topic for additional information.

## Create a Scalar Rule

Fill an entity type with a scalar rule by proceeding as follows:

![Home - Access Rules](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

**Step 1 –** Click on **Access Rules** on the home page in the **Configuration** section.

![Entity Type Choice](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/provrules_entitytype_v602.webp)

**Step 2 –** In the dropdown menu at the top left, choose the source entity type for the future
scalar rule.

![iconadd_v602](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-assignment/iconadd_v602.webp)

**Step 3 –** Click on the **Scalars** tab and on the addition button at the top right corner.

![Create Scalar Rule](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/scalar-property-computation/provrules_scalarrule_v522.webp)

**Step 4 –** Fill in the fields.

![Scalar Rule Fields](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/scalar-property-computation/provrules_scalarrulefields_v602.webp)

Once the Resource Type is provided, more fields appear.

- Source Object: Scalar property (or expression of scalar properties) from the source entity type,
  which constitutes the input for the computation of the target object. Can be defined by a property
  path and/or an expression.
- Target Object: Scalar property from the target entity type, whose value is to be impacted.
- Offset of effective date: Time period that defines the actual effective date for property
  computation according to the value's start and/or end date.

  For example, account activation and deactivation can be managed according to the start and/or
  end dates.

- Applicable: Create & Update to use this computation to both provision the managed system and
  synchronize the property back to Identity Manager; **Create Only** to use this computation to only
  provision the managed system and ignore this property during synchronization, this way the
  property can never be displayed as non-conforming.

  **Create Only** is usually set to adapt the configuration to the constraints of the managed
  system, when Identity Manager does not retrieve and/or update the property value.

  For example, consider a system, that we want to connect to Identity Manager (let's call it SYST)
  using a title property. Consider also that SYST needs to be provisioned with the value of title,
  but does not allow any other system to retrieve said value.

  In this case, we use **Create Only** so that Identity Manager sends the adequate provisioning
  order upon creation, and then is able to change the provisioning state to **Executed** without
  synchronization. If any changes impact that **Scalar Property** value the workflow state will be
  modified to **PolicyApprovedWithChanges** meaning that the policy value is not equal to the
  external system's value and that will not be provisioned.

- Comparison type: Comparison type between the value of the target object computed by the rule and
  its value from the managed system. Non-conforming values are displayed on the **Provisioning
  Review** screen.
- Criteria: Conditions that, if met, trigger the rule application.

Our example would look like:

![Scalar Rule Example](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/provisioning-rule-creation/scalar-property-computation/provrules_examplescalar_v522.webp)

**Step 5 –** Click on **Create** and see a line added on the rules page.

## Impact of Modifications

Any modification in a scalar rule is taken into account when launching the role model computation
task, in the **Resource Types** frame of the corresponding connector's overview page, via **Jobs** >
**Compute Role Model**.

![Resource Type Jobs](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

This task applies the rules and computes new properties. Therefore, if a given rule's criterion is
modified, then all corresponding assignments are computed again. If a resource was created
automatically for an identity through a scalar rule (and its single role criterion), and if the
user's criteria do not comply with the new version of the rule, then the corresponding resource is
automatically deleted.

A modification in a provisioning rule can trigger the removal of a resource only on the Identity
Manager side. There are several barriers to cross before said resource is removed from the managed
system.

Simulations are available in order to anticipate the changes induced by a
creation/modification/deletion in scalar rules. See the
[ Perform a Simulation ](/docs/identitymanager/6.2/access-governance/role-management/index.md) topic for additional information.

## Verify Rule Creation

In order to verify the process:

![Resource Type Jobs](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

**Step 1 –** On the corresponding connector's overview page, in the **Resource Types** frame click
on **Jobs** > **Compute Role Model** to apply all rules.

**Step 2 –** Review unreconciled properties on the **Resource Reconciliation** screen to help check
scalar rules: if there are numerous properties to be reconciled following the same pattern, then
there may be a rule that needs to be changed. See the
[ Reconcile a Property ](/docs/identitymanager/6.2/reference/index.md)
topic for additional information.

Once the steps completed the process is verified.

# Manage Role Officers

How to manage role officers in order to ensure the approval for entitlement assignments.

The documentation is not yet available for this page and will be completed in the near future.

# Create a Category

How to structure roles into categories. See the
[ Category ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
topic for additional information.

## Overview

A category is usually created to:

- reflect the validation process, i.e. represent groups of roles that follow the same validation
  process with the same validator(s);
- help users find intuitively the entitlement that they are looking for.

> For example, creating one category per application often fulfills both requirements.

There is usually one validator per category.

There can be several category levels. For example, integrators can choose to create one category per
department, then one per position, and finally one per application. They usually gather roles by
application. Here are a few examples of categories: `AD`, `HR` , `SAP`, `IT Administration`,
`Test Environments`, etc. Some of these "application categories" are gathered into larger categories
by theme as long as their role owner is identical.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owners who know the
application's users, entitlements and data model.

| Input                   | Output     |
| ----------------------- | ---------- |
| Role Catalog (optional) | Categories |

See the [ Create Roles in the Role Catalog ](/docs/identitymanager/6.2/reference/index.md) topic for additional information.

## Create a Category

Categories are not mandatory to create roles, but they are highly recommended to organize single
roles.

Create a category by proceeding as follows:

1. On the home page in the **Configuration** section, click on **Access Roles** to access the roles
   page.

   ![Home Page - Access Roles](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.webp)

2. All existing categories are shown in the menus on the left. To create a new category, click on
   **+**.

   ![Add a New Category](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/category-creation/singlerolescatalog_newcategory_v602.webp)

3. Fill in the fields.

   ![Create a Category](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/category-creation/singlerolescatalog_createcategory_v602.webp)

   - `Identifier`: must be unique among categories and without any whitespace.
   - `Name`: will be displayed in the UI to identify the created category.
   - `Collapsed in the role tree`: option that enables a collapsed view of the category in the role
     tree.
   - `Parent category`: optional link to an existing category that would contain the created
     category.

4. Click on **Create** and see the category added in the menus.

   When creating a category, you must be cautious about the associated validators that are not yet
   defined.

## Verify Category Creation

In order to verify the process, check on the **Access Roles** screen that the category is created
with the right parameters.

![Verify Category](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/category-creation/categorycreation_test_v602.webp)

# Create Roles in the Role Catalog

How to define
[ Single Role ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
to model entitlements, and organize them in the role catalog, basis of the role model. See the
[ Entitlement Management ](/docs/identitymanager/6.2/reference/index.md)
topic for additional information.

The creation of the role catalog is a time-consuming part, with an important workload concerning the
description of the internal processes for all applications. Actors here need to really understand
the useful permissions within managed applications.

## Overview

The aim here is to establish and create the exhaustive list of
[ Role Model ](/docs/identitymanager/6.2/access-governance/role-management/role-model.md) needed by the organization. Roles are
a way to represent entitlements which are assigned to identities, so that said identities are able
to work with the managed systems.

![Schema - Single Role](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/singlerolescatalog_schemarole.webp)

In other words, establishing the role catalog aims to list exhaustively and explicitly all the roles
in the organization, hiding the technical complexity of entitlements behind the business vision of
user-friendly names and categories, in order to:

- assign roles to users, by requesting them manually, or using rules that assign roles automatically
  based on users' attributes;
- simplify the implementation of Segregation of Duties (SoD);
- simplify the implementation and execution of access certification campaigns.

Roles are not chosen at random as they must correspond to the way entitlements were modeled during
connector modeling.

### Technical Principles

Identity Manager's roles are all built the same way. Technically speaking:

- a role is part of a policy which is a subgroup of the role model. See the
  [ Entitlement Management ](/docs/identitymanager/6.2/reference/index.md)
  topic for additional information.

  > Let's take the example of the unlimited Internet access, part of the default policy.

- a role is created to be owned by users represented by a given entity type;

  > We choose users from `Directory_User`.

- roles need to be structured so categories are created to:

  - represent groups of roles that follow the same validation process with the same validator(s);
  - help users find intuitively the entitlement that they are looking for.

  NETWRIX recommends creating one category per application, as this method often fulfills both
  requirements.

  Then single roles can be grouped together through
  [ Composite Role ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
  for applicative purposes, allowing users to be assigned several entitlements simultaneously.
  Leave composite roles for later, when the system runs as is and would benefit from an additional
  layer in the role model.

  > This role is part of the previously created `Internet` category.

- a role is created with a given approval workflow according to the entitlement's sensitivity;

  ![Schema - Approval Workflow](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/singlerolescatalog_schemaapprovals.webp)

  > We choose to require one manual validation from a knowledgeable user before the Internet role
  > is assigned to a user.

- to be effective, roles must be linked to actual entitlements in the managed systems. Technically
  speaking, this means that for each entitlement that you want to assign through a given role, you
  must create a navigation rule to build said link. A navigation rule is specific to one resource
  type. See the [ Categorize Resources ](/docs/identitymanager/6.2/reference/index.md) topic for additional
  information.

  ![Schema - Single Role with Navigation Rule](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/singlerolescatalog_schemarolerule.webp)

  > We link the role to the entitlement named `SG_APP_DL-INTERNET-ALL` in the AD, via a navigation
  > rule that assigns this entitlement to the `memberOf` property of AD nominative accounts, for
  > all users having the role.

  This part is about single roles, dealing with entitlements one-to-one. The idea is to associate
  one single role with one fine-grained entitlement.

  ![Schema - Roles and Identities](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/singlerolescatalog_schemarolesidentities.webp)

  > For example, an accountant needs read access to the accounting software, a project manager to
  > their billable hours for their projects on SAP, etc.

  When roles are well-defined, one entitlement request must lead to the direct functional
  entitlement assignment. No more, no less.

## Strategy for Role Creation

### Role structuring

Functionally speaking, the main benefit of roles is to give entitlements user-friendly names, easily
understandable by managers. And to be understandable, roles must be structured.

The strategy for role creation and structuring varies according to the
[ Model the Data ](/docs/identitymanager/6.2/reference/index.md) established for a given system.
Here, we will take as example the common use-case that organizes and categorizes roles by
application. Then, the strategy varies whether the system hosts a single application (like SAB or
SAP) or several (like the AD or LDAP).

In any case, role creation and maintenance are made easier by entitlements' naming conventions.
Thus, no matter the kind of system that you are working with, if the system uses no naming
conventions, then you should start by creating some. They will be the basis for role structure in
Identity Manager, and will really simplify role creation.

One system for one application

A common and intuitive case is when a system is simply one application. Then, integrators can create
one role per entitlement in said application, and one category for the application.

> The SAP application is about entitlements only for itself. Then, we create a single role per
> entitlement in SAP inside a category called `SAP`:
>
> ![Roles Example](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/singlerolescatalog_strategymono_v602.webp)

One system hosting several applications with existing naming conventions

If a given system is used to manage entitlements for several applications, then building categories
becomes more complicated.

> For example, the Active Directory usually hosts many groups used to manage entitlements in several
> distinct applications.
>
> ![AD Groups](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/singlerolescatalog_strategymulti_v522.webp)

The goal here is to find a way to clarify the link between each entitlement and the corresponding
application.

If the system uses naming conventions for entitlements, then it is possible to deduce the
application it corresponds to, from the entitlements' names.

> For example, a group is called `SG_APP_banking/digital/haumea/reader` in the AD. The membership to
> this group gives an entitlement. Knowing the organization, integrators understand that this
> entitlement is about the department `banking`, the position `digital`, the application `haumea`
> and the access right `reader`.

Roles can be created accordingly, with one role per entitlement and a category per application.

One system hosting several applications without existing naming conventions

However, in the case of a connector for several applications, sometimes no information can be
deduced from the entitlements' names. It is still necessary to find a way to clarify the link
between each entitlement and the corresponding application.

Then, the solution is to add information inside the managed system, creating a specific field or
filling an empty field.

> For example in the Active Directory, integrators can modify the field called `description` to
> specify the application name (such as Outlook in this example).
>
> ![Appropriated Field](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/singlerolescatalog_strategymultinoname_v522.webp)

Thus, the needed information is added to the managed system. After the execution of synchronization,
said data is accessible inside Identity Manager database and can be used as a naming convention.

In some cases, integrators are not allowed to create/modify fields in the external systems. Then,
the information can be added on Identity Manager side only. As the new field doesn't exist in the
external systems, it can't be overwritten.

### Automation of role creation

The UI provides tools to create single roles manually, working top-down from abstraction (role name)
to the technical aspects (navigation rule and technical entitlement). Most projects use thousands of
single roles, which makes role creation a long, tedious and repetitive process. See the
[Create a Role Manually](/docs/identitymanager/6.2/reference/index.md) topic for additional information.

![Schema - Role Creation Top-Down](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/singlerolescatalog_schematopdown.webp)

Roles can also be created bottom-up via role naming rules. Instead of the previous process, you can
use the name of said entitlement in your managed system to create automatically the corresponding
single role and rule (and category if it does not already exist). In other words, Identity Manager's
naming rules are to be based on your existing naming conventions for entitlements. See the
[ Create Roles in Bulk ](/docs/identitymanager/6.2/reference/index.md) topic for additional information.

![Schema - Role Creation Top-Down](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/singlerolescatalog_schemabottomup.webp)

One naming rule can generate many roles, so a few automatic rules can easily and faster create the
single role catalog. Naming rules prove particularly useful when you need to add multiple new
permissions in your external system. You won't have to create manually the corresponding categories,
roles and rules as long as said permissions are created with properties matching the conditions from
the rules.

NETWRIX recommends starting the role catalog with as many naming rules as possible before creating
roles manually.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owners who know the
application's users, entitlements and data model.

| Input                                                                                                                                                                                                                                                                | Output              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Connector's data [ Model the Data ](/docs/identitymanager/6.2/reference/index.md) (required) [ Create a Provisioning Rule ](/docs/identitymanager/6.2/reference/index.md) (required) [ Classify Resources ](/docs/identitymanager/6.2/reference/index.md) (required) | Single role catalog |

## Create the Single Role Catalog

Create the single role catalog by proceeding as follows:

1. Create as many single roles as possible (with their navigation rules and categories) via the
   [ Create Roles in Bulk ](/docs/identitymanager/6.2/reference/index.md) naming rules.
2. Complete the role catalog if needed by creating manually additional
   [ Create a Category ](/docs/identitymanager/6.2/reference/index.md) and single roles with their navigation rules.
3. Add [Create a Composite Role](/docs/identitymanager/6.2/reference/index.md) to the single role
   catalog only if the project is mature enough. Composite roles are more complex than single roles
   and they are not mandatory.

## Impact of Modifications

[ Perform a Simulation ](/docs/identitymanager/6.2/access-governance/role-management/index.md) are available in order to anticipate
the changes induced by a creation/modification/deletion in roles and navigation rules.

## Next Steps

Once the role catalog is established, integrators can start role officer management.

The role catalog is also a prerequisite for
[ Manage Risks ](/docs/identitymanager/6.2/reference/index.md)management.

# Create a Role Manually

How to create single roles manually.

## Overview

A single role is a way to represent an entitlement that is to be assigned to an identity. It brings
a layer of abstraction through a user-friendly name, close to the business view. See the
[ Single Role ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
topic for additional information.

To be effective, roles must be linked to actual entitlements in the managed systems. Within Identity
Manager, an entitlement assigned to an identity is in fact represented by the value of a given
navigation property, in a resource owned by said identity. See the
[Create an Entity Type](/docs/identitymanager/6.2/reference/index.md)topic for additional
information. Thus, each role is linked to one navigation rule per entitlement. See the
[Resource Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
topic for additional information.

**NOTE:** For example, imagine that we want to grant unlimited Internet access to the administrator
profile of an identity. This entitlement won't be assigned directly to the identity but to its AD
administration account. In our Active Directory, there is a resource called `DL-INTERNET-Restricted`
identified from among AD entries as a group. So we need to add this group membership to the
properties of the identity's AD account, using `DL-INTERNET-Restricted` as a value of the
**memberOf** property.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owners who know the
application's users, entitlements and data model.

| Input                     | Output       |
| ------------------------- | ------------ |
| Classification (required) | Single roles |

See the[ Classify Resources ](/docs/identitymanager/6.2/reference/index.md) topic for additional
information.

## Create a Single Role

Create a single role by proceeding as follows:

![Home Page - Access Roles](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.webp)

**Step 1 –** On the home page in the **Configuration** section, click on **Access Roles** to access
the roles page.

![createsinglerole](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-manual-creation/createsinglerole.webp)

**Step 2 –** On the roles page, click on the adequate category and create a role by clicking on **+
New** at the top right corner.

**Step 3 –** Fill in the fields.

- Identifier: Must be unique among roles and without any whitespace.
- Name: Will be displayed in the UI to identify the created single role.
- Policy: Policy in which the role exists.
- Entity Type: Entity type targeted by the role.
- Description: Description of the role.
- Tags: Label(s) that can later be used to filter the target roles of access certification
  campaigns. See the
  [ Schedule a Certification Campaign ](/docs/identitymanager/6.2/reference/index.md)
  topic for additional information.

  **NOTE:** Netwrix recommends using role tags when you want to perform an access certification on
  a set of roles that are from several categories.

- Category: Category which is to contain the created role.
- Secondary Categories: Other potential categories which are to contain the created role.
- Approval Workflow: Represents the number of validations required to assign the created role.
- Lock the end date: Locks or binds manual permission assignments to the identity's end date (as
  defined by the context rule).

  It has five options:

  - Inherited:The policy's setting will be used.
  - Explicit, by default not context bound: By default, the assignment's end date will not be
    context bound in order to encourage the manual entry of an end date.
  - Explicit, by default context bound: By default, the assignment's end date will be context
    bound and therefore locked, but a manual date can be entered.
  - Never: The assignment's end date will never be locked and needs to be specified manually.
  - Always: The assignment's end date is always locked according to the applicable context rule.

- Approve Role Implicitly: Needs at least the simple approval workflow. **Implicit** mode bypasses
  the approval step(s) if the person who makes the role request is also the role officer.
  **Explicit** refuses said bypass. **Inherited** follows the policy decision to approve roles
  implicitly or not. See the [Create a Policy](/docs/identitymanager/6.2/reference/index.md) topic for
  additional information.
- Prolongation without a new approval workflow
- Hide in Simplified View: Hides the role from the users' **Simplified View** in **View
  Permissions** dialog. This setting does not apply to roles which are either inferred or have
  workflow states which require manual action.
- Maximum Duration: Duration (in minutes) after which the role will be automatically revoked, if no
  earlier end date is specified.

  **NOTE:** The maximum duration impacts only the roles which are manually assigned after the
  maximum duration is set. Pre-assigned roles are not impacted.

  - If no duration is set on the role, the maximum duration of the associated policy is applied.
  - If the duration is set to 0 on the role, it prevents the associated policy from applying its
    maximum duration to it.

- Grace Period: Duration (in minutes) for which a lost automatic single role is prolonged. A review
  will be required to validate or decline the entitlement prolongation. Inferred entitlements won't
  be lost unless the end of the grace period is reached or the prolongation is declined.

  **NOTE:** The grace period is only applied if the loss of the entitlement is due to a change in
  the rules, i.e. rule deletion or criteria changes.

  If the grace period is not defined, the value is inherited from the policy.

**Step 4 –** Click on **Create** and see a line added on the roles page.

**Step 5 –** Create at least one navigation rule with the single role as a criterion.

Once you have completed the steps the single role is created.

## Create a Navigation Rule

Navigation rules aim to assign given resources to identities based on specific criteria. A
navigation rule sets the value of the navigation property on a specific resource, if a given
condition is met. It is linked to a parent resource type that sets the target entity type. One rule
creates one navigation.

Create a navigation rule by proceeding as follows:

![Home Page - Access Rules](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

**Step 1 –** On the home page in the **Configuration** section, click on **Access Rules** to access
the rules page.

![Entity Type Choice](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/provrules_entitytype_v602.webp)

**Step 2 –** In the drop down menu at the top left, choose the entity type to which the future
navigation rule will be applied.

![Addition Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-assignment/iconadd_v602.webp)

**Step 3 –** Click on the **Navigations** tab and on the addition button at the top right corner.

![Create a Navigation Rule](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-manual-creation/singlerolescatalog_createnavrule_v602.webp)

**Step 4 –** Fill in the fields.

- Join: Target property whose value is impacted by the created rule.
- Resource: Value to be set on the JOIN.
- Navigation denied: Option that forbids the resource assignment.
- Offset of effective date: Time period that defines the actual effective date according to the
  value's start and/or end date. An offset of effective date can be useful for some attributes. For
  example, account activation and deactivation can be managed according to the start and/or end
  dates.
- Criteria: Conditions that, if met, trigger the created navigation.

**Step 5 –** Click on **Create** and see a line added on the rules page.

Once you have completed the steps the navigation rule is created.

## Impact of Modifications

When deleting a single role, caution must be used when deleting the corresponding navigation rules.
Indeed, these rules thus lose their criteria and may be applied to far too many people after that.

## Verify Single Role Creation

In order to verify the process, check that the role and rule are created with the right parameters.

![Home Page - Access Roles](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.webp)

**Step 1 –** For roles, click on **Access Roles** on the home page in the **Configuration** section.

![Access Single Roles](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_testroles_v602.webp)

**Step 2 –** Select single roles and find the role you created inside the right category and with
the right parameters.

Our example would look like:

![Example - Generated Role](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_exampleroleresult_v602.webp)

![Home Page - Access Rules](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

**Step 3 –** For rules, click on **Access Rules** on the home page in the **Configuration** section.

![Access Navigation Rules](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_testrules_v602.webp)

**Step 4 –** Select navigation rules and find the rule(s) you created with the right parameters.

Our example would look like:

![Example - Generated Rule](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_exampleruleresult_v523.webp)

The verification of role creation has been completed.

# Create Roles in Bulk

How to create role naming rules, which create single roles using existing naming conventions from
the managed system. See the
[ Role Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
topic for additional information.

## Overview

A role naming rule automatically creates single roles and the corresponding navigation rules based
on the name of the corresponding entitlements in the managed system.

Role naming rules replace the tedious process of manual role creation. Instead of creating roles
individually with their navigation rules, you can use role naming rules to generate roles in bulk
and thus faster create the single role catalog.

> For example, consider a naming convention in our organization that states that AD groups have
> their cn: `SG_APP_<applicationName>`. Then, we can create a naming rule that indicates that for
> all AD groups starting with `SG_APP_`, we create a role that gives the adequate user the
> corresponding group membership, with `<applicationName>` as a name. For example, we have the
> application Contoso and the group `SG_APP_Contoso`.

Roles created via role naming rules can still be modified later in the UI, if needed.

A role naming rule, for a given resource type, creates roles and rules only for resources which are
not yet linked to a role, nor a navigation rule of this resource type. This implies that:

- role naming rules do not overwrite manual changes;
- role naming rules cannot link more than one resource (so one entitlement) to one role.

If a role naming rule is supposed to create a role that already exists, then a corresponding
navigation rule is created only if the existing role has the same policy and category as specified
in the role naming rule.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owners who know the
application's users, entitlements and data model.

| Input                                                                                   | Output                                                    |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [ Create a Provisioning Rule ](/docs/identitymanager/6.2/reference/index.md) (required) | Role naming rule Single roles Navigation rules Categories |

## Create a Role Naming Rule

Create a role naming rule by proceeding as follows:

1. On the home page, click on **Access Rules** in the **Configuration** section.

   ![Home Page - Access Rules](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

2. In the dropdown menu at the top left, choose the entity type to which the future naming rule will
   be applied.

   ![Entity Type Choice](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/provrules_entitytype_v602.webp)

3. Click on the **Role Naming Conventions** tab and on the addition button at the top right corner.

   ![Addition Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

4. Fill in the fields.

   ![Create a Naming Rule](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_newrule_v602.webp)

   - `Policy`:
     [Policy](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
     in which the rule exists.
   - `Property`: navigation property which will define the actual entitlement in the future
     navigation rule.
   - `Identifier`: must be unique among rules and without any whitespace.
   - **+ New Rule**: a naming rule is based on the union of rules, themselves based on the
     intersection of rule items. A rule item specifies one of the conditions that will trigger the
     enforcement of the naming rule. See the
     [ Role Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
     topic for additional information.
   - `Where Expression`: C# expression returning a boolean to condition the application of the
     rule.

     Netwrix Identity Manager (formerly Usercube) recommends using this option only when the
     options available in the rule items do not suffice.

   - **Single Role**: single role(s) to be created. See the
     [Create a Role Manually](/docs/identitymanager/6.2/reference/index.md) topic for additional information.

     - `Identifier`: must be unique among roles and without any whitespace. If the defined
       identifier is already used, then neither the role nor the rule is created. Can be defined
       by a property path and/or
       [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md) (mandatory).
     - `Name`: will be displayed in the UI to identify the future single role. Can be defined by
       a property path and/or an
       [Expressions](/docs/identitymanager/6.2/development/configuration-toolkit/expressions.md).

   - **Category**: the
     [ Category ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
     for the future role(s).

     - `Identifier`: either matches an existing category and selects it, or doesn't match and
       therefore a new category is created. Can be defined by a property path and/or an
       expression.
     - `Name`: will be displayed in the UI to identify the category. Ignored if the `Identifier`
       attribute matches an existing category's identifier. Can be defined by a property path
       and/or an expression.
     - ` Parent Identifier`: for a potential parent category. Must match an existing category's
       identifier. Can be defined by a property path and/or an expression.
     - `Default Category`: category for the future role(s) if the category's `Identifier`
       attribute isn't filled in or doesn't compute.

   - `Role Policy`: policy in which the future roles exist.
   - `Approval Workflow`: represents the number of validations required to assign the future
     role(s).
   - `Approve Role Implicitly`: needs at least a simple approval workflow. `Implicit` mode bypasses
     the approval step(s) if the person who issues the role request is also the role officer.
     `Explicit` refuses said bypass. `Inherited` follows the policy decision to approve roles
     implicitly or not.
   - `Hide in Simplified View`: hides the role from the users' **Simplified View** in **View
     Permissions** dialog. This setting does not apply to roles which are either inferred or have
     workflow states which require manual action.
   - `Comment Management on Permission Review`: to change if different from the role policy.
     > Our example would look like:
     >
     > ![Example - Naming Rule](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_example_v602.webp)

5. Click on **Create** and see a line added on the rules page.

## Impact of Modifications

As naming rules are applied only to resources that aren't already linked to a role or a navigation
rule, neither deletion nor modification in a naming rule can affect the previously created roles and
rules.

## Verify Naming Convention

In order to verify the process:

1. to take the changes into account, on the appropriate connector's overview page click on
   **Jobs** > **Apply Naming Conventions**;

   ![Resource Type Jobs](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/synchro_resourcetype_v602.webp)

2. check that the correct roles and rules were created.

For roles, click on **Access Roles** on the home page in the **Configuration** section.

![Home Page - Access Roles](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/resource-type-creation/home_roles_v602.webp)

Select single roles and find the role(s) you created inside the right category and with the right
parameters.

![Access Single Roles](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_testroles_v602.webp)

> [Our example](() would look like:
>
> ![Example - Generated Role](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_exampleroleresult_v602.webp)

For rules, click on **Access Rules** on the home page in the **Configuration** section.

![Home Page - Access Rules](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/home_rules_v602.webp)

Select navigation rules and find the rule(s) you created with the right parameters.

![Access Navigation Rules](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_testrules_v602.webp)

> Our example would look like:
>
> ![Example - Generated Rule](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/namingrulecreation_exampleruleresult_v523.webp)

# Assign Users a Profile

How to assign Identity Manager's access permissions to users through profiles.

## Overview

All the permissions to access items in Identity Manager, and to perform given actions, are managed
by assigning profiles to users and permissions to profiles. See the
[ Assigned Profile ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
and [References: Permissions](/docs/identitymanager/6.2/administration/security/access-control-rules.md)
topics for additional information.

![Schema - Profile Assignment](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-configuration/profiles_schema.webp)

For example, the access to the list of users with their personal data is usually restricted to HR
people, and the possibility to modify personal data restricted to HR managers.

We define here a permission as an entitlement within Identity Manager. See the
[ Configure a User Profile ](/docs/identitymanager/6.2/reference/index.md) topic for additional
information.

Users are assigned profiles according to the permissions they need to work, at least one profile per
user. A user without a profile cannot access the application. Experience shows that most users have
one profile, sometimes two, and rare case have maximum three, or more.

The goal here is to link users to basic profiles.

The right time to assign profiles to users is just before they need it, so it depends on the
deployment strategy.  
For example, we connected a given application and now we want to list orphaned accounts. Then we
need to assign a role officer.

The priority is often about resource managers who will review orphaned and unused accounts.

## Participants and Artifacts

Integrators must have the knowledge of who must be able to access what within Identity Manager.

| Input                          | Output            |
| ------------------------------ | ----------------- |
| Configured profiles (required) | Assigned profiles |

See the [ Configure a User Profile ](/docs/identitymanager/6.2/reference/index.md) topic for additional
information.

## Assign a Profile to an Account

In the following section you will read about how to assign a profile to an account.

Manual assignment

Assign manually a profile to a user by proceeding as follows:

![Home Page - Assigned Profiles](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-assignment/home_assignedprofiles_v602.webp)

**Step 1 –** Access the **Assigned Profiles** screen from the home page in the **Administration**
section.

![Addition Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-assignment/iconadd_v602.webp)

**Step 2 –** Click on the addition button at the top right corner.

![New Profile](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-assignment/roleofficers_newprofile_v602.webp)

**Step 3 –** Fill in the fields.

- **Profile**: Profile chosen from among existing profiles.
- **Resource**: Identity chosen from among entries to be assigned said profile.
- **Profile's Email**: Email created in order to receive the corresponding approval requests.
- **Deny this Profile**: Option that forbids the profile assignment instead of applying it.
- **Start Date** and **End Date**: Particularly useful for
  [profile delegation](#delegate-a-profile).

**NOTE:** If filters are defined in the Access Rules, and are assigned to the profile, a
**Criteria** section will appear containing them. Filters are conditions that, if met, trigger the
Access Control Rule Application.  
The only filters which can be displayed in this section are filters related to dimensions or hard
coded criteria (Single Role, Composite Role, Resource Type and Category).  
The filters are defined in the XML configuration on the access control rules. The criteria displayed
are a fusion of the filters of all the rules associated with the profile. See the
[Access Control Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
topic for additional information.

Automatic assignment

The largest profiles with the most basic permissions (like a simple access to the application)
concern many identities and are low-privileged. Thus integrators can set up profile assignment rules
through the XML configuration in order to assign profiles automatically, based on accounts' resource
type and potentially specific criteria. See the
[Profile Rule Context](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
topic for additional information.

![Launch Button](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-assignment/launch_v603.webp)

Click on **Launch** to apply these profile rules.

**NOTE:** Profile rules can also be applied through the same button on the **Profiles** page, by
clicking on **Settings** in the **Configuration** section, then on **General** > **Profiles** in the
left menu.

## Delegate a Profile

Sometimes, users need to lend their entitlements, while on leave for example. In this case, it is
interesting to create new profiles, identical to the initial ones but without the right to delegate
the corresponding entitlements.

For example, let us consider the Manager profile which we appointed as request validator per
department. In order to ensure the presence of all validators at all times, we choose to create a
Assistant Manager profile which is to be assigned occasionally to another user by a manager. A user
with the Assistant Manager profile will receive exactly the same entitlements as someone with the
Manager profile, except for the ability to assign the Assistant Manager to another user.

Thus no workflow in Identity Manager can be blocked by the absence of the workflow's actors, and
security is ensured by preventing unwanted entitlement delegation.

## Verify Profile Configuration and Assignment

In order to verify both profile configuration and assignment, check that a sample of users can
effectively perform the actions allowed by their profiles. See the
[ Configure a User Profile ](/docs/identitymanager/6.2/reference/index.md) topic for additional
information.

A functioning and well-assigned profile must not trigger 403 errors in the server logs, nor in the
UI in the form of a red notification at the bottom right corner of the application. This kind of
error appears if an entitlement is incomplete, i.e. giving access to a button but not to the page
said button leads to.

For example, you can check whether an ordinary user can access another user's personal data from the
**Directory** tile.

# Configure a User Profile

How to tweak the
[References: Permissions](/docs/identitymanager/6.2/administration/security/access-control-rules.md) for
actions within Identity Manager, for a set of basic
[ Assigned Profile ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

## Overview

All the permissions for accessing items and performing actions in Identity Manager are managed by
assigning profiles to users and permissions to profiles.

![Schema - Profile Assignment](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-configuration/profiles_schema.webp)

> For example, access to user lists with personal data is usually restricted to HR staff, and the
> modification of personal data would be restricted to HR managers.

We define here a permission as an entitlement within Identity Manager.

Permissions can be about:

- administration, which gives access to [Administrate](/docs/identitymanager/6.2/reference/index.md) actions,
  accessible in the **Administration** section on the home page;
- directory, which gives access to users' data (with several available levels of access), and also
  any other data accessible in the **Directory** section on the home page;
- workflows, which gives access to actions for users' lifecycle (onboarding-movement-offboarding),
  through the workflows provided by Identity Manager within the **Directory** pages;
- reports, which gives access to Identity Manager's predefined reports about workforce. See the
  [ Generate Reports ](/docs/identitymanager/6.2/reference/index.md) topic for additional information.
- notifications, which enables notification reception when specific workflows are launched.

Netwrix Identity Manager (formerly Usercube) recommends creating and using the following profiles:

- `Administrator` for requesting entitlements, performing potential additional role reviews, and
  updating user data, the role model and the settings;
- `Helpdesk` for requesting entitlements and updating user data only, not for updating the role
  model or other settings;
- `HR` for managing internal users, i.e. creating, updating and deleting them;
- `Manager` for requesting their teams' entitlements and managing their external users, like
  contractors;
- `RoleOfficer` for reviewing and approving roles;
- `User` for basic viewing of user and organizational information.

A user can have up to 10 assigned profiles.

The goal here is to create profiles and link specific permissions to the profiles, in order to build
a set of typical profiles that will later be assigned to users. See the
[Assign Users a Profile](/docs/identitymanager/6.2/reference/index.md) topic for additional information.
Instead of assigning permissions one by one to users, you will assign them sets of permissions (i.e.
profiles).

### Responsibility scopes

Each permission can be assigned a responsibility scope, which represents the scope of action of
users with said permission.

> For example, managers can be assigned the `View Requests` and `Manage Accounts` permissions, but
> only for the teams in which they have the manager title. In this case they will handle the
> entitlement requests within the team they manage, having their scope of responsibility defined as
> their team. It means that the manager cannot see or do anything outside the identities included in
> their team.

## Participants and Artifacts

Integrators must have the knowledge of the organization strategy towards the IGA project.

| Input                                                                                        | Output        |
| -------------------------------------------------------------------------------------------- | ------------- |
| [ Create the Workforce Repository ](/docs/identitymanager/6.2/reference/index.md) (required) | User profiles |

## Configure a User Profile

Configure a user profile by proceeding as follows:

1. On the home page, click on **Settings** in the **Configuration** section, then on **General** >
   **Profiles** in the left menu.

   ![Home - Configuration](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-configuration/home_settings_v523.webp)

2. Check whether the profile to configure is part of the provided list. If not, create it by
   clicking on the addition button at the top right and fill in the fields.

   ![Addition Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/categorization/classification/iconadd_v602.svg)

   ![New Profile](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-configuration/profiles_creation_v602.webp)

   - `Identifier`: must be unique among profiles and without any whitespace.
   - `Name`: will be displayed in the UI to identify the profile.

   Click on **Create**.

3. Access the page for profile configuration by clicking on **Workforce** > **Profiles &
   Permissions** in the left menu.
4. Follow Identity Manager's instructions for assigning permissions to the profile by clicking on
   the appropriate permissions, one by one, selecting if needed their responsibility scope.

   ![Profile Configuration Example](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-configuration/profiles_example_v603.webp)

5. Click on **Save** at the top of the page.

   ![Save Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-configuration/iconsave_v602.svg)

## Verify Profile Configuration

Before you can see the profile in action, it needs to be assigned to a user.

See the [Assign Users a Profile](/docs/identitymanager/6.2/reference/index.md) topic for additional
information.

## Next Steps

Once user profiles are configured, integrators can start configuring onboarding workflows. See the
[ Create the Workforce Repository ](/docs/identitymanager/6.2/reference/index.md) topic for additional
information.

# What's New

## New Netwrix Community!

All Netwrix product announcements and bug fix lists have moved to the new Netwrix Community. See
announcements for Netwrix Identity Manager (formerly Usercube) in the
[Identity Manager](https://community.netwrix.com/c/identitymanager/announcements/150) area of our new
community.

The following information highlights the new and enhanced features introduced in this Netwrix
Identity Manager (formerly Usercube) version.

## Netwrix Identity Manager (formerly Usercube) November 25, 2024

New: Assigned Roles View

The new Assigned Roles page provides a role-centric view, displaying the list of users with
permissions in a specified role category and including a downloadable report. This feature is
currently in read-only preview, with additional functionality planned for the next release. See the
[Review Assigned Roles](/docs/identitymanager/6.2/reference/index.md) topic for additional
information.

New: Context-Bound Manual Permissions

Manual permission assignments can now be configured to be tied to a context end date using
‘ManualAssignmentEndDateLockedToContext’. For example, a contractor's manual permissions can be
configured to automatically extend when their contact is extended. See the
[Create a Role Manually](/docs/identitymanager/6.2/reference/index.md),
[Resource Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
and
[Remove Redundant Assignments](/docs/identitymanager/6.2/reference/index.md)
topics for additional information.

New: Suggested Multiple Correlations

A new option allows multi-correlation resource types to propose correlations with less than 100%
confidence. This behavior is controlled by the new boolean ‘SuggestAllCorrellations’. The default
(false) only suggests correlations with 100% confidence, while setting it to true allows
lower-confidence suggestions. See the
[Resource Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
topic for additional information.

Enhancement: Access Control and Workflows

The maximum number of workflow actors is now configurable via the ‘MaxActors’ key in the
‘appsettings.json’ file. The default value of 20 can now be increased up to 50. See the
[Application Settings](/docs/identitymanager/6.2/administration/server-configuration/general-settings.md)
topic for additional information.

Enhancement: Certifications and Risks

Extra options on certification screens (visible on the "..." button) can now be hidden by setting
**Only allow approving and refusing on access certifications items** to **Yes**. This will leave
only the **Approve** and **Deny** buttons visible. The default setting is **No**. See the
[Configure Global Settings](/docs/identitymanager/6.2/reference/index.md) topic for
additional information.

Enhancement: Connectors and Integrations

Two new settings, ‘MaxPageSize’ and ‘DefaultPageSize’, have been introduced to control and optimize
API call sizes. See the
[Application Settings](/docs/identitymanager/6.2/administration/server-configuration/general-settings.md)
topic for additional information.

Enhancement: Jobs and Policy

Manual correlations for resources with multiple correlations can now be performed from the Resource
Reconciliation screen.

Enhancement: Logs / Performance / Security

Incompatible C# expressions in the configuration will now be flagged during configuration imports. A
new tool, ‘Identity Manager-Check-ExpressionsConsistency’, has been introduced to help identify
incompatible expressions. See the
[Usercube-Check-ExpressionsConsistency](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)
topic for additional information.

Additional logging has been added to the SAP ERP6 provisioning process.

For SaaS customers, there are new restrictions on scheduled jobs to enforce best practices. Jobs
that run frequently are blocked unless they follow practices such as using incremental modes instead
of full evaluation modes, evaluating only necessary entity types, and avoiding redundant task
executions. Existing jobs are whitelisted, but new non-compliant jobs will generate errors during
configuration imports.

Enhancement: UI / UX

Various user interface improvements, including better tooltips on the Role Review screen.

Enhancement: Other

The ‘Identity Manager-Export-Bacpac’ tool now allows finer control over data extraction and
anonymization options. See the
[Usercube-Export-Bacpac](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md) topic
for additional information.

Additionally, the demo license is no longer included in the Runtime zip file. If you need a license,
please contact [Netwrix Support](https://www.netwrix.com/support.html).

# Usercube

# A software solution to match your IGA needs

To learn about Netwrix Identity Manager (formerly Usercube) and build the solution you need, explore
our guides.

The present documentation mentions the Netwrix Identity Manager (formerly Usercube) application as
simply Identity Manager.

Identity Manager's guides include:

- An [Introduction Guide](/docs/identitymanager/6.2/reference/index.md) if you are new to Identity Manager.
- A [User Guide](/docs/identitymanager/6.2/reference/index.md) to configure Identity Manager from scratch via the UI.
- An [Integration Guide](/docs/identitymanager/6.2/integration/index.md) to complete Identity Manager's configuration in
  XML according to your needs.
- An [Installation Guide](/docs/identitymanager/6.2/installation/index.md) to install Identity Managerin a production
  environment.
- A [Migration Guide](/docs/identitymanager/6.2/reference/index.md) to upgrade to a new version of Identity Manager.
- [ What's New](/docs/identitymanager/6.2/reference/index.md) to get details about specific changes in Identity Manager's
  updates.

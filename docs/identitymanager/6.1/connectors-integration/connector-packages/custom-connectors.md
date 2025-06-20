# Azure

This connector exports
[Azure](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-azure)
resources, role definitions and assignments.

This page is about
[Cloud/Azure](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md).

![Package: Cloud/Azure](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/azure/packages_azure_v603.webp)

## Prerequisites

Implementing this connector requires at least the `Security Reader` role, because Usercube does not
access the [Azure API](https://docs.microsoft.com/en-us/rest/api/azure/) on behalf of a user but
with [its own identity](https://docs.microsoft.com/en-us/rest/api/azure/).

## Export

For a given Azure tenant with resources, this connector exports Azure resources, role definitions
and role assignments to CSV files.

### Configuration

This process is configured through a
[connection](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)
in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

                    ```

                        appsettings.agent.json

{ ... "Connections": { ... "<ConnectionIdentifier>": { ... } } }

````


The identifier of the connection and thus the name of the subsection must:

- be unique.

- not begin with a digit.

- not contain ```<```, ```>```, ```:```, ```"```, ```/```, ```\```, ```|```, ```?```, ```*``` and ```_```.

> The following example
>
>                         ```
>
>                             appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "AzureExport": {
>         "ApplicationId": "contosoAzure897",
>         "ApplicationKey": "25d408a1925d4c081925b\d40819",
>         "SubscriptionId": "Contoso",
>         "TenantId": "25d40819-f23f-4837-9d50-a9a52da50b8c",
>         "AzurePath": "https://management.azure.com/.default",
>         "AzurePathApi": "https://management.azure.com",
>         "ResponseUri": "https://agent.usercubecontoso.com"
>     }
>   }
> }
> ```

#### Setting attributes

| Name | Details |
| --- | --- |
| ApplicationId   required | __Type__    String   __Description__ GUID that uniquely identifies the application registration in the Azure tenant.   __Note:__ value obtained at registration: __App registrations__ > __Owned applications__ > __Usercube__ > __Overview__ > __Application (client) ID__ |
| ApplicationKey   required | __Type__    String   __Description__ Secret associated with the ```ApplicationId```.   __Note:__ value obtained at registration: __App registrations__ > __Owned applications__ > __Usercube__ > __Certificate & secrets__ > __Client secrets__ > __Client Secret__ |
| TenantId   required | __Type__    String   __Description__ GUID that uniquely identifies the Azure tenant.   __Note:__ value obtained at registration: __App registrations__ > __Owned applications__ > __Usercube__ > __Overview__ > __Application (tenant) ID__ |
| ResponseUri   default value: ```http://localhost``` | __Type__    String   __Description__ URI used by Azure to contact back the application with the tokens. This response Uri needs to be registered in the [app registration](https://aka.ms/msal-net-register-app). |
|  |  |
| --- | --- |
| SubscriptionId   required | __Type__    String   __Description__ GUID that uniquely identifies the subscription associated to the ```ApplicationId```. [See how to find it](https://www.youtube.com/watch?v=6b1J03fDnOg&t=3s). |
| AzurePath   default value: ```https://management.azure.com/.default``` | __Type__    String   __Description__ Scope requested to access a protected API. For this flow (client credentials), the scope should be of the form __`{ResourceIdUri/.default}`__. [See Microsoft's documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow#see-microsofts-documentation). |
| AzurePathApi   default value: ```https://management.azure.com``` | __Type__    String   __Description__ Azure Uri API. |

### Output details

This connector is meant to generate to the [ExportOutput](/docs/identitymanager/6.1/installation-setup/agent-configuration.md) folder the following CSV files:

```<identifier>_RoleDefinition.csv``` with the following columns:

- __id__: role definition's Azure id;
- __name__: role definition's id;
- __roleName__: role definition's name;
- __type__: role definition's type, for example it can describe if it is a built-in role or a customized one;
- __description__: role definition's description.

```<identifier>_Resource.csv``` with the following columns:

- __id__: resource's Azure id;
- __name__: resource's name;
- __type__: resource's type;
- __location__: resource's geographical location;
- __managedBy__: GUID or Azure id of the resource's manager;
- __principalId__: resource's identity PrincipalId;
- __ResourceIdentitytype__: resource's identity type.

```<identifier>_RoleAssignment.csv``` with the following columns:

- __id__: role assignment's Azure id;
- __name__: role assignment's id;
- __roleDefinitionId__: role definition's Azure id;
- __principalId__: Microsoft Entra ID (formerly Microsoft Azure AD)'s object GUID;
- __scope__: resource's Azure id.

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Password reset

This connector does not reset passwords.

### Credential protection

Data protection can be ensured through:

- [RSA encryption](/docs/identitymanager/6.1/installation-setup/agent-configuration.md), configured in the ```appsettings.encrypted.agent.json``` file;
- an [Azure Key Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md) safe;

- a [CyberArk Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md) able to store Azure's ```ApplicationId``` and ```ApplicationKey```.
````

# CSV

This connector exports data from a [CSV file](https://en.wikipedia.org/wiki/Comma-separated_values).

This page is about
[File/CSV](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md).

![Package: File/CSV](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/csv/packages_csv_v603.webp)

## Overview

Files in CSV format are commonly used to store information.

## Prerequisites

Implementing this connector requires the source file to be in CSV format.

## Export

This export copies the information found in a CSV file and transforms it into a new CSV file in the
Usercube's format.

### Configuration

This process is configured through a
[connection](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)
in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

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
>     "HRContoso": {
>       "Path": "C:/identitymanagerContoso/Contoso/hr_conto(.*?).csv",
>       "PathIncremental": "C:/identitymanagerContoso/Contoso/hr_delta_conto(.*?).csv",
>       "Encoding": "UTF-16",
>       "Separator": ";",
>       "IsFileNameRegex": true,
>       "NumberOfLinesToSkip": 1,
>       "ValuesToTrim": [
>         "*",
>         "%"
>       ]
>     }
>   }
> }
> ```

#### Setting attributes

| Name                                             | Details                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Path Required if PathIncremental is not defined. | **Type** String **Description** Path of the input file to be used for complete synchronization.                                                                                                                                                                                                                                                                        |
| PathIncremental Required if Path is not defined. | **Type** String **Description** Path of the input file to be used for incremental synchronization.                                                                                                                                                                                                                                                                     |
| IsFileNameRegex optional                         | **Type** Boolean **Description** `True` to enter a regex instead of a normal string for `Path` and `PathIncremental`. **Note:** if several files correspond to the regex, then the export will use the last created file. **Info:** useful when the filename is only partially known, for example when using a generated file.                                         |
| ValuesToTrim optional                            | **Type** String List **Description** Ordered list of the characters to trim at the beginning and at the end of the headers and values of the input file. **Note:** the second value will be trimmed after the first, the order is important. **Example** When writing `$` first and then `%` in `ValuesToTrim`, then "$%I am an example$%" becomes "I am an example$". |
|                                                  |                                                                                                                                                                                                                                                                                                                                                                        |
| ---                                              | ---                                                                                                                                                                                                                                                                                                                                                                    |
| Encoding default value: UTF-8                    | **Type** String **Description** Encoding of the input file. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#see-the-list-of-available-encodings).                                                                                                                                                              |

| Separator  
default value: , | **Type**  
String  
**Description**

Separator used in the input file.

| | | | | --- | --- | | NumberOfLinesToSkip default value: 0 | **Type** Int32 **Description** Number
of lines to skip in order to reach the line used as data header. |

### Output details

This connector is meant to generate a CSV file, named `<connectionIdentifier>.csv`, to the
[`ExportOutput`](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
folder.

> For example, when exporting a connection named `HRCountries`, the output file will be named
> `HRCountries.csv`.

The file's columns come from the header line from the input CSV file.

All columns with headers, even empty ones, will be written to the output. However, columns without
headers will not be written.

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Password reset

This connector does not reset passwords.

### Credential protection

This connector has no credential attributes, and therefore does not use
[RSA encryption](/docs/identitymanager/6.1/installation-setup/agent-configuration.md),
nor a
[CyberArk Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md).

Still, data protection can be ensured through an
[Azure Key Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
safe.

# EasyVista

This connector exports and fulfills users from/to an
[EasyVista](https://wiki.easyvista.com/xwiki/bin/view/Documentation/?language=en)-compliant system.

This page is about
[ITSM/EasyVista](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md).

![Package: ITSM/EasyVista](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/easyvista/packages_easyvista_v603.webp)

## Overview

EasyVista is an IT Service Manager that provides a service to organize IT resources in a company by
using tickets. This allows users to manage projects, materials and teams through a customizable
interface.

## Prerequisites

Implementing this connector requires:

- reading first the
  [appsettings documentation](/docs/identitymanager/6.1/installation-setup/agent-configuration.md);
- an EasyVista account with reading/writing permissions on the target instance;
- a view to be created in EasyVista for each type of entity to export.

## Export

This connector exports a list of users, with their attributes specified in the connector's
configuration, to CSV files.

It can also export any custom entity, provided that a view exists for it in EasyVista.

### Configuration

This process is configured through a
[connection](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)
in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

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

| Name                           | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Server required                | **Type** String **Description** URI of the server to connect to.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Account required               | **Type** String **Description** Account to use to connect to the EasyVista instance.                                                                                                                                                                                                                                                                                                                                                                                                               |
| Login required                 | **Type** String **Description** Username to use to connect to the EasyVista instance.                                                                                                                                                                                                                                                                                                                                                                                                              |
| Password required              | **Type** String **Description** Password to use to connect to the EasyVista instance.                                                                                                                                                                                                                                                                                                                                                                                                              |
|                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---                            | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ExportSettingsOptions optional | **Type** List **Description** List of entities to retrieve from the EasyVista instance. **Note:** for any customized entity to be exported, this argument must contain its REST API URL. **Get REST API URLs** Access the relevant view in EasyVista and click on **�** > **Rest API Url** to copy the URL. For example: ![EasyVista Profiles View](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/easyvista/easyvista_view_v523.webp) |

### Output details

This connector is meant to generate to the
[`ExportOutput`](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
folder:

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
> Then we will have `C:/identitymanagerContoso/Sources/EasyVistaExport_Employees.csv` as follows:
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
> Then we will have `C:/identitymanagerContoso/Sources/EasyVistaExport_Profiles.csv` as follows:
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

Users created from the API are retrieved by Usercube only after a complete synchronization.

## Fulfill

The EasyVista connector writes to EasyVista to create, archive (delete from Usercube's point of
view) and update employees, initiated manually through the UI or automatically by
[enforcing the policy](/docs/identitymanager/6.1/access-control-security/role-assignment/assignment-policies.md).

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

- create and update employees and their profiles, but is limited by
  [API limitations](https://wiki.easyvista.com/xwiki/bin/view/Documentation/Integration/WebService%20REST/REST%20API%20-%20Create%20an%20employee/);

  In particular, this connector cannot set dates nor the `employee_id` property.

- archive employees, i.e. set the `CONTRACT_END_DATE` to the date of the fulfill execution.

  This action is performed when Usercube fulfills a provisioning order with a `Deleted` change
  type.

## Authentication

### Password reset

[See how to configure password reset settings](/docs/identitymanager/6.1/installation-setup/agent-configuration.md).

### Credential protection

Data protection can be ensured through:

- [RSA encryption](/docs/identitymanager/6.1/installation-setup/agent-configuration.md),
  configured in the `appsettings.encrypted.agent.json` file;
- an
  [Azure Key Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
  safe;

- a
  [CyberArk Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
  able to store EasyVista's `Login`, `Password`, `Account` and `Server`.

# EasyVista Ticket

This connector opens tickets in
[EasyVista](https://wiki.easyvista.com/xwiki/bin/view/Documentation/?language=en) for manual
provisioning.

This page is about
[Ticket/EasyVista](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md).

![Package: Ticket/EasyVista](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/easyvistaticket/packages_easyvistaticket_v603.webp)

## Overview

EasyVista is an IT Service Manager that provides a service to organize IT resources in a company by
using tickets. This allows users to manage projects, materials and teams through a customizable
interface.

This connector focuses on the creation of EasyVista tickets for editing manually EasyVista
resources.

## Prerequisites

Implementing this connector requires:

- reading first the
  [appsettings documentation](/docs/identitymanager/6.1/installation-setup/agent-configuration.md);
- an EasyVista account with reading/writing permissions on the target instance.

## Export

This connector exports some of EasyVista entities,
[see the export capabilities of the EasyVista connector](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md).
Some entities cannot be exported.

## Fulfill

This connector writes to EasyVista to create incident and request tickets containing information to
create, update or delete a resource. It does not create a resource directly.

Once created, the ticket is managed in EasyVista, not in Usercube.

When the ticket is closed or canceled, Usercube updates the
[provisioning state](/docs/identitymanager/6.1/access-control-security/role-assignment/index.md)
of the resource accordingly.

[See the fulfill capabilities of the EasyVista connector](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md).

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

[See how to configure password reset settings](/docs/identitymanager/6.1/installation-setup/agent-configuration.md).

### Credential protection

Data protection can be ensured through:

- [RSA encryption](/docs/identitymanager/6.1/installation-setup/agent-configuration.md),
  configured in the `appsettings.encrypted.agent.json` file;
- an
  [Azure Key Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
  safe;

- a
  [CyberArk Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
  able to store EasyVista's `Login`, `Password`, `Account` and `Server`.

# Microsoft Excel

This connector exports datasheets from a
[Microsoft Excel](https://www.microsoft.com/en-us/microsoft-365/excel) (XLSX) file.

This page is about
[File/Microsoft Excel](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md).

![Package: File/Microsoft Excel](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/excel/packages_excel_v603.webp)

## Overview

Microsoft Excel files using the XLSX file format are commonly used to store information.

## Prerequisites

Implementing this connector requires the input file to be in the XLSX format.

## Export

This connector copies the information from an XLSX file into CSV files, one per spreadsheet, while
filtering out spreadsheets and trimming values if needed.

### Configuration

This process is configured through a
[connection](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)
in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

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
>     "HRContoso": {
>       "Path": "C:/identitymanagerContoso/Contoso/hr_conto(.*?).xlsx",
>       "PathIncremental": "C:/identitymanagerContoso/Contoso/hr_delta_conto(.*?).xlsx",
>       "IsFileNameRegex": "true",
>       "SheetOptions": [
>         {
>           "SheetIgnored": "false",
>           "NumberOfLinesToSkip": 1
>         },
>         {
>           "SheetIgnored": "true"
>         }
>       ],
>       "ValuesToTrim": [
>         "$",
>         "%"
>       ]
>     }
>   }
> }
> ```

#### Setting attributes

| Name                                             | Details                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Path Required if PathIncremental is not defined. | **Type** String **Description** Path of the input file to be used for complete synchronization.                                                                                                                                                                                                                                                                        |
| PathIncremental Required if Path is not defined. | **Type** String **Description** Path of the input file to be used for incremental synchronization.                                                                                                                                                                                                                                                                     |
| IsFileNameRegex optional                         | **Type** Boolean **Description** `True` to enter a regex instead of a normal string for `Path` and `PathIncremental`. **Note:** if several files correspond to the regex, then the export will use the last created file. **Info:** useful when the filename is only partially known, for example when using a generated file.                                         |
| ValuesToTrim optional                            | **Type** String List **Description** Ordered list of the characters to trim at the beginning and at the end of the headers and values of the input file. **Note:** the second value will be trimmed after the first, the order is important. **Example** When writing `$` first and then `%` in `ValuesToTrim`, then "$%I am an example$%" becomes "I am an example$". |
|                                                  |                                                                                                                                                                                                                                                                                                                                                                        |
| ---                                              | ---                                                                                                                                                                                                                                                                                                                                                                    |
| SheetOptions optional                            | **Type** SheetOption List **Description** List of options for each sheet of the input file. The first element of the list sets the options for the first sheet, the second element for the second sheet, etc.                                                                                                                                                          |

##### SheetOptions

| Name                                 | Details                                                                                                |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| SheetIgnored required                | **Type** Boolean **Description** `True` to exclude the sheet from export.                              |
|                                      |                                                                                                        |
| ---                                  | ---                                                                                                    |
| NumberOfLinesToSkip default value: 0 | **Type** Int32 **Description** Number of lines to skip in order to reach the line used as data header. |

### Output details

This connector is meant to generate to the
[`ExportOutput`](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
folder a CSV file per spreadsheet included in the export, named `<connectionIdentifier>_<index>.csv`
where `<index>` is the spreadsheet's index.

Note that `0` is the first index, not `1`.

> For example, when exporting the content of a 2-sheet Excel file with a connection named
> `HRContoso`, the output files will be named `HRContoso_0.csv` for the first spreadsheet, and
> `HRContoso_1.csv` for the second.

The file's columns come from the header line from the input Excel file.

All columns with headers, even empty ones, will be written to the output. However, columns without
headers will not be written.

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Password reset

This connector does not reset passwords.

### Credential protection

This connector has no credential attributes, and therefore does not use
[RSA encryption](/docs/identitymanager/6.1/installation-setup/agent-configuration.md),
nor a
[CyberArk Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md).

Still, data protection can be ensured through an
[Azure Key Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
safe.

# Home Folder

This connector exports [home folders](https://en.wikipedia.org/wiki/Home_directory)' content.

This page is about
[Storage/Home Folders](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md).

![Package: Storage/Home Folders](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/homefolder/packages_homefolders_v603.webp)

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
- an account with at least the special permission **Read** on all home folders in order to be able
  to export them.

## Export

This connector exports all the home folders to a CSV file.

This connector performs only complete export, not incremental.

### Configuration

This process is configured through a
[connection](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)
in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

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

| Name                             | Details                                                                                                                                                                                                                                                                                          |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| InputDirectories required        | **Type** String List **Description** List of the directories that contain the home folders to be exported.                                                                                                                                                                                       |
| Domain optional                  | **Type** String **Description** Domain of the account used to access the home folders.                                                                                                                                                                                                           |
| Interactive default value: False | **Type** Boolean **Description** `True` to set the authentication as interactive. `False` to set it batch. [See Microsoft's documentation for more details](https://docs.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-logonusera#see-microsofts-documentation-for-more-details).     |
|                                  |                                                                                                                                                                                                                                                                                                  |
| ---                              | ---                                                                                                                                                                                                                                                                                              |
| Login optional                   | **Type** String **Description** Login of the account used to access the files and folders. **Note:** when not specified and `Password` neither, then the account running Usercube will be used. **Note:** if `Domain` is null, then `Login` must be set in the User Principal Name (UPN) format. |
| Password optional                | **Type** String **Description** Password of the account used to access the files and folders. **Note:** when not specified and `Login` neither, then the account running Usercube will be used.                                                                                                  |

### Output details

This connector is meant to generate a CSV file, named `<connectionIdentifier>.csv`, to the
[`ExportOutput`](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
folder, with the following columns:

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

- [RSA encryption](/docs/identitymanager/6.1/installation-setup/agent-configuration.md),
  configured in the `appsettings.encrypted.agent.json` file;
- an
  [Azure Key Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
  safe;

- a
  [CyberArk Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
  able to store Home Folder's `Login` and `Password`.

# Internal Resources

This connector opens manual provisioning tickets in Usercube.

This page is about:

- Ticket/identitymanager
- Ticket/identitymanager And Create/Update/Delete resources

See the
[ Manual Ticket ](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md)
and
[ Manual Ticket and CUD Resources ](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md)
topics for additional information.

![Package: Ticket/identitymanager](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/internalresources/packages_identitymanagerticket_v603.webp)

![Package: Ticket/identitymanager And Create/Update/Delete resources](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/internalresources/packages_identitymanagerticketcud_v603.webp)

See the
[ Provision Manually ](/docs/identitymanager/6.1/index.md)
topic for additional information.

# InternalWorkflow

This connector triggers workflows in Usercube for a system's provisioning orders.

This page is about Usercube/Workflow. See the
[ Workflow ](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md)
topic for additional information.

![Package: Usercube/Workflow](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/internalworkflow/packages_workflow_v603.webp)

## Overview

This connector is singular because it does not connect Usercube to an external system.

Instead, it is made to read the provisioning orders of a given connector or resource type, and
launch specific workflows still within Usercube, depending on each order's type (creation, update,
deletion).

It works via a JSON file used to set the workflow to launch along with its arguments such as its
message and body.

## Prerequisites

Implementing this connector requires:

- Knowledge of the basic principles of Usercube's workflows. See the
  [ Workflow ](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md)
  topic for additional information.
- Configuring in Usercube the workflows for the arrival of a new user, the update of a pre-existing
  user, and for the departure of a user

## Export

There are no export capabilities for this connector.

## Fulfill

This connector retrieves the files containing provisioning orders that correspond to a given list of
connectors or resource types, and then starts workflows according to the type of the provisioning
orders (Added, Modified, Deleted) found in the JSON files.

### Configuration

This process is configured through a connection in the UI and/or the XML configuration, and in the
appsettings.agent.json > **Connections** section:

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

**NOTE:** The identifier of the connection and thus the name of the subsection must:

- be unique
- not begin with a digit
- not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "HR_Person_To_Directory_UserRecord": {
        "WorkflowJsonPath": "<C:/identitymanagerOrganization/Conf/FulfillInternalWorkflow.json>"
    }
  }
}
```

The configuration setting must have the following attributes:

| Name                      | Type   | Description                                             |
| ------------------------- | ------ | ------------------------------------------------------- |
| WorkflowJsonPath required | String | Path of the JSON file used to configure this connector. |

WorkflowJsonPath

The file specified in WorkflowJsonPath must have a specific structure.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
FulfillInternalWorkflow.json
{
  "SourceEntityIdentifier": "Directory_UserRecord",
  "NavigationToTargetEntity": "User",
  "NavigationTargetToSource": "Records",
  "TargetEntityTypeIdentifier": "Directory_User",
  "FulfillInternalWorkflowConfigurations": [
    {
      "ChangeType": "Added",
      "Model": {
        "WorkflowIdentifier": "Directory_User_StartInternal",
        "TransitionIdentifier": "ActionWithRefine-ActionPending-Execute",
        "Message": "workflow start: $Changes:LastName$ - $Changes:FirstName$, EmployeeId: $Changes:EmployeeId$",
        "Body": "body of workflow $Changes:EmployeeId$ - $Changes:Site.Label$"
      },
      "ScalarProperties": [
        "LastName",
        "FirstName",
        "ContractStartDate",
        "ContractEndDate"
      ],
      "NavigationProperties": [
        "Category",
        "Service",
        "Site"
      ]
    },
    {
      "ChangeType": "Modified",
      "Model": {
        "WorkflowIdentifier": "Directory_User_ChangeName",
        "TransitionIdentifier": "ActionWithRefine-ActionPending-Execute",
        "Message": "workflow Update: $Resource:LastName$ - $Resource:FirstName$, EmployeeId: $Resource:EmployeeId$",
        "Body": "body of workflow Update for  $Resource:EmployeeId$ "
      },
      "ScalarProperties": [
        "FirstName",
        "LastName"
      ]
    },
    {
      "ChangeType": "Deleted",
      "Model": {
        "WorkflowIdentifier": "Directory_User_End",
        "TransitionIdentifier": "ActionWithRefine-ActionPending-Execute",
        "Message": "workflow end Directory_Person for $Resource:LastName$ - $Resource:FirstName$",
        "Body": "body if workflow end for $Resource:LastName$ - $Resource:FirstName$"
      },
      "DateProperties": [
        "ContractEndDate"
      ]
    }
  ]
}

```

_Remember,_ as workflows' aspects are computed during the fulfill process, all the required
properties must be present in the provisioning order and in this JSON file.

Setting attributes

The table below summarizes the setting attributes.

| Name                                | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Body required                       | String        | Body of the message transmitted by the workflow.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ChangeType required                 | String        | Type of the provisioning order: Added; Modified; Deleted.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| DateProperties optional             | DateTime List | List of the properties corresponding to the dates that the workflow is to fill in. **NOTE:** When not specified and ChangeType is set to Deleted, then the dates are filled with the workflow's execution date.                                                                                                                                                                                                                                                                                          |
| Message required                    | String        | Message sent to the accounts impacted by the workflow.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| NavigationProperties optional       | String List   | List of the navigation properties to get from the provisioning orders in order to complete the workflow.                                                                                                                                                                                                                                                                                                                                                                                                 |
| NavigationTargetToSource optional   | String        | Navigation property that makes the link from the target entity type to the source entity type. **NOTE:** Required when using records. For example, it's not required when working with departments or sites. See the[ Position Change via Records ](/docs/identitymanager/6.1/identity-management/joiners-movers-leavers/position-changes.md) topic for additional information.[ Position Change via Records ](/docs/identitymanager/6.1/identity-management/joiners-movers-leavers/position-changes.md) |
| NavigationToTargetEntity optional   | String        | Navigation property that makes the link from the source entity type to the target entity type. **NOTE:** Required when using records. For example, it's not required when working with departments or sites. See the[ Position Change via Records ](/docs/identitymanager/6.1/identity-management/joiners-movers-leavers/position-changes.md) topic for additional information.                                                                                                                          |
| ScalarProperties optional           | String List   | List of the scalar properties to get from the provisioning orders in order to complete the workflow.                                                                                                                                                                                                                                                                                                                                                                                                     |
| SourceEntityIdentifier required     | String        | Identifier of the source entity type of the workflow.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| TransitionIdentifier required       | String        | Identifier of the workflow's transition after execution.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| TargetEntityTypeIdentifier required | String        | Identifier of the target entity type of the workflow.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| WorkflowIdentifier optional         | String        | Identifier of the workflow to be started. **NOTE:** Optional but recommended because it acts as default value when there is no related ArgumentsExpression or it does not return a valid identifier. See the[Resource Type](/docs/identitymanager/6.1/configuration-reference/xml-configuration/index.md)topic for additional information.[Resource Type](/docs/identitymanager/6.1/configuration-reference/xml-configuration/index.md)                                                                  |

The table below summarizes the variables for messages and bodies.

| Name     | Type        | Description                                                                                                                                                                             |
| -------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Changes  | String List | Prefix used to get data from the **Changes** section of the provisioning order. Example **Changes:LastName** retrieves the value of the **LastName** property from the order's changes. |
| Resource | String List | Prefix used to get data from Usercube's database. Example **Resource:LastName** retrieves the value of the **LastName** property from the database.                                     |

### Output details

All three types of workflows (onboarding, update and off-boarding) can be completed with the fulfill
Internal Workflow.

## Authentication

See the following to figure out authentication.

Password reset

This connector does not reset passwords.

Credential protection

This connector has no credential attributes, and therefore does not use RSA encryption, nor a
CyberArk Vault. See the
[ RSA Encryption ](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
and
[ CyberArk's AAM Credential Providers ](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
topics for additional information.

Still, data protection can be ensured through an Azure Key Vault safe. See the
[ Azure Key Vault ](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)topic
for additional
information.[ Azure Key Vault ](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)

# JSON

This connector generates [JSON](https://www.json.org/json-en.html) files for each provisioning
order.

This page is about
[Custom/JSON](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md).

![Package: Custom/JSON](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/json/packages_json_v603.webp)

The documentation is not yet available for this page and will be completed in the near future.

# LDIF

This connector exports entries from an
[LDIF](https://en.wikipedia.org/wiki/LDAP_Data_Interchange_Format) file.

This page is about
[Directory/LDIF](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md).

![Package: Directory/LDIF](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/ldif/packages_ldif_v603.webp)

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
[connection](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)
in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

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
>         "LDIFFile": "C:/identitymanagerContoso/Contoso/contoso.ldif",
>         "FilterAttribute": "objectClass",
>         "FilterValues": "user organizationalUnit",
>         "Attributes": [ "dn", "objectClass", "cn", "SAMAccountName", "Name", "userprincipalname" ],
>         "LdifEncoding": "UTF-8",
>     }
>   }
> }
> ```

#### Setting attributes

| Name                              | Details                                                                                                                                                                                                                                                              |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LDIFFile required                 | **Type** String **Description** Path of the LDIF input file.                                                                                                                                                                                                         |
| FilterAttribute required          | **Type** String **Description** Property from the connector's configuration whose value is to be compared with the values from `FilterValues`, in order to filter the entries to export.                                                                             |
| FilterValues required             | **Type** String **Description** List of values to be compared with the value of `FilterAttribute`, in order to filter the entries to export. Usercube will export only the entries matching the filter. **Note:** multiple values must be separated by white spaces. |
| Attributes required               | **Type** String List **Description** List of properties from the connector's configuration to be exported.                                                                                                                                                           |
| LdifEncoding default value: UTF-8 | Encoding of the file. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#see-the-list-of-available-encodings).                                                                                                  |

### Output details

This connector is meant to generate to the
[ExportOutput](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
folder a CSV file named `LdifExport.csv`, with the following columns:

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
[RSA encryption](/docs/identitymanager/6.1/installation-setup/agent-configuration.md),
nor a
[CyberArk Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md).

Still, data protection can be ensured through an
[Azure Key Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
safe.

# OData

This connector exports and fulfills data from/to an [OData](https://www.odata.org/) instance.

This page is about
[Custom/OData](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md).

![Package: Custom/OData](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/odata/packages_odata_v603.webp)

## Overview

OData (Open Data Protocol) comply with ISO/IEC and OASIS standards. This protocol defines the best
approaches for using RESTful APIs. OData helps you focus on your business logic while building
RESTful APIs without having to worry about the various approaches to define request and response
headers, status codes, HTTP methods, URL conventions, media types, payload formats, query options,
etc.

## Prerequisites

Implementing this connector requires reading first the
[appsettings documentation](/docs/identitymanager/6.1/installation-setup/agent-configuration.md).

Usercube's service is based on
[OData RFC](https://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html).

## Export

This connector extracts all entity sets with all the information needed to rebuild them. This is
based on the connector's metadata.

### Configuration

This process is configured through a
[connection](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)
in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

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

- an
  [entity type mapping](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md):
  - with the same identifier as the related entity type;
  - related to the right connector;
  - related to a connection table named `<Connection>_<ODataEntitySet>`;
  - with properties whose connection columns represent the property's path in the entity, see the
    configuration example below;
- an
  [entity association mapping](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md):
  - with the same identifier as the related entity association;
  - with its `Column1` in the format `UsercubeNav_<NavigationProperty>:<PropertyKey>` for the
    related property in the association;
  - with its `Column2` in the format `<NavigationProperty>Of:<PropertyKey>` for the related
    property in the association;
  - related to a connection table named `<Connection>_<ODataEntitySet>_<NavigationProperty>`.

The information contained in the entity types and entity associations does not impact the export.

### Output details

This connector is meant to generate to the
[ExportOutput](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
folder one CSV file for each entity set provided in the connector's configuration.

The files' column headers come from the entity type mapping's `ConnectionColumn` properties.

If the connection column describes a sub-property, then the name should have the following pattern:
`{property}:{sub-property}`. The character `:` should not be used in other situations.

> For example:
>
> ```xml
> <EntityType Identifier="OData_People" DisplayName_L1="People">
>   <Property Identifier="UserName" DisplayName_L1="User name" Type="String" />
>   <Property Identifier="FamilyName" DisplayName_L1="Family name" Type="String" />
> </EntityType>
>
> <EntityTypeMapping Identifier="OData" Connector="OData" ConnectionTable="OData_People">
>   <Property Identifier="UserName" ConnectionColumn="UserName" />
>   <Property Identifier="FamilyName" ConnectionColumn="Name:FamilyName" />
> </EntityTypeMapping>
> ```
>
> Note that we have here `UserName` which is a single property, and `FamilyName` which is a
> sub-property of `Name`, hence the name `Name:FamilyName` as the `ConnectionColumn`.

# PowerShellProv

This connector writes to an external system via a
[PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/overview) script.

This page is about
[Custom/PowerShellProv](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md).

![Package: Custom/PowerShellProv](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/powershellprov/packages_powershellprov_v603.webp)

## Overview

PowerShell is a cross-platform task automation and configuration management framework, consisting of
a command-line shell and scripting language. Unlike most shells which accept and return text,
PowerShell is built on top of the .NET Common Language Runtime (CLR), and accepts and returns .NET
objects. This fundamental change brings entirely new tools and methods for automation.

## Prerequisites

Implementing this connector requires:

- making sure that the command `powershell.exe`, inside the command prompt (`cmd.exe`), does execute
  a PowerShell terminal;
- knowledge of scripting in PowerShell 5.1 or later,
  [see here PowerShell's requirements](https://docs.microsoft.com/en-us/powershell/scripting/windows-powershell/install/windows-powershell-system-requirements);
- making sure that the device hosting the agent has its execution policy properly configured to
  execute the given PowerShell script;
- checking the targeted system's requirements (environment, libraries, etc.), as this connector is
  meant to connect Usercube to a PowerShell-compatible system;
- writing and testing a PowerShell script (`.ps1`) according to NETWRIX' guidelines below.

## Export

There are no export capabilities for this connector.

## Fulfill

This connector executes a PowerShell script for the creation, deletion and update of any entity
linked to the managed system.

> For example, it can fulfill the `mailboxes` entity from Microsoft Exchange.

### Configuration

This process is configured through a
[connection](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)
in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

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

> The following example fills a CSV file through the script `Fulfill-CSV.ps1`, for a single target
> managed system identified by the `PowerShellCsvFulfillment` subsection:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "PowerShellCsvFulfillment": {
>       "PowerShellScriptPath": "C:/identitymanagerDemo/Scripts/Fulfill-CSV.ps1",
>       "Options": {
>         "Message": "Hello",
>         "Login": "admin",
>         "Password": "secret"
>       }
>     }
>   }
> }
> ```

#### Setting attributes

| Name                          | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PowerShellScriptPath required | **Type** String **Description** Path of the executed PowerShell script (.ps1).                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Options optional              | **Type** String Pair List **Description** List of key-value pairs for all the variables required by the PowerShell script. **Example**`   "Options": {     "Login": "admin",     "Password": "secret"   }` In order for the script to access these options, the following two lines of code must be included in the script: `$options = [System.Console]::ReadLine()   $options = ConvertFrom-Json $options` Afterwards, any one of these variables can be easily accessed: `$options.Login$options.Password   # -> admin and secret` |

### Write a script

See how to
[write a Powershell script](/docs/identitymanager/6.1/connectors-integration/connector-tutorials/index.md)
to allow provisioning with this connector.

## Authentication

### Password reset

The PowerShell script manages password reset.

### Credential protection

Data protection can be ensured through:

- [RSA encryption](/docs/identitymanager/6.1/installation-setup/agent-configuration.md),
  configured in the `appsettings.encrypted.agent.json` file;
- an
  [Azure Key Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
  safe;

| Attribute            | Naming Convention for the Key in Azure Key Vault  |
| -------------------- | ------------------------------------------------- |
| Login (optional)     | `Connections--<identifier>--Options--Login`       |
| Password (optional)  | `Connections--<identifier>--Options--Password`    |
| PowerShellScriptPath | `Connections--<identifier>--PowerShellScriptPath` |

- a
  [CyberArk Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
  able to store the attributes from the `Options` section that are
  [compatible with CyberArk](/docs/identitymanager/6.1/installation-setup/agent-configuration.md).

Protected attributes are stored inside a safe in CyberArk, into an account whose identifier can be
retrieved by Usercube from `appsettings.cyberark.agent.json`.

> For example, consider `Login` and `Password` values stored in the `PowerShellCsv_Account` account:
>
> ```
> appsettings.cyberark.agent.json
> {
>   "Connections": {
>     ...
>     "PowerShellCsvFulfillment": {
>       "Options": {
>         "Login": "PowerShellCsv_Account",
>         "Password": "PowerShellCsv_Account"
>       }
>     }
>   }
> }
> ```

# PowerShellSync

This connector exports data from an external system via a
[PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/overview) script.

This page is about
[Custom/PowerShellSync](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md).

![Package: Custom/PowerShellSync](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/powershellsync/packages_powershellsync_v603.webp)

## Overview

PowerShell is a cross-platform task automation and configuration management framework, consisting of
a command-line shell and scripting language. Unlike most shells which accept and return text,
PowerShell is built on top of the .NET Common Language Runtime (CLR), and accepts and returns .NET
objects. This fundamental change brings entirely new tools and methods for automation.

Data can be synchronized from any managed system by writing a PowerShell script that generates the
relevant CSV files for Usercube. The PowerShellSync connector provides all the necessary tools for
an easy integration of the script with Usercube's synchronization mechanisms.

When Usercube provides a native connector for a given system, for example the Active Directory
connector, NETWRIX highly recommends using the native connector rather than this PowerShell
connector.

## Prerequisites

Implementing this connector requires:

- making sure that the command `powershell.exe`, inside the command prompt (`cmd.exe`), does execute
  a PowerShell terminal;
- knowledge of scripting in PowerShell 5.1 or later,
  [see here PowerShell's requirements](https://docs.microsoft.com/en-us/powershell/scripting/windows-powershell/install/windows-powershell-system-requirements);
- making sure that the device hosting the agent has its execution policy properly configured to
  execute the given PowerShell script;
- checking the targeted system's requirements (environment, libraries, etc.), as this connector is
  meant to connect Usercube to a PowerShell-compatible system;
- writing and testing a PowerShell script (`.ps1`) according to NETWRIX' guidelines below.

## Export

This connector executes a PowerShell script that generates one or several CSV files. These files are
to be used during the synchronization of the data from the managed system targeted by the
PowerShellSync connector.

The CSV files must be written to the `$OutputPath`. See below.

The export is executed by a job from the UI, or via `Usercube-Export-Powershell.exe` in the command
prompt.

### Configuration

This process is configured through a
[connection](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)
in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

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
>     "PowerShellExport": {
>       "PowerShellScriptPath": "C:/identitymanagerDemo/Scripts/Export-CSV.ps1",
>     }
>   }
> }
> ```

##### Setting attributes

| Name                          | Details                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| PowerShellScriptPath required | **Type** String **Description** Path of the PowerShell script (.ps1) to be executed. |

### Write a script

Usercube provides a few variables to be used in the PowerShell script.

| Name          | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| OutputPath    | **Type** String **Description** Prefix of the path of the generated CSV file. **Info:** the synchronization process requires the generated CSV file to be located in a very specific location, with a specific name prefix. Hence the need for this predefined variable. **Value** [`<TempFolderPath>`](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)`/ExportOutput/<connectionIdentifier>_` **Example** In this example, if the temp folder is named `Temp` and the connection `PowerShellExport`, then the generated file is: `Temp/ExportOutput/PowerShellExport_users.csv`. ``` generateCSV | Export-CSV ($OutputPath + "users.csv") `where`generateCSV``` is a generic PowerShell method that generates CSV files. |
| IsIncremental | **Type** Boolean **Description** Variable to be used to provide a different behavior for complete and incremental synchronization.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## Fulfill

There are no fulfill capabilities for this connector.

# RACF

This connector exports users and profiles from a
[RACF](https://www.ibm.com/docs/en/zos-basic-skills?topic=zos-what-is-racf) file.

This page is about
[MainFrame/RACF](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md).

![Package: MainFrame/RACF](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/racf/packages_racf_v603.webp)

## Overview

Resource Access Control Facility (RACF) is a security program from IBM OS/390 used to protect users'
resources by controlling their accesses. The RACF connector exports the information saved by RACF
about users, groups and access authorities.

## Prerequisites

Implementing this connector requires the input file to be in the RACF format, but it can have any
extension.

## Export

This connector extracts the information found in a RACF file and transforms it into CSV files in
Usercube format.

Be aware that Usercube supports only the RACF records represented by the following codes:

- [0100; 0120; 0101; 0102](https://www.ibm.com/docs/en/zos/2.1.0?topic=records-record-formats-produced-by-database-unload-utility#0100-0120-0101-0102)
  (groups);
- [0200; 0203](https://www.ibm.com/docs/en/zos/2.1.0?topic=utility-user-record-formats) (users);
- [0500; 0503](https://www.ibm.com/docs/en/zos/2.1.0?topic=utility-general-resource-record-formats)
  (general resources).

### Configuration

This process is configured through a
[connection](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)
in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

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

> The following example reads RACF data from the `C:/identitymanagerContoso/RacfFile.csv` iso-8859-1 file
> and exports it to CSV files in Usercube format:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "RACF": {
>       "Path": "C:/identitymanagerContoso/RacfFile.csv",
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
[`ExportOutput`](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
folder one CSV file per record type (0100, 0200, etc.), named `<connectionIdentifier>_<type>.csv`.

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
[RSA encryption](/docs/identitymanager/6.1/installation-setup/agent-configuration.md),
nor a
[CyberArk Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md).

Still, data protection can be ensured through an
[Azure Key Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
safe.

# Robot Framework

This connector writes to an external system via a [Robot Framework](https://robotframework.org)
script.

This page is about
[Custom/Robot Framework](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md).

![Package: Custom/Robot Framework](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/robotframework/packages_robot_v603.webp)

## Overview

Robot Framework is an open-source automation framework which can be used for robotic process
automation (RPA). This framework is easy to use thanks to its human-readable syntax.  
It has a modular architecture that can be extended by
[libraries](https://robotframework.org/#libraries) implemented with Python or Java. These libraries
provide various tools to interact with a managed system.

## Prerequisites

Implementing this connector requires the agent to include the following elements:

- [Python](https://www.python.org/downloads/) 3.7 or above. Specific Robot Framework libraries may
  require a specific Python version;
- Python folder location in the `PATH` environment variable list and the location of its subfolder
  `Scripts`;
- Robot Framework: use `pip install robotframework` in the command prompt. If the installation ran
  correctly, `robot.exe` should be in your path. You can confirm this by running `gcm robot` in a
  powershell console.

## Export

There are no export capabilities for this connector.

## Fulfill

This connector can create, update and/or delete any entity linked to the managed system.

### Configuration

This process is configured through a
[connection](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)
in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

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

> The following example fills in a CSV file by using the script `FulfillRobotFramework.robot`:
>
> ```
> appsettings.agent.json
> {
>   "Connections": {
>     ...
>     "RobotFrameworkFulfillment": {
>       "RobotFrameworkScriptPath": "C:/identitymanagerDemo/Scripts/FulfillRobotFramework.robot",
>       "Options": {
>         "Message": "Hello"
>       }
>     }
>   }
> }
> ```

#### Setting attributes

| Name                              | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RobotFrameworkScriptPath required | **Type** String **Description** Path to the executed Robot Framework script (.robot).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Options optional                  | **Type** String Pair List **Description** List of key-value pairs for all the variables required by the PowerShell script. **Example**`   "Options": {     "Login": "admin",     "Password": "secret"   }` Access these options in the script using the following method: `${login}=  Get Secure Data  Login  False   ${password}=  Get Secure Data  Password  True` **Info:** when the boolean argument from `Get Secure Data` is set to `True`, then the value is stored in the variable and erased from memory, hence not retrievable on next call. This enables control over sensitive data like passwords by defining the lifetime of the variable containing sensitive data. **Warning:** never use `Get Secure Data` when `Options` is empty. |

### Write a script

See how to
[write a RobotFramework script](/docs/identitymanager/6.1/connectors-integration/connector-tutorials/index.md)
to allow provisioning with this connector.

## Authentication

### Password reset

The script manages password reset.

### Credential protection

Data protection can be ensured through:

- [RSA encryption](/docs/identitymanager/6.1/installation-setup/agent-configuration.md),
  configured in the `appsettings.encrypted.agent.json` file;
- an
  [Azure Key Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
  safe;

| Attribute                | Naming Convention for the Key in Azure Key Vault      |
| ------------------------ | ----------------------------------------------------- |
| Login (optional)         | `Connections--<identifier>--Options--Login`           |
| Password (optional)      | `Connections--<identifier>--Options--Password`        |
| RobotFrameworkScriptPath | `Connections--<identifier>--RobotFrameworkScriptPath` |

- a
  [CyberArk Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
  able to store the attributes from the `Options` section that are
  [compatible with CyberArk](/docs/identitymanager/6.1/installation-setup/agent-configuration.md).

Protected attributes are stored inside a safe in CyberArk, into an account whose identifier can be
retrieved by Usercube from `appsettings.cyberark.agent.json`.

> For example, consider `Login` and `Password` values stored in the `RobotFramework_Account`
> account:
>
> ```
> appsettings.cyberark.agent.json
> {
>   "Connections": {
>     ...
>     "RobotFrameworkFulfillment": {
>       "Options": {
>         "Login": "RobotFramework_Account",
>         "Password": "RobotFramework_Account"
>       }
>     }
>   }
> }
> ```

# SAP ERP 6.0 and SAP S4/HANA

This connector exports and fulfills users and roles from/to an
[SAP ERP 6.0](https://www.sap.com/products/erp/what-is-sap-erp.html) or
[SAP HANA](https://www.sap.com/products/technology-platform/hana/what-is-sap-hana.html) instance.

This page is about ERP/SAP ERP 6.0.

![Package: ERP/SAP ERP 6.0](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/saperp6/packages_saperp6_v603.webp)

## Overview

The SAP Enterprise Resource Planning (SAP ERP) software incorporates the core business processes of
an organization, such as finance, production, supply chain services, procurements, human resources
(HR), etc. The SAP ERP connector exports and fulfills data from/to an SAP ERP 6.0 system.

## Prerequisites

Implementing this connector requires:

- Reading first the appsettings documentation; See the
  [ appsettings.agent ](/docs/identitymanager/6.1/installation-setup/agent-configuration.md) topic
  for additional information.
- An ASE or HANA database with a service account, as a database administrator
- A service account, as a SAP user with at least the roles for user management
- The prerequisites for reading should be set up
- The prerequisites for writing should be set up

ASE or HANA database with a service account, as a database administrator

To connect to the SAP database using SSH, use the following commands:

Code attributes enclosed with `< >` need to be replaced with a custom value before entering the
script in the command line.

```
su sybaba
isql -S <database (ABA is the default value)> -U<administrator's login> -P<administrator's password> -X
```

For example:

Code attributes enclosed with `< >` need to be replaced with a custom value before entering the
script in the command line.

```
isql -S ABA -Usapsso -PV1H#M$4JIgU$qd -X
```

Service account, as a SAP user with at least the roles for user management

Create a login for Usercube's service account with at least reading access on user management tables
by using a command from the table below:

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

Code attributes enclosed with `< >` need to be replaced with a custom value before entering the
script in the command line.

execute sp_addlogin `<login>`, `<password>`, `<database (ABA is the default value)>`go use ABA go
execute sp_adduser `<login>`go grant select on ABA.SAPSR3.USR02 to usercube grant select on
ABA.SAPSR3.AGR_USERS to usercube grant select on ABA.SAPSR3.USER_ADDR to usercube grant select on
ABA.SAPSR3.AGR_1016 to usercube grant select on ABA.SAPSR3.USR10 to usercube grant select on
ABA.SAPSR3.USR11 to usercube grant select on ABA.SAPSR3.AGR_AGRS to usercube grant select on
ABA.SAPSR3.USGRP to usercube grant select on ABA.SAPSR3.UST04 to usercube grant select on
ABA.SAPSR3.AGR_TCODES to user grant select on ABA.SAPSR3.T002 to usercube Go

Set up the prerequisites for reading

To set up the prerequisites for reading follow the steps below.

**Step 1 –** Copy the DLL `Sap.Data.Hana.Core.v2.1.dll` into the Runtime of Usercube.

![connectorreadprerequisites1](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/saperp6/connectorreadprerequisites1.webp)

**Step 2 –** Unzip the “hdbclient.zip” archive to C: drive and add the path to the Path environment
variables.

![connectorreadprerequisites2](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/saperp6/connectorreadprerequisites2.webp)

**Step 3 –** Create environment variables: `HDBADOTNET=C:\hdbclient\ado.net` and
`HDBADOTNETCORE=C:\hdbclient\dotnetcore`.

Set up the prerequisites for writing

**NOTE:** Make sure the Read prerequisites are configured first.

**Step 1 –** Copy the provided DLL `sapnwrfc.dl` into the Runtime of Usercube.

**Step 2 –** Unzip the `dotnet86.zip` archive to `C:\dotnetx86`.

**Step 3 –** Copy the DLLs icudt50.dll, `icuin50.dll` and icuuc50.dll into the Runtime of Usercube.

![connectorwriteprerequisites](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/saperp6/connectorwriteprerequisites.webp)

**Step 4 –** Disable DLLs search by adding the environment variable `NLSUI_7BIT_FALLBACK=YES`.

![connectorwriteprerequisites2](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/saperp6/connectorwriteprerequisites2.webp)

**Step 5 –** Add new environment variable `USERCUBE_DOTNET32` containing the path to dotnetx86
(e.g.: `C: \donetx86\dotnet.exe`).

## Export

This connector extracts users, roles, profiles, profile memberships, role memberships and groups
from an SAP ERP instance, and writes the output to CSV files.

### Configuration

This process is configured through a connection in the UI and/or the XML configuration, and in the
**appsettings.agent.json** > **Connections** section. See the
[ Connection ](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)
topic for additional information.

Code attributes enclosed with `< >` need to be replaced with a custom value before entering the
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
- Not contain `<`, `>`, `:`, `/`, `\`, `|`, `?`, `*`, and `_`.

For example:

Code attributes enclosed with `< >` need to be replaced with a custom value before entering the
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
[Application Settings](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
topic for additional information.

## Fulfill

This connector can provision users, role memberships and group memberships to SAP ERP.

### Configuration

Same as for export, fulfill is configured through connections. See the SAP ERP 6.0 and SAP
S4/HANAtopic for additional information.

For example:

Code attributes enclosed with `< >` need to be replaced with a custom value before entering the
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
[ appsettings.agent ](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
topic for additional information on how to configure password reset settings.

When setting a password for an SAP ERP user, the password attribute is defined by the password
specified in the corresponding RessourceTypeMapping. See the
[ SapResourceTypeMapping ](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)
topic for additional information.

### Credential protection

Data protection can be ensured through:

- RSA encryption, configured in the `appsettings.encrypted.agent.json` file
- An Azure Key Vault safe

| Attribute    | Naming Convention for the Key in Azure Key Vault |
| ------------ | ------------------------------------------------ |
| Server       | Connections--`<identifier>`--Server              |
| AseLogin     | Connections--`<identifier>`--AseLogin            |
| AsePassword  | Connections--`<identifier>`--AsePassword         |
| Instance     | Connections--`<identifier>`--Instance            |
| Port         | Connections--`<identifier>`--Port                |
| Client       | Connections--`<identifier>`--Client              |
| Language     | Connections--`<identifier>`--Language            |
| BapiLogin    | Connections--`<identifier>`--BapiLogin           |
| BapiPassword | Connections--`<identifier>`--BapiPassword        |
| SystemNumber | Connections--`<identifier>`--SystemNumber        |

- A CyberArk Vault able to store Active Directory's Login, Password, and Server.

See the
[ RSA Encryption ](/docs/identitymanager/6.1/installation-setup/agent-configuration.md),
[ Azure Key Vault ](/docs/identitymanager/6.1/installation-setup/agent-configuration.md),
and
[ CyberArk's AAM Credential Providers ](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)topics
for additional information.

Protected attributes are stored inside a safe in CyberArk, into an account whose identifier can be
retrieved by Usercube from `appsettings.cyberark.agent.json`.

For example:

Code attributes enclosed with `< >` need to be replaced with a custom value before entering the
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

This page is about
[ERP/SAP S/4 HANA](/docs/identitymanager/6.1/connectors-integration/connector-packages/sap-erp.md).

![Package: ERP/SAP S/4 HANA](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/saphana/packages_sap_v603.webp)

## Overview

SAP ERP is an enterprise resource planning software developed by the German company SAP SE. The
software incorporates the key business functions of an organization. ERP software includes programs
in all core business areas, such as procurement, production, materials management, sales, marketing,
finance, and human resources (HR).

## Prerequisites

Implementing this connector requires:

- reading first the
  [appsettings documentation](/docs/identitymanager/6.1/installation-setup/agent-configuration.md);
- a service account with reading and writing permissions on the SAP server.

## Export

This connector exports users, roles, role memberships and groups from an SAP instance and writes the
output to CSV files.

### Configuration

This process is configured through a
[connection](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)
in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

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
[ExportOutput](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
folder the following CSV files:

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

[See how to configure password reset settings](/docs/identitymanager/6.1/installation-setup/agent-configuration.md).

When setting a password for an SAP user, the password attribute is defined by the password specified
in the corresponding
[`RessourceTypeMapping`](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md).

### Credential protection

Data protection can be ensured through:

- [RSA encryption](/docs/identitymanager/6.1/installation-setup/agent-configuration.md),
  configured in the `appsettings.encrypted.agent.json` file;
- an
  [Azure Key Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
  safe;

| Attribute | Naming Convention for the Key in Azure Key Vault |
| --------- | ------------------------------------------------ |
| Server    | `Connections--<identifier>--Server`              |
| Login     | `Connections--<identifier>--Login`               |
| Password  | `Connections--<identifier>--Password`            |

- a
  [CyberArk Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
  able to store Active Directory's `Login`, `Password` and `Server`.

Protected attributes are stored inside a safe in CyberArk, into an account whose identifier can be
retrieved by Usercube from `appsettings.cyberark.agent.json`.

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

This page is about
[ITSM/ServiceNow](/docs/identitymanager/6.1/connectors-integration/connector-packages/servicenow.md).

![Package: ITSM/ServiceNow](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/servicenowentitymanagement/packages_servicenow_v603.webp)

## Overview

ServiceNow is a cloud-based company that provides software as a service (SaaS) for technical
management support. The company specializes in IT service management (ITSM), IT operations
management (ITOM) and IT business management (ITBM), allowing users to manage projects, teams and
customer interactions via a variety of apps and plugins.  
This section focuses on ServiceNow Entity Management. To learn about how to use this connector to
create tickets for other resources, see
[ServiceNow Ticket](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md).

## Prerequisites

Implementing this connector requires:

- reading first the
  [appsettings documentation](/docs/identitymanager/6.1/installation-setup/agent-configuration.md);
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
[connection](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)
in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

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
[ExportOutput](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
folder one CSV file for each table, named `<connectionIdentifier>_<tableName>.csv`.

Usercube lists the tables to retrieve based on
[entity type mappings](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)'s
and
[entity association mappings](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)'s
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
> ````
> ServiceNowExportFulfillment_sys_user_grmember.csv
> user,group
> ...
>
> ```
> ````

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

[See how to configure password reset settings](/docs/identitymanager/6.1/installation-setup/agent-configuration.md).

When setting a password for an ServiceNow user, the password attribute is defined by the password
specified in the corresponding
[`RessourceTypeMapping`](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md).

### Credentials protection

Data protection can be ensured through:

- [RSA encryption](/docs/identitymanager/6.1/installation-setup/agent-configuration.md),
  configured in the `appsettings.encrypted.agent.json` file;
- an
  [Azure Key Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
  safe;

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

- a
  [CyberArk Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
  able to store Active Directory's `Login`, `Password`, `Server`, `ClientId` and `ClientSecret`.

Protected attributes are stored inside a safe in CyberArk, into an account whose identifier can be
retrieved by Usercube from `appsettings.cyberark.agent.json`.

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

This page is about
[Ticket/ServiceNow](/docs/identitymanager/6.1/connectors-integration/connector-packages/servicenow.md).

![Package: Ticket/ServiceNow](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/servicenowticket/packages_servicenowticket_v603.webp)

## Overview

ServiceNow is a cloud-based company that provides software as a service (SaaS) for technical
management support. The company specializes in IT service management (ITSM), IT operations
management (ITOM) and IT business management (ITBM), allowing users to manage projects, teams and
customer interactions via a variety of apps and plugins.  
This section focuses on ServiceNow ticket creation for the fulfillment of resources that can't or
shouldn't be performed with an existing fulfill. To learn about how to manage entities, see
[ServiceNow Entity Management](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md).

## Prerequisites

Implementing this connector requires:

- reading first the
  [appsettings documentation](/docs/identitymanager/6.1/installation-setup/agent-configuration.md);
- a service account with the **snc_platform_rest_api_access** role, as well as reading and writing
  permissions on the target ServiceNow instance;
- the version ServiceNow London or later;
- the appropriate configuration in ServiceNow of authentication, Basic or OAuth.

## Export

This connector exports some of ServiceNow entities,
[see the export capabilities of the ServiceNow connector](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md).
Some entities cannot be exported.

## Fulfill

This connector writes to ServiceNow to create incident and request tickets containing information to
create, update or delete a resource. It does not create nor update a resource directly.

Once created, the ticket is managed in ServiceNow, not in Usercube.

When the ticket is closed or canceled, Usercube updates the
[provisioning state](/docs/identitymanager/6.1/access-control-security/role-assignment/index.md)
of the resource accordingly.

[See the fulfill capabilities of the ServiceNow connector](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md).

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

[See how to configure password reset settings](/docs/identitymanager/6.1/installation-setup/agent-configuration.md).

When setting a password for a ServiceNow user, the password attribute is set to the chosen value and
the user's **password_needs_reset** attribute is set to `true`.

### Credential protection

Data protection can be ensured through:

- [RSA encryption](/docs/identitymanager/6.1/installation-setup/agent-configuration.md),
  configured in the `appsettings.encrypted.agent.json` file;
- an
  [Azure Key Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
  safe;

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

- a
  [CyberArk Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
  able to store Active Directory's `Login`, `Password`, `Server`, `ClientId` and `ClientSecret`.

Protected attributes are stored inside a safe in CyberArk, into an account whose identifier can be
retrieved by Usercube from `appsettings.cyberark.agent.json`.

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

This page is about
[Storage/Shared Folders](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md).

![Package: Storage/Shared Folders](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/sharedfolder/packages_sharedfolders_v603.webp)

## Overview

Also known as UFA (_Usercube Folder Access_), this connector can be used to scan the access rights
assigned to folders and files in computers and networks which comply with the
[Windows File Security and Access Rights systems](https://docs.microsoft.com/en-us/windows/win32/fileio/file-security-and-access-rights).

## Prerequisites

Implementing this connector requires an account with the permissions:

- to access all relevant folders and files and read their entitlements;
- **Log on as a batch job** in the local group policy, when the connector's authentication mode is
  batch.

  ![SharedFolder - Permission for Batch Authentication](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/sharedfolder/sharedfolder_permission.webp)

## Export

This connector scans shared folders in order to export their content to CSV files.

### Configuration

This process is configured through a
[connection](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)
in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

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

| Name                                   | Details                                                                                                                                                                                                                                                                                          |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| InputDirectories required              | **Type** String List **Description** Paths of the folders to be scanned.                                                                                                                                                                                                                         |
| Domain optional                        | **Type** String **Description** Domain of the account used to access files and read their access rights.                                                                                                                                                                                         |
| Interactive default value: False       | **Type** Boolean **Description** `True` to set authentication as interactive, `False` to set it as batch.                                                                                                                                                                                        |
| LevelOfScan optional                   | **Type** Int32 **Description** Number of file and folder levels to be scanned. By default, it scans the whole folder tree for each input directory.                                                                                                                                              |
| ListOfSIDToAvoid optional              | **Type** String List **Description** SIDs (users or groups) to exclude from the scan.                                                                                                                                                                                                            |
| OnlyDirectoryScan default value: False | **Type** Boolean **Description** `True` to scan only folders' entitlements and not files', `False` to scan all.                                                                                                                                                                                  |
|                                        |                                                                                                                                                                                                                                                                                                  |
| ---                                    | ---                                                                                                                                                                                                                                                                                              |
| Login optional                         | **Type** String **Description** Login of the account used to access the files and folders. **Note:** when not specified and `Password` neither, then the account running Usercube will be used. **Note:** if `Domain` is null, then `Login` must be set in the User Principal Name (UPN) format. |
| Password optional                      | **Type** String **Description** Password of the account used to access the files and folders. **Note:** when not specified and `Login` neither, then the account running Usercube will be used.                                                                                                  |

### Output details

This connector is meant to generate to the
[ExportOutput](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
folder the following CSV files:

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

- [RSA encryption](/docs/identitymanager/6.1/installation-setup/agent-configuration.md),
  configured in the `appsettings.encrypted.agent.json` file;
- an
  [Azure Key Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
  safe;

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

- a
  [CyberArk Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
  able to store Active Directory's `Login` and `Password`.

Protected attributes are stored inside a safe in CyberArk, into an account whose identifier can be
retrieved by Usercube from `appsettings.cyberark.agent.json`.

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

# Top Secret

This connector exports users and profiles from a
[Top Secret](https://www.ibm.com/docs/en/szs/2.2?topic=audit-top-secret) (TSS) instance.

This page is about
[Mainframe/Top Secret](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md).

![Package: Mainframe/Top Secret](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/topsecret/packages_tss_v603.webp)

The documentation is not yet available for this page and will be completed in the near future.

# Apache Directory

Manages users and groups in Apache Directory.

| Package Characteristics | Value                        |
| ----------------------- | ---------------------------- |
| Display Name            | Directory/Apache Directory   |
| Identifier              | Usercube.LDAP.Apache@0000001 |
| Export                  | Usercube-Export-Ldap.dll     |
| Fulfill                 | Usercube-Fulfill-Ldap.dll    |
| Has Incremental Mode    | False                        |
| Publisher               | Usercube                     |

# Azure

Exports Azure resources, role definitions and role assignments.

| Package Characteristics | Value                     |
| ----------------------- | ------------------------- |
| Display Name            | Cloud/Azure               |
| Identifier              | Usercube.Azure@0000001    |
| Export                  | Usercube-Export-Azure.dll |
| Fulfill                 | NONE                      |
| Has Incremental Mode    | False                     |
| Publisher               | Usercube                  |

# CSV

Exports CSV to prepare synchronization.

| Package Characteristics | Value                   |
| ----------------------- | ----------------------- |
| Display Name            | File/CSV                |
| Identifier              | Usercube.CSV@0000001    |
| Export                  | Usercube-Export-Csv.dll |
| Fulfill                 | NONE                    |
| Has Incremental Mode    | True                    |
| Publisher               | Usercube                |

# CyberArk

Manages CyberArk entities, including user and group assignments.

| Package Characteristics | Value                          |
| ----------------------- | ------------------------------ |
| Display Name            | PAM/CyberArk                   |
| Identifier              | Usercube.SCIM.CyberArk@0000001 |
| Export                  | Usercube-Export-Scim.dll       |
| Fulfill                 | Usercube-Fulfill-Scim.dll      |
| Has Incremental Mode    | False                          |
| Publisher               | Usercube                       |

# EasyVista

Manages users inside an EasyVista instance. This package supports incremental synchronization.

| Package Characteristics | Value                          |
| ----------------------- | ------------------------------ |
| Display Name            | ITSM/EasyVista                 |
| Identifier              | Usercube.EasyVista@0000001     |
| Export                  | Usercube-Export-EasyVista.dll  |
| Fulfill                 | Usercube-Fulfill-EasyVista.dll |
| Has Incremental Mode    | True                           |
| Publisher               | Usercube                       |

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
| Publisher               | Usercube                                                                                       |

# Excel

Exports Excel data sheets.

| Package Characteristics | Value                     |
| ----------------------- | ------------------------- |
| Display Name            | File/Excel                |
| Identifier              | Usercube.Excel@0000001    |
| Export                  | Usercube-Export-Excel.dll |
| Fulfill                 | NONE                      |
| Has Incremental Mode    | True                      |
| Publisher               | Usercube                  |

# Home Folders

Manages Home Folders.

| Package Characteristics | Value                          |
| ----------------------- | ------------------------------ |
| Display Name            | Storage/Home Folders           |
| Identifier              | Usercube.HomeFolder@0000001    |
| Export                  | Usercube-Export-HomeFolder.dll |
| Fulfill                 | NONE                           |
| Has Incremental Mode    | False                          |
| Publisher               | Usercube                       |

# Usercube Database

Updates the Usercube database for each provisioning order. This package is used for HR systems,
authoritative systems or other Usercube instances.

| Package Characteristics | Value                                  |
| ----------------------- | -------------------------------------- |
| Display Name            | Usercube/Database                      |
| Identifier              | Usercube.FulfillDatabase@0000001       |
| Export                  | NONE                                   |
| Fulfill                 | Usercube-Fulfill-InternalResources.dll |
| Has Incremental Mode    | False                                  |
| Publisher               | Usercube                               |

# JSON

Generate JSON files for each provisioning order. These JSON can then be used by custom scripts.

| Package Characteristics | Value                          |
| ----------------------- | ------------------------------ |
| Display Name            | Custom/JSON                    |
| Identifier              | Usercube.FulfillToFile@0000001 |
| Export                  | NONE                           |
| Fulfill                 | Usercube-Fulfill-ToFile.dll    |
| Has Incremental Mode    | False                          |
| Publisher               | Usercube                       |

# LDIF

Exports entries from a LDIF file.

| Package Characteristics | Value                    |
| ----------------------- | ------------------------ |
| Display Name            | Directory/LDIF           |
| Identifier              | Usercube.LDIF@0000001    |
| Export                  | Usercube-Export-Ldif.dll |
| Fulfill                 | NONE                     |
| Has Incremental Mode    | False                    |
| Publisher               | Usercube                 |

# Manual Ticket and CUD Resources

Opens manual provisioning tickets in Usercube.

| Package Characteristics | Value                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------- |
| Display Name            | Ticket/identitymanager And Create/Update/Delete resources                             |
| Identifier              | Usercube.UpdateManualProvisioningTicket@0000001                                       |
| Export                  | NONE                                                                                  |
| Fulfill                 | Usercube-UpdateManualProvisioningTicket.dll and Usercube-Update-FulfillmentStates.dll |
| Has Incremental Mode    | False                                                                                 |
| Publisher               | Usercube                                                                              |

## Virtual Resources

This package allows to create tickets in the Manual Provisioning screen.

After the validation of the ticket, the state of the resource will be `Executed`.  
If a synchronization is available for the system manually fulfilled, the state could change to
`Verified` if the synchronized data are the ones expected.  
If the external system cannot be synchronized, Usercube offers the possibility to create virtual
resources. It means that the data is not provided by a synchronization, but we trust the validation
of the ticket in the manual provisioning screen. The resources are created accordingly as if they
were coming from an external system.

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

Opens manual provisioning tickets in Usercube.

| Package Characteristics | Value                                 |
| ----------------------- | ------------------------------------- |
| Display Name            | Ticket/identitymanager                |
| Identifier              | Usercube.Manual@0000001               |
| Export                  | NONE                                  |
| Fulfill                 | Usercube-Update-FulfillmentStates.dll |
| Has Incremental Mode    | False                                 |
| Publisher               | Usercube                              |

# OData

Manages OData entities.

| Package Characteristics | Value                     |
| ----------------------- | ------------------------- |
| Display Name            | Custom/OData              |
| Identifier              | Usercube.OData@0000001    |
| Export                  | Usercube-Export-OData.dll |
| Has Incremental Mode    | False                     |
| Publisher               | Usercube                  |

# ODBC

Exports data from a generic ODBC compatible database.

| Package Characteristics | Value                        |
| ----------------------- | ---------------------------- |
| Display Name            | Database/ODBC                |
| Identifier              | Usercube.SQL.ODBC@0000001    |
| Export                  | Usercube-Export-Sql.dll      |
| Fulfill                 | NONE                         |
| Has Incremental Mode    | False                        |
| Publisher               | Usercube                     |
| ProviderClassFullName   | System.Data.Odbc.OdbcFactory |
| ProviderDllName         | System.Data.Odbc.dll         |

# PowerShellProv

Fulfills an external system with a custom PowerShell script.

| Package Characteristics | Value                           |
| ----------------------- | ------------------------------- |
| Display Name            | Custom/PowerShellProv           |
| Identifier              | Usercube.Powershell@0000001     |
| Export                  | NONE                            |
| Fulfill                 | Usercube-Fulfill-PowerShell.dll |
| Has Incremental Mode    | False                           |
| Publisher               | Usercube                        |

# PowerShellSync

Fulfills an external system with a custom PowerShell script.

| Package Characteristics | Value                           |
| ----------------------- | ------------------------------- |
| Display Name            | Custom/PowerShellSync           |
| Identifier              | Usercube.PowershellSync@0000001 |
| Export                  | Usercube-Export-PowerShell.dll  |
| Fulfill                 | NONE                            |
| Has Incremental Mode    | True                            |
| Publisher               | Usercube                        |

# RACF

Exports the RACF users and profiles.

| Package Characteristics | Value                    |
| ----------------------- | ------------------------ |
| Display Name            | Mainframe/RACF           |
| Identifier              | Usercube.RACF@0000001    |
| Export                  | Usercube-Export-Racf.dll |
| Fulfill                 | NONE                     |
| Has Incremental Mode    | False                    |
| Publisher               | Usercube                 |

# Red Hat Directory Server

Manages entries in a Red Hat Directory Server.

| Package Characteristics | Value                              |
| ----------------------- | ---------------------------------- |
| Display Name            | Directory/Red Hat Directory Server |
| Identifier              | Usercube.LDAP.RedHat@0000001       |
| Export                  | Usercube-Export-Ldap.dll           |
| Fulfill                 | Usercube-Fulfill-Ldap.dll          |
| Has Incremental Mode    | False                              |
| Publisher               | Usercube                           |

# Robot Framework

Fulfills an external system using a Robot Framework script.

| Package Characteristics | Value                               |
| ----------------------- | ----------------------------------- |
| Display Name            | Custom/Robot Framework              |
| Identifier              | Usercube.RobotFramework@0000001     |
| Export                  | NONE                                |
| Fulfill                 | Usercube-Fulfill-RobotFramework.dll |
| Has Incremental Mode    | False                               |
| Publisher               | Usercube                            |

# Shared Folders

Manages users and permissions in Shared Folders.

| Package Characteristics | Value                            |
| ----------------------- | -------------------------------- |
| Display Name            | Storage/Shared Folders           |
| Identifier              | Usercube.SharedFolder@0000001    |
| Export                  | Usercube-Export-SharedFolder.dll |
| Fulfill                 | NONE                             |
| Has Incremental Mode    | False                            |
| Publisher               | Usercube                         |

# Slack

Manages Slack entities.

| Package Characteristics | Value                       |
| ----------------------- | --------------------------- |
| Display Name            | Messaging/Slack             |
| Identifier              | Usercube.SCIM.Slack@0000001 |
| Export                  | Usercube-Export-Scim.dll    |
| Fulfill                 | Usercube-Fulfill-Scim.dll   |
| Has Incremental Mode    | True                        |
| Publisher               | Usercube                    |

# TSS

Exports the Top Secret users and profiles.

| Package Characteristics | Value                   |
| ----------------------- | ----------------------- |
| Display Name            | Mainframe/Top Secret    |
| Identifier              | Usercube.TSS@0000001    |
| Export                  | Usercube-Export-Tss.dll |
| Fulfill                 | NONE                    |
| Has Incremental Mode    | False                   |
| Publisher               | Usercube                |

# Unplugged

Manages an unplugged system with a completely custom data model.

| Package Characteristics | Value                   |
| ----------------------- | ----------------------- |
| Display Name            | Custom/Unplugged        |
| Identifier              | Usercube.Custom@0000001 |
| Export                  | NONE                    |
| Fulfill                 | NONE                    |
| Has Incremental Mode    | False                   |
| Publisher               | Usercube                |

# Workflow

Triggers workflows in Usercube for each provisioning order.

| Package Characteristics | Value                                  |
| ----------------------- | -------------------------------------- |
| Display Name            | Usercube/Workflow                      |
| Identifier              | Usercube.FulfillWorkflow@0000001       |
| Export                  | NONE                                   |
| Fulfill                 | Usercube-Fulfill-InternalWorkflows.dll |
| Has Incremental Mode    | False                                  |
| Publisher               | Usercube                               |

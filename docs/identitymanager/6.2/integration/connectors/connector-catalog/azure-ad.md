# Azure

This connector exports
[Azure](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-azure)
resources, role definitions and assignments.

This page is about [ Azure ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md).

![Package: Cloud/Azure](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/azure/packages_azure_v603.webp)

## Prerequisites

Implementing this connector requires at least the `Security Reader` role, because Identity
Manager does not access the [Azure API](https://docs.microsoft.com/en-us/rest/api/azure/) on behalf
of a user but with [its own identity](https://docs.microsoft.com/en-us/rest/api/azure/).

## Export

For a given Azure tenant with resources, this connector exports Azure resources, role definitions
and role assignments to CSV files.

### Configuration

This process is configured through a
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) in the UI and/or
the XML configuration, and in the `appsettings.agent.json > Connections` section:

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
>         "ApplicationKey": "25d408a1925d4c081925b\\d40819",
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
| ApplicationId   required | __Type__    String   __Description__ GUID that uniquely identifies the application registration in the Azure tenant.   __Note:__ value obtained at registration: __App registrations__ > __Owned applications__ > __Identity Manager__ > __Overview__ > __Application (client) ID__ |
| ApplicationKey   required | __Type__    String   __Description__ Secret associated with the ```ApplicationId```.   __Note:__ value obtained at registration: __App registrations__ > __Owned applications__ > __Identity Manager__ > __Certificate & secrets__ > __Client secrets__ > __Client Secret__ |
| TenantId   required | __Type__    String   __Description__ GUID that uniquely identifies the Azure tenant.   __Note:__ value obtained at registration: __App registrations__ > __Owned applications__ > __Identity Manager__ > __Overview__ > __Application (tenant) ID__ |
| ResponseUri   default value: ```http://localhost``` | __Type__    String   __Description__ URI used by Azure to contact back the application with the tokens. This response Uri needs to be registered in the [app registration](https://aka.ms/msal-net-register-app). |
|  |  |
| --- | --- |
| SubscriptionId   required | __Type__    String   __Description__ GUID that uniquely identifies the subscription associated to the ```ApplicationId```. [See how to find it](https://www.youtube.com/watch?v=6b1J03fDnOg&t=3s). |
| AzurePath   default value: ```https://management.azure.com/.default``` | __Type__    String   __Description__ Scope requested to access a protected API. For this flow (client credentials), the scope should be of the form __`{ResourceIdUri/.default}`__. [See Microsoft's documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow#see-microsofts-documentation). |
| AzurePathApi   default value: ```https://management.azure.com``` | __Type__    String   __Description__ Azure Uri API. |

### Output details

This connector is meant to generate to the [Application Settings](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md) folder the following CSV files:

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

- [
  RSA Encryption
  ](/docs/identitymanager/6.2/reference/index.md) configured in the ```appsettings.encrypted.agent.json``` file;
- An [Azure Key Vault](/docs/identitymanager/6.2/administration/agent-configuration/credential-providers.md) safe;

- A [CyberArk's AAM Credential Providers
  ](/docs/identitymanager/6.2/administration/agent-configuration/credential-providers.md) able to store Azure's ```ApplicationId``` and ```ApplicationKey```.
````

# Microsoft Entra ID

This connector exports and fulfills user and groups from/to a
[Microsoft Entra ID](https://www.microsoft.com/fr-fr/security/business/identity-access/microsoft-entra-id)
(formerly Microsoft Azure AD) instance.

See the[ Microsoft Entra ID ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md)topic for
additional information.

![Package: Directory/Microsoft Entra ID](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/microsoftentraid/packages_azuread_v603.webp)

## Overview

Microsoft Entra ID is Microsoft's cloud-based identity and access management service which helps
your employees sign in and access resources in:

- External resources, such as Microsoft Office 365, the Azure portal, and thousands of other SaaS
  applications;
- Internal resources, such as apps on your corporate network and intranet, along with any cloud apps
  developed by your own organization.

## Prerequisites

Implementing this connector requires giving Identity Manager
[application permissions](https://docs.microsoft.com/en-us/graph/auth/auth-concepts#application-permissions),
because Identity Manager does not access the
[Microsoft Graph API](https://docs.microsoft.com/en-us/graph/overview?view=graph-rest-1.0) on behalf
of a user but with [its own identity](https://docs.microsoft.com/en-us/graph/auth-v2-service), and
delegated permissions are not enough. These application permissions require the consent of an
administrator of the target Microsoft Entra ID tenant.

See the[Register for Microsoft Entra ID](/docs/identitymanager/6.2/integration/connectors/connector-basics/configuration.md) topic on how to
register Identity Manager as an application with the Microsoft Identity Platform in order to grant
Identity Manager a service account which authenticates with the target Microsoft Entra ID.

## Export

For a configured set of directory objects on an Microsoft Entra ID instance, this connector exports
the list of configured attributes in the associated entity type mapping to a CSV file.

### Configuration

This process is configured through a connection in the UI and/or the XML configuration. See
the[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)topic for
additional information.

Or in the `appsettings.agent.json > Connections` section:

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
- not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "AzureADExport": {
        "ApplicationId": "<contosoAzure897>",
        "ApplicationKey": "<25d408a1925d4c081925b\\d40819>",
        "TenantId": "<25d40819-f23f-4837-9d50-a9a52da50b8c>",
        "MicrosoftGraphPathApi": "<https://graph.microsoft.com/beta/>",
        "ResponseUri": "<https://agent.usercubecontoso.com>"
    }
  }
}
```

Setting attributes

The table below summarizes the setting attributes of Microsoft Entra ID connector.

| Name                                                                       | Type   | Description                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ApplicationId (required)                                                   | String | GUID that uniquely identifies the application registration in the Azure tenant. **NOTE:** The value obtained at registration: **App registrations** > **Owned applications** > **Identity Manager** > **Overview** > **Application (client) ID**                                                                                                 |
| ApplicationKey (required)                                                  | String | Secret associated with the `ApplicationId` **NOTE:** The value obtained at registration: **App registrations** > **Owned applications** > **Identity Manager** > **Certificate & secrets** > **Client secrets** > **Client Secret**                                                                                                              |
| TenantId (required)                                                        | String | GUID that uniquely identifies the Azure tenant. **NOTE:** The value obtained at registration: **App registrations** > **Owned applications** > **Identity Manager** > **Overview** > **Application (tenant) ID**                                                                                                                                 |
| ResponseUri (default value: `http://localhost`)                            | String | URI used by Azure to contact back the application with the tokens. This response Uri needs to be registered in the [app registration](https://aka.ms/msal-net-register-app).                                                                                                                                                                     |
| MicrosoftAuthorityPath (optional)                                          | String | Pattern for Microsoft Authority Path.                                                                                                                                                                                                                                                                                                            |
| MicrosoftGraphPath (default value: `https://graph.microsoft.com/.default`) | String | Scope requested to access a protected API. **NOTE:** For this flow (client credentials), the scope should be of the form `{ResourceIdUri/.default}`. [See Microsoft's documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow#see-microsofts-documentation) for additional information. |
| MicrosoftGraphPathApi (default value: `https://graph.microsoft.com/v1.0/`) | String | Microsoft Graph Uri API.                                                                                                                                                                                                                                                                                                                         |

### Output details

This connector is meant to generate the following files:

- `<connectionIdentifier>_directoryobjects.csv` containing the property values from the entity type
  mapping associated with the connection.

  **NOTE:** The values are exported from the entities listed in the attribute `C0` of the
  `EntityTypeMapping`.

  For example, with the following configuration:

  Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
  script in the command line.

  ```

  <EntityTypeMapping Identifier="AzureAD_DirectoryObject" Connector="AzureAD" ConnectionTable="AzureADExport_directoryobjects" C0="user group directoryRole servicePrincipal">
    <Property Identifier="accountEnabled" ConnectionColumn="accountEnabled" />
    <Property Identifier="objectid" ConnectionColumn="id" IsPrimaryKey="true" />
    <Property Identifier="mail" ConnectionColumn="mail" />
  </EntityTypeMapping>

  ```

  Four entities are exported (`user`; `group`; `directoryRole`; `servicePrincipal`) and whose
  names are to be found in the column `@odata.type`. Then `AzureADExport_directoryobjects.csv`
  looks like:

  ```
  AzureADExport_directoryobjects.csv
  Command,@odata.type,accountEnabled,id,mail
  ...
  ```

  _Remember,_ attributes described as "Supported only on the Get `<entity_name>` API" in the
  [Microsoft Graph API](https://docs.microsoft.com/en-us/graph/overview?view=graph-rest-1.0)
  documentation cannot be retrieved through this connector. The export task will raise an error if
  these attributes are used in your EntityTypeMapping.

  This connector supports
  [Microsoft Entra ID Schema Extensions](https://docs.microsoft.com/en-us/previous-versions/azure/ad/graph/howto/azure-ad-graph-api-directory-schema-extensions)
  but does not support
  [Microsoft Graph Schema Extensions](https://docs.microsoft.com/en-us/graph/extensibility-schema-groups).

- `<connectionIdentifier>_<navigationProperty>_<entity>.csv` describing the navigation property from
  one entity to another.

  For example `AzureADExport_members_group.csv` would look like:

  ```
  AzureADExport_members_group.csv
  Command,groupId,id
  ...
  ```

  Where command can be `insert`, `update` or `delete`; groupId is the id of the group; id is the
  id of the group member (in this context).

  **NOTE:** Only the navigation properties `members` and `owners` are exported. These navigation
  properties are automatically detected according to the data exported.

- one file `<connectionIdentifier>_cookie_<entity>.bin` per entity, containing an URL with a
  `delta token` useful for incremental export.

  > For example `AzureADExport_cookie_user.bin`

  _Remember,_ most exports can be run in complete mode, where the CSV files will contain all
  entries, or in incremental mode, where CSV files will contain only the entries which have been
  modified since the last synchronization.

  A task can use the IgnoreCookieFile boolean property, and a command line (with an executable)
  can use the option --ignore-cookies.

The CSV files are stored in the Export Output folder, and the cookie file in the Export Cookies
folder. See the
[Application Settings](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)
topic for additional information.

For more details, see Microsoft's documentation on
[columns and attributes synchronized to Microsoft Entra ID](https://docs.microsoft.com/azure/active-directory/hybrid/reference-connect-sync-attributes-synchronized).

## Fulfill

This connector writes to the Microsoft Entra ID, to create, update and delete Microsoft Entra ID
objects, initiated manually through the UI or automatically by enforcing the policy. See
the[Evaluate Policy](/docs/identitymanager/6.2/access-governance/role-management/role-assignment.md)topic for additional
information.

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
    "AzureADFulfillment": {
        "ApplicationId": "<contosoAzure897>",
        "ApplicationKey": "<84468d65324ghj\\de9864d3d7e89026>",
        "TenantId": "<25d40819-f23f-4837-9d50-a9a52da50b8c>",
        "MicrosoftGraphPathApi": "<https://graph.microsoft.com/beta/>",
        "ResponseUri": "<https://agent.usercube.com>"
    }
  }
}
```

Setting attributes

The table below summarizes the setting attributes.

| Name                                                                   | Type   | Description                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ApplicationId required                                                 | String | GUID that uniquely identifies the application registration in the Azure tenant. **NOTE:** value obtained at registration: **App registrations** > **Owned applications** > **Identity Manager** > **Overview** > **Application (client) ID** |
| ApplicationKey required                                                | String | Secret associated with the `ApplicationId`. **NOTE:** value obtained at registration: **App registrations** > **Owned applications** > **Identity Manager** > **Certificate & secrets** > **Client secrets** > **Client Secret**             |
| TenantId required                                                      | String | **NOTE:** GUID that uniquely identifies the Azure tenant. value obtained at registration: **App registrations** > **Owned applications** > **Identity Manager** > **Overview** > **Application (tenant) ID**                                 |
| ResponseUri default value: `http://localhost`                          | String | URI used by Azure to contact back the application with the tokens. This response Uri needs to be registered in the [app registration](https://aka.ms/msal-net-register-app).                                                                 |
| MicrosoftGraphPathApi default value: https://graph.microsoft.com/v1.0/ | String | Microsoft Graph Uri API.                                                                                                                                                                                                                     |

### Output details

This connector can create a new resource, update and delete any Microsoft Entra ID objects and
groups' memberships via the UI.

## Authentication

See the following to figure out authentication.

Password reset

See
the[appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)
topic for additional information on how to configure password reset settings.

Credential protection

Data protection can be ensured through:

- [ RSA Encryption ](/docs/identitymanager/6.2/reference/index.md),
  configured in the `appsettings.encrypted.agent.json` file
- An [Azure Key Vault](/docs/identitymanager/6.2/administration/agent-configuration/credential-providers.md)
  safe;

- A
  [CyberArk's AAM Credential Providers ](/docs/identitymanager/6.2/administration/agent-configuration/credential-providers.md)
  Vault able to store Microsoft Entra ID's `ApplicationId` and `ApplicationKey`.

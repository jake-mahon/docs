---
sidebar_position: 1193
title: Azure
---

# Azure

This connector exports [Azure](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-azure "Azure") resources, role definitions and assignments.

This page is about [Azure](../../references-packages/azure/index "Azure").

![Package: Cloud/Azure](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Packages_azure_V603.png)

## Prerequisites

Implementing this connector requires at least the `Security Reader` role, because Identity Manager does not access the [Azure API](https://docs.microsoft.com/en-us/rest/api/azure/ "Azure API") on behalf of a user but with [its own identity](https://docs.microsoft.com/en-us/rest/api/azure/ "its own identity").

## Export

For a given Azure tenant with resources, this connector exports Azure resources, role definitions and role assignments to CSV files.

### Configuration

This process is configured through a [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection") in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "": {
      ...
    }
  }
}
                
```
:::note
The identifier of the connection and thus the name of the subsection must:
- be unique.
- not begin with a digit.
- not contain , :, ", /, \, |, ?, \* and \_.
:::

> The following example
>
> ```
>
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
>                     
> ```
#### Setting attributes

| Name | Details |
| --- | --- |
| ApplicationId required | **Type**  String  **Description** GUID that uniquely identifies the application registration in the Azure tenant. **Note:** value obtained at registration: **App registrations** > **Owned applications** > **Identity Manager** > **Overview** > **Application (client) ID** |
| ApplicationKey required | **Type**  String  **Description** Secret associated with the `ApplicationId`. **Note:** value obtained at registration: **App registrations** > **Owned applications** > **Identity Manager** > **Certificate & secrets** > **Client secrets** > **Client Secret** |
| TenantId required | **Type**  String  **Description** GUID that uniquely identifies the Azure tenant. **Note:** value obtained at registration: **App registrations** > **Owned applications** > **Identity Manager** > **Overview** > **Application (tenant) ID** |
| ResponseUri default value: `http://localhost` | **Type**  String  **Description** URI used by Azure to contact back the application with the tokens. This response Uri needs to be registered in the [app registration](https://aka.ms/msal-net-register-app). |

|  |  |
| --- | --- |
| SubscriptionId required | **Type**  String  **Description** GUID that uniquely identifies the subscription associated to the `ApplicationId`. [See how to find it](https://www.youtube.com/watch?v=6b1J03fDnOg&t=3s). |
| AzurePath default value: `https://management.azure.com/.default` | **Type**  String  **Description** Scope requested to access a protected API. For this flow (client credentials), the scope should be of the form **"{ResourceIdUri/.default}"**. [See Microsoft's documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow#first-case-access-token-request-with-a-shared-secret). |
| AzurePathApi default value: `https://management.azure.com` | **Type**  String  **Description** Azure Uri API. |

### Output details

This connector is meant to generate to the [Application Settings](../../../network-configuration/agent-configuration/appsettings/index "Application Settings") folder the following CSV files:

`_RoleDefinition.csv` with the following columns:

* **id**: role definition's Azure id;
* **name**: role definition's id;
* **roleName**: role definition's name;
* **type**: role definition's type, for example it can describe if it is a built-in role or a customized one;
* **description**: role definition's description.

`_Resource.csv` with the following columns:

* **id**: resource's Azure id;
* **name**: resource's name;
* **type**: resource's type;
* **location**: resource's geographical location;
* **managedBy**: GUID or Azure id of the resource's manager;
* **principalId**: resource's identity PrincipalId;
* **ResourceIdentitytype**: resource's identity type.

`_RoleAssignment.csv` with the following columns:

* **id**: role assignment's Azure id;
* **name**: role assignment's id;
* **roleDefinitionId**: role definition's Azure id;
* **principalId**: Microsoft Entra ID (formerly Microsoft Azure AD)'s object GUID;
* **scope**: resource's Azure id.

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Password reset

This connector does not reset passwords.

### Credential protection

Data protection can be ensured through:

* [RSA Encryption](../../../network-configuration/agent-configuration/rsa-encryption/index "RSA Encryption") configured in the `appsettings.encrypted.agent.json` file;
* An [Azure Key Vault](../../../network-configuration/agent-configuration/azure-key-vault/index "Azure Key Vault") safe;

* A [CyberArk's AAM Credential Providers](../../../network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index "CyberArk's AAM Credential Providers") able to store Azure's `ApplicationId` and `ApplicationKey`.
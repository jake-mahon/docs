---
sidebar_position: 544
title: Microsoft Entra ID
---

# Microsoft Entra ID

This connector exports and fulfills user and groups from/to a [Microsoft Entra ID](https://www.microsoft.com/fr-fr/security/business/identity-access/microsoft-entra-id) (formerly Microsoft Azure AD) instance.

See the[Microsoft Entra ID](../../references-packages/azure-active-directory/index "Microsoft Entra ID")topic for additional information.

![Package: Directory/Microsoft Entra ID](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Packages_azuread_V603.png)

## Overview

Microsoft Entra ID is Microsoft's cloud-based identity and access management service which helps your employees sign in and access resources in:

* External resources, such as Microsoft Office 365, the Azure portal, and thousands of other SaaS applications;
* Internal resources, such as apps on your corporate network and intranet, along with any cloud apps developed by your own organization.

## Prerequisites

Implementing this connector requires giving Identity Manager [application permissions](https://docs.microsoft.com/en-us/graph/auth/auth-concepts#microsoft-graph-permissions), because Identity Manager does not access the [Microsoft Graph API](https://docs.microsoft.com/en-us/graph/overview?view=graph-rest-1.0) on behalf of a user but with [its own identity](https://docs.microsoft.com/en-us/graph/auth-v2-service), and delegated permissions are not enough. These application permissions require the consent of an administrator of the target Microsoft Entra ID tenant.

See the[Register for Microsoft Entra ID](../../how-tos/azuread-register/index "Register for Microsoft Entra ID") topic on how to register Identity Manager as an application with the Microsoft Identity Platform in order to grant Identity Manager a service account which authenticates with the target Microsoft Entra ID.

## Export

For a configured set of directory objects on an Microsoft Entra ID instance, this connector exports the list of configured attributes in the associated entity type mapping to a CSV file.

### Configuration

This process is configured through a connection in the UI and/or the XML configuration. See the [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection") topic for additional information.

Or in the `appsettings.agent.json > Connections` section:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

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
**NOTE:** The identifier of the connection and thus the name of the subsection must:

* be unique
* not begin with a digit
* not contain ``, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`

For example:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
appsettings.agent.json  
{  
  ...  
  "Connections": {  
    ...  
    "MicrosoftEntraIDExport": {  
        "ApplicationId": "",  
        "ApplicationKey": "",  
        "TenantId": "",  
        "MicrosoftGraphPathApi": "",  
        "ResponseUri": ""  
    }  
  }  
}
```
Setting attributes

The table below summarizes the setting attributes of Microsoft Entra ID connector.

| Name | Type | Description |
| --- | --- | --- |
| ApplicationId (required) | String | GUID that uniquely identifies the application registration in the Azure tenant.  **NOTE:** The value obtained at registration: **App registrations** > **Owned applications** > **Identity Manager** > **Overview** > **Application (client) ID** |
| ApplicationKey (required) | String | Secret associated with the `ApplicationId`  **NOTE:** The value obtained at registration: **App registrations** > **Owned applications** > **Identity Manager** > **Certificate & secrets** > **Client secrets** > **Client Secret** |
| TenantId (required) | String | GUID that uniquely identifies the Azure tenant.  **NOTE:** The value obtained at registration: **App registrations** > **Owned applications** > **Identity Manager** > **Overview** > **Application (tenant) ID** |
| ResponseUri (default value: `http://localhost`) | String | URI used by Azure to contact back the application with the tokens. This response Uri needs to be registered in the [app registration](https://aka.ms/msal-net-register-app). |
| MicrosoftAuthorityPath (optional) | String | Pattern for Microsoft Authority Path. |
| MicrosoftGraphPath (default value: https://graph.microsoft.com/.default) | String | Scope requested to access a protected API.  **NOTE:** For this flow (client credentials), the scope should be of the form "{ResourceIdUri/.default}". [See Microsoft's documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow#first-case-access-token-request-with-a-shared-secret) for additional information. |
| MicrosoftGraphPathApi (default value: `https://graph.microsoft.com/v1.0/`) | String | Microsoft Graph Uri API. |

### Output details

This connector is meant to generate the following files:

* `_directoryobjects.csv` containing the property values from the entity type mapping associated with the connection.

  **NOTE:** The values are exported from the entities listed in the attribute `C0` of the `EntityTypeMapping`.

  For example, with the following configuration:

  Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

  ```
  
      
      
      
    

  ```
Four entities are exported (`user`; `group`; `directoryRole`; `servicePrincipal`) and whose names are to be found in the column `@odata.type`. Then `MicrosoftEntraIDExport_directoryobjects.csv` looks like:

  ```
MicrosoftEntraIDExport_directoryobjects.csv  
  Command,@odata.type,accountEnabled,id,mail  
  ...
  ```
*Remember,* attributes described as "Supported only on the Get  API" in the [Microsoft Graph API](https://docs.microsoft.com/en-us/graph/overview?view=graph-rest-1.0) documentation cannot be retrieved through this connector. The export task will raise an error if these attributes are used in your EntityTypeMapping.
    
  This connector supports [Microsoft Entra ID Schema Extensions](https://docs.microsoft.com/en-us/previous-versions/azure/ad/graph/howto/azure-ad-graph-api-directory-schema-extensions) but does not support [Microsoft Graph Schema Extensions](https://docs.microsoft.com/en-us/graph/extensibility-schema-groups).
* `__.csv` describing the navigation property from one entity to another.

  For example `AzureADExport_members_group.csv` would look like:

  ```
MicrosoftEntraIDExport_members_group.csv  
  Command,groupId,id  
  ...
  ```
Where command can be `insert`, `update` or `delete`; groupId is the id of the group; id is the id of the group member (in this context).

  **NOTE:** Only the navigation properties `members` and `owners` are exported. These navigation properties are automatically detected according to the data exported.
* one file `_cookie_.bin` per entity, containing an URL with a `delta token` useful for incremental export.

  > For example `MicrosoftEntraIDExport_cookie_user.bin`

  *Remember,* most exports can be run in complete mode, where the CSV files will contain all entries, or in incremental mode, where CSV files will contain only the entries which have been modified since the last synchronization.
    
    
  A task can use the IgnoreCookieFile boolean property, and a command line (with an executable) can use the option --ignore-cookies.

The CSV files are stored in the Export Output folder, and the cookie file in the Export Cookies folder. See the [Application Settings](../../../network-configuration/agent-configuration/appsettings/index "Application Settings") topic for additional information.

For more details, see Microsoft's documentation on [columns and attributes synchronized to Microsoft Entra ID](https://docs.microsoft.com/azure/active-directory/hybrid/reference-connect-sync-attributes-synchronized).

## Fulfill

This connector writes to the Microsoft Entra ID, to create, update and delete Microsoft Entra ID objects, initiated manually through the UI or automatically by enforcing the policy. See the [Evaluate Policy](../../../role-assignment/evaluate-policy/index "Evaluate Policy") topic for additional information.

### Configuration

Same as for export, fulfill is configured through connections.

For example:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
appsettings.agent.json  
{  
  ...  
  "Connections": {  
    ...  
    "MicrosoftEntraIDFulfillment": {  
        "ApplicationId": "",  
        "ApplicationKey": "",  
        "TenantId": "",  
        "MicrosoftGraphPathApi": "",  
        "ResponseUri": ""  
    }  
  }  
}
```
Setting attributes

The table below summarizes the setting attributes.

| Name | Type | Description |
| --- | --- | --- |
| ApplicationId required | String | GUID that uniquely identifies the application registration in the Azure tenant.  **NOTE:** value obtained at registration: **App registrations** > **Owned applications** > **Identity Manager** > **Overview** > **Application (client) ID** |
| ApplicationKey required | String | Secret associated with the `ApplicationId`.  **NOTE:** value obtained at registration: **App registrations** > **Owned applications** > **Identity Manager** > **Certificate & secrets** > **Client secrets** > **Client Secret** |
| TenantId required | String | **NOTE:** GUID that uniquely identifies the Azure tenant.  value obtained at registration: **App registrations** > **Owned applications** > **Identity Manager** > **Overview** > **Application (tenant) ID** |
| ResponseUri default value: `http://localhost` | String | URI used by Azure to contact back the application with the tokens. This response Uri needs to be registered in the [app registration](https://aka.ms/msal-net-register-app). |
| MicrosoftGraphPathApi default value: https://graph.microsoft.com/v1.0/ | String | Microsoft Graph Uri API. |

### Output details

This connector can create a new resource, update and delete any Microsoft Entra ID objects and groups' memberships via the UI.

## Authentication

See the following to figure out authentication.

Password reset

See the[appsettings.agent](../../../network-configuration/agent-configuration/appsettings-agent/index "appsettings.agent") topic for additional information on how to configure password reset settings.

Credential protection

Data protection can be ensured through:

* [RSA Encryption](../../../network-configuration/agent-configuration/rsa-encryption/index "RSA Encryption"), configured in the `appsettings.encrypted.agent.json` file
* An [Azure Key Vault](../../../network-configuration/agent-configuration/azure-key-vault/index "Azure Key Vault") safe;

* A [CyberArk's AAM Credential Providers](../../../network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index "CyberArk's AAM Credential Providers") Vault able to store Microsoft Entra ID's `ApplicationId` and `ApplicationKey`.
---
sidebar_position: 537
title: SCIM
---

# SCIM

This connector exports and fulfills entities from/to a [SCIM](https://www.okta.com/blog/2017/01/what-is-scim/) compliant application.

This page is about:

* Custom/SCIM
* CRM/Salesforce
* Messaging/Slack
* PAM/CyberArk

![Package: Custom/SCIM](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Packages_scim_V603.png)

![Package: CRM/Salesforce](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Packages_salesforce_V603.png)

![Package: Messaging/Slack](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Packages_slack_V603.png)

![Package: PAM/CyberArk](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Packages_cyberark_V603.png)

## Overview

Simple Cloud Identity Management (SCIM) is a Request for Comments (RFC) standard. It describes a REST API with specific endpoints to get and set data in a web application for IGA purposes. It allows an identity provider to manage the web application's accounts. For more details about SCIM and RFC, see the [IETF document](https://tools.ietf.org/html/rfc7644).

**NOTE:** Similarly to the Salesforce REST-based API, SCIM for Salesforce enables reading and writing attributes, but writes to a smaller subset.
For example, the following properties are manageable by the Salesforce REST-based API but not SCIM: `PermissionSetGroup`, `PermissionSetLicense`, `UserPermissionsKnowledgeUser`, `UserPermissionsInteractionUser`, `UserPermissionsSupportUser`, `CallCenterId`, `SenderEmail`.
  
  
See the [Salesforce's documentation](https://help.salesforce.com/s/articleView?id=sf.identity_scim_rest_api.htm&type=5 "Salesforce's documentation") for additional information.

## Prerequisites

Implementing this connector requires the web application that you want to synchronize to implement SCIM Version 2.0 or later.

The implementation of the Salesforce connector requires the completion of the following steps:

* Connect the application
* Enable OAuth authentication
* Reset the user token
* Configure the Salesforce connection

Connect the application

To connect to the Salesforce application do the following:

**Step 1 –** Log into Salesforce using an admin account.

![](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Salesforce-advancesetup.png)

**Step 2 –** Go to **Advanced Setup**.

![](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Salesforce-newconnectedapp.png)

**Step 3 –** Go to **App Manager** and **Create a Connected App**.

![](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Salesforce-enableOAuth.png)

**Step 4 –** Fill in the details of the application: Application Name, API Name, Contact Email, select **Enable OAuth Settings**, and complete the mandatory information as callback URL and OAuth Scopes.

**Step 5 –** Save the Application.

![](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Salesforce-manageconnectedapps.png)

**Step 6 –** Go to **Manage Connected Apps** and click on the newly created application.

![](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Salesforce-manageconsumerdetails.png)

**Step 7 –** Click on **Manage Consumer Details**.

![](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Salesforce-consumerkey.png)

**Step 8 –** Copy the Consumer Key and Consumer Secret in your Keypass.

Enable OAuth authentication

To enable the OAuth authentication do the following:

**Step 1 –** Log into Salesforce using an admin account.

![](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Salesforce-advancesetup.png)

**Step 2 –** Go to **Advanced Setup**.

![](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/OAuthAuthentication.png)

**Step 3 –** Go to **OAuth** and **OpenID Connect Settings** in the **Identity** drop-down menu, enable the option to **Allow OAuth Username-Password Flows**.

Reset the user token

To reset the user token do the following:

**Step 1 –** Log into Salesforce using an admin account.

![](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Salesforce-usertoken-settings.png)

**Step 2 –** Click on **Settings** under the profile details.

![](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Salesforce-resetseuritytoken.png)

**Step 3 –** Click on **Reset My Security Token**.

![](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Salesforce-checkemail.png)

**Step 4 –** An email containing the new token will be sent.

Configure the Salesforce connection

To configure the Salesforce connection do the following:

**Step 1 –** Log into Identity Manager using an admin account.

![](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Salesforce-connector.png)

**Step 2 –** Create a new Salesforce connector.

![](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Salesforce-connection.png)

**Step 3 –** Add a new Salesforce connection.

![](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Salesforce-agent-settings.png)

**Step 4 –** Fill the fields in the **Connection Settings** and choose the **Filter**.

The configuration of the Salesforce connector is completed.

### Configuration

This process is configured through a connection in the UI and/or the XML configuration, and in the **appsettings.agent.json** > **Connections** section.   
See the [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection") topic for additional information.

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
*Remember,* the identifier of the connection and thus the name of the subsection must:
  
- Be unique  
- Not begin with a digit  
- Not contain , :, /, \, |, ?, \*, and \_.

The following example gets information via SCIM on a web application whose URL base is `https://example.for.doc.com`:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
appsettings.agent.json  
{  
  ...  
  "Connections": {  
    ...  
    "SCIMExport": {  
        "ApplicationId": "",  
        "Server": "",  
        "ApplicationKey": "",  
        "Login": "",  
        "Password": "",  
        "Filter": ""  
    }  
  }  
}
```
Here we use an account's credentials (login and password) with our application's credentials (ApplicationId and ApplicationKey).

The filter `?filter=active eq \"true\"` retrieves active Users from the external system.

#### Setting attributes

| Name | Type | Description |
| --- | --- | --- |
| Filter optional | String | Filters applied in the SCIM request retrieving the entities. You should write the filters as you would write them in the URL (including the "?"). For more details on the syntax, see the [RFC document](https://tools.ietf.org/html/rfc7644#page-17).  Syntax:EntityNameInSCIM1&#124;scimFilter1&#42;EntityNameInSCIM2&#124;scimFilter2&#42;EntityNameInSCIM3&#124;scimFilter3 |
| OAuth2Url optional | String | URL which get tokens for the requests. The system can usually find this information, but sometimes the system gets it wrong, like Salesforce for example. |
| PageSize default value: 200 | String | Maximum number of elements returned by one request. |
| Server required | String | URL of the SCIM endpoints of your application, excluding /v2. |
| ApplicationId optional | String | Login of the application or of the application's Id provider. |
| Login optional | String | Login of the account. |
| OAuthToken optional | String | Generated OAuth token to connect to the application. |
| Password optional | String | Password of the account. |
| ScimSyntax default value: RFC | String | Type of SCIM implementation: RFC - used for the systems that follow SCIM's rules; Salesforce - required when this connector targets Salesforce; CyberArk - required when this connector targets CyberArk. |

The credential attributes (ApplicationId, ApplicationKey, Login and Password) are used to obtain a token from the application for our requests.

### Output details

This connector is meant to generate to the ExportOutput folder the following CSV files:

* One file for each SCIM entity, coming from entity type mappings's connection tables, named `_.csv`, with one column for each property having a ConnectionColumn and each property without it but used in an entity association;
* One file for each membership, coming from entity association mappings's connection tables, named `_members_.csv`, with the following columns:
  * Value — ID of the group
  * MemberId — ID of the group member
* One file for each entity named Containers such as CyberArk's privileged data, named `_privilegedData_Containers.csv`.

See the [Application Settings](../../../network-configuration/agent-configuration/appsettings/index "Application Settings") and [Entity Type Mapping](../../../toolkit/xml-configuration/connectors/entitytypemapping/index "EntityTypeMapping") topics for additional information.

:::note
For the connector to work properly, the connection tables must follow the naming conventions too: \_ for entities and \_members\_ for links.
:::

If the connection column describes a sub-property, then the name should have the following pattern: {property}:{sub-property}. The character ":" should not be used in other situations.

For example, if we want to retrieve information about Users, Groups and Groups' members, we should have the following configuration:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
          
```
We would have SCIMExport\_Users.csv with the column headers id, `name:givenName` and `emails:value`, `SCIMExport_Groups.csv` with the column headers id and `displayName`, and `SCIMExport_members_Groups.csv` with the column headers value and `MemberId`.

Each column contains the value of the corresponding attribute. SCIM attributes are described in the [RFC document](https://tools.ietf.org/html/rfc7643).

### Limitations

The incremental mode only works for User entities and not for the others like Groups or Roles. It means that entities like Groups or Roles are always handled with the complete mode.

## Fulfill

This connector writes to the managed web application to create, update, and/or delete users with their attributes and group memberships, but no group or other entities.

### Configuration

Same as for export, fulfill is configured through connections.

> The following example writes information to SCIM on a web application whose URL base is `https://example.for.doc.com`.
>
> Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.
>
> ```
> appsettings.agent.json  
> {  
>   ...  
>   "Connections": {  
>     ...  
>     "SCIMFulfillment": {  
>         "ApplicationId": "",  
>         "Server": "",  
>         "ApplicationKey": "",  
>         "Login": "",  
>         "Password": "",  
>         "ServiceSupportBulk": true,  
>         "BulkMaxOperation": 10  
>     }  
>   }  
> }
> ```
>
> Here we use an account's credentials (login and password) with our application's credentials (ApplicationId and ApplicationKey).
>
> We specify that bulk requests are supported with a maximum of 10 operations per request.

#### Setting attributes

| Name | Type | Description |
| --- | --- | --- |
| BulkMaxOperation optional | Int32 | Maximum number of operations which can be sent in one bulk request. |
| ServiceSupportBulk optional | Boolean | True to allow bulk requests.  depends on the web application's SCIM implementation. See the [RFC document](https://tools.ietf.org/html/rfc7644#page-49 "RFC document") for additional information. |
| Server required | String | URL of the SCIM endpoints of your application, excluding /v2. |
| ApplicationId optional | String | Login of the application or of the application's Id provider. |
| ApplicationKey optional | String | Password of the application or of the application's Id provider. |
| Login optional | String | Login of the account. |
| OAuthToken optional | String | Generated OAuth token to connect to the application. |
| Password optional | String | Password of the account. |
| ScimSyntax default value: RFC | String | Type of SCIM implementation: RFC - used for the systems that follow SCIM's rules; Salesforce - required when this connector targets Salesforce; CyberArk - required when this connector targets CyberArk. |

The credential attributes (ApplicationId, ApplicationKey, Login, and Password) are used to obtain a token from the application for our requests.

### Password reset

This connector does not reset passwords.

### Credential protection

Data protection can be ensured through:

* RSA encryption, configured in the `appsettings.encrypted.agent.json` file
* An Azure Key Vault safe

| Attribute | Naming Convention for the Key in Azure Key Vault |
| --- | --- |
| ApplicationId | Connections----ApplicationId |
| ApplicationKey | Connections----ApplicationKey |
| BulkMaxOperation | Connections----BulkMaxOperation |
| Login | Connections----Login |
| Password | Connections----Password |
| ServiceSupportBulk | Connections----ServiceSupportBulk |
| Server | Connections----Server |

* A CyberArk Vault able to store Active Directory's Login, Password, and Server.

See the [RSA Encryption](../../../network-configuration/agent-configuration/rsa-encryption/index "RSA Encryption"), [Azure Key Vault](../../../network-configuration/agent-configuration/azure-key-vault/index "Azure Key Vault"), and [CyberArk's AAM Credential Providers](../../../network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index "CyberArk's AAM Credential Providers")topics for additional information.

Protected attributes are stored inside a safe in CyberArk, into an account whose identifier can be retrieved by Identity Manager from `appsettings.cyberark.agent.json`.

For example:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

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
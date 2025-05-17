---
sidebar_position: 565
title: ServiceNow
---

# ServiceNow

This connector exports and fulfills any data, including users and roles, from/to a [ServiceNow CMDB](https://www.servicenow.com/products/servicenow-platform/configuration-management-database).

This page is about [ServiceNow](../../references-packages/servicenow/index).

![Package: ITSM/ServiceNow](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Packages_servicenow_V603.png)

## Overview

ServiceNow is a cloud-based company that provides software as a service (SaaS) for technical management support. The company specializes in IT service management (ITSM), IT operations management (ITOM) and IT business management (ITBM), allowing users to manage projects, teams and customer interactions via a variety of apps and plugins.  
This section focuses on ServiceNow Entity Management. To learn about how to use this connector to create tickets for other resources, see [ServiceNow Ticket](../../references-packages/servicenow-ticket/index "ServiceNow Ticket").

## Prerequisites

Implementing this connector requires:

* reading first the appsettings documentation;
* a service account with the **snc\_platform\_rest\_api\_access** role, as well as reading and writing permissions on the target ServiceNow instance;
* the version ServiceNow London or later;
* the appropriate configuration in ServiceNow of authentication, Basic or OAuth.

## Export

This connector exports to CSV files ServiceNow's tables (Users, Groups, Group Memberships).

An incremental search is possible to retrieve added and updated records but a full delta (including deleted items) can't be performed.

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

> The following example retrieves from users only those that are active, and no filter is applied to the other tables. A single request can retrieve up to 5,000 entries, no more. This means that if there are 6,000 `sys_user` to retrieve, then all of them will be retrieved but with two requests.
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

| Name | Details |
| --- | --- |
| Server required | **Type**  String  **Description** URL of the ServiceNow Server Table API endpoint. [See ServiceNow Official API Reference](https://developer.servicenow.com/dev.do#!/reference/api/latest/rest/c_TableAPI). **Info:** the URL must start with `https`. |
| Login required | **Type**  String  **Description** Username of the service account used to connect to the server. |
| Password required | **Type**  String  **Description** Password of the service account used to connect to the server. |
| ClientId optional | **Type**  String  **Description** Client Id used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications). |
| ClientSecret optional | **Type**  String  **Description** Client Secret used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications). |
| OAuth2Url optional | **Type**  String  **Description** Application endpoint used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications). |

|  |  |
| --- | --- |
| Server required | **Type**  String  **Description** URL of the ServiceNow Server Table API endpoint. [See ServiceNow Official API Reference](https://developer.servicenow.com/dev.do#!/reference/api/latest/rest/c_TableAPI). **Info:** the URL must start with `https`. |
| Login required | **Type**  String  **Description** Username of the service account used to connect to the server. |
| Password required | **Type**  String  **Description** Password of the service account used to connect to the server. |
| ClientId optional | **Type**  String  **Description** Client Id used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications). |
| ClientSecret optional | **Type**  String  **Description** Client Secret used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications). |
| OAuth2Url optional | **Type**  String  **Description** Application endpoint used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications). |

### Output details

This connector is meant to generate to the [Application Settings](../../../network-configuration/agent-configuration/appsettings/index "Application Settings")Export Output folder one CSV file for each table, named `_.csv`.

Identity Manager lists the tables to retrieve based on [Entity Type Mapping](../../../toolkit/xml-configuration/connectors/entitytypemapping/index "Entity Type Mapping")'s and [Entity Association Mapping](../../../toolkit/xml-configuration/connectors/entityassociationmapping/index "EntityAssociationMapping")'s connection tables.

:::note
For the connector to work properly, the connection tables must follow the naming convention too: \_.
:::

> For example, with the following configuration:
>
> ```
>
>                />
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
> ```
> ServiceNowExportFulfillment_sys_group.csv
> sys_id,name,description
> ...
>
> ```
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

| Name | Details |
| --- | --- |
| Server required | **Type**  String  **Description** URL of the ServiceNow Server Table API endpoint. [See ServiceNow Official API Reference](https://developer.servicenow.com/dev.do#!/reference/api/latest/rest/c_TableAPI). **Info:** the URL must start with `https`. |
| Login required | **Type**  String  **Description** Username of the service account used to connect to the server. |
| Password required | **Type**  String  **Description** Password of the service account used to connect to the server. |
| ClientId optional | **Type**  String  **Description** Client Id used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications). |
| ClientSecret optional | **Type**  String  **Description** Client Secret used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications). |
| OAuth2Url optional | **Type**  String  **Description** Application endpoint used (and required) with [OAuth](https://docs.servicenow.com/bundle/latest-platform-administration/page/administer/security/concept/c_OAuthApplications). |

## Authentication

### Password reset

See the [appsettings.agent](../../../network-configuration/agent-configuration/appsettings-agent/index "appsettings.agent") topic to learn more on how to configure password reset settings.

When setting a password for an ServiceNow user, the password attribute is defined by the password specified in the corresponding [Resource Type Mappings](../../../toolkit/xml-configuration/connectors/resourcetypemappings/index "Resource Type Mappings").

### Credentials protection

Data protection can be ensured through:

* [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection"), configured in the `appsettings.encrypted.agent.json` file;
* An [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection") safe;

| Attribute | Naming Convention for the Key in Azure Key Vault |
| --- | --- |
| Server | `Connections----Server` |
| Login | `Connections----Login` |
| Password | `Connections----Password` |
| ClientId | `Connections----ClientId` |
| ClientSecret | `Connections----ClientSecret` |
| OAuth2Url | `Connections----OAuth2Url` |
| Filter | `Connections----Filter` |
| ResponseSizeLimit | `Connections----ResponseSizeLimit` |

* A [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection") able to store Active Directory's `Login`, `Password`, `Server`, `ClientId` and `ClientSecret`.

Protected attributes are stored inside a safe in CyberArk, into an account whose identifier can be retrieved by Identity Manager from `appsettings.cyberark.agent.json`.

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
---
sidebar_position: 1216
title: ServiceNowTicket
---

# ServiceNowTicket

This connector opens tickets in [ServiceNow](https://www.servicenow.com/) for manual provisioning.

This page is about [ServiceNow Ticket](../../references-packages/servicenow-ticket/index "ServiceNow Ticket").

![Package: Ticket/ServiceNow](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Packages_servicenowticket_V603.png)

## Overview

ServiceNow is a cloud-based company that provides software as a service (SaaS) for technical management support. The company specializes in IT service management (ITSM), IT operations management (ITOM) and IT business management (ITBM), allowing users to manage projects, teams and customer interactions via a variety of apps and plugins.  
This section focuses on ServiceNow ticket creation for the fulfillment of resources that can't or shouldn't be performed with an existing fulfill. To learn about how to manage entities, see [ServiceNow](../servicenowentitymanagement/index)Entity Management.

## Prerequisites

Implementing this connector requires:

* reading first the [appsettings.agent](../../../network-configuration/agent-configuration/appsettings-agent/index "appsettings.agent")documentation;
* a service account with the **snc\_platform\_rest\_api\_access** role, as well as reading and writing permissions on the target ServiceNow instance;
* the version ServiceNow London or later;
* the appropriate configuration in ServiceNow of authentication, Basic or OAuth.

## Export

This connector exports some of ServiceNow entities, see the export capabilities of the [ServiceNow](../servicenowentitymanagement/index)connector. Some entities cannot be exported.

## Fulfill

This connector writes to ServiceNow to create incident and request tickets containing information to create, update or delete a resource. It does not create nor update a resource directly.

Once created, the ticket is managed in ServiceNow, not in Identity Manager.

When the ticket is closed or canceled, Identity Manager updates the [Entitlement Assignment](../../../role-assignment/assignments-of-entitlements/index) of the resource accordingly.

See the fulfill capabilities of the [ServiceNow](../servicenowentitymanagement/index)connector.

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

See the [appsettings.agent](../../../network-configuration/agent-configuration/appsettings-agent/index "appsettings.agent") topic to learn more on how to configure password reset settings.

When setting a password for a ServiceNow user, the password attribute is set to the chosen value and the user's **password\_needs\_reset** attribute is set to `true`.

### Credential protection

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
| TicketCookieDirectoryPath | `Connections----TicketCookieDirectoryPath` |
| ResponseSizeLimit | `Connections----ResponseSizeLimit` |

* a [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection") able to store Active Directory's `Login`, `Password`, `Server`, `ClientId` and `ClientSecret`.

Protected attributes are stored inside a safe in CyberArk, into an account whose identifier can be retrieved by Identity Manager from `appsettings.cyberark.agent.json`.

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
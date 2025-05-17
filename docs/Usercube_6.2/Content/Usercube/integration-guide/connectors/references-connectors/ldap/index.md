---
sidebar_position: 1196
title: LDAP
---

# LDAP

This connector exports and fulfills entries from/to an [LDAP](https://ldap.com/)-compliant system.

This page is about:

* [Generic LDAP](../../references-packages/generic-ldap/index "Generic LDAP");
* [Oracle LDAP](../../references-packages/oracle-ldap/index "Oracle LDAP");
* [Apache Directory](../../references-packages/apache-directory/index);
* [Red Hat Directory Server](../../references-packages/red-hat-directory-server/index).

![Package: Directory/Generic LDAP](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Packages_ldapgeneric_V603.png)

![Package: Directory/Oracle LDAP](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Packages_ldaporacle_V603.png)

![Package: Directory/Apache Directory](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Packages_ldapapache_V603.png)

![Package: Directory/Red Hat Directory Server](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Packages_ldapredhat_V603.png)

## Overview

The Lightweight Directory Access Protocol (LDAP) is a flexible and well supported standards-based mechanism for interacting with directory servers.

## Prerequisites

Implementing this connector requires reading first the [appsettings.agent](../../../network-configuration/agent-configuration/appsettings-agent/index "appsettings.agent")documentation.

## Export

For a configured set of LDAP entries, this connector exports the list of all attributes from the connector's configuration.

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

> For example:
>
> ```
> appsettings.agent.json
> {
>     "Connections": {
>         ...
>         "LDAPExport": {
>             "Servers": [
>                 {
>                     "Server": "contoso.server.com",
>                     "AuthType": "Basic",
>                     "Login": "Contoso",
>                     "Password": "ContOso$123456789",
>                     "Controls": [
>                         "PagedResult",
>                         "DomainScope"
>                     ],
>                     "NoSigning": false,
>                     "EnableSSL": true
>                 }
>             ],
>             "Tables": [
>                 {
>                     "Table": "entries",
>                     "BaseDN": "DC=contoso,DC=com",
>                     "Filter": "(objectclass=*)",
>                     "Scope": "Subtree"
>                 },
>                 {
>                     "Table": "member",
>                     "BaseDN": "DC=contoso,DC=com",
>                     "Filter": "(&(member=*)(objectclass=groupOfEntries))",
>                     "Scope": "Subtree"
>                 }
>             ],
>             "SizeLimit": 5000,
>             "TimeLimit": 5,
>             "TimeOut": 30
>         }
>     }
> }
> ```
#### Setting attributes

| Name | Details |
| --- | --- |
| Servers required | **Type**  Server List  **Description** List of servers to connect to. |
| Tables required | **Type**  Table List  **Description** List of specific setting attributes to retrieve entries and links. **Note:** having a table named `entries` is mandatory. |
| SizeLimit optional | **Type**  Int32  **Description** Maximum number of objects returned in the search request. **Note:** ignored when using `Servers`:`Controls`. |
| TimeLimit optional | **Type**  Int32  **Description** Maximum duration (in seconds) of the request. |
| TimeOut optional | **Type**  Int32  **Description** Time period (in seconds) before the connection to the LDAP is closed. |

##### Servers

| Name | Details |
| --- | --- |
| Server required | **Type**  String  **Description** URL of the target domain controller. |
| Controls optional | **Type**  String List  **Description** List of the controls that will be applied to the request. Possible values are:  `PagedResult` to limit the number of returned queries. Results will be returned in smaller and limited packets. `DomainScope` to enable domain control, i.e. the LDAP server won't generate any referrals when completing a request, and the search is restricted to a single name context.  **Note:**`PagedResult` is required when using `DomainScope`. [See more details in Microsoft's documentation](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ldap/ldap-server-domain-scope-oid). |

|  |  |
| --- | --- |
| EnableSSL optional | **Type**  Boolean  **Description** `True` to enable SSL protocol for authentication requests. **Note:** recommended when using `AuthType` set to `Basic` because basic authentication packets are not encrypted by default. **Info:** SSL is not available on Linux. |
| NoSigning optional | **Type**  Boolean  **Description** `True` to disable Kerberos encryption. |

|  |  |
| --- | --- |
| AuthType default value: Negotiate | **Type**  String  **Description** Authentication method used by Identity Manager to authenticate to the server. Access is granted to the target domain controller:  `Anonymous` - without any login/password; `Basic` - via the `BaseDN`, `Login` and `Password` attributes; `Negotiate` - via GSS-API negotiations with the Kerberos mechanism used for authentication. |
| Login optional | **Type**  String  **Description** Login used by Identity Manager for basic authentication. **Note:** required when `AuthType` is set to `Basic`. |
| Password optional | **Type**  String  **Description** Password used by Identity Manager for basic authentication. **Note:** required when `AuthType` is set to `Basic`. |

##### Tables

| Name | Details |
| --- | --- |
| BaseDN required | **Type**  String  **Description** Base Distinguished Name to be used to connect to the server. |
| Table required | **Type**  String  **Description** Name of the table: it should be `entries` for the main entries, and the name of the LDAP's link attribute otherwise. |

|  |  |
| --- | --- |
| Filter required | **Type**  String  **Description** Entries to be excluded from export among all entries from the LDAP instance. Only non-filtered entries are exported. The filter must use [Microsoft's search filter syntax](https://docs.microsoft.com/en-us/windows/win32/adsi/search-filter-syntax). |
| Scope optional | **Type**  String  **Description** Search scope to be applied to the request. The result will be limited to:  `Base` - the base of the object; `OneLevel` - the immediate children of the object; `Subtree` - the entire subtree from the base object down. |

### Output details

This connector is meant to generate to the [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection") folder one file per element in **Tables**, named `_.csv`, with one column for each property having a `ConnectionColumn` and each property without it but used in an entity association.

Any property can be exported in a specific format when specified. See the [References: Format for the EntityPropertyMapping](../../entitypropertymapping-format/index "References: Format for the EntityPropertyMapping") topic for additional information.

> With the previous example and the following entity type mapping:
>
> ```
>
>                             
>
> ```
>
> We would have `C:/UsercubeContoso/Temp/ExportOutput/LDAPExport_entries.csv` like:
>
> ```
> LDAPExport_entries.csv
> displayName,dn,entryUuid,objectClass,ou,parentdn
> ...
>
> ```
>
> And we would also have `C:/UsercubeContoso/Temp/ExportOutput/LDAPExport_member.csv` like:
>
> ```
> LDAPExport_member.csv
> dn,member
> ...
>
> ```
## Fulfill

The LDAP connector fulfills the creation, deletion and update of LDAP entries, initiated through the Identity Manager UI or by [Evaluate Policy](../../../role-assignment/evaluate-policy/index "Evaluate Policy") enforcement.

### Configuration

Same as for export, fulfill is configured through connections.

> For example:
>
> ```
> appsettings.agent.json
> {
>     ...
>     "Connections": {
>         ...
>         "LDAPFulfillment": {
>             "Servers": [
>                 {
>                     "Server": "contoso.server.com",
>                     "AuthType": "Basic",
>                     "Login": "Contoso",
>                     "Password": "ContOso$123456789"
>                 }
>             ],
>             "Tables": [
>                 {
>                     "Table": "entries",
>                     "BaseDN": "DC=contoso,DC=com"
>                 }
>             ],
>             "IsLdapPasswordReset": true,
>             "AsAdLds": false
>         }
>     }
> }
> ```
#### Setting attributes

| Name | Details |
| --- | --- |
| Servers required | **Type**  [Server](#servers) List  **Description** List of servers to connect to. |
| Tables required | **Type**  [Table](#tables) List  **Description** List of specific setting attributes to retrieve the entries and the links. **Note:** having a table named `entries` is mandatory. |
| AsAdLds required | **Type**  Boolean  **Description** `True` to state the managed system as an AD LDS. |
| IsLdapPasswordReset optional | **Type**  Boolean  **Description** `True` to state the managed system as an LDAP-compliant system supporting password reset. |

### Output details

This connector can create a new resource, and update and delete an existing resource via the UI.

A new resource is created with the state `disabled`, corresponding to the **useraccountcontrol** value `514`. When it is approved, its `disabled` state is removed and the **useraccountcontrol** value becomes `512`.

### Add attributes to the requests

Some systems using the LDAP protocol require additional attributes in the creation and/or update requests.

If these attributes are not synchronized in Identity Manager, then they cannot be computed and provided by scalar rules or navigation rules. In this case, they can be given as arguments in the provisioning order, through the `ResourceType`'s `ArgumentsExpression`.

> The following example adds the attribute `description` with a value depending on what is modified:
>
> ```
>
>  ArgumentsExpression="C#:resource:
>   var arguments = new System.Collections.Generic.Dictionary();
>
>   if (provisioningOrder.HasChanged("cn")) {
>     arguments.Add("description", "This entry's login has been modified by Usercube.");
>   }
>   else if (provisioningOrder.HasChanged("mail")) {
>     arguments.Add("description", "This entry's email has been modified by Usercube.");
>   }
>   else {
>     arguments.Add("description", "This entry has been modified by Usercube.");
>   }
>
>   return arguments;">
>
>                 
>
> ```
## Authentication

### Password reset

See the [appsettings.agent](../../../network-configuration/agent-configuration/appsettings-agent/index "appsettings.agent") topic to learn how to configure password reset settings.

### Credential protection

Data protection can be ensured through:

* [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection"), configured in the `appsettings.encrypted.agent.json` file;
* An [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection") safe;

* a [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection") able to store LDAP's `Login`, `Password` and `Server`.
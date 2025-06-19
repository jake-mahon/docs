# LDAP

This connector exports and fulfills entries from/to an [LDAP](https://ldap.com/)-compliant system.

This page is about:

- [Directory/Generic LDAP](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/ldap.md);
- [Directory/Oracle LDAP](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/ldap.md);
- [Directory/Apache Directory](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md);
- [Directory/Red Hat Directory Server](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md).

![Package: Directory/Generic LDAP](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/ldap/packages_ldapgeneric_v603.webp)

![Package: Directory/Oracle LDAP](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/ldap/packages_ldaporacle_v603.webp)

![Package: Directory/Apache Directory](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/ldap/packages_ldapapache_v603.webp)

![Package: Directory/Red Hat Directory Server](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/ldap/packages_ldapredhat_v603.webp)

## Overview

The Lightweight Directory Access Protocol (LDAP) is a flexible and well supported standards-based
mechanism for interacting with directory servers.

## Prerequisites

Implementing this connector requires reading first the
[appsettings documentation](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md).

## Export

For a configured set of LDAP entries, this connector exports the list of all attributes from the
connector's configuration.

### Configuration

This process is configured through a
[connection](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
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

| Name               | Details                                                                                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Servers required   | **Type** Server List **Description** List of servers to connect to.                                                                                           |
| Tables required    | **Type** Table List **Description** List of specific setting attributes to retrieve entries and links. **Note:** having a table named `entries` is mandatory. |
| SizeLimit optional | **Type** Int32 **Description** Maximum number of objects returned in the search request. **Note:** ignored when using `Servers`:`Controls`.                   |
| TimeLimit optional | **Type** Int32 **Description** Maximum duration (in seconds) of the request.                                                                                  |
| TimeOut optional   | **Type** Int32 **Description** Time period (in seconds) before the connection to the LDAP is closed.                                                          |

##### Servers

| Name                              | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Server required                   | **Type** String **Description** URL of the target domain controller.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Controls optional                 | **Type** String List **Description** List of the controls that will be applied to the request. Possible values are: `PagedResult` to limit the number of returned queries. Results will be returned in smaller and limited packets. `DomainScope` to enable domain control, i.e. the LDAP server won't generate any referrals when completing a request, and the search is restricted to a single name context. **Note:**`PagedResult` is required when using `DomainScope`. [See more details in Microsoft's documentation](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ldap/ldap-server-domain-scope-oid). |
|                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---                               | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| EnableSSL optional                | **Type** Boolean **Description** `True` to enable SSL protocol for authentication requests. **Note:** recommended when using `AuthType` set to `Basic` because basic authentication packets are not encrypted by default. **Info:** SSL is not available on Linux.                                                                                                                                                                                                                                                                                                                                                                  |
| NoSigning optional                | **Type** Boolean **Description** `True` to disable Kerberos encryption.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---                               | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| AuthType default value: Negotiate | **Type** String **Description** Authentication method used by Usercube to authenticate to the server. Access is granted to the target domain controller: `Anonymous` - without any login/password; `Basic` - via the `BaseDN`, `Login` and `Password` attributes; `Negotiate` - via GSS-API negotiations with the Kerberos mechanism used for authentication.                                                                                                                                                                                                                                                                       |
| Login optional                    | **Type** String **Description** Login used by Usercube for basic authentication. **Note:** required when `AuthType` is set to `Basic`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Password optional                 | **Type** String **Description** Password used by Usercube for basic authentication. **Note:** required when `AuthType` is set to `Basic`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

##### Tables

| Name            | Details                                                                                                                                                                                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BaseDN required | **Type** String **Description** Base Distinguished Name to be used to connect to the server.                                                                                                                                                                                           |
| Table required  | **Type** String **Description** Name of the table: it should be `entries` for the main entries, and the name of the LDAP's link attribute otherwise.                                                                                                                                   |
|                 |                                                                                                                                                                                                                                                                                        |
| ---             | ---                                                                                                                                                                                                                                                                                    |
| Filter required | **Type** String **Description** Entries to be excluded from export among all entries from the LDAP instance. Only non-filtered entries are exported. The filter must use [Microsoft's search filter syntax](https://docs.microsoft.com/en-us/windows/win32/adsi/search-filter-syntax). |
| Scope optional  | **Type** String **Description** Search scope to be applied to the request. The result will be limited to: `Base` - the base of the object; `OneLevel` - the immediate children of the object; `Subtree` - the entire subtree from the base object down.                                |

### Output details

This connector is meant to generate to the
[ExportOutput](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md)
folder one file per element in **Tables**, named `<connectionIdentifier>_<tableName>.csv`, with one
column for each property having a `ConnectionColumn` and each property without it but used in an
entity association.

Any property can be exported in a specific format when specified.
[See more details](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-configuration/entity-property-mapping.md).

> With the previous example and the following entity type mapping:
>
> ```
>
> <EntityType Identifier="LDAP_Entry" DisplayName_L1="LDAP - Entry">  <Property Identifier="displayName" DisplayName_L1="displayName" TargetColumnIndex="14" Type="String" />  <Property Identifier="dn" DisplayName_L1="dn" IsKey="true" TargetColumnIndex="0" Type="String" />  <Property Identifier="entryUuid" DisplayName_L1="objectGuid" TargetColumnIndex="3" Type="String" IsKey="true" />  <Property Identifier="objectClass" DisplayName_L1="objectClass" TargetColumnIndex="4" Type="String" />  <Property Identifier="ou" DisplayName_L1="ou" TargetColumnIndex="8" Type="String" />  <Property Identifier="ParentDn" DisplayName_L1="parentdn" Type="ForeignKey" TargetColumnIndex="128" />  <Property Identifier="children" DisplayName_L1="children" Type="ForeignKey" />  <Property Identifier="Member" DisplayName_L1="member" Type="ForeignKey" />  <Property Identifier="memberOf" DisplayName_L1="memberOf" Type="ForeignKey" /></EntityType><EntityTypeMapping Identifier="LDAP_Entry" Connector="LDAP" ConnectionTable="LDAPExport_entries.csv">  <Property Identifier="displayName" ConnectionColumn="displayName" />  <Property Identifier="dn" ConnectionColumn="dn" IsUniqueKey="true" />  <Property Identifier="entryUuid" ConnectionColumn="entryUuid" IsPrimaryKey="true" />  <Property Identifier="objectClass" ConnectionColumn="objectClass" Format="multivaluedtext" />  <Property Identifier="ou" ConnectionColumn="ou" /></EntityTypeMapping><EntityAssociation Identifier="LDAP_Entry_parentdn" DisplayName_L1="ParentDN" IsProperty1Collection="true" Property2="LDAP_Entry:ParentDn" Property1="LDAP_Entry:children" /><EntityAssociation Identifier="LDAP_Entry_member" DisplayName_L1="Member" IsProperty1Collection="true" IsProperty2Collection="true" Property1="LDAP_Entry:Member" Property2="LDAP_Entry:memberOf" /><EntityAssociationMapping Identifier="LDAP_Entry_parentdn" Column2="dn" Column1="parentdn" ConnectionTable="LDAPExport_Entries" EntityPropertyMapping1="LDAP_Entry:dn" EntityPropertyMapping2="LDAP_Entry:dn" Connector="LDAP" /><EntityAssociationMapping Identifier="LDAP_Entry_member" Column1="dn" Column2="member" ConnectionTable="LDAPExport_member" EntityPropertyMapping1="LDAP_Entry:dn" EntityPropertyMapping2="LDAP_Entry:dn" Connector="LDAP" />
>
> ```
>
> We would have `C:/identitymanagerContoso/Temp/ExportOutput/LDAPExport_entries.csv` like:
>
> ```
> LDAPExport_entries.csv
> displayName,dn,entryUuid,objectClass,ou,parentdn
> ...
>
> ```
>
> And we would also have `C:/identitymanagerContoso/Temp/ExportOutput/LDAPExport_member.csv` like:
>
> ```
> LDAPExport_member.csv
> dn,member
> ...
>
> ```

## Fulfill

The LDAP connector fulfills the creation, deletion and update of LDAP entries, initiated through the
Usercube UI or by
[assignment policy enforcement](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/assignment-policies.md).

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

| Name                         | Details                                                                                                                                                               |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Servers required             | **Type** Server List **Description** List of servers to connect to.                                                                                                   |
| Tables required              | **Type** Table List **Description** List of specific setting attributes to retrieve the entries and the links. **Note:** having a table named `entries` is mandatory. |
| AsAdLds required             | **Type** Boolean **Description** `True` to state the managed system as an AD LDS.                                                                                     |
| IsLdapPasswordReset optional | **Type** Boolean **Description** `True` to state the managed system as an LDAP-compliant system supporting password reset.                                            |

### Output details

This connector can create a new resource, and update and delete an existing resource via the UI.

A new resource is created with the state `disabled`, corresponding to the **useraccountcontrol**
value `514`. When it is approved, its `disabled` state is removed and the **useraccountcontrol**
value becomes `512`.

### Add attributes to the requests

Some systems using the LDAP protocol require additional attributes in the creation and/or update
requests.

If these attributes are not synchronized in Usercube, then they cannot be computed and provided by
scalar rules or navigation rules. In this case, they can be given as arguments in the provisioning
order, through the `ResourceType`'s `ArgumentsExpression`.

> The following example adds the attribute `description` with a value depending on what is modified:
>
> ```
>
> <ResourceType Identifier="LDAP_Entry_NominativeUser" DisplayName_L1="LDAP User (nominative)" Policy="Default" TargetEntityType="LDAP_Entry" Category="Accounts" SourceEntityType="Directory_User" ApprovalWorkflowType="One" HideOnSimplifiedView="true"
> ArgumentsExpression="C#:resource:
>   var arguments = new System.Collections.Generic.Dictionary<string, string>();
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
>     <ScalarRule Property="givenName" Binding="FirstName" />    <ScalarRule Property="cn" Binding="Login" />    <ScalarRule Property="sn" Binding="LastName" />    <ScalarRule Property="employeeNumber" Binding="EmployeeId" /></ResourceType>
>
> ```

## Authentication

### Password reset

[See how to configure password reset settings](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md).

### Credential protection

Data protection can be ensured through:

- [RSA encryption](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md),
  configured in the `appsettings.encrypted.agent.json` file;
- an
  [Azure Key Vault](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md)
  safe;

- a
  [CyberArk Vault](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md)
  able to store LDAP's `Login`, `Password` and `Server`.

# OpenLDAP

This connector exports and fulfills entries from/to an [OpenLDAP](https://www.openldap.org/)
directory.

This page is about
[Directory/Open LDAP](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/ldap.md).

![Package: Directory/Open LDAP](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/openldap/packages_ldapopen_v603.webp)

## Overview

OpenLDAP is an open source implementation of the Lightweight Directory Access Protocol (LDAP).

## Prerequisites

Implementing this connector requires:

- reading first the
  [appsettings documentation](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md);
- a service account with reading and writing permissions on the target OpenLDAP server;
- enabling SyncProv Overlay for the OpenLDAP server.

  To perform a complete export without the SyncProv Overlay enabled, use rather the
  [LDAP connector](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/ldap.md).

## Export

This connector exports to CSV files the content of an OpenLDAP Directory.

### Configuration

This process is configured through a
[connection](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md)
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
>   "Connections":{
>     ...
>     "OpenLDAPExport": {
>         "Server": "contoso.server.com",
>         "DistinguishedName": "DC=contoso,DC=com",
>         "Login": "Contoso",
>         "Password": "ContOso$123456789",
>         "Filter": "(|(objectclass=person)(objectclass=ou))",
>         "Scope": "SubTree",
>         "SSL": "true"
>     }
>     ...
>   }
> }
> ```

#### Setting attributes

| Name                                   | Details                                                                                                                                                                                                                                                                                |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Server required                        | **Type** String **Description** IP address and port of the OpenLDAP server.                                                                                                                                                                                                            |
| DistinguishedName required             | **Type** String **Description** Distinguished Name of the domain controller.                                                                                                                                                                                                           |
| Login required                         | **Type** String **Description** OpenLDAP server's login.                                                                                                                                                                                                                               |
| Password required                      | **Type** String **Description** OpenLDAP server's password.                                                                                                                                                                                                                            |
| SSL optional                           | **Type** Boolean **Description** `True` to enable SSL (Secure Socket Layer) protocol for authentication requests.                                                                                                                                                                      |
|                                        |                                                                                                                                                                                                                                                                                        |
| ---                                    | ---                                                                                                                                                                                                                                                                                    |
| TimeFormat default value: 60           | **Type** Int32 **Description** Timeout (in seconds) for the export's requests to the targeted server.                                                                                                                                                                                  |
| WaitingTimeInSeconds default value: 30 | **Type** Int32 **Description** Time period (in seconds) during which pulling for changes is not allowed during the persistent phase.                                                                                                                                                   |
|                                        |                                                                                                                                                                                                                                                                                        |
| ---                                    | ---                                                                                                                                                                                                                                                                                    |
| Filter required                        | **Type** String **Description** Entries to be excluded from export among all entries from the LDAP instance. Only non-filtered entries are exported. The filter must use [Microsoft's search filter syntax](https://docs.microsoft.com/en-us/windows/win32/adsi/search-filter-syntax). |
| Scope optional                         | **Type** String **Description** Search scope to be applied to the request. The result will be limited to: `Base` - the base of the object; `OneLevel` - the immediate children of the object; `Subtree` - the entire subtree from the base object down.                                |

### Output details

This connector is meant to generate to the
[`ExportOutput`](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md)
folder:

- a CSV file, named `<connectionIdentifier>_entry.csv`, with one column for each property having a
  `ConnectionColumn` and each property without it but used in an entity association;

  Any property can be exported in a specific format when specified.
  [See more details](/docs/identitymanager/6.1/identitymanager/connectors-integration/connector-configuration/entity-property-mapping.md).

- a CSV file for each `ConnectionTable` in a related `EntityTypeMapping` or
  `EntityAssociationMapping`, and which is not an `entry`, named
  `<connectionIdentifier>_<ConnectionTableName>.csv`;

  > For example, `OpenLDAPExport_member` as `ConnectionTable` in a mapping will generate the file
  > `OpenLDAPExport_member.csv` with `member` as link attribute.

- `<connectionIdentifier>_cookie.bin` which stores the time of the last successful export, thus
  allowing incremental processes.

  Most exports can be run in complete mode, where the CSV files will contain all entries, or in
  incremental mode, where CSV files will contain only the entries which have been modified since
  the last synchronization.

  A task can use the `IgnoreCookieFile` boolean property, and a command line (with an executable)
  can use the option `--ignore-cookies`.

The CSV files are stored in the
[ExportOutput](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md)
folder, and the cookie file in the
[ExportCookies](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md)
folder.

> For example, with the following configuration:
>
> ```
>
> <EntityType Identifier="OpenLDAP_Entry" DisplayName_L1="OpenLDAP - Entry">  <Property Identifier="cn" DisplayName_L1="cn" TargetColumnIndex="10" Type="String" />  <Property Identifier="dn" DisplayName_L1="dn" IsKey="true" TargetColumnIndex="0" Type="String" />  <Property Identifier="entryUuid" DisplayName_L1="objectGuid" TargetColumnIndex="3" Type="String" IsKey="true" />  <Property Identifier="objectClass" DisplayName_L1="objectClass" TargetColumnIndex="4" Type="String" />  <Property Identifier="parentdn" DisplayName_L1="parentdn" Type="ForeignKey" TargetColumnIndex="128" />  <Property Identifier="children" DisplayName_L1="children" Type="ForeignKey" />  <Property Identifier="member" DisplayName_L1="member" Type="ForeignKey" />  <Property Identifier="memberOf" DisplayName_L1="memberOf" Type="ForeignKey" /></EntityType><EntityTypeMapping Identifier="OpenLDAP_Entry" Connector="OpenLDAP" ConnectionTable="OpenLDAPExport_entry">  <Property Identifier="entryUuid" ConnectionColumn="entryUuid" IsPrimaryKey="true" />  <Property Identifier="cn" ConnectionColumn="cn" />  <Property Identifier="dn" ConnectionColumn="dn" IsUniqueKey="true" />  <Property Identifier="objectClass" ConnectionColumn="objectClass" Format="multivaluedtext" /></EntityTypeMapping><EntityAssociation Identifier="OpenLDAP_Entry_parentdn" DisplayName_L1="parentdn" IsProperty1Collection="true" Property2="OpenLDAP_Entry:parentdn" Property1="OpenLDAP_Entry:children" /><EntityAssociation Identifier="OpenLDAP_Entry_member" DisplayName_L1="member" IsProperty1Collection="true" IsProperty2Collection="true" Property1="OpenLDAP_Entry:member" Property2="OpenLDAP_Entry:memberOf" /><EntityAssociationMapping Identifier="OpenLDAP_Entry_parentdn" Column2="dn" Column1="parentdn" ConnectionTable="OpenLDAPExport_entry.csv" EntityPropertyMapping1="OpenLDAP_Entry:dn" EntityPropertyMapping2="OpenLDAP_Entry:dn" Connector="OpenLDAP" /><EntityAssociationMapping Identifier="OpenLDAP_Entry_member" Column1="dn" Column2="member" ConnectionTable="OpenLDAPExport_member.csv" EntityPropertyMapping1="OpenLDAP_Entry:dn" EntityPropertyMapping2="OpenLDAP_Entry:dn" Connector="OpenLDAP" />
>
> ```
>
> We would have `C:/identitymanagerContoso/Temp/ExportOutput/OpenLDAPExport.csv` like:
>
> ```
> entry.csv
> Command,entryUUID,dn,cn,objectClass,parentdn
> Insert,value1,value2,...,valueN
> ```
>
> And we would also have `C:/identitymanagerContoso/Temp/ExportOutput/OpenLDAPExport_member.csv` like:
>
> ```
> LDAPExport_member.csv
> Command,entryUUID,member
> Insert,value1,value2,...,valueN
> ```

## Fulfill

This connector fulfills via the LDAP connector's fulfill process.

The LDAP connector fulfills the creation, deletion and update of LDAP entries, initiated through the
Usercube UI or by
[assignment policy enforcement](/docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/assignment-policies.md).

### Configuration

Same as for export, fulfill is configured through connections.

> ```
> appsettings.agent.json
> {
>     ...
>     "Connections": {
>         ...
>         "OpenLDAPFulfillment": {
>             "Server": "contoso.server.com",
>             "DistinguishedName": "DC=contoso,DC=com",
>             "Login": "Contoso",
>             "Password": "ContOso$123456789",
>             "SSL": "true",
>             "IsLdapPasswordReset": "true"
>         }
>     }
> }
> ```

#### Setting attributes

|                              |                                                                                                                                                                                                                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Filter required              | **Type** String **Description** Entries to be excluded from export among all entries from the LDAP instance. Only non-filtered entries are exported. The filter must use [Microsoft's search filter syntax](https://docs.microsoft.com/en-us/windows/win32/adsi/search-filter-syntax). |
| Scope optional               | **Type** String **Description** Search scope to be applied to the request. The result will be limited to: `Base` - the base of the object; `OneLevel` - the immediate children of the object; `Subtree` - the entire subtree from the base object down.                                |
|                              |                                                                                                                                                                                                                                                                                        |
| ---                          | ---                                                                                                                                                                                                                                                                                    |
| IsLdapPasswordReset optional | **Type** Boolean **Description** `True` to state the managed system as an LDAP-compliant system supporting password reset.                                                                                                                                                             |

### Output details

This connector can create a new resource, and update and delete an existing resource via the UI.

A new resource is created with the state `disabled`, corresponding to the **useraccountcontrol**
value `514`. When it is approved, its `disabled` state is removed and the **useraccountcontrol**
value becomes `512`.

### Add attributes to the requests

Some systems using the LDAP protocol require additional attributes in the creation and/or update
requests.

If these attributes are not synchronized in Usercube, then they cannot be computed and provided by
scalar rules or navigation rules. In this case, they can be given as arguments in the provisioning
order, through the `ResourceType`'s `ArgumentsExpression`.

> The following example adds the attribute `description` with a value depending on what is modified:
>
> ```
>
> <ResourceType Identifier="LDAP_Entry_NominativeUser" DisplayName_L1="LDAP User (nominative)" Policy="Default" TargetEntityType="LDAP_Entry" Category="Accounts" SourceEntityType="Directory_User" ApprovalWorkflowType="One" HideOnSimplifiedView="true"
> ArgumentsExpression="C#:resource:
>   var arguments = new System.Collections.Generic.Dictionary<string, string>();
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
>     <ScalarRule Property="givenName" Binding="FirstName" />    <ScalarRule Property="cn" Binding="Login" />    <ScalarRule Property="sn" Binding="LastName" />    <ScalarRule Property="employeeNumber" Binding="EmployeeId" /></ResourceType>
>
> ```

## Authentication

### Credential protection

Data protection can be ensured through:

- [RSA encryption](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md),
  configured in the `appsettings.encrypted.agent.json` file;
- an
  [Azure Key Vault](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md)
  safe;

- a
  [CyberArk Vault](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md)
  able to store OpenLDAP's `Login`, `Password` and `Server`.

# Generic LDAP

Manages entries in an LDAP compliant directory.

| Package Characteristics | Value                     |
| ----------------------- | ------------------------- |
| Display Name            | Directory/Generic LDAP    |
| Identifier              | Usercube.LDAP@0000001     |
| Export                  | Usercube-Export-Ldap.dll  |
| Fulfill                 | Usercube-Fulfill-Ldap.dll |
| Has Incremental Mode    | False                     |
| Publisher               | Usercube                  |

# Open LDAP

Manages entries in Open LDAP. This package supports incremental synchronization with the sysrepl
mechanism.

| Package Characteristics | Value                        |
| ----------------------- | ---------------------------- |
| Display Name            | Directory/Open LDAP          |
| Identifier              | Usercube.OpenLDAP@0000001    |
| Export                  | Usercube-Export-OpenLdap.dll |
| Fulfill                 | Usercube-Fulfill-Ldap.dll    |
| Has Incremental Mode    | True                         |
| Publisher               | Usercube                     |

# Oracle LDAP

Manages entries in Oracle Internet Directory.

| Package Characteristics | Value                        |
| ----------------------- | ---------------------------- |
| Display Name            | Directory/Oracle LDAP        |
| Identifier              | Usercube.LDAP.Oracle@0000001 |
| Export                  | Usercube-Export-Ldap.dll     |
| Fulfill                 | Usercube-Fulfill-Ldap.dll    |
| Has Incremental Mode    | False                        |
| Publisher               | Usercube                     |

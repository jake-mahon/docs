# LDAP

This connector exports and fulfills entries from/to an [LDAP](https://ldap.com/)-compliant system.

This page is about:

- [
  Generic LDAP
  ](../../references-packages/generic-ldap/index.md);
- [
  Oracle LDAP
  ](../../references-packages/oracle-ldap/index.md);
- [
  Apache Directory
  ](../../references-packages/apache-directory/index.md);
- [
  Red Hat Directory Server
  ](../../references-packages/red-hat-directory-server/index.md).

![Package: Directory/Generic LDAP](../../../../../../../static/img/product_docs/usercube/usercube/integration-guide/connectors/references-connectors/ldap/packages_ldapgeneric_v603.webp)

![Package: Directory/Oracle LDAP](../../../../../../../static/img/product_docs/usercube/usercube/integration-guide/connectors/references-connectors/ldap/packages_ldaporacle_v603.webp)

![Package: Directory/Apache Directory](../../../../../../../static/img/product_docs/usercube/usercube/integration-guide/connectors/references-connectors/ldap/packages_ldapapache_v603.webp)

![Package: Directory/Red Hat Directory Server](../../../../../../../static/img/product_docs/usercube/usercube/integration-guide/connectors/references-connectors/ldap/packages_ldapredhat_v603.webp)

## Overview

The Lightweight Directory Access Protocol (LDAP) is a flexible and well supported standards-based mechanism for interacting with directory servers.

## Prerequisites

Implementing this connector requires reading first the [appsettings.agent](../../../network-configuration/agent-configuration/appsettings-agent/index.md)documentation.

## Export

For a configured set of LDAP entries, this connector exports the list of all attributes from the connector's configuration.

### Configuration

This process is configured through a [
Connection
](../../../toolkit/xml-configuration/connectors/connection/index.md) in the UI and/or the XML configuration, and in the ```appsettings.agent.json > Connections``` section:

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
  
- not contain ```<```, ```>```, ```:```, ```"```, ```/```, ```\```, ```|```, ```?```, ```*``` and ```_```.

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
| Servers   required | __Type__    Server List   __Description__ List of servers to connect to. |
| Tables   required | __Type__    Table List   __Description__ List of specific setting attributes to retrieve entries and links.   __Note:__ having a table named ```entries``` is mandatory. |
| SizeLimit   optional | __Type__    Int32   __Description__ Maximum number of objects returned in the search request.   __Note:__ ignored when using ```Servers```:```Controls```. |
| TimeLimit   optional | __Type__    Int32   __Description__ Maximum duration (in seconds) of the request. |
| TimeOut   optional | __Type__    Int32   __Description__ Time period (in seconds) before the connection to the LDAP is closed. |

##### Servers

| Name | Details |
| --- | --- |
| Server   required | __Type__    String   __Description__ URL of the target domain controller. |
| Controls   optional | __Type__    String List   __Description__ List of the controls that will be applied to the request. Possible values are:   ```PagedResult``` to limit the number of returned queries. Results will be returned in smaller and limited packets.   ```DomainScope``` to enable domain control, i.e. the LDAP server won't generate any referrals when completing a request, and the search is restricted to a single name context.   __Note:__```PagedResult``` is required when using ```DomainScope```. [See more details in Microsoft's documentation](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ldap/ldap-server-domain-scope-oid). |
|  |  |
| --- | --- |
| EnableSSL   optional | __Type__    Boolean   __Description__ ```True``` to enable SSL protocol for authentication requests.   __Note:__ recommended when using ```AuthType``` set to ```Basic``` because basic authentication packets are not encrypted by default.   __Info:__ SSL is not available on Linux. |
| NoSigning   optional | __Type__    Boolean   __Description__ ```True``` to disable Kerberos encryption. |
|  |  |
| --- | --- |
| AuthType   default value: Negotiate | __Type__    String   __Description__ Authentication method used by Identity Manager to authenticate to the server. Access is granted to the target domain controller:   ```Anonymous``` - without any login/password;   ```Basic``` - via the ```BaseDN```, ```Login``` and ```Password``` attributes;   ```Negotiate``` - via GSS-API negotiations with the Kerberos mechanism used for authentication. |
| Login   optional | __Type__    String   __Description__ Login used by Identity Manager for basic authentication.   __Note:__ required when ```AuthType``` is set to ```Basic```. |
| Password   optional | __Type__    String   __Description__ Password used by Identity Manager for basic authentication.   __Note:__ required when ```AuthType``` is set to ```Basic```. |

##### Tables

| Name | Details |
| --- | --- |
| BaseDN   required | __Type__    String   __Description__ Base Distinguished Name to be used to connect to the server. |
| Table   required | __Type__    String   __Description__ Name of the table: it should be ```entries``` for the main entries, and the name of the LDAP's link attribute otherwise. |
|  |  |
| --- | --- |
| Filter   required | __Type__    String   __Description__ Entries to be excluded from export among all entries from the LDAP instance. Only non-filtered entries are exported. The filter must use [Microsoft's search filter syntax](https://docs.microsoft.com/en-us/windows/win32/adsi/search-filter-syntax). |
| Scope   optional | __Type__    String   __Description__ Search scope to be applied to the request. The result will be limited to:   ```Base``` - the base of the object;   ```OneLevel``` - the immediate children of the object;   ```Subtree``` - the entire subtree from the base object down. |

### Output details

This connector is meant to generate to the [Application Settings](../../../network-configuration/agent-configuration/appsettings/index.md)Export Output folder one file per element in __Tables__, named ```<connectionIdentifier>_<tableName>.csv```, with one column for each property having a ```ConnectionColumn``` and each property without it but used in an entity association.

Any property can be exported in a specific format when specified. See the [
References: Format for the EntityPropertyMapping
](../../entitypropertymapping-format/index.md) topic for additional information.

> With the previous example and the following entity type mapping:
>
> ```
>
> <EntityType Identifier="LDAP_Entry" DisplayName_L1="LDAP - Entry">  <Property Identifier="displayName" DisplayName_L1="displayName" TargetColumnIndex="14" Type="String" />  <Property Identifier="dn" DisplayName_L1="dn" IsKey="true" TargetColumnIndex="0" Type="String" />  <Property Identifier="entryUuid" DisplayName_L1="objectGuid" TargetColumnIndex="3" Type="String" IsKey="true" />  <Property Identifier="objectClass" DisplayName_L1="objectClass" TargetColumnIndex="4" Type="String" />  <Property Identifier="ou" DisplayName_L1="ou" TargetColumnIndex="8" Type="String" />  <Property Identifier="ParentDn" DisplayName_L1="parentdn" Type="ForeignKey" TargetColumnIndex="128" />  <Property Identifier="children" DisplayName_L1="children" Type="ForeignKey" />  <Property Identifier="Member" DisplayName_L1="member" Type="ForeignKey" />  <Property Identifier="memberOf" DisplayName_L1="memberOf" Type="ForeignKey" /></EntityType><EntityTypeMapping Identifier="LDAP_Entry" Connector="LDAP" ConnectionTable="LDAPExport_entries.csv">  <Property Identifier="displayName" ConnectionColumn="displayName" />  <Property Identifier="dn" ConnectionColumn="dn" IsUniqueKey="true" />  <Property Identifier="entryUuid" ConnectionColumn="entryUuid" IsPrimaryKey="true" />  <Property Identifier="objectClass" ConnectionColumn="objectClass" Format="multivaluedtext" />  <Property Identifier="ou" ConnectionColumn="ou" /></EntityTypeMapping><EntityAssociation Identifier="LDAP_Entry_parentdn" DisplayName_L1="ParentDN" IsProperty1Collection="true" Property2="LDAP_Entry:ParentDn" Property1="LDAP_Entry:children" /><EntityAssociation Identifier="LDAP_Entry_member" DisplayName_L1="Member" IsProperty1Collection="true" IsProperty2Collection="true" Property1="LDAP_Entry:Member" Property2="LDAP_Entry:memberOf" /><EntityAssociationMapping Identifier="LDAP_Entry_parentdn" Column2="dn" Column1="parentdn" ConnectionTable="LDAPExport_Entries" EntityPropertyMapping1="LDAP_Entry:dn" EntityPropertyMapping2="LDAP_Entry:dn" Connector="LDAP" /><EntityAssociationMapping Identifier="LDAP_Entry_member" Column1="dn" Column2="member" ConnectionTable="LDAPExport_member" EntityPropertyMapping1="LDAP_Entry:dn" EntityPropertyMapping2="LDAP_Entry:dn" Connector="LDAP" />
>
> ```
>
> We would have ```C:/UsercubeContoso/Temp/ExportOutput/LDAPExport_entries.csv``` like:
>
> ```
> LDAPExport_entries.csv
> displayName,dn,entryUuid,objectClass,ou,parentdn
> ...
>
> ```
>
> And we would also have ```C:/UsercubeContoso/Temp/ExportOutput/LDAPExport_member.csv``` like:
>
> ```
> LDAPExport_member.csv
> dn,member
> ...
>
> ```

## Fulfill

The LDAP connector fulfills the creation, deletion and update of LDAP entries, initiated through the Identity Manager UI or by assignment policy enforcement. See the [Evaluate Policy](../../../role-assignment/evaluate-policy/index.md) topic for additional information.

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
| Servers   required | __Type__    Server List   __Description__ List of servers to connect to. |
| Tables   required | __Type__    Table List   __Description__ List of specific setting attributes to retrieve the entries and the links.   __Note:__ having a table named ```entries``` is mandatory. |
| AsAdLds   required | __Type__    Boolean   __Description__ ```True``` to state the managed system as an AD LDS. |
| IsLdapPasswordReset   optional | __Type__    Boolean   __Description__ ```True``` to state the managed system as an LDAP-compliant system supporting password reset. |

### Output details

This connector can create a new resource, and update and delete an existing resource via the UI.

A new resource is created with the state ```disabled```, corresponding to the __useraccountcontrol__ value ```514```. When it is approved, its ```disabled``` state is removed and the __useraccountcontrol__ value becomes ```512```.

### Add attributes to the requests

Some systems using the LDAP protocol require additional attributes in the creation and/or update requests.

If these attributes are not synchronized in Identity Manager, then they cannot be computed and provided by scalar rules or navigation rules. In this case, they can be given as arguments in the provisioning order, through the ```ResourceType```'s ```ArgumentsExpression```.

> The following example adds the attribute ```description``` with a value depending on what is modified:
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

See the [appsettings.agent](../../../network-configuration/agent-configuration/appsettings-agent/index.md) topic to learn how to configure password reset settings.

### Credential protection

Data protection can be ensured through:

- [
  Connection
  ](../../../toolkit/xml-configuration/connectors/connection/index.md), configured in the ```appsettings.encrypted.agent.json``` file;
- An [
  Connection
  ](../../../toolkit/xml-configuration/connectors/connection/index.md) safe;

- [
  Connection
  ](../../../toolkit/xml-configuration/connectors/connection/index.md) able to store LDAP's ```Login```, ```Password``` and ```Server```.

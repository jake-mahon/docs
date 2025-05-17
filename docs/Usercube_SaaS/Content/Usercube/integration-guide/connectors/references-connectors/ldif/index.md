---
sidebar_position: 539
title: LDIF
---

# LDIF

This connector exports entries from an [LDIF](https://en.wikipedia.org/wiki/LDAP_Data_Interchange_Format) file.

This page is about [LDIF](../../references-packages/ldif/index "LDIF").

![Package: Directory/LDIF](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Packages_ldif_V603.png)

## Overview

The LDAP Data Interchange Format (LDIF) is a standard plain text data interchange format for representing LDAP (Lightweight Directory Access Protocol) directory content and update requests. LDIF conveys directory content as a set of records, one record for each object (or entry). It also represents update requests, such as Add, Modify, Delete, and Rename, as a set of records, one record for each update request.

## Prerequisites

Implementing this connector requires no particular prerequisites.

## Export

This connector generates a CSV file from an input LDIF file containing entries to be exported.

### Configuration

This process is configured through a [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection")in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

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
>   ...
>   "Connections": {
>     ...
>     "LdifExport": {
>         "LDIFFile": "C:/UsercubeContoso/Contoso/contoso.ldif",
>         "FilterAttribute": "objectClass",
>         "FilterValues": "user organizationalUnit",
>         "Attributes": [ "dn", "objectClass", "cn", "SAMAccountName", "Name", "userprincipalname" ],
>         "LdifEncoding": "UTF-8",
>     }
>   }
> }
> ```
#### Setting attributes

| Name | Details |
| --- | --- |
| LDIFFile required | **Type**  String  **Description** Path of the LDIF input file. |
| FilterAttribute required | **Type**  String  **Description** Property from the connector's configuration whose value is to be compared with the values from `FilterValues`, in order to filter the entries to export. |
| FilterValues required | **Type**  String  **Description** List of values to be compared with the value of `FilterAttribute`, in order to filter the entries to export. Identity Manager will export only the entries matching the filter. **Note:** multiple values must be separated by white spaces. |
| Attributes required | **Type**  String List  **Description** List of properties from the connector's configuration to be exported. |
| LdifEncoding default value: UTF-8 | Encoding of the file. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#list-of-encodings). |

### Output details

This connector is meant to generate to the [Application Settings](../../../network-configuration/agent-configuration/appsettings/index "Application Settings")Export Output folder a CSV file named `LdifExport.csv`, with the following columns:

```
LdifExport.csv
Command,dn,objectClass,cn,SAMAccountName,Name,userprincipalname
Insert,value1,value2,...,valueN
```
## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Credential protection

This connector has no credential attributes, and therefore does not use [[Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection")](../../../network-configuration/agent-configuration/rsa-encryption/index), nor a [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection")Vault.

Still, data protection can be ensured through an [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection") safe.
---
sidebar_position: 561
title: OData
---

# OData

This connector exports and fulfills data from/to an [OData](https://www.odata.org/) instance.

This page is about [OData](../../references-packages/odata/index).

![Package: Custom/OData](../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Packages_odata_V603.png)

## Overview

OData (Open Data Protocol) comply with ISO/IEC and OASIS standards. This protocol defines the best approaches for using RESTful APIs. OData helps you focus on your business logic while building RESTful APIs without having to worry about the various approaches to define request and response headers, status codes, HTTP methods, URL conventions, media types, payload formats, query options, etc.

## Prerequisites

Implementing this connector requires reading first the appsettings documentation.

Identity Manager's service is based on [OData RFC](https://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol).

## Export

This connector extracts all entity sets with all the information needed to rebuild them. This is based on the connector's metadata.

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
>
> appsettings.agent.json
> {
>     ...
>     "Connections": {
>         ...
>         "ODataExport": {
>             "Server": "https://YourODataService.com/",
>             "Login": "login",
>             "Password": "password"
>         }
>     }
> }
>
> ```
#### Setting attributes

| Name | Details |
| --- | --- |
| Server required | **Type**  String  **Description** URL of the data system. |
| Login optional | **Type**  String  **Description** Login to connect to the system. |
| Password optional | **Type**  String  **Description** Password to connect to the system. |
| BearerToken optional | **Type**  String  **Description** Token to authenticate to the system. |
| ClientId optional | **Type**  String  **Description** Id to connect to the system via OpenId. |
| ClientSecret optional | **Type**  String  **Description** Password to connect to the system via OpenId. |
| AuthenticationUrl optional | **Type**  String  **Description** URL to request the authentication via OpenId. |

#### XML configuration requirements

This connector requires from the XML configuration:

* An [Entity Type Mapping](../../../toolkit/xml-configuration/connectors/entitytypemapping/index "Entity Type Mapping"):
  * with the same identifier as the related entity type;
  * related to the right connector;
  * related to a connection table named `_`;
  * with properties whose connection columns represent the property's path in the entity, see the configuration example below;
* An [Entity Association Mapping](../../../toolkit/xml-configuration/connectors/entityassociationmapping/index "EntityAssociationMapping"):
  * with the same identifier as the related entity association;
  * with its `Column1` in the format `UsercubeNav_:` for the related property in the association;
  * with its `Column2` in the format `Of:` for the related property in the association;
  * related to a connection table named `__`.

The information contained in the entity types and entity associations does not impact the export.

### Output details

This connector is meant to generate to the [Application Settings](../../../network-configuration/agent-configuration/appsettings/index "Application Settings")Export Output folder one CSV file for each entity set provided in the connector's configuration.

The files' column headers come from the entity type mapping's `ConnectionColumn` properties.

If the connection column describes a sub-property, then the name should have the following pattern: `{property}:{sub-property}`. The character `":"` should not be used in other situations.

> For example:
> 
>
> `
> Note that we have here `UserName` which is a single property, and `FamilyName` which is a sub-property of `Name`, hence the name `Name:FamilyName` as the `ConnectionColumn`.
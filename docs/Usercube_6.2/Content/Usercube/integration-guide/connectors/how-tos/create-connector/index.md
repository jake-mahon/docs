---
sidebar_position: 1169
title: Create a Connector
---

# Create a Connector

How to implement a [Connector](../../../toolkit/xml-configuration/connectors/connector/index "Connector") via XML to connect Identity Manager to an external system.

See an example on how to [For Microsoft Entra ID](azuread/index "Register for Microsoft Entra ID").

Netwrix Identity Manager (formerly Usercube)strongly recommends configuring as much as possible via the UI instead of XML files. See the [Connect to a Managed System](../../../../user-guide/set-up/connect-system/index "Connect to a Managed System") topic to learn how to create a connector via the UI.

## Prerequisites

### Configure the external system

Some systems need additional configuration for Identity Manager to connect.

### Configure Identity Manager

Identity Manager's agent must be set up to access the system's data via the related connector.

:::tip
Netwrix Identity Manager (formerly Usercube) recommends performing the configuration via Identity Manager's configuration files like appsettings.json and appsettings.agent.json. However, these settings can also be input through environment variables. See the Network Configuration topic for additional information.
:::

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
- Be unique.
- Not begin with a digit.
- Not contain , :, ", /, \, |, ?, \* and \_.
:::

Netwrix Identity Manager (formerly Usercube) recommends completing this guide without credential protection, and once the configuration works switch to a more secure way of storing credentials.
  
See the [Microsoft Entra ID](../../references-connectors/microsoftentraID/index "Microsoft Entra ID") topic to learn how to protect Microsoft Entra ID's credentials.

## Build the Connector

See the [Connect to a Managed System](../../../../user-guide/set-up/connect-system/index "Connect to a Managed System") topic to learn how to build a connector via the UI, with its connections, entity types and mappings.

When exporting the configuration, a  connector should be found in the `Conf// Connector.xml` file.

All XML files must start with the `` and `` elements.

### Entity model

The [Entity Model](../../../entity-model/index "Entity Model") of the connector defines how the exported data will be written to Identity Manager's repository. It should match as closely as possible the structure of the relevant data from the external system, and be aligned with Identity Manager's repository.

:::tip
The entity model is configured by Entity Model and
Entity Association
containing scalar and navigation
Entity Type
.
:::

The entity model can be refined later in the project.

### Entity mapping

Each property of the entity type must be mapped to an attribute from among those exported from the system.

:::tip
Entity mapping is configured through
Entity Type Mapping
and
Entity Association Mapping
.
:::

So each element of an entity type mapping is meant to link a property from the result of the CSV export file containing the exported attributes to a property from the entity type.

:::tip
In the mapping, the CSV file is identified by the ConnectionTable and the entity type by the Identifier.
:::

An association mapping is the equivalent of an entity type mapping, but for the properties of an entity association instead of an entity type.

## Display the Connector in the UI

### Menu items

Identity Manager provides a menu item to list all connectors in the dashboard's left menu.

![Menu Item - Connectors](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Home_entityTypes_V602.png)

> It is usually written like this:
>
> ```
>
>                         
>                             Runtime/Bootstrap/Nav.xml
>
> 
>
>                     
> ```
Then each connector should be configured with a menu item, which is created automatically when working via the UI.

### Displayed resources

See the [Organize Resources' Datasheets](../../../../user-guide/set-up/connect-system/entity-type-creation/datasheet-organization/index "Organize Resources' Datasheets") to learn more on how to set the display properties via the UI.

In the XML configuration, scalar properties are automatically displayed in the datasheets of the connector's resources. But navigation properties must be declared explicitly.

The properties to be displayed are configured through [Display Entity Type](../../../toolkit/xml-configuration/user-interface/displayentitytype/index "DisplayEntityType").

Microsoft Entra ID's resources are listed in a table.

The resources are displayed in a table configurable through a [Display Table](../../../toolkit/xml-configuration/user-interface/displaytable/index "Display Table").

### Resources' display names

See the [Set Resources' Display Names](../../../../user-guide/set-up/connect-system/entity-type-creation/display-name-setting/index "Set Resources' Display Names") to learn how to set resources' display names via the UI.

Each resource is displayed in the UI with a display name.

:::tip
Resources' display names are customizable through
Entity Type
.
:::

### Permissions

In order to access the connector, a user must have the right permissions.

:::tip
Permissions within Identity Manager are configured through Access Control Rule.
:::
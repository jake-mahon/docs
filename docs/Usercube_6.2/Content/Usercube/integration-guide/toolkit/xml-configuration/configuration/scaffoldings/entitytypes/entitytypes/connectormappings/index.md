---
sidebar_position: 880
title: Connector Mappings
---

# Connector Mappings

This scaffolding allows the user to generate the mapping of an entity in a given connector.

The identifiers of the connector and the entity type must be provided to the scaffolding through the attributes `Connector` and `EntityType` to make the link between these two elements and create the mapping.
This scaffolding needs to have an argument to know the location of the file to be retrieved during the collection. This file must be a CSV file with "Command" as the first column and then the rest of the columns for scalar and mono-navigation properties. This file must be named after the entity type. If there are multi-valued navigation properties, it is necessary to create a file with "Command" as first property and the key of the two entities to link. This file must be named after the identifier of the starting entity type + "\_" + the identifier of the navigation property.

If you are using a CSV connector with files in incremental mode, you must specify the attribute `IsIncremental` to `true`.

## Examples

```


```
## Properties

| Property | Details |
| --- | --- |
| Connector required | **Type**  String  **Description** Identifier of the connector involved in the job to be generated. |
| EntityType required | **Type**  String  **Description** Identifier of the entity type involved in the scaffolding. |
| IsIncremental optional | **Type**  Boolean  **Description** `true` to perform an incremental synchronization. |
| Package optional | **Type**  ConnectionPackage  **Description** For a `ConnectorMappings` scaffolding, identifier of the package for the connection to be generated. |

## Child Elements

* Excluded Property (optional) to ignore a given property of the specified entity type.
* Mapping Path (optional) Define the path for csv EntityType mapping

### Excluded Property

| Property | Details |
| --- | --- |
| Property required | **Type**  String  **Description** Property of the specified entity type that is to be ignored for the generation of entity instances and association instances. |

A scaffolding does not use filters, but a part of the entity model can be excluded with the `ExcludedProperty` argument.

The following example generates a universe `U8_Users` based on the entity type `Directory_User`, like our U1 but without the `Guests` property:

```

    


```
When getting Identity Manager [Connect Power BI to Identity Manager](../../../../../../../governance/reporting/how-tos/connect-powerbi/index "Connect Power BI"), we see the following:

![Universe (ExcludedProperty)](../../../../../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Universe_excluded.png)

### Mapping Path

| Property | Details |
| --- | --- |
| IsIncremental default value: false | **Type**  Boolean  **Description** Defines if the CSV connector files uses the incremental mode |

## Generated XML

Our example generates the following configuration:

```
                                      

```
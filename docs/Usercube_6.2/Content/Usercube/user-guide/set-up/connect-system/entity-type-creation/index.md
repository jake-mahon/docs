---
sidebar_position: 1285
title: Create an Entity Type
---

# Create an Entity Type

How to create an [Entity Type](../../../../integration-guide/toolkit/xml-configuration/metadata/entitytype/index) that corresponds to the connector model.

## Overview

An entity type is a model of a managed system's data. It defines the shape of the associated resources (instances of said model) and not the intent (that would be a resource type. See the [Create a Resource Type](../../categorization/resource-type-creation/index) topic for additional information. It defines a set of properties describing said resources and linking them together.

In other words, an entity type is supposed to model the representation of a certain group of resources inside Identity Manager. It is a relational model, made of properties ([Define Scalar Properties](scalar-property-definition/index)) and links between entity types ([Define Navigation Properties](navigation-property-definition/index)), both described later.

![Entity Type - Schema](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/EntityTypeCreation_schema.png)

The configuration of entity types depends entirely on the previously established by[Model the Data](../connector-modeling/index).

Entity types will impact the import of the managed system's resources, and the way said resources are displayed in the UI.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the purpose of the application.

| Input | Output |
| --- | --- |
| Connection (required)  Refreshed schemas (required)  Connector's data [Model the Data](../connector-modeling/index) (required) | Entity type |

See the [Create a Connection](../connection-creation/index) and [Model the Data](../connector-modeling/index) topics for additional information.

## Create an Entity Type

Create an entity type by proceeding as follows:

1. [Create the Entity Type](entity-type-declaration/index).
2. [Define Scalar Properties](scalar-property-definition/index)to be used in the entity type.
3. Choose the [Select Primary Keys](key-selection/index) and key properties which will identify resources.
4. Define [Define Navigation Properties](navigation-property-definition/index)if applicable.
5. Customize the [Set Resources' Display Names](display-name-setting/index) for the entity type's resources.
6. Organize the [Organize Resources' Datasheets](datasheet-organization/index) for the entity type's resources in Identity Manager.

For some connectors, Identity Manager provides a template to automatically create a basic configuration. See below this note.

> For example, the Active Directory template automatically creates an AD entity type and two resource types for a standard AD connector. The template is available for a connector with an AD connection but no entity types.
>
> ![Entity Type - AD Template](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/EntityType_template_V602.png)

## Verify the Entity Type

Changes will take effect once you have launched synchronization. Therefore, in order to verify the process, follow the verification procedure indicated to[Synchronize Data](../../synchronization/index).
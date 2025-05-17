---
sidebar_position: 983
title: Connector
---

# Connector

Connectors provide the means by which Identity Manager communicates with managed platforms, applications and systems. They describe how the data from these systems are mapped to the [Entity Model](../../../../entity-model/index "Entity Model").

A connector in most case represents an application model. It is composed of entities and associations.

> For example we can define an HR connector, with the following entities: Person, Department, Function, Location, etc. and with the following associations: Person-Department, Person-Site, Person-Manager(Person), etc.

A connector is used to synchronize each of its entities and associations in Identity Manager's physical model. A connector is defined with:

* [Entity Type](../../metadata/entitytype/index "Entity Type");
* [Entity Association](../../metadata/entityassociation/index "Entity Association");
* [Entity Type Mapping](../entitytypemapping/index "Entity Type Mapping") and [Entity Association Mapping](../entityassociationmapping/index "Entity Association Mapping") to link the entity types and associations to the corresponding files and columns containing the exported data from the managed system.

## Examples

The following example creates a `HR` connector on the agent called `Local` previously declared by an [Agent](../agent/index "Agent") element.

We create the right [Connection](../connection/index "Connection") to use the connector as a [CSV](../../../../connectors/references-connectors/csv/index "CSV")aiming to export HR CSV files into new CSV files in Identity Manager's format.

The [Entity Type](../../metadata/entitytype/index "Entity Type") model the resources as `HR_Person` or `HR_Organization`, defining properties.

The [Entity Type Mapping](../entitytypemapping/index "Entity Type Mapping") link the entity types to the source files.

The [Entity Association](../../metadata/entityassociation/index "Entity Association") creates a link between the two entity types.

The [Entity Association Mapping](../entityassociationmapping/index "Entity Association Mapping") links the association to the source files.

```
                                                                                                                                                                                                                             

```
## Properties

| Property | Details |
| --- | --- |
| Agent optional | **Type**  Int64  **Description** Identifier of the agent where the connector's tasks are launched. |
| CompleteJob default value: 0 | **Type**  JobIntegrationRule  **Description** Indicates how the connector should be used in the complete job (scaffolding):  `0` - Used `1` - NotUsed `2` - OnlySynchronization `3` - OnlyProvisioning  Warning: The job scaffolding has priority over the connector's decision. For example, if your job scaffolding specifies that the Microsoft Entra ID is `NotUsed` for the complete job, setting that connector to `Used` for the complete job will not activate it. You should not only add the `Used` to the connector but also remove the `NotUsed` from the configuration of the job scaffolding. |
| DisplayName\_L1 required | **Type**  String  **Description** Connector DisplayName. |
| Identifier required | **Type**  String  **Description** Connector Identifier. |
| IncrementalJob default value: 0 | **Type**  JobIntegrationRule  **Description** Indicates how the connector should be used in the incremental job (scaffolding):  `0` - Used `1` - NotUsed `2` - OnlySynchronization `3` - OnlyProvisioning  Warning: The job scaffolding has priority over the connector's decision. For example, if your job scaffolding specifies that the Microsoft Entra ID is `NotUsed` for the incremental job, setting that connector to `Used` for the incremental job will not activate it. You should not only add the `Used` to the connector but also remove the `NotUsed` from the configuration of the job scaffolding. |
| IsDeactivated default value: false | **Type**  Boolean  **Description** Indicates that the export and the provisioning are deactivated for this connector. |
| MaximumDeletedLines default value: 100 | **Type**  Int32  **Description** Deleted lines threshold. Sets the maximum number of resources that can be removed from the connector when running the synchronization job. |
| MaximumInsertedLines default value: 100 | **Type**  Int32  **Description** Inserted lines threshold. Sets the maximum number of resources that can be added into the connector when running the synchronization job. |
| MaximumLinkDeletedLines default value: 1000 | **Type**  Int32  **Description** Deleted association links threshold. Sets the maximum number of navigation properties that can be removed from the connector when running the synchronization job. |
| MaximumLinkInsertedLines default value: 1000 | **Type**  Int32  **Description** Inserted association links threshold. Sets the maximum number of navigation properties that can be added into the connector when running the synchronization job. |
| MaximumUpdatedLines default value: 100 | **Type**  Int32  **Description** Updated lines threshold. Sets the maximum number of resources that can be modified within the connector when running the synchronization job. |
| MaxLinkPercentageDeletedLines default value: 5 | **Type**  Int32  **Description** Deleted association links threshold in percent. |
| MaxLinkPercentageInsertedLines default value: 5 | **Type**  Int32  **Description** Inserted association links threshold in percent. |
| MaxPercentageDeletedLines default value: 5 | **Type**  Int32  **Description** Deleted lines threshold in percent. |
| MaxPercentageInsertedLines default value: 5 | **Type**  Int32  **Description** Inserted lines threshold in percent. |
| MaxPercentageUpdatedLines default value: 5 | **Type**  Int32  **Description** Updated lines threshold in percent. |
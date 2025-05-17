---
sidebar_position: 145
title: Set Internal User Profiles Task
---

# Set Internal User Profiles Task

Will execute the profile rules of the different resource types given in parameters to create, modify or delete profiles in automatic mode.

:::warning
It is necessary to set up
Profile Context
as well as Profile Rule Context to be able to use this job.
:::

## Examples

```
          

```
## Properties

| Property | Details |
| --- | --- |
| DisplayName\_L1 required | **Type**  String  **Description** Display name of the task in language 1 (up to 16). |
| BatchInsertSize default value: 0 | **Type**  Int32  **Description** Defines the batch insert size. |
| BatchSelectSize default value: 0 | **Type**  Int32  **Description** Defines the batch select size. |
| Identifier optional | **Type**  String  **Description** Unique identifier of the task. |

## Child Element: TaskEntityType

A task entity type defines the entity type on which the task is applied.

| Property | Details |
| --- | --- |
| EntityType required | **Type**  Int64  **Description** Identifier of the entity type that the task is to be applied on. |

## Child Element: TaskResourceType

The table TaskResourceTypes makes the link between the tasks and the Resourcetypes.

| Property | Details |
| --- | --- |
| ResourceType required | **Type**  Int64  **Description** Linked resourceType id. |
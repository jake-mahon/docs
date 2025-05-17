---
sidebar_position: 802
title: Update Classification Task
---

# Update Classification Task

Classifies a list of resources that are part of the resourceType data targets as an argument to this job.

:::warning
You must set up the ResourceClassificationRule on resourceTypes to be able to use this job.
:::

## Examples

```
      

```
## Properties

| Property | Details |
| --- | --- |
| DisplayName\_L1 required | **Type**  String  **Description** Display name of the task in language 1 (up to 16). |
| BatchSize default value: 0 | **Type**  Int32  **Description** Block size for batch calculation. |
| Dirty default value: false | **Type**  Boolean  **Description** Initiate use only dirty resources. |
| Identifier optional | **Type**  String  **Description** Unique identifier of the task. |

## Child Element: TaskEntityType

A task entity type defines the entity type on which the task is applied.

| Property | Details |
| --- | --- |
| EntityType required | **Type**  Int64  **Description** Identifier of the entity type that the task is to be applied on. |
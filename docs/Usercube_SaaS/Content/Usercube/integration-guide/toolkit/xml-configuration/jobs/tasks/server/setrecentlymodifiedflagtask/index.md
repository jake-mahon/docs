---
sidebar_position: 159
title: Set Recently Modified Flag Task
---

# Set Recently Modified Flag Task

When synchronizing in full or incremental mode, it is possible to optimize the compute performance of the role model by taking into account only the changes made by the synchronization. This optimization is based on the `dirty` property of the entity [Resource](../../../../resources/resource/index "Resource"). The task [Compute Role Model Task](../computerolemodeltask/index "Compute Role Model Task") with option `dirty` set to `true` will treat only resources marked as dirty.

This task is used to set the `dirty` flag on all resources based on [Resources](../../../../resources/index "Resources")Change, Resource Link Change and Resource File Change entities. After this, it clears this changes tables.

:::warning
This task works correctly only if previous synchronization tasks have not cleared the change tables (option DoNotDeleteChanges set to true).
:::

## Examples

```


```
## Properties

| Property | Details |
| --- | --- |
| DisplayName\_L1 required | **Type**  String  **Description** Display name of the task in language 1 (up to 16). |
| Identifier optional | **Type**  String  **Description** Unique identifier of the task. |
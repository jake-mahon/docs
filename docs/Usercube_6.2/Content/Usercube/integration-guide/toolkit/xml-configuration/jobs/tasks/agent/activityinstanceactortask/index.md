---
sidebar_position: 784
title: Activity Instance Actor Task
---

# Activity Instance Actor Task

Update all the actors of the workflows instances.

:::warning
An activity Instance can have at most 20 actors.
:::

## Examples

```


```
## Properties

| Property | Details |
| --- | --- |
| Agent required | **Type**  String  **Description** Identifier of the agent on which the job will be launched.  **Warning:** all jobs containing the task must be launched on the same agent or on the server. |
| DisplayName\_L1 required | **Type**  String  **Description** Display name of the task in language 1 (up to 16). |
| OpenIdClient required | **Type**  String  **Description** Connection client for the task. |
| Identifier optional | **Type**  String  **Description** Unique identifier of the task. |
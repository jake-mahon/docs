---
sidebar_position: 804
title: Send Role Model Notifications Task
---

# Send Role Model Notifications Task

Task that sends a notification to all users who have pending roles to review, only for roles with a simple approval workflow, i.e. pending the validation 1 out of 1.

## Examples

The following example sends a notification to all users who have pending roles to review, whose owners are part of `Directory_User`. This is only about roles that need one (and only one) validation.

```
  

```
## Properties

| Property | Details |
| --- | --- |
| DisplayName\_L1 required | **Type**  String  **Description** Display name of the task in language 1 (up to 16). |
| Identifier optional | **Type**  String  **Description** Unique identifier of the task. |

## Child Element: TaskEntityType

A task entity type defines the entity type on which the task is applied.

| Property | Details |
| --- | --- |
| EntityType required | **Type**  Int64  **Description** Identifier of the entity type that the task is to be applied on. |
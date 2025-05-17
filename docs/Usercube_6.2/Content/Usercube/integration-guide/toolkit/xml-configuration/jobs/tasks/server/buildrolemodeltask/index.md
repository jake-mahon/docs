---
sidebar_position: 803
title: Build Role Model Task
---

# Build Role Model Task

Applies the [Role Mapping](../../../../provisioning/rolemapping/index "Role Mapping"), also named [Create Roles in Bulk](../../../../../../../user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/index "Create Roles in Bulk"), i.e. generates single roles and navigation rules based on resources matching a given pattern.

> For example, this task can transform AD groups with a special naming convention into roles.

## Examples

The following example applies all role naming rules linked to the AD connector.

```


```
## Properties

| Property | Details |
| --- | --- |
| DisplayName\_L1 required | **Type**  String  **Description** Display name of the task in language 1 (up to 16). |
| Connector optional | **Type**  String  **Description** Identifier of the connector whose role mappings / role naming rules are to be applied. |
| Identifier optional | **Type**  String  **Description** Unique identifier of the task. |
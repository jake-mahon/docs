---
sidebar_position: 933
title: Create Update Delete Access Control Rules
---

# Create Update Delete Access Control Rules

Generates execution rights for the create, update, delete workflows.

:::warning
Some prerequisites are necessary to be able to launch this scaffolding.
A entity type must be created with the following naming convention: "Worfklow\_" + idenfitier type entity.
Three workflows must be created with the following names:
entity type identifier + "\_Create";
entity type identifier + "\_Update";
entity type identifier + "\_Delete";
:::

The scaffolding generates the following scaffoldings:

* [View Access Control Rules](../../resources/viewaccesscontrolrules/index "View Access Control Rules"): Generates the permissions to view an entity type's resources.

## Examples

```


```
## Properties

| Property | Details |
| --- | --- |
| EntityType required | **Type**  String  **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required | **Type**  String  **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```
      

```
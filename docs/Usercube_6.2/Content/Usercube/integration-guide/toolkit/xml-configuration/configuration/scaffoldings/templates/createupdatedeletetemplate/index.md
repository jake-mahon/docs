---
sidebar_position: 967
title: Create Update Delete Template
---

# Create Update Delete Template

Creates the three types of workflow for the given entity as well as the execution rights for the given profile.

The scaffolding generates the following scaffoldings:

* [Create Update Delete Access Control Rules](../../accesscontrolrules/workflows/createupdatedeleteaccesscontrolrules/index "Create Update Delete Access Control Rules"): Generates execution rights for the create, update, delete workflows.
* [Create Update Delete Menus](../../entitytypes/workflows/createupdatedeletemenus/index "CreateUpdateDeleteMenus"): Creates creation, update and delete menus for an entity.
* [Create Update Delete Workflows](../../entitytypes/workflows/createupdatedeleteworkflows/index "CreateUpdateDeleteWorkflows"):
* [Entity Type Display Name](../../entitytypes/entitytypes/entitytypedisplayname/index "Entity Type Display Name"): Computes a default value for resources' internal display names.
* [Entity Type Display Table](../../entitytypes/entitytypes/entitytypedisplaytable/index "Entity Type Display Table"): Creates a display table for the given entity.
* [Entity Type Search Bar](../../entitytypes/entitytypes/entitytypesearchbar/index "Entity Type Search Bar"): Creates the search bar for the entity without criteria.
* [View Access Control Rules](../../accesscontrolrules/resources/viewaccesscontrolrules/index "View Access Control Rules"): Generates the permissions to view an entity type's resources.
* [Workflow Entity Type](../../entitytypes/workflows/workflowentitytype/index "WorkflowEntityType"): Creates an entity that will be the source of all workflows that manipulate the given entity.

## Examples

```


```
## Properties

| Property | Details |
| --- | --- |
| EntityType optional | **Type**  String  **Description** Identifier of the entity type involved in the scaffolding. |
| Profile optional | **Type**  String  **Description** Identifier of the profile involved in the scaffolding. |
| Property optional | **Type**  String  **Description** Identifier of the property involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```


```
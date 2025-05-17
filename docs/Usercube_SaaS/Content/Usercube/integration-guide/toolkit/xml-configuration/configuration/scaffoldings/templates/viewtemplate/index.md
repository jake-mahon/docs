---
sidebar_position: 314
title: View Template
---

# View Template

Creates the view for the given entity as well as the rights for the given profile.

The scaffolding generates the following scaffoldings:

* [Entity Type Display Name](../../entitytypes/entitytypes/entitytypedisplayname/index "Entity Type Display Name"): Computes a default value for resources' internal display names.
* [Entity Type Display Table](../../entitytypes/entitytypes/entitytypedisplaytable/index "Entity Type Display Table"): Creates a display table for the given entity.
* [View Access Control Rules](../../accesscontrolrules/resources/viewaccesscontrolrules/index "View Access Control Rules"): Generates the permissions to view an entity type's resources.

## Examples

The following example implements a default display name for resources from the `Directory_PresenceState` entity type, displays the resources in a table, and gives to the `Administrator` profile the permissions to view the resources.

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
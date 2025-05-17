---
sidebar_position: 961
title: View Template Adaptable
---

# View Template Adaptable

Implements a default display name for the resources of a given entity type, displays the resources in an adaptable table, and give the permissions to view the resources.

The scaffolding generates the following scaffoldings:

* [Entity Type Display Name](../../entitytypes/entitytypes/entitytypedisplayname/index "Entity Type Display Name"): Computes a default value for resources' internal display names.
* [Entity Type Display Table Adaptable](../../entitytypes/entitytypes/entitytypedisplaytableadaptable/index "Entity Type Display Table Adaptable"): Creates an adaptable display table for a given entity type.
* [View Access Control Rules](../../accesscontrolrules/resources/viewaccesscontrolrules/index "View Access Control Rules"): Generates the permissions to view an entity type's resources.

## Examples

The following example implements a default display name for resources from the `Directory_PresenceState` entity type, displays the resources in an adaptable table, and gives to the `Administrator` profile the permissions to view the resources.

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
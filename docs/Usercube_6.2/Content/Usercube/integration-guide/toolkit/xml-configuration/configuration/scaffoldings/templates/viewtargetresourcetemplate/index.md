---
sidebar_position: 970
title: View Target Resource Template
---

# View Target Resource Template

Creates the entity view (designElement = resourceTable), the report and the rights for a given profile.

The scaffolding generates the following scaffoldings:

* [Entity Type Display Name](../../entitytypes/entitytypes/entitytypedisplayname/index "Entity Type Display Name"): Computes a default value for resources' internal display names.
* [Entity Type Display Target Resource Table](../../entitytypes/entitytypes/entitytypedisplaytargetresourcetable/index "Entity Type Display Target Resource Table"): Creates a displaytable for the given entity.
* [Target Resource Report](../../queries/targetresourcereport/index "Target Resource Report"): Creates a ReportQuery with default Query taking all the properties of the entity.
* [Target Resource Report Access Control Rules](../../accesscontrolrules/queries/targetresourcereportaccesscontrolrules/index "Target Resource Report Access Control Rules"): Generates the permissions to apply a report for a profile on a given entity.
* [Target Resource Report Menus](../../entitytypes/entitytypes/targetresourcereportmenus/index "Target Resource Report Menus"): Creates the Item menu for the entity's report so that it is displayed in the report view.
* [View Access Control Rules](../../accesscontrolrules/resources/viewaccesscontrolrules/index "View Access Control Rules"): Generates the permissions to view an entity type's resources.

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
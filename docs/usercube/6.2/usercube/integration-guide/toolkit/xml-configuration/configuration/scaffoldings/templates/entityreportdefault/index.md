# Entity Report Default

Creates all configuration items to add a ReportQuery for an EntityType and profile.

The scaffolding generates the following scaffoldings:

- [ Report Access Control Rules ](../../accesscontrolrules/queries/reportaccesscontrolrules/index.md):
  Generates the permissions to access the report view.
- [ Target Resource Report ](../../queries/targetresourcereport/index.md): Creates a ReportQuery
  with default Query taking all the properties of the entity.
- [ Target Resource Report Access Control Rules ](../../accesscontrolrules/queries/targetresourcereportaccesscontrolrules/index.md):
  Generates the permissions to apply a report for a profile on a given entity.
- [ Target Resource Report Menus ](../../entitytypes/entitytypes/targetresourcereportmenus/index.md):
  Creates the Item menu for the entity's report so that it is displayed in the report view.

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

# Update Resources Template

The scaffolding generates the following scaffoldings:

- [
  Entity Type Display Name
  ](../../entitytypes/entitytypes/entitytypedisplayname/index.md): Computes a default value for resources' internal display names.
- [
  Entity Type Display Table
  ](../../entitytypes/entitytypes/entitytypedisplaytable/index.md): Creates a display table for the given entity.
- [
  Update Resources Access Control Rules
  ](../../accesscontrolrules/workflows/updateresourcesaccesscontrolrules/index.md):
- [
  Update Resources Menus
  ](../../entitytypes/workflows/updateresourcesmenus/index.md):
- [
  Update Resources Workflows
  ](../../entitytypes/workflows/updateresourcesworkflows/index.md):
- [
  View Access Control Rules
  ](../../accesscontrolrules/resources/viewaccesscontrolrules/index.md): Generates the permissions to view an entity type's resources.
- [
  Workflow Entity Type
  ](../../entitytypes/workflows/workflowentitytype/index.md): Creates an entity that will be the source of all workflows that manipulate the given entity.

## Examples

```

  <UpdateResourcesTemplate EntityType="HR_Person" Profile="Administrator"/>

```

## Properties

| Property | Details |
| --- | --- |
| EntityType   optional | __Type__    String   __Description__   Identifier of the entity type involved in the scaffolding. |
| Profile   optional | __Type__    String   __Description__   Identifier of the profile involved in the scaffolding. |
| Property   optional | __Type__    String   __Description__   Identifier of the property involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<EntityTypeDisplayName Id="301" EntityType="HR_Person" /><EntityTypeDisplayTable Id="325" EntityType="HR_Person" /><UpdateResourcesAccessControlRules Id="390" EntityType="HR_Person" Profile="Administrator" /><UpdateResourcesMenus Id="391" EntityType="HR_Person" /><UpdateResourcesWorkflows Id="392" EntityType="HR_Person" /><ViewAccessControlRules Id="398" EntityType="HR_Person" Profile="Administrator" /><WorkflowEntityType Id="421" EntityType="HR_Person" />

```

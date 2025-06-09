# Create Update Delete Template

Creates the three types of workflow for the given entity as well as the execution rights for the given profile.

The scaffolding generates the following scaffoldings:

- [
  Create Update Delete Access Control Rules
  ](/docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/workflows/createupdatedeleteaccesscontrolrules/index.md): Generates execution rights for the create, update, delete workflows.
- [
  Create Update Delete Menus
  ](/docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/entitytypes/workflows/createupdatedeletemenus/index.md): Creates creation, update and delete menus for an entity.
- [
  Create Update Delete Workflows
  ](/docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/entitytypes/workflows/createupdatedeleteworkflows/index.md):
- [
  Entity Type Display Name
  ](/docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/entitytypes/entitytypes/entitytypedisplayname/index.md): Computes a default value for resources' internal display names.
- [
  Entity Type Display Table
  ](/docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/entitytypes/entitytypes/entitytypedisplaytable/index.md): Creates a display table for the given entity.
- [
  Entity Type Search Bar
  ](/docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/entitytypes/entitytypes/entitytypesearchbar/index.md): Creates the search bar for the entity without criteria.
- [
  View Access Control Rules
  ](/docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/resources/viewaccesscontrolrules/index.md): Generates the permissions to view an entity type's resources.
- [
  Workflow Entity Type
  ](/docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/entitytypes/workflows/workflowentitytype/index.md): Creates an entity that will be the source of all workflows that manipulate the given entity.

## Examples

```

  <CreateUpdateDeleteTemplate EntityType="Directory_UserType" Profile="Administrator"/>

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

<CreateUpdateDeleteAccessControlRules Id="49" EntityType="Directory_UserType" Profile="Administrator" /><CreateUpdateDeleteMenus Id="76" EntityType="Directory_UserType" /><CreateUpdateDeleteWorkflows Id="90" EntityType="Directory_UserType" /><EntityTypeDisplayName Id="108" EntityType="Directory_UserType" /><EntityTypeDisplayTable Id="126" EntityType="Directory_UserType" /><EntityTypeSearchBar Id="140" EntityType="Directory_UserType" /><ViewAccessControlRules Id="15" EntityType="Directory_UserType" Profile="Administrator" /><WorkflowEntityType Id="210" EntityType="Directory_UserType" />

```

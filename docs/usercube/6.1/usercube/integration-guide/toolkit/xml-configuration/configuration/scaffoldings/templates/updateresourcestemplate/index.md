# UpdateResourcesTemplate

The scaffolding generates the following scaffoldings:

- [EntityTypeDisplayName](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/entitytypes/entitytypes/entitytypedisplayname/index.md):
  Computes a default value for resources' internal display names.
- [EntityTypeDisplayTable](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/entitytypes/entitytypes/entitytypedisplaytable/index.md):
  Creates a display table for the given entity.
- [UpdateResourcesAccessControlRules](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/workflows/updateresourcesaccesscontrolrules/index.md):
- [UpdateResourcesMenus](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/entitytypes/workflows/updateresourcesmenus/index.md):
- [UpdateResourcesWorkflows](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/entitytypes/workflows/updateresourcesworkflows/index.md):
- [ViewAccessControlRules](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/resources/viewaccesscontrolrules/index.md):
  Generates the permissions to view an entity type's resources.
- [WorkflowEntityType](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/entitytypes/workflows/workflowentitytype/index.md):
  Creates an entity that will be the source of all workflows that manipulate the given entity.

## Examples

```

  <UpdateResourcesTemplate EntityType="HR_Person" Profile="Administrator"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType optional | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile optional    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |
| Property optional   | **Type** String **Description** Identifier of the property involved in the scaffolding.    |

## Generated XML

Our example generates the following configuration:

```

<EntityTypeDisplayName Id="301" EntityType="HR_Person" /><EntityTypeDisplayTable Id="325" EntityType="HR_Person" /><UpdateResourcesAccessControlRules Id="390" EntityType="HR_Person" Profile="Administrator" /><UpdateResourcesMenus Id="391" EntityType="HR_Person" /><UpdateResourcesWorkflows Id="392" EntityType="HR_Person" /><ViewAccessControlRules Id="398" EntityType="HR_Person" Profile="Administrator" /><WorkflowEntityType Id="421" EntityType="HR_Person" />

```

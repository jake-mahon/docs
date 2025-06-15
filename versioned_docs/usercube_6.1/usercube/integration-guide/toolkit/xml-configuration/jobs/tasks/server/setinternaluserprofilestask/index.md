# SetInternalUserProfilesTask

Will execute the profile rules of the different resource types given in parameters to create, modify or delete profiles in automatic mode.

It is necessary to set up [ProfileRuleContext](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/access-control/profilecontext/index.md) as well as [profileRules](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/access-control/profilerulecontext/index.md) to be able to use this job.

## Examples

```

  <SetInternalUserProfilesTask Identifier="SetInternalUserProfiles" DisplayName_L1="Set Internal User Profiles" >    <TaskEntityType EntityType="Referentiel_User"/>    <TaskResourceType ResourceType="AD_Entry_NominativeUser"/>  </SetInternalUserProfilesTask>

```

## Properties

| Property | Details |
| --- | --- |
| DisplayName_L1   required | __Type__    String   __Description__   Display name of the task in language 1 (up to 16). |
| BatchInsertSize   default value: 0 | __Type__    Int32   __Description__   Defines the batch insert size. |
| BatchSelectSize   default value: 0 | __Type__    Int32   __Description__   Defines the batch select size. |
| Identifier   optional | __Type__    String   __Description__   Unique identifier of the task. |

## Child Element: TaskEntityType

A task entity type defines the entity type on which the task is applied.

| Property | Details |
| --- | --- |
| EntityType   required | __Type__    Int64   __Description__   Identifier of the entity type that the task is to be applied on. |

## Child Element: TaskResourceType

The table TaskResourceTypes makes the link between the tasks and the Resourcetypes.

| Property | Details |
| --- | --- |
| ResourceType   required | __Type__    Int64   __Description__   Linked resourceType id. |

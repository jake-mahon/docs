# SetRecentlyModifiedFlagTask

When synchronizing in full or incremental mode, it is possible to optimize the compute performance of the role model by taking into account only the changes made by the synchronization. This optimization is based on the ```dirty``` property of the entity [Resource](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/resources/resource/index.md). The task [Usercube-Compute-RoleModel](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/jobs/tasks/server/computerolemodeltask/index.md) with option ```dirty``` set to ```true``` will treat only resources marked as dirty.

This task is used to set the ```dirty``` flag on all resources based on [ResourceChange, ResourceLinkChange and ResourceFileChange entities](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/resources/index.md). After this, it clears this changes tables.

This task works correctly only if __previous synchronization tasks have not cleared the change tables__ (option ```DoNotDeleteChanges``` set to ```true```).

## Examples

```

  <SetRecentlyModifiedFlagTask Identifier="Update_Dirty" DisplayName_L1="Update Dirty"/>

```

## Properties

| Property | Details |
| --- | --- |
| DisplayName\_L1   required | __Type__    String   __Description__   Display name of the task in language 1 (up to 16). |
| Identifier   optional | __Type__    String   __Description__   Unique identifier of the task. |

# Compute Risk Scores Task

Update risk score with the risk settings.

## Properties

| Property | Details |
| --- | --- |
| DisplayName\_L1   required | __Type__    String   __Description__   Display name of the task in language 1 (up to 16). |
| BatchSize   default value: 0 | __Type__    Int32   __Description__   Block size for batch calculation. |
| Dirty   default value: false | __Type__    Boolean   __Description__   Initiate use only dirty resources. |
| Identifier   optional | __Type__    String   __Description__   Unique identifier of the task. |

## Child Element: TaskEntityType

A task entity type defines the entity type on which the task is applied.

| Property | Details |
| --- | --- |
| EntityType   required | __Type__    Int64   __Description__   Identifier of the entity type that the task is to be applied on. |

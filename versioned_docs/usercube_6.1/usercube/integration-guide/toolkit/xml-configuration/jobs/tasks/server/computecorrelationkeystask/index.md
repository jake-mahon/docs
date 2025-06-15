# ComputeCorrelationKeysTask

The Compute Role Model correlation keys will pre-calculate all the keys needed by the Compute Role Model to match the resources.
If the resource or property does not exist or needs to change, the task insert a new line in this table:

- Resource correlation keys

## Examples

```

<ComputeCorrelationKeysTask Identifier="All_CorrelationKeys" DisplayName_L1="All Correlation Keys" AllEntityType="true" />

```

## Properties

| Property | Details |
| --- | --- |
| DisplayName_L1   required | __Type__    String   __Description__   Display name of the task in language 1 (up to 16). |
| AllEntityType   default value: false | __Type__    Boolean   __Description__   Launch to all entityTypes for the expression task.   _Alternative definition_: If _TaskType_ is:   - TreeDimensionsRefreshTask: Refresh all dimensions. |
| BatchSize   default value: 0 | __Type__    Int32   __Description__   Block size for batch calculation. |
| Dirty   default value: false | __Type__    Boolean   __Description__   Initiate use only dirty resources. |
| Identifier   optional | __Type__    String   __Description__   Unique identifier of the task. |

## Child Element: TaskEntityType

A task entity type defines the entity type on which the task is applied.

| Property | Details |
| --- | --- |
| EntityType   required | __Type__    Int64   __Description__   Identifier of the entity type that the task is to be applied on. |

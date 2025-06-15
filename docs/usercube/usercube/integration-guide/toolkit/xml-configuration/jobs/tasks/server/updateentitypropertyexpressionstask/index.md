# Update Entity Property Expressions Task

Calculates either for all entities or for a list of entities the expressions and inserts the values in the database.

## Examples

```

<UpdateEntityPropertyExpressionsTask Identifier="ComputeAllProperties" DisplayName_L1="Compute All Properties " AllEntityType="true"/>

```

## Properties

| Property | Details |
| --- | --- |
| DisplayName_L1   required | __Type__    String   __Description__   Display name of the task in language 1 (up to 16). |
| AllEntityType   default value: false | __Type__    Boolean   __Description__   Launch to all entityTypes for the expression task.   _Alternative definition_: If _TaskType_ is:   - TreeDimensionsRefreshTask: Refresh all dimensions. |
| BatchSelectSize   default value: 0 | __Type__    Int32   __Description__   Defines the batch select size. |
| BatchUpdateSize   default value: 0 | __Type__    Int32   __Description__   Defines the batch update size. |
| Dirty   default value: false | __Type__    Boolean   __Description__   Initiate use only dirty resources. |
| Identifier   optional | __Type__    String   __Description__   Unique identifier of the task. |

## Child Element: TaskEntityType

A task entity type defines the entity type on which the task is applied.

| Property | Details |
| --- | --- |
| EntityType   required | __Type__    Int64   __Description__   Identifier of the entity type that the task is to be applied on. |

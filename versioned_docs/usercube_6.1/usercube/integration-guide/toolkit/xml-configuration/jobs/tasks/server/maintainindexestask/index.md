# MaintainIndexesTask

Maintain indexes and update statistics for all database tables. Also cleans up data inconsistencies.

## Examples

```

  <MaintainIndexesTask Identifier="IndexMaintenance" DisplayName_L1="Index and Statistics maintenance />

```

## Properties

| Property | Details |
| --- | --- |
| DisplayName\_L1   required | __Type__    String   __Description__   Display name of the task in language 1 (up to 16). |
| AllIndexes   default value: false | __Type__    Boolean   __Description__   Defines whether all indexes should be rebuilt without checking average fragmentation percent. |
| ContinueOnError   default value: false | __Type__    Boolean   __Description__   ```true``` if the execution of the Task returning an error should not stop the job machine state. |
| Identifier   optional | __Type__    String   __Description__   Unique identifier of the task. |
| NoNormalizationCheck   default value: false | __Type__    Boolean   __Description__   Prevent the cleanup of the database inconsistencies (foreign keys, forbidden values�). |
| Offline   default value: false | __Type__    Boolean   __Description__   Defines whether the indexes should be rebuilt offline. |
| PageCount   default value: 0 | __Type__    Int32   __Description__   Defines the min page count that an index should have to be maintained. Below this threshold the index will be ignored. Default value is 1000. |
| RebuildThreshold   default value: 0 | __Type__    Int32   __Description__   Defines the min index fragmentation threshold for which an index rebuild is triggered otherwise the index will simply be reorganized. Must be between 30 and 90 percent. Default value is 30. |
| ReorganizeThreshold   default value: 0 | __Type__    Int32   __Description__   Defines the min average fragmentation that an index should have to be maintained. Below this threshold the index will be ignored. Default value is 5. |
| UpdateStatsThreshold   default value: 0 | __Type__    Int32   __Description__   Specifies the minimum percentage of modification that should trigger an index statistic update. Default value is 10% |

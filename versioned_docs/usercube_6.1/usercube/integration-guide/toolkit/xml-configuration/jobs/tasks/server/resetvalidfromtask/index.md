# ResetValidFromTask

Initialize historization tables by setting each entity's first record ```ValidFrom``` value to 0001-01-01 00:00:00.00.

## Examples

```

<ResetValidFromTask Identifier="ResetValidFrom" DisplayName_L1="Initialize historization" />

```

## Properties

| Property | Details |
| --- | --- |
| DisplayName_L1   required | __Type__    String   __Description__   Display name of the task in language 1 (up to 16). |
| Identifier   optional | __Type__    String   __Description__   Unique identifier of the task. |

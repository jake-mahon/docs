# ProcessAccessCertificationItemsTask

Launch the deprovisioning of declined entitlement assignments for all AccessCertificationItems having a state of _PendingProcessing_ (3). Once completed, the new state of all processed items is _Applied_ (4).

## Examples

```

  <ProcessAccessCertificationItemsTask Identifier="ProcessAccessCertificationItems" DisplayName_L1="Process access certification items decisions"/>

```

## Properties

| Property | Details |
| --- | --- |
| DisplayName\_L1   required | __Type__    String   __Description__   Display name of the task in language 1 (up to 16). |
| Identifier   optional | __Type__    String   __Description__   Unique identifier of the task. |

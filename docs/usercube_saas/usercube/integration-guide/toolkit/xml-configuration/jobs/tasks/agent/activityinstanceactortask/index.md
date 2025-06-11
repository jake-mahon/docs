# Activity Instance Actor Task

Update all the actors of the workflows instances.

An activity Instance can have at most 20 actors.

## Examples

```

<ActivityInstanceActorTask Agent="Local" OpenIdClient="Job" DisplayName_L1="Update Actors for workflows instances"/>

```

## Properties

| Property | Details |
| --- | --- |
| Agent   required | __Type__    String   __Description__   Identifier of the agent on which the job will be launched.   __Warning:__ all jobs containing the task must be launched on the same agent or on the server. |
| DisplayName\_L1   required | __Type__    String   __Description__   Display name of the task in language 1 (up to 16). |
| OpenIdClient   required | __Type__    String   __Description__   Connection client for the task. |
| Identifier   optional | __Type__    String   __Description__   Unique identifier of the task. |

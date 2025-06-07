# Invoke Api Task

Tool to launch any Identity Manager API.

## Examples

```

  <InvokeApiTask Agent="Local" ApiUrl="/api/Job/TaskResourceType?api-version=1.0&squery=select ResourceTypeId where JobId=1&path=/Jobs/TaskResourceType/Query&QueryRootEntityType=TaskResourceType" DisplayName_L1="Invoke Api" HttpCommand="Get" Identifier="InvokeApi" OpenIdClient="Job"/>

```

## Properties

| Property | Details |
| --- | --- |
| Agent   required | __Type__    String   __Description__   Identifier of the agent on which the job will be launched.   __Warning:__ all jobs containing the task must be launched on the same agent or on the server. |
| ApiUrl   required | __Type__    String   __Description__   The Identity Manager Api relative url.   _Alternative definition_: If _TaskType_ is:   - SqlCmdTask: Connection string to the Database |
| DisplayName\_L1   required | __Type__    String   __Description__   Display name of the task in language 1 (up to 16). |
| HttpCommand   required | __Type__    HttpCommand   __Description__   Defines the ApiCommand (_Get_, _Put_, _Post_, or _Delete_) |
| OpenIdClient   required | __Type__    String   __Description__   Connection client for the task. |
| Body   optional | __Type__    String   __Description__   Path of the SQL file |
| Identifier   optional | __Type__    String   __Description__   Unique identifier of the task. |

# ExportTask

Runs the specified connection's export.

## Examples

```

<ExportTask Identifier="AD_Export" Agent="Local" Connection="ADExportFulfillment" OpenIdClient="Job" DisplayName_L1="AD - Extraction (delta)"/>

```

## Properties

| Property | Details |
| --- | --- |
| Agent   required | __Type__    String   __Description__   Identifier of the agent on which the job will be launched.   __Warning:__ all jobs containing the task must be launched on the same agent or on the server. |
| DisplayName\_L1   required | __Type__    String   __Description__   Display name of the task in language 1 (up to 16). |
| OpenIdClient   required | __Type__    String   __Description__   Connection client for the task. |
| Connection   optional | __Type__    String   __Description__   Identifier of the Connection in the appsettings.agent.json. |
| ContinueOnError   default value: false | __Type__    Boolean   __Description__   ```true``` if the execution of the Task returning an error should not stop the job machine state. |
| Identifier   optional | __Type__    String   __Description__   Unique identifier of the task. |
| IgnoreCookieFile   default value: false | __Type__    Boolean   __Description__   Ignore the Cookie Files |
| InitMode   default value: false | __Type__    Boolean   __Description__   ```true``` to prevent Usercube from archiving the changes (resource creation, update, deletion) performed by the task. Impacted tables are: ```UP_AssignedSingleRoles```, ```UP_AssignedCompositeRoles```, ```UP_AssignedResourceTypes```, ```UP_AssignedResourceScalars```, ```UP_AssignedResourceNavigations```, ```UP_AssignedResourceBinaries``` for ```ComputeRoleModelTask``` and only ```UR_Resources``` for ```FulfillTask```. |

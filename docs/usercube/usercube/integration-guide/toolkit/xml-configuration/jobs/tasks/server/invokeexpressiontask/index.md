# Invoke Expression Task

Launches on agent side a powershell script given as input.

## Examples

```

  <InvokeExpressionTask Identifier="MyScript" DisplayName_L1="My Script" Agent="Local" InputPath="C:/Scripts/myScript.ps1" OpenIdClient="Job"/>

```

## Properties

| Property | Details |
| --- | --- |
| DisplayName_L1   required | __Type__    String   __Description__   Display name of the task in language 1 (up to 16). |
| Agent   optional | __Type__    String   __Description__   Identifier of the agent on which the job will be launched.   __Note:__ when not specified, the task is to be launched on the server.   __Warning:__ all jobs containing the task must be launched on the same agent or on the server. |
| ContinueOnError   default value: false | __Type__    Boolean   __Description__   ```true``` if the execution of the Task returning an error should not stop the job machine state. |
| Identifier   optional | __Type__    String   __Description__   Unique identifier of the task. |
| InputPath   optional | __Type__    String   __Description__   Defines the input path.   Alternative definition: If _TaskType_ is:   - ProvisionerWorkflowTask: Path of the JSON file,   - ConfigurationTask: Directory of the configuration to import,   - ApiCallTask: Path of the JSON file,   - SqlCmdTask: Path of the SQL file, |
| OpenIdClient   optional | __Type__    String   __Description__   Connection client for the task. |

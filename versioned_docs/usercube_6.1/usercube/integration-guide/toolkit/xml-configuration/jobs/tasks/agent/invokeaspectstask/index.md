# InvokeAspectsTask

Call specific api in Usercube.

## Properties

| Property | Details |
| --- | --- |
| Agent   required | __Type__    String   __Description__   Identifier of the agent on which the job will be launched.   __Warning:__ all jobs containing the task must be launched on the same agent or on the server. |
| DisplayName_L1   required | __Type__    String   __Description__   Display name of the task in language 1 (up to 16). |
| OpenIdClient   required | __Type__    String   __Description__   Connection client for the task. |
| Identifier   optional | __Type__    String   __Description__   Unique identifier of the task. |
| OutputPath   optional | __Type__    String   __Description__   Path to save file.   _Alternative definition_: If _TaskType_ is:   - ProvisioningPolicyTask: Path to save the LDIF file,   - CollectorTask: Path of the working directory,   - CollectorChangesTask: Path of the working directory,   - CollectorADDirSyncTask: Path of the working directory,   - ProvisionerDownloadTask: Path of the destination directory, |

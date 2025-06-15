# InvokeSqlCommandTask

Takes as input an SQL file or an SQL command to output several CSV files that can be used by the collection.

## Examples

```

<InvokeSqlCommandTask Identifier="SQL_Command" DisplayName_L1="SQL Command" SQLCommand="SELECT id FROM uj_jobs" Agent="Local" OpenIdClient="Job" DatabaseIdentifier="UsercubeDemo" />

```

## Properties

| Property | Details |
| --- | --- |
| DisplayName_L1   required | __Type__    String   __Description__   Display name of the task in language 1 (up to 16). |
| Agent   optional | __Type__    String   __Description__   Identifier of the agent on which the job will be launched.   __Note:__ when not specified, the task is to be launched on the server.   __Warning:__ all jobs containing the task must be launched on the same agent or on the server. |
| ContinueOnError   default value: false | __Type__    Boolean   __Description__   ```true``` if the execution of the Task returning an error should not stop the job machine state. |
| DatabaseIdentifier   optional | __Type__    String   __Description__   Identifier of the Database to connect to |
| Encoding   optional | __Type__    String   __Description__   Encoding for the output files. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#see-the-list-of-available-encodings). |
| Identifier   optional | __Type__    String   __Description__   Unique identifier of the task. |
| IsNotAQuery   default value: false | __Type__    Boolean   __Description__   To know if the SQL command is a query or not |
| IsolationLevel   optional | __Type__    String   __Description__   Specifies the transaction locking behavior for the database connection. |
| OpenIdClient   optional | __Type__    String   __Description__   Connection client for the task. |
| OutputPath   optional | __Type__    String   __Description__   Path to save file.   _Alternative definition_: If _TaskType_ is:   - ProvisioningPolicyTask: Path to save the LDIF file,   - CollectorTask: Path of the working directory,   - CollectorChangesTask: Path of the working directory,   - CollectorADDirSyncTask: Path of the working directory,   - ProvisionerDownloadTask: Path of the destination directory, |
| Provider   optional | __Type__    String   __Description__   Database provider |
| ProviderAssemblyQualifiedName   optional | __Type__    String   __Description__   Database provider assembly qualified name |
| SQLCommand   optional | __Type__    String   __Description__   SQL Command to execute |
| SQLInputFile   optional | __Type__    String   __Description__   Path of the SQL file |
| Timeout   default value: 0 | __Type__    Int32   __Description__   Specify the timeout if the query need more 30 sec |

# Usercube-Invoke-ServerJob

## Invoke a Job (Server Side)

To launch the job in the Server side only you need to run the executable Usercube-Invoke-ServerJob.exe.

To know the task launch orders in job use the following exe: Usercube-Get-Job Steps .exe. See the [
Usercube-Get-JobSteps
](../get-jobsteps/index.md) topic for additional information.

## Examples

```

.\Usercube-Invoke-ServerJob.exe -g "CleanDatabase" -s secret

```

## Arguments

| Argument Name | Details |
| --- | --- |
|  |  |
| --- | --- |
| --job-identifier (-j)   required | __Type__    String   __Description__ Job's identifier to be launched. |
| --repair-job (-r)   optional | __Type__    No Value   __Description__ Bool to Decide launch Synchronization Validation or Provisioning with force. |
| --begin-job-step (-b)   optional | __Type__    String   __Description__ The step from which the job starts. |
| --end-job-step (-e)   optional | __Type__    String   __Description__ The step at which the job stops. |
| --task-identifier (-t)   optional | __Type__    String   __Description__ Specify the identification of the task to be started in the job (only this task will be started). |
| --force-synchronization-provisioning (-f)   optional | __Type__    Int64   __Description__ Forces execution when the threshold is reached or exceeded. |
| --task-type (-c)   optional | __Type__    String   __Description__ The first task found with this type is launched. |
| --task-string-contains (-s)   optional | __Type__    String   __Description__ Launches all tasks with an identifier containing the given value. |

# Usercube-Upgrade-DatabaseVersion

This tool is used to run the necessary migration scripts in order to upgrade the database structure from its current version to the most recent version.

## Examples

To upgrade a database with the connection string ```databaseConnectionString```, go to the Runtime folder of the newest version and launch the tool with the following argument:

```

./Usercube-Upgrade-DatabaseVersion.exe --connection-string "databaseConnectionString"

```

If the database has been correctly upgraded, the following message should appear: ```Database has been upgraded to version X.X.X```, with "X.X.X" being the newest version to which the migration was made.

### With a Mode

The following example runs the database upgrade tool only for backward compatible changes.

```

./Usercube-Upgrade-DatabaseVersion.exe --connection-string "databaseConnectionString" --mode BackwardCompatibleChanges

```

### With the Execute Predefined

The following example runs the database upgrade tool only for backward compatible changes and the predefined script. As the predefined script is always executed in the other modes, this option is useful only when specifying ```--mode BackwardCompatibleChanges```.

```

./Usercube-Upgrade-DatabaseVersion.exe --connection-string "databaseConnectionString" --mode BackwardCompatibleChanges --execute-predefined

```

## Arguments

| Argument Name | Details |
| --- | --- |
| --connection-string (-s)   required | __Type__    String   __Description__ Connection string to the database.   __Example__  ```--connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"``` |
| --execute-predefined   optional | __Type__    No Value   __Description__ Indicates that the predefined SQL file must be executed, when using the ```BackwardCompatibleChanges``` mode. |
| --mode   default value: All | __Type__    Enum   __Description__ ```All``` - run all the script types.   ```BackwardCompatibleChanges``` - only execute backward compatible scripts. __Note:__ the previous runtime can still work.   ```BreakingChanges``` - only execute breaking scripts. __Note:__ the server must be stopped.   ```CleanupChanges``` - only execute cleanup scripts, to cleanup the database after the server restarted with the new runtime.   __Example__  ```--mode BreakingChanges``` |
| --force-version   optional | __Type__    String   __Description__ Forces the database version instead of using the current one to replay the migration scripts. |

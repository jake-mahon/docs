# Usercube-Create-DatabaseViews

Generates entity model SQL views in the Usercube database. All views are prefixed by `zz_`. This
tool deletes all views starting by `zz_` and creates views from the entity model described in the
running configuration.

For every **EntityType**, a matching SQL view is created from the UR_Resource table.

## Example

The following example allows the user to connect to Usercube server at
`http://identitymanager.contoso.com`, using the ClientId `Job` and Secret `secret`, to generate views for
Usercube's database.

```
./identitymanager-Create-DatabaseViews.exe --api-secret secret --api-client-id Job --api-url "http://identitymanager.contoso.com" --log-level Debug
```

## Arguments

| Argument Name                                   | Details                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --progress-use-database optional                | **Type** String **Description** Update progress in the SQL database.                                                                                                                                                                                                                                                                      |
| --progress-use-database-child-instance optional | **Type** String **Description** Initiate child task instance.                                                                                                                                                                                                                                                                             |
| --progress-use-api optional                     | **Type** String **Description** Update progress with the API.                                                                                                                                                                                                                                                                             |
|                                                 |                                                                                                                                                                                                                                                                                                                                           |
| ---                                             | ---                                                                                                                                                                                                                                                                                                                                       |
| --api-client-id required                        | **Type** String **Description** Login used to authenticate to the server. Every request from agent to server needs to be authenticated with an [OpenID Connect ClientId/Secret pair](/docs/identitymanager/6.1/configuration-reference/xml-configuration/access-control-config.md), linked to a profile with the relevant permissions.    |
| --api-secret required                           | **Type** String **Description** Password used to authenticate to the server. Every request from agent to server needs to be authenticated with an [OpenID Connect ClientId/Secret pair](/docs/identitymanager/6.1/configuration-reference/xml-configuration/access-control-config.md), linked to a profile with the relevant permissions. |
| --api-url required                              | **Type** String **Description** URL of Usercube server.                                                                                                                                                                                                                                                                                   |
|                                                 |                                                                                                                                                                                                                                                                                                                                           |
| ---                                             | ---                                                                                                                                                                                                                                                                                                                                       |
| --log-level optional                            | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`.                                                                                                                                                                                                         |

You can explore created views in the Usercube database's Views folder in SQL Server Management
Studio

![SSMS Views](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/executables/references/create-databaseviews/identitymanager-create-databaseviews_ssms.webp)

# Usercube-FillBankingDatabase

## Example

### Import the banking sources to the `BankingSystem` database.

The Banking demo application uses a database named `BankingSystem`. Once the database is created,
the tables should be created and the sources should be imported, otherwise the Banking demo
application will be empty.

Consider that the database's connection string is `"data source=.;Database=BankingSystem;"`, the
sources are located in the `C:/SDK/DemoApps/Sources` folder, and the `BankingSystemTables` script is
located in `C:/SDK/DemoApps/Banking`. We initialize the database to create its tables, and import
the sources.

`--connection-string "data source=.;Database=BankingSystem;" --sources-path C:/SDK/DemoApps/Sources --banking-sql-path C:/SDK/DemoApps/Banking`

## Arguments

| Argument Name                | Details                                                                                                                                                                                                                                   |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --banking-sql-path required  | **Type** String **Description** Specifies the path to the folder containing the `BankingSystemTables.sql` file. **Example** Set path to `C:/SDK/DemoApps/Banking`: `--connection-string "data source=.;Database=BankingSystem;"`.         |
| --connection-string required | **Type** String **Description** Specifies the connection string of the `BankingSystem` database. **Example** Set the connection string's data source to the local machine: `--connection-string "data source=.;Database=BankingSystem;"`. |
| --sources-path required      | **Type** String **Description** Specifies the path to the banking sources folder. **Example** Set path to `C:/SDK/DemoApps/Sources`: `--sources-path C:/SDK/DemoApps/Sources`.                                                            |

# Usercube-Upgrade-DatabaseVersion

This tool is used to run the necessary migration scripts in order to upgrade the database structure
from its current version to the most recent version.

## Examples

To upgrade a database with the connection string `databaseConnectionString`, go to the Runtime
folder of the newest version and launch the tool with the following argument:

```

./identitymanager-Upgrade-DatabaseVersion.exe --connection-string "databaseConnectionString"

```

If the database has been correctly upgraded, the following message should appear:
`Database has been upgraded to version X.X.X`, with "X.X.X" being the newest version to which the
migration was made.

### With a Mode

The following example runs the database upgrade tool only for backward compatible changes.

```

./identitymanager-Upgrade-DatabaseVersion.exe --connection-string "databaseConnectionString" --mode BackwardCompatibleChanges

```

### With the Execute Predefined

The following example runs the database upgrade tool only for backward compatible changes and the
predefined script. As the predefined script is always executed in the other modes, this option is
useful only when specifying `--mode BackwardCompatibleChanges`.

```

./identitymanager-Upgrade-DatabaseVersion.exe --connection-string "databaseConnectionString" --mode BackwardCompatibleChanges --execute-predefined

```

## Arguments

| Argument Name                     | Details                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --connection-string (-s) required | **Type** String **Description** Connection string to the database. **Example** `--connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"`                                                                                                                                                                                                                                                |
| --execute-predefined optional     | **Type** No Value **Description** Indicates that the predefined SQL file must be executed, when using the `BackwardCompatibleChanges` mode.                                                                                                                                                                                                                                                                                                    |
| --mode default value: All         | **Type** Enum **Description** `All` - run all the script types. `BackwardCompatibleChanges` - only execute backward compatible scripts. **Note:** the previous runtime can still work. `BreakingChanges` - only execute breaking scripts. **Note:** the server must be stopped. `CleanupChanges` - only execute cleanup scripts, to cleanup the database after the server restarted with the new runtime. **Example** `--mode BreakingChanges` |
| --force-version optional          | **Type** String **Description** Forces the database version instead of using the current one to replay the migration scripts.                                                                                                                                                                                                                                                                                                                  |

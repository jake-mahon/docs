# Usercube-Configuration-Transform

This tool applies a series of transformations specified in a JSON file, on the content of a given
directory.

## Example

The following example searches all occurrences of `Directory_User` in the files inside
`C:/identitymanagerDemo/Conf` whose names:

- contain `guest` to replace all occurrences with `Directory_Guest`;
- contain `bot` to replace all occurrences with `Directory_Bot`.

The resulting files are saved in `C:/identitymanagerDemo/ConfTransformed`.

```

./identitymanager-Configuration-Transform.exe --input "C:/identitymanagerDemo/Conf" --output "C:/identitymanagerDemo/ConfTransformed" --transformation-file "C:/identitymanagerDemo/transformations.json"

```

transformations.json

```json
{
  "*guest*": {
    "Directory_User": "Directory_Guest"
  },
  "*bot*": {
    "Directory_User": "Directory_Bot"
  }
}
```

## Arguments

| Argument Name                  | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --input required               | **Type** String **Description** Path of the directory on which the transformations are to be applied.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --transformation-file required | **Type** String **Description** Path of the JSON file that contains the transformations to be applied. The first half of the following JSON transformation file intends to search all files in the input directory whose names are `filename` (case-insensitively). In those files, any occurrence of `ToBeReplaced` (case-sensitively) is replaced with `Replacement`. `{       "filename": {           "ToBeReplaced": "Replacement"       },       "partialfilename*": {           "ToBeReplaced2": "Replacement2"       }   }` **Note:** instead of a specific file name, Usercube can search for files whose names contain a specific string, using the character `*`. |
|                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---                            | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output required              | **Type** String **Description** Path of the folder where the result will be saved.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

# Usercube-Deploy-Configuration

Retrieves all XML configuration files from a given folder, in order to calculate the configuration
items to insert, update or delete in the application.

## Examples

### Locally

The following example deploys an on-premise configuration via a direct connection to the database
through its connection string:

```

./identitymanager-Deploy-Configuration.exe -d "C:/identitymanager/Conf" --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"

```

### Remotely

The following example deploys a SaaS configuration via an HTTP POST request to the server of the
remote configuration:

```

./identitymanager-Deploy-Configuration.exe -d "C:/identitymanager/Conf" --api-url https://my_usercube_instance.com

```

To be able to deploy a SaaS configuration, you must first provide your Usercube administrator with
identity information.
[See how to deploy a SaaS configuration](/docs/identitymanager/6.1/tools-utilities/cli-reference/configuration-tools.md)
for the first time.

## Arguments

| Argument Name                             | Details                                                                                                                                                                                                                                                             |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --configuration-directory (-d) required   | **Type** String **Description** Path to the configuration folder.                                                                                                                                                                                                   |
| --continuous-deployment (-a) optional     | **Type** No Value **Description** Enables automatic deployment when saving an XML file.                                                                                                                                                                             |
| --deployment-slot optional                | **Type** DeploymentSlot **Description** Type of the targeted server among the slot names provided by NETWRIX' SaaS team. For example: `Development`, `Staging`, `Production`. **Note:** required when working in a SaaS production environment.                     |
| --dump-changes-directory optional         | **Type** String **Description** Path to a directory that will receive the logs of all modifications made to the database. **Note:** can be used with `--simulate-only` for an additional security before deploying to production.                                   |
| --enable-saas-checks optional             | **Type** No Value **Description** Enables the checks necessary to deploy in a SaaS environment. **Note:** enabled automatically when working in SaaS. This argument can be used when deploying locally in order to anticipate a future SaaS deployment.             |
| --force-bindings (-bi) optional           | **Type** No Value **Description** Forces the recomputation of binding paths in the database.                                                                                                                                                                        |
| --force-cascade-delete optional           | **Type** No Value **Description** Enables the deletion or archiving of XML configuration items that require extra care and/or approval, usually for dependency issues. **Warning:** NETWRIX recommends using this option only when prompted by the deployment tool. |
| --force-categories (-c) optional          | **Type** No Value **Description** Forces the recomputation of the counters for role categories in the database.                                                                                                                                                     |
| --force-expressions (-e) optional         | **Type** No Value **Description** Forces the recomputation of C# expressions in the database.                                                                                                                                                                       |
| --force-permissions (-p) optional         | **Type** No Value **Description** Forces the recomputation of access permissions in the database.                                                                                                                                                                   |
| --force-translations optional             | **Type** No Value **Description** Forces the recomputation of the translations for the activity template states and the internal display name properties in the database.                                                                                           |
| --http-client-timeout-supplement optional | **Type** Int32 **Description** Duration (in minutes) after which the deployment command times out, in addition to the default 30 minutes.                                                                                                                           |
| --no-create-index optional                | **Type** No Value **Description** Disables the creation of indexes related to the configuration. **Warning:** NETWRIX recommends using this option only when advised by the support team.                                                                           |
| --reset-database optional                 | **Type** No Value **Description** Deletes the whole database and creates an empty one before deploying.                                                                                                                                                             |
| --resource-identity-property optional     | **Type** String **Description** Overrides the resource identity property used by the `SelectUserByIdentityQueryHandler` settings.                                                                                                                                   |
| --simulate-only optional                  | **Type** No Value **Description** Computes and previews on the screen all the changes to be made, but without editing the database.                                                                                                                                 |
|                                           |                                                                                                                                                                                                                                                                     |
| ---                                       | ---                                                                                                                                                                                                                                                                 |
| --api-client-id optional                  | **Type** String **Description** Login of the account authorized by NETWRIX for configuration export/deployment in a SaaS environment. **Note:** soon deprecated, rather contact the support team.                                                                   |
| --api-secret optional                     | **Type** String **Description** Password of the account authorized by NETWRIX for configuration export/deployment in a SaaS environment. **Note:** soon deprecated, rather contact the support team.                                                                |
| --api-url optional                        | **Type** String **Description** URL of the server to export/deploy the configuration to, for remote changes. **Note:** required when `--database-connection-string` is not specified.                                                                               |
|                                           |                                                                                                                                                                                                                                                                     |
| ---                                       | ---                                                                                                                                                                                                                                                                 |
| --database-connection-string optional     | **Type** String **Description** Connection string of the database. **Note:** required when `--api-url` is not specified.                                                                                                                                            |
| --product-translation optional            | **Type** No Value **Description** Path of the JSON file that contains the application's translations. [See more details on how to import the product's translations](/docs/identitymanager/6.1/index.md).                                                           |
| --scope optional                          | **Type** String **Description** Path of a folder or file to export/deploy, instead of exporting/deploying the whole configuration.                                                                                                                                  |
|                                           |                                                                                                                                                                                                                                                                     |
| ---                                       | ---                                                                                                                                                                                                                                                                 |
| --log-level optional                      | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`.                                                                                                                                   |

# Usercube-Export-Configuration

Generates in a folder the files of the configuration found in the database.

While the deployment process is about taking the configuration elements from the XML files to insert
them in the database, the export process is about taking the configuration elements from the
database to generate XML files:

- a basic export will export the XML configuration that was latest deployed to the database,
  including images like logos and favicons;
- a marked export will export the whole configuration as XML files, including the configuration
  elements created via the UI;

  As Usercube can be configured by writing manually in XML files and/or using the UI, the marked
  export helps combining both.

  NETWRIX recommends configuring Usercube via the UI as much as possible, and completing the
  configuration via XML files when needed.

- a translation export will export the translation JSON files;
- a scaffolding export will export the XML configuration generated by scaffoldings.

![Schema - Export Process](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/executables/references/export-configuration/identitymanager-export-configuration.webp)

For all export types, NETWRIX recommends using as output directory a folder other than the one
containing the old XML configuration. This way, the exported configuration does not overwrite the
old one, and:

- the changes can be clearly viewed in a file comparison tool;
- the interesting changes can be selected individually and inserted in the old configuration, to
  update the configuration while keeping any manual changes such as comments.

### Focus on the marked export

By default, the configuration elements created via the UI are stored in the database just like the
rest of the configuration, but they are not included in deployment and export processes.

While UI elements are not marked, they are not included in the XML/database comparison performed
during the configuration deployment process. It means that deploying any configuration will not
affect UI elements.

On the other hand, once UI elements are marked, they will be included in the XML/database comparison
performed during the next configuration deployment process. Then, if these UI elements are not in
the deployed XML files, they will be removed from the database.

**Be careful about what configuration to deploy and export**.

When configuring through both the UI and XML files, make sure to:

- export all UI modifications before making changes in XML files and deploying the configuration
  again;
- deploy all XML modifications before making changes in the UI and exporting the configuration
  again.

## Examples

### Locally vs. remotely

The following example exports an on-premise configuration via a direct connection to the database
through its connection string:

```

./identitymanager-Export-Configuration.exe -d "C:/identitymanager/ExportedConf" --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"

```

The following example exports a SaaS configuration via an HTTP POST request to the server of the
remote configuration:

```

./identitymanager-Export-Configuration.exe -d "C:/identitymanager/ExportedConf" --api-url https://my_usercube_instance.com

```

To be able to export a SaaS configuration, you must first provide your Usercube administrator with
identity information.
[See how to export a SaaS configuration](/docs/identitymanager/6.1/tools-utilities/cli-reference/configuration-tools.md)
for the first time.

### Basic export for a change of environment

The following example exports all configuration elements of the database as a set of XML files, to
the `C:/identitymanager/ExportedConf` folder, for example to move from the pre-production environment to
the production environment.

```

./identitymanager-Export-Configuration.exe --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;" --configuration-directory "C:/identitymanager/ExportedConf"

```

All XML files from `C:/identitymanager/ExportedConf` are removed and replaced with the new set of XML
files, generated based on the configuration elements from the database.

The default behavior of this tool exports all XML files, from the configuration elements stored in
the database and the XML/database relationships, as well as logos and favicons. Translations are not
exported.

Most modifications made in the UI will be ignored too.

### Export UI configuration elements outside the role model

The following example exports all configuration elements as a set of XML files, including the
configuration modifications made through the UI, except any elements linked to the role model.

```

./identitymanager-Export-Configuration.exe --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;" --configuration-directory "C:/identitymanager/ExportedConf" --mark-for-export

```

All XML files from `C:/identitymanager/ExportedConf` are removed and replaced with the new set of XML
files, generated based on the configuration elements from the database, including UI elements (not
role-model-related) that are now marked for export.

### Export all UI configuration elements

The following example exports all configuration elements as a set of XML files, including all
configuration modifications made through the UI, especially role-model-related elements.

```

./identitymanager-Export-Configuration.exe --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;" --configuration-directory "C:/identitymanager/ExportedConf" --mark-for-export --mark-rolemodel-for-export

```

All XML files from `C:/identitymanager/ExportedConf` are removed and replaced with the new set of XML
files, generated based on the configuration elements from the database, including all UI elements
that are now marked for export.

### Export translation files

The following example exports to `C:/identitymanager/ExportedConf` the JSON translation files stored in the
database, one per language, replacing the ancient versions potentially pre-existing in the output
directory.

```

./identitymanager-Export-Configuration.exe --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;" --configuration-directory "C:/identitymanager/ExportedConf" --export-translation

```

### Export scaffoldings for debug

The following example exports XML files containing the configuration generated by all scaffoldings.
It exports one folder per scaffolding type, and in each folder one XML file per scaffolding,
containing the configuration generated by the scaffolding.

```

./identitymanager-Export-Configuration.exe --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;" --configuration-directory "C:/identitymanager/ConfScaffoldings" --export-scaffolding

```

All XML files from `C:/identitymanager/ConfScaffoldings` are removed and replaced with the new set of XML
files, generated based on the scaffoldings from the configuration.

The scaffolding export's output is meant only for viewing in debug situations and must not be
inserted in the configuration.

## Arguments

| Argument Name                           | Details                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --configuration-directory (-d) required | **Type** String **Description** Path of a directory that will receive the exported configuration.                                                                                                                                                                                                                                                                                                                                   |
| --default-file optional                 | **Type** String **Description** Path of the file where configuration items are stored by default, when they are not related to a predefined storing file. **Note:** when not specified, these items are not exported.                                                                                                                                                                                                               |
| --export-scaffolding optional           | **Type** No Value **Description** Exports all scaffoldings and the scaffolded items, i.e. all items generated by scaffoldings.                                                                                                                                                                                                                                                                                                      |
| --export-translation optional           | **Type** No Value **Description** Exports the JSON files containing all translations, by language.                                                                                                                                                                                                                                                                                                                                  |
| --format-configuration optional         | **Type** No Value **Description** Formats the configuration from the folder specified in `--configuration-directory`, in order to correspond to the export result.                                                                                                                                                                                                                                                                  |
| --mark-for-export optional              | **Type** No Value **Description** Exports all configuration elements that were created via the UI, except for those linked to the role model, i.e. the elements exported by the `--mark-rolemodel-for-export` option.                                                                                                                                                                                                               |
| --mark-rolemodel-for-export optional    | **Type** No Value **Description** Exports all the configuration elements linked to the role model: `SingleRole`; `CompositeRole`; `SingleRoleRule`; `CompositeRoleRule`; and the following rules when they are linked to a role: `PendingApprovalRule`; `ResourceNavigationRule`; `ResourceScalarRule`; `ResourceTypeRule`; `ResourceBinaryRule`. **Warning:** this argument cannot be used without the `--mark-for-export` option. |
| --marked-paths optional                 | **Type** String List **Description** Identifiers of the elements configured through the UI that need to be exported and thus marked for export. **Note:** used to export specific elements, while the `--mark-*-for-export` options are meant to export whole packages of elements.                                                                                                                                                 |
|                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---                                     | ---                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --api-client-id optional                | **Type** String **Description** Login of the account authorized by NETWRIX for configuration export/deployment in a SaaS environment. **Note:** soon deprecated, rather contact the support team.                                                                                                                                                                                                                                   |
| --api-secret optional                   | **Type** String **Description** Password of the account authorized by NETWRIX for configuration export/deployment in a SaaS environment. **Note:** soon deprecated, rather contact the support team.                                                                                                                                                                                                                                |
| --api-url optional                      | **Type** String **Description** URL of the server to export/deploy the configuration to, for remote changes. **Note:** required when `--database-connection-string` is not specified.                                                                                                                                                                                                                                               |
|                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---                                     | ---                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --database-connection-string optional   | **Type** String **Description** Connection string of the database. **Note:** required when `--api-url` is not specified.                                                                                                                                                                                                                                                                                                            |
| --product-translation optional          | **Type** No Value **Description** Path of the JSON file that contains the application's translations. [See more details on how to import the product's translations](/docs/identitymanager/6.1/index.md).                                                                                                                                                                                                                           |
| --scope optional                        | **Type** String **Description** Path of a folder or file to export/deploy, instead of exporting/deploying the whole configuration.                                                                                                                                                                                                                                                                                                  |
|                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---                                     | ---                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --log-level optional                    | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`.                                                                                                                                                                                                                                                                                                   |

# Usercube-Generate-Configuration

Generates from a CSV file the configuration of a connector with these entities.

## Overview

Two subcommands are possible for generation.

- simpleconnector
- complexconnector

The simple connector allows you to generate the configuration for a CSV file and create the
connector. The complex connector allows you to generate the configuration for a list of CSV files
and create the connector.

### 1. Simple connector

From a CSV file, generates the configuration of the entity representing the CSV file.

**The subcommand** **_simpleconnector_** **must precede the arguments.**

### 2. Complex connector

From a list of CSV files, generates the configuration of the entities representing each file. The
complex connector requires as an argument an xml file containing all the CSV files to be processed
as well as the primary keys of these files.

Example of xml file

```

<Connector xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" Name="HR" DefaultEncoding="UTF-8" DefaultSeparator=";">    <File Path="C:/identitymanager/Sources/rh_persons.csv" />    <File Path="C:/identitymanager/Sources/rh_services.csv" />    <File Path="C:/identitymanager/Sources/rh_sites.csv" />    <File Path="C:/identitymanager/Sources/rh_Categories.csv" />    <PrimaryKey Path="C:/identitymanager/Sources/rh_persons.csv" Header="EmplyoeId" EntityTypeName="HR_Person" />    <PrimaryKey Path="C:/identitymanager/Sources/rh_services.csv" Header="Code" EntityTypeName="HR_Service" />    <PrimaryKey Path="C:/identitymanager/Sources/rh_sites.csv" Header="Code" EntityTypeName="HR_Site" />    <PrimaryKey Path="C:/identitymanager/Sources/rh_Categories.csv" Header="Code" EntityTypeName="HR_Category" /></Connector>

```

- Path: CSV file path.
- File: Name of the files to be processed.
- PrimaryKey: Fills in the primary key of the CSV file.
- Header: Column name in the CSV file.
- EntityTypeName: Indicates the name of the entity to be created.
- Name: name of the connector to be created.

**The subcommand** **_complexconnector_** **must precede the arguments.**

## Examples

### Simple connector

```

./identitymanager-Generate-Configuration.exe simpleconnector -g "C:/GeneratedFile/file" -f "C:/SourceFile/confFile.csv"

```

### Complex connector

```

./identitymanager-Generate-Configuration.exe complexconnector -g "C:/GeneratedFile/file" "C:/SourceFile/confFile.xml"

```

## Arguments

| Argument Name                       | Details                                                                                                                                                                                                                                             |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --generated-file (-g) required      | **Type** String **Description** Path to the generated file.                                                                                                                                                                                         |
| --csv-path (-h) optional            | **Type** String **Description** Path to the CSV file. **Note:** used only for a simple connector.                                                                                                                                                   |
| --encoding (-e) optional            | **Type** String **Description** Encoding of the CSV file. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#see-the-list-of-available-encodings). **Note:** used only for a simple connector. |
| --csv-separator (-t) optional       | **Type** String **Description** Column separator of the CSV file. **Note:** used only for a simple connector.                                                                                                                                       |
| --generated-connector (-r) optional | **Type** String **Description** Name of the generated connector. **Note:** used only for a simple connector.                                                                                                                                        |
| --keep-all-columns (-k) optional    | **Type** No Value **Description** Keeps all the columns.                                                                                                                                                                                            |
| --connector-description optional    | **Type** String **Description** XML file that describes the CSV files and their primary key columns.                                                                                                                                                |
|                                     |                                                                                                                                                                                                                                                     |
| ---                                 | ---                                                                                                                                                                                                                                                 |
| --file-cert-thumbprint optional     | **Type** String **Description** Thumbprint of the certificate when the certificate is in the store.                                                                                                                                                 |
| --file-cert-dn optional             | **Type** String **Description** Subject Distinguished Name of the certificate when the certificate is in the store.                                                                                                                                 |
| --file-cert-store-location optional | **Type** String **Description** Store location of the certificate when the certificate is in the store.                                                                                                                                             |
| --file-cert-store-name optional     | **Type** String **Description** Store name of the certificate when the certificate is in the store.                                                                                                                                                 |
| --file-cert-file optional           | **Type** String **Description** File path of the certificate when the certificate is in a PFX file.                                                                                                                                                 |
| --file-cert-password optional       | **Type** String **Description** Password of the certificate when the certificate is in a PFX file.                                                                                                                                                  |
|                                     |                                                                                                                                                                                                                                                     |
| ---                                 | ---                                                                                                                                                                                                                                                 |
| --log-level optional                | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`.                                                                                                                   |

# Usercube-Manage-ConfigurationDependantIndexes

This tool creates the necessary SQL indexes based on the latest deployed configuration to optimize
certain queries performances.

## Available optimizations:

- Creates SQL indexes and statistics to optimize searches on specific entity types
- Creates SQL indexes to optimize joins between records and main entity types
- Creates SQL indexed views used to compute dashboard counters

## Examples

```

./identitymanager-Manage-ConfigurationDependantIndexes.exe -e "Directory_User" -r "Directory_UserRecord" "Directory_Guest" -dc -s  "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;" -a

```

./identitymanager-Manage-ConfigurationDependantIndexes.exe -auto -dc -s "data
source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;" -a

```

## Arguments

| Argument Name | Details |
| --- | --- |
| --entityTypes (-e)   optional | __Type__    String List   __Description__ Sets the list of entity types for which optimization indexes will be created/updated. |
| --recordEntityTypes (-r)   optional | __Type__    String List   __Description__ Sets the list of record entity types for which optimization indexes will be created/updated. |
| --userProperties (-p)   optional | __Type__    String List   __Description__ Sets the list of �User' properties that link the records and the users. (the order of the given �userProperties' must match the order of the given �recordEntityTypes'). |
| --dashboardCounter (-dc)   optional | __Type__    No Value   __Description__ Adjusts the indexed views for the dashboard counters appropriately. |
| --auto   optional | __Type__    No Value   __Description__ The entity types, record entity types and user properties are deduced automatically from the provisioning rules configured in the database. |
| --apply-to-database (-a)   optional | __Type__    No Value   __Description__ Directly applies the resulting SQL script to the database. |
|  |  |
| --- | --- |
| --database-connection-string   required | __Type__    String   __Description__ Connection string of the database. |
```

# Usercube-Upgrade-ConfigurationVersion

This tool is used to upgrade your configuration from your current version entered in settings to the
latest version.

## Examples

```

./identitymanager-Upgrade-ConfigurationVersion.exe --version "5.1.0" --xml-path "C:/identitymanagerDemo/Conf" --output "C:/identitymanagerDemo/Conf2"

```

In this example, the configuration files are in the folder "C:/identitymanagerDemo/Conf" and at version
"5.1.0". This tools will upgrade all the xml files to the latest version and save them in the folder
"C:/identitymanagerDemo/Conf2".

## Arguments

| Argument Name        | Details                                                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| --version required   | **Type** String **Description** Current version.                                                                                  |
| --xml-path required  | **Type** String **Description** Current xml configuration folder to migrate.                                                      |
|                      |                                                                                                                                   |
| ---                  | ---                                                                                                                               |
| --output required    | **Type** String **Description** Path of the folder where the result will be saved.                                                |
|                      |                                                                                                                                   |
| ---                  | ---                                                                                                                               |
| --log-level optional | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`. |

# Deploy the Configuration

This guide shows how to deploy the XML configuration, in order to build and use the Usercube
application.

## Overview

The process for configuration deployment varies according to the situation:

- when working on-premise, the configuration must be deployed locally;
- when working SaaS, the configuration must be deployed remotely.

## Deploy the Configuration Locally

Deploy a local XML configuration by using the
[`Deploy-Configuration` executable](/docs/identitymanager/6.1/tools-utilities/cli-reference/configuration-tools.md)
and declaring at least:

- the configuration directory;
- the connection string of the database.

> ```
>
> ./identitymanager-Deploy-Configuration.exe -d "C:\Usercube\Conf" --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"
>
> ```

## Deploy the Configuration Remotely

Deploy a SaaS XML configuration by proceeding as follows:

1. Log in for configuration deployment/export with the
   [`Login` executable](/docs/identitymanager/6.1/tools-utilities/cli-reference/index.md).

   Usercube provides an Open Id Connect (OIDC) authentication process in order to ensure strong
   security, visibility and ease of use.

   NETWRIX recommends using Usercube's dedicated in-house OIDC Identity Provider (IDP), but you can
   also use your own IDP if you want to manage authentication yourself.

   When using your own IDP, make sure that the IDP implements a valid OIDC protocol and serves id
   tokens.

   > For example, when using Usercube's IDP:
   >
   > ```
   >
   > ./identitymanager-Login.exe
   >
   > ```

   > For example, when using another IDP:
   >
   > ```
   >
   > Usercube-Login.exe --authority https://my_oidc_authentication_server.com --client-id 34b3c-fb45da-3ed32
   >
   > ```

   Either method will open your default browser to `http://localhost:5005` where you will be
   redirected to the specified IDP and will be prompted to log in.

   Specify `--port <port>` if you want the login page to use another local port.

   If you have already successfully deployed or exported your SaaS configuration at least once,
   then there is no need to communicate the authentication information again. Go directly to
   step 4.

   However, if, since then, there has been a change in the identity deploying/exporting the
   configuration or in the Identity Provider used to log in at step 1, then go through the whole
   process again.

2. Log in to the IDP to be redirected back to this screen:

   ![Usercube-Login.exe Success Screen](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/how-tos/export-configuration/identitymanager-login_success_v602.webp)

   Once authenticated, an identification token is stored on your local machine for the
   authentication to Usercube's deployment and export processes.

3. Copy the entire text within the blue square and send it to your Usercube administrator.

   The administrator will add the identity information to the configuration of your Usercube
   instance, to allow the configuration deployment/export.

4. Deploy the configuration by using the
   [`Deploy-Configuration` executable](/docs/identitymanager/6.1/tools-utilities/cli-reference/configuration-tools.md)
   and declaring at least:

   - the configuration directory;
   - the deployment environment;
   - the API URL of your Usercube instance.
     > ```
     >
     > ./identitymanager-Deploy-Configuration.exe -d "C:\Usercube\Conf" --api-url https://my_usercube_instance.com --deployment-slot Development
     >
     > ```

   You can deploy the configuration by launching only the `Deploy-Configuration` executable until
   the authentication token expires. Then, the token must be refreshed via the `Login` executable
   before deploying again.

   The token served by Usercube's IDP expires after one hour.

# Export the Configuration

This guide shows how to export the configuration as XML files to a given folder.

## Overview

The process for configuration export varies according to the situation:

- when working on-premise, the configuration must be exported locally;
- when working SaaS, the configuration must be exported remotely.

[See more details on configuration export](/docs/identitymanager/6.1/tools-utilities/cli-reference/configuration-tools.md).

## Export the Configuration Locally

Export your configuration by using the
[`Export-Configuration` executable](/docs/identitymanager/6.1/tools-utilities/cli-reference/configuration-tools.md)
and declaring at least:

- the directory where the configuration is to be exported to;
- the connection string of the database.

> ```
>
> ./identitymanager-Export-Configuration.exe --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;" --configuration-directory "C:/identitymanager/ExportedConf"
>
> ```

## Export the Configuration Remotely

Export a SaaS configuration by proceeding as follows:

1. Log in for configuration deployment/export with the
   [`Login` executable](/docs/identitymanager/6.1/tools-utilities/cli-reference/index.md).

   Usercube provides an Open Id Connect (OIDC) authentication process in order to ensure strong
   security, visibility and ease of use.

   NETWRIX recommends using Usercube's dedicated in-house OIDC Identity Provider (IDP), but you can
   also use your own IDP if you want to manage authentication yourself.

   When using your own IDP, make sure that the IDP implements a valid OIDC protocol and serves id
   tokens.

   > For example, when using Usercube's IDP:
   >
   > ```
   >
   > ./identitymanager-Login.exe
   >
   > ```

   > For example, when using another IDP:
   >
   > ```
   >
   > Usercube-Login.exe --authority https://my_oidc_authentication_server.com --client-id 34b3c-fb45da-3ed32
   >
   > ```

   Either method will open your default browser to `http://localhost:5005` where you will be
   redirected to the specified IDP and will be prompted to log in.

   Specify `--port <port>` if you want the login page to use another local port.

   If you have already successfully deployed or exported your SaaS configuration at least once,
   then there is no need to communicate the authentication information again. Go directly to
   step 4.

   However, if, since then, there has been a change in the identity deploying/exporting the
   configuration or in the Identity Provider used to log in at step 1, then go through the whole
   process again.

2. Log in to the IDP to be redirected back to this screen:

   ![Usercube-Login.exe Success Screen](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/how-tos/export-configuration/identitymanager-login_success_v602.webp)

   Once authenticated, an identification token is stored on your local machine for the
   authentication to Usercube's deployment and export processes.

3. Copy the entire text within the blue square and send it to your Usercube administrator.

   The administrator will add the identity information to the configuration of your Usercube
   instance, to allow the configuration deployment/export.

4. Export the configuration by using the
   [`Export-Configuration` executable](/docs/identitymanager/6.1/tools-utilities/cli-reference/configuration-tools.md)
   and declaring at least:

   - the configuration directory;
   - the API URL of your Usercube instance.
     > ```
     >
     > ./identitymanager-Export-Configuration.exe -d "C:\Usercube\ExportedConf" --api-url https://my_usercube_instance.com
     >
     > ```

   You can export the configuration by launching only the `Export-Configuration` executable until
   the authentication token expires. Then, the token must be refreshed via the `Login` executable
   before exporting again.

   The token served by Usercube's IDP expires after one hour.

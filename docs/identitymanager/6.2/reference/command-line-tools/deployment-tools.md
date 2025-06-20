# Usercube-Deploy Configuration

Retrieves all XML configuration files from a given folder, in order to calculate the configuration
items to insert, update or delete in the application.

## Examples

Locally

The following example deploys an on-premise configuration via a direct connection to the database
through its connection string:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
./identitymanager-Deploy-Configuration.exe -d "C:/identitymanager/Conf" --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"
```

Remotely

The following example deploys a SaaS configuration via an HTTP POST request to the server of the
remote configuration:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
./identitymanager-Deploy-Configuration.exe -d "C:/identitymanager/Conf" --api-url https://my_usercube_instance.com
```

**_RECOMMENDED:_** To be able to deploy a SaaS configuration, you must first provide your Identity
Manager administrator with identity information. See the
[ Identity Manager Deploy the Configuration ](/docs/identitymanager/6.2/development/configuration-toolkit/deployment.md)
topic for additional information.

## Arguments

The table below displays the arguments for the Identity Manager configuration deployment.

| Argument Name                             | Type           | Description                                                                                                                                                                                                                                                     |
| ----------------------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --configuration-directory (-d) required   | String         | Path to the configuration folder.                                                                                                                                                                                                                               |
| --continuous-deployment (-a) optional     | No Value       | Enables automatic deployment when saving an XML file.                                                                                                                                                                                                           |
| --deployment-slot optional                | DeploymentSlot | Type of the targeted server among the slot names provided by Netwrix' SaaS team. For example: Development, Staging, Production. it is required when working in a SaaS production environment.                                                                   |
| --dump-changes-directory optional         | String         | Path to a directory that will receive the logs of all modifications made to the database. _Remember,_ it can be used with --simulate-only for an additional security before deploying to production.                                                            |
| --enable-saas-checks optional             | No Value       | Enables the checks necessary to deploy in a SaaS environment. _Remember,_ it is enabled automatically when working in SaaS. This argument can be used when deploying locally in order to anticipate a future SaaS deployment.                                   |
| --force-bindings (-bi) optional           | No Value       | Forces the recomputation of binding paths in the database.                                                                                                                                                                                                      |
| --force-cascade-delete optional           | No Value       | Enables the deletion or archiving of XML configuration items that require extra care and/or approval, usually for dependency issues. _Remember,_ Netwrix recommends using this option only when prompted by the deployment tool.                                |
| --force-categories (-c) optional          | No Value       | Forces the recomputation of the counters for role categories in the database.                                                                                                                                                                                   |
| --force-expressions (-e) optional         | No Value       | Forces the recomputation of C# expressions in the database.                                                                                                                                                                                                     |
| --force-permissions (-p) optional         | No Value       | Forces the recomputation of access permissions in the database.                                                                                                                                                                                                 |
| --force-translations optional             | No Value       | Forces the recomputation of the translations for the activity template states and the internal display name properties in the database.                                                                                                                         |
| --http-client-timeout-supplement optional | Int32          | Duration (in minutes) after which the deployment command times out, in addition to the default 30 minutes.                                                                                                                                                      |
| --no-create-index optional                | No Value       | Disables the creation of indexes related to the configuration. _Remember,_ Netwrix recommends using this option only when advised by the support team.                                                                                                          |
| --reset-database optional                 | No Value       | Deletes the whole database and creates an empty one before deploying.                                                                                                                                                                                           |
| --resource-identity-property optional     | String         | Overrides the resource identity property used by the **SelectUserByIdentityQueryHandler** settings.                                                                                                                                                             |
| --simulate-only optional                  | No Value       | Computes and previews on the screen all the changes to be made, but without editing the database.                                                                                                                                                               |
| --api-client-id optional                  | String         | Login of the account authorized by Netwrix for configuration export/deployment in a SaaS environment. **NOTE:** It will be deprecated soon, rather contact the support team.                                                                                    |
| --api-secret optional                     | String         | Password of the account authorized by Netwrix for configuration export/deployment in a SaaS environment. **NOTE:** It will be deprecated soon, rather contact the support team.                                                                                 |
| --api-url optional                        | String         | URL of the server to export/deploy the configuration to, for remote changes. _Remember,_ it is required when --database-connection-string is not specified.                                                                                                     |
| --database-connection-string optional     | String         | Connection string of the database. _Remember,_ it is required when --api-url is not specified.                                                                                                                                                                  |
| --product-translation optional            | No Value       | Path of the JSON file that contains the application's translations. See the [Import Product Translations into Identity Manager](/docs/identitymanager/6.2/troubleshooting/common-issues.md) topic for more details on how to import the product's translations. |
| --log-level optional                      | LogLevel       | Level of log information among: Verbose; Debug; Information; Warning; Error; Fatal.                                                                                                                                                                             |

# Usercube-Export-Configuration

Generates in a folder the files of the configuration found in the database.

While the deployment process is about taking the configuration elements from the XML files to insert
them in the database, the export process is about taking the configuration elements from the
database to generate XML files:

- A basic export will export the XML configuration that was latest deployed to the database,
  including images like logos and favicons;
- A marked export will export the whole configuration as XML files, including the configuration
  elements created via the UI;

  As Identity Manager can be configured by writing manually in XML files and/or using the UI, the
  marked export helps combining both.

  Netwrix Identity Manager (formerly Usercube) recommends configuring Identity Manager via the UI
  as much as possible, and completing the configuration via XML files when needed.

- a basic export will export the translation JSON files;
- a scaffolding export will export the XML configuration generated by scaffoldings.

![Schema - Export Process](/img/product_docs/identitymanager/identitymanager/integration-guide/executables/references/export-configuration/identitymanager-export-configuration.webp)

For all export types, Netwrix Identity Manager (formerly Usercube) recommends using as output
directory a folder other than the one containing the old XML configuration. This way, the exported
configuration does not overwrite the old one, and:

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

Be careful about what configuration to deploy and export.

When configuring through both the UI and XML files, make sure to:

- Export all UI modifications before making changes in XML files and deploying the configuration
  again;
- Deploy all XML modifications before making changes in the UI and exporting the configuration
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

To be able to export a SaaS configuration, you must first provide your Identity
Manager administrator with identity information. See the
[ Export the Configuration ](/docs/identitymanager/6.2/development/configuration-toolkit/deployment.md) topic for
additional information.

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
| --api-client-id optional                | **Type** String **Description** Login of the account authorized by Netwrix Identity Manager (formerly Usercube) for configuration export/deployment in a SaaS environment. **Note:** soon deprecated, rather contact the support team.                                                                                                                                                                                              |
| --api-secret optional                   | **Type** String **Description** Password of the account authorized by NETWRIX for configuration export/deployment in a SaaS environment. **Note:** soon deprecated, rather contact the support team.                                                                                                                                                                                                                                |
| --api-url optional                      | **Type** String **Description** URL of the server to export/deploy the configuration to, for remote changes. **Note:** required when `--database-connection-string` is not specified.                                                                                                                                                                                                                                               |
|                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---                                     | ---                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --database-connection-string optional   | **Type** String **Description** Connection string of the database. **Note:** required when `--api-url` is not specified.                                                                                                                                                                                                                                                                                                            |
| --product-translation optional          | **Type** No Value **Description** Path of the JSON file that contains the application's translations. See the [Import Product Translations into Identity Manager](/docs/identitymanager/6.2/troubleshooting/common-issues.md) topic for additional information.                                                                                                                                                                     |
| --scope optional                        | **Type** String **Description** Path of a folder or file to export/deploy, instead of exporting/deploying the whole configuration.                                                                                                                                                                                                                                                                                                  |
|                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---                                     | ---                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --log-level optional                    | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`.                                                                                                                                                                                                                                                                                                   |

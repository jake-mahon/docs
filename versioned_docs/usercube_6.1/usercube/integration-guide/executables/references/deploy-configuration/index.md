# Usercube-Deploy-Configuration

Retrieves all XML configuration files from a given folder, in order to calculate the configuration items to insert, update or delete in the application.

## Examples

### Locally

The following example deploys an on-premise configuration via a direct connection to the database through its connection string:

```

./Usercube-Deploy-Configuration.exe -d "C:/Usercube/Conf" --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"

```

### Remotely

The following example deploys a SaaS configuration via an HTTP POST request to the server of the remote configuration:

```

./Usercube-Deploy-Configuration.exe -d "C:/Usercube/Conf" --api-url https://my_usercube_instance.com

```

To be able to deploy a SaaS configuration, you must first provide your Usercube administrator with identity information. [See how to deploy a SaaS configuration](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/how-tos/deploy-configuration/index.md#see-how-to-deploy-a-saas-configuration) for the first time.

## Arguments

| Argument Name | Details |
| --- | --- |
| --configuration-directory (-d)   required | __Type__    String   __Description__ Path to the configuration folder. |
| --continuous-deployment (-a)   optional | __Type__    No Value   __Description__ Enables automatic deployment when saving an XML file. |
| --deployment-slot   optional | __Type__    DeploymentSlot   __Description__ Type of the targeted server among the slot names provided by NETWRIX' SaaS team. For example: ```Development```, ```Staging```, ```Production```.   __Note:__ required when working in a SaaS production environment. |
| --dump-changes-directory   optional | __Type__    String   __Description__ Path to a directory that will receive the logs of all modifications made to the database.   __Note:__ can be used with ```--simulate-only``` for an additional security before deploying to production. |
| --enable-saas-checks   optional | __Type__    No Value   __Description__ Enables the checks necessary to deploy in a SaaS environment.   __Note:__ enabled automatically when working in SaaS. This argument can be used when deploying locally in order to anticipate a future SaaS deployment. |
| --force-bindings (-bi)   optional | __Type__    No Value   __Description__ Forces the recomputation of binding paths in the database. |
| --force-cascade-delete   optional | __Type__    No Value   __Description__ Enables the deletion or archiving of XML configuration items that require extra care and/or approval, usually for dependency issues.   __Warning:__ NETWRIX recommends using this option only when prompted by the deployment tool. |
| --force-categories (-c)   optional | __Type__    No Value   __Description__ Forces the recomputation of the counters for role categories in the database. |
| --force-expressions (-e)   optional | __Type__    No Value   __Description__ Forces the recomputation of C# expressions in the database. |
| --force-permissions (-p)   optional | __Type__    No Value   __Description__ Forces the recomputation of access permissions in the database. |
| --force-translations   optional | __Type__    No Value   __Description__ Forces the recomputation of the translations for the activity template states and the internal display name properties in the database. |
| --http-client-timeout-supplement   optional | __Type__    Int32   __Description__ Duration (in minutes) after which the deployment command times out, in addition to the default 30 minutes. |
| --no-create-index   optional | __Type__    No Value   __Description__ Disables the creation of indexes related to the configuration.   __Warning:__ NETWRIX recommends using this option only when advised by the support team. |
| --reset-database   optional | __Type__    No Value   __Description__ Deletes the whole database and creates an empty one before deploying. |
| --resource-identity-property   optional | __Type__    String   __Description__ Overrides the resource identity property used by the ```SelectUserByIdentityQueryHandler``` settings. |
| --simulate-only   optional | __Type__    No Value   __Description__ Computes and previews on the screen all the changes to be made, but without editing the database. |
|  |  |
| --- | --- |
| --api-client-id   optional | __Type__    String   __Description__ Login of the account authorized by NETWRIX for configuration export/deployment in a SaaS environment. __Note:__ soon deprecated, rather contact the support team. |
| --api-secret   optional | __Type__    String   __Description__ Password of the account authorized by NETWRIX for configuration export/deployment in a SaaS environment. __Note:__ soon deprecated, rather contact the support team. |
| --api-url   optional | __Type__    String   __Description__ URL of the server to export/deploy the configuration to, for remote changes.   __Note:__ required when ```--database-connection-string``` is not specified. |
|  |  |
| --- | --- |
| --database-connection-string   optional | __Type__    String   __Description__ Connection string of the database.   __Note:__ required when ```--api-url``` is not specified. |
| --product-translation   optional | __Type__    No Value   __Description__ Path of the JSON file that contains the application's translations. [See more details on how to import the product's translations](/versioned_docs/usercube_6.1/usercube/integration-guide/ui/how-tos/producttranslations/index.md). |
| --scope   optional | __Type__    String   __Description__ Path of a folder or file to export/deploy, instead of exporting/deploying the whole configuration. |
|  |  |
| --- | --- |
| --log-level   optional | __Type__    LogLevel   __Description__ Level of log information among: ```Verbose```; ```Debug```; ```Information```; ```Warning```; ```Error```; ```Fatal```. |

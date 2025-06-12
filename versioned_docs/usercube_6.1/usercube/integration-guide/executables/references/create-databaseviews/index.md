# Usercube-Create-DatabaseViews

Generates entity model SQL views in the Usercube database. All views are prefixed by ```zz_```. This tool deletes all views starting by ```zz_``` and creates views from the entity model described in the running configuration.

For every __EntityType__, a matching SQL view is created from the UR\_Resource table.

## Example

The following example allows the user to connect to Usercube server at ```http://usercube.contoso.com```, using the ClientId ```Job``` and Secret ```secret```, to generate views for Usercube's database.

```
./Usercube-Create-DatabaseViews.exe --api-secret secret --api-client-id Job --api-url "http://usercube.contoso.com" --log-level Debug
```

## Arguments

| Argument Name | Details |
| --- | --- |
| --progress-use-database   optional | __Type__    String   __Description__ Update progress in the SQL database. |
| --progress-use-database-child-instance   optional | __Type__    String   __Description__ Initiate child task instance. |
| --progress-use-api   optional | __Type__    String   __Description__ Update progress with the API. |
|  |  |
| --- | --- |
| --api-client-id   required | __Type__    String   __Description__ Login used to authenticate to the server. Every request from agent to server needs to be authenticated with an [OpenID Connect ClientId/Secret pair](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/access-control/openidclient/index.md), linked to a profile with the relevant permissions. |
| --api-secret   required | __Type__    String   __Description__ Password used to authenticate to the server. Every request from agent to server needs to be authenticated with an [OpenID Connect ClientId/Secret pair](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/access-control/openidclient/index.md), linked to a profile with the relevant permissions. |
| --api-url   required | __Type__    String   __Description__ URL of Usercube server. |
|  |  |
| --- | --- |
| --log-level   optional | __Type__    LogLevel   __Description__ Level of log information among: ```Verbose```; ```Debug```; ```Information```; ```Warning```; ```Error```; ```Fatal```. |

You can explore created views in the Usercube database's Views folder in SQL Server Management Studio

![SSMS Views](/img/versioned_docs/usercube_6.1/usercube/integration-guide/executables/references/create-databaseviews/usercube-create-databaseviews_ssms.png)

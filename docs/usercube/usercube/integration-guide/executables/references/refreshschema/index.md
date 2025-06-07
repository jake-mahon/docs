# Usercube-RefreshSchema

## Examples

```Usercube-RefreshSchema``` can be used as an executable file as follows:

```
dotnet Usercube-RefreshSchema.dll --api-url myserver.usercube.com --api-client-id myclientid --api-secret myclient secret --connection-id -2

```

The credentials used to connect to the connection come from the [appsettings.agent](/docs/product_docs/usercube/usercube/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md).

## Arguments

| Name | Details |
| --- | --- |
| --connection-id   \*required | __Type__    Integer   __Description__   Id of a connection whose schemas are updated. See the [ Connection ](/docs/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) topic for additional information. |
|  |  |
| --- | --- |
| --api-client-id   required | __Type__    String   __Description__ Login used to authenticate to the server. Every request from agent to server needs to be authenticated with an [ OpenIdClient ](/docs/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/access-control/openidclient/index.md) Connect ClientId/Secret pair, linked to a profile with the relevant permissions. |
| --api-secret   required | __Type__    String   __Description__ Password used to authenticate to the server. Every request from agent to server needs to be authenticated with an [ OpenIdClient ](/docs/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/access-control/openidclient/index.md) Connect ClientId/Secret pair, linked to a profile with the relevant permissions. |
| --api-url   required | __Type__    String   __Description__ URL of Identity Manager server. |
|  |  |
| --- | --- |
| --log-level   optional | __Type__    LogLevel   __Description__ Level of log information among: ```Verbose```; ```Debug```; ```Information```; ```Warning```; ```Error```; ```Fatal```. |

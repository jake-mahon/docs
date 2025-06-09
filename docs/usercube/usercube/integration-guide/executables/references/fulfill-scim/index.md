# Usercube-Fulfill-Scim

This executable creates, updates and deleles entries in an application using the SCIM API.

## Examples

### Connector specified

When specifying ```--connector```, there is no need to specify ```--resource-types```:

```--connector "3" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://scim.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"```

But the identifier can be also given instead of the id:

```--connector "SCIM" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://scim.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"```

### Resource types specified

When specifying ```--resource-types```, there is no need to specify ```--connector```:

```--resource-types "40" "41" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://scim.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"```

But the identifiers can be also given instead of the id:

```--resource-types "SCIM_NominativeUser" "SCIM_Administrator" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret"--url "https://scim.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"```

## Arguments

| Argument Name | Details |
| --- | --- |
| --api-client-id   required | __Type__    String   __Description__ Login used to authenticate to the server. Every request from agent to server needs to be authenticated with an [ OpenIdClient ](/docs/usercube/usercube/integration-guide/toolkit/xml-configuration/access-control/openidclient/index.md) Connect ClientId/Secret pair, linked to a profile with the relevant permissions. |
| --api-secret   required | __Type__    String   __Description__ Password used to authenticate to the server. Every request from agent to server needs to be authenticated with an [ OpenIdClient ](/docs/usercube/usercube/integration-guide/toolkit/xml-configuration/access-control/openidclient/index.md) Connect ClientId/Secret pair, linked to a profile with the relevant permissions. |
| --api-url   required | __Type__    String   __Description__ URL of Identity Manager server. |
|  |  |
| --- | --- |
| --server   required | __Type__    String   __Description__ URL of the SCIM endpoints of your application, not including the v2. |
| --login   optional | __Type__    String   __Description__ Specifies the login of the account you may need. |
| --password   optional | __Type__    String   __Description__ Specifies the password of the account you may need. |
| --application-id   optional | __Type__    String   __Description__ Specifies the application connection login or the login of your application's id provider. |
| --application-key   optional | __Type__    String   __Description__ Specifies the application connection password or the password of your application's id provider. |
| --oauth-url   optional | __Type__    String   __Description__ The server's url when using OAuth2 authentication. |
| --oauth-token   optional | __Type__    String   __Description__ Specifies the OAuth token to connect to the application. |
| --scim-syntax   optional | __Type__    Enum   __Description__ Specifies the syntax used for requests body. Has to be one of those values: Salesforce (default value) or CyberArk |

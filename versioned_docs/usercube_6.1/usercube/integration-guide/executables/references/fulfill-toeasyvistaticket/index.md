# Usercube-Fulfill-ToEasyVistaTicket

This executable creates tickets in an EasyVista instance.

## Examples

### Connector specified

When specifying ```--connector```, there is no need to specify ```--resource-types```:

```--connector "3" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://easyvista.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"```

But the identifier can be also given instead of the id:

```--connector "EasyVista" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://easyvista.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"```

### Resource types specified

When specifying ```--resource-types```, there is no need to specify ```--connector```:

```--resource-types "40" "41" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://easyvista.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"```

But the identifiers can be also given instead of the id:

```--resource-types "EasyVista_NominativeUser" "EasyVista_Administrator" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret"--url "https://easyvista.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"```

## Arguments

| Argument Name | Details |
| --- | --- |
|  |  |
| --- | --- |
| --api-client-id   required | __Type__    String   __Description__ Login used to authenticate to the server. Every request from agent to server needs to be authenticated with an [OpenID Connect ClientId/Secret pair](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/access-control/openidclient/index.md), linked to a profile with the relevant permissions. |
| --api-secret   required | __Type__    String   __Description__ Password used to authenticate to the server. Every request from agent to server needs to be authenticated with an [OpenID Connect ClientId/Secret pair](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/access-control/openidclient/index.md), linked to a profile with the relevant permissions. |
| --api-url   required | __Type__    String   __Description__ URL of Usercube server. |
|  |  |
| --- | --- |
| --url   required | __Type__    String   __Description__ EasyVista API Endpoint URL. |
| --account   required | __Type__    String   __Description__ EasyVista account. |
| --login   required | __Type__    String   __Description__ Path of the file used for complete synchronization. |
| --password   required | __Type__    String   __Description__ EasyVista server password. |
|  |  |
| --- | --- |
| --connector   required if --resource-typesis not given | __Type__    String   __Description__ Id or Identifier of the resource types' connector we want to update the fulfillment state. |
| --resource-types   required if --connectoris not given | __Type__    String List   __Description__ Id or Identifier of the resource types we want to update the fulfillment state. |
| --certificate-identifier   optional | __Type__    String   __Description__ Unique key used to retrieve the certificate in Azure Key Vault. |
| --vault   optional | __Type__    String   __Description__ Vault uri. |
| --vault-connection-string   optional | __Type__    String   __Description__ Connection string to connect to Azure Key Vault. |
| --batch-size   default value: 1000 | __Type__    Int32   __Description__ Number of provisioning orders to wait between each progress report. |
| --task-instance-id   optional | __Type__    String   __Description__ Id of the task instance which have launch the exe in a job context (for log purposes). |

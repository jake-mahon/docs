# Usercube-Update-EntityPropertyExpressions

This tool is used to recompute the values of all properties defined via expressions (C#, etc.), usually to prepare for a connector's synchronization.

## Examples

The following example updates the property expressions of the database defined by the connection string, for all entity types.

```

./Usercube-Update-EntityPropertyExpressions.exe --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false" -a

```

## Arguments

| Argument Name | Details |
| --- | --- |
| --batch-select-size (-q)   default value: 10000 | __Type__    Int32   __Description__ Batch size for SELECT queries. [See more details](https://docs.microsoft.com/en-us/azure/azure-sql/performance-improve-use-batching). |
| --batch-update-size (-c)   default value: 20000 | __Type__    Int32   __Description__ Batch size for UPDATE queries. [See more details](https://docs.microsoft.com/en-us/azure/azure-sql/performance-improve-use-batching). |
|  |  |
| --- | --- |
| --database-connection-string   required | __Type__    String   __Description__ Connection string of the database. |
|  |  |
| --- | --- |
| --all-entityType (-a)   optional | __Type__    No Value   __Description__ Applies the tool to all entity types. |
| --batch-size (-q)   default value: 5000 | __Type__    Int32   __Description__ Batch size for queries. [See more details](https://docs.microsoft.com/en-us/azure/azure-sql/performance-improve-use-batching). |
| --dirty   optional | __Type__    No Value   __Description__ Applies the tool incrementally by applying it only to resources marked as dirty, i.e. recently modified. |
| --entitytype-list   optional | __Type__    String List   __Description__ List of entity types that the tool is to be applied to.   __Note:__ required when ```--all-entityType``` is not specified. |
| --resource-identity-property   optional | __Type__    String   __Description__ Property used to override the resource identity property set in the [ Select User by Identity Query Handler Setting ](/docs/product_docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/metadata/settings/selectuserbyidentityqueryhandlersetting/index.md). |
|  |  |
| --- | --- |
| --log-level   optional | __Type__    LogLevel   __Description__ Level of log information among: ```Verbose```; ```Debug```; ```Information```; ```Warning```; ```Error```; ```Fatal```. |

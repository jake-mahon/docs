# Delete a Data Source

This API can be used for deleting a specified data source.

NOTE: Deleting a data source corrupts all Synchronize jobs, membership queries, and search queries using that data source.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/{dataSourceId}

## HTTP Method

DELETE

#### Sample Response Syntax

```
{  
    "name": null,  
    "type": 6,  
    "status": 0,  
    "message": null,  
    "data": true,  
    "identityStoreObject": null,  
    "details": [],  
    "currentDirectoryServer": null,  
    "errorCode": null,  
    "exceptionMessagesAttributeWise": null,  
    "isResyncAble": true  
}
```

See Also

- [Data Source APIs](/versioned_docs/groupid_11.0/groupid/api/datasource/datasourceapis.md)
- [Common Errors](/versioned_docs/groupid_11.0/groupid/api/commonerrors.md)

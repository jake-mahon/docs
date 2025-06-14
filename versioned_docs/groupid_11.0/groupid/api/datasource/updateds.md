# Update a Data Source

Using this API you can update information of an already created data source.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/Update

## HTTP Method

PUT

#### Sample Request Syntax

```
{  
    "id": 4,  
    "name": "Excel_API_Updated",  
    "providerTypeName": "Microsoft Excel",  
    "type": 1,  
    "creationDate": "2024-05-07T04:08:56.95",  
    "lastUpdate": null,  
    "configurationValues": {  
        "FileServer": "LocalServer",  
        "FilePath": "C:\\Users\\administrator.GROUPID\\Documents\\User5.xls",  
        "ConnectionString": "",  
        "UserName": "",  
        "Password": ""  
    }  
}
```

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

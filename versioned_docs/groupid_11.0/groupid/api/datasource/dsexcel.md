# Create a Data Source for MS Excel

Use this API to create a new data source.

See the [Create a Data Source for MS Excel](/versioned_docs/groupid_11.0/groupid/admincenter/datasource/create.md#Create-a-Data-Source-for-MS-Excel) section of the [Create a Data Source](/versioned_docs/groupid_11.0/groupid/admincenter/datasource/create.md) topic for additional information on creating an Excel data source using GroupID interface.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/Create

## HTTP Method

POST

#### Sample Request Syntax

The syntax given below provides you information for creating an Excel data source.

```
{  
    "name": "Excel_API",  
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
    "data": 4,  
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

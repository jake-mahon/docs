# Create a Data Source for ODBC

Use this APi to create a new data source.

See the [Create a Data Source for ODBC](../../admincenter/datasource/create.md#create-a-data-source-for-odbc) section of the [Create a Data Source](../../admincenter/datasource/create.md) topic to create an ODBC data source using Directory Manager.

## Endpoint

https://machinename:4443/GroupIDDataService/api/DataSource/Create

## HTTP Method

POST

#### Sample Response Syntax

The following syntax is for creating an ODBC data source which you can use to connect to MS Excel, an ODBC-compatible provider.

```
{  
    "name": "Excel Odbc_API",  
    "providerTypeName": null,  
    "type": 6,  
    "creationDate": "2024-05-23T06:21:01.19",  
    "lastUpdate": null,  
    "configurationValues": {  
        "Server": "Excel",  
        "DsnType": "SystemDsn",  
        "UserName": "",  
        "Password": ""  
    },  
    "identityStoreObject": null,  
    "details": [],  
    "currentDirectoryServer": null,  
    "errorCode": null,  
    "exceptionMessagesAttributeWise": null,  
    "isResyncAble": true  
}
```

#### Sample Request Syntax

[Copy](javascript:void(0);)

```
{  
    "name": null,  
    "type": 6,  
    "status": 0,  
    "message": null,  
    "data": 6,  
    "identityStoreObject": null,  
    "details": [],  
    "currentDirectoryServer": null,  
    "errorCode": null,  
    "exceptionMessagesAttributeWise": null,  
    "isResyncAble": true  
}
```

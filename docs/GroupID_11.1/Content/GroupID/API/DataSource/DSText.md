---
sidebar_position: 7127
title: Create a Data Source for a Text/CSV File
---

# Create a Data Source for a Text/CSV File

Use this API to create a new data source.

See the [Create a Data Source for a Text/CSV File](../../AdminCenter/DataSource/Create#Create5 "Create a Data Source for a Text/CSV File") section of the [Create a Data Source](../../AdminCenter/DataSource/Create "Create a Data Source") topic to create a Text/CSV data source using Directory Manager.

## Endpoint

https://machinename:4443/GroupIDDataService/api/DataSource/Create

## HTTP Method

POST

#### Sample Request Syntax

The following syntax is for creating a data source for a comma-separated values (.csv) file or a text (.txt) file. You must also specify the delimiter used in the file to separate values. This data source can be used in queries and only as a source in Synchronize jobs. Directory Manager enables you to connect to a text file that is placed on a local server or on OneDrive.

```
{  
    "name": "Text/CSV_API",  
    "providerTypeName": "Text/CSV",  
    "type": 4,  
    "creationDate": "2024-05-07T04:08:56.95",  
    "lastUpdate": null,  
    "configurationValues": {  
        "FileServer": "LocalServer",  
        "File": "C:\\Users\\administrator.GROUPID\\Desktop\\PWList.txt",  
        "Delimiter": ",",  
        "Server": "",  
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
    "data": 11,  
    "identityStoreObject": null,  
    "details": [],  
    "currentDirectoryServer": null,  
    "errorCode": null,  
    "exceptionMessagesAttributeWise": null,  
    "isResyncAble": true  
}
```
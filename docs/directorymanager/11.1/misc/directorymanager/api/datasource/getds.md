---
title: datasource getds API
sidebar_label: getds
description: API reference for getds operations in Directory Manager with request parameters, response examples, and implementation details.
---

# Get a Data Source

Using this API you can retrieve information of a specific data source specified in the end point
URL.

## Endpoint

https://machinename:4443/GroupIDDataService/api/DataSource/{dataSourceId}

## HTTP Method

GET

#### Sample Request Syntax

```
true
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": {
        "id": 4,
        "name": "Excel_API",
        "providerTypeName": null,
        "type": 1,
        "creationDate": "2024-05-07T04:20:17.663",
        "lastUpdate": null,
        "configurationValues": {
            "FileServer": "LocalServer",
            "FilePath": "C:\\Users\\administrator.directorymanager\\Documents\\User5.xls",
            "ConnectionString": "",
            "UserName": "",
            "Password": ""
        }
    },
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

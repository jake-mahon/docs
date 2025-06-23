---
title: datasource deleteds API
sidebar_label: deleteds
description: API reference for deleteds operations in Directory Manager with request parameters, response examples, and implementation details.
---

# Delete a Data Source

This API can be used for deleting a specified data source.

NOTE: Deleting a data source corrupts all Synchronize jobs, membership queries, and search queries
using that data source.

## Endpoint

https://machinename:4443/GroupIDDataService/api/DataSource/{dataSourceId}

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

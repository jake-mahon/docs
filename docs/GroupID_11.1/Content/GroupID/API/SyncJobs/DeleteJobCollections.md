---
sidebar_position: 7150
title: Delete Job Collections
---

# Delete Job Collections

Use this API to delete job collections specified in the end point URL.

See the [Delete a Job Collection](../../Portal/Synchronize/Manage/JobCollection#DeleteJobGroup "Delete a Job Collection") section of the [Manage a Job Collection](../../Portal/Synchronize/Manage/JobCollection "Manage a Job Collection")  topic for additional information on job collection.

## Endpoint

https://machinename:4443/GroupIDDataService/api/DataSyncJobs/Collections?jobids=1&jobids=2

## HTTP Method

DELETE

#### Sample Response Syntax

```
{  
    "name": null,  
    "type": 7,  
    "status": 0,  
    "message": null,  
    "data": null,  
    "identityStoreObject": null,  
    "details": [],  
    "currentDirectoryServer": null,  
    "errorCode": null,  
    "exceptionMessagesAttributeWise": null,  
    "isResyncAble": true  
}
```
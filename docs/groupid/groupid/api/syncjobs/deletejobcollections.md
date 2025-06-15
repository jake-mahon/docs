# Delete Job Collections

Use this API to delete job collections specified in the end point URL.

See the [Delete a Job Collection](../../portal/synchronize/manage/jobcollection.md#delete-a-job-collection) section of the [Manage a Job Collection ](../../portal/synchronize/manage/jobcollection.md) topic for additional information on job collection.

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

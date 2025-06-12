# Delete Job Collections

Use this API to delete job collections specified in the end point URL.

See the [Delete a Job Collection](/versioned_docs/groupid_11.0/groupid/portal/synchronize/manage/jobcollection.md#Delete-a-Job-Collection) section of the [Manage a Job Collection ](/versioned_docs/groupid_11.0/groupid/portal/synchronize/manage/jobcollection.md) topic for additional information on job collection.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSyncJobs/Collections?jobids=1&jobids=2

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

See Also

- [Common Errors](/versioned_docs/groupid_11.0/groupid/api/commonerrors.md)
- [Synchronize Jobs APIs](/versioned_docs/groupid_11.0/groupid/api/syncjobs/jobsapis.md)

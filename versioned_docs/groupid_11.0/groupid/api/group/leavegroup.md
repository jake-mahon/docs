# Leave a Group

Using this API, you can leave a group according to the parameters specified in the body, such as membership type, start date, and end date.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/{GroupIdentity}/Leave

## HTTP Method

POST

#### Sample Request Syntax

{

```
{  
  "IdentityStoreID": 2,  
  "ReplicationRequired": true,  
  "leaveType": {  
    "MembershipType": 1,  
    "StartDate": "0001-01-01T00:00:00",  
    "EndDate": "0001-01-01T00:00:00",  
    "Reason": "test"  
  }  
}
```

#### Sample Response Syntax

```
{  
    "currentDirectoryServer": null,  
    "exceptionMessagesAttributeWise": null,  
    "data": null,  
    "identityStoreObject": null,  
    "name": null,  
    "errorCode": null,  
    "details": [  
        {  
            "currentDirectoryServer": null,  
            "exceptionMessagesAttributeWise": null,  
            "data": null,  
            "identityStoreObject": null,  
            "name": null,  
            "errorCode": null,  
            "details": [  
            ],  
            "type": 0,  
            "message": null,  
            "status": 0  
        }  
    ],  
    "type": 0,  
    "message": null,  
    "status": 0  
}
```

See Also

- [Common Errors](/versioned_docs/groupid_11.0/groupid/api/commonerrors.md)
- [Group APIs](/versioned_docs/groupid_11.0/groupid/api/group/groupapis.md)

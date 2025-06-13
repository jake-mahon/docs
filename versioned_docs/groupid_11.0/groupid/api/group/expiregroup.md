# Expire a Group

This API expires the group whose identity is provided in the endpoint URL.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Groups/{groupIdentity}/Expire?ReplicationRequired=true

## HTTP Method

POST

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
    ],  
    "type": 0,  
    "message": null,  
    "status": 0  
}
```

See Also

- [Common Errors](/versioned_docs/groupid_11.0/groupid/api/commonerrors.md)
- [Group APIs](/versioned_docs/groupid_11.0/groupid/api/group/groupapis.md)

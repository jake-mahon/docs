# Delete a Route

You can use this API to delete a user-defined workflow route.

NOTE: You cannot delete a system workflow.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Routes?ids=1

## HTTP Methods

DELETE

#### Sample Response Syntax

```
{
    "name": null,
    "type": 0,
    "status": 0,
    "message": null,
    "data": "",
    "identityStoreObject": null,
    "details": [
        {
            "name": null,
            "type": 0,
            "status": 0,
            "message": null,
            "data": "",
            "identityStoreObject": null,
            "details": [],
            "currentDirectoryServer": null,
            "errorCode": null,
            "exceptionMessagesAttributeWise": null,
            "isResyncAble": true
        }
    ],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Common Errors](/versioned_docs/groupid_11.0/groupid/api/commonerrors.md)
- [Workflow APIs](/versioned_docs/groupid_11.0/groupid/api/workflow/workflowapis.md)

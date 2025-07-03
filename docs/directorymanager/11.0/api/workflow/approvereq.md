# Approve a Request

Using this API you can approve a specified workflow request.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Approve

## HTTP Methods

POST

#### Sample Request Syntax

```
{
    "workflowRequestID": 3
}
```

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
            "name": "department",
            "type": 8,
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

- [Common Errors](/docs/directorymanager/11.0/api/commonerrors.md)
- [Workflow APIs](/docs/directorymanager/11.0/api/workflow/workflowapis.md)

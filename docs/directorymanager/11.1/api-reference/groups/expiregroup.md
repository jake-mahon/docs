---
title: expiregroup
sidebar_label: expiregroup
description: Directory Manager 11.1 documentation for expiregroup with configuration details, usage instructions, and implementation guidance.
---

# Expire a Group

This API expires the group whose identity is provided in the endpoint URL.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Groups/{groupIdentity}/Expire?ReplicationRequired=true

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

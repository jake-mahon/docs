# Get My Expiring Groups Count

This API retrieves the number of expiring groups of the authenticate user.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/Expiring/count?includeAdditionalOwnershipGroups=true&includeNestedOwnershipGroups=true&searchMode=0

## HTTP Method

GET

#### Sample Request Syntax

```
{
  "includeAdditionalOwnershipGroups": true,
  "includeNestedOwnershipGroups": true
}
```

#### Sample Response Syntax

```
{
  "count": 1
}
```

See Also

- Common Errors
- [User APIs](/docs/directorymanager/11.0/api/user/userapis.md)
- Group APIs

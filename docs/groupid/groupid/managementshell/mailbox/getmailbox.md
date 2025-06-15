# Get-Mailbox

Use the Get-Mailbox commandlet to retrieve basic information about a mailbox that match your given
criteria.

## Syntax

```
Get-MailBox
[[-Identity] <string[]>]
[-SearchContainer <string[]>]
[-SearchContainersScopeList <string>]
[-MailBoxStore <string>]
[-ShouldReturnCollection]
[-MaxItemsToDisplay <int>]
[-ObjectType <string[]>]
[-LdapFilter <string>]
[-SmartFilter <string>]
[-ServerFilter <string>]
[-AttributesToLoad <string[]>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- None

Example:

The following command retrieves the specified mailbox from the connected identity store.

```
Get-MailBox -Identity "OsamaMailBox"
```

See Also

- [All Commands](../commands.md)
- [Mailbox Commands](overview.md)
- [Parameters](../parameters/parameters.md)

# Get-Mailbox

Use the __Get-Mailbox__ commandlet to retrieve basic information about a mailbox that match your given criteria.

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

- [All Commands](/versioned_docs/groupid_11.0/groupid/managementshell/commands.md)
- [Mailbox Commands](/versioned_docs/groupid_11.0/groupid/managementshell/mailbox/overview.md)
- [Parameters](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/parameters.md)

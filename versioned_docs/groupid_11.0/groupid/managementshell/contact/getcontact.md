# Get-Contact

Use the __Get-Contact__ cmdlet to retrieve basic information about a contact.

## Syntax

```
Get-Contact  
[[-Identity] <string[]>]  
[-SearchContainer <string[]>]  
[-SearchContainersScopeList <string>]  
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

The following command retrieves a contact from the specified container of the identity store.

```
Get-Contact -SearchContainer "OU=osamamu,DC=naveed,DC=local"
```

See Also

- [All Commands](/versioned_docs/groupid_11.0/groupid/managementshell/commands.md)
- [Contact Commands](/versioned_docs/groupid_11.0/groupid/managementshell/contact/overview.md)
- [Parameters](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/parameters.md)

# Extend-User

Use the __Extend-User__ commandlet to extend the user lifecycle of an expired user for specified period of days.

## Syntax

```
Extend-User  
-Identity <string[]>  
[-IdentityStoreId <Int32>]  
[-SecurityToken <CustomClaimsPrincipal>]  
[-Credential <PSCredential>]  
[<CommonParameters>]  

```

## Required Parameter

- Identity

Example:

The following cmdlet extends the profile validation period for the specified user. The period is extended up to the specified days for the identity store.

```
Extend-User -Identity "CN=ImanamiUser100,OU=BulkUsers,DC=gid,DC=local"
```

See Also

- [All Commands](/versioned_docs/groupid_11.0/groupid/managementshell/commands.md)
- [User Lifecycle Commands ](/versioned_docs/groupid_11.0/groupid/managementshell/userlifecycle/overview.md)
- [Parameters](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/parameters.md)

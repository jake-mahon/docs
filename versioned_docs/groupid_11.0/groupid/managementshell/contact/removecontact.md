# Remove-Contact

Use the __Remove-Contact__ cmdlet to delete a contact from the directory.

## Syntax

```
Remove-Contact  
-Identity <string[]>  
[-IdentityStoreId <int>]  
[-SecurityToken <CustomClaimsPrincipal>]  
[-Credential <pscredential>]  
[<CommonParameters>]
```

## Required Parameter

- Identity

Example:

The following command deletes the specified contact from the identity store.

```
Remove-Contact -Identity "OsamaContact"
```

See Also

- [All Commands](/versioned_docs/groupid_11.0/groupid/managementshell/commands.md)
- [Contact Commands](/versioned_docs/groupid_11.0/groupid/managementshell/contact/overview.md)
- [Parameters](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/parameters.md)

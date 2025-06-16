# Remove-Contact

Use the **Remove-Contact** cmdlet to delete a contact from the directory.

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

- [All Commands](/docs/groupid/11.0/groupid/managementshell/commands.md)
- [Contact Commands](/docs/groupid/11.0/groupid/managementshell/contact/overview.md)
- [Parameters](/docs/groupid/11.0/groupid/managementshell/parameters/parameters.md)

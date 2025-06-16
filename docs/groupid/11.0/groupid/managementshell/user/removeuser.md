# Remove-User

Use the **Remove-User** commandlet to delete a user from directory.

## Syntax

```
Remove-User
-Identity <string[]>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example:

The following command deletes a user with the specified name.

```
Remove-User -Identity "osama"
```

See Also

- [All Commands](/docs/groupid/11.0/groupid/managementshell/commands.md)
- [User Commands](/docs/groupid/11.0/groupid/managementshell/user/overview.md)
- [Parameters](/docs/groupid/11.0/groupid/managementshell/parameters/parameters.md)

# Renew-Group

The **Renew-Group** re-activates an expired group.

You can view events related to this commandlet in GroupID portal, against the **History** node in
the left panel.

## Syntax

```
Renew-Group
-Identity <string[]>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example:

The following command renews the specified group in the connected identity store.

```
Renew-Group -Identity "CN=Training,OU=Local Recruiting,DC=HR,DC=Imanami,DC=US"
```

See Also

- [All Commands](/versioned_docs/groupid_11.0/groupid/managementshell/commands.md)
- [Group Commands](/versioned_docs/groupid_11.0/groupid/managementshell/group/overview.md)
- [Parameters](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/parameters.md)

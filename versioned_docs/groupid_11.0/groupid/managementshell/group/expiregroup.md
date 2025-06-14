# Expire-Group

The __Expire-Group__ commandlet expires a group temporarily. All notifications to the expired group will be stopped.

You can view events related to this commandlet in GroupID portal, against the __History__ node in the left panel.

## Syntax

```
Expire-Group  
-Identity <string[]>  
[-IdentityStoreId <int>]  
[-SecurityToken <CustomClaimsPrincipal>]  
[-Credential <pscredential>]  
[<CommonParameters>]
```

## Required Parameter

- Identity

Example:

The following command expires the specified group from the connected identity store.

```
Expire-Group –Identity "CN=Training,OU=Local Recruiting,DC=HR,DC=Imanami,DC=US"
```

See Also

- [All Commands](/versioned_docs/groupid_11.0/groupid/managementshell/commands.md)
- [Group Commands](/versioned_docs/groupid_11.0/groupid/managementshell/group/overview.md)
- [Parameters](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/parameters.md)

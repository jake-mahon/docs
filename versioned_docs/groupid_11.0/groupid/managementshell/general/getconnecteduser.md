# Get-ConnectedUser

The __Get-ConnectedUser__ commandlet retrieves the general information about the user connected to the current instance of Management Shell.

## Syntax

```
Get-ConnectedUser  
[-IdentityStoreId <Int32>]  
[-SecurityToken <CustomClaimsPrincipal>]  
[-Credential <PSCredential>]  
[-WarningAction <ActionPreference>]  
[-InformationAction <ActionPreference>]  
[-WarningVariable <String>]  
[-InformationVariable <String>]  
[-PipelineVariable <String>]  
[<CommonParameters>]
```

## Required Parameter

- None

Example 1:

The example displays the logon name of the connected user, account locked information, identity store name, role name(s), and ObjectGuid.

```
Get-ConnectedUser
```

See Also

- [All Commands](/versioned_docs/groupid_11.0/groupid/managementshell/commands.md)
- [General Commands](/versioned_docs/groupid_11.0/groupid/managementshell/general/overview.md)
- [Parameters](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/parameters.md)

# Remove-IdentityStore

The commandlet __Remove-IdentityStore__ removes an identity store from GroupID.

## Syntax

```
Remove-IdentityStore  
[-IdentityStoreName] <String>  
[-PassThru]  
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

- IdentityStoreName

Example 1:

This example removes an identity store named DemoAzStore1.

```
Remove-IdentityStore -IdentityStoreName DemoAzStore1
```

Example 2:

This example removes DemoGStore1 and DemoGStore2 identity stores through the pipeline operator.

```
'DemoGStore1', 'DemoGStore2' | Remove-IdentityStore
```

See Also

- [All Commands](/versioned_docs/groupid_11.0/groupid/managementshell/commands.md)
- [Identity Store Commands](/versioned_docs/groupid_11.0/groupid/managementshell/identitystore/overview.md)
- [Parameters](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/parameters.md)

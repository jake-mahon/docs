# Get-ImanamiCommand

Use the **Get-ImanamiCommand** cmdlet to retrieve basic information about GroupID Management Shell
commandlets and command elements.

## Syntax

```
Get-ImanamiCommand
[-Name <string[]>]
[-Verb <string>]
[-Noun <string>]
[-AttributesToLoad <string[]>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- None

Example 1:

The following command shows information about all commandlets.

```
Get-ImanamiCommand
```

Example 2:

The following command gets all commandlets and command elements with the word Set in their name.

```
Get-ImanamiCommand -Name Set*
```

Example 3:

The following command gets all commandlets and command elements with the letter Y anywhere in the
verb of their name.

```
Get-ImanamiCommand -Verb *Y*
```

See Also

- [All Commands](/versioned_docs/groupid_11.0/groupid/managementshell/commands.md)
- [General Commands](/versioned_docs/groupid_11.0/groupid/managementshell/general/overview.md)
- [Parameters](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/parameters.md)

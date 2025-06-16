# Get-SchemaAttributes

The commandlet **Get-SchemaAttribute** enables you to retrieve comprehensive list of schema
attributes available for an identity store.

This cmdlet can be used to enlist the names of schema attributes required for various cmdlets like
cmdlets related to identity store roles etc.

## Syntax

```
Get-SchemaAttributes
[-IdentityStoreName] <string>
[<CommonParameters>]
```

## Required Parameter

- IdentityStoreName

Example:

This example retrieves a list of available schema attributes in alphabetical order for the AdStore9
identity store.

```
Get-SchemaAttributes -IdentityStoreName AdStore9
```

See Also

- [All Commands](/versioned_docs/groupid_11.0/groupid/managementshell/commands.md)
- [Identity Store Commands](/versioned_docs/groupid_11.0/groupid/managementshell/identitystore/overview.md)
- [Parameters](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/parameters.md)

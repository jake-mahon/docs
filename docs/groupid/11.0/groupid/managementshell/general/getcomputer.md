# Get-Computer

The **Get-Computer** commandlet retrieves the information about a computer object from the connected
identity store. The computer can be a domain controller or an exchange server or just a simple
client connected to the domain.

## Syntax

```
Get-Computer
[-Identity <string>]
[<CommonParameters>]
```

## Required Parameter

- None

Example 1:

This example retrieves a computer with a name _arsalanahmadsvm_.

```
Get-computer -Identity arslanahmadsvm
```

See Also

- [All Commands](/versioned_docs/groupid_11.0/groupid/managementshell/commands.md)
- [General Commands](/versioned_docs/groupid_11.0/groupid/managementshell/general/overview.md)
- [Parameters](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/parameters.md)

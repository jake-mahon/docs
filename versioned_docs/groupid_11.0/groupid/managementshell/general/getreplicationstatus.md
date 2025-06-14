# Get-ReplicationStatus

The __Get-ReplicationStatus__ commandlet retrieves the replication status of the connected identity store. The commandlet provides replication status of each object (such as users, groups, contact, computer, public folders and OUs) in the provider.

## Syntax

```
Get-ReplicationStatus  
[-IdentityStoreName] <string>  
[<CommonParameters>]
```

## Required Parameter

- IdentityStoreName

Example 1:

The following commandlet provides date and time information when the objects of an identity store are replicated to Elasticsearch and the time elapsed since last replication.

```
Get-ReplicationStatus -IdentityStoreName AdStore8
```

See Also

- [All Commands](/versioned_docs/groupid_11.0/groupid/managementshell/commands.md)
- [General Commands](/versioned_docs/groupid_11.0/groupid/managementshell/general/overview.md)
- [Parameters](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/parameters.md)

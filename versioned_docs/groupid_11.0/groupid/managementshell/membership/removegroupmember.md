# Remove-GroupMember

Use this commandlet to remove one or more members from a group membership.

GroupID maintains a history for this commandlet, which you can view in GroupID portal, against the
**History** node in the left panel.

## Syntax

```
Remove-GroupMember
-GroupIdentity <string>
-Identity <string>
[-Type <string>]
[-StartDate <datetime>]
[-EndDate <datetime>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameters

- GroupIdentity
- Identity

Example:

The following command removes the user Brian Regan from the membership of the group Event Management
using the credentials set in the $Credentials environment variable. See the
[Set the $Credentials Environment Variable](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/setthecredential.md)
topic for setting credentials in an environment variable.

```
Remove-GroupMember -GroupIdentity "CN=Event Management,OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Identity "Brian Regan" -Credential $Cred
```

See Also

- [All Commands](/versioned_docs/groupid_11.0/groupid/managementshell/commands.md)
- [Membership Commands](/versioned_docs/groupid_11.0/groupid/managementshell/membership/overview.md)
- [Parameters](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/parameters.md)

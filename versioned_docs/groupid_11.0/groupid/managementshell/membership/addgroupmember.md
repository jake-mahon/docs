# Add-GroupMember

The __Add-GroupMember__ commandlet helps you to add one or more objects to the membership of a group in Directory. Two types of membership can exist in GroupID.

- Perpetual membership
- Temporary membership

Modifying the membership of a Smart Group or Dynasty using this commandlet is not recommended, since your changes will be discarded the next time the group is updated.

GroupID maintains a history for this commandlet, which you can view in GroupID portal, against the __History__ node in the left panel.

## Syntax

```
Add-GroupMember  
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

Example 1:

The following command adds the user __Brian Regan__ to the membership of the __Event Management__ group using the credentials set in the __$Credentials__ environment variable. See the [Set the $Credentials Environment Variable](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/setthecredential.md) topic for setting credentials in an environment variable.

```
Add-GroupMember -GroupIdentity "CN=Event Management,OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Identity "CN=BrianRegan,CN=User,DC=HR,DC=Imanami,DC=US" -Credential $Cred
```

Example 2:

The following command gets all users from the __Local Recruiting__ container and adds them to the membership of the __Event Management__ group. For detailed information about the Get-Object commandlet, see [Get-Object](/versioned_docs/groupid_11.0/groupid/managementshell/membership/getobject.md). The __OUT-NULL__ commandlet is used here to restrict the retrieved users information from appearing on the console.

```
Get-Object -SearchContainer "OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -ObjectType "User" | Add-GroupMember -GroupIdentity "CN=Event Management,OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US"
```

See Also

- [All Commands](/versioned_docs/groupid_11.0/groupid/managementshell/commands.md)
- [Membership Commands](/versioned_docs/groupid_11.0/groupid/managementshell/membership/overview.md)
- [Parameters](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/parameters.md)

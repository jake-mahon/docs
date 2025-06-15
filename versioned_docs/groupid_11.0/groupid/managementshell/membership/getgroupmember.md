# Get-GroupMember

Use this commandlet to retrieve members of a particular group from directory. You can apply filters to the results returned by the commandlet.

## Syntax

```
Get-GroupMember  
[-Identity] <string>  
[[-LdapFilter] <string>]  
[-AttributesToLoad <string[]>]  
[-IdentityStoreId <int>]  
[-SecurityToken <CustomClaimsPrincipal>]  
[-Credential <pscredential>]  
[<CommonParameters>]
```

## Required Parameter

- None

Example 1:

The following command retrieves all members of the __Password_Expiry__ group using the credentials set in the __$Credentials__ environment variable. See the [Set the $Credentials Environment Variable](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/setthecredential.md) topic for setting credentials in an environment variable.

```
Get-GroupMember -Identity "CN=Password_Expiry,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Credential $Cred
```

Example 2:

The command below retrieves all members from the __Enrollment__ group display name of which starts with the character S using the credentials of current user logged-on to the identity store.

```
Get-GroupMember -Identity "CN=Enrollment,OU=Local Recruiting,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -LdapFilter "(displayname=S*)"
```

See Also

- [All Commands](/versioned_docs/groupid_11.0/groupid/managementshell/commands.md)
- [Membership Commands](/versioned_docs/groupid_11.0/groupid/managementshell/membership/overview.md)
- [Parameters](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/parameters.md)

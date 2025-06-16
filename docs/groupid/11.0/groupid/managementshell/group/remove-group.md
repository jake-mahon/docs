# Remove-Group

Use this commandlet to delete a group (managed or unmanaged) or Dynasty in directory. Removing a
parent Dynasty using this commandlet removes all its children as well.

You can view events related to this commandlet in GroupID portal, against the **History** node in
the left panel.

## Syntax

```
Remove-Group
-Identity <string[]>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example 1:

The following command removes the **Event Management** group, using the credentials of current user
logged-on to the identity store.

```
Remove-Group -identity "OU=Event Management,OU=Recruiting,DC=HR,DC=Imanami,DC=US"
```

Example 2:

The following command first shows the changes that will be made by executing the command (a
deletion). The command uses the credentials set in the **$Credentials** environment variable to
perform the deletion. See the
[Set the $Credentials Environment Variable](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/setthecredential.md)
topic for setting credentials in an environment variable.

```
Remove-Group -identity "OU=Event Management,OU=Recruiting,DC=HR,DC=Imanami,DC=US" -Credential $Cred
```

See Also

- [All Commands](/versioned_docs/groupid_11.0/groupid/managementshell/commands.md)
- [Group Commands](/versioned_docs/groupid_11.0/groupid/managementshell/group/overview.md)
- [Parameters](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/parameters.md)

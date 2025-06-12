# Remove-Mailbox

Use the __Remove-Mailbox__ commandlet to delete mailbox from the connected identifty store.

## Syntax

```
Remove-MailBox  
-Identity <string[]>  
[-IdentityStoreId <int>]  
[-SecurityToken <CustomClaimsPrincipal>]  
[-Credential <pscredential>]  
[<CommonParameters>]
```

## Required Parameters

- Identity

Example:

The following command deletes the specified mailbox from the connected identity store.

```
Remove-MailBox -Identity "OsamaMailBox"
```

See Also

- [All Commands](/versioned_docs/groupid_11.0/groupid/managementshell/commands.md)
- [Mailbox Commands](/versioned_docs/groupid_11.0/groupid/managementshell/mailbox/overview.md)
- [Parameters](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/parameters.md)

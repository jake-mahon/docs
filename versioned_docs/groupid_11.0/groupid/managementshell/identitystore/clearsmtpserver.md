# Clear-SmtpServer

The commandlet __Clear-SmtpServer__ removes the SMTP server configurations from an identity store.

NOTE: This cmdlet will also clear the notification settings for the identity store recipients, password expiry group notifications, membership lifecycle notifications, and managed by notification options for the specified identity store.

## Syntax

```
Clear-SmtpServer  
-IdentityStoreName <string>  
[<CommonParameters>]
```

## Required Parameter

- IdentityStoreName

Example 1:

This example clears the configured SMTP server in AdStore9 identity store.

```
Clear-SmtpServer -IdentityStoreName AdStore9
```

See Also

- [All Commands](/versioned_docs/groupid_11.0/groupid/managementshell/commands.md)
- [Identity Store Commands](/versioned_docs/groupid_11.0/groupid/managementshell/identitystore/overview.md)
- [Parameters](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/parameters.md)

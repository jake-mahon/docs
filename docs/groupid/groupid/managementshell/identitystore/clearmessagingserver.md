# Clear-MessagingServer

The commandlet Clear-MessagingServer removes the configured messaging server from the specified
identity store.

NOTE: This cmdlet will also clear the SMTP settings, notification settings, password expiry
settings, membership lifecycle notification settings, and managed by notification settings for the
identity store.

## Syntax

```
Clear-MessagingServer
-IdentityStoreName <string>
[<CommonParameters>]
```

## Required Parameter

- IdentityStoreName

Example 1:

This example clears configured messaging server for AdStore8 identity store.

```
Clear-MessagingServer -IdentityStoreName AdStore8
```

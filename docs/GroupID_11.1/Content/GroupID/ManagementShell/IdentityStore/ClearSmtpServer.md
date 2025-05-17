---
sidebar_position: 7086
title: Clear-SmtpServer
---

# Clear-SmtpServer

The commandlet Clear-SmtpServer removes the SMTP server configurations from an identity store.

NOTE: This cmdlet will also clear the notification settings for the identity store recipients, password expiry group notifications, membership lifecycle notifications, and managed by notification options for the specified identity store.

## Syntax

```
Clear-SmtpServer  
-IdentityStoreName   
[]
```
## Required Parameter

* IdentityStoreName

Example 1:

This example clears the configured SMTP server in AdStore9 identity store.

```
Clear-SmtpServer -IdentityStoreName AdStore9
```
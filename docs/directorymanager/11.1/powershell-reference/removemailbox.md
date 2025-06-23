---
title: Remove mailbox Cmdlet
sidebar_label: removemailbox
description: PowerShell cmdlet reference for removemailbox with parameter details, syntax examples, and usage instructions for Directory Manager.
---

# Remove-Mailbox

Use the Remove-Mailbox commandlet to delete mailbox from the connected identifty store.

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

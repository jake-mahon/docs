---
sidebar_position: 7064
title: Remove-Mailbox
---

# Remove-Mailbox

Use the Remove-Mailbox commandlet to delete mailbox from the connected identifty store.

## Syntax

```
Remove-MailBox  
-Identity   
[-IdentityStoreId ]  
[-SecurityToken ]  
[-Credential ]  
[]
```
## Required Parameters

* Identity

Example:

The following command deletes the specified mailbox from the connected identity store.

```
Remove-MailBox -Identity "OsamaMailBox"
```
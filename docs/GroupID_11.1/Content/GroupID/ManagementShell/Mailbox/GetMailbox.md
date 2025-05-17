---
sidebar_position: 7061
title: Get-Mailbox
---

# Get-Mailbox

Use the Get-Mailbox commandlet to retrieve basic information about a mailbox that match your given criteria.

## Syntax

```
Get-MailBox  
[[-Identity] ]  
[-SearchContainer ]  
[-SearchContainersScopeList ]  
[-MailBoxStore ]  
[-ShouldReturnCollection]  
[-MaxItemsToDisplay ]  
[-ObjectType ]  
[-LdapFilter ]  
[-SmartFilter ]  
[-ServerFilter ]  
[-AttributesToLoad ]  
[-IdentityStoreId ]  
[-SecurityToken ]  
[-Credential ]  
[]
```
## Required Parameter

* None

Example:

The following command retrieves the specified mailbox from the connected identity store.

```
Get-MailBox -Identity "OsamaMailBox"
```
See Also

* [All Commands](../Commands "All Commands")
* [Mailbox Commands](Overview "Mailbox Commands")
* [Parameters](../Parameters/Parameters "Parameters")
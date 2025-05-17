---
sidebar_position: 7068
title: Get-User
---

# Get-User

Use the Get-User commandlet to retrieve basic information about a user that match your given criteria.

## Syntax

```
Get-User  
[[-Identity] ]  
[-SearchContainer ]  
[-SearchContainersScopeList ]  
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

The following command retrieves the specified user from the connected identity store.

```
Get-User -Identity "Osama"
```
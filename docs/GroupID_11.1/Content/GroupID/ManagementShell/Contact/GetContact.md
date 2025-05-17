---
sidebar_position: 7023
title: Get-Contact
---

# Get-Contact

Use the Get-Contact cmdlet to retrieve basic information about a contact.

## Syntax

```
Get-Contact  
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

The following command retrieves a contact from the specified container of the identity store.

```
Get-Contact -SearchContainer "OU=osamamu,DC=naveed,DC=local"
```
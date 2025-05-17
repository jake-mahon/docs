---
sidebar_position: 7026
title: Remove-Contact
---

# Remove-Contact

Use the Remove-Contact cmdlet to delete a contact from the directory.

## Syntax

```
Remove-Contact  
-Identity   
[-IdentityStoreId ]  
[-SecurityToken ]  
[-Credential ]  
[]
```
## Required Parameter

* Identity

Example:

The following command deletes the specified contact from the identity store.

```
Remove-Contact -Identity "OsamaContact"
```
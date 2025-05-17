---
sidebar_position: 7070
title: Remove-User
---

# Remove-User

Use the Remove-User commandlet to delete a user from directory.

## Syntax

```
Remove-User  
-Identity   
[-IdentityStoreId ]  
[-SecurityToken ]  
[-Credential ]  
[]
```
## Required Parameter

* Identity

Example:

The following command deletes a user with the specified name.

```
Remove-User -Identity "osama"
```
---
sidebar_position: 7054
title: Renew-Group
---

# Renew-Group

The Renew-Group re-activates an expired group.

You can view events related to this commandlet in Directory Manager portal, against the History node in the left panel.

## Syntax

```
Renew-Group  
-Identity   
[-IdentityStoreId ]  
[-SecurityToken ]  
[-Credential ]  
[]
```
## Required Parameter

* Identity

Example:

The following command renews the specified group in the connected identity store.

```
Renew-Group -Identity "CN=Training,OU=Local Recruiting,DC=HR,DC=Imanami,DC=US"
```
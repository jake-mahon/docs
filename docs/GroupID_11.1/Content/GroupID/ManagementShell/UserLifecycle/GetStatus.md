---
sidebar_position: 7099
title: Get-Status
---

# Get-Status

Use the Get-Status command to know the status of a specified user as per the profile validation criteria defined for the identity store.

## Syntax

```
Get-Status  
-Manager   
[-IdentityStoreId ]  
[-SecurityToken ]  
[-Credential ]  
[]
```
## Required Parameter

* Manager

Example:

The following command provides information about the status of the specified user as per the criteria defined for user lifecycle for the connected identity store. It also provides information on the number of days left to validate the profile again.

```
Get-Status –Manager "Richard"
```
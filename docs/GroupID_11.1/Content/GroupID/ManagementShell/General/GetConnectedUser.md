---
sidebar_position: 7048
title: Get-ConnectedUser
---

# Get-ConnectedUser

The Get-ConnectedUser commandlet retrieves the general information about the user connected to the current instance of Management Shell.

## Syntax

```
Get-ConnectedUser  
[-IdentityStoreId ]  
[-SecurityToken ]  
[-Credential ]  
[-WarningAction ]  
[-InformationAction ]  
[-WarningVariable ]  
[-InformationVariable ]  
[-PipelineVariable ]  
[]
```
## Required Parameter

* None

Example 1:

The example displays the logon name of the connected user, account locked information, identity store name, role name(s), and ObjectGuid.

```
Get-ConnectedUser
```
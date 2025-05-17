---
sidebar_position: 7082
title: Get-Client
---

# Get-Client

The commandlet Get-Client gets information about the Directory Manager clients such as Admin center, Directory Manager portal(s), management shell, Directory Manager services such as replication service, scheduler service, data service and so on. The information includes client name, client type, and its status whether enabled or disabled.

## Syntax

```
Get-Client  
[[-ClientName] ]  
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

This example retrieves information about a client Admin Center.

```
Get-Client –ClientName ‘Admin Center’
```
Example 2:

This example retrieves information about two clients – ManagementShell  and GroupIDPortal1 – through the pipeline operator.

```
‘ManagementShell ’, ‘GroupIDPortal1’ | Get-Client
```
Example 3:

This example lists all Directory Manager clients available on the Directory Manager machine.

```
Get-Client
```
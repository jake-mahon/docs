---
sidebar_position: 7083
title: Get-IdentityStoreRoles
---

# Get-IdentityStoreRoles

The commandlet Get-IdentityStoreRoles retrieves information about the security roles associated with an identity store. The information includes role name, role priority, role criteria and role permissions.

## Syntax

```
Get-IdentityStoreRoles  
[-IdentityStoreName]  [[-RoleName] ]  
[[-Subset] ]  
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

* IdentityStoreName

Example 1:

This example retrieves information of customrole1 role in AdStore1 identity store.

```
Get-IdentityStoreRoles -IdentityStoreName AdStore1 -RoleName customrole1
```
Example 2:

This example provides information about all roles in adstore1 identity store.

```
Get-IdentityStoreRoles -IdentityStoreName adstore1
```
Example 3:

Gity store through the pipeline operator.

```
'customrole1', 'customrole2' | Get-IdentityStoreRoles -IdentityStoreName AdStore1
```
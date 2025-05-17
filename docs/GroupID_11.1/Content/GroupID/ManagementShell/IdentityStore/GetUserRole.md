---
sidebar_position: 7078
title: Get-UserRole
---

# Get-UserRole

The commandlet Get-UserRole displays information about the role of the specified user in an identity store.

If a user has different roles in different Directory Manager clients of an identity store; and ClientName parameter is not specified, this commandlet displays the highest priority role of the user. If the identity store name is not specified, the connected identity store is used by this cmdlet.

## Syntax

```
Get-UserRole  
[-Identity]   
[-IdentityStoreName ]  
[-ClientName ]  
[-All]  
[]
```
## Required Parameter

* Identity

Example 1:

This example provides role information of the user *testingaccount* in the Admin Center client of the AdStore1 identity store.

```
Get-UserRole -Identity testingaccount -IdentityStoreName AdStore1 -ClientName 'Admin Center'
```
Example 2:

This example displays the highest priority role information of the *testingaccount@pucit.local* user for all clients of AdStore1 identity store.

```
Get-UserRole -Identity testingaccount@pucit.local -IdentityStoreName AdStore1
```
Example 3:

This example displays role information of the *testingaccount@pucit.local* user in the *ManagementShell * client of the connected identity store.

```
Get-UserRole -Identity testingaccount@pucit.local -ClientName 'ManagementShell '
```
Example 4:

This example retrieves the highest priority role of *testingaccount* user in the connected identity store. If the user has different roles in different Directory Manager clients, only the role having the highest priority is retrieved.

```
Get-UserRole -Identity testingaccount
```
Example 5:

This example retrieves information of all roles of *testingaccount* user in all client of the connected identity store.

```
Get-UserRole -Identity testingaccount -All
```
Example 6:

This example retrieves all roles of *euser1* and *euser2* users in the connected identity store through pipelining.

```
'euser1', 'euser2', 'testingaccount' | Get-UserRole -All
```
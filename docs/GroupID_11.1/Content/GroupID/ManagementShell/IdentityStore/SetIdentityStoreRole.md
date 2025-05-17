---
sidebar_position: 7079
title: Set-IdentityStoreRole
---

# Set-IdentityStoreRole

Use the Set-IdentityStoreRole commandlet to modify properties of a security role in an identity store.

## Syntax

```
Set-IdentityStoreRole  
-RoleName   
-IdentityStoreName   
[-NewName ]  
[-Description ]  
[-Priority ]  
[-Enabled ]  
[-CriteriaScope {Group | Container}]  
[-DistinguishedName ]  
[-Operator {Or | And}]  
[-CriteriaFilters ]  
[-FilterOperation {Add | Remove | RemoveAll}]  
[-Permissions ]  
[-PermissionOperation {GrantAll | GrantExcept | Grant | Deny | DenyExcept | DenyAll}]  
[]
```
## Required Parameters

* RoleName
* IdentityStoreName

Example 1:

This example modifies properties of the DemoRole1 role in AdStore9 identity store. It renames the role to DemoRole1\_Renamed and sets its priority to 45.

```
Set-IdentityStoreRole -RoleName DemoRole1 -IdentityStoreName AdStore9 -NewName DemoRole1_Renamed -Priority 45 -Enabled $True
```
Example 2:

This example modifies the DemoRole2 role in the AdStore9 identity store. The scope of the role is set to a container and removes filters specified in CriteriaFilters parameter.

```
Set-IdentityStoreRole -RoleName DemoRole2 -IdentityStoreName AdStore9 -CriteriaScope Container -DistinguishedName 'ou=workingou,dc=pucit,dc=local' -FilterOperation Remove -CriteriaFilters @('type', 'is not', 'managementshell')
```
Example 3:

This example modifies the permissions assigned to the DemoRole2 role. Two permissions *Manage any group* and *Create Smart Group* are being assigned.

```
Set-IdentityStoreRole -RoleName DemoRole2 -IdentityStoreName AdStore9 -PermissionOperation Grant -Permissions 'Manage any group', 'create smart group'
```
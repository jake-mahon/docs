---
sidebar_position: 7090
title: Remove-IdentityStore
---

# Remove-IdentityStore

The commandlet Remove-IdentityStore removes an identity store from Directory Manager.

## Syntax

```
Remove-IdentityStore  
[-IdentityStoreName]   
[-PassThru]  
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

This example removes an identity store named DemoAzStore1.

```
Remove-IdentityStore -IdentityStoreName DemoAzStore1
```
Example 2:

This example removes DemoGStore1 and DemoGStore2 identity stores through the pipeline operator.

```
'DemoGStore1', 'DemoGStore2' | Remove-IdentityStore
```
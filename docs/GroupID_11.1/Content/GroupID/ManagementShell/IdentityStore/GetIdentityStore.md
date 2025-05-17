---
sidebar_position: 7072
title: Get-IdentityStore
---

# Get-IdentityStore

The commandlet Get-IdentityStore retrieves information about the specified identity store or retrieves information of identity store(s) as per the given switches such as *All*, *Connected*, *Enabled* or *Disabled*.

The information includes identity store name, description, connection string, notification status, roles in identity store, and so on.

## Syntax

```
Get-IdentityStore   
  -IdentityStoreName   
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
```
Get-IdentityStore  
  -All   
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
```
Get-IdentityStore  
  -Connected   
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
```
Get-IdentityStore  
  -Enabled   
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
```
Get-IdentityStore  
  -Disabled   
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

* IdentityStoreName or a switch { All | Connected | Enabled | Disabled}

Example 1:

This example retrieves information of AdStore1 identity store.

```
Get-IdentityStore -IdentityStoreName AdStore1
```
Example 2:

This example retrieves information of two identity stores – AdStore1 and AdStore2 – through the pipeline operator.

```
'AdStore1','AdStore2' | Get-IdentityStore
```
Example 3:

This example retrieves information of all identity stores available on the Directory Manager machine.

```
Get-IdentityStore -All
```
Example 4:

This example retrieves information of identity store connected to the current instance of the Directory Manager Management Shell.

```
Get-IdentityStore -Connected
```
Example 5:

This example displays information of all enabled identity store(s).

```
Get-IdentityStore -Enabled
```
Example 6:

This example is for getting information of all disabled identity store(s).

```
Get-IdentityStore -Disabled
```
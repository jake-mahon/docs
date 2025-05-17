---
sidebar_position: 7038
title: Get-ImanamiCommand
---

# Get-ImanamiCommand

Use the Get-ImanamiCommand cmdlet to retrieve basic information about Directory Manager Management Shell commandlets and command elements.

## Syntax

```
Get-ImanamiCommand  
[-Name ]  
[-Verb ]  
[-Noun ]  
[-AttributesToLoad ]  
[-IdentityStoreId ]  
[-SecurityToken ]  
[-Credential ]  
[]
```
## Required Parameter

* None

Example 1:

The following command shows information about all commandlets.

```
Get-ImanamiCommand
```
Example 2:

The following command gets all commandlets and command elements with the word Set in their name.

```
Get-ImanamiCommand -Name Set*
```
Example 3:

The following command gets all commandlets and command elements with the letter Y anywhere in the verb of their name.

```
Get-ImanamiCommand -Verb *Y*
```
---
sidebar_position: 7106
title: ConvertTo-StaticGroup
---

# ConvertTo-StaticGroup

The ConvertTo-StaticGroup commandlet converts an existing Smart Group or a dynasty to a static group by removing the attributes of the Smart Group or the dynasty.

## Syntax

```
ConvertTo-StaticGroup  
-IdentityStoreName   
[-GroupName ]  
[-SearchContainers ]  
[]
```
## Required Parameter

* IdentityStoreName

Example 1:

The following commandlets converts a Smart Group in AdStore9 identity store Smart\_Training to a static group.

```
ConvertTo-StaticGroup -IdentityStoreName AdStore9 -GroupName "Smart_Training" -SearchContainers "OU=Recruiting,OU=HR,DC=Imanami,DC=US","OU=Outsourcing,OU=HR,DC=Imanami,DC=US"
```
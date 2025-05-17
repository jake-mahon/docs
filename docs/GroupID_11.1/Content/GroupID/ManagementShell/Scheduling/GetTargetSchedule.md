---
sidebar_position: 7032
title: Get-TargetSchedules
---

# Get-TargetSchedules

The commandlet Get-TargetSchedules retrieves the scheduled jobs of the given target (group/OU).

## Syntax

```
Get-TargetSchedules  
[-DistinguishedName]   
[-Enumerate]  
[-IdentityStoreId ]  
[-SecurityToken ]  
[-WarningAction ]  
[-InformationAction ]  
[-WarningVariable ]  
[-InformationVariable ]  
[-PipelineVariable ]  
[]
```
## Required Parameter

* DistinguishedName

Example 1:

This example retrieves the schedules operating on an OU with distinguished name OU=WorkingOU,DC=pucit,DC=local.

```
Get-TargetSchedules -DistinguishedName ‘OU=WorkingOU,DC=pucit,DC=local’
```
Example 2:

This example retrieves the schedules operating on a group and an OU through the pipeline operator.

```
'OU=WorkingOU,DC=pucit,DC=local', 'CN=SGroup1,OU=ArslanAhmadOU,OU=WorkingOU,DC=pucit,DC=local' | Get-TargetSchedules
```
Example 3:

This example selects only the Names and Job Types of the schedules operating on the specified targets through the pipeline operator.

```
'OU=WorkingOU,DC=pucit,DC=local', 'CN=SGroup1,OU=ArslanAhmadOU,OU=WorkingOU,DC=pucit,DC=local' | Get-TargetSchedules | Select-Object -Property Name,JobType
```
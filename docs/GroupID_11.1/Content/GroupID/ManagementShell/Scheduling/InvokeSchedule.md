---
sidebar_position: 7031
title: Invoke-Schedule
---

# Invoke-Schedule

The commandlet Invoke-Schedule executes the specified schedule job.

## Syntax

```
Invoke-Schedule  
[-ScheduleName ]  
[-JobId ]  
[-PassThru]  
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

* None

Example 1:

This example executes a schedule with name starting smm4\_.

```
Invoke-Schedule -ScheduleName smm4_
```
Example 2:

This example executes a schedule with GUS as Job Type.

```
Get-Schedule -JobType GUS | Select-Object -Property Name | Invoke-Schedule
```
Example 3:

This example executes all the GUS scheduled jobs with daily running trigger.

```
Get-Schedule -JobType GUS -TriggerType RunDaily -MatchingCriteria And | Select-Object -Property Name | Invoke-Schedule
```
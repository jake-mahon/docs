---
sidebar_position: 7037
title: Stop-Schedule
---

# Stop-Schedule

The commandlet Stop-Schedule stops a specified schedule if it is already running.

## Syntax

```
Stop-Schedule  
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

* ScheduleName

Example 1:

This example stops a schedule smm4 by name.

```
Stop-Schedule -ScheduleName smm4_
```
Example 2:

This example stops a schedule with job type as GUS.

```
Stop-Schedule -JobType GUS | Select-Object -Property Name | Invoke-Schedule
```
Example 3:

This example stops all the daily running GUS jobs.

```
Get-Schedule -JobType GUS -TriggerType RunDaily -MatchingCriteria And | Select-Object -Property Name | Stop-Schedule
```
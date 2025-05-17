---
sidebar_position: 7094
title: Transfer-DirectReports
---

# Transfer-DirectReports

Use the Transfer-DirectReports commandlet to transfer direct report(s) in the connected identity store. Specify manager who will approve this transfer.

NOTE: You can perform this function in directory as per your role and permissions.

## Syntax

```
Transfer-DirectReports  
-DirectReports   
-Manager   
[-IdentityStoreId ]  
[-SecurityToken ]  
[-Credential ]  
[]
```
## Required Parameters

* DirectReports
* Manager

Example

The following command transfers two direct reports to Manager Robin.

```
Transfer-DirectReports -DirectReports "F Jafar","azram" -Manager "Robin"
```
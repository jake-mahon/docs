---
sidebar_position: 7040
title: Get-Computer
---

# Get-Computer

The Get-Computer commandlet retrieves the information about a computer object from the connected identity store. The computer can be a domain controller or an exchange server or just a simple client connected to the domain.

## Syntax

```
Get-Computer  
[-Identity ]  
[]
```
## Required Parameter

* None

Example 1:

This example retrieves a computer with a name *arsalanahmadsvm*.

```
Get-computer -Identity arslanahmadsvm
```
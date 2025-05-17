---
sidebar_position: 6609
title: Get-PPEServerVersion
---

# Get-PPEServerVersion

The **Get-PPEServerVersion** cmdlet returns the Password Policy Enforcer server version.

SYNTAX

**Get-PPEServerVersion** [**-DC**] ] []

PARAMETERS

**-DC** 

Name of the domain controller running the PPE Server. If not specified, the current domain controller is used.

**-Local** 

Connect to PPE Server installed locally. Can also use **-L** or **-l**.



This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**, **ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and **OutVariable**. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](../../../Password Policy Enforcer/Administration/https:/go.microsoft.com/fwlink?LinkID=113216).

EXAMPLE

PS C:\> Get-PPEServerVersion -DC NT-DC03.NWXTECH.COM

Version: 11.0.0.74
---
sidebar_position: 6599
title: Set-PPEEnabled
---

# Set-PPEEnabled

The **Set-PPEEnabled** cmdlet sets the enabled/disabled status for the PPE Server.

SYNTAX

**Set-PPEEnabled** **-Enable**]  []

PARAMETERS

**-Enable** 

Specify **1** to enable the PPE Server, specify **0** to disable the PPE Server. Can also use **-E** or **-e**.



This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**, **ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and **OutVariable**. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](../../../Password Policy Enforcer/Administration/https:/go.microsoft.com/fwlink?LinkID=113216).

EXAMPLES

PS C:\> Set-PPEEnabled -Enable 0

Status PPE : Disabled

PS C:\> Set-PPEEnabled -Enable 1

Status PPE : Enabled
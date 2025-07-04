---
title: "Set-PPEEnabled"
description: "Set-PPEEnabled"
sidebar_position: 200
---

# Set-PPEEnabled

The **Set-PPEEnabled** cmdlet sets the enabled/disabled status for the PPE Server.

SYNTAX

**Set-PPEEnabled** **-Enable**] `<_int_>` [`<_CommonParameters_>`]

PARAMETERS

**-Enable** `<_int_>`

Specify **1** to enable the PPE Server, specify **0** to disable the PPE Server. Can also use **-E**
or **-e**.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLES

PS C:\> Set-PPEEnabled -Enable 0

Status PPE : Disabled

PS C:\> Set-PPEEnabled -Enable 1

Status PPE : Enabled

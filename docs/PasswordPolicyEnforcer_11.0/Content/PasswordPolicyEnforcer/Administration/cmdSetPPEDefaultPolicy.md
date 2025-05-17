---
sidebar_position: 6631
title: Set-PPEDefaultPolicy
---

# Set-PPEDefaultPolicy

The **Set-PPEDefaultPolicy** cmdlet sets the Password Policy Enforcer policy as the default.

SYNTAX

**Set-PPEDefaultPolicy** **-PolicyName**]  []

PARAMETERS

**-PolicyName** 

Name of the policy. Can also use **-P** or **-p**.



This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**, **ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and **OutVariable**. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](../../../Password Policy Enforcer/Administration/https:/go.microsoft.com/fwlink?LinkID=113216).

EXAMPLE

PS C:\> Set-PPEDefaultPolicy -PolicyName "Eval Policy"

Default policy : Eval Policy
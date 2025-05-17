---
sidebar_position: 6623
title: Get-PPEPolicyEnabled
---

# Get-PPEPolicyEnabled

The **Get-PPEPolicyEnabled** cmdlet returns the enabled/disabled status of a Password Policy Enforcer policy.

SYNTAX

**Get-PPEPolicyEnabled** **-PolicyName**  []

PARAMETERS

**-PolicyName** 

Name of the policy. Can also use **-P** or **-p**.



This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**, **ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and **OutVariable**. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](../../../Password Policy Enforcer/Administration/https:/go.microsoft.com/fwlink?LinkID=113216).

EXAMPLE

PS C:\> Get-PPEPolicyEnabled -PolicyName "Eval Policy"

Policy "Eval Policy" is Enabled
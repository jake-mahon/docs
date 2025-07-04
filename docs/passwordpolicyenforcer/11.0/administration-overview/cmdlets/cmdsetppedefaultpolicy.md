---
title: "Set-PPEDefaultPolicy"
description: "Set-PPEDefaultPolicy"
sidebar_position: 190
---

# Set-PPEDefaultPolicy

The **Set-PPEDefaultPolicy** cmdlet sets the Password Policy Enforcer policy as the default.

SYNTAX

**Set-PPEDefaultPolicy** **-PolicyName**] `<_string_>` [`<_CommonParameters_>`]

PARAMETERS

**-PolicyName** `<_string_>`

Name of the policy. Can also use **-P** or **-p**.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Set-PPEDefaultPolicy -PolicyName "Eval Policy"

Default policy : Eval Policy

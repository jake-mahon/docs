---
sidebar_position: 6582
title: Set-PPEPolicyEnabled
---

# Set-PPEPolicyEnabled

The **Set-PPEPolicyEnabled** cmdlet sets the enabled/disabled status for a Password Policy Enforcer policy.

SYNTAX

**Set-PPEPolicyEnabled** **-PolicyName**  **-Enable**]  []

PARAMETERS

**-PolicyName** 

The policy name.

**-Enable** 

Specify **1** to enable the policy, specify **0** to dis -Poliable the policy. Can also use **-E** or **-e**.



This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**, **ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and **OutVariable**. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](../../../Password Policy Enforcer/Administration/https:/go.microsoft.com/fwlink?LinkID=113216).

EXAMPLES

PS C:\> Set-PPEPolicyEnabled -PolicyName "Eval Policy" -Enable 0

Policy "Eval Policy" is Disabled

PS C:\> Set-PPEPolicyEnabled -PolicyName "Eval Policy" -Enable 1

Policy "Eval Policy" is Enabled
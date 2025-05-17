---
sidebar_position: 6630
title: Copy-PPEPolicy
---

# Copy-PPEPolicy

The **CopyPPEPolicy** cmdlet makes a copy of a PPE policy.

SYNTAX

**Copy-PPEPolicy -DestPolicyName**  **-SrcPolicyName**  []

PARAMETERS

**-SrcPolicyName** 

Source PPE Policy Name. Can also use **-S** or **-s**.

**-DestPolicyName** 

Destination PPE Policy Name. Can also use **-D** or **-d**.



This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**, **ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and **OutVariable**. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](../../../Password Policy Enforcer/Administration/https:/go.microsoft.com/fwlink?LinkID=113216).

EXAMPLE

PS C:\> Copy-PPEPolicy -s "Eval Policy" -d "User Policy"

The "User Policy" policy was created based on the "Eval Policy".
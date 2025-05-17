---
sidebar_position: 6588
title: Import-PPEPolicy
---

# Import-PPEPolicy

The **Import-PPEPolicy** cmdlet imports a Password Policy Enforcer policy from a file.

**NOTE:** This cmdlet calls the **PPE Tool**. You must be an administrator to run this cmdlet. Start PowerShell with the **Run as Administrator** option.

SYNTAX

**Import-PPEPolicy** **-File**]  []

PARAMETERS

**-File** 

Name of the policy file. Can also use **-F** or **-f**.



This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**, **ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and **OutVariable**. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](../../../Password Policy Enforcer/Administration/https:/go.microsoft.com/fwlink?LinkID=113216).

EXAMPLE

PS C:\> Import-PPEPolicy -File "C:\PPE\EvalPolicy"

Config import successful.
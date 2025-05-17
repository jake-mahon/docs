---
sidebar_position: 6604
title: Import-PPEConfig
---

# Import-PPEConfig

The **Import-PPEConfig** cmdlet imports a Password Policy Enforcer configuration file.

**NOTE:** This cmdlet calls the **PPE Tool**. You must be an administrator to run this cmdlet. Start PowerShell with the **Run as Administrator** option.

SYNTAX

**Import-PPEConfig** **-File**]  ]

PARAMETERS

**-File** 

Name of the configuration file. Can also use **-F** or **-f**.



This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**, **ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and **OutVariable**. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](../../../Password Policy Enforcer/Administration/https:/go.microsoft.com/fwlink?LinkID=113216).

EXAMPLE

PS C:\> Import-PPEConfig -File C:\PPE\ppe\_config

Config import successful.
---
sidebar_position: 6603
title: Get-PPEConfigReport
---

# Get-PPEConfigReport

The **Get-PPEConfigReport** cmdlet saves a Password Policy Enforcer configuration report.

**NOTE:** This cmdlet calls the PPE Tool. You must be an administrator to run this cmdlet. Start PowerShell with the **Run as Administrator** option.

SYNTAX

**Get-PPEConfigReport** **-Folder**] 

PARAMETERS

**-Folder** 

Name of the folder to save the report.



This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**, **ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and **OutVariable**. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](../../../Password Policy Enforcer/Administration/https:/go.microsoft.com/fwlink?LinkID=113216).

EXAMPLE

PS C:\> Get-PPEConfigReport -Folder C:\PPE

The report is created: "C:\PPE\report.html".

![Creates the PPE Configuration report](../../../../../static/images/PasswordPolicyEnforcer_11.0/Content/Resources/Images/PasswordPolicyEnforcer/Admin/cmdlets/cmdletGetPPEConfigReport.png "Creates the PPE Configuration report")
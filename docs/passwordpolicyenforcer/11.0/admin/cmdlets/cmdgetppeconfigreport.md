---
title: "Get-PPEConfigReport"
description: "Get-PPEConfigReport"
sidebar_position: 60
---

# Get-PPEConfigReport

The **Get-PPEConfigReport** cmdlet saves a Password Policy Enforcer configuration report.

**NOTE:** This cmdlet calls the PPE Tool. You must be an administrator to run this cmdlet. Start
PowerShell with the **Run as Administrator** option.

SYNTAX

**Get-PPEConfigReport** **-Folder** `<_string_>`

PARAMETERS

**-Folder** `<_string_>`

Name of the folder to save the report.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Get-PPEConfigReport -Folder C:\PPE

The report is created: "C:\PPE\report.html".

![Creates the PPE Configuration report](/img/product_docs/passwordpolicyenforcer/11.0/administration/cmdletgetppeconfigreport.webp)

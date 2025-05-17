---
sidebar_position: 6611
title: Export-PPEPolicy
---

# Export-PPEPolicy

The **Export-PPEPolicy** exports a Password Policy Enforcer policy to a file.

**NOTE:** This cmdlet calls the **PPE Tool**. You must be an administrator to run this cmdlet. Start PowerShell with the **Run as Administrator** option.

SYNTAX

**Export-PPEPolicy** -PolicyName  [**-File** ] []

PARAMETERS

**-PolicyName** 

Name of the to export.

**-File** 

Name of the file to create.



This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**, **ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and **OutVariable**. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](../../../Password Policy Enforcer/Administration/https:/go.microsoft.com/fwlink?LinkID=113216).

EXAMPLE

PS C:\> Export-PPEPolicy -PolicyName "Eval Policy" -File C:\ppe\EvalPolicy

Configuration export has been successfully completed. The file "C:\ppe\EvalPolicy" has been created.
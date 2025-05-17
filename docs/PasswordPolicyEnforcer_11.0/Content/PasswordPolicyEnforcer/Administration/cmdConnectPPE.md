---
sidebar_position: 6605
title: Connect-PPE
---

# Connect-PPE

The **Connect-PPE** cmdlet establishes a connection to the PPE Server.

SYNTAX

**Connect-PPE** [[**-Local**] ] [[**-Domain**] ] []

PARAMETERS

**-Domain** 

Name of the domain controller to connect. Can also use **-D** or **-d**.

**-Local** 

Connect to PPE Server installed locally. Can also use **-L** or **-l**.



This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**, **ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and **OutVariable**. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](../../../Password Policy Enforcer/Administration/https:/go.microsoft.com/fwlink?LinkID=113216).

EXAMPLE

PS C:\> Connect-PPE -d "DCNAME1.COMPANY.COM"

Connection to PPE was established. Connection to Domain "DCNAME1.COMPANY.COM"
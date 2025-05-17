---
sidebar_position: 6589
title: Start-PPEHibpUpdater
---

# Start-PPEHibpUpdater

The **Start-PPEHibpUpdater** cmdlet starts an update of the Hibp database.

SYNTAX

**Start-PPEHibpUpdater** [[**-Web**] ] **-Folder**  [**-File** ] **[-Inc** ]

[]

PARAMETERS

**-Web** 

Specify the update uses the NTLM Hashes file from the netwrix website.

**-Folder** 

Folder with the HIBP database. Can also use **-D** or **-d**.

**-Inc** 

Type of update. Specify **full** to update the entire database or **incremental**to add new entries to the existing database. Can also use **-I** or **-i**.

**-File** 

File with list of NTLM hashes. Can also use **-S** or **-s**.



This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**, **ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and **OutVariable**. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](../../../Password Policy Enforcer/Administration/https:/go.microsoft.com/fwlink?LinkID=113216).

EXAMPLE

PS C:\> Start-PPEHibpUpdater -Folder "C:\HIBP\DB" -File "C:\Users\Administrator\Desktop\db for HIBP Updater not real small\stealthintercept-hibp-database-1.0.0.zip

![HIBP Update](../../../../../static/images/PasswordPolicyEnforcer_11.0/Content/Resources/Images/PasswordPolicyEnforcer/Admin/cmdlets/cmdletStartPPEHibpUpdater.png "HIBP Updater")
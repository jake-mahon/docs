---
sidebar_position: 6583
title: PPE cmdlets
---

# PPE cmdlets

The PPE Cmdlets are available to manage Password Policy Enforcer from a Windows PowerShell. The cmdlets are not case-sensitive.

To establish the connection:

**Step 1 –** Open a Windows PowerShell. Some cmdlets require administrative permissions. You can use the **Run as Administrator** option.

**Step 2 –** Import the PPE cmdlets module:  
**Import-Module "C:\Program Files\Password Policy Enforcer\PS\PPEConf.PowerShell.dll"**

**Step 3 –** Connect to your domain:  
**Connect-PPE -d "*domain*"** where *domain* is the full name of your domain controller. **NT-DC03.NWXTECH.COM** in this example.

**Get-PPEHelp** with no parameters, displays a list of available cmdlets. Use the PowerShell **get-help** *Cmdlet* for information about the cmdlet.

![PPE cmdlets Connect](../../../../../static/images/PasswordPolicyEnforcer_11.0/Content/Resources/Images/PasswordPolicyEnforcer/Admin/cmdlets/cmdletConnect.png "PPE cmdlets Connect")

Click a PPE cmdlet name for details.

* [Connect-PPE](cmdConnectPPE "Connect-PPE")
* [Copy-PPEPolicy](cmdCopyPPEPolicy "Copy-PPEPolicy")
* [Export-PPEConfig](cmdExportPPEConfig "Export-PPEConfig")
* [Export-PPEPolicy](cmdExportPPEPolicy "Export-PPEPolicy")
* [Get-PPEBulkPasswordTest](cmdGetPPEBulkPasswordTest "Get-PPEBulkPasswordTest")
* [Get-PPEConfigReport](cmdGetPPEConfigReport "Get-PPEConfigReport")
* [Get-PPEDefaultPolicy](cmdGetPPEDefaultPolicy "Get-PPEDefaultPolicy")
* [Get-PPEEnabled](cmdGetPPEEnabled "Get-PPEEnabled")
* [Get-PPEHelp](cmdGetPPEHelp "Get-PPEHelp")
* [Get-PPELicenseInfo](cmdGetPPELicenseInfo "Get-PPELicenseInfo")
* [Get-PPEPasswordTest](cmdGetPPEPasswordTest "Get-PPEPasswordTest")
* [Get-PPEPolicies](cmdGetPPEPolicies "Get-PPEPolicies")
* [Get-PPEPolicyEnabled](cmdGetPPEPolicyEnabled "Get-PPEPolicyEnabled")
* [Get-PPEServerVersion](cmdGetPPEServerVersion "Get-PPEServerVersion")
* [Get-PPEVersion](cmdGetPPEVersion "Get-PPEVersion")
* [Import-PPEConfig](cmdImportPPEConfig "Import-PPEConfig")
* [Import-PPEPolicy](cmdImportPPEPolicy "Import-PPEPolicy")
* [Remove-PPEPolicy](cmdRemovePPEPolicy "Remove-PPEPolicy")
* [Set-PPEDefaultPolicy](cmdSetPPEDefaultPolicy "Set-PPEDefaultPolicy")
* [Set-PPEEnabled](cmdSetPPEEnabled "Set-PPEEnabled")
* [Set-PPEPolicyEnabled](cmdSetPPEPolicyEnabled "Set-PPEPolicyEnabled")
* [Start-PPECompromisedPasswordChecker](cmdStartPPECompromisedPasswordChecker "Start-PPECompromisedPasswordChecker")
* [Start-PPEHibpUpdater](cmdStartPPEHibpUpdater "Start-PPEHibpUpdater")
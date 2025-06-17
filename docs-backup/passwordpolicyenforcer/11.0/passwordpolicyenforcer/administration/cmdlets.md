# PPE cmdlets

The PPE Cmdlets are available to manage Password Policy Enforcer from a Windows PowerShell. The
cmdlets are not case-sensitive.

To establish the connection:

**Step 1 –** Open a Windows PowerShell. Some cmdlets require administrative permissions. You can use
the **Run as Administrator** option.

**Step 2 –** Import the PPE cmdlets module:  
**Import-Module "C:\Program Files\Password Policy Enforcer\PS\PPEConf.PowerShell.dll"**

**Step 3 –** Connect to your domain:  
**Connect-PPE -d "_domain_"** where _domain_ is the full name of your domain controller.
**NT-DC03.NWXTECH.COM** in this example.

**Get-PPEHelp** with no parameters, displays a list of available cmdlets. Use the PowerShell
**get-help** _Cmdlet_ for information about the cmdlet.

![PPE cmdlets Connect](../../../../../static/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdletconnect.webp)

Click a PPE cmdlet name for details.

- [Connect-PPE](cmdconnectppe.md)
- [Copy-PPEPolicy](cmdcopyppepolicy.md)
- [Export-PPEConfig](cmdexportppeconfig.md)
- [Export-PPEPolicy](cmdexportppepolicy.md)
- [Get-PPEBulkPasswordTest](cmdgetppebulkpasswordtest.md)
- [Get-PPEConfigReport](cmdgetppeconfigreport.md)
- [Get-PPEDefaultPolicy](cmdgetppedefaultpolicy.md)
- [Get-PPEEnabled](cmdgetppeenabled.md)
- [Get-PPEHelp](cmdgetppehelp.md)
- [Get-PPELicenseInfo](cmdgetppelicenseinfo.md)
- [Get-PPEPasswordTest](cmdgetppepasswordtest.md)
- [Get-PPEPolicies](cmdgetppepolicies.md)
- [Get-PPEPolicyEnabled](cmdgetppepolicyenabled.md)
- [Get-PPEServerVersion](cmdgetppeserverversion.md)
- [Get-PPEVersion](cmdgetppeversion.md)
- [Import-PPEConfig](cmdimportppeconfig.md)
- [Import-PPEPolicy](cmdimportppepolicy.md)
- [Remove-PPEPolicy](cmdremoveppepolicy.md)
- [Set-PPEDefaultPolicy](cmdsetppedefaultpolicy.md)
- [Set-PPEEnabled](cmdsetppeenabled.md)
- [Set-PPEPolicyEnabled](cmdsetppepolicyenabled.md)
- [Start-PPECompromisedPasswordChecker](cmdstartppecompromisedpasswordchecker.md)
- [Start-PPEHibpUpdater](cmdstartppehibpupdater.md)

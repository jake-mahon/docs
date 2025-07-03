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

![PPE cmdlets Connect](/img/product_docs/passwordpolicyenforcer/11.0/administration/cmdletconnect.webp)

Click a PPE cmdlet name for details.

- [Connect-PPE](/docs/passwordpolicyenforcer/11.0/administration/cmdconnectppe.md)
- [Copy-PPEPolicy](/docs/passwordpolicyenforcer/11.0/administration/cmdcopyppepolicy.md)
- [Export-PPEConfig](/docs/passwordpolicyenforcer/11.0/administration/cmdexportppeconfig.md)
- [Export-PPEPolicy](/docs/passwordpolicyenforcer/11.0/administration/cmdexportppepolicy.md)
- [Get-PPEBulkPasswordTest](/docs/passwordpolicyenforcer/11.0/administration/cmdgetppebulkpasswordtest.md)
- [Get-PPEConfigReport](/docs/passwordpolicyenforcer/11.0/administration/cmdgetppeconfigreport.md)
- [Get-PPEDefaultPolicy](/docs/passwordpolicyenforcer/11.0/administration/cmdgetppedefaultpolicy.md)
- [Get-PPEEnabled](/docs/passwordpolicyenforcer/11.0/administration/cmdgetppeenabled.md)
- [Get-PPEHelp](/docs/passwordpolicyenforcer/11.0/administration/cmdgetppehelp.md)
- [Get-PPELicenseInfo](/docs/passwordpolicyenforcer/11.0/administration/cmdgetppelicenseinfo.md)
- [Get-PPEPasswordTest](/docs/passwordpolicyenforcer/11.0/administration/cmdgetppepasswordtest.md)
- [Get-PPEPolicies](/docs/passwordpolicyenforcer/11.0/administration/cmdgetppepolicies.md)
- [Get-PPEPolicyEnabled](/docs/passwordpolicyenforcer/11.0/administration/cmdgetppepolicyenabled.md)
- [Get-PPEServerVersion](/docs/passwordpolicyenforcer/11.0/administration/cmdgetppeserverversion.md)
- [Get-PPEVersion](/docs/passwordpolicyenforcer/11.0/administration/cmdgetppeversion.md)
- [Import-PPEConfig](/docs/passwordpolicyenforcer/11.0/administration/cmdimportppeconfig.md)
- [Import-PPEPolicy](/docs/passwordpolicyenforcer/11.0/administration/cmdimportppepolicy.md)
- [Remove-PPEPolicy](/docs/passwordpolicyenforcer/11.0/administration/cmdremoveppepolicy.md)
- [Set-PPEDefaultPolicy](/docs/passwordpolicyenforcer/11.0/administration/cmdsetppedefaultpolicy.md)
- [Set-PPEEnabled](/docs/passwordpolicyenforcer/11.0/administration/cmdsetppeenabled.md)
- [Set-PPEPolicyEnabled](/docs/passwordpolicyenforcer/11.0/administration/cmdsetppepolicyenabled.md)
- [Start-PPECompromisedPasswordChecker](/docs/passwordpolicyenforcer/11.0/administration/cmdstartppecompromisedpasswordchecker.md)
- [Start-PPEHibpUpdater](/docs/passwordpolicyenforcer/11.0/administration/cmdstartppehibpupdater.md)

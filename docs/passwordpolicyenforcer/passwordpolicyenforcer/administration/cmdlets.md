# PPE cmdlets

The PPE Cmdlets are available to manage Password Policy Enforcer from a Windows PowerShell. The cmdlets are not case-sensitive.

To establish the connection:

__Step 1 –__ Open a Windows PowerShell. Some cmdlets require administrative permissions. You can use the __Run as Administrator__ option.

__Step 2 –__ Import the PPE cmdlets module:  
__Import-Module "C:\Program Files\Password Policy Enforcer\PS\PPEConf.PowerShell.dll"__

__Step 3 –__ Connect to your domain:  
__Connect-PPE -d "_domain_"__ where _domain_ is the full name of your domain controller. __NT-DC03.NWXTECH.COM__ in this example.

__Get-PPEHelp__ with no parameters, displays a list of available cmdlets. Use the PowerShell __get-help__ _Cmdlet_ for information about the cmdlet.

![PPE cmdlets Connect](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdletconnect.webp)

Click a PPE cmdlet name for details.

- [Connect-PPE](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdconnectppe.md)
- [Copy-PPEPolicy](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdcopyppepolicy.md)
- [Export-PPEConfig](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdexportppeconfig.md)
- [Export-PPEPolicy](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdexportppepolicy.md)
- [Get-PPEBulkPasswordTest](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdgetppebulkpasswordtest.md)
- [Get-PPEConfigReport](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdgetppeconfigreport.md)
- [Get-PPEDefaultPolicy](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdgetppedefaultpolicy.md)
- [Get-PPEEnabled](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdgetppeenabled.md)
- [Get-PPEHelp](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdgetppehelp.md)
- [Get-PPELicenseInfo](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdgetppelicenseinfo.md)
- [Get-PPEPasswordTest](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdgetppepasswordtest.md)
- [Get-PPEPolicies](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdgetppepolicies.md)
- [Get-PPEPolicyEnabled](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdgetppepolicyenabled.md)
- [Get-PPEServerVersion](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdgetppeserverversion.md)
- [Get-PPEVersion](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdgetppeversion.md)
- [Import-PPEConfig](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdimportppeconfig.md)
- [Import-PPEPolicy](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdimportppepolicy.md)
- [Remove-PPEPolicy](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdremoveppepolicy.md)
- [Set-PPEDefaultPolicy](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdsetppedefaultpolicy.md)
- [Set-PPEEnabled](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdsetppeenabled.md)
- [Set-PPEPolicyEnabled](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdsetppepolicyenabled.md)
- [Start-PPECompromisedPasswordChecker](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdstartppecompromisedpasswordchecker.md)
- [Start-PPEHibpUpdater](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdstartppehibpupdater.md)

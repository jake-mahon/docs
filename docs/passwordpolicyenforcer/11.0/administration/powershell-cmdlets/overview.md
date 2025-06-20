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

![PPE cmdlets Connect](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdletconnect.webp)

Click a PPE cmdlet name for details.

- [Connect-PPE](/docs/passwordpolicyenforcer/11.0/administration/command-line-tools/connection-commands.md)
- [Copy-PPEPolicy](/docs/passwordpolicyenforcer/11.0/administration/command-line-tools/policy-management-commands.md)
- [Export-PPEConfig](/docs/passwordpolicyenforcer/11.0/administration/command-line-tools/export-import-commands.md)
- [Export-PPEPolicy](/docs/passwordpolicyenforcer/11.0/administration/command-line-tools/export-import-commands.md)
- [Get-PPEBulkPasswordTest](/docs/passwordpolicyenforcer/11.0/administration/command-line-tools/testing-commands.md)
- [Get-PPEConfigReport](/docs/passwordpolicyenforcer/11.0/administration/command-line-tools/system-commands.md)
- [Get-PPEDefaultPolicy](/docs/passwordpolicyenforcer/11.0/administration/command-line-tools/policy-management-commands.md)
- [Get-PPEEnabled](/docs/passwordpolicyenforcer/11.0/administration/command-line-tools/system-commands.md)
- [Get-PPEHelp](/docs/passwordpolicyenforcer/11.0/administration/command-line-tools/system-commands.md)
- [Get-PPELicenseInfo](/docs/passwordpolicyenforcer/11.0/administration/command-line-tools/system-commands.md)
- [Get-PPEPasswordTest](/docs/passwordpolicyenforcer/11.0/administration/command-line-tools/testing-commands.md)
- [Get-PPEPolicies](/docs/passwordpolicyenforcer/11.0/administration/command-line-tools/policy-management-commands.md)
- [Get-PPEPolicyEnabled](/docs/passwordpolicyenforcer/11.0/administration/command-line-tools/policy-management-commands.md)
- [Get-PPEServerVersion](/docs/passwordpolicyenforcer/11.0/administration/command-line-tools/system-commands.md)
- [Get-PPEVersion](/docs/passwordpolicyenforcer/11.0/administration/command-line-tools/system-commands.md)
- [Import-PPEConfig](/docs/passwordpolicyenforcer/11.0/administration/command-line-tools/export-import-commands.md)
- [Import-PPEPolicy](/docs/passwordpolicyenforcer/11.0/administration/command-line-tools/export-import-commands.md)
- [Remove-PPEPolicy](/docs/passwordpolicyenforcer/11.0/administration/command-line-tools/policy-management-commands.md)
- [Set-PPEDefaultPolicy](/docs/passwordpolicyenforcer/11.0/administration/command-line-tools/policy-management-commands.md)
- [Set-PPEEnabled](/docs/passwordpolicyenforcer/11.0/administration/command-line-tools/system-commands.md)
- [Set-PPEPolicyEnabled](/docs/passwordpolicyenforcer/11.0/administration/command-line-tools/policy-management-commands.md)
- [Start-PPECompromisedPasswordChecker](/docs/passwordpolicyenforcer/11.0/administration/compromised-password-management/password-checker.md)
- [Start-PPEHibpUpdater](/docs/passwordpolicyenforcer/11.0/administration/compromised-password-management/hibp-updater.md)

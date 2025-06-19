# Get-PPEPolicyEnabled

The **Get-PPEPolicyEnabled** cmdlet returns the enabled/disabled status of a Password Policy
Enforcer policy.

SYNTAX

**Get-PPEPolicyEnabled** **-PolicyName** `<_string_>` [`<_CommonParameters_>`]

PARAMETERS

**-PolicyName** `<_string_>`

Name of the policy. Can also use **-P** or **-p**.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Get-PPEPolicyEnabled -PolicyName "Eval Policy"

Policy "Eval Policy" is Enabled

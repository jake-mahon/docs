# Import-PPEPolicy

The __Import-PPEPolicy__ cmdlet imports a Password Policy Enforcer policy from a file.

__NOTE:__ This cmdlet calls the __PPE Tool__. You must be an administrator to run this cmdlet. Start PowerShell with the __Run as Administrator__ option.

SYNTAX

__Import-PPEPolicy__ __-File__] `<_string_>` [`<_CommonParameters_>`]

PARAMETERS

__-File__ `<_string_>`

Name of the policy file. Can also use __-F__ or __-f__.

`<_CommonParameters_>`

This cmdlet supports the common parameters: __Verbose__, __Debug__, __ErrorAction__, __ErrorVariable__, __WarningAction__, __WarningVariable__, __OutBuffer__, __PipelineVariable__, and __OutVariable__. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](/docs/password_policy_enforcer/administration/https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Import-PPEPolicy -File "C:\PPE\EvalPolicy"

Config import successful.

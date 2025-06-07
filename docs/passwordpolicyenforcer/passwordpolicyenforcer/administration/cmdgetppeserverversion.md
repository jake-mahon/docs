# Get-PPEServerVersion

The __Get-PPEServerVersion__ cmdlet returns the Password Policy Enforcer server version.

SYNTAX

__Get-PPEServerVersion__ [__-DC__] <_string_>] [<_CommonParameters_>]

PARAMETERS

__-DC__ <_string_>

Name of the domain controller running the PPE Server. If not specified, the current domain controller is used.

__-Local__ <_SwitchParameter_>

Connect to PPE Server installed locally. Can also use __-L__ or __-l__.

<_CommonParameters_>

This cmdlet supports the common parameters: __Verbose__, __Debug__, __ErrorAction__, __ErrorVariable__, __WarningAction__, __WarningVariable__, __OutBuffer__, __PipelineVariable__, and __OutVariable__. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](/docs/product_docs/password_policy_enforcer/administration/https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Get-PPEServerVersion -DC NT-DC03.NWXTECH.COM

Version: 11.0.0.74

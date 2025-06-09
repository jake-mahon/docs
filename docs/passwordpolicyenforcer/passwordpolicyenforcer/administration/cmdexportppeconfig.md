# Export-PPEConfig

The __Export-PPEConfig__ cmdlet exports the Password Policy Enforcer configuration to a file.

SYNTAX

__Export-PPEConfig__ [__-File__ <_string_>] [<_CommonParameters_>]

PARAMETERS

__-File__ <_string_>

Name of the file to create.

<_CommonParameters_>

This cmdlet supports the common parameters: __Verbose__, __Debug__, __ErrorAction__, __ErrorVariable__, __WarningAction__, __WarningVariable__, __OutBuffer__, __PipelineVariable__, and __OutVariable__. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](/docs/password_policy_enforcer/administration/https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Export-PPEConfig -file c:\ppe\ppe\_config

Configuration export has been successfully completed. The file "c:\ppe\ppe\_config" has been created.

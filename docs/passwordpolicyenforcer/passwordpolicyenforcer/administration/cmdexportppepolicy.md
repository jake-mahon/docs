# Export-PPEPolicy

The __Export-PPEPolicy__ exports a Password Policy Enforcer policy to a file.

__NOTE:__ This cmdlet calls the __PPE Tool__. You must be an administrator to run this cmdlet. Start PowerShell with the __Run as Administrator__ option.

SYNTAX

__Export-PPEPolicy__ -PolicyName <_string_> [__-File__ <_string_>] [<_CommonParameters_>]

PARAMETERS

__-PolicyName__ <_string_>

Name of the to export.

__-File__ <_string_>

Name of the file to create.

<_CommonParameters_>

This cmdlet supports the common parameters: __Verbose__, __Debug__, __ErrorAction__, __ErrorVariable__, __WarningAction__, __WarningVariable__, __OutBuffer__, __PipelineVariable__, and __OutVariable__. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](/docs/product_docs/password_policy_enforcer/administration/https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Export-PPEPolicy -PolicyName "Eval Policy" -File C:\ppe\EvalPolicy

Configuration export has been successfully completed. The file "C:\ppe\EvalPolicy" has been created.

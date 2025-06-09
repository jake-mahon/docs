# Copy-PPEPolicy

The __CopyPPEPolicy__ cmdlet makes a copy of a PPE policy.

SYNTAX

__Copy-PPEPolicy -DestPolicyName__ <_string_> __-SrcPolicyName__ <_string_> [<_CommonParameters_>]

PARAMETERS

__-SrcPolicyName__ <_string_>

Source PPE Policy Name. Can also use __-S__ or __-s__.

__-DestPolicyName__ <_string_>

Destination PPE Policy Name. Can also use __-D__ or __-d__.

<_CommonParameters_>

This cmdlet supports the common parameters: __Verbose__, __Debug__, __ErrorAction__, __ErrorVariable__, __WarningAction__, __WarningVariable__, __OutBuffer__, __PipelineVariable__, and __OutVariable__. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](/docs/password_policy_enforcer/administration/https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Copy-PPEPolicy -s "Eval Policy" -d "User Policy"

The "User Policy" policy was created based on the "Eval Policy".

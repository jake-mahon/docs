# Set-PPEPolicyEnabled

The __Set-PPEPolicyEnabled__ cmdlet sets the enabled/disabled status for a Password Policy Enforcer policy.

SYNTAX

__Set-PPEPolicyEnabled____-PolicyName__ `<_string_>` __-Enable__] `<_int_>` [`<_CommonParameters_>`]

PARAMETERS

__-PolicyName__ `<_string_>`

The policy name.

__-Enable__ `<_int_>`

Specify __1__ to enable the policy, specify __0__ to dis -Poliable the policy. Can also use __-E__ or __-e__.

`<_CommonParameters_>`

This cmdlet supports the common parameters: __Verbose__, __Debug__, __ErrorAction__, __ErrorVariable__, __WarningAction__, __WarningVariable__, __OutBuffer__, __PipelineVariable__, and __OutVariable__. For more information, see about_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLES

PS C:\> Set-PPEPolicyEnabled -PolicyName "Eval Policy" -Enable 0

Policy "Eval Policy" is Disabled

PS C:\> Set-PPEPolicyEnabled -PolicyName "Eval Policy" -Enable 1

Policy "Eval Policy" is Enabled

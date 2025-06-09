# Set-PPEEnabled

The __Set-PPEEnabled__ cmdlet sets the enabled/disabled status for the PPE Server.

SYNTAX

__Set-PPEEnabled__ __-Enable__] <_int_> [<_CommonParameters_>]

PARAMETERS

__-Enable__ <_int_>

Specify __1__ to enable the PPE Server, specify __0__ to disable the PPE Server. Can also use __-E__ or __-e__.

<_CommonParameters_>

This cmdlet supports the common parameters: __Verbose__, __Debug__, __ErrorAction__, __ErrorVariable__, __WarningAction__, __WarningVariable__, __OutBuffer__, __PipelineVariable__, and __OutVariable__. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](/docs/password_policy_enforcer/administration/https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLES

PS C:\> Set-PPEEnabled -Enable 0

Status PPE : Disabled

PS C:\> Set-PPEEnabled -Enable 1

Status PPE : Enabled

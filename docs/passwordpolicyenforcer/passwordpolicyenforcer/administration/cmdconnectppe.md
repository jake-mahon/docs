# Connect-PPE

The __Connect-PPE__ cmdlet establishes a connection to the PPE Server.

SYNTAX

__Connect-PPE__ [[__-Local__] `<_SwitchParameter_>`] [[__-Domain__] `<_string_>`] [`<_CommonParameters_>`]

PARAMETERS

__-Domain__ `<_string_>`

Name of the domain controller to connect. Can also use __-D__ or __-d__.

__-Local__ `<_SwitchParameter_>`

Connect to PPE Server installed locally. Can also use __-L__ or __-l__.

`<_CommonParameters_>`

This cmdlet supports the common parameters: __Verbose__, __Debug__, __ErrorAction__, __ErrorVariable__, __WarningAction__, __WarningVariable__, __OutBuffer__, __PipelineVariable__, and __OutVariable__. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](/docs/password_policy_enforcer/administration/https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Connect-PPE -d "DCNAME1.COMPANY.COM"

Connection to PPE was established. Connection to Domain "DCNAME1.COMPANY.COM"

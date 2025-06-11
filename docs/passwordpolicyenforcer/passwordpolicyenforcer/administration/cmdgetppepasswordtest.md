# Get-PPEPasswordTest

The __Get-PPEPasswordTest__ cmdlet runs the Password Policy Enforcer password test for a user.

SYNTAX

__Get-PPEPasswordTest__ __-Password__ `<_string_>` __-Username__ `<_string_>` [__-OldPassword__ `<_string_>`] [`<_CommonParameters_>`]

PARAMETERS

__-Password__ `<_string_>`

The password to test.

__-User__ `<_string_>`

The username to test. Can also use __-U__ or __-u__.

__-OldPassword__ `<_string_>`

The old password to test.

`<_CommonParameters_>`

This cmdlet supports the common parameters: __Verbose__, __Debug__, __ErrorAction__, __ErrorVariable__, __WarningAction__, __WarningVariable__, __OutBuffer__, __PipelineVariable__, and __OutVariable__. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Get-PPEPasswordTest -Password qwerty -User PPETestUser

Assigning default policy "Eval Policy"

Log

- Info : Reading configuration from NT-DC03.nwxtech.com.

- Info : DN is "CN=PPE Test User,CN=Users,DC=NWXTECH,DC=COM"

- Info : Current password is 5 days old.

- Info : Extended Maximum Age group not found.

- Info : Dictionary rule found "QWERTY".

- Info : Password rejected.

Password must:

- Accepted : contain a lower alpha character

- Rejected : contain an upper alpha character

- Accepted : contain at least 1 of these character types:

- upper alpha

- lower alpha

- Rejected : not be similar to a common password

- Rejected : contain at least 7 characters

- Accepted : not be similar to your logon name

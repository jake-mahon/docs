# Get-PPEBulkPasswordTest

The **Get-PPEBulkPasswordTest** cmdlet runs the Password Policy Enforcer bulk password test of the
specified policy.

SYNTAX

**Get-PPEBulkPasswordTest** **-PasswordFile** `<_string_>` **-Policy** `<_string_>`
**-ResultFolder** `<_string_>` [`<_CommonParameters_>`]

PARAMETERS

**-PasswordFile** `<_string_>`

Path and name of the text file containing the passwords to test. Passwords in your test file are 1
per line.

**-Policy** `<_string_>`

The name of the policy to enforce for the test.

**-ResultFolder** `<_string_>`

The folder for the created html report.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Get-PPEBulkPasswordTest -PasswordFile C:\PPE\password.txt -Policy "Eval Policy"
-resultFolder C:\PPE

Bulk test is running...

The report is created: "C:\PPE\password.txt_Result_2209222024122350.html".

![Results of the Get-PPEBulkPasswordTest cmdlet](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdletgetppebulkpasswordtest.webp)

# Get-PPEPasswordTest

The **Get-PPEPasswordTest** cmdlet runs the Password Policy Enforcer password test for a user.

SYNTAX

**Get-PPEPasswordTest** **-Password** `<_string_>` **-Username** `<_string_>` [__-OldPassword__
`<_string_>`] [`<_CommonParameters_>`]

PARAMETERS

**-Password** `<_string_>`

The password to test.

**-User** `<_string_>`

The username to test. Can also use **-U** or **-u**.

**-OldPassword** `<_string_>`

The old password to test.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

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

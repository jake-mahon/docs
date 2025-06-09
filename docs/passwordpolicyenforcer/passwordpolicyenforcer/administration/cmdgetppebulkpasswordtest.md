# Get-PPEBulkPasswordTest

The __Get-PPEBulkPasswordTest__ cmdlet runs the Password Policy Enforcer bulk password test of the specified policy.

SYNTAX

__Get-PPEBulkPasswordTest__ __-PasswordFile__ <_string_> __-Policy__ <_string_> __-ResultFolder__ <_string_> [<_CommonParameters_>]

PARAMETERS

__-PasswordFile__ <_string_>

Path and name of the text file containing the passwords to test. Passwords in your test file are 1 per line.

__-Policy__ <_string_>

The name of the policy to enforce for the test.

__-ResultFolder__ <_string_>

The folder for the created html report.

<_CommonParameters_>

This cmdlet supports the common parameters: __Verbose__, __Debug__, __ErrorAction__, __ErrorVariable__, __WarningAction__, __WarningVariable__, __OutBuffer__, __PipelineVariable__, and __OutVariable__. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](/docs/password_policy_enforcer/administration/https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Get-PPEBulkPasswordTest -PasswordFile C:\PPE\password.txt -Policy "Eval Policy" -resultFolder C:\PPE

Bulk test is running...

The report is created: "C:\PPE\password.txt\_Result\_2209222024122350.html".

![Results of the Get-PPEBulkPasswordTest cmdlet](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdletgetppebulkpasswordtest.png)

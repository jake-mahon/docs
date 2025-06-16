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

![Results of the Get-PPEBulkPasswordTest cmdlet](../../../../../static/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdletgetppebulkpasswordtest.webp)

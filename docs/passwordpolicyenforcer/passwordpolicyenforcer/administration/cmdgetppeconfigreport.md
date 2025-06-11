# Get-PPEConfigReport

The __Get-PPEConfigReport__ cmdlet saves a Password Policy Enforcer configuration report.

__NOTE:__ This cmdlet calls the PPE Tool. You must be an administrator to run this cmdlet. Start PowerShell with the __Run as Administrator__ option.

SYNTAX

__Get-PPEConfigReport__ __-Folder__ `<_string_>`

PARAMETERS

__-Folder__ `<_string_>`

Name of the folder to save the report.

`<_CommonParameters_>`

This cmdlet supports the common parameters: __Verbose__, __Debug__, __ErrorAction__, __ErrorVariable__, __WarningAction__, __WarningVariable__, __OutBuffer__, __PipelineVariable__, and __OutVariable__. For more information, see about\_CommonParameters [https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Get-PPEConfigReport -Folder C:\PPE

The report is created: "C:\PPE\report.html".

![Creates the PPE Configuration report](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdletgetppeconfigreport.webp)

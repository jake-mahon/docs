# Export-PPEConfig

The **Export-PPEConfig** cmdlet exports the Password Policy Enforcer configuration to a file.

SYNTAX

**Export-PPEConfig** [__-File__ `<_string_>`] [`<_CommonParameters_>`]

PARAMETERS

**-File** `<_string_>`

Name of the file to create.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Export-PPEConfig -file c:\ppe\ppe_config

Configuration export has been successfully completed. The file "c:\ppe\ppe_config" has been created.

# Export-PPEPolicy

The **Export-PPEPolicy** exports a Password Policy Enforcer policy to a file.

**NOTE:** This cmdlet calls the **PPE Tool**. You must be an administrator to run this cmdlet. Start
PowerShell with the **Run as Administrator** option.

SYNTAX

**Export-PPEPolicy** -PolicyName `<_string_>` [__-File__ `<_string_>`] [`<_CommonParameters_>`]

PARAMETERS

**-PolicyName** `<_string_>`

Name of the to export.

**-File** `<_string_>`

Name of the file to create.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Export-PPEPolicy -PolicyName "Eval Policy" -File C:\ppe\EvalPolicy

Configuration export has been successfully completed. The file "C:\ppe\EvalPolicy" has been created.

# Import-PPEConfig

The **Import-PPEConfig** cmdlet imports a Password Policy Enforcer configuration file.

**NOTE:** This cmdlet calls the **PPE Tool**. You must be an administrator to run this cmdlet. Start
PowerShell with the **Run as Administrator** option.

SYNTAX

**Import-PPEConfig** **-File**] `<_string_>` `<_CommonParameters_>`]

PARAMETERS

**-File** `<_string_>`

Name of the configuration file. Can also use **-F** or **-f**.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Import-PPEConfig -File C:\PPE\ppe_config

Config import successful.

# Import-PPEPolicy

The **Import-PPEPolicy** cmdlet imports a Password Policy Enforcer policy from a file.

**NOTE:** This cmdlet calls the **PPE Tool**. You must be an administrator to run this cmdlet. Start
PowerShell with the **Run as Administrator** option.

SYNTAX

**Import-PPEPolicy** **-File**] `<_string_>` [`<_CommonParameters_>`]

PARAMETERS

**-File** `<_string_>`

Name of the policy file. Can also use **-F** or **-f**.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Import-PPEPolicy -File "C:\PPE\EvalPolicy"

Config import successful.

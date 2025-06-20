# Get-PPEConfigReport

The **Get-PPEConfigReport** cmdlet saves a Password Policy Enforcer configuration report.

**NOTE:** This cmdlet calls the PPE Tool. You must be an administrator to run this cmdlet. Start
PowerShell with the **Run as Administrator** option.

SYNTAX

**Get-PPEConfigReport** **-Folder** `<_string_>`

PARAMETERS

**-Folder** `<_string_>`

Name of the folder to save the report.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Get-PPEConfigReport -Folder C:\PPE

The report is created: "C:\PPE\report.html".

![Creates the PPE Configuration report](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/cmdletgetppeconfigreport.webp)

# Get-PPEEnabled

The **Get-PPEEnabled** cmdlet returns the enabled/disabled status of the PPE Server.

SYNTAX

**Get-PPEEnabled** [`<_CommonParameters_>`]

PARAMETERS

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Get-PPEEnabled

Status PPE : Enabled

# Get-PPEHelp

The **Get-PPEHelp** cmdlet lists the available Password Policy Enforcer cmdlets. If a cmdlet is
specified, returns help for the cmdlet.

SYNTAX

**Get-PPEHelp** [[__-Cmdlet__] `<_string_>`]

PARAMETERS

**-Cmdlet** `<_string_>`

Name of the cmdlet for help. Can also use **-C** or **-c**.

`<CommonParameters>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> get-ppehelp get-ppehelp

NAME

Get-PPEHelp

SYNOPSIS

Get a list of the PPE Cmdlet

SYNTAX

Get-PPEHelp [[-Cmdlet] `<string>`] `[<CommonParameters>]`

DESCRIPTION

Get a list of the PPE Cmdlet

RELATED LINKS

https://www.netwrix.com/password_policy_enforcer.html

REMARKS

To see the examples, type: "get-help Get-PPEHelp -examples".

For more information, type: "get-help Get-PPEHelp -detailed".

For technical information, type: "get-help Get-PPEHelp -full".

For online help, type: "get-help Get-PPEHelp -online"

# Get-PPELicenseInfo

The **Get-PPELicenseInfo** cmdlet returns the Password Policy Enforcer license information.

SYNTAX

**Get-PPELicenseInfo** [`<_CommonParameters_>`]

PARAMETERS

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

```
PS C:\> Get-PPELicenseInfo

ANIXIS Software License Certificate

Product: Password Policy Enforcer

License type: Perpetual

Licensed to: test

Version: 11

Users: 100

<ANIXIS_LICENSE>JrPQdyhsxWrLj7RsuX322Ni8vwIRr6ozC+sY3M16aJba

XuRXG6VjOjWUMT1XwqO4c3VA0eIB8+z4KyUNEzLjmSZKvtLsHb0kFYi1zRiL

6EBVflEmzxYIsCvAlsg1fNfK1JgjFefOc1gENy2CBikDTbe+HnHf3aVBq6p2

Va1eXmMXToi3NDNJCNFzQHy7ZGC5AhQ8GIjQfgK8z9s1sHzpdj2Gn+9BEyQQ

nv833QdoFhjKoAXN/xCecZclkCkP9f1GLuq4kN0Emsh5qqXl686JBJlisA3o

XWQrEQ0Me9P3TkSUpb742JCngQaGcjKHvQoufBJ+GIrcwWG2DZJ1i9xrOJMT

g8D5eFDz/OiqXuZyBHFTInbq77V59x/xtIlUffBW7sCUmY8B+ZhLR2XpLdxr

S+4E37Lhf46bScltZxfHZbDQKZuT4hdMKnnzgNHEzkMh8Q3T/40sMvQbAV4O

tDF633YsQMH3Ttbyc+vAvIvbAHJOVhBpNd9TCybfas+j6uQL5fa4qo8dFrx+

+UrPakOmSL/eDR7xB5/zmB37shDXIPfzfG/Vu7I1/EQuH01rZDyafHnzTmmm

1hCMqyi+oVzxZtN8I3sIpAH3FLu+1N37CuHJFrXD97Iu6RjKi+11nG9BmZ2Q

0SX5EYc=</ANIXIS_LICENSE>
```

# Get-PPEServerVersion

The **Get-PPEServerVersion** cmdlet returns the Password Policy Enforcer server version.

SYNTAX

**Get-PPEServerVersion** [__-DC__] `<_string_>`] [`<_CommonParameters_>`]

PARAMETERS

**-DC** `<_string_>`

Name of the domain controller running the PPE Server. If not specified, the current domain
controller is used.

**-Local** `<_SwitchParameter_>`

Connect to PPE Server installed locally. Can also use **-L** or **-l**.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Get-PPEServerVersion -DC NT-DC03.NWXTECH.COM

Version: 11.0.0.74

# Get-PPEVersion

The **Get-PPEVersion** cmdlet returns the version of the Password Policy Enforcer PowerShell module.

SYNTAX

**Get-PPEVersion** [`<_CommonParameters_>`]

PARAMETERS

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLE

PS C:\> Get-PPEVersion

Version: 11.0.0.74

# Set-PPEEnabled

The **Set-PPEEnabled** cmdlet sets the enabled/disabled status for the PPE Server.

SYNTAX

**Set-PPEEnabled** **-Enable**] `<_int_>` [`<_CommonParameters_>`]

PARAMETERS

**-Enable** `<_int_>`

Specify **1** to enable the PPE Server, specify **0** to disable the PPE Server. Can also use **-E**
or **-e**.

`<_CommonParameters_>`

This cmdlet supports the common parameters: **Verbose**, **Debug**, **ErrorAction**,
**ErrorVariable**, **WarningAction**, **WarningVariable**, **OutBuffer**, **PipelineVariable**, and
**OutVariable**. For more information, see about_CommonParameters
[https:/go.microsoft.com/fwlink/?LinkID=113216](https:/go.microsoft.com/fwlink?linkid=113216).

EXAMPLES

PS C:\> Set-PPEEnabled -Enable 0

Status PPE : Disabled

PS C:\> Set-PPEEnabled -Enable 1

Status PPE : Enabled

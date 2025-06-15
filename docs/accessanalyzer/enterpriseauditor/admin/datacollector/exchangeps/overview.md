# ExchangePS Data Collector

The ExchangePS Data Collector utilizes the Exchange CMDlets to return information about the Exchange environment utilizing PowerShell. This data collector has been designed to work with Exchange 2010 and newer. The ExchangePS Data Collector has been preconfigured within the Exchange Solution. Both this data collector and the solution are available with a special Access Analyzer license. See the [Exchange Solution](../../../solutions/exchange/overview.md) topic for additional information.

Protocols

- PowerShell

Ports

- TCP 135
- Randomly allocated high TCP ports

Permissions

- Remote PowerShell enabled on a single Exchange server
- Windows Authentication enabled for the PowerShell Virtual Directory on the same Exchange server where Remote PowerShell has been enabled
- View-Only Organization Management Role Group
- Discovery Search Management Role Group
- Public Folder Management Role Group
- Mailbox Search Role

- Discovery Management Role
- Organization Management Role

See the [Exchange PowerShell Permissions](../../../requirements/solutions/exchange/powershell.md) topic for additional information.

## Remote PowerShell

The ExchangePS Data Collector will utilize Remote PowerShell when connecting to Exchange 2010 or newer. This behavior simulates what the Exchange Management Shell does when loading. The below PowerShell syntax is an example of how the connection is loaded through PowerShell.

```
$JobUserName = '{insert domain\username}'  
$JobPassword = '{insert password}'  
$secpasswd = ConvertTo-SecureString $JobPassword -AsPlainText -Force  
$JobCredential = New-Object System.Management.Automation.PSCredential ($JobUserName, $secpasswd)  
$relaxed=New-PSSessionOption -SkipCACheck -SkipCNCheck -SkipRevocationCheck  
$sess=New-PSSession -ConnectionUri 'https://{exchangeserver}/powershell?serializationLevel=Full' -ConfigurationName 'Microsoft.Exchange' -AllowRedirection -Authentication Negotiate -Credential $JobCredential -SessionOption $relaxed   
Import-PSSession $sess
```

See the [Exchange PowerShell Permissions](../../../requirements/solutions/exchange/powershell.md) topic for instructions on enabling Remote PowerShell.

## The Exchange Applet

The Exchange Applet will run on the Exchange server by the ExchangePS Data Collector in the following circumstances:

- An actual Client Access Server (CAS) server is not specified either in the global configuration (__Settings__ > __Exchange__ node) or on the Category page of the ExchangePS Data Collector Wizard
- Remote PowerShell has not been enabled for targeting Exchange 2010

The following Exchange Snap-in is used when the applet is utilized:

- Add-pssnapin Microsoft.Exchange.Management.Powershell.E2010

## ExchangePS Query Configuration

The ExchangePS Data Collector is configured through the ExchangePS Data Collector Wizard, which contains the following wizard pages:

- [ExchangePS: Category](category.md)
- [ExchangePS: Scope](scope.md)
- [ExchangePS: Scope by DB](scopedatabases.md)
- [ExchangePS: Scope by Mailboxes](scopemailboxes.md)
- [ExchangePS: Scope by Public Folders](scopepublicfolders.md)
- [ExchangePS: Filter by Message](filtermessage.md)
- [ExchangePS: Mailbox Logons](mailboxlogons.md)
- [ExchangePS: Results](results.md)
- [ExchangePS: Options](options.md)
- [ExchangePS: Error Logging](errorlogging.md)
- [ExchangePS: Summary](summary.md)

Available pages vary according to selections made throughout the wizard.

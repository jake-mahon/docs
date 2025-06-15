# ExchangePS: Scope

The Scope page establishes how mailboxes are scoped. It is a wizard page for all of the categories.

![ExchangePS Data Collector Wizard Scope page](../../../../../../static/img/product_docs/activitymonitor/config/activedirectory/scope.webp)

Available scoping options vary based on the category selected. Scoping options include:

- No Scoping Target Host: Local Host – Returns all results for the entire targeted Exchange Organization

  - If this option is selected, then the data collector should be run against the host specified on the Summary page. See the [ExchangePS: Summary](summary.md) topic for additional information.
  - When using the applet, the data collector gathers information about the Exchange Forest in which the Access Analyzer Console currently resides
  - For Remote PowerShell, the data collector gathers information about the Exchange Organization to which the Remote PowerShell connection was made. This refers to the server entered in the Client Access Server (CAS) field of the global configuration from the __Settings__ > __Exchange__ node or on the this page.
- Scope by Database Target Host: Local Host – Scope query to return results for specific databases. If this option is selected, the Scope by Database page is enabled in the wizard. See the [ExchangePS: Scope by DB](scopedatabases.md) topic for additional information.
- Scope by Mailbox Target Host: Local Host – Scope query to return results for specific mailboxes. If this option is selected, the Scope by Mailboxes page is enabled in the wizard. See the [ExchangePS: Scope by Mailboxes](scopemailboxes.md) topic for additional information.
- Scope by Server Target Host: Exchange MB Server – Scope query to return results for specific servers selected in the job’s __Configure__ > __Hosts__ node

  - When using the applet, the data collector deploys a process to the targeted host to run the PowerShell on that server
  - For Remote PowerShell, the data collector does not deploy anapplet and utilizes the WinRM protocol to gather information about the objects on that server. See the [Remote PowerShell](overview.md#remote-powershell) and [The Exchange Applet](overview.md#the-exchange-applet) topics for additional information.
- Scope by Public Folder – Scope query to return results for specific Public Folders. If this option is selected, the Scope by Public Folders page is enabled in the wizard. See the [ExchangePS: Scope by Public Folders](scopepublicfolders.md) topic for additional information.
- View entire forest when querying for objects – Select this checkbox to scan the entire forest when querying for objects

# ExchangePS: Scope by Mailboxes

The Scope by Mailboxes page is used to define specific mailboxes to search. This page is enabled when the __Scope by Mailbox Target Host: Local Host__ option is selected on the Scope page. See the [ExchangePS: Scope](scope.md) topic for additional information.

When using the applet, the data collector will return mailboxes for the Exchange Forest in which the Access Analyzer Console currently resides, and only return information about those mailboxes. For Remote PowerShell, the data collector will return mailboxes for the Exchange Forest as well as return information about those mailboxes.

![ExchangePS Data Collector Wizard Scope by Mailboxes page](../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/exchangeps/scopemailboxes.webp)

Click __Retrieve__ to return all mailboxes in the Exchange Organization and populate them in the Available Mailboxes list. Select desired mailboxes from the Available Mailboxes list and click __Add__. The selected mailboxes are added in the Selected Mailboxes list. To remove undesired mailboxes from Selected Mailboxes, select them and click __Remove__. The Select All and Clear All buttons can be used for quick selection.

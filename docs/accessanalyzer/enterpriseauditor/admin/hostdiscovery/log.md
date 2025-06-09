# Discovery Log

The __Host Discovery__ > __Discovery Log__ node lists host discovery logs. These logs house transactions that transpire during the running of host discovery and host inventory tasks.

![Discovery Log](/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostdiscovery/discoverylog.png)

The Discovery Log logging level is configured within the __Settings__ > __Host Discovery__ node. See the [Host Discovery](/docs/accessanalyzer/enterpriseauditor/admin/settings/hostdiscovery.md) topic for additional information.

The following options are above the data grid:

- Reload Log – Refresh the log data for the selected Log date and Query Name
- Log date – Select the desired __Log date__ from the drop-down menu to view transactions
- Query Name – The default selection is __All Queries__. To narrow the data to a desired query, select a query name from the drop-down menu.

The data grid contains the following columns:

- Date – Date timestamp of transaction
- Kind – Type of transaction recorded (Error, Warning, Info, Debug), controlled by the configured logging level
- Source – Selectively used, the source value reflects the core component responsible for producing the message
- HostName – Name of the targeted host where the transaction occurred
- Message – Log transaction message

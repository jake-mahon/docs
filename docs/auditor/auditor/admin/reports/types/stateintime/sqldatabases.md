# SQL Server Databases

This report lists the properties of databases and database snapshots hosted on the selected SQL Server instance. Use this report for your SQL Server database inventory.

[![sqlserverdatabases_thumb_0_0](/static/img/product_docs/auditor/auditor/admin/reports/types/stateintime/sqlserverdatabases_thumb_0_0.png)](/docs/product_docs/auditor/resources/images/auditor/report/sqlserver/sqlserverdatabases.png)

## Reported data

For each database, the following information is reported:

- __Database name__
- __Restrict access__ mode— as set in the database properties __>Options>State__. Possible values are: _Multi\_user_ (for _Multiple_), _Restricted_, _Single_. See [this Microsoft article](https://docs.microsoft.com/en-us/sql/relational-databases/databases/database-properties-options-page?view=sql-server-ver15) for details.
- __State__— as set in the database properties__>Options>State__. See [this Microsoft article](https://docs.microsoft.com/en-us/sql/relational-databases/databases/database-states?view=sql-server-ver15) for details
- __Size (MB)__
- __Shrink enabled__— as set in the database properties __>Options>Automatic>Auto Shrink__. See [this Microsoft article](https://docs.microsoft.com/en-us/sql/relational-databases/databases/database-properties-options-page?view=sql-server-ver15) for details.
- __Encryption status__— as set in the database properties __>Options>State__. See [this Microsoft article](https://docs.microsoft.com/en-us/sql/relational-databases/databases/database-properties-options-page?view=sql-server-ver15#this-Microsoft-article) for details.
- __Last full backup date__— local date and time for the audited SQL Server instance.

In some cases, the backup time will be displayed in server ticks.

- __Data file path__— .MDF file path.
- __Log file path__— .LDF file path.

For each database snapshot, the following information is reported:

- __Database snapshot name__
- __Source database name__
- __Restrict access__ mode — as set in the database properties at snapshot creation time.
- __State__ — as set in the database properties at snapshot creation time.

## Filters

This report has the following filters:

- __Monitoring plan__ — name of the monitoring plan set to collect data from the SQL Server instance hosting the required database.
- __Item__ — name of the item within your monitoring plan, here — SQL Server instance.
- __Time zone__ — time zone where Netwrix Auditor server is located, for example, UTC-08:00. This value is filled in automatically.
- __Database name__ — database to report on. Default is all databases on selected SQL Server instance (_%_).

## Considerations and recommendations

Reporting for case-sensitive SQL Servers and databases is not supported.

## Usage example

Database administrators in the _Corp_ organization need to perform an inventory of the __SQLSrv01\SQLServer2016__ instance. This instance is included in the monitoring plan named _SQL Servers Monitoring_.

To examine the relevant data, they generated the __SQL Server Databases__ report with the default filters.

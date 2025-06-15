# Object Permissions in SQL Server

This report shows a detailed list of the effective permissions that accounts have on the selected object. Use this report to review who has access to your SQL Server objects.

Supported object types and attributes are listed in the [SQL Server](/docs/auditor/auditor/configuration/sqlserver/overview.md) section.

![objectpermissionssqlserver_thumb_0_0](/img/product_docs/auditor/auditor/admin/reports/types/stateintime/objectpermissionssqlserver_thumb_0_0.webp)

## Reported data

The report has a summary section with general information on the selected SQL Server object, and the details section presented in the table format.

The summary section shows:

- __Object path__ — monitored object path as formatted by Netwrix Auditor in the activity records (see '_What_' field in the reports, search results and activity summaries). For example, if reporting on the database hosted on selected SQL Server, the path will be as follows: _Databases\database_name_.
- __Object type__ — monitored object type; for the full list of supported object types, refer to [SQL Server](/docs/auditor/auditor/configuration/sqlserver/overview.md) topic.
- __Total account count__ — total number of accounts that have access to this object.

The detailed information under summary includes:

- __User account__ —name or SID of the account that has permissions on the selected object.
- __Account type__ —possible values:
  - Windows Account
  - Login SQL Authentication
  - DB SQL User with password
- __Means granted__ —how access permissions were granted to this account, e.g., _Direct permissions_ or _Server role permissions_.
- __Job title__ —reported for Active Directory users as set in their corresponding attribute. If not set, _`<not set>`_ is reported.
- __Effective grant__ —the effective set of permissions granted to this account on the selected object.

Covering rules do not need to be applied, since __Effective grant__ permissions are reported automatically using these rules.

## Filters

This report has the following filters:

- __Monitoring plan__ — name of the monitoring plan set to collect data from the SQL Server you need.
- __Time zone__ — time zone where Netwrix Auditor server is located, for example, UTC-08:00. This value is filled in automatically.
- __Snapshot date__ —select the date of state-in-time snapshot you want to report on. By default, the report includes data obtained during the latest data collection session (_Current Session_). To report on other snapshots, make sure they are available through import. For details, see __Manage historical snapshots__ option description in the [SQL Server](/docs/auditor/auditor/admin/monitoringplans/sqlserver/overview.md) topic.
- __Item__—name of the SQL Server instance monitored with selected monitoring plan.
- __Object path__ —path to the monitored object, as formatted by Netwrix Auditor in the activity records (see '_What_' field in the reports, search results and activity summaries). Wildcard (\*) is supported. For example, to report on the database hosted on selected SQL Server, specify the path as follows: _Databases\database_name_.
- __Permissions__ —access permissions which assignment you want to be reported for the selected object.
- __Means granted__ —how access permissions were granted to this account. You can select _Directly_, _Inherited_, or both (default setting).
- __User account__—name or SID of the account that has permissions on the selected object. Default is _%_ (all accounts).
- __Account type__ —possible values: _Windows Account_, _Login SQL Authentication_, _DB SQL User with password_.
- __Job title (Active Directory)__ —reported for Active Directory users as set in their corresponding attribute. Default is _%_ (any title).

## Considerations and limitations

- Reporting for case-sensitive SQL Servers and databases is not supported.
- The report will not show the RESTORE capability for the database owner.

- When calculating effective rights and permissions, the following will not be considered:
  - Ownership chaining
  - Cross DB ownership chaining
  - Trustworthy database
  - SQL Server agent fixed database roles
- Some permissions may not be reported correctly due to the known issues. See Release Notes for details.

## Related reports

- Clicking a User account link opens the [Account Permissions in SQL
  Server](/docs/auditor/auditor/admin/reports/types/stateintime/sqlaccountpermissions.md) report.
- Clicking a Means granted link opens the[SQL Server Means Granted](/docs/auditor/auditor/admin/reports/types/stateintime/sqlmeansgranted.md) report.

## Usage example

Database administrators need to discover who currently has access permissions to __FinReports__ database stored on the __SQLSrv01\SQLServer2016__ instance. This instance is included in the monitoring plan named _SQL Servers Monitoring_.

To examine the relevant data, they need to generate __Object Permissions in SQL Server__ report with the filters set as follows:

- __Monitoring plan:__ _SQL Servers Monitoring_
- __Snapshot date:__ _Current Session_
- __Item:__ _SQLSrv01\SQLServer2016_
- __Object path:__ _Databases\FinReports_

All other filter values can be left default.

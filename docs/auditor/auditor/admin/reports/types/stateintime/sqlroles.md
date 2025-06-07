# SQL Server-Level Roles

This report shows the server-level fixed and custom roles for the selected SQL Server instance, grouped by role name. The details for each role include its name, type, and a list of the effective role members and member types. Use this report to control role membership and permissions.

To read more about SQL server-level roles, refer to [this Microsoft article](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/server-level-roles?view=sql-server-ver15).

To instruct Netwrix Auditor to collect data needed for this report, make sure that __Collect data for state-in-time reports__ option is selected in the monitoring plan properties. See [Settings for Data Collection](/docs/product_docs/auditor/auditor/solutions/manageplans/accounts.md).

[![sqlserverlevelroles](/static/img/product_docs/auditor/auditor/admin/reports/types/stateintime/sqlserverlevelroles.png)  
](/docs/product_docs/auditor/images/audit_intel/reports/sql/server_roles.png)

## Reported data

The report has a summary section with general information on the selected SQL Server object, and the details section presented in the table format.

The summary section shows:

- __Role name__
- __Role type__ — _Fixed server role_ or _Custom role_

The detailed information under summary includes the list of effective members for this role, where:

- __Member__ — role member name.
- __Member type__ —possible values:
  - Windows Account
  - Login SQL Authentication
  - DB SQL User with password

## Filters

This report has the following filters:

- __Monitoring plan__ — name of the monitoring plan set to collect data from the SQL Server you need.
- __Time zone__ — time zone where Netwrix Auditor server is located, for example, UTC-08:00. This value is filled in automatically. time zone where Netwrix Auditor server is located, for example, UTC-08:00.
- __Snapshot date__ —select the date of state-in-time snapshot you want to report on. By default, the report includes data obtained during the latest data collection session (_Current Session_). To report on other snapshots, make sure they are available through import. For details, see __Manage historical snapshots__ option description in [SQL Server](/docs/product_docs/auditor/auditor/solutions/sqlserver/overview.md).
- __Item__— name of the SQL Server instance monitored with selected monitoring plan.
- __Server-level role__ —select the role that you want to explore.
- __Role type__ — _Fixed server role_ or _Custom role_.
- __Member__— role member name.

## Considerations and limitations

- Reporting for case-sensitive SQL Servers and databases is not supported.

## Related reports

- Clicking a role member (account) link opens the [Account Permissions in SQL
  Server](/docs/product_docs/auditor/auditor/admin/reports/types/stateintime/sqlaccountpermissions.md) report.

## Usage example

Database administrators in the _Corp_ organization need to discover what fixed server roles a certain user has on the __SQLSrv01\SQLServer2016__ instance. This instance is included in the monitoring plan named _SQL Servers Monitoring_.

To examine the relevant data, they generated the __SQL Server-Level Roles__ report with the filters set as follows:

- __Monitoring plan:___SQL Servers Monitoring_
- __Snapshot date:___Current Session_
- __Item:___SQLSrv01\SQLServer2016_
- __Server-level role:__ %
- __Role type:__ Fixed server role
- __Member:___Corp\Jim.White_

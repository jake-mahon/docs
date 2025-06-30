# SQL Server State-In-Time Reports

These are reports on the SQL Server state-in-time data, including roles, permissions and other
configuration settings:

- [Account Permissions in SQL Server](/docs/auditor/10.7/admin/reports/types/stateintime/sqlaccountpermissions.md)
- [Object Permissions in SQL Server](/docs/auditor/10.7/admin/reports/types/stateintime/sqlobjectpermissions.md)
- [SQL Server Databases](/docs/auditor/10.7/admin/reports/types/stateintime/sqldatabases.md)
- [SQL Server Means Granted](/docs/auditor/10.7/admin/reports/types/stateintime/sqlmeansgranted.md)
- [SQL Server-Level Roles](/docs/auditor/10.7/admin/reports/types/stateintime/sqlroles.md)

To instruct Netwrix Auditor to collect data needed for these reports, make sure that **Collect data
for state-in-time reports** option is selected in the corresponding monitoring plan properties. See
the [Settings for Data Collection](/docs/auditor/10.7/admin/monitoringplans/create.md#settings-for-data-collection)
topic for additional information. By default, data collection will run daily at 4 AM.

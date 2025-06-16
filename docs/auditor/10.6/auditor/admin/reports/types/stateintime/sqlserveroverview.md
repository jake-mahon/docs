# SQL Server State-In-Time Reports

These are reports on the SQL Server state-in-time data, including roles, permissions and other
configuration settings:

- [Account Permissions in SQL Server](/versioned_docs/auditor_10.6/auditor/admin/reports/types/stateintime/sqlaccountpermissions.md)
- [Object Permissions in SQL Server](/versioned_docs/auditor_10.6/auditor/admin/reports/types/stateintime/sqlobjectpermissions.md)
- [SQL Server Databases](/versioned_docs/auditor_10.6/auditor/admin/reports/types/stateintime/sqldatabases.md)
- [SQL Server Means Granted](/versioned_docs/auditor_10.6/auditor/admin/reports/types/stateintime/sqlmeansgranted.md)
- [SQL Server-Level Roles](/versioned_docs/auditor_10.6/auditor/admin/reports/types/stateintime/sqlroles.md)

To instruct Netwrix Auditor to collect data needed for these reports, make sure that **Collect data
for state-in-time reports** option is selected in the corresponding monitoring plan properties. See
the [Settings for Data Collection](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/create.md#settings-for-data-collection)
topic for additional information. By default, data collection will run daily at 4 AM.

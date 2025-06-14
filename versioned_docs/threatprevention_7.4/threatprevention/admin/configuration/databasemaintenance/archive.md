# Archive Data

To use the Move operation on the [Database Maintenance Window](/versioned_docs/threatprevention_7.4/threatprevention/admin/configuration/databasemaintenance/overview.md), you must specify a database where data is archived.

Follow the steps to configure settings for archiving data.

__Step 1 –__ Click __Configuration__ > __Database__ > __Maintenance__ on the menu. The Database Maintenance window is displayed. Click the __Archive DB__ tab.

![Database Maintenance window - Archive DB tab](/img/versioned_docs/threatprevention_7.4/threatprevention/admin/configuration/databasemaintenance/archivedb.png)

__Step 2 –__ Enter the following information for the database where data is to be archived:

- Server – SQL Server where the archive database is located
- Port – Instance port number, by default this is set to 0
- Database – Name of the archive database
- Authentication
  - For Windows Authentication – Check the Use Windows Authentication box
  - For SQL Authentication – Enter theuser name and password of an account to use for SQL authentication

__Step 3 –__ Click __Save__ to save the configurations.

To query archived event data, use the Investigate interface. See the [Investigate Interface](/versioned_docs/threatprevention_7.4/threatprevention/admin/investigate/overview.md) topic for additional information.

# Add New Database

Follow the steps to add a database to the Privilege SecureConsole. Supported database platforms include:

- Microsoft SQL
- Oracle

__Step 1 –__ Navigate to the Resources page.

__Step 2 –__ Click __Add__ > __New Database__.

__Step 3 –__ In the Enter Database Name box, enter a unique name to identify the database.

![Add Database](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/add/adddatabase.png)

__Step 4 –__ Select __Microsoft SQL Server__ or __Oracle__ from the Platform drop-down list.

__Step 5 –__ Enter the instance name for the server.

__Step 6 –__ Enter the IP address for the server.

__Step 7 –__ Enter the port for the server. The default ports for each database platform are:

- Microsoft SQL: 1433
- Oracle: 1521

__Step 8 –__ Enter the fully qualified domain name (FDQN) for the server.

__NOTE:__ The domain is used as the default domain for database activities.

__Step 9 –__ From the drop-down menu, select a previously added service account with credentials for the database.

- See the [Service Accounts Page](/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/configuration/page/serviceaccounts.md) topic for additional information.

  - Visit icon – Go to the Service Account page to view details of the selected service account.
  - Add New Service Account icon – Open the Add New Service Account window. The fields are identical to those on the Service Accounts page.

__Step 10 –__ Click __Save__ to save the configuration options and enable the Scan Now button.

__Step 11 –__ Click __Scan Now__ to begin scanning the database.

The new database is now added. See the [Database Details Page](/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/page/details/databases.md) for additional details.

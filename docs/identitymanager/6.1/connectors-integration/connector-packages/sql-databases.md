# Sql

This connector exports data from one of various
[Database Management Systems](https://en.wikipedia.org/wiki/Database#database-management-systems).

This page is about:

- [Database/Generic SQL](/docs/identitymanager/6.1/connectors-integration/connector-packages/sql-databases.md);
- [Database/Microsoft SQL Server](/docs/identitymanager/6.1/connectors-integration/connector-packages/sql-databases.md);
- [Database/MySQL](/docs/identitymanager/6.1/connectors-integration/connector-packages/sql-databases.md);
- [Database/ODBC](/docs/identitymanager/6.1/connectors-integration/connector-packages/custom-connectors.md);
- [Database/Oracle](/docs/identitymanager/6.1/connectors-integration/connector-packages/sql-databases.md);
- [Database/PostgreSQL](/docs/identitymanager/6.1/connectors-integration/connector-packages/sql-databases.md);
- [Database/SAP ASE](/docs/identitymanager/6.1/connectors-integration/connector-packages/sap-erp.md).

![Package: Directory/Database/Generic SQL](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/sql/packages_sqlgeneric_v603.webp)

![Package: Directory/Database/Microsoft SQL Server](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/sql/packages_sqlserver_v603.webp)

![Package: Directory/Database/MySQL](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/sql/packages_sqlmy_v603.webp)

![Package: Directory/Database/ODBC](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/sql/packages_sqlodbc_v603.webp)

![Package: Directory/Database/Oracle](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/sql/packages_sqloracle_v603.webp)

![Package: Directory/Database/PostgreSQL](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/sql/packages_sqlpostgre_v603.webp)

![Package: Directory/Database/SAP ASE](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/sql/packages_sqlsap_v603.webp)

## Overview

A database is a collection of relational data which represents some aspects of the real world. A
database system is designed to be built and populated with data for a specific task.

A Database Management System (DBMS) is a software for storing and retrieving users' data while
considering appropriate security measures.

> Some popular DBMS systems are Microsoft SQL Server, MySQL, Oracle, PostgreSQL, etc.

The goal of this connector is to connect to a DBMS and execute a query in order to export a table.

## Prerequisites

Implementing this connector requires:

- the configuration of a DBMS system;
  > For example for Microsoft SQL Server 2017, see Microsoft's documentation for
  > [planning a SQL Server installation](https://docs.microsoft.com/en-us/sql/sql-server/install/planning-a-sql-server-installation?view=sql-server-2017),
  > the
  > [SQL Server installation guide](https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server?view=sql-server-2017)
  > and (optionally)
  > [downloading SQL Server Management Studio (SSMS)](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15).
- creating a database `MyDb` with several tables and data so the user can query on the database, for
  testing purposes.

## Export

This connector exports the content of any table from an SQL database and writes it to a CSV file.

### Configuration

This process is configured through a
[connection](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)
in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "<ConnectionIdentifier>": {
      ...
    }
  }
}
```

The identifier of the connection and thus the name of the subsection must:

- be unique.
- not begin with a digit.
- not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

> The following example configures the connection to Microsoft SQL Server and exports the table
> `UC_Connectors` from the database `MyDb`:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "SqlExport": {
>       "ConnectionString" : "data source=.;Database=MyDb;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;",
>       "SqlCommand": "SELECT * FROM [MyDb].[dbo].[UC_Connectors]"
>     }
>   }
> }
> ```

#### Setting attributes

| Name                                          | Details                                                                                                                                                                                                                                                                                                                                                            |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ConnectionString required                     | **Type** String **Description** Connection string of the database. See the [specific syntax](https://docs.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqlconnection.connectionstring?view=dotnet-plat-ext-5.0).                                                                                                                                           |
| Timeout optional                              | **Type** Int32 **Description** Time period (in seconds) after which the request attempt is terminated and an error is generated.                                                                                                                                                                                                                                   |
|                                               |                                                                                                                                                                                                                                                                                                                                                                    |
| ---                                           | ---                                                                                                                                                                                                                                                                                                                                                                |
| SqlCommand optional                           | **Type** String **Description** SQL request to be executed. **Note:** when not specified and `SqlFile` neither, then all the [entity type mappings](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md) of this connector will be exported.                                                                                   |
| SqlFile optional                              | **Type** String **Description** Path of the file containing the SQL request to be executed. **Note:** ignored when `SqlCommand` is specified. **Note:** when not specified and `SqlFile` neither, then all the [entity type mappings](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md) of this connector will be exported. |
| CsvEncoding default value: UTF-8              | **Type** String **Description** Encoding of the file. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#see-the-list-of-available-encodings).                                                                                                                                                                |
| ProviderClassFullName optional                | **Type** String **Description** Invariant name to register the provider. **Note:** required when querying a DBMS other than Microsoft SQL Server.                                                                                                                                                                                                                  |
| ProviderDllName optional                      | **Type** String **Description** DLL, i.e. name and extension, to be loaded by the connector. **Note:** the DLL must be in the `Runtime` folder. **Note:** required when querying a DBMS other than Microsoft SQL Server.                                                                                                                                           |
| IsolationLevel default value: ReadUncommitted | **Type** String **Description** Locking behavior of the transaction: `ReadUncommitted`; `ReadCommitted` - used for the databases that do not support the ReadUncommitted level, like Oracle databases.                                                                                                                                                             |

### Connect to other DBMS

Connect to a DBMS other than Microsoft SQL Server by proceeding as follows:

1. Download and extract the package.
   > For MySQL, download the package from [MySql.Data](https://www.nuget.org/packages/MySql.Data/).
   >
   > ![MySQL: Download Package](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/sql/sql_downloadpackage.webp)
2. Copy the DLL file (corresponding to the correct .Net version) to the `Runtime` folder.
   > For MySQL, the DLL is `MySql.Data.dll`.
3. Get the value required for `ProviderClassFullName` and `ProviderDllName`:

   - for a DBMS handled by Usercube's packages, by accessing the
     [package page](/docs/identitymanager/6.1/connectors-integration/connector-packages/index.md);

     > For MySQL:
     >
     > ![Package Characteristics Example](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/sql/sql_packagecharacteristics.webp)

   - for another DBMS, by accessing the DBMS' documentation for .Net and finding a class with
     **Factory** in its name.

     > If MySQL were not part of Usercube's packages, you would see
     > [MySqlClientFactory](https://dev.mysql.com/doc/dev/connector-net/8.0/html/T_MySql_Data_MySqlClient_MySqlClientFactory.htm).

     The **Factory** class must derive from **DbProviderFactory**. After verification, the
     `ProviderClassFullName` can be found in the **Inheritance Hierarchy** of the class.

     > For MySQL, here `ProviderDllName` is **MySql.Data.dll** and `ProviderClassFullName` is
     > **MySql.Data.MySqlClient.MySqlClientFactory**.
     >
     > Then the following example configures the connection to MySQL and exports the table
     > `UC_Connectors` from the database `MyDb` (the SQL command is inside `mySql.sql`):
     >
     > ```
     > appsettings.agent.json
     > {
     >   ...
     >   "Connections": {
     >     ...
     >     "SqlExport": {
     >       "ConnectionString" : "Server=localhost;Database=MyDb;Uid=root;Pwd=secret",
     >       "SqlFile": "C:/identitymanagerDemo/Conf/Sql/mySql.sql",
     >       "ProviderClassFullName": "MySql.Data.MySqlClient.MySqlClientFactory",
     >       "ProviderDllName": "MySql.Data.dll"
     >     }
     >   }
     > }
     > ```
     >
     > Another example for ODBC:
     >
     > ```
     > appsettings.agent.json
     > {
     >   ...
     >   "Connections": {
     >     ...
     >     "SqlExport": {
     >       "ConnectionString": "Driver=ODBC Driver 17 for SQL Server;Server={YOUR-PC}\\SQLEXPRESS;Database={Database Name};Hostname=Localhost;DBALIAS={Database Alias};trusted_connection=Yes",
     >       "ProviderClassFullName": "System.Data.Odbc.OdbcFactory",
     >       "ProviderDllName": "System.Data.Odbc.dll",
     >       "SqlCommand": "SELECT * FROM {Table Name}",
     >       "IsolationLevel": null
     >     }
     >   }
     > }
     > ```

### Output details

This connector is meant to generate to the
[ExportOutput](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
folder one CSV file, named `<connectionIdentifier>.csv` whose columns correspond to the columns
returned by the SQL query.

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Password reset

This connector does not reset passwords.

### Credential protection

Data protection can be ensured through:

- [RSA encryption](/docs/identitymanager/6.1/installation-setup/agent-configuration.md),
  configured in the `appsettings.encrypted.agent.json` file;
- an
  [Azure Key Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
  safe;

| Attribute             | Naming Convention for the Key in Azure Key Vault   |
| --------------------- | -------------------------------------------------- |
| ConnectionString      | `Connections--<identifier>--ConnectionString`      |
| SqlCommand            | `Connections--<identifier>--SqlCommand`            |
| SqlFile               | `Connections--<identifier>--SqlFile`               |
| CsvEncoding           | `Connections--<identifier>--CsvEncoding`           |
| ProviderClassFullName | `Connections--<identifier>--ProviderClassFullName` |
| ProviderDllName       | `Connections--<identifier>--ProviderDllName`       |
| Timeout               | `Connections--<identifier>--Timeout`               |

[CyberArk](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
is not available for this connector.

# Sql Server Entitlements

This connector exports entitlements from
[Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server/).

This page is about
[Database/Microsoft SQL Server Entitlements](/docs/identitymanager/6.1/connectors-integration/connector-packages/sql-databases.md).

![Package: Database/Microsoft SQL Server Entitlements](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/connectors/references-connectors/sqlserverentitlements/packages_sqlservermanagement_v603.webp)

## Overview

Usercube can manage permissions within Microsoft SQL Server, by exporting the server's and
databases' principals, i.e. entities that can request Microsoft SQL Server's resources.

SQL Server supports three types of principals:

- logins at the server level;
- users at the database level;
- roles (if any) at either level.

Every principal includes a security identifier (SID).

## Prerequisites

Implementing this connector requires:

- the configuration of a Microsoft SQL Server system;

  > For example, for Microsoft SQL Server 2017, see Microsoft's documentation for
  > [planning a SQL Server installation](https://docs.microsoft.com/en-us/sql/sql-server/install/planning-a-sql-server-installation?view=sql-server-2017),
  > the
  > [SQL Server installation guide](https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server?view=sql-server-2017)
  > and (optionally)
  > [downloading SQL Server Management Studio (SSMS)](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15);

- understanding the concept of principals, roles and permissions;

  > A little help on that with:
  >
  > > [Principals (Database Engine)](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/principals-database-engine?view=sql-server-2017);
  >
  > > [Create a Login](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/create-a-login?view=sql-server-2017);
  >
  > > [Server-Level Roles](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/server-level-roles?view=sql-server-2017);
  >
  > > [Create a Database User](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/create-a-database-user?view=sql-server-2017);
  >
  > > [Database-Level Roles](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/database-level-roles?view=sql-server-2017);
  >
  > > [Permissions (Database Engine)](https://docs.microsoft.com/en-us/sql/relational-databases/security/permissions-database-engine?view=sql-server-2017);
  >
  > > [Permissions Hierarchy (Database Engine)](https://docs.microsoft.com/en-us/sql/relational-databases/security/permissions-hierarchy-database-engine?view=sql-server-2017).

- a `ConnectionString` with a `Login` to connect to the SQL Server, where either the login has the
  **sysadmin** role, or:

  - the login has the **securityadmin** role, in order to export server principals;
  - each database to export has a database user attached to the login with at least one role among
    **db_accessadmin**, **db_owner** and **db_securityadmin**, in order to export database
    principals.

  [Securables](https://docs.microsoft.com/en-us/sql/relational-databases/security/securables?view=sql-server-2017)
  can also be defined manually for both the server and database principals, but this is more
  complicated and hence not recommended.

## Export

This connector exports from one or several databases to CSV files the following tables:

- `sys.server_principals`;
- `sys.server_role_members`;
- `sys.database_principals`;
- `sys.database_role_members`.

This connector exports only in complete mode.

### Configuration

This process is configured through a
[connection](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)
in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "<ConnectionIdentifier>": {
      ...
    }
  }
}
```

The identifier of the connection and thus the name of the subsection must:

- be unique.
- not begin with a digit.
- not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

> The following example connects Usercube to Microsoft SQL Server and exports the principals from
> the databases `UsercubeDemo` and `AdventureWorks2017`:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "SqlServerEntitlementsExport": {
>       "ConnectionString": "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;",
>       "Databases": [ "UsercubeDemo", "AdventureWorks2017" ]
>     }
>   }
> }
> ```

#### Setting attributes

| Name                      | Details                                                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ConnectionString required | **Type** String **Description** Connection string of the database. See the [specific syntax](https://docs.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqlconnection.connectionstring?view=dotnet-plat-ext-5.0). |
| Timeout optional          | **Type** Int32 **Description** Time period (in seconds) after which the request attempt is terminated and an error is generated.                                                                                         |
|                           |                                                                                                                                                                                                                          |
| ---                       | ---                                                                                                                                                                                                                      |
| Databases optional        | **Type** String List **Description** List of databases to be exported. **Note:** when not specified, all databases from the SQL Server are exported.                                                                     |

### Output details

This connector is meant to generate to the
[ExportOutput](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
folder the following CSV files:

- `<connectionIdentifier>_serverPrincipals.csv`;
- `<connectionIdentifier>_serverRoleMembers.csv`;
- `<connectionIdentifier>_databasePrincipals.csv`;
- `<connectionIdentifier>_databaseRoleMembers.csv`.

> For example, if the connection identifier is **SqlServerEntitlementsExport**, then the file names
> are `SqlServerEntitlementsExport_serverPrincipals.csv`, etc.

The output files' columns are the columns returned by the SQL query.

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Password reset

This connector does not reset passwords.

### Credential protection

Data protection can be ensured through:

- [RSA encryption](/docs/identitymanager/6.1/installation-setup/agent-configuration.md),
  configured in the `appsettings.encrypted.agent.json` file;
- an
  [Azure Key Vault](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
  safe;

| Attribute        | Naming Convention for the Key in Azure Key Vault |
| ---------------- | ------------------------------------------------ |
| ConnectionString | `Connections--<identifier>--ConnectionString`    |
| Timeout          | `Connections--<identifier>--Timeout`             |

[CyberArk](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
is not available for this connector.

# Generic SQL

Exports data from a SQL database.

| Package Characteristics | Value                   |
| ----------------------- | ----------------------- |
| Display Name            | Database/Generic SQL    |
| Identifier              | Usercube.SQL@0000001    |
| Export                  | Usercube-Export-Sql.dll |
| Fulfill                 | NONE                    |
| Has Incremental Mode    | False                   |
| Publisher               | Usercube                |

When creating a connection to a database which is not handled by Usercube's packages, you'll need to
fill in the `ProviderDllName` and `ProviderClassFullName` properties of the
[SQL connector using the procedure given in the example](/docs/identitymanager/6.1/connectors-integration/connector-packages/sql-databases.md).

# MySQL

Export data from a MySQL database.

| Package Characteristics | Value                                     |
| ----------------------- | ----------------------------------------- |
| Display Name            | Database/MySQL                            |
| Identifier              | Usercube.SQL.MySQL@0000001                |
| Export                  | Usercube-Export-Sql.dll                   |
| Fulfill                 | NONE                                      |
| Has Incremental Mode    | False                                     |
| Publisher               | Usercube                                  |
| ProviderClassFullName   | MySql.Data.MySqlClient.MySqlClientFactory |
| ProviderDllName         | MySql.Data.dll                            |

To use this package, `MySql.Data.dll` needs to be
[downloaded from the MySQL website](https://dev.mysql.com/downloads/connector/net/) (selecting the
**.NET & Mono** operating system) and copied to the `Runtime` folder.

You can click on the **Archives** tab to find other versions.

# Oracle Database

Export data from an Oracle database.

| Package Characteristics | Value                                               |
| ----------------------- | --------------------------------------------------- |
| Display Name            | Database/Oracle                                     |
| Identifier              | Usercube.SQL.Oracle@0000001                         |
| Export                  | Usercube-Export-Sql.dll                             |
| Fulfill                 | NONE                                                |
| Has Incremental Mode    | False                                               |
| Publisher               | Usercube                                            |
| ProviderClassFullName   | Oracle.ManagedDataAccess.Client.OracleClientFactory |
| ProviderDllName         | Oracle.ManagedDataAccess.Core                       |

For this package, the default isolation level is **ReadCommitted**.

To use this package, `Oracle.ManagedDataAccess.Core` needs to be
[downloaded from the Oracle website](https://www.oracle.com/database/technologies/net-downloads.html)
(selecting the `ODP.NET` release) and copied to the `Runtime` folder.

**NOTE:** The DLL in the "Oracle.ManagedDataAccess" package isn't compatible with .NET 8

# PostgreSQL

Export data from a PostgreSQL database.

| Package Characteristics | Value                           |
| ----------------------- | ------------------------------- |
| Display Name            | Database/PostgreSQL             |
| Identifier              | Usercube.SQL.PostgreSQL@0000001 |
| Export                  | Usercube-Export-Sql.dll         |
| Fulfill                 | NONE                            |
| Has Incremental Mode    | False                           |
| Publisher               | Usercube                        |
| ProviderClassFullName   | Npgsql.NpgsqlFactory            |
| ProviderDllName         | Npgsql.dll                      |

# SQL Server Entitlements

Exports SQL Server Entitlements

| Package Characteristics | Value                                      |
| ----------------------- | ------------------------------------------ |
| Display Name            | Database/SQL Server Entitlements           |
| Identifier              | Usercube.SQL.SQLServerEntitlements@0000001 |
| Export                  | Usercube-Export-SqlServerEntitlements.dll  |
| Fulfill                 | NONE                                       |
| Has Incremental Mode    | False                                      |
| Publisher               | Usercube                                   |

# SQL Server

Export data from a SQL Server database.

| Package Characteristics | Value                          |
| ----------------------- | ------------------------------ |
| Display Name            | Database/SQL Server            |
| Identifier              | Usercube.SQL.SQLServer@0000001 |
| Export                  | Usercube-Export-Sql.dll        |
| Fulfill                 | NONE                           |
| Has Incremental Mode    | False                          |
| Publisher               | Usercube                       |

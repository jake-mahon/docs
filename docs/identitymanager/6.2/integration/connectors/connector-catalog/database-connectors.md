# CSV

This connector exports data from a [CSV file](https://en.wikipedia.org/wiki/Comma-separated_values).

This page is about [ CSV ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md).

![Package: File/CSV](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/csv/packages_csv_v603.webp)

## Overview

Files in CSV format are commonly used to store information.

## Prerequisites

Implementing this connector requires the source file to be in CSV format.

## Export

This export copies the information found in a CSV file and transforms it into a new CSV file in the
Identity Manager's format.

### Configuration

This process is configured through a
[](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
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

> For example:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "HRContoso": {
>       "Path": "C:/UsercubeContoso/Contoso/hr_conto(.*?).csv",
>       "PathIncremental": "C:/UsercubeContoso/Contoso/hr_delta_conto(.*?).csv",
>       "Encoding": "UTF-16",
>       "Separator": ";",
>       "IsFileNameRegex": true,
>       "NumberOfLinesToSkip": 1,
>       "ValuesToTrim": [
>         "*",
>         "%"
>       ]
>     }
>   }
> }
> ```

#### Setting attributes

| Name                                             | Details                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Path Required if PathIncremental is not defined. | **Type** String **Description** Path of the input file to be used for complete synchronization.                                                                                                                                                                                                                                                                        |
| PathIncremental Required if Path is not defined. | **Type** String **Description** Path of the input file to be used for incremental synchronization.                                                                                                                                                                                                                                                                     |
| IsFileNameRegex optional                         | **Type** Boolean **Description** `True` to enter a regex instead of a normal string for `Path` and `PathIncremental`. **Note:** if several files correspond to the regex, then the export will use the last created file. **Info:** useful when the filename is only partially known, for example when using a generated file.                                         |
| ValuesToTrim optional                            | **Type** String List **Description** Ordered list of the characters to trim at the beginning and at the end of the headers and values of the input file. **Note:** the second value will be trimmed after the first, the order is important. **Example** When writing `$` first and then `%` in `ValuesToTrim`, then "$%I am an example$%" becomes "I am an example$". |
| Encoding default value: UTF-8                    | **Type** String **Description** Encoding of the input file. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#see-the-list-of-available-encodings).                                                                                                                                                              |
| NumberOfLinesToSkip default value: 0             | **Type** Int32 **Description** Number of lines to skip in order to reach the line used as data header.                                                                                                                                                                                                                                                                 |

### Output details

This connector is meant to generate a CSV file, named `<connectionIdentifier>.csv`, to the
[Application Settings](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)
folder.

For example, when exporting a connection named `HRCountries`, the output file will be named
`HRCountries.csv`.

The file's columns come from the header line from the input CSV file.

All columns with headers, even empty ones, will be written to the output. However, columns without
headers will not be written.

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Password reset

This connector does not reset passwords.

### Credential protection

This connector has no credential attributes, and therefore does not use
[](/docs/identitymanager/6.2/reference/index.md)[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md),
nor a [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

Still, data protection can be ensured through an
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) safe.

# Microsoft Excel

This connector exports datasheets from a
[Microsoft Excel](https://www.microsoft.com/en-us/microsoft-365/excel) (XLSX) file.

This page is about [ Excel ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md).

![Package: File/Microsoft Excel](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/excel/packages_excel_v603.webp)

## Overview

Microsoft Excel files using the XLSX file format are commonly used to store information.

## Prerequisites

Implementing this connector requires the input file to be in the XLSX format.

## Export

This connector copies the information from an XLSX file into CSV files, one per spreadsheet, while
filtering out spreadsheets and trimming values if needed.

### Configuration

This process is configured through a
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) in the UI and/or
the XML configuration, and in the `appsettings.agent.json > Connections` section:

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

> For example:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "HRContoso": {
>       "Path": "C:/UsercubeContoso/Contoso/hr_conto(.*?).xlsx",
>       "PathIncremental": "C:/UsercubeContoso/Contoso/hr_delta_conto(.*?).xlsx",
>       "IsFileNameRegex": "true",
>       "SheetOptions": [
>         {
>           "SheetIgnored": "false",
>           "NumberOfLinesToSkip": 1
>         },
>         {
>           "SheetIgnored": "true"
>         }
>       ],
>       "ValuesToTrim": [
>         "$",
>         "%"
>       ]
>     }
>   }
> }
> ```

#### Setting attributes

| Name                                             | Details                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Path Required if PathIncremental is not defined. | **Type** String **Description** Path of the input file to be used for complete synchronization.                                                                                                                                                                                                                                                                        |
| PathIncremental Required if Path is not defined. | **Type** String **Description** Path of the input file to be used for incremental synchronization.                                                                                                                                                                                                                                                                     |
| IsFileNameRegex optional                         | **Type** Boolean **Description** `True` to enter a regex instead of a normal string for `Path` and `PathIncremental`. **Note:** if several files correspond to the regex, then the export will use the last created file. **Info:** useful when the filename is only partially known, for example when using a generated file.                                         |
| ValuesToTrim optional                            | **Type** String List **Description** Ordered list of the characters to trim at the beginning and at the end of the headers and values of the input file. **Note:** the second value will be trimmed after the first, the order is important. **Example** When writing `$` first and then `%` in `ValuesToTrim`, then "$%I am an example$%" becomes "I am an example$". |
|                                                  |                                                                                                                                                                                                                                                                                                                                                                        |
| ---                                              | ---                                                                                                                                                                                                                                                                                                                                                                    |
| SheetOptions optional                            | **Type** Sheet Option List **Description** List of options for each sheet of the input file. The first element of the list sets the options for the first sheet, the second element for the second sheet, etc.                                                                                                                                                         |

##### SheetOptions

| Name                                 | Details                                                                                                |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| SheetIgnored required                | **Type** Boolean **Description** `True` to exclude the sheet from export.                              |
|                                      |                                                                                                        |
| ---                                  | ---                                                                                                    |
| NumberOfLinesToSkip default value: 0 | **Type** Int32 **Description** Number of lines to skip in order to reach the line used as data header. |

### Output details

This connector is meant to generate to the
[Application Settings](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)
folder a CSV file per spreadsheet included in the export, named `<connectionIdentifier>_<index>.csv`
where `<index>` is the spreadsheet's index.

Note that `0` is the first index, not `1`.

> For example, when exporting the content of a 2-sheet Excel file with a connection named
> `HRContoso`, the output files will be named `HRContoso_0.csv` for the first spreadsheet, and
> `HRContoso_1.csv` for the second.

The file's columns come from the header line from the input Excel file.

All columns with headers, even empty ones, will be written to the output. However, columns without
headers will not be written.

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Password reset

This connector does not reset passwords.

### Credential protection

This connector has no credential attributes, and therefore does not use
[ RSA Encryption ](/docs/identitymanager/6.2/reference/index.md), nor
a
[CyberArk's AAM Credential Providers ](/docs/identitymanager/6.2/administration/agent-configuration/credential-providers.md)Vault.

Still, data protection can be ensured through an
[Azure Key Vault](/docs/identitymanager/6.2/administration/agent-configuration/credential-providers.md) safe.

# Sql

This connector exports data from one of various
[Database Management Systems](https://en.wikipedia.org/wiki/Database#database-management-systems).

This page is about:

- Database/[ Generic SQL ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md);
- Database/[ SQL Server ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md);
- Database/[ MySQL ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md);
- Database/[ ODBC ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md);
- Database[ Oracle Database ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md);
- Database/[ PostgreSQL ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md);
- [ SAP ASE ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md).

![Package: Directory/Database/Generic SQL](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/sql/packages_sqlgeneric_v603.webp)

![Package: Directory/Database/Microsoft SQL Server](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/sql/packages_sqlserver_v603.webp)

![Package: Directory/Database/MySQL](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/sql/packages_sqlmy_v603.webp)

![Package: Directory/Database/ODBC](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/sql/packages_sqlodbc_v603.webp)

![Package: Directory/Database/Oracle](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/sql/packages_sqloracle_v603.webp)

![Package: Directory/Database/PostgreSQL](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/sql/packages_sqlpostgre_v603.webp)

![Package: Directory/Database/SAP ASE](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/sql/packages_sqlsap_v603.webp)

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
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) in the UI and/or
the XML configuration, and in the `appsettings.agent.json > Connections` section:

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

| Name                                          | Details                                                                                                                                                                                                                                                                                                                                                      |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ConnectionString required                     | **Type** String **Description** Connection string of the database. See the [specific syntax](https://docs.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqlconnection.connectionstring?view=dotnet-plat-ext-5.0).                                                                                                                                     |
| Timeout optional                              | **Type** Int32 **Description** Time period (in seconds) after which the request attempt is terminated and an error is generated.                                                                                                                                                                                                                             |
|                                               |                                                                                                                                                                                                                                                                                                                                                              |
| ---                                           | ---                                                                                                                                                                                                                                                                                                                                                          |
| SqlCommand optional                           | **Type** String **Description** SQL request to be executed. **Note:** when not specified and `SqlFile` neither, then all the[ Entity Type Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) of this connector will be exported.                                                                                    |
| SqlFile optional                              | **Type** String **Description** Path of the file containing the SQL request to be executed. **Note:** ignored when `SqlCommand` is specified. **Note:** when not specified and `SqlFile` neither, then all the [ Entity Type Mapping ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) of this connector will be exported. |
| CsvEncoding default value: UTF-8              | **Type** String **Description** Encoding of the file. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#see-the-list-of-available-encodings).                                                                                                                                                          |
| ProviderClassFullName optional                | **Type** String **Description** Invariant name to register the provider. **Note:** required when querying a DBMS other than Microsoft SQL Server.                                                                                                                                                                                                            |
| ProviderDllName optional                      | **Type** String **Description** DLL, i.e. name and extension, to be loaded by the connector. **Note:** the DLL must be in the `Runtime` folder. **Note:** required when querying a DBMS other than Microsoft SQL Server.                                                                                                                                     |
| IsolationLevel default value: ReadUncommitted | **Type** String **Description** Locking behavior of the transaction: `ReadUncommitted`; `ReadCommitted` - used for the databases that do not support the ReadUncommitted level, like Oracle databases.                                                                                                                                                       |

### Connect to other DBMS

Connect to a DBMS other than Microsoft SQL Server by proceeding as follows:

1. Download and extract the package.
   > For MySQL, download the package from [MySql.Data](https://www.nuget.org/packages/MySql.Data/).
   >
   > ![MySQL: Download Package](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/sql/sql_downloadpackage.webp)
2. Copy the DLL file (corresponding to the correct .Net version) to the `Runtime` folder.
   > For MySQL, the DLL is `MySql.Data.dll`.
3. Get the value required for `ProviderClassFullName` and `ProviderDllName`:

   - for a DBMS handled by Identity Manager's packages, by accessing the
     [ References: Packages ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md);

     > For MySQL:
     >
     > ![Package Characteristics Example](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/sql/sql_packagecharacteristics.webp)

   - for another DBMS, by accessing the DBMS' documentation for .Net and finding a class with
     **Factory** in its name.

     > If MySQL were not part of Identity Manager's packages, you would see
     > [MySqlClientFactory](https://dev.mysql.com/doc/dev/connector-net/latest/api/data_api/MySql.Data.MySqlClient.MySqlClientFactory.html).

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
     >       "SqlFile": "C:/UsercubeDemo/Conf/Sql/mySql.sql",
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
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) folder one CSV
file, named `<connectionIdentifier>.csv` whose columns correspond to the columns returned by the SQL
query.

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Password reset

This connector does not reset passwords.

### Credential protection

Data protection can be ensured through:

- [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md), configured in
  the `appsettings.encrypted.agent.json` file;
- An [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) safe;

| Attribute             | Naming Convention for the Key in Azure Key Vault   |
| --------------------- | -------------------------------------------------- |
| ConnectionString      | `Connections--<identifier>--ConnectionString`      |
| SqlCommand            | `Connections--<identifier>--SqlCommand`            |
| SqlFile               | `Connections--<identifier>--SqlFile`               |
| CsvEncoding           | `Connections--<identifier>--CsvEncoding`           |
| ProviderClassFullName | `Connections--<identifier>--ProviderClassFullName` |
| ProviderDllName       | `Connections--<identifier>--ProviderDllName`       |
| Timeout               | `Connections--<identifier>--Timeout`               |

[](/docs/identitymanager/6.2/administration/agent-configuration/credential-providers.md)[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
is not available for this connector.

# Sql Server Entitlements

This connector exports entitlements from
[Microsoft SQL Server](https://www.microsoft.com/en-us/sql-server/).

This page is about
[ SQL Server Entitlements ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md).

![Package: Database/Microsoft SQL Server Entitlements](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/sqlserverentitlements/packages_sqlservermanagement_v603.webp)

## Overview

Identity Manager can manage permissions within Microsoft SQL Server, by exporting the server's and
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
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) in the UI and/or
the XML configuration, and in the `appsettings.agent.json > Connections` section:

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

> The following example connects Identity Manager to Microsoft SQL Server and exports the principals
> from the databases `UsercubeDemo` and `AdventureWorks2017`:
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
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) folder the
following CSV files:

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

- [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md), configured in
  the `appsettings.encrypted.agent.json` file;
- an [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) safe;

| Attribute        | Naming Convention for the Key in Azure Key Vault |
| ---------------- | ------------------------------------------------ |
| ConnectionString | `Connections--<identifier>--ConnectionString`    |
| Timeout          | `Connections--<identifier>--Timeout`             |

[](/docs/identitymanager/6.2/administration/agent-configuration/credential-providers.md)[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
is not available for this connector.

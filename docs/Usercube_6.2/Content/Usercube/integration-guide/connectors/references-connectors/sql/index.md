---
sidebar_position: 1217
title: Sql
---

# Sql

This connector exports data from one of various [Database Management Systems](https://en.wikipedia.org/wiki/Database#Database_management_system).

This page is about:

* Database/[Generic SQL](../../references-packages/generic-sql/index);
* Database/[SQL Server](../../references-packages/sql-server/index);
* Database/[MySQL](../../references-packages/mysql/index);
* Database/[ODBC](../../references-packages/odbc/index);
* Database[Oracle Database](../../references-packages/oracle-database/index);
* Database/[PostgreSQL](../../references-packages/postgresql/index);
* [SAP ASE](../../references-packages/sapase/index).

![Package: Directory/Database/Generic SQL](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Packages_sqlgeneric_V603.png)

![Package: Directory/Database/Microsoft SQL Server](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Packages_sqlserver_V603.png)

![Package: Directory/Database/MySQL](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Packages_sqlmy_V603.png)

![Package: Directory/Database/ODBC](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Packages_sqlodbc_V603.png)

![Package: Directory/Database/Oracle](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Packages_sqloracle_V603.png)

![Package: Directory/Database/PostgreSQL](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Packages_sqlpostgre_V603.png)

![Package: Directory/Database/SAP ASE](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Packages_sqlsap_V603.png)

## Overview

A database is a collection of relational data which represents some aspects of the real world. A database system is designed to be built and populated with data for a specific task.

A Database Management System (DBMS) is a software for storing and retrieving users' data while considering appropriate security measures.

> Some popular DBMS systems are Microsoft SQL Server, MySQL, Oracle, PostgreSQL, etc.

The goal of this connector is to connect to a DBMS and execute a query in order to export a table.

## Prerequisites

Implementing this connector requires:

* the configuration of a DBMS system;
  > For example for Microsoft SQL Server 2017, see Microsoft's documentation for [planning a SQL Server installation](https://docs.microsoft.com/en-us/sql/sql-server/install/planning-a-sql-server-installation?view=sql-server-2017), the [SQL Server installation guide](https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server?view=sql-server-2017) and (optionally) [downloading SQL Server Management Studio (SSMS)](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15).
* creating a database `MyDb` with several tables and data so the user can query on the database, for testing purposes.

## Export

This connector exports the content of any table from an SQL database and writes it to a CSV file.

### Configuration

This process is configured through a [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection") in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "": {
      ...
    }
  }
}
```
:::note
The identifier of the connection and thus the name of the subsection must:
- be unique.
- not begin with a digit.
- not contain , :, ", /, \, |, ?, \* and \_.
:::

> The following example configures the connection to Microsoft SQL Server and exports the table `UC_Connectors` from the database `MyDb`:
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

| Name | Details |
| --- | --- |
| ConnectionString required | **Type**  String  **Description** Connection string of the database. See the [specific syntax](https://docs.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqlconnection.connectionstring?view=dotnet-plat-ext-5.0). |
| Timeout optional | **Type**  Int32  **Description** Time period (in seconds) after which the request attempt is terminated and an error is generated. |

|  |  |
| --- | --- |
| SqlCommand optional | **Type**  String  **Description** SQL request to be executed. **Note:** when not specified and `SqlFile` neither, then all the[Entity Type Mapping](../../../toolkit/xml-configuration/connectors/entitytypemapping/index "Entity Type Mapping") of this connector will be exported. |
| SqlFile optional | **Type**  String  **Description** Path of the file containing the SQL request to be executed. **Note:** ignored when `SqlCommand` is specified. **Note:** when not specified and `SqlFile` neither, then all the [Entity Type Mapping](../../../toolkit/xml-configuration/connectors/entitytypemapping/index "Entity Type Mapping") of this connector will be exported. |
| CsvEncoding default value: UTF-8 | **Type**  String  **Description** Encoding of the file. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#list-of-encodings). |
| ProviderClassFullName optional | **Type**  String  **Description** Invariant name to register the provider. **Note:** required when querying a DBMS other than Microsoft SQL Server. |
| ProviderDllName optional | **Type**  String  **Description** DLL, i.e. name and extension, to be loaded by the connector. **Note:** the DLL must be in the `Runtime` folder. **Note:** required when querying a DBMS other than Microsoft SQL Server. |
| IsolationLevel default value: ReadUncommitted | **Type**  String  **Description** Locking behavior of the transaction:  `ReadUncommitted`; `ReadCommitted` - used for the databases that do not support the ReadUncommitted level, like Oracle databases. |

### Connect to other DBMS

Connect to a DBMS other than Microsoft SQL Server by proceeding as follows:

1. Download and extract the package.
   > For MySQL, download the package from [MySql.Data](https://www.nuget.org/packages/MySql.Data/).
   >
   > ![MySQL: Download Package](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/SQL_downloadPackage.png)
2. Copy the DLL file (corresponding to the correct .Net version) to the `Runtime` folder.
   > For MySQL, the DLL is `MySql.Data.dll`.
3. Get the value required for `ProviderClassFullName` and `ProviderDllName`:
   * for a DBMS handled by Identity Manager's packages, by accessing the [References: Packages](../../references-packages/index);

     > For MySQL:
     >
     > ![Package Characteristics Example](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/SQL_packageCharacteristics.png)
   * for another DBMS, by accessing the DBMS' documentation for .Net and finding a class with **Factory** in its name.

     > If MySQL were not part of Identity Manager's packages, you would see [MySqlClientFactory](https://dev.mysql.com/doc/dev/connector-net/latest/api/data_api/MySql.Data.MySqlClient.MySqlClientFactory.html "MySqlClientFactory").

     The **Factory** class must derive from **DbProviderFactory**. After verification, the `ProviderClassFullName` can be found in the **Inheritance Hierarchy** of the class.

     > For MySQL, here `ProviderDllName` is **MySql.Data.dll** and `ProviderClassFullName` is **MySql.Data.MySqlClient.MySqlClientFactory**.
     >
     > Then the following example configures the connection to MySQL and exports the table `UC_Connectors` from the database `MyDb` (the SQL command is inside `mySql.sql`):
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

This connector is meant to generate to the [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection") folder one CSV file, named `.csv` whose columns correspond to the columns returned by the SQL query.

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Password reset

This connector does not reset passwords.

### Credential protection

Data protection can be ensured through:

* [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection"), configured in the `appsettings.encrypted.agent.json` file;
* An [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection") safe;

| Attribute | Naming Convention for the Key in Azure Key Vault |
| --- | --- |
| ConnectionString | `Connections----ConnectionString` |
| SqlCommand | `Connections----SqlCommand` |
| SqlFile | `Connections----SqlFile` |
| CsvEncoding | `Connections----CsvEncoding` |
| ProviderClassFullName | `Connections----ProviderClassFullName` |
| ProviderDllName | `Connections----ProviderDllName` |
| Timeout | `Connections----Timeout` |

:::note
Connection
is not available for this connector.
:::
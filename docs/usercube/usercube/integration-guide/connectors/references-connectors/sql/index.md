# Sql

This connector exports data from one of various [Database Management Systems](https://en.wikipedia.org/wiki/Database#Database-Management-Systems).

This page is about:

- Database/[
  Generic SQL
  ](/docs/product_docs/usercube/usercube/integration-guide/connectors/references-packages/generic-sql/index.md);
- Database/[
  SQL Server
  ](/docs/product_docs/usercube/usercube/integration-guide/connectors/references-packages/sql-server/index.md);
- Database/[
  MySQL
  ](/docs/product_docs/usercube/usercube/integration-guide/connectors/references-packages/mysql/index.md);
- Database/[
  ODBC
  ](/docs/product_docs/usercube/usercube/integration-guide/connectors/references-packages/odbc/index.md);
- Database[
  Oracle Database
  ](/docs/product_docs/usercube/usercube/integration-guide/connectors/references-packages/oracle-database/index.md);
- Database/[
  PostgreSQL
  ](/docs/product_docs/usercube/usercube/integration-guide/connectors/references-packages/postgresql/index.md);
- [
  SAP ASE
  ](/docs/product_docs/usercube/usercube/integration-guide/connectors/references-packages/sapase/index.md).

![Package: Directory/Database/Generic SQL](/static/img/product_docs/usercube/usercube/integration-guide/connectors/references-connectors/sql/packages_sqlgeneric_v603.png)

![Package: Directory/Database/Microsoft SQL Server](/static/img/product_docs/usercube/usercube/integration-guide/connectors/references-connectors/sql/packages_sqlserver_v603.png)

![Package: Directory/Database/MySQL](/static/img/product_docs/usercube/usercube/integration-guide/connectors/references-connectors/sql/packages_sqlmy_v603.png)

![Package: Directory/Database/ODBC](/static/img/product_docs/usercube/usercube/integration-guide/connectors/references-connectors/sql/packages_sqlodbc_v603.png)

![Package: Directory/Database/Oracle](/static/img/product_docs/usercube/usercube/integration-guide/connectors/references-connectors/sql/packages_sqloracle_v603.png)

![Package: Directory/Database/PostgreSQL](/static/img/product_docs/usercube/usercube/integration-guide/connectors/references-connectors/sql/packages_sqlpostgre_v603.png)

![Package: Directory/Database/SAP ASE](/static/img/product_docs/usercube/usercube/integration-guide/connectors/references-connectors/sql/packages_sqlsap_v603.png)

## Overview

A database is a collection of relational data which represents some aspects of the real world. A database system is designed to be built and populated with data for a specific task.

A Database Management System (DBMS) is a software for storing and retrieving users' data while considering appropriate security measures.

> Some popular DBMS systems are Microsoft SQL Server, MySQL, Oracle, PostgreSQL, etc.

The goal of this connector is to connect to a DBMS and execute a query in order to export a table.

## Prerequisites

Implementing this connector requires:

- the configuration of a DBMS system;
  > For example for Microsoft SQL Server 2017, see Microsoft's documentation for [planning a SQL Server installation](https://docs.microsoft.com/en-us/sql/sql-server/install/planning-a-sql-server-installation?view=sql-server-2017), the [SQL Server installation guide](https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server?view=sql-server-2017) and (optionally) [downloading SQL Server Management Studio (SSMS)](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15).
- creating a database ```MyDb``` with several tables and data so the user can query on the database, for testing purposes.

## Export

This connector exports the content of any table from an SQL database and writes it to a CSV file.

### Configuration

This process is configured through a [
Connection
](/docs/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) in the UI and/or the XML configuration, and in the ```appsettings.agent.json > Connections``` section:

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
  
- not contain ```<```, ```>```, ```:```, ```"```, ```/```, ```\```, ```|```, ```?```, ```*``` and ```_```.

> The following example configures the connection to Microsoft SQL Server and exports the table ```UC_Connectors``` from the database ```MyDb```:
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
| ConnectionString   required | __Type__    String   __Description__ Connection string of the database. See the [specific syntax](https://docs.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqlconnection.connectionstring?view=dotnet-plat-ext-5.0). |
| Timeout   optional | __Type__    Int32   __Description__ Time period (in seconds) after which the request attempt is terminated and an error is generated. |
|  |  |
| --- | --- |
| SqlCommand   optional | __Type__    String   __Description__ SQL request to be executed.   __Note:__ when not specified and ```SqlFile``` neither, then all the[ Entity Type Mapping ](/docs/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md) of this connector will be exported. |
| SqlFile   optional | __Type__    String   __Description__ Path of the file containing the SQL request to be executed.   __Note:__ ignored when ```SqlCommand``` is specified.   __Note:__ when not specified and ```SqlFile``` neither, then all the [ Entity Type Mapping ](/docs/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md) of this connector will be exported. |
| CsvEncoding   default value: UTF-8 | __Type__    String   __Description__ Encoding of the file. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#See-the-list-of-available-encodings). |
| ProviderClassFullName   optional | __Type__    String   __Description__ Invariant name to register the provider.   __Note:__ required when querying a DBMS other than Microsoft SQL Server. |
| ProviderDllName   optional | __Type__    String   __Description__ DLL, i.e. name and extension, to be loaded by the connector.   __Note:__ the DLL must be in the ```Runtime``` folder.   __Note:__ required when querying a DBMS other than Microsoft SQL Server. |
| IsolationLevel   default value: ReadUncommitted | __Type__    String   __Description__ Locking behavior of the transaction:   ```ReadUncommitted```;   ```ReadCommitted``` - used for the databases that do not support the ReadUncommitted level, like Oracle databases. |

### Connect to other DBMS

Connect to a DBMS other than Microsoft SQL Server by proceeding as follows:

1. Download and extract the package.
   > For MySQL, download the package from [MySql.Data](https://www.nuget.org/packages/MySql.Data/).
   >
   > ![MySQL: Download Package](/static/img/product_docs/usercube/usercube/integration-guide/connectors/references-connectors/sql/sql_downloadpackage.png)
2. Copy the DLL file (corresponding to the correct .Net version) to the ```Runtime``` folder.
   > For MySQL, the DLL is ```MySql.Data.dll```.
3. Get the value required for ```ProviderClassFullName``` and ```ProviderDllName```:
   - for a DBMS handled by Identity Manager's packages, by accessing the [
     References: Packages
     ](/docs/product_docs/usercube/usercube/integration-guide/connectors/references-packages/index.md);

     > For MySQL:
     >
     > ![Package Characteristics Example](/static/img/product_docs/usercube/usercube/integration-guide/connectors/references-connectors/sql/sql_packagecharacteristics.png)
   - for another DBMS, by accessing the DBMS' documentation for .Net and finding a class with __Factory__ in its name.

     > If MySQL were not part of Identity Manager's packages, you would see [MySqlClientFactory](https://dev.mysql.com/doc/dev/connector-net/latest/api/data_api/MySql.Data.MySqlClient.MySqlClientFactory.html).

     The __Factory__ class must derive from __DbProviderFactory__. After verification, the ```ProviderClassFullName``` can be found in the __Inheritance Hierarchy__ of the class.

     > For MySQL, here ```ProviderDllName``` is __MySql.Data.dll__ and ```ProviderClassFullName``` is __MySql.Data.MySqlClient.MySqlClientFactory__.
     >
     > Then the following example configures the connection to MySQL and exports the table ```UC_Connectors``` from the database ```MyDb``` (the SQL command is inside ```mySql.sql```):
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

This connector is meant to generate to the [
Connection
](/docs/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) folder one CSV file, named ```<connectionIdentifier>.csv``` whose columns correspond to the columns returned by the SQL query.

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Password reset

This connector does not reset passwords.

### Credential protection

Data protection can be ensured through:

- [
  Connection
  ](/docs/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/connectors/connection/index.md), configured in the ```appsettings.encrypted.agent.json``` file;
- An [
  Connection
  ](/docs/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) safe;

| Attribute | Naming Convention for the Key in Azure Key Vault |
| --- | --- |
| ConnectionString | ```Connections--<identifier>--ConnectionString``` |
| SqlCommand | ```Connections--<identifier>--SqlCommand``` |
| SqlFile | ```Connections--<identifier>--SqlFile``` |
| CsvEncoding | ```Connections--<identifier>--CsvEncoding``` |
| ProviderClassFullName | ```Connections--<identifier>--ProviderClassFullName``` |
| ProviderDllName | ```Connections--<identifier>--ProviderDllName``` |
| Timeout | ```Connections--<identifier>--Timeout``` |

[](/docs/product_docs/usercube/usercube/integration-guide/network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index.md)[
Connection
](/docs/product_docs/usercube/usercube/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) is not available for this connector.

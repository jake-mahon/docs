# Oracle Database

Export data from an Oracle database.

| Package Characteristics | Value |
| --- | --- |
| Display Name | Database/Oracle |
| Identifier | Usercube.SQL.Oracle@0000001 |
| Export | Usercube-Export-Sql.dll |
| Fulfill | NONE |
| Has Incremental Mode | False |
| Publisher | Identity Manager |
| ProviderClassFullName | Oracle.ManagedDataAccess.Client.OracleClientFactory |
| ProviderDllName | Oracle.ManagedDataAccess.Core |

For this package, the default isolation level is __ReadCommitted__.

To use this package, ```Oracle.ManagedDataAccess.Core``` needs to be [downloaded from the Oracle website](https://www.oracle.com/database/technologies/net-downloads.html) (selecting the ```ODP.NET``` release) and copied to the ```Runtime``` folder.

__NOTE:__ The DLL in the "Oracle.ManagedDataAccess" package isn't compatible with .NET 8

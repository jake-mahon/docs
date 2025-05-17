---
sidebar_position: 1140
title: Oracle Database
---

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

:::note
For this package, the default isolation level is ReadCommitted.
:::

:::note
To use this package, Oracle.ManagedDataAccess.Core needs to be downloaded from the Oracle website (selecting the ODP.NET release) and copied to the Runtime folder.
NOTE: The DLL in the "Oracle.ManagedDataAccess" package isn't compatible with .NET 8
:::
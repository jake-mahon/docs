---
sidebar_position: 7118
title: Parse a Connection String
---

# Parse a Connection String

This API parses the connection string given in one line format.

## Endpoint

https://machinename:4443/GroupIDDataService/api/DataSource/ParseConnectionString

## HTTP Method

POST

#### Sample Request Syntax

```
{  
    "connectionString": "Data Source='MSSQL';Initial Catalog=ExternalDB;Password='password123';User ID='sa';Integrated Security=false;",  
    "dataSourceType": 3  
}
```
#### Sample Response Syntax

```
{  
    "ConnectionString": "'MSSQL'",  
    "Database": "ExternalDB",  
    "Password": "'password123'",  
    "UserName": "'sa'",  
    "WindowsAuthentication": "true"  
}
```
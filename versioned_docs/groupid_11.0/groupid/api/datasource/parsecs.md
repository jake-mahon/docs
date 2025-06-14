# Parse a Connection String

This API parses the connection string given in one line format.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/ParseConnectionString

## HTTP Method

POST

#### Sample Request Syntax

```
{  
    "connectionString": "Data Source='MSSQL';Initial Catalog=ExternalDB;Password='webdir123R';User ID='sa';Integrated Security=false;",  
    "dataSourceType": 3  
}
```

#### Sample Response Syntax

```
{  
    "ConnectionString": "'MSSQL'",  
    "Database": "ExternalDB",  
    "Password": "'webdir123R'",  
    "UserName": "'sa'",  
    "WindowsAuthentication": "true"  
}
```

See Also

- [Data Source APIs](/versioned_docs/groupid_11.0/groupid/api/datasource/datasourceapis.md)
- [Common Errors](/versioned_docs/groupid_11.0/groupid/api/commonerrors.md)

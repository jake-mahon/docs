# Get Provider Options of a Data Source

Use this API to retrieve information about the provider of a specified data source.

Get DataSource provider options

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/GetDataSourceProviderOptions/{id}

## HTTP Method

GET

#### Sample Response Syntax

```
{  
    "isDirectoryProvider": false,  
    "isTableProvider": true,  
    "capabilityMappings": {  
        "Source": [  
            "Active Directory",  
            "Text/CSV"  
        ]  
    },  
    "providerType": "Text/CSV",  
    "creatableObjects": [  
        {  
            "ldapName": "Object",  
            "displayName": "Object"  
        }  
    ]  
}
```

See Also

- [Data Source APIs](/versioned_docs/groupid_11.0/groupid/api/datasource/datasourceapis.md)
- [Common Errors](/versioned_docs/groupid_11.0/groupid/api/commonerrors.md)

---
title: datasource getdspo API
sidebar_label: getdspo
description: API reference for getdspo operations in Directory Manager with request parameters, response examples, and implementation details.
---

# Get Provider Options of a Data Source

Use this API to retrieve information about the provider of a specified data source.

## Endpoint

https://machinename:4443/GroupIDDataService/api/DataSource/GetDataSourceProviderOptions/{id}

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

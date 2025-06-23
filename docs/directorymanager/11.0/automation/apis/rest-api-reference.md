# REST API Reference

## Contact APIs

GroupID provides the following APIs to perform contact-specific functions:

- [Create a Contact](#create-a-contact)
- [Delete a Contact](#delete-a-contact)
- [Delete Contacts](#delete-contacts)
- [Get a Contact](#get-a-contact)
- [Get Contacts](#get-contacts)
- [Update a Contact](#update-a-contact)

NOTE: The contact object type is not supported in a Microsoft Entra ID based identity store.

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Get Token](/docs/directorymanager/11.0/automation/apis/index.md)
- [Data Source APIs](#data-source-apis)
- [Group APIs](#group-apis)
- [Logs APIs](#logs-apis)
- [Synchronize Jobs APIs](#synchronize-jobs-apis)
- [User APIs](#user-apis)
- [Workflow APIs](#workflow-apis)

## Create a Contact

Using this API you can create a contact in the specified identity store.

NOTE: The contact object type is not supported in a Microsoft Entra ID based identity store.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Contacts

## HTTP Method

POST

#### Sample Request Syntax

```
{
    "container": "OU=API,DC=groupid,DC=lab",
    "attributes": {
        "attributesCollection": {
            "CN": [
                {
                    "value": "Demo Contact 4",
                    "action": 0
                }
            ],
            "objectClass": [
                {
                    "value": "contact",
                    "action": 0
                }
            ]
        }
    }
}
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 0,
    "status": 0,
    "message": null,
    "data": "bf1c9efb-5e60-4d42-9899-5d33fe70d818",
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": "dc.directorymanager.lab",
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Contact APIs](#contact-apis)

## Delete a Contact

Using this API you can delete a specified contact from the specified identity store.

NOTE: The contact object type is not supported in a Microsoft Entra ID based identity store.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Contacts/{userIdentity}

## HTTP Method

DELETE

#### Sample Response Syntax

```
{
    "name": null,
    "type": 0,
    "status": 0,
    "message": null,
    "data": "",
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Contact APIs](#contact-apis)

## Delete Contacts

This API is for deleting multiple contacts from a specified identity store.

NOTE: The contact object type is not supported in a Microsoft Entra ID based identity store.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Contacts

## HTTP Method

DELETE

#### Sample Request Syntax

```
[
    "aaa92db4-b912-49a8-9f85-56da5f33daaf",
    "bee3ae99-d1d6-4480-a271-65d567784cca"
]
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 0,
    "status": 0,
    "message": null,
    "data": "",
    "identityStoreObject": null,
    "details": [
        {
            "name": null,
            "type": 0,
            "status": 0,
            "message": null,
            "data": "",
            "identityStoreObject": null,
            "details": [],
            "currentDirectoryServer": null,
            "errorCode": null,
            "exceptionMessagesAttributeWise": null,
            "isResyncAble": true
        },
        {
            "name": null,
            "type": 0,
            "status": 0,
            "message": null,
            "data": "",
            "identityStoreObject": null,
            "details": [],
            "currentDirectoryServer": null,
            "errorCode": null,
            "exceptionMessagesAttributeWise": null,
            "isResyncAble": true
        }
    ],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Contact APIs](#contact-apis)

## Get a Contact

Use this API to retrieve information about a contact in a specified identity store.

NOTE: The contact object type is not supported in a Microsoft Entra ID based identity store.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Contacts/{userIdentity}

## HTTP Method

GET

#### Sample Request Syntax

```
[
    "displayName"
  ]
```

#### Sample Response Syntax

```
{
    "contactClassName": null,
    "displayName": "Contact1,Demo",
    "emailAddress": null,
    "firstName": null,
    "initials": null,
    "lastName": null,
    "alias": null,
    "title": null,
    "department": null,
    "companyName": null,
    "dc": null,
    "city": null,
    "country": null,
    "fax": null,
    "mobilePhone": null,
    "office": null,
    "phoneNumber": null,
    "postalCode": null,
    "state": null,
    "streetAddress": null,
    "objectIdFromIdentityStore": "aaa92db4-b912-49a8-9f85-56da5f33daaf",
    "identityStoreId": 2,
    "identityStore": null,
    "objectType": "contact",
    "objectName": null,
    "objectDisplayName": "Contact1,Demo",
    "stopNotification": false,
    "attributesBusinessObject": {
        "attributesCollection": {
            "displayName": [
                {
                    "identityStoreId": 0,
                    "value": "Contact1,Demo",
                    "dn": null,
                    "action": 0,
                    "attributeCollection": {},
                    "nestedAttributes": {
                        "attributesCollection": {},
                        "filePermissionCollection": {},
                        "type": null
                    }
                }
            ],
            "objectCategory": [],
            "CN": [
                {
                    "identityStoreId": 0,
                    "value": "Demo Contact1",
                    "dn": null,
                    "action": 0,
                    "attributeCollection": {},
                    "nestedAttributes": {
                        "attributesCollection": {},
                        "filePermissionCollection": {},
                        "type": null
                    }
                }
            ],
            "container": [
                {
                    "identityStoreId": 0,
                    "value": "OU=API,DC=groupid,DC=lab",
                    "dn": null,
                    "action": 0,
                    "attributeCollection": {},
                    "nestedAttributes": {
                        "attributesCollection": {},
                        "filePermissionCollection": {},
                        "type": null
                    }
                }
            ],
            "objectClass": [
                {
                    "identityStoreId": 0,
                    "value": "contact",
                    "dn": null,
                    "action": 0,
                    "attributeCollection": {},
                    "nestedAttributes": {
                        "attributesCollection": {},
                        "filePermissionCollection": {},
                        "type": null
                    }
                }
            ],
            "name": [
                {
                    "identityStoreId": 0,
                    "value": "Demo Contact1",
                    "dn": null,
                    "action": 0,
                    "attributeCollection": {},
                    "nestedAttributes": {
                        "attributesCollection": {},
                        "filePermissionCollection": {},
                        "type": null
                    }
                }
            ]
        },
        "filePermissionCollection": {},
        "type": null
    },
    "elasticHitScore": 0.0
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Contact APIs](#contact-apis)

## Get Contacts

Use this API to retrieve information of multiple contacts from a specified identity store.

NOTE: The contact object type is not supported in a Microsoft Entra ID based identity store.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Contacts

## HTTP Method

GET

#### Sample Request Syntax

```
{
  "userIdentities": [
    "aaa92db4-b912-49a8-9f85-56da5f33daaf",
    "bee3ae99-d1d6-4480-a271-65d567784cca"
  ],
  "attributesToLoad": [
    "displayName"
  ]
}
```

#### Sample Response Syntax

```
{
        "contactClassName": null,
        "displayName": "Contact1,Demo",
        "emailAddress": null,
        "firstName": null,
        "initials": null,
        "lastName": null,
        "alias": null,
        "title": null,
        "department": null,
        "companyName": null,
        "dc": null,
        "city": null,
        "country": null,
        "fax": null,
        "mobilePhone": null,
        "office": null,
        "phoneNumber": null,
        "postalCode": null,
        "state": null,
        "streetAddress": null,
        "objectIdFromIdentityStore": "aaa92db4-b912-49a8-9f85-56da5f33daaf",
        "identityStoreId": 2,
        "identityStore": null,
        "objectType": "contact",
        "objectName": null,
        "objectDisplayName": "Contact1,Demo",
        "stopNotification": false,
        "attributesBusinessObject": {
            "attributesCollection": {
                "displayName": [
                    {
                        "identityStoreId": 0,
                        "value": "Contact1,Demo",
                        "dn": null,
                        "action": 0,
                        "attributeCollection": {},
                        "nestedAttributes": {
                            "attributesCollection": {},
                            "filePermissionCollection": {},
                            "type": null
                        }
                    }
                ],
                "objectCategory": [],
                "CN": [
                    {
                        "identityStoreId": 0,
                        "value": "Demo Contact1",
                        "dn": null,
                        "action": 0,
                        "attributeCollection": {},
                        "nestedAttributes": {
                            "attributesCollection": {},
                            "filePermissionCollection": {},
                            "type": null
                        }
                    }
                ],
                "container": [
                    {
                        "identityStoreId": 0,
                        "value": "OU=API,DC=groupid,DC=lab",
                        "dn": null,
                        "action": 0,
                        "attributeCollection": {},
                        "nestedAttributes": {
                            "attributesCollection": {},
                            "filePermissionCollection": {},
                            "type": null
                        }
                    }
                ],
                "objectClass": [
                    {
                        "identityStoreId": 0,
                        "value": "contact",
                        "dn": null,
                        "action": 0,
                        "attributeCollection": {},
                        "nestedAttributes": {
                            "attributesCollection": {},
                            "filePermissionCollection": {},
                            "type": null
                        }
                    }
                ],
                "name": [
                    {
                        "identityStoreId": 0,
                        "value": "Demo Contact1",
                        "dn": null,
                        "action": 0,
                        "attributeCollection": {},
                        "nestedAttributes": {
                            "attributesCollection": {},
                            "filePermissionCollection": {},
                            "type": null
                        }
                    }
                ]
            },
            "filePermissionCollection": {},
            "type": null
        },
        "elasticHitScore": 0.0
    },
    {
        "contactClassName": null,
        "displayName": "Demo2,Contact",
        "emailAddress": null,
        "firstName": null,
        "initials": null,
        "lastName": null,
        "alias": null,
        "title": null,
        "department": null,
        "companyName": null,
        "dc": null,
        "city": null,
        "country": null,
        "fax": null,
        "mobilePhone": null,
        "office": null,
        "phoneNumber": null,
        "postalCode": null,
        "state": null,
        "streetAddress": null,
        "objectIdFromIdentityStore": "bee3ae99-d1d6-4480-a271-65d567784cca",
        "identityStoreId": 2,
        "identityStore": null,
        "objectType": "contact",
        "objectName": null,
        "objectDisplayName": "Demo2,Contact",
        "stopNotification": false,
        "attributesBusinessObject": {
            "attributesCollection": {
                "displayName": [
                    {
                        "identityStoreId": 0,
                        "value": "Demo2,Contact",
                        "dn": null,
                        "action": 0,
                        "attributeCollection": {},
                        "nestedAttributes": {
                            "attributesCollection": {},
                            "filePermissionCollection": {},
                            "type": null
                        }
                    }
                ],
                "objectCategory": [],
                "CN": [
                    {
                        "identityStoreId": 0,
                        "value": "Contact Demo2",
                        "dn": null,
                        "action": 0,
                        "attributeCollection": {},
                        "nestedAttributes": {
                            "attributesCollection": {},
                            "filePermissionCollection": {},
                            "type": null
                        }
                    }
                ],
                "container": [
                    {
                        "identityStoreId": 0,
                        "value": "OU=API,DC=groupid,DC=lab",
                        "dn": null,
                        "action": 0,
                        "attributeCollection": {},
                        "nestedAttributes": {
                            "attributesCollection": {},
                            "filePermissionCollection": {},
                            "type": null
                        }
                    }
                ],
                "objectClass": [
                    {
                        "identityStoreId": 0,
                        "value": "contact",
                        "dn": null,
                        "action": 0,
                        "attributeCollection": {},
                        "nestedAttributes": {
                            "attributesCollection": {},
                            "filePermissionCollection": {},
                            "type": null
                        }
                    }
                ],
                "name": [
                    {
                        "identityStoreId": 0,
                        "value": "Contact Demo2",
                        "dn": null,
                        "action": 0,
                        "attributeCollection": {},
                        "nestedAttributes": {
                            "attributesCollection": {},
                            "filePermissionCollection": {},
                            "type": null
                        }
                    }
                ]
            },
            "filePermissionCollection": {},
            "type": null
        },
        "elasticHitScore": 0.0
    }
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Contact APIs](#contact-apis)

## Update a Contact

Use this API if you want to update a contact's attribute(s) and their value(s) in a specified
identity store.

NOTE: The contact object type is not supported in a Microsoft Entra ID based identity store.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Contacts

## HTTP Method

PATCH

#### Sample Request Syntax

```
{
    "objectIdentity": "aaa92db4-b912-49a8-9f85-56da5f33daaf",
    "attributesToUpdate": {
        "AttributesCollection": {
            "department": [
                {
                    "Value": "Operation",
                    "Action": 0
                }
            ],
            "company": [
                {
                    "Value": "Imanami - Now part of Netwrix",
                    "Action": 0
                }
            ]
        }
    }
}
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 0,
    "status": 0,
    "message": null,
    "data": "",
    "identityStoreObject": null,
    "details": [
        {
            "name": "department",
            "type": 8,
            "status": 0,
            "message": null,
            "data": "",
            "identityStoreObject": null,
            "details": [],
            "currentDirectoryServer": null,
            "errorCode": null,
            "exceptionMessagesAttributeWise": null,
            "isResyncAble": true
        },
        {
            "name": "company",
            "type": 8,
            "status": 0,
            "message": null,
            "data": "",
            "identityStoreObject": null,
            "details": [],
            "currentDirectoryServer": null,
            "errorCode": null,
            "exceptionMessagesAttributeWise": null,
            "isResyncAble": true
        }
    ],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Contact APIs](#contact-apis)

## Create a Data Source

Using this API, you can create data sources for the supported providers. The data sources are
primarily used in Synchronize jobs, but you can also use them in queries to search for directory
objects and in queries for group membership update.

- [Create a Data Source for a Text/CSV File](#create-a-data-source-for-a-textcsv-file)
- [Create a Data Source for MS Access](#create-a-data-source-for-msaccess)
- [Create a Data Source for MS Excel](#create-a-data-source-for-msexcel)
- [Create a Data Source for ODBC](#create-a-data-source-for-odbc)
- [Create a Data Source for Oracle](#create-a-data-source-for-oracle)
- [Create a Data Source for SQL Server](#create-a-data-source-for-sql-server)

See Also

- [Data Source APIs](#data-source-apis)
- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)

## Data Source APIs

GroupID provides the following APIs to perform functions related to data sources:

- [Create a Data Source](#create-a-data-source)

  - [Create a Data Source for a Text/CSV File](#create-a-data-source-for-a-textcsv-file)
  - [Create a Data Source for MS Access](#create-a-data-source-for-msaccess)
  - [Create a Data Source for MS Excel](#create-a-data-source-for-msexcel)
  - [Create a Data Source for ODBC](#create-a-data-source-for-odbc)
  - [Create a Data Source for Oracle](#create-a-data-source-for-oracle)
  - [Create a Data Source for SQL Server](#create-a-data-source-for-sql-server)

- [Delete a Data Source](#delete-a-data-source)
- [Get a Data Source](#get-a-data-source)
- [Get a Data Source by Type and Name](#get-a-data-source-by-type-and-name)
- [Get a Data Source by Type and with ID](#get-a-data-source-by-type-and-with-id)
- [Get All Data Sources](#get-all-data-sources)
- [Get All Data Sources by Type](#get-all-data-sources-by-type)
- [Get Filenames by Type](#get-filenames-by-type)
- [ Get Filtered Data Sources by isSource](#get-filtered-data-sources-by-issource)
- [Get Parameters of a Data Source](#get-parameters-of-a-data-source)
- [Get File Server Metadata by Type ](#get-file-server-metadata-by-type)
- [ Get Metadata of Data Source by Server Type and ID ](#get-metadata-of-data-source-by-server-type-and-id)
- [Get Metadata of Data Sources](#get-metadata-of-data-sources)
- [Get Provider Options of a Data Source](#get-provider-options-of-a-data-source)
- [Parse a Connection String](#parse-a-connection-string)
- [Update a Data Source](#update-a-data-source)
- [Validate Data Connectivity of a Data Source](#validate-data-connectivity-of-a-data-source)

See the[ Data Sources](/docs/directorymanager/11.0/configuration/data-sources/index.md)
topic for additional information on data sources.

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Get Token](/docs/directorymanager/11.0/automation/apis/index.md)
- [Contact APIs](#contact-apis)
- [Group APIs](#group-apis)
- [Logs APIs](#logs-apis)
- [Synchronize Jobs APIs](#synchronize-jobs-apis)
- [User APIs](#user-apis)
- [Workflow APIs](#workflow-apis)

## Delete a Data Source

This API can be used for deleting a specified data source.

NOTE: Deleting a data source corrupts all Synchronize jobs, membership queries, and search queries
using that data source.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/{dataSourceId}

## HTTP Method

DELETE

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": true,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Data Source APIs](#data-source-apis)
- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)

## Create a Data Source for MS Access

Use this API to create a new data source.

See the
[Create a Data Source for MS Access](/docs/directorymanager/11.0/configuration/data-sources/index.md#create-a-data-source-for-ms-access)
section of the
[Create a Data Source](/docs/directorymanager/11.0/configuration/data-sources/index.md) topic
to create an MS Access data source using the GroupID interface.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/Create

## HTTP Method

POST

#### Sample Request Syntax

The following request syntax provides you information for creating a data source for an Access
database. GroupID enables you to connect to an Access file that is placed on a local server or on
OneDrive.

```
{
    "name": "Access_API",
    "providerTypeName": "Microsoft Access",
    "type": 2,
    "creationDate": "2024-05-07T04:08:56.95",
    "lastUpdate": null,
    "configurationValues": {
        "FileServer": "LocalServer",
        "FilePath": "C:\\Users\\administrator.directorymanager\\Documents\\directorymanagerAccess.accdb",
        "FilePassword": "",
        "ConnectionString": "",
        "UserName": "",
        "Password": ""
    }
}
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": 6,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Data Source APIs](#data-source-apis)
- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)

## Create a Data Source for MS Excel

Use this API to create a new data source.

See the
[Create a Data Source for MS Excel](/docs/directorymanager/11.0/configuration/data-sources/index.md#create-a-data-source-for-ms-excel)
section of the
[Create a Data Source](/docs/directorymanager/11.0/configuration/data-sources/index.md) topic
for additional information on creating an Excel data source using GroupID interface.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/Create

## HTTP Method

POST

#### Sample Request Syntax

The syntax given below provides you information for creating an Excel data source.

```
{
    "name": "Excel_API",
    "providerTypeName": "Microsoft Excel",
    "type": 1,
    "creationDate": "2024-05-07T04:08:56.95",
    "lastUpdate": null,
    "configurationValues": {
        "FileServer": "LocalServer",
        "FilePath": "C:\\Users\\administrator.directorymanager\\Documents\\User5.xls",
        "ConnectionString": "",
        "UserName": "",
        "Password": ""
    }
}
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": 4,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Data Source APIs](#data-source-apis)
- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)

## Create a Data Source for ODBC

Use this APi to create a new data source.

See the
[Create a Data Source for ODBC](/docs/directorymanager/11.0/configuration/data-sources/index.md#create-a-data-source-for-odbc)
section of the
[Create a Data Source](/docs/directorymanager/11.0/configuration/data-sources/index.md) topic
to create an ODBC data source using the GroupID interface.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/Create

## HTTP Method

POST

#### Sample Response Syntax

The following syntax is for creating an ODBC data source which you can use to connect to MS Excel,
an ODBC-compatible provider.

```
{
    "name": "Excel Odbc_API",
    "providerTypeName": null,
    "type": 6,
    "creationDate": "2024-05-23T06:21:01.19",
    "lastUpdate": null,
    "configurationValues": {
        "Server": "Excel",
        "DsnType": "SystemDsn",
        "UserName": "",
        "Password": ""
    },
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

#### Sample Request Syntax

[Copy](<javascript:void(0);>)

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": 6,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Data Source APIs](#data-source-apis)
- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)

## Create a Data Source for Oracle

Use this API to create a new data source.

See the
[Create a Data Source for Oracle](/docs/directorymanager/11.0/configuration/data-sources/index.md#create-a-data-source-for-oracle)
section of the
[Create a Data Source](/docs/directorymanager/11.0/configuration/data-sources/index.md) topic
to create an MS Access data source using the GroupID interface.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/Create

## HTTP Method

POST

#### Sample Request Syntax

The following syntax is for creating an Oracle data source. You can create a data source for an
Oracle server or a specific database on a server. This data source can be used in queries and as
source and destination provider in Synchronize jobs. This provider supports dynamic schema
detection.

NOTE: Oracle client must be installed to use this provider. Make sure you reboot your computer after
installing the Oracle client.

```
{
    "name": "Oracle1",
    "providerTypeName": null,
    "type": 5,
    "creationDate": "2024-05-29T06:27:55.61",
    "lastUpdate": null,
    "configurationValues": {
        "ConnectionString": "orca",
        "UserName": "HR",
        "Password": "webdir123RR",
        "Protocol": "",
        "HostName": "",
        "PortNumber": "",
        "Database": ""
    },
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": 2,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Data Source APIs](#data-source-apis)
- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)

## Create a Data Source for SQL Server

Use this API to create a new data source.

See the
[Create a Data Source for SQL Server](/docs/directorymanager/11.0/configuration/data-sources/index.md#create-a-data-source-for-sql-server)
section of the
[Create a Data Source](/docs/directorymanager/11.0/configuration/data-sources/index.md) topic
for creating an SQL data source using the GroupID interface.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/Create

## HTTP Method

POST

#### Sample Request Syntax

The following syntax is for creating an SQL server data source. This data source can be used in
queries and as source and destination in Synchronize jobs. This provider supports dynamic schema
detection.

```
{
    "name": "SQL_API",
    "providerTypeName": "SQL Server",
    "type": 3,
    "creationDate": "2024-05-07T04:08:56.95",
    "lastUpdate": null,
    "configurationValues": {
        "ConnectionString": "MSSQL",
        "UserName": "sa",
        "Password": "password",
        "WindowsAuthentication": "false",
        "Database": "ExternalDB"
    }
}
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": 9,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Data Source APIs](#data-source-apis)
- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)

## Create a Data Source for a Text/CSV File

Use this API to create a new data source.

See the
[Create a Data Source for a Text/CSV File](/docs/directorymanager/11.0/configuration/data-sources/index.md#create-a-data-source-for-a-textcsv-file)
section of the
[Create a Data Source](/docs/directorymanager/11.0/configuration/data-sources/index.md) topic
to create a Text/CSV data source using the GroupID interface.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/Create

## HTTP Method

POST

#### Sample Request Syntax

The following syntax is for creating a data source for a comma-separated values (.csv) file or a
text (.txt) file. You must also specify the delimiter used in the file to separate values. This data
source can be used in queries and only as a source in Synchronize jobs. GroupID enables you to
connect to a text file that is placed on a local server or on OneDrive.

```
{
    "name": "Text/CSV_API",
    "providerTypeName": "Text/CSV",
    "type": 4,
    "creationDate": "2024-05-07T04:08:56.95",
    "lastUpdate": null,
    "configurationValues": {
        "FileServer": "LocalServer",
        "File": "C:\\Users\\administrator.directorymanager\\Desktop\\PWList.txt",
        "Delimiter": ",",
        "Server": "",
        "UserName": "",
        "Password": ""
    }
}
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": 11,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Data Source APIs](#data-source-apis)
- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)

## Get File Server Metadata by Type

Using this API you can get metadata information of data source(s) by server type. For example, all
Excel data source(s) defined so far in GroupID that have their source files in cloud.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/GetFileServerMetaDataByType??fileServerType=OneDrive

## HTTP Method

GET

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": {
        "name": null,
        "type": 0,
        "icon": null,
        "fileServerType": "OneDrive",
        "configurations": [
            {
                "name": "FileServer",
                "displayName": "File Server",
                "dataType": "dropdown",
                "defaultValue": "OneDrive",
                "regularExpression": null,
                "validationMessage": null,
                "minLength": null,
                "maxLength": null,
                "isRequired": true,
                "isDisabled": false,
                "isNewOnly": false,
                "renderingOrder": 1,
                "values": [
                    "LocalServer",
                    "OneDrive"
                ]
            },
            {
                "name": "ServiceAccounUserName",
                "displayName": "Service Account (e.g. admin@xyz.onmicrosoft.com)",
                "dataType": "System.String",
                "defaultValue": "",
                "regularExpression": null,
                "validationMessage": null,
                "minLength": null,
                "maxLength": null,
                "isRequired": true,
                "isDisabled": false,
                "isNewOnly": false,
                "renderingOrder": 2,
                "values": null
            },
            {
                "name": "ServiceAccountPassword",
                "displayName": "Service Account Password",
                "dataType": "System.Security.SecureString",
                "defaultValue": "",
                "regularExpression": null,
                "validationMessage": null,
                "minLength": null,
                "maxLength": null,
                "isRequired": true,
                "isDisabled": false,
                "isNewOnly": false,
                "renderingOrder": 3,
                "values": null
            },
            {
                "name": "ApplicationId",
                "displayName": "Registered Application ID on Azure Active Directory",
                "dataType": "System.String",
                "defaultValue": "",
                "regularExpression": null,
                "validationMessage": null,
                "minLength": null,
                "maxLength": null,
                "isRequired": true,
                "isDisabled": false,
                "isNewOnly": false,
                "renderingOrder": 4,
                "values": null
            },
            {
                "name": "TenantId",
                "displayName": "Registered Tenant ID on Azure Active Directory",
                "dataType": "System.String",
                "defaultValue": "",
                "regularExpression": null,
                "validationMessage": null,
                "minLength": null,
                "maxLength": null,
                "isRequired": true,
                "isDisabled": false,
                "isNewOnly": false,
                "renderingOrder": 5,
                "values": null
            },
            {
                "name": "FileName",
                "displayName": "File_Name",
                "dataType": "dropdown-search",
                "defaultValue": "",
                "regularExpression": null,
                "validationMessage": null,
                "minLength": null,
                "maxLength": null,
                "isRequired": true,
                "isDisabled": false,
                "isNewOnly": false,
                "renderingOrder": 6,
                "values": null
            }
        ]
    },
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Data Source APIs](#data-source-apis)
- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)

## Get All Data Sources

Using this API you can get information of all data source defined so far in GroupID.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/GetAll

## HTTP Method

GET

#### Sample Response Syntax

```
[
    {
        "id": 4,
        "name": "Excel_API",
        "providerTypeName": "Microsoft Excel",
        "type": 1,
        "creationDate": "2024-05-07T04:20:17.663",
        "lastUpdate": null,
        "configurationValues": {
            "FileServer": "LocalServer",
            "FilePath": "C:\\Users\\administrator.directorymanager\\Documents\\User5.xls",
            "ConnectionString": "",
            "UserName": "",
            "Password": ""
        }
    },
    {
        "id": 6,
        "name": "Access_API",
        "providerTypeName": "Microsoft Access",
        "type": 2,
        "creationDate": "2024-05-07T04:25:48.297",
        "lastUpdate": null,
        "configurationValues": {
            "FileServer": "LocalServer",
            "FilePath": "C:\\Users\\administrator.directorymanager\\Documents\\directorymanagerAccess.accdb",
            "FilePassword": "",
            "ConnectionString": "",
            "UserName": "",
            "Password": ""
        }
    },
    {
        "id": 9,
        "name": "SQL_API",
        "providerTypeName": "SQL Server",
        "type": 3,
        "creationDate": "2024-05-07T04:29:45.393",
        "lastUpdate": null,
        "configurationValues": {
            "ConnectionString": "MSSQL",
            "UserName": "sa",
            "Password": "webdir123R",
            "WindowsAuthentication": "false",
            "Database": "ExternalDB"
        }
    },
    {
        "id": 11,
        "name": "Text/CSV_API",
        "providerTypeName": "Text/CSV",
        "type": 4,
        "creationDate": "2024-05-07T04:34:50.44",
        "lastUpdate": null,
        "configurationValues": {
            "FileServer": "LocalServer",
            "File": "C:\\Users\\administrator.directorymanager\\Desktop\\PWList.txt",
            "Delimiter": ",",
            "Server": "",
            "UserName": "",
            "Password": ""
        }
    }
]
```

See Also

- [Data Source APIs](#data-source-apis)
- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)

## Get All Data Sources by Type

Use this API to retrieve information of all data sources of a specific type such as all SQL server
data sources or all MS Excel type data sources.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/GetAllByType/{type}

## HTTP Method

GET

#### Sample Response Syntax

```
[
    {
        "id": 9,
        "name": "SQL_API",
        "providerTypeName": "SQL Server",
        "type": 3,
        "creationDate": "2024-05-07T04:29:45.393",
        "lastUpdate": null,
        "configurationValues": {
            "ConnectionString": "MSSQL",
            "UserName": "sa",
            "Password": "webdir123R",
            "WindowsAuthentication": "false",
            "Database": "ExternalDB"
        }
    }
]
```

See Also

- [Data Source APIs](#data-source-apis)
- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)

## Get a Data Source

Using this API you can retrieve information of a specific data source specified in the end point
URL.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/{dataSourceId}

## HTTP Method

GET

#### Sample Request Syntax

```
true
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": {
        "id": 4,
        "name": "Excel_API",
        "providerTypeName": null,
        "type": 1,
        "creationDate": "2024-05-07T04:20:17.663",
        "lastUpdate": null,
        "configurationValues": {
            "FileServer": "LocalServer",
            "FilePath": "C:\\Users\\administrator.directorymanager\\Documents\\User5.xls",
            "ConnectionString": "",
            "UserName": "",
            "Password": ""
        }
    },
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Data Source APIs](#data-source-apis)
- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)

## Get Parameters of a Data Source

Using this API, you can retrieve parameters information of a data source specified in end point URL.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/GetDataSourceParameter/{DatasourceId}

## HTTP Method

GET

#### Sample Response Syntax

```
[
    {
        "identityStoreId": 2,
        "connectionString": "Data Source='SQL\\MSSQL';Initial Catalog=External;Password='webdir123R';User ID='sa';Integrated Security=false;",
        "commandString": "SELECT * FROM []",
        "columnNames": [
            "EmployeeID",
            "FirstName",
            "LastName",
            "DepartmentID"
        ],
        "tableNames": [
            "[dbo].[Employee]",
            "[dbo].[Department]",
            "[dbo].[EmployeeDepartmentView]"
        ],
        "selectedTable": "[dbo].[Employee]",
        "name": "SQLView",
        "provideTypeName": "MSSQL"
    }
]
```

See Also

- [Data Source APIs](#data-source-apis)
- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)

## Get Provider Options of a Data Source

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

- [Data Source APIs](#data-source-apis)
- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)

## Get a Data Source by Type and with ID

Using this API, you can retrieve information of a data source by its type and ID. For example, an
SQL data source with a specific id.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/GetByType/{dataSourceTypeId}

## HTTP Method

GET

#### Sample Request Syntax

```
{
    "LoadConfigurations": false,
    "FilterCriteria": {
        "Operator": "and",
        "Attribute": null,
        "Value": null,
        "ValueType": 0,
        "ValueTypes": [],
        "DonotEscapeValue": false,
        "Child": [
            {
                "Operator": "Contains",
                "Attribute": "Datasource Name",
                "Value": "Excel_API_Updated",
                "ValueType": 0,
                "ValueTypes": [
                    0
                ],
                "DonotEscapeValue": false,
                "Child": null
            }
        ]
    },
    "SearchOption": {
        "PageSize": 10,
        "PageIndex": 1,
        "SortColumnName": "",
        "SortOrder": 1
    }
}
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": {
        "count": 1,
        "data": [
            {
                "id": 4,
                "name": "Excel_API_Updated",
                "providerTypeName": "Microsoft Excel",
                "type": 1,
                "creationDate": "2024-05-07T04:20:17.663",
                "lastUpdate": "2024-05-08T05:03:08.973",
                "configurationValues": {
                    "FileServer": "LocalServer",
                    "FilePath": "C:\\Users\\administrator.directorymanager\\Documents\\User5.xls",
                    "ConnectionString": "",
                    "UserName": "",
                    "Password": ""
                }
            }
        ],
        "status": 0,
        "message": null
    },
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Data Source APIs](#data-source-apis)
- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)

## Get a Data Source by Type and Name

Using this API you can retrieve information of specific type data source, let's say a Text/CSV based
data source, with a specific name.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/Get?type=4&name=Text/CSV_API

## HTTP Method

GET

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": [
        {
            "id": 11,
            "name": "Text/CSV_API",
            "providerTypeName": "Text/CSV",
            "type": 4,
            "creationDate": "2024-05-07T04:34:50.44",
            "lastUpdate": null,
            "configurationValues": {}
        }
    ],
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Data Source APIs](#data-source-apis)
- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)

## Get Filtered Data Sources by isSource

This API is for getting information of data sources filtered on the basis of your role policy if
value of isSource is true in the end point URL.

Filtered based on role policy, if isSource true then it ll filter otherwise it ll not

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/GetFilteredDataSources?isSource=true

## HTTP Method

GET

#### Sample Response Syntax

```
[
    {
        "id": 4,
        "name": "Excel_API",
        "providerTypeName": "Microsoft Excel",
        "type": 1,
        "creationDate": "2024-05-07T04:20:17.663",
        "lastUpdate": null,
        "configurationValues": {
            "FileServer": "LocalServer",
            "FilePath": "C:\\Users\\administrator.directorymanager\\Documents\\User5.xls",
            "ConnectionString": "",
            "UserName": "",
            "Password": ""
        }
    },
    {
        "id": 6,
        "name": "Access_API",
        "providerTypeName": "Microsoft Access",
        "type": 2,
        "creationDate": "2024-05-07T04:25:48.297",
        "lastUpdate": null,
        "configurationValues": {
            "FileServer": "LocalServer",
            "FilePath": "C:\\Users\\administrator.directorymanager\\Documents\\directorymanagerAccess.accdb",
            "FilePassword": "",
            "ConnectionString": "",
            "UserName": "",
            "Password": ""
        }
    },
    {
        "id": 9,
        "name": "SQL_API",
        "providerTypeName": "SQL Server",
        "type": 3,
        "creationDate": "2024-05-07T04:29:45.393",
        "lastUpdate": null,
        "configurationValues": {
            "ConnectionString": "MSSQL",
            "UserName": "sa",
            "Password": "webdir123R",
            "WindowsAuthentication": "false",
            "Database": "ExternalDB"
        }
    },
    {
        "id": 11,
        "name": "Text/CSV_API",
        "providerTypeName": "Text/CSV",
        "type": 4,
        "creationDate": "2024-05-07T04:34:50.44",
        "lastUpdate": null,
        "configurationValues": {
            "FileServer": "LocalServer",
            "File": "C:\\Users\\administrator.directorymanager\\Desktop\\PWList.txt",
            "Delimiter": ",",
            "Server": "",
            "UserName": "",
            "Password": ""
        }
    }
]
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Data Source APIs](#data-source-apis)

## Get Filenames by Type

Use this API to get source file name(s) residing on local server(s) or in cloud for a specific type
of a data source(s), let's say source file name(s) residing in OneDrive for Excel data source(s).

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/GetFilesNameByType

## HTTP Method

GET

#### Sample Request Syntax

```
{
    "type": 1,
    "configurationValues": {
        "FileServer": "OneDrive",
        "ServiceAccounUserName": "sqatestautomation@5cjshm.onmicrosoft.com",
        "ServiceAccountPassword": "webdir123R!",
        "ApplicationId": "5556091a-8f10-41ed-88cd-41c43e8c3041",
        "TenantId": "60a911a6-e22c-44f1-90f2-fa8d846eb070"
    }
}
```

#### Sample Response Syntax

```
[
    "User5.xls"
]
```

See Also

- [Data Source APIs](#data-source-apis)
- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)

## Get Metadata of Data Sources

Using this API, you can get metadata information of data sources defined so far in GroupID.

See the
[Create a Data Source](/docs/directorymanager/11.0/configuration/data-sources/index.md) topic
for creating a data source using the GroupID interface.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/GetMetaData

## HTTP Method

GET

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": [
        {
            "name": "Microsoft Excel",
            "type": 1,
            "icon": "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NHvN3nNY6/N7ngcAAACAAVQAAAAAAAAAAABgABUAAAAAAAAAAAAYQAUAAAAAAAAAAAAGUAEAAAAAAAAAAIABVAAAAAAAAAAAAGAAFQAAAAAAAAAAABhABQAAAAAAAAAAAAZQAQAAAAAAAAAAgAFUAAAAAAAAAAAAYAAVAAAAAAAAAAAAGEAFAAAAAAAAAAAABlABAAAAAAAAAACAAVQAAAAAAAAAAABgABUAAAAAAAAAAAAYQAUAAAAAAAAAAAAGUAEAAAAAAAAAAIABVAAAAAAAAAAAAGAAFQAAAAAAAAAAABhABQAAAAAAAAAAAAZQAQAAAAAAAAAAgAFUAAAAAAAAAAAAYAAVAAAAAAAAAAAAGEAFAAAAAAAAAAAABlABAAAAAAAAAACAAVQAAAAAAAAAAABgABUAAAAAAAAAAAAYQAUAAAAAAAAAAAAGUAEAAAAAAAAAAIABVAAAAAAAAAAAAGAAFQAAAAAAAAAAABhABQAAAAAAAAAAAAZQAQAAAAAAAAAAgAFUAAAAAAAAAAAAYAAVAAAAAAAAAAAAGEAFAAAAAAAAAAAABlABAAAAAAAAAACAAVQAAAAAAAAAAABgABUAAAAAAAAAAAAYQAUAAAAAAAAAAAAGUAEAAAAAAAAAAIABVAAAAAAAAAAAAGAAFQAAAAAAAAAAABhABQAAAAAAAAAAAAZQAQAAAAAAAAAAgAFUAAAAAAAAAAAAYAAVAAAAAAAAAAAAGEAFAAAAAAAAAAAABlABAAAAAAAAAACAAVQAAAAAAAAAAABgABUAAAAAAAAAAAAYQAUAAAAAAAAAAAAGUAEAAAAAAAAAAIABVAAAAAAAAAAAAGAAFQAAAAAAAAAAABhABQAAAAAAAAAAAAZQAQAAAAAAAAAAgAFUAAAAAAAAAAAAYAAVAAAAAAAAAAAAGEAFAAAAAAAAAAAABlABAAAAAAAAAACAAVQAAAAAAAAAAABgABUAAAAAAAAAAAAYQAUAAAAAAAAAAAAGUAEAAAAAAAAAAIABVAAAAAAAAAAAAGAAFQAAAAAAAAAAABhABQAAAAAAAAAAAAZQAQAAAAAAAAAAgAFUAAAAAAAAAAAAYAAVAAAAAAAAAAAAGEAFAAAAAAAAAAAABlABAAAAAAAAAACAAVQAAAAAAAAAAABgABUAAAAAAAAAAAAYQAUAAAAAAAAAAAAGUAEAAAAAAAAAAIABVAAAAAAAAAAAAGAAFQAAAAAAAAAAABhABQAAAAAAAAAAAAZQAQAAAAAAAAAAgAFUAAAAAAAAAAAAYAAVAAAAAAAAAAAAGEAFAAAAAAAAAAAABlABAAAAAAAAAACAAVQAAAAAAAAAAABgABUAAAAAAAAAAAAYQAUAAAAAAAAAAAAGUAEAAAAAAAAAAIABVAAAAAAAAAAAAGAAFQAAAAAAAAAAABhABQAAAAAAAAAAAAZQAQAAAAAAAAAAgAFUAAAAAAAAAAAAYAAVAAAAAAAAAAAAGEAFAAAAAAAAAAAABlABAAAAAAAAAACAAVQAAAAAAAAAAABgABUAAAAAAAAAAAAYQAUAAAAAAAAAAAAGUAEAAAAAAAAAAIABVAAAAAAAAAAAAGAAFQAAAAAAAAAAABhABQAAAAAAAAAAAAZQAQAAAAAAAAAAgAFUAAAAAAAAAAAAYAAVAAAAAAAAAAAAGEAFAAAAAAAAAAAABlABAAAAAAAAAACAAVQAAAAAAAAAAABgABUAAAAAAAAAAAAYQAUAAAAAAAAAAAAGUAEAAAAAAAAAAIABVAAAAAAAAAAAAGAAFQAAAAAAAAAAABhABQAAAAAAAAAAAAZQAQAAAAAAAAAAgAFUAAAAAAAAAAAAYAAVAAAAAAAAAAAAGEAFAAAAAAAAAAAABlABAAAAAAAAAACAAVQAAAAAAAAAAABgABUAAAAAAAAAAAAYQAUAAAAAAAAAAAAGUAEAAAAAAAAAAIABVAAAAAAAAAAAAGAAFQAAAAAAAAAAABhABQAAAAAAAAAAAAZQAQAAAAAAAAAAgAFUAAAAAAAAAAAAYAAVAAAAAAAAAAAAGEAFAAAAAAAAAAAABlABAAAAAAAAAACAAVQAAAAAAAAAAABgABUAAAAAAAAAAAAYQAUAAAAAAAAAAAAGUAEAAAAAAAAAAIABVAAAAAAAAAAAAGAAFQAAAAAAAAAAABhABQAAAAAAAAAAAAZQAQAAAAAAAAAAgAFUAAAAAAAAAAAAYAAVAAAAAAAAAAAAGEAFAAAAAAAAAAAABlABAAAAAAAAAACAAVQAAAAAAAAAAABgABUAAAAAAAAAAAAYQAUAAAAAAAAAAAAGUAEAAAAAAAAAAIABVAAAAAAAAAAAAGAAFQAAAAAAAAAAABhABQAAAAAAAAAAAAZQAQAAAAAAAAAA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AAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOUAAAAAAAAAAAAQAOU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
```

See Also

- [Data Source APIs](#data-source-apis)
- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)

## Get Metadata of Data Source by Server Type and ID

Use this API to retrieve metadata information of all data sources defined so far in GroupID by File
Server type (i.e., local server or a cloud server) and by data source type (i.e., MS Excel or
Text/CSV or MS Access or SQL server).

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/GetMetaDataByType/{serverType}/{datasourceType}

## HTTP Method

GET

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": {
        "name": "Text/CSV",
        "type": 4,
        "icon": "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",
        "fileServerType": "LocalServer",
        "configurations": [
            {
                "name": "FileServer",
                "displayName": "File Server",
                "dataType": "dropdown",
                "defaultValue": "LocalServer",
                "regularExpression": null,
                "validationMessage": null,
                "minLength": null,
                "maxLength": null,
                "isRequired": true,
                "isDisabled": false,
                "isNewOnly": false,
                "renderingOrder": 1,
                "values": [
                    "LocalServer",
                    "OneDrive"
                ]
            },
            {
                "name": "File",
                "displayName": "File Path",
                "dataType": "System.String",
                "defaultValue": "",
                "regularExpression": "(\\\\\\\\|[\\w]:\\\\)([^\\\\:*?\"<>|]+\\\\)*[^\\\\:*?\"<>|]+\\.((csv)|(txt))",
                "validationMessage": null,
                "minLength": null,
                "maxLength": null,
                "isRequired": true,
                "isDisabled": false,
                "isNewOnly": false,
                "renderingOrder": 2,
                "values": null
            },
            {
                "name": "Delimiter",
                "displayName": "Delimiter",
                "dataType": "System.String",
                "defaultValue": "",
                "regularExpression": "^([^\\s]|(tab)|(Tab)|(TAB))$",
                "validationMessage": null,
                "minLength": null,
                "maxLength": null,
                "isRequired": true,
                "isDisabled": false,
                "isNewOnly": false,
                "renderingOrder": 3,
                "values": null
            },
            {
                "name": "Server",
                "displayName": "Domain/Hostname (Optional)",
                "dataType": "System.String",
                "defaultValue": "",
                "regularExpression": null,
                "validationMessage": null,
                "minLength": null,
                "maxLength": null,
                "isRequired": false,
                "isDisabled": false,
                "isNewOnly": false,
                "renderingOrder": 4,
                "values": null
            },
            {
                "name": "UserName",
                "displayName": "Username (Optional)",
                "dataType": "System.String",
                "defaultValue": "",
                "regularExpression": null,
                "validationMessage": null,
                "minLength": null,
                "maxLength": null,
                "isRequired": false,
                "isDisabled": false,
                "isNewOnly": false,
                "renderingOrder": 5,
                "values": null
            },
            {
                "name": "Password",
                "displayName": "Password (Optional)",
                "dataType": "System.Security.SecureString",
                "defaultValue": "",
                "regularExpression": null,
                "validationMessage": null,
                "minLength": null,
                "maxLength": null,
                "isRequired": false,
                "isDisabled": false,
                "isNewOnly": false,
                "renderingOrder": 6,
                "values": null
            }
        ]
    },
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Data Source APIs](#data-source-apis)

## Parse a Connection String

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

- [Data Source APIs](#data-source-apis)
- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)

## Update a Data Source

Using this API you can update information of an already created data source.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/Update

## HTTP Method

PUT

#### Sample Request Syntax

```
{
    "id": 4,
    "name": "Excel_API_Updated",
    "providerTypeName": "Microsoft Excel",
    "type": 1,
    "creationDate": "2024-05-07T04:08:56.95",
    "lastUpdate": null,
    "configurationValues": {
        "FileServer": "LocalServer",
        "FilePath": "C:\\Users\\administrator.directorymanager\\Documents\\User5.xls",
        "ConnectionString": "",
        "UserName": "",
        "Password": ""
    }
}
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": true,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Data Source APIs](#data-source-apis)
- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)

## Validate Data Connectivity of a Data Source

Use this API to validate connection of a data source with the provider or with a source file.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/ValidateServerConnectivity

## HTTP Method

GET

#### Sample Request Syntax

```
{
    "name": "Excel_API",
    "providerTypeName": "Microsoft Excel",
    "type": 1,
    "creationDate": "2024-05-07T04:08:56.95",
    "lastUpdate": null,
    "configurationValues": {
        "FileServer": "LocalServer",
        "FilePath": "C:\\Users\\administrator.directorymanager\\Documents\\User5.xls",
        "ConnectionString": "",
        "UserName": "",
        "Password": ""
    }
}
```

#### Sample Response Syntax

```
{
    "name": "Excel_API",
    "type": 5,
    "status": 0,
    "message": "Connection Succeeded",
    "data": null,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": "",
    "errorCode": "",
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Data Source APIs](#data-source-apis)
- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)

## Create a Smart Group

Using this API, you can create a Smart Group in the identity store specified in the endpoint URL.
You have to provide the mandatory information for creating a Smart Group in the request syntax.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/DynamicGroup

## HTTP Method

POST

#### Sample Request Syntax

```
{
  "UpdateOption":0,
  "IdentityStoreID": 2,
  "GroupName": "DemoSmartGroup1",
  "Container": "OU=Groups,DC=demo,DC=local",
  "AttributesCollection": {
    "AttributesCollection": {
      "name": [
        {
          "Value": "DemoSmartGroup1",
          "Action": 1
        }
      ],
      "sAMAccountName": [
        {
          "Value": "DemoSmartGroup1",
          "Action": 1
        }
      ],
      "GroupType": [
        {
          "Value": "8",
          "Action": 0
        }
      ],
      "IMSGManagedGroupType": [
        {
          "Value": "2",
          "Action": 0
        }
      ],
      "XGroupSecurity": [
        {
          "Value": "Semi_Private",
          "Action": 1
        }
      ],
      "description": [
        {
          "Value": "Its the description!",
          "Action": 1
        }
      ],
      "UpdateOptions": [
        {
          "Value": "false",
          "Action": 1
        }
      ],
      "managedBy": [
        {
          "Value": "19a1822e-e7ef-4206-af75-1c2d8b1d15eb",
          "Action": 1
        }
      ],
      "identityStoreId": [
        {
          "Value": "2",
          "Action": 1
        }
      ],
      "IMSGObjectTypes": [
        {
          "Value": "6",
          "Action": 1
        }
      ],
      "IMSGCriteria": [
        {
          "Value": "(department Contains \"engineering\")",
          "Action": 1
        }
      ],
      "IMSGStartPath": [
        {
          "Value": "DC=demo,DC=local",
          "Action": 1,
          "AttributeCollection": {
            "Scope": "2"
          }
        }
      ],
      "SmartGroupMainType": [
        {
          "Value": "X.SmartGroup",
          "Action": 0
        }
      ],
      "info": [
        {
          "Value": "This is an automated group, please do not modify membership. Membership is controlled by GroupID.",
          "Action": 0
        }
      ],
      "mailNickname": [
        {
          "Value": "DemoSmartGroup1",
          "Action": 0
        }
      ],
      "displayName": [
        {
          "Value": "DemoSmartGroup1",
          "Action": 0
        }
      ],
      "CN": [
        {
          "Value": "DemoSmartGroup1",
          "Action": 0
        }
      ],
      "objectClass": [
        {
          "Value": "MailEnabledGroup",
          "Action": 0
        }
      ],
      "objectCategory": [
        {
          "Value": "group",
          "Action": 0
        }
      ],
      "ContainerDistinguishedName": [
        {
          "Value": "OU=Groups,DC=demo,DC=local",
          "Action": 0
        }
      ]
    }
  }
}
```

#### Sample Response Syntax

```
{
    "currentDirectoryServer": "DC.demo.local",
    "exceptionMessagesAttributeWise": null,
    "data": "f8bc4524-fdcb-4b85-9f3f-d6c0af7c58ae",
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": "",
            "status": 0
        }
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)

## Create a Static Group

Using this API, you can create a normal directory group, also called an unmanaged or static group,
in the given identity store.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/StaticGroup

## HTTP Method

POST

## Sample Request Syntax

```
{
    "GroupName": "DemoGroup",
    "Container": "OU=Groups,DC=demo,DC=local",
    "AttributesCollection": {
        "AttributesCollection": {
            "sAMAccountName": [{
                "Value": "DemoGroup",
                "Action": 0
            }],
            "name": [{
                "Value": "DemoGroup",
                "Action": 0
            }],
            "CN": [{
                "Value": "DemoGroup",
                "Action": 0
            }],
            "objectClass": [{
                "Value": "group",
                "Action": 0
            }],
            "groupType": [{
                "Value": "-2147483640",
                "Action": 0
            }],
            "XGroupScope": [{
                "Value": "Universal Group",
                "Action": 0
            }],
            "XGroupSecurity": [{
                "Value": "Semi_Private",
                "Action": 0
            }],
            "managedBy": [{
                "Value": "CN=Administrator,CN=Users,DC=demo,DC=local",
                "Action": 0
            }]
        }
    }
}
```

#### Sample Response Syntax

```
{
    "currentDirectoryServer": "DC.demo.local",
    "exceptionMessagesAttributeWise": null,
    "data": "6bd67b4a-eb06-4b05-94a8-43914fb2e19a",
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": "",
            "status": 0
        }
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Group APIs](#group-apis)

## Delete a Group

Use this API to delete a group from an identity store.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/{GroupIdentity}

## HTTP Method

DELETE

#### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": null,
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Group APIs](#group-apis)

## Delete Groups

The Delete Groups API deletes multiple groups from an identity store.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups

## HTTP Method

DELETE

#### Sample Request Syntax

```
[
  "24bda903-2afd-408a-a55c-c18adcfb543e",
  "124b2528-a08a-41a1-9e8e-b1d5e6434153"
]
```

#### sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": null,
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": null,
            "status": 0
        },
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": null,
            "status": 0
        }
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Group APIs](#group-apis)

## Get a Group

This Get Group API retrieves details of a specified group.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/{GroupIdentity}

## HTTP Method

GET

#### Sample Request Syntax

```
[
    "displayName",
    "ObjectGuid"
  ]
```

#### Sample Response Syntax

```
{
    "groupType": null,
    "attributesBusinessObject": {
        "attributesCollection": {
            "container": [
                {
                    "attributeCollection": {
                    },
                    "action": 0,
                    "dn": null,
                    "value": "OU=Groups,DC=demo,DC=local",
                    "identityStoreId": 0
                }
            ],
            "displayName": [
                {
                    "attributeCollection": {
                    },
                    "action": 0,
                    "dn": null,
                    "value": "",
                    "identityStoreId": 0
                }
            ],
            "objectClass": [
                {
                    "attributeCollection": {
                    },
                    "action": 0,
                    "dn": null,
                    "value": "group",
                    "identityStoreId": 0
                }
            ],
            "name": [
                {
                    "attributeCollection": {
                    },
                    "action": 0,
                    "dn": null,
                    "value": "DemoGroup",
                    "identityStoreId": 0
                }
            ],
            "ObjectGuid": [
                {
                    "attributeCollection": {
                    },
                    "action": 0,
                    "dn": null,
                    "value": "6bd67b4a-eb06-4b05-94a8-43914fb2e19a",
                    "identityStoreId": 0
                }
            ],
            "CN": [
                {
                    "attributeCollection": {
                    },
                    "action": 0,
                    "dn": null,
                    "value": "DemoGroup",
                    "identityStoreId": 0
                }
            ],
            "objectCategory": [
            ]
        },
        "type": null,
        "filePermissionCollection": {
        }
    },
    "hiddenFromAddressListsEnabled": false,
    "objectIdFromIdentityStore": "6bd67b4a-eb06-4b05-94a8-43914fb2e19a",
    "displayName": "DemoGroup",
    "samAccountName": null,
    "isGroupInExludedContainer": false,
    "msExchRequireAuthToSendTo": null,
    "objectType": "group",
    "emailAddress": null,
    "groupScope": null,
    "elasticHitScore": 0.0,
    "objectDisplayName": "DemoGroup",
    "name": null,
    "stopNotification": false,
    "alias": "",
    "objectName": null,
    "groupClassName": null,
    "identityStore": null,
    "dc": null,
    "identityStoreId": 2
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Group APIs](#group-apis)

## Get Groups

Using this API, you can fetch multiple groups from an identity store.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups

## HTTP Method

GET

#### Sample Request Syntax

```
{
  "attributes": [
    "displayname",
    "description"
  ],
  "groupIdentities": [
    "24bda903-2afd-408a-a55c-c18adcfb543e",
    "124b2528-a08a-41a1-9e8e-b1d5e6434153"    
  ]
}
```

#### Sample Response Syntax

```
[
    {
        "groupType": null,
        "attributesBusinessObject": {
            "attributesCollection": {
                "container": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "OU=Groups,DC=demo,DC=local",
                        "identityStoreId": 0
                    }
                ],
                "displayname": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "",
                        "identityStoreId": 0
                    }
                ],
                "objectClass": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "group",
                        "identityStoreId": 0
                    }
                ],
                "name": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "DemoGroup1",
                        "identityStoreId": 0
                    }
                ],
                "description": [
                ],
                "CN": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "DemoGroup1",
                        "identityStoreId": 0
                    }
                ],
                "objectCategory": [
                ]
            },
            "type": null,
            "filePermissionCollection": {
            }
        },
        "hiddenFromAddressListsEnabled": false,
        "objectIdFromIdentityStore": "24bda903-2afd-408a-a55c-c18adcfb543e",
        "displayName": "DemoGroup1",
        "samAccountName": null,
        "isGroupInExludedContainer": false,
        "msExchRequireAuthToSendTo": null,
        "objectType": "group",
        "emailAddress": null,
        "groupScope": null,
        "elasticHitScore": 0.0,
        "objectDisplayName": "DemoGroup1",
        "name": null,
        "stopNotification": false,
        "alias": "",
        "objectName": null,
        "groupClassName": null,
        "identityStore": null,
        "dc": null,
        "identityStoreId": 2
    },
    {
        "groupType": null,
        "attributesBusinessObject": {
            "attributesCollection": {
                "container": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "OU=Groups,DC=demo,DC=local",
                        "identityStoreId": 0
                    }
                ],
                "displayname": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "",
                        "identityStoreId": 0
                    }
                ],
                "objectClass": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "group",
                        "identityStoreId": 0
                    }
                ],
                "name": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "DemoGroup2",
                        "identityStoreId": 0
                    }
                ],
                "description": [
                ],
                "CN": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "DemoGroup2",
                        "identityStoreId": 0
                    }
                ],
                "objectCategory": [
                ]
            },
            "type": null,
            "filePermissionCollection": {
            }
        },
        "hiddenFromAddressListsEnabled": false,
        "objectIdFromIdentityStore": "124b2528-a08a-41a1-9e8e-b1d5e6434153",
        "displayName": "DemoGroup2",
        "samAccountName": null,
        "isGroupInExludedContainer": false,
        "msExchRequireAuthToSendTo": null,
        "objectType": "group",
        "emailAddress": null,
        "groupScope": null,
        "elasticHitScore": 0.0,
        "objectDisplayName": "DemoGroup2",
        "name": null,
        "stopNotification": false,
        "alias": "",
        "objectName": null,
        "groupClassName": null,
        "identityStore": null,
        "dc": null,
        "identityStoreId": 2
    }
]
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Group APIs](#group-apis)
- [Contact APIs](#contact-apis)

## Group APIs

GroupID provides the following APIs for performing group-specific functions:

- [Create a Smart Group](#create-a-smart-group)
- [Create a Static Group](#create-a-static-group)
- [Delete a Group](#delete-a-group)
- [Delete Groups](#delete-groups)
- [Expire a Group](/docs/directorymanager/11.0/user-guide/group-management/group-lifecycle.md)
- [Expire Groups](/docs/directorymanager/11.0/user-guide/group-management/group-lifecycle.md)
- [Get a Group](#get-a-group)
- [Get Groups](#get-groups)
- [Join a Group](#join-a-group)
- [Join a Group on behalf of another user](#join-a-group-on-behalf-of-another-user)
- [Leave a Group](#leave-a-group)
- [Leave a Group on behalf of another user](#leave-a-group-on-behalf-of-another-user)
- [Get Preview of a Smart Group Membership](#get-preview-of-a-smart-group-membership)
- [Renew a Group](#renew-a-group)
- [Renew a Group](#renew-a-group)
- [Update a Group](#update-a-group)
- [Update Groups](#update-groups)
- [Update a Smart Group](#update-a-smart-group)
- [Update Smart Groups](#update-smart-groups)

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Get Token](/docs/directorymanager/11.0/automation/apis/index.md)
- [Contact APIs](#contact-apis)
- [Data Source APIs](#data-source-apis)
- [Logs APIs](#logs-apis)
- [Synchronize Jobs APIs](#synchronize-jobs-apis)
- [User APIs](#user-apis)
- [Workflow APIs](#workflow-apis)

## Join a Group

Using this API, you can join a group as per the specified membership type.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/{GroupIdentity}/Join

## HTTP Method

POST

#### Sample Request Syntax

```
{
  "IdentityStoreID": 2,
  "ReplicationRequired": true,
  "JoinType": {
    "MembershipType": 1,
    "StartDate": "0001-01-01T00:00:00",
    "EndDate": "0001-01-01T00:00:00",
    "Reason": "test"
 }
}
```

#### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": null,
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": null,
            "status": 0
        }
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

See Also

- [Group APIs](#group-apis)
- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)

## Join a Group on behalf of another user

Using this API, you can join the group specified in the endpoint URL on behalf of another user. You
have to specify the identity store where the group exists, the identity of the other user on behalf
of whom you are joining the group, and membership type details.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/{GroupIdentity}/JoinOnBehalf

## HTTP Method

POST

#### Sample Request Syntax

```
{
  "IdentityStoreID": 2,
  "ReplicationRequired": true,
  "joiningUserIdentity": "a79934a7-c6a0-4a1c-8860-f9aeb4788e98",
  "joinType": {
    "MembershipType": 1,
    "StartDate": "0001-01-01T00:00:00",
    "EndDate": "0001-01-01T00:00:00",
    "Reason": "test"
  }
}
```

#### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": null,
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": null,
            "status": 0
        }
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Group APIs](#group-apis)

## Leave a Group

Using this API, you can leave a group according to the parameters specified in the body, such as
membership type, start date, and end date.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/{GroupIdentity}/Leave

## HTTP Method

POST

#### Sample Request Syntax

```
{
  "IdentityStoreID": 2,
  "ReplicationRequired": true,
  "leaveType": {
    "MembershipType": 1,
    "StartDate": "0001-01-01T00:00:00",
    "EndDate": "0001-01-01T00:00:00",
    "Reason": "test"
  }
}
```

#### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": null,
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": null,
            "status": 0
        }
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Group APIs](#group-apis)

## Leave a Group on behalf of another user

Using this API, you can leave a group on behalf of another user. You have to specify the identity
store where the group exists, the identity of the other user on behalf of whom you are leaving the
group, and membership type details.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/{GroupIdentity}/LeaveOnBehalf

## HTTP Method

POST

#### Sample Request Syntax

```
{
  "IdentityStoreID": 2,
  "ReplicationRequired": true,
  "leavingUserId": "a79934a7-c6a0-4a1c-8860-f9aeb4788e98",
  "leaveType": {
    "MembershipType": 1,
    "StartDate": "0001-01-01T00:00:00",
    "EndDate": "0001-01-01T00:00:00",
    "Reason": "test"
  }
}
```

#### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": null,
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": null,
            "status": 0
        }
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Group APIs](#group-apis)

## Get Preview of a Smart Group Membership

Using this API, you can preview membership changes that will occur in a Smart Group membership as
per the query given in the body.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/SmartGroups/Members?sortOrder=1&pageNo=1&pageSize=2

## HTTP Method

GET

#### Sample Request Syntax

```
{
  "ExtensionDataAttributes": {
    "AttributesCollection": {
      "IMSGObjectTypes": [
        {
          "IdentityStoreId": 0,
          "Value": "6",
          "DN": null,
          "Action": 1,
          "AttributeCollection": {
          }
        }
      ],
      "IMSGCriteria": [
        {
          "IdentityStoreId": 0,
          "Value": "(department contains \"eng\"",
          "DN": null,
          "Action": 1,
          "AttributeCollection": {
          }
        }
      ],
      "IMSGStartPath": [
        {
          "IdentityStoreId": 0,
          "Value": "GC=DC.demo.local",
          "DN": null,
          "Action": 1,
          "AttributeCollection": {
            "Scope": "2"
          }
        }
      ]
    }
  },
  "AttributesToLoad": [
    "displayName",
    "description",
    "IMSGManagedGroupType",
    "isdisabled",
    "ismailbox"
  ]
}
```

#### Sample Response Syntax

```
{
  "total": 5528,
  "data": [
    {
      "attributesBusinessObject": {
        "attributesCollection": {
          "container": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "CN=Users,DC=demo,DC=local",
              "identityStoreId": 0
            }
          ],
          "isdisabled": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "True",
              "identityStoreId": 0
            }
          ],
          "displayName": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "",
              "identityStoreId": 0
            }
          ],
          "IMSGManagedGroupType": [
          ],
          "objectClass": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "user",
              "identityStoreId": 0
            }
          ],
          "name": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "DefaultAccount",
              "identityStoreId": 0
            }
          ],
          "description": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "A user account managed by the system.",
              "identityStoreId": 0
            }
          ],
          "ismailbox": [
          ],
          "CN": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "DefaultAccount",
              "identityStoreId": 0
            }
          ],
          "objectCategory": [
          ]
        },
        "type": null,
        "filePermissionCollection": {
        }
      },
      "objectIdFromIdentityStore": "75c037f8-83ea-4036-86ff-e5c23af839a0",
      "elasticHitScore": 1.0,
      "objectDisplayName": "DefaultAccount",
      "stopNotification": false,
      "objectName": null,
      "identityStore": null,
      "identityStoreId": 2,
      "objectType": "user"
    },
    {
      "attributesBusinessObject": {
        "attributesCollection": {
          "container": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "CN=Users,DC=demo,DC=local",
              "identityStoreId": 0
            }
          ],
          "isdisabled": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "True",
              "identityStoreId": 0
            }
          ],
          "displayName": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "",
              "identityStoreId": 0
            }
          ],
          "IMSGManagedGroupType": [
          ],
          "objectClass": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "user",
              "identityStoreId": 0
            }
          ],
          "name": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "Exchange Online-ApplicationAccount",
              "identityStoreId": 0
            }
          ],
          "description": [
          ],
          "ismailbox": [
          ],
          "CN": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "Exchange Online-ApplicationAccount",
              "identityStoreId": 0
            }
          ],
          "objectCategory": [
          ]
        },
        "type": null,
        "filePermissionCollection": {
        }
      },
      "objectIdFromIdentityStore": "2b1b1353-cd78-4e76-b372-7debbd71229f",
      "elasticHitScore": 1.0,
      "objectDisplayName": "Exchange Online-ApplicationAccount",
      "stopNotification": false,
      "objectName": null,
      "identityStore": null,
      "identityStoreId": 2,
      "objectType": "user"
    }
  ]
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Group APIs](#group-apis)

## Renew a Group

It renews a group, identity of which is provided in the endpoint URL.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Groups/{groupIdentity}/Renew?ReplicationRequired=true

## HTTP Method

POST

#### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": null,
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Group APIs](#group-apis)

## Renew Groups

This API renews multiple groups, identities of which are provided in the request body.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Groups/Renew

## HTTP Method

POST

#### Sample Request Syntax

```
[
"eef9c2ae-32db-401b-b844-6ea6e5f21307",
"8b13bcc7-c51a-4840-a9f5-f1c03bba85d4",
"4ba9f608-8011-4a1d-80eb-777d605ac19e"
]
```

#### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": null,
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": null,
            "status": 0
        },
        null,
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": null,
            "status": 0
        },
        null,
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": null,
            "status": 0
        },
        null
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Group APIs](#group-apis)

## Update a Group

Using this API, you can update a group's details.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Groups/{groupIdentity}

## HTTP Method

PATCH

#### Sample Request Syntax

```
{
  "AttributesCollection": {
    "AttributesCollection": {
      "description": [
        {
          "Value": "Its a demo group!",
          "Action": 0
        }
      ],
      "company": [
        {
          "Value": "Imanami - Now part of Netwrix",
          "Action": 0
        }
      ]
    }
  }
}
```

#### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": null,
    "identityStoreObject": null,
    "name": "6bd67b4a-eb06-4b05-94a8-43914fb2e19a",
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": "description",
            "errorCode": null,
            "details": [
            ],
            "type": 8,
            "message": null,
            "status": 0
        },
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": "company",
            "errorCode": null,
            "details": [
            ],
            "type": 8,
            "message": null,
            "status": 0
        },
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": "IMSGManagedGroupType",
            "errorCode": null,
            "details": [
            ],
            "type": 8,
            "message": null,
            "status": 0
        }
    ],
    "type": 8,
    "message": null,
    "status": 0
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Group APIs](#group-apis)

## Update Groups

Using this API, you can update multiple groups.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Groups/

## HTTP Method

PATCH

#### Sample Request Syntax

```
[
  {
    "objectIdFromIdentityStore": "24bda903-2afd-408a-a55c-c18adcfb543e",
    "identityStoreId": 2,
    "attributesBusinessObject": {
      "attributesCollection": {
        "description": [
          {
            "identityStoreId": 2,
            "value": "This is DemoGroup1 description"
          }
        ]
      }
    }
  },
  {
    "objectIdFromIdentityStore": "124b2528-a08a-41a1-9e8e-b1d5e6434153",
    "identityStoreId": 2,
    "attributesBusinessObject": {
      "attributesCollection": {
        "description": [
          {
            "identityStoreId": 2,
            "value": "This is DemoGroup2 description"
          }
        ]
      }
    }
  }
]
```

#### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": null,
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": "24bda903-2afd-408a-a55c-c18adcfb543e",
            "errorCode": null,
            "details": [
                {
                    "currentDirectoryServer": null,
                    "exceptionMessagesAttributeWise": null,
                    "data": null,
                    "identityStoreObject": null,
                    "name": "description",
                    "errorCode": null,
                    "details": [
                    ],
                    "type": 8,
                    "message": null,
                    "status": 0
                },
                {
                    "currentDirectoryServer": null,
                    "exceptionMessagesAttributeWise": null,
                    "data": null,
                    "identityStoreObject": null,
                    "name": "IMSGManagedGroupType",
                    "errorCode": null,
                    "details": [
                    ],
                    "type": 8,
                    "message": null,
                    "status": 0
                }
            ],
            "type": 8,
            "message": null,
            "status": 0
        },
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": "124b2528-a08a-41a1-9e8e-b1d5e6434153",
            "errorCode": null,
            "details": [
                {
                    "currentDirectoryServer": null,
                    "exceptionMessagesAttributeWise": null,
                    "data": null,
                    "identityStoreObject": null,
                    "name": "description",
                    "errorCode": null,
                    "details": [
                    ],
                    "type": 8,
                    "message": null,
                    "status": 0
                },
                {
                    "currentDirectoryServer": null,
                    "exceptionMessagesAttributeWise": null,
                    "data": null,
                    "identityStoreObject": null,
                    "name": "IMSGManagedGroupType",
                    "errorCode": null,
                    "details": [
                    ],
                    "type": 8,
                    "message": null,
                    "status": 0
                }
            ],
            "type": 8,
            "message": null,
            "status": 0
        }
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Group APIs](#group-apis)

## Update a Smart Group

This API updates a Smart Group, identity of which is provided in the endpoint URL.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Groups/SmartGroups/{GroupIdentity}/Update

## HTTP Method

POST

#### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": 4,
    "identityStoreObject": null,
    "name": "b3529c0e-e62e-44d7-ba1e-b89f610bd186",
    "errorCode": null,
    "details": [
    ],
    "type": 8,
    "message": null,
    "status": 0
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Group APIs](#group-apis)

## Update Smart Groups

This API updates multiple Smart Groups whose identities are provided in the request body.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Groups/SmartGroups/Update

## HTTP Method

POST

#### Sample Request Syntax

```
[
  "9ba5dc8f-bdf0-4cc8-bc53-5012e94508c8",
  "424eea5a-7781-4c46-851f-28348b597a72"
]
```

#### Sample Response Syntax

```
{
    "clientID": "b3529c0e-e62e-44d7-ba1e-b89f610bd186",
    "details": [
        {
            "groupID": "9ba5dc8f-bdf0-4cc8-bc53-5012e94508c8",
            "message": null,
            "taskID": 8,
            "status": 0
        },
        {
            "groupID": "424eea5a-7781-4c46-851f-28348b597a72",
            "message": null,
            "taskID": 9,
            "status": 0
        }
    ],
    "message": null,
    "status": 0
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Group APIs](#group-apis)

## Admin Center Logs

Use this API to get Admin Center logs. See the
[Admin Center History](/docs/directorymanager/11.0/administration/admin-center/index.md) topic
for additional information.

## Endpoint

https://demomachine:4443/AdminCenter/api/Logs/Download

## HTTP Method

GET

#### Sample Response Syntax

```
<Encrypted response>
```

Save the encrypted response as a zip file to a desired location.

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Logs APIs](#logs-apis)

## Data Service Logs

Use this API to get GroupID Data service log. See the
[Data Service](/docs/directorymanager/11.0/configuration/services/index.md) for
additional information on Data service.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/Logs/Download

## HTTP Method

GET

#### Sample Response Syntax

```
<Encrypted response>
```

Save the encrypted response as a zip file to a desired location.

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Logs APIs](#logs-apis)

## Email Service Logs

Use this API to get Email service logs. See the
[Email Service](/docs/directorymanager/11.0/configuration/services/index.md) topic for
additional on Email service.

## Endpoint

https://demomachine:4443/GroupIDEmailService/api/Logs/Download

## HTTP Method

GET

#### Sample Response Syntax

```
<Encrypted response>
```

Save the encrypted response as a zip file to a desired location.

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Logs APIs](#logs-apis)

## Logs APIs

GroupID generates logs for its services, clients, and Windows events. Using the following APIs, you
can collect and dump your required logs to a desired location.

See the [Get Logs](/docs/directorymanager/11.0/administration/admin-center/index.md) topic for
additional information on logs.

- [Admin Center Logs](#admin-center-logs)
- [Data Service Logs](#data-service-logs)
- [Email Service Logs](#email-service-logs)
- [Portal Logs](#portal-logs)
- [Replication Service Logs](#replication-service-logs)
- [Scheduler Service Logs](#scheduler-service-logs)
- [Security Service Logs](#security-service-logs)

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Get Token](/docs/directorymanager/11.0/automation/apis/index.md)
- [Contact APIs](#contact-apis)
- [Data Source APIs](#data-source-apis)
- [Group APIs](#group-apis)
- Logs APIs
- [Synchronize Jobs APIs](#synchronize-jobs-apis)
- [User APIs](#user-apis)
- [Workflow APIs](#workflow-apis)

## Portal Logs

Use this API to get GroupID portal logs. See the
[History](/docs/directorymanager/11.0/user-guide/portal/index.md) topic for additional
information on Portal history.

## Endpoint

https://demomachine:4443/GroupIDPortal/api/Logs/Download

## HTTP Method

GET

#### Sample Response Syntax

```
<Encrypted response>
```

Save the encrypted response as a zip file to a desired location.

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Logs APIs](#logs-apis)

## Replication Service Logs

Use this API to get Replication Service logs. See the
[Replication Service](/docs/directorymanager/11.0/configuration/services/index.md)
topic for additional information on Replication service.

## Endpoint

https://demomachine:4443/GroupIDReplicationService/api/Logs/Download

## HTTP Method

GET

#### Sample Response Syntax

```
<Encrypted response>
```

Save the encrypted response as a zip file to a desired location.

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Logs APIs](#logs-apis)

## Scheduler Service Logs

Using this API you can get Scheduler Service logs. See the
[Scheduler Service](/docs/directorymanager/11.0/configuration/services/index.md)topic
for additional information on Scheduler service.

## Endpoint

https://demomachine:4443/GroupIDSchedulerService/api/Logs/Download

## HTTP Method

GET

#### Sample Response Syntax

```
<Encrypted response>
```

Save the encrypted response as a zip file to a desired location.

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Logs APIs](#logs-apis)

## Security Service Logs

This API fetches GroupID Security service logs. See the
[Security Service](/docs/directorymanager/11.0/configuration/services/index.md)
topic for additional information on Security service.

## Endpoint

https://demomachine:4443/GroupIDSecurityService/api/Logs/Download

## HTTP Method

GET

#### Sample Response Syntax

```
<Encrypted response>
```

Save the encrypted response as a zip file to a desired location.

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Logs APIs](#logs-apis)

## Create a New Job

Use this API to create a new Synchronize job which is a set of sequential commands that run in the
background to move data from one data source to another data source.

See the [Create a Job](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md) topic
for more information about creating a job.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSyncJobs

## HTTP Method

POST

#### Sample Request Syntax

```
{
    "isTemplate": false,
    "jobInfo": {
        "jobId": 0,
        "templateId": null,
        "jobGuid": null,
        "name": "DataSyncJob",
        "type": 1,
        "description": "DataSyncJob",
        "sourceProvider": "ExcelOne",
        "destinationProvider": "ADEnt",
        "lastRun": null,
        "lastOutCome": "None",
        "lastOutComeDisplayText": null,
        "nextRun": null,
        "timesRun": 0,
        "created": "2024-06-04T09:45:25.373Z",
        "modified": null,
        "schedule": "",
        "smartgroupSchedule": "",
        "enabled": false,
        "onFailure": "Abort",
        "runOrder": 0,
        "isEnable": true,
        "action": 0,
        "collectionId": null,
        "scheduledTask": null
    },
    "fieldsMap": [
        {
            "action": 0,
            "sourceField": "",
            "destinationField": "cn",
            "id": 61,
            "delimiter": "",
            "transform": "Join:field=First;separator=_api_;field=Last",
            "forCreateOnly": true,
            "objectType": 1,
            "isKey": false,
            "options": null
        },
        {
            "action": 0,
            "sourceField": "First",
            "destinationField": "givenName",
            "id": 62,
            "delimiter": "",
            "transform": "",
            "forCreateOnly": true,
            "objectType": 1,
            "isKey": false,
            "options": null
        },
        {
            "action": 0,
            "sourceField": "",
            "destinationField": "sAMAccountName",
            "id": 63,
            "delimiter": "",
            "transform": "Join:field=First;separator=_api_;field=Last",
            "forCreateOnly": true,
            "objectType": 1,
            "isKey": true,
            "options": null
        },
        {
            "action": 0,
            "sourceField": "Last",
            "destinationField": "sn",
            "id": 64,
            "delimiter": "",
            "transform": "",
            "forCreateOnly": true,
            "objectType": 1,
            "isKey": false,
            "options": null
        },
        {
            "action": 0,
            "sourceField": "",
            "destinationField": "password",
            "id": 65,
            "delimiter": "",
            "transform": "Static:value=webdir123R",
            "forCreateOnly": true,
            "objectType": 1,
            "isKey": false,
            "options": "{\"passwordLength\":7,\"includeUppercaseAlphabets\":true,\"includeLowercaseAlphabets\":true,\"includeDigits\":true,\"includeSpecialSymbols\":false,\"specialSymbols\":\"%^&*(\",\"excludeSimilarSymbols\":false,\"managerNotification\":false,\"passwordType\":0}"
        }
    ],
    "objectsOption": [
        {
            "objectType": 1,
            "id": 0,
            "jobId": 0,
            "isCreate": true,
            "displayName": "User",
            "isDelete": false,
            "isSelected": true,
            "containerOption": "1",
            "containerOptionValue": "OU=API,DC=groupid,DC=lab",
            "createObjectContainerStrategy": 1,
            "isDeprovisioning": false,
            "objectTypeSettings": null,
            "action": 0
        }
    ],
    "syncQuery": [
        {
            "action": 0,
            "id": 0,
            "queryFor": null,
            "objectType": 1,
            "query": "SELECT * FROM [TTSheet1$]",
            "queryType": "SQL",
            "isSource": true,
            "timeStampField": "",
            "updateAll": true
        },
        {
            "action": 0,
            "id": 0,
            "queryFor": null,
            "objectType": 1,
            "query": "objectClass is exactly \"user\"",
            "queryType": "GroupID",
            "isSource": false,
            "timeStampField": null,
            "updateAll": false
        }
    ],
    "settings": [
        {
            "action": 0,
            "id": 0,
            "key": "Source.Type",
            "value": "4",
            "dataType": "System.Int32",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "SourceProvider",
            "value": "4",
            "dataType": "System.Int32",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "JobOwners",
            "value": "Administrator#b9989fd7-bdbf-41cb-9aa4-eca35a329682",
            "dataType": "System.String",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "JobOwnerIds",
            "value": "b9989fd7-bdbf-41cb-9aa4-eca35a329682",
            "dataType": "System.String",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "Source.ProviderName",
            "value": "Microsoft Excel",
            "dataType": "System.String",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "Source.Provider",
            "value": "4",
            "dataType": "System.String",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "Source.ProviderType",
            "value": "2",
            "dataType": "System.String",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "Source.IsDirectoryProvider",
            "value": "False",
            "dataType": "System.String",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "Source.IsTableProvider",
            "value": "True",
            "dataType": "System.String",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "Source.Table",
            "value": "TTSheet1",
            "dataType": "System.String",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "Destination.Type",
            "value": "24",
            "dataType": "System.Int32",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "DestinationProvider",
            "value": "24",
            "dataType": "System.Int32",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "Destination.ProviderName",
            "value": "Active Directory",
            "dataType": "System.String",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "Destination.Provider",
            "value": "24",
            "dataType": "System.String",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "Destination.Type",
            "value": "24",
            "dataType": "System.String",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "Destination.ProviderType",
            "value": "1",
            "dataType": "System.String",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "Destination.IsDirectoryProvider",
            "value": "True",
            "dataType": "System.String",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "Destination.IsTableProvider",
            "value": "False",
            "dataType": "System.String",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "Destination.ChangeServiceAccount",
            "value": "",
            "dataType": "System.String",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "Destination.ContainerDetails",
            "value": "{\r\n  \"id\": \"efc6ad49-9091-47f4-91f0-0e033177e87e\",\r\n  \"name\": \"API\",\r\n  \"children\": [],\r\n  \"parentId\": \"8ce5599b-5589-487d-aff8-bb5ffd073e5d\",\r\n  \"showChildren\": false,\r\n  \"hasChildren\": false,\r\n  \"nodeType\": \"Container\",\r\n  \"DistinguishedName\": \"OU=API,DC=groupid,DC=lab\",\r\n  \"IdFromIdentityStore\": \"efc6ad49-9091-47f4-91f0-0e033177e87e\",\r\n  \"DisplayName\": \"API\",\r\n  \"isSelected\": true,\r\n  \"isFocused\": true\r\n}",
            "dataType": "System.String",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "Destination.ShouldIncludeSubTree",
            "value": "True",
            "dataType": "System.String",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "Destination.Container",
            "value": "OU=API,DC=groupid,DC=lab",
            "dataType": "System.String",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "Destination.ScriptingLanguage",
            "value": "0",
            "dataType": "System.String",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "Destination.ExposedScriptCode",
            "value": "Option Strict Off\r\n\r\nImports System\r\nImports System.Text\r\nImports System.Text.RegularExpressions\r\nImports System.IO\r\nImports System.Math\r\nImports Microsoft.VisualBasic\r\nImports Imanami.DataSyncServices.Scripting\r\n\r\nModule ImanamiExposedCode\r\n\r\n#Region \"Imanami Generated Code\"\r\n'<--- PowerTool Instance Definitions --->\t\r\n#End Region\r\n\r\n#Region \" User-definable code \"\r\n    Sub DTM_Startup(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.Startup\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_BuildSourceQuery(ByVal dtmsource As Object, ByVal args As QueryEventArgs) Handles DTM.BuildSourceQuery\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowStarting(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.RowStarting\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n\r\n    Sub DTM_BuildDestinationQuery(ByVal dtmsource As Object, ByVal args As QueryEventArgs) Handles DTM.BuildDestinationQuery\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowChanging(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowChanging\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowChanged(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowChanged\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowAdding(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowAdding\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowAdded(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowAdded\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowDeleting(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowDeleting\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowDeleted(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowDeleted\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFinishing(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFinishing\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFinished(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFinished\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFailed(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFailed\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_Shutdown(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.Shutdown\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n#End Region\r\n\r\nend Module ' ImanamiExposedCode\r\n",
            "dataType": "System.String",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "IsNotificationEnabled",
            "value": "False",
            "dataType": "System.Boolean",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "ScheduledTask",
            "value": "",
            "dataType": "System.String",
            "objectType": null
        },
        {
            "action": 0,
            "id": 0,
            "key": "SmartGroupScheduleTask",
            "value": "",
            "dataType": "System.String",
            "objectType": null
        }
    ],
    "delimiterSchema": null,
    "sourceSchema": null,
    "destinationSchema": null,
    "hasAccess": true
}
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": 16,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Synchronize Jobs APIs](#synchronize-jobs-apis)

## Create a New Job Collection

Using this API you can create a new job collection which is a group of individual jobs that run in a
particular order.

See the
[Create a Job Collection ](/docs/directorymanager/11.0/user-guide/synchronization/schedules.md)topic
for additional information on the Job collection.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSyncJobs/Collections

## HTTP Method

POST

#### Sample Request Syntax

```
{
    "isTemplate": false,
    "description": null,
    "isNotificationEnabled": false,
    "notificationSendIndividualEmail": false,
    "notifyWhen": 3,
    "notificationRecipients": "",
    "jobCollectionInfo": {
        "id": 0,
        "jobCollectionGuid": "",
        "name": "TestCollection",
        "description": "TestCollection",
        "totalJobs": 0,
        "timesRun": 0,
        "lastRunDate": null,
        "lastOutCome": "None",
        "lastOutComeDisplayText": null,
        "nextRun": null,
        "created": "2024-06-04T10:46:33.13Z",
        "modified": "2024-06-04T10:45:47Z",
        "schedule": "0",
        "smartgroupSchedule": null,
        "enabled": false,
        "jobs": [
            {
                "jobId": 0,
                "templateId": null,
                "jobGuid": null,
                "name": "Sync_API",
                "type": 2,
                "description": "Sync_API",
                "sourceProvider": "ExcelOne",
                "destinationProvider": "ADEnt",
                "lastRun": null,
                "lastOutCome": "None",
                "lastOutComeDisplayText": null,
                "nextRun": null,
                "timesRun": 0,
                "created": "2024-06-04T10:46:33.13Z",
                "modified": null,
                "schedule": "",
                "smartgroupSchedule": null,
                "enabled": true,
                "onFailure": "Abort",
                "runOrder": 1,
                "isEnable": true,
                "action": 0,
                "collectionId": null,
                "scheduledTask": null
            }
        ]
    },
    "jobs": [
        {
            "isTemplate": false,
            "jobInfo": {
                "jobId": 0,
                "templateId": null,
                "jobGuid": null,
                "name": "Sync_API",
                "type": 2,
                "description": "Sync_API",
                "sourceProvider": "ExcelOne",
                "destinationProvider": "ADEnt",
                "lastRun": null,
                "lastOutCome": "None",
                "lastOutComeDisplayText": null,
                "nextRun": null,
                "timesRun": 0,
                "created": "2024-06-04T10:46:33.13Z",
                "modified": null,
                "schedule": "",
                "smartgroupSchedule": "",
                "enabled": false,
                "onFailure": "Abort",
                "runOrder": 1,
                "isEnable": true,
                "action": 0,
                "collectionId": 0,
                "scheduledTask": null
            },
            "fieldsMap": [
                {
                    "action": 0,
                    "sourceField": "",
                    "destinationField": "cn",
                    "id": 0,
                    "delimiter": "",
                    "transform": "Join:field=First;separator=_api_;field=Last",
                    "forCreateOnly": true,
                    "objectType": 1,
                    "isKey": false,
                    "options": null
                },
                {
                    "action": 0,
                    "sourceField": "First",
                    "destinationField": "givenName",
                    "id": 0,
                    "delimiter": "",
                    "transform": "",
                    "forCreateOnly": true,
                    "objectType": 1,
                    "isKey": false,
                    "options": null
                },
                {
                    "action": 0,
                    "sourceField": "",
                    "destinationField": "sAMAccountName",
                    "id": 0,
                    "delimiter": "",
                    "transform": "Join:field=First;separator=_api_;field=Last",
                    "forCreateOnly": true,
                    "objectType": 1,
                    "isKey": true,
                    "options": null
                },
                {
                    "action": 0,
                    "sourceField": "Last",
                    "destinationField": "sn",
                    "id": 0,
                    "delimiter": "",
                    "transform": "",
                    "forCreateOnly": true,
                    "objectType": 1,
                    "isKey": false,
                    "options": null
                },
                {
                    "action": 0,
                    "sourceField": "",
                    "destinationField": "password",
                    "id": 0,
                    "delimiter": "",
                    "transform": "Static:value=webdir123R",
                    "forCreateOnly": true,
                    "objectType": 1,
                    "isKey": false,
                    "options": "{\"passwordLength\":7,\"includeUppercaseAlphabets\":true,\"includeLowercaseAlphabets\":true,\"includeDigits\":true,\"includeSpecialSymbols\":false,\"specialSymbols\":\"%^&*(\",\"excludeSimilarSymbols\":false,\"managerNotification\":false,\"passwordType\":0}"
                }
            ],
            "objectsOption": [
                {
                    "objectType": 1,
                    "id": 0,
                    "jobId": 0,
                    "isCreate": true,
                    "displayName": "User",
                    "isDelete": false,
                    "isSelected": true,
                    "containerOption": "1",
                    "containerOptionValue": "OU=API,DC=groupid,DC=lab",
                    "createObjectContainerStrategy": 1,
                    "isDeprovisioning": false,
                    "objectTypeSettings": null,
                    "action": 0
                }
            ],
            "syncQuery": [
                {
                    "action": 0,
                    "id": 0,
                    "queryFor": null,
                    "objectType": 1,
                    "query": "SELECT * FROM [TTSheet1$]",
                    "queryType": "SQL",
                    "isSource": true,
                    "timeStampField": "",
                    "updateAll": true
                },
                {
                    "action": 0,
                    "id": 0,
                    "queryFor": null,
                    "objectType": 1,
                    "query": "objectClass is exactly \"user\"",
                    "queryType": "GroupID",
                    "isSource": false,
                    "timeStampField": null,
                    "updateAll": false
                }
            ],
            "settings": [
                {
                    "action": 0,
                    "id": 0,
                    "key": "Source.Type",
                    "value": "4",
                    "dataType": "System.Int32",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "SourceProvider",
                    "value": "4",
                    "dataType": "System.Int32",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "JobOwners",
                    "value": "Administrator#b9989fd7-bdbf-41cb-9aa4-eca35a329682",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "JobOwnerIds",
                    "value": "b9989fd7-bdbf-41cb-9aa4-eca35a329682",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Source.Provider",
                    "value": "4",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Source.ProviderName",
                    "value": "Microsoft Excel",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Source.ProviderType",
                    "value": "2",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Source.IsDirectoryProvider",
                    "value": "False",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Source.IsTableProvider",
                    "value": "True",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Source.Table",
                    "value": "TTSheet1",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.Type",
                    "value": "24",
                    "dataType": "System.Int32",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "DestinationProvider",
                    "value": "24",
                    "dataType": "System.Int32",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.Type",
                    "value": "24",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.Provider",
                    "value": "24",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.ProviderName",
                    "value": "Active Directory",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.ProviderType",
                    "value": "1",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.IsDirectoryProvider",
                    "value": "True",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.IsTableProvider",
                    "value": "False",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.ChangeServiceAccount",
                    "value": "",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.ContainerDetails",
                    "value": "{\r\n  \"id\": \"efc6ad49-9091-47f4-91f0-0e033177e87e\",\r\n  \"name\": \"API\",\r\n  \"children\": [],\r\n  \"parentId\": \"8ce5599b-5589-487d-aff8-bb5ffd073e5d\",\r\n  \"showChildren\": false,\r\n  \"hasChildren\": false,\r\n  \"nodeType\": \"Container\",\r\n  \"DistinguishedName\": \"OU=API,DC=groupid,DC=lab\",\r\n  \"IdFromIdentityStore\": \"efc6ad49-9091-47f4-91f0-0e033177e87e\",\r\n  \"DisplayName\": \"API\",\r\n  \"isSelected\": true,\r\n  \"isFocused\": true\r\n}",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.ShouldIncludeSubTree",
                    "value": "True",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.Container",
                    "value": "OU=API,DC=groupid,DC=lab",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.ScriptingLanguage",
                    "value": "0",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.ExposedScriptCode",
                    "value": "Option Strict Off\r\n\r\nImports System\r\nImports System.Text\r\nImports System.Text.RegularExpressions\r\nImports System.IO\r\nImports System.Math\r\nImports Microsoft.VisualBasic\r\nImports Imanami.DataSyncServices.Scripting\r\n\r\nModule ImanamiExposedCode\r\n\r\n#Region \"Imanami Generated Code\"\r\n'<--- PowerTool Instance Definitions --->\t\r\n#End Region\r\n\r\n#Region \" User-definable code \"\r\n    Sub DTM_Startup(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.Startup\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_BuildSourceQuery(ByVal dtmsource As Object, ByVal args As QueryEventArgs) Handles DTM.BuildSourceQuery\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowStarting(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.RowStarting\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n\r\n    Sub DTM_BuildDestinationQuery(ByVal dtmsource As Object, ByVal args As QueryEventArgs) Handles DTM.BuildDestinationQuery\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowChanging(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowChanging\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowChanged(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowChanged\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowAdding(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowAdding\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowAdded(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowAdded\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowDeleting(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowDeleting\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowDeleted(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowDeleted\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFinishing(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFinishing\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFinished(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFinished\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFailed(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFailed\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_Shutdown(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.Shutdown\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n#End Region\r\n\r\nend Module ' ImanamiExposedCode\r\n",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "IsNotificationEnabled",
                    "value": "False",
                    "dataType": "System.Boolean",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "ScheduledTask",
                    "value": "",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "SmartGroupScheduleTask",
                    "value": "",
                    "dataType": "System.String",
                    "objectType": null
                }
            ],
            "hasAccess": false
        }
    ],
    "totalJobs": 0,
    "hasAccess": false
}
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": 21,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Synchronize Jobs APIs](#synchronize-jobs-apis)

## Delete Jobs

After creating job, you can modify a job or even delete a job if it is no more required. Use this
API to delete job(s) specified in the end point URL.

See the
[Deleting a Job](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md#deleting-a-job)
section of the [Manage a Job](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
topic for additional information.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSyncJobs?jobids=1&jobids=2

## HTTP Method

DELETE

#### Sample Response Syntax

```
{
    "name": null,
    "type": 7,
    "status": 0,
    "message": null,
    "data": null,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Synchronize Jobs APIs](#synchronize-jobs-apis)

## Delete Job Collections

Use this API to delete job collections specified in the end point URL.

See the
[Delete a Job Collection](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md#delete-a-job-collection)
section of the
[Manage a Job Collection ](/docs/directorymanager/11.0/user-guide/synchronization/sync-jobs.md)
topic for additional information on job collection.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSyncJobs/Collections?jobids=1&jobids=2

## HTTP Method

DELETE

#### Sample Response Syntax

```
{
    "name": null,
    "type": 7,
    "status": 0,
    "message": null,
    "data": null,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Synchronize Jobs APIs](#synchronize-jobs-apis)

## Get Job Collections Details

Use this API to retrieve information about jobs within a job collection based on the criteria
provided in the request syntax.

See the
[Create a Job Collection ](/docs/directorymanager/11.0/user-guide/synchronization/schedules.md)for
additional information on Job Collections.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSyncJobs/Collections/Details

## HTTP Method

GET

#### Sample Request Syntax

```
{
    "filters": {
        "Operator": "is exactly",
        "Attribute": "Name",
        "Value": "TestCollection",
        "ValueType": 0,
        "ValueTypes": [],
        "DonotEscapeValue": false,
        "Child": null
    },
    "SearchOption": {
        "PageSize": 10,
        "PageIndex": 1,
        "SortColumnName": "modified",
        "SortOrder": 1
    },
    "jobCollectionId": 21
}
```

#### Sample Response Syntax

```
{
    "count": 2,
    "data": [
        {
            "jobId": 17,
            "templateId": null,
            "jobGuid": null,
            "name": "Sync_API",
            "type": 2,
            "description": "Sync_API",
            "sourceProvider": "ExcelOne",
            "destinationProvider": "ADEnt",
            "lastRun": null,
            "lastOutCome": "None",
            "lastOutComeDisplayText": null,
            "nextRun": null,
            "timesRun": 0,
            "created": "2024-06-05T07:42:45.18Z",
            "modified": null,
            "schedule": "",
            "smartgroupSchedule": null,
            "enabled": true,
            "onFailure": "Abort",
            "runOrder": 1,
            "isEnable": true,
            "action": 0,
            "collectionId": null,
            "scheduledTask": null
        },
        {
            "jobId": 18,
            "templateId": null,
            "jobGuid": null,
            "name": "NewJob",
            "type": 2,
            "description": "NewJob",
            "sourceProvider": "AdStore",
            "destinationProvider": "Azure",
            "lastRun": null,
            "lastOutCome": "None",
            "lastOutComeDisplayText": null,
            "nextRun": null,
            "timesRun": 0,
            "created": "2024-06-05T08:04:14.413Z",
            "modified": null,
            "schedule": "",
            "smartgroupSchedule": null,
            "enabled": true,
            "onFailure": "Abort",
            "runOrder": 2,
            "isEnable": true,
            "action": 0,
            "collectionId": null,
            "scheduledTask": null
        }
    ],
    "status": 0,
    "message": null
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Synchronize Jobs APIs](#synchronize-jobs-apis)

## Get Job Collection Details By Job Collection ID

Using this API you can retrieve information about a job collection ID of which is given in the
endpoint URL.

See the
[Create a Job Collection ](/docs/directorymanager/11.0/user-guide/synchronization/schedules.md)topic
for additional information.

## Endpoint

`https://demomachine:4443/GroupIDDataService/api/DataSyncJobs/Collections/{jobCollectionId}/Details`

## HTTP Method

GET

#### Sample Response Syntax

```json
{
    "count": 2,
    "data": {
        "isTemplate": false,
        "description": null,
        "isNotificationEnabled": false,
        "notificationSendIndividualEmail": false,
        "notifyWhen": 3,
        "notificationRecipients": "",
        "jobCollectionInfo": {
            "id": 1,
            "jobCollectionGuid": "",
            "name": "DataSync_API",
            "description": "DataSync_API",
            "totalJobs": 0,
            "timesRun": 0,
            "lastRunDate": null,
            "lastOutCome": "None",
            "lastOutComeDisplayText": null,
            "nextRun": null,
            "created": "2024-06-04T10:08:43.887Z",
            "modified": "2024-06-04T10:08:24Z",
            "schedule": "0",
            "smartgroupSchedule": null,
            "enabled": false,
            "jobs": [
                {
                    "jobId": 7,
                    "templateId": null,
                    "jobGuid": null,
                    "name": "NewJob",
                    "type": 2,
                    "description": "NewJob",
                    "sourceProvider": "AdStore",
                    "destinationProvider": "Azure",
                    "lastRun": null,
                    "lastOutCome": "None",
                    "lastOutComeDisplayText": null,
                    "nextRun": null,
                    "timesRun": 0,
                    "created": "2024-06-04T10:08:43.89Z",
                    "modified": null,
                    "schedule": "",
                    "smartgroupSchedule": null,
                    "enabled": true,
                    "onFailure": "Abort",
                    "runOrder": 1,
                    "isEnable": true,
                    "action": 0,
                    "collectionId": null,
                    "scheduledTask": null
                },
                {
                    "jobId": 8,
                    "templateId": null,
                    "jobGuid": null,
                    "name": "Sync_API",
                    "type": 2,
                    "description": "Sync_API",
                    "sourceProvider": "ExcelOne",
                    "destinationProvider": "ADEnt",
                    "lastRun": null,
                    "lastOutCome": "None",
                    "lastOutComeDisplayText": null,
                    "nextRun": null,
                    "timesRun": 0,
                    "created": "2024-06-04T10:08:43.89Z",
                    "modified": null,
                    "schedule": "",
                    "smartgroupSchedule": null,
                    "enabled": true,
                    "onFailure": "Abort",
                    "runOrder": 2,
                    "isEnable": true,
                    "action": 0,
                    "collectionId": null,
                    "scheduledTask": null
                }
            ]
        },
        "jobs": [
            {
                "isTemplate": false,
                "jobInfo": {
                    "jobId": 7,
                    "templateId": null,
                    "jobGuid": null,
                    "name": "NewJob",
                    "type": 2,
                    "description": "NewJob",
                    "sourceProvider": "AdStore",
                    "destinationProvider": "Azure",
                    "lastRun": null,
                    "lastOutCome": "None",
                    "lastOutComeDisplayText": null,
                    "nextRun": null,
                    "timesRun": 0,
                    "created": "2024-06-04T10:08:43.89Z",
                    "modified": null,
                    "schedule": "",
                    "smartgroupSchedule": "",
                    "enabled": false,
                    "onFailure": "Abort",
                    "runOrder": 1,
                    "isEnable": true,
                    "action": 0,
                    "collectionId": 1,
                    "scheduledTask": null
                },
                "fieldsMap": [
                    {
                        "action": 0,
                        "sourceField": "description",
                        "destinationField": "description",
                        "id": 66,
                        "delimiter": "",
                        "transform": "",
                        "forCreateOnly": true,
                        "objectType": 4,
                        "isKey": false,
                        "options": null
                    },
                    {
                        "action": 0,
                        "sourceField": "displayName",
                        "destinationField": "displayname",
                        "id": 67,
                        "delimiter": "",
                        "transform": "",
                        "forCreateOnly": true,
                        "objectType": 4,
                        "isKey": true,
                        "options": null
                    },
                    {
                        "action": 0,
                        "sourceField": "",
                        "destinationField": "grouptype",
                        "id": 68,
                        "delimiter": "",
                        "transform": "Static:value=8",
                        "forCreateOnly": true,
                        "objectType": 4,
                        "isKey": false,
                        "options": null
                    },
                    {
                        "action": 0,
                        "sourceField": "",
                        "destinationField": "mailNickname",
                        "id": 69,
                        "delimiter": "",
                        "transform": "Script:text=DTM.Result = DTM.Source(\"cn\") & \"_\" & DTM.Source(\"cn\") & \"@5cjshm.onmicrosoft.com\"",
                        "forCreateOnly": true,
                        "objectType": 4,
                        "isKey": false,
                        "options": ""
                    }
                ],
                "objectsOption": [
                    {
                        "objectType": 4,
                        "id": 9,
                        "jobId": 7,
                        "isCreate": true,
                        "displayName": "Group",
                        "isDelete": false,
                        "isSelected": true,
                        "containerOption": "1",
                        "containerOptionValue": "DC=5cjshm,DC=onmicrosoft,DC=com",
                        "createObjectContainerStrategy": 1,
                        "isDeprovisioning": false,
                        "objectTypeSettings": null,
                        "action": 0
                    }
                ],
                "syncQuery": [
                    {
                        "action": 0,
                        "id": 5,
                        "queryFor": null,
                        "objectType": 4,
                        "query": "objectClass is exactly \"group\"",
                        "queryType": "GroupID",
                        "isSource": true,
                        "timeStampField": "",
                        "updateAll": true
                    },
                    {
                        "action": 0,
                        "id": 6,
                        "queryFor": null,
                        "objectType": 4,
                        "query": "odatatype is exactly \"#microsoft.graph.group\"",
                        "queryType": "GroupID",
                        "isSource": false,
                        "timeStampField": null,
                        "updateAll": false
                    }
                ],
                "settings": [
                    {
                        "action": 0,
                        "id": 95,
                        "key": "Source.Type",
                        "value": "2",
                        "dataType": "System.Int32",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 96,
                        "key": "SourceProvider",
                        "value": "2",
                        "dataType": "System.Int32",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 97,
                        "key": "JobOwners",
                        "value": "Administrator#b9989fd7-bdbf-41cb-9aa4-eca35a329682",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 98,
                        "key": "JobOwnerIds",
                        "value": "b9989fd7-bdbf-41cb-9aa4-eca35a329682",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 99,
                        "key": "Source.Provider",
                        "value": "2",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 100,
                        "key": "Source.ProviderName",
                        "value": "Active Directory",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 101,
                        "key": "Source.ProviderType",
                        "value": "1",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 102,
                        "key": "Source.IsDirectoryProvider",
                        "value": "True",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 103,
                        "key": "Source.IsTableProvider",
                        "value": "False",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 104,
                        "key": "Source.ContainerDetails",
                        "value": "{\r\n  \"id\": \"efc6ad49-9091-47f4-91f0-0e033177e87e\",\r\n  \"name\": \"API\",\r\n  \"children\": [],\r\n  \"parentId\": \"8ce5599b-5589-487d-aff8-bb5ffd073e5d\",\r\n  \"showChildren\": false,\r\n  \"hasChildren\": false,\r\n  \"nodeType\": \"Container\",\r\n  \"DistinguishedName\": \"OU=API,DC=groupid,DC=lab\",\r\n  \"IdFromIdentityStore\": \"efc6ad49-9091-47f4-91f0-0e033177e87e\",\r\n  \"DisplayName\": \"API\",\r\n  \"isSelected\": true,\r\n  \"isFocused\": true\r\n}",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 105,
                        "key": "Source.ShouldIncludeSubTree",
                        "value": "True",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 106,
                        "key": "Source.Container",
                        "value": "OU=API,DC=groupid,DC=lab",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 107,
                        "key": "Destination.Type",
                        "value": "3",
                        "dataType": "System.Int32",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 108,
                        "key": "DestinationProvider",
                        "value": "3",
                        "dataType": "System.Int32",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 109,
                        "key": "Destination.Type",
                        "value": "3",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 110,
                        "key": "Destination.Provider",
                        "value": "3",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 111,
                        "key": "Destination.ProviderName",
                        "value": "Microsoft Entra ID",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 112,
                        "key": "Destination.ProviderType",
                        "value": "1",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 113,
                        "key": "Destination.IsDirectoryProvider",
                        "value": "True",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 114,
                        "key": "Destination.IsTableProvider",
                        "value": "False",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 115,
                        "key": "Destination.ContainerDetails",
                        "value": "{\r\n  \"id\": \"5cjshm.onmicrosoft.com\",\r\n  \"name\": \"5cjshm\",\r\n  \"children\": [],\r\n  \"parentId\": \"5cjshm.onmicrosoft.com-gc\",\r\n  \"showChildren\": true,\r\n  \"hasChildren\": false,\r\n  \"nodeType\": \"Domain\",\r\n  \"DistinguishedName\": \"DC=5cjshm,DC=onmicrosoft,DC=com\",\r\n  \"IdFromIdentityStore\": \"5cjshm.onmicrosoft.com\",\r\n  \"DisplayName\": \"5cjshm\",\r\n  \"isSelected\": true,\r\n  \"isLoading\": false,\r\n  \"isFocused\": true\r\n}",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 116,
                        "key": "Destination.Container",
                        "value": "DC=5cjshm,DC=onmicrosoft,DC=com",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 117,
                        "key": "Destination.ConfiguredMessagingProvider",
                        "value": "6",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 118,
                        "key": "Destination.ConfiguredMessagingProviderName",
                        "value": "Office 365",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 119,
                        "key": "Destination.MessagingProviderConfiguredFrom",
                        "value": "1",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 120,
                        "key": "Destination.MessagingProviderCloud",
                        "value": "Global",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 121,
                        "key": "Destination.MessagingProviderHostName",
                        "value": "5cjshm.onmicrosoft.com",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 122,
                        "key": "Destination.MessagingProviderUserName",
                        "value": "sqatestautomation@5cjshm.onmicrosoft.com",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 123,
                        "key": "Destination.MessagingProviderCertificatePassword",
                        "value": "0AA##0PV7#/UpeaeHwXI8b+g==+Rd63Vt8VsM3G91yz+iE4IVWAck7fP/YG3U8F+oa6iQ=",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 124,
                        "key": "Destination.MessagingProviderCertificate",
                        "value": "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",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 125,
                        "key": "Destination.MessagingProviderPassword",
                        "value": "0AA##0PV7#vROlrrh+SfW0uw==HMzEF/RUhCc5iKNZpSoqnbJ6pS85HaOCbLNVyFtHfw0=",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 126,
                        "key": "Destination.MessagingProviderApplicationId",
                        "value": "5556091a-8f10-41ed-88cd-41c43e8c3041",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 127,
                        "key": "Destination.MessagingProviderServer",
                        "value": "ps.outlook.com",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 128,
                        "key": "Destination.ScriptingLanguage",
                        "value": "0",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 129,
                        "key": "Destination.ExposedScriptCode",
                        "value": "Option Strict Off\r\n\r\nImports System\r\nImports System.Text\r\nImports System.Text.RegularExpressions\r\nImports System.IO\r\nImports System.Math\r\nImports Microsoft.VisualBasic\r\nImports Imanami.DataSyncServices.Scripting\r\n\r\nModule ImanamiExposedCode\r\n\r\n#Region \"Imanami Generated Code\"\r\n'<--- PowerTool Instance Definitions --->\t\r\n#End Region\r\n\r\n#Region \" User-definable code \"\r\n    Sub DTM_Startup(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.Startup\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_BuildSourceQuery(ByVal dtmsource As Object, ByVal args As QueryEventArgs) Handles DTM.BuildSourceQuery\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowStarting(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.RowStarting\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n\r\n    Sub DTM_BuildDestinationQuery(ByVal dtmsource As Object, ByVal args As QueryEventArgs) Handles DTM.BuildDestinationQuery\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowChanging(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowChanging\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowChanged(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowChanged\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowAdding(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowAdding\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowAdded(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowAdded\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowDeleting(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowDeleting\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowDeleted(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowDeleted\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFinishing(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFinishing\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFinished(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFinished\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFailed(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFailed\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_Shutdown(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.Shutdown\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n#End Region\r\n\r\nend Module ' ImanamiExposedCode\r\n",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 130,
                        "key": "IsNotificationEnabled",
                        "value": "False",
                        "dataType": "System.Boolean",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 131,
                        "key": "ScheduledTask",
                        "value": "",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 132,
                        "key": "SmartGroupScheduleTask",
                        "value": "",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 133,
                        "key": "memberkey",
                        "value": "sAMAccountName",
                        "dataType": "System.String",
                        "objectType": null
                    }
                ],
                "delimiterSchema": null,
                "sourceSchema": null,
                "destinationSchema": null,
                "hasAccess": false
            },
            {
                "isTemplate": false,
                "jobInfo": {
                    "jobId": 8,
                    "templateId": null,
                    "jobGuid": null,
                    "name": "Sync_API",
                    "type": 2,
                    "description": "Sync_API",
                    "sourceProvider": "ExcelOne",
                    "destinationProvider": "ADEnt",
                    "lastRun": null,
                    "lastOutCome": "None",
                    "lastOutComeDisplayText": null,
                    "nextRun": null,
                    "timesRun": 0,
                    "created": "2024-06-04T10:08:43.89Z",
                    "modified": null,
                    "schedule": "",
                    "smartgroupSchedule": "",
                    "enabled": false,
                    "onFailure": "Abort",
                    "runOrder": 2,
                    "isEnable": true,
                    "action": 0,
                    "collectionId": 1,
                    "scheduledTask": null
                },
                "fieldsMap": [
                    {
                        "action": 0,
                        "sourceField": "",
                        "destinationField": "cn",
                        "id": 70,
                        "delimiter": "",
                        "transform": "Join:field=First;separator=_api_;field=Last",
                        "forCreateOnly": true,
                        "objectType": 1,
                        "isKey": false,
                        "options": null
                    },
                    {
                        "action": 0,
                        "sourceField": "First",
                        "destinationField": "givenName",
                        "id": 71,
                        "delimiter": "",
                        "transform": "",
                        "forCreateOnly": true,
                        "objectType": 1,
                        "isKey": false,
                        "options": null
                    },
                    {
                        "action": 0,
                        "sourceField": "",
                        "destinationField": "sAMAccountName",
                        "id": 72,
                        "delimiter": "",
                        "transform": "Join:field=First;separator=_api_;field=Last",
                        "forCreateOnly": true,
                        "objectType": 1,
                        "isKey": true,
                        "options": null
                    },
                    {
                        "action": 0,
                        "sourceField": "Last",
                        "destinationField": "sn",
                        "id": 73,
                        "delimiter": "",
                        "transform": "",
                        "forCreateOnly": true,
                        "objectType": 1,
                        "isKey": false,
                        "options": null
                    },
                    {
                        "action": 0,
                        "sourceField": "",
                        "destinationField": "password",
                        "id": 74,
                        "delimiter": "",
                        "transform": "Static:value=webdir123R",
                        "forCreateOnly": true,
                        "objectType": 1,
                        "isKey": false,
                        "options": "{\"passwordLength\":7,\"includeUppercaseAlphabets\":true,\"includeLowercaseAlphabets\":true,\"includeDigits\":true,\"includeSpecialSymbols\":false,\"specialSymbols\":\"%^&*(\",\"excludeSimilarSymbols\":false,\"managerNotification\":false,\"passwordType\":0}"           
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Synchronize Jobs APIs](#synchronize-jobs-apis)

## Get Job Collections

Use this API to retrieve information of job collection(s) based on filters provided in the request
syntax.

See the
[Create a Job Collection ](/docs/directorymanager/11.0/user-guide/synchronization/schedules.md)for
additional information on job collections.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSyncJobs/Collections

## HTTP Method

GET

#### Sample Request Syntax

```
{
    "filterCriteria": {
        "operator": "is exactly",
        "attribute": "Name",
        "value": "DataSync_API",
        "valueType": 0,
        "valueTypes": [
            0
        ],
        "donotEscapeValue": true,
        "child": [
            {
                "Operator": "string",
                "Attribute": "string",
                "Value": "string",
                "ValueType": 0,
                "ValueTypes": [
                    0
                ],
                "Child": null
            }
        ]
    },
    "SearchOption": {
        "PageSize": 10,
        "PageIndex": 1,
        "SortColumnName": "",
        "SortOrder": 1
    }
}
```

#### Sample Response Syntax

```
{
    "count": 1,
    "data": [
        {
            "id": 1,
            "jobCollectionGuid": null,
            "name": "DataSync_API",
            "description": "DataSync_API",
            "totalJobs": 2,
            "timesRun": 0,
            "lastRunDate": null,
            "lastOutCome": "None",
            "lastOutComeDisplayText": null,
            "nextRun": null,
            "created": "2024-06-04T10:08:43.887Z",
            "modified": "2024-06-04T10:08:24Z",
            "schedule": "0",
            "smartgroupSchedule": null,
            "enabled": true,
            "jobs": []
        }
    ],
    "status": 0,
    "message": null
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Synchronize Jobs APIs](#synchronize-jobs-apis)

## Get Jobs

Use this API to get information about jobs based on the filters provided in the request syntax.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSyncJobs

## HTTP Method

GET

#### Sample Request Syntax

```
{
    "filterCriteria": {
        "operator": "is exactly",
        "attribute": "Name",
        "value": "Sync_API",
        "valueType": 0,
        "valueTypes": [
            0
        ],
        "donotEscapeValue": true,
        "child": [
            {
                "Operator": "string",
                "Attribute": "string",
                "Value": "string",
                "ValueType": 0,
                "ValueTypes": [
                    0
                ],
                "Child": null
            }
        ]
    },
    "SearchOption": {
        "PageSize": 10,
        "PageIndex": 1,
        "SortColumnName": "",
        "SortOrder": 1
    }
}
```

#### Sample Response Syntax

```
{
    "count": 1,
    "data": [
        {
            "jobId": 6,
            "templateId": null,
            "jobGuid": null,
            "name": "Sync_API",
            "type": 1,
            "description": "Sync_API",
            "sourceProvider": "ExcelOne",
            "destinationProvider": "ADEnt",
            "lastRun": null,
            "lastOutCome": "None",
            "lastOutComeDisplayText": null,
            "nextRun": null,
            "timesRun": 0,
            "created": "2024-06-04T09:45:25.373Z",
            "modified": null,
            "schedule": "",
            "smartgroupSchedule": null,
            "enabled": true,
            "onFailure": "Abort",
            "runOrder": 0,
            "isEnable": true,
            "action": 0,
            "collectionId": null,
            "scheduledTask": null
        }
    ],
    "status": 0,
    "message": null
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Synchronize Jobs APIs](#synchronize-jobs-apis)

## Get a Job Details

Use this API to get details of a job specified in endpoint URL.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSyncJobs/{jobId}/Details

## HTTP Method

GET

#### Sample Response Syntax

```
{
    "count": 0,
    "data": {
        "isTemplate": false,
        "jobInfo": {
            "jobId": 6,
            "templateId": null,
            "jobGuid": null,
            "name": "Sync_API",
            "type": 1,
            "description": "Sync_API",
            "sourceProvider": "ExcelOne",
            "destinationProvider": "ADEnt",
            "lastRun": null,
            "lastOutCome": "None",
            "lastOutComeDisplayText": null,
            "nextRun": null,
            "timesRun": 0,
            "created": "2024-06-04T09:45:25.373Z",
            "modified": null,
            "schedule": "",
            "smartgroupSchedule": "",
            "enabled": false,
            "onFailure": "Abort",
            "runOrder": 0,
            "isEnable": true,
            "action": 0,
            "collectionId": null,
            "scheduledTask": null
        },
        "fieldsMap": [
            {
                "action": 0,
                "sourceField": "",
                "destinationField": "cn",
                "id": 61,
                "delimiter": "",
                "transform": "Join:field=First;separator=_api_;field=Last",
                "forCreateOnly": true,
                "objectType": 1,
                "isKey": false,
                "options": null
            },
            {
                "action": 0,
                "sourceField": "First",
                "destinationField": "givenName",
                "id": 62,
                "delimiter": "",
                "transform": "",
                "forCreateOnly": true,
                "objectType": 1,
                "isKey": false,
                "options": null
            },
            {
                "action": 0,
                "sourceField": "",
                "destinationField": "sAMAccountName",
                "id": 63,
                "delimiter": "",
                "transform": "Join:field=First;separator=_api_;field=Last",
                "forCreateOnly": true,
                "objectType": 1,
                "isKey": true,
                "options": null
            },
            {
                "action": 0,
                "sourceField": "Last",
                "destinationField": "sn",
                "id": 64,
                "delimiter": "",
                "transform": "",
                "forCreateOnly": true,
                "objectType": 1,
                "isKey": false,
                "options": null
            },
            {
                "action": 0,
                "sourceField": "",
                "destinationField": "password",
                "id": 65,
                "delimiter": "",
                "transform": "Static:value=webdir123R",
                "forCreateOnly": true,
                "objectType": 1,
                "isKey": false,
                "options": "{\"passwordLength\":7,\"includeUppercaseAlphabets\":true,\"includeLowercaseAlphabets\":true,\"includeDigits\":true,\"includeSpecialSymbols\":false,\"specialSymbols\":\"%^&*(\",\"excludeSimilarSymbols\":false,\"managerNotification\":false,\"passwordType\":0}"
            }
        ],
        "objectsOption": [
            {
                "objectType": 1,
                "id": 8,
                "jobId": 6,
                "isCreate": true,
                "displayName": "User",
                "isDelete": false,
                "isSelected": true,
                "containerOption": "1",
                "containerOptionValue": "OU=API,DC=groupid,DC=lab",
                "createObjectContainerStrategy": 1,
                "isDeprovisioning": false,
                "objectTypeSettings": null,
                "action": 0
            }
        ],
        "syncQuery": [
            {
                "action": 0,
                "id": 3,
                "queryFor": null,
                "objectType": 1,
                "query": "SELECT * FROM [TTSheet1$]",
                "queryType": "SQL",
                "isSource": true,
                "timeStampField": "",
                "updateAll": true
            },
            {
                "action": 0,
                "id": 4,
                "queryFor": null,
                "objectType": 1,
                "query": "objectClass is exactly \"user\"",
                "queryType": "GroupID",
                "isSource": false,
                "timeStampField": null,
                "updateAll": false
            }
        ],
        "settings": [
            {
                "action": 0,
                "id": 68,
                "key": "Source.Type",
                "value": "4",
                "dataType": "System.Int32",
                "objectType": null
            },
            {
                "action": 0,
                "id": 69,
                "key": "SourceProvider",
                "value": "4",
                "dataType": "System.Int32",
                "objectType": null
            },
            {
                "action": 0,
                "id": 70,
                "key": "JobOwners",
                "value": "Administrator#b9989fd7-bdbf-41cb-9aa4-eca35a329682",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 71,
                "key": "JobOwnerIds",
                "value": "b9989fd7-bdbf-41cb-9aa4-eca35a329682",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 72,
                "key": "Source.ProviderName",
                "value": "Microsoft Excel",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 73,
                "key": "Source.Provider",
                "value": "4",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 74,
                "key": "Source.ProviderType",
                "value": "2",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 75,
                "key": "Source.IsDirectoryProvider",
                "value": "False",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 76,
                "key": "Source.IsTableProvider",
                "value": "True",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 77,
                "key": "Source.Table",
                "value": "TTSheet1",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 78,
                "key": "Destination.Type",
                "value": "24",
                "dataType": "System.Int32",
                "objectType": null
            },
            {
                "action": 0,
                "id": 79,
                "key": "DestinationProvider",
                "value": "24",
                "dataType": "System.Int32",
                "objectType": null
            },
            {
                "action": 0,
                "id": 80,
                "key": "Destination.ProviderName",
                "value": "Active Directory",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 81,
                "key": "Destination.Provider",
                "value": "24",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 82,
                "key": "Destination.Type",
                "value": "24",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 83,
                "key": "Destination.ProviderType",
                "value": "1",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 84,
                "key": "Destination.IsDirectoryProvider",
                "value": "True",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 85,
                "key": "Destination.IsTableProvider",
                "value": "False",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 86,
                "key": "Destination.ChangeServiceAccount",
                "value": "",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 87,
                "key": "Destination.ContainerDetails",
                "value": "{\r\n  \"id\": \"efc6ad49-9091-47f4-91f0-0e033177e87e\",\r\n  \"name\": \"API\",\r\n  \"children\": [],\r\n  \"parentId\": \"8ce5599b-5589-487d-aff8-bb5ffd073e5d\",\r\n  \"showChildren\": false,\r\n  \"hasChildren\": false,\r\n  \"nodeType\": \"Container\",\r\n  \"DistinguishedName\": \"OU=API,DC=groupid,DC=lab\",\r\n  \"IdFromIdentityStore\": \"efc6ad49-9091-47f4-91f0-0e033177e87e\",\r\n  \"DisplayName\": \"API\",\r\n  \"isSelected\": true,\r\n  \"isFocused\": true\r\n}",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 88,
                "key": "Destination.ShouldIncludeSubTree",
                "value": "True",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 89,
                "key": "Destination.Container",
                "value": "OU=API,DC=groupid,DC=lab",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 90,
                "key": "Destination.ScriptingLanguage",
                "value": "0",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 91,
                "key": "Destination.ExposedScriptCode",
                "value": "Option Strict Off\r\n\r\nImports System\r\nImports System.Text\r\nImports System.Text.RegularExpressions\r\nImports System.IO\r\nImports System.Math\r\nImports Microsoft.VisualBasic\r\nImports Imanami.DataSyncServices.Scripting\r\n\r\nModule ImanamiExposedCode\r\n\r\n#Region \"Imanami Generated Code\"\r\n'<--- PowerTool Instance Definitions --->\t\r\n#End Region\r\n\r\n#Region \" User-definable code \"\r\n    Sub DTM_Startup(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.Startup\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_BuildSourceQuery(ByVal dtmsource As Object, ByVal args As QueryEventArgs) Handles DTM.BuildSourceQuery\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowStarting(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.RowStarting\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n\r\n    Sub DTM_BuildDestinationQuery(ByVal dtmsource As Object, ByVal args As QueryEventArgs) Handles DTM.BuildDestinationQuery\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowChanging(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowChanging\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowChanged(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowChanged\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowAdding(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowAdding\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowAdded(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowAdded\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowDeleting(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowDeleting\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowDeleted(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowDeleted\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFinishing(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFinishing\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFinished(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFinished\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFailed(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFailed\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_Shutdown(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.Shutdown\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n#End Region\r\n\r\nend Module ' ImanamiExposedCode\r\n",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 92,
                "key": "IsNotificationEnabled",
                "value": "False",
                "dataType": "System.Boolean",
                "objectType": null
            },
            {
                "action": 0,
                "id": 93,
                "key": "ScheduledTask",
                "value": "",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 94,
                "key": "SmartGroupScheduleTask",
                "value": "",
                "dataType": "System.String",
                "objectType": null
            }
        ],
        "delimiterSchema": null,
        "sourceSchema": null,
        "destinationSchema": null,
        "hasAccess": true
    },
    "status": 0,
    "message": null
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Synchronize Jobs APIs](#synchronize-jobs-apis)

## Get Jobs Names

Using this API you can get a list of job names both predefined and user created.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSyncJobs/Names

## HTTP Method

GET

#### Sample Response Syntax

```
[
    {
        "name": "Move and Disable Objects In Active Directory",
        "type": "3"
    },
    {
        "name": "Linked Mailbox Creation In Active Directory",
        "type": "3"
    },
    {
        "name": "Move Objects in Active Directory",
        "type": "3"
    },
    {
        "name": "Sync GAL In Active Directory",
        "type": "3"
    },
    {
        "name": "NewJob",
        "type": "1"
    },
    {
        "name": "Sync_API",
        "type": "1"
    }
]
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Synchronize Jobs APIs](#synchronize-jobs-apis)

## Synchronize Jobs APIs

GroupID Synchronize is used for transferring data from one data source to another. The data sources
may include directory servers, databases or files. The following APIs can be used for performing
Synchronize jobs-specific functions:

- [Create a New Job](#create-a-new-job)
- [Create a New Job Collection](#create-a-new-job-collection)
- [Delete Jobs](#delete-jobs)
- [Delete Job Collections](#delete-job-collections)
- [Get Job Collections Details](#get-job-collections-details)
- [Get Job Collection Details By Job Collection ID](#get-job-collection-details-by-job-collection-id)
- [Get Jobs](#get-jobs)
- [Get Job Collections](#get-job-collections)
- [Get a Job Details](#get-a-job-details)
- [Get Jobs Names ](#get-jobs-names)
- [Update a Job Collection](#update-a-job-collection)

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Get Token](/docs/directorymanager/11.0/automation/apis/index.md)
- [Contact APIs](#contact-apis)
- [Data Source APIs](#data-source-apis)
- [Group APIs](#group-apis)
- [Logs APIs](#logs-apis)
- Synchronize Jobs APIs
- [User APIs](#user-apis)
- [Workflow APIs](#workflow-apis)

## Update a Job Collection

Use this API to update information of a job collection.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSyncJobs/Collections

## HTTP Method

PATCH

#### Sample Request Syntax

```
{
    "isTemplate": false,
    "description": null,
    "isNotificationEnabled": false,
    "notificationSendIndividualEmail": false,
    "notifyWhen": 3,
    "notificationRecipients": "",
    "jobCollectionInfo": {
        "id": 7,
        "jobCollectionGuid": "",
        "name": "TestCollection",
        "description": "TestCollection",
        "totalJobs": 0,
        "timesRun": 0,
        "lastRunDate": null,
        "lastOutCome": "None",
        "lastOutComeDisplayText": null,
        "nextRun": null,
        "created": "2024-06-04T10:46:33.13Z",
        "modified": "2024-06-04T10:45:47Z",
        "schedule": "0",
        "smartgroupSchedule": null,
        "enabled": false,
        "jobs": [
            {
                "jobId": 9,
                "templateId": null,
                "jobGuid": null,
                "name": "Sync_API",
                "type": 2,
                "description": "Sync_API",
                "sourceProvider": "ExcelOne",
                "destinationProvider": "ADEnt",
                "lastRun": null,
                "lastOutCome": "None",
                "lastOutComeDisplayText": null,
                "nextRun": null,
                "timesRun": 0,
                "created": "2024-06-04T10:46:33.13Z",
                "modified": null,
                "schedule": "",
                "smartgroupSchedule": null,
                "enabled": true,
                "onFailure": "Abort",
                "runOrder": 1,
                "isEnable": true,
                "action": 0,
                "collectionId": null,
                "scheduledTask": null
            }
        ]
    },
    "jobs": [
        {
            "isTemplate": false,
            "jobInfo": {
                "jobId": 9,
                "templateId": null,
                "jobGuid": null,
                "name": "Sync_API",
                "type": 2,
                "description": "Sync_API",
                "sourceProvider": "ExcelOne",
                "destinationProvider": "ADEnt",
                "lastRun": null,
                "lastOutCome": "None",
                "lastOutComeDisplayText": null,
                "nextRun": null,
                "timesRun": 0,
                "created": "2024-06-04T10:46:33.13Z",
                "modified": null,
                "schedule": "",
                "smartgroupSchedule": "",
                "enabled": false,
                "onFailure": "Abort",
                "runOrder": 1,
                "isEnable": true,
                "action": 0,
                "collectionId": 7,
                "scheduledTask": null
            },
            "fieldsMap": [
                {
                    "action": 0,
                    "sourceField": "",
                    "destinationField": "cn",
                    "id": 75,
                    "delimiter": "",
                    "transform": "Join:field=First;separator=_api_;field=Last",
                    "forCreateOnly": true,
                    "objectType": 1,
                    "isKey": false,
                    "options": null
                },
                {
                    "action": 0,
                    "sourceField": "First",
                    "destinationField": "givenName",
                    "id": 76,
                    "delimiter": "",
                    "transform": "",
                    "forCreateOnly": true,
                    "objectType": 1,
                    "isKey": false,
                    "options": null
                },
                {
                    "action": 0,
                    "sourceField": "",
                    "destinationField": "sAMAccountName",
                    "id": 77,
                    "delimiter": "",
                    "transform": "Join:field=First;separator=_api_;field=Last",
                    "forCreateOnly": true,
                    "objectType": 1,
                    "isKey": true,
                    "options": null
                },
                {
                    "action": 0,
                    "sourceField": "Last",
                    "destinationField": "sn",
                    "id": 78,
                    "delimiter": "",
                    "transform": "",
                    "forCreateOnly": true,
                    "objectType": 1,
                    "isKey": false,
                    "options": null
                },
                {
                    "action": 0,
                    "sourceField": "",
                    "destinationField": "password",
                    "id": 79,
                    "delimiter": "",
                    "transform": "Static:value=webdir123R",
                    "forCreateOnly": true,
                    "objectType": 1,
                    "isKey": false,
                    "options": "{\"passwordLength\":7,\"includeUppercaseAlphabets\":true,\"includeLowercaseAlphabets\":true,\"includeDigits\":true,\"includeSpecialSymbols\":false,\"specialSymbols\":\"%^&*(\",\"excludeSimilarSymbols\":false,\"managerNotification\":false,\"passwordType\":0}"
                }
            ],
            "objectsOption": [
                {
                    "objectType": 1,
                    "id": 11,
                    "jobId": 9,
                    "isCreate": true,
                    "displayName": "User",
                    "isDelete": false,
                    "isSelected": true,
                    "containerOption": "1",
                    "containerOptionValue": "OU=API,DC=groupid,DC=lab",
                    "createObjectContainerStrategy": 1,
                    "isDeprovisioning": false,
                    "objectTypeSettings": null,
                    "action": 0
                }
            ],
            "syncQuery": [
                {
                    "action": 0,
                    "id": 9,
                    "queryFor": null,
                    "objectType": 1,
                    "query": "SELECT * FROM [TTSheet1$]",
                    "queryType": "SQL",
                    "isSource": true,
                    "timeStampField": "",
                    "updateAll": true
                },
                {
                    "action": 0,
                    "id": 10,
                    "queryFor": null,
                    "objectType": 1,
                    "query": "objectClass is exactly \"user\"",
                    "queryType": "GroupID",
                    "isSource": false,
                    "timeStampField": null,
                    "updateAll": false
                }
            ],
            "settings": [
                {
                    "action": 0,
                    "id": 161,
                    "key": "Source.Type",
                    "value": "4",
                    "dataType": "System.Int32",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 162,
                    "key": "SourceProvider",
                    "value": "4",
                    "dataType": "System.Int32",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 163,
                    "key": "JobOwners",
                    "value": "Administrator#b9989fd7-bdbf-41cb-9aa4-eca35a329682",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 164,
                    "key": "JobOwnerIds",
                    "value": "b9989fd7-bdbf-41cb-9aa4-eca35a329682",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 165,
                    "key": "Source.Provider",
                    "value": "4",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 166,
                    "key": "Source.ProviderName",
                    "value": "Microsoft Excel",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 167,
                    "key": "Source.ProviderType",
                    "value": "2",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 168,
                    "key": "Source.IsDirectoryProvider",
                    "value": "False",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 169,
                    "key": "Source.IsTableProvider",
                    "value": "True",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 170,
                    "key": "Source.Table",
                    "value": "TTSheet1",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 171,
                    "key": "Destination.Type",
                    "value": "24",
                    "dataType": "System.Int32",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 172,
                    "key": "DestinationProvider",
                    "value": "24",
                    "dataType": "System.Int32",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 173,
                    "key": "Destination.Type",
                    "value": "24",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 174,
                    "key": "Destination.Provider",
                    "value": "24",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 175,
                    "key": "Destination.ProviderName",
                    "value": "Active Directory",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 176,
                    "key": "Destination.ProviderType",
                    "value": "1",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 177,
                    "key": "Destination.IsDirectoryProvider",
                    "value": "True",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 178,
                    "key": "Destination.IsTableProvider",
                    "value": "False",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 179,
                    "key": "Destination.ChangeServiceAccount",
                    "value": "",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 180,
                    "key": "Destination.ContainerDetails",
                    "value": "{\r\n  \"id\": \"efc6ad49-9091-47f4-91f0-0e033177e87e\",\r\n  \"name\": \"API\",\r\n  \"children\": [],\r\n  \"parentId\": \"8ce5599b-5589-487d-aff8-bb5ffd073e5d\",\r\n  \"showChildren\": false,\r\n  \"hasChildren\": false,\r\n  \"nodeType\": \"Container\",\r\n  \"DistinguishedName\": \"OU=API,DC=groupid,DC=lab\",\r\n  \"IdFromIdentityStore\": \"efc6ad49-9091-47f4-91f0-0e033177e87e\",\r\n  \"DisplayName\": \"API\",\r\n  \"isSelected\": true,\r\n  \"isFocused\": true\r\n}",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 181,
                    "key": "Destination.ShouldIncludeSubTree",
                    "value": "True",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 182,
                    "key": "Destination.Container",
                    "value": "OU=API,DC=groupid,DC=lab",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 183,
                    "key": "Destination.ScriptingLanguage",
                    "value": "0",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 184,
                    "key": "Destination.ExposedScriptCode",
                    "value": "Option Strict Off\r\n\r\nImports System\r\nImports System.Text\r\nImports System.Text.RegularExpressions\r\nImports System.IO\r\nImports System.Math\r\nImports Microsoft.VisualBasic\r\nImports Imanami.DataSyncServices.Scripting\r\n\r\nModule ImanamiExposedCode\r\n\r\n#Region \"Imanami Generated Code\"\r\n'<--- PowerTool Instance Definitions --->\t\r\n#End Region\r\n\r\n#Region \" User-definable code \"\r\n    Sub DTM_Startup(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.Startup\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_BuildSourceQuery(ByVal dtmsource As Object, ByVal args As QueryEventArgs) Handles DTM.BuildSourceQuery\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowStarting(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.RowStarting\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n\r\n    Sub DTM_BuildDestinationQuery(ByVal dtmsource As Object, ByVal args As QueryEventArgs) Handles DTM.BuildDestinationQuery\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowChanging(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowChanging\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowChanged(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowChanged\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowAdding(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowAdding\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowAdded(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowAdded\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowDeleting(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowDeleting\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowDeleted(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowDeleted\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFinishing(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFinishing\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFinished(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFinished\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFailed(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFailed\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_Shutdown(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.Shutdown\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n#End Region\r\n\r\nend Module ' ImanamiExposedCode\r\n",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 185,
                    "key": "IsNotificationEnabled",
                    "value": "False",
                    "dataType": "System.Boolean",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 186,
                    "key": "ScheduledTask",
                    "value": "",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 187,
                    "key": "SmartGroupScheduleTask",
                    "value": "",
                    "dataType": "System.String",
                    "objectType": null
                }
            ],
            "delimiterSchema": null,
            "sourceSchema": null,
            "destinationSchema": null,
            "hasAccess": false
        }
    ],
    "totalJobs": 0,
    "hasAccess": false
}
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": 7,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Synchronize Jobs APIs](#synchronize-jobs-apis)

## Create a User

This API creates a user in the identity store specified in the endpoint URL. Provide mandatory
information for the to be created user in the request syntax such as container in which user will be
created, given name, display name and so on.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users

## HTTP Methods

POST

#### Sample Request Syntax

```
{
  "Container": "OU=Users,DC=demo,DC=local",
  "Attributes": {
    "attributesCollection": {
      "givenName": [
        {
          "value": "Demo",
          "action": 0
        }
      ],
      "displayName": [
        {
          "value": "DemoUser1",
          "action": 0
        }
      ],
      "sn": [
        {
          "value": "User1",
          "action": 0
        }
      ],
      "samAccountName": [
        {
          "value": "DemoUser1",
          "action": 0
        }
      ],
      "userPrincipalName": [
        {
          "value": "DemoUser1@demo.local",
          "action": 0
        }
      ],
      "mail": [
        {
          "value": "DemoUser1@demo.local",
          "action": 0
        }
      ],
      "proxyAddresses": [
        {
          "value": "SMTP:DemoUser1@demo.local",
          "action": 0
        }
      ],
      "CN": [
        {
          "value": "DemoUser1",
          "action": 0
        }
      ],
      "objectClass": [
        {
          "value": "user",
          "action": 0
        }
      ]
    }
  },
  "IdentityStoreID": "2"
}
```

#### Sample Response Syntax

```
{
    "currentDirectoryServer": "SAMSUNG-DC.askari.local",
    "exceptionMessagesAttributeWise": null,
    "data": "2c49fc27-dbe8-4c86-9c9e-f1a52b9d95f8",
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

See Also

- Common Errors
- [User APIs](#user-apis)
- Group APIs

## Delete A User

Using this API, you can delete a single user.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}

## HTTP Method

DELETE

#### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": "",
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

See Also

- Common Errors
- [User APIs](#user-apis)
- Group APIs

## Delete Users

This API deletes multiple users from the identity store given in the endpoint URL.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users

## HTTP Method

DELETE

#### Sample Request Syntax

```
[
  "4ecb2fea-bf6a-412b-8df4-b72691904cc4",
  "c50c2235-00fa-4069-8f0d-f69bf48d7ca6"
]
```

#### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": "",
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": "",
            "identityStoreObject": null,
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": null,
            "status": 0
        },
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": "",
            "identityStoreObject": null,
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": null,
            "status": 0
        }
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

See Also

- Common Errors
- [User APIs](#user-apis)
- Group APIs

## Get All Groups

Use this API to retrieve all groups in the directory for the specified user in the endpoint.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/All?sortOrder=1&pageNo=1&pageSize=2&displayNestedOwnership=true&displayAdditionalGroups=true&calculateTotal=true&searchMode=0

## HTTP Method

GET

#### Sample Request Syntax

```
{
  "attributesToLoad": [
    "displayName"
  ]
}
```

#### Sample Response Syntax

```
{
  "total": 1896,
  "data": [
    {
      "attributesBusinessObject": {
        "attributesCollection": {
          "container": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "CN=Builtin,DC=demo,DC=local",
              "identityStoreId": 0
            }
          ],
          "displayName": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "Administrators",
              "identityStoreId": 0
            }
          ],
          "objectClass": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "group",
              "identityStoreId": 0
            }
          ],
          "name": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "Administrators",
              "identityStoreId": 0
            }
          ],
          "CN": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "Administrators",
              "identityStoreId": 0
            }
          ],
          "objectCategory": [
          ]
        },
        "type": null,
        "filePermissionCollection": {
        }
      },
      "objectIdFromIdentityStore": "6791c6ed-3e1b-4516-9c67-c72b64f6beeb",
      "elasticHitScore": 1.0,
      "objectDisplayName": "Administrators",
      "stopNotification": false,
      "objectName": null,
      "identityStore": null,
      "identityStoreId": 2,
      "objectType": "group"
    },
    {
      "attributesBusinessObject": {
        "attributesCollection": {
          "container": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "CN=Builtin,DC=demo,DC=local",
              "identityStoreId": 0
            }
          ],
          "displayName": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "Users",
              "identityStoreId": 0
            }
          ],
          "objectClass": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "group",
              "identityStoreId": 0
            }
          ],
          "name": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "Users",
              "identityStoreId": 0
            }
          ],
          "CN": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "Users",
              "identityStoreId": 0
            }
          ],
          "objectCategory": [
          ]
        },
        "type": null,
        "filePermissionCollection": {
        }
      },
      "objectIdFromIdentityStore": "9480dd41-384e-4bf5-a9f5-98866c49142f",
      "elasticHitScore": 1.0,
      "objectDisplayName": "Users",
      "stopNotification": false,
      "objectName": null,
      "identityStore": null,
      "identityStoreId": 2,
      "objectType": "group"
    }
  ]
}
```

See Also

- Common Errors
- [User APIs](#user-apis)
- Group APIs

## Get My Dynasties

Use this API to retrieve the dynasties of the authenticated user.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/Dynasties?sortOrder=1&pageNo=1&pageSize=2&displayNestedOwnership=true&displayAdditionalGroups=true&calculateTotal=true&searchMode=0

## HTTP Method

GET

#### Sample Request Syntax

```
{
  "attributesToLoad": [
    "displayName"
  ]
}
```

#### Sample Response Syntax

```
{
  "total": 1,
  "data": [
    {
      "attributesBusinessObject": {
        "attributesCollection": {
          "container": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "OU=Groups,DC=demo,DC=local",
              "identityStoreId": 0
            }
          ],
          "displayName": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "DemoDynasty1",
              "identityStoreId": 0
            }
          ],
          "objectClass": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "group",
              "identityStoreId": 0
            }
          ],
          "name": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "DemoDynasty1",
              "identityStoreId": 0
            }
          ],
          "CN": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "DemoDynasty1",
              "identityStoreId": 0
            }
          ],
          "objectCategory": [
          ]
        },
        "type": null,
        "filePermissionCollection": {
        }
      },
      "objectIdFromIdentityStore": "1df856b1-1511-4167-be59-5b7b9680d6c8",
      "elasticHitScore": 1.0,
      "objectDisplayName": "DemoDynasty1",
      "stopNotification": false,
      "objectName": null,
      "identityStore": null,
      "identityStoreId": 2,
      "objectType": "group"
    }
  ]
}
```

See Also

- Common Errors
- [User APIs](#user-apis)
- Group APIs

## Get My Groups

The Get My Groups API retrieves groups of the authenticated user.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups?sortOrder=1&pageNo=1&pageSize=2&displayNestedOwnership=false&displayAdditionalGroups=false&calculateTotal=true&searchMode=0&isManagedBy=false

## HTTP Method

GET

#### Sample Request Syntax

```
{
  "attributesToLoad": [
    "displayName"
  ]
}
```

#### Sample Response Syntax

```
{
  "total": 1305,
  "data": [
    {
      "attributesBusinessObject": {
        "attributesCollection": {
          "container": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "OU=Groups,DC=demo,DC=local",
              "identityStoreId": 0
            }
          ],
          "displayName": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "demogroup1",
              "identityStoreId": 0
            }
          ],
          "objectClass": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "group",
              "identityStoreId": 0
            }
          ],
          "name": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "demogroup1",
              "identityStoreId": 0
            }
          ],
          "CN": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "demogroup1",
              "identityStoreId": 0
            }
          ],
          "objectCategory": [
          ]
        },
        "type": null,
        "filePermissionCollection": {
        }
      },
      "objectIdFromIdentityStore": "9ff16022-6669-44dc-a330-e0cc888a639e",
      "elasticHitScore": 1.0,
      "objectDisplayName": "demogroup1",
      "stopNotification": false,
      "objectName": null,
      "identityStore": null,
      "identityStoreId": 2,
      "objectType": "group"
    },
    {
      "attributesBusinessObject": {
        "attributesCollection": {
          "container": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "OU=Groups,DC=demo,DC=local",
              "identityStoreId": 0
            }
          ],
          "displayName": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "demogroup2",
              "identityStoreId": 0
            }
          ],
          "objectClass": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "group",
              "identityStoreId": 0
            }
          ],
          "name": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "demogroup2",
              "identityStoreId": 0
            }
          ],
          "CN": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "demogroup2",
              "identityStoreId": 0
            }
          ],
          "objectCategory": [
          ]
        },
        "type": null,
        "filePermissionCollection": {
        }
      },
      "objectIdFromIdentityStore": "1f3b65f6-6851-4504-a4d3-97b461eb3db5",
      "elasticHitScore": 1.0,
      "objectDisplayName": "demogroup2",
      "stopNotification": false,
      "objectName": null,
      "identityStore": null,
      "identityStoreId": 2,
      "objectType": "group"
    }
  ]
}
```

See Also

- Common Errors
- [User APIs](#user-apis)
- Group APIs

## Get My Groups Count

This API retrieves the number of groups of the authenticated user.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/count?sortOrder=1&pageNo=1&pageSize=2&displayNestedOwnership=false&displayAdditionalGroups=false&calculateTotal=true&searchMode=0&isManagedBy=false

## HTTP Method

GET

#### Sample Request Syntax

```
{
  "includeAdditionalOwnershipGroups": true,
  "includeNestedOwnershipGroups": true
}
```

#### Sample Response Syntax

```
{
    "count": 1305
}
```

See Also

- Common Errors
- [User APIs](#user-apis)
- Group APIs

## Get My Membership

Use this API to retrieve membership information of the authenticated user.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/Membership?sortOrder=1&pageNo=1&pageSize=8&displayAdditionalGroups=true&calculateTotal=true&searchMode=0

## HTTP Method

GET

#### Sample Request Syntax

```
{
  "attributesToLoad": [
    "displayName"
  ]
}
```

#### Sample Response Syntax

```
{
  "total": 32,
  "data": [
    {
      "attributesBusinessObject": {
        "attributesCollection": {
          "container": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "CN=Builtin,DC=demo,DC=local",
              "identityStoreId": 0
            }
          ],
          "displayName": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "Administrators",
              "identityStoreId": 0
            }
          ],
          "objectClass": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "group",
              "identityStoreId": 0
            }
          ],
          "name": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "Administrators",
              "identityStoreId": 0
            }
          ],
          "CN": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "Administrators",
              "identityStoreId": 0
            }
          ],
          "objectCategory": [
          ]
        },
        "type": null,
        "filePermissionCollection": {
        }
      },
      "objectIdFromIdentityStore": "6791c6ed-3e1b-4516-9c67-c72b64f6beeb",
      "elasticHitScore": 1.0,
      "objectDisplayName": "Administrators",
      "stopNotification": false,
      "objectName": null,
      "identityStore": null,
      "identityStoreId": 2,
      "objectType": "group"
    },
    {
      "attributesBusinessObject": {
        "attributesCollection": {
          "container": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "CN=Users,DC=demo,DC=local",
              "identityStoreId": 0
            }
          ],
          "displayName": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "Schema Admins",
              "identityStoreId": 0
            }
          ],
          "objectClass": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "group",
              "identityStoreId": 0
            }
          ],
          "name": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "Schema Admins",
              "identityStoreId": 0
            }
          ],
          "CN": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "Schema Admins",
              "identityStoreId": 0
            }
          ],
          "objectCategory": [
          ]
        },
        "type": null,
        "filePermissionCollection": {
        }
      },
      "objectIdFromIdentityStore": "51d667dd-6c81-41a3-af8a-5ab6339832a0",
      "elasticHitScore": 1.0,
      "objectDisplayName": "Schema Admins",
      "stopNotification": false,
      "objectName": null,
      "identityStore": null,
      "identityStoreId": 2,
      "objectType": "group"
    }
  ]
}
```

See Also

- Common Errors
- [User APIs](#user-apis)
- Group APIs

## Get My Membership Count

Using this API, the authenticated user can get the number of groups the user is a member of.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/Membership/count?sortOrder=1&pageNo=1&pageSize=8&displayAdditionalGroups=true&calculateTotal=true&searchMode=0

## HTTP Method

GET

#### Sample Request Syntax

```
{
  "includeAdditionalOwnershipGroups": true,
  "includeNestedOwnershipGroups": true
}
```

#### Sample Response Syntax

```
{
    "count": 32
}
```

See Also

- Common Errors
- [User APIs](#user-apis)
- Group APIs

## Get My Smart Groups

Using this API, information about the authentiacated user's Smart Groups can be retrieved.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/SmartGroups?sortOrder=1&pageNo=1&pageSize=2&displayNestedOwnership=true&displayAdditionalGroups=true&calculateTotal=true&searchMode=0

## HTTP Method

GET

#### Sample Request Syntax

```
{
  "attributesToLoad": [
    "displayName"
  ]
}
```

#### Sample Response Syntax

```
{
  "total": 2,
  "data": [
    {
      "attributesBusinessObject": {
        "attributesCollection": {
          "container": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "OU=Groups,DC=demo,DC=local",
              "identityStoreId": 0
            }
          ],
          "displayName": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "demogroup2",
              "identityStoreId": 0
            }
          ],
          "objectClass": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "group",
              "identityStoreId": 0
            }
          ],
          "name": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "demogroup2",
              "identityStoreId": 0
            }
          ],
          "CN": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "demogroup2",
              "identityStoreId": 0
            }
          ],
          "objectCategory": [
          ]
        },
        "type": null,
        "filePermissionCollection": {
        }
      },
      "objectIdFromIdentityStore": "bb32b778-6b3e-4ba2-987b-c830605d4e60",
      "elasticHitScore": 1.0,
      "objectDisplayName": "demogroup2",
      "stopNotification": false,
      "objectName": null,
      "identityStore": null,
      "identityStoreId": 2,
      "objectType": "group"
    },
    {
      "attributesBusinessObject": {
        "attributesCollection": {
          "container": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "OU=Groups,DC=demo,DC=local",
              "identityStoreId": 0
            }
          ],
          "displayName": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "demogroup1",
              "identityStoreId": 0
            }
          ],
          "objectClass": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "group",
              "identityStoreId": 0
            }
          ],
          "name": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "demogroup1",
              "identityStoreId": 0
            }
          ],
          "CN": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "demogroup1",
              "identityStoreId": 0
            }
          ],
          "objectCategory": [
          ]
        },
        "type": null,
        "filePermissionCollection": {
        }
      },
      "objectIdFromIdentityStore": "11e353c0-4073-417a-ba7d-ff863b97d667",
      "elasticHitScore": 1.0,
      "objectDisplayName": "demogroup1",
      "stopNotification": false,
      "objectName": null,
      "identityStore": null,
      "identityStoreId": 2,
      "objectType": "group"
    }
  ]
}
```

See Also

- Common Errors
- [User APIs](#user-apis)
- Group APIs

## Get a User

Use this API to get information of a single user.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Users/{userIdentity}

## HTTP Method

GET

#### Sample Response Syntax

```
{
  "country": null,
  "passwordNeverExpires": null,
  "attributesBusinessObject": {
    "attributesCollection": {
      "proxyAddresses": [
        {
          "attributeCollection": {
          },
          "action": 0,
          "dn": null,
          "value": "SMTP:demouser1@demo.local",
          "identityStoreId": 0
        }
      ],
      "container": [
        {
          "attributeCollection": {
          },
          "action": 0,
          "dn": null,
          "value": "CN=Users,DC=demo,DC=local",
          "identityStoreId": 0
        }
      ],
      "mail": [
        {
          "attributeCollection": {
          },
          "action": 0,
          "dn": null,
          "value": "demouser1@demo.local",
          "identityStoreId": 0
        }
      ],
      "displayName": [
        {
          "attributeCollection": {
          },
          "action": 0,
          "dn": null,
          "value": "demo,demouser1",
          "identityStoreId": 0
        }
      ],
      "objectClass": [
        {
          "attributeCollection": {
          },
          "action": 0,
          "dn": null,
          "value": "user",
          "identityStoreId": 0
        }
      ],
      "name": [
        {
          "attributeCollection": {
          },
          "action": 0,
          "dn": null,
          "value": "demouser1 demo",
          "identityStoreId": 0
        }
      ],
      "CN": [
        {
          "attributeCollection": {
          },
          "action": 0,
          "dn": null,
          "value": "demouser1 demo",
          "identityStoreId": 0
        }
      ],
      "userPrincipalName": [
        {
          "attributeCollection": {
          },
          "action": 0,
          "dn": null,
          "value": "demouser1@demo.local",
          "identityStoreId": 0
        }
      ],
      "objectCategory": [
      ]
    },
    "type": null,
    "filePermissionCollection": {
    }
  },
  "postalCode": null,
  "samAccountName": null,
  "office": null,
  "serverSetting": null,
  "logonName": null,
  "identityStoreName": null,
  "objectType": "user",
  "password": null,
  "homeDataBase": null,
  "familyName": null,
  "action": 0,
  "state": null,
  "fax": null,
  "identityStore": null,
  "upnSuffix": null,
  "primaryEmail": null,
  "initials": null,
  "telephone": null,
  "linkedIdentities": null,
  "firstName": null,
  "objectDisplayName": "demo,demouser1",
  "stopNotification": false,
  "objectSid": null,
  "lastName": null,
  "preferredLanguage": null,
  "objectIdFromIdentityStore": "a79934a7-c6a0-4a1c-8860-f9aeb4788e98",
  "city": null,
  "displayName": "demo,demouser1",
  "passwordNoChange": null,
  "roles": null,
  "title": null,
  "alias": null,
  "company": null,
  "department": null,
  "applicationName": null,
  "accountLocked": false,
  "passwordLastSet": null,
  "userClassName": null,
  "storeType": null,
  "mobile": null,
  "passwordForceChange": false,
  "streetAddress": null,
  "elasticHitScore": 0.0,
  "accountDisabled": null,
  "objectName": null,
  "usageLocation": null,
  "dc": null,
  "identityStoreId": 2
}
```

See Also

- Common Errors
- [User APIs](#user-apis)
- Group APIs

## Get Users

Use this API to retrieve information of multiple users from the specified identity store.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Users

## HTTP Method

GET

#### Sample Request Syntax

```
{
  "identityStoreID": 2,
  "objectIdentities": [
    "a79934a7-c6a0-4a1c-8860-f9aeb4788e98",
    "3130b400-45bf-4ed2-b4bd-a461fe4ae949"
  ],
  "addAndResolveAdditionalDirectReports": true,
  "attributesToLoad": [
    "displayName",
    "department"
  ]
}
```

#### Sample Response Syntax

```
[
    {
        "country": null,
        "passwordNeverExpires": null,
        "attributesBusinessObject": {
            "attributesCollection": {
                "container": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "OU=Users,DC=demo,DC=local",
                        "identityStoreId": 0
                    }
                ],
                "displayName": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "AbbeyCrawford",
                        "identityStoreId": 0
                    }
                ],
                "objectClass": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "user",
                        "identityStoreId": 0
                    }
                ],
                "name": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "AbbeyCrawford",
                        "identityStoreId": 0
                    }
                ],
                "CN": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "AbbeyCrawford",
                        "identityStoreId": 0
                    }
                ],
                "department": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "Engineering",
                        "identityStoreId": 0
                    }
                ],
                "objectCategory": [
                ]
            },
            "type": null,
            "filePermissionCollection": {
            }
        },
        "postalCode": null,
        "samAccountName": null,
        "office": null,
        "serverSetting": null,
        "logonName": null,
        "identityStoreName": null,
        "objectType": "user",
        "password": null,
        "homeDataBase": null,
        "familyName": null,
        "action": 0,
        "state": null,
        "fax": null,
        "identityStore": null,
        "upnSuffix": null,
        "primaryEmail": null,
        "initials": null,
        "telephone": null,
        "linkedIdentities": null,
        "firstName": null,
        "objectDisplayName": "AbbeyCrawford",
        "stopNotification": false,
        "objectSid": null,
        "lastName": null,
        "preferredLanguage": null,
        "objectIdFromIdentityStore": "3130b400-45bf-4ed2-b4bd-a461fe4ae949",
        "city": null,
        "displayName": "AbbeyCrawford",
        "passwordNoChange": null,
        "roles": null,
        "title": null,
        "useras": null,
        "company": null,
        "department": null,
        "applicationName": null,
        "accountLocked": false,
        "passwordLastSet": null,
        "userClassName": null,
        "storeType": null,
        "mobile": null,
        "passwordForceChange": false,
        "streetAddress": null,
        "elasticHitScore": 0.0,
        "accountDisabled": null,
        "objectName": null,
        "usageLocation": null,
        "dc": null,
        "identityStoreId": 2
    },
    {
        "country": null,
        "passwordNeverExpires": null,
        "attributesBusinessObject": {
            "attributesCollection": {
                "container": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "CN=Users,DC=demo,DC=local",
                        "identityStoreId": 0
                    }
                ],
                "displayName": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "user,demo",
                        "identityStoreId": 0
                    }
                ],
                "objectClass": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "user",
                        "identityStoreId": 0
                    }
                ],
                "name": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "demo user",
                        "identityStoreId": 0
                    }
                ],
                "CN": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "demo user",
                        "identityStoreId": 0
                    }
                ],
                "department": [
                    {
                        "attributeCollection": {
                        },
                        "action": 0,
                        "dn": null,
                        "value": "QA",
                        "identityStoreId": 0
                    }
                ],
                "objectCategory": [
                ]
            },
            "type": null,
            "filePermissionCollection": {
            }
        },
        "postalCode": null,
        "samAccountName": null,
        "office": null,
        "serverSetting": null,
        "logonName": null,
        "identityStoreName": null,
        "objectType": "user",
        "password": null,
        "homeDataBase": null,
        "familyName": null,
        "action": 0,
        "state": null,
        "fax": null,
        "identityStore": null,
        "upnSuffix": null,
        "primaryEmail": null,
        "initials": null,
        "telephone": null,
        "linkedIdentities": null,
        "firstName": null,
        "objectDisplayName": "user,demo",
        "stopNotification": false,
        "objectSid": null,
        "lastName": null,
        "preferredLanguage": null,
        "objectIdFromIdentityStore": "a79934a7-c6a0-4a1c-8860-f9aeb4788e98",
        "city": null,
        "displayName": "user,demo",
        "passwordNoChange": null,
        "roles": null,
        "title": null,
        "alias": null,
        "company": null,
        "department": null,
        "applicationName": null,
        "accountLocked": false,
        "passwordLastSet": null,
        "userClassName": null,
        "storeType": null,
        "mobile": null,
        "passwordForceChange": false,
        "streetAddress": null,
        "elasticHitScore": 0.0,
        "accountDisabled": null,
        "objectName": null,
        "usageLocation": null,
        "dc": null,
        "identityStoreId": 2
    }
]
```

See Also

- Common Errors
- [User APIs](#user-apis)
- Group APIs

## Update a User

This API updates a user's information in the specified identity store.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users

## HTTP Method

PATCH

#### Sample Request Syntax

```
{
  "AttributesToUpdate": {
    "AttributesCollection": {
      "department": [
        {
          "Value": "Engineering",
          "Action": 0
        }
      ]
    }
  },
  "ObjectIdentity": "a79934a7-c6a0-4a1c-8860-f9aeb4788e98",
  "IdentityStoreID": "2"
}
```

#### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": "",
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": "",
            "identityStoreObject": null,
            "name": "department",
            "errorCode": null,
            "details": [
            ],
            "type": 8,
            "message": null,
            "status": 0
        }
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

See Also

- Common Errors
- [User APIs](#user-apis)
- Group APIs

## User APIs

GroupID provides the following APIs to perform user-specific functions:

- [Create a User](#create-a-user)
- [Delete a User](#delete-a-user)
- [Delete Users](#delete-users)
- [Get All Groups](#get-all-groups)
- [Get My Dynasties](#get-my-dynasties)
- [Get My Expired Groups](/docs/directorymanager/11.0/user-guide/group-management/group-lifecycle.md)
- [Get My Expiring Groups](/docs/directorymanager/11.0/user-guide/group-management/group-lifecycle.md)
- [Get My Expiring Groups Count](/docs/directorymanager/11.0/user-guide/group-management/group-lifecycle.md)
- [Get My Groups](#get-my-groups)
- [Get My Groups Count](#get-my-groups-count)
- [Get My Membership](#get-my-membership)
- [Get My Membership Count](#get-my-membership-count)
- [Get My Smart Groups](#get-my-smart-groups)
- [Get a User](#get-a-user)
- [Get Users](#get-users)

See Also

- Common Errors
- Get Token
- Contact APIs
- Data Source APIs
- Group APIs
- [Logs APIs](#logs-apis)
- [Synchronize Jobs APIs](#synchronize-jobs-apis)
- Workflow APIs

## All Workflow Routes

Use this API to get information about all workflow routes, system defined and user defined, in a
specified identity store.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Routes

## HTTP Methods

GET

#### Sample Response Syntax

```
[
    {
        "workflowRouteId": 2,
        "identityStoreID": 2,
        "name": "Workflow to Reset Password",
        "description": "Apply workflow when a user tries to reset its password.",
        "isEnabled": false,
        "type": 2,
        "typeDTO": null,
        "event": 12,
        "eventDTO": null,
        "routeFieldDTOList": [],
        "routeFilterDTOList": [],
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 2,
                "approver": "ManagerAndAdditionalManager",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 2,
                "approverType": 4,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 2,
                "objectTypeId": 2,
                "workflowRouteId": 2,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    },
    {
        "workflowRouteId": 3,
        "identityStoreID": 2,
        "name": "Workflow to Change Group Expiration Policy",
        "description": "Apply workflow when Group Expiration Policy is changed.",
        "isEnabled": false,
        "type": 2,
        "typeDTO": null,
        "event": 7,
        "eventDTO": null,
        "routeFieldDTOList": [],
        "routeFilterDTOList": [],
        "routeApproverDTOList": [],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 3,
                "objectTypeId": 1,
                "workflowRouteId": 3,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    },
    {
        "workflowRouteId": 4,
        "identityStoreID": 2,
        "name": "Workflow to Nest a Group",
        "description": "Apply workflow when groups are added into the membership of other groups.",
        "isEnabled": true,
        "type": 2,
        "typeDTO": null,
        "event": 6,
        "eventDTO": null,
        "routeFieldDTOList": [
            {
                "workflowRouteFieldId": 1,
                "field": "member",
                "workflowRouteId": 4
            }
        ],
        "routeFilterDTOList": [],
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 3,
                "approver": "OwnerAndAdditionalOwner",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 4,
                "approverType": 5,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 4,
                "objectTypeId": 1,
                "workflowRouteId": 4,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    },
    {
        "workflowRouteId": 5,
        "identityStoreID": 2,
        "name": "Workflow to Join a Group",
        "description": "Apply workflow when a user joins a semi-private group.",
        "isEnabled": true,
        "type": 2,
        "typeDTO": null,
        "event": 4,
        "eventDTO": null,
        "routeFieldDTOList": [
            {
                "workflowRouteFieldId": 2,
                "field": "member",
                "workflowRouteId": 5
            }
        ],
        "routeFilterDTOList": [],
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 4,
                "approver": "OwnerAndAdditionalOwner",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 5,
                "approverType": 5,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 5,
                "objectTypeId": 1,
                "workflowRouteId": 5,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    },
    {
        "workflowRouteId": 6,
        "identityStoreID": 2,
        "name": "Workflow to Leave a Group",
        "description": "Apply workflow when a user leaves a semi-private group.",
        "isEnabled": true,
        "type": 2,
        "typeDTO": null,
        "event": 5,
        "eventDTO": null,
        "routeFieldDTOList": [
            {
                "workflowRouteFieldId": 3,
                "field": "member",
                "workflowRouteId": 6
            }
        ],
        "routeFilterDTOList": [],
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 5,
                "approver": "OwnerAndAdditionalOwner",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 6,
                "approverType": 5,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 6,
                "objectTypeId": 1,
                "workflowRouteId": 6,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    },
    {
        "workflowRouteId": 7,
        "identityStoreID": 2,
        "name": "Workflow to Transfer a User",
        "description": "Apply workflow when a manager transfer direct report.",
        "isEnabled": true,
        "type": 2,
        "typeDTO": null,
        "event": 10,
        "eventDTO": null,
        "routeFieldDTOList": [
            {
                "workflowRouteFieldId": 4,
                "field": "directReports",
                "workflowRouteId": 7
            }
        ],
        "routeFilterDTOList": [],
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 6,
                "approver": "NewManager",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 7,
                "approverType": 7,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 7,
                "objectTypeId": 2,
                "workflowRouteId": 7,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    },
    {
        "workflowRouteId": 8,
        "identityStoreID": 2,
        "name": "Workflow to Terminate a User",
        "description": "Apply workflow when a manager terminate direct report.",
        "isEnabled": false,
        "type": 2,
        "typeDTO": null,
        "event": 11,
        "eventDTO": null,
        "routeFieldDTOList": [
            {
                "workflowRouteFieldId": 5,
                "field": "directReports",
                "workflowRouteId": 8
            }
        ],
        "routeFilterDTOList": [],
        "routeApproverDTOList": [],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 8,
                "objectTypeId": 2,
                "workflowRouteId": 8,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    },
    {
        "workflowRouteId": 9,
        "identityStoreID": 2,
        "name": "Workflow to Change manager",
        "description": "Apply workflow when a user tries to change manager.",
        "isEnabled": true,
        "type": 2,
        "typeDTO": null,
        "event": 2,
        "eventDTO": null,
        "routeFieldDTOList": [
            {
                "workflowRouteFieldId": 6,
                "field": "manager",
                "workflowRouteId": 9
            },
            {
                "workflowRouteFieldId": 7,
                "field": "XAdditionalManager",
                "workflowRouteId": 9
            }
        ],
        "routeFilterDTOList": [],
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 7,
                "approver": "ManagerAndAdditionalManager",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 9,
                "approverType": 4,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 9,
                "objectTypeId": 2,
                "workflowRouteId": 9,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    },
    {
        "workflowRouteId": 10,
        "identityStoreID": 2,
        "name": "UserDefinied",
        "description": "UserDefinied",
        "isEnabled": true,
        "type": 1,
        "typeDTO": null,
        "event": 2,
        "eventDTO": null,
        "routeFieldDTOList": [
            {
                "workflowRouteFieldId": 8,
                "field": "department",
                "workflowRouteId": 10
            }
        ],
        "routeFilterDTOList": [
            {
                "workflowRouteFilterId": 1,
                "name": "department",
                "operator": "Present",
                "value": "",
                "workflowRouteId": 10
            }
        ],
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 9,
                "approver": "80ffbf0d-142c-4822-b843-1840bf50c05a",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 10,
                "approverType": 0,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 10,
                "objectTypeId": 2,
                "workflowRouteId": 10,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": true,
        "portalUrl": "https://gidauto:4443/GroupIDPortal",
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    }
] 
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Workflow APIs](#workflow-apis)

## Approve a Request

Using this API you can approve a specified workflow request.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Approve

## HTTP Methods

POST

#### Sample Request Syntax

```
{
    "workflowRequestID": 3
}
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 0,
    "status": 0,
    "message": null,
    "data": "",
    "identityStoreObject": null,
    "details": [
        {
            "name": "department",
            "type": 8,
            "status": 0,
            "message": null,
            "data": "",
            "identityStoreObject": null,
            "details": [],
            "currentDirectoryServer": null,
            "errorCode": null,
            "exceptionMessagesAttributeWise": null,
            "isResyncAble": true
        }
    ],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Workflow APIs](#workflow-apis)

## Configure Power Automate

You can link an identity store in GroupID to Power Automate to trigger a flow from GroupID. Use this
API to connect an identity tore to Power Automate.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/MsFlow/Settings

## HTTP Methods

POST

#### Sample Request Syntax

```
{
    "msFlowID": 0,
    "msFlowUserID": "69d41d70-9b80-492d-aee8-56458db65582",
    "groupIDServiceUrl": "https://powerautomate-netwrix1.msappproxy.net/directorymanagerdataservice",
    "identityStoreID": 2,
    "isAuthenticated": true,
    "organizationalCode": "Netwrix-US",
    "region": "US",
    "tenantID": "69d41d70-9b80-492d-aee8-56458db65582"
}
```

#### Sample Response Syntax

```
{
    "msFlowID": 3,
    "msFlowUserID": "69d41d70-9b80-492d-aee8-56458db65582",
    "groupIDServiceUrl": "https://powerautomate-netwrix1.msappproxy.net/directorymanagerdataservice",
    "identityStoreID": 2,
    "isAuthenticated": true,
    "organizationalCode": "Netwrix-US",
    "region": "US",
    "tenantID": "69d41d70-9b80-492d-aee8-56458db65582"
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Workflow APIs](#workflow-apis)

## Create a Route

Use this API to create a new workflow route. To create a workflow, you have to specify the
following:

- name - name of the workflow.
- Description - description of the workflow.
- Object - the object(s) - user, contact, group - to apply the workflow to.
- Event - a create, edit, or delete event that, when performed for the object(s), would trigger the
  workflow.
- Field - one or more fields (attributes) that the workflow would apply to. When the values of these
  attributes change for the object, an approval request is triggered.
- Filter - a condition that prevents the workflow from triggering, even when the object, event, and
  field criterion is met.
- Approver - the object to send the workflow request for approval.

See the
[Create a New Workflow](/docs/directorymanager/11.0/user-guide/workflows/approval-workflows.md#create-a-new-workflow)
section of the
[Implement Workflows](/docs/directorymanager/11.0/user-guide/workflows/approval-workflows.md) topic
for additional information.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Routes

## HTTP Methods

POST

#### Sample Request Syntax

```
{
    "items": [
        {
            "workflowRouteId": 0,
            "identityStoreID": 0,
            "name": "API_Definied",
            "description": "API_Definied",
            "isEnabled": true,
            "type": 1,
            "typeDTO": null,
            "event": 2,
            "eventDTO": null,
            "routeFieldDTOList": [
                {
                    "workflowRouteFieldId": 0,
                    "field": "department",
                    "workflowRouteId": 0
                }
            ],
            "routeFilterDTOList": [
                {
                    "workflowRouteFilterId": 0,
                    "name": "department",
                    "operator": "Present",
                    "value": "",
                    "workflowRouteId": 0
                }
            ],
            "routeApproverDTOList": [
                {
                    "workflowRouteApproverId": 0,
                    "approver": "80ffbf0d-142c-4822-b843-1840bf50c05a",
                    "approverIdentityStoreID": 2,
                    "workflowRouteId": 0,
                    "approverType": 0,
                    "approverName": null
                }
            ],
            "routeObjectDTOList": [
                {
                    "workflowRouteObjectId": 0,
                    "objectTypeId": 2,
                    "workflowRouteId": 0,
                    "objectTypeDTO": {
                        "objectTypeId": 0,
                        "name": null
                    }
                }
            ],
            "enableEmailApproval": false,
            "disableApproverAcceleration": true,
            "portalUrl": "https://gidauto:4443/GroupIDPortal",
            "msFlowRequestUrl": null,
            "msFlowToken": null,
            "isMsFlowTemplateRouteCreated": false,
            "updateMsFlowToken": false
        }
    ]
}
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 0,
    "status": 0,
    "message": null,
    "data": "",
    "identityStoreObject": null,
    "details": [
        {
            "name": null,
            "type": 0,
            "status": 0,
            "message": null,
            "data": "",
            "identityStoreObject": null,
            "details": [
                {
                    "name": "API_Definied",
                    "type": 5,
                    "status": 0,
                    "message": "",
                    "data": 13,
                    "identityStoreObject": null,
                    "details": [],
                    "currentDirectoryServer": "",
                    "errorCode": "",
                    "exceptionMessagesAttributeWise": null,
                    "isResyncAble": true
                }
            ],
            "currentDirectoryServer": null,
            "errorCode": null,
            "exceptionMessagesAttributeWise": null,
            "isResyncAble": true
        }
    ],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Workflow APIs](#workflow-apis)

## Delete Request Status

Use this API to delete a request which has the specified status for more than specified days. For
example, if a request has approved status and is 60 days older, you can delete such requests using
this API.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Status/{RequestStatus}?RequestsOlderThanInDays=1

## HTTP Methods

DELETE

#### Sample Response Syntax

```
{
    "name": null,
    "type": 0,
    "status": 0,
    "message": null,
    "data": 1,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Workflow APIs](#workflow-apis)

## Delete a Route

You can use this API to delete a user-defined workflow route.

NOTE: You cannot delete a system workflow.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Routes?ids=1

## HTTP Methods

DELETE

#### Sample Response Syntax

```
{
    "name": null,
    "type": 0,
    "status": 0,
    "message": null,
    "data": "",
    "identityStoreObject": null,
    "details": [
        {
            "name": null,
            "type": 0,
            "status": 0,
            "message": null,
            "data": "",
            "identityStoreObject": null,
            "details": [],
            "currentDirectoryServer": null,
            "errorCode": null,
            "exceptionMessagesAttributeWise": null,
            "isResyncAble": true
        }
    ],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Workflow APIs](#workflow-apis)

## Delete a Workflow Request

Delete a workflow request from a specified identity store ID of which is specified in the endpoint
URL.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/{WorkflowRequestID}

## HTTP Methods

DELETE

#### Sample Response Syntax

```
true
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Workflow APIs](#workflow-apis)

## Deny a Request

If you want to deny a workflow request in a specified identity store, you can use this API.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Deny

## HTTP Methods

POST

#### Sample Request Syntax

```
{
    "workflowRequestID": 4,
    "reason": "Denied From API"
}
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 0,
    "status": 0,
    "message": null,
    "data": "",
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Workflow APIs](#workflow-apis)

## Get Approvers

This API provides information about the approver(s) of a workflow request.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Workflows/Approvers

## HTTP Methods

GET

#### Sample Request Syntax

```
{
    "pageIndex": 1,
    "pageSize": 10,
    "filterCriteria": {
        "operator": null,
        "attribute": null,
        "value": null,
        "valueType": 0,
        "valueTypes": [
            0
        ],
        "donotEscapeValue": true,
        "child": [
            {
                "operator": "Contains",
                "attribute": "Route.description",
                "value": "UserDefinied"
            }
        ]
    },
    "getRecent": true,
    "totalFound": 0,
    "sortOrder": "asc",
    "loadDetails": true,
    "workflowRequestID": 8,
    "resolveApprovers": true,
    "excludedApprovers": [
        "string"
    ]
}   
```

#### Sample Response Syntax

```
{
    "total": 1,
    "data": [
        {
            "workflowRequestApproverId": 0,
            "approver": "Jonathan Blackwell",
            "approverIdentityStoreID": 2,
            "workflowRequestId": 0,
            "approverType": 0,
            "approverName": "80ffbf0d-142c-4822-b843-1840bf50c05a",
            "approverClass": 6,
            "approverIdFromIdentityStore": null,
            "isDefaultApprover": false,
            "parentApproverIdentity": ""
        }
    ]
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Workflow APIs](#workflow-apis)

## Get Default Routes

Use this API to retrieve information about GroupID default workflows. These workflows are predefine
in GroupID that trigger when their associated events occur.

See the
[System Workflows](/docs/directorymanager/11.0/user-guide/workflows/approval-workflows.md#system-workflows)
section of the [Workflows](/docs/directorymanager/11.0/user-guide/workflows/approval-workflows.md)
topic for additional information.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Routes/Default

## HTTP Methods

GET

#### Sample Response Syntax

```
[
    {
        "workflowRouteId": 0,
        "identityStoreID": 2,
        "name": "Workflow to Reset Password",
        "description": "Apply workflow when a user tries to reset its password.",
        "isEnabled": false,
        "type": 2,
        "typeDTO": null,
        "event": 12,
        "eventDTO": null,
        "routeFieldDTOList": null,
        "routeFilterDTOList": null,
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 0,
                "approver": "ManagerAndAdditionalManager",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 0,
                "approverType": 4,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 0,
                "objectTypeId": 2,
                "workflowRouteId": 0,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    },
    {
        "workflowRouteId": 0,
        "identityStoreID": 2,
        "name": "Workflow to Change Group Expiration Policy",
        "description": "Apply workflow when Group Expiration Policy is changed.",
        "isEnabled": false,
        "type": 2,
        "typeDTO": null,
        "event": 7,
        "eventDTO": null,
        "routeFieldDTOList": null,
        "routeFilterDTOList": null,
        "routeApproverDTOList": [],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 0,
                "objectTypeId": 1,
                "workflowRouteId": 0,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    },
    {
        "workflowRouteId": 0,
        "identityStoreID": 2,
        "name": "Workflow to Nest a Group",
        "description": "Apply workflow when groups are added into the membership of other groups.",
        "isEnabled": true,
        "type": 2,
        "typeDTO": null,
        "event": 6,
        "eventDTO": null,
        "routeFieldDTOList": [
            {
                "workflowRouteFieldId": 0,
                "field": "member",
                "workflowRouteId": 0
            }
        ],
        "routeFilterDTOList": null,
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 0,
                "approver": "OwnerAndAdditionalOwner",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 0,
                "approverType": 5,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 0,
                "objectTypeId": 1,
                "workflowRouteId": 0,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    },
    {
        "workflowRouteId": 0,
        "identityStoreID": 2,
        "name": "Workflow to Join a Group",
        "description": "Apply workflow when a user joins a semi-private group.",
        "isEnabled": true,
        "type": 2,
        "typeDTO": null,
        "event": 4,
        "eventDTO": null,
        "routeFieldDTOList": [
            {
                "workflowRouteFieldId": 0,
                "field": "member",
                "workflowRouteId": 0
            }
        ],
        "routeFilterDTOList": null,
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 0,
                "approver": "OwnerAndAdditionalOwner",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 0,
                "approverType": 5,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 0,
                "objectTypeId": 1,
                "workflowRouteId": 0,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    },
    {
        "workflowRouteId": 0,
        "identityStoreID": 2,
        "name": "Workflow to Leave a Group",
        "description": "Apply workflow when a user leaves a semi-private group.",
        "isEnabled": true,
        "type": 2,
        "typeDTO": null,
        "event": 5,
        "eventDTO": null,
        "routeFieldDTOList": [
            {
                "workflowRouteFieldId": 0,
                "field": "member",
                "workflowRouteId": 0
            }
        ],
        "routeFilterDTOList": null,
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 0,
                "approver": "OwnerAndAdditionalOwner",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 0,
                "approverType": 5,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 0,
                "objectTypeId": 1,
                "workflowRouteId": 0,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    },
    {
        "workflowRouteId": 0,
        "identityStoreID": 2,
        "name": "Workflow to Transfer a User",
        "description": "Apply workflow when a manager transfer direct report.",
        "isEnabled": true,
        "type": 2,
        "typeDTO": null,
        "event": 10,
        "eventDTO": null,
        "routeFieldDTOList": [
            {
                "workflowRouteFieldId": 0,
                "field": "directReports",
                "workflowRouteId": 0
            }
        ],
        "routeFilterDTOList": null,
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 0,
                "approver": "NewManager",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 0,
                "approverType": 7,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 0,
                "objectTypeId": 2,
                "workflowRouteId": 0,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    },
    {
        "workflowRouteId": 0,
        "identityStoreID": 2,
        "name": "Workflow to Terminate a User",
        "description": "Apply workflow when a manager terminate direct report.",
        "isEnabled": false,
        "type": 2,
        "typeDTO": null,
        "event": 11,
        "eventDTO": null,
        "routeFieldDTOList": [
            {
                "workflowRouteFieldId": 0,
                "field": "directReports",
                "workflowRouteId": 0
            }
        ],
        "routeFilterDTOList": null,
        "routeApproverDTOList": [],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 0,
                "objectTypeId": 2,
                "workflowRouteId": 0,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    },
    {
        "workflowRouteId": 0,
        "identityStoreID": 2,
        "name": "Workflow to Change manager",
        "description": "Apply workflow when a user tries to change manager.",
        "isEnabled": true,
        "type": 2,
        "typeDTO": null,
        "event": 2,
        "eventDTO": null,
        "routeFieldDTOList": [
            {
                "workflowRouteFieldId": 0,
                "field": "manager",
                "workflowRouteId": 0
            },
            {
                "workflowRouteFieldId": 0,
                "field": "XAdditionalManager",
                "workflowRouteId": 0
            }
        ],
        "routeFilterDTOList": null,
        "routeApproverDTOList": [
            {
                "workflowRouteApproverId": 0,
                "approver": "ManagerAndAdditionalManager",
                "approverIdentityStoreID": 2,
                "workflowRouteId": 0,
                "approverType": 4,
                "approverName": null
            }
        ],
        "routeObjectDTOList": [
            {
                "workflowRouteObjectId": 0,
                "objectTypeId": 2,
                "workflowRouteId": 0,
                "objectTypeDTO": null
            }
        ],
        "enableEmailApproval": false,
        "disableApproverAcceleration": false,
        "portalUrl": null,
        "msFlowRequestUrl": null,
        "msFlowToken": null,
        "isMsFlowTemplateRouteCreated": false,
        "updateMsFlowToken": false
    }
]
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Workflow APIs](#workflow-apis)

## Get My Requests

Using this API the logged in user can get information about his/her workflow request(s).

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Workflows/MyRequests

## HTTP Methods

GET

#### Sample Response Syntax

```
[
    {
        "workflowRequestId": 2,
        "legacyRequestId": null,
        "requesterIdentityStoreID": 2,
        "requester": "e4fbe0f3-8b8d-4cd0-8c4f-07c6f12a4743",
        "requesterClass": 6,
        "targetObjectIdentityStoreID": 2,
        "targetObject": "7ea556f0-b5fc-46f9-96d0-7212c2cd831d",
        "targetObjectClass": 6,
        "actualApproverIdentityStoreID": 0,
        "actualApprover": null,
        "createdOn": "2024-05-14T04:07:08.93",
        "workflowRouteId": 10,
        "statusId": 1,
        "objectName": "Usr_Martha Sevy",
        "container": null,
        "workflowStatusDTO": {
            "statusId": 1,
            "description": "Pending"
        },
        "workflowRouteDTO": {
            "workflowRouteId": 10,
            "identityStoreID": 2,
            "name": "UserDefinied",
            "description": "UserDefinied",
            "isEnabled": true,
            "type": 1,
            "typeDTO": null,
            "event": 2,
            "eventDTO": null,
            "routeFieldDTOList": [
                {
                    "workflowRouteFieldId": 8,
                    "field": "department",
                    "workflowRouteId": 10
                }
            ],
            "routeFilterDTOList": [
                {
                    "workflowRouteFilterId": 1,
                    "name": "department",
                    "operator": "Present",
                    "value": "",
                    "workflowRouteId": 10
                }
            ],
            "routeApproverDTOList": [
                {
                    "workflowRouteApproverId": 9,
                    "approver": "80ffbf0d-142c-4822-b843-1840bf50c05a",
                    "approverIdentityStoreID": 2,
                    "workflowRouteId": 10,
                    "approverType": 0,
                    "approverName": null
                }
            ],
            "routeObjectDTOList": [
                {
                    "workflowRouteObjectId": 10,
                    "objectTypeId": 2,
                    "workflowRouteId": 10,
                    "objectTypeDTO": null
                }
            ],
            "enableEmailApproval": false,
            "disableApproverAcceleration": true,
            "portalUrl": "https://gidauto:4443/GroupIDPortal",
            "msFlowRequestUrl": null,
            "msFlowToken": null,
            "isMsFlowTemplateRouteCreated": false,
            "updateMsFlowToken": false
        },
        "requestApproverDTOList": [
            {
                "workflowRequestApproverId": 2,
                "approver": "80ffbf0d-142c-4822-b843-1840bf50c05a",
                "approverIdentityStoreID": 2,
                "workflowRequestId": 2,
                "approverType": 0,
                "approverName": "Jonathan Blackwell",
                "approverClass": 0,
                "approverIdFromIdentityStore": null,
                "isDefaultApprover": false,
                "parentApproverIdentity": ""
            }
        ],
        "fieldDTOList": [
            {
                "fieldId": 2,
                "workflowRequestId": 2,
                "name": "department",
                "value": "QA_test",
                "oldValue": "QA",
                "valueType": 2,
                "fieldValueDTOList": [],
                "oldFieldValueDTOList": [],
                "fieldValueResolved": null,
                "oldFieldValueResolved": null
            }
        ],
        "objectType": 2,
        "statusUpdatedOn": "2024-05-14T00:00:00",
        "reason": null,
        "smartUpdateOption": null,
        "jobId": null,
        "description": null,
        "requesterName": "Administrator",
        "actualApproverName": null,
        "schedule": null,
        "accelerationStatus": 4,
        "currentAccelerationLevel": 0,
        "maxAccelerationLevel": 3,
        "whenAccelerated": "2024-05-14T00:00:00",
        "clientId": "442139c9-dba6-4d2b-8c54-a20babae0b2f",
        "workflowRequestConfigurations": ""
    }
]         
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Workflow APIs](#workflow-apis)

## Get Pending Requests

Use this API to retrieve information about all those requests with pending status provided you have
the required permissions to manage all requests. See the
[Miscellaneous](/docs/directorymanager/11.0/administration/admin-center/security-roles.md#miscellaneous)
section of the
[Security Role – Permissions](/docs/directorymanager/11.0/administration/admin-center/security-roles.md)
topic.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Workflows/Pending

## HTTP Methods

GET.

#### Sample Request Syntax

```
{
    "pageIndex": 1,
    "pageSize": 10,
    "filterCriteria": {
        "operator": "Contains",
        "attribute": "Route.description",
        "value": "UserDefinied",
        "valueType": 0,
        "valueTypes": [
            0
        ],
        "donotEscapeValue": true,
        "child": [
            null
        ]
    },
    "getRecent": true,
    "totalFound": 0,
    "sortOrder": "string"
}
```

#### Sample Response Syntax

```
{
    "total": 2,
    "data": [
        {
            "workflowRequestId": 2,
            "legacyRequestId": null,
            "requesterIdentityStoreID": 2,
            "requester": "e4fbe0f3-8b8d-4cd0-8c4f-07c6f12a4743",
            "requesterClass": 6,
            "targetObjectIdentityStoreID": 2,
            "targetObject": "7ea556f0-b5fc-46f9-96d0-7212c2cd831d",
            "targetObjectClass": 6,
            "actualApproverIdentityStoreID": 0,
            "actualApprover": null,
            "createdOn": "2024-05-14T04:07:08.93",
            "workflowRouteId": 10,
            "statusId": 1,
            "objectName": "Usr_Martha Sevy",
            "container": null,
            "workflowStatusDTO": {
                "statusId": 1,
                "description": "Pending"
            },
            "workflowRouteDTO": {
                "workflowRouteId": 10,
                "identityStoreID": 2,
                "name": "UserDefinied",
                "description": "UserDefinied",
                "isEnabled": true,
                "type": 1,
                "typeDTO": null,
                "event": 2,
                "eventDTO": null,
                "routeFieldDTOList": [
                    {
                        "workflowRouteFieldId": 8,
                        "field": "department",
                        "workflowRouteId": 10
                    }
                ],
                "routeFilterDTOList": [
                    {
                        "workflowRouteFilterId": 1,
                        "name": "department",
                        "operator": "Present",
                        "value": "",
                        "workflowRouteId": 10
                    }
                ],
                "routeApproverDTOList": [
                    {
                        "workflowRouteApproverId": 9,
                        "approver": "80ffbf0d-142c-4822-b843-1840bf50c05a",
                        "approverIdentityStoreID": 2,
                        "workflowRouteId": 10,
                        "approverType": 0,
                        "approverName": null
                    }
                ],
                "routeObjectDTOList": [
                    {
                        "workflowRouteObjectId": 10,
                        "objectTypeId": 2,
                        "workflowRouteId": 10,
                        "objectTypeDTO": null
                    }
                ],
                "enableEmailApproval": false,
                "disableApproverAcceleration": true,
                "portalUrl": "https://gidauto:4443/GroupIDPortal",
                "msFlowRequestUrl": null,
                "msFlowToken": null,
                "isMsFlowTemplateRouteCreated": false,
                "updateMsFlowToken": false
            },
            "requestApproverDTOList": [
                {
                    "workflowRequestApproverId": 0,
                    "approver": "Jonathan Blackwell",
                    "approverIdentityStoreID": 0,
                    "workflowRequestId": 0,
                    "approverType": 0,
                    "approverName": "80ffbf0d-142c-4822-b843-1840bf50c05a",
                    "approverClass": 6,
                    "approverIdFromIdentityStore": null,
                    "isDefaultApprover": false,
                    "parentApproverIdentity": ""
                }
            ],
            "fieldDTOList": [
                {
                    "fieldId": 2,
                    "workflowRequestId": 2,
                    "name": "department",
                    "value": "QA_test",
                    "oldValue": "QA",
                    "valueType": 2,
                    "fieldValueDTOList": [],
                    "oldFieldValueDTOList": [],
                    "fieldValueResolved": null,
                    "oldFieldValueResolved": null
                }
            ],
            "objectType": 2,
            "statusUpdatedOn": "2024-05-14T00:00:00",
            "reason": null,
            "smartUpdateOption": null,
            "jobId": null,
            "description": null,
            "requesterName": "Administrator",
            "actualApproverName": null,
            "schedule": null,
            "accelerationStatus": 4,
            "currentAccelerationLevel": 0,
            "maxAccelerationLevel": 3,
            "whenAccelerated": "2024-05-14T00:00:00",
            "clientId": "442139c9-dba6-4d2b-8c54-a20babae0b2f",
            "workflowRequestConfigurations": ""
        },
        {
            "workflowRequestId": 1,
            "legacyRequestId": null,
            "requesterIdentityStoreID": 2,
            "requester": "376cf368-8fdb-4a6e-8cbc-c2f679815f55",
            "requesterClass": 6,
            "targetObjectIdentityStoreID": 2,
            "targetObject": "b6eb66b7-81d8-4fa5-a6f9-3707ad52076e",
            "targetObjectClass": 6,
            "actualApproverIdentityStoreID": 0,
            "actualApprover": null,
            "createdOn": "2024-05-14T04:02:28.89",
            "workflowRouteId": 10,
            "statusId": 1,
            "objectName": "Usr_Malik Schuld",
            "container": null,
            "workflowStatusDTO": {
                "statusId": 1,
                "description": "Pending"
            },
            "workflowRouteDTO": {
                "workflowRouteId": 10,
                "identityStoreID": 2,
                "name": "UserDefinied",
                "description": "UserDefinied",
                "isEnabled": true,
                "type": 1,
                "typeDTO": null,
                "event": 2,
                "eventDTO": null,
                "routeFieldDTOList": [
                    {
                        "workflowRouteFieldId": 8,
                        "field": "department",
                        "workflowRouteId": 10
                    }
                ],
                "routeFilterDTOList": [
                    {
                        "workflowRouteFilterId": 1,
                        "name": "department",
                        "operator": "Present",
                        "value": "",
                        "workflowRouteId": 10
                    }
                ],
                "routeApproverDTOList": [
                    {
                        "workflowRouteApproverId": 9,
                        "approver": "80ffbf0d-142c-4822-b843-1840bf50c05a",
                        "approverIdentityStoreID": 2,
                        "workflowRouteId": 10,
                        "approverType": 0,
                        "approverName": null
                    }
                ],
                "routeObjectDTOList": [
                    {
                        "workflowRouteObjectId": 10,
                        "objectTypeId": 2,
                        "workflowRouteId": 10,
                        "objectTypeDTO": null
                    }
                ],
                "enableEmailApproval": false,
                "disableApproverAcceleration": true,
                "portalUrl": "https://gidauto:4443/GroupIDPortal",
                "msFlowRequestUrl": null,
                "msFlowToken": null,
                "isMsFlowTemplateRouteCreated": false,
                "updateMsFlowToken": false
            },
            "requestApproverDTOList": [
                {
                    "workflowRequestApproverId": 0,
                    "approver": "Administrator",
                    "approverIdentityStoreID": 0,
                    "workflowRequestId": 0,
                    "approverType": 0,
                    "approverName": "e4fbe0f3-8b8d-4cd0-8c4f-07c6f12a4743",
                    "approverClass": 6,
                    "approverIdFromIdentityStore": null,
                    "isDefaultApprover": false,
                    "parentApproverIdentity": ""
                }
            ],
            "fieldDTOList": [
                {
                    "fieldId": 1,
                    "workflowRequestId": 1,
                    "name": "department",
                    "value": "TestDataNew",
                    "oldValue": "TestData",
                    "valueType": 2,
                    "fieldValueDTOList": [],
                    "oldFieldValueDTOList": [],
                    "fieldValueResolved": null,
                    "oldFieldValueResolved": null
                }
            ],
            "objectType": 2,
            "statusUpdatedOn": "2024-05-14T00:00:00",
            "reason": null,
            "smartUpdateOption": null,
            "jobId": null,
            "description": null,
            "requesterName": "Shah Elahi",
            "actualApproverName": null,
            "schedule": null,
            "accelerationStatus": 4,
            "currentAccelerationLevel": 0,
            "maxAccelerationLevel": 3,
            "whenAccelerated": "2024-05-14T00:00:00",
            "clientId": "442139c9-dba6-4d2b-8c54-a20babae0b2f",
            "workflowRequestConfigurations": ""
        }
    ]
}   
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Workflow APIs](#workflow-apis)

## Get Power Automate Settings

If in GroupID you have linked an identity store to Power Automate, you can retrieve the Power
Automate setting using this API.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/MsFlow/Settings

## HTTP Methods

GET

#### Sample Response Syntax

```
{
    "msFlowID": 1,
    "msFlowUserID": "69d41d70-9b80-492d-aee8-56458db65582",
    "groupIDServiceUrl": "https://powerautomate-netwrix1.msappproxy.net/directorymanagerdataservice",
    "identityStoreID": 2,
    "isAuthenticated": false,
    "organizationalCode": "Netwrix",
    "region": "US",
    "tenantID": "69d41d70-9b80-492d-aee8-56458db65582"
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Workflow APIs](#workflow-apis)

## Get Workflow Requests

Using this API you can retrieve information about a workflow request ID(s) of which are specified in
the end point URL.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Workflows?ids=1

## HTTP Methods

GET

#### Sample Response Syntax

```
[
    {
        "workflowRequestId": 1,
        "legacyRequestId": null,
        "requesterIdentityStoreID": 2,
        "requester": "376cf368-8fdb-4a6e-8cbc-c2f679815f55",
        "requesterClass": 0,
        "targetObjectIdentityStoreID": 2,
        "targetObject": "b6eb66b7-81d8-4fa5-a6f9-3707ad52076e",
        "targetObjectClass": 0,
        "actualApproverIdentityStoreID": 0,
        "actualApprover": null,
        "createdOn": "2024-05-14T04:02:28.89",
        "workflowRouteId": 10,
        "statusId": 1,
        "objectName": "Usr_Malik Schuld",
        "container": null,
        "workflowStatusDTO": {
            "statusId": 1,
            "description": "Pending"
        },
        "workflowRouteDTO": {
            "workflowRouteId": 10,
            "identityStoreID": 2,
            "name": "UserDefinied",
            "description": "UserDefinied",
            "isEnabled": true,
            "type": 1,
            "typeDTO": null,
            "event": 2,
            "eventDTO": null,
            "routeFieldDTOList": null,
            "routeFilterDTOList": null,
            "routeApproverDTOList": null,
            "routeObjectDTOList": null,
            "enableEmailApproval": false,
            "disableApproverAcceleration": true,
            "portalUrl": "https://gidauto:4443/GroupIDPortal",
            "msFlowRequestUrl": null,
            "msFlowToken": null,
            "isMsFlowTemplateRouteCreated": false,
            "updateMsFlowToken": false
        },
        "requestApproverDTOList": [
            {
                "workflowRequestApproverId": 0,
                "approver": "Administrator",
                "approverIdentityStoreID": 0,
                "workflowRequestId": 0,
                "approverType": 0,
                "approverName": "e4fbe0f3-8b8d-4cd0-8c4f-07c6f12a4743",
                "approverClass": 6,
                "approverIdFromIdentityStore": null,
                "isDefaultApprover": false,
                "parentApproverIdentity": ""
            }
        ],
        "fieldDTOList": [
            {
                "fieldId": 1,
                "workflowRequestId": 1,
                "name": "department",
                "value": "TestDataNew",
                "oldValue": "TestData",
                "valueType": 2,
                "fieldValueDTOList": [],
                "oldFieldValueDTOList": [],
                "fieldValueResolved": null,
                "oldFieldValueResolved": null
            }
        ],
        "objectType": 2,
        "statusUpdatedOn": "2024-05-14T00:00:00",
        "reason": null,
        "smartUpdateOption": null,
        "jobId": null,
        "description": null,
        "requesterName": "Shah Elahi",
        "actualApproverName": null,
        "schedule": null,
        "accelerationStatus": 4,
        "currentAccelerationLevel": 0,
        "maxAccelerationLevel": 3,
        "whenAccelerated": "2024-05-14T00:00:00",
        "clientId": "442139c9-dba6-4d2b-8c54-a20babae0b2f",
        "workflowRequestConfigurations": ""
    }
]   
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Workflow APIs](#workflow-apis)

## Get a Workflow Route

Use this API to get workflow route id of which is specidied in the end point URL.

Change filename . add Get

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Routes/{WorkflowRouteID}

## HTTP Methods

GET

#### Sample Response Syntax

```
{
    "workflowRouteId": 10,
    "identityStoreID": 2,
    "name": "UserDefinied",
    "description": "UserDefinied",
    "isEnabled": true,
    "type": 1,
    "typeDTO": null,
    "event": 2,
    "eventDTO": null,
    "routeFieldDTOList": [
        {
            "workflowRouteFieldId": 8,
            "field": "department",
            "workflowRouteId": 10
        }
    ],
    "routeFilterDTOList": [
        {
            "workflowRouteFilterId": 1,
            "name": "department",
            "operator": "Present",
            "value": "",
            "workflowRouteId": 10
        }
    ],
    "routeApproverDTOList": [
        {
            "workflowRouteApproverId": 9,
            "approver": "80ffbf0d-142c-4822-b843-1840bf50c05a",
            "approverIdentityStoreID": 2,
            "workflowRouteId": 10,
            "approverType": 0,
            "approverName": null
        }
    ],
    "routeObjectDTOList": [
        {
            "workflowRouteObjectId": 10,
            "objectTypeId": 2,
            "workflowRouteId": 10,
            "objectTypeDTO": null
        }
    ],
    "enableEmailApproval": false,
    "disableApproverAcceleration": true,
    "portalUrl": "https://gidauto:4443/GroupIDPortal",
    "msFlowRequestUrl": null,
    "msFlowToken": null,
    "isMsFlowTemplateRouteCreated": false,
    "updateMsFlowToken": false
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Workflow APIs](#workflow-apis)

## Update Power Automate Settings

If you have defined Power-Automate settings for an identity store, you can use this API to update
those settings.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/MsFlow/Settings

## HTTP Methods

PATCH

#### Sample Request Syntax

```
{
    "msFlowID": 1,
    "msFlowUserID": "69d41d70-9b80-492d-aee8-56458db65582",
    "groupIDServiceUrl": "https://powerautomate-netwrix1.msappproxy.net/directorymanagerdataservice",
    "identityStoreID": 2,
    "isAuthenticated": true,
    "organizationalCode": "Netwrix-US",
    "region": "US",
    "tenantID": "69d41d70-9b80-492d-aee8-56458db65582"
}
```

#### Sample Response Syntax

```
true
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Workflow APIs](#workflow-apis)

## Update a Route

You can use this API to update a workflow route in a specified identity store.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Workflows/Route

## HTTP Methods

PATCH

#### Sample Request Syntax

```
{
    "items": [
        {
            "workflowRouteId": 13,
            "identityStoreID": 0,
            "name": "API_Definied",
            "description": "API_Definied",
            "isEnabled": true,
            "type": 1,
            "typeDTO": null,
            "event": 2,
            "eventDTO": null,
            "routeFieldDTOList": [
                {
                    "workflowRouteFieldId": 11,
                    "field": "department",
                    "workflowRouteId": 13
                }
            ],
            "routeFilterDTOList": [
                {
                    "workflowRouteFilterId": 4,
                    "name": "department",
                    "operator": "Present",
                    "value": "",
                    "workflowRouteId": 13
                }
            ],
            "routeApproverDTOList": [
                {
                    "workflowRouteApproverId": 12,
                    "approver": "80ffbf0d-142c-4822-b843-1840bf50c05a",
                    "approverIdentityStoreID": 2,
                    "workflowRouteId": 13,
                    "approverType": 0,
                    "approverName": null
                }
            ],
            "routeObjectDTOList": [
                {
                    "workflowRouteObjectId": 13,
                    "objectTypeId": 2,
                    "workflowRouteId": 13,
                    "objectTypeDTO": null
                }
            ],
            "enableEmailApproval": true,
            "disableApproverAcceleration": true,
            "portalUrl": "https://gidauto:4443/GroupIDPortal",
            "msFlowRequestUrl": null,
            "msFlowToken": null,
            "isMsFlowTemplateRouteCreated": false,
            "updateMsFlowToken": false
        }
    ]
}
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 0,
    "status": 0,
    "message": null,
    "data": "",
    "identityStoreObject": null,
    "details": [
        {
            "name": null,
            "type": 0,
            "status": 0,
            "message": null,
            "data": "",
            "identityStoreObject": null,
            "details": [],
            "currentDirectoryServer": null,
            "errorCode": null,
            "exceptionMessagesAttributeWise": null,
            "isResyncAble": true
        }
    ],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Workflow APIs](#workflow-apis)

## Workflow APIs

GroupID provides the following APIs to perform functions related to GroupID Workflows:

- [All Workflow Routes](#all-workflow-routes)
- [Approve a Request](#approve-a-request)
- [Configure Power Automate](#configure-power-automate)
- [Create a Route](#create-a-route)
- [Delete a Route](#delete-a-route)
- [Delete a Workflow Request](#delete-a-workflow-request)
- [Delete Request Status](#delete-request-status)
- [Deny a Request](#deny-a-request)
- [Get a Workflow Route](#get-a-workflow-route)
- [Get Approvers](#get-approvers)
- [Get Default Routes](#get-default-routes)
- [Get My Requests](#get-my-requests)
- [Get Pending Requests](#get-pending-requests)
- [Get Power Automate Settings](#get-power-automate-settings)
- [Get Workflow Requests](#get-workflow-requests)
- [Update a Route](#update-a-route)
- [Update Power Automate Settings](#update-power-automate-settings)

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Get Token](/docs/directorymanager/11.0/automation/apis/index.md)
- [Contact APIs](#contact-apis)
- [Data Source APIs](#data-source-apis)
- [Group APIs](#group-apis)
- [Logs APIs](#logs-apis)
- [Synchronize Jobs APIs](#synchronize-jobs-apis)
- [User APIs](#user-apis)

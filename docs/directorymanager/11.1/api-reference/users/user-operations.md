---
title: user operations
sidebar_label: user-operations
description: Directory Manager 11.1 documentation for user operations with configuration details, usage instructions, and implementation guidance.
---

# Create a User

This API creates a user in the identity store specified in the endpoint URL. Provide mandatory
information for the to be created user in the request syntax such as container in which user will be
created, given name, display name and so on.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users

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

# Create an Entra ID User

Use this API to create a user in a Microsoft Entra ID based identity store.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users

## HTTP Methods

POST

#### Sample Request Syntax

```
{
    "Container": "DC=5cjshm,DC=onmicrosoft,DC=com",
    "Attributes": {
        "AttributesCollection": {
            "givenname": [
                {
                    "IdentityStoreId": 0,
                    "Value": "Conway",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "surname": [
                {
                    "IdentityStoreId": 0,
                    "Value": "Latham",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "displayname": [
                {
                    "IdentityStoreId": 0,
                    "Value": "Conway,Latham",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "LogonName": [
                {
                    "IdentityStoreId": 0,
                    "Value": "lathamconway",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "UPNSuffix": [
                {
                    "IdentityStoreId": 0,
                    "Value": "5cjshm.onmicrosoft.com",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "Password": [
                {
                    "IdentityStoreId": 0,
                    "Value": "password123",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "PasswordForceChange": [
                {
                    "IdentityStoreId": 0,
                    "Value": "false",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "accountenabled": [
                {
                    "IdentityStoreId": 0,
                    "Value": "true",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "directoryrole": [
                {
                    "IdentityStoreId": 0,
                    "Value": "User",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {
                        "id": "a0b1b346-4d3e-4e8b-98f8-753987be4970"
                    },
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "userprincipalname": [
                {
                    "IdentityStoreId": 0,
                    "Value": "lathamconway",
                    "DN": null,
                    "Action": 0,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "mailnickname": [
                {
                    "IdentityStoreId": 0,
                    "Value": "",
                    "DN": null,
                    "Action": 0,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "objecttype": [
                {
                    "IdentityStoreId": 0,
                    "Value": "user",
                    "DN": null,
                    "Action": 0,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "objectclass": [
                {
                    "IdentityStoreId": 0,
                    "Value": "1",
                    "DN": null,
                    "Action": 0,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ],
            "ContainerDistinguishedName": [
                {
                    "IdentityStoreId": 0,
                    "Value": "DC=5cjshm,DC=onmicrosoft,DC=com",
                    "DN": null,
                    "Action": 1,
                    "AttributeCollection": {},
                    "NestedAttributes": {
                        "AttributesCollection": {},
                        "FilePermissionCollection": {},
                        "Type": null
                    }
                }
            ]
        },
        "FilePermissionCollection": {},
        "Type": null
    },
    "ObjectIdentity": "",
    "IdentityStoreID": 3,
    "IdentityStoreMode": 0
}
```

#### Sample Response Syntax

```
{
  "name": null,
  "type": 6,
  "status": 0,
  "message": null,
  "data": "a7d65335-0164-4545-a093-080fd52ae870",
  "identityStoreObject": null,
  "details": [],
  "currentDirectoryServer": null,
  "errorCode": null,
  "exceptionMessagesAttributeWise": {},
  "isResyncAble": true
}
```

# Delete a User

Using this API, you can delete a single user.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}

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

# Delete Users

This API deletes multiple users from the identity store given in the endpoint URL.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users

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

# Get All Groups

Use this API to retrieve all groups in the directory for the specified user in the endpoint.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/All?sortOrder=1&pageNo=1&pageSize=2&displayNestedOwnership=true&displayAdditionalGroups=true&calculateTotal=true&searchMode=0

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

# Get My Dynasties

Use this API to retrieve the dynasties of the authenticated user.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/Dynasties?sortOrder=1&pageNo=1&pageSize=2&displayNestedOwnership=true&displayAdditionalGroups=true&calculateTotal=true&searchMode=0

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

# Get My Expired Groups

This API retrieves the expired groups of the authenticated user.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/Expired?sortOrder=1&pageNo=1&pageSize=2&displayNestedOwnership=true&displayAdditionalGroups=true&calculateTotal=true&searchMode=0

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
              "value": "Expired_demogroup1",
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
      "objectIdFromIdentityStore": "4ba9f608-8011-4a1d-80eb-777d605ac19e",
      "elasticHitScore": 1.0,
      "objectDisplayName": "Expired_demogroup1",
      "stopNotification": false,
      "objectName": null,
      "identityStore": null,
      "identityStoreId": 2,
      "objectType": "group"
    }
  ]
}
```

# Get My Expiring Groups

Use this API to retrieve the expiring groups of the authenticated user.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/Expiring?sortOrder=1&pageNo=1&pageSize=1&displayNestedOwnership=true&displayAdditionalGroups=true&calculateTotal=true&searchMode=0

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
      "objectIdFromIdentityStore": "22409d19-f89c-4c13-81cc-131a212044a7",
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

# Get My Expiring Groups Count

This API retrieves the number of expiring groups of the authenticate user.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/Expiring/count?includeAdditionalOwnershipGroups=true&includeNestedOwnershipGroups=true&searchMode=0

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
  "count": 1
}
```

# Get My Groups

The Get My Groups API retrieves groups of the authenticated user.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups?sortOrder=1&pageNo=1&pageSize=2&displayNestedOwnership=false&displayAdditionalGroups=false&calculateTotal=true&searchMode=0&isManagedBy=false

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

# Get My Groups Count

This API retrieves the number of groups of the authenticated user.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/count?sortOrder=1&pageNo=1&pageSize=2&displayNestedOwnership=false&displayAdditionalGroups=false&calculateTotal=true&searchMode=0&isManagedBy=false

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

# Get My Membership

Use this API to retrieve membership information of the authenticated user.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/Membership?sortOrder=1&pageNo=1&pageSize=8&displayAdditionalGroups=true&calculateTotal=true&searchMode=0

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

# Get My Membership Count

Using this API, the authenticated user can get the number of groups the user is a member of.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/Membership/count?sortOrder=1&pageNo=1&pageSize=8&displayAdditionalGroups=true&calculateTotal=true&searchMode=0

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

# Get My Smart Groups

Using this API, information about the authentiacated user's Smart Groups can be retrieved.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/SmartGroups?sortOrder=1&pageNo=1&pageSize=2&displayNestedOwnership=true&displayAdditionalGroups=true&calculateTotal=true&searchMode=0

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

# Get a User

Use this API to get information of a single user.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Users/{userIdentity}

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

# Get Users

Use this API to retrieve information of multiple users from the specified identity store.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Users

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

# Update a User

This API updates a user's information in the specified identity store.

## Endpoint

https://machinename:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users

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
